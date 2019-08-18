<template>
  <el-row style="height: 100%;">
    <el-col :span="24" style="text-align: left;height: 100%;">
      <img src="@/assets/logo.png" style="height: 100%;" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
