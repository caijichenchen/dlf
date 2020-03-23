<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-gui></jsxmqqgzzxf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西省建设项目前期工作咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="285" @tap="setDetailId">广西|建设项目投资额3000万元以下分档收费标准|桂价经字[2000]88号</view>
			<view class="a-text" :data-id="1551" @tap="setDetailId">广西壮族自治区工程建设其他费用定额|桂建标〔2018〕37号</view>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterGui from "./jsxmqqgzzxf_counter_gui.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfGui',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
				id:285
			}
		},
		components:{
			jsxmqqgzzxfCounterGui
		}
	}
</script>

<style>

</style>
