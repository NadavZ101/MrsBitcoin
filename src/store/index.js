import { createStore } from 'vuex'

import contact from './modules/contact.js'

// Create a new store instance.
export default createStore({
    strict: true,
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    modules: {
        contact,
    }
})



