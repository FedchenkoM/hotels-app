app
  .factory('hotelListHttpSrvc', function ($http, $q) {
    return {
      getHotelsList
    }

    function getHotelsList() {
      let deferred = $q.defer()

      $http.get('hotels-list/hotels-list.json')
        .then(data => deferred.resolve(data.data))
        .catch(error => {
          let errorMsg = 'Неизвестная ошибка'
          switch (error.status) {
            case 400 || 401 || 403:
              errorMsg = 'Некорректный запрос';
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
        })
      return deferred.promise
    }
  })

  .factory('toBook', function ($state, $stateParams) {
    return {
      toBook: (hotel) => $state.go('hotelCard', { hotel })
    }
  })

  .factory('localStorageSrvc', function ($state) {
    return {
      hasHotelInLocalStorage,
      getBookedHotelsList,
      setHotelToLocalStorage
    }

    function setHotelToLocalStorage(newBookedHotel) {
      let bookedList = getBookedHotelsList()
      bookedList.push(newBookedHotel)
      window.localStorage.setItem('bookedHotels', JSON.stringify(bookedList))
    }

    function getBookedHotelsList() {
      let bookedHotels

      if (window.localStorage.getItem('bookedHotels')) {
        bookedHotels = JSON.parse(window.localStorage.getItem('bookedHotels'))
      } else {
        bookedHotels = []
      }
      return bookedHotels
    }

    function hasHotelInLocalStorage(hotelId) {
      return localStorage.getItem(hotelId) !== null ? true : false
    }
  })

  .factory('dataService', function () {
    let data = new Date()
    let day = data.getDate()
    let month = data.getMonth() + 1
    let year = data.getFullYear()

    return {
      dateEnd,
      setToday: () => `${year}-${month}-${day}`
    }

    function dateEnd(dateStart, numOfDays) {
      const date = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate() + numOfDays)
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    }
  })



