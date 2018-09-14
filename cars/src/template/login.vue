<template>
    <div class="login fixed">
        <div class="wrapper animated flipInY">
			<div class="logo"><a href="#"><i class="fa fa-bolt"></i> <span>Maniac</span></a></div>
			<div class="box">
				<div class="header clearfix">
					<div class="pull-left"><i class="fa fa-sign-in"></i> Sign In</div>
					<div class="pull-right"><a href="#"><i class="fa fa-times"></i></a></div>
				</div>
				<form id="loginform" method="post" action="index.html">
					<div class="alert alert-warning no-radius no-margin padding-sm"><i class="fa fa-info-circle"></i> Please sign in to maniac dashboard</div>
					<div class="box-body padding-md">
						<div class="form-group">
							<input type="text" name="username" class="form-control" placeholder="Username" v-model="username" @input="sink('user')"/>
						</div>
						<div class="form-group">
							<input type="password" name="password" class="form-control" placeholder="Password" v-model="password" @input="sink('word')"/>
						</div>          
						<div class="form-group">
							<input type="checkbox" /> <small>Remember me</small>
                        </div>  
                        <div>
                            <p style="color: red">{{wraning}}</p>
                        </div>
						<div class="box-footer">                                                               
							<button type="button" class="btn btn-success btn-block" @click="login">Sign in</button>  
						</div>
					</div>
				</form>
			</div>
			<div class="box-extra clearfix">
				<a href="#" class="pull-left btn btn-xs">Forgotten Password?</a>
				<a href="register.html" class="pull-right btn  btn-xs">Register an account</a>
			</div>
			
			<footer>
				Copyright &copy; 2014 by YAKUZI.
				
				<ul class="list-unstyled list-inline">
					<li><a href="#">Home</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">UI Elements</a></li>
					<li><a href="#">Charts</a></li>
					<li><a href="#">Mobile Apps</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</footer>
		</div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            username:"",
            password:"",
            flag:false,
            wraning:""
        }
    },
    methods:{
        login(){
            if(this.flag){
                let obj=JSON.stringify({name:this.username,pass:this.password})
                window.sessionStorage.setItem("login",obj);
                _hmt.push(['_trackEvent', ' 车轮', 'tap', '登录点击']);
                this.$router.push({
                    path:"/home"
                })
            }else{
                alert("请输入正确的账号或密码！")
            }
        },
        sink(val){
            let reg=/^1[3457]\d{9}$/;
            let reg2=/^[A-Za-z\d]{6,10}$/;
            if(val==='user'){
                let kl=reg.test(this.username);
                this.flag=kl;
                this.wraning=this.flag?"":"账号格式错误"
                return
            }
            if(val==="word"){
                let lk=reg2.test(this.password);
                this.flag=lk;
                this.wraning=this.flag?"":"密码格式有误"
                return 
            }
        }
    },
    mounted(){
        let mink=window.sessionStorage.getItem("login");
        if(mink){
            this.flag=true;
            this.login()
        }
    }
}
</script>
<style>
.fixed{
    margin:0;
    padding:0;
    overflow-y: hidden;
}
</style>