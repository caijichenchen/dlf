<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省节能评估费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jnpgfZhe_xzsf">
				<view class="title">选择省份</view>
				<view class="title m-left" v-model="needVal.jnpgfZhe_xzsf">{{multiSelector.jnpgfZhe_xzsf[pickerIndex.jnpgfZhe_xzsf]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jnpgfZhe_xzbz">
				<view class="title">选择标准</view>
				<view class="title" v-model="needVal.jnpgfZhe_xzbz">{{multiSelector.jnpgfZhe_xzbz[pickerIndex.jnpgfZhe_xzbz]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1045,multiSelector.jnpgfZhe_xzbz[pickerIndex.jnpgfZhe_xzbz])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jnpgfZhe_category">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="jnpgfZhe_category" :value="pickerIndex.jnpgfZhe_category"
				 :range="multiSelector.jnpgfZhe_category">
					<view class="picker">
						{{multiSelector.jnpgfZhe_category[pickerIndex.jnpgfZhe_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">总建筑建设面积</view>
				<input type="text" v-model="needVal.jnpgfZhe_zjzmj"></input>
				<uni-tag text="万平方米	" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.jnpgfZhe_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/jnpgfs/jnpgfs-zhe.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jnpgfZhe_category: "",
					jnpgfZhe_fl: "",
					jnpgfZhe_graded: "",
					jnpgfZhe_xzbz: "",
					jnpgfZhe_xzsf: "",
					jnpgfZhe_zjzmj: "",
					jnpgfZhe_dzzk: "50",
					type: "jnpgfZhe"
				},
				multiSelector: {
					jnpgfZhe_xzsf: [],
					jnpgfZhe_xzbz: [],
					jnpgfZhe_category: [],
					jnpgfZhe_graded: '',
					jnpgfZhe_fl: '',
				},
				pickerIndex: {
					jnpgfZhe_xzsf: 0,
					jnpgfZhe_xzbz: 0,
					jnpgfZhe_category: 0,
				},
				showSelector: {
					jnpgfZhe_xzsf: true,
					jnpgfZhe_xzbz: true,
					jnpgfZhe_category: true,
					jnpgfZhe_graded: false,
					jnpgfZhe_fl: false,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
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
