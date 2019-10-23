<template>
  <div>
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
    <div class="rate">
      <p>Exchange Rate:</p>
      <div>
        <img src="@/assets/us.png" />
        US $1.00 ≈
        <img src="@/assets/cn.png" />
        RMB ￥{{ rate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TourApi from '@/api/tour';
import Tour from '@/model/tour.model';

@Component({})
export default class PriceTable extends Vue {
  @Prop() tourObj!: Tour;
  private rate: number | string = '';
  private mounted() {
    TourApi.getUsRate().then(res => {
      const result = res.data.object;
      const rateObj = result.find((item: any) => {
        return item.id === 356;
      });
      this.rate = rateObj.rate.toFixed(2);
    });
  }

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
.rate p {
  color: #c0504d;
  font-weight: 700;
  font-size: 18px;
}
.rate div {
  font-size: 16px;
  font-weight: 600;
}
</style>
