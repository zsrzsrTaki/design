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

		<div class="elCard">
			<el-tabs type="border-card">
			  <el-tab-pane>
			    <span slot="label"><i class="el-icon-date"></i>全部菜品</span>
			    	<div class="newFood">
							<ul id="newFood">
							 <router-view/>
							 <li v-for='item in  list'  v-on:click='toPage(item.id)'>
							 	<router-link to="/page">
							 		<img v-bind:src="item.Pic_Src"/>
							 		<p>{{item.name}}</p>
							 		<h5><em>类别：</em>{{item.type}} <span>{{item.price}}</span></h5>
							 	</router-link>
							 </li>
							</ul>
			    	</div>
			  </el-tab-pane>
			  <el-tab-pane label="凉菜">
					<div class="newFood">
							<ul id="newFood">
							 <router-view/>
							 <li  v-for='item in  list' v-if="item.class=='cold'"  v-on:click='toPage(item.id)'>
							 	<router-link to="/page">
							 		<img v-bind:src="item.Pic_Src"/>
							 		<p>{{item.name}}</p>
							 		<h5><em>类别：</em>{{item.type}} <span>{{item.price}}</span></h5>
							 	</router-link>
							 </li>
							</ul>
			    	</div>

			  </el-tab-pane>
			  <el-tab-pane label="热菜">
					<div class="newFood">
							<ul id="newFood">
							 <router-view/>
							 <li  v-for='item in  list' v-if="item.class=='hot'"  v-on:click='toPage(item.id)'>
							 	<router-link to="/page">
							 		<img v-bind:src="item.Pic_Src"/>
							 		<p>{{item.name}}</p>
							 		<h5><em>类别：</em>{{item.type}} <span>{{item.price}}</span></h5>
							 	</router-link>
							 </li>
							</ul>
			    	</div>
			  </el-tab-pane>
			  <el-tab-pane label="甜点">
					<div class="newFood">
							<ul id="newFood">
							 <router-view/>
							 <li  v-for='item in  list' v-if="item.class=='sweet'"  v-on:click='toPage(item.id)'>
							 	<router-link to="/page">
							 		<img v-bind:src="item.Pic_Src"/>
							 		<p>{{item.name}}</p>
							 		<h5><em>类别：</em>{{item.type}} <span>{{item.price}}</span></h5>
							 	</router-link>
							 </li>
							</ul>
			    	</div>
			  </el-tab-pane>
			</el-tabs>

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
          this.$http.get("http://localhost:3000/list").then((res)=>{
              this.list=res.data
              console.log(res)
          })
       },
        methods:{
  	          toPage(id){
  		         this.$router.push({path:'/page/'+id})
  	           }
  }
   }
</script>
<style type="text/css" scoped >
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
/* 	.newFood{

width:100%;
height:1400px;
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
.newFood{
	display:flex;
	width:100%;
	height:110%;
	/* background:url(../components/page/img/newsBack7.jpg) no-repeat ;
	  background-size:100%100%;  */
	  background:#CCCC99;
}
.newFood>p{
	width: 100%;
	height:70px;
	line-height:70px;
	color:#14614e;
	font-size: 35px;
	
}
.newFood>p>span{
	float: left;
	margin-left:120px;
	font-weight: 700
}
.newFood>#newFood{
	width:1105px;
	height:100%;
	background:#fbf8f5;
	/* float:right;
	margin-right:100px; */
	margin:0 auto ;
	  background:#CCCC99;
	  border:8px double #990000;
	  border-radius: 10px;

}
.newFood>#newFood>li{
	width:260px;
	height:300px;
	background:#669966;
	float: left;
	margin-left: 13px;
	margin-top: 30px;
	 border-radius: 5%;
	 margin-bottom: 10px;

}
.newFood>#newFood>li>a>img{
	padding-left:10px;
	width:240px;
	height:185px;
	padding-top: 10px;
	padding-bottom: 20px;
}
.newFood>#newFood>li>a>p{
	color:#000;
	font-size:19px;
	text-align: center;
	font-weight: 700;
}
.newFood>#newFood>li>a>h5{
	font-size: 20px;
	color:#f00;
	margin-top: 10px;
	padding-left: 10px;
	
}
.newFood>#newFood>li>a>h5>span{
	font-size: 23px;
	font-weight: 600;
	color:red;
	padding-right: 10px;
	float:right;
}
</style>