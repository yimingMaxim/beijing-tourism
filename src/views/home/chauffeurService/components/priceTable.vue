<template>
  <table class="table table-bordered table-striped">
    <thead class="price-header">
      <tr>
        <th>Line</th>
        <th>Cost</th>
        <th></th>
      </tr>
    </thead>
    <tbody class="price-body">
      <tr :key="price.uuid" v-for="price in prices">
        <td v-text="price.placeName"></td>
        <td v-text="'$' + price.price"></td>
        <td>
          <el-button @click="handleBook(price)" size="mini" type="danger">Book</el-button>
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
  @Prop() prices!: Array<any>;

  private handleBook(price: any) {
    this.$emit('onBook', price);
  }
}
</script>

<style scoped>
.price-header th {
  text-align: center;
  font-size: 16px;
}
.price-body td {
  font-size: 16px;
  text-align: center;
}
</style>
