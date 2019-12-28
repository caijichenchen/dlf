<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<sgtscf-counter-ba></sgtscf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="278" @tap="setDetailId">重庆|建筑工程施工图设计文件审查收费标准|渝建[2014]82号</view>
			<view class="a-text" :data-id="321" @tap="setDetailId">重庆|建筑工程施工图设计文件审查收费标准|渝价[2013]423号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import sgtscfCounterBa from "./sgtscf_counter_ba.vue"
	import computing from "@/common/base/computing.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfBa',  //api请求
					count:2  //积分消耗
				},
				id:278
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			sgtscfCounterBa,
			baseLayout,
			computing,
			sgtscfResult
		}
	}
</script>

<style>

</style>
