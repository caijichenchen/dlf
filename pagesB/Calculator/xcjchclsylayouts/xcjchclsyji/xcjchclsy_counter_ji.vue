<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省工程建设材料试验质量检测费计算</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_xzsf">
				<view class="title">选择省份</view>
				<view class="title m-left" v-model="needVal.xcjchclsyJi_xzsf">{{multiSelector.xcjchclsyJi_xzsf[pickerIndex.xcjchclsyJi_xzsf]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_standard">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange" data-name="xcjchclsyJi_standard" :value="pickerIndex.xcjchclsyJi_standard"
				 :range="multiSelector.xcjchclsyJi_standard">
					<view class="picker">{{multiSelector.xcjchclsyJi_standard[pickerIndex.xcjchclsyJi_standard]}}</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_category">
				<view class="title">项目分类</view>
				<picker class="select" @change="PickerChange" data-name="xcjchclsyJi_category" :value="pickerIndex.xcjchclsyJi_category"
				 :range="multiSelector.xcjchclsyJi_category">
					<view class="picker">
						{{multiSelector.xcjchclsyJi_category[pickerIndex.xcjchclsyJi_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_xzfl">
				<view class="title">选择分类</view>
				<picker class="select" @change="PickerChange" data-name="xcjchclsyJi_xzfl" :value="pickerIndex.xcjchclsyJi_xzfl"
				 :range="multiSelector.xcjchclsyJi_xzfl">
					<view class="picker">
						{{multiSelector.xcjchclsyJi_xzfl[pickerIndex.xcjchclsyJi_xzfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_csxm">
				<view class="title">测试项目</view>
				<picker class="select" @change="PickerChange" data-name="xcjchclsyJi_csxm" :value="pickerIndex.xcjchclsyJi_csxm"
				 :range="multiSelector.xcjchclsyJi_csxm">
					<view class="picker">
						{{multiSelector.xcjchclsyJi_csxm[pickerIndex.xcjchclsyJi_csxm]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_units">
				<view class="title">工程量</view>
				<input type="text" v-model="needVal.xcjchclsyJi_gcl"></input>
				<uni-tag :text="multiSelector.xcjchclsyJi_units" type="defult" v-model="needVal.xcjchclsyJi_units"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.xcjchclsyJi_xzlb">
				<view class="title">选择类别</view>
				<picker class="select" @change="PickerChange" data-name="xcjchclsyJi_xzlb" :value="pickerIndex.xcjchclsyJi_xzlb"
				 :range="multiSelector.xcjchclsyJi_xzlb">
					<view class="picker">
						{{multiSelector.xcjchclsyJi_xzlb[pickerIndex.xcjchclsyJi_xzlb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="xcjchclsyJi_discount" v-model="needVal.xcjchclsyJi_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from "@/common/json/gcjsclsyzljcf/gcjsclsyzljcf-ji.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					xcjchclsyJi_xzsf: '',
					xcjchclsyJi_standard: '',
					xcjchclsyJi_category: '',
					xcjchclsyJi_xzfl: '',
					xcjchclsyJi_csxm: '',
					xcjchclsyJi_gcl: '',
					xcjchclsyJi_units: '',
					xcjchclsyJi_xzlb: '',
					xcjchclsyJi_fl: '',
					xcjchclsyJi_discount: '100',
					type: 'xcjchclsyJi'
				},
				multiSelector: {
					xcjchclsyJi_xzsf: [],
					xcjchclsyJi_standard: [],
					xcjchclsyJi_category: [],
					xcjchclsyJi_xzfl: [],
					xcjchclsyJi_csxm: [],
					xcjchclsyJi_units: '',
					xcjchclsyJi_xzlb: '',
					xcjchclsyJi_fl: '',
				},
				showSelector: {
					xcjchclsyJi_xzsf: true,
					xcjchclsyJi_standard: true,
					xcjchclsyJi_category: true,
					xcjchclsyJi_xzfl: true,
					xcjchclsyJi_csxm: true,
					xcjchclsyJi_units: true,
					xcjchclsyJi_xzlb: true,
					xcjchclsyJi_fl: false,
				},
				pickerIndex: {
					xcjchclsyJi_xzsf: 0,
					xcjchclsyJi_standard: 0,
					xcjchclsyJi_category: 0,
					xcjchclsyJi_xzfl: 0,
					xcjchclsyJi_csxm: 0,
					xcjchclsyJi_xzlb: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "项目分类",
						"text": "请选择大类"
					},
					{
						"id": "2",
						"title": "选择分类",
						"text": "请选择分类"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "各地区取值略有不同,请根据当地实际情况打折"
					},
				]
			}
		},
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


