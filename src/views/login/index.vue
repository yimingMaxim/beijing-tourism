<template>
  <div class="login-item">
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  private dialogDisplay: boolean = false;

  private loginData = {
    userName: '',
    password: ''
  };

  private validate = {
    userName: [
      {
        required: true,
        message: 'please enter your user name',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: 'please enter your user password',
        trigger: 'blur'
      },
      { min: 6, max: 18, message: 'length 6 to 18', trigger: 'blur' }
    ]
  };

  private onLoginOpen() {
    this.dialogDisplay = true;
  }

  private onLogin(formName: string) {
    (this.$refs.login_form as any).validate((valid: boolean) => {
      if (valid) {
        alert('submit!');
      } else {
        return false;
      }
    });
  }
}
</script>

<style scoped>
.login-item {
  padding-right: 15px;
}

.login-item u {
  cursor: pointer;
}
</style>
