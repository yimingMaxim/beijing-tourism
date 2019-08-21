<template>
  <div>
    <card-list-title :title="title" url></card-list-title>
    <el-row class="card-list-row">
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
      <el-col :md="8" :sm="12" :xs="24">
        <tour-card></tour-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import tourCard from './components/tourCard.vue';
import cardListTitle from '@/components/cardListTitle.vue';

@Component({
  components: {
    tourCard,
    cardListTitle
  }
})
export default class Tours extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped src="../main.css">
</style>
