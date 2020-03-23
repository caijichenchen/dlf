<template>
	<base-layout :detailId="322">
		<template v-slot:jsq>
			<sgtscf-counter-zhe></sgtscf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterZhe from "./sgtscf_counter_zhe.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfZhe',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Zhe'))
			}
		},
		components:{
			sgtscfCounterZhe
		}
	}
</script>

<style>

</style>
