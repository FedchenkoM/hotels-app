app.
  controller('bookingModalController', function($scope){
    $scope.numOfPersons
    $scope.numOfDays
    $scope.totalSum = $scope.numOfDays * $scope.numOfPersons * $scope.price

  })
