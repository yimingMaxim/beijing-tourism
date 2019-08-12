<template>
  <el-card :body-style="{ padding: '0' }">
    <img src="@/assets/dsn.png" class="image" />
    <div style="padding: 14px;">
      <p class="card-body-title">北京-上海迪士尼乐园 4天自由行</p>
      <p class="card-body-desc">迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接</p>
      <p>2783起</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SpotCard extends Vue {
  @Prop() private msg!: string;
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

.card-body-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 14px;
  line-height: 14px;
  color: #999;
  font-size: 12px;
}

.image {
  width: 100%;
  display: block;
}
</style>
