<template>
	<div>
		组件|<router-link to="/">Example1</router-link>|
		<router-link to="/qqq">Example2</router-link>
	</div>
	<hr />
	<router-view></router-view>
</template>

<script>
export default {
	name: "App",
};
</script>
