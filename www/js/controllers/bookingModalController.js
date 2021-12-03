app.controller('bookingModalController', ['$scope', 'dateHelper', 'localStorageHelper',
  function ($scope, dateHelper, localStorageHelper) {
    $scope.today = dateHelper.setToday()
    $scope.submitToLocalStorage = submitBook
    $scope.setCollision = setCollision
    $scope.changeDate = changeDate

    function setCollision(){
      $scope.dateCollision = false
    }

    function changeDate() {
      $scope.startDayNotValid = Date.parse($scope.dateStart) < Date.parse($scope.today)
    }

    function submitBook() {
      let bookInfo = {
        ...$scope.hotel,
        dateStart: {
          year: $scope.dateStart.getFullYear(),
          month: $scope.dateStart.getMonth() + 1,
          day: $scope.dateStart.getDate()
        },
        dateEnd: dateService.dateEnd($scope.dateStart, $scope.numOfDays),
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
  }])
