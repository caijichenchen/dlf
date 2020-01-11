<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程勘探地层复杂程度 </view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view>
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(i,j) in dataList" :key="j" :title="i.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(item,index) in i.list"
										:key="index"
										@tap="choiceCategory" 
										:data-val="item.xs"
										:data-key="index"
										>
								<view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{item.value}}
								</view>
								<span class="spbtn text-white px-1 bg-blue rt" >
									{{item.xs}}
								</span>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
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
			}, 
			indexKey: {
				type:Number,
				default: 0
			}
		},
		data() {
			return {
				modalName: 'ytgcktGuo_fzcd',
				fjxs: '',
				dataList: [
					{
						title:'松散地层',
						list:[
							{value:"流塑、软塑、可塑粘性土，稍密、中密粉土，含硬杂质≤10%的填土",xs:"Ⅰ"},
							{value:"硬塑、坚硬粘性土，密实粉土，含硬杂质≤25%的填土，湿陷性土，红粘土，膨胀土，盐渍土，残积土，污染土",xs:"Ⅱ"},
							{value:" 砂土，砾石，混合土，多年冻土，含硬杂质＞25%的填土",xs:"Ⅲ"},
							{value:"粒径≤50mm、含量＞50%的卵(碎)石层",xs:"Ⅳ"},
							{value:"粒径≤100mm、含量＞50%的卵(碎)石层，混凝土构件、面层",xs:"Ⅴ"},
							{value:"粒径＞100mm、含量＞50%的卵(碎)石层、漂(块)石层",xs:"Ⅵ"},
						]
					},
					{
						title:'岩石地层',
						list:[
							{value:"极软岩",xs:"Ⅰ"},
							{value:"软岩",xs:"Ⅱ"},
							{value:"较软岩",xs:"Ⅲ"},
							{value:"较硬岩",xs:"Ⅳ"},
							{value:"坚硬岩",xs:"Ⅴ"},
						]
					}
				]
			};
		},
		methods: {
			choiceCategory(e){
				this.$emit('chioceModal',{key:this.indexKey,index:e.currentTarget.dataset.key})
				this.$emit('hideModal')
			}
		},

	};
</script>

<style>

</style>
