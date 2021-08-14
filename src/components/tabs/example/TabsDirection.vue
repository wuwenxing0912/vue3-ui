<template>
  <Example
    description="标签页有4个位置，分别为：top，left，bottom，right。"
    :code="code"
    style="position: relative"
  >
    <div style="position: absolute; top: 48px">
      <Button levle="primary" @click="changeDirection('top')" style="margin-right: 20px"
        >Top
      </Button>
      <Button levle="primary" @click="changeDirection('left')" style="margin-right: 20px"
        >Left
      </Button>
      <Button
        levle="primary"
        @click="changeDirection('bottom')"
        style="margin-right: 20px"
        >Bottom
      </Button>
      <Button levle="primary" @click="changeDirection('right')">Right</Button>
    </div>
    <Tabs
      v-model:selected="selected"
      :direction="direction"
      style="width: 100%; margin-top: 48px"
    >
      <Tab title="Tab 1">Tab 1 内容区域</Tab>
      <Tab title="Tab 2">Tab 2 内容区域</Tab>
      <Tab title="Tab 3">Tab 3 内容区域</Tab>
      <Tab title="Tab 4">Tab 4 内容区域</Tab>
      <Tab title="Tab 5">Tab 5 内容区域</Tab>
    </Tabs>
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../Tabs.vue";
import Tab from "../Tab.vue";
import Example from "../../utils/Example.vue";
import Button from "../../button/Button.vue";
export default {
  components: { Tabs, Tab, Example, Button },
  setup() {
    const selected = ref("Tab 1");
    const direction = ref("top");
    const changeDirection = (value: string) => {
      direction.value = value;
    };
    const code =
      `<template>
  <Button levle="primary" @click="changeDirection('top')">Top</Button>
  <Button levle="primary" @click="changeDirection('left')">Left</Button>
  <Button levle="primary" @click="changeDirection('bottom')">Bottom</Button>
  <Button levle="primary" @click="changeDirection('right')">Right</Button>
  
  <Tabs v-model:selected="selected" :direction="direction">
    <Tab title="Tab 1">Tab 1 内容区域</Tab>
    <Tab title="Tab 2">Tab 2 内容区域</Tab>
    <Tab title="Tab 3">Tab 3 内容区域</Tab>
    <Tab title="Tab 4">Tab 4 内容区域</Tab>
    <Tab title="Tab 5">Tab 5 内容区域</Tab>
  </Tabs>
</template>
    
<script>
import { ref } from "vue";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import Button from "./Button.vue";
export default {
  components: { Tabs, Tab, Button },
  setup() {
    const selected = ref("Tab 1");
    const direction = ref("top");
    const changeDirection = (value: string) => {
      direction.value = value;
    };
    return { selected, direction, changeDirection };
  }
}
<` + "/script>";
    return {
      selected,
      code,
      direction,
      changeDirection,
    };
  },
};
</script>
