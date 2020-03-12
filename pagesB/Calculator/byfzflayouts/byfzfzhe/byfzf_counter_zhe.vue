<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省白蚁防治费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<view class="picker m-left">
					{{multiSelector.byfzfZhe1[pickerIndex.byfzfZhe1]}}
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="picker m-left">
						{{multiSelector.byfzfZhe_standard[pickerIndex.byfzfZhe_standard]}}
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择技术</view>
				<picker class="select" @change="PickerChange" data-name="byfzfZhe_xzjs" :value="pickerIndex.byfzfZhe_xzjs" 
				:range="multiSelector.byfzfZhe_xzjs">
					<view class="picker" >
						{{multiSelector.byfzfZhe_xzjs[pickerIndex.byfzfZhe_xzjs]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">建筑面积</view>
				<input type="digit" v-model="needVal.byfzfZhe_jzmj"></input>
				<uni-tag text="平方米" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.byfzfZhe_category">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="byfzfZhe_category" :value="pickerIndex.byfzfZhe_category" 
				:range="multiSelector.byfzfZhe_category">
					<view class="picker" name="byfzfZhe_category">
						{{multiSelector.byfzfZhe_category[pickerIndex.byfzfZhe_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.byfzfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
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
	// import datajson from '@/common/json/byfzfs/byfzfs-zhe.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					byfzfZhe_category: "",
					byfzfZhe_discount: "100",
					byfzfZhe_fl: "",
					byfzfZhe_jzmj: "",
					byfzfZhe_standard: "",
					byfzfZhe_xzjs: "",
					type: "byfzfZhe",
				},
				multiSelector: {
					byfzfZhe1: [],
					byfzfZhe_standard: [],
					byfzfZhe_xzjs: [],
					byfzfZhe_category: [],
					byfzfZhe_fl: ''
				},
				showSelector: {
					byfzfZhe1:true,
					byfzfZhe_standard:true,
					byfzfZhe_xzjs:true,
					byfzfZhe_category:true,
					byfzfZhe_fl: false
				},
				pickerIndex: {
					byfzfZhe1:0,
					byfzfZhe_standard: 0,
					byfzfZhe_xzjs: 0,
					byfzfZhe_category: 0
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "1",
						"title": "选择项目",
						"text": "各地区取值略有不同"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "除按国家、省统一的政策权限规定进行打折"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/byfzfs/byfzfs-zhe.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
