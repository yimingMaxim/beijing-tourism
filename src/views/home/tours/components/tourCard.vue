<template>
  <el-card :body-style="{ padding: '0' }" class="card-hover" @click.native="toDetail()">
    <img :src="'/downloadImg/' + tourObj.images[0].uuid" class="tour-image" />
    <div style="padding: 14px;">
      <p class="card-body-title">{{ tourObj.title }}</p>
      <p class="card-body-desc" :title="tourObj.subTitle" v-html="tourObj.subTitle"></p>
      <price-item :price="tourObj.minPrice"></price-item>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PriceItem from '@/components/priceItem.vue';
import Tour from '@/model/tour.model';
const E = require('wangeditor');

@Component({
  components: {
    PriceItem
  }
})
export default class SpotCard extends Vue {
  @Prop() private tourObj!: Tour;

  private toDetail() {
    this.$router.push({
      name: 'tourDetail',
      params: {
        tourId: this.tourObj.uuid
      }
    });
  }
}
</script>

<style>
p {
  margin-top: 0;
  text-align: left;
}
.card-body-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #333;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  width: 100%;
  overflow: hidden;
  font-family: sans-serif;
}

.card-hover:hover {
  background-color: #f6fcff;
  cursor: pointer;
}
</style>
