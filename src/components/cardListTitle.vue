<template>
  <div class="card-list-title">
    <div class="piao-head-more" v-if="more">
      <u @click="toList()" class="piao-head-more-link">more&nbsp;&gt;</u>
    </div>
    <h4>{{title}}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class CardListTitle extends Vue {
  @Prop() title!: string;
  @Prop() path!: string;
  @Prop() more!: boolean;

  private toList() {
    this.$router.push(`tour_service/list/${this.path}`);
  }
}
</script>

<style scoped>
.card-list-title {
  text-align: left;
  border-bottom: 2px solid #00afc7;
  height: 45px;
  margin-bottom: 15px;
}

.card-list-title h4 {
  line-height: 45px;
  font: 20px/45px '\5FAE\8F6F\96C5\9ED1';
  font-family: 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1';
  color: #00afc7;
}

.piao-head-more {
  float: right;
  line-height: 45px;
}

.piao-head-more-link {
  color: #409eff;
  cursor: pointer;
}
</style>
