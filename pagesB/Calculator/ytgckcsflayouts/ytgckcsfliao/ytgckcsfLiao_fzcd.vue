<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程勘探地层复杂程度 </view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
									v-for="(item, index) in fjxsList" 
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
					<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>1、分类时应根据地层情况栏从上到下以最先符合者确定。</view>
							<view>2、岩石坚硬程度等级（极软岩、软岩、较软岩、较硬岩、坚硬岩）按《岩土工程勘察规范》GB50021定性划分。</view>
							<view>3、尾矿及其他工业废渣堆积坝勘察中堆积体的地层等级可确定为Ⅱ类地层，初期坝及子坝人工填土及原始地层的类别可按表中实际类别确定。</view>
							<view>4、沈阳、丹东、营口地区圆砾的地层等级可确定为Ⅱ类地层。</view>
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
		}, 
		indexKey: {
			type:Number,
			default: 0
		}
	},
	data() {
		return {
			modalName: 'ytgckcsfLiao_fzcd',
			CustomBar:this.CustomBar,
			fjxs: '',
			fjxsList: [
				{value:"流塑及软塑的粘性土、粉土、粉细砂、含硬杂质≤10%的填土",xs:"Ⅰ"},
				{value:"可塑～坚硬粘性土，中砂以上砂类土、含硬杂质10%～25%的填土， 湿陷性土，红粘土，膨胀土，盐渍土，残积土，污染土",xs:"Ⅱ"},
				{value:"极软岩、软岩、较软岩、混合土、圆砾、粒径≤50mm含量大于50%的卵（碎）石层、含硬杂质25%～50%的填土",xs:"Ⅲ"},
				{value:"较硬岩、粒径≤100mm含量大于50%的卵（碎）石层、混凝土构件、面层 ，含硬杂质50%～75%的填土。",xs:"Ⅳ"},
				{value:"坚硬岩、粒径＞100mm含量大于50%的卵（碎）石层、漂（块）石层，含硬杂质＞75%的填土。",xs:"Ⅴ"},
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
