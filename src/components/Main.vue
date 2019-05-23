<template>
	<div class="main">
		<div>
			<!--二级视图-->
		<router-view></router-view>
		</div>

		<!-- 标签导航 底部-->
		<van-tabbar v-model="active" active-color="red">
			  <van-tabbar-item :icon="item.icon" v-for='(item, index) in tabs' :key='index' @click="goPath(item)">{{item.title}}</van-tabbar-item>
       </van-tabbar>
		
	</div>
</template>

<script>
	//导入组件
	import { Tabbar, TabbarItem } from 'vant'
	import { Button } from 'vant'
	export default {
		name: 'Main',
		
		data() {
			return{
				active: 0,
				tabs:[
				  {title: '音乐', icon: 'audio',path:{name:'Index'}},
				  {title: '视频', icon: 'video',path:{name:'Index'}},
				  {title: '收藏', icon: 'like',path:{name:'Heart'}},
				  {title: '我的', icon: 'manager',path:{name:'My'}}
				]
			}
		},
		
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem
		},
		methods: {
			goPath(item){
				console.log(item)
				 this.$router.push(item.path)
			}
		}
	}
</script>

<style scoped>
</style>