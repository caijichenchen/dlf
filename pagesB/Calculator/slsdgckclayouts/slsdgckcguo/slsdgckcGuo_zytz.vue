<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水利水电收费专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="num-wrap">
				<view class="num-wrap-li border-b"
					v-for="(item, index) in tzxsList" :key="index"  @tap="assignment" :data-val="item.val">
					<view class="li-left">{{item.content}}</view>
					<view class="li-right">
						<text class="num-box">{{item.val}}</text>
					</view>
				</view>
				<view class="text-left mx-1 my-1"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'slsdgckcGuo_zytz',
				tzxsList:[
					{content:"水电",val:"1.40"},
					{content:"水库",val:"1.04"},
					{content:"潮汐发电",val:"1.70"},
					{content:"水土保持(0.5~0.55)",val:"0.525"},
					{content:"引导水和河道治理",val:"0.8"},
					{content:"灌溉田间(0.3~0.4)",val:"0.35"},
					{content:"城市防护、河口整治(0.841~0.92)",val:"0.88"},
					{content:"围垦(0.76~0.88)",val:"0.82"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>