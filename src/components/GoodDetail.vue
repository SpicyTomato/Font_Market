<template>
    <div class="goodDetail">
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple">
      <h1>{{ information.insertBy }}的商品</h1>
      <el-button type="primary" @click="toOwner()">他的商品</el-button>

      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
      <img src="/static/IMG_0119.JPG" class="image" style="width: 300px;height: 300px"> 
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
      <p>擦亮时间:{{ this.information.insertAt }}</p>
      <p>商品名:{{ this.information.name }}</p>
      <p>新旧程度:{{ this.information.usedDegree }}</p>
      <p>库存:{{ this.information.repertory }}</p>
      <el-button type="primary" @click="purchase()">purchase</el-button>
      

      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            information:{
                id:"",
                name:"",
                category: "",
                usedDegree: "",
                goodSnap: "",
                insertBy: "",
                repertory: "",
                insertAt:"",
                size:""
            },
            name:""
        }
    },
    mounted:function(){
        this.getInformation();
    },
    methods:{
        getInformation(){
            if(this.$route.query.information.id != null){
                this.information = this.$route.query.information;
                sessionStorage.setItem('goodId',this.information.id);
            }else{
                this.information.id = sessionStorage.getItem('goodId');
            }

            this.$axios.get("http://localhost:9000/findGoodById?id="+this.information.id).then(res =>{
                this.information = res.data;
            });
            

            

        },
        purchase(){
            this.information.repertory--;
            if(this.information.repertory>=0){
                this.$axios.post("http://localhost:9000/purchase/?name=" + sessionStorage.getItem('name'),this.information).then(res =>{
                if(res.data == 205){
                    this.$message(res.data +": 购买成功");
                }else{
                    this.$message(res.data + ": 购买失败");
                    this.information.repertory++;
                }
            })
            }else{
                this.$message("购买失败");
                    this.information.repertory++;
            }

        },
        toOwner(){
            this.$router.push({
                path: '/goodOwner',
                query:{owner : this.information.insertBy}
                });
        }
    }
}
</script>