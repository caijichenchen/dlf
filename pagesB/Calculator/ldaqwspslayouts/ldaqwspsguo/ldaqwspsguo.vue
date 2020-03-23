<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<ldaqwsps-counter-guo></ldaqwsps-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="劳动安全卫生评审费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ldaqwspsCounterGuo from "./ldaqwsps_counter_guo.vue"
	import {ldaqwspsData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/ldaqwspsGuo',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ldaqwspsData)),
			}
		},
		components:{
			ldaqwspsCounterGuo
		}
	}
</script>

<style>

</style>
