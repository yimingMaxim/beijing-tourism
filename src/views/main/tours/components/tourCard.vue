<template>
  <el-card :body-style="{ padding: '0' }" class="card-hover" @click.native="toDetail()">
    <img :src="'/downloadImg/' + tourObj.images[0].uuid" class="tour-image" />
    <div style="padding: 14px;">
      <p class="card-body-title">{{ tourObj.title }}</p>
      <p class="card-body-desc" v-html="tourObj.subTitle"></p>
      <p class="price">${{tourObj.minPrice}}</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tour from '@/model/tour.model';
const E = require('wangeditor');

@Component
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
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}

.card-hover:hover {
  background-color: #f6fcff;
  cursor: pointer;
}
</style>
