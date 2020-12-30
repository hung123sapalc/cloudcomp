const express = require('express');
const Toy = require('../models/toy');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const route = require('./toyRoutes');

route.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard',  { name : req.user.name });
  });


  module.exports = router;