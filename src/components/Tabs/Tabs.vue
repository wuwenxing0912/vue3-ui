<template>
  <div class="x-tabs">
    <div class="x-tabs-nav">
      <div class="x-tabs-nav-item" v-for="(title, index) in titles" :key="index">
        {{ title }}
      </div>
    </div>
    <div class="x-tabs-content">
      <component
        class="x-tabs-content-item"
        v-for="(child, index) in children"
        :is="child"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
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
    return { children, titles };
  },
};
</script>

<style lang="scss" scoped>
$main-color: #007aff;
.x-tabs {
  &-nav {
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
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
