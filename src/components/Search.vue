<template>
	<div>
	<!--搜索框-->
	
	<div class="top">
	<van-search v-model="value" placeholder="Please enter your preferred music"
		 show-action shape="round"  @search='record'>
    <div slot="action"  @click="goPath({name: 'Index'})">取消</div>
    </van-search>
    <p class="add"><span class="singer">按喜欢的歌搜索哦！</span>&nbsp;&nbsp;<span class="right">></span></p>
    </div>
    <!--中部热门搜索-->
    <div class="a" v-if="!green">
    <div class="main">
    <p class="add two"><span class="singer">热门搜索</span></p>
    <van-button round type="default" class='button' size="small">周柏豪</van-button>
    <van-button round type="default" class='button' size="small">走狗</van-button>
    <van-button round type="default" class='button' size="small">你太善良</van-button>
    <van-button round type="default" class='button' size="small">周柏豪</van-button>
    <van-button round type="default" class='button' size="small">够种</van-button>
    <van-button round type="default" class='button' size="small">周柏豪</van-button>
    </div>
    <!--===底部搜索历史记录======-->
    <div class="foot">
    	<p class="add">
    		<span class="singer">搜索历史记录</span>
    		<span class="clear"><van-icon name="delete" size='0.4222rem'/></span>
    	</p>
    	<div><van-button round type="default" class='button' size="small">走狗</van-button></div>
    	<div><van-button round type="default" class='button' size="small">周柏豪</van-button></div>
    	<!--<van-button round type="default" class='button' size="small">周柏豪</van-button>
    	<van-button round type="default" class='button' size="small">周柏豪</van-button>
    	<van-button round type="default" class='button' size="small">周柏豪</van-button>
    	<van-button round type="default" class='button' size="small">周柏豪</van-button>
    	<van-button round type="default" class='button' size="small">周柏豪</van-button>-->
    </div>
    </div>
    <!--==============-->
    	
    	<!--显示部分-->
    	<div class="bb" v-else='green'>
    	<div class="key" v-for="(item,index) in searchMusic" :key="index" @click="goPath({name:'Searmusice',params: {sid: item.id}})">
    		<img class="auto-img k" src="../assets/images/sear.png"/>
    		<p class="word">{{item.singer}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</p>
    	</div>
    	</div>
    	
	</div>
</template>

<script>
	import { Search } from 'vant'
	import { Button } from 'vant'
	import { Icon } from 'vant';
	
	export default{
		name: 'Search',
		data() {

			return{
				value: '',
				showAction: false,
				//搜索出来的歌曲是否显示
				green: false,
				//搜索音乐的数组
				searchMusic:'',
				//搜索框的搜索记录
				searchHistory: [],
				//歌曲id
				sid: ''
			}
		},
		components:{
			[Search.name]:Search,
			[Button.name]:Button,
			[Icon.name]:Icon
		},
		
		created() {
			//获取歌曲id
			this.sid = JSON.parse(localStorage.getItem('searchMusic')).sid
			
			//获取当前用户的本地存储搜索历史记录
			var searchHistoryData = localStorage.getItem('searchHistory')
			
			this.searchHistory = searchHistoryData == undefined ? {} : JSON.parse(searchHistoryData)
		},
		
		methods: {
			goPath(path){
				this.$router.push(path)
			},
			
			//搜索框关键字
			getKey(){
//				var that = this  this指向问题 有时候不知道this的指向方法就用这个试一下 that是指向全局的vue
//				that.value
				this.axios.get(
					'https://api.itooi.cn/music/netease/search?key=579621905&s='+ this.value +'&type=song&limit=100&offset=0'
					
				).then( r => {
//					new Create =>() {
//						this
//					}
//					console.log('r===>', r)
//					console.log('that.valueText',this.value)
                   //请求关键字数据
					this.searchMusic = r.data.data
					console.log(this.searchMusic)
					
					localStorage.setItem("searchMusic",JSON.stringify(this.searchMusic))
					
				}, err => {
					console.log('请求失败')
				})
				
			},
			record(){
				//关键字调用
				this.getKey()
				this.green = true
				
			}
		}
	}
</script>

 
<style scoped>
	.top{
		width: 100%;
		height: 2.4rem;
		border-bottom: 1px solid lightgray;
	}
	.add{
		display: block;
		margin: 0.15rem 0.5rem;
	}
	.singer{
		font-weight: bold;
	}
	.right{
		color: darkgrey;
		font-size: 0.4222rem;
	}
	.main{
		margin-top: 0.6rem;
	}
	.button{
		margin: 0.15rem;
		background: lightgray;
	}
	.clear{
		display: block;
		float: right;
	}
	.foot{
		margin-top: 1.6rem;
	}
	.sear{
		overflow: hidden;
		width: 100%;
		height: auto;
		margin-bottom: 1.333rem;
	}
	p.ss{
		font-size: 0.35rem;
		height: 1.5rem;
		line-height: 1.5rem;
		color: blue;
	}
	.first{
		position:  relative;
		width: 100%;
		height: 1.5rem;
		margin-left: 0.4rem;
		border-bottom: 0.01rem solid lightgray;
	}
	.key{
		position: relative;
		height: 1.25rem;
		margin-left: 0.4rem;
		border-bottom: 0.01rem solid lightgray;
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
</style>