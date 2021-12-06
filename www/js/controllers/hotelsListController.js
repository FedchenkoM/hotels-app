app.controller('hotelsListController', ['$scope', '$state', 'navHelper', 'hotelListHttpHelper', '$ionicSideMenuDelegate',
  function ($scope, $state, navHelper, hotelListHttpHelper, $ionicSideMenuDelegate) {
    $scope.toBook = navHelper.toBook

    $scope.toBookedHotels = () => $state.go('bookedList')

    $scope.changeSelected = (sel) =>  $scope.selected = sel

    $scope.sortOptions = ['default', 'price asc.', 'price desc.', 'rate(best first)', 'only no smoke', 'only no pets']

    $scope.selected = $scope.sortOptions[0]

    $scope.toggleLeft = () => $ionicSideMenuDelegate.toggleLeft()

    hotelListHttpHelper.getHotelsList()
      .then(data => $scope.hotelsList = data)
      .catch(err => $scope.error = err)
  }]
)


