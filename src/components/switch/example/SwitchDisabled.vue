<template>
  <Example description="开关禁用状态。" :code="code">
    <Switch disabled />
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
  <Switch disabled />
</template>
    
<script>
import { ref } from "vue";
import Switch from "./Switch.vue";
export default {
  components: { Switch }
}
<` + "/script>";
    return { code };
  },
};
</script>
