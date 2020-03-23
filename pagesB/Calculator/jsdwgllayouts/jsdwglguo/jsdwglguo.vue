<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<xmjs-counter-guo></xmjs-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="建设单位管理费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="42" @tap="setDetailId">项目建设管理费计算标准|建设单位管理计算标准|财建〔2016〕504号</view>
			<view class="a-text" :data-id="154" @tap="setDetailId">建设单位管理费|财建[2002]394号|财政部关于印发《基本建设财务管理规定》的通知</view>
		</template>
	</base-layout>
</template>

<script>
	import xmjsCounterGuo from "./xmjs_counter_guo.vue"
	import {jsdwglData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jsdwglGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsdwglData)),
				id:42
			}
		},
		components:{
			xmjsCounterGuo
		}
	}
</script>

<style>

</style>
