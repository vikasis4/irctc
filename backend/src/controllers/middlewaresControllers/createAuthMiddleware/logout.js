const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const logout = async (req, res, { userModel }) => {
  const UserPassword = mongoose.model(userModel + 'Password');

  const token = req.cookies.token;

  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (!verified)
    return res.status(401).json({
      success: false,
      result: {},
      message: 'Invalid token',
    });


  await UserPassword.findOneAndUpdate(
    { user: verified.id },
    { $pull: { loggedSessions: token } },
    {
      new: true,
    }
  ).exec();

  res
    .clearCookie('token', {
      maxAge: null,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      domain: req.hostname,
      Path: '/',
    })
    .json({
      success: true,
      result: {},
      message: 'Successfully logout',
    });
};

module.exports = logout;
