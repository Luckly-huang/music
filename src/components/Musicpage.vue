<template>
	<div class="page">
		<!--顶部-->
	<div class="nav">
		
	<ul class="nav-top">
	<!--返回键-->
	<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Songtj'})"/></li>
	<!--歌单-->
	<li><p class="song">{{add.name}}</p><p class="songs">({{add.singer}})</p></li>
   <!--右边选择和播放键-->
	<li><img class="auto-img ms" src="../assets/images/zf.png" /></li>
	</ul>
	</div>
	<!--中部播放器图片-->
	<div class="dial" @click="Lrcvon">
		<div v-show="Lrcyc" @click="Lrcvon">
			<img class="auto-img needle" src="../assets/images/stick_bg.png" ref='rotate'/>
		</div>
		<div v-show="Lrcyc" @click="Lrcvon">
			<img class="auto-img round" src="../assets/images/cd_wrapper.png"/>
			<span><img ref='run' class="auto-img picture" :src="add.pic"/></span>
		</div>
		<!--选择列-->
		<div class="cen" v-show="Lrcyc" @click="Lrcvon">
         <van-row type="flex" justify="space-around">
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/aixin1.png" v-if="isHeart" @click="Hamster"/>
		  	<img class="auto-img icon" src="../assets/images/aixin.png" v-else="!isHeart" @click="Hamster"/>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/xz.png"/>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/pl.png"/>
		  </van-col>
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/xzq.png"/>
		  </van-col>
		</van-row>
		</div>
		<!--隐藏的歌词-->
		<div class="song-text" v-show="!Lrcyc" @click="Lrcvon">
					<h3 id="tex1">想你想的快疯了</h3>
					<h3 id="tex1">想你想的快疯了</h3>
					<h3 id="tex1">想你想的快疯了</h3>
					<h4 id="tex2">想你想的快疯了</h4>
					<h3 id="tex1">想你想的快疯了</h3>
					<h3 id="tex1">想你想的快疯了</h3>
					<h3 id="tex1">想你想的快疯了</h3>
		</div>
	</div>
	<!--底部滑条和播放功能-->
	<div class="test">
		<div class="draw">
			<p class="time">{{currentTime}}</p>
			<!--<div class="slider">
			<van-slider v-model="value" active-color='#676262' id='silder'/>
			</div>-->
			<div id="taio" width="74%"></div>
			<div id="round"></div>
			<div id="scroll"></div>
			<p class="right">{{duration}}</p>
		</div>
		<!--播放功能-->
<div class="play">
	 <div class="move">
		 <van-row type="flex" justify="space-around">
		  <van-col span="4"><img class="auto-img list" src="../assets/images/zff.png"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/on a.png" @click=" playport"/></van-col>
		  <van-col span="4"><img v-if="isplay" @click="pausesong()" class="auto-img center" src="../assets/images/rightplay.png"/><img v-else @click="pausesong()" class="auto-img center" src="../assets/images/stop.png"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/next.png" @click="playNext"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/xzq.png"/></van-col>
          </van-row>
       </div>
</div>
	</div>
	<!--=====音频======-->
	<div class="audio" style="width:0.5rem;height:0.25rem;" v-show="false">
			<audio :src="add.url" ref="audios" controls="controls" autoplay="autoplay" @canplay="getDuration" @timeupdate="updateTime">
				</audio>
		</div>
	<!--================-->
	</div>
</template>

