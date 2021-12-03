app.controller('hotelCardController', ['$scope', '$stateParams', '$ionicModal', '$ionicPopup', 'navHelper',
  function ($scope, $stateParams, $ionicModal, $ionicPopup, navHelper) {
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.hotel = $stateParams.hotel
      if ($scope.hotel == null) {
        $scope.goToMain()
      }
    })

    $scope.goToMain = navHelper.goToMain
    $scope.closeModal = closeModal
    $scope.openModal = openModal
    $scope.showResume = showPopup

    if (!$scope.modal) {
      initModal()
    }

    function initModal() {
      return $ionicModal.fromTemplateUrl('templates/bookingModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
      })
    }

    function openModal() {
      $scope.modal.show();
    }

    function closeModal() {
      return $scope.modal.remove().then(initModal)
    }

    function showPopup() {
      $ionicPopup.alert({
        title: `<h1>Hey ya!</h1>
          You are booked ${$scope.hotel.name} ${$scope.hotel.city}`,
      })
    }
  }])
