<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        :router="true"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">后台管理</template>
          <el-menu-item index="tour">旅游</el-menu-item>
          <el-menu-item index="chauffeur">用车</el-menu-item>
          <el-menu-item index="banner">轮播图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">订单管理</template>
          <el-menu-item index="tour_order">旅游订单</el-menu-item>
          <el-menu-item index="chauffeur_order">用车订单</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Admin extends Vue {
  private activeIndex!: string;

  private created(): any {
    this.activeIndex = this.$router.currentRoute.name as string;
  }
}
</script>
