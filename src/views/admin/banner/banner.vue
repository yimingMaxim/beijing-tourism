<template>
  <admin-templete :title="title" @addBtn="handleAddBtn" ref="adminTemplete">
    <template v-slot:dialogTable>
      <ui-table
        :columns="columns"
        :show-edit="false"
        :show-switch="false"
        :table-data="tableData"
        @onDelete="handleDelete"
      ></ui-table>
    </template>
    <template v-slot:dialog>
      <el-dialog
        :close-on-click-modal="false"
        :title="dialogTitle"
        :visible.sync="dialogDisplay"
        @close="onDialogClose"
        style="text-align: left;"
      >
        <el-form :model="dialogData" label-width="80px" ref="dialog_form">
          <el-form-item label="图片" prop="imageUrl">
            <file-upload
              :image-id="dialogData.imageid"
              :image-url="dialogData.url"
              @change="onImgChange"
              ref="upload"
            ></file-upload>
          </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
          <el-button @click="dialogDisplay = false">取消</el-button>
          <el-button @click="handleFormSave" type="primary">确定</el-button>
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

import Banner from '@/model/banner.model';

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload
  }
})
export default class BannerAdmin extends Vue {
  private title: string = '轮播图';
  private dialogTitle: string = '新增';
  private dialogDisplay: boolean = false;
  private columns: any = [
    {
      label: '图片',
      value: 'imageid',
      type: 'image'
    }
  ];

  private dialogData: Banner = new Banner(); // 弹窗表单
  private tableData: Array<Banner> = []; // table列表数据

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
    TourApi.queryBanners().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tableData = list.map((item: any) => {
        return new Banner(item);
      });
    });
  }

  /**
   * @private addBanner
   * @param {object} param - 表单结构体
   * @description 新增一张轮播图
   */
  private addBanner(param: any) {
    TourApi.addBanner(param).then(res => {
      this.hideDialog();
      this.success();
    });
  }

  /**
   * @private deleteBanner
   * @param {string} uuid - 删除行uuid
   * @description 删除一张轮播图
   */
  private deleteBanner(imageid: string) {
    TourApi.deleteBanner(imageid).then(res => {
      this.success();
    });
  }

  /**
   * @private onImgChange
   * @param {string} url - 图片url
   * @description 上传图片成功后回调
   */
  private onImgChange(url: string) {
    this.dialogData.url = url;
  }

  /**
   * @private handleAddBtn
   * @description 新增按钮 - click
   */
  private handleAddBtn() {
    this.dialogData = new Banner();
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
        this.addBanner(param);
      } else {
        return false;
      }
    });
  }

  private handleDelete(row: any) {
    this.deleteBanner(row.imageid);
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
