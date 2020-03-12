<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">取土、水、石、试样收费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">岩土工程勘察等级</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="qtsssysfGuo_kcdj">
					<view class="picker">{{qtsssysfGuo_kcdj[index0]}}</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="showSelector.qtsssysfGuo_xzfl">
				<view class="title">选择分类</view>
				<picker class="select" @change="PickerChange"  data-name="qtsssysfGuo_xzfl" :value="pickerIndex.qtsssysfGuo_xzfl"
				 :range="multiSelector.qtsssysfGuo_xzfl">
					<view class="picker">
						{{multiSelector.qtsssysfGuo_xzfl[pickerIndex.qtsssysfGuo_xzfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="showSelector.qtsssysfGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange"  data-name="qtsssysfGuo_xzxm" :value="pickerIndex.qtsssysfGuo_xzxm"
				 :range="multiSelector.qtsssysfGuo_xzxm">
					<view class="picker">
						{{multiSelector.qtsssysfGuo_xzxm[pickerIndex.qtsssysfGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="showSelector.qtsssysfGuo_sygg">
				<view class="title">试样规格</view>
				<picker class="select" @change="PickerChange" data-name="qtsssysfGuo_sygg" :value="pickerIndex.qtsssysfGuo_sygg"
				 :range="multiSelector.qtsssysfGuo_sygg">
					<view class="picker">
						{{multiSelector.qtsssysfGuo_sygg[pickerIndex.qtsssysfGuo_sygg]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="showSelector.qtsssysfGuo_qysd">
				<view class="title">取样深度</view>
				<picker class="select" @change="PickerChange" data-name="qtsssysfGuo_qysd" :value="pickerIndex.qtsssysfGuo_qysd"
				 :range="multiSelector.qtsssysfGuo_qysd">
					<view class="picker">
						{{multiSelector.qtsssysfGuo_qysd[pickerIndex.qtsssysfGuo_qysd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实际工作量</view>
				<input type="digit" v-model="needVal.qtsssysfGuo_sjgzl" /></input>
				<uni-tag :text="multiSelector.qtsssysfGuo_sjgzldw" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.qtsssysfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="qtsssysfGuo_fjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChange2" :value="index1" :range="qtsssysfGuo_qwfjtz">
					<view class="picker">
						{{qtsssysfGuo_qwfjtz[index1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input type="digit" v-model="needVal.qtsssysfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="qtsssysfGuo_gctz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.qtsssysfGuo_fdfd" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[6])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.qtsssysfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[7])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
	</view>
</template>

<script>
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	// import datajson from '@/common/json/qtsssysfs/qtsssysfs.json'
	import gctz from '@/common/base/gctz.vue'
	import fjtz from './qtsssysfGuo_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/qtsssysfs/qtsssysfs.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					qtsssysfGuo_kcdj: '甲级',
					qtsssysfGuo_xzfl: '',
					qtsssysfGuo_xzxm: '',
					qtsssysfGuo_sygg: '',
					qtsssysfGuo_qysd: '',
					qtsssysfGuo_sfjj: '',
					qtsssysfGuo_sjgzl: '',
					qtsssysfGuo_fjtz:'1.0',
					qtsssysfGuo_qwfjtz: '1',
					qtsssysfGuo_gctz: '1.0',
					qtsssysfGuo_fdfd: '80',
					qtsssysfGuo_yhzk: '90',
					qtsssysfGuo_nums: '',
					type: 'qtsssysfGuo'
				},
				multiSelector: {
					qtsssysfGuo_xzfl: [],
					qtsssysfGuo_sjgzldw: '',
					qtsssysfGuo_xzxm: [],
					qtsssysfGuo_sygg: [],
					qtsssysfGuo_qysd: [],
					qtsssysfGuo_sfjj: ''
				},
				showSelector: {
					qtsssysfGuo_xzfl: true,
					qtsssysfGuo_sjgzldw: true,
					qtsssysfGuo_xzxm: true,
					qtsssysfGuo_sygg: true,
					qtsssysfGuo_qysd: true,
					qtsssysfGuo_sfjj: false,
				},
				pickerIndex: {
					qtsssysfGuo_xzfl:0,
					qtsssysfGuo_xzxm: 0,
					qtsssysfGuo_sygg: 0,
					qtsssysfGuo_qysd: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				modalName: 'qtsssysfGuo_gctz',
				qtsssysfGuo_kcdj: ['甲级','乙级','丙级'],
				qtsssysfGuo_qwfjtz: ['1','1.2'],
				index0: '0',
				index1: '0',
				datajson:'',
				explain: [
					{
						"id": "1",
						"title": "岩土工程勘察等级",
						"text": "岩土工程勘察等级见国标《岩土工程勘察规范》"
					},
					{
						"id": "2",
						"title": "选择分类",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "4",
						"title": "试样规格",
						"text": "请确定好计算级别"
					},
					{
						"id": "5",
						"title": "取样深度",
						"text": "请确定好计算级别"
					},
					{
						"id": "6",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "7",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "8",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			gctz,
			fjtz
		},
		methods:{
			PickerChange1(e){
				this.index0 = e.detail.value
				this.needVal.qtsssysfGuo_kcdj = this.qtsssysfGuo_kcdj[this.index0]
			},
			PickerChange2(e){
				this.index1 = e.detail.value
				this.needVal.qtsssysfGuo_qwfjtz = this.qtsssysfGuo_qwfjtz[this.index1]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
