const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const trainController = require('@/controllers/appControllers/trainController');
const bookingController = require('@/controllers/appControllers/bookingController');

router.route('/train/search').get(catchErrors(trainController.search));
router.route('/booking/read/:email').get(catchErrors(bookingController.read));


module.exports = router;
