<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国地质灾害治理工程监理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo_xzsf">
				<view class="title">选择省份</view>
				<view class="title m-left" v-model="needVal.dzzhzlgcGuo_xzsf">
					{{multiSelector.dzzhzlgcGuo_xzsf[pickerIndex.dzzhzlgcGuo_xzsf]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo_jsyj">
				<view class="title">计算依据</view>
					<view class="picker" v-model="needVal.dzzhzlgcGuo_jsyj">
						{{multiSelector.dzzhzlgcGuo_jsyj[pickerIndex.dzzhzlgcGuo_jsyj]}}
					</view>
				<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(278,multiSelector.dzzhzlgcGuo_jsyj[pickerIndex.dzzhzlgcGuo_jsyj])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo_gclb">
				<view class="title">工程类别</view>
				<picker class="select" @change="PickerChange" data-name="dzzhzlgcGuo_gclb" :value="pickerIndex.dzzhzlgcGuo_gclb"
				 :range="multiSelector.dzzhzlgcGuo_gclb">
					<view class="picker">
						{{multiSelector.dzzhzlgcGuo_gclb[pickerIndex.dzzhzlgcGuo_gclb]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo4">
				<view class="title">{{multiSelector.dzzhzlgcGuo4}}</view>
				<input type="digit" v-model="needVal.dzzhzlgcGuo_gczj" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo7">
				<view class="title">{{multiSelector.dzzhzlgcGuo7}}</view>
				<picker class="select" @change="pickerChoose" data-arr="dzzhzlgcGuo_fzcd" data-index="index0" :value="index0"
				 :range="dzzhzlgcGuo_fzcd">
					<view class="picker">
						{{dzzhzlgcGuo_fzcd[index0]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="dzzhzlgcGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo8">
				<view class="title">{{multiSelector.dzzhzlgcGuo8}}</view>
				<picker class="select" @change="pickerChoose" data-arr="dzzhzlgcGuo_fzcd" data-index="index0" :value="index0"
				 :range="dzzhzlgcGuo_fzcd">
					<view class="picker">
						{{dzzhzlgcGuo_fzcd[index0]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="dzzhzlgcGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhzlgcGuo9">
				<view class="title">{{multiSelector.dzzhzlgcGuo9}}</view>
				<input type="digit" v-model="needVal.dzzhzlgcGuo_gctz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.dzzhzlgcGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.dzzhzlgcGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal" :status="showSelector.dzzhzlgcGuo7"></fzcd>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fzcd from './fzcd.vue'
	// import datajson from '@/common/json/sgtscfs/sgtscfs-ba.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			}
		},
		data() {
			return {
				needVal: {
					dzzhzlgcGuo_xzsf: '',
					dzzhzlgcGuo_jsyj: '',
					dzzhzlgcGuo_gclb: '',
					dzzhzlgcGuo_gczj: '',
					dzzhzlgcGuo_qjjfe: '',
					dzzhzlgcGuo_fl: '',
					dzzhzlgcGuo_gctz: '1.0',
					dzzhzlgcGuo_fdfd: '80',
					dzzhzlgcGuo_dzzk: '50',
					dzzhzlgcGuo_nums: '',
					type:'dzzhzlgcGuo'
				},
				multiSelector: {
					dzzhzlgcGuo_xzsf: [],
					dzzhzlgcGuo_jsyj: [],
					dzzhzlgcGuo_gclb: [],
					dzzhzlgcGuo4:'',
					dzzhzlgcGuo_qjjfe: '',
					dzzhzlgcGuo_fl: '',
					dzzhzlgcGuo7: '',
					dzzhzlgcGuo8:''
				},
				showSelector: {
					dzzhzlgcGuo_xzsf: true,
					dzzhzlgcGuo_jsyj: true,
					dzzhzlgcGuo_gclb: true,
					dzzhzlgcGuo4:true,
					dzzhzlgcGuo_qjjfe: false,
					dzzhzlgcGuo_fl: false,
					dzzhzlgcGuo7: true,
					dzzhzlgcGuo8: false
				},
				pickerIndex: {
					dzzhzlgcGuo_xzsf: 0,
					dzzhzlgcGuo_jsyj: 0,
					dzzhzlgcGuo_gclb: 0,
				},
				dzzhzlgcGuo_fzcd:['复杂（1.3）','较复杂（1.2）','简单（1.0）'],
				index0:0,
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "1",
						"title": "工程类别",
						"text": "工程类别不同，基本费用不同"
					},
					{
						"id": "2",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/dzzhzlgc-guo.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components:{
			fzcd
		}
	}
</script>

<style>

</style>
