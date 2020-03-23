<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left">湘监协[2016]2号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfXiang_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfXiang_jfe">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="digit" v-model="needVal.jlfXiang_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfXiang_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jlfXiang_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfXiang_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfXiang_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jlfxiang-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfxiang-fjtz>
		<jlfxiang-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :modalName="modalName"></jlfxiang-fztz>
		<jfe v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jfe>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import jlfxiangFjtz from "./jlfXiang_fjtz.vue"
	import jlfxiangFztz from "../jlf_fztz.vue"
	import jfe from './jlfXiang_jfe.vue'
	export default {
		mixins: [counterMixin],
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
		data() {
			return {
				needVal: {
					jlfXiang_dzzk: "50",
					jlfXiang_jfe: "",
					jlfXiang_fjtz: '1.0',
					jlfXiang_fztz: '1.0',
					jlfXiang_jsyj: "湘监协[2016]2号",
					type: "jlfXiang",
					jlfXiang_nums: ""
				},
				modalData: null,  //查看说明
				showModalName: null,
				modalName:'jlfXiang_fztz',
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			jlfxiangFjtz,
			jlfxiangFztz,
			jfe
		},
		watch:{
			inval(val){
				this.needVal.jlfXiang_jfe = val
			}
		}
	}
</script>

<style>

</style>
	