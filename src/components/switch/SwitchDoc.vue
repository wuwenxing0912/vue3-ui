<template>
	<section>
		<h1>组件和代码示例</h1>
		<div class="example-container">
			<Switch v-model:checked="checked" />
		</div>
		<div class="description">
			<span class="text">开关的基本用法</span>
			<!-- <span
					class="code-icon"
					style={{ display: "inline-flex", cursor: "pointer" }}
					onClick={() => {
						setVisble(!visible);
					}}
					onMouseEnter={() => {
						setshowCode(!showCode);
					}}
					onMouseLeave={() => {
						setshowCode(!showCode);
					}}
				>
					<Icon name="code" style={{ height: 19 }}></Icon>
				</span> -->
			<!-- <span
					class="pop-content"
					style={{ display: showCode ? "inline-block" : "none" }}
				>
					{visible ? "收起代码" : "显示代码"}
				</span> -->
		</div>
		<!-- <div
				class="code-area"
				style={{ display: visible ? "block" : "none" }}
			>
				{createHighlightCode(code as string)}
			</div> -->
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
		const checked = ref(true);
		return { checked };
	},
};
</script>

<style lang="scss" scoped>
@import "../../style/example.scss";
</style>
