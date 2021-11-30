app.controller('bookedHotelsListController', ['$scope', '$state', 'localStorageSrvc', '$ionicPopup',
  function ($scope, $state, localStorageSrvc, $ionicPopup) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotels = localStorageSrvc.getBookedHotelsList()
      $scope.remove = function ($index) {
        $scope.hotels.splice($index, 1)
        localStorage.setItem('bookedHotels', JSON.stringify($scope.hotels))
        setTimeout(() => $scope.showResume(), 750)
      }
    })

    $scope.goToMain = goToMain

    $scope.showResume = function showPopup() {
      let alertPopup = $ionicPopup.alert({
        title: `<h3>You canceled your booking </h3>`
      })
    }

    function goToMain() {
      $state.go('main')
    }
  }])
