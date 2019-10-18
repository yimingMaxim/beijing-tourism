<template>
  <order-table @onDateChange="getOrderList" ref="orderTable">
    <template v-slot:table>
      <el-table :data="orderList" style="width: 100%">
        <el-table-column
          :key="column.value"
          :label="column.label"
          :prop="column.value"
          :width="column.width"
          v-for="column in columns"
        >
          <template slot-scope="scope">
            <span v-text="scope.row[column.value]"></span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </order-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from 'moment';
import OrderApi from '@/api/order';
import orderTable from './components/order.vue';

@Component({
  components: {
    orderTable
  }
})
export default class TourOrder extends Vue {
  private orderList: Array<any> = [];
  private columns: any = [
    {
      label: '订单号',
      value: 'orderNo'
    },
    {
      label: '旅游线路',
      value: 'tourName'
    },
    {
      label: '客户姓名',
      value: 'name'
    },
    {
      label: '订单提交时间',
      value: 'createTime'
    }
  ];

  private mounted() {
    this.getOrderList();
  }

  private getOrderList() {
    const tableRef = this.$refs.orderTable as any;
    const startTime = tableRef.dateFilter[0];
    const endTime = tableRef.dateFilter[1];
    OrderApi.queryTourOrder({
      startTime: moment(startTime).format('YYYY-MM-DD'),
      endTime: moment(endTime).format('YYYY-MM-DD'),
      startPage: 1,
      pageSize: 10
    }).then(res => {
      const result = res.data.object;
      this.orderList = result.list;
    });
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