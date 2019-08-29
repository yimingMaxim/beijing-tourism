<template>
  <el-row class="list-item-body">
    <el-col :md="6" :sm="6" :xs="6">
      <div class="list-item-img">
        <img src="@/assets/dsn.png" class="image img-responsive" />
      </div>
    </el-col>
    <el-col :md="12" :sm="12" :xs="12" class="list-item-content">
      <h4>北京-上海迪士尼乐园 4天自由行</h4>
      <p title="迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接">迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接</p>
    </el-col>
    <el-col :md="6" :sm="6" :xs="6">
      <p class="list-item-price">US$30 (RMB204)</p>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ListItem extends Vue {}
</script>

<style>
.list-item-body {
  background: #ffffff;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 15px;
}

.list-item-img {
  margin-right: 5px;
}

.list-item-content {
  padding-left: 10px;
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
  color: crimson;
  font-weight: bolder;
  font-size: 18px;
}
</style>
