<template>
    <div class="container stocks_list_header">
        <div class="row">
            <div class="col-6 stocks_list_title">
                All Stocks
            </div>
            <div class="col-6 stocks_list_title controls">
                <base-button link to="/add_stock">Add Stock</base-button>
            </div>

        </div>
    </div>

    <section>
        <base-card>
            
                <div class="row">
                   
                    <div class="col-md-8 offset-md-4" id="stocks_list_items">
                         <ul>
                            <items-from-api>
                            </items-from-api>
                        </ul>
                        <ul v-if="filteredStocks">
                            <stock-item v-for="stock in filteredStocks" :key="stock.id" :stock_name="stock.stock_name"
                                :high="stock.high" :low="stock.low" :open="stock.open" :close="stock.close">
                            </stock-item>
                        </ul>
                        <ul v-if="addedStocks">
                            <stock-item2 v-for="stock in addedStocks" :key="stock.id" :stock_name="stock.stock_name"
                                :high="stock.high" :low="stock.low" :open="stock.open" :close="stock.close">
                            </stock-item2>
                        </ul>
                        <h3 v-else>No Stocks Found.</h3>
                    </div>
                    
                </div>
            






        </base-card>
    </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import StockItem from '@/components/stocks/StockItem.vue'
import StockItem2 from '@/components/stocks/StockItem2.vue'
import ItemsFromApi from '@/components/stocks/ItemsFromApi.vue'

export default {
    components: { BaseCard, BaseButton, StockItem, StockItem2, ItemsFromApi },



    computed: {

        filteredStocks() {
            return this.$store.getters['stocks/stocks'].stocks
        },
        addedStocks() {
            return this.$store.getters['stocks/stocks'].localStorageData
        },
        hasStocks() {
            return this.$store.getters['stocks/hasStocks']
        },
        // hasStocksFromApi() {
        //     return this.$store.getters['stocksFromApi/stocksFromApi'].stock_symbol
        // }
    }
}
</script> 

<style scoped>
.stocks_list_header {
    margin-top: 2%;
    margin-bottom: 2%;
}

.stocks_list_title {
    font-size: 24px;
}

</style>


