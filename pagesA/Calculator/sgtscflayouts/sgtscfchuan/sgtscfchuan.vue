<template>
	<base-layout :detailId='286'>
		<template v-slot:jsq>
			<sgtscf-counter-chuan></sgtscf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterChuan from "./sgtscf_counter_chuan.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfChuan',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Chuan'))
			}
		},
		components:{
			sgtscfCounterChuan
		}
	}
</script>

<style>

</style>
