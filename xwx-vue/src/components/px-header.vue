<style lang="less">
  .co-header {
    .abs-logoname {
      position: absolute;
      top: 22px;
      left: 38%;
    }
    .dropdown-menu {
      border-radius: 0;
      margin-top: 1px;
    }
    .navbar-toggler {
      border: 0;
      -moz-user-select:none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
    background-color: #fff!important;
    border-bottom: 1px solid #eae8e4;
    .wxw-nav-border-fade {
      border-bottom: 1px solid transparent;
      transition-duration: 0.3s;
    }
    .wxw-nav-border-fade:hover {
      border-bottom: 1px solid black;
    }
    .menu-select {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .selected-left {
        cursor: pointer;
        min-width: 345px;
        text-align: left;
      }
      .select-item {
        padding: 8px 16px;
      }
    }
  }
</style>

<template>
    <nav class="co-header navbar  navbar-expand-lg fixed-top navbar-light bg-light">
      <media :query="{maxWidth: 500}">
        <div class="abs-logoname">Andrea Martin</div>
      </media>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<!--        <span class="navbar-toggler-icon"></span>-->
        <img :style="{ width: '32px' }" :src="require('../assets/togger-inc.png')" alt="">
      </button>
      <a class="navbar-brand" href="#">
        <media :query="{maxWidth: 500}">
            <img @click="goHomeFn" src="../assets/logo-small.png" style="height: 42px"/>

        </media>
        <media :query="{minWidth: 500}"><img @click="goHomeFn" src="../assets/logo.jpeg" style="height: 42px"/></media>

      </a>

      <div ref="navbarSupportedContent" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">
              <span class="wxw-nav-border-fade" style="font-weight: 400;color: black" @click="goHomeFn">HOME</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
              <span @click="onJumpOtherFn('')" class="wxw-nav-border-fade" style="font-weight: 400;color: black">WHAT'S NEW</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown">
              <span class="wxw-nav-border-fade" style="font-weight: 400;color: black">WOMEN</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2" >
              <div>
                <div class="menu-select">
                  <div class="selected-left pd36">
                    <div class="select-item">2020SS</div>
                    <div class="select-item" @click="onJumpFn('womenlist', '0-1')">Coats & Jacket</div>
                    <div class="select-item" @click="onJumpFn('womenlist', '0-2')">Knitwear</div>
                    <div class="select-item" @click="onJumpFn('womenlist', '0-3')">Sweatshirt</div>
                    <div class="select-item" @click="onJumpFn('womenlist', '0-4')">T-shirts</div>
                  </div>
                  <media :query="{minWidth: 500}">
                    <div>
                      <div>
                        <img class="img-fluid" :src="require('../assets/home-img/women-select.jpeg')"/>
                      </div>
                    </div>
                  </media>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <span class="wxw-nav-border-fade" style="font-weight: 400;color: black">MEN</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
              <div>
                <div class="menu-select">
                  <div class="selected-left pd36">
                    <div class="select-item">2020SS</div>
                    <div class="select-item" @click="onJumpFn('manlist', '0-1')">Blazers&Jackets</div>
                    <div class="select-item" @click="onJumpFn('manlist', '0-2')">Knitwear&Sweatshirt</div>
                    <div class="select-item" @click="onJumpFn('manlist', '0-3')">Shirts</div>
                    <div class="select-item" @click="onJumpFn('manlist', '4-4')">T-shirts&Polos</div>
                  </div>
                  <media :query="{minWidth: 500}">
                    <div>
                      <img class="img-fluid" :src="require('../assets/home-img/man-select.jpeg')"/>
                    </div>
                  </media>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="wxw-nav-border-fade" style="font-weight: 400;color: black" @click="onJumpOtherFn('about-us')">ABOUT US</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import Media from 'vue-media'
export default {
  name: 'px-header',
  components: {
    Media
  },
  methods: {
    onJumpFn (type, id) {
      this.$router.push(`/${type}?id=${id}`)
      this.$refs.navbarSupportedContent.className = 'collapse navbar-collapse'
    },
    onJumpOtherFn (url) {
      this.$router.push(`/${url}`)
      this.$refs.navbarSupportedContent.className = 'collapse navbar-collapse'
    },
    goHomeFn () {
      this.$router.push('/')
      this.$refs.navbarSupportedContent.className = 'collapse navbar-collapse'
    }
  }
}
</script>
