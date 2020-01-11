<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<shwdfxpg-counter-hu></shwdfxpg-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<shwdfxpg-result></shwdfxpg-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="221" @tap="setDetailId">上海市重点建设项目社会稳定风险评估咨询服务收费暂行标准|沪发改投〔2012〕130号</view>
			<view class="a-text" :data-id="284" @tap="setDetailId">重大固定资产投资项目社会稳定风险评估暂行办法|发改投资[2012]2492号</view>
		</template>
	</base-layout>
</template>

<script>
	import shwdfxpgCounterHu from "./shwdfxpg_counter_hu.vue"
	import shwdfxpgResult from "./shwdfxpgHu_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/shwdfxpgHu',  //api请求
					count:3  //积分消耗
				},
				id:221
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			shwdfxpgCounterHu,
			shwdfxpgResult
		}
	}
</script>

<style>

</style>
