<template>
	<div>
		<Button :levle="levle">按钮</Button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button.vue";
export default {
	components: { Button: Button },
	setup() {
		const levle = "primary";
		return { levle };
	},
};
</script>
