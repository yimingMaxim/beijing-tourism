<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item to="/home">home</el-breadcrumb-item>
    <el-breadcrumb-item>{{current}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Breadcrumb extends Vue {
  @Prop() current!: string;
}
</script>

<style>
.el-breadcrumb {
  margin-bottom: 20px;
  font-size: 16px;
  font-family: auto;
  font-weight: bolder;
}
</style>
