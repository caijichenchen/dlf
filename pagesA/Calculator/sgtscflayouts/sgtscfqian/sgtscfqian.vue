<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<sgtscf-counter-qian></sgtscf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州省施工图审查费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="265" @tap="setDetailId">贵州|降低部分建设项目收费标准规范收费行为| |黔价房〔2011〕69号</view>
			<view class="a-text" :data-id="323" @tap="setDetailId">贵州省工程设计质量监督站施工图审查计费计算办法</view>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterQian from "./sgtscf_counter_qian.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQian',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Qian')),
				id:265
			}
		},
		components:{
			sgtscfCounterQian
		}
	}
</script>

<style>

</style>
