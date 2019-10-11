<template>
  <admin-templete ref="adminTemplete" :title="title" @addBtn="handleAddBtn">
    <template v-slot:dialogTable>
      <el-tabs v-model="activeTab" type="border-card" @tab-click="getTbData()">
        <el-tab-pane label="Private" name="private"></el-tab-pane>
        <el-tab-pane label="Group" name="group"></el-tab-pane>
        <el-tab-pane label="Night Show" name="nightShow"></el-tab-pane>
        <ui-table
          :columns="columns"
          :table-data="tableData"
          @onSwitch="handleSwitch"
          @onEdit="handleEdit"
          @onDelete="handleDelete"
        ></ui-table>
      </el-tabs>
    </template>
    <template v-slot:dialog>
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogDisplay"
        style="text-align: left;"
        :close-on-click-modal="false"
        @close="onDialogClose"
      >
        <el-form ref="dialog_form" :model="dialogData" :rules="validate" label-width="80px">
          <el-form-item label="类型">
            <el-radio-group v-model="dialogData.tourType">
              <el-radio-button label="group">Group Tour</el-radio-button>
              <el-radio-button label="private">Private Tour</el-radio-button>
              <el-radio-button label="nightShow">Night Show</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input v-model="dialogData.title"></el-input>
          </el-form-item>
          <el-form-item label="副标题" prop="subTitle">
            <el-input v-model="dialogData.subTitle"></el-input>
          </el-form-item>
          <el-form-item label="首页展示">
            <el-switch v-model="dialogData.priorityShow"></el-switch>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <wang-editor v-if="dialogDisplay" v-model="dialogData.content"></wang-editor>
          </el-form-item>
          <el-form-item label="几日游" prop="day">
            <el-select v-model="dialogData.day">
              <el-option v-for="day in days" :key="day" :label="day" :value="day"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片" prop="images">
            <file-upload
              ref="upload"
              :image-id="dialogData.images[0].uuid"
              :image-url="dialogData.images[0].url"
              @change="onImgChange"
            ></file-upload>
          </el-form-item>
          <el-form-item v-if="dialogData.prices.length === 0" label="价格" prop="prices">
            <el-button type="primary" icon="el-icon-plus" @click.prevent="addPrice()"></el-button>
          </el-form-item>
          <el-form-item
            v-else
            v-for="(price, index) in dialogData.prices"
            label="人数"
            :key="index"
            prop="prices"
          >
            <el-row>
              <el-col :span="4">
                <el-select v-model="price.person">
                  <el-option
                    v-for="(person, index) in people"
                    :key="index"
                    :label="person"
                    :value="person"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input placeholder="价格/人" v-model="price.price">
                  <template slot="prepend">$</template>
                </el-input>
              </el-col>
              <el-col :span="10" :push="1">
                <el-row>
                  <el-button
                    v-if="index !== 0"
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
import { Message } from 'element-ui';
import AdminTemplete from '../components/adminTemplete.vue';
import UiTable from '@/components/table.vue';
import FileUpload from '@/components/fileUpload.vue';
import TourApi from '@/api/tour';

import WangEditor from '@/components/wangEditor.vue';

import Tour from '@/model/tour.model';

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload,
    WangEditor
  }
})
export default class TourAdmin extends Vue {
  private title: string = '旅游';
  private dialogTitle: string = '新增';
  private dialogDisplay: boolean = false;
  private days: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private people: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private activeTab: string = 'private';
  private columns: any = [
    {
      label: '编号',
      value: 'tourNo',
      type: 'link'
    },
    {
      label: '标题',
      value: 'title'
    },
    {
      label: '类型',
      value: 'tourType'
    }
  ];

  private validate = {
    title: [
      {
        required: true,
        message: '标题不能为空!',
        trigger: 'blur'
      }
    ],
    subTitle: [
      {
        required: true,
        message: '副标题不能为空!',
        trigger: 'blur'
      }
    ],
    content: [
      {
        required: true,
        message: '内容不能为空!',
        trigger: 'blur'
      }
    ],
    images: [
      {
        validator: (rule: any, value: any, callback: any) => {
          const url = value[0].url;
          if (!url) {
            callback(new Error('必须上传图片'));
          } else {
            callback();
          }
        },
        trigger: 'change'
      }
    ],
    prices: [
      {
        validator: (rule: any, value: any, callback: any) => {
          const noLength = !value.length;
          const inputError = value.some((price: any) => {
            return !price.person || !price.price;
          });
          if (noLength || inputError) {
            callback(new Error('至少添加一条价格,且人数和价格不能为空！'));
          } else {
            callback();
          }
        },
        trigger: 'change'
      }
    ]
  };

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
    TourApi.queryTourList({
      tourType: this.activeTab
    }).then((res: any) => {
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
      this.success();
    });
  }

  /**
   * @private updateTour
   * @param {object} param - 表单结构体
   * @description 修改一条旅游数据
   */
  private updateTour(param: any) {
    const tourId = param.uuid;
    TourApi.deletePriceAndImg(tourId).then(() => {
      TourApi.updateTour(param).then(res => {
        this.hideDialog();
        this.success();
      });
    });
  }

  private handleSwitch(tour: Tour) {
    const { uuid, shows } = tour;
    TourApi.updateIsShow(uuid, {
      shows
    }).then(res => {
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
      this.success();
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
    this.dialogData = new Tour();
    this.showDialog();
  }

  private onDialogClose() {
    (this.$refs.upload as any).previewUrl = '';
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
    (this.$refs.dialog_form as any).validate((valid: boolean) => {
      if (valid) {
        const param = this.dialogData.getSubmit();
        const title = this.dialogTitle;
        if (title === '新增') {
          this.addTour(param);
        } else {
          this.updateTour(param);
        }
      } else {
        return false;
      }
    });
  }

  private handleDelete(row: any) {
    this.deleteTour(row.uuid);
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
