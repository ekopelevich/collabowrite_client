/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var storiesRouter = express.Router();

  var stories = [{
      id: '1',
      ownerId: '2',
      title: 'Something',
      startDate: '2016-03-02',
      summary: 'summary',
      editLock: '0',
      genreId: '3',
      checkoutTime: '2016-03-02',
      stateId: '1'
    }, {
      id: '2',
      ownerId: '1',
      title: 'Something else',
      startDate: '2016-01-02',
      summary: 'another summary',
      editLock: '1',
      genreId: '2',
      checkoutTime: '2016-03-04',
      stateId: '1'
    }
  ];

  storiesRouter.get('/', function(req, res) {
    res.send(stories);
  });

  storiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  storiesRouter.get('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.put('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/stories', require('body-parser').json());
  app.use('/api/stories', storiesRouter);
};
