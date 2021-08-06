<template>
	<span
		:class="{ 'x-switch': true, 'switch-checked': checked, disabled: disabled }"
		@click="changeChecked"
	>
		<span
			:class="{ 'x-switch-inner': true, 'x-switch-inner-checked': checked }"
		></span>
	</span>
</template>

<script lang="ts">
export default {
	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, context) {
		const changeChecked = () => {
			if (props.disabled) return;
			context.emit("update:checked", !props.checked);
		};
		return { changeChecked };
	},
};
</script>

<style lang="scss" scoped>
$main-color: #007aff; //#42b983
.x-switch {
	height: 22px;
	width: 40px;
	min-width: 40px;
	border-radius: 11px;
	padding: 2px;
	cursor: pointer;
	display: inline-block;
	transition: all 0.2s ease-in-out;
	background: rgba(0, 0, 0, 0.25);

	&.switch-checked {
		background: $main-color;
	}
	// &.switch-unchecked {
	// 	background: rgba(0, 0, 0, 0.25);
	// }
	& .x-switch-inner {
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #fff;
		// position: absolute;
		transform: translateX(0);
		transition: all 0.2s ease-in-out;
		&.x-switch-inner-checked {
			transform: translateX(100%);
			transition: all 0.2s ease-in-out;
		}
		// > .x-switch-inner-unchecked {
		// 	transform: translateX(0);
		// 	transition: all 0.2s ease-in-out;
		// }
	}
	&.disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
}
</style>
