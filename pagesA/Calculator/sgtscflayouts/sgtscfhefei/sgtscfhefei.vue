<template>
	<base-layout :detailId="320">
		<template v-slot:jsq>
			<sgtscf-counter-hefei></sgtscf-counter-hefei>
			<computing v-bind:countData = "countData"></computing>
			<result title="合肥市施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHefei from "./sgtscf_counter_hefei.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHefei',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Heifei')),
			}
		},
		components:{
			sgtscfCounterHefei
		}
	}
</script>

<style>

</style>
