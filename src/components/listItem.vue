<template>
  <el-row class="list-item-body" @click.native="toDetail()">
    <el-col :md="6" :sm="6" :xs="24">
      <div class="list-item-img">
        <img class="tour-image" :src="'/downloadImg/' + tourObj.images[0].uuid" />
      </div>
    </el-col>
    <el-col :md="12" :sm="12" :xs="24" class="list-item-content">
      <h4 v-text="tourObj.title"></h4>
      <p class="card-body-desc" :title="tourObj.subTitle" v-html="tourObj.subTitle"></p>
      <p class="price">${{tourObj.minPrice}}</p>
    </el-col>
    <el-col :md="6" :sm="6" :xs="24" class="list-item-price">
      <el-button type="danger" @click="handleBook">Book Now</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Tour from '@/model/tour.model';

@Component({})
export default class ListItem extends Vue {
  @Prop() tourObj!: Tour;

  private toDetail() {
    this.$router.push({
      name: 'tourDetail',
      params: {
        tourId: this.tourObj.uuid
      }
    });
  }
  private handleBook(e: any) {
    e.stopPropagation(); //非IE浏览器
  }
}
</script>

<style>
.list-item-body {
  background: #ffffff;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  cursor: pointer;
}

.list-item-body:hover {
  background-color: #f6fcff;
}

.list-item-img {
  text-align: left;
  margin-right: 20px;
}

.list-item-content {
  padding-left: 10px;
  margin-top: 5px;
}

.list-item-content h4 {
  text-align: left;
  margin-top: 0;
  font: 400 18px/1.5 microsoft yahei;
  color: #00a6c4;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-item-price {
  text-align: right;
}
</style>
