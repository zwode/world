<template>
	<div class="home container">
		<Welcome msg="Welcome to Your Vue.js App" class="mb-2"/>
	</div>
</template>

<script>

import Welcome from '@/components/Welcome.vue';
import axios from 'axios';

export default {
	name: 'Home',
	components: {
		Welcome,
	},
	data() {
		return {
			info: null
		}
	}
}
</script>
