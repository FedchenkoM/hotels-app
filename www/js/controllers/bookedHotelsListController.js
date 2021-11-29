app.controller('bookedHotelsListController', ['$scope', '$state', 'localStorageSrvc', '$ionicPopup',
  function ($scope, $state, localStorageSrvc, $ionicPopup) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotels = localStorageSrvc.getBookedHotelsList()
      $scope.remove = function ($index) {
        $scope.hotels.splice($index, 1)
        localStorage.setItem('bookedHotels', JSON.stringify($scope.hotels))
        $scope.showResume()
      }
    })

    $scope.goToMain = goToMain

    $scope.showResume = function showPopup() {
      let alertPopup = $ionicPopup.alert({
        title: `<h2>You canceled your booking </h2>`
      })
    }

    function goToMain() {
      $state.go('main')
    }
  }])
