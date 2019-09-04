<template>
  <div class="tinymce">
    <!-- 富文本编辑组件 -->
    <tinymce-editor toolbar="false" :init="init"></tinymce-editor>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';
import Editor from '@tinymce/tinymce-vue';

@Component({
  components: { 'tinymce-editor': Editor }
})
export default class TinyMce extends Vue {
  @Model('change') text!: string;
  private tinymceHtml: string = '';
  private change() {
    this.$emit('change', this.text);
  }
  private init: any = {
    plugins: 'wordcount',
    menubar: false,
    statusbar: false
    // language_url: '/assets/tinymce/langs/zh_CN.js',
    // language: 'zh_CN'
    // skin_url: '/assets/tinymce/skins/lightgray'
    // height: 300
  };
}
</script>
