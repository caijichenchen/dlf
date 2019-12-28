<!-- <template>
	<view>
		<button @click="getbz">标准</button>
		<view v-html="bzhtml" style="width: 100%; overflow: hidden;white-space:normal;text-align: left;padding-left: 6upx;padding-right: 6upx;box-sizing: border-box;"></view>
		
	</view>
</template>

<script>
	import 
	export default {
		data(){
			return {
				bzhtml:''
			}
		},
		methods:{
			getbz() {
				uni.request({
					url:this.$serverUrl+'/api/xcx/standard/detail?id=104',
					method: 'GET',
					dataType:'json',
					success:(res)=>{
						this.bzhtml = res.data.message.body
						
						console.log(res)
					},
					fail:(res)=>{
						console.log(res)
					}
				})
			}
		},
	}
</script>

<style>
</style> -->
