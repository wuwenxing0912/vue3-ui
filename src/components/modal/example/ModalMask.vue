<template>
  <Example description="点击遮罩层关闭 Modal。" :code="code">
    <Button levle="primary" @click="changeModalVisible"> open Modal </Button>
    <Modal
      :visible="modalVisible"
      @update:visible="modalVisible = $event"
      :onClickMaskClose="true"
      :onClose="changeModalVisible"
      :onConfirm="changeModalVisible"
    >
      <template v-slot:title>对话框</template>
      <template v-slot:content>
        <div>more content...</div>
        <div>more content...</div>
        <div>more content...</div>
      </template>
      <template v-slot:cancel>取消</template>
      <template v-slot:confirm>确定</template>
    </Modal>
  </Example>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../../button/Button.vue";
import Modal from "../Modal.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Button, Modal, Example },
  setup() {
    const code =
      `<template>
  <Modal
      v-model:visible="modalVisible"
      :onClickMaskClose="true"
      :onClose="changeModalVisible"
      :onConfirm="changeModalVisible"
    >
      <template v-slot:title>对话框</template>
      <template v-slot:content>
        <div>more content...</div>
        <div>more content...</div>
        <div>more content...</div>
      </template>
      <template v-slot:cancel>取消</template>
      <template v-slot:confirm>确定</template>
  </Modal>
</template>
    
<script>
import { ref } from "vue";
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  setup() {
    const modalVisible = ref(false);
    const changeModalVisible = () => {
      modalVisible.value = !modalVisible.value;
    };
    return { modalVisible, changeModalVisible };
  }
}
<` + "/script>";
    const modalVisible = ref(false);
    const changeModalVisible = () => {
      modalVisible.value = !modalVisible.value;
    };
    return { modalVisible, changeModalVisible, code };
  },
};
</script>
