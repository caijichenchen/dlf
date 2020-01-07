<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text class="text-blue">辽宁省岩土工程勘察收费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.ytgckcsf_kcswgzsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.ytgckcsf_kcjsgzsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.ytgckcsf_kcsfjzj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.ytgckcsf_zqkcsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[4]}}</view>
					<input name="input" class="sjfInput" v-model="result.ytgckcsf_zhkcsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[5]}}</view>
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
					ytgckcsf_kcswgzsf:'',
					ytgckcsf_kcjsgzsf:'',
					ytgckcsf_kcsfjzj: '',
					ytgckcsf_zqkcsf: '',
					ytgckcsf_zhkcsf: '',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['勘察实物工作收费:', '勘察技术工作收费:','勘察收费基准价:','折前勘察收费:','折后勘察收费:','计算过程:'],
				},
			};
		},
		components: {
			uniTag
		},
	}
</script>

<style lang="scss">
</style>
