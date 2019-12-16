import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        detail: {},
        auth: {}
    },
    mutations: {
        //保存/topics数据
        ['GET_LIST'](state, data) {
            state.list = data
        },
        ['GET_DATA'](state, data) {
            state.detail = data
        },
        ['GET_AUTH'](state, data) {
            state.auth = data
        }
    },
    actions: {
        //get /topics 主题首页
        async getList({ commit }) {
            let res = await axios.req('/topics')
            commit('GET_LIST', res.data)
        },
        async getData({ commit, dispatch }, val) {
            let res = await axios.req(`/topic/${val}`)
            console.log(res.data);
            commit('GET_DATA', res.data)
            dispatch('getAuth', res.data.author.loginname)
        },
        async getAuth({ commit }, val) {
            let res = await axios.req(`/user/${val}`)
            console.log(res);
            commit('GET_AUTH', res.data)
        }

    },
    getters: {

    }
})