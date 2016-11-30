<template lang="pug">
  section.todoapp
    todo-header
    todo-list
    todo-footer
</template>

<script>
import TodoHeader from 'components/TodoHeader.vue';
import TodoList from 'components/TodoList.vue';
import TodoFooter from 'components/TodoFooter.vue';

export default {
  components: { TodoHeader, TodoList, TodoFooter },
}
</script>
