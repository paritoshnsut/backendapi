const express = require('express');
const tourController = require('./controller/tourController.js');
const router = express.Router();


router.route('/').get(tourController.getAlltours).post(tourController.createTour);
router.route('/:id').get(tourController.getOneTour).patch(tourController.patchATour).delete(tourController.deleteAtour);

module.exports = router;
