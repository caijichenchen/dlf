<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国岩土工程监测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjianceGuo_xzxm" :value="pickerIndex.ytgcjianceGuo_xzxm"
				 :range="multiSelector.ytgcjianceGuo_xzxm">
					<view class="picker">
						{{multiSelector.ytgcjianceGuo_xzxm[pickerIndex.ytgcjianceGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_jcff">
				<view class="title">检测方法</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjianceGuo_jcff" :value="pickerIndex.ytgcjianceGuo_jcff"
				 :range="multiSelector.ytgcjianceGuo_jcff">
					<view class="picker">
						{{multiSelector.ytgcjianceGuo_jcff[pickerIndex.ytgcjianceGuo_jcff]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjianceGuo_xzlx" :value="pickerIndex.ytgcjianceGuo_xzlx"
				 :range="multiSelector.ytgcjianceGuo_xzlx">
					<view class="picker">
						{{multiSelector.ytgcjianceGuo_xzlx[pickerIndex.ytgcjianceGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.ytgcjianceGuo_swgzl"/></input>
				<uni-tag :text="multiSelector.ytgcjianceGuo_swgzldw" type="defult" v-model="needVal.ytgcjianceGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_fzcd">
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjianceGuo_fzcd" :value="pickerIndex.ytgcjianceGuo_fzcd"
				 :range="multiSelector.ytgcjianceGuo_fzcd">
					<view class="picker">
						{{multiSelector.ytgcjianceGuo_fzcd[pickerIndex.ytgcjianceGuo_fzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcjianceGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo_xzlx1">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="ytgcjianceGuo_xzlx1" :value="pickerIndex.ytgcjianceGuo_xzlx1"
				 :range="multiSelector.ytgcjianceGuo_xzlx1">
					<view class="picker">
						{{multiSelector.ytgcjianceGuo_xzlx1[pickerIndex.ytgcjianceGuo_xzlx1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcjianceGuo8">
				<view class="title">{{multiSelector.ytgcjianceGuo8}}</view>
				<input v-model="needVal.ytgcjianceGuo_gs" /></input>
				<uni-tag text="个" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChanges" :value="index"
				 :range="ytgcjianceGuo_qwfjtz">
					<view class="picker">
						{{ytgcjianceGuo_qwfjtz[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.ytgcjianceGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcjianceGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.ytgcjianceGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.ytgcjianceGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[6])">查看说明</button>
			</view>
			<explain></explain>
			<fzcd-guo :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd-guo>
			<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
		</form>
		
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
	import datajson from '@/common/json/ytgcjiances.json'
	import fzcdGuo from './ytgcjianceGuo_fzcd.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					ytgcjianceGuo_xzxm: '',
					ytgcjianceGuo_jcff: '',
					ytgcjianceGuo_xzlx: '',
					ytgcjianceGuo_swgzl: '',
					ytgcjianceGuo_swgzldw: '',
					ytgcjianceGuo_fzcd: '',
					ytgcjianceGuo_xzlx1: '',
					ytgcjianceGuo_gs: '',
					ytgcjianceGuo_sfjj: '',
					ytgcjianceGuo_qwfjtz: '1.0',
					ytgcjianceGuo_gctz: '1.0',
					ytgcjianceGuo_fdfd: '80',
					ytgcjianceGuo_yhzk: '90',
					ytgcjianceGuo_nums: '',
					type: 'ytgcjianceGuo'
				},
				multiSelector: {
					ytgcjianceGuo_xzxm: [],
					ytgcjianceGuo_jcff: [],
					ytgcjianceGuo_xzlx: [],
					ytgcjianceGuo_swgzldw: '',
					ytgcjianceGuo_fzcd: [],
					ytgcjianceGuo_xzlx1: [],
					ytgcjianceGuo_sfjj: '',
					ytgcjianceGuo8: '',
				},
				pickerIndex: {
					ytgcjianceGuo_xzxm: 0,
					ytgcjianceGuo_jcff: 0,
					ytgcjianceGuo_xzlx: 0,
					ytgcjianceGuo_fzcd: 0,
					ytgcjianceGuo_xzlx1: 0,
				},
				showSelector: {
					ytgcjianceGuo_xzxm: true,
					ytgcjianceGuo_jcff: true,
					ytgcjianceGuo_xzlx: true,
					ytgcjianceGuo_swgzldw: true,
					ytgcjianceGuo_fzcd: true,
					ytgcjianceGuo_xzlx1: true,
					ytgcjianceGuo_sfjj: false,
					ytgcjianceGuo8: false,
				},
				title: '勘察费',
				modalName: 'ytgcjianceGuo_gctz',
				ytgcjianceGuo_qwfjtz: ['1.0','1.2'],
				index: 0,
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "检测方法",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "4",
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
			fzcdGuo,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.ytgcjianceGuo_qwfjtz = this.ytgcjianceGuo_qwfjtz[this.index]
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
