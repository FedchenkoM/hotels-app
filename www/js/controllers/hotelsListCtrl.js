app
  .controller('hotelsListCtrl', ['$scope', '$state', '$rootScope', 'toBook', 'hotelListHttpSrvc',
    function ($scope, $state, $rootScope, toBook, hotelListHttpSrvc) {

      $scope.hotelsList
      $scope.toBook = toBook.toBook
      $rootScope.logg = toBook.logg


      hotelListHttpSrvc.getHotelsList()
        .then(data => $scope.hotelsList = data,
          // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Обработать ошибку и вывести в DOM
          err => console.log(err))
    }]
  )

