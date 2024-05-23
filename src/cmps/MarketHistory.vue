<template>
  <section class="market-history-stats" v-if="chartData.labels && chartData.datasets">
      <Bar id="my-chart-id" :data="chartData" :options="chartOptions" />
  </section>
  <RouterLink to="/stats">Close</RouterLink>

  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { bitcoinService } from '@/services/bitcoinService'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  
  export default {
    name: 'BarChart',
    components: {
      Bar,
    },
  
    data() {
      return {
        chartId: 'my-chart-id',
        chartData: null,
        chartOptions: {
          responsive: true,
          plugins: {
            legend: { display: true }
          },
          legend: 'Market Price',
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      }
    }, 
    async created() {
      try {
        const data = {}
        const marketPriceHistory = await bitcoinService.getMarketPriceHistory()
       
        console.log("🚀 ~ created ~ marketPriceHistory:", marketPriceHistory[0])
        console.log(typeof(marketPriceHistory))

        const labels = marketPriceHistory.map(val => {
          const date = new Date(val.x * 1000)
          const day = date.getDate()
          const month = date.getMonth()
          const year = date.getFullYear().toString().slice(-2)
          const formatDate = `${day}/${month}/${year}`
          return formatDate}
          ).slice(0, 10)
        console.log("🚀 ~ created ~ labels:", labels)
        
        const datasets = [
          {borderWidth: 1, color:'red', label: 'Price', data: marketPriceHistory.map(val => val.y).slice(0, 10) },
          
        ]
        console.log("🚀 ~ created ~ datasets:", datasets)

        data.labels = labels
        data.datasets = datasets
        this.chartData = data

        // let values = await bitcoinService.getMarketPriceHistory()
        
        // this.chartData.labels = values.map(val => {
        //     const date = new Date(val.x * 1000)
        //     const day = date.getDate()
        //     const month = date.getMonth()
        //     const year = date.getFullYear().toString().slice(-2)
        //     return `${day}/${month}/${year}`
        // })
        
        // this.chartData.datasets = [{
        //   label: 'Market Price',
        //   data: values.map(val => val.y)
        // }] 
        
        // console.log("🚀 ~ created ~  this.chartData.labels:",  this.chartData.labels)
        // console.log("🚀 ~ created ~ this.chartData:", this.chartData.datasets)
        
      } catch (err) {
        console.error(err)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .market-history-stats {
      background: white;
    }
  
  </style>