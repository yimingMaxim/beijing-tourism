<template>
  <div>
    <!-- <Breadcrumb :current="title"></Breadcrumb> -->
    <filter-bar></filter-bar>
    <list-item></list-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import Breadcrumb from '@/components/breadcrumb.vue';
import FilterBar from '@/components/filterBar.vue';
import ListItem from '@/components/listItem.vue';

@Component({
  components: {
    // Breadcrumb,
    FilterBar,
    ListItem
  }
})
export default class TourList extends Vue {
  // private title!: string;
  // private created() {
  //   debugger;
  //   this.title = this.$route.meta.title;
  // }
}
</script>
