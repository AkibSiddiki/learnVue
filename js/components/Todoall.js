import Todolist from "./TodoList.js";
import TodoCreate from "./TodoCreate.js";
export default {
    components: { Todolist, TodoCreate },

    template:
        `<div class="container py-5 _100vh">
        <div class="d-flex flex-row justify-content-center">
        <div class="m-auto">
            <Todolist :todos="notCompleted" title="In Progress" >
            <TodoCreate @create="add"></TodoCreate>
            </Todolist>
            <Todolist v-if="canshow" canHide @hide="canshow = false" :todos="completed" title="Completed"></Todolist>
        </div>
        </div>
        </div>`,
    data() {
        return {
            darkMode: false,
            toDoList: [],
            canshow: true
        };
    },

    created() {
        fetch('http://localhost:3000/todos').then(res => res.json()).then(data => {
            this.toDoList = data;
        })
    },

    computed: {
        completed() {
            return this.toDoList.filter(value => value.completed)
        },

        notCompleted() {
            return this.toDoList.filter(value => !value.completed)
        }

    },

    methods: {
        add(newTodo, newTag) {
            this.toDoList.push({
                id: this.toDoList.length + 1,
                title: newTodo,
                completed: false,
                tag: newTag
            });
        }
    }


}