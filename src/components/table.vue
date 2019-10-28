<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :key="column.value"
        :label="column.label"
        :prop="column.value"
        :width="column.width"
        v-for="column in columns"
      >
        <template slot-scope="scope">
          <!-- if(超链接)) -->
          <u
            @click="toComment(scope.row)"
            v-if="column.type === 'link'"
            v-text="scope.row[column.value]"
          ></u>
          <!-- else if(富文本) -->
          <span v-else-if="column.type === 'html'" v-html="scope.row[column.value]"></span>
          <!-- else if(图片) -->
          <img
            :src="'/downloadImg/' + scope.row[column.value]"
            style="max-width: 1000px;"
            v-else-if="column.type === 'image'"
          />
          <!-- else(文本) -->
          <span v-else v-text="scope.row[column.value]"></span>
          <!-- end if -->
        </template>
      </el-table-column>
      <el-table-column label="是否展示" v-if="showSwitch !== false">
        <template slot-scope="scope">
          <el-switch @change="handleSwitch(scope.row)" v-model="scope.row.shows"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <delete-confirm
            :show-edit="showEdit !== false"
            @onDelete="handleDelete(scope.row)"
            @onEdit="handleEdit(scope.row)"
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
