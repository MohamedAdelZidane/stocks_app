
<template>
    <section>
        <base-card>
        <h2>Add New Stock</h2>
        <stock-form @save-data="saveData"></stock-form>
        </base-card>
    </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import StockForm from '../../components/stocks/StockForm.vue'
export default{
    components: {
        StockForm,
        BaseCard
    },
    methods: {
        saveData(data){

            this.$store.dispatch('stocks/addStock', data)
            this.$router.replace('/stocks')
            
        }
    }
}
</script>
<!-- <template>
    <section>
        <h2>Register as a Stock</h2>
        <stock-form></stock-form>
    </section>
</template>

<script>
import StockForm from '../../components/stocks/StockForm.vue'
export default{
    components: {
        StockForm
    }
}
</script> -->
