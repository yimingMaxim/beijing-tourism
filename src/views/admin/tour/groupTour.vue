<template>
  <div>
    <admin-header :title="title" @onAdd="handleAdd()"></admin-header>
    <el-row class="admin-body">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminHeader from "../components/adminHeader.vue";

@Component({
  components: {
    AdminHeader
  }
})
export default class GroupTour extends Vue {
  private title: string = "Group Tour";

  private handleAdd() {
    alert("新增");
  }
}
</script>

<style scoped>
.admin-header-left {
  text-align: left;
}
.admin-header-left h4 {
  padding-left: 20px;
}
.admin-header-right {
  text-align: right;
}
</style>
