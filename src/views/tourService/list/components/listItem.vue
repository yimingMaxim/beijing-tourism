<template>
  <el-row @click.native="toDetail()" class="list-item-body">
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
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import PriceItem from '@/components/priceItem.vue';

import Tour from '@/model/tour.model';

@Component({
  components: {
    PriceItem
  }
})
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

<style scoped>
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
