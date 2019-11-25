<template>
  <div>
    <el-row class="admin-filter-bar">
      <span>起止日期（提交订单日期）:</span>
      <el-date-picker
        @change="getHotels"
        align="right"
        type="daterange"
        unlink-panels
        v-model="dateFilter"
      ></el-date-picker>
    </el-row>
    <!-- <el-row @click.native="toDetail()" class="list-item-body">
      <el-col :md="6" :sm="6" :xs="24">
        <div class="list-item-img">
          <img :src="'/downloadImg/' + tourObj.images[0].uuid" class="tour-image" />
        </div>
      </el-col>
      <el-col :md="12" :sm="12" :xs="24" class="list-item-content">
        <h4 v-text="tourObj.title"></h4>
        <p :title="tourObj.subTitle" class="card-body-desc" v-html="tourObj.subTitle"></p>
        <price-item :price="tourObj.minPrice"></price-item>
      </el-col>
      <el-col :md="6" :sm="6" :xs="24" class="list-item-price">
        <el-button @click="handleBook" type="danger">Book Now</el-button>
      </el-col>
    </el-row>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import TourApi from '@/api/tour';

@Component
export default class TourList extends Vue {
  private dateFilter: Array<Date> = [];

  private hotelList: Array<any> = []; // 旅游列表数据
  private pageNum: number = 1;
  private pageSize: number = 10;

  private mounted() {
    const start = new Date();
    const end = new Date();
    end.setTime(end.getTime() + 3600 * 24 * 1000);
    this.dateFilter = [start, end];
    this.getHotels();
  }

  /**
   * @private getHotels
   * @description 查询酒店
   */
  private getHotels() {
    const startTime = this.dateFilter[0];
    const endTime = this.dateFilter[1];
    TourApi.queryYiLongHotel({
      CityId: 101,
      ArrivalDate: moment(startTime).format('YYYY-MM-DD'),
      DepartureDate: moment(endTime).format('YYYY-MM-DD'),
      startPage: this.pageNum,
      pageSize: this.pageSize,
      ResultType: 3
    }).then((res: any) => {
      const list: string = res.data.object;
      const resultJson = JSON.parse(list);
      const resultList = resultJson.Result.Hotels;
      console.log(resultList);
    });
  }
}
</script>
