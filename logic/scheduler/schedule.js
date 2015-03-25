// var schDB = require('../../db/db.schedule');
// var remDB = require('../../db/db.reminder');
var Reminder = require('../../entities/Reminder');
var Job = require('../../entities/smsJob');
var tSMS = require('../twilio/triggerSMS');
var tCall = require('../twilio/triggerCall');
//var SMSsched = require('../../entities/SMSsched');
//var agenda =

var schedule = require('node-schedule');
var CronJob= require('cron').CronJob;
var crontab = require('node-crontab');
var Agenda = require('agenda');
var agenda = new Agenda();
//var later = require('later');



var scheduler = {

  scheduleSMS: function(reminder) {


 var job = schedule.scheduleJob('job_sms_' + reminder._id, new Date(parseInt(reminder.shdlSMS)), function() {
  console.log('sms triggered', reminder);

  tSMS.triggerSMS(reminder);



    });
    job.reminderId = reminder._id; // Tag the job with a reminder ID
    var newJob = new Job(job);
    return newJob.save();
  },

  


//
//    scheduleSMS: function(reminder) {
//   //
//   //   console.log(reminder.shldSMS);
//   //   console.log(reminder.shldSMS == "40 2 * * *")
//   //
//   //   var job = schedule.scheduleJob('job_sms_' + reminder._id, reminder.shldSMS, function() {
//   //   console.log('sms triggered', reminder);
//   //
//   //   tSMS.triggerSMS(reminder);
// //  mongodb://USERNAME:PASSWORD@localhost:27017/agenda-example
//
// var agenda = new Agenda({db: {address: 'localhost:27017/agenda-example'}});
//
// var agenda = new Agenda({db: {address: 'mongodb://imee:imee@ds049661.mongolab.com:49661/practice'}});
// //  var agenda = new Agenda({db: {address: 'mongodb://imee:imee@127.0.0.1:27017/practice'}});
// //  var agenda = new Agenda({db: {address: 'mongodb://imee:imee@127.0.0.1:27017/practice'}});
// //
//  var job = reminder;
//   agenda.define ('create reminder', function (job){
//   //  var reminder = job.attrs.data;
//
//     tSMS.triggerSMS(reminder);
//
//       });
//
//       agenda.every('reminder.shldSMS', 'create reminder');
//       agenda.start();
//
//
//
//       job.reminderId = reminder._id; // Tag the job with a reminder ID
//       var newJob = new Job(job);
//       return newJob.save();
//     },



  cancelJob: function(reminderId) {
    var jobs = schedule.scheduledJobs;

    var smsJob = jobs["job_sms_" + reminderId];
    var callJob = jobs["job_call_" + reminderId];

    if (smsJob) {
      smsJob.cancel();
    }
    if (callJob) {
      callJob.cancel();
    }
    return true;
  }
}

module.exports = scheduler;
