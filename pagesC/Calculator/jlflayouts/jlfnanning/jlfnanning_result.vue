<template>
	<!-- 设计费计算结果 7个-->
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text>南宁市监理费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_ryjbfy" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_xmjljgryjbfy" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_qyzhglfy" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_lr" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[4]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_sj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[5]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_zqjlf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[6]}}</view>
					<input name="input" class="sjfInput" v-model="result.jlfNanning_zhjlf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[7]}}</view>
					<textarea class="text-left" maxlength="-1" :disabled="modalName!=null" v-html="result.calcu_jsgc"></textarea>
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
					jlfNanning_ryjbfy: '',
					jlfNanning_xmjljgryjbfy:'',
					jlfNanning_qyzhglfy:'',
					jlfNanning_lr: '',
					jlfNanning_sj: '',
					jlfNanning_zqjlf: '',
					jlfNanning_zhjlf: '',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['人员基本费用:', '项目监理机构人员基本费用:', '企业综合管理费用:', '利润:','税金:','折前监理费:','折后监理费:','计算过程:'],
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

<style scope>
	.cu-form-group textarea{
		height: 450upx !important;
	}
</style>
