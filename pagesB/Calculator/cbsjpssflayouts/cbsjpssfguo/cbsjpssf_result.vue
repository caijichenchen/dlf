<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text class="text-blue">初步设计评审收费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.cbsjpssf_sfjj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.cbsjpssf_jbsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.cbsjpssf_zqsjpsqf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.cbsjpssf_zhsjpsqf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[4]}}</view>
					<textarea maxlength="-1"  :disabled="modalName!=null" v-html="result.calcu_jsgc"></textarea>
				</view>
				<view class="cu-form-group">
					<view class="title">直达链接</view>
					<button class="calculatorReport" type="primary" @click="ckjsgchbg" name="calcu_url">查看计算过程和报告</button>
				</view>
			</view>
		</view>
</template>

<script>
	import {resultMixin} from "@/common/base/resultMixin"
	import {
		uniTag
	} from '@dcloudio/uni-ui'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				result: {
					cbsjpssf_sfjj:'',
					cbsjpssf_jbsf:'',
					cbsjpssf_zqsjpsqf: '',
					cbsjpssf_zhsjpsqf: '',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['收费基价:', '基本收费:','折前设计评审收费:', '折后设计评审收费:','计算过程:'],
				},
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
