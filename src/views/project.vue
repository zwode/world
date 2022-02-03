<template>
	<div class="hv-100 d-flex justify-content-center bg-gradient">
		<div class="d-flex justify-content-between flex-wrap">
			<div v-for="repos in git" class="card text-black w-50 my-3">
				<h3>{{ repos.name }}</h3>
				<a :href="repos.svn_url">
					To project
				</a>
				<div>
					{{ repos.description }}
				</div>
			</div>
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

</style>