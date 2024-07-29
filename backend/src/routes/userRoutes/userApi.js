const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const userController = require('@/controllers/userControllers/userController');

// //_______________________________ Admin management_______________________________

router.route('/admin/read/:id').get(catchErrors(userController.read));

router.route('/admin/password-update/:id').patch(catchErrors(userController.updatePassword));

//_______________________________ Admin Profile _______________________________

router.route('/admin/profile/password').patch(catchErrors(userController.updateProfilePassword));


module.exports = router;
