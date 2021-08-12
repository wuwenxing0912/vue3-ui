<template>
  <Example title="组件和代码示例" description="开关的基本用法。" :code="code">
    <Switch v-model:checked="checked" />
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../Switch.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Switch, Example },
  setup() {
    const checked = ref(true);
    const code =
      `<template>
  <Switch v-model:checked="checked" />
</template>
    
<script>
import { ref } from "vue";
import Switch from "./Switch.vue";
export default {
  components: { Switch },
  setup() {
    const checked = ref(true);
    return { checked };
  }
}
<` + "/script>";
    return { checked, code };
  },
};
</script>
