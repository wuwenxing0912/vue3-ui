<template>
	<div>
		<TopNav />
		<div class="banner">
			<h1>X-UI</h1>
			<h2>Vue 3 UI 框架</h2>
			<p class="actions">
				<a href="https://github.com/wuwenxing0912/vue3-ui" target="blank"
					>Github</a
				>
				<router-link to="/document">开始</router-link>
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

<style lang="scss" scoped>
.banner {
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> h1 {
		font-weight: 300;
	}
	> h2 {
		font-weight: 300;
	}
	> .actions {
		padding: 8px 0;
		a {
			margin: 0 8px;
			background: #42b983;
			color: #fff;
			display: inline-block;
			height: 42px;
			line-height: 18px;
			border-radius: 99999px;
			padding: 12px 18px;
			font-weight: 700;
			&:hover {
				border-color: rgba(#42b983, 0.85);
				background-color: rgba(#42b983, 0.85);
			}
		}
	}
}
</style>
