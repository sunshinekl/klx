<template>
	
	<div class="view">
		
		<div v-show="!$store.state.token" class="tip"> 
			您还没有登录,快去登录吧 <router-link to="/Login?url=/shopcar">login</router-link>
		 </div>

		 <div v-show="$store.state.token">
			
			<div v-if="list.length">
				
				<ul>
					<li class="box" v-for="(item,index) in list">
						<img :src="item.imageUrl" alt>

						<div>
						<strong>{{item.title}}</strong>

						<span> ￥{{item.priceStr}}</span>
						
						<button @click="del(item.Id,index)">X</button>
						</div>
					</li>
				</ul>

			</div>
			<div class="tip" v-else>
				您的购物车空空如也,快去抢购商品吧  <router-link to="/">首页</router-link>
			</div>

		 </div>

	</div>

</template>
<script>
export default{
	data(){
		return{
			list:[]
		}
	},
	created(){

		if(this.$store.state.token){

			this.$http.get("/api/shoplist",{params:{token:this.$store.state.token}}).then((res)=>{
				this.list=res.data;
			})	

		}

	},
	methods:{
		del(id,index){
			this.$http.get("/api/del",{params:{token:this.$store.state.token,goodId:id}}).then((res)=>{
				if(res.data.code){
					alert("删除成功")

					this.list.splice(index,1)
				}else{
					alert("token expired")
				}
			})	
		}
	}
}
</script>
<style scoped>
	.view{
		width:1200px;
		margin:0 auto;
		
	}
	
	.tip{
		height: 500px;
		line-height:500px;
	}

	.box {
		width:550px;
		border-radius:5px;
		background:#fff;
		padding:10px;
		margin:0 auto;
		margin-top:30px;
		overflow:hidden
	}
	.box img {
		float:left;
		width:100px;
		display:block;
	}
	.box div{
		width:400px;
		float:right;
		margin-top:10px;
		margin-left:20px;
		text-align:left;
		position:relative;
		left:0;
	}
	.box strong{
		font-size:25px;
	}
	.box  span{
		color: orange;	
	}
	button {
		position:absolute;
		right:0;
		top:3px;
		width: 50px;
		height: 30px;
		border-radius: 5px;
		background:red;
		color: white;
		font-size: 20px;
		outline: 0;
		border: none;
		cursor: pointer;
	
	}

</style>