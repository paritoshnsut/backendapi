const express = require('express');
const TourRoute = require('./routes/tourRoute.js');
const UserRoute = require('./routes/userRoute.js');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  req.requestTime = new Date().toISOString();
});

app.use('/api/v1/tours', TourRoute);
app.use('/api/v1/users', UserRoute);

module.exports = app;
