<template>
	<div class="park_Registration">
		<header>
				<!-- <h1><img src='./img/title.jpg'></h1> -->
		</header>
		<section>

			<div class='mainpart'>
				<div id="ccic">注册</div>
			<div id="oneInfo">
				<span>用户名：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="username"
				  clearable
				  class='carInfo'>
				</el-input>
				<p v-show='flag'>*用户名已存在</p>
			</div>
			<div id='twoInfo'>
				<span>密码：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="password"
				  clearable
				  class='carInfo'>
		        </el-input>
			</div>
			<div id='threeInfo'>
				<span>手机号：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="phoneNum"
				  clearable
				  class='carInfo'>
		        </el-input>
			</div>
			<div id='fourInfo'>
				<span>家庭住址：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="address"
				  clearable
				  class='carInfo'>
		        </el-input>
			</div>
			<el-row >
				 <el-button class='subbtn' @click='upload()' round>注册</el-button> 
			</el-row>
			<div id="prompt">
				<span v-show='flag1'>*输入框中的内容不能为空</span>
			</div>

			</div>
		</section>
	</div>
</template>
<script type="text/javascript">
	export default {
    data() {
      return {
        username: '',
        visitingTime:'',
        password:'',
        phoneNum:'',
        address:'',
        flag:false,
        flag1:false
       
      }
    },
    created(){

    },
    methods:{
    	 upload(){
    	 				if(this.username==''||this.password==''||this.phoneNum==''||this.address==''){

								this.flag1=true //如果输入框中的内容为空，就显示提示内容
								return false
							}	
						this.flag1=false
    	 				var date = new Date();
						var d = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds();
						console.log(d)
						console.log(this.username)
						console.log(this.password)

                        this.$http.post("http://localhost:3000/register",{   //post是传值进去
                              username:this.username,
                              password:this.password,
                              phoneNum:this.phoneNum,
                              address:this.address,
                              visitingTime:d,
                        },
                        {
                              headers:{
                                    "content-type":"application/json"
                              }
                  
		                  }).then((res)=>{	 //如果顺利传入则 清空输入框

		                  	console.log(res.data)
		                  	console.log(res.data.username)
		                  		if(res.data.username.indexOf==-1){
		                  			console.log(111)
		                  		}
		               				this.username='',
			                  		this.password='',
			                  		this.phoneNum='',
			                  		this.address=''
			                  	
		          
		                  }).catch((error)=>{
		                  		if(error.message==="cast date error"){
		                  			console.log("时间转换错误")
		                  		}else if(error.message==="register id exists"){
		                  				this.flag=true
		                  			console.log("登记号已存在")
		                  		}else if(error.message==="upload info error"){
		                  			console.log("数据录入错误")
		                  		}
		                  })
		                  
		              },
		              
    }

  }
</script>
<style type="text/css">
	*{
		margin:0 auto;
		padding:0;
	}
	body{
		width:100%;
		height:100%;
		background: url('./img/login.jpg') no-repeat;
		background-size:100% 100%;
		overflow: hidden;
	}
	.park_Registration{
		width:100%;
		height:1000px;
	}
	.park_Registration>header{
		line-height: 60px;
		padding-left: 30px;
		width:100%;
		height:60px;
		background-color:rgba(0,0,0,0.8);
		font-family:"宋体";
	}
	.park_Registration section{
		display: flex;
		margin:50px auto;
		background-color: rgba(255,255,255,1);
		/* border:2px solid #fff; */
		width:500px;
		height:550px;
		/* border-radius:  5% 5%;  */
		
	}
	.park_Registration section .mainpart{
		margin: auto auto;
		width: 80%;
		height: 80%;
		padding-top: 50px;
		position: relative;

	}
	.park_Registration section .mainpart #ccic{
		position: absolute;
		top:25px;
		left: 150px;
	}
	.el-input__inner{
		border:1px solid #999;
	}
	.mainpart #oneInfo{
		width: 100%;
		display: flex;
		float: left;
		margin-top: 40px;
		margin-bottom: 40px;
		position: relative;
	}
	.mainpart #oneInfo p{
		position: absolute;
		top: 45px;
		left:150px;
		font-size: 13px;
		color: red;
		
	}
	.mainpart #twoInfo{
		width: 100%;
		display: flex;
		float: left;
	}
	.mainpart #threeInfo{
		width:100%;
		display:flex;
		float:left;
		margin-top: 40px;
	}
	.mainpart #threeInfo .carInfo{
		margin-left:5px;
	}
	.mainpart #fourInfo .carInfo{
		margin-left:-5px;
	}
	.mainpart #fourInfo{
		width:100%;
		display:flex;
		float:left;
		margin-top: 40px;
	}
	.mainpart #twoInfo span,.mainpart #oneInfo span,.mainpart #threeInfo span,.mainpart #fourInfo span{
		padding-left: 35px;
		height:40px;
		line-height: 40px;

	}
	.mainpart #twoInfo .carInfo{
		margin-left: 20px;
	}
	.mainpart>span{
		width:30px;
		height:40px;
		line-height: 40px;
	}
	.mainpart .carInfo{
		width:250px;
		float: left;
	}
	.mainpart .el-row{
		height: 10px;
		width: 100%;
	}
	.mainpart .subbtn{
		position: absolute;
		left:31%;
		top:330px ;
		height: 40px;
		width:150px;
		background: #d71c2d;
		color: #fff;
		border:1px solid #d71c2d;
	}
	#prompt{
		position: absolute;
		bottom:70px;
		color: red;
		font-size: 15px;
		width: 100%;
		height:20px;
		line-height: 20px; 
	}
	#prompt span{
		display: block;
		text-align: center;
	}
</style>