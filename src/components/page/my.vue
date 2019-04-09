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
		<div class="myInfo">
			 <img src="./img/head.jpg"/>
			<p>用户名</p>

		</div>
		<div class='elInfo'>
			<el-tabs :tab-position="tabPosition" style="height: 250px;">
			    <el-tab-pane label="个人信息" class="oneInfo">
						<div>居住地址:<span>xxx市xxx街xxx小区</span></div>
						<div>联系方式:<span>12345678922</span></div>
						<div>年龄:<span>12</span></div>
						<div>性别:<span>女</span></div>
			    </el-tab-pane>
			    <el-tab-pane label="订单管理" class="twoInfo">
			    		
			    		<div id='twoInfo' v-for='item in forward' >
			    			<div>预定时间:<span>{{item.forwardDay}}{{item.forwardTime}}</span> </div>
			    			<div>预定餐位:<span>{{item.seat}}</span></div>
			    			<div>订单提交时间:<span>{{item.subTime}}</span></div>
			    			<el-button round @click.native='del(item.id)'>取消预定</el-button>
			    		</div>
			    </el-tab-pane>
			    <el-tab-pane label="意见信箱" class="threeInfo">
						<el-input
						  type="textarea"
						  :rows="7"
						  placeholder="请输入内容"
						  v-model="textarea"> 
						</el-input>
						 <el-button plain class="plain" @click.native='advice1()'>提交意见</el-button>
			    </el-tab-pane>
			 </el-tabs>
		</div>
	</div>
</template>
<script type="text/javascript">
import '@/style/my.css'
 export default {
    data() {
      return {
        tabPosition: 'left',
        textarea:'',
        forward:[],//用来接收订单信息
        
        subTime:'',//评价提交时间
      };
    },
     created(){
         this.getData()
       },
     methods:{
     	getData(){
     			    this.$http.get("http://localhost:3000/forward").then((res)=>{  //获取订单信息
                	this.forward=res.data
             	    console.log(res)
          	})
     	},
     	del(id){

     		this.$http.delete("http://localhost:3000/forward/"+id).then((res)=>{
     			this.getData()
     		})
     	},
     	advice1(){
     		    var date = new Date();
				var subTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds();
					this.subTime=subTime
     		this.$http.post("http://localhost:3000/adv",{
     			        textarea:this.textarea,
						subTime:this.subTime,
						
     		}).then((res)=>{
     			alert("提交成功")
     			this.textarea=''
     		})
     	}
     }
  };
</script>
<style type="text/css">
	
</style>