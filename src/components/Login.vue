<template>
    <div class = "login" style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model = "userMessage.name"  placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="userMessage.password" placeholder="请输入密码"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <td>性别</td>
            <td>
              <el-input v-model = "userMessage.gender"  placeholder="请输入性别"></el-input>
            </td>
          </tr>
          <tr>
            <td>电子邮箱</td>
            <td>
              <el-input v-model = "userMessage.email"  placeholder="请输入电子邮箱"></el-input>
            </td>
          </tr>
          <tr>
            <td>联系电话</td>
            <td>
              <el-input v-model = "userMessage.phone"  placeholder="请输入联系电话"></el-input>
            </td>
          </tr>
        <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="login()">注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
</template>

<script>
export default({
        data () {
            return { 
                visible: false, 
                number: 0,
                userMessage: {
                    id: "",
                    name: "",
                    phone: "",
                    email: "",
                    gender: "",
                    bankAccount: "",
                    password: ""
                }
                }
        },
        methods:{
            login(){
                
                this.$axios.post('http://localhost:9000/addUserB',this.userMessage).then(response => {
                    if(response.data == 100){
                        this.$message(response.data + ": 注册成功");
                    }
                }).catch(function (error) {
                    this.$message("" + error.data);
                });
            }
        }
    })
</script>
