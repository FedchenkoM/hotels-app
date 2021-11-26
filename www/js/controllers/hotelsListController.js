app.controller('hotelsListController', ['$rootScope', '$scope', '$state', 'toBook', 'hotelListHttpSrvc', '$ionicSideMenuDelegate',
  function ($rootScope, $scope, $state, toBook, hotelListHttpSrvc, $ionicSideMenuDelegate) {
    $scope.toBook = toBook.toBook
    $scope.toBookedHotels = toBookedHotels

    function toBookedHotels() {
      $state.go('bookedList')
    }

    $scope.toggleRight = function () {
      $ionicSideMenuDelegate.toggleRight();
    }

    hotelListHttpSrvc.getHotelsList()
      .then(data => $scope.hotelsList = data)
      .catch(err => $scope.error = err)
  }]
)

