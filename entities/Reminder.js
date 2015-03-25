var mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
  remindThis: String,
  shdlSMS: String,
 //shdlSMS: String,
//  shdlSMS: Array,
//shdlSMS: {type: mongoose.Schema.ObjectId, ref: 'SMSsched'},
//  shdlSMS: {
  //  hour: Number,
  //  day: Number
  //},

  isComplete: Boolean,
  phone: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  smsJob: { type: mongoose.Schema.ObjectId, ref: 'smsJob'}
});

var Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
