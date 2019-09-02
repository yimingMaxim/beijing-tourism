<template>
  <admin-templete
    ref="adminTemplete"
    :title="title"
    :dialog-title="dialogTitle"
    :dialog-display="dialogDisplay"
    @onSave="handleSave"
    @on-open="handleOpen"
  >
    <template v-slot:dialogTable>
      <ui-table
        :columns="columns"
        :table-data="tableData"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      ></ui-table>
    </template>
    <template v-slot:dialogForm>
      <el-form ref="login_form" :model="dialogData" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="dialogData.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="dialogData.content"></el-input>
        </el-form-item>
        <el-form-item label="几日游" prop="day">
          <el-select v-model="dialogData.day">
            <el-option v-for="day in days" :key="day" :label="day" :value="day"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
  </admin-templete>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminTemplete from "./components/adminTemplete.vue";
import UiTable from "@/components/table.vue";

@Component({
  components: {
    AdminTemplete,
    UiTable
  }
})
export default class GroupTour extends Vue {
  private title: string = "Group Tour";
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

  private handleOpen() {}

  private handleSave() {
    (this.$refs.adminTemplete as any).hideDialog();
  }

  private handleEdit(row: any) {
    this.dialogData = row;
    (this.$refs.adminTemplete as any).setTitle("编辑");
    (this.$refs.adminTemplete as any).showDialog();
  }
  private handleDelete(row: any) {
    alert("删除");
  }
}
</script>

<style scoped>
</style>
