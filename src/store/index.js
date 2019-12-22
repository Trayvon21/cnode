import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {},
        username: '',
    },
    mutations: {
        //保存/topics数据
        ['SET_USER'](state, data) {
            state.username = data
        },
    },
    actions: {

    },
    getters: {

    }
})