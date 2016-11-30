<template lang="pug">
  section.main
    input.toggle-all(type="checkbox")
    ul.todo-list
      todo-item
</template>

<script>
import TodoItem from 'components/TodoItem.vue';

export default {
  components: { TodoItem }
}
</script>
