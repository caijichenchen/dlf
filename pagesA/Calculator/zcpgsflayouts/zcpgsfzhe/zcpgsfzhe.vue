<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zcpgsf-counter-zhe></zcpgsf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="1657" @tap="setDetailId">浙江|资产评估收费标准|浙价服〔2011〕90号|浙价服〔2013〕234号</view>
			<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterZhe from "./zcpgsf_counter_zhe.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfZhe',  //api请求
					count:2  //积分消耗
				},
				title: '浙江',
				id:1657
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zcpgsfCounterZhe,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
