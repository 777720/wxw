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
import womanList from '../core/products/woman'
import Const from '../core/const'
import Common from '../core/common'

import womanOnelist from '../core/products/woman-1'
import womanTwolist from '../core/products/woman-2'
import womanThreelist from '../core/products/woman-3'
import womanFourlist from '../core/products/woman-4'

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
      let listDataTemp
      if (id === '0-0') {
        listDataTemp = [
          ...womanOnelist,
          ...womanTwolist,
          ...womanThreelist,
          ...womanFourlist
        ]
        this.categoryTitle = 'New Arrivals'
      } else {
        this.categoryTitle = Const.womenTitleArr[parseInt(idArr[1])]
        listDataTemp = womanList[parseInt(idArr[1])]
      }
      this.listData = Common.sortDataByDate(listDataTemp)
    }
  }
}
</script>
