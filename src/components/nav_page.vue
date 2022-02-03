<template>
	<div class="nav">
		<div class="container d-flex justify-content-between">
			<div class="w-25 align-self-center">
				<a href="/" class="me">
					Dautov Abulhair
				</a>
			</div>
			<div class="d-flex">
				<router-link to="project" class="nav_link">
					My project
				</router-link>
				<a href="#experience" class="nav_link">
					Experience
				</a>
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
		cursor: none;
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

	.nav_link {
		font-size: 16px;
	}

	.nav {
		background-color: rgba(29, 29, 31, 0.7);
		border-color: #3d3d3d;
		padding: 10px 0px;
		z-index: 10000;
	}



</style>