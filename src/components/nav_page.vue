<template>
	<div class="nav">
		<div class="container d-flex justify-content-between">
			<a href="/" class="me align-self-center">
				Dautov Abulhair
			</a>
			<div class="d-flex">
				<a href="#project" class="nav_link">
					My project
				</a>
				<a href="#experience" class="nav_link">
					Experience
				</a>
			</div>
			<a href="#request" class="request align-self-center">
				Project request
			</a>
		</div>
	</div>
</template>

<script>

export default {

}

</script>

<style scoped>

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

	.nav_link {
		font-size: 16px;
	}

	.nav {
		background-color: rgba(29, 29, 31, 0.7);
		border-color: #3d3d3d;
		padding: 10px 0px;
	}

</style>