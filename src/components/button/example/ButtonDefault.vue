<template>
  <Example
    title="组件和代码示例"
    description="按钮有四种类型：默认按钮、主题按钮、虚线按钮以及危险按钮。"
    :code="code"
  >
    <Button levle="default" style="margin-right: 20px">Default</Button>
    <Button levle="primary" style="margin-right: 20px">Primary</Button>
    <Button levle="dashed" style="margin-right: 20px">Dashed</Button>
    <Button levle="danger">Danger</Button>
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
  <Button levle="default">Default</Button>
  <Button levle="primary">Primary</Button>
  <Button levle="dashed">Dashed</Button>
  <Button levle="danger">Danger</Button>
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
