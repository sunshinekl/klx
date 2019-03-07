<template>
  <div class="box">
    <img :src="item.imageUrl" alt>

    <h2>{{item.title}}</h2>

    <p>商品详情： <span>{{item.salePoint}}</span></p>
    <p>商品价格： <span>￥{{item.priceStr}}</span></p>
    <p>喜欢： <span>{{item.nice}}</span></p>

    <button @click="add">立即抢购</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    };
  },
  created() {
    this.$store.commit("loading_show");

    this.$http
      .get("/api/detail", { params: { goodId: this.$route.query.goodId } })
      .then(res => {
        this.item = res.data[0];

        this.$store.commit("loading_hide");
      });
  },
  methods:{
		add(){

			if(this.$store.state.token){

				this.$http.get("/api/add",{params:{goodId:this.$route.query.goodId,token:this.$store.state.token}}).then((res)=>{

					if(res.data.code){

            this.$alert("ok","添加成功");
            this.$router.push("/Shopcar")

					}else{

						this.$store.commit("update_token","");
						localStorage.removeItem("token");

						this.$alert("登录过期,即将跳转至登录页","add goods",{
							callback:()=>{
								this.$router.push("/login?url="+this.$route.fullPath)
							}
						});

					}

				})

			}else{
        alert("您还没有登录");
        this.$router.push("/login")
			}

		}
	}
};
</script>
<style scoped>
.box {
  width: 600px;
  margin: 0 auto;
  position:relative;
  left:0;
  overflow: hidden;
}
.box img {
  width: 100%;
  display: block;
}
.box h2 {
  width:100%;
  margin-top: 10px;
  text-align:left
}
.box p {
  width:100%;
  color: #666;
  margin: 10px 0;
  margin-right: 10px;
  text-align:left
}
.box p  span{
	color: orange
}
button {
  position:absolute;
  right:10px;
  bottom:0;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: orange;
  color: white;
  font-size: 20px;
  outline: 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left:120px;
}

button:active {
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}
</style>