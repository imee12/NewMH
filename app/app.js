angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'mgcrea.ngStrap',
  'auth',
 'kids',
 'acts',
// 'video',
  'profile',
  //'youtube-embed',
  'images',
  'angular-cron-jobs',
  'slidingPuzzle',
  'wordSearchPuzzle',
  'posts',
  'reminders'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/views/home.html'
      })
      .when('/info', {
        templateUrl: 'home/views/info.html',
        controller: 'imageController as imgCtl',

      })
      .when('/kids', {
        templateUrl: 'kids/views/puzz.html'
        //controller: 'imageController as imgCtl',
      })
      .when('/kids/words', {
        templateUrl: 'kids/views/home.html',
        controller: 'wordSearchCtrl as wordCtl'
      })
      .when('/friends', {
        templateUrl: 'home/views/gang.html'
        //controller: 'imageController as imgCtl',
      })

      .when('/watch', {
        templateUrl: 'home/views/watch.html'
        //controller: 'imageController as imgCtl',
      })
      .when('/videos', {
        templateUrl: 'home/views/video.html',
        controller: 'vidController as vidCtl'
      })
      .when('/404', {
        template: '<h1>Sorry, page not found</h1>'
      })
      .otherwise({ redirectTo: '/404' });


  });
