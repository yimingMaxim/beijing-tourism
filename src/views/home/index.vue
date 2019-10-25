<template>
  <div id="main-root">
    <Carousel class="hidden-sm-and-down"></Carousel>
    <el-container class="main-body">
      <el-aside class="hidden-sm-and-down" width="15%"></el-aside>
      <el-main>
        <el-tabs @tab-click="handleClick" v-model="activeName">
          <el-tab-pane :key="tab.name" :label="tab.label" :name="tab.name" v-for="tab in tabs"></el-tab-pane>
        </el-tabs>
        <Tours :more="true" :tour-type="'group'" id="group" title="Group tours"></Tours>
        <Tours :more="true" id="private" title="Private tours" tour-type="private"></Tours>
        <Tours id="nightShow" title="Night show" tour-type="nightShow"></Tours>
        <chauffeur-service id="chauffeur" title="Chauffeur service"></chauffeur-service>
      </el-main>
      <el-aside class="hidden-sm-and-down" width="25%">
        <about-us></about-us>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Carousel from './components/carousel.vue';
import AboutUs from '@/components/aboutAs.vue';
import Tours from './tours/tours.vue';
import ChauffeurService from './chauffeurService/chauffeurService.vue';

@Component({
  components: {
    Carousel,
    AboutUs,
    Tours,
    ChauffeurService
  }
})
export default class Main extends Vue {
  private activeName = '#group';
  private tabs = [
    {
      label: 'Group tours',
      name: '#group'
    },
    {
      label: 'Private tours',
      name: '#private'
    },
    {
      label: 'Chauffeur service',
      name: '#chauffeur'
    },
    {
      label: 'Beijing Night Show',
      name: '#nightShow'
    }
    // {
    //   label: 'Hotel Booking',
    //   name: 'hotel'
    // }
  ];

  /**
   * @private handleClick
   * @param {tab} tab - 菜单对象
   * @description 锚点跳转
   */
  private handleClick(tab: any) {
    const index = tab.name;
    this.$el.querySelector(index).scrollIntoView();
  }
}
</script>

<style scoped src="../../views/home/main.css">
