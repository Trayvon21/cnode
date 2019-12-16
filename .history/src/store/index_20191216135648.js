import Vue from 'vue'
import Vuex from 'vuex'
import aixos from aixos
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
            let res = await aixos.rep('/topics')
            console.log(res)
        },
    }
})