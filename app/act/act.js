(function () {
    "use strict";

    angular
        .module('acts', [
            "ngRoute"

        ])
        .config(function ($routeProvider) {
          var checkAuth = function ($q, $location, $auth) {
            var dfd = $q.defer();
            if(!$auth.isAuthenticated()) {
              $location.path('/login');
            } else {
              dfd.resolve();
            }
            return dfd.promise;
          };
            $routeProvider
                .when('/acts', {
                    templateUrl: 'act/views/list.html',
                    controller: 'actsController as actsCtl',
                })
                .when('/acts/new', {
                    templateUrl: 'act/views/create.html',
                    controller: 'actsController as actsCtl',
                    resolve: {
                      authenticated: checkAuth
                    }
                })
                .when('/acts/:actId', {
                    templateUrl: 'act/views/show.html',
                    controller: 'actsController as actsCtl'
                })
                .when('/acts/:actId/edit', {
                    templateUrl: 'act/views/edit.html',
                    controller: 'actsController as actsCtl',
                    resolve: {
                      authenticated: checkAuth
                    }
                });
        });

})();
