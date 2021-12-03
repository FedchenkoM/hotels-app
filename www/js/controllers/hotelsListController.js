app.controller('hotelsListController', ['$scope', '$state', 'navSrvc', 'hotelListHttpSrvc', '$ionicSideMenuDelegate',
  function ($scope, $state, navSrvc, hotelListHttpSrvc, $ionicSideMenuDelegate) {
    $scope.toBook = navSrvc.toBook
    $scope.toBookedHotels = toBookedHotels
    $scope.changeSelected = changeSelected
    $scope.sortOptions = ['default', 'price asc.', 'price desc.', 'rate(best first)', 'only no smoke', 'only no pets']
    $scope.changeSelected = changeSelected
    $scope.selected = $scope.sortOptions[0]
    $scope.toggleLeft = toggleLeft

    hotelListHttpSrvc.getHotelsList()
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


