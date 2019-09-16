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
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogDisplay"
        style="text-align: left;"
        @close="onDialogClose"
      >
        <el-form ref="dialog_form" :model="dialogData" :rules="validate" label-width="80px">
          <el-form-item label="车名" prop="title" class="min-width">
            <el-input v-model="dialogData.title" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="图片" prop="imgUrl">
            <file-upload ref="upload" @change="onImgChange"></file-upload>
          </el-form-item>
          <el-form-item v-if="dialogData.prices.length === 0" label="价格">
            <el-button type="primary" icon="el-icon-plus" @click.prevent="addPrice()"></el-button>
          </el-form-item>
          <el-form-item v-else v-for="(price, index) in dialogData.prices" label="路线" :key="index">
            <el-row>
              <el-col :span="6">
                <el-input placeholder="请输入路线/目的地" v-model="price.route"></el-input>
              </el-col>
              <el-col :span="4">
                <el-input placeholder="价格" v-model="price.price">
                  <template slot="prepend">$</template>
                </el-input>
              </el-col>
              <el-col :span="8" :push="1">
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
import { Component, Vue } from "vue-property-decorator";
import AdminTemplete from "../components/adminTemplete.vue";
import UiTable from "@/components/table.vue";
import FileUpload from "@/components/fileUpload.vue";
import TourApi from "@/api/tour";

import Chauffeur from "@/model/chauffeur.model";

@Component({
  components: {
    AdminTemplete,
    UiTable,
    FileUpload
  }
})
export default class ChauffeurAdmin extends Vue {
  private title: string = "用车";
  private dialogTitle: string = "新增";
  private dialogDisplay: boolean = false;
  private columns: any = [
    {
      label: "编号",
      value: "carNo"
    },
    {
      label: "车名",
      value: "name"
    }
  ];

  private dialogData: Chauffeur = new Chauffeur(); // 弹窗表单
  private tableData: Array<Chauffeur> = []; // table列表数据

  private validate = {
    title: [
      {
        required: true,
        message: "车名不能为空!",
        trigger: "blur"
      }
    ],
    imgUrl: [
      {
        required: true,
        message: "必须上传图片!",
        trigger: "blur"
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
    TourApi.queryTour().then((res: any) => {
      const list: Array<any> = res.data.object;
      this.tableData = list.map((item: any) => {
        return new Chauffeur(item);
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
    this.dialogTitle = "新增";
    this.dialogData = new Chauffeur();
    this.showDialog();
  }

  private onDialogClose() {
    (this.$refs.upload as any).previewUrl = "";
  }

  /**
   * @private handleEdit
   * @param {<T>} row - 选中行对象
   * @description 表格行编辑按钮 - click
   */
  private handleEdit(row: any) {
    this.dialogData = row;
    this.dialogTitle = "编辑";
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
        if (title === "新增") {
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
