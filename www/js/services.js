app
  .factory('hotelListHttpSrvc', function ($http, $q) {
    return {
      getHotelsList: getHotelsList
    }

    function getHotelsList() {

      let deferred = $q.defer()
      try {
        $http.get('hotels-list/hotels-list.json')
          .then(data => deferred.resolve(data.data))
      } catch (error) {
        let errorMsg = 'Неизвестная ошибка'
        switch (error.status) {
          case 400 || 401:
            errorMsg = 'Некорректный запрос';
            break;
          case 403:
            errorMsg = 'У Вас нет прав доступа';
            break;
          case 404:
            errorMsg = 'Сервер не найден';
            break;
          case 407:
            errorMsg = 'Истекло время ожидания';
            break;
          case 410:
            errorMsg = 'Данные удалены';
            break;
          case 503:
            errorMsg = 'Сервер недоступен';
            break;
        }
        deferred.reject(errorMsg)
      }
      return deferred.promise
    }
  })
