
<template>
	<div>
		<!--<ul>
			<li v-for="(item,index) in playlists" :key='index'>
				<img class="auto-img a" :src="item.coverImgUrl" />
				<!--{{item.title}}-->
			<!--</li>
		</ul>-->
		
		<div class="audio" style="width:200px;height:60px;">
			<audio :src="url" controls="controls">
Your browser does not support the audio element.
</audio>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Do',
		data() {
			return{
				playlists: [],
				url:''
			}
		},
		created() {
			this.getmsg(),
			this.getadius()
		},
		methods: {
			getmsg(){
                    //发送get请求
                    //  https://api.itooi.cn/music/kugou/search?key=579621905&s=123&limit=100&offset=0&type=song
                    //  http://www.kugou.com/song/#hash=75A809BBDF373EFB9BD04CD15FC4B2D1&album_id=19047165
                    this.axios.post(" https://api.itooi.cn/music/netease/highQualitySongList?key=579621905&cat=全部&limit=10").then(result => {
 
                        this.playlists=result.data.data.playlists
//                      console.log("this.playlists===>", this.playlists)
//                      .data.data.playlists.coverImgUrl
 
                    },function(){
                        console.log('请求失败处理');
                    });
                },
                getadius(){
                	// https://api.itooi.cn/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0
                	
            	this.axios.post("https://api.itooi.cn/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0").then( (r)=> {
                		console.log("rrrr ==>",r.data.data.songs[0].id);
                		var id =r.data.data.songs[0].id;
//              		this.url = r.request.responseURL;
                		
                		this.axios.post("https://api.itooi.cn/music/netease/url?key=579621905&id="+id+"&br=999000").then( r => {
                		console.log(r);
                		this.url = r.request.responseURL;
                		console.log('this.url==>',this.url)
                		
                	},(err) => {
                		console.log('请求失败处理');
                	})
                	},(err) => {
                		console.log('请求失败处理');
                	});
                	
                }

		}
	}
	
</script>
<style scoped>
	.a{
		width: 5.333rem;
		height: 5.3rem;
	}
	
</style>