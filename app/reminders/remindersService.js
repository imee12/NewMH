(function () {
    "use strict";

    angular
        .module('reminders')
        .factory('remindersService', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getReminders: getReminders,
                getReminder: getReminder,
                createReminder: createReminder,
                editReminder: editReminder,
                deleteReminder: deleteReminder
            };

            function getReminders() {

                return $http.get("api/sms/reminder");
            }

            function getReminder(reminderId) {
                return $http.get("api/sms/reminder/" + reminderId);
            }

            function createReminder(newReminder) {
        newReminder.shdlSMS = new Date(newReminder.shdlSMS).getTime();
            //  console.log(newReminder);
                $http.post("api/sms/reminder", newReminder).then(function (res) {
                    $rootScope.$broadcast("post:added");
                });

            }


            function editReminder(reminder) {
                $http.put("api/sms/reminder/" + reminder._id, reminder).then(function (res) {
                    $rootScope.$broadcast("post:updated");
                });

            }

            function deleteReminder(remId) {
                $http.delete("api/sms/reminder/" + remId).then(function (res) {
                    $rootScope.$broadcast("reminder:deleted");
                });
            }



        }]);
})();
