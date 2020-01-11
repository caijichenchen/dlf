
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
			this.$store.commit('initUser')
		},
		onShow: function() {
			
			// console.log('App Show')
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
