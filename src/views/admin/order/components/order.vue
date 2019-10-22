<template>
  <div>
    <el-row class="admin-header">
      <el-col :span="12" class="admin-header-left">
        <h4 v-text="title"></h4>
      </el-col>
      <el-col :span="12" class="admin-header-right">
        <el-button @click="$router.push('/home')" icon="el-icon-back" type="warning">返回主页</el-button>
        <el-button @click="$router.go(-1)" icon="el-icon-back" type="danger">返回上级</el-button>
      </el-col>
    </el-row>
    <el-row class="admin-filter-bar">
      <span>起止日期（提交订单日期）:</span>
      <el-date-picker
        :picker-options="pickerOptions"
        @change="handleDateChange"
        align="right"
        type="daterange"
        unlink-panels
        v-model="dateFilter"
      ></el-date-picker>
    </el-row>
    <el-row class="admin-body">
      <slot name="table"></slot>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class OrderAdmin extends Vue {
  @Prop() title!: string;
  private dateFilter: Array<Date> = [];

  private pickerOptions = {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      },
      {
        text: '最近一个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      },
      {
        text: '最近三个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        }
      }
    ]
  };

  private created() {
    const start = new Date();
    const end = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    this.dateFilter = [start, end];
  }

  private handleDateChange() {
    this.$emit('onDateChange');
  }
}
</script>

<style scoped>
.admin-header {
  margin-bottom: 10px;
}
.admin-filter-bar {
  text-align: left;
  padding: 15px;
}
.admin-filter-bar span {
  margin-right: 20px;
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