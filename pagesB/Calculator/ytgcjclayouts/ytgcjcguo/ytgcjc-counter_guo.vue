<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国岩土工程检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.ytgcjcGuo_xzlx1">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjcGuo_xzlx1" :value="pickerIndex.ytgcjcGuo_xzlx1"
				 :range="multiSelector.ytgcjcGuo_xzlx1">
					<view class="picker">
						{{multiSelector.ytgcjcGuo_xzlx1[pickerIndex.ytgcjcGuo_xzlx1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjcGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.ytgcjcGuo_swgzl"/></input>
				<uni-tag :text="multiSelector.ytgcjcGuo_swgzldw" type="defult" v-model="needVal.ytgcjcGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjcGuo_xzlx2">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjcGuo_xzlx2" :value="pickerIndex.ytgcjcGuo_xzlx2"
				 :range="multiSelector.ytgcjcGuo_xzlx2">
					<view class="picker">
						{{multiSelector.ytgcjcGuo_xzlx2[pickerIndex.ytgcjcGuo_xzlx2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjcGuo_xzlx3 || showSelector.ytgcjcGuo_xzlx4">
				<view class="title" v-model="needVal.ytgcjcGuo_xzlx3">{{multiSelector.ytgcjcGuo_xzlx3}}</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjcGuo_xzlx4" :value="pickerIndex.ytgcjcGuo_xzlx4"
				 :range="multiSelector.ytgcjcGuo_xzlx4">
					<view class="picker">
						{{multiSelector.ytgcjcGuo_xzlx4[pickerIndex.ytgcjcGuo_xzlx4]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjcGuo_zdzmc">
				<view class="title" v-model="needVal.ytgcjcGuo_zdzmc">{{multiSelector.ytgcjcGuo_zdzmc}}</view>
				<input v-model="needVal.ytgcjcGuo_zdz" /></input>
				<uni-tag :text="multiSelector.ytgcjcGuo_zdzdw" type="defult" v-model="needVal.ytgcjcGuo_zdzdw"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChanges" :value="index"
				 :range="ytgcjcGuo_qwfjtz">
					<view class="picker">
						{{ytgcjcGuo_qwfjtz[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.ytgcjcGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcjcGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.ytgcjcGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.ytgcjcGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modeName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/ytgcjcs.json'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					ytgcjcGuo_xzlx1: '',
					ytgcjcGuo_swgzl: '',
					ytgcjcGuo_swgzldw: '',
					ytgcjcGuo_xzlx2: '',
					ytgcjcGuo_xzlx3: '',
					ytgcjcGuo_xzlx4: '',
					ytgcjcGuo_sfjj: '',
					ytgcjcGuo_zdzmc: '',
					ytgcjcGuo_zdz: '',
					ytgcjcGuo_zdzdw: '',
					ytgcjcGuo_qwfjtz: '1.0',
					ytgcjcGuo_gctz: '1.0',
					ytgcjcGuo_fdfd: '80',
					ytgcjcGuo_yhzk: '90',
					ytgcjcGuo_nums: '',
					type: 'ytgcjcGuo'
				},
				multiSelector: {
					ytgcjcGuo_xzlx1: [],
					ytgcjcGuo_xzlx2: [],
					ytgcjcGuo_xzlx3: '',
					ytgcjcGuo_xzlx4: [],
					ytgcjcGuo_swgzldw: '',
					ytgcjcGuo_sfjj: '',
					ytgcjcGuo_zdzmc: '',
					ytgcjcGuo_zdzdw: '',
				},
				pickerIndex: {
					ytgcjcGuo_xzlx1: 0,
					ytgcjcGuo_xzlx2: 0,
					ytgcjcGuo_xzlx4: 0,
				},
				showSelector: {
					ytgcjcGuo_xzlx1: true,
					ytgcjcGuo_xzlx2: true,
					ytgcjcGuo_xzlx3: true,
					ytgcjcGuo_xzlx4: true,
					ytgcjcGuo_swgzldw: true,
					ytgcjcGuo_sfjj: false,
					ytgcjcGuo_zdzmc: false,
					ytgcjcGuo_zdzdw: false,
				},
				title: '勘察费',
				modeName: 'ytgcjcGuo_gctz',
				ytgcjcGuo_qwfjtz: ['1.0','1.2'],
				index: 0,
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "5",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时,气温附加调整系数为1.2"
					},
					{
						"id": "6",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "7",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.ytgcjcGuo_qwfjtz = this.ytgcjcGuo_qwfjtz[this.index]
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
