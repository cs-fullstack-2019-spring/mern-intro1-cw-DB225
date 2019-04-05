var express = require('express');
var router = express.Router();
var ticketCollection = require('../models/TroubleTicketSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create our ticket
router.get('/tickets/seeddata/:ticket_person_reporting/:ticket_problem_description/:ticket_date', (req,res) =>{
  ticketCollection.create({
    ticket_person_reporting: req.params.ticket_person_reporting,
    ticket_problem_description: req.params.ticket_problem_description,
    ticket_date: req.params.ticket_date
  },(errors) =>{
    if(errors) res.send(errors);
    else res.send("CREATED...!!!")
  })
});

//Find our ticket to add him in the database
router.get('/tickets/seeddata', (req, res) =>{
  ticketCollection.find({}, (errors, results) =>{
    if(errors) res.send(errors);
    else res.send(results)
  })
});

module.exports = router;
