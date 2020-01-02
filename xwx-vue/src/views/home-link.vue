<style lang="less">
    .pg-home-link {
      margin-top: 67px;
    }
</style>
<template>
    <div class="pg-home-link">
      <ShopList :data="checkProducts" :categoryTitle="categoryTitle" />
    </div>
</template>
<script>
import products from '../core/product'
import Common from '../core/common'
import ShopList from '../views/shop-list'
export default {
  components: {
    ShopList
  },
  mounted () {
    const { listName } = this.$route.query

    const waitSearchPucts = this[listName]
    const typeIndex = waitSearchPucts.type
    let checkProducts = []
    let allTypeProducts = products[typeIndex].flat()
    allTypeProducts.forEach((item, index) => {
      let findIndex = waitSearchPucts.produts.findIndex((waitItem) => {
        return waitItem === item.id
      })
      if (findIndex > -1) {
        checkProducts.push(item)
      }
    })

    this.checkProducts = Common.sortDataByDate(checkProducts)
    this.categoryTitle = waitSearchPucts.title
  },
  data () {
    return {
      checkProducts: [],
      categoryTitle: '',
      homeSwipeTwo: {
        title: 'BASIC PRINTED LONG SLEEVE T-SHIRT',
        type: 'man',
        produts:
          [
            'm-1-6',
            'm-1-9',
            'm-1-7',
            'm-1-8'
          ]
      },
      homeCenterOne: {
        title: 'TWEED/DENIM SHIRT',
        type: 'man',
        produts:
          [
            'm-3-3',
            'm-3-4',
            'm-3-5',
            'm-3-2',
            'm-3-0',
            'm-3-1'
          ]
      },
      homeCenterTwo: {
        title: 'ZIPPED CHECK PRINT SHIRT',
        type: 'man',
        produts:
          []
      },
      homeBottomOne: {
        title: 'ZIPPED SHEARLING JACKET',
        type: 'man',
        produts: [
          'm-1-6',
          'm-1-9',
          'm-1-7',
          'm-1-8'
        ]
      },
      homeBottomTwo: {
        title: 'ANDREA MARTIN PRINTED SWEATSHIRT',
        type: 'man',
        produts: [
          'm-2-2',
          'm-2-3',
          'm-2-5',
          'm-2-4'
        ]
      },
      homeBottomThree: {
        title: 'BASIC PRINTED LONG SLEEVE T-SHIRT',
        type: 'man',
        produts: [
          'm-4-5',
          'm-4-6',
          'm-4-8',
          'm-4-7'
        ]
      }
    }
  }
}
</script>
