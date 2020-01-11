<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<cbsjpssf-counter-guo></cbsjpssf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<cbsjpssf-result></cbsjpssf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="134" @tap="setDetailId">初步设计评审收费标准|初步设计文件审查费标准|国管房地〔2006〕37号</view>
			<view class="a-text" :data-id="135" @tap="setDetailId">关于加强水运工程初步设计审查管理的通知-交水发〔2006〕330号</view>
		</template>
	</base-layout>
</template>

<script>
	import cbsjpssfCounterGuo from "./cbsjpssf-counter_guo.vue"
	import cbsjpssfResult from "./cbsjpssf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/cbsjpssfGuo',  //api请求
					count:2  //积分消耗
				},
				id:134
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			cbsjpssfCounterGuo,
			cbsjpssfResult
		}
	}
</script>

<style>
</style>
