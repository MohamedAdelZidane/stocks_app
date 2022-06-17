import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters'


console.log(
    JSON.parse(localStorage.getItem('showList'))

);



export default {
    namespaced: true,
   

    state() {


        return {
            localStorageData: JSON.parse(localStorage.getItem('showList')),
            stocks: [
                {
                    id: Math.floor(Math.random() * 100),
                    stock_name: 'IBM',
                    high: "137.7500",
                    low: "137.7500",
                    open: "137.7500",
                    close: "137.7500",

                }
            ]

        }


    },
    mutations,
    actions,
    getters
}