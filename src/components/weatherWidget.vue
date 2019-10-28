<template>
  <a href="https://english.wunderground.com/global/stations/54511.html" target="_blank">
    <img
      :src="timeUrl"
      alt="Beijing Time &amp; Weather Report"
      border="0"
      height="41"
      hspace="0"
      vspace="0"
      width="127"
    />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class WeatherWidget extends Vue {
  private timeUrl: string =
    'http://banners.wunderground.com/banner/gizmotemp/global/stations/54511.gif';
}
</script>
