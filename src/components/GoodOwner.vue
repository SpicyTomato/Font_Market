<template scope="scope">
    <div class="goodOwner">
    <p>{{ this.owner }}的商品</p>

      <el-table
      :data="goods"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        label="商品预览">
        <template scope="scope">
            {{ goods[scope.$index].goodSnap }}
            <img src= "/static/IMG_0119.JPG" class="image" style="width: 100px;height: 100px">
            
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名">
      </el-table-column>
      <el-table-column
        prop="usedDegree"
        label="新旧程度">
      </el-table-column>
      <el-table-column
        prop="category"
        label="商品类别">
      </el-table-column>
      <el-table-column
        prop="repertory"
        label="库存">
      </el-table-column>
      <el-table-column
        label="查看">
        <template scope="scope">
            <el-button @click="toGoodDetail(scope.$index)">详情</el-button>
        </template>
      </el-table-column>


      <el-table-column
        label="编辑">
        <template scope="scope">
            <el-button @click="toUpdatePage(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            owner: "",
            goods: [{
                id:"",
                goodSnap:"",
                name:"",
                category: "",
                usedDegree: "",
                insertBy: "",
                repertory: "",
                insertAt: "",
                size:""
            }]
        }
    },
    mounted:function(){
        this.getOwner();
        this.getGoodOwner();
    },
    methods:{
        getOwner(){
            this.owner = this.$route.query.owner;
        },
        getGoodOwner(){
            this.$axios.get("http://localhost:9000/findGoodByOwner?owner=" +this.owner).then(res =>{
                let i = 0;
                
                this.goods=[];

                for (let i = 0; i < res.data.length;i++) {
                    this.goods[i] = res.data[i];
                }
            });
        },
        toGoodDetail(index){
            // this.$message(this.goods[index].id +"");
                this.$router.push({
                path: '/goodDetail',
                query:{id: this.goods[index].id}
                });
            
        },
    toUpdatePage(index){
        this.$router.push({
                path: '/updatePage',
                query:{information: this.goods[index]}
                });
    }
    }
}
</script>