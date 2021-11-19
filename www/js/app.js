let app = angular.module('hotels', ['ionic'])

app
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/hotelsList.html',
        controller: 'hotelsListCtrl'
      })

    $urlRouterProvider.otherwise("/");
  })
