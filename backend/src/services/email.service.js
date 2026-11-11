const nodemailer = require('nodemailer');
const path = require('path');
const config = require('../config/env');

// ─────────────────────────────────────────────────────────────────────────────
// Logo & Emblem Asset Paths
// • strains-emblem-emerald.png : 512×512 vibrant #00a859 emblem on 100% transparent background
// • strains-watermark.png      : 512×512 delicate pre-multiplied alpha watermark (no box edges)
// ─────────────────────────────────────────────────────────────────────────────
const EMBLEM_PATH = path.resolve(__dirname, '../assets/strains-emblem-emerald.png');
const WATERMARK_PATH = path.resolve(__dirname, '../assets/strains-watermark.png');

const EMBLEM_CID = 'strains-emblem@strainsassociates';
const WATERMARK_CID = 'strains-watermark@strainsassociates';
const EMBLEM_URL_FALLBACK = 'https://strains.in/assets/strainsassociates-CfG1A0jo.webp';

// ─────────────────────────────────────────────────────────────────────────────
// Singleton Nodemailer Transporter
// ─────────────────────────────────────────────────────────────────────────────
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,          // true for 465, false for 587
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
    pool: true,                           // reuse TCP connections
    maxConnections: 3,
    maxMessages: 50,
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
    tls: {
      rejectUnauthorized: config.nodeEnv === 'production',
    },
  });

  return transporter;
}

function shouldSkipEmailSend() {
  const currentEnv = process.env.NODE_ENV || config.nodeEnv;
  if (currentEnv === 'test' && process.env.FORCE_SMTP_IN_TEST !== 'true') {
    return true;
  }
  return !config.smtp.user || !config.smtp.pass;
}

function closeTransporter() {
  if (transporter) {
    transporter.close();
    transporter = null;
  }
}

/**
 * Verify SMTP connection at server boot.
 */
