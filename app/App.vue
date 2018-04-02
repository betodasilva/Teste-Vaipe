<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <List />
    </div>
    
  </div>
</template>

<script>
import List from './components/List.vue'
import AppHeader from './components/Header.vue'


export default {
  name: 'app',
  components: {
    List,
    AppHeader
  }
}
</script>

<style lang="scss">
@import "./assets/sass/main.scss";


</style>
