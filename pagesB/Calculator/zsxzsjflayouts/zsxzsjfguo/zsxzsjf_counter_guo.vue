<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2016]89号设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">项目建安费额</view>
				<input type="text" id="sjf" v-model="needVal.zsxzsjfGuo_jafe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂程度</view>
				<picker class="select" @change="PickerChange" v-model="needVal.zsxzsjfGuo_fzcd" :range="picker1">
					<view class="picker" name="sjfGuo_fztz">
						{{index>-1?picker1[index]:'简单'}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加系数</view>
				<input name="zxszGuo_fjxs" v-model="needVal.zxszGuo_fjxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fjxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.sjfGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="showdzzk">查看说明</button>
			</view>
		</form>
		<zsxz-guo-fzcd v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxz-guo-fzcd>
		<zsxz-guo-fjxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxz-guo-fjxs>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zsxzGuoFzcd from "./zsxzGuo_fzcd.vue"
	import zsxzGuoFjxs from "./zsxzGuo_fjxs.vue"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					zsxzsjfGuo_jafe: '',
					zxszGuo_fjxs: 1,
					zsxzsjfGuo_fzcd: '简单',
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['简单', '一般', '复杂','特别复杂'],
				array:[{name:"中国"},{name:"美国"},{name:"韩国"},{name:"英国"}],
				index:'简单'
			}
		},
		components: {
			uniTag,
			zsxzGuoFzcd,
			zsxzGuoFjxs
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				console.log(e.detail.value);
			}
		}
	}
</script>
	
<style>
</style>
	