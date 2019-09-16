<template>
  <div>
    <card-list-title :title="title" url></card-list-title>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item>
        <template slot="title">
          <div class="car-img">
            <img src="@/assets/nisang.jpg" />
          </div>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
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

<style scoped>
.car-img img {
  max-height: 210px;
  max-width: 140px;
}
</style>
