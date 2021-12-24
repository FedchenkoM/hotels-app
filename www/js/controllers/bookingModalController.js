app.controller('bookingModalController', ['$scope', 'dateHelper', 'localStorageHelper',
  function ($scope, dateHelper, localStorageHelper) {
    $scope.today = dateHelper.setToday()

    $scope.submitToLocalStorage = () => {
      let bookInfo = {
        ...$scope.hotel,
        dateStart: dateHelper.getDate($scope.dateStart),
        dateEnd: dateHelper.getDate($scope.dateStart, $scope.numOfDays),
        totalSum: $scope.numOfDays * $scope.numOfPersons * +$scope.hotel.price,
        numOfPersons: $scope.numOfPersons
      }

      $scope.dateCollision = localStorageHelper.hasDateCollision(bookInfo)

      if (!$scope.dateCollision) {
        localStorageHelper.setHotelToLocalStorage(bookInfo)
        $scope.closeModal().then($scope.showResume)
      } else {
        $scope.dateCollision = true
        $scope.bookedHotelsById = localStorageHelper.getBookedHotelsList($scope.hotel.id)
      }
    }

    $scope.setCollision = () => $scope.dateCollision = false

    $scope.changeDate = () => {
      $scope.startDayNotValid = Date.parse($scope.dateStart) < Date.parse($scope.today)
    }
  }])
