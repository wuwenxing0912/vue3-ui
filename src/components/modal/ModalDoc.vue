<template>
  <ModalDefault />
  <section>
    <h1>API</h1>
    <table class="api-table" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th class="api-table-head">API</th>
          <th class="api-table-head">说明</th>
          <th class="api-table-head">类型</th>
          <th class="api-table-head">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="api">visible</td>
          <td class="api-description">Modal 是否可见</td>
          <td class="api-type">boolean</td>
          <td class="api-default">false</td>
        </tr>
        <tr>
          <td class="api">onClickMaskClose</td>
          <td class="api-description">是否点击遮罩层关闭 Modal</td>
          <td class="api-type">boolean</td>
          <td class="api-default">false</td>
        </tr>
        <tr>
          <td class="api">cancelButtonLevle</td>
          <td class="api-description">Modal 取消按钮 类型</td>
          <td class="api-type">"default" | "primary" | "dashed" | "danger"</td>
          <td class="api-default">default</td>
        </tr>
        <tr>
          <td class="api">confirmButtonLevle</td>
          <td class="api-description">Modal 确定按钮 类型</td>
          <td class="api-type">"default" | "primary" | "dashed" | "danger"</td>
          <td class="api-default">primary</td>
        </tr>
        <tr>
          <td class="api">onClose</td>
          <td class="api-description">关闭 Modal 回调函数</td>
          <td class="api-type">Function</td>
          <td class="api-default">---</td>
        </tr>
        <tr>
          <td class="api">onConfirm</td>
          <td class="api-description">确定 Modal 回调函数</td>
          <td class="api-type">Function</td>
          <td class="api-default">---</td>
        </tr>
        <tr>
          <td class="api">cancelButtonSize</td>
          <td class="api-description">Modal 取消按钮 尺寸大小</td>
          <td class="api-type">"large" | "middle" | "small"</td>
          <td class="api-default">middle</td>
        </tr>
        <tr>
          <td class="api">confirmButtonLevle</td>
          <td class="api-description">Modal 确定按钮 尺寸大小</td>
          <td class="api-type">"large" | "middle" | "small"</td>
          <td class="api-default">middle</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import ModalDefault from "./example/ModalDefault.vue";
import { ref } from "vue";
export default {
  components: {
    ModalDefault,
  },
  setup() {
    const codeVisible = ref(false);
    const changeCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeTipVisible = ref(false);
    const changeCodeTipVisible = () => {
      codeTipVisible.value = !codeTipVisible.value;
    };
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/example.scss";
</style>
