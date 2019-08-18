<template>
  <div id="app">
    <el-container class="main-container">
      <el-header>
        <Header></Header>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./views/header.vue";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
  padding-left: 15%;
  padding-right: 15%;
}
</style>
