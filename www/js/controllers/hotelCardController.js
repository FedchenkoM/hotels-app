app.
  controller('hotelCardController', ['$scope', '$state', '$stateParams','$ionicModal',
   function ($scope, $state, $stateParams, $ionicModal) {
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


    $ionicModal.fromTemplateUrl('templates/bookingModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    })

    function openModal () {
      $scope.modal.show();
    }

    function closeModal () {
      $scope.modal.hide()
    }


    function gotoMain () {
      return $state.go('main')
    }
  }])
