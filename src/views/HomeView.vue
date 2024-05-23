<template>
  <main>
    <h3>Name: {{user.name}}</h3>
    <img src="https://www.robohash.org/3.png?set=set3" alt="">
    <h3>Balance: {{user.balance}}฿</h3>
    <h3>฿ Rate: {{ rate }} </h3>
  </main>
</template>

<script>
import { bitcoinService } from '@/services/bitcoinService';
import { userService } from '@/services/userService';

  export default {
    data() {
      return {
        user: null,
        rate: null,
      }
    },
    methods: {

    },

    async created() {
      this.user =  userService.getUser()
      this.rate = await bitcoinService.getRate()
    }
  }
</script>


<style lang="scss" scoped>
  img {
    width: 100px;
    height: 100px;
  }
</style>
