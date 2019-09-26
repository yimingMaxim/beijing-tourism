<template>
  <div>
    <filter-bar ref="filter" @change="getTours"></filter-bar>
    <list-item v-for="tourObj in tourList" :key="tourObj.uuid" :tour-obj="tourObj"></list-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Breadcrumb from '@/components/breadcrumb.vue';
import FilterBar from '@/components/filterBar.vue';
import ListItem from '@/components/listItem.vue';

import TourApi from '@/api/tour';

import Tour from '@/model/tour.model';

@Component({
  components: {
    FilterBar,
    ListItem
  }
})
export default class TourList extends Vue {
  private tourType: string = '';

  private tourList: Array<Tour> = []; // 旅游列表数据

  private mounted() {
    this.tourType = this.$route.meta.type;
    this.getTours();
  }

  /**
   * @private getTours
   * @description 查询表格数据
   */
  private getTours() {
    const param = (this.$refs.filter as any).getSearchParam();
    param.tourType = this.tourType;
    TourApi.queryTourList(param).then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tourList = list
        ? list.map((item: any) => {
            return new Tour(item);
          })
        : [];
    });
  }
}
</script>
