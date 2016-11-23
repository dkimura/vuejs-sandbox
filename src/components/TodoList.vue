<template lang="pug">
  section.main
    input.toggle-all(type="checkbox")
    ul.todo-list
      todo-item
</template>

<script>
export default {
  name: 'todo-list',
}
</script>
