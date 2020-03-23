 <template>
 	<view class="cu-modal " @touchmove.stop.prevent="moveHandle" :class="{'show':showModalName}">
 		<view class="cu-dialog">
 			<view class="cu-bar bg-white justify-end">
 				<view class="content">{{title}}</view>
 				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
 			</view>
			<view class="num-wrap">
				<view class="num-wrap-li border-b"
					v-for="(item, index) in data" :key="index"  @tap="assignment" :data-val="item.xs">
					<view class="li-left">{{item.content}}</view>
					<view class="li-right">
						<text class="num-box">{{item.xs}}</text>
					</view>
				</view>
				<view class="text-left mx-1 my-1"></view>
			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 import { modalMixin } from '@/common/base/modalMixin';
 export default {
 	mixins: [modalMixin],
 	props: {
 		showModalName:{
			type: String,
			default: null
		},
		data:{
			type:Array,
			default:null
		},
		title:{
			type: String,
			default: '系数表'
		}
 	},
 };
 </script>