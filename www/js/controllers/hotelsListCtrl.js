app
  .controller('hotelsListCtrl', ['$scope', 'hotelListHttpSrvc', function ($scope, hotelListHttpSrvc) {
    $scope.hotelsList
    hotelListHttpSrvc.getHotelsList()
      .then(data => $scope.hotelsList = data,
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Обработать ошибку и вывести в DOM
        err => console.log(err))

  }]
  )

