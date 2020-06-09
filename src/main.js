import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Vuex from "vuex"
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    todos:[
    {"id":1,"content":"study","completed":false,editing:false},
    {"id":2,"content":"eat","completed":true,editing:false},
    {"id":3,"content":"sleep","completed":false,editing:false},
    {"id":4,"content":"run","completed":false,editing:false}
    ],
    v:true,
    inpStr:""
  },
  mutations:{
    //添加方法
    addData(state,data){ 
      state.todos.push(data)
    },
    //事件后面的选择清楚方法
    delete(state,id){
      for (let i=0;i<state.todos.length;i++) {
        if(state.todos[i].id==id){
          state.todos.splice(i,1)
        }
      }
    },
    //clear completed按钮方法
    clearTodos(state){
      state.todos =  state.todos.filter(function(item){
        return !item.completed})	
    },
    //全选
    checkedAll(state){
      for(let i=0;i<state.todos.length;i++){
        state.todos[i].completed=state.v;
    }
    //把当前v的相反值赋值给v，准备下次点击使用
     state.v = !state.v
    },
    //双击事件编辑修改
    editState(state,id){
      for(var i=0;i<state.todos.length;i++){
        if(state.todos[i].id==id){
          state.todos[i].editing=true;
          state.inpStr= state.todos[i].content ;
        }
      }
    },
    inputStred(state,id){
      for(var i=0;i<state.todos.length;i++){
        if(state.todos[i].id==id){
         state.todos[i].content = state.inpStr;
         state.todos[i].editing = false;
        }
      }
    }

  }
})


  const router = new VueRouter({
    routes:[
      {path:"/",redirect:"/all"},
      {path:"/all",component:()=>import("./components/all.vue")},
      {path:"/active",component:()=>import("./components/active.vue")},
      {path:"/completed",component:()=>import("./components/completed.vue")}
     
    ]
  })

  Vue.directive('focus',{
    inserted:function(el){
      el.focus()
    }
  })
  Vue.directive('myfocus',{
    update(el,binding){
      if(binding.value){	
        el.focus();	
      }	
    }	
  })


new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app')

// var fs = require('fs')
// fs.readFile("App.vue",function(err,data){
//     console.log(data)
// })
//害，
