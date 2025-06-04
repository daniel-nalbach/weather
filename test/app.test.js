const request = require('supertest');
const express = require('express');
const path = require('path');

// create a minimal express app that uses the index router
const indexRouter = require('../routes/index');
const app = express();

// simple view engine that just returns the file contents
app.engine('handlebars', (filePath, options, cb) => {
  const fs = require('fs');
  fs.readFile(filePath, (err, content) => {
    if (err) return cb(err);
    cb(null, content.toString());
  });
});
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);

describe('GET /', function () {
  it('responds with 200 and renders index page', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(/<main>/, done);
  });
});
