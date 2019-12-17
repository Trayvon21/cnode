import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        detail: {},
        auth: {},
        username: '',
        arr: [],
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
        },
        ['SET_USER'](state, data) {
            state.username = data
        }
    },
    actions: {
        //get /topics 主题首页
        async getList({ commit, state }) {
            let res = await axios.req('/topics')
            commit('GET_LIST', res.data)
            res.data.map(item => {
                axios.req(`/topic/${item.id}`).then(res => {
                    let count = res.data.replies[0].author.avatar_url;
                    return state.arr.push(count)
                })
            })
        },
        async getData({ commit, dispatch }, val) {
            let res = await axios.req(`/topic/${val}`)
            commit('GET_DATA', res.data)
            if (res.data.author.loginname) {
                dispatch('getAuth', res.data.author.loginname)
            }

        },
        async getAuth({ commit }, val) {
            let res = await axios.req(`/user/${val}`)
            console.log(res);
            commit('GET_AUTH', res.data)
        },
    },
    getters: {

    }
})