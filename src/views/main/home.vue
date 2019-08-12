<template>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SpotCard from '@/components/spotCard.vue';

@Component({
  components: {
    SpotCard
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
