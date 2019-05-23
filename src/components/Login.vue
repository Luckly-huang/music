<template>
<div>
	<div class="nav">
		<ul class="nav-top">
				<!--返回键-->
				<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Index'})"/></li>
				 <!--播放键-->
				<li><span class="register" @click="goPath({name: 'Register'})">注册</span></li>
		</ul>
		<div class="pic">
			<div class="add"><img class="auto-img music" src="../assets/images/17.png"/></div>
			<div class="add"><p class="write">网易云</p></div>
		</div>
		<!--手机登录界面-->
		<div class="log">
		<van-row>
			<van-col offset="2" span="20">
				<van-field label="手机号" placeholder="输入手机号" v-model="userInfo.phone" class='ys'/>
				<div class="pw"><van-field type="password" label="密码" placeholder="密码(8-16位)" v-model="userInfo.pwd" class='ys'/></div>
				
				<div class="lg"><van-button class="login-btn" size="large" type="info" @click="login">登录</van-button></div>


			</van-col>
		</van-row>
		</div>

	</div>
</div>
</template>

<script>
	import { CellGroup, Field, Button } from 'vant'
	
	import validForm from '../utils/validForm.js'

	import tip from '../utils/tip.js'
	
	export default {
		
		name: 'Login',
		
		components: {
			[CellGroup.name]: CellGroup,
			[Field.name]: Field,
			[Button.name]: Button
		},
		
		data(){
			
			return{
				//用户信息
				userInfo: {
					phone: '',
					pwd: ''
				}
			}
		},
		
		methods: {
			goPath(path) {
				this.$router.push(path)
			},
			login() {

				//验证手机号
				if (!validForm.validPhone(this.userInfo.phone)) {

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');

				} else if (!validForm.validPwd(this.userInfo.pwd, 8, 16)) {
					//验证密码

					tip.dialogTip('密码只支持!@._字母数字组合', true, this.userInfo, 'pwd');

				} else {

					var userData = localStorage.getItem('users');

					if (userData) {
						//如果存在用户
						this.users = JSON.parse(userData);

						for (var i = 0; i < this.users.length; i++) {

							if (this.users[i].phone == this.userInfo.phone) {
								//如果手机号匹配, 验证密码

								if (this.users[i].pwd == this.userInfo.pwd) {

									return this.$router.push({name: 'Index'});
									

								} else {

									return tip.dialogTip('手机号或者密码不正确');
									
								}

							}

						}

						//不存该用户
						tip.dialogTip('该用户不存在');

					}

				}

			}
		}
	}
</script>

<style scoped>
	.nav{
			background: url(../assets/images/phone.png.jpeg) no-repeat;
			background-size:cover;
			overflow: hidden;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
	 }
   .nav .left{
		height:0.9rem;
		width: 0.9rem;
	}
	 .nav-top{
	 	width: 100%;
	 	height: 1.3rem;
	 }
	 .register{
	 	font-size: 0.5rem;
	    margin-left: 7.8rem;
	    margin-top: -0.6rem;
	    display: block;
	    color: wheat;
        font-weight: 600;
	 }
	 .pic{
	 	width: 100%;
	 	height: 2rem;
	 	position: relative;
	 }
	 .music{
	 	border-radius: 50%;
	 	width:3rem;
	 	margin-left: 0.3rem;
	 	animation: music 5s linear infinite 0s;
	 }
	 p.write{
	 	position: absolute;
	    left: 4rem;
	    top: 1.5rem;
	    color: violet;
	    font-size: 0.5rem;
	    text-shadow: 0rem 0rem 0.1rem red;
	 }
	 @keyframes music{
	 	0%{
	 		transform: scale(1);
	 		box-shadow: 0.1rem 0.1rem 0.1rem darkgray;
	 	}
	 	50%{
	 		transform: scale(1.1) rotate(45deg);
	 		box-shadow: 0.1rem 0.1rem 0.2rem darkgray;
	 	}
	 	100%{
	 		transform: scale(1) rotate(0deg);
	 		box-shadow: 0.1rem 0.1rem 0.1rem darkgray;
	 	}
	 }
	 /*手机登录界面*/
	.log{
		margin-top: 3rem;
	}
	.pw,.lg{
		margin-top: 0.3rem;
	}
	.ys{
		background: #81BDE2;
	}
</style>