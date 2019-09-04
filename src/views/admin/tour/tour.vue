<template>
  <admin-templete ref="adminTemplete" :title="title" @addBtn="handleAddBtn">
    <template v-slot:dialogTable>
      <ui-table
        :columns="columns"
        :table-data="tableData"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      ></ui-table>
    </template>
    <template v-slot:dialog>
      <el-dialog :title="dialogTitle" :visible.sync="dialogDisplay" style="text-align: left;">
        <el-form ref="login_form" :model="dialogData" label-width="80px">
          <el-form-item label="类型" prop="title">
            <el-radio-group v-model="dialogData.tourType">
              <el-radio-button label="group">Group Tour</el-radio-button>
              <el-radio-button label="private">Private Tour</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input v-model="dialogData.title"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <tiny-mce v-if="dialogDisplay" v-model="dialogData.content"></tiny-mce>
            <!-- <el-input v-model="dialogData.content"></el-input> -->
          </el-form-item>
          <el-form-item label="几日游" prop="day">
            <el-select v-model="dialogData.day">
              <el-option v-for="day in days" :key="day" :label="day" :value="day"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片" prop="imgUrl">
            <file-upload></file-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogDisplay = false">取消</el-button>
          <el-button type="primary" @click="handleFormSave">确定</el-button>
        </div>
      </el-dialog>
    </template>
  </admin-templete>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminTemplete from "./components/adminTemplete.vue";
import UiTable from "@/components/table.vue";
import FileUpload from "@/components/fileUpload.vue";
import TinyMce from "@/components/tinymce.vue";

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload,
    TinyMce
  }
})
export default class GroupTour extends Vue {
  private title: string = "旅游";
  private dialogTitle: string = "新增";
  private dialogDisplay: boolean = false;

  private days: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private dialogData: any = {
    title: "",
    content: "",
    day: "",
    isShow: true,
    city: "beijing",
    tourType: "group",
    imgUrl: []
  };

  private tableData = [
    {
      uuid: "0001",
      tourNo: "T000001",
      title: "标题1",
      day: 2,
      isShow: true
    },
    {
      uuid: "0002",
      tourNo: "T000002",
      title: "标题2",
      day: 4,
      isShow: false
    }
  ];

  private columns: any = [
    {
      label: "编号",
      value: "tourNo"
    },
    {
      label: "标题",
      value: "title"
    }
  ];

  /**
   * @private handleAddBtn
   * @description 新增按钮 - click
   */
  private handleAddBtn() {
    this.dialogTitle = "新增";
    this.showDialog();
  }

  /**
   * @private handleFormSave
   * @description 弹窗确认按钮 - click
   */
  private handleFormSave() {
    this.hideDialog();
  }

  /**
   * @private handleEdit
   * @param {<T>} row - 选中行对象
   * @description 表格行编辑按钮 - click
   */
  private handleEdit(row: any) {
    this.dialogData = row;
    this.dialogTitle = "编辑";
    this.showDialog();
  }
  private handleDelete(row: any) {
    alert("删除");
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
}
</script>

<style scoped>
</style>
