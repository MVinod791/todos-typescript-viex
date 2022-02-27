<template>
    <div>
        <h2>Todos</h2>
        <div class="todos">
            <div 
                v-for="todo in allTodos" 
                :key="todo.id" 
                class="todo"
                :class="{'is-complete':todo.completed}"
                @dblclick="onDblClick(todo)"
                
            >   
                {{todo.title}}
                
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent ,ref} from 'vue'
import {mapGetters,mapActions} from 'vuex'
import store from '@/store'
import {Item} from '../store/modules/todos'

export default defineComponent({
    setup() {
        const allTodos=computed(()=>store.getters.allTodos)
        //console.log(allTodos)
        const deleteTodo=(id:Number)=>{
            store.dispatch('deleteTodo',id)
        }

        const onDblClick=(todo:Item)=>{
                const updTodo:Item={
                    id:todo.id,
                    title:todo.title,
                    completed:!todo.completed
                }
                store.dispatch('toggleTodo',updTodo)

        } 
        const fetchTodos=()=>{
                store.dispatch('fetchTodos' )
        }

        return {allTodos,deleteTodo,onDblClick,fetchTodos}
    },
    //computed:mapGetters(['allTodos']),
    // methods:{
    //     ...mapActions(['fetchTodos',])
    // },
    created(){
        this.fetchTodos()
    }

})
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  
}
.fas{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ccc;
    cursor: pointer;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
</style>

