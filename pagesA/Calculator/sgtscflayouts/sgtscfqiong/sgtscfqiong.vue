<template>
	<base-layout :detailId="246">
		<template v-slot:jsq>
			<sgtscf-counter-qiong></sgtscf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterQiong from "./sgtscf_counter_qiong.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQiong',  //api请求
					count:3  //积分消耗
				},
				result: JSON.parse(sgtscfData('Qiong')),
			}
		},
		components:{
			sgtscfCounterQiong
		}
	}
</script>

<style>

</style>
