<template>
	<div>
		<TopNav />
		<div class="content">
			<aside v-if="menuVisible">
				<h2>组件</h2>
				<ol>
					<li>
						<router-link to="/document/switch">Switch 组件</router-link>
					</li>
					<li>
						<router-link to="/document/button">Button 组件</router-link>
					</li>
					<li>
						<router-link to="/document/dialog">Dialog 组件</router-link>
					</li>
					<li>
						<router-link to="/document/tabs">Tabs 组件</router-link>
					</li>
				</ol>
			</aside>
			<main><router-view></router-view></main>
		</div>
	</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";
export default {
	components: {
		TopNav,
	},
	setup() {
		const menuVisible = inject<Ref<boolean>>("menuVisible");
		return { menuVisible };
	},
};
</script>

<style lang="scss" scoped>
aside {
	width: 150px;
	padding: 16px;
	> h2 {
		margin-bottom: 4px;
	}
	> ol {
		> li {
			padding: 4px 0;
			margin-left: 8px;
		}
	}
	@media (max-width: 500px) {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 80px;
	}
}
</style>
