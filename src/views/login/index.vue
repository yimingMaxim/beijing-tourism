<template>
  <div class="login-item">
    <!-- <el-button size="small" type="success" class="hidden-sm-and-down" v-else disabled>已登录</el-button> -->
    <el-button
      size="small"
      type="primary"
      class="hidden-sm-and-down"
      v-if="cookie.get('auth') === 'admin'"
      @click="$router.push('/admin')"
    >控制台</el-button>
    <el-button
      size="small"
      type="primary"
      class="hidden-sm-and-down"
      v-else
      @click="onLoginOpen()"
    >登录</el-button>
    <el-dialog
      title="Login"
      :visible.sync="dialogDisplay"
      :close-on-click-modal="false"
      style="text-align: left;"
    >
      <el-form ref="login_form" :model="loginData" :rules="validate">
        <el-form-item label="userName" prop="name">
          <el-input v-model="loginData.name" auto-complete="off"></el-input>
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
import Cookies from 'js-cookie';
import Wang from '@/utils/wang';
import AuthApi from '@/api/auth';

@Component
export default class LoginForm extends Vue {
  private dialogDisplay: boolean = false;
  private cookie: any = Cookies;

  private loginData = {
    name: '',
    password: ''
  };

  private validate = {
    name: [
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

  private onLoginClose() {
    this.dialogDisplay = false;
  }

  private onLogin(formName: string) {
    (this.$refs.login_form as any).validate((valid: boolean) => {
      if (valid) {
        const param = this.loginData;
        AuthApi.login(param).then((res: any) => {
          const { code, object } = res.data;
          if (code === 200) {
            // const { auth, authToken } = object;
            // Cookies.set('auth', auth);
            // Cookies.set('authToken', authToken);
            Cookies.set('auth', 'admin');
            Cookies.set('authToken', Wang.randomString(32));
            this.$router.push('/admin');
          }
          this.onLoginClose();
        });
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