<script>
	import { Slider } from 'vant';
	
	export default {
		name: 'Musicpage',
		
		data() {
			return {
				value: 0,
				//歌单地址
				url:'',
				//本地存储的歌单内的所有歌曲组
			    songs:[],
			    isplay:false,
			    //单曲id
			    uid: '',
			    //单曲数据内容
			    add: {},
			    //单曲
			    song:[],
			    //点击爱心
			    isHeart: true,
			    //构造的对象
			    music:null,
			    //本地收藏的歌曲
			    sc:[],
			    //歌曲总时长
			    duration:"",
			    //当前时间
			    currentTime:"",
			    //滑动条
			    slider:"",
			    //歌词隐藏
			    Lrcyc:true
			}
		},
		
		components: {
			[Slider.name]: Slider
		},
		
		created() {
			
//			console.log('this.$refs.audios',this.$refs.audios)
			//本地获取歌单内的所有歌曲
			var songs = localStorage.getItem('songs');
			
			songs = songs == undefined ? [] : JSON.parse(songs);
			
			this.uid = this.$route.params.uid;
			for (var i = 0; i < songs.length; i++) {
				if( this.uid == songs[i].id) {
					this.add = songs[i]
				}
			}
			console.log('this.add===>',this.add)
			
			 // 所有歌曲
			this.song = songs;
			
             console.log('this.uid',this.uid)
			
			//点进来的歌曲下标
			this.index = this.$route.query.index
			console.log('this.index==>',this.index)
			
			//收藏的本地歌曲
			let scdata = localStorage.getItem("hamsterall")
			this.sc=scdata==undefined?[]:JSON.parse(scdata)
			
//			this.getCurrentTime()
			
		},
		
		methods: {
			//获取总时间
			getDuration(){
			let duration = this.$refs.audios.duration;
			
			var fen = parseInt(duration / 60);
			var miao = parseInt(duration % 60)
			

			miao = miao < 10 ? '0' + miao : miao;
			fen = fen < 10 ? "0" + fen : fen;
			console.log('miao', '0' + miao)
			
			
			
			this.duration = fen + ':' + miao
			
			console.log('this.duration',duration)
			},
			goPath(path){
				this.$router.push(path)
			},
			//更新当前歌曲时间
			updateTime(e) {
				this.currentTime = e.target.currentTime;
				
				if( this.currentTime % 60 < 10){
					
					this.currentTime = parseInt(this.currentTime / 60) + ':0' + parseInt(this.currentTime % 60)
				}else{
					this.currentTime = parseInt(this.currentTime / 60) + ':' + parseInt(this.currentTime % 60)
				}
				
//				var fen = parseInt(this.currentTime / 60) + ":"
				
//				console.log('this.currenTime',this.currentTime)
			},
			
			//暂停播放的方法
			pausesong(){
				
				this.isplay = !this.isplay
				//歌曲进度条
				let audioplay=this.$refs.audios
				let scrolls=document.getElementById('scroll')
				let rounds=document.getElementById('round')
				var time1=setInterval(()=>{
				
					let a=(audioplay.currentTime/audioplay.duration)*277.5
								scrolls.style.width=a+'px'
								rounds.style.left=(43+a)+'px'
				},100)
				
				if(this.isplay){
					//滑动进度条
					let a=(audioplay.currentTime/audioplay.duration)*277.5
					scrolls.style.width=a+'px'
					rounds.style.left=(43+a)+'px'
					this.$refs.audios.pause()//音乐播放键停止
					
					this.$refs.run.style.animationPlayState = "paused"//转盘图片停止
					
					this.$refs.rotate.style.transform = 'rotate(-45deg)'//指针旋转-45deg
				}else{
					this.$refs.audios.play()
					//滑动进度条
					let a=(audioplay.currentTime/audioplay.duration)*277.5
					scrolls.style.width=a+'px'
					rounds.style.left=(43+a)+'px'
					this.$refs.run.style.animationPlayState = "running"//转盘图片旋转
					
					this.$refs.rotate.style.transform = 'rotate(0deg)'//指针旋转0deg
				}
				
			},
			
				
			 //播放下一首
			 playNext() {
			
			 	//爱心为空
			 	this.isHeart = !this.Heart
			 	
			 	//获取所有歌曲的
			    var song = this.song;
			    
			    var index = Number(this.index);//typeof 数据类型要数字的
			       index++;
			    this.index = index;
			   
			    
			    console.log('song===>',song )
			    
			    this.add = song[index];
			    console.log('adddddd',this.add)
			    
			    
			    this.uid = this.add.id
			    
			    console.log('this.uid',this.uid)
			    this.music ={
			 		id: this.uid,
			 		name: this.add.name,
			 		singer: this.add.singer,
			 		lrc: this.add.lrc,
			 		url: this.add.url,
			 		pic: this.add.pic
			 	}
			    console.log('this.music',this.music)
			    
			 
			    
			 },
			 //播放上一首
			 playport() {
			 	
			 	//爱心为空
			 	this.isHeart = !this.Heart
			 	
			 	 //获取所有歌曲
			   var song = this.song
			   
			   var index = Number(this.index)
			   index--
			   this.index = index
			   
			   if( this.index < 0){
			   	this.index = song.length;
			   }
			   console.log("this.index",this.index)
			  
               this.add = song[index]
               
			   this.uid = this.add.id
                console.log(this.uid)               
			   this.music ={
			 		id: this.uid,
			 		name: this.add.name,
			 		singer: this.add.singer,
			 		lrc: this.add.lrc,
			 		url: this.add.url,
			 		pic: this.add.pic
			 	}
			 },
			 
			 //收藏歌单
			 Hamster() {
			 	
			 	if( this.isHeart) {
			 		this.isHeart = false
			 	}else{
			 		this.isHeart = !this.Heart
			 	}
			 	
			 	
			 	this.uid = this.add.id
			 	
			 	for (let i = 0; i < this.sc.length; i++){
			 		
			 		if(this.sc[i].id == this.uid) {
			 			
			 			alert('歌曲已经收藏')
			 			console.log('sc.id',this.sc[i].id)
			 			
			 			return
			 		}
			 	}
			 	this.music ={
			 		id: this.uid,
			 		name: this.add.name,
			 		singer: this.add.singer,
			 		lrc: this.add.lrc,
			 		url: this.add.url,
			 		pic: this.add.pic
			 	}
			 	
			 	this.sc.push(this.music)
			 	
			 	let Hamsterall = window.localStorage
			 	
			 	Hamsterall['hamsterall'] = JSON.stringify(this.sc)
			 },
			 //显示歌词
			 Lrcvon() {
			 	this.Lrcyc = false
			 	
			 	console.log('this.Lrcyc',this.Lrcyc)
			 }
		}
	}
	
