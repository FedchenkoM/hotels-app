app.
  controller('bookingModalController', function ($scope, localStorageSrvc, dataService) {
    $scope.localStorageSrvc = localStorageSrvc
    $scope.numOfPersons
    $scope.numOfDays
    $scope.dateStart
    $scope.dateEnd
    $scope.today = dataService.setToday()
    $scope.totalSum
    $scope.submitToLocalStorage = submitBook

    function submitBook(localStorageSrvc) {
      let bookInfo = {
        id: $scope.id,
        name: $scope.name,
        city: $scope.city,
        dateStart: {
          year: $scope.dateStart.getFullYear(),
          month: $scope.dateStart.getMonth() + 1,
          day: $scope.dateStart.getDate()
        },
        dateEnd: dataService.dateEnd($scope.dateStart, $scope.numOfDays),
        totalSum: $scope.numOfDays * $scope.numOfPersons * +$scope.price,
        numOfPersons: $scope.numOfPersons,
        name: $scope.name,
        city: $scope.city
      }

        window.localStorage.setItem($scope.id, JSON.stringify(bookInfo))
        $scope.closeModal()
    }
  })
