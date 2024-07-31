const express = require('express');

const cors = require('cors');
const compression = require('compression');

const cookieParser = require('cookie-parser');
const errorHandlers = require('./handlers/errorHandlers');

// import all of our routes
const userAuth = require('@/controllers/userControllers/userAuth');
const adminAuth = require('@/controllers/coreControllers/adminAuth');

const coreAuthRouter = require('./routes/coreRoutes/coreAuth');
const coreApiRouter = require('./routes/coreRoutes/coreApi');

const appApiRouter = require('./routes/appRoutes/appApi');

const userAuthRouter = require('./routes/userRoutes/userAuth');
const userApiRouter = require('./routes/userRoutes/userApi');

const openApiRouter = require('./routes/openRoute.js');
// create our Express app

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Here our API Routes

app.get('/es', (req, res) => {
  res.json({ message: 'Hola Mundo' });
});

app.use('/api/admin/auth', coreAuthRouter);
app.use('/api/admin/cred', adminAuth.isValidAuthToken, coreApiRouter);

app.use('/api/app', userAuth.isValidAuthToken, appApiRouter);

app.use('/api/open', openApiRouter);

app.use('/api/user/auth', userAuthRouter);
app.use('/api/user/cred', userAuth.isValidAuthToken, userApiRouter);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
