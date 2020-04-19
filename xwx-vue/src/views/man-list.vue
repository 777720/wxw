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
import Const from '../core/const'
import Common from '../core/common'
import manList from '../core/products/man'
import manOneList from '../core/products/man-1'
import manTwoList from '../core/products/man-2'
import manThreeList from '../core/products/man-3'
import manFourList from '../core/products/man-4'

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
      let listDataTemp
      if (id === '0-0') {
        listDataTemp = [
          ...manOneList,
          ...manTwoList,
          ...manThreeList,
          ...manFourList
        ]
        this.categoryTitle = 'New Arrivals'
      } else {
        this.categoryTitle = Const.manTitleArr[parseInt(idArr[1])]
        listDataTemp = manList[parseInt(idArr[1])]
      }
      this.listData = Common.sortDataByDate(listDataTemp)
    }
  }
}
</script>
