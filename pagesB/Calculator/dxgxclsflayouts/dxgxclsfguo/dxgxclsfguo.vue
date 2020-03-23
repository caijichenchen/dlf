<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dxgxclsf-counter-guo></dxgxclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="地下管线勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dxgxclsfCounterGuo from "./dxgxclsf-counter_guo.vue"
	import {dxgxclsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dxgxclsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dxgxclsfData)),
			}
		},
		components:{
			dxgxclsfCounterGuo
		}
	}
</script>

<style>
</style>
