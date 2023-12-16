<template>
	<div id="app" @scroll="handleScroll">
		<header id="app_header">
			<div class="header_container">
				<p>{{ weddingHost }}</p>
			</div>
		</header>
		<div id="app_body">
			<div class="navbar">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo navbar_menu"
					mode="horizontal"
					@select="handleSelect"
				>
					<el-menu-item index="1">Home</el-menu-item>
					<el-menu-item index="2">Gallery</el-menu-item>
					<el-menu-item index="3">About Us</el-menu-item>
					<el-menu-item index="4">Date</el-menu-item>
					<el-menu-item index="5">Location</el-menu-item>
				</el-menu>
			</div>
			<div class="menu_picture section">
				<el-carousel :interval="5000" type="card" height="700px">
					<el-carousel-item v-for="(picture, index) in weddingPictures" :key="index">
						<img class="wedding_pic" :src="picture.src" alt="..." />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="about_us section">
				<h3>About us</h3>
				<div class="about_us_container">
					<div class="groom host">
						<div class="groom_pic host_pic">
							<img src="../public/img/groom.jpeg" alt="..." />
						</div>
						<div class="groom_info host_info">
							<h2>Nguyễn Đình Khuê</h2>
							<div class="info">
								<h4>D.O.B: 18-09-1998</h4>
								<h4 class="qoute">Hate at first sight</h4>
							</div>
						</div>
					</div>
					<div class="vertical-line">
						<img src="../public/img/love.png" alt="pic" />
					</div>
					<div class="bride host">
						<div class="bride_pic hot_pic">
							<img src="../public/img/bride.jpeg" alt="..." />
						</div>
						<div class="bride_info host_info">
							<h2>Nguyễn Trà My</h2>
							<div class="info">
								<h4>D.O.B: 25-08-1998</h4>
								<h4 class="qoute">Love at first sight</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="date section">
				<h3>Date</h3>
				<div class="date_frame">
					<div class="date_countdown">
						<div class="wedding_day">
							<p>Wedding day:</p>
							<h2>Date We Getting Married</h2>
						</div>
						<flip-countdown deadline="2023-12-31 23:59:59"></flip-countdown>
					</div>
					<div class="date_pic">
						<img src="../public/img/ring.jpeg" alt="..." />
					</div>
				</div>
			</div>
		</div>
		<div v-if="toTopisShow" class="top-btn" @click="scrollToTop">
			<b-icon icon="arrow-up-square-fill" font-scale="1"></b-icon>
		</div>
		<footer id="app_footer">
			<div class="footer_container">
				<div class="footer_title">@Designed by: Nguyen Thanh Duy</div>
				<div class="author">
					Find me here:
					<a target="_blank" href="https://www.facebook.com/chiju109/"
						><img src="../public/img/facebook.png" alt=""
					/></a>
					<a target="_blank" href="https://www.instagram.com/chiju_d/"
						><img src="../public/img/instagram.png" alt=""
					/></a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';

export default {
	name: 'App',
	components: {
		FlipCountdown,
	},

	created() {
		document.title = 'My wedding';
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
		setInterval(this.updateCountdown, 1000); // Cập nhật mỗi giây
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},

	data() {
		return {
			weddingHost: 'Đình Khuê & Trà My',
			activeIndex: '1',
			toTopisShow: false,
			weddingPictures: [
				{
					id: 1,
					src: require('../public/img/wedding_pic1.jpeg'),
				},
				{
					id: 2,
					src: require('../public/img/wedding_pic2.jpeg'),
				},
				{
					id: 3,
					src: require('../public/img/wedding_pic3.jpeg'),
				},
			],
			targetDate: new Date('2023-12-31T23:59:59'), // Đặt ngày đích
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	},

	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},

		scrollToTop() {
			window.scrollTo(0, 0);
		},
		handleScroll() {
			this.toTopisShow = window.scrollY > 200;
		},
	},
};
</script>

<style scoped src="./App.css"></style>
