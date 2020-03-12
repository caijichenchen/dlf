<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">吉林市监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						吉市监协字〔2017〕6号
					</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfJilin_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="digit" v-model="needVal.jlfJilin_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJilin_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优质服务系数</view>
				<input type="digit" v-model="needVal.jlfJilin_yzfwxs"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJilin_yzfwxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfJilin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlf-jl-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlf-jl-fztz>
			<jlf-jl-yzfwxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlf-jl-yzfwxs>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfJlFztz from "./jlfjilin_fztz.vue"
	import jlfJlYzfwxs from "./jlfjilin_yzfwxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfJilin_discount: "50",
					jlfJilin_jfe: "",
					jlfJilin_fl: "0.028|0.0255|0.0221|0.0204|0.0196|0.0187|0.017|0.0153|0.0145|0.0136|0.0128|0.0119|0.0102|0.0094|0.0094|0.0085",
					jlfJilin_fztz: 1.0,
					jlfJilin_standard: "吉市监协字〔2017〕6号",
					jlfJilin_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
					jlfJilin_yzfwxs:'1.0',
					type: "jlfJilin",
				},
				modalData: null,  //查看说明
				showModalName: null,
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
			jlfJlFztz,
			jlfJlYzfwxs
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
	