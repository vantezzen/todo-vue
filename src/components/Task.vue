<template>
    <li class="list-group-item todo-item"
        :class="{ 'item-done': task.completed }"
        @click="toggleComplete">
        
        <i class="far"
            :class="{ 'fa-circle': !task.completed, 'fa-check-circle': task.completed }"></i>
        
        <span class="item-text" v-text="task.text"></span>
        
        <span class="float-right"
                @click="deleteTask">
            <i class="fas fa-trash"></i>
        </span>
    </li>
</template>

<script>
export default {
    name: 'Task',
    props: ['task'],
    methods: {
        // Emit toggleComplete event
        toggleComplete() {
            this.$emit('toggleComplete', this.task.id);
        },

        // Emit deleteTask event
        deleteTask() {
            this.$emit('deleteTask', this.task.id);
        }
    }
}
</script>

<style scoped>
.item-done .item-text {
    color: #6c757d;
    text-decoration: line-through;
}

.fa-circle, .fa-check-circle {
    margin-right: 5px;
}
</style>
