import axios from 'axios'
import { GetterTree ,MutationTree} from 'vuex'

export type Item={
    id:Number,
    title:String,
    completed:boolean
}

export type State={
    todos:Item[]
}

const state:State={
    todos:[]
};

export interface RootState{}

export type Getters={
    allTodos(state:State):void
}

const getters:Getters={
    allTodos:(state)=>state.todos
};

const actions={
    async fetchTodos({commit}:any){
        const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
        //console.log(response.data)
        commit('setTodos',response.data)
    },
    async addTodos({commit}:any,title:String){
        const response=await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,completed:false
        })
        commit('createTodo',response.data)
    },
    async deleteTodo({commit}:any,id:Number){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodoItem',id)
    },
    async toggleTodo({commit}:any,updTodo:Item){
        const response=await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        //console.log(response.data);
        commit('updatedTodo',response.data);
    },
    async filterTodos({commit}:any,event:any){
        const limit=parseInt(event.target.value);
        //console.log(limit)
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos',response.data);
    }
        
};

export type Mutations={
    setTodos(state:State,todos:Item[]):void
    createTodo(state:State,todo:Item):void
    deleteTodoItem(state:State,id:number):void
    updatedTodo(state:State,updTodo:Item):void
}

const mutations:Mutations={
    //setTodos:(state:State,todos:Item[])=>state.todos=todos,
    //newTodo:(state:State,todo:Item)=>state.todos.unshift(todo),
    setTodos(state,todos){
        state.todos=todos
    },
    createTodo(state,todo){
        state.todos.unshift(todo)
    },
    deleteTodoItem:(state,id)=>state.todos=state.todos.filter(eachTodo=>eachTodo.id!==id),
    updatedTodo(state,updTodo){
        const index=state.todos.findIndex((eachTodo)=>eachTodo.id===updTodo.id)
        if(index!=-1){
            state.todos.splice(index,1,updTodo)
        }
    }
}

export default({
    state,
    getters,
    actions,
    mutations
})
