<template>
    <section>
        All Stocks
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button link to="/add_stock">Add Stock</base-button>

            </div>

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
        </base-card>
    </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import StockItem from '@/components/stocks/StockItem.vue'
import StockItem2 from '@/components/stocks/StockItem2.vue'
export default {
    components: { BaseCard, BaseButton, StockItem, StockItem2 },



    computed: {

        filteredStocks() {
            return this.$store.getters['stocks/stocks'].stocks
        },
        addedStocks() {
            return this.$store.getters['stocks/stocks'].localStorageData
        },
        hasStocks() {
            return this.$store.getters['stocks/hasStocks']
        }
    }
}
</script> 


