<template>
<div class="updatePage" style="display: flex;justify-content: center;margin-top: 150px">
        <el-card style="width: 400px">
        <div slot="header">
          <span>添加商品</span>
        </div>
        <table>
          <tr>
            <td>商品名</td>
            <td>
              <el-input v-model = "good.name"  placeholder="请输入商品名"></el-input>
            </td>
          </tr>
          <tr>
            <td>商品类别</td>
            <td>
              <el-input v-model= "good.category" placeholder="请输入商品类别"></el-input>
            </td>
          </tr>
          <tr>
            <td>新旧程度</td>
            <td>
              <el-input v-model = "good.usedDegree"  placeholder="请输入新旧程度"></el-input>
            </td>
          </tr>
          <tr>
            <td>库存</td>
            <td>
              <el-input v-model = "good.repertory"  placeholder="请输入库存"></el-input>
            </td>
          </tr>
          <tr>
            <td>尺寸</td>
            <td>
              <el-input v-model = "good.size"  placeholder="请输入"></el-input>
            </td>
          </tr>
          
        <tr>
            <td colspan="2">
              <el-button style="width: 300px" type="primary" @click="update()">提交</el-button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <el-button style="width: 300px" type="primary" @click="deleteGood()">删除</el-button>
              </td>
          </tr>
        </table>
      </el-card>
    </div>
    
</template>

<script>
export default {
        data(){
        return{
            good:{
                id:"",
                name:"",
                category: "",
                usedDegree: "",
                goodSnap: "",
                insertBy: "",
                repertory: "",
                insertAt:"",
                size:""
            }
        }
    },
    mounted:function(){
        this.getGood();
    },
    methods:{
        getGood(){
            this.good = this.$route.query.information;
        },
        deleteGood(){
            this.$axios.delete("http://localhost:9000/deleteGood?id=" +this.good.id).then(res =>{
                if(res.data == 303){
                    this.$message(res.data + "删除成功");
                }else{
                    this.$message(res.data + "删除失败");
                }
            });

        },
        update(){
                this.$axios.post("http://localhost:9000/updateGoodB",this.good).then(res =>{
                if(res.data == 205){
                    this.$message(res.data +": 更新成功");
                }else{
                    this.$message(res.data + ": 更新失败");
                }
                });
        }
    }
}
</script>