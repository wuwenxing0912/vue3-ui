<template>
  <Example description="按钮加载中状态。" :code="code">
    <Button levle="default" style="margin-right: 20px" loading>Loading</Button>
    <Button levle="primary" style="margin-right: 20px" loading>Loading</Button>
    <Button levle="dashed" style="margin-right: 20px" loading>Loading</Button>
    <Button levle="danger" loading>Loading</Button>
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
  <Button levle="default" loading>Default</Button>
  <Button levle="primary" loading>Primary</Button>
  <Button levle="dashed" loading>Dashed</Button>
  <Button levle="danger" loading>Danger</Button>
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
