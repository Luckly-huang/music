<template>
	<div id="app">
		<!--<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img class="auto-img" src="../assets/images/01.jpg"/></van-swipe-item>
		  <van-swipe-item><img class="auto-img" src="../assets/images/01.jpg"/></van-swipe-item>
		  <van-swipe-item><img class="auto-img" src="../assets/images/01.jpg"/></van-swipe-item>
		  <van-swipe-item><img class="auto-img" src="../assets/images/01.jpg"/></van-swipe-item>
		</van-swipe>-->
		<div class="add" :key='index'>
		      <li class="song"><span>歌曲:</span> <span>真的爱你</span></li>
		      <li class="author"><span>作者:</span><span>王杰</span></li>
		      <li class="songs"><span>歌词</span></li>
		      <li class="gc">你有一双会说话的眼睛</li>
		    <!--<!--名字：<span>{{item.}}</span>-->
	    </div>
	    <!--<div class="list">
	    	<ul>
	    		<li v-for="(item,index) in body" :key="index">
	    			{{item.author}}
	    		</li>
	    		<li v-for="(item,index) in body" :key='index'>
	    			{{item.url}}
	    		</li>
	    	</ul>
	    </div>-->-->
	</div>
	
</template>

<script>
	import { Swipe, SwipeItem } from 'vant'
	export default {
		name: 'Home',
		data(){
			return{
				Body:[]
			};
		},
		components:{
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem
		},
		created(){
			this.getData();
             this.body = JSON.parse(localStorage.getItem('dataList'))
			console.log(this.body)
		},
		methods:{
			getData(){
				this.axios.get("https://api.mlwei.com/music/api/wy/?key=523077333&id=%E6%8A%96%E9%9F%B3%E7%83%AD%E6%AD%8C&type=so&cache=0&nu=15").then(result =>{
					
					var dataList = result.data.Body;
					this.body = dataList
					console.log('this.body',this.body)
//					localStorage.setItem('dataList', JSON.stringify(dataList));
				});
//				getData();
				
			}
		}
	}
</script>

<style scoped>
	#app{
		background-color: lightseagreen;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	.add{
		width: 100%;
		height: 0.53333rem;
	}
	.add>li{
	    list-style: none;
	}
	.song, .author, .songs .gc{
		text-align: center;
	}
</style>