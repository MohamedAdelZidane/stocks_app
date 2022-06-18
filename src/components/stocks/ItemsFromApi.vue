<template>

    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-if="lastTradeNumbers['4. close'] >= lastTradeNumbers['1. open']">
                <div class="row">
                    <div class="col">
                        <span>Last Close: </span>
                    </div>
                    <div class="col">
                        <h2 :style="{ color: 'green' }">{{ lastTradeNumbers['4. close'] }}</h2>
                    </div>
                </div>
            </li>
            <li class="list-group-item" v-if="lastTradeNumbers['4. close'] < lastTradeNumbers['1. open']">
                <div class="row">
                    <div class="col">
                        <span>Last Close: </span>
                    </div>
                    <div class="col">
                        <h2 :style="{ color: 'red' }">{{ lastTradeNumbers['4. close'] }}</h2>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <b>
                    <h4>{{ stock_symbol }}</h4>
                </b>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>High: </span>
                    </div>
                    <div class="col">
                        <h4> {{ lastTradeNumbers['2. high'] }}</h4>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Low:</span>
                    </div>
                    <div class="col">
                        <h4>{{ lastTradeNumbers['3. low'] }}</h4>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Open:</span>
                    </div>
                    <div class="col">
                        <h4>{{ lastTradeNumbers['1. open'] }}</h4>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span>Close:</span>
                    </div>
                    <div class="col">
                        <h4>{{ lastTradeNumbers['4. close'] }}</h4>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
// import BaseButton from '../ui/BaseButton.vue'
import axios from 'axios'

export default {

    mounted() {
        // alert("Help")

        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
            .then((resp) => {
                console.log(resp.data)
                this.stock_symbol = resp.data['Meta Data']['2. Symbol']
                // this.stockName = null

                console.log(this.stock_symbol);

                let filteredArray = resp.data['Time Series (5min)']
                // let arr =[]
                // for(let i =0; filteredArray.lenth)
                // let arrayOfObjectKeys = Object.keys(filteredArray)
                let lastTradeData = filteredArray[Object.keys(filteredArray)[0]]
                console.log(lastTradeData);
                for (const data in lastTradeData) {
                    console.log(`${data}: ${lastTradeData[data]}`);
                    this.lastTradeNumbers = lastTradeData

                }
                console.log("I am here");
                console.log(lastTradeData);
                console.log(lastTradeData[Object.keys(lastTradeData)[4]]);
                this.lastTradeNumbers = lastTradeData
                console.log((lastTradeData))

                // console.log(this.lastTradeNumbers = resp.data['Time Series (5min)'])
                // let stockName = 
            })


    },
    data() {
        return {
            stock_symbol: '',
            lastTradeNumbers: [],
        }
    },
    // props: ['stock_symbol'],

    //   components: { BaseButton },
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin-top: 2%;
    text-align: center;
}
</style>