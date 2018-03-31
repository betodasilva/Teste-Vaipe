<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <List />
    </div>
    
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style lang="scss">
@import "./assets/sass/main.scss";


</style>
