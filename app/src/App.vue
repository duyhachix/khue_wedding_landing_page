<template>
	<div id="app" @scroll="handleScroll">
		<header id="app_header" ref="header">
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
					<el-menu-item index="1" @click="onScrollTo('header')">
						<i class="el-icon-s-home"></i> Home</el-menu-item
					>
					<el-menu-item index="2" @click="onScrollTo('gallery')">
						<i class="el-icon-menu"></i> Gallery</el-menu-item
					>

					<el-menu-item index="3" @click="onScrollTo('about_us')"
						><i class="el-icon-user"></i> About Us</el-menu-item
					>
					<el-menu-item index="4" @click="onScrollTo('date')"
						><i class="el-icon-date"></i> Date</el-menu-item
					>
					<el-menu-item index="5" @click="onScrollTo('location')"
						><i class="el-icon-location"></i> Location</el-menu-item
					>
				</el-menu>
			</div>
			<!-- gallery -->
			<div class="menu_picture section" ref="gallery">
				<h3>Gallery</h3>
				<el-carousel :interval="5000" type="card" height="700px">
					<el-carousel-item v-for="(picture, index) in weddingPictures" :key="index">
						<img class="wedding_pic" :src="picture.src" alt="..." />
					</el-carousel-item>
				</el-carousel>
			</div>
			<!-- about us -->
			<div class="about_us section" ref="about_us">
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
			<!-- date -->
			<div class="date section" ref="date">
				<h3>Date</h3>
				<div class="date_frame">
					<div class="date_countdown">
						<div class="wedding_day">
							<p>Wedding day:</p>
							<h2>Countdown to the date we getting married</h2>
						</div>
						<flip-countdown deadline="2023-12-31 23:59:59"></flip-countdown>
					</div>
					<div class="date_pic">
						<img src="../public/img/ring.jpeg" alt="..." />
					</div>
				</div>
			</div>
			<!-- location -->
			<div class="location section" ref="location">
				<h3>Location</h3>
				<div class="location_container">
					<div class="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29763.53336940917!2d106.0740739!3d21.1746066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350d5ef403be1b%3A0x90409b16b662566f!2zTmjDoCBWxINuIEhvw6EgS2h1IDQgxJDhuqFpIFBow7pj!5e0!3m2!1svi!2s!4v1702715991019!5m2!1svi!2s"
							width="400"
							height="400"
							style=""
							allowfullscreen="true"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div class="more_info">
						<h4>More information:</h4>
						<div class="location_info">
							<div class="location_info_item">
								<b-icon
									class="item_icon"
									icon="geo-alt-fill"
									variant="danger"
									font-scale="1"
								></b-icon>
								<p class="item_context">
									Nhà văn hoá khu 4 Đại Phúc, thành phố Bắc Ninh, tỉnh Bắc Ninh
								</p>
							</div>
							<div class="location_info_item">
								<b-icon
									class="item_icon"
									icon="clock-fill"
									variant="warning"
									font-scale="1"
								></b-icon>
								<p class="item_context">10:00 AM - 12:00 PM</p>
							</div>
							<div class="location_info_item">
								<b-icon
									class="item_icon"
									icon="telephone-fill"
									variant="info"
									font-scale="1"
								></b-icon>
								<p class="item_context">(+84)33 251 6020</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="player">
			<b-icon
				@click.prevent="onStop"
				v-if="isPlaying"
				icon="stop-circle-fill"
				font-scale="1"
				variant="secondary"
			></b-icon>
			<b-icon
				@click.prevent="onPlay"
				v-else
				icon="play-circle-fill"
				font-scale="1"
				variant="primary"
			></b-icon>
			<div class="player-bar">
				<audio ref="audio" autoplay>
					<!-- <source src="../public/audio/theme_song.mp3" type="audio/mpeg" /> -->
				</audio>
			</div>
		</div>
		<div v-if="toTopisShow" class="top-btn" @click="scrollToTop">
			<b-icon icon="arrow-up-square-fill" font-scale="1"></b-icon>
		</div>
		<footer id="app_footer">
			<div class="footer_container">
				<div class="footer_title"><strong>@Designed by:</strong> Nguyen Thanh Duy</div>
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
	created() {},
	mounted() {
		window.addEventListener('click', this.initiateAudioPlayback);
		setInterval(this.updateCountdown, 1000); // Cập nhật mỗi giây
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},

	data() {
		return {
			isPlaying: true,
			player: null,
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
			// this.$refs.audio.play();
			this.toTopisShow = window.scrollY > 200;
		},
		initiateAudioPlayback() {
			this.$refs.audio.play();
			window.removeEventListener('click', this.initiateAudioPlayback); // Remove the listener after the first interaction
			this.isPlaying = true;
		},
		onPlay() {
			this.$refs.audio.play();
			this.isPlaying = true; // Set isPlaying to true when playing
		},
		onStop() {
			this.$refs.audio.pause();
			this.isPlaying = false; // Set isPlaying to false when stopping
		},
		onScrollTo(refName) {
			const target = this.$refs[refName];
			window.scrollTo({
				top: target.offsetTop,
				behavior: 'smooth',
			});
		},
	},
};
</script>

<style scoped src="./App.css"></style>
