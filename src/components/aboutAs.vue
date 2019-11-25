<template>
  <div>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <strong>About Us</strong>
      </div>
      <div class="card-content">
        <span>BeijingLocalTour.com is a Beijing local tour company. We have been working in Beijing for more than 20 years, and we know what kind of tour arrangement suit you the best. Whether you come to Beijing for tour or business, even a pass through, we have different tour packages will suit you. Tour package includes group tours (bus tours or seat-in coach tour), private tours and car rental (private driver) as options. On the other hand, you can also tell us where do you want to visit in Beijing and we can offer you a plan of sightseeing in Beijing. We would love to give you some advice on reasonable travel arrangements to make your money well spent and have a satisfied trip!</span>
      </div>
    </el-card>
    <!-- <p class="weather-widget">
      <weather-widget></weather-widget>
    </p>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WeatherWidget from './weatherWidget.vue';

@Component({
  components: {
    WeatherWidget
  }
})
export default class AboutUs extends Vue {}
</script>

<style scoped>
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
