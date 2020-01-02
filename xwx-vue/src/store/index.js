/**
 * @desc 根状态管理集
 * @author xws
 * Date: 19/4/16
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  currentPageNumber: 1
}

let actions = {
  changePageNumberAction ({ commit }, page) {
    commit('PAGE_CHANGE', page)
  }
}
let types = {
  PAGE_CHANGE: 'PAGE_CHANGE'
}

let mutations = {
  [types.PAGE_CHANGE] (state, page) {
    state.currentPageNumber = page
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  actions,
  mutations
})
