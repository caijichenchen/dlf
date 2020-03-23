<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">附加调整</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in fjxsList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{item.xs}}
						</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { modalMixin } from '@/common/base/modalMixin';
export default {
	mixins: [modalMixin],
	props: {
		showModalName: {
			type: String,
			default: null
		} // 弹框可见标志
	},
	data() {
		return {
			modalName: 'fkdxyjjsfQiong_fjtz',
			fjxs: '',
			fjxsList: [
				{value:" 享受政府优惠政策建设的、符合条件并经过相关部门批准认可的经济适用房减半收取",xs:"0.5"},
				{value:" 新建幼儿园、中小学教学楼、儿童福利院、养老院、以及为残疾人修建的生活服务设施等民用建筑，减半收取 ",xs:"0.5"},
				{value:" 临时民用建筑和不增加面积的危房拆除重建（不含翻新住宅项目）予以免收 ",xs:"0"},
				{value:" 因受水灾、火灾或其他不可抗拒的灾害造成损坏后按原面积修复的民用建筑予以免收。 ",xs:"0"},
			]
		};
	},

};
</script>

<style>

</style>
