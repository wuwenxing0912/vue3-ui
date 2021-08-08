<template>
  <section>
    <div class="example-container">
      <Button levle="default" style="margin-right: 20px" loading>Loading</Button>
      <Button levle="primary" style="margin-right: 20px" loading>Loading</Button>
      <Button levle="dashed" style="margin-right: 20px" loading>Loading</Button>
      <Button levle="danger" loading>Loading</Button>
    </div>
    <div class="description">
      <span class="text">按钮加载中状态。</span>
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
import Button from "../Button.vue";
export default {
  components: { Button: Button },
  setup() {
    const codeVisible = ref(false);
    const changeCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeTipVisible = ref(false);
    const changeCodeTipVisible = () => {
      codeTipVisible.value = !codeTipVisible.value;
    };
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
    };
  },
};
</script>
