<template>
  <div>
    <Carousel></Carousel>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="menu.label" :name="menu.name" v-for="menu in menus" :key="menu.name"></el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
  <!-- <el-container>
    <el-header>
      <Carousel></Carousel>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "./main/carousel.vue";

@Component({
  components: {
    Carousel
  }
})
export default class Main extends Vue {
  private activeName = "group";
  private menus = [
    {
      label: "Group tours",
      name: "group"
    },
    {
      label: "Private tours",
      name: "private"
    },
    {
      label: "Chauffeur service",
      name: "chauffeur"
    },
    {
      label: "Beijing Night Show",
      name: "nightShow"
    }
  ];
  private handleClick(tab: any) {
    debugger;
    const path = tab.name;
    this.$router.push(path);
  }
}
</script>

<style>
</style>
