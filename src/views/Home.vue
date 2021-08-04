<template>
	<div>
		<TopNav />
		<div class="banner">
			<h1>X-UI</h1>
			<h2>Vue 3 UI 框架</h2>
			<p class="actions">
				<a href="">Github</a>
				<a href="">开始</a>
			</p>
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
