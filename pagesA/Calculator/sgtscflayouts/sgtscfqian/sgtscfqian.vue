<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<sgtscf-counter-qian></sgtscf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="265" @tap="setDetailId">贵州|降低部分建设项目收费标准规范收费行为| |黔价房〔2011〕69号</view>
			<view class="a-text" :data-id="323" @tap="setDetailId">贵州省工程设计质量监督站施工图审查计费计算办法</view>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterQian from "./sgtscf_counter_qian.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQian',  //api请求
					count:2  //积分消耗
				},
				id:265
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			sgtscfCounterQian,
			sgtscfResult
		}
	}
</script>

<style>

</style>
