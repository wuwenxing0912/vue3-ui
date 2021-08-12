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
      <tbody>
        <tr>
          <td class="api">levle</td>
          <td class="api-description">设置button的样式</td>
          <td class="api-type">"default" | "primary" | "dashed" | "danger"</td>
          <td class="api-default">default</td>
        </tr>
        <tr>
          <td class="api">size</td>
          <td class="api-description">按钮尺寸大小</td>
          <td class="api-type">"large" | "middle" | "small"</td>
          <td class="api-default">middle</td>
        </tr>
        <tr>
          <td class="api">disabled</td>
          <td class="api-description">按钮禁用状态</td>
          <td class="api-type">Boolean</td>
          <td class="api-default">false</td>
        </tr>
        <tr>
          <td class="api">loading</td>
          <td class="api-description">按钮加载中状态</td>
          <td class="api-type">Boolean</td>
          <td class="api-default">false</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import ButtonDefault from "./ButtonDefault.vue";
import ButtonDisabled from "./ButtonDisabled.vue";
import ButtonSize from "./ButtonSize.vue";
import ButtonLoading from "./ButtonLoading.vue";
export default {
  components: { ButtonDefault, ButtonDisabled, ButtonLoading, ButtonSize },
};
</script>

<style lang="scss">
@import "../../../style/example.scss";
</style>
