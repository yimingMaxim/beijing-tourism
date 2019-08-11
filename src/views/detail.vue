<template>
  <el-container>
    <el-header>
      <Carousel></Carousel>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "./main/carousel.vue";

@Component({
  components: {
    Carousel
  }
})
export default class Detail extends Vue {}
</script>

<style>
</style>
