app.controller('bookedHotelsListController',[ '$scope', '$state','localStorageSrvc', function($scope, $state, localStorageSrvc ){
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.hotels = localStorageSrvc.getBookedHotelsList()
  })

  $scope.goToMain = goToMain
  $scope.removeHotel = localStorageSrvc.removeHotel

  function goToMain() {
    $state.go('main')
  }
}])
