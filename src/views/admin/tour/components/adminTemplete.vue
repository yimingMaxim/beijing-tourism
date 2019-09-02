<template>
  <div>
    <admin-header :title="title" @onAdd="handleAdd()"></admin-header>
    <el-row class="admin-body">
      <slot name="dialogTable"></slot>
    </el-row>
    <el-dialog :title="dialogTitle" :visible.sync="dialogDisplay" style="text-align: left;">
      <slot name="dialogForm"></slot>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDisplay = false">取消</el-button>
        <el-button type="primary" @click="handleFormSave()">确定</el-button>
      </div>
    </el-dialog>
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
  private dialogTitle: string = "新增";
  private dialogDisplay: boolean = false;

  /**
   * @private setTitle
   * @param {string} title - 弹窗标题
   * @description 设置弹窗标题
   */
  private setTitle(title: string) {
    this.dialogTitle = title;
  }

  /**
   * @private showDialog
   * @description 打开弹窗
   */
  private showDialog() {
    this.dialogDisplay = true;
  }

  /**
   * @private hideDialog
   * @description 关闭弹窗
   */
  private hideDialog() {
    this.dialogDisplay = false;
  }

  /**
   * @private handleAdd
   * @description 新增按钮 - click
   */
  private handleAdd() {
    this.setTitle("新增");
    this.showDialog();
    this.$emit("onOpen");
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
