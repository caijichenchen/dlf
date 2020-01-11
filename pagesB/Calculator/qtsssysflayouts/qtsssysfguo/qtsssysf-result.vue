<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text class="text-blue">取土、水、石试样收费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_sfjj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_kcswzzsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_kcjszzsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_sfjzj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[4]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_zqkcsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[5]}}</view>
					<input name="input" class="sjfInput" v-model="result.qtsssysf_zhkcsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[6]}}</view>
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
	export default {
		mixins: [resultMixin],
		data() {
			return {
				result: {
					qtsssysf_sfjj: '',
					qtsssysf_kcswzzsf:'',
					qtsssysf_kcjszzsf:'',
					qtsssysf_sfjzj: '',
					qtsssysf_zqkcsf: '',
					qtsssysf_zhkcsf: '',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['勘察实物工作收费基价:', '勘察实物工作收费:','勘察技术工作收费:','勘察收费基准价:', '折前勘察收费:','折后勘察收费:','计算过程:'],
				},
			};
		},
	}
</script>

<style lang="scss">
	
</style>
