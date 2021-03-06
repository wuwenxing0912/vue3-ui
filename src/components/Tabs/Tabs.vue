<template>
  <div class="x-tabs" :class="direction">
    <div class="x-tabs-nav" ref="nav" :class="direction">
      <div
        class="x-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{
          selected: title[0] === selected,
          disabled: typeof title[1] !== 'undefined',
        }"
        @click="selectTitle(title)"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
      >
        {{ title[0] }}
      </div>
      <span class="x-tabs-nav-item-underline" :class="direction" ref="underline"></span>
    </div>
    <div class="x-tabs-content" :class="direction">
      <component class="x-tabs-content-item" :is="currentContent" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, onUpdated } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
    direction: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "bottom", "right"].includes(value);
      },
    },
  },
  setup(props, context) {
    const children = context.slots.default();
    children.forEach((child) => {
      if (child.type !== Tab) {
        throw new Error("Tabs必须接受 Tab组件");
      }
    });
    const titles = children.map((child) => {
      return [child.props.title, child.props.disabled];
    });
    const selectTitle = (title: any[]) => {
      if (typeof title[1] !== "undefined") return;
      context.emit("update:selected", title[0]);
    };
    const currentContent = computed(() => {
      return children.filter((child) => {
        return child.props.title === props.selected;
      })[0];
    });

    const nav = ref<HTMLDivElement>(null);
    const navItems = ref<HTMLDivElement[]>([]);
    const underline = ref<HTMLSpanElement>(null);

    const setUnderlinePosition = () => {
      const selectedItem = navItems.value.filter((item) => {
        return item.classList.contains("selected");
      })[0];
      const { left: navLeft, top: navTop } = nav.value.getBoundingClientRect();
      const { width, height, left, top } = selectedItem.getBoundingClientRect();
      underline.value.style.inset = "";
      switch (props.direction) {
        case "top":
          underline.value.style.width = `${width}px`;
          underline.value.style.left = `${left - navLeft}px`;
          underline.value.style.height = "2px";
          break;
        case "bottom":
          underline.value.style.width = `${width}px`;
          underline.value.style.left = `${left - navLeft}px`;
          underline.value.style.height = "2px";
          break;
        case "left":
          underline.value.style.height = `${height}px`;
          underline.value.style.top = `${top - navTop}px`;
          underline.value.style.width = "2px";
          break;
        case "right":
          underline.value.style.height = `${height}px`;
          underline.value.style.top = `${top - navTop}px`;
          underline.value.style.width = "2px";
          break;

        default:
          break;
      }
    };

    onMounted(setUnderlinePosition);
    onUpdated(setUnderlinePosition);
    return {
      children,
      titles,
      selectTitle,
      currentContent,
      nav,
      navItems,
      underline,
    };
  },
};
</script>

<style lang="scss">
$main-color: #007aff;
$border-color: #d9d9d9;
$font-color: #000000d9;
.x-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $font-color;
    &-item {
      cursor: pointer;
      &.selected {
        color: $main-color;
      }
      &.disabled,
      &.disabled:hover {
        cursor: not-allowed;
        color: #00000040;
      }
    }
    &-item-underline {
      display: inline-block;
      position: absolute;
      background: $main-color;
    }
  }
  &-content {
    font-size: 14px;
    color: $font-color;
  }

  &.top {
    & .x-tabs-nav.top {
      border-bottom: 1px solid $border-color;
      & .x-tabs-nav-item {
        padding: 8px 0;
        margin: 0 16px;
        &:first-child {
          margin-left: 0;
        }
      }
      & .x-tabs-nav-item-underline {
        left: 0;
        bottom: -1px;
        height: 2px;
        transition: left 0.25s;
      }
    }
    & .x-tabs-content {
      padding: 16px 0;
    }
  }

  &.left {
    display: flex;
    flex-direction: row;
    & .x-tabs-nav.left {
      border-right: 1px solid $border-color;
      flex-direction: column;
      & .x-tabs-nav-item {
        padding: 8px 16px;
        margin-bottom: 16px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      & .x-tabs-nav-item-underline {
        top: 0;
        width: 2px;
        right: -1px;
        transition: top 0.25s;
      }
    }
    & .x-tabs-content {
      flex-grow: 1;
      padding: 8px 16px;
    }
  }

  &.bottom {
    display: flex;
    flex-direction: column-reverse;
    & .x-tabs-nav.bottom {
      border-top: 1px solid $border-color;
      & .x-tabs-nav-item {
        padding: 8px 0;
        margin: 0 16px;
        &:first-child {
          margin-left: 0;
        }
      }
      & .x-tabs-nav-item-underline {
        top: 0;
        left: 0;
        bottom: -1px;
        height: 2px;
        transition: left 0.25s;
      }
    }
    & .x-tabs-content {
      padding: 16px 0;
    }
  }

  &.right {
    display: flex;
    flex-direction: row-reverse;
    & .x-tabs-nav.right {
      border-left: 1px solid $border-color;
      flex-direction: column;
      & .x-tabs-nav-item {
        padding: 8px 16px;
        margin-bottom: 16px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      & .x-tabs-nav-item-underline {
        top: 0;
        width: 2px;
        left: -1px;
        transition: top 0.25s;
      }
    }
    & .x-tabs-content {
      flex-grow: 1;
      padding: 8px 16px;
    }
  }
}
</style>
