<template>
  <admin-templete :title="title" @addBtn="handleAddBtn" ref="adminTemplete">
    <template v-slot:dialogTable>
      <ui-table
        :columns="columns"
        :show-switch="false"
        :table-data="tableData"
        @onDelete="handleDelete"
        @onEdit="handleEdit"
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
        <el-form :model="dialogData" :rules="validate" label-width="80px" ref="dialog_form">
          <el-form-item class="min-width" label="车名" prop="carName">
            <el-input :clearable="true" v-model="dialogData.carName"></el-input>
          </el-form-item>
          <el-form-item label="图片" prop="carUrl">
            <file-upload
              :image-id="dialogData.carUrlId"
              :image-url="dialogData.carUrl"
              @change="onImgChange"
              ref="upload"
            ></file-upload>
          </el-form-item>
          <el-form-item label="价格" prop="carprice" v-if="dialogData.carprice.length === 0">
            <el-button @click.prevent="addPrice()" icon="el-icon-plus" type="primary"></el-button>
          </el-form-item>
          <el-form-item
            :key="index"
            label="路线"
            prop="carprice"
            v-else
            v-for="(price, index) in dialogData.carprice"
          >
            <el-row>
              <el-col :span="10">
                <el-input placeholder="请输入路线/目的地" v-model="price.placeName"></el-input>
              </el-col>
              <el-col :span="5">
                <el-input placeholder="价格" v-model="price.price">
                  <template slot="prepend">$</template>
                </el-input>
              </el-col>
              <el-col :push="1" :span="8">
                <el-row>
                  <el-button
                    @click.prevent="removePrice(price.uuid)"
                    icon="el-icon-delete"
                    type="danger"
                    v-if="index !== 0"
                  ></el-button>
                  <el-button
                    @click.prevent="addPrice()"
                    icon="el-icon-plus"
                    type="primary"
                    v-if="index === 0"
                  ></el-button>
                </el-row>
              </el-col>
            </el-row>
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

import ChauffeurApi from '@/api/chauffeur';
import Chauffeur from '@/model/chauffeur.model';

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload
  }
})
export default class ChauffeurAdmin extends Vue {
  private title: string = '用车';
  private dialogTitle: string = '新增';
  private dialogDisplay: boolean = false;
  private columns: any = [
    {
      label: '编号',
      value: 'carNo'
    },
    {
      label: '车名',
      value: 'carName'
    }
  ];

  private dialogData: Chauffeur = new Chauffeur(); // 弹窗表单
  private tableData: Array<Chauffeur> = []; // table列表数据

  private validate = {
    carName: [
      {
        required: true,
        message: '车名不能为空!',
        trigger: 'blur'
      }
    ],
    carUrl: [
      {
        validator: (rule: any, value: any, callback: any) => {
          if (!value) {
            callback(new Error('必须上传图片'));
          } else {
            callback();
          }
        },
        trigger: 'change'
      }
    ],
    carprice: [
      {
        validator: (rule: any, value: any, callback: any) => {
          const noLength = !value.length;
          const inputError = value.some((price: any) => {
            return !price.placeName || !price.price;
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
    ChauffeurApi.queryCarList().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tableData = list.map((item: any) => {
        return new Chauffeur(item);
      });
    });
  }

  /**
   * @private addCar
   * @param {object} param - 表单结构体
   * @description 新增一条旅游数据
   */
  private addCar(param: any) {
    ChauffeurApi.addCar(param).then(res => {
      this.hideDialog();
      this.success();
    });
  }

  /**
   * @private updateCar
   * @param {object} param - 表单结构体
   * @description 修改一条旅游数据
   */
  private updateCar(param: any) {
    ChauffeurApi.updateCar(param).then(res => {
      this.hideDialog();
      this.success();
    });
  }

  /**
   * @private deleteCar
   * @param {string} uuid - 删除行uuid
   * @description 删除一条旅游数据
   */
  private deleteCar(uuid: string) {
    ChauffeurApi.deleteCar(uuid).then(res => {
      this.success();
    });
  }

  /**
   * @private onImgChange
   * @param {string} url - 图片url
   * @description 上传图片成功后回调
   */
  private onImgChange(url: string) {
    this.dialogData.carUrl = url;
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
    this.dialogData = new Chauffeur();
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
          this.addCar(param);
        } else {
          this.updateCar(param);
        }
      } else {
        return false;
      }
    });
  }

  private handleDelete(row: any) {
    this.deleteCar(row.uuid);
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
.el-input {
  height: 30%;
}
</style>
