(function () {
    "use strict";

    angular
        .module('acts')
        .controller('actsController', ['actsService', '$location', '$routeParams', '$auth',
        function(actsService, $location, $routeParams, $auth) {
            var actsCtl = this;
            actsCtl.isAuthenticated = function () {
              return $auth.isAuthenticated();
            }
            actsService.getActs().success(function (acts) {
                actsCtl.acts = acts;
            });

            actsService.getAct($routeParams.actId).success(function (act) {
                actsCtl.act = act;
            });

            actsCtl.createAct = function (newAct) {
                actsService.createAct(newAct);
                $location.path('/acts');
            };

            actsCtl.editPost = function (act) {
                actsService.editAct(act);
                $location.path('/acts');
            };

            actsCtl.deletePost = function (id) {
                actsService.deleteAct(id);
                $location.path('/acts');
            }


        }]);
})();
