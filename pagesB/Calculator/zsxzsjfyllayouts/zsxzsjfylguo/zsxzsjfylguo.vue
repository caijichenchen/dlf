<template>
	<base-layout :detailId="1893">
		<template v-slot:jsq>
			<zsxzsjfyl-counter-guo></zsxzsjfyl-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="园林景观" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfylCounterGuo from "./zsxzsjfyl_counter_guo.vue"
	import {zsxzsjfylGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zsxzsjfylGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zsxzsjfylGuoData)),
			}
		},
		components:{
			zsxzsjfylCounterGuo
		}
	}
</script>

<style>

</style>
