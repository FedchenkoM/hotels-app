app.factory('hotelListHttpHelper', ['$http', '$q', function ($http, $q) {
  function getHotelsList() {
    let deferred = $q.defer()

    $http.get('hotels-list/hotels-list.json')
      .then(data => deferred.resolve(data.data))
      .catch(error => {
        let errorMsg = 'Error'
        switch (error.status) {
          case 400 || 401 || 403:
            errorMsg = 'Invalid request';
            break;
          case 404:
            errorMsg = 'Server not found';
            break;
          case 407:
            errorMsg = 'Timeout expired';
            break;
          case 410:
            errorMsg = 'Data deleted';
            break;
          case 503:
            errorMsg = 'Server is not available';
            break;
        }
        deferred.reject(errorMsg)
      })
    return deferred.promise
  }
  return {
    getHotelsList
  }
}])


  .factory('navHelper', ['$state', function ($state) {
    return {
      toBook: (hotel) => $state.go('hotelCard', { hotel }),
      goToMain: () => $state.go('main')
    }
  }])


  .factory('localStorageHelper', function () {
    function setHotelToLocalStorage(newBookedHotel) {
      const bookedList = getBookedHotelsList()
      bookedList.push(newBookedHotel)
      window.localStorage.setItem('bookedHotels', angular.toJson(bookedList))
    }

    function hasDateCollision(hotel) {
      const bookedHotels = getBookedHotelsList(hotel?.id)
      if (!bookedHotels) {
        return false
      } else {
        const curHotelDateCheckin = Date.parse(hotel.dateStart)
        const curHotelDateCheckout = Date.parse(hotel.dateEnd)

        return bookedHotels.find(h => {
          const hCheckin = Date.parse(h.dateStart)
          const hCheckout = Date.parse(h.dateEnd)
          if ((curHotelDateCheckin >= hCheckin && curHotelDateCheckin <= hCheckout)
            || (curHotelDateCheckout >= hCheckin && curHotelDateCheckout <= hCheckout)
            || (curHotelDateCheckin <= hCheckin && curHotelDateCheckout >= hCheckout)) {
            return true
          }
          return false
        })
      }
    }

    function getBookedHotelsList(hotelId) {
      let bookedHotels = angular.fromJson(window.localStorage.getItem('bookedHotels'))
      if (!hotelId) {
        if (bookedHotels) {
          return bookedHotels
        }
      } else {
        if (bookedHotels) {
          return bookedHotels.filter(hotel => hotel.id === hotelId)
        }
      }
      return []
    }

    return {
      getBookedHotelsList,
      setHotelToLocalStorage,
      hasDateCollision
    }
  })


  .factory('dateHelper', function () {
    let date = new Date()

    function getDate(date, numOfDays) {
      if (!numOfDays) return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

      else return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + numOfDays}`
    }

    return {
      getDate,
      setToday: () => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  })



