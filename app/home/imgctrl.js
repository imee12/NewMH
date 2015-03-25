(function () {
    "use strict";

    angular
    .module('images', ['ngAnimate', 'ngTouch'])
          .controller('imageController', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: 'images/compmh.png', desc: 'Image 01'},
        {src: 'images/clockmh.png', desc: 'Image 02'},
        {src: 'images/saladmh.png', desc: 'Image 03'},
        {src: 'images/swimmh.png', desc: 'Image 04'},
        // {src: 'images/MHswim.jpg', desc: 'Image 05'}

    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
})();
