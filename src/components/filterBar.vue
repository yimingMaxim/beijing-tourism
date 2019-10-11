<template>
  <el-form ref="filter_form" :model="searchKey" label-width="80px" size="mini">
    <el-row>
      <el-col :md="12" :sm="12" :xs="24">
        <el-form-item label="keywords">
          <el-input v-model="searchKey.keywords" placeholder="keywords"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="5" :sm="8" :xs="24">
        <el-form-item class="no-margin" label="budget">
          <el-select v-model="searchKey.budget">
            <el-option label="Any Budget" value="0,10000"></el-option>
            <el-option label="US$40" value="0,40"></el-option>
            <el-option label="US$60" value="0,60"></el-option>
            <el-option label="US$70" value="0,70"></el-option>
            <el-option label="US$100" value="0,100"></el-option>
            <el-option label="Above US$150" value="150,10000"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :md="5" :sm="8" :xs="24">
        <el-form-item label="length">
          <el-select v-model="searchKey.length">
            <el-option label="Any Length" value="0,100"></el-option>
            <el-option label="1day" value="1,1"></el-option>
            <el-option label="2days" value="2,2"></el-option>
            <el-option label="3-5days" value="3,5"></el-option>
            <el-option label="6days or more" value="6,100"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :md="4" :sm="8" :xs="24" style="margin-bottom: 10px;">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="handleSearch">Search</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FilterBar extends Vue {
  private searchKey: any = {
    budget: '0,10000',
    length: '0,100',
    keywords: ''
  };

  private getSearchParam() {
    const title = this.searchKey.keywords;
    const days = this.searchKey.length.split(',');
    const startTime = days[0];
    const endTime = days[1];
    const prices = this.searchKey.budget.split(',');
    const startPrice = prices[0];
    const endPrice = prices[1];
    return {
      title,
      startTime,
      endTime,
      startPrice,
      endPrice,
      tourType: '',
      shows: true
    };
  }

  private handleSearch() {
    const param = this.getSearchParam();
    this.$emit('change', param);
  }
}
</script>

<style>
.el-form-item--mini.el-form-item {
  margin-bottom: 0;
}
.el-form-item__content {
  text-align: left;
}
</style>
