<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text>设计费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsdwgl_zqjsdwglf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsdwgl_zhjsdwglf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[2]}}</view>
					<textarea maxlength="-1" :disabled="modalName!=null" v-model="result.calcu_jsgc"></textarea>
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
					jsdwgl_zqjsdwglf:'',
					jsdwgl_zhjsdwglf:'',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['折前建设单位管理费:', '折后建设单位管理费:', '计算过程:'],
				},
			};
		},
	}
</script>

<style lang="scss">
</style>
