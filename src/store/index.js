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
        },
        ['SET_REPLIE'](state, data) {
            state.arr.push(data[0].author.avatar_url)
        },
    },
    actions: {
        //get /topics 主题首页
        async getList({ commit }) {
            let res = await axios.get('/topics')
            commit('GET_LIST', res.data) //table的列表
            res.data.map(item => {
                this.dispatch('getCion', item)
            })
        },
        async getCion({ commit }, item) {
            let res = await axios.get(`/topic/${item.id}`)
            commit('SET_REPLIE', res.data.replies)
        },

        async getData({ commit, dispatch }, val) {
            let res = await axios.get(`/topic/${val}`)
            commit('GET_DATA', res.data)
            dispatch('getAuth', res.data.author.loginname)

        },
        async getAuth({ commit }, val) {
            let res = await axios.get(`/user/${val}`)
            console.log(res);
            commit('GET_AUTH', res.data)
        },
    },
    getters: {

    }
})