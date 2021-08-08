<template>
	<ButtonDefault />
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
			<tbody></tbody>
		</table>
	</section>
</template>

<script lang="ts">
import ButtonDefault from "./example/ButtonDefault.vue";
export default {
	components: { ButtonDefault },
};
</script>

<style lang="scss">
@import "../../style/example.scss";
</style>
