<template>
	<view>
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">西藏资产评估收费</text>
			</div>
			<form>
				<view class="cu-form-group" v-show="showSelector.zcpgsfSu1">
					<view class="title">选择省份</view>
					<picker class="select" @change="PickerChange" data-index='index0' data-name="zcpgsfSu1" :value="pickerIndex.index0"
					 :range="multiSelector.zcpgsfSu1">
						<view class="picker">
							{{multiSelector.zcpgsfSu1[pickerIndex.index0]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfSu1">查看说明</button>
				</view>
				
				<view class="cu-form-group" v-show="showSelector.zcpgsfSu_standard">
					<view class="title">选择标准</view>
					<picker class="select" @change="PickerChange" data-index='index1' data-name="zcpgsfSu_standard" :value="pickerIndex.index1"
					 :range="multiSelector.zcpgsfSu_standard">
						<view class="picker">
							{{multiSelector.zcpgsfSu_standard[pickerIndex.index1]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfSu_standard">查看说明</button>
				</view>
				
				<view class="cu-form-group" v-show="showSelector.zcpgsfSu_category">
					<view class="title">计费类型</view>
					<picker class="select" @change="PickerChange" data-index='index2' data-name="zcpgsfSu_category" :value="pickerIndex.index2"
					 :range="multiSelector.zcpgsfSu_category">
						<view class="picker">
							{{multiSelector.zcpgsfSu_category[pickerIndex.index2]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfSu_category">查看说明</button>
				</view>
				
				<view class="cu-form-group" v-show="showSelector.zcpgsfSu_ryjc">
					<view class="title">人员级次</view>
					<picker class="select" @change="PickerChange" data-index='index3' data-name="zcpgsfSu_ryjc" :value="pickerIndex.index3"
					 :range="multiSelector.zcpgsfSu_ryjc">
						<view class="picker">
							{{multiSelector.zcpgsfSu_ryjc[pickerIndex.index3]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfSu_ryjc">查看说明</button>
				</view>
				
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">人数</view>
					<input type="text" v-model="needVal.zcpgsfSu_peoples"></input>
					<uni-tag text="人" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group" v-show="multiSelector.zcpgsfSu4 != 'hiddenhidden'">
					<view class="title">{{multiSelector.zcpgsfSu4}}</view>
					<input type="text" v-model="needVal.zcpgsfSu_edorcd"></input>
					<uni-tag text="万元" type="defult" v-model="multiSelector.zcpgsfSu5">{{multiSelector.zcpgsfSu5}}</uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="zcpgsfSu_discount" v-model="needVal.zcpgsfSu_discount" /></input>
					<uni-tag text="%" type="defult">%</uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfSu_discount">查看说明</button>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from "@/common/json/zcpgfs/zcpgfs-guo.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfSu_standard: '',
					zcpgsfSu_category: '',
					zcpgsfSu_ryjc: '',
					zcpgsfSu_dysf: '',
					zcpgsfSu_peoples: '',
					zcpgsfSu_fl: '',
					zcpgsfSu_graded: '',
					zcpgsfSu_edorcd: '',
					zcpgsfSu_discount: '',
				},
				multiSelector: {
					zcpgsfSu1: [],
					zcpgsfSu_standard: [],
					zcpgsfSu_category: [],
					zcpgsfSu_ryjc: [],//8
					zcpgsfSu_dysf: '',//9
					zcpgsfSu_fl: '',//6
					zcpgsfSu_graded: '',//7
					zcpgsfSu4: '',
					zcpgsfSu5: ''
				},
				showSelector: {
					zcpgsfSu1: true,
					zcpgsfSu_standard: true,
					zcpgsfSu_category: true,
					zcpgsfSu_ryjc:  true,
					zcpgsfSu_dysf: false,
					zcpgsfSu_fl: false,
					zcpgsfSu_graded: false,
					zcpgsfSu4: true,
					zcpgsfSu5: true
				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
					index3: 0,
					index4: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				explain: [{
						"id": "1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "1",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
							"id": "1",
							"title": "打折折扣",
							"text": "目前市场行情各地区取值略有不同"
						},
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			},
			//查看说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


