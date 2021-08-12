<template>
  <Example description="按钮禁用：设置按钮 disabled 禁用状态。" :code="code">
    <Button levle="default" style="margin-right: 20px" disabled>Default </Button>
    <Button levle="primary" style="margin-right: 20px" disabled>Primary</Button>
    <Button levle="dashed" style="margin-right: 20px" disabled>Dashed</Button>
    <Button levle="danger" disabled>Danger</Button>
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../Button.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Button: Button, Example },
  setup() {
    const code =
      `<template>
  <Button levle="default" disabled>Default</Button>
  <Button levle="primary" disabled>Primary</Button>
  <Button levle="dashed" disabled>Dashed</Button>
  <Button levle="danger" disabled>Danger</Button>
</template>
    
<script>
import Button from "./Button.vue";
export default {
  components: { Button }
}
<` + "/script>";
    return { code };
  },
};
</script>
