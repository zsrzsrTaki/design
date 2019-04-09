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
		<div id="outFood">
		<div class="food">
			<div class="picture">
				<img v-bind:src="list.Pic_Src"/>
			</div>
			<div class="mainInfo">
				<p id="fName">菜名<span>{{list.name}}</span></p>
				
				<p id="fQuantity">份量<span>{{list.quantity}}</span></p>
				<p id="fPrice">价格<span>{{list.price}}</span></p>
				<p id="fType">类别<span>{{list.type}}</span></p>
				<p id="fInside">配料<span>{{list.inside}}</span>
				</p>	
			</div>	
		</div>
		<div class="fInfo">
				<p id="fInfo"><span>菜品简介</span>{{list.info}}</p>
			</div>
			</div>
</div>
</template>
<script>
import '@/style/reset.css' 
import '@/style/page.css' 
export default{
	 data(){
          return{
              list:[]

          }
       },
        watch:{ //  1）监控路径的变化
          $route:{
              handler(n){     // n相当于this.$route
                 this.id=n.params.id;  //①先获取到最新的参数
                 this.getData()   //②然后调用获取数据的方法
              },
              immediate:true //必须是true。否则加载组件之后不会执行getData
          }
       },
       methods:{
       	getData(){
       		this.$http.get("http://localhost:3000/list/"+this.id).then((res)=>{
              this.list=res.data
              console.log(res)
          })
       	}
       }
}
</script>