angular.module('MyApp')
  .directive('slider', function($timeout) {
    return {
   restrict: 'AE',
   replace: true,
   scope: {
     images: '='
   },
   link: function(scope, elem, attrs) {},
   templateUrl: 'views/home.html'
 };
});
