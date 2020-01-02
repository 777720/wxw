<style lang="less">
    .pg-send-email {
      background-color: #f5f6f3;
      margin-top: 67px;
      min-height: 100vh;
      padding: 42px;
      .title {
        font-weight: 700;
        font-size: 2.125rem;
        padding-bottom: 12px;
        border-bottom: 1px solid #e2e6ea;
        margin-bottom: 36px;
      }
      .newsletterDescription {
        font-weight: 300;
        font-size: 1rem;
        line-height: 2;
        letter-spacing: .4px;
        background: #fff;
        box-sizing: border-box;
        padding-left: 3vw;
        padding-right: 3vw;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
</style>
<template>
    <div class="pg-send-email">
      <div class="title">
        RECEIVE ANDREA MARTIN COMMUNICATIONS
      </div>
      <div class="newsletterDescription">
        For questions or queries, please contact Andrea Martin Customer Services：customercare@andreamartinofficial.com
      </div>
      <div class="newsletterDescription">
        For commercial informations and other requests, please contact Andrea Martin Commercial Office: commercialoffice@andreamartinofficial.com
      </div>
      <div class="newsletterDescription">
        <div class="form-group">
          <label for="title-input">Title*</label>
          <select type="title-input" class="form-control" id="title-input" v-model="title">
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
          </select>
        </div>
        <div class="form-group">
          <label for="first-name">First Name*</label>
          <input type="first-name" class="form-control" id="first-name" aria-describedby="first-name" v-model="firstName">
        </div>
        <div class="form-group">
          <label for="last-name">Last Name*</label>
          <input type="last-name" class="form-control" id="last-name" v-model="lastName">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="check">
          <label class="form-check-label" for="exampleCheck1">Uncheck the box if you prefer to not receive Andrea Martin emails. By subscribing you agree to our Privacy Policy. *</label>
        </div>
        <div class="hbtn hb-fill-on-rev" :style="{ width: '100%' }" @click="processFn">Process</div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      check: false
    }
  },
  methods: {
    processFn () {
      if (this.title === '' || this.firstName === '' || this.lastName === '' || this.email === '' || this.check === false) {
        this.$toasted.show('Please fill in the information correctly!')
        return
      }
      this.$toasted.show('Information has been submitted!')
      this.title = ''
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.check = false
    }
  }
}
</script>
