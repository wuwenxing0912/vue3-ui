<template>
  <div class="x-tabs">
    <div class="x-tabs-nav" ref="nav">
      <div
        class="x-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ selected: title === selected }"
        @click="selectTitle(title)"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
      >
        {{ title }}
      </div>
      <span class="x-tabs-nav-item-underline" ref="underline"></span>
    </div>
    <div class="x-tabs-content">
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
  },
  setup(props, context) {
    const children = context.slots.default();
    children.forEach((child) => {
      if (child.type !== Tab) {
        throw new Error("Tabs必须接受 Tab组件");
      }
    });
    const titles = children.map((child) => {
      return child.props.title;
    });
    const selectTitle = (title: string) => {
      context.emit("updated:selected", title);
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
      const navLeft = nav.value.getBoundingClientRect().left;
      const { width, left } = selectedItem.getBoundingClientRect();
      underline.value.style.width = `${width}px`;
      underline.value.style.left = `${left - navLeft}px`;
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

<style lang="scss" scoped>
$main-color: #007aff;
.x-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $main-color;
      }
    }
    &-item-underline {
      display: inline-block;
      position: absolute;
      height: 3px;
      background: $main-color;
      left: 0;
      bottom: -1px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
