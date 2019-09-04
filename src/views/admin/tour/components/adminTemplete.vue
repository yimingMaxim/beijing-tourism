<template>
  <div>
    <admin-header :title="title" @onAdd="handleAddBtn()"></admin-header>
    <el-row class="admin-body">
      <slot name="dialogTable"></slot>
    </el-row>
    <slot name="dialog"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import AdminHeader from "./adminHeader.vue";

@Component({
  components: {
    AdminHeader
  }
})
export default class AdminTemplete extends Vue {
  @Prop() title!: string;

  /**
   * @private handleAdd
   * @description 新增按钮 - click
   */
  private handleAddBtn() {
    this.$emit("addBtn");
  }

  /**
   * @private handleFormSave
   * @description 弹窗确定按钮 - click
   */
  private handleFormSave() {
    this.$emit("onSave");
  }
}
</script>

<style scoped>
</style>
