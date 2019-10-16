<template>
  <div>
    <card-list-title :title="title" url></card-list-title>
    <el-collapse>
      <vehicle-card :car="car" :key="car.uuid" v-for="car in carList"></vehicle-card>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import vehicleCard from './components/vehicleCard.vue';
import cardListTitle from '@/components/cardListTitle.vue';

import ChauffeurApi from '@/api/chauffeur';
import Chauffeur from '@/model/chauffeur.model';

@Component({
  components: {
    vehicleCard,
    cardListTitle
  }
})
export default class ChauffeurService extends Vue {
  @Prop() title!: string;

  private carList: Array<Chauffeur> = []; // table列表数据

  /**
   * @private created
   * @description 立即实行函数 - click
   */
  private created() {
    this.getTbData();
  }

  /**
   * @private getTbData
   * @description 查询表格数据
   */
  private getTbData() {
    ChauffeurApi.queryCarList().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.carList = list.map((item: any) => {
        return new Chauffeur(item);
      });
    });
  }
}
</script>
