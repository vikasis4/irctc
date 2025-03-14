const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const tokenLogin = async (req, res, { userModel }) => {
    try {
        const UserPassword = mongoose.model(userModel + 'Password');
        const User = mongoose.model(userModel);
        
        const jwtSecret = 'JWT_SECRET';
        
        const token = req.cookies.token;

        if (!token)
            return res.status(401).json({
                success: false,
                result: null,
                message: 'No authentication token, authorization denied.',
                jwtExpired: true,
            });

        const verified = jwt.verify(token, process.env[jwtSecret]);

        if (!verified)
            return res.status(401).json({
                success: false,
                result: null,
                message: 'Token verification failed, authorization denied.',
                jwtExpired: true,
            });

        const userPasswordPromise = UserPassword.findOne({ user: verified.id, removed: false });
        const userPromise = User.findOne({ _id: verified.id, removed: false });

        const [user, userPassword] = await Promise.all([userPromise, userPasswordPromise]);

        if (!user)
            return res.status(401).json({
                success: false,
                result: null,
                message: "User doens't Exist, authorization denied.",
                jwtExpired: true,
            });

        const { loggedSessions } = userPassword;

        if (!loggedSessions.includes(token))
            return res.status(401).json({
                success: false,
                result: null,
                message: 'User is already logout try to login, authorization denied.',
                jwtExpired: true,
            });
        else {
            return res.status(200).json({
                success: true,
                result: user,
                message: 'Auth SuccessFull',
                jwtExpired: false,
            });
        }
    } catch (error) {
        return res.status(503).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
            controller: 'isValidAuthToken',
        });
    }
};

module.exports = tokenLogin;
