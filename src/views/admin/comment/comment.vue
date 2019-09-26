<template>
  <admin-templete ref="adminTemplete" :title="title" @addBtn="handleAddBtn">
    <template v-slot:dialogTable>
      <ui-table
        :columns="columns"
        :table-data="tableData"
        :show-edit="false"
        :show-switch="false"
        @onDelete="handleDelete"
      ></ui-table>
    </template>
    <template v-slot:dialog>
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogDisplay"
        style="text-align: left;"
        :close-on-click-modal="false"
        @close="onDialogClose"
      >
        <el-form ref="dialog_form" :model="dialogData" label-width="80px">
          <el-form-item label="评论人" prop="authorName" class="min-width">
            <el-input v-model="dialogData.authorName" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <wang-editor v-if="dialogDisplay" v-model="dialogData.content"></wang-editor>
          </el-form-item>
          <el-form-item label="图片" prop="imageUrl">
            <file-upload
              ref="upload"
              :image-id="dialogData.imageId"
              :image-url="dialogData.imageUrl"
              @change="onImgChange"
            ></file-upload>
          </el-form-item>
          <el-form-item label="评分" prop="star">
            <el-rate v-model="dialogData.star" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
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
import { Component, Vue } from 'vue-property-decorator';
import { Message } from 'element-ui';
import AdminTemplete from '../components/adminTemplete.vue';
import UiTable from '@/components/table.vue';
import FileUpload from '@/components/fileUpload.vue';
import TourApi from '@/api/tour';

import WangEditor from '@/components/wangEditor.vue';

import Comment from '@/model/comment.model';

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload,
    WangEditor
  }
})
export default class CommentAdmin extends Vue {
  private title: string = '评论';
  private dialogTitle: string = '新增';
  private dialogDisplay: boolean = false;
  private days: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private people: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private activeTab: string = 'private';
  private columns: any = [
    {
      label: '评论人',
      value: 'authorName'
    },
    {
      label: '内容',
      value: 'content',
      type: 'html'
    }
  ];

  private dialogData: Comment = new Comment(); // 弹窗表单
  private tableData: Array<Comment> = []; // table列表数据

  /**
   * @private created
   * @description 立即实行函数 - click
   */
  private created() {
    this.getTbData();
  }

  /**
   * @private getTbData
   * @description 查询表格数据
   */
  private getTbData() {
    const tourId = this.$route.params.tourId;
    TourApi.queryComment(tourId).then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tableData = list.map((item: any) => {
        return new Comment(item);
      });
    });
  }

  /**
   * @private addComment
   * @param {object} param - 表单结构体
   * @description 新增一条评论
   */
  private addComment(param: any) {
    param.tourId = this.$route.params.tourId;
    TourApi.addComment(param).then(res => {
      this.hideDialog();
      this.success();
    });
  }

  /**
   * @private deleteComment
   * @param {string} uuid - 删除行uuid
   * @description 删除一条评论
   */
  private deleteComment(uuid: string) {
    TourApi.deleteComment(uuid).then(res => {
      this.success();
    });
  }

  /**
   * @private onImgChange
   * @param {string} url - 图片url
   * @description 上传图片成功后回调
   */
  private onImgChange(url: string) {
    this.dialogData.imageUrl = url;
  }

  /**
   * @private handleAddBtn
   * @description 新增按钮 - click
   */
  private handleAddBtn() {
    // this.dialogTitle = '新增';
    this.dialogData = new Comment();
    this.showDialog();
  }

  private onDialogClose() {
    (this.$refs.upload as any).previewUrl = '';
  }

  /**
   * @private handleFormSave
   * @description 弹窗保存按钮 - click
   */
  private handleFormSave() {
    (this.$refs.dialog_form as any).validate((valid: boolean) => {
      if (valid) {
        const param = this.dialogData.getSubmit();
        this.addComment(param);
      } else {
        return false;
      }
    });
  }

  private handleDelete(row: any) {
    this.deleteComment(row.uuid);
  }

  private success() {
    Message({
      message: '操作成功！',
      type: 'success'
    });
    this.getTbData();
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
.el-rate {
  padding-left: 2px;
  padding-top: 10px;
}
</style>
