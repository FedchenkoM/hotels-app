app
  .controller('hotelsListController', ['$scope', '$state', 'toBook', 'hotelListHttpSrvc','$ionicSideMenuDelegate',
    function ($scope, $state, toBook, hotelListHttpSrvc, $ionicSideMenuDelegate) {

      $scope.hotelsList
      $scope.toBook = toBook.toBook

      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleRight();
      }

      hotelListHttpSrvc.getHotelsList()
        .then(data => $scope.hotelsList = data,
          // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Обработать ошибку и вывести в DOM
          err => console.log(err))
    }]
  )

