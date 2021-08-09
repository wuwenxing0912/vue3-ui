<template>
  <template v-if="visible">
    <div class="x-modal-mask" onClick="{onClickMaskClose}"></div>
    <div class="x-modal">
      <header class="x-modal-header">
        <div class="x-modal-header-content">title</div>
        <div class="x-modal-icon-wrapper" onClick="{props.onClose}">
          <svg class="icon x-modal-icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </header>
      <main class="x-modal-main">content</main>
      <footer class="x-modal-footer">
        <Button
          :levle="cancelButtonLevle"
          :size="cancelButtonSize"
          class="x-modal-footer-button"
          @click="onClose"
        >
          cancelText
        </Button>
        <Button :levle="confirmButtonLevle" :size="confirmButtonSize" @click="onConfirm">
          confirmText
        </Button>
      </footer>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "../button/Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onConfirm: {
      type: Function,
    },
    confirmButtonSize: {
      validator(value: string) {
        return ["large", "middle", "small"].includes(value);
      },
      default: "middle",
    },
    confirmButtonLevle: {
      validator(value: string) {
        return ["default", "primary", "dashed", "danger"].includes(value);
      },
      default: "default",
    },
    onClose: {
      type: Function,
    },
    cancelButtonSize: {
      validator(value: string) {
        return ["large", "middle", "small"].includes(value);
      },
      default: "middle",
    },
    cancelButtonLevle: {
      validator(value: string) {
        return ["default", "primary", "dashed", "danger"].includes(value);
      },
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
.x-modal {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  max-width: 500px;
  line-height: 24px;
  background: white;
  border-radius: 4px;
  z-index: 2;
  animation: 0.3s modal ease-in;

  @keyframes modal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#8a8a8a, 0.35);
    z-index: 1;
    animation: 0.1s modal linear;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    & .x-modal-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      width: 24px;
      cursor: pointer;
      fill: #8a8a8a;
      &:hover {
        fill: grey;
      }
    }
  }

  &-main {
    padding: 8px 16px;
    min-height: 120px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }

  &-footer {
    padding: 8px 16px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: flex-end;
    &-button {
      margin-right: 20px;
    }
  }
}
</style>
