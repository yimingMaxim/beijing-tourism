<template>
  <div id="main-root">
    <el-container class="main-body list-body">
      <el-main>
        <Breadcrumb :current="'private tour'"></Breadcrumb>
        <filter-bar></filter-bar>
        <list-item></list-item>
      </el-main>
      <el-aside class="visible-lg-block" width="25%">
        <about-us></about-us>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AboutUs from '@/components/aboutAs.vue';
import Breadcrumb from '@/components/breadcrumb.vue';
import FilterBar from '@/components/filterBar.vue';
import ListItem from '@/components/listItem.vue';

@Component({
  components: {
    AboutUs,
    Breadcrumb,
    FilterBar,
    ListItem
  }
})
export default class List extends Vue {}
</script>

<style scoped src="../../views/main/main.css">
