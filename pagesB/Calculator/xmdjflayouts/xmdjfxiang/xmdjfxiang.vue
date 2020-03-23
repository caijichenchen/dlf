<template>
	<base-layout :detailId="997">
		<template v-slot:jsq>
			<xmdjf-counter-xiang></xmdjf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省项目代建费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xmdjfCounterXiang from "./xmdjf_counter_xiang.vue"
	import {xmdjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmdjfXiang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xmdjfData)),
			}
		},
		components:{
			xmdjfCounterXiang
		}
	}
</script>

<style>

</style>
