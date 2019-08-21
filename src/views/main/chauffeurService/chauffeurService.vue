<template>
  <div>
    <card-list-title :title="title" url></card-list-title>
    <el-row class="card-list-row">
      <el-col :md="8" :sm="12" :xs="24">
        <vehicle-card></vehicle-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <vehicle-card></vehicle-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <vehicle-card></vehicle-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import vehicleCard from './components/vehicleCard.vue';
import cardListTitle from '@/components/cardListTitle.vue';

@Component({
  components: {
    vehicleCard,
    cardListTitle
  }
})
export default class ChauffeurService extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped src="../main.css">
</style>
