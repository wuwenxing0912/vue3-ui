<template>
  <ButtonDefault />
  <ButtonDisabled />
  <ButtonSize />
  <ButtonLoading />
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
import ButtonDefault from "./example/ButtonDefault.vue";
import ButtonDisabled from "./example/ButtonDisabled.vue";
import ButtonSize from "./example/ButtonSize.vue";
import ButtonLoading from "./example/ButtonLoading.vue";
export default {
  components: { ButtonDefault, ButtonDisabled, ButtonLoading, ButtonSize },
};
</script>

<style lang="scss">
@import "../../style/example.scss";
</style>
