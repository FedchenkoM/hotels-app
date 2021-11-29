app.controller('hotelCardController', ['$scope', '$state', '$stateParams', '$ionicModal', '$ionicPopup',
    function ($scope, $state, $stateParams, $ionicModal, $ionicPopup) {
      $scope.$on('$ionicView.beforeEnter', function () {
        $scope.hotel = $stateParams.hotel
        if(!$scope.hotel) {
          $state.go('main')
        }
      })

      $scope.gotoMain = gotoMain
      $scope.closeModal = closeModal
      $scope.openModal = openModal
      $scope.initModal = initModal
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

      function gotoMain() {
        $state.go('main')
      }

      function showPopup() {
        let alertPopup = $ionicPopup.alert({
          title: `<h1>Hey ya!</h1>
          You are booked ${$scope.hotel.name} ${$scope.hotel.city}`,
        })
      }
    }])
