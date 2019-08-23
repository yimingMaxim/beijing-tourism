<template>
  <div>
    <u @click="onLoginOpen()">login</u>
    <el-dialog title="Login" :visible.sync="dialogDisplay" style="text-align: left;">
      <el-form ref="login_form" :model="loginData" :rules="validate">
        <el-form-item label="userName" prop="userName">
          <el-input v-model="loginData.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input type="password" v-model="loginData.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDisplay = false">cancel</el-button>
        <el-button type="primary" @click="onLogin()">login</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Admin extends Vue {
  private dialogDisplay: boolean = false;
}
</script>
