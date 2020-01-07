<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<csgh-counter-yue></csgh-counter-yue>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<csgh-result></csgh-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="103" @tap="setDetailId">城市规划计算标准,中国城市规划协会文件 关于发布城市规划设计计费指导意见的通知</view>
			<view class="a-text" :data-id="268" @tap="setDetailId">城市规划设计计费指导意见|(2004)中规协秘字第022号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csghCounterYue from "./csgh-counter_yue.vue"
	import computing from "@/common/base/computing.vue"
	import csghResult from "./csgh_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/csghYue',  //api请求
					count:4  //积分消耗
				},
				id:103
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			csghCounterYue,
			baseLayout,
			computing,
			csghResult
		}
	}
</script>

<style>
</style>
