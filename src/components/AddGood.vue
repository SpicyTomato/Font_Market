<template >
    <div class="addGood" style="display: flex;justify-content: center;margin-top: 150px">
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
              <el-button style="width: 300px" type="primary" @click="addGood()">添加</el-button>
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
                goodSnap:"",
                name:"",
                category: "",
                usedDegree: "",
                insertBy: "",
                repertory: "",
                insertAt: "",
                size:""
            }
        }
    },
    methods:{
        addGood(){
            this.$axios.post("http://localhost:9000/addGoodB",this.good).then(res =>{
                if(res.data == 200){
                    this.$message(res.data +": 添加成功");
                    this.$router.push({
                    path: '/goodPage'
                });
                }else{
                    this.$message(res.data +": 添加失败");
                }
            })
        }
    }
}
</script>