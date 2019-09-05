<template>
  <el-row class="list-item-body" @click.native="toDetail()">
    <el-col :md="6" :sm="6" :xs="24">
      <div class="list-item-img">
        <img src="@/assets/dsn.png" />
      </div>
    </el-col>
    <el-col :md="12" :sm="12" :xs="24" class="list-item-content">
      <h4>北京-上海迪士尼乐园 4天自由行</h4>
      <p
        class="row-2"
        title="迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接"
      >迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接迪士尼无限次一票全含🔥五星皇庭国际含早+烟火秀+快速通行证+景区机场酒店接</p>
      <p class="price">US$30 (RMB204)</p>
    </el-col>
    <el-col :md="6" :sm="6" :xs="24" class="list-item-price">
      <el-button type="danger" @click="handleBook">Book Now</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ListItem extends Vue {
  private toDetail() {}
  private handleBook() {}
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

.list-item-img img {
  width: 100%;
  max-width: 320px;
  max-height: 140px;
}

.list-item-content {
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
