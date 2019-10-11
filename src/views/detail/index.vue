<template>
  <el-container class="main-body list-body">
    <el-main>
      <Breadcrumb :current="tourObj.title"></Breadcrumb>
      <el-row class="detail-body">
        <el-col :md="10" :xs="24" class="detail-img">
          <!-- <el-card> -->
          <img :src="'/downloadImg/' + tourObj.images[0].uuid" />
          <div class="price-table">
            <price-table :tour-obj="tourObj"></price-table>
          </div>
          <!-- </el-card> -->
        </el-col>
        <el-col :md="14" :xs="24" class="detail-content">
          <h4>{{tourObj.title}}</h4>
          <div class="detail-content-text" v-html="tourObj.content"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-aside class="hidden-sm-and-down" width="25%">
      <el-card :key="comment.uuid" class="box-card" v-for="comment in commentList">
        <div class="clearfix" slot="header">
          <el-col :span="12" class="comment-author">
            <strong>From:&nbsp;</strong>
            <span v-text="comment.authorName"></span>
          </el-col>
          <el-col :span="12" class="comment-star">
            <el-rate
              disabled
              score-template="{comment.star}"
              text-color="#ff9900"
              v-model="comment.star"
            ></el-rate>
          </el-col>
        </div>
        <img :src="'/downloadImg/' + comment.imageId" />
        <div class="card-content" v-html="comment.content"></div>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb.vue';
import PriceTable from './priceTable.vue';

import TourApi from '@/api/tour';

import Tour from '@/model/tour.model';
import Comment from '@/model/comment.model';

@Component({
  components: {
    Breadcrumb,
    PriceTable
  }
})
export default class Detail extends Vue {
  private tourObj: Tour = new Tour();
  private commentList: Array<Comment> = [];

  private created() {
    const tourId: string = this.$route.params.tourId;
    TourApi.queryTourById(tourId).then((res: any) => {
      this.tourObj = new Tour(res.data.object);
      this.getComment(tourId);
    });
  }

  private getComment(tourId: string) {
    TourApi.queryComment(tourId).then((res: any) => {
      this.commentList = res.data.object.map((item: any) => {
        return new Comment(item);
      });
    });
  }
}
</script>

<style>
.detail-body {
  text-align: left;
}
.detail-img {
  padding: 10px;
}
.detail-img img {
  max-width: 100%;
  max-height: 100%;
}
.detail-content {
  padding-left: 10px;
}
.detail-content h4 {
  font-weight: bolder;
  color: #ff8300;
}
.detail-content-text {
  padding-top: 10px;
}
.price-table {
  margin-top: 10px;
}
.box-card {
  margin-bottom: 10px;
}
.box-card img {
  max-width: 300px;
  max-height: 200px;
  margin-bottom: 5px;
}
.comment-author {
  text-align: left;
}
.comment-star {
  text-align: right;
}
.card-content p {
  margin: 0;
}
</style>
