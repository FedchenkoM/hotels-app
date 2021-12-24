app.controller('hotelCardController', ['$scope', '$state', '$ionicModal', '$ionicPopup', 'navHelper',
  function ($scope, $state, $ionicModal, $ionicPopup, navHelper) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotel = $state.params.hotel
      $scope.call = () => {
        cordova.plugins.phonedialer.call(
          $scope.hotel.phone,
          () => { },
          function (err) {
            if (err == "empty") alert("Unknown phone number")
            else alert("Dialer Error:" + err)
          }
        )
      }
    })

    $scope.goToMain = navHelper.goToMain

    $scope.closeModal = () => $scope.modal.remove()

    $scope.openModal = () => {
      return $ionicModal.fromTemplateUrl('templates/bookingModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then((modal) => $scope.modal = modal)
        .then(() => $scope.modal.show())
    }

    $scope.showResume = () => $ionicPopup.alert({
      title: `<h1>Hey ya!</h1>
          You are booked ${$scope.hotel.name} ${$scope.hotel.city}`,
    })
  }])
