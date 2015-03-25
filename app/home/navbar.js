angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    }
  })
    .controller('rotatorController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.pic = 1;

  var slideImage = function() {
  var loop = $timeout(function changePic() {
    if($scope.pic < 2){
      $scope.pic++;
    } else {
      $scope.pic = 1;
    }
    loop = $timeout(changePic, 2000);
  },2000);
  };
}]);
