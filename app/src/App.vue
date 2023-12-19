<template>
	<div id="app" @scroll="handleScroll">
		<app-header></app-header>
		<div id="app_body">
			<!-- greeting -->
			<b-modal hide-header hide-footer centered size="xs" id="modal-1">
				<div class="modal_body">
					<i class="el-icon-close icon card_icon" @click="closeModal"></i>
					<img src="../public/img/wedding_card.png" alt="" />
				</div>
			</b-modal>
			<div class="navbar section">
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
				<el-carousel :interval="5000" type="card" class="gallery">
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
							<img src="../public/img/khue.png" alt="..." />
						</div>
						<div class="groom_info host_info" @click="onQuoteClick(host.groom)">
							<h2>
								{{ host.groom.quote }}
							</h2>
							<div class="info">
								<h4 class="qoute">
									<span style="font-style: italic; color: rgb(255, 215, 158)">by</span>
									{{ host.groom.name }}
								</h4>
							</div>
						</div>
					</div>

					<div class="bride host">
						<div class="bride_pic host_pic">
							<img src="../public/img/my.png" alt="..." />
						</div>
						<div class="bride_info host_info" @click="onQuoteClick(host.bride)">
							<h2>
								{{ host.bride.quote }}
							</h2>
							<div class="info">
								<h4 class="qoute">
									<span style="font-style: italic; color: rgb(255, 215, 158)">by</span>
									{{ host.bride.name }}
								</h4>
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
							<h3>
								{{ weddingInvitationMessage }}
							</h3>
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
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.526093752256!2d106.07864699999999!3d21.171249999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzE2LjUiTiAxMDbCsDA0JzQzLjEiRQ!5e0!3m2!1svi!2s!4v1702970564757!5m2!1svi!2s"
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
									Tư gia nhà trai, khu 4, phường Đại Phúc, thành phố Bắc Ninh, tỉnh Bắc Ninh
								</p>
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
					<source src="../public/audio/theme_song.mp3" type="audio/mpeg" />
				</audio>
			</div>
		</div>
		<div v-if="toTopisShow" class="top-btn" @click="scrollToTop">
			<b-icon icon="arrow-up-square-fill" font-scale="1"></b-icon>
		</div>
		<quote-modal
			:quoteModalId="quoteModalId"
			:sex="sex"
			:hostName="hostName"
			:quoteName="quoteName"
		></quote-modal>
		<wish-modal :wishModalId="wishModalId"></wish-modal>
		<div class="section" style="padding: 2% 5%; background-color: antiquewhite">
			<h3>Your best wishes !</h3>
			<el-button
				style="margin-bottom: 5px"
				type="warning"
				icon="el-icon-message"
				@click="onOpenWishModal"
				>Send us your wish</el-button
			>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import QuoteModal from './components/QuoteModal.vue';
import WishModal from './components/WishModal.vue';

import ScrollReveal from 'scrollreveal';

export default {
	name: 'App',
	components: {
		FlipCountdown,
		AppHeader,
		AppFooter,
		QuoteModal,
		WishModal,
	},
	created() {},
	mounted() {
		let nodeArray = [this.$refs.gallery, this.$refs.date, this.$refs.location];
		let option = {
			delay: 200,
			distance: '50px',
			origin: 'top',
			easing: 'ease-in-out',
		};

		ScrollReveal().reveal(nodeArray, option);
		ScrollReveal().reveal('.groom', {
			delay: 100,
			distance: '50px',
			origin: 'left',
			easing: 'ease-in',
		});
		ScrollReveal().reveal('.bride', {
			delay: 100,
			distance: '50px',
			origin: 'right',
			easing: 'ease-in',
		});
		setInterval(this.updateCountdown, 1000); // Cập nhật mỗi giây
		window.addEventListener('scroll', this.handleScroll);
		this.$bvModal.show('modal-1');
		window.addEventListener('click', this.initiateAudioPlayback);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},

	data() {
		return {
			host: {
				groom: {
					sex: 'male',
					name: 'Nguyễn Đình Khuê',
					quote:
						'From this day forward, I promise to be your partner in all things, your confidant in all trials, and your biggest fan in all triumphs. I love you more than words can express.',
				},
				bride: {
					sex: 'female',
					name: 'Nguyễn Trà My',
					quote:
						"You are the love I never knew I needed, the anchor in life's stormy seas. I choose you today and every day, thankful for the extraordinary love we share .",
				},
			},
			wishModalId: 'wishModalId',
			quoteModalId: 'quoteModalId',
			hostName: '',
			quoteName: '',
			sex: '',
			weddingInvitationMessage:
				'The love and support of friends and family make moments unforgettable. Will you be apart of our special day and witness the beginning of our happily ever after?',
			isPlaying: true,
			player: null,
			activeIndex: '1',
			toTopisShow: false,
			weddingPictures: [
				{
					id: 1,
					src: require('../public/img/theme1.jpg'),
				},
				{
					id: 2,
					src: require('../public/img/theme2.jpg'),
				},
				{
					id: 3,
					src: require('../public/img/theme3.jpg'),
				},
				{
					id: 4,
					src: require('../public/img/theme4.jpg'),
				},
				{
					id: 5,
					src: require('../public/img/theme5.jpg'),
				},
				{
					id: 6,
					src: require('../public/img/theme6.jpg'),
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
		onOpenWishModal() {
			this.$bvModal.show(this.wishModalId);
		},
		onQuoteClick(host) {
			if (window.innerWidth > 480) {
				return;
			}

			if (host.sex === 'male') {
				this.sex = 'male';
				this.hostName = this.host.groom.name;
				this.quoteName = this.host.groom.quote;
			} else {
				this.sex = 'female';
				this.hostName = this.host.bride.name;
				this.quoteName = this.host.bride.quote;
			}

			console.log(host.sex);
			this.$bvModal.show(this.quoteModalId);
		},
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
			this.isPlaying = true;
			window.removeEventListener('click', this.initiateAudioPlayback); // Remove the listener after the first interaction
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
		closeModal() {
			this.$bvModal.hide('modal-1');
		},
	},
};
</script>

<style scoped src="./App.css"></style>
