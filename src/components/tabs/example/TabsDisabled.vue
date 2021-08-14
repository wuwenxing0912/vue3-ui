<template>
  <Example description="禁用某个Tab。" :code="code">
    <Tabs v-model:selected="selected" style="width: 100%">
      <Tab title="Tab 1">Tab 1 内容区域</Tab>
      <Tab title="Tab 2" disabled>Tab 2 内容区域</Tab>
      <Tab title="Tab 3">Tab 3 内容区域</Tab>
      <Tab title="Tab 4" disabled>Tab 4 内容区域</Tab>
      <Tab title="Tab 5">Tab 5 内容区域</Tab>
    </Tabs>
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../Tabs.vue";
import Tab from "../Tab.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Tabs, Tab, Example },
  setup() {
    const selected = ref("Tab 1");
    const code =
      `<template>
  <Tabs v-model:selected="selected">
    <Tab title="Tab 1">Tab 1 内容区域</Tab>
    <Tab title="Tab 2" disabled>Tab 2 内容区域</Tab>
    <Tab title="Tab 3" disabled>Tab 3 内容区域</Tab>
    <Tab title="Tab 4">Tab 4 内容区域</Tab>
    <Tab title="Tab 5">Tab 5 内容区域</Tab>
  </Tabs>
</template>
    
<script>
import { ref } from "vue";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selected = ref("Tab 1");
    return { selected };
  }
}
<` + "/script>";
    return {
      selected,
      code,
    };
  },
};
</script>
