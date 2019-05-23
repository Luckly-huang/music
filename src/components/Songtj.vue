<template>
	<div class="add">
		<!--上半部分-->
		<!--头部导航栏-->
		<div class="nav">
			<ul class="nav-top">
				<!--返回键-->
				<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Index'})"/></li>
				<!--歌单-->
				<li><p class="song">歌单</p></li>
				 <!--右边选择和播放键-->
				<li><img class="auto-img xzq" src="../assets/images/xzq.png"/></li>
				<li><img class="auto-img ms" src="../assets/images/播放中.png" /></li>
			</ul>
		</div>
		<div class="above">
		<!--搜素歌单内歌曲-->
		<div class="love">
		<div class="search">
			<van-search
  				v-model="value" placeholder="搜索歌单内歌曲" shape="round"
  				 background='(to left,#9DADB9,#4871AA)'>
           </van-search>
		</div>
		<!--歌单图片和文字-->
		<div class="main">
			<!--左图-->
			<div class="module a">
    	   	   		<div class="tjj" >
    	   	   			<img class="auto-img tj" :src="current.coverImgUrl" />
    	   	   		</div>
    	   	   		<span><img class="auto-img jl" src="../assets/images/bfjl1.png"/></span>
    	   	   		<span class="count">{{current.songNum}}</span>
    	   	 </div>
    	   	 
    	   	 
    	   	 <!--右字-->
    	   	 <div class="bar a">
    	   	 	<p class="title">{{current.title}}</p>
    	   	 	<div class="yzadd">
    	   	 		<img class="belle" :src="current.coverImgUrl" /><span class="yz">{{current.creator}}&nbsp;></span>
    	   	 	</div>
    	   	 	<p class="hi">{{current.description}}</p>
    	   	 	<span><img class="unfold" src="../assets/images/ybjt.png"/></span>
    	   	 </div>
    	   	 
		</div>
         <!--底部图标-->
         <van-row type="flex" justify="space-around">
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/pl.png"/>
		  	<span class="test">242</span>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/zf.png"/>
		  	<span class="test">655</span>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/xz.png"/>
		  	<span class="test">下载</span>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/dx.png"/>
		  	<span class="test">多选</span>
		  </van-col>
		</van-row>
		</div>
		
		</div>
		<!--下半部分-->
		<div class="bottom">
			<!--播放全部标题-->
			<div class="play">
				<ul>
					<li><img class="auto-img bf" src="../assets/images/bfq.png"/>
					   <h1>播放全部</h1>
					   <div class="amount"><span>(</span>{{current.songNum}}首<span>)</span></div>
					   <van-button round type="danger" size='small' class='button'><p>+收藏</p></van-button>
					</li>
				</ul>
			</div>
			<!--单曲歌名-->
			<div class="singer">
				<ul>
					<li class="addsinger" v-for="(item, index) in songs" :key='index' @click="goPath({name: 'Musicpage', params: {uid: item.id},
					query:{index:index}})">
						<span class="number">{{index + 1}}</span>
						
						<div class="songA">
							<p class="goodness">{{item.name}}</p>
							<img class="auto-img heart" src="../assets/images/ax.png"/>
							<p class="zbh">{{item.singer}}&nbsp;-&nbsp;{{item.name}}</p>
						</div>
						
						<div class="bfqd">
						<img class="auto-img bfq" src="../assets/images/bfq2.png"/>
						<img class="auto-img xz" src="../assets/images/xzq.png"/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	const url = 'https://api.itooi.cn/music/netease/highQualitySongList?key=579621905&cat=全部&limit=12'
	
	import { Search,Button } from 'vant';
	
	export default {
		name: 'Songtj',
		data(){
			return{
		    //歌单数组
			playlists:[],
			value: '',
			//单个歌单的数据
			current: {},
			//歌单中的歌曲
			songs:[]
		  }
		},
		components:{
			[Search.name]:Search,
			[Button.name]:Button
		},
		//生命周期初始化
		created(){

				this.getSong(this.$route.params.id);
				
				
				
			},
		methods: {
			goPath(path){
				this.$router.push(path)
			},
			//获取歌单数据
			getSong(id){
				this.axios.post(url).then( result =>{
					
					this.playlists = result.data.data.playlists;
					
					for (var i = 0; i < this.playlists.length; i++) {
						if (this.playlists[i].id == id) {
							this.current = this.playlists[i];
							break;
						}
					};
					console.log('this.current=',this.current)
					
					
				this.axios.post("https://api.itooi.cn/music/netease/songList?key=579621905&id="+ id + "&limit=10&offset=0").then( (r)=> {


                		this.songs = r.data.data.songs
                		
                		console.log('length ==>',this.songs.length)
                		
                		localStorage.setItem('songs',JSON.stringify(this.songs))
                		
                		
                		
                },(err) => {
                		console.log('请求失败处理');
                });
					
				}, err =>{
					console.log('请求失败')
				});
			}
		}
	}
