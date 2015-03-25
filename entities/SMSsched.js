var mongoose = require('mongoose');

var shdlSMS = new mongoose.Schema({
  schedules = {

  dayOfWeek: String,
  hour: String,
  min: String

}
  exceptions = {
    length: String,

  }

});

var Reminder = mongoose.model('SMSsched', SMSschedSchema);

module.exports = shdlSMS;
