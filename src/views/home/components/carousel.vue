<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item :key="banner.uuid" v-for="banner in banners">
        <img :src="'/downloadImg/' + banner.imageid" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TourApi from '@/api/tour';
import Banner from '@/model/banner.model';

@Component
export default class Carousel extends Vue {
  private banners: Array<Banner> = []; // table列表数据

  private mounted() {
    TourApi.queryBanners().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.banners = list.map((item: any) => {
        return new Banner(item);
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
