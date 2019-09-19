<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Watch, Vue } from 'vue-property-decorator';
const E = require('wangeditor');

@Component
export default class WangEditor extends Vue {
  @Model('change') text!: string;

  private mounted() {
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'justify', // 对齐方式
      'emoticon', // 表情
      'undo', // 撤销
      'redo' // 重复
    ];
    this.editor.customConfig.onchange = (html: string) => {
      this.$emit('change', html);
    };
    this.editor.create();
    this.editor.txt.html(this.text);
  }
}
</script>

<style scoped>
</style>
