<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	import {
		uniTag
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				result: {},
				config: {}
			};
		},
		components: {
			uniTag
		},
	}
</script>

<style lang="scss">
	.navigation-bar {
		text-align: left
	}

	.sjfjsjg {
		width: 100%;
		margin-top: 20upx;
		height: auto;
	}

	.sjfjsjg .sjftable {
		width: 100%;
		height: 60upx;
	}

	.sjfjsjg .sjftable img {
		width: 35upx;
		height: 45upx;
		float: left;
		margin-left: 20upx;
	}

	.sjfjsjg .sjftable text {
		float: left;
		margin-top: 5upx;
		margin-left: 15upx;
	}

	.title {
		width: auto;
	}

	.sjfInput {
		text-align: left;
	}

	.cu-form-group picker::after {
		content: none;
	}
	
</style>
