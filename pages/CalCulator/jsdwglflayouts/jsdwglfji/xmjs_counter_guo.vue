<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北建设单位管理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker" >
					财建[2016]504号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程总概算</view>
				<input type="digit" v-model="needVal.jsdwglGuo_gczgs"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsdwglGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jsdwglJi_dzzk: '40',
					jsdwglJi_gczgs: '',
					jsdwglJi_jsyj: '财建[2016]504号',
					jsdwglJi_jjfw: '0|1000|5000|10000|50000|100000',
					jsdwglJi_fl: '0.02|0.015|0.012|0.01|0.008|0.004',
					type:'jsdwglJi'
				},
				showModalName: null,
				explain: [
					{
						"id": "1",
						"title": "计算依据",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
