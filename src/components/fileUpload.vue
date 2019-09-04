<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :show-file-list="false"
      :before-upload="validate"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  private imageUrl: string = "";

  /**
   * @private handleSuccess
   * @param {} res -
   * @param {File} file - 照片文件对象
   * @description 上传成功 - callback
   */
  private handleSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  /**
   * @private handleRemove
   * @description 删除照片 - callback
   */
  private handleRemove(file: any) {
    this.imageUrl = "";
  }

  /**
   * @private validate
   * @description 校验图片格式、大小
   */
  private validate(file: any) {
    const isJPG = file.type === "image/jpeg";
    const isPNG = file.type === "image/png";
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG && !isPNG) {
      this.$message.error("图片只能是 JPG/PNG 格式!");
      return false;
    } else if (!isLt2M) {
      this.$message.error("图片大小不能超过 2MB!");
      return false;
    } else {
      return true;
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
