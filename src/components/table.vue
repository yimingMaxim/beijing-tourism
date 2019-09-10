<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="column in columns"
      :key="column.value"
      :prop="column.value"
      :label="column.label"
      :width="column.width"
    ></el-table-column>
    <el-table-column label="是否展示">
      <template slot-scope="scope">
        <el-switch v-model="scope.row.shows"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class UiTable extends Vue {
  @Prop() columns!: Array<column>;
  @Prop() tableData!: Array<any>;

  private handleEdit(row: any) {
    this.$emit('onEdit', row);
  }

  private handleDelete(row: any) {
    this.$emit('onDelete', row);
  }
}

interface column {
  label: string;
  value: string;
  width?: number;
}
</script>

<style scoped>
</style>
