<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';
const E = require('wangeditor');

/**
 * @component WangEditor
 * @description ts富文本编辑器
 * @author ymwang
 */

@Component
export default class extends Vue {
  @Model('change') text!: string;

  private wangEditor!: any;

  private mounted() {
    this.wangEditor = new E(this.$refs.editor);
    this.wangEditor.customConfig.menus = [
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
    this.wangEditor.customConfig.onchange = (html: string) => {
      this.$emit('change', html);
    };
    this.wangEditor.create();
    this.wangEditor.txt.html(this.text);
  }
}
</script>

<style scoped>
</style>
