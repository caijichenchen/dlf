<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<gcbxf-counter-guo></gcbxf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程保险费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcbxfCounterGuo from "./gcbxf_counter_guo.vue"
	import {gcbxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcbxfGuo',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcbxfData)),
			}
		},
		components:{
			gcbxfCounterGuo
		}
	}
</script>

<style>

</style>
