<template>
	<div>
		<TopNav />
		<div class="content">
			<aside>导航栏</aside>
			<main>内容区域</main>
		</div>
	</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
	components: {
		TopNav,
	},
};
</script>
