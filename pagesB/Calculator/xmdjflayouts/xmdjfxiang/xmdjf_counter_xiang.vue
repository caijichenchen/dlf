<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省项目代建费计算器</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择区域</view>
				<picker class="select" v-model="needVal.xmdjfXiang_xzsf" :range="picker">
					<view class="picker" name="xmdjfXiang_xzsf">
						湖南省
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="text"  id="sjf" v-model="needVal.xmdjfXiang_jfe"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" v-model="needVal.xmdjfXiang_standard" :range="picker1">
					<view class="picker" name="xmdjfXiang_standard">
						湘发改价服[2015]744号
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input name="xmdjfXiang_zytz" v-model="needVal.xmdjfXiang_zytz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="xmdjfXiang_zytz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">阶段调整系数</view>
				<input name="xmdjfXiang_jdtzxs" v-model="needVal.xmdjfXiang_jdtzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="xmdjfXiang_jdtzxs">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="xmdjfXiang_discount" v-model="needVal.xmdjfXiang_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<xmdjf-xiang-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></xmdjf-xiang-zytz>
		<xmdjf-xiang-jdtzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></xmdjf-xiang-jdtzxs>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	// import xmdjfXiangZbxm from "./xmdjfXiang_zbxm.vue"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import xmdjfXiangJdtzxs from "./xmdjfXiang_jdtzxs.vue"
	import xmdjfXiangZytz from "./xmdjfXiang_zytz.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					type: "xmdjfXiang",
					xmdjfXiang_discount: "100",
					xmdjfXiang_fl: "0.04|0.03|0.025|0.02|0.015|0.005|0.002",
					xmdjfXiang_graded: "0|3000|5000|10000|20000|50000|100000",
					xmdjfXiang_jdtzxs: "1.0",
					xmdjfXiang_jfe: "",
					xmdjfXiang_standard: "湘发改价服[2015]744号",
					xmdjfXiang_zytz: "1.0",
				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['湖南省'],
				picker1:['湘发改价服[2015]744号'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "优惠折扣",
						"text": "根据各地区进行打折"
					},
				]
			}
		},
		components: {
			uniTag,
			xmdjfXiangJdtzxs,
			xmdjfXiangZytz,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			},
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
