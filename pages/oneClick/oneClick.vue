<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue">
		    <block slot="content">一键计算</block>
		</cu-custom>
		<view >
			<button @tap="addCal('jsdwglflayouts/jsdwglfji/jsdwglji')">项目建设管理费</button>
			<button @tap="addCal('hjyxpjlayouts/hjyxpjji/hjyxpjji')">环境影响评价费</button>
			<button @tap="addCal('sjflayouts/gcsjfji/sjfji')">工程设计费</button>
			<button @tap="addCal('zbdlflayouts/zbdlfji/zbdlfji')">招标代理费</button>
			<button @tap="addCal('gcjsjlflayouts/gcjsjlfji/jlfji')">工程建设监理费</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			addCal(path){
				uni.navigateTo({
					url:`/pages/CalCulator/${path}`
				})
			}
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
