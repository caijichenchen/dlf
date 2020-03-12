<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<ybf-counter-guo></ybf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="预备费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ybfCounterGuo from "./ybf-counter_guo.vue"
	import {ybfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ybfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ybfData)),
			}
		},
		components:{
			ybfCounterGuo
		}
	}
</script>

<style>
</style>
