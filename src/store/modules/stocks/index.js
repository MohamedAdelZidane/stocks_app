import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters'

// import VueAxios from 'vue-axios'
// import Vue from 'vue'

console.log(
    JSON.parse(localStorage.getItem('showList'))

);



// Vue.use(VueAxios,axios)

export default {
    namespaced: true,
    
    state() {
   
        

        return {
            localStorageData: JSON.parse(localStorage.getItem('showList')),
            // stock_symbol: '',
            // lastTradeNumbers: [],
            stocks: [
                {
                    id: Math.floor(Math.random() * 100),
                    stock_name: 'IBM',
                    high: "137.7500",
                    low: "137.7500",
                    open: "137.7500",
                    close: "137.7400",

                },
                
            ]

        }


    },
   
  
    mutations,
    actions,
    getters,
   
}