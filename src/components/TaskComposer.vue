<template>
    <input 
        type="text" 
        class="form-control add-task" 
        placeholder="Add a task..." 
        autofocus
        v-model="task" 
        @keydown.enter="addTask">    
</template>

<script>
export default {
  name: 'TaskComposer',
  data() {
        return {
            task: ''
        }
  },
  methods: {
    addTask() {
        if (this.task == '') {
          return;
        }
        this.$emit('newTask', this.task);
        this.task = '';
    }
  }
}
</script>

<style scoped>
.add-task {
    border-radius: 0;
    border: 0;
    padding-left: 1.25rem;
    margin-top: 0.5rem;
}
.add-task:focus {
    box-shadow: none;
    border: 0;
}
</style>
