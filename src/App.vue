<template>
  <div id="app">
		<section class="todoapp">
		<!-- 这个是输入 todo的地方   -->
			<header class="header" >
				<h1>todos</h1>
				<input class="new-todo" v-focus v-model="info" @keyup.enter="add()" placeholder="What needs to be done?" autofocus>
			</header>
          <router-view></router-view>
			<!-- This footer should hidden by default and shown when there are todos -->
			<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong></strong>{{$store.state.todos.length}} item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<router-link :class="selected" to="/all">All</router-link>
					</li>
					<li>
					<router-link to="/active">Active</router-link>
					</li>
					<li>
						<router-link to="/completed">completed</router-link>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				
				<button class="clear-completed"  @click="clear">Clear completed</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<!-- Remove the below line ↓ -->
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<!-- Change this out with your name and url ↓ -->
			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
		<!-- Scripts here. Don't remove ↓ -->


  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {selected:true,info:""}
  },
  methods:{
    add(){
      var data={
        id:Math.random(),
        content:this.info,
		completed:false,
		editing:false
      }
      this.$store.commit('addData',data)
	} ,
	clear(){
		this.$store.commit('clearTodos')
	}
  }
}
</script>

<style>
@import  "./assets/todomvc-app-css/index.css";
@import "./assets/todomvc-common/base.css";

@import  "./assets/css/app.css";

</style>
