<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<gckcfguo-counter-guo></gckcfguo-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gckcfguoCounterGuo from "./gckcfguo-counter_guo.vue"
	import {gckcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gckcfGuo',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gckcfData)),
			}
		},
		components:{
			gckcfguoCounterGuo
		}
	}
</script>

<style>
</style>
