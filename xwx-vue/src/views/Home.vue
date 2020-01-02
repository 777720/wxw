<style lang="less">
    .pg-home {
      .col-sm-12 {
        padding: 0;
      }
      .col-lg-4 {
        padding: 0;
      }
      .borderrb {
        border-bottom: 1px solid #eae8e4;
        border-right: 1px solid #eae8e4;
      }
      .borderb {
        border-bottom: 1px solid #eae8e4;
      }
      .borderr {
        border-right: 1px solid #eae8e4;
      }
      .fs135 {
        font-size: 1.25rem!important;
      }
      .h2-totle {
        font-size: 1.59375rem;
        margin-top: 30px;
      }
      .swiper-container {
        .swiper-img {
          width: 100%;
        }
      }
      .img-title {
        padding-top: 12px;
      }
      .img-tem {
        width: 100%;
      }
      .bdt {
        border-top: 1px solid #eae8e4;
      }
      width: 100%;
      margin-top: 68px;
      .min-content-one {
        .small-item {
          padding: 36px 6px;
          text-align: center;
          border-top: 1px solid #eae8e4;
          border-bottom: 1px solid #eae8e4;
        }

      }
      .content-one {
        width: 100%;
        text-align: center;
        display: flex;
        justify-items: flex-start;
        align-items: center;
        border-top: 1px solid #eae8e4;
        border-bottom: 1px solid #eae8e4;
        .left {
          width: 50%;
          border-right: 1px solid #eae8e4;
        }
        .right {
          width: 50%;
        }
      }
      .content-two {
        width: 100%;
        text-align: center;
        .two-text {
          font-size: 22px;
          font-weight: 700;
          margin-top: 20px;
        }
      }
    }
</style>
<template>
    <div class="pg-home">
      <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide><img class="swiper-img" :src="require('../assets/swiper-img/swiper-1.jpeg')" alt=""></swiper-slide>
          <swiper-slide><img class="swiper-img" :src="require('../assets/swiper-img/swiper-2.jpeg')" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>

      <media :query="{maxWidth: 500}">
        <div class="min-content-one">
          <div class="small-item">
            <img class="img-fluid" :src="require('../assets/home-img/home-1.jpeg')" />
            <h2 class="h2-totle">TWEED/DENIM SHIRT</h2>
          </div>
          <div class="small-item">
            <h2>ANDREA MARTIN</h2>
            <p>
              2020SS IS COMING
            </p>
            <div class="hbtn hb-fill-on-rev" @click="onJumpOtherFn('whatnewlist')">VIEW NOW</div>
          </div>
          <div class="small-item">
            <img class="img-fluid" :src="require('../assets/home-img/3.jpg')" />
            <h2 class="h2-totle">ZIPPED CHECK PRINT SHIRT</h2>
          </div>
        </div>

      </media>
      <media :query="{minWidth: 500}">
        <div class="content-one">
          <div class="left pd36">
            <img class="img-fluid" :src="require('../assets/home-img/home-1.jpeg')" />
            <h2 class="h2-totle">TWEED/DENIM SHIRT</h2>
          </div>
          <div class="right">
            <div class="pd36">
              <h2>ANDREA MARTIN</h2>
              <p>
                2020SS IS COMING
              </p>
              <div class="hbtn hb-fill-on-rev" @click="onJumpOtherFn('whatnewlist')">VIEW NOW</div>
            </div>
            <div class="pd36 bdt">
              <img class="img-fluid" :src="require('../assets/home-img/3.jpg')" alt="">
              <h2 class="h2-totle">ZIPPED CHECK PRINT SHIRT</h2>
            </div>
          </div>
        </div>
      </media>

      <div class="content-two">
        <div class="row" :style="{ width: '100%' }">
          <div class="col-sm">
            <div class="pd36">
              <img class="img-fluid" :src="require('../assets/home-img/2.jpg')" alt="">
              <h2 class="h2-totle fs135">ZIPPED SHEARLING JACKET <br><br></h2>
            </div>
          </div>
          <div class="col-sm">
            <div class="pd36">
              <img class="img-fluid" :src="require('../assets/home-img/4.jpg')" alt="">
              <h2 class="h2-totle fs135">ANDREA MARTIN PRINTED SWEATSHIRT</h2>
            </div>
          </div>
          <div class="col-sm">
            <div class="pd36">
              <img class="img-fluid" :src="require('../assets/home-img/5.jpg')" alt="">
              <h2 class="h2-totle fs135">BASIC PRINTED LONG SLEEVE T-SHIRT</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Media from 'vue-media'
export default {
  components: {
    Media
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    callback () {},
    onJumpOtherFn (url) {
      this.$router.push(`/${url}`)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

}
</script>
