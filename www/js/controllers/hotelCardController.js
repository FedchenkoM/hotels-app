app.
  controller('hotelCardController', ['$scope', '$state', '$stateParams', '$ionicModal', '$ionicPopup',
    function ($scope, $state, $stateParams, $ionicModal, $ionicPopup) {
      $scope.id = $stateParams.id
      $scope.name = $stateParams.name
      $scope.city = $stateParams.city
      $scope.imgSrc = $stateParams.img
      $scope.score = $stateParams.score
      $scope.price = $stateParams.price
      $scope.animals = $stateParams.animals
      $scope.smoke = $stateParams.smoke
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
        return $state.go('main')
      }

      function showPopup() {
        let alertPopup = $ionicPopup.alert({
          title: `<h1>Hey ya!</h1>`,
          template: `<p>You are booked ${$scope.name} ${$scope.city}</p> `
        });
      }
    }])
