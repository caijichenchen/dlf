<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<sgtscf-counter-wan></sgtscf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省施工图审查费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="278" @tap="setDetailId">皖价房 [2025] 109号</view>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterWan from "./sgtscf_counter_wan.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfBa',  //api请求
					count:2  //积分消耗
				},
				id:278,
				result: JSON.parse(sgtscfData('Wan'))
			}
		},
		components:{
			sgtscfCounterWan
		}
	}
</script>

<style>

</style>
