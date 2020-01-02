const sortDataByDate = (arr) => {
  arr.map((item, index) => {
    item.dateObj = new Date(item.upDate)
  })
  arr.sort(function (a, b) {
    return a.dateObj < b.dateObj ? 1 : -1
  })
  return arr
}

export default {
  sortDataByDate
}
