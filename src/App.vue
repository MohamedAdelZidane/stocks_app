
<template>

<the-header></the-header>
<router-view></router-view>
  <!-- <ul>
    <stocks-view v-for="res in storedResources" 
    :key="res.id" 
    :title="res.title" 
    :description="res.description" 
    :link="res.link">
    </stocks-view>
  </ul> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>


<style>

</style>


<!-- <script>
import StocksView from './components/stocks-view/StocksView.vue'
export default {
  components: {
    StocksView
  },
  data() {
    return {
      storedResources: [
        { id: 'official-guide', 
        title: 'Official Guide', 
        description: 'The Official Vue.js documentation',
        link: 'https://vuejs.org' 
        },
        { 
        id: 'google', 
        title: 'Google', 
        description: 'Learn to google',
        link: 'https://google.org' 
        },
      ]
    }
  }
}

</script>

<style >

</style> -->
