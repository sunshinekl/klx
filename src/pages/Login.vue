<template>
	
	<div class="view">
		
		<div class="btn">
			<div class="btn_c" id="one" :class="{con:flag}" @click="flag=true">登录</div>
			<div class="btn_c" :class="{con:!flag}" @click="flag=false">注册</div>
		</div>

		<!-- 登录 -->
		<div class="group" v-show="flag">
			<p>
				<input type="text" v-model="login_user" placeholder="请输入用户名">
			</p>
			<p>
				<input type="password" v-model="login_pwd" placeholder="请输入密码">
			</p>
			<p>
				<button @click="login">登录</button>
			</p>
		</div>
		<!-- 注册 -->
		<div class="group" v-show="!flag">
			
			<p>
				<input type="text" v-model="reg_user" placeholder="请输入用户名">
			</p>
			<p>
				<input type="password" v-model="reg_pwd" placeholder="请输入密码">
			</p>
			<p>
				<button @click="reg">注册</button>
			</p>

		</div>

	</div>

</template>
<script>
export default{
	data(){
		return{
			flag:true,
			reg_user:"",
			reg_pwd:"",
			login_user:"",
			login_pwd:""
		}
	},
	methods:{
		login(){

			if(!(/^.{6,12}$/.test(this.login_user))){

				this.$alert("用户名错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}

			if(!(/^\w{6,12}$/.test(this.login_pwd))){

				this.$alert("密码错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}
			
			this.$store.commit("loading_show");

			this.$http.get("/api/login",{params:{userName:this.login_user,password:this.login_pwd}}).then((res)=>{

				this.$store.commit("loading_hide");

				console.log(res.data)

				if(res.data.code){
					// 登录成功 在vuex内部存储token以便被其他组件访问
					this.$store.commit("update_token",res.data.token)

					this.$alert("登陆成功","提示",{
						confirmButtonText: '确定',
						callback:()=>{
							if(this.$route.query.url){
								this.$router.push(this.$route.query.url)
							}else{
								this.$router.push("/")
							}
						}
					})

				}else{

					this.$alert("sorry,错了","提示",{
						confirmButtonText: '确定'
					})

				}

			})


		},
		reg(){

			if(!(/^.{6,12}$/.test(this.reg_user))){

				this.$alert("用户名错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}

			if(!(/^\w{6,12}$/.test(this.reg_pwd))){

				this.$alert("密码错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}
			
			this.$store.commit("loading_show");

			this.$http.get("/api/register",{params:{userName:this.reg_user,password:this.reg_pwd}}).then((res)=>{

				this.$store.commit("loading_hide");

				if(res.data.code){
					// code值为1,证明注册成功,为0注册失败
					this.$alert("注册成功,快去登录吧","response",{
						confirmButtonText: '确定',
						callback:()=>{
							this.flag=true
						}
					})

				}else{

					this.$alert("sorry,we had","response",{
						confirmButtonText: 'I see'
					})

				}

			})

		}
	}
}
</script>
<style scoped>
	.view{
		width:600px;
		margin:10px auto;
		background:#fff;
	}
	.btn{
		overflow:hidden;
	}
	
	.btn .btn_c{
		width:300px;
		height:50px;
		float:left;
		line-height:50px;
		cursor:pointer;
		color:#000
	}
	
	.btn .con{
		background:orange;
		color: #fff
	}
	#one{
		width: 298px;
		border-right: solid 2px green;
	}
	.group input:focus{
		border:2px solid orange;
	}
	.group{
		margin-top:50px;
	}
	.group p{
		text-align: center;
		margin-top:20px;
	}
	.group button{
		width: 300px;
		height: 50px;
		background: orange;
		font-size:16px;
		color:white;
		outline: 0;
	}

	.group input{
		width:500px;
		height:50px;
		text-indent: .5em;
		border-radius: 25px;
		border:2px solid #999;
		outline: 0
	}
</style>