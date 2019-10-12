<template>
  <el-row class="header">
    <el-col :sm="12" :xs="12" class="header-logo">
      <img src="@/assets/logo.png" style="height: 100%;" />
    </el-col>
    <el-col :sm="12" :xs="12" class="header-login">
      <login-form></login-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import LoginForm from './login/login.vue';

@Component({
  components: {
    LoginForm
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  background: #fff;
  /* height: 100%; */
}

.header-logo {
  text-align: left;
  padding-left: 20px;
  padding-top: 10px;
}

.header-logo img {
  width: 160px;
}

.header-login {
  text-align: right;
  margin-bottom: 20px;
  padding-top: 20px;
}

.header-login u {
  cursor: pointer;
  font-size: 16px;
}

.header-login u:hover {
  color: #0084bb;
}
</style>
