const contentService = require('../services/content.service');
const { sendSuccess } = require('../utils/response');

async function handleGetProjects(req, res, next) {
  try {
    const data = await contentService.getProjectsList();
    return sendSuccess(res, data, 'Projects retrieved');
  } catch (err) {
    next(err);
  }
}

async function handleGetServices(req, res, next) {
  try {
    const data = await contentService.getServicesList();
    return sendSuccess(res, data, 'Services retrieved');
  } catch (err) {
    next(err);
  }
}

async function handleGetTestimonials(req, res, next) {
  try {
    const data = await contentService.getTestimonialsList();
    return sendSuccess(res, data, 'Testimonials retrieved');
  } catch (err) {
    next(err);
  }
}

async function handleGetProducts(req, res, next) {
  try {
    const data = await contentService.getProductsList();
    return sendSuccess(res, data, 'Products retrieved');
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handleGetProjects,
  handleGetServices,
  handleGetTestimonials,
  handleGetProducts,
};
