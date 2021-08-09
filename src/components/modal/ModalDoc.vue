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
      <tbody></tbody>
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
