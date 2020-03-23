<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfSu1">
				<view class="title">省份</view>
					<view class="title m-left" >
						{{multiSelector.jsjyfwfSu1[pickerIndex.jsjyfwfSu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfSu_standard">
				<view class="title">选择标准</view>
					<view class="picker" v-model="showSelector.jsjyfwfSu_standard">
						{{multiSelector.jsjyfwfSu_standard[pickerIndex.jsjyfwfSu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1671,multiSelector.jsjyfwfSu_standard[pickerIndex.jsjyfwfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfSu_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfSu_category" :value="pickerIndex.jsjyfwfSu_category"
				 :range="multiSelector.jsjyfwfSu_category">
					<view class="picker" >
						{{multiSelector.jsjyfwfSu_category[pickerIndex.jsjyfwfSu_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfSu_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfSu_jtfl" :value="pickerIndex.jsjyfwfSu_jtfl"
				 :range="multiSelector.jsjyfwfSu_jtfl">
					<view class="picker" >
						{{multiSelector.jsjyfwfSu_jtfl[pickerIndex.jsjyfwfSu_jtfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标额</view>
				<input type="digit" v-model="needVal.jsjyfwfSu_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">收取分配</view>
				<input type="digit" v-model="needVal.jsjyfwfSu_qfbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfSu_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jsjyfwfSu_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfSu_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsjyfwfSu_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl-su :showModalName="showModalName" v-on:hideModal="hideModal" :jsjyfwfSu7="multiSelector.jsjyfwfSu7"></qfbl-su>
		<fjtz-su :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz-su>
	</view>
</template>
	
<script>
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	// import datajson from '@/common/json/jsjyfwf/jsjyfwf-su.json'
	import fjtzSu from './jsjyfwfSu_fjtz.vue'
	import qfblSu from './jsjyfwfSu_qfbl.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/jsjyfwf/jsjyfwf-su.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jsjyfwfSu_standard: '',
					jsjyfwfSu_category: '',
					jsjyfwfSu_jtfl: '',
					jsjyfwfSu_graded: '',
					jsjyfwfSu_jj: '',
					jsjyfwfSu_zbj: '',
					jsjyfwfSu_qfbl: '100',
					jsjyfwfSu_fjtz: '1',
					jsjyfwfSu_discount: '100',
					type: 'jsjyfwfSu'
				},
				multiSelector: {
					jsjyfwfSu1: [],
					jsjyfwfSu_standard: [],
					jsjyfwfSu_category: [],
					jsjyfwfSu_jtfl: [],
					jsjyfwfSu_graded: '',
					jsjyfwfSu_jj: '',
					jsjyfwfSu7: '',
				},
				showSelector: {
					jsjyfwfSu1: true,
					jsjyfwfSu_standard: true,
					jsjyfwfSu_category: true,
					jsjyfwfSu_jtfl: true,
					jsjyfwfSu_graded: false,
					jsjyfwfSu_jj: false,
					jsjyfwfSu7: false
				},
				pickerIndex: {
					jsjyfwfSu1: 0,
					jsjyfwfSu_standard: 0,
					jsjyfwfSu_category: 0,
					jsjyfwfSu_jtfl: 0
				},
				showModalName: null,
				datajson: '',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "收费项目",
						"text": "选择建设交易服务收费类别"
					},
					{
						"id": "2",
						"title": "具体分类",
						"text": "选择建设交易服务收费类别"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			fjtzSu,
			qfblSu
		},
		watch:{
			inval(val){
				this.needVal.jsjyfwfSu_zbj = val
			}
		}
	}
</script>

	