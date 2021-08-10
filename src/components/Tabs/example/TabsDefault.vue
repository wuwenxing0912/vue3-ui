<template>
  <section>
    <h1>组件和代码示例</h1>
    <div class="example-container">
      <Tabs
        :selected="selected"
        @updated:selected="selected = $event"
        style="width: 100%"
      >
        <Tab title="导航一">Tab1</Tab>
        <Tab title="导航二">Tab2</Tab>
      </Tabs>
    </div>
    <div class="description">
      <span class="text">标签页的基本用法。</span>
      <span
        class="code-icon"
        @click="changeCodeVisible"
        @mouseenter="changeCodeTipVisible"
        @mouseleave="changeCodeTipVisible"
      >
        <svg class="icon">
          <use xlink:href="#icon-code"></use>
        </svg>
      </span>
      <span class="pop-content" v-if="codeTipVisible">
        {{ codeVisible ? "收起代码" : "显示代码" }}
      </span>
    </div>
    <div class="code-area" v-if="codeVisible">code</div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../Tabs.vue";
import Tab from "../Tab.vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const codeVisible = ref(false);
    const changeCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeTipVisible = ref(false);
    const changeCodeTipVisible = () => {
      codeTipVisible.value = !codeTipVisible.value;
    };
    const selected = ref("导航一");
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
      selected,
    };
  },
};
</script>
