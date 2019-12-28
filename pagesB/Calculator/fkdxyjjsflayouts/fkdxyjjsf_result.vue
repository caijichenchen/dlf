<template>
		<view class="navigation-bar">
			<view class="sjfjsjg">
				<view class="sjftable">
					<img src="/static/img/tel.jpg">
					<text class="text-blue">{{title}}防空地下室易地建设费计算结果</text>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[0]}}</view>
					<input name="input" class="sjfInput" v-model="result.fkdxyjjsf_sfjj" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[1]}}</view>
					<input name="input" class="sjfInput" v-model="result.fkdxyjjsf_zqfkdxyjjsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">{{config.menuText[2]}}</view>
					<input name="input" class="sjfInput" v-model="result.fkdxyjjsf_zhfkdxyjjsf" /></input>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">{{config.menuText[3]}}</view>
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
		props:{
			title:{
				type:String,
				default:null
			}
		},
		mixins: [resultMixin],
		data() {
			return {
				result: {
					fkdxyjjsf_sfjj: "",
					fkdxyjjsf_zhfkdxyjjsf: "",
					fkdxyjjsf_zqfkdxyjjsf: "",
					calcu_jsgc:'',
					calcu_url:'',
				},
				showGroup: 1,
				config: {
					menuText: ['收费基价:', '折前防空地下室易地建设费:', '折后防空地下室易地建设费:', '计算过程:'],
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

<style >
	.cu-form-group textarea{
		height: 226upx;
	}
</style>
