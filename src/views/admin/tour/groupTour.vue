<template>
  <div>
    <admin-header :title="title" @onAdd="handleAdd()"></admin-header>
    <el-row class="admin-body">
      <ui-table
        :columns="columns"
        :table-data="tableData"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      ></ui-table>
    </el-row>
    <el-dialog :title="dialogTitle" :visible.sync="dialogDisplay" style="text-align: left;">
      <!-- <el-form ref="login_form" :model="dialogData" :rules="validate"> -->
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDisplay = false">取消</el-button>
        <el-button type="primary" @click="onLogin()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminHeader from '../components/adminHeader.vue';
import UiTable from '@/components/table.vue';

@Component({
  components: {
    AdminHeader,
    UiTable
  }
})
export default class GroupTour extends Vue {
  private dialogDisplay: boolean = false;
  private dialogTitle: string = '新增';
  private days: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private dialogData: any = {
    title: '',
    content: '',
    day: '',
    isShow: true,
    city: 'beijing',
    tourType: 'group',
    imgUrl: []
  };

  private tableData = [
    {
      uuid: '0001',
      tourNo: 'T000001',
      title: '标题1',
      day: 2,
      isShow: true
    },
    {
      uuid: '0002',
      tourNo: 'T000002',
      title: '标题2',
      day: 4,
      isShow: false
    }
  ];

  private columns: any = [
    {
      label: '编号',
      value: 'tourNo'
    },
    {
      label: '标题',
      value: 'title'
    }
  ];

  get title() {
    const name = this.$router.currentRoute.name;
    return name === 'group' ? 'Group Tour' : 'Private Tour';
  }

  private handleAdd() {
    this.dialogTitle = '新增';
    this.dialogDisplay = true;
  }

  private handleEdit(row: any) {
    this.dialogTitle = '编辑';
    this.dialogData = row;
    this.dialogDisplay = true;
  }
  private handleDelete(row: any) {}
}
</script>

<style scoped>
</style>
