<template>
	<!-- 设计费计算结果 7个-->
		<view class="navigation-bar mt-2" >
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text>山东省监理费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfLu_zhfl" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfLu_jlf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfLu_zhjlf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[3]}}</view>
					<textarea class="text-left" maxlength="-1" :disabled="modalName!=null" v-html="result.calcu_jsgc"></textarea>
				</view>
				<view class="cu-form-group">
					<view class="title">直达链接</view>
					<button  class="calculatorReport" type="primary" @click="ckjsgchbg" name="calcu_url">查看计算过程和报告</button>
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
					jlfLu_zhfl: '',
					jlfLu_jlf:'',
					jlf_jljzj:'',
					jlfLu_zhjlf:'',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['综合费率:', '监理费:', '折后监理费:', '计算过程:'],
				},
			};
		},
		created() {
			
		},
		components: {
			uniTag
		},
	}
</script>

<style lang="scss">
	// .cu-form-group .btn{
	// 	width: 340upx;
	// 	height: 70upx;
	// 	font-size: 30upx;
	// 	margin: 10upx 0;
	// }
	
</style>
