const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsDir = path.join(__dirname, '..', 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fontUrl = 'https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Bowlby+One+SC&family=Inter+Tight:ital,wght@0,300..900;1,300..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap';

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, headers).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to load ${url}, status: ${res.statusCode}`));
      }
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching Google Fonts stylesheet...');
  // Request with a modern Chrome user-agent to get woff2
  const cssBuffer = await fetchUrl(fontUrl, {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  let cssText = cssBuffer.toString('utf8');

  // Find all url(...) in the cssText
  const urlRegex = /url\((https:\/\/[^)]+\.woff2)\)/g;
  let match;
  const urls = [];
  while ((match = urlRegex.exec(cssText)) !== null) {
    urls.push(match[1]);
  }

  console.log(`Found ${urls.length} font files to download.`);
  let index = 0;
  for (const url of urls) {
    const filename = `font-${index}-${path.basename(url)}`;
    const filePath = path.join(fontsDir, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`Downloading (${index + 1}/${urls.length}): ${filename}`);
      try {
        const fontBuffer = await fetchUrl(url);
        fs.writeFileSync(filePath, fontBuffer);
      } catch (err) {
        console.error(`Failed to download ${url}:`, err.message);
      }
    }
    // Replace URL in cssText with local path
    cssText = cssText.split(url).join(`/fonts/${filename}`);
    index++;
  }

  // Write local fonts.css
  const outCssPath = path.join(fontsDir, 'fonts.css');
  fs.writeFileSync(outCssPath, cssText, 'utf8');
  console.log(`Successfully generated local fonts.css at ${outCssPath}!`);
}

run().catch((err) => {
  console.error('Font download error:', err);
  process.exit(1);
});

