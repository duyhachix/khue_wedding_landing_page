<template>
	<footer id="app_footer">
		<div class="footer_container">
			<div class="footer_title"><strong>@Designed by:</strong> Nguyen Thanh Duy</div>
			<div class="author">
				Find me here:
				<a target="_blank" href="https://www.facebook.com/chiju109/"
					><img src="../../public/img/facebook.png" alt=""
				/></a>
				<a target="_blank" href="https://www.instagram.com/chiju_d/"
					><img src="../../public/img/instagram.png" alt=""
				/></a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'app-footer',
};
</script>

<style scoped>
#app_footer {
	height: 20px;
	width: 100%;
	background-color: rgb(201, 201, 201);
	position: fixed;
	z-index: 10;
	bottom: 0;
	font-size: 0.8rem;
}
#app_footer .footer_container {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 2%;
}

.footer_container .author {
	display: flex;
	height: 100%;
}
.footer_container .author a {
	margin: 0 3px;
	padding: 0;
	align-self: center;
}
.footer_container .author a img {
	width: 16px;
	height: 16px;
	object-fit: contain;
}
</style>
