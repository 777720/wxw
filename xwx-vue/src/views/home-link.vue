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
import Common from '../core/common'
import ShopList from '../views/shop-list'
import manList from '../core/products/man'
import womanList from '../core/products/woman'
export default {
  components: {
    ShopList
  },
  mounted () {
    const { listName } = this.$route.query
    const waitSearchPucts = this[listName]
    const typeIndex = waitSearchPucts.type
    let allTypeProducts = []
    if (typeIndex === 'man') {
      allTypeProducts = manList.flat()
    } else {
      allTypeProducts = womanList.flat()
    }
    let checkProducts = []
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
            'm-3-1',
            'm-3-8',
            'm-3-9',
            'm-3-10',
            'm-3-11',
            'm-3-12',
            'm-3-13'
          ]
      },
      homeCenterTwo: {
        title: 'ZIPPED CHECK PRINT SHIRT',
        type: 'women',
        produts:
          [
            'w-1-2',
            'w-1-3',
            'w-1-4',
            'w-1-5'
          ]
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
