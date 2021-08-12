<template>
  <Example description="按钮尺寸：按钮有大、中、小三种尺寸。" :code="code">
    <Button
      levle="default"
      style="margin-right: 20px"
      :size="size"
      @click="changeSize('large')"
      >Large
    </Button>
    <Button
      levle="primary"
      style="margin-right: 20px"
      :size="size"
      @click="changeSize('middle')"
      >Middle
    </Button>
    <Button
      levle="dashed"
      style="margin-right: 20px"
      :size="size"
      @click="changeSize('middle')"
      >Middle
    </Button>
    <Button levle="danger" :size="size" @click="changeSize('small')">Small</Button>
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../Button.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Button: Button, Example },
  setup() {
    const size = ref("middle");
    const changeSize = (value: string) => {
      size.value = value;
    };
    const code =
      `<template>
  <Button levle="default" :size="size" @click="changeSize('large')">Default</Button>
  <Button levle="primary" :size="size" @click="changeSize('middle')">Primary</Button>
  <Button levle="dashed" :size="size" @click="changeSize('middle')">Dashed</Button>
  <Button levle="danger" :size="size" @click="changeSize('small')">Danger</Button>
</template>
    
<script>
import { ref } from "vue";
import Button from "./Button.vue";
export default {
  components: { Button },
  setup() {
    const size = ref("middle");
    const changeSize = (value: string) => {
      size.value = value;
    };
    return { size, changeSize }
  }
}
<` + "/script>";
    return { size, changeSize, code };
  },
};
</script>
