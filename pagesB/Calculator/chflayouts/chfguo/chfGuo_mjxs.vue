<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">测绘费涉及成本费用有关系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="inputBox">
				<view class="boxtop flexbox">
					<view class="toptitle">实际面积:</view>
					<input type="text" v-model="sjmj">
					<uni-tag text="k㎡" type="defult"></uni-tag>
				</view>
				<view class="boxbottom flexbox">
					<view class="toptitle">标准面积:</view>
					<input type="text" v-model="bzmj">
					<uni-tag text="k㎡" type="defult"></uni-tag>
				</view>
			</view>
			<view class="warp">
				<view>有关测绘工作项目的图幅标准面积按下表执行</view>
				<z-table :tableData='tableData' :columns='columns'></z-table>
				<view class="computed-btn" @tap="computedData">计算</view>
			</view>
		</view>
	</view>
</template>

<script>
	import zTable from '@/components/z-table/z-table.vue';
	import {modalMixin} from "@/common/base/modalMixin"
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'chfGuo_mjxs',
				sjmj: '0',
				bzmj: '0',
				columns:[
					{
						title:"地形图比例尺",
						key:"blc",
						width:170
					},
					{
						title:"分幅方法",
						key:"ff",
						width:150
					},
					{
						title:"实地面积(k㎡)",
						key:"sd",
						width:170
					},
					{
						title:"图上面积(k㎡)",
						key:"ts",
						width:170
					},
				],
				tableData:[
					{
						blc:"1:1000000",
						ff:"国际分幅",
						sd:"",
						ts:"22"
					},
					{
						blc:"1:500000",
						ff:"国际分幅",
						sd:"",
						ts:"22"
					},
					{
						blc:"1:250000",
						ff:"国际分幅",
						sd:"",
						ts:"23"
					},
					{
						blc:"1:100000",
						ff:"国际分幅",
						sd:"1600",
						ts:"16"
					},
					{
						blc:"1:50000",
						ff:"国际分幅",
						sd:"400",
						ts:"16"
					},
					{
						blc:"1:10000",
						ff:"国际分幅",
						sd:"25",
						ts:"25"
					},
					{
						blc:"1:5000",
						ff:"国际分幅",
						sd:"6.25",
						ts:"25"
					},
					{
						blc:"1:2000",
						ff:"正方形分幅",
						sd:"1.00",
						ts:"25"
					},
					{
						blc:"1:1000",
						ff:"正方形分幅",
						sd:"0.0625",
						ts:"25"
					},
				],
			}
		},
		components: {
			zTable,
		},
		methods: {
			computedData(){
				let result = (this.sjmj-this.bzmj)/this.bzmj*80
				if(result){
					result = result.toFixed(2)
				}else{
					result = 0
				}
				this.$emit('getData',{type:mjxs,val:result})
			}
		}
	}
</script>

<style scoped>
	.inputBox {
		width: 100%;
		height: 200upx;
		padding-top: 30upx;
	}
	.flexbox {
		display: flex;
		margin-top: 10upx;
	}
	.computed-btn{
		font-size: 30rpx;
		padding: 20rpx 0;
		color: #FFFFFF;
		background-color: #00a0e0;
	}
	.toptitle {
		width: 30%;
		height: 68upx;
		font-size: 28rpx;
		line-height: 68upx;
		text-align: left;
		padding-left: 30upx;
		box-sizing: border-box;
	}
	.flexbox input {
		width: 50%;
		border: 2upx solid #ccc;
		height: 68upx;
		line-height: 68upx;
	}
</style>