async function verifySmtp() {
  try {
    await getTransporter().verify();
    console.log('✅  SMTP connection verified successfully');
    return true;
  } catch (err) {
    console.warn('⚠️  SMTP verification failed – emails will NOT be sent:', err.message);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML Email Builder Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Escape HTML entities to prevent injection in email templates.
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Common attachments array for Nodemailer sends.
 */
function getEmailAttachments() {
  return [
    {
      filename: 'strains-emblem.png',
      path: EMBLEM_PATH,
      cid: EMBLEM_CID,
      contentDisposition: 'inline',
    },
    {
      filename: 'strains-watermark.png',
      path: WATERMARK_PATH,
      cid: WATERMARK_CID,
      contentDisposition: 'inline',
    },
  ];
}

/**
 * Build the HTML email sent TO the business (reelcravings@gmail.com)
 */
function buildAdminNotificationHtml({ name, email, phone, company, message }) {
  const safeN = escapeHtml(name);
  const safeE = escapeHtml(email);
  const safeP = escapeHtml(phone);
  const safeC = escapeHtml(company);
  const safeM = escapeHtml(message).replace(/\n/g, '<br/>');

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>New Client Inquiry – Strains Associates</title>
</head>
<body style="margin:0;padding:0;background-color:#080808;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080808;padding:48px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background-color:#111111;border-radius:18px;overflow:hidden;border:1px solid #222222;box-shadow:0 24px 64px rgba(0,0,0,0.7);">

          <!-- Top 3px Radiant Emerald Bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#00a859 0%,#00e57a 50%,#00a859 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header: Luxury Dark with Emblem Lockup -->
          <tr>
            <td style="padding:34px 44px 26px;background-color:#111111;border-bottom:1px solid #1f1f1f;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Brand Lockup -->
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:14px;">
                          <a href="https://strains.in" target="_blank" style="text-decoration:none;display:block;">
                            <img src="cid:${EMBLEM_CID}" alt="Strains Associates"
                                 width="42" height="42"
                                 style="display:block;width:42px;height:42px;object-fit:contain;border:0;outline:none;"
                                 onerror="this.src='${EMBLEM_URL_FALLBACK}'" />
                          </a>
                        </td>
                        <td style="vertical-align:middle;">
                          <a href="https://strains.in" target="_blank"
                             style="font-size:20px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:1px;line-height:1;display:block;">
                            STRAINS ASSOCIATES
                          </a>
                          <span style="font-size:10px;font-weight:700;color:#00a859;letter-spacing:2.5px;text-transform:uppercase;margin-top:5px;display:block;">
                            Fashion · Production · Creative Direction
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <!-- Micro Status Badge -->
                    <span style="display:inline-block;background-color:rgba(0,168,89,0.12);border:1px solid rgba(0,168,89,0.35);border-radius:100px;padding:6px 14px;font-size:10px;font-weight:700;color:#00e57a;letter-spacing:1.2px;text-transform:uppercase;">
                      ● Inbound Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body with Watermark -->
          <tr>
            <td background="cid:${WATERMARK_CID}"
                style="padding:36px 44px;background-color:#141414;background-image:url('cid:${WATERMARK_CID}');background-repeat:no-repeat;background-position:center center;background-size:360px auto;">

              <!-- Title -->
              <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.4px;">
                New Inquiry Received
              </h2>
              <p style="margin:0 0 28px;font-size:13px;color:#888888;font-weight:400;">
                Submitted via website contact form on <span style="color:#b5b5b5;">${submittedAt}</span>
              </p>

              <!-- Data Fields Table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                     style="background-color:rgba(18,18,18,0.85);border:1px solid #242424;border-radius:12px;overflow:hidden;margin-bottom:28px;">

                <!-- Name -->
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #202020;">
                    <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#00a859;font-weight:700;">
                      Client Name
                    </p>
                    <p style="margin:0;font-size:16px;color:#ffffff;font-weight:600;">
                      ${safeN}
                    </p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #202020;">
                    <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#00a859;font-weight:700;">
                      Email Address
                    </p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">
                      <a href="mailto:${safeE}" style="color:#00e57a;text-decoration:none;font-weight:500;">${safeE}</a>
                    </p>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #202020;">
                    <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#00a859;font-weight:700;">
                      Phone Number
                    </p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">
                      <a href="tel:${safeP}" style="color:#4da6ff;text-decoration:none;font-weight:500;">${safeP || '—'}</a>
                    </p>
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #202020;">
                    <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#00a859;font-weight:700;">
                      Brand / Organization
                    </p>
                    <p style="margin:0;font-size:15px;color:#ffffff;font-weight:500;">
                      ${safeC || '<span style="color:#666666;">Not specified</span>'}
                    </p>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 8px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#00a859;font-weight:700;">
                      Message / Project Brief
                    </p>
                    <div style="background-color:#0d0d0d;border-left:3px solid #00a859;border-radius:6px;padding:14px 18px;margin:0;">
                      <p style="margin:0;font-size:14px;line-height:1.7;color:#e0e0e0;">
                        ${safeM || '<span style="color:#666666;">No additional details provided</span>'}
                      </p>
                    </div>
                  </td>
                </tr>

              </table>

              <!-- Reply CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeE}?subject=Re: Your Inquiry to Strains Associates"
                       style="display:inline-block;background:linear-gradient(135deg,#00a859 0%,#008746 100%);color:#ffffff;font-size:14px;font-weight:700;
                              text-decoration:none;padding:14px 38px;border-radius:100px;letter-spacing:0.4px;box-shadow:0 8px 24px rgba(0,168,89,0.35);">
                      Reply directly to ${safeN} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d0d0d;padding:28px 44px;border-top:1px solid #202020;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:14px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:10px;">
                          <a href="https://strains.in" target="_blank" style="text-decoration:none;display:block;">
                            <img src="cid:${EMBLEM_CID}" alt="Strains Associates"
                                 width="24" height="24"
                                 style="display:block;width:24px;height:24px;object-fit:contain;border:0;outline:none;"
                                 onerror="this.src='${EMBLEM_URL_FALLBACK}'" />
                          </a>
                        </td>
                        <td style="vertical-align:middle;">
                          <a href="https://strains.in" target="_blank"
                             style="font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.8px;">
                            STRAINS ASSOCIATES
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0 0 6px;font-size:11px;color:#666666;text-align:center;line-height:1.6;">
                      Automated dispatch from <a href="https://strains.in" target="_blank" style="color:#888888;text-decoration:none;">strains.in</a>
                    </p>
                    <p style="margin:0;font-size:11px;color:#444444;text-align:center;line-height:1.6;">
                      © ${new Date().getFullYear()} Strains Associates. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Build the HTML confirmation email sent TO the visitor
 */
function buildVisitorConfirmationHtml({ name }) {
  const safeName = escapeHtml(name);
  const firstName = safeName.split(' ')[0];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Inquiry Confirmed – Strains Associates</title>
</head>
<body style="margin:0;padding:0;background-color:#080808;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080808;padding:48px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background-color:#111111;border-radius:18px;overflow:hidden;border:1px solid #222222;box-shadow:0 24px 64px rgba(0,0,0,0.7);">

          <!-- Top 3px Radiant Emerald Bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#00a859 0%,#00e57a 50%,#00a859 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header: Luxury Dark with Emblem Lockup -->
          <tr>
            <td style="padding:34px 44px 26px;background-color:#111111;border-bottom:1px solid #1f1f1f;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Brand Lockup -->
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:14px;">
                          <a href="https://strains.in" target="_blank" style="text-decoration:none;display:block;">
                            <img src="cid:${EMBLEM_CID}" alt="Strains Associates"
                                 width="42" height="42"
                                 style="display:block;width:42px;height:42px;object-fit:contain;border:0;outline:none;"
                                 onerror="this.src='${EMBLEM_URL_FALLBACK}'" />
                          </a>
                        </td>
                        <td style="vertical-align:middle;">
                          <a href="https://strains.in" target="_blank"
                             style="font-size:20px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:1px;line-height:1;display:block;">
                            STRAINS ASSOCIATES
                          </a>
                          <span style="font-size:10px;font-weight:700;color:#00a859;letter-spacing:2.5px;text-transform:uppercase;margin-top:5px;display:block;">
                            Fashion · Production · Creative Direction
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <!-- Micro Status Badge -->
                    <span style="display:inline-block;background-color:rgba(0,168,89,0.12);border:1px solid rgba(0,168,89,0.35);border-radius:100px;padding:6px 14px;font-size:10px;font-weight:700;color:#00e57a;letter-spacing:1.2px;text-transform:uppercase;">
                      ✓ Received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body with Delicate Watermark Background -->
          <tr>
            <td background="cid:${WATERMARK_CID}"
                style="padding:38px 44px 34px;background-color:#141414;background-image:url('cid:${WATERMARK_CID}');background-repeat:no-repeat;background-position:center center;background-size:360px auto;">

              <h2 style="margin:0 0 14px;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.4px;">
                Hey ${firstName} 👋
              </h2>

              <p style="margin:0 0 24px;font-size:15px;line-height:1.75;color:#c0c0c0;">
                Thank you for reaching out to <strong style="color:#ffffff;">Strains Associates</strong>. We have received your inquiry and our creative directors &amp; production leads are reviewing your brief.
              </p>

              <!-- Luxury Information Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                     style="background-color:rgba(18,18,18,0.9);border:1px solid #242424;border-left:3px solid #00a859;border-radius:10px;overflow:hidden;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 22px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:10px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#888888;font-weight:700;display:block;margin-bottom:3px;">
                            Expected Turnaround
                          </span>
                          <span style="font-size:14px;color:#ffffff;font-weight:600;">
                            🟢 Within 24 hours on business days
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:10px;border-top:1px solid #202020;padding-top:10px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#888888;font-weight:700;display:block;margin-bottom:3px;">
                            Priority Inquiries
                          </span>
                          <a href="mailto:hello@strainsassociates.com" style="font-size:14px;color:#00e57a;text-decoration:none;font-weight:600;">
                            hello@strainsassociates.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="border-top:1px solid #202020;padding-top:10px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#888888;font-weight:700;display:block;margin-bottom:3px;">
                            Services Covered
                          </span>
                          <span style="font-size:13px;color:#b5b5b5;">
                            Apparel Manufacturing · Private Label · Brand Design · Film &amp; Media
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 28px;font-size:14px;line-height:1.75;color:#9e9e9e;">
                While we prepare your response, you can explore our portfolio, lookbooks, and manufacturing ecosystem on our official platform.
              </p>

              <!-- Explore Platform CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://strains.in" target="_blank"
                       style="display:inline-block;background:linear-gradient(135deg,#00a859 0%,#008746 100%);color:#ffffff;font-size:13px;font-weight:700;
                              text-decoration:none;padding:13px 36px;border-radius:100px;letter-spacing:0.5px;box-shadow:0 8px 24px rgba(0,168,89,0.35);">
                      Explore Strains Associates →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d0d0d;padding:28px 44px;border-top:1px solid #202020;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:14px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:10px;">
                          <a href="https://strains.in" target="_blank" style="text-decoration:none;display:block;">
                            <img src="cid:${EMBLEM_CID}" alt="Strains Associates"
                                 width="24" height="24"
                                 style="display:block;width:24px;height:24px;object-fit:contain;border:0;outline:none;"
                                 onerror="this.src='${EMBLEM_URL_FALLBACK}'" />
                          </a>
                        </td>
                        <td style="vertical-align:middle;">
                          <a href="https://strains.in" target="_blank"
                             style="font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.8px;">
                            STRAINS ASSOCIATES
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0 0 6px;font-size:11px;color:#666666;text-align:center;line-height:1.6;">
                      This is an automated confirmation. Please do not reply directly to this email.
                    </p>
                    <p style="margin:0;font-size:11px;color:#444444;text-align:center;line-height:1.6;">
                      © ${new Date().getFullYear()} Strains Associates. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Public Send Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Send the admin notification email to the business inbox.
 */
async function sendAdminNotification(formData) {
  if (shouldSkipEmailSend()) {
    return { skipped: true };
  }
  const html = buildAdminNotificationHtml(formData);

  const info = await getTransporter().sendMail({
    from: `"Strains Associates" <${config.smtp.user}>`,
    to: config.smtp.recipientEmail,
    replyTo: formData.email,
    subject: `🔔 New Inquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`,
    html,
    text: `New contact form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || '—'}\nCompany: ${formData.company || '—'}\nMessage:\n${formData.message || '—'}`,
    attachments: getEmailAttachments(),
  });

  console.log(`📧  Admin notification sent – messageId: ${info.messageId}`);
  return info;
}

/**
 * Send a confirmation email to the visitor.
 */
async function sendVisitorConfirmation(formData) {
  if (shouldSkipEmailSend()) {
    return { skipped: true };
  }
  const html = buildVisitorConfirmationHtml(formData);

  const info = await getTransporter().sendMail({
    from: `"Strains Associates" <${config.smtp.user}>`,
    to: formData.email,
    subject: `✅ We've received your inquiry, ${formData.name.split(' ')[0]}!`,
    html,
    text: `Hi ${formData.name},\n\nThank you for contacting Strains Associates. We have received your inquiry and will get back to you within 24 hours.\n\nBest regards,\nStrains Associates Team`,
    attachments: getEmailAttachments(),
  });

  console.log(`📧  Visitor confirmation sent to ${formData.email} – messageId: ${info.messageId}`);
  return info;
}

module.exports = {
  verifySmtp,
  sendAdminNotification,
  sendVisitorConfirmation,
  closeTransporter,
};