</script>

<style scoped>
	.above{
		background: linear-gradient(to right, #9DADB9 10%, #4871AA 100%);
		height: 25.333em;
	}
	/*头部导航*/
	.nav-top li{
		float: left;
	}
	.nav{
		height: 1.2rem;
		width: 100%;
		background: linear-gradient(to right, #9DADB9 10%, #4871AA 100%);
		position: sticky;
		top: 0;
		z-index: 99;
	}
	.nav .left,.nav .xzq{
		height:0.9rem;
		width: 0.9rem;
	}
	.nav .ms{
		width: 0.6rem;
		height: 0.6rem;
		margin-top: 0.2rem;
		left: 9rem;
		position: absolute;
	}
	.song{
		position: absolute;
		left: 4.5rem;
		font-size: 0.5rem;
		text-align: center;
		line-height: 1rem;
		/*color: white;*/
		font-weight: 400;
	}
	.nav .xzq{
		position: absolute;
		left: 7.5rem;
	}
	/*主要部分*/
	.module{
	 	height: 3.8rem;
	 	position: relative;
	 }
	 .tjj{
	 	width: 3rem;
	 	margin-left: 0.3rem;
	 }
	 .tj{
	 	height: 3rem;
	 	border-radius: 1%;
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
	 .main{
	 	height: 4rem;
	 	width: 100%;
	 	margin-top: 0.6rem;
	 }
	 .bar{
	 	width: 4.3rem;
	 	height: 4rem;
	 	float: right;
	 }
	.a{
		display: inline-block;
	}
	.bar.a{
		position:relative;
		margin-right: 0.8rem;
		width: 4.6rem;
	}
	img.belle{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
	p.title{
		font-size: 0.4rem;
		color: white;
	}
	p.hi{
		 display: -webkit-box;
	 	-webkit-box-orient: vertical;
	 	-webkit-line-clamp: 2;
        overflow: hidden;
        color: gainsboro;
	}
	span.yz{
		display: block;
		float: right;
		position: absolute;
		height: 1rem;
		width: 1rem;
		line-height: 1rem;
		left: 1.1rem;
		top: 1rem;
	}
	.yzadd{
		margin-top: 0.3rem;
	}
	img.unfold{
		float: right;
		width: 0.5rem;
		display: block;
		position: absolute;
		left: 4.8rem;
		top: 2.2rem;
	}
	/*底部图标*/
	.icon{
		display: block;
		height: 0.6rem;
		width: 0.6rem;
	}
	.van-col{
		margin-left: 0.8rem;
	}
	span.test{
		margin-top: 0.15rem;
		display: block;
	}
	.bottom{
		width: 100%;
		height: auto;
	}
	.play{
		width: 100%;
		height: 1rem;
		background-color: lightslategray;
		border-radius: 8% 8% 0 0;
		position: sticky;
		top: 1.2rem;
		z-index: 99;
	}
	img.bf{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
		top: 0.1rem;
	}
	.button{
		position: absolute;
		right: 0.2rem;
		top: 0.1rem;
		margin-bottom: 1.333rem;
	}
	h1{
		position: absolute;
		left: 1rem;
		top: 0.4rem;
		font-weight: bold;
	}
	.amount{
		display: block;
		position: absolute;
		left: 2.5rem;
		top:0.4rem;
		color: gainsboro;
	}
	/*歌单歌曲下面部分*/
	.addsinger{
		width: 100%;
		height: 1.6rem;
		position: relative;
		border-bottom: 0.02rem solid lightgray;
	}
	.number{
		display: block;
		font-size: 0.5rem;
		position: absolute;
		line-height: 1.6rem;
		left: 0.15rem;
		color: darkgray;
	}
	.songA{
		position: absolute;
		left: 1.1rem;
	}
	p.goodness{
		position: absolute;
		line-height: 1.2rem;
		font-size: 0.43rem;
		font-weight: 500;
		display: -webkit-box;
	   -webkit-box-orient: vertical;
	   -webkit-line-clamp: 1;
	   overflow: hidden;
	}
	img.auto-img.heart{
		width: 0.6rem;
		height: 0.6rem;
		margin-left: -0.1rem;
		margin-top: 0.89rem;
	}
	p.zbh{
		margin: -0.5rem 0.5rem;
		display: -webkit-box;
	   -webkit-box-orient: vertical;
	   -webkit-line-clamp: 1;
	   overflow: hidden;
	   width: 6.05rem;
	}
	img.auto-img.bfq{
		width: 0.6rem;
		height: 0.6rem;
		position: absolute;
		top: 0.7rem;
		left: 8rem;
	}
	img.auto-img.xz{
		width: 0.6rem;
		height: 0.6rem;
		position: absolute;
		left: 9rem;
		top: 0.7rem;
	}
</style>