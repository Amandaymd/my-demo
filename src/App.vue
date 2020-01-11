<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <getColor></getColor>
    <imgImport></imgImport>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import getColor from './components/getColor'
import imgImport from './components/img'

export default {
  name: 'app',
  components: {
    HelloWorld,
    getColor,
    imgImport
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
