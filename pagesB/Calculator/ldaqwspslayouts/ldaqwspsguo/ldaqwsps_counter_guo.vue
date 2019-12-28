<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">劳动安全卫生评审费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" @change="PickerChange" v-model="needVal.ldaqwspsGuo_jsyj" :range="picker1">
						<view class="picker" >
							建标〔2011〕1号
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">工程费用</view>
					<input type="text" id="sjf" v-model="needVal.ldaqwspsGuo_gcfy"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="ldaqwspsGuo_gcfy">查看说明</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">比例系数</view>
					<input type="text" id="sjf" v-model="needVal.ldaqwspsGuo_blxs"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="ldaqwspsGuo_blxs">点击选择</button>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="sjfGuo_discount" v-model="needVal.ldaqwspsGuo_yhzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="dzzk-guo">查看说明</button>
				</view>
				<ldaqwsps-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></ldaqwsps-blb>
				<ldaqwsps-gcfy v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></ldaqwsps-gcfy>
			</form>
	</view>
</template>
	
<script>
		import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import ldaqwspsBlb from "./ldaqwspsGuo_blb.vue"
		import ldaqwspsGcfy from "./ldaqwspsGuo_gcfy.vue"
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						type: "xmzxfwfgfGuo",
						ldaqwspsGuo_blxs: "0.003",
						ldaqwspsGuo_gcfy: "",
						ldaqwspsGuo_jsyj: "建标〔2011〕1号",
						ldaqwspsGuo_nums: "",
						ldaqwspsGuo_yhzk: "90",
						type: "ldaqwspsGuo",

					},
					showModalName: null,
					radio: 'radio1',
					selected: 'A',
					shows: 1,
					picker1:['建标〔2011〕1号'],
					index:'建标〔2011〕1号'
				}
			},
			components: {
				uniTag,
				ldaqwspsBlb,
				ldaqwspsGcfy
			},
			methods:{
				PickerChange(e) {
					this.index = e.detail.value
					console.log(e.detail.value);
				}
			}
		}
	</script>
	
	
	