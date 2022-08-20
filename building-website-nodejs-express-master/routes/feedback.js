const express = require('express');
const FeedbackService = require('../services/FeedbackService');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/', (require, response) => {
    return response.send('Feedback form posted');
  });

  return router;
};
