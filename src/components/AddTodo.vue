<template>
    <h1>Add Todo</h1>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Add Todos..." v-model="title">
        <input type="submit" value="submit">
    </form>
</template>

<script lang="ts" >
import store from '@/store'
import { defineComponent,ref,reactive } from 'vue'
import {mapActions} from 'vuex'
import todos from '../store/modules/todos'

export default defineComponent({
    setup() {
        const title=ref('')
        const onSubmit=()=>{
            store.dispatch('addTodos',title.value)
                  
            title.value=''
        }
        return {title,onSubmit}
    },
    // methods:{
    //     ...mapActions(['addTodo']),
    //     onSubmit(){
    //         this.addTodo(this.input)
    //         this.input.title=''
    //     }
    // }
})
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>