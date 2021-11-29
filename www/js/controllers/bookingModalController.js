app.controller('bookingModalController', ['$scope', '$state', 'dataService', 'localStorageSrvc',
  function ($scope, $state, dataService, localStorageSrvc) {
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

      localStorageSrvc.setHotelToLocalStorage(bookInfo)
      $scope.closeModal().then($scope.showResume)
    }
  }])
