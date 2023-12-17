<template>
	<header id="app_header" ref="header">
		<div class="header_container">
			<p>{{ weddingHost }}</p>
		</div>
	</header>
</template>

<script>
export default {
	name: 'app_header',
	data() {
		return {
			weddingHost: 'Đình Khuê & Trà My',
		};
	},
};
</script>

<style scoped>
#app_header {
	background-color: #fff;
	border-bottom: 1px solid #eee;
	height: 80px;
	position: fixed;
	z-index: 10;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.header_container {
	font-family: 'Noto Sans JP', sans-serif;
	font-family: 'Parisienne', cursive;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* position: relative; */
}
.header_container p {
	font-size: 30px;
	font-weight: 800;
	margin: 0;
	padding: 0;
}
@media screen and (max-width: 480px) {
	#app_header {
		height: 40px;
	}
	.header_container {
	}

	.header_container p {
		font-size: 20px;
	}
}
</style>
