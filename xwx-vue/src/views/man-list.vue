<style lang="less">
    .pg-man-list {
      margin-top:67px;
    }
</style>
<template>
    <div class="pg-man-list">
      <ShopList :data="listData" :categoryTitle="categoryTitle" />
    </div>
</template>
<script>
import ShopList from './shop-list'
import products from '../core/product'
import Const from '../core/const'

export default {
  mounted () {
    this.changeDataFn()
  },
  components: {
    ShopList
  },
  data () {
    return {
      listData: [],
      categoryTitle: ''
    }
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
      const typeIndex = 'man'
      if (id === '0-0') {
        console.log('0-0')
        this.listData = [
          ...products[typeIndex][1],
          ...products[typeIndex][2],
          ...products[typeIndex][3],
          ...products[typeIndex][4]
        ]
        this.categoryTitle = 'New Arrival'
        return
      }
      this.listData = products[typeIndex][parseInt(idArr[1])]
      this.categoryTitle = Const.manTitleArr[parseInt(idArr[1])]
    }
  }
}
</script>
