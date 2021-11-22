app
  .controller('hotelsListCtrl', ['$scope', '$state', 'toBook', 'hotelListHttpSrvc', function ($scope, $state, toBook, hotelListHttpSrvc) {

    $scope.hotelsList
    $scope.toBook = toBook.toBook

    hotelListHttpSrvc.getHotelsList()
      .then(data => $scope.hotelsList = data,
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Обработать ошибку и вывести в DOM
        err => console.log(err))
  }]
  )

