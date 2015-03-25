(function () {
    "use strict";

    angular
        .module('reminders')
        .controller('remindersController', ['remindersService', '$scope', '$location', '$routeParams', '$auth',
        function(remindersService, $scope, $location, $routeParams, $auth) {
            var remCtl = this;
            remCtl.isAuthenticated = function () {
              return $auth.isAuthenticated();
            }
            remindersService.getReminders().success(function (reminders) {
                remCtl.reminders = reminders;
            });
            if($routeParams.remId) {
            remindersService.getReminder($routeParams.remId).success(function (reminder) {
                remCtl.reminder = reminder;
            });
          }

            remCtl.createReminder = function (newRem) {
              newRem.phone = localStorage.getItem('phone');

            //  newRem.shldSMS = newRem.shldSMS;
              console.log(newRem);
              remindersService.createReminder(newRem);
                $location.path('/reminders');
            };

            remCtl.editReminder = function (reminder) {
              remindersService.editReminder(reminder);
                $location.path('/reminders');
            };

            remCtl.deleteReminder = function (id) {
              remindersService.deleteReminder(id);
                $location.path('/reminders');
            };

            $scope.myConfig = {
              option: {
                allowWeek: false,
                allowMonth: false,
                allowYear: false
              }
            }


        }]);
})();
