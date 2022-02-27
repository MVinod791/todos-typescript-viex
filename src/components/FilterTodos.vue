<template>
    <div>
        Filter Todos:
        <select @change="filterTodos($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
    setup() {
        const filterTodos=(event:Event)=>{
                store.dispatch('filterTodos',event)
        }
        return {filterTodos}
    },
})
</script>


<style scoped>
select {
  outline: none;
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
  cursor: pointer;
}
</style>