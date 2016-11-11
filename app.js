var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var meetingrooms = require('./data/fixture.json').data;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// api route to offer meeting room data
app.get('/api/meetingrooms', function(req, res) {
  if (req.query.name !== undefined) {
    let filteredMeetingrooms = meetingrooms.filter(function(i) {
      return i.attributes.name.toLowerCase().indexOf(req.query.name.toLowerCase()) !== -1;
    });
    console.log(`fire filteredRentals: ${new Date()}, ${filteredMeetingrooms}`)
    res.json({ data: filteredMeetingrooms });
  } else {
    console.log(`fire meetingrooms: ${new Date()}, ${meetingrooms}`)
    res.json({ data: meetingrooms });
  }
});

// index will redirect to /about
app.get(/^\/(index(.html)?)?$/, function(req, res) {
  res.redirect('/about');
});

// /about route from Canvas template
app.get('/about', function(req, res) {
  res.sendfile('./public/about/about.html');
})

// /search route from ember
app.get('/search', function(req, res) {
  res.sendfile('./public/dist/index.html');
})

// static asset
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/about')));
app.use(express.static(path.join(__dirname, 'public/dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
