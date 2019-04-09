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

		<div class="one">
			<img src="./img/banner2.jpg">
		</div>
		<div class="two">
			<div id="left">
				<span>公司简介</span>
				<p>经营新疆传统美食及精品菜，涵括疆内各地特色美食、民族糕点，以弘扬饮食文化为己任，凭地道风味、民族特色服务，令您足不出户遍尝新疆特色菜肴，品味新疆特色服务。
20多个贵宾包厢具有浓郁的民族风情设计，细致考究的出品，深度开发新疆菜，主营新疆稀有珍品烹煮之精品佳肴，品位常新，应有尽有。</p>
			</div>
			<div id="right">
				<span>发展特色</span>
				<p>新疆饭店是由新疆驻京办事处投资的国际四星级标准商务酒店，集客房、餐饮、娱乐、会议于一体，由新疆鸿福嘉苑酒店管理有限公司管理。
饭店座落于北京西二、三环之间，地理位置闹中取静，交通便利。毗邻金融街、国家政府机关、钓鱼台国宾馆、北京展览馆、北京动物园及大型购物中心。</p>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	html{
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
	.one{
		width:100%;
		height:400px;
	}
	.one img{
		display:block;
		width:1000px;
		height:400px;
		margin:20px auto;
	}
	.two{
		width:1000px;
		height:400px;
		background:#66CC66;
		margin:20px auto;
		font-size:25px;
	}
	.two #left{
		box-sizing: border-box;
		padding:10px;
		width:500px;
		float:left;
		border-right: 2px solid #f00;
	}
	.two #right{
		box-sizing: border-box;
		padding:10px;
		width:500px;
		float:left;
	}
	.two  #left span,.two #right span{
		font-size:30px;
		font-weight: 600;
		color:#669966;
	}
	.two  #left p,.two #right p{
		margin-top: 10px;
	}
</style>





