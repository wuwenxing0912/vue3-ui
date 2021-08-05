<template>
	<Switch :value="checked" @input="checked = $event" />
</template>

<script lang="ts">
import Switch from "./Switch.vue";
import { ref } from "vue";
export default {
	components: {
		Switch: Switch,
	},
	setup() {
		const checked = ref(true);
		return { checked };
	},
};
</script>
