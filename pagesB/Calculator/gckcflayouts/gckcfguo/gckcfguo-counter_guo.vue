<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">选择类型</view>
				<view class="picker m-left">
					建标〔2011〕1号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1519)" >点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">工程费用</view>
				<input v-model="needVal.gckcfGuo_gcfy" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">比例系数</view>
				<input v-model="needVal.gckcfGuo_blxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="gckcfGuo_blxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.gckcfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<blxs :showModalName="showModalName" v-on:hideModal="hideModal"></blxs>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import blxs from './gckcfGuo_blxs.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					gckcfGuo_jsyj:'建标〔2011〕1号',
					gckcfGuo_gcfy: '',
					gckcfGuo_blxs: '0.0095',
					gckcfGuo_yhzk: '90',
					gckcfGuo_nums: '',
					type: 'gckcfGuo'
				},
				showModalName: null,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "6",
						"title": "工程费用",
						"text": "工程费用由建筑工程费、安装工程费和设备购置费三部分组成。1.建筑工程费包括各种房屋和构筑物的建筑工程；各种室外管道铺设工程；总图竖向布置、大型土石方工程等。2.安装工程费包括各种机电设备、专用设备、仪器仪表等设备的安装及配线；工艺、供热、供水等各种管道、配件和闸门以及供电外线安装工程。3.设备购置费包括需要安装和不需要安装的全部设备购置费、备品备件购置费。"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			blxs
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
