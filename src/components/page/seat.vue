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
		 <div class="choiceCard"> <!-- 选项卡的设置 -->
		 	  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			    <el-tab-pane label="一楼用餐区" name="first">

						<div class="block">  <!--用于日期和时间的选择-->
						    <span class="demonstration">请选择您的用餐时间</span>
						    <el-date-picker
						       v-model="form.birthdayName"
						        format="yyyy-MM-dd" 
						        value-format="yyyy-MM-dd"
						        @change="selectDay"
						      type="date"
						      placeholder="选择日期">
						    </el-date-picker>
						      <el-select v-model="value" placeholder="请选择" @change="selectTime"> 
							    <el-option
							    	
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value"
							      >
							    </el-option>
							  </el-select>
							  <span class="attention">*每天只有三个时间段可预约</span>
						</div>

						<div class="elradio"><!--单选按钮-->
							<div style="margin-top: 20px">
							    <el-radio v-model="radio8" label="1" border size="medium"  v-on:click.native="changeImg(0,'A1 双人桌')">A1 双人桌</el-radio>
							    <el-radio v-model="radio8" label="2" border size="medium"  v-on:click.native="changeImg(1,'A2  四人桌')">A2  四人桌</el-radio>
							    <el-radio v-model="radio8" label="3" border size="medium"  v-on:click.native="changeImg(2,'A3 六人桌')">A3 六人桌</el-radio>
							    <el-radio v-model="radio8" label="4" border size="medium"  v-on:click.native="changeImg(3,'A4  双人桌')">A4  双人桌</el-radio>
							    <el-radio v-model="radio8" label="5" border size="medium"  v-on:click.native="changeImg(4,'A5 双人桌')">A5 双人桌</el-radio>
							    <el-radio v-model="radio8" label="6" border size="medium"  v-on:click.native="changeImg(5,'A6 四人桌')">A6 四人桌</el-radio>
							</div>
						</div>


						<div class="seatPic"><!--座位图片-->
							<img src="./img/space1.jpg" v-if="status === 0">
							<img src="./img/space2.jpg" v-if="status === 1">
							<img src="./img/space3.jpg" v-if="status === 2">
							<img src="./img/space1.jpg" v-if="status === 3">
							<img src="./img/space2.jpg" v-if="status === 4">
							<img src="./img/space3.jpg" v-if="status === 5">
						</div>

						<div class="elButton"><!--确认按钮-->
							<el-row>
							  <el-button round @click='sub()'>确认预约</el-button>
							</el-row>
						</div>
			    </el-tab-pane>
			    <el-tab-pane label="二楼用餐区" name="second">
						<div class="block">  <!--用于日期和时间的选择-->
						    <span class="demonstration">请选择您的用餐时间</span>
						    <el-date-picker
						      v-model="value3"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
						</div>

						<div class="elradio"><!--单选按钮-->
							<div style="margin-top: 20px">
							    <el-radio v-model="radio8" label="7" border size="medium" v-on:click.native="changeImg(6,'B1 双人桌')">B1 双人桌</el-radio>
							    <el-radio v-model="radio8" label="8" border size="medium" v-on:click.native="changeImg(7,'B2  四人桌')">B2  四人桌</el-radio>
							    <el-radio v-model="radio8" label="9" border size="medium" v-on:click.native="changeImg(8,'B3 六人桌')">B3 六人桌</el-radio>
							    <el-radio v-model="radio8" label="10" border size="medium" v-on:click.native="changeImg(9,'B4  双人桌')">B4  双人桌</el-radio>
							    <el-radio v-model="radio8" label="11" border size="medium" v-on:click.native="changeImg(10,'B5 双人桌')">B5 双人桌</el-radio>
							    <el-radio v-model="radio8" label="12" border size="medium" v-on:click.native="changeImg(11,'B6 四人桌')">B6 四人桌</el-radio>
							</div>
						</div>


						<div class="seatPic"><!--座位图片-->
							<img src="./img/space1.jpg" v-if="status === 6">
							<img src="./img/space2.jpg" v-if="status === 7">
							<img src="./img/space3.jpg" v-if="status === 8">
							<img src="./img/space1.jpg" v-if="status === 9">
							<img src="./img/space2.jpg" v-if="status === 10">
							<img src="./img/space3.jpg" v-if="status === 11">
						</div>

						<div class="elButton"><!--确认按钮-->
							<el-row>
							  <el-button round>确认预约</el-button>
							</el-row>
						</div>
			    </el-tab-pane>
			    <el-tab-pane label="三楼用餐区" name="third">
						<div class="block">  <!--用于日期和时间的选择-->
						    <span class="demonstration">请选择您的用餐时间</span>
						    <el-date-picker
						      v-model="value3"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
						</div>

						<div class="elradio"><!--单选按钮-->
							<div style="margin-top: 20px">
							    <el-radio v-model="radio8" label="13" border size="medium" v-on:click.native="changeImg(12,'C1 双人桌')">C1 双人桌</el-radio>
							    <el-radio v-model="radio8" label="14" border size="medium" v-on:click.native="changeImg(13,'C2  四人桌')">C2  四人桌</el-radio>
							    <el-radio v-model="radio8" label="15" border size="medium" v-on:click.native="changeImg(14,'C3 六人桌')">C3 六人桌</el-radio>
							    <el-radio v-model="radio8" label="16" border size="medium" v-on:click.native="changeImg(15,'C4  双人桌')">C4  双人桌</el-radio>
							    <el-radio v-model="radio8" label="17" border size="medium" v-on:click.native="changeImg(16,'C5 双人桌')">C5 双人桌</el-radio>
							    <el-radio v-model="radio8" label="18" border size="medium" v-on:click.native="changeImg(17,'C6 四人桌')">C6 四人桌</el-radio>
							</div>
						</div>


						<div class="seatPic"><!--座位图片-->
							<img src="./img/space1.jpg" v-if="status === 12">
							<img src="./img/space2.jpg" v-if="status === 13">
							<img src="./img/space3.jpg" v-if="status === 14">
							<img src="./img/space1.jpg" v-if="status === 15">
							<img src="./img/space2.jpg" v-if="status === 16">
							<img src="./img/space3.jpg" v-if="status === 17">
						</div>

						<div class="elButton"><!--确认按钮-->
							<el-row>
							  <el-button round>确认预约</el-button>
							</el-row>
						</div>
			    </el-tab-pane>
			    <el-tab-pane label="四楼用餐区" name="fourth">
						<div class="block">  <!--用于日期和时间的选择-->
						    <span class="demonstration">请选择您的用餐时间</span>
						    <el-date-picker
						      v-model="value3"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
						</div>

						<div class="elradio"><!--单选按钮-->
							<div style="margin-top: 20px">
							    <el-radio v-model="radio8" label="19" border size="medium" v-on:click.native="changeImg(18,'D1 双人桌')">D1 双人桌</el-radio>
							    <el-radio v-model="radio8" label="20" border size="medium" v-on:click.native="changeImg(19,'D2  四人桌')">D2  四人桌</el-radio>
							    <el-radio v-model="radio8" label="21" border size="medium" v-on:click.native="changeImg(20,'D3 六人桌')">D3 六人桌</el-radio>
							    <el-radio v-model="radio8" label="22" border size="medium" v-on:click.native="changeImg(21,'D4  双人桌')">D4  双人桌</el-radio>
							    <el-radio v-model="radio8" label="23" border size="medium" v-on:click.native="changeImg(22,'D5 双人桌')">D5 双人桌</el-radio>
							    <el-radio v-model="radio8" label="24" border size="medium" v-on:click.native="changeImg(23,'D6 四人桌')">D6 四人桌</el-radio>
							</div>
						</div>


						<div class="seatPic"><!--座位图片-->
							<img src="./img/space1.jpg" v-if="status === 18">
							<img src="./img/space2.jpg" v-if="status === 19">
							<img src="./img/space3.jpg" v-if="status === 20">
							<img src="./img/space1.jpg" v-if="status === 21">
							<img src="./img/space2.jpg" v-if="status === 22">
							<img src="./img/space3.jpg" v-if="status === 23">
						</div>

						<div class="elButton"><!--确认按钮-->
							<el-row>
							  <el-button round>确认预约</el-button>
							</el-row>
						</div>
			    </el-tab-pane>
			  </el-tabs>
		 </div>
		 </div>
