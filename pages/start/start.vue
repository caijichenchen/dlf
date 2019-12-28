<template>
	<view class="content"> 
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
		    <block slot="content">快速上手</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="sjf_content">
				<view v-show="TabCur==0" class="content_msg">
					<view class="easystart-try-regis">
						<h3>独立费新注册试用</h3>
						<p>
							新用户首次注册赠送您4积分
						</p>
						<p>
							激活邮箱赠送您3积分<navigator style="display: block;width: 120upx;">点击激活</navigator>
						</p>
						<p>
							您可以使用赠送的积分免费试用计算器
							<navigator>点击试用</navigator>
						</p>
						<p>
							关注独立费微信公众号，回复关键词“试用”，获取VIP<br/>
							体验试用口令，进行兑换。<navigator>兑换地址</navigator>
						</p>
					</view>
					<view class="easystart-try-video">
						<h3>独立费介绍</h3>
						
					</view>
				</view>
				<view v-show="TabCur==1" class="tab-pane">
					<view class="our_server">
						<p>
							独立费采用最新的手机端网页技术pwa,优化手机网页端<br/>,接近原生app的体验
						</p>
					</view>
					<view>
						<view class="carousel_bottom">
							<view class="demonstration_title">
								IOS
							</view>
							<view class="demonstration_describe">
                                iphone、ipad使用系统自带的safari浏览器打开独立费网站<br/>,按
								照图右的操作,保存网站到手机主屏幕,无需下载, 极速秒<br/>开,下次
								即可像使用app一样,从手机桌面直接点击进入支持<br/>系统版本:
								ios11.2及以上.
							</view>
							<view class="carousel" style="height: 1108upx;">
								
							</view>
						</view>
						<view class="carousel_bottom">
							<view class="demonstration_title">
								Android
							</view>
							<view style="height: 490upx;text-align: left;line-height: 85upx;font-size: 28upx;color: #333;">
                                安卓手机目前除小米自带浏览器直接支持外,其他手机需下<br/>
								载手机chrome(谷歌)浏览器. 浏览器下载成功后,按照左图<br/>
								操作,进入独立费手机端网站后,会弹出添加至主屏幕的选项<br/>
								,点击同意,即可保存网站至桌面主屏幕. 或者点击右上角选<br/>
								项,点击保存至桌面.无需下载,下次即可像使用app一样,手<br/>
								机从桌面直接点击进入.
							</view>
							<view class="">
								<p>
									扫码下载chrome浏览器:
								</p>
								<image src="../../static/img/erweima.png" style="height: 240upx;width: 240upx;"></image>
							</view>
							<view class="carousel" style="height: 1108upx;">
								
							</view>
						</view>
					</view>
				</view>
				<view v-show="TabCur==2" class="mei-detail">
					<view class="mei-details">
						<h4>哪些会员可以开发票</h4>
						<p>企业会员和年费会员</p>
					</view>
					<view class="mei-details">
						<h4>发票开具单位</h4>
						<p>必须是企业或者政府机构</p>
					</view>
					<view class="mei-details">
						<h4>开票类型</h4>
						<p>增值税普通发票</p>
					</view>
					<view class="mei-details">
						<h4>如何申请发票</h4>
						<p>
							<navigator>点击申请</navigator>
						</p>
					</view>
				</view>
				<view v-show="TabCur==3" class="content_msg">
					<view class="msg">
						<view>
							
						</view>
					</view>
				</view>
			</view>
		</scroll-view>	
	</view>
</template>

<script>
	import {uniCollapse} from '@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'
	import {uniCollapseItem} from '@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue'
	import {uniTag} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				shows:1,
				TabCur: 0,
				scrollLeft: 0,
				sjf:['试用与视频','手机端','关于发票','支付方式'],
				
			}
		},
		onLoad() {
				
		},
		 components:{
			uniCollapse,
			uniCollapseItem,
			uniTag
		},
		
		methods: {
			 tabSelect(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			 },
			
		}
	}
</script>

<style>
	
	.content {
		text-align: center;
		height: 1250upx;		background-color: #fff;
	}
	/* tabs样式 */
	.sjf_content form{
		text-align: left;
	}
	.cu-form-group{
		position: relative;
	}
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.money{
		position: absolute;
		right: -80upx;
	}
	/*试用与视频*/
	.easystart-try-regis{
		width: 100%;
		background: #21286c;
		padding: 11upx 44upx;
	}
	.easystart-try-regis h3{
		margin: 0;
		text-align: center;
		color: #FFFFFF;
		padding: 11upx 0;
		font-size: 35upx;
	}
	.easystart-try-regis p{
		color: #f2d1ac;
		text-align: left;
		padding: 11upx 0;
		font-size: 30upx;
		display: flex;
		flex-wrap: wrap;
	}
	.easystart-try-regis navigator{
		color: #00a0e0;
		border-bottom: 1px solid #00a0e0;
	}
	.easystart-try-video h3{
		font-size: 35upx;
		padding: 44upx 0 22upx 0;
		color: #000000;
	}
	/*手机端*/
	.tab-pane{
		padding: 11upx;
	}
	.our_server{
		margin: 40upx 0;
		color: #333;
		font-size: 31upx;
		text-align: left;
	}
	.demonstration_title{
		text-align: left;
		font-size: 44upx;
		font-weight: 400;
		color: #333;
		margin-top: 54upx;
	}
	.demonstration_describe{
		height: 344upx;
		text-align: left;
		line-height: 85upx;
		font-size: 28upx;
		color: #333;
	}
	/*关于发票*/
	.mei-detail{
		height: 800upx;
		padding: 0 44upx;
	}
	.mei-details{
		text-align: left;
		color: #656565;
		padding: 22upx 0;
	}
	.mei-detail h4{
		font-size: 33upx;
	}
	.mei-detail p{
		font-size: 29upx;
		line-height: 64upx;
	}
	.mei-details navigator{
		color: #00a0e0;
	}
</style>
