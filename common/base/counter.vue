<template>
	<view>
		<img src="../../static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<slot></slot>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {
		uniTag
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				needVal: {
				},
				showModalName: null,
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
			uniTag,
		},
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	/* tabs样式 */
	.sjf_content {
		width: 100%;
		height: auto;
		background-color: #fff;
	}

	.content_jsq {
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}

	.sjf_content form {
		text-align: left;
	}

	.cu-form-group {
		position: relative;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.money {
		position: absolute;
		right: -80upx;
	}

	.text-orange,
	.line-orange,
	.lines-orange {
		color: #0062CC;
	}

	/* logo样式 */
	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.con-text {
		width: 90%;
		height: 80upx;
		font-size: 26upx !important;
		border: 1px solid deepskyblue;
		border-radius: 10upx;
		border-bottom: none;
		float: left;
		margin: 10upx 0 0 10upx;
	}

	.con-text1 {
		width: 48%;
		height: 80upx;
		font-size: 21upx !important;
		border: 1px solid deepskyblue;
		line-height: 80upx;
		border-radius: 10upx;
		border-bottom: none;
		float: left;
		margin: 10upx 0 0 10upx;
	}

	.con-text2 {
		height: 80upx;
		line-height: 80upx;
		border-radius: 10upx;
		float: left;
		margin: 10upx 0 0 10upx;
	}

	.con-text3 {
		height: auto;
		line-height: 60upx;
		border-radius: 10upx;
		float: left;
		margin: 10upx 0 0 10upx;
	}

	.active {
		background: #0081FF;
		color: #fff;
		border: none;
	}

	/* 百分比样式 */
	.sjpercentage {
		width: 100%;
		height: auto;
		float: left;
		margin-top: 20upx;
	}

	.sjpercentage p {
		width: 100%;
		height: 80upx;
		text-align: left;
		line-height: 80upx;
		font-size: 26upx;
		border: 1upx solid deepskyblue;
		padding-left: 20upx;
	}

	.sjpercentage p text {
		font-size: 30upx;
		color: #007AFF;
		padding-right: 10upx;
	}

	/* 复杂调整 */
	.cu-form-group picker .picker {
		text-align: left;
	}

	.sjffztz {
		width: 100%;
		text-align: left;
		float: left;
		border: 1px solid deepskyblue;
	}

	.sjffztz p {
		width: 100%;
		height: auto;
		line-height: 40upx;
		text-align: left;
		font-size: 26upx;
		border: 1upx solid deepskyblue;
		padding-left: 20upx;
	}

	.sjffztz p view {
		font-size: 30upx;
		font-weight: bold;
		padding-left: 8upx;
		padding-top: 5upx;
	}

	/* 设计费附加系数 */
	.sjffjxs {
		width: 100%;
		height: auto;
		float: left;
	}

	.sjffjxs p {
		width: 100%;
		height: auto;
		text-align: left;
		line-height: 60upx;
		font-size: 26upx;
		border: 1upx solid deepskyblue;
		padding-left: 20upx;
	}

	.sjffjxs p text {
		display: inline-block;
		background-color: #007AFF;
		border-radius: 10upx;
		font-size: 30upx;
		color: #fff;
		text-align: center;
		padding: 0 10upx;
		margin-left: 20upx;
	}

	.dianjijisuan {
		width: 100%;
		height: 120upx;
	}

	.dianjijisuan button {
		height: 80upx;
	}

	.dianjijisuan text {
		font-size: 26upx;
		margin-left: 20upx;
	}

	/* sjf计算结果 */
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

	.sjfInput {
		text-align: left;
		padding-right: 80%;
	}

	.cu-form-group picker::after {
		content: none;
	}
</style>
