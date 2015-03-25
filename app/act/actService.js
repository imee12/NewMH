(function () {
    "use strict";

    angular
        .module('acts')
        .factory('actsService', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getActs: getActs,
                getAct: getAct,
                createAct: createAct,
                editAct: editAct,
                deleteAct: deleteAct
            };

            function getActs() {

                return $http.get("api/collections/acts");
            }

            function getAct(actId) {
                return $http.get("api/collections/acts/" + actId);
            }

            function createAct(newAct) {
                $http.post("api/collections/acts", newAct).then(function (res) {
                    $rootScope.$broadcast("act:added");
                });
            }

            function editAct(act) {
                $http.put("api/collections/acts/" + act._id, act).then(function (res) {
                    $rootScope.$broadcast("act:updated");
                });

            }

            function deleteAct(actId) {
                $http.delete("api/collections/acts/" + actId).then(function (res) {
                    $rootScope.$broadcast("act:deleted");
                });
            }



        }]);
})();
