app.filter('sortFilter', function () {
  return function (hotelsList, param) {
    if (hotelsList) {
      let list = hotelsList.map(h => h)

      if (param === "no pets") {
        return list.filter(h => h.animals === false)
      } else if (param === "no smoke") {
        return list.filter(h => h.smoke === false)
      } else if (param === "price asc") {
        return list.sort((h1, h2) => h1.price - h2.price)
      } else if (param === "price desc") {
        return list.sort((h1, h2) => h2.price - h1.price)
      } else if (param === "rate(best first)") {
        return list.sort((h1, h2) => h2.score - h1.score)
      } else {
        return hotelsList
      }
    }
    return
  }
})
