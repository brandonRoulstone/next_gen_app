<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components : {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: Comfortaa;
}

.primary_text_color{
    color: rgb(140, 78, 255);
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181819;
}
</style>
