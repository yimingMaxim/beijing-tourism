<template>
  <el-container class="main-body list-body">
    <el-header>
      <nav-menu></nav-menu>
    </el-header>
    <el-main>
      <router-view :key="$route.fullPath" />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavMenu from '@/components/navMenu.vue';

@Component({
  components: {
    NavMenu
  }
})
export default class TourService extends Vue {
  private title!: string;
  private tourType!: string;

  private created() {
    this.title = this.$route.meta.title;
  }
}
</script>

<style src="../../views/home/main.css">
