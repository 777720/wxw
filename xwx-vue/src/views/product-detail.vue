<style lang="less">
    .pg-product-detail {
      margin-top:67px;
      display: flex;
      justify-items: flex-start;
      .borderex {
        border: 1px solid #eae8e4;
      }

      .gallery-top {
        height: 80%!important;
        width: 100%;
      }
      .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
      }
      .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      .gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
      .img-view {
        width: 60%;
        border-right: 1px solid #eae8e4;
      }
      .small-view {
        .product-name {
          font-weight: 700;
          font-size: 32px;
          padding: 36px 12px;
          text-align: center;
        }
        .size-border {
          border-top: 1px solid #eae8e4;
          border-bottom: 1px solid #eae8e4;
        }
        .product-size {
          text-align: left;
          font-size: 22px;
          font-weight: 500;
          padding: 30px 36px;
        }
        .product-price {
          text-align: left;
          font-weight: 700;
          font-size: 22px;
          padding: 30px 36px;
          border-bottom: 1px solid #eae8e4;
        }
        .product-detail {
          font-weight: 300;
          font-size: 1.125rem;
          line-height: 1.7777777777777777;
          padding: 33px;
          .ulstyle {
            list-style: none;
          }
        }
      }
      .big-view {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-items: flex-start;
        .content-view {
          .product-name {
            font-weight: 700;
            padding: 36px 12px;
            text-align: center;
          }
          .size-border {
            border-top: 1px solid #eae8e4;
            border-bottom: 1px solid #eae8e4;
          }
          .product-size {
            text-align: center;
            font-size: 22px;
            font-weight: 500;
            padding: 30px 0;
            margin: 0 36px;
          }
          .product-price {
            text-align: left;
            font-weight: 700;
            font-size: 22px;
            padding: 30px 36px;
            border-bottom: 1px solid #eae8e4;
          }
          .callus {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-bottom: 1px solid #eae8e4;
            padding: 36px;
          }
          .product-detail {
            font-weight: 300;
            font-size: 1.125rem;
            line-height: 1.7777777777777777;
            padding: 33px;
            .ulstyle {
              list-style: none;
            }
          }
        }
      }
    }
</style>
<template>
    <div class="pg-product-detail">
      <media :query="{maxWidth: 500}">
        <div :style="{ width: '100%' }">
          <div class="swiper-container">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide v-for="(item, index) in this.productData.url" :key="index">
                <img class="img-fluid" :src="item.path" />
              </swiper-slide>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
            </swiper>
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide v-for="(item, index) in this.productData.url" :key="index">
                <img  class="img-fluid borderex"  :src="item.path" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="small-view">
            <div>
              <h1 class="product-name">{{ productData.name }}</h1>
            </div>
            <div class="product-size size-border">
              <span>size: {{ productData.detail.size }}</span>
            </div>
            <div class="product-price">
              <span>€ {{ productData.price }}</span>
            </div>
            <div class="product-detail">
              <ul class="ulstyle">
                <li v-for="(item, index) in productFeature" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

      </media>
      <media :query="{minWidth: 500}">
        <div class="big-view">
          <div class="img-view" v-if="productData.url">
            <div><img class="img-fluid" v-for="(item, index) in productData.url" :key="index" :src="item.path" alt=""></div>
          </div>
          <div class="content-view">
            <div>
              <h1 class="product-name">{{ productData.name }}</h1>
            </div>
            <div class="product-size size-border">
              <span>size: {{ productData.detail.size }}</span>
            </div>
            <div class="product-price">
              <span>€: {{ productData.price }}</span>
            </div>
            <div class="product-detail">
              <ul class="ulstyle">
                <li v-for="(item, index) in productFeature" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </media>
    </div>

</template>
<script>
import Media from 'vue-media'
import manList from '../core/products/man'
import womanList from '../core/products/woman'

export default {
  components: {
    Media
  },
  mounted () {
    const { id } = this.$route.params
    const idArr = id.split('-')
    let type = idArr[0] === 'm' ? 'man' : 'women'
    let fullArr = []
    if (type === 'man') {
      fullArr = manList[idArr[1]]
    } else {
      fullArr = womanList[idArr[1]]
    }
    for (let i = 0; i < fullArr.length; i++) {
      if (fullArr[i].id === id) {
        this.productData = fullArr[i]
        this.productFeature = this.productData.detail.features.split('|')
      }
    }

    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
    this.backTop1()
  },
  data () {
    return {
      productData: {
        detail: {}
      },
      productFeature: [],
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    backTop1 () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
