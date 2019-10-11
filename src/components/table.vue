<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="column in columns"
        :key="column.value"
        :prop="column.value"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">
          <!-- if(超链接)) -->
          <u
            v-if="column.type === 'link'"
            @click="toComment(scope.row)"
            v-text="scope.row[column.value]"
          ></u>
          <!-- else if(富文本) -->
          <span v-else-if="column.type === 'html'" v-html="scope.row[column.value]"></span>
          <!-- else(文本) -->
          <span v-else v-text="scope.row[column.value]"></span>
          <!-- end if -->
        </template>
      </el-table-column>
      <el-table-column label="是否展示" v-if="showSwitch !== false">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.shows" @change="handleSwitch(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <delete-confirm
            :show-edit="showEdit !== false"
            @onEdit="handleEdit(scope.row)"
            @onDelete="handleDelete(scope.row)"
          ></delete-confirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DeleteConfirm from './deleteConfirm.vue';

@Component({
  components: {
    DeleteConfirm
  }
})
export default class UiTable extends Vue {
  @Prop() columns!: Array<column>;
  @Prop() tableData!: Array<any>;
  @Prop() showSwitch!: boolean;
  @Prop() showEdit!: boolean;

  private handleSwitch(row: any) {
    this.$emit('onSwitch', row);
  }

  private toComment(row: any) {
    const tourId = row.uuid;
    this.$router.push({
      name: 'commentAdmin',
      params: {
        tourId
      }
    });
  }

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
u {
  cursor: pointer;
  color: #409eff;
}
</style>
