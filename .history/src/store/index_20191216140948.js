import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        ['GET_LIST'](state, data) {
            state.list = data
        }
    },
    actions: {
        async getList({ commit }) {
            let res = await axios.req('/v1/topic/5433d5e4e737cbe96dcef312')
            console.log(res)
        },
    }
})