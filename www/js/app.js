let app = angular.module('hotels', ['ionic'])

app
  .run(function ($ionicPlatform, $rootScope, $ionicLoading) {

    $ionicPlatform.ready(function () {

      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    $rootScope.$on("$stateChangeStart", () => {
      $ionicLoading.show({
        template: "Loading..."
      })

      $rootScope.$on("$stateChangeSuccess", () => {
        $ionicLoading.hide()
      })

      $rootScope.$on("$stateChangeError", () => {
        $ionicLoading.hide();
      })
    });
  })



  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/hotelsList.html',
        controller: 'hotelsListController'
      })
      .state('hotelCard', {
        url: '/hotelCard/:id/:name/:city/:img/:price/:smoke/:animals/:score',
        templateUrl: 'templates/hotelCard.html',
        controller: 'hotelCardController'
      })
    $urlRouterProvider.otherwise("/");
  })
