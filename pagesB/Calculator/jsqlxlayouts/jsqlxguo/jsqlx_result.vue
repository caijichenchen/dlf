<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text class="text-blue">全国建设期利息计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsqlx_dkze" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsqlx_hkze" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsqlx_lxzh" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[3]}}</view>
					<input name="input" class="sjfInput" v-model="result.jsqlx_njhk" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[4]}}</view>
					<textarea class="text-left" maxlength="-1" :disabled="modalName!=null" v-html="result.jsqlx_hkmx"></textarea>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[5]}}</view>
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
	export default {
		props:{
			title:{
				type:String,
				default:''
			}
		},
		mixins: [resultMixin],
		data() {
			return {
				result: {
					jsqlx_hkze: "",
					jsqlx_dkze: "",
					jsqlx_lxzh: "",
					jsqlx_njhk: '',
					jsqlx_hkmx: '',
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['贷款总额:', '还款总额:','利息总和:','年均还款:','还款明细:' ,'计算过程:'],
				},
			};
		},
	}
</script>

