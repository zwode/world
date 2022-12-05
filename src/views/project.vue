<template>
	<div class="hv-100 d-flex justify-content-center bg-gradient">
		<div class="d-flex justify-content-between flex-wrap">
			<a :href="repos.svn_url" v-for="repos in git" class="card text-black w-50 my-3 p-3" taget="_blank">
				<h3 class="mt-3 text-white">{{ repos.name }}</h3>
				<div class="mt-3 text-white">
					{{ repos.description }}
				</div>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	name: 'project',
	computed: {
		git() {
			return this.$store.state.git
		}
	},
	mounted() {
		this.$store.dispatch("getGit");
	}

}

</script>

<style scoped>

.card a {
  color: #ffffff;
}

.card:hover {
  transform: scale(1.1);
}

</style>