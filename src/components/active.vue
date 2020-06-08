<template>
    <div>
        <info :data="$store.state.todos.filter(data=>!data.completed)"></info>
    </div>
</template>
<script>
import info from "./info.vue"
export default {
    components:{
        info
    }
    
}
</script>

<style lang="stylus" scoped>

</style>