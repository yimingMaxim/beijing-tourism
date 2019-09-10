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
            <file-upload @change="onImgChange"></file-upload>
          </el-form-item>
          <el-form-item v-for="(price, index) in dialogData.prices" label="价格" :key="index">
            <el-row>
              <el-col :span="3">
                <el-select v-model="price.person">
                  <el-option
                    v-for="(person, index) in people"
                    :key="index"
                    :label="person"
                    :value="person"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="1">人</el-col>
              <el-col :span="3">
                <el-input v-model="price.price"></el-input>
              </el-col>
              <el-col :span="1">$</el-col>
              <el-col :span="10" :push="1">
                <el-row>
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    @click.prevent="removePrice(price.uuid)"
                  ></el-button>
                  <el-button
                    v-if="index === 0"
                    type="primary"
                    icon="el-icon-plus"
                    @click.prevent="addPrice()"
                  ></el-button>
                </el-row>
              </el-col>
            </el-row>
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
import AdminTemplete from './components/adminTemplete.vue';
import UiTable from '@/components/table.vue';
import FileUpload from '@/components/fileUpload.vue';
import TinyMce from '@/components/tinymce.vue';
import TourApi from '@/api/tour';

import Tour from '@/model/tour.model';

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload,
    TinyMce
  }
})
export default class GroupTour extends Vue {
  private title: string = '旅游';
  private dialogTitle: string = '新增';
  private dialogDisplay: boolean = false;
  private days: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private people: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  private dialogData: Tour = new Tour(); // 弹窗表单
  private tableData: Array<Tour> = []; // table列表数据

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
    TourApi.queryTour().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tableData = list.map((item: any) => {
        return new Tour(item);
      });
    });
  }

  /**
   * @private addTour
   * @param {object} param - 表单结构体
   * @description 新增一条旅游数据
   */
  private addTour(param: any) {
    TourApi.addTour(param).then(res => {
      this.hideDialog();
      this.getTbData();
    });
  }

  /**
   * @private updateTour
   * @param {object} param - 表单结构体
   * @description 修改一条旅游数据
   */
  private updateTour(param: any) {
    TourApi.updateTour(param).then(res => {
      this.hideDialog();
      this.getTbData();
    });
  }

  /**
   * @private deleteTour
   * @param {string} uuid - 删除行uuid
   * @description 删除一条旅游数据
   */
  private deleteTour(uuid: string) {
    TourApi.deleteTour(uuid).then(res => {
      this.getTbData();
    });
  }

  /**
   * @private onImgChange
   * @param {string} url - 图片url
   * @description 上传图片成功后回调
   */
  private onImgChange(url: string) {
    this.dialogData.images[0].url = url;
  }

  /**
   * @private addPrice
   * @description 增加一条价格
   */
  private addPrice() {
    this.dialogData.addPrice();
  }

  /**
   * @private removePrice
   * @param {string} uuid - 价格uuid
   * @description 删除一条价格
   */
  private removePrice(uuid: string) {
    this.dialogData.removePrice(uuid);
  }

  /**
   * @private handleAddBtn
   * @description 新增按钮 - click
   */
  private handleAddBtn() {
    this.dialogTitle = '新增';
    this.showDialog();
  }

  /**
   * @private handleEdit
   * @param {<T>} row - 选中行对象
   * @description 表格行编辑按钮 - click
   */
  private handleEdit(row: any) {
    this.dialogData = row;
    this.dialogTitle = '编辑';
    this.showDialog();
  }

  /**
   * @private handleFormSave
   * @description 弹窗保存按钮 - click
   */
  private handleFormSave() {
    const param = this.dialogData.getSubmit();
    const title = this.dialogTitle;
    if (title === '新增') {
      this.addTour(param);
    } else {
      this.updateTour(param);
    }
  }

  private handleDelete(row: any) {
    this.deleteTour(row.uuid);
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
