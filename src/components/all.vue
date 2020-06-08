<template>
    <div>
        <info :data="$store.state.todos"></info>
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

<style lang = "scss" scoped>

</style>