const sortDataByDate = (arr) => {
  arr.sort(function (a, b) {
    return a.dateObj < b.dateObj ? 1 : -1
  })
  return arr
}

export default {
  sortDataByDate
}
