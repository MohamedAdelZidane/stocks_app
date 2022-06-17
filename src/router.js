import { createRouter, createWebHistory } from "vue-router";
import AddCurrencyPairsList from './pages/currency_pairs/AddCurrencyPairs.vue';
import CurrencyPairsList from './pages/currency_pairs/CurrencyPairsList.vue';
import AddStock from './pages/stocks/AddStock.vue';
import StocksList from './pages/stocks/StocksList.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/stocks'},
        {path: '/stocks', component: StocksList},
        {path: '/add_stock', component: AddStock},
        {path: '/currency_pairs', component: CurrencyPairsList},
        {path: '/add_currency_pairs', component: AddCurrencyPairsList},
        {path: '/:notFound(.*)', component: NotFound},


    ],
})

export default router;