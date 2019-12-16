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
      if (products[typeIndex].length === 0) {
        this.listData = []
      } else {
        this.listData = products[typeIndex][parseInt(idArr[1])]
      }
      this.categoryTitle = Const.womenTitleArr[parseInt(idArr[1])]
    }
  }
}
</script>
