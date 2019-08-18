<template>
  <div>
    <Carousel></Carousel>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="menu.label" :name="menu.name" v-for="menu in menus" :key="menu.name"></el-tab-pane>
        </el-tabs>
        <Tours></Tours>
      </el-main>
      <el-aside class="visible-lg-block">Aside</el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "./components/carousel.vue";
import Tours from "./components/tours.vue";

@Component({
  components: {
    Carousel,
    Tours
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
    const path = tab.name;
    this.$router.push(path);
  }
}
</script>

<style>
.main {
  margin-top: 10px;
}
</style>
