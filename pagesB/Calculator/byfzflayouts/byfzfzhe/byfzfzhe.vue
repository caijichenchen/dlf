<template>
	<base-layout :detailId="1656">
		<template v-slot:jsq>
			<byfzf-counter-zhe></byfzf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省白蚁防治费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import byfzfCounterZhe from "./byfzf_counter_zhe.vue"
	import {byfzfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/byfzfZhe',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(byfzfData)),
			}
		},
		components:{
			byfzfCounterZhe
		}
	}
</script>

<style>

</style>
