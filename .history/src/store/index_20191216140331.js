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
            let res = await axios.req('/api/v1/topics')
            console.log(res.data)
        },
    }
})