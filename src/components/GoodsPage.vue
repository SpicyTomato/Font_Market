<template scope="scope">
    <div class = "goodsPage">
    <h1>商品页面</h1>

    <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">
    <el-input
    placeholder="搜索商品名"
    icon="search"
    v-model="name"
    ontex
    :on-icon-click="searchName">
    </el-input>
    
        </div></el-col>

    <el-col :span="6" :offset="6">
        <div v-show="!this.isMerchant">
        <el-button type="primary" @click="myPurchase()">我的购买</el-button>
        </div></el-col>
    <el-col :span="6" :offset="6">
        <div v-show="this.isMerchant">
        <el-button type="primary" @click="addGoods()">发布</el-button>
        <el-button type="primary" @click="myGoods()">我的商品</el-button>
        </div></el-col>
    </el-row>

    <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
          <el-input
    placeholder="搜索商品类别"
    icon="search"
    v-model="category"
    :on-icon-click="searchCategory">
    </el-input>
      </div></el-col>
  <el-col :span="6" :offset="18"><div class="grid-content bg-purple">
      <el-button type="primary" @click="reload()">刷新</el-button>
      </div></el-col>
</el-row>

    


    
      <el-table
      :data="goods"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        label="商品预览">
        <template scope="scope">
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
    </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
            }],
            length:0,
            category:"",
            name:"",
            loading:false,
            isMerchant:false,
            goodSnap:"/static/IMG_0119.JPG",
            name:"",
            muti:{
                isMerchant:"",
                name:""
            }
        }
    },
    mounted:function(){
        this.getAllGoods();
    },
    methods:{
        reload(){
            this.getAllGoods();
            this.muti.name = sessionStorage.getItem('name');
            this.muti.isMerchant = sessionStorage.getItem('isMerchant');
        },
        myPurchase(){
            this.$router.push({
                path: '/myPurchase',
                query:{name : this.muti.name}
                });
        },

        myGoods(){
             this.$router.push({
                path: '/goodOwner',
                query:{owner : this.muti.name}
                });
        },
        getAllGoods(){

            this.muti.name = sessionStorage.getItem('name');
            this.muti.isMerchant = sessionStorage.getItem('isMerchant');

            this.$message(this.muti.name);

            
            if(this.muti.isMerchant == 1){
                this.isMerchant = false;
            }else{
                this.isMerchant = true;
            }
            this.$axios.get('http://localhost:9000/goods').then(res => {
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
                query:{information: this.goods[index]}
                });
        },
        searchCategory(){
                this.$axios.get("http://localhost:9000/findGoodByCategory?category=" + this.category).then(res =>{
                let i = 0;
                
                this.goods=[];

                for (let i = 0; i < res.data.length;i++) {
                    this.goods[i] = res.data[i];
                    
                
                }
            })
        },
        searchName(){
            this.loading = true
            this.$axios.get("http://localhost:9000/findGoodByName?name=" + this.name).then(res =>{
                let i = 0;
                
                this.goods=[];

                for (let i = 0; i < res.data.length;i++) {
                    this.goods[i] = res.data[i];
                    
                
                }
            })
            // this.$message(this.goods.length + "");
            this.loading = false;
        },
        addGoods(){
            this.$router.push({
                path: '/addGood'
                });
        }
    }
}
</script>
