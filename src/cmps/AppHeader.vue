<template>
    <section class="header">
        <div class="logo">
            <RouterLink to="/"><h1>Mrs Bitcoin</h1></RouterLink> 
            <img src="../assets/imgs/bitcoin_processed.png" alt="" class="">
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/stats">Stats</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </section>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    margin-bottom: 10px;

    background: darkslategray;
    color: white;

    .logo {
      display: flex;
      align-items: center;
      
      h1 {
        color: whitesmoke;
      }
      
      img {
          width: 50px;
          height: 50px;
          display: inline;
      }
    }

    nav {
      font-size: 16px;
    }
    
    nav a.router-link-exact-active {
      color: var(--color-text);
    }
    
    nav a.router-link-exact-active:hover {
      background-color: transparent;
    }
    
    nav a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
    }
    
    nav a:first-of-type {
      border: 0;
    }
}
</style>