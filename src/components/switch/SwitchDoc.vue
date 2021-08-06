<template>
	<section>
		<h1>组件和代码示例</h1>
		<div class="example-container">
			<Switch v-model:checked="checked" />
		</div>
		<div class="description">
			<span class="text">开关的基本用法</span>
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
	<section>
		<h1>API</h1>
		<table class="api-table" cellSpacing="0" cellPadding="0">
			<thead>
				<tr>
					<th class="api-table-head">API</th>
					<th class="api-table-head">说明</th>
					<th class="api-table-head">类型</th>
					<th class="api-table-head">默认值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="api-style">checked</td>
					<td class="api-style-description">开关选中状态</td>
					<td class="api-type">Boolean</td>
					<td class="api-default">false</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script lang="ts">
import Switch from "./Switch.vue";
import { ref } from "vue";
export default {
	components: {
		Switch: Switch,
	},
	setup() {
		const codeVisible = ref(false);
		const changeCodeVisible = () => {
			codeVisible.value = !codeVisible.value;
		};
		const codeTipVisible = ref(false);
		const changeCodeTipVisible = () => {
			codeTipVisible.value = !codeTipVisible.value;
		};
		const checked = ref(true);
		return {
			codeVisible,
			changeCodeVisible,
			codeTipVisible,
			changeCodeTipVisible,
			checked,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../../style/example.scss";
</style>
