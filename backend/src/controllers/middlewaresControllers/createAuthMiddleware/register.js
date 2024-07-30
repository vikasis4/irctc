const Joi = require('joi');

const mongoose = require('mongoose');


const authUser = require('./authUser');

const register = async (req, res, { userModel }) => {
    const UserPasswordModel = mongoose.model(userModel + 'Password');
    const UserModel = mongoose.model(userModel);
    const { email, password, name } = req.body;

    // validate
    const objectSchema = Joi.object({
        email: Joi.string()
            .email({ tlds: { allow: true } })
            .required(),
        password: Joi.string().required(),
        name: Joi.string().required()
    });

    const { error, value } = objectSchema.validate({ email, password, name });
    if (error) {
        return res.status(409).json({
            success: false,
            result: null,
            error: error,
            message: 'Invalid/Missing credentials.',
            errorMessage: error.message,
        });
    }

    const userExists = await UserModel.findOne({
        email
    })
        .exec();

    if (userExists) {
        return res.status(409).json({
            success: false,
            result: null,
            message: 'User already exists.',
        });
    }

    const user = await UserModel.create({
        email,
        name
    });

    const databasePassword = await UserPasswordModel.create({
        user: user._id,
        password
    })


    await databasePassword.save();


    authUser(req, res, { user, databasePassword, password, UserPasswordModel });
};

module.exports = register;
