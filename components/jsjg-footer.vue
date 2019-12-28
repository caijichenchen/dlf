<template >
	<!-- 设计费计算结果 -->
	<view class="navigation-bar" >
			<view class="sjfjsjg" >
			<view class="sjftable">
				<img src="../static/img/tel.jpg">
				<text>设计费计算结果</text>
			</view>
			<view class="cu-form-group">
				<view class="title">收费基价</view>
				<input  name="input" class="sjfInput" v-model="sfjj"/></input>
				<uni-tag text="元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">基本收费</view>
				<input  name="input" class="sjfInput"  v-model="jbsf"/></input>
				<uni-tag text="元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">基准价</view>
				<input  name="input" class="sjfInput" v-model="jzj"/></input>
				<uni-tag text="元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">设计费</view>
				<input  name="input" class="sjfInput" v-model="djjssjf"/></input>
				<uni-tag text="元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">折后设计费</view>
				<input  name="input" class="sjfInput" v-model="zhsjf"/></input>
				<uni-tag text="元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">计算过程</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="多行文本输入框" v-model="jsgc"></textarea>
			</view>
			<view class="cu-form-group">
				<view class="title">直达链接</view>
				<button type="primary">查看计算过程和报告</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			
		},
		updated() {
			
		},
		mounted() {
			
			
		},
		props:{
			config:{
				type:Object,
				default(){
					return {
						title:"",
						
					}
				}
			},
		
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import "../colorui/main.css";
	@import "../colorui/icon.css";
	.sjfjsjg{
		width: 100%;
		margin-top: 20upx;
		height: auto;
	}
	.sjfjsjg .sjftable{
		width: 100%;
		height: 60upx;
	}
	.sjfjsjg .sjftable img{
		width: 35upx;
		height: 45upx;
		float: left;
		margin-left: 20upx;
	}
	.sjfjsjg .sjftable text{
		float: left;
		margin-top: 5upx;
		margin-left: 15upx;
	}
	.sjfInput{
		text-align: left;
		padding-right: 80%;
	}
	.cu-form-group picker::after{
		content: none;
	}
</style>