<template>
  <el-row class="admin-header">
    <el-col :span="12" class="admin-header-left">
      <h4>{{title}}</h4>
    </el-col>
    <el-col :span="12" class="admin-header-right">
      <el-button @click="$router.push('/home')" icon="el-icon-back" type="warning">返回主页</el-button>
      <el-button @click="$router.go(-1)" icon="el-icon-back" type="danger">返回上级</el-button>
      <el-button @click="handleAdd" type="primary">
        新增
        <i class="el-icon-plus"></i>
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AdminHeader extends Vue {
  @Prop() title!: string;

  private handleAdd() {
    this.$emit('onAdd');
  }
}
</script>

<style scoped>
.admin-header {
  margin-bottom: 10px;
}
.admin-header-left {
  text-align: left;
}
.admin-header-left h4 {
  padding-left: 20px;
}
.admin-header-right {
  text-align: right;
}
</style>