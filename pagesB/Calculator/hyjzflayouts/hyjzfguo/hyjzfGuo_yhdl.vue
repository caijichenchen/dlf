<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">用海方式细分</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
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
			modalName: 'hyjzfGuo_yhdl',
			CustomBar:this.CustomBar,
			fzcd: '',
			fzcdList: [
				{
					name: '填海造地用海',
					data: [
						{ show: '指通过筑堤围割海城。填成建设用地用于工业、交通运输、渔业基础设施.城镇建设等的用海。工业、交通运输、渔业基础设施等填海是指主导用途用于工业、交通运输.渔业基础设施、旅游娱乐、海底工程、特殊用海导的填海造地用海;城镇建设填海是指除工业、交通运输、渔业基础设施等填海以外的其他填海造地用海。' },
						{show: '农业填海造地用海: 指通过筑堤围割海域，填成农用地用于农、林、牧业生产的用海'}
					]
				},
				{
					name: '构筑物用海',
					data: [
						{ show: '非透水构筑物用海:指采用非透水方式构筑不形成有效岸线的码头、突堤、引堤、防波堤、路基、设施基座等构筑物的用海' },
						{ show: '跨海桥梁、海底隧道用海:指占用海面空间或底土用于建设跨海桥梁、海底隧道海底仓储等的用海' },
						{ show: '透水构筑物用海:指采用透水方式构筑码头、平台、海面栈桥、高脚屋、塔架、灌堤、人工鱼礁等构筑物的用海' },
					]
				},
				{
					name: '围海用海',
					data: [
						{ show: '港池、蓄水池:指通过修筑海堤或防浪设施圈围海域，用于港口作业、修造船、蓄水等的用海，含开敞式码头前沿的船舶靠泊和回旋水域' },
						{ show: '盐田用海:指通过筑堤圈围海域用于盐业生产的用海' },
						{ show: '围海养殖用海:指通过筑堤圈围海域用于养殖生产的用海' },
						{ show: '围海式游乐园用海:指通过修筑海堤或防浪设施圈围海域，用于游艇、帆板、冲浪、潜水、水下观光、垂钓等水上娱乐活动的海域' },
						{ show: '其他围海用海:指上述围海用海以外的围海用海' },
					]
				},
				{
					name: '开放式用海 ',
					data: [
						{ show: '开放式养殖用海:指采用筏式、网箱底播或以人工投苗、自然增殖海洋底栖生物等形式进行增养殖生产的用海' },
						{ show: '浴场用海:指供游人游泳嬉水，且无固定设施的用海' },
						{ show: '开放式游乐场用海:指开展游艇帆板、冲浪、潜水、水下观光、垂钓等娱乐活动，且无固定设施的用海' },
						{ show: '专用航道、锚地用海:指供船舶航行、锚泊的用海' },
						{ show: '其他开放式用海:指上述开放式用海以外的开放式用海' },
					]
				},
				{
					name: '其他用海 ',
					data: [
						{ show: ' 人工岛式油气开采用海:指采用人工岛方式开采油气资源的用海' },
						{ show: ' 平台式油气开采用海:指采用固定式平台移动式平台、浮式储油装置及其他辅助设施开采油气资源的用海' },
						{ show: ' 海底电缆管道用海:指铺设海底通信光(电)缆及电力电缆，输水、输气、输油及输送其他物质的管状输送设施的用海' },
						{ show: ' 海砂等矿产开发用海:指开采海砂及其他固体矿产资源的用海' },
						{ show: '  取、排水口用海: 指抽取或排放海水的用海' },
						{ show: '  污水达标排放用海: 指受纳指定达标污水的用海' },
						{ show: '温、冷排水用海:指受纳温、冷排水的用海' },
						{ show: '倾倒用海:指向海上倾倒区倾倒废弃物或利用海床在水下堆放疏浚物等的用海' },
						{ show: '种植用海: 指种植芦苇、翅碱蓬、人工防护林红树林等的用海' },
					]
				},
			]
		};
	},
};
</script>

<style>

</style>
