app.controller('bookedHotelsListController', ['$scope', 'localStorageSrvc', '$ionicPopup', 'navSrvc',
  function ($scope, localStorageSrvc, $ionicPopup, navSrvc) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotels = localStorageSrvc.getBookedHotelsList()
    })

    $scope.goToMain = navSrvc.goToMain

    $scope.remove = function ($index) {
      $scope.hotels.splice($index, 1)
      window.localStorage.setItem('bookedHotels', angular.toJson($scope.hotels))
      setTimeout(() => $scope.showResume(), 300)
    }

    $scope.showResume = function showPopup() {
      $ionicPopup.alert({
        title: `<h3>You canceled your booking </h3>`
      })
    }
  }])
