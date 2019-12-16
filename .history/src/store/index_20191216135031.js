import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        ['GET_LIST'](state, data) {
            commit()
        }
    },
    actions: {},
    modules: {}
})