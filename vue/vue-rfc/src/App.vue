<template>
  <!-- <section class="todoapp">
    <header class="header">
      <h1>Vue3 todos</h1>
      <input type="text" 
        class="new-todo" 
        placeholder="想干的事"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :key="todo.id">
          <div class="view">
            <label>{{todo.title}}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  </section> -->
  <!-- <todo-list v-slot="{msg}">{{msg}}</todo-list> -->
  <todo-list>
    <template v-slot:one="{msg}">{{msg}}
    </template>
  </todo-list>
</template>

<script>
import { reactive, toRefs } from 'vue'
import TodoList from './components/todoList.vue'
export default {
  name: 'App',
  components:{
    TodoList
  },
  setup() {
    const state = reactive({
      newTodo: '',
      msg:'hello slot',
      todos: [
        { id: '1', title: '吃饭', completed: false},
        { id: '2', title: '睡觉', completed: false}
      ]
    })

    function addTodo() {
      let value = state.newTodo && state.newTodo.trim()
      if (!value) return
      state.todos.push({
        id: state.todos.length + 1,
        title: value,
        completed: false
      })
      state.newTodo = ''
    }

    return {
      ...toRefs(state),
      addTodo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>