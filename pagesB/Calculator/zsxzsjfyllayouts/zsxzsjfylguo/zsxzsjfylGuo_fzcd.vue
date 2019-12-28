<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">园林景观复杂程度表</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						<!-- <text style="word-break: break-all;">{{index+1}}:{{v.show}}</text> -->
						{{ v.show }}
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
			modalName: 'zsxzsjfylGuo_fzcd',
			fzcd: '',
			fzcdList: [
				{
					name: 'I级',
					data: [{ show: '1. 生态林、防护绿地；' }, { show: '2. 生产绿地。' }, { show: '注: A.人工培育种植的单一品种的成片树林、防护绿地工程；' }, { show: 'B.生产绿地工程。' }]
				},
				{
					name: 'II级',
					data: [
						{ show: '1. 道路绿化工程；' },
						{ show: '2. 一般标准公共建筑环境、企事业单位与居住区园林景观工程；;' },
						{ show: '3. 风景林。;' },
						{ show: '注: A.植物品种两种及以上的、标准较高的道路绿化工程，或风景林工程；' },
						{ show: 'B.一般标准、花草树木品种较少、设计复杂程度一般的公共建筑环境、企事业单位与居住区的绿化工程。' }
					]
				},
				{
					name: 'III级',
					data: [
						{ show: '1. 城市景观大道工程、滨水景观；' },
						{ show: '2. 高标准公共建筑环境、企事业单位与居住区园林景观工程；' },
						{ show: '3. 省级风景名胜区。;' },
						{ show: '注: A.人行道外侧绿地宽度超过5m的城市重点道路绿化工程，如商业步行街、城市主要景观线的道路绿化工程；;' },
						{ show: 'B.高标准、园林小品较多、设计复杂，或发包方有特殊要求的公共建筑环境、企事业单位与居住区的绿化工程。' }
					]
				},
				{
					name: 'IV级',
					data: [
						{ show: '1. 公园、度假村、星级酒店、高尔夫球场、广场、会展园林、街心花园、屋顶花园、室内花园、古典园林、专类园、园林小品等绿化工程；' },
						{ show: '2. 国家级风景名胜区、国家公园。;' },
						{ show: '注:A.古典园林，是指以江南古典园林、北方皇家园林和寺观园林为代表的中国传统山水园林形式；;' },
						{ show: 'B.园林小品是指园林和景观设计中的亭、廊、花架、景墙等休息措施；;' },
						{ show: '功能和技术要求特别复杂的公共建筑工程;' }
					]
				}
			]
		};
	},
	methods: {
		
	}
};
</script>

<style>
.dlf-group {
	width: 100%;
	/* padding: 20upx 30upx; */
	font-size: 30upx;
	text-align: left;
	/* margin: 5upx 5upx; */

	border-bottom: 1upx solid #00a0e0;
}
.dlf-group .dlf-li {
	/* width: 640upx; */
	/* height: 40upx; */
	line-height: 40upx;
	padding: 5upx 0;
	/* word-wrap:break-word; word-break:break-all; */
	white-space: pre-line;
}
</style>
