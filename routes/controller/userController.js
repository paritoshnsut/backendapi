
const express = require('express');
module.exports. getUsers = (req, res) => {
    res.status(200).json({
      status: 'Work In Progress',
      data: {
        message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
      },
    });
  };
  
  module.exports.createUser = (req, res) => {
    res.status(200).json({
      status: 'Work In Progress',
      data: {
        message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
      },
    });
  };
  
  module.exports.getAUser = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      res.status(404).json({
        status: 'nothing to delete',
        message: 'deletion failed',
      });
    }
    res.status(200).json({
      status: 'Work In Progress',
      data: {
        message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
      },
    });
  };
  
  module.exports.patchUser = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      res.status(404).json({
        status: 'nothing to delete',
        message: 'deletion failed',
      });
    }
    res.status(200).json({
      status: 'Work In Progress',
      data: {
        message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
      },
    });
  };
  
  module.exports.deleteUser = (req, res) => {
    if (req.params.id * 1 > tours.length) {
      res.status(404).json({
        status: 'nothing to delete',
        message: 'deletion failed',
      });
    }
    res.status(200).json({
      status: 'Work In Progress',
      data: {
        message: 'Abhi kaam kr rhe hai or kya hi bole bhaiya ji',
      },
    });
  };
  