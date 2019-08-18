<template>
  <div>
    <div class="tour-title">
      <h3>当季热门度假</h3>
    </div>
    <el-row>
      <el-col :md="8" :sm="12" :xs="24">
        <spot-card></spot-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <spot-card></spot-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <spot-card></spot-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SpotCard from "@/components/spotCard.vue";

@Component({
  components: {
    SpotCard
  }
})
export default class Tours extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
.tour-title {
  text-align: left;
  border-bottom: 2px solid #00afc7;
  height: 45px;
  margin-bottom: 15px;
}
.tour-title h3 {
  line-height: 45px;
  font: 23px/45px "\5FAE\8F6F\96C5\9ED1";
  font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
  color: #00afc7;
}
</style>
