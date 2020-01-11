<template>
	<!-- 设计费计算结果 7个-->
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text>广西工程勘察设计费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.sjfGui_sfjj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.sjfGui_jbsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.sjfGui_jzj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.sjfGui_gckcsjf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[4]}}</view>
					<input name="input" class="sjfInput" v-model="result.sjfGui_zhgckcsjf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[5]}}</view>
					<textarea maxlength="-1" :disabled="modalName!=null" v-html="result.calcu_jsgc"></textarea>
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
					sjfGui_sfjj:'',
					sjfGui_jbsf:'',
					sjfGui_jzj:'',
					sjfGui_gckcsjf:'',
					sjfGui_zhgckcsjf:'',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['基本数据:', '基本收费:', '基准价:', '设计费:', '折后设计费:', '计算过程:', '不知道说啥'],
				},
			};
		},
	}
</script>

<style lang="scss">
</style>
