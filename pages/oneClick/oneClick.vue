<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue">
		    <block slot="content">一键计算</block>
		</cu-custom>
		<view >
			<choose></choose>
		</view>
		<view class="oneclick-wrap">
			<view class="cal-wrap">
				<view class="login all-btn" @tap="selectAll">全选<text :class="selectStatus ? 'bg-i':''"></text></view>
				<view v-for="(item,index) in calList" 
					:key="index" class="c-item" 
					:class="loginState ? 'login' : 'nologin'" 
					@tap="getCal"
					:data-item="JSON.stringify(item)"
				>
					{{item.name}}
					<text v-if="loginState" :class="item.check ? 'bg-i' : ''"></text>
					<text v-else :class="item.check ? 'bl-bg-i' : ''"></text>
				</view>
			</view>
			<showcal></showcal>
		</view>
	</view>
</template>

<script>
	import choose from './chooseCategory.vue'
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	import $req from '@/common/req/request.js'
	import jsxmqq from '@/pagesC/Calculator/jsxmqqgzzxflayouts/jsxmqqgzzxfguo/jsxmqqgzzxf_counter_guo'
	import showcal from './showCal.vue'
	export default {
		data() {
			return {
				testList:[
					{
						name: '111',
						check:false
					},
					{
						name: '222',
						check:true
					}
				]
			}
		},
		mounted() {
		},
		methods: {
			...mapMutations(['selectAllCal']),
			...mapActions(['doSelectAll']),
			selectAll(){//全选全不选
				this.doSelectAll()
			},
			getCal(e){//单个计算器操作
				const item = JSON.parse(e.currentTarget.dataset.item)
				if(!this.loginState){
					uni.showToast({
						icon:'none',
						title:`此计算器一次计算消耗${item.integral}积分`
					})
					this.selectAllCal(item)
				}else{
					this.selectAllCal(item)
				}
			},
		},
		computed:{
			...mapState({
				loginState:state=>state.user.loginState,
				calList:state=>state.oneClick.calList
			}),
			...mapGetters(['selectStatus'])
		},
		components:{
			jsxmqq,
			choose,
			showcal
		}
	}
</script>

<style>
	.oneclick-wrap{
		background: #fff;
		padding-left: 2%;
		padding-right: 2%;
		box-sizing: border-box;
		margin-top: 70rpx;
	}
	.cal-wrap {
		width: 100%;
		background: #f9f9f9;
		padding: 14rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}
	.all-btn {
		margin-bottom: 14rpx;
		font-size: 30rpx;
		margin-right: 24rpx;
		position: relative;
		padding: 8rpx 28rpx;
		margin-left: 24rpx;
	}
	.c-item {
		padding: 8rpx 12rpx;
		margin-bottom: 14rpx;
		margin-left: 24rpx;
		font-size: 30rpx;
		margin-right: 24rpx;
		position: relative;
	}
	.login{
		border: 2rpx solid #00a65a;
		color: #00a65a;
	}
	.nologin {
		border: 2rpx solid #00a0e0;
		color: #00A0E0;
	}
	.bg-i {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40rpx;
		height: 28rpx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAyzicyzicyzicyzicyzif///9S1kj1/fWv7Kvp+ujZ9tfI8sWm6qGj6Z6b55WS5Yxn219f2VZA0TY0zyqNqQT5AAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCERROSySnNP9z2rNVmiW30DxBlLQPCZtGhBAAAFsCWQCmUAm8Fsq4OCTAbyltOHgaTeyrWj5i7sdtnHrXl9WwQglQukHVNoDZyCTMMAAAAAASUVORK5CYII=") no-repeat;
	}
	.bl-bg-i {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40rpx;
		height: 28rpx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAAoOoAoOoAoOoAoOoAoOr///8nr+7z+/6c2veP1vbk9f3Q7fu65fmC0PV3zPRCue84te8Sp+sDoeoBoOpVGAzAAAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCAVROSwKzuH+Z7WGSp6vbaB4A6HTPAZtGuhAoANrAj2BnkBP4LNkaOAVgTulOhq420m09QXai8WKbb79Xh+W8RxKDqUPVvADbKCslAcAAAAASUVORK5CYII=") no-repeat;
	}
	.none {
		display: none;
	}
	.category-warp {
		margin-top: 40rpx;
		margin-bottom: 50rpx;
	}
	.content-wrap {
		/* padding: 70rpx 0; */
	}
	.c-title{
		font-size: 36rpx;
		margin-left: 10rpx;
		margin: 40rpx;
	}
	.i-wrap {
		display: flex;
		margin: 14rpx 3%;
	}
	.i-title{
		background: #eee;
		font-size: 28rpx;
		color: #555;
		padding: 12rpx 16rpx;
		border: 2rpx solid #ccc;
	}
	.i-in{
		border: 2rpx solid #ccc;
		height: 70rpx;
	}
	.i-l {
		width: 78%;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
	.i-b{
		width: 65%;
	}
	.b-l{
		border-top-left-radius: 12rpx;
		border-bottom-left-radius: 12rpx;
		border-right: 0;
	}
	.b-r{
		border-left: 0;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
	.nocal {
		color: #007bff;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		line-height: 80rpx;
		height: 80rpx;
	}
	.pro-wrap{
		display: flex;
		flex-wrap: wrap;
	}
	.pro-item {
		margin:14rpx 70rpx 12rpx 0;
		font-size: 30rpx;
	}
</style>
