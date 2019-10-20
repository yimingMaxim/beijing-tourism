<template>
  <div>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <strong>About Us</strong>
      </div>
      <div class="card-content">
        <span>BeijingLocalTour.com is a service to help with tour service and hotel reservation in Beijing & specially catered for your travel needs in Beijing. Whether you are the business traveler or just a backpacker, we have every tour package and accommodation that suits your needs. To sweeten your stay, all the prices are discounted. So, enjoy your stay in Beijing!</span>
      </div>
    </el-card>
    <p class="weather-widget">
      <weather-widget></weather-widget>
    </p>
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
