<template>
  <section>
    <h1>组件和代码示例</h1>
    <div class="example-container">
      <Switch v-model:checked="checked" />
    </div>
    <div class="description">
      <span class="text">开关的基本用法。</span>
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
import Switch from "../Switch.vue";
export default {
  components: { Switch },
  setup() {
    const codeVisible = ref(false);
    const changeCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeTipVisible = ref(false);
    const changeCodeTipVisible = () => {
      codeTipVisible.value = !codeTipVisible.value;
    };
    const checked = ref(true);
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
      checked,
    };
  },
};
</script>
