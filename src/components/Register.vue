<template>
	
	<div class="nav">
		<ul class="nav-top">
				<!--返回键-->
				<li><img class="auto-img left" src="../assets/images/fh.png" @click="goPath({name: 'Index'})"/></li>
				 <!--播放键-->
				<li><span class="register"  @click="goPath({name: 'Login'})">登录</span></li>
		</ul>
		<div class="pic">
			<div class="add"><img class="auto-img music" src="../assets/images/17.png"/></div>
			<div class="add"><p class="write">网易云</p></div>
	</div>
	<!--手机注册页面-->
	<div class="log">
		<van-row>
			<van-col offset="2" span="20">
				
				<van-cell-group>
					<div ><van-field label="手机号" v-model="userInfo.phone" placeholder="输入手机号" class="phone"/></div>
					<div class="pw"><van-field type="password" label="密码" v-model="userInfo.pwd" placeholder="密码(8-16位)" class="phone"/></div>

					<div class="que"><van-field type="password" label="确认密码" v-model="userInfo.repwd" placeholder="确认密码" class="phone"/></div>

					<div class="short">
						<van-field label="短信验证码" v-model="userInfo.validcode" class='dx'>
						<van-button slot="button" size="small" type="primary" @click="sendValidCode" :disabled="isDisabled" class='aa'>{{validCodeText}}</van-button>
					    </van-field>
					</div>
					
				</van-cell-group>

				<div class="rg"><van-button class="register-btn" size="large" type="info" @click="regitser">注册</van-button></div>

			</van-col>
		</van-row>
	</div>	

	</div>

</template>

<script>
	import Vue from 'vue'
	import { CellGroup, Field, Button} from 'vant'

	import validForm from '../utils/validForm.js'

	import tip from '../utils/tip.js'

	import tool from '../utils/tool.js'

	export default {

		name: 'Register',

		data() {
			return {

				//随机生成验证码
				validCode: '',

				validCodeText: '发送验证码',

				isDisabled: false,

				//用户列表
				users: null,

				//用户信息
				userInfo: {
					phone: '',
					pwd: '',
					repwd: '',
					validcode: ''
				}
			}
		},

		components: {
			[CellGroup.name]: CellGroup,
			[Field.name]: Field,
			[Button.name]: Button
		},

		methods: {
			//注册
			regitser() {

				//验证手机号
				if (!validForm.validPhone(this.userInfo.phone)) {

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');

				} else if (!validForm.validPwd(this.userInfo.pwd, 8, 16)) {
					//验证密码

					tip.dialogTip('密码只支持!@._字母数字组合', true, this.userInfo, 'pwd');


				} else if (!validForm.validEqual(this.userInfo.pwd, this.userInfo.repwd)) {
					//验证密码

					tip.dialogTip('两次密码不一致', true, this.userInfo, 'repwd');

				} else if (!validForm.validEqual(this.userInfo.validcode, this.validCode) || this.userInfo.validcode.length < 6) {

					//验证密码
					tip.dialogTip('验证码不正确', true, this.userInfo, 'validcode');

				} else {
					//存储之前需要验是否存在该用户
					for (var i = 0; i < this.users.length; i++) {

						if (this.users[i].phone == this.userInfo.phone) {
							tip.dialogTip('该手机号已被注册');
							return;
						}

					}

					//如果不存在该用户, 添加一个用户到用户列表users
					//生成用户id
					var time = new Date();
					var uid = 'vue' + time.getTime();
					var phone = this.userInfo.phone;
					var pwd = this.userInfo.pwd;
					var registerTime = tool.format(time, 'yyyy-MM-dd hh:mm:ss');

					var user = {
						uid,
						phone,
						pwd,
						registerTime
					};

					this.users.push(user);
					var usersData = JSON.stringify(this.users);

					//写入本地存储users
					localStorage.setItem('users', usersData);

					//跳转到登录组件
					this.$router.push({name: 'Login'});


				}

			},

			//发送验证码
			sendValidCode() {

				if (!validForm.validPhone(this.userInfo.phone)) {
					// Dialog.alert({
					// 	title: '手机号码不正确'
					// }).then(() => {
					// 	this.userInfo.phone = '';
					// })

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');
				} else {

					this.isDisabled = true;

					//60秒后自动恢复
					var time = 5;

					this.validCodeText = time + 's后重新发送';

					var timer = setInterval(() => {

						if (time <= 0) {

							this.isDisabled = false;

							this.validCodeText = '发送验证码';

							//清除定时器
							clearInterval(timer);
							time = null;

						} else {

							this.validCodeText = --time + 's后重新发送';

						}

					}, 1000)

					//发送验证码
					this.validCode = validForm.generateValidCode();
//					console.log(this.validCode);
					alert(this.validCode)
				}

				
			},
			
			goPath(path) {
				this.$router.push(path)
			}

		},

		created() {

			var userData = localStorage.getItem('users');

			this.users = userData == undefined ? [] : JSON.parse(userData);

		}

	}
</script>

<style lang="less" scoped>
	.nav{
			background: url(../assets/images/dl.png.jpeg) no-repeat;
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
	 /*注册页面*/
	.log{
		margin-top: 3rem;
		
	}
	.phone{
		background: #D1DEF0;
		color: white;
	}
	.pw,.que,.short{
		margin-top: 0.5rem;
	}
	.van-cell-group{
		background: transparent;
	}
	.aa{
		background: #294D6A;
	}
</style>