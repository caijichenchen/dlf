<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水文地质测绘复杂程度分类</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 316upx;">
					<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-key="index" :data-val="item.xs"> 
						<view style="width: 595upx;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="text-blue lt">
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
			modalName: 'swdzchfGuo_fzcd',
			fjxs: '',
			fjxsList: [
				{value:" 基岩岩层水平或倾角很缓，构造简单，岩性稳定均一，多为低山丘陵；第四系沉积物均匀分布，河谷平原宽广；含水层埋藏浅，底下水的补给、径流=排泄条件清楚；水质类型较单一",xs:"简单"},
				{value:" 基岩褶皱和断裂变动明显，岩性岩相不稳定，地貌形态多样；第四系沉积物分布不均匀，有多级阶地且显示不清；含水曾埋藏深浅不一，地下水形成条件较复杂，补给和边界条件不易查清；水质类型较复杂",xs:"中等"},
				{value:" 基岩褶皱和断裂变动强烈，构造复杂，火成岩大量分布，岩相变化较大，地貌形态多且难鉴别；第四系沉积物分布错综复杂；含水曾不稳定，其规模补给和边界难以判定；水质类型复杂",xs:"复杂"},
			]
		};
	},
	methods: {
		clickFjxs(e) {
			//点击隐藏
			console.log(e);
		}
	},
	

};
</script>

<style>

</style>
