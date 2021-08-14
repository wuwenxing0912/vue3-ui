<template>
  <TabsDefault />
  <TabsDisabled />
  <TabsDirection />
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
          <td class="api">selected</td>
          <td class="api-description">当前选中的 Tab</td>
          <td class="api-type">String</td>
          <td class="api-default">---</td>
        </tr>
        <tr>
          <td class="api">direction</td>
          <td class="api-description">Tab 位置</td>
          <td class="api-type">"top" | "left" | "bottom" | "right"</td>
          <td class="api-default">top</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import TabsDefault from "./TabsDefault.vue";
import TabsDisabled from "./TabsDisabled.vue";
import TabsDirection from "./TabsDirection.vue";
export default {
  components: {
    TabsDefault,
    TabsDisabled,
    TabsDirection,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/example.scss";
</style>
