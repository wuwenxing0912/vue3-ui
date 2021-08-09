<template>
  <section>
    <div class="example-container">
      <Button levle="primary" @click="changeModalVisible"> open Modal </Button>
      <Modal :visible="modalVisible" />
    </div>
    <div class="description">
      <span class="text">对话框的基本用法。</span>
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
import Button from "../../button/Button.vue";
import Modal from "../Modal.vue";
export default {
  components: { Button, Modal },
  setup() {
    const codeVisible = ref(false);
    const changeCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeTipVisible = ref(false);
    const changeCodeTipVisible = () => {
      codeTipVisible.value = !codeTipVisible.value;
    };
    const modalVisible = ref(false);
    const changeModalVisible = () => {
      modalVisible.value = !modalVisible.value;
    };
    return {
      codeVisible,
      changeCodeVisible,
      codeTipVisible,
      changeCodeTipVisible,
      modalVisible,
      changeModalVisible,
    };
  },
};
</script>
