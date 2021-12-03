app.filter('sortFilter', function () {
  return function (hotelsList, param) {
    if (hotelsList) {
      let list = hotelsList.map(h => h)
      switch (param) {
        case "only no pets":
          return list.filter(h => h.animals === false)

        case "only no smoke":
          return list.filter(h => h.smoke === false)

        case "price asc.":
          return list.sort((h1, h2) => h1.price - h2.price)

        case "price desc.":
          return list.sort((h1, h2) => h2.price - h1.price)

        case "rate(best first)":
          return list.sort((h1, h2) => h2.score - h1.score)

        default:
          return hotelsList
      }
    }
  }
})
