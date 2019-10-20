<template>
  <el-card :body-style="{ padding: '0' }" @click.native="toDetail()" class="card-hover">
    <img :src="'/downloadImg/' + tourObj.images[0].uuid" class="tour-image" />
    <div style="padding: 14px;">
      <p class="card-body-title">{{ tourObj.title }}</p>
      <p :title="tourObj.subTitle" class="card-body-desc" v-html="tourObj.subTitle"></p>
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

<style scoped>
p {
  margin-top: 0;
  text-align: left;
}
.card-body-title {
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 16px;
  font-family: sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

.card-hover:hover {
  background-color: #f6fcff;
  cursor: pointer;
}
</style>
