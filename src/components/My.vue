<template>
<div>
	<!--头部导航栏-->
	<div class="qb" :class="{active:checked}">
	<div class="nav">
		<ul class="nav-top">
				<!--返回键-->
				<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Index'})"/></li>
				<!--歌单-->
				<li><p class="song">我的</p></li>
				 <!--播放键-->
				<li><img class="auto-img ms" src="../assets/images/播放中.png" /></li>
		</ul>
	</div>
	<!--头像栏-->
	<div class="photo">
		 <img class="auto-img pic" src="../assets/images/my.png.jpg"/>
		 <p class="name">樱花树下</p>
		 <span><img class="auto-img edit" src="../assets/images/editor.png"/></span>
	</div>
	<!--图标===-->
	<div class="list">
		<van-row type="flex" justify="space-around">
			  <van-col span="4">
			  	<img class="auto-img icon" src="../assets/images/message.png"/>
			  	<span class="test">消息</span>
			  </van-col>
			  <van-col span="4">
			  	<img class="auto-img icon" src="../assets/images/yc.png"/>
			  	<span class="test">演出</span>
			  </van-col>
			  <van-col span="4">
			  	<img class="auto-img icon" src="../assets/images/cloud.png"/>
			  	<span class="test">心情</span>
			  </van-col>
			  <van-col span="4">
			  	<img class="auto-img icon" src="../assets/images/pf.png"/>
			  	<span class="test">皮肤</span>
			  </van-col>
		</van-row>
	</div>
	<!--功能部分-->
	<div class="bb">
    	<div class="key">
    		<img class="auto-img k" src="../assets/images/set.png"/>
    		<p class="word" :class="{a:checked}">设置</p>
    		<img class="auto-img to" src="../assets/images/ybjt.png"/>
    	</div>
    	<div class="key">
    		<img class="auto-img k" src="../assets/images/moom.png"/>
    		<p class="word" :class="{a:checked}">夜间模式</p>
    		<van-switch  v-model="checked" active-color="#07c160" inactive-color="gray" class='btn' ref='nacht'/>
    	</div>
    	<div class="key">
    		<img class="auto-img k" src="../assets/images/clock.png"/>
    		<p class="word" :class="{a:checked}">定时关闭</p>
    	</div>
    	<div class="key">
    		<img class="auto-img k" src="../assets/images/bfq.png"/>
    		<p class="word" :class="{a:checked}">音乐闹钟 </p>
    	</div>
    	<!--退出登录按钮-->
    	<div class="aus" >
    		<van-button size="large" round class='big' @click="goPath({name: 'Login'})">退出登录</van-button>
    	</div>
    </div>
    </div>
</div>
</template>

<script>
	import { Switch } from 'vant';
	
	export default {
		
		name: 'My',
		
		data(){
			return {
				checked: false
			}
		},
		
		created() {
//			this.onchange()
		},
		
		components:{
			[Switch.name]:Switch
		},
		
		methods: {
			goPath(path) {
				this.$router.push(path)
			}
//			onchange(){
//				console.log('nacht',this.$refs.nacht)
//			}
		}
		
	}
	
</script>

<style scoped>
	/*头部导航栏*/
	/*头部导航*/
	.active{
		background: #294D6A;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.a{
		color: white;
	}
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
	.nav .left{
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
	/*头像部分*/
	.photo{
        position: relative;
        height: 2.2rem;
	}
	.pic{
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		left: 0.3rem;
		position: absolute;
		top: 0.2rem;
	}
	p.name{
		font-size: 0.45rem;
       left: 2.7rem;
       position: absolute;
       top: 1rem;
       text-shadow: 0.05rem 0.05rem 0.1rem darkred
	}
	.edit{
		 width: 1.3rem;
	     height: 1.3rem;
	     position: absolute;
	     left: 8rem;
	     top: 0.5rem;
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
	.list{
		margin-top: 1.2rem;
	}
	/*功能部分*/
	.bb{
		margin-top: 0.8rem;
	}
	.key{
		position: relative;
		height: 1.25rem;
		margin-left: 0.4rem;
		border-bottom: 0.01rem solid lightgray;
	}
	.to{
		width: 0.7rem;
	    height: 0.7rem;
	    float: right;
	    margin-top: 0.5rem;
	}
	p.word {
		position: absolute;
		left: 1rem;
		top: 0.5rem;
		width: 7.2rem;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	    overflow: hidden;
	}
	.k{
		width: 0.6rem;
	    height: 0.6rem;
	    position: absolute;
	    top: 0.4rem;
	}
	.btn{
		margin-left: 7.5rem;
		margin-top: 0.25rem;
	}
	/*退出按钮*/
	.big{
		width: calc( 100% - 0.5rem);
	    margin: auto;
	    padding: 0rem 1rem;
	    margin-left: 0.2rem;
	    background-color: red;
	    color: white;
	}
	.aus{
		width: 100%;
		margin-top: 2.5rem;
	}
</style>