<template>
  <div>
    <div v-for="(title, index) in titles" :key="index">{{ title }}</div>
    <component v-for="(child, index) in children" :is="child" :key="index" />
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
