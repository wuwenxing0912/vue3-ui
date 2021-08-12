<template>
  <Example title="组件" description="标签页的基本用法。" :code="code">
    <Tabs v-model:selected="selected" style="width: 100%">
      <Tab title="导航一">Tab1</Tab>
      <Tab title="导航二">Tab2</Tab>
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
    const selected = ref("导航一");
    const code =
      `<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航一">Tab1</Tab>
    <Tab title="导航二">Tab2</Tab>
  </Tabs>
</template>
    
<script>
import { ref } from "vue";
import Tabs from "../Tabs.vue";
import Tab from "../Tab.vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selected = ref("导航一");
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
