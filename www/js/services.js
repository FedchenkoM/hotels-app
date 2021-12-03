app.factory('hotelListHttpHelper', function ($http, $q) {
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
})


  .factory('navHelper', function ($state) {
    return {
      toBook: (hotel) => $state.go('hotelCard', { hotel }),
      goToMain
    }

    function goToMain() {
      $state.go('main')
    }
  })


  .factory('localStorageHelper', function () {
    return {
      hasHotelInLocalStorage,
      getBookedHotelsList,
      setHotelToLocalStorage,
      hasDateCollision
    }

    function setHotelToLocalStorage(newBookedHotel) {
      let bookedList = getBookedHotelsList()
      bookedList.push(newBookedHotel)
      window.localStorage.setItem('bookedHotels', angular.toJson(bookedList))
    }

    function hasDateCollision(hotel) {
      const bookedHotels = getBookedHotelsList(hotel.id)
      if (!bookedHotels.length) {
        return false
      } else {
        const curHotelDateCheckin = new Date(hotel.dateStart.year, hotel.dateStart.month + 1, hotel.dateStart.day)
        const curHotelDateCheckout = new Date(hotel.dateEnd.year, hotel.dateEnd.month + 1, hotel.dateEnd.day)

        let curHotel = 0

        while (curHotel < bookedHotels.length) {
          let bookedHotel = bookedHotels[curHotel]

          const hotelDateCheckin = new Date(bookedHotel.dateStart.year, bookedHotel.dateStart.month + 1, bookedHotel.dateStart.day)
          const hotelDateCheckout = new Date(bookedHotel.dateEnd.year, bookedHotel.dateEnd.month + 1, bookedHotel.dateEnd.day)

          if ((curHotelDateCheckin >= hotelDateCheckin && curHotelDateCheckin <= hotelDateCheckout)
            || (curHotelDateCheckout >= hotelDateCheckin && curHotelDateCheckout <= hotelDateCheckout)
            || (curHotelDateCheckin <= hotelDateCheckin && curHotelDateCheckout >= hotelDateCheckout)) {
            return true
          } else {
            curHotel++
          }
          return false
        }
      }
    }

    function getBookedHotelsList(hotelId = null) {
      let bookedHotels
      if (!hotelId) {
        if (window.localStorage.getItem('bookedHotels')) {
          bookedHotels = angular.fromJson(window.localStorage.getItem('bookedHotels'))
        } else {
          bookedHotels = []
        }
      } else {
        if (window.localStorage.getItem('bookedHotels')) {
          let hotels = angular.fromJson(window.localStorage.getItem('bookedHotels'))
          bookedHotels = hotels.filter(hotel => hotel.id === hotelId)
        } else {
          bookedHotels = []
        }
      }
      return bookedHotels
    }

    function hasHotelInLocalStorage(hotelId) {
      const hotels = getBookedHotelsList()
      let curHotel = 0
      while (curHotel < hotels.length) {
        let cur = hotels[curHotel]

        if (cur.id === hotelId) {
          return true
        } else {
          curHotel++
        }
        return false
      }
    }
  })


  .factory('dateHelper', function () {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    return {
      dateEnd,
      setToday
    }

    function setToday() {
      return `${year}-${month}-${day}`
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



