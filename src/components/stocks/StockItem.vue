<template>

    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-if="close >= open">
                <div class="row">
                    <div class="col">
                        <span>Last Close: </span>
                    </div>
                    <div class="col">
                        <h2 :style="{ color: 'green' }">{{ close }}</h2>
                    </div>
                </div>
            </li>
            <li class="list-group-item" v-if="close < open">
                <div class="row">
                    <div class="col">
                        <span>Last Close: </span>
                    </div>
                    <div class="col">
                        <h2 :style="{ color: 'red' }">{{ close }}</h2>
                    </div>
                </div>
            </li>
            <li class="list-group-item"><b>
                    <h4>{{ stock_name }}</h4>
                </b></li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>High:</span>
                    </div>
                    <div class="col">
                        <h4> {{ high }}</h4>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Low:</span>

                    </div>
                    <div class="col">
                        <h4>{{ low }}</h4>

                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Open:</span>
                    </div>
                    <div class="col">
                        <h4>{{ open }}</h4>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Close:</span>
                    </div>
                    <div class="col">
                        <h4>{{ close }}</h4>
                    </div>
                </div>
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