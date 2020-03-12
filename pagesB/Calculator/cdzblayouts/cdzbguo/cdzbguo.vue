<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<cdzb-counter-guo></cdzb-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="场地准备及临时设施费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import cdzbCounterGuo from "./cdzb_counter_guo.vue"
	import {cdzbData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/cdzbGuo',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(cdzbData)),
			}
		},
		components:{
			cdzbCounterGuo
		}
	}
</script>

<style>

</style>
