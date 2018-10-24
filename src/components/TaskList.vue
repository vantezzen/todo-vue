<template>
    <ul class="list-group list-group-flush">
        <Task v-for="task in tasks" 
                :key="task.key"
                :task="task"
                @toggleComplete="toggleComplete"
                @deleteTask="deleteTask"></Task>
    </ul>
</template>

<script>
import Task from './Task.vue'

export default {
  name: 'TaskList',
  props: ['tasks'],
  components: {
      Task
  },
  methods: {
      // Reemit toggleComplete event from task element to App
      toggleComplete(task) {
          this.$emit('toggleComplete', task);
      },

      // Reemit deleteTask event from task element to App
      deleteTask(task) {
          this.$emit('deleteTask', task);
      }
  }
}
</script>