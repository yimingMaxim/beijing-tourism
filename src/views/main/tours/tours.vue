<template>
  <div>
    <card-list-title :title="title" :path="tourType"></card-list-title>
    <el-row class="card-list-row">
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import tourCard from "./components/tourCard.vue";
import cardListTitle from "@/components/cardListTitle.vue";

import TourApi from "@/api/tour";

import Tour from "@/model/tour.model";

@Component({
  components: {
    tourCard,
    cardListTitle
  }
})
export default class Tours extends Vue {
  @Prop() title!: string;
  @Prop() tourType!: string;
  private path: string = "/list";

  private tourList: Array<Tour> = []; // 旅游列表数据

  private created() {}

  /**
   * @private getTbData
   * @description 查询表格数据
   */
  private getTbData() {
    TourApi.queryTour().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tourList = list.map((item: any) => {
        return new Tour(item);
      });
    });
  }
}
</script>

<style scoped src="../main.css">
</style>
