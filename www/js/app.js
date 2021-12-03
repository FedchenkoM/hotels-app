let app = angular.module('hotels', ['ionic'])

app.run(function ($ionicPlatform, $rootScope, $ionicLoading) {
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
  })
  $rootScope.$on("$stateChangeSuccess", $ionicLoading.hide)
  $rootScope.$on("$stateChangeError", $ionicLoading.hide)
})

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        cache: false,
        templateUrl: 'templates/hotelsList.html',
        controller: 'hotelsListController'
      })
      .state('hotelCard', {
        url: '/hotelCard/hotel',
        cache: false,
        params: {
          hotel: null
        },
        templateUrl: 'templates/hotelCard.html',
        controller: 'hotelCardController'
      })
      .state('bookedList', {
        url: '/bookedList',
        templateUrl: 'templates/bookedList.html',
        controller: 'bookedHotelsListController'
      })
    $urlRouterProvider.otherwise("/");
  })
