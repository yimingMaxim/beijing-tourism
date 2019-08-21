<template>
  <div id="main-root">
    <Carousel></Carousel>
    <el-container class="main-body">
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="tab.label" :name="tab.name" v-for="tab in tabs" :key="tab.name"></el-tab-pane>
        </el-tabs>
        <Tours :title="'Group tours'" id="group"></Tours>
        <Tours :title="'Private tours'" id="private"></Tours>
        <chauffeur-service :title="'Chauffeur service'" id="chauffeur"></chauffeur-service>
      </el-main>
      <el-aside class="visible-lg-block" width="25%">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <strong>About Us</strong>
          </div>
          <div class="card-content">
            <span>BeijingLocalTour.com is a service to help with tour service and hotel reservation in Beijing & specially catered for your travel needs in Beijing. Whether you are the business traveler or just a backpacker, we have every tour package and accommodation that suits your needs. To sweeten your stay, all the prices are discounted. So, enjoy your stay in Beijing!</span>
          </div>
        </el-card>
        <p class="weather-widget">
          <weather-widget></weather-widget>
        </p>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Carousel from './components/carousel.vue';
import WeatherWidget from '@/components/weatherWidget.vue';
import Tours from './tours/tours.vue';
import ChauffeurService from './chauffeurService/chauffeurService.vue';

@Component({
  components: {
    Carousel,
    WeatherWidget,
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
      name: 'nightShow'
    }
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

<style>
#main-root {
  margin-top: 15px;
}

.main-body {
  margin-top: 10px;
}

.card-content {
  text-align: left;
  font-size: 16px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.clearfix strong {
  font-size: 16px;
}

.weather-widget {
  text-align: center;
  margin-top: 20px;
}
</style>
