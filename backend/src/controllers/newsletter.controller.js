const newsletterService = require('../services/newsletter.service');
const { sendSuccess } = require('../utils/response');

async function handleSubscribe(req, res, next) {
  try {
    const result = await newsletterService.subscribeEmail(req.body.email);
    return sendSuccess(
      res,
      result,
      'Thank you for subscribing to Strains Group updates',
      201
    );
  } catch (err) {
    next(err);
  }
}

async function handleListSubscribers(req, res, next) {
  try {
    const results = await newsletterService.listSubscribers();
    return sendSuccess(res, results, 'Newsletter subscribers retrieved');
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handleSubscribe,
  handleListSubscribers,
};
