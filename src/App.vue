<template>
	<div id="nav">
		<nav_page />
	</div>
	<router-view/>
</template>

<script>

import nav_page from '@/components/nav_page.vue';

export default {
	components: {
		nav_page
	}
}

</script>

<style>
@import "./assets/css/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
