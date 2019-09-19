<template>
  <div>
    <el-row class="detail-body">
      <el-col class="detail-img" :md="10" :xs="24">
        <img src="@/assets/lunbo.png" />
      </el-col>
      <el-col class="detail-content" :md="14" :xs="24">
        <h4>{{tourObj.title}}</h4>
        <div class="detail-content-text" v-html="tourObj.content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb.vue';

@Component({
  components: {
    Breadcrumb
  }
})
export default class Detail extends Vue {
  private tourObj: any = {};
  private created() {
    const tourStr: string = this.$route.params.data;
    this.tourObj = JSON.parse(tourStr);
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
