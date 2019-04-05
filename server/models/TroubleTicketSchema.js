var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TroubleTicketSchema = new Schema({
    ticket_person_reporting: String,
    ticket_problem_description: String,
    ticket_date: String
});

module.exports = mongoose.model('ticket', TroubleTicketSchema);