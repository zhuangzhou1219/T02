<template>
  <section class="main">
				<input @click="toggle" id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label><!-- 全选框框按钮-->
				<ul class="todo-list">
					<li :class="{completed:item.completed,editing:item.editing}" :key="item.id" v-for="item of data"> <!-- class =  "completed "  是用横线样式  状态管理  -->
						<div class="view">
                            <!--   type 为非 text的时候  双向绑定指令绑定的不是value  --->
							<input class="toggle"  v-model="item.completed" type="checkbox" name="a" >
							<label @dblclick="edit(item.id)">{{item.content}}</label>
							<button    class="destroy" @click="del(item.id)"></button>
						</div>
						<input class="edit" v-myfocus="item.editing" 
                        v-model="$store.state.inpStr"  @blur="inputStred(item.id)"
                         @keyup.enter="inputStred(item.id)"
                        value="Create a TodoMVC template">
					</li>
				</ul>
			</section>
</template>
<script>
export default {
    props:['data'],
    methods:{
        del(id){
                this.$store.commit('delete',id)
        },
        toggle(){
            this.$store.commit("checkedAll")
           
        },
        edit(id){
           this.$store.commit("editState",id)
        },
        inputStred(id){
            this.$store.commit("inputStred",id)
        }
      
    }
}
</script>