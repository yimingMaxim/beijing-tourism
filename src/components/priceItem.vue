<template>
  <p class="price">
    US${{price}}
    <span v-if="perPerson !== false">/person</span>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PriceItem extends Vue {
  @Prop() price!: string | number;
  @Prop() perPerson!: boolean;
}
</script>

<style scoped>
.price {
  color: #ff0000;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0;
}
</style>
