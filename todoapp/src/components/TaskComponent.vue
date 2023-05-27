<template>
    <h1>To Do App {{ fullname }} </h1>
    <input type="text" v-model="newToDo" placeholder="Agregar Tarea">
    <button @click="addTask">Add</button>
    <ul>
        <li v-for="(item, index) in todoList" v-bind:key = "index">
            {{ index }} {{ item }}
            <button @click=" removeTask(index)">Delete</button>
        </li>
    </ul>


</template>

<style></style>

<script>
    export default{
        name: "TaskComponent",
        data(){
            return {
                todoList: [],
                fullname: "Axel",
                newToDo: ''
            }
        },
        methods: {
            addTask(){
                this.todoList.push(this.newToDo)
                this.newToDo = ''
                console.log("Aquí se va a agregar la tarea")
            },
            removeTask(index) {
            this.todoList.splice(index,1)
            }
        },
        
    }




</script>