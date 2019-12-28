<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmqqgzzxf-counter-gui></jsxmqqgzzxf-counter-gui>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsxmqqgzzxf-result :title="title"></jsxmqqgzzxf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="285" @tap="setDetailId">广西|建设项目投资额3000万元以下分档收费标准|桂价经字[2000]88号</view>
			<view class="a-text" :data-id="1551" @tap="setDetailId">广西壮族自治区工程建设其他费用定额|桂建标〔2018〕37号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import computing from "@/common/base/computing.vue"
	import jsxmqqgzzxfCounterGui from "./jsxmqqgzzxf_counter_gui.vue"
	import jsxmqqgzzxfResult from "../jsxmqqgzzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西省',
				id:285
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			jsxmqqgzzxfCounterGui,
			baseLayout,
			computing,
			jsxmqqgzzxfResult
		}
	}
</script>

<style>

</style>
