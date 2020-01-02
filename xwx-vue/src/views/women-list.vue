<style lang="less">
    .pg-women-list {
      margin-top:67px;
    }
</style>
<template>
    <div class="pg-women-list">
      <ShopList :data="listData" :categoryTitle="categoryTitle" />
    </div>
</template>
<script>
import ShopList from './shop-list'
import products from '../core/product'
import Const from '../core/const'

export default {
  components: {
    ShopList
  },
  data () {
    return {
      listData: [],
      categoryTitle: ''
    }
  },
  mounted () {
    this.changeDataFn()
  },
  watch: {
    '$route' (to, from) {
      this.changeDataFn()
    }
  },
  methods: {
    changeDataFn () {
      const { id } = this.$route.query
      const idArr = id.split('-')
      const typeIndex = 'women'
      let listDataTemp
      if (id === '0-0') {
        listDataTemp = [
          ...products[typeIndex][1],
          ...products[typeIndex][2],
          ...products[typeIndex][3],
          ...products[typeIndex][4]
        ]
        this.categoryTitle = 'New Arrivals'
      } else {
        this.categoryTitle = Const.womenTitleArr[parseInt(idArr[1])]
        listDataTemp = products[typeIndex][parseInt(idArr[1])]
      }
      listDataTemp.map((item, index) => {
        item.dateObj = new Date(item.upDate)
      })
      listDataTemp.sort(function (a, b) {
        return a.dateObj < b.dateObj ? 1 : -1
      })
      this.listData = listDataTemp
    }
  }
}
</script>
