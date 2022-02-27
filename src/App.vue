<template>
  <div class="container">
    <AddTodo/>
    <FilterTodos/>
    <AllTodos/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AllTodos from './components/AllTodos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue' 

export default defineComponent({
  name: 'App',
  components: {
    AllTodos,
    FilterTodos,
    AddTodo
  }
});
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
