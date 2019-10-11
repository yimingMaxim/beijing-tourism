<template>
  <div>
    <!-- 删除二次确认 -->
    <el-popover ref="popover" placement="top" width="160" v-model="visible">
      <p>确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="handleConfirm">确定</el-button>
      </div>
    </el-popover>
    <el-button size="mini" @click="handleEdit" v-if="showEdit">编辑</el-button>
    <el-button size="mini" type="danger" v-popover:popover>删除</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class DeleteConfirm extends Vue {
  @Prop() showEdit!: boolean;
  private visible: boolean = false;

  private handleEdit() {
    this.$emit('onEdit');
  }

  private handleConfirm() {
    this.visible = false;
    this.$emit('onDelete');
  }
}
</script>
