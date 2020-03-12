<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">公路工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.glgckcfGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="glgckcfGuo_xzxm" :value="pickerIndex.glgckcfGuo_xzxm"
				 :range="multiSelector.glgckcfGuo_xzxm">
					<view class="picker">
						{{multiSelector.glgckcfGuo_xzxm[pickerIndex.glgckcfGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input type="digit" v-model="needVal.glgckcfGuo_swgzl" /></input>
				<uni-tag text="正线公里" type="defult"></uni-tag>
			</view>
			
			<view class="cu-form-group" v-show="showSelector.glgckcfGuo_gldj">
				<view class="title" >公路等级</view>
				<picker class="select" @change="PickerChange" data-name="glgckcfGuo_gldj" :value="pickerIndex.glgckcfGuo_gldj"
				 :range="multiSelector.glgckcfGuo_gldj">
					<view class="picker">
						{{multiSelector.glgckcfGuo_gldj[pickerIndex.glgckcfGuo_gldj]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂分值</view>
				<input type="digit" v-model="needVal.glgckcfGuo_fzfz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="glgckcfGuo_fzfz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.glgckcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="glgckcfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChanges" :value="index"
				 :range="glgckcfGuo_qwfjtz">
					<view class="picker">
						{{glgckcfGuo_qwfjtz[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input type="digit" v-model="needVal.glgckcfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="glgckcfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.glgckcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.glgckcfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<fjzt :showModalName="showModalName" v-on:hideModal="hideModal"></fjzt>
		<fzfz :showModalName="showModalName" v-on:hideModal="hideModal"></fzfz>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/glgcs.json'
	import gctz from '@/common/base/gctz.vue'
	import fjzt from './glgckcfGuo_fjtz.vue'
	import fzfz from './glgckcfGuo_fzfz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/glgcs.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					glgckcfGuo_xzxm: '',
					glgckcfGuo_swgzl: '',
					glgckcfGuo_gldj: '',
					glgckcfGuo_sfjj: '',
					glgckcfGuo_fzfz: '4',
					glgckcfGuo_fjtz: '1.0',
					glgckcfGuo_qwfjtz: '1.0',
					glgckcfGuo_gctz: '1.0',
					glgckcfGuo_fdfd: '80',
					glgckcfGuo_yhzk: '90',
					glgckcfGuo_nums: '',
					type: 'glgckcfGuo'
				},
				multiSelector: {
					glgckcfGuo_xzxm: [],
					glgckcfGuo_gldj: [],
					glgckcfGuo_sfjj: '',
				},
				pickerIndex: {
					glgckcfGuo_xzxm: 0,
					glgckcfGuo_gldj: 0,
				},
				showSelector: {
					glgckcfGuo_xzxm: true,
					glgckcfGuo_gldj: false,
					glgckcfGuo_sfjj: false,
				},
				glgckcfGuo_qwfjtz: ['1','1.2'],
				index: 0,
				title: '公路勘察费',
				modalName: 'glgckcfGuo_gctz',
				showModalName: null,
				datajson:'',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "公路等级",
						"text": "不同分类标准不一样"
					},
					{
						"id": "3",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			gctz,
			fjzt,
			fzfz
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.glgckcfGuo_qwfjtz = this.glgckcfGuo_qwfjtz[this.index]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
