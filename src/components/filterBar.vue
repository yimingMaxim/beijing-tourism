<template>
  <el-form ref="filter_form" :model="searchKey" label-width="80px" size="mini">
    <el-row>
      <el-col :md="12" :sm="12" :xs="24">
        <el-form-item label="keywords">
          <el-input v-model="searchKey.keywords"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="5" :sm="8" :xs="24">
        <el-form-item class="no-margin" label="budget">
          <el-select v-model="searchKey.budget">
            <el-option label="Any Budget" value></el-option>
            <el-option label="US$40" value="40"></el-option>
            <el-option label="US$60" value="60"></el-option>
            <el-option label="US$70" value="70"></el-option>
            <el-option label="US$100" value="100"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :md="5" :sm="8" :xs="24">
        <el-form-item label="length">
          <el-select v-model="searchKey.length">
            <el-option label="Any Length" value></el-option>
            <el-option label="1day" value="1"></el-option>
            <el-option label="2days" value="2"></el-option>
            <el-option label="3-5days" value="3"></el-option>
            <el-option label="6days or more" value="6"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FilterBar extends Vue {
  private searchKey: any = {
    category: "",
    budget: "",
    length: "",
    keywords: ""
  };
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
