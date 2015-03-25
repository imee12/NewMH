(function(angular) {
    'use strict';

    var app = angular.module('kids', ['slidingPuzzle', 'wordSearchPuzzle']);

    // puzzle types
    var types = [
        { id: 'sliding-puzzle', title: 'Sliding puzzle' },
        { id: 'word-search-puzzle', title: 'Word search puzzle' }
    ];

    /**
     * Config
     */

      app.config(function($routeProvider) {
           $routeProvider.when('/kids', {
             templateUrl: 'kids/views/puzz.html'
       });
   });
//    app.config(function($routeProvider) {
//         $routeProvider.when('/kids/words', {
//           templateUrl: 'kids/views/home.html'
//     });
// });

    /**
     * Startup
     */
    app.run(function($rootScope, $route, $filter) {
        $rootScope.types = types;
        $rootScope.type = types[0].id;

        // set type on route change
        $rootScope.$on('$routeChangeSuccess', function(event, route) {
            $rootScope.type = ($filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id);
        });
    });

    /**
     * Advanced sliding puzzle controller
     */
    app.controller('slidingAdvancedCtrl', function($scope) {
        $scope.puzzles = [
            { src: './img/healthfood.png', title: 'Eating Healthy!', rows: 4, cols: 4 },
            { src: './img/igor.jpg', title: 'Igor Minár', rows: 3, cols: 3 },
            { src: './img/vojta.jpg', title: 'Vojta Jína', rows: 4, cols: 3 }
        ];
    });

    /**
     * Word search puzzle controller
     */
    app.controller('wordSearchCtrl', function($scope) {
        $scope.matrix = [
            ['T', 'I', 'H', 'S', 'H', 'E', 'B', 'S', 'T', 'T', 'A', 'N'],
            ['H', 'N', 'E', 'Y', 'T', 'X', 'L', 'U', 'P', 'I', 'A', 'E'],
            ['I', 'S', 'A', 'R', 'M', 'E', 'U', 'G', 'I', 'R', 'E', 'E'],
            ['R', 'U', 'L', 'I', 'O', 'R', 'R', 'A', 'R', 'E', 'V', 'D'],
            ['S', 'L', 'T', 'N', 'D', 'C', 'R', 'R', 'C', 'D', 'I', 'L'],
            ['T', 'I', 'H', 'G', 'D', 'I', 'Y', 'C', 'P', 'O', 'K', 'E'],
            ['Y', 'N', 'Y', 'E', 'E', 'S', 'I', 'D', 'I', 'Z', 'Z', 'Y'],
            ['N', 'T', 'E', 'S', 'T', 'E', 'B', 'L', 'O', 'O', 'D', 'I'],
            ['C', 'O', 'U', 'N', 'T', 'I', 'N', 'G', 'A', 'W', 'R', 'O'],
            ['O', 'K', 'D', 'I', 'A', 'B', 'E', 'T', 'E', 'S', 'I', 'M'],
            ['C', 'A', 'R', 'B', 'O', 'H', 'Y', 'D', 'R', 'A', 'T', 'E']
        ];
        $scope.words = [
            'THIRSTY', 'BLOOD', 'HEALTHY', 'POKE', 'BLURRY', 'EXERCISE', 'TEST', 'SUGAR',
            'DIZZY', 'DIABETES', 'INSULIN', 'SYRINGE', 'TIRED', 'NEEDLE', 'COUNTING', 'CARBOHYDRATE'
        ];
    });

})(window.angular);