</script>

<style scoped>
	
  .page{
    	background: linear-gradient(to bottom, #485048 30%, #27272E 70%);
    	width: 100%;
    	height: 100%;
    }

/*头部导航*/
	.nav-top li{
		float: left;
	}
	.nav{
		height: 1.6rem;
		width: 100%;
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
		font-size: 0.5rem;
		line-height: 1rem;
		/*color: white;*/
		font-weight: 400;
		width: 8rem;
		text-align: center;
		color: white;
		overflow: hidden;
	}
	p.songs{
		font-size: 0.5rem;
		position: absolute;
		top: 0.98rem;
		color: wheat;
		text-align: center;
		overflow: hidden;
		width: 8rem;
	}
	/*中间播放部分*/
	.dial{
		width: 100%;
		height: 13rem;
		position: relative;
		z-index: 8;
	}
	img.auto-img.needle{
		width: 3rem;
		height: 3rem;
		position: absolute;
		top: 1.2rem;
		left: 4.5rem;
		z-index: 9;
	}
	img.auto-img.round{
		width: 7rem;
		height: 7rem;
		position: absolute;
		left: 1.45rem;
		top: 2.25rem;
	}
	img.auto-img.picture{
		width: 4.6rem;
		height: 4.6rem;
		border-radius: 50%;
		position: absolute;
		top: 3.4rem;
		left: 2.6rem;
		
	}
	/*底部图标*/
	.icon{
		display: block;
		height: 0.7rem;
		width: 0.7rem;
	}
	.van-col{
		margin-left: 0.8rem;
		margin-top: 12.5rem;
	}
	.test{
		height: 2.25rem;
		position: relative;
	}
	p.time{
		color: white;
		margin-top: 0.4rem;
		top: -0.555rem;
		position: absolute;
		left: 0.2rem;
	}
	.draw{
		position: relative;
		margin-top: 0.95rem;
	}
	.slider{
		margin-left: 1.5rem;
		width: 7rem;
		margin-top: 1rem;
	}
	p.right{
		color: white;
		float: right;
		margin-top: -0.22rem;
		margin-right: 0.2rem;
	}
	.play{
		top: 0.6rem;
		margin-top: -12.6rem;
		margin-left: 0.5rem;
	}
	.move{
		margin-left: -0.15rem;
	}
	.list{
		width: 0.7rem;
		height: 0.7rem;
		padding: 0 0.2rem;
		margin-top: 0.05rem;
	}
	.center{
		width: 1.2rem;
		height: 1.2rem;
		margin-top: -0.25rem;
	}
	
	.picture{
    	animation: moveFans 5s linear infinite running;
    }
    @keyframes moveFans{
				from{
					transform: rotate(0deg);
				}
				to{
					transform: rotate(360deg);
				}
			}
	/*===========进度条==========*/
	#taio{
		margin: 0.53333rem 10px;
	    display: inline-block;
	    position: relative;
	    top: -0.5rem;
	    width: 74%;
	    height: 0.05333rem;
	    background: lightblue;
	    left: 1rem;
	}
	
	#scroll{
		margin: 0.53333rem 0.26667rem;
	    display: inline-block;
	    position: absolute;
	    top: -0.5rem;
	    left: 0.9rem;
	    /*width: 74%;*/
	    height: 0.05333rem;
	    background: red;
		
	}
	#round{
		display: inline-block;
		background: blue;
		border-radius: 0.13333rem;
		position: absolute;
	    top: -0.08rem;
	    left: 1.14667rem;
		width:  0.26667rem;
		height:  0.26667rem;
		z-index: 999;
		
	}
/*===========歌词=================*/
	#tex1{
		font-size: 0.4rem;
		padding-top: 0.8rem;
	}
	#tex2{
		color: #a49d9d;
		font-size: 0.48rem;
		padding-top: 0.8rem;
	}
	.song-text{
	color: white;
	height: 10rem;
	overflow: hidden;
	margin-top: 1rem;
	position: absolute;
	margin-left: 3.5rem;
}
</style>