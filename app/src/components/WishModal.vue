<template>
	<b-modal :id="wishModalId" size="lg" scrollable hide-footer hide-header centered>
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLSeVDY3uylzWf9MgJdJnfWV8K5SucYDfepJzdc1y2rEyxXGlDw/viewform?embedded=true"
			width="100%"
			height="650"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			>Đang tải…</iframe
		>
		<el-button style="float: right" type="info" @click="onCloseModal">Close</el-button>
	</b-modal>
</template>

<script>
export default {
	name: 'WishModal',
	props: {
		wishModalId: {
			type: String,
			required: true,
		},
	},
	methods: {
		onCloseModal() {
			this.$bvModal.hide(this.wishModalId);
		},
	},
};
</script>
