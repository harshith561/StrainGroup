const contactService = require('../services/contact.service');
const { sendSuccess, sendError } = require('../utils/response');

async function handleCreateContact(req, res, next) {
  try {
    const result = await contactService.createContactSubmission(req.body);
    return sendSuccess(
      res,
      result,
      'Your inquiry has been transmitted to Strains Group successfully',
      201
    );
  } catch (err) {
    next(err);
  }
}

async function handleListContacts(req, res, next) {
  try {
    const results = await contactService.listContactSubmissions();
    return sendSuccess(res, results, 'Contact submissions retrieved');
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handleCreateContact,
  handleListContacts,
};
