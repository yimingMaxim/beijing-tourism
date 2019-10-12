<template>
  <el-card :body-style="{ padding: '0' }">
    <el-row class="vehicle-card-header">
      <el-col :sm="12" :xs="12">
        <h4>锋范</h4>
        <small>1.5L自动</small>
      </el-col>
      <el-col :sm="12" :xs="12" class="vehicle-card-price">
        <p>
          <strong>$55</strong>
          <em>/日均</em>
        </p>
      </el-col>
    </el-row>
    <img class="image img-responsive" src="@/assets/car/nisang.jpg" />
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VehicleCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style>
.vehicle-card-header {
  padding-left: 30px;
  padding-top: 10px;
  text-align: left;
}

.vehicle-card-price {
  padding-top: 20px;
}

.vehicle-card-price strong {
  font-size: 18px;
  color: #ef3939;
}

.image {
  width: 100%;
  display: block;
}
</style>
