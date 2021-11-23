app.
  controller('hotelCardController', ['$scope', '$state', '$stateParams', 'toBook', function ($scope, $state, $stateParams) {
    $scope.name = $stateParams.name
    $scope.city = $stateParams.city
    $scope.imgSrc = $stateParams.img
    $scope.score = $stateParams.score
    $scope.price = $stateParams.price
    $scope.animals = $stateParams.animals
    $scope.smoke = $stateParams.smoke

    $scope.gotoMain = function () {
      return $state.go('main')
    }
  }])
