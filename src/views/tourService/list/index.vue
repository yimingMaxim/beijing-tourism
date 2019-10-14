<template>
  <div id="main-root">
    <el-container class="main-body list-body">
      <el-main>
        <Breadcrumb :current="title"></Breadcrumb>
        <router-view />
      </el-main>
      <el-aside class="hidden-sm-and-down" width="25%">
        <about-us></about-us>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AboutUs from '@/components/aboutAs.vue';
import Breadcrumb from '@/components/breadcrumb.vue';

@Component({
  components: {
    AboutUs,
    Breadcrumb
  }
})
export default class List extends Vue {
  private title!: string;
  private tourType!: string;

  private created() {
    this.title = this.$route.meta.title;
  }
}
</script>

<style src="../../../views/home/main.css">
