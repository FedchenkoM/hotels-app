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

  .factory('localStorageSrvc', function () {
    return {
      hasHotelInLocalStorage,
      getDateInLocalStorage
    }

    // function hasDateCollision(dateStorage, currentStartDate, currentEndDate) {
    //   const curStartDay = new Date(currentStartDate.year, currentStartDate.month, currentStartDate.day)
    //   const curEndDay = new Date(currentEndDate.year, currentEndDate.month, currentEndDate.day)
    //   const startDayInStorage = new Date(dateStorage.startYear, dateStorage.startMonth, dateStorage.startDay)
    //   const lastDayInStorage = new Date(dateStorage.endYear, dateStorage.endMonth, dateStorage.endDay)

    //   if ((curStartDay < lastDayInStorage && curStartDay > startDayInStorage)
    //     || (curEndDay < lastDayInStorage && curEndDay > startDayInStorage ) ) {
    //       return true
    //     } else {
    //       return false
    //   }
    //   console.log(curStartDay, curEndDay,startDayInStorage, lastDayInStorage );
    // }

    function getDateInLocalStorage(id) {
      const localStorageHotel = JSON.parse(localStorage.getItem(id))
      return {
        startYear: localStorageHotel.dateStart.year,
        startMonth: localStorageHotel.dateStart.month,
        startDay: localStorageHotel.dateStart.day,
        endYear: localStorageHotel.dateEnd.year,
        endMonth: localStorageHotel.dateEnd.month,
        endDay: localStorageHotel.dateEnd.day
      }
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



