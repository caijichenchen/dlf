<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广州、深圳、珠海、佛山工程监理费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left">粤建监协〔2015〕21号</view>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfGszf_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工作量比例</view>
				<input type="digit" v-model="needVal.jlfGszf_gzlbl"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfGszf_gzlbl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="digit" v-model="needVal.jlfGszf_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfGszf_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jlfGszf_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfGszf_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfGszf_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlfgszf-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfgszf-fjtz>
			<jlfgszf-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :modalName="modalName"></jlfgszf-fztz>
			<jlfgszf-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfgszf-blb>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfgszfFjtz from "./jlfGszf_fjtz.vue"
	import jlfgszfFztz from "../jlf_fztz.vue"
	import jlfgszfBlb from "./jlfGszf_blb.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfGszf_dzzk: "50",
					jlfGszf_jfe: "",
					jlfGszf_fjtz: '1.0',
					jlfGszf_fztz: '1.0',
					jlfGszf_gzlbl: '1.0',
					jlfGszf_jsyj: "粤建监协〔2015〕21号",
					type: "jlfGszf",
					jlfGszf_nums: ""
				},
				modalData: null,  //查看说明
				showModalName: null,
				modalName: 'jlfGszf_fztz',
				explain: [{
						"id": "1",
						"title": "监理费计费额",
						"text": "计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置 费和联合试运转费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			jlfgszfFjtz,
			jlfgszfFztz,
			jlfgszfBlb
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

<style>

</style>
	