
<script>
	import Vue from 'vue'
	import {mapMutations} from 'vuex';
	export default {
		onLaunch: function() {
				// 初始化用户状态
				// this.$store.commit('initUser')
				// #ifdef APP-PLUS
				// 更新检测
				// this.lib.Update();
				// #endif
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') { 
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			//微信小程序更新
			//#ifdef MP-WEIXIN
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(res=>{
				// 请求完新版本信息的回调
				if(res.hasUpdate){ //有新版本
					updateManager.onUpdateReady(res=>{
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success(res) {
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate();
								}	
							}
						});
					});
				}
			});
			updateManager.onUpdateFailed(function (res) {
				// 新的版本下载失败
				uni.showModal({
					title: '提示',
					content: '检查到有新版本，但下载失败，请检查网络设置',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			});
			//#endif
			
			this.$store.commit('initUser')
		},
		onShow: function() {
			// console.log('App Show')
			let chilren = (pre =>[
				{
					name:`${pre}`
				}
			])('chen')
			console.log(chilren)
		},
		onHide: function() {
			// console.log('App Hide') 
		},
		methods:{
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "/common/css/common.css";
	@import "/common/css/main.css";
	@font-face {
		font-family: 'iconfont';  /* project id 640813 */
		src: url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.eot');
		src: url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.eot?#iefix') format('embedded-opentype'),
		url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.woff2') format('woff2'),
		url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.woff') format('woff'),
		url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.ttf') format('truetype'),
		url('https://at.alicdn.com/t/font_640813_4tdw0mt7mnb.svg#iconfont') format('svg');
	}
	.iconfont{
		font-family:"iconfont" !important;
		font-size:25px;font-style:normal; 
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.padding-xl{
		padding: 0;
	}
	/* #ifdef APP-PLUS */
	button{
		background-color: #00a0ea !important;
	}
	/* #endif */
	
</style>
