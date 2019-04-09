<template>
	<div>
		<header>
			<p>疆味餐厅</p>
		
		<div class="nav">
			<ul>
				 <router-view/>
				<li><router-link to="/home">首页</router-link></li>
				<li><router-link to="/seat">餐位预定</router-link></li>
				<li><router-link to="/menu">菜单预览</router-link></li>
				<li><router-link to="/info">餐厅简介</router-link></li>
				<li><router-link to="/my">我的</router-link></li>
			</ul>	
		</div>
		</header>
		
		<div class="swiper-container"> 
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img src='./img/banner1.jpg'/></div>
			       <div class="swiper-slide"><img src='./img/banner2.jpg'/></div>
			       <div class="swiper-slide"><img src='./img/banner3.jpg'/></div> 
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>	    
		</div>
		
		<div class="outNews">
		<div class="news">
		<h2>最新活动</h2>
			<div id="leftNews">
				<img src="./img/newsPic1.jpg"/>
				<h3>福利 | 满100减50</h3>
				<p>疆味餐厅邀请您参加“吃100减50”活动，欢迎各位吃货小主到店参加！！！</p>
			</div>
			<div id="rightNews">
				<div class="singleNews">
					<h4>春节好礼送不停 <span>2019-2-4</span></h4>
					<p>凡春节期间(2019-2-4 到 2019-2-19)到本店用餐的顾客即可获得神秘礼包一份</p>
				</div>
				<div class="singleNews">
					<h4>春节好礼送不停<span>2019-2-4</span></h4> 
					<p>凡春节期间(2019-2-4 到 2019-2-19)到本店用餐的顾客即可获得神秘礼包一份</p>
				</div>
				<div class="singleNews">
					<h4>春节好礼送不停<span>2019-2-4</span></h4> 
					<p>凡春节期间(2019-2-4 到 2019-2-19)到本店用餐的顾客即可获得神秘礼包一份</p>
				</div>
			</div>
		</div>
		</div>
		
		<div class="newFood">
		<p><span>推荐菜品</span></p>
			<ul id="newFood">
			 <router-view/>
			<li v-for='item in list' v-if="item.recommend=='yes'" v-on:click='toPage(item.id)'>
				<router-link to="/page">
					<img  v-bind:src="item.Pic_Src" >
					<p>{{item.name}}</p>
					<h5><em>类别：</em>{{item.type}} <span>{{item.price}}</span></h5>
					
				</router-link>
			</li>
			</ul>
		</div>
	</div>
</template>
<script>
import '@/style/reset.css' 
import '@/style/home.css'
import  '../../../node_modules/swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
  data () {
    return {
     	news:[],
     	list:[]
    }
  },
  created(){
  		this.$http.get("http://localhost:3000/list").then((res)=>{
              this.list=res.data
              console.log(res)
          })
  },
  mounted(){
	var mySwiper = new Swiper ('.swiper-container', {
  
    loop: true, // 循环模式选项
    
  
    pagination: {  //如果需要分页器
      el: '.swiper-pagination',
    },
     autoplay: {
                                 delay: 3000,
                                 stopOnLastSlide: false,
                                  disableOnInteraction:false,  //false 用户操作后还能自动播放  true 用户操作之后就不动了
                                 },
  })       
  },
  methods:{
  	toPage(id){
  		this.$router.push({path:'/page/'+id})
  	}
  }
}
</script>
<style type="text/css" scoped>
	/* html{
		margin: 0 auto;
		padding:0;
	}
	header{
		width:100%;
		height:80px;
		line-height: 80px;
		background: #fff;
		border-bottom: 7px solid #c00;
		font-size: 40px;
		color:#a0583d;
	}
	header>p{
		float: left;
		padding-left: 30px
	}
	header>.nav{
		float: left;
		padding-left: 650px;
		font-size: 20px;
	}
	header>.nav>ul>li{
		float: left;
		padding-left: 50px;
		
	}
	header>.nav>ul>li>a{
		color: #006134;
		font-weight:500;
		text-decoration: none;
	}
	header>.nav>ul>li>a:hover{
		color:#c00;
	}
	.swiper-container {
	    width:100%;
	    height:500px;
	}  
	.swiper-wrapper{
	 width:100%;
	    height:500px;
	}
	.outNews{
	width:100%;
	height:100%;
	border-top: 3px solid #009999;
	background:url(./img/newsBack6.jpg) no-repeat ;
	  background-size:100%100%; 
	}
	.news{
	width:800px;
	margin:0 auto;
	height:400px;
	border-top:2px do;
	
	
	
	}
	.news h2{
	text-align: center;
	height:50px;
	line-height: 50px;
	color:#336666;
	}
	.news #leftNews{
	margin:10px 30px 30px 30px;
	width:300px;
	float:left;
	}
	.news #leftNews img{
	width:300px;
	height:200px;
	margin-bottom: 20px;
	}
	.news #leftNews h3{
	color:red;
	font-size:27px;
	margin:10px;
	
	}
	.news #leftNews p {
	font-size: 15px;
	}
	.news #rightNews{
	margin:10px 20px 20px 30px;
	width:380px;
	float:left;
	}
	.news #rightNews .singleNews{
	height:80px;
	margin:10px auto;
	border-top:1px solid #ccc;
	padding-top: 10px;
	}
	.news #rightNews .singleNews h4{
	font-size:20px;
	padding-bottom: 20px;
	color:#339966;
	}
	.news #rightNews .singleNews h4 span{
	float: right;
	font-size: 15px;
	color:#999966;
	}
	.newFood{
	width:100%;
	height:800px;
	background:#fbf8f5;
	}
	.newFood>p{
	width: 100%;
	height:60px;
	color:#14614e;
	font-size: 30px;
	padding-top: 20px;
	}
	.newFood>p>span{
	float: left;
	margin-left:120px;
	}
	.newFood>#newFood{
	width:1200px;
	height:600px;
	background:#fbf8f5;
	float:right;
	margin-right:100px;
	
	}
	.newFood>#newFood>li{
	width:260px;
	height:250px;
	background:#e3e3e3;
	float: left;
	margin-left: 13px;
	margin-top: 30px
	}
	.newFood>#newFood>li>a>img{
	width:240px;
	height:185px;
	padding-top: 10px;
	padding-bottom: 20px;
	}
	.newFood>#newFood>li>a>p{
	color:#333;
	font-size:15px;
	} */
</style>