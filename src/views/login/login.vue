<template>
  <div class="login-item">
    <!-- <el-button size="small" type="success" class="hidden-sm-and-down" v-else disabled>已登录</el-button> -->
    <el-button
      @click="$router.push('/admin')"
      class="hidden-sm-and-down"
      size="small"
      type="primary"
      v-if="cookie.get('auth') === 'admin'"
    >控制台</el-button>
    <el-button
      @click="onLoginOpen()"
      class="hidden-sm-and-down"
      size="small"
      type="primary"
      v-else
    >login</el-button>
    <el-col class="hotline">24hours hotline 18515250136</el-col>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="dialogDisplay"
      style="text-align: left;"
      title="Login"
    >
      <el-form :model="loginData" :rules="validate" ref="login_form">
        <el-form-item label="userName" prop="name">
          <el-input auto-complete="off" v-model="loginData.name"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input auto-complete="off" type="password" v-model="loginData.password"></el-input>
        </el-form-item>
        <span>( Visitor login is not supported temporarily )</span>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="dialogDisplay = false">cancel</el-button>
        <el-button @click="onLogin()" type="primary">login</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Message } from 'element-ui';
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
          const { code, message, object } = res.data;
          if (code === 200) {
            Cookies.set('auth', 'admin');
            Cookies.set('authToken', object.token);
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
.hotline {
  font-weight: 800;
  font-family: monospace;
  font-size: 16px;
  padding-top: 20px;
  color: #e05a34;
}
</style>
