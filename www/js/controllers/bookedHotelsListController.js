app.controller('bookedHotelsListController', ['$scope', 'localStorageHelper', '$ionicPopup', 'navHelper',
  function ($scope, localStorageHelper, $ionicPopup, navHelper) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotels = localStorageHelper.getBookedHotelsList()
    })

    $scope.goToMain = navHelper.goToMain

    $scope.remove = function (index) {
      $scope.hotels.splice(index, 1)
      window.localStorage.setItem('bookedHotels', angular.toJson($scope.hotels))
      setTimeout($scope.showResume, 300)
    }

    $scope.showResume = function showPopup() {
      $ionicPopup.alert({
        title: `<h3>You canceled your booking </h3>`
      })
    }
  }])
