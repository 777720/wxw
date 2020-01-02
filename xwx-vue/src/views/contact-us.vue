<style lang="less">
    .pg-contact-us {
      background-color: #f5f6f3;
      margin-top: 67px;
      min-height: 100vh;
      padding: 22px;
      .title {
        font-weight: 700;
        font-size: 2.125rem;
        padding-bottom: 12px;
        border-bottom: 1px solid #e2e6ea;
        margin-bottom: 36px;
      }
      .card-container {

      }
      .nobtwc {
        justify-content: flex-start!important;
      }
      .card-item {
        margin-top: 6px;
        border: 1px solid #eae8e4;
        padding: 1.5rem;
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        min-height: 360px;
        background: #fff;
        .card-title {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .card-text {
          font-weight: 200;
          font-size: 18px;
        }
        .card-btn {
          margin: 12px 6px;
          text-align: center;
        }
      }
    }
</style>
<template>
    <div class="pg-contact-us">
      <div class="title">
        WE ARE HERE TO HELP
      </div>
      <div class="row justify-content-center" :style="{ width: '100%' }" >
<!--        <div class="col-sm-4">-->
<!--          <div class="card-item nobtwc">-->
<!--            <div class="card-title">CALL US</div>-->
<!--            <div class="card-text">+1.866.VUITTON</div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="col-sm-4">
          <div class="card-item">
            <div class="card-title">INTERACT WITH US</div>
            <div class="card-text">
              Search product availability in stores nearest you by chatting with our instagram
            </div>
            <div class="card-btn">
              <div>
                <a class="hbtn hb-fill-on-rev" :style="{ width: '100%', height: 'auto' }" href="https://instagram.com/andreamartin_official?igshid=1cdc4ofjpq83o">
                  instagram@andreamartin_official
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-4">
          <div class="card-item">
            <div class="card-title">EMAIL US</div>
            <div class="card-text">
              Our dedicated specialists will be delighted to answer your questions
            </div>
            <div class="card-btn">
              <div class="hbtn hb-fill-on-rev" :style="{ width: '100%' }" @click="sendEmailFn">Send An Email</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    sendEmailFn () {
      this.$router.push('/send-email')
    }
  }
}
</script>
