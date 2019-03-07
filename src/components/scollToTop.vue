<template>
	
	<div @click="cl" v-show="flag">返回顶部</div>

</template>
<script>
export default{
	data(){
		return{
			flag:false
		}
	},

	mounted(){
		window.addEventListener("scroll",()=>{

			var st=document.body.scrollTop||document.documentElement.scrollTop;

			
			this.flag=st>200;
			

		})
	},

	methods:{
		cl(){

			window.scrollTo(0,0);

		}
	}

}
</script>
<style scoped>
div{
	position: fixed;
	bottom:200px;
	right:50px;
	width: 60px;
	height: 60px;
	background: green;
	color:white;
	text-align: center;
	line-height:30px;
	letter-spacing: 5px;
	cursor: pointer;
	transition: all .5s
}
div:hover{
	transform: rotate(360deg);
	background: orange
}
</style>