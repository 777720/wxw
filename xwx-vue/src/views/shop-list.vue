<style lang="less">
.pg-shop-list {
  min-height: 100vh;
  .row {
    margin: 0;
  }
  .lv-price {
    font-weight: 300;
  }
  .lv-name {
    font-weight: 500;
    margin-bottom: 12px;
  }

  .categoryTitle {
    padding: 16px 36px;
    border-bottom: 1px solid #eae8e4;
  }
  .list-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 0 12px 12px 12px;
  }
  .list-border {
    border-bottom: 1px solid #eae8e4;
    border-right: 1px solid #eae8e4;
  }
  .pagination {
    padding: 12px 6px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
<template>
  <div class="pg-shop-list">
    <div class="categoryTitle">
      <div class="h6-text">{{ categoryTitle }}</div>
    </div>
    <div class="row" :style="{ width: '100%' }">
      <div
        class="col-sm-4 list-border"
        v-for="(item, index) in tableData"
        :key="index"
      >
        <div class="list-item" @click="clickDetailFn(item.id)">
          <img class="img-fluid" :src="item.url[0].path" alt="" />
          <div>
            <div class="lv-name">{{ item.name }}</div>
            <div class="lv-price">€:{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="data.length"
        @current-change="pageChangeFn"
      />
    </div>
  </div>
</template>
<script>
// import products from '../core/product'
// import Const from '../core/const'

import Common from '../core/common'

export default {
  props: {
    data: {
      type: Array,
      defualt: () => []
    },
    categoryTitle: String
  },
  watch: {
    data (val) {
      this.init(val)
    }
  },
  data () {
    return {
      sortData: [],
      tableData: [],
      pageSize: 9,
      currentIndex: 1
    }
  },
  mounted () {
    this.init(this.data)
  },
  methods: {
    init (data) {
      let dataTemp = [].concat(data)
      this.currentIndex = 1
      let transData = Common.sortDataByDate(dataTemp)
      this.sortData = transData
      this.tableData = this.sliceTargetPage(transData, this.pageSize, 1)
    },
    pageChangeFn (val) {
      this.currentIndex = val
      this.tableData = this.sliceTargetPage(this.sortData, this.pageSize, val)
    },

    sliceTargetPage (arr, pageSize, pageNumber) {
      let start = pageSize * (pageNumber - 1)
      let end = start + pageSize
      return arr.slice(start, end)
    },
    clickDetailFn (id) {
      this.$router.push(`/details/${id}`)
    }
  }
}
</script>
