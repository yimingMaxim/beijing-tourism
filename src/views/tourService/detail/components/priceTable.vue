<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Travelling Party</th>
        <th>Tour Cost (per person)</th>
      </tr>
    </thead>
    <tbody class="price-body">
      <tr :key="price.person" v-for="price in tourObj.prices">
        <td v-text="price.person + ' person'"></td>
        <td v-text="'$' + price.price"></td>
      </tr>
      <tr>
        <td colspan="2">
          <el-button @click="handleBook" size="small" type="danger">Book Now</el-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tour from '@/model/tour.model';

@Component({})
export default class PriceTable extends Vue {
  @Prop() tourObj!: Tour;

  private handleBook() {
    const tourId = this.tourObj.uuid;
    this.$router.push({
      name: 'tourBook',
      params: {
        tourId
      }
    });
  }
}
</script>

<style scoped>
.price-body td {
  text-align: center;
}
</style>
