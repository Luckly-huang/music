<template>
<div>
	<div class="page">
	
	<!--顶部-->
	<div class="nav">
		
	<ul class="nav-top">
	<!--返回键-->
	<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Heart'})"/></li>
	<!--歌单-->
	<li><p class="song">{{add.name}}</p><p class="songs">({{add.singer}})</p></li>
   <!--右边选择和播放键-->
	<li><img class="auto-img ms" src="../assets/images/zf.png" /></li>
	</ul>
	</div>
	<!--中部播放器图片-->
	<div class="dial">
		<div>
			<img class="auto-img needle" src="../assets/images/stick_bg.png"/>
		</div>
		<div>
			<img class="auto-img round" src="../assets/images/cd_wrapper.png"/>
			<span><img ref='running' class="auto-img picture" :src="add.pic"/></span>
		</div>
		<!--选择列-->
         <van-row type="flex" justify="space-around">
		  <van-col span="4">
		  	<img class="auto-img icon" src="../assets/images/aixin1.png"/>
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
	<!--底部滑条和播放功能-->
	<div class="test">
		<div class="draw">
			<p class="time">00:00</p>
			<div class="slider">
			<van-slider v-model="value" active-color='#676262'/>
			</div>
			<p class="right">03:24</p>
		</div>
		<!--播放功能-->
	 <div class="play">
	 	<div class="move">
		<van-row type="flex" justify="space-around">
		  <van-col span="4"><img class="auto-img list" src="../assets/images/zff.png"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/on a.png"/></van-col>
		  <van-col span="4"><img v-if="isplay" @click="pausesong()" class="auto-img center" src="../assets/images/rightplay.png"/><img v-else @click="pausesong()" class="auto-img center" src="../assets/images/stop.png"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/next.png"/></van-col>
		  <van-col span="4"><img class="auto-img list" src="../assets/images/xzq.png"/></van-col>
        </van-row>
        </div>
	</div>
	</div>
	<!-- autoplay="autoplay"-->
	<div class="audio"  style="width:200px;height:60px;" v-show="false">
			<audio :src="add.url" ref="audios" controls="controls" autoplay="autoplay">
Your browser does not support the audio element.
</audio>
		</div>
	
</div>

</div>
</template>

<script>
	import { Slider } from 'vant';
	
	
	export default {
		
		name: 'Musicpage',
		
		data(){
			
			return {
				value: 0,
				//判断暂停播放
			    isplay:false,
			    //缓存的收藏数组
			    music:[],
			    //单曲的信息
			    add:{},
			    //单曲的id
			    id:''
			}
		},
		
		components:{
			[Slider.name]: Slider
		},
		created() {
			//拿过来的缓存数组
			var ham = localStorage.getItem('hamsterall')
			
			this.music = ham== undefined ? [] : JSON.parse(ham)
			
			console.log('this.music',this.music)
			
			//收藏界面传过来的id
			this.id = this.$route.params.mid;
			console.log('this.id',this.id)
			
			for (var i = 0; i < this.music.length; i++) {
				if( this.id == this.music[i].id){
					this.add = this.music[i]
				}
			}
			console.log('this.add==>',this.add)
		},
		methods: {
			goPath(path){
				this.$router.push(path)
			},
			//播放状态
			pausesong(){
				this.isplay = !this.isplay
				if(this.isplay){
					this.$refs.audios.pause()
					this.$refs.running.style.animationPlayState = "paused"
					console.log('this.refs====',this.$refs.running.style.animationPlayState)
				}else{
					this.$refs.audios.play()
					this.$refs.running.style.animationPlayState = "running"
				}
				
			}
			
           
		}
	}
</script>

<style scoped>
 /*全局色调*/
     /*div{
     	    background: linear-gradient(to bottom, #485048 30%, #27272E 70%
     }*/
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
		height: 1.2rem;
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
		height: 13.5rem;
		position: relative;
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
		height: 2.05rem;
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
		top: -11.6rem;
		margin-top: -11.6rem;
		margin-left: 0.5rem;
	}
	.move{
		margin-left: -0.15rem;
	}
	.list{
		width: 0.7rem;
		height: 0.7rem;
		padding: 0 0.2rem;
	}
	.center{
		width: 1.2rem;
		height: 1.2rem;
		margin-top: -0.25rem;
	}
    .picture{
    	animation: moveFans 7s linear infinite running;
    }
    @keyframes moveFans{
				from{
					transform: rotate(0deg);
				}
				to{
					transform: rotate(360deg);
				}
			}


</style>
