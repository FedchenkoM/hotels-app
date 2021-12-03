app.controller('hotelsListController', ['$scope', '$state', 'navHelper', 'hotelListHttpHelper', '$ionicSideMenuDelegate',
  function ($scope, $state, navHelper, hotelListHttpHelper, $ionicSideMenuDelegate) {
    $scope.toBook = navHelper.toBook
    $scope.toBookedHotels = toBookedHotels
    $scope.changeSelected = changeSelected
    $scope.sortOptions = ['default', 'price asc.', 'price desc.', 'rate(best first)', 'only no smoke', 'only no pets']
    $scope.changeSelected = changeSelected
    $scope.selected = $scope.sortOptions[0]
    $scope.toggleLeft = toggleLeft

    hotelListHttpHelper.getHotelsList()
      .then(data => $scope.hotelsList = data)
      .catch(err => $scope.error = err)

    function changeSelected(sel) {
      $scope.selected = sel
    }

    function toBookedHotels() {
      $state.go('bookedList')
    }

    function toggleLeft() {
      $ionicSideMenuDelegate.toggleLeft();
    }
  }]
)


