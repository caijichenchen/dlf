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
					<view class="his-item" v-for="(item,index) in hisSearchList" :key="index" :data-name="item" @tap="setSearch">{{item}}</view>
				</view>
			</view>
			<view >
				<view class="cont-title">热门推荐</view>
				<view class="cont-box mt-4">
					<view class="hot-item" v-for="(item,index) in hotCalList" :key="index" :data-name="item" @tap="setSearch">{{item}}</view>
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
				hisSearchList: [],
				showhistory:false,
				hotCalList: ['设计费计算器','监理费计算器','招标代理费计算器','造价咨询费计算器','监理费计算标准-发改价格[2007]670号','招标代理费计算标准-计价格[2002]1980号','设计费计算标准|计价格[2002]10号']
 			}
 		},
		mounted() {
			let searchList = uni.getStorageSync('hisSearchList')
			if(searchList){
				this.hisSearchList = searchList
				this.showhistory = true
			}
		},
 		methods: {
			getSearch(){
				let searchkey = this.searchkey.trim()
				if(!searchkey){
					return uni.showToast({
						icon:'none',
						title:'输入不能为空'
					})
				}
				this.searchkey = ''
				this.showhistory = true
				if(this.hisSearchList.length >= 5){//保留历史记录条数
					this.hisSearchList.pop()
					this.hisSearchList.unshift(searchkey)
				}
				this.hisSearchList.unshift(searchkey)
				this.hisSearchList = [...new Set(this.hisSearchList)]
				uni.setStorageSync('hisSearchList',this.hisSearchList)
				uni.navigateTo({
					url:`./searchResult?key=${searchkey}`
				})
				// $req.request({
				// 	url: '/api/xcx/search',
				// 	data:{
				// 		key: searchkey
				// 	}
				// }).then(res=>{
				// 	console.log(res.data)
				// }).catch(err=>{
				// 	console.log(err)
				// })
			},
			setSearch(e){
				this.searchkey = e.currentTarget.dataset.name
			},
			clearSearchList(){
				this.showhistory = false
				this.hisSearchList = []
				uni.removeStorageSync('hisSearchList')
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