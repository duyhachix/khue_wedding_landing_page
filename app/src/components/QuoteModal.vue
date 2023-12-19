<template>
	<b-modal hide-footer hide-header centered :id="quoteModalId" size="xs">
		<b-card :title="hostName" tag="article" class="mb-0">
			{{ quoteName }}
		</b-card>
	</b-modal>
</template>

<script>
export default {
	name: 'QuoteModal',
	props: {
		quoteModalId: {
			type: String,
			required: true,
		},
		sex: {
			type: String,
			required: true,
		},
		hostName: {
			type: String,
			required: true,
		},
		quoteName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>
