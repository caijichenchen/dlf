<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程地面测量收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.gcdmclsfGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="gcdmclsfGuo_xzlx" :value="pickerIndex.gcdmclsfGuo_xzlx"
				 :range="multiSelector.gcdmclsfGuo_xzlx">
					<view class="picker">
						{{multiSelector.gcdmclsfGuo_xzlx[pickerIndex.gcdmclsfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcdmclsfGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.gcdmclsfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.gcdmclsfGuo_swgzldw" type="defult" v-model="needVal.gcdmclsfGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcdmclsfGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="gcdmclsfGuo_xzxm" :value="pickerIndex.gcdmclsfGuo_xzxm"
				 :range="multiSelector.gcdmclsfGuo_xzxm">
					<view class="picker">
						{{multiSelector.gcdmclsfGuo_xzxm[pickerIndex.gcdmclsfGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcdmclsfGuo_xmjb">
				<view class="title">项目级别</view>
				<picker class="select" @change="PickerChange" data-name="gcdmclsfGuo_xmjb" :value="pickerIndex.gcdmclsfGuo_xmjb"
				 :range="multiSelector.gcdmclsfGuo_xmjb">
					<view class="picker">
						{{multiSelector.gcdmclsfGuo_xmjb[pickerIndex.gcdmclsfGuo_xmjb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" >
				<view class="title" >复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="indexfzcd"
				 :range="gcdmclsfGuo_fzcd">
					<view class="picker">
						{{gcdmclsfGuo_fzcd[indexfzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="gcdmclsfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input v-model="needVal.gcdmclsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcdmclsfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index0"
				 :range="gcdmclsfGuo_qwfjtz">
					<view class="picker">
						{{gcdmclsfGuo_qwfjtz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input v-model="needVal.gcdmclsfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcdmclsfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input v-model="needVal.gcdmclsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.gcdmclsfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<explain></explain>
		</form>
		<tzxs-guo :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-guo>
		<fztz :showModalName="showModalName" v-on:hideModal="hideModal"></fztz>
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
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/dmcls.json'
	import tzxsGuo from './gcdmclsfGuo_fjtz.vue'
	import gctz from '@/common/base/gctz.vue'
	import fztz from './gcdmclsfGuo_fzcd.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					gcdmclsfGuo_xzlx: '',
					gcdmclsfGuo_swgzl: '',
					gcdmclsfGuo_swgzldw: '',
					gcdmclsfGuo_xzxm: '',
					gcdmclsfGuo_sfjj: '',
					gcdmclsfGuo_xmjb: '',
					gcdmclsfGuo_fzcd: '简单',
					gcdmclsfGuo_fjtz: '1.0',
					gcdmclsfGuo_qwfjtz: '1',
					gcdmclsfGuo_gctz: '1.0',
					gcdmclsfGuo_fdfd: '80',
					gcdmclsfGuo_yhzk: '90',
					gcdmclsfGuo_nums: '',
					type: 'gcdmclsfGuo'
				},
				multiSelector: {
					gcdmclsfGuo_xzlx: [],
					gcdmclsfGuo_xzxm: [],
					gcdmclsfGuo_xmjb: [],
					gcdmclsfGuo_swgzldw: '',
					gcdmclsfGuo_sfjj: '',
				},
				pickerIndex: {
					gcdmclsfGuo_xzlx: 0,
					gcdmclsfGuo_xzxm: 0,
					gcdmclsfGuo_xmjb: 0,
				},
				showSelector: {
					gcdmclsfGuo_xzlx: true,
					gcdmclsfGuo_xzxm: true,
					gcdmclsfGuo_xmjb: true,
					gcdmclsfGuo_swgzldw: true,
					gcdmclsfGuo_sfjj: false,
				},
				gcdmclsfGuo_fzcd: ['简单','中等','复杂'],
				gcdmclsfGuo_qwfjtz: ['1','1.2'],
				index0: 0,
				indexfzcd: 0,
				title: '工程地面测量费',
				modalName: 'gcdmclsfGuo_gctz',
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
						"title": "选择比例",
						"text": "请确定好比例标准"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			tzxsGuo,
			gctz,
			fztz
		},
		methods:{
			PickerChanges(e) {
				this.indexfzcd = e.detail.value
				this.needVal.gcdmclsfGuo_fzcd = this.gcdmclsfGuo_fzcd[this.indexfzcd]
			},
			PickerChangess(e) {
				this.index0 = e.detail.value
				this.needVal.gcdmclsfGuo_qwfjtz = this.gcdmclsfGuo_qwfjtz[this.index0]
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
