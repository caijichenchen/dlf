<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gcbxfgf-counter-guo></gcbxfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程保险费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcbxfgfCounterGuo from "./gcbxfgf_counter_guo.vue"
	import {gcbxfgfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcbxfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcbxfgfGuoData)),
			}
		},
		components:{
			gcbxfgfCounterGuo
		}
	}
</script>

<style>

</style>
