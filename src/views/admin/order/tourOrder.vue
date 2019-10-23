<template>
  <order-table @onDateChange="getOrderList" ref="orderTable" title="旅游订单管理">
    <template v-slot:table>
      <el-table :data="orderList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <tour-form :data="props.row"></tour-form>
          </template>
        </el-table-column>
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
      <div class="table-pagination">
        <el-pagination
          :current-page.sync="page.startPage"
          :page-size="page.pageSize"
          :total="page.total"
          @current-change="handlePageChange"
          background
          layout="prev, pager, next"
        ></el-pagination>
      </div>
    </template>
  </order-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from 'moment';
import OrderApi from '@/api/order';
import orderTable from './components/order.vue';
import tourForm from './components/tourForm.vue';

@Component({
  components: {
    orderTable,
    tourForm
  }
})
export default class TourOrder extends Vue {
  private orderList: Array<any> = [];
  private page: any = {
    startPage: 1,
    pageSize: 10,
    total: 0
  };
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

  private handlePageChange(startPage: number) {
    this.page.startPage = startPage;
    this.getOrderList();
  }

  private getOrderList() {
    const tableRef = this.$refs.orderTable as any;
    const startTime = tableRef.dateFilter[0];
    const endTime = tableRef.dateFilter[1];
    const { startPage, pageSize } = this.page;
    OrderApi.queryTourOrder({
      startTime: moment(startTime).format('YYYY-MM-DD'),
      endTime: moment(endTime).format('YYYY-MM-DD'),
      startPage,
      pageSize
    }).then(res => {
      const result = res.data.object;
      this.orderList = result.list;
      this.page.startPage = result.pageNum;
      this.page.total = result.total;
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
.table-pagination {
  text-align: right;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
}
</style>