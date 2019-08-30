<template>
  <div id="app">
    <el-container class="main-container">
      <el-header id="main-header" style="height: 100%;">
        <Header></Header>
      </el-header>
      <router-view />
    </el-container>
    <el-footer style="height: 100%;">
      <Footer></Footer>
    </el-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './views/header.vue';
import Footer from './views/footer.vue';

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f9f9f9;
}

/* .main-container {
  padding-left: 10%;
  padding-right: 10%;
} */

#main-header {
  padding: 0;
}
</style>
