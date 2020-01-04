import dayjs from 'dayjs'

const sortDataByDate = (arr) => {
  arr.map((item, index) => {
    item.dateObj = dayjs(item.upDate)
  })
  arr.sort(function (a, b) {
    return a.dateObj.isBefore(b.dateObj) ? 1 : -1
  })
  return arr
}

export default {
  sortDataByDate
}
