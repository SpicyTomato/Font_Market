import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import LoginUp from '../components/LoginUp'
import GoodsPage from '../components/GoodsPage'
import GoodDetail from '../components/GoodDetail'
import AddGood from '../components/AddGood'
import GoodOwner from '../components/GoodOwner'
import UpdatePage from '../components/UpdatePage'
import MyPurchase from '../components/MyPurchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loginUp',
      name: 'loginUp',
      component: LoginUp
    },
    {
      path: '/goodsPage',
      name: 'goodsPage',
      component: GoodsPage
    },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: GoodDetail
    },
    {
      path: '/addGood',
      name: 'addGood',
      component: AddGood
    },
    {
      path: '/goodOwner',
      name: 'goodOwner',
      component :GoodOwner
    },
    {
      path: '/updatePage',
      name: 'updatePage',
      component: UpdatePage
    },
    {
      path:'/myPurchase',
      name:'myPurchase',
      component: MyPurchase
    }

  ]
})
