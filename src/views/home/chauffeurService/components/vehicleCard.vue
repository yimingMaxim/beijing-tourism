<template>
  <el-col :md="14" :xs="24" class="car-collapse">
    <el-collapse-item>
      <template slot="title">
        <el-col :span="12" class="car-img">
          <img :src="'/downloadImg/' + car.carUrlId" />
        </el-col>
        <el-col :span="12">
          <div class="car-name">
            <span v-text="car.carName"></span>
          </div>
          <div class="car-price">
            <price-item :per-person="false" :price="car.minPrice"></price-item>
          </div>
        </el-col>
      </template>
      <div>
        <price-table :prices="car.carprice" @onBook="handelBook"></price-table>
      </div>
    </el-collapse-item>
  </el-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import priceTable from './priceTable.vue';
import priceItem from '@/components/priceItem.vue';
import Chauffeur from '@/model/chauffeur.model';

@Component({
  components: {
    priceTable,
    priceItem
  }
})
export default class VehicleCard extends Vue {
  @Prop() private car!: Chauffeur;

  private handelBook(price: any) {
    const params = {
      car: this.car,
      price
    };
    this.$router.push({
      name: 'carBook',
      params: {
        car_params: JSON.stringify(params)
      }
    });
  }
}
</script>

<style scoped>
.car-img img {
  max-height: 100px;
  max-width: 150px;
}
.car-collapse {
  padding: 10px;
}
</style>
