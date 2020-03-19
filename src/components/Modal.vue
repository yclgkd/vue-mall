<!--
 * @Author: Chunlai
 * @Email: chunlai0928@foxmail.com
 * @Date: 2020-03-16 15:17:25
 * @LastEditors: Chunlai
 * @LastEditTime: 2020-03-16 15:20:35
 -->
<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    modalType: {
      // 弹框类型：小small、中middle、大large、表单from
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    // 按钮类型：1、确定按钮 2、取消按钮 3、确定取消都有
    btnTyep: String,
    sureText: {
      type: String,
      default: "确定"
    },
    canceText: {
      type: String,
      default: "取消"
    },
    showModal: {}
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
</style>