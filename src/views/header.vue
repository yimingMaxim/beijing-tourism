<template>
  <el-row>
    <el-col :span="24" style="text-align: left;">
      <img src="@/assets/logo.png" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>
