<script>

import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>

  <AppHeader />
    <RouterView />
  <AppFooter/>
</template>

<style scoped lang="scss">


</style>
