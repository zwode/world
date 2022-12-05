<template>
	<div class="nav">
		<div class="container d-flex justify-content-between">
			<div class="w-25 align-self-center">
				<router-link to="/" class="me" :class="{ 'link_active': this.$route?.name === 'Home' }">
					Dautov Abulhair
				</router-link>
			</div>
			<div class="d-flex">
				<router-link to="project" class="nav_link" :class="{ 'link_active': this.$route?.name === 'Project' }">
					My project
				</router-link>
				<router-link to="experience" class="nav_link">
					Experience
				</router-link>
			</div>
			<div class="w-25 align-self-center">
				<a href="#request" class="request">
					Project request
				</a>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  methods: {
    checkRoute () {
      console.log(this.$route)
    }
  },
  mounted() {
    console.log(this.$route)
  }
}

</script>

<style scoped>
	.nav {
	}
	a {
		margin: 0 20px;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 10px;
	}

	a:hover	{
		color:#fff;
		background: gray;
	}

	a:active {
		color:#fff;
		background: gray;
	}

	.me {
		font-size: 18px;
		font-weight: 600;
	}

	.request {
		font-size: 18px;
		font-weight: 600;
	}

	.nav {
		background-color: rgba(29, 29, 31, 0.7);
		border-color: #3d3d3d;
		padding: 10px 0px;
		z-index: 10000;
	}



</style>