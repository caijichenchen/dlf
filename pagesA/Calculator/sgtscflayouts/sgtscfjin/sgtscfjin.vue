<template>
	<base-layout :detailId="1556">
		<template v-slot:jsq>
			<sgtscf-counter-jin></sgtscf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterJin from "./sgtscf_counter_jin.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfJin',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Jin'))
			}
		},
		components:{
			sgtscfCounterJin
		}
	}
</script>

<style>

</style>
