<style lang="less">
  .co-px-footer {
    background: #000000;
    padding: 0 36px;
    width: 100%;
    .top {
      color: #fff;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #392d23;
    }
    .bottom {
      width: 100%;
      box-sizing: border-box;
    }
    .link {
      cursor: pointer;
      padding: 2rem 0;
      color: #fff;
      font-size: 1rem;
      letter-spacing: .025rem;
      line-height: 1.25rem;
      font-weight: 400;
    }
    .row {
      margin: 0;
    }
  }
</style>

<template>
    <div class="co-px-footer">
      <div class="top"><span class="fs14" :style="{ fontWeight:'400' }" >ANDREA MARTIN</span></div>
      <div class="bottom">
        <div class="row" :style="{ width:'100%' }">
          <div class="col-sm-2 link" @click="clickFn('/contact')">
            Contact Us
          </div>
          <div class="col-sm-2 link" @click="clickFn('/send-email')">
            Email
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'px-footer',
  data () {
    return {}
  },
  methods: {
    clickFn (url) {
      this.$router.push(url)
    }
  }
}
</script>
