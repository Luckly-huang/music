<template>
<div>
	<div class="nav">
			<ul class="nav-top">
				<!--返回键-->
				<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Index'})"/></li>
				<!--歌单-->
				<li><p class="song">我的收藏</p></li>
			</ul>
	</div>
	<!--收藏歌曲内容-->
	<!--播放全部标题-->
	 <div class="play">
		<ul>
			<li><img class="auto-img bf" src="../assets/images/bfq.png"/>
				 <h1>播放全部</h1>
			    <div class="amount"><span>(</span>{{add}}<span>)</span></div>
			</li>
	   </ul>
	</div>	
	<!--歌曲显示部分-->
 <div class="singer">
	<ul>
		<li class="addsinger" v-for="(item,index) in has" :key='index'>
			<span class="number">{{index + 1}}</span>
						
			<div class="songA" @click="goPath({name:'Scmusice', params: {mid: item.id}})">
				<p class="goodness">{{item.name}}</p>
				<img class="auto-img heart" src="../assets/images/ax.png"/>
				<p class="zbh">{{item.singer}}&nbsp;-&nbsp;{{item.name}}</p>
			</div>
						
			<div class="bfqd">
				<img class="auto-img bfq" src="../assets/images/bfq2.png"/>
			    <img class="auto-img xz" src="../assets/images/sc.png" @click="removearr(index)"/>
				</div>
		  </li>
	</ul>
 </div>

	<van-popup v-model="show" position="top" :overlay="isshow">
          <div class="add">
            	<p class="like">我喜欢的歌</p>
         </div>
   </van-popup>
</div>
</template>

<script>
	import { Popup } from 'vant';

	
	export default {
		
		name: 'Heart',
		
		data() {
			
			return{
				show:true,
				isshow:true,
				has:[],
				add:{}
			}
		},
		
		created() {
			//初始化
//			let scdata = localStorage.getItem("hamsterall")
//			this.sc=scdata==undefined?[]:JSON.parse(scdata)
			var ham = localStorage.getItem('hamsterall')
			
			
			this.has = ham== undefined ? [] : JSON.parse(ham)
			
			console.log('hhhh===',ham)
			
			this.add =this.has.length==undefined?0:this.has.length
		},
		
		components:{
			[Popup.name]:Popup
		},
		
		methods:{
			goPath(path) {
				this.$router.push(path)
			},
			//删除单曲
			removearr(index) {
				
				console.log('index',index)
				
				this.has.splice(index,1);
				
				this.add =this.has.length==undefined?0:this.has.length
				
				let Hamsterall = window.localStorage
				
				Hamsterall['hamsterall']= JSON.stringify(this.has)
			}
	}
}
</script>

<style scoped>
	
	/*头部导航*/
	.nav-top li{
		float: left;
	}
	.nav{
		height: 1.2rem;
		width: 100%;
		background: linear-gradient(to right, #AF3429 10%, #B93412 100%);
		position: sticky;
		top: 0;
		z-index: 99;
	}
	.nav .left{
		height:0.9rem;
		width: 0.9rem;
	}
	.song{
		position: absolute;
		left: 4.5rem;
		font-size: 0.5rem;
		text-align: center;
		line-height: 1rem;
		/*color: white;*/
		font-weight: 400;
		color: whitesmoke;
	}
	/*显示收藏*/
	p.like{
		font-size: 0.5rem;
		width: 100%;
		margin: 4rem auto;
		text-align: center;
		color: saddlebrown;;;
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
	/*显示歌曲部分*/
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