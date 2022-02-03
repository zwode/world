<template>
	<div class="home container">
		<main_banner></main_banner>
	</div>
</template>

<script>

import main_banner from '@/components/main_banner.vue';
import axios from 'axios';

export default {
	name: 'Home',
	components: {
		main_banner,
	},
	data() {
		return {
			info: null
		}
	}
}
</script>
