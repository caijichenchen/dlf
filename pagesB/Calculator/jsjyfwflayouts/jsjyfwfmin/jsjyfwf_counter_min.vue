<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">福建省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfMin_province">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.jsjyfwfMin_province[pickerIndex.jsjyfwfMin_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfMin_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfMin_standard">
						{{multiSelector.jsjyfwfMin_standard[pickerIndex.jsjyfwfMin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1680,multiSelector.jsjyfwfMin_standard[pickerIndex.jsjyfwfMin_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfMin_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfMin_category" :value="pickerIndex.jsjyfwfMin_category"
				 :range="multiSelector.jsjyfwfMin_category">
					<view class="picker">
						{{multiSelector.jsjyfwfMin_category[pickerIndex.jsjyfwfMin_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">中标额</view>
				<input type="text" v-model="needVal.jsjyfwfMin_zbj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">收取分配</view>
				<input v-model="needVal.jsjyfwfMin_qfbl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfMin_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.jsjyfwfMin_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfMin_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.jsjyfwfMin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsjyfwf-min-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsjyfwf-min-fjtz>
		<jsjyfwf-min-qfbl v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsjyfwf-min-qfbl>
	</view>
</template>

<script>
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/jsjyfwf/jsjyfwf-min.json'
	import explain from '@/common/base/explain.vue'
	import jsjyfwfMinQfbl  from "./jsjyfwfMin_sqfp.vue"
	import jsjyfwfMinFjtz from "./jsjyfwfMin_fjtz.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jsjyfwfMin_category: "",
					jsjyfwfMin_standard: "",
					jsjyfwfMin_jj: "",
					jsjyfwfMin_discount: "100",
					jsjyfwfMin_fjtz: "1",
					jsjyfwfMin_graded: "",
					jsjyfwfMin_qfbl: "100",
					jsjyfwfMin_zbj: "",
					type: "jsjyfwfMin"
				},
				multiSelector: {
					jsjyfwfMin_province: [],
					jsjyfwfMin_standard: [],
					jsjyfwfMin_category: [],
					jsjyfwfMin_graded: '',
					jsjyfwfMin_jj: '',
					jsjyfwfMin6:'',
				},
				pickerIndex: {
					jsjyfwfMin_province: 0,
					jsjyfwfMin_standard: 0,
					jsjyfwfMin_category: 0,
				},
				showSelector: {
					jsjyfwfMin_province: true,
					jsjyfwfMin_standard: true,
					jsjyfwfMin_category: true,
					jsjyfwfMin_graded: false,
					jsjyfwfMin_jj: false,
					jsjyfwfMin6: false
				},
				datajson: datajson,
				modalData: null,
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "收费项目",
						"text": "选择建设交易服务收费类别"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			jsjyfwfMinQfbl,
			jsjyfwfMinFjtz
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
