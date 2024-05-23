<template>
    <h1>Stats</h1>
    <nav>
      <RouterLink to='/stats/market_history'>Market History</RouterLink>
      <RouterLink to="/stats/avg_block_size">Average Block Size</RouterLink>
    </nav>
  <RouterView /> 
</template>

<script>
import { bitcoinService } from '@/services/bitcoinService'
import MarketHistory from '@/cmps/MarketHistory.vue'


export default {

  // data() {
  //   return {

  //   }
  // },
//   async created() {
//     try {
//       let values = await bitcoinService.getMarketPriceHistory()
      
//       this.chartData.labels = values.map(val => {
//           const date = new Date(val.x * 1000)
//           const day = date.getDate()
//           const month = date.getMonth()
//           const year = date.getFullYear().toString().slice(-2)
//           return `${day}/${month}/${year}`
//       })
      
//       this.chartData.datasets = [{
//         label: 'Market Price',
//         data: values.map(val => val.y)
//       }] 
      
//       console.log("🚀 ~ created ~  this.chartData.labels:",  this.chartData.labels)
//       console.log("🚀 ~ created ~ this.chartData:", this.chartData.datasets)
      
//     } catch (err) {
//       console.error(err)
//     }
//   }
}
</script>

<style lang="scss" scoped>
  
</style>
