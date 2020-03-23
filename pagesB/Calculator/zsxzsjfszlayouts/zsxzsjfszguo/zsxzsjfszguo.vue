<template>
	<base-layout :detailId="1894">
		<template v-slot:jsq>
			<zsxzsjfsz-counter-guo></zsxzsjfsz-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="中设协字[2019]7号设计费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfszCounterGuo from "./zsxzsjfsz_counter_guo.vue"
	import {zsxzsjfszGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zsxzsjfszGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zsxzsjfszGuoData)),
			}
		},
		components:{
			zsxzsjfszCounterGuo
		}
	}
</script>

<style>

</style>
