<template>
	<div class="index">
		<div>
			<!--三级视图-->
		<router-view></router-view>
		</div>
		
		<!--头部搜索框-->
		<div id="nav">
			<van-row>
			  <van-col span="3">
			  	<img class="auto-img" src="../assets/images/wanyiyun.png"/>
			  </van-col>
			  <van-col span="18">
			  	<van-search v-model="value" placeholder="Please enter your preferred music" shape="round" @click='goPath({name: "Search"})'>
                 </van-search>
			  </van-col>
			  <van-col span="3">
			  	<img class="auto-img ms" src="../assets/images/播放中.png" />
			  </van-col>
          </van-row>
		</div>
		<!--=========图片轮播==============-->
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item v-for="(item,index) in banners" :key='index'> 
		  	<img class="auto-img" :src="item.url"/></van-swipe-item>
		</van-swipe>
		<!--=======导航信息=========-->
		<div class="bar">
			<ul>
				<li>
					<div class="icon">
						<img class="auto-img a" src="../assets/images/mr.png"/>
						<p class="first">每日推荐</p>
					</div>
				</li>
				<li>
					<div class="icon">
						<img class="auto-img a" src="../assets/images/gd.png"/>
						<p class="two">歌单</p>
					</div>
				</li>
				<li>
					<div class="icon">
						<img class="auto-img a" src="../assets/images/phb.png"/>
						<p class="three">排行榜</p>
					</div>
				</li>
				<li>
					<div class="icon">
						<img class="auto-img a" src="../assets/images/zb.png"/>
						<p class="fore">直播</p>
					</div>
				</li>
			</ul>
		</div>
		<!--底部推荐歌曲-->
		<div class="recommend">
			<p class="add">
	    		<span class="song">推荐歌单</span>
	    		<span class="plaza"><van-button round type="default" size="small">歌单广场</van-button></span>
    	   </p>
    	   <!--=============精品歌单===========-->
    	   <ul class="silde">
    	   	   <li class="menu" v-for="(item,index) in playlists" :key='index'>
    	   	   	<div class="module">
    	   	   		<img class="auto-img tj" :src="item.coverImgUrl" @click="goPath({name: 'Songtj', params: {id: item.id}})"/>
    	   	   		<span><img class="auto-img jl" src="../assets/images/bfjl1.png"/></span>
    	   	   		<span class="count">{{item.songNum}}</span>
    	   	   		<p class="story">{{item.title}}</p>
    	   	   	</div>
    	   	   </li>
    	   </ul>
		</div>
		<p class="base">这里是音乐最底部了哦，亲！</p>
	</div>
</template>

<script>
	import { Search, Swipe, SwipeItem,Button} from 'vant'
	
	const url = 'https://api.itooi.cn/music/netease/highQualitySongList?key=579621905&cat=全部&limit=15'
	export default {
		name: 'Index',
		data(){
			return{
				value: "",
				banners: [
				   {url: require("../assets/images/01.jpg")},
				   {url: require("../assets/images/02.png")},
				   {url: require("../assets/images/03.png")},
				   {url: require("../assets/images/04.png")},
				   {url: require("../assets/images/05.png")},
				   {url: require("../assets/images/06.png")},
				   {url: require("../assets/images/07.png")},
				   {url: require("../assets/images/08.png")}
				],
				playlists:[]
			}
		},
		components:{
			[Search.name]: Search,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Button.name]: Button
		},
		 //生命周期初始化
		created(){
				this.getSong()
			},
		methods: {
			goPath(path){
				this.$router.push(path)
			},
			//获取歌单数据
			getSong(){
				this.axios.post(url).then( result =>{
					
					this.playlists = result.data.data.playlists
					console.log("this.playlists===>", this.playlists)
					
					localStorage.setItem('playlists',JSON.stringify(this.playlists))
					console.log('缓存')
				}, err =>{
					console.log('请求失败')
				});
			}
		}
	}
</script>

<style scoped>
	#nav{
		/*height: 1.3rem;*/
		height: 1.45rem;
		width: 100%;
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 999;
	}
    .ms {
		width: 0.6rem;
		height: 0.6rem;
		margin-top: 10px;
	}
	.bar ul li{
		width: 25%;
		height: 1.333rem;
		float: left;
	}
	/*导航图标*/
	.bar{
		width: 100%;
		height: 2.4rem;
		border-bottom: 1px solid lightgrey;
	}
	.icon{
		display: block;
		width: 1.8rem;
		margin: 0.3rem;
		both:clear;
		position: relative;
	}
	.icon .a{
		width: 1.1rem;
		height: 1.1rem;
		position: absolute;
		left: 0.3rem;
	}
	.first{
		position: absolute;
		left: 0.2rem;
		top: 1.1rem;
	}
	.two{
		position: absolute;
		left: 0.5rem;
		top: 1.1rem;
	}
	.three{
		position: absolute;
		left:0.35rem;
		top: 1.1rem;
	}
	.fore{
		left: 0.45rem;
		top: 1.1rem;
		position: absolute;
	}
	p{
		margin-top: 0.2666rem;
	}
	/*底部推荐歌曲*/
	/*所以li左浮动*/
	.menu{
		float: left;
		width: 28%;
		margin: 0.25rem;
	}
	.add{
		display: block;
		margin: 0.5rem 0.5rem;
	 }
	 .song{
	 	font-weight: bold;
	 	font-size: 0.4rem;
	 }
	 .plaza{
	 	float: right;
	 }
	 .module{
	 	height: 3.8rem;
	 	position: relative;
	 }
	 .tj{
	 	width: 100%;
	 	height: 3rem;
	 	border-radius: 8%;
	 }
	 .jl{
	 	display: block;
	 	position: absolute;
	 	width: 0.6rem;
	 	height: 0.6rem;
	 	top: 0.45rem;
	 	left: 1.38rem;
	 }
	 .count{
	 	display: block;
	 	position: absolute;
	 	/*margin:(1.8rem, -3.5rem);*/
	 	color: white;
	 	font-weight: bold;
	 	top: 0.6rem;
	 	left: 2rem;
	 }
	 .story{
	 	/*2行后就自动生成省略号*/
	 	 display: -webkit-box;
	 	-webkit-box-orient: vertical;
	 	-webkit-line-clamp: 2;
        overflow: hidden;
	 }
	 .silde{
	 	overflow: scroll;
	 }
	 p.base{
	 	margin-bottom: 2rem;
	 	font-size: 0.32rem;
	 	width: 5rem;
	 	margin-left: 2.5rem;
	 	color: gray;
	 }
</style>