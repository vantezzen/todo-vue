<template>
  <div id="app" class="container d-flex justify-content-center mt-4">
        <div class="card w-100">
            <div class="card-header text-center">
                Todo
            </div>
            <div class="card-body">
                <TaskList 
                    :tasks="sorted"
                    @toggleComplete="toggleComplete"
                    @deleteTask="deleteTask"></TaskList>

                <TaskComposer @newTask="addTask"></TaskComposer>
            </div>
        </div>
    </div>
</template>

<script>
// Import components
import TaskList from './components/TaskList.vue'
import TaskComposer from './components/TaskComposer.vue'

export default {
  name: 'app',

  components: {
    TaskList,
    TaskComposer
  },

  data() {
    return {
        // Empty tasks object
        // This will later hold the created tasks
        tasks: {},

        // ID for the next task
        nextId: 0
    };
  },

  methods: {
      // Add new, uncompleted task to the tasks array
      // text: Text for the new task
      addTask(text) {
          let id = this.nextId;

          this.$set(this.tasks, id, {
              id,
              text,
              completed: false
          });

          this.nextId++;
      },

      // Toggle the completed status of a task
      // task: ID of the task to toggle
      toggleComplete(task) {
          if (this.tasks[task]) {
            this.tasks[task].completed = !this.tasks[task].completed;
          }
      },

      // Delete task from task list
      // task: ID of the task to delete
      deleteTask(task) {
          if (this.tasks[task]) {
            this.$delete(this.tasks, task);
          }
      }
  },

  computed: {
      // Sort tasks by uncomplete and complete
        sorted() {
            let uncomplete = [];
            let complete = [];

            for (let task in this.tasks) {
                if (this.tasks[task].completed) {
                    complete.push(this.tasks[task]);
                } else {
                    uncomplete.push(this.tasks[task]);
                }
            }

            let sorted = uncomplete.concat(complete);

            return sorted;
        }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

body {
    font-family: 'Nunito', sans-serif;
}

.card {
    max-width: 800px; 
    border-radius: 0 !important;
    border: 0;
    box-shadow: 5px 5px 30px 3px rgba(0, 0, 0, 0.3);
}
</style>
