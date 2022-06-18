<template>

    <div class="card">
        <ul class="list-group list-group-flush">

            <li class="list-group-item" v-if="close >= open">
                <span>Last Close: </span>
                <h1 :style="{ color: 'green' }">{{ close }}</h1>

            </li>

            <li class="list-group-item" v-if="close < open">
                <span>Last Close: </span>
                <h1 :style="{ color: 'red' }">{{ close }}</h1>

            </li>

            <li class="list-group-item">{{ stock_name }}</li>
            <li class="list-group-item"><span>High:</span>
                <h4> {{ high }}</h4>
            </li>
            <li class="list-group-item"><span>Low:</span>
                <h4>{{ low }}</h4>
            </li>
            <li class="list-group-item"><span>Open:</span>
                <h4>{{ open }}</h4>
            </li>
            <li class="list-group-item"><span>Close:</span>
                <h4>{{ close }}</h4>
            </li>
        </ul>
    </div>





</template>

<script>
// import BaseButton from '../ui/BaseButton.vue'

export default {
   
    //   components: { BaseButton },
    props: ['high', 'low', 'open', 'close', 'stock_name']
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin-top: 2%;
    text-align: center;
}
</style>