<template>
  <SwitchDefault />
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
          <td class="api">checked</td>
          <td class="api-description">开关选中状态</td>
          <td class="api-type">Boolean</td>
          <td class="api-default">false</td>
        </tr>
        <tr>
          <td class="api">disabled</td>
          <td class="api-description">开关是否禁用</td>
          <td class="api-type">Boolean</td>
          <td class="api-default">false</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import SwitchDefault from "./example/SwitchDefault.vue";
import { ref } from "vue";
export default {
  components: {
    SwitchDefault,
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
