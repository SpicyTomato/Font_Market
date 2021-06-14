<template>
    <div class="loginUp" style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="loginUp()"></el-input>
              </td>
          </tr>
          <tr>
            <td>登录身份</td>
            <td>
                <el-radio class="radio" v-model="muti.isMerchant" label="1">用户</el-radio>
                <el-radio class="radio" v-model="muti.isMerchant" label="2">商家</el-radio>
              </td>
          </tr>
          <tr>

            <td colspan="2">
              <el-button style="width: 300px" type="primary" @click="loginUp()">登录</el-button>
              <el-button type="text" @click="login()">点此注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                name:"",
                password:""
        },
        muti:{
          isMerchant:'1',
          name:""
        }
    }
    },
    methods:{
        loginUp(){
            if(this.muti.isMerchant == 1){
                 if(this.user.name.length == 0){
                this.$router.push({path: '/login'});
                this.$message("0");
            }else{
                this.$axios.post("http://localhost:9000/loginUp",this.user).then(res => {
                if(res.data == 107){
                    this.$message(res.data + "登陆成功");   
                    this.muti.name = this.user.name;
                    this.$router.push({path: '/goodsPage',query:{muti : this.muti}});
                    sessionStorage.setItem('name',this.muti.name);
            sessionStorage.setItem('isMerchant',this.muti.isMerchant);
                }else{
                    this.$message(res.data + "登陆失败");
                }
            })
            }
            }else{
                 if(this.user.name.length == 0){
                this.$router.push({path: '/login'});
                this.$message("0");
            }else{
                this.$axios.post("http://localhost:9000/loginUpM",this.user).then(res => {
                if(res.data == 107){
                    this.$message(res.data + "登陆成功");
                    this.muti.name = this.user.name;
                    this.$router.push({path: '/goodsPage',query:{muti : this.muti}});
                    sessionStorage.setItem('name',this.muti.name);
            sessionStorage.setItem('isMerchant',this.muti.isMerchant);
                }else{
                    this.$message(res.data + "登陆失败");
                }
            })
            }
            }
        

        },
        login(){
            this.$router.push({path: '/login'});
        }
    }
}
</script>