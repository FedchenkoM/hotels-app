app.filter('sortFilter', function () {
  return function (hotelList, param) {
    if (hotelList) {
      if (param === "no pets") {
        return hotelList.filter(h => h.animals === false)
      } else if(param === "no smoke"){
        return hotelList.filter(h => h.smoke === false)
      } else if(param === "price asc") {
        return hotelList.sort((h1,h2) => h1.price - h2.price )
      } else if(param === "price desc") {
        return hotelList.sort((h1,h2) => h2.price - h1.price )
      } else if(param === "rate(best first)") {
        return hotelList.sort((h1,h2) => h2.score - h1.score )
      } else if(param === "default") {
        return hotelList
      }
    }
  }
})
