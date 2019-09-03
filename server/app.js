const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/v1', require('./routes/api/v1'));
app.use('/', require('./routes'));

// error handler
app.use((err, req, res, next) => {
  res.json({
    error: {
      message: err.message || 'An error occured',
      status: err.status || 500,
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`> server running: http://localhost:${port}`);
});
