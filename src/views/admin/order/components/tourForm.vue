<template>
  <el-form :span="12" class="demo-table-expand" inline label-position="left">
    <!-- <el-form-item label="订单编号">
      <span>{{ data.orderNo }}</span>
    </el-form-item>
    <el-form-item label="线路名称">
      <span>{{ data.tourName }}</span>
    </el-form-item>
    <el-form-item label="客人姓名">
      <span>{{ data.name }}</span>
    </el-form-item>-->
    <el-form-item label="出行日期">
      <span>{{ data.tourDate }}</span>
    </el-form-item>
    <el-form-item label="国家">
      <span>{{ data.country }}</span>
    </el-form-item>
    <el-form-item label="邮箱">
      <span>{{ data.mailAddress }}</span>
    </el-form-item>
    <el-form-item label="备用邮箱">
      <span>{{ data.alternatMailAddress }}</span>
    </el-form-item>
    <el-form-item label="手机号">
      <span>{{ data.phoneNumber }}</span>
    </el-form-item>
    <el-form-item label="成人数量">
      <span>{{ data.numberOfAdults }}</span>
    </el-form-item>
    <el-form-item label="儿童数量">
      <span>{{ data.numberOfChildren }}</span>
    </el-form-item>
    <el-form-item label="儿童年龄">
      <span>{{ data.ageOfChildren }}</span>
    </el-form-item>
    <el-form-item label="酒店">
      <span>{{ data.hotelName }}</span>
    </el-form-item>
    <el-form-item label="房间号">
      <span>{{ data.roomNumber }}</span>
    </el-form-item>
    <el-form-item label="酒店电话">
      <span>{{ data.hotelNumber }}</span>
    </el-form-item>
    <el-form-item label="到达航班号">
      <span>{{ data.arriveLineNumber }}</span>
    </el-form-item>
    <el-form-item label="到达时间">
      <span>{{ data.arriveTime }}</span>
    </el-form-item>
    <el-form-item label="离开航班号">
      <span>{{ data.leaveLineNumber }}</span>
    </el-form-item>
    <el-form-item label="离开时间">
      <span>{{ data.leaveTime }}</span>
    </el-form-item>
    <el-form-item label="其他要求">
      <span>{{ data.remarks }}</span>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class OrderAdmin extends Vue {
  @Prop() data!: any;
}
</script>

<style scoped>
.demo-table-expand {
  width: 50%;
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-form-item__label {
  color: #99a9bf;
}
</style>