</template>
<script>
   export default {
    data() {
      return {
      	form: {
        forwardDay: ''//选择器中的日期
      	},
        activeName2: 'first', //用于选项卡的切换				
        value3: '',//用于日期和时间的选择
        radio8: '1',//用于餐位的选择
      	status:0,   //状态显示
      	seat:'',//座位信息
      	subTime:'',//提交时间
      	 options: [{
          value: '中午(12:00~13:00)',
          label: '中午(12:00~13:00)'
        }, {
          value: '下午(15:00~14:00)',
          label: '下午(15:00~14:00)'
        }, {
          value: '晚上(18:00~19:00)',
          label: '晚上(18:00~19:00)'
        }],
         value: '',
         obj:''
      };
    },
    methods: {
      handleClick(tab, event) {  //用于选项卡的切换
        console.log(tab, event);
      },
      changeImg:function(index,index2){ //点击单选框显示对应的图片，将对应的座位信息存入data
     			this.status=index;
     			this.seat=index2;
     			console.log(this.seat)
	  },
	  selectDay(val){//获取日期的值填入data
			      this.form.forwardDay = val;
			      console.log(val);
    },
    selectTime(val1){//获取时间的值填入data
			     var obj={}
			     obj=this.options.find(function(item){
			     	return item.label===val1
			     	console.log(item)
			     })
			     this.obj=val1
			     console.log(val1)
			     
			    
    },
   sub(){ //点击提交按钮 获取当前提交时间 
				var date = new Date();
				var subTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds();
					this.subTime=subTime
					this.$http.post("http://localhost:3000/forward",{ //把data中的数据传给数据库
						seat:this.seat,
						subTime:this.subTime,
						forwardDay:this.form.forwardDay,
						forwardTime:this.obj



					}).then((res)=>{  //如果传入数据库成功就判断一下当前的选项如果在数据库中存在则让单选按钮变为不可选
						if(res.forwardDay===this.forwardDay||res.seat===this.seat||res.forwardTime===this.forwardTime){
							console.log(res.data)//单选框变为不可选状态
							
						}
					})		
			}

   }
  };
</script>
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
	.choiceCard{
		margin-top: 30px;
	}
	.seatPic{
		margin-top: 20px;
		text-align: center;
	}
	.seatPic>img{	
		width:600px;
		height:300px;

	}
	.elButton{
		margin-top: 30px;
		text-align:center;
	}
	.attention{
		font-size: 9px;
		color:red;
	}
	</style>