 <template>
 	<view>
 		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
 			<block slot="backText">返回</block>
 		    <block slot="content">搜索</block>
 		</cu-custom>
 		<view class="px-3 row my-3 font-md">
			<input class="search-in" type="text" v-model="searchkey" placeholder="请输入关键字">
			<view class="sh-btn" @tap="getSearch">搜索</view>
 		</view>
 		<view class="font-md px-3">
			<view class="mb-3" v-if="showhistory">
				<view style="display: flex;">
					<view class="cont-title">历史记录</view>
					<view class="clear-btn" @tap="clearSearchList">清空</view>
				</view>
				<view class="cont-box mt-4" >
					<view class="his-item" v-for="(item,index) in historySearchList" :key="index" @tap="goSearch(item)">{{item}}</view>
				</view>
			</view>
			<view >
				<view class="cont-title">热门推荐</view>
				<view class="cont-box mt-4">
					<view class="hot-item" v-for="(item,index) in hotCalList" :key="index" @tap="goSearch(item)">{{item}}</view>
				</view>
			</view>
 		</view>
 	</view>
 </template>
 <script>
	import $req from '@/common/req/request.js'
 	export default {
 		data() {
 			return {
				searchkey: '',
				historySearchList: uni.getStorageSync('historySearchList') || [],
				hotCalList: ['设计费计算器','监理费计算器','招标代理费计算器','造价咨询费计算器','监理费计算标准-发改价格[2007]670号','招标代理费计算标准-计价格[2002]1980号','设计费计算标准|计价格[2002]10号']
 			}
 		},
 		methods: {
			getSearch(){ //保存历史记录
				let searchkey = this.searchkey.trim()
				if(!searchkey){
					return this.$msg('输入不能为空')
				}
				const index = this.historySearchList.indexOf(searchkey)
				if(index > 0){ //存在且记录不在第一位置顶
					this.historySearchList.unshift(this.historySearchList.splice(index,1)[0])
				}else if(this.historySearchList.length == 5){ //保持历史记录为5条
					this.historySearchList.pop()
					this.historySearchList.unshift(searchkey)
				}else{
					this.historySearchList.unshift(searchkey)
				}
				uni.setStorageSync('historySearchList',this.historySearchList)
				this.searchkey = ''
				this.goSearch(searchkey)
			},
			goSearch(val){ //搜索
				uni.navigateTo({
					url:`./searchResult?key=${val}`
				})
			},
			clearSearchList(){ //清空历史记录
				this.historySearchList = []
				uni.removeStorageSync('historySearchList')
			}
 		},
		computed:{
			showhistory(){
				return this.historySearchList.length
			}
		}
 	}
 </script>
 <style>
 	page {
 		background: #FFF;
 	}
	.search-in {
		width: 80%;
		background: #f5f5f5;
		height: 70rpx;
		padding-left: 40rpx;
		border-radius: 70rpx;
	}
	.sh-btn{
		width: 20%;
		text-align: center;
		line-height: 70rpx;
		color: #656565;
	}
	.his-item {
		padding: 6rpx 12rpx;
		background: #f5f5f5;
		color: #000000;
		margin-right: 22rpx;
		margin-bottom: 26rpx;
	}
	.clear-btn {
		margin-left: auto;
		background: #f5f5f5;
		color: #ccc;
		border-radius: 8rpx;
		padding: 6rpx 14rpx;
	}
	.cont-title {
		font-weight: 700;
		text-align: left;
	}
	.cont-box {
		display: flex;
		flex-wrap: wrap;
	}
	.hot-item {
		background: #f1f8ff;
		color: #0366d6;
		margin-right: 22rpx;
		margin-bottom: 26rpx;
		padding: 6rpx 12rpx;
	}
 </style>