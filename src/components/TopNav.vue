<template>
	<div class="top-nav">
		<div class="logo">
			<img src="../assets/logo.png" alt="X-UI" /><span class="text">X-UI</span>
		</div>
		<ul class="menu">
			<li>菜单1</li>
			<li>菜单2</li>
		</ul>
	</div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.top-nav {
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	position: relative;
	z-index: 10;
	box-shadow: 0 2px 5px rgb(0 0 0 / 16%);

	> .logo {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-left: 32px;
		> img {
			width: 40px;
			height: 40px;
		}
		> .text {
			margin-left: 6px;
		}
	}

	> .menu {
		display: flex;
		white-space: nowrap;
		flex-wrap: nowrap;
		> li {
			margin: 0 20px;
		}
	}

	// > .toggleAside {
	// 	display: none;
	// 	width: 24px;
	// 	height: 24px;
	// 	background: grey;
	// 	position: absolute;
	// 	left: 16px;
	// 	top: 50%;
	// 	transform: translateY(-50%);
	// 	cursor: pointer;
	// }

	// @media (max-width: 500px) {
	// 	& {
	// 		justify-content: center;
	// 	}
	// 	> .menu {
	// 		display: none;
	// 	}
	// 	> .toggleAside {
	// 		display: inline-block;
	// 	}
	// }
}
</style>
