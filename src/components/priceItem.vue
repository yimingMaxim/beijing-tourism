<template>
  <p class="price">US${{price}}/person</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PriceItem extends Vue {
  @Prop() price!: string | number;
}
</script>

<style>
.price {
  color: #ff0000;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0;
}
</style>
