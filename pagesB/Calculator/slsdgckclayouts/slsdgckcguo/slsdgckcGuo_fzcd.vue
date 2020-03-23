<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水利水电复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<uni-collapse animation="outer" accordion="true">
				<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
					<view class="num-wrap">
						<view class="num-wrap-li border-b"
							v-for="(i, k) in item.list" :key="k"  @tap="assignment" data-index="slsdgckcGuo_fzcd" :data-key="k" :data-val="i.val">
							<view class="li-left">{{item.content}}</view>
							<view class="li-right">
								<text class="num-box">{{item.text}}</text>
							</view>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
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
				modalName:'slsdgckcGuo_fzcd',
				dataList: [
					{
						title: '水库、水电工程',
						list: [
							{
								content:'赋分值之和<=-3',
								text:'I级',
							},
							{
								content:'赋分值之和-3~10',
								text:'II级',
							},
							{
								content:'赋分值之和>=10',
								text:'III级',
							},
						]
					},
					{
						title: '引调水建筑物工程',
						list: [
							{
								content:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资<=30%',
								text:'I级',
							},
							{
								content:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资<=60%',
								text:'II级',
							},
							{
								content:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资>60%',
								text:'III级',
							},
						]
					},
					{
						title: '引调水渠道管线工程',
						list: [
							{
								content:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的<=30%',
								text:'I级',
							},
							{
								content:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的<=60%',
								text:'II级',
							},
							{
								content:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的>60%',
								text:'III级',
							},
						]
					},
					{
						title: '河道治理建筑物及河道堤防工程',
						list: [
							{
								content:'堤防等级V级',
								text:'I级',
							},
							{
								content:'堤防等级III、IV级',
								text:'II级',
							},
							{
								content:'堤防等级I、II级',
								text:'III级',
							},
						]
					},
					{
						title: '其他',
						list: [
							{
								content:'',
								text:'',
							},
							{
								content:'灌区田间工程、水土保持工程',
								text:'II级',
							},
						]
					},
				]
			}
		},
	}
</script>
