import { createStore } from 'vuex';
import stocksModule from './modules/stocks/index.js'

const store = createStore({
    modules: {
        stocks: stocksModule
    } 
})

export default store;