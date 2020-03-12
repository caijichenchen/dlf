<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程保险费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						建标〔2011〕1号
					</view>
				<!-- <button type="primary" size="mini" @tap="showModal" data-target="jsyj-guo">查看说明</button> -->
			</view>
			<view class="cu-form-group">
				<view class="title">工程费用</view>
				<input type="digit" v-model="needVal.gcbxfGuo_gcfy"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">比例系数</view>
				<input type="digit" v-model="needVal.gcbxfGuo_blxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag> 
				<button type="primary" size="mini" @tap="showModal" data-target="gcbxfGuo_blxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.gcbxfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<explain></explain>
			<gcbxf-guo-blxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'> </gcbxf-guo-blxs>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import gcbxfGuoBlxs from "./gcbxfGuo_blxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					gcbxfGuo_blxs: "0.0045",
					gcbxfGuo_gcfy: "",
					gcbxfGuo_jsyj: "建标〔2011〕1号",
					gcbxfGuo_nums: "",
					gcbxfGuo_yhzk: "90",
					type: "gcbxfGuo",
				},
				showModalName: null,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "工程费用",
						"text": "工程费用由建筑工程费、安装工程费和设备购置费三部分组成。1.建筑工程费包括各种房屋和构筑物的建筑工程；各种室外管道铺设工程；总图竖向布置、大型土石方工程等。2.安装工程费包括各种机电设备、专用设备、仪器仪表等设备的安装及配线；工艺、供热、供水等各种管道、配件和闸门以及供电外线安装工程。3.设备购置费包括需要安装和不需要安装的全部设备购置费、备品备件购置费。"
					},
					{
						"id": "2",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			gcbxfGuoBlxs
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
