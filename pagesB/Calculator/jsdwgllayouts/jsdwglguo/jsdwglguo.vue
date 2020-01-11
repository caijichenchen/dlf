<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<xmjs-counter-guo></xmjs-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<xmjs-result></xmjs-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="42" @tap="setDetailId">项目建设管理费计算标准|建设单位管理计算标准|财建〔2016〕504号</view>
			<view class="a-text" :data-id="154" @tap="setDetailId">建设单位管理费|财建[2002]394号|财政部关于印发《基本建设财务管理规定》的通知</view>
		</template>
	</base-layout>
</template>

<script>
	import xmjsCounterGuo from "./xmjs_counter_guo.vue"
	import xmjsResult from "./xmjs_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jsdwglGuo',  //api请求
					count:2  //积分消耗
				},
				id:42
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			xmjsCounterGuo,
			xmjsResult
		}
	}
</script>

<style>

</style>
