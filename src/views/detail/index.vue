<template>
  <el-container class="main-body list-body">
    <el-main>
      <Breadcrumb :current="tourObj.title"></Breadcrumb>
      <el-row class="detail-body">
        <el-col class="detail-img" :md="10" :xs="24">
          <img src="@/assets/lunbo.png" />
        </el-col>
        <el-col class="detail-content" :md="14" :xs="24">
          <h4>{{tourObj.title}}</h4>
          <div class="detail-content-text" v-html="tourObj.content"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-aside class="hidden-sm-and-down" width="25%">
      <el-card class="box-card" v-for="comment in commentList" :key="comment.uuid">
        <div slot="header" class="clearfix">
          <strong>From:</strong>
          <span v-text="comment.authorName"></span>
        </div>
        <div class="card-content" v-html="comment.content"></div>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb.vue';

import TourApi from '@/api/tour';

import Tour from '@/model/tour.model';
import Comment from '@/model/comment.model';

@Component({
  components: {
    Breadcrumb
  }
})
export default class Detail extends Vue {
  private tourObj: any = {};
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
  padding: 10px;
}
</style>
