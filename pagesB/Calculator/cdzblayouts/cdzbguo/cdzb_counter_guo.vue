<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">场地准备及临时设施费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" @change="PickerChange" v-model="needVal.cdzbGuo_jsyj" :range="picker1">
						<view class="picker" >
							建标〔2011〕1号
						</view>
					</picker>
					<!-- <button type="primary" size="mini" @tap="showModal" data-target="jsyj-guo">查看说明</button> -->
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">工程费用</view>
					<input type="text" id="sjf" v-model="needVal.cdzbGuo_gcfy"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">比例系数</view>
					<input name="sjfGuo_discount" v-model="needVal.cdzbGuo_blxs" /></input>
					<uni-tag text="%" type="defult"></uni-tag> 
					<button type="primary" size="mini" @tap="showModal" data-target="cdzbGuo_blxs">点击选择</button>
				</view>
				<view class="cu-form-group">
					<view class="title">优惠折扣</view>
					<input name="sjfGuo_discount" v-model="needVal.cdzbGuo_yhzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
				</view>
				<explain></explain>
				<cdzb-guo-blxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'> </cdzb-guo-blxs>
			</form>
	</view>
</template>
	
<script>
		import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import cdzbGuoBlxs from "./cdzbGuo_blxs.vue"
		import explain from '@/common/base/explain.vue'
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						cdzbGuo_blxs: "0.0125",
						cdzbGuo_gcfy: "",
						cdzbGuo_jsyj: "建标〔2011〕1号",
						cdzbGuo_nums: "",
						cdzbGuo_yhzk: "90",
						type: "cdzbGuo",
					},
					showModalName: null,
					shows: 1,
					picker1:['建标〔2011〕1号'],
					index:'0',
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
				uniTag,
				explain,
				cdzbGuoBlxs
			},
			methods:{
				PickerChange(e) {
					this.index = e.detail.value
					console.log(e.detail.value);
				},
				showdzzk(e) {
					this.modalData = e.currentTarget.dataset.target
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>
	
