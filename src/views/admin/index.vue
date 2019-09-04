<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">后台管理</template>
          <el-menu-item index="tour">旅游</el-menu-item>
          <el-menu-item index="bus">chauffeur service</el-menu-item>
          <el-menu-item index="nightShow">night show</el-menu-item>
        </el-submenu>
        <el-menu-item index="order">订单管理</el-menu-item>
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
