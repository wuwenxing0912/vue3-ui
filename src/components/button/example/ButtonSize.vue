<template>
  <section>
    <div class="example-container">
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
    </div>
    <div class="description">
      <span class="text">按钮尺寸：按钮有大、中、小三种尺寸。</span>
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
    const size = ref("middle");
    const changeSize = (value: string) => {
      size.value = value;
    };
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
      size,
      changeSize,
    };
  },
};
</script>
