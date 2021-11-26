app.controller('bookingModalController', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
  $scope.today = dataService.setToday()
  $scope.submitToLocalStorage = submitBook

  function submitBook() {
    let bookInfo = {
      ...$scope.hotel,
      dateStart: {
        year: $scope.dateStart.getFullYear(),
        month: $scope.dateStart.getMonth() + 1,
        day: $scope.dateStart.getDate()
      },
      dateEnd: dataService.dateEnd($scope.dateStart, $scope.numOfDays),
      totalSum: $scope.numOfDays * $scope.numOfPersons * +$scope.hotel.price,
      numOfPersons: $scope.numOfPersons
    }

    window.localStorage.setItem($scope.hotel.id, JSON.stringify(bookInfo)),
      $scope.closeModal().then($scope.showResume)
  }
}])
