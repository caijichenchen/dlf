<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程建设监理费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" @change="PickerChange" v-model="needVal.gcjsjlfgf_jsyj" :range="picker1">
						<view class="picker" >
							NB/T 32027--2016
						</view>
					</picker>
					<!-- <button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">查看说明</button> -->
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">建安设备费</view>
					<input type="text" id="sjf" v-model="needVal.gcjsjlfgf_jasbf"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="sjfGuo_discount" v-model="needVal.gcjsjlfgf_dzzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="showdzzk">查看说明</button>
				</view>
			</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					gcjsjlfgf_dzzk: '',
					gcjsjlfgf_jasbf: '',
					gcjsjlfgf_jsyj: 'NB/T 32027--2016',
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1:['NB/T 32027--2016'],
				index:'NB/T 32027--2016'
			}
		},
		components: {
			uniTag,
			
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				console.log(e.detail.value);
			}
		}
	}
</script>
	
	