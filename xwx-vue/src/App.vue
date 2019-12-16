<style lang="less">
  .app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
<template>
  <div id="app" class="app">
    <div id="nav">
      <PxHeader />
    </div>
    <div>
      <router-view />
    </div>
    <div>
      <PxFooter />
    </div>
  </div>
</template>
<script>
import PxHeader from './components/px-header'
import PxFooter from './components/px-footer'
export default {
  components: {
    PxHeader, PxFooter
  }
}
</script>
