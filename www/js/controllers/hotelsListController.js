app.controller('hotelsListController', ['$rootScope', '$scope', '$state', 'toBook', 'hotelListHttpSrvc', '$ionicSideMenuDelegate',
  function ($rootScope, $scope, $state, toBook, hotelListHttpSrvc, $ionicSideMenuDelegate) {
    $scope.toBook = toBook.toBook
    $scope.toBookedHotels = toBookedHotels
    $scope.changeSelected = changeSelected
    $scope.sortOptions = ['default', 'price asc', 'price desc', 'rate(best first)', 'no smoke', 'no pets']
    $scope.changeSelected = changeSelected
    $scope.selected = $scope.sortOptions[0]

    function changeSelected(sel) {
      $scope.selected = sel
    }
    function toBookedHotels() {
      $state.go('bookedList')
    }

    $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    }

    hotelListHttpSrvc.getHotelsList()
      .then(data => $scope.hotelsList = data)
      .catch(err => $scope.error = err)
  }]
)


