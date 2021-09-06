<template>
  <section>
    <h1 v-if="title">{{ title }}</h1>
    <div class="example-container">
      <slot />
    </div>
    <div class="description">
      <span class="text">{{ description }}</span>
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
    <div class="code-area" v-if="codeVisible">
      <pre
        class="language-html"
        v-html="Prism.highlight(code, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = window.Prism;
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    code: {
      type: String,
    },
  },
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
      Prism,
    };
  },
};
</script>
