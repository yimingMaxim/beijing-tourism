<template>
  <el-row class="header">
    <el-col class="header-logo" :sm="12" :xs="12">
      <img src="@/assets/logo.png" style="height: 100%;" />
    </el-col>
    <el-col class="header-login" :sm="12" :xs="12">
      <u>login</u>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  height: 100%;
}

.header-logo {
  text-align: left;
  height: 100%;
}

.header-login {
  text-align: right;
  padding-top: 40px;
}

.header-login u {
  cursor: pointer;
  font-size: 16px;
}

.header-login u:hover {
  color: #0084bb;
}
</style>
