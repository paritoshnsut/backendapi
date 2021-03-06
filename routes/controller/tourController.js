const express = require('express');
const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );


module.exports.getAlltours = (req, res) => {
    res.json({
      status: 'success',
      requestedAt: requestTime,
      length: tours.length,
      data: { tours },
    });
  };
  
  //we need a middleware in case of a post request a middleware is basically a function which is implemented between a request response cycle
  module.exports.createTour = (req, res) => {
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newID }, req.body);
  
    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        res.status(400).json({
          status: 'Successfully added',
          data: {
            tours: newTour,
          },
        });
      }
    );
  };
  
  module.exports.getOneTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((ele) => ele.id === id);
  
    if (id > tours.length) {
      return res.status(404).json({
        status: 'failed',
        message: 'Comeon man this number doesnt exist',
      });
    }
  
    console.log(req.params);
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  };
  
  module.exports.patchATour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      res.status(404).json({
        status: 'failed bitch',
        message: 'done',
      });
    }
    res.status(200).json({
      status: 'successful',
    });
  };
  
  module.exports.deleteAtour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      res.status(404).json({
        status: 'nothing to delete',
        message: 'deletion failed',
      });
    }
    res.status(200).json({
      status: 'successfuly deleted',
    });
  };