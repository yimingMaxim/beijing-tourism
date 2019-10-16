<template>
  <div>
    <el-upload
      :before-upload="validate"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :show-file-list="false"
      action="/business/uploadImg"
      list-type="picture-card"
    >
      <img :src="previewUrl" class="avatar" v-if="previewUrl" />
      <img :src="'/downloadImg/' + imageId" class="avatar" v-else-if="imageUrl" />
      <i class="el-icon-plus" v-else></i>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  @Prop() imageId!: string;
  @Prop() imageUrl!: string;
  private previewUrl: string = '';

  /**
   * @private handleSuccess
   * @param {} res -
   * @param {File} file - 照片文件对象
   * @description 上传成功 - callback
   */
  private handleSuccess(res: any, file: any) {
    this.previewUrl = URL.createObjectURL(file.raw);
    const resultUrl = res.result.url;
    this.$emit('change', resultUrl);
  }

  /**
   * @private handleRemove
   * @description 删除照片 - callback
   */
  private handleRemove(file: any) {
    this.previewUrl = '';
  }

  /**
   * @private validate
   * @description 校验图片格式、大小
   */
  private validate(file: any) {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG && !isPNG) {
      this.$message.error('图片只能是 JPG/PNG 格式!');
      return false;
    } else if (!isLt2M) {
      this.$message.error('图片大小不能超过 2MB!');
      return false;
    } else {
      return true;
    }
  }
}
</script>

<style>
.avatar {
  max-width: 249px;
  max-height: 147px;
  display: block;
}
</style>
