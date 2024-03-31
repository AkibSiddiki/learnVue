import Todolist from "./TodoList.js";
import TodoCreate from "./TodoCreate.js";
export default {
    components: { Todolist, TodoCreate },

    template: `<div class="container py-5 _100vh">
    <div class="d-flex flex-row justify-content-center">
        <div class="m-auto">
            <Todolist :todos="notCompleted" title="In Progress"></Todolist>
            <Todolist :todos="completed" title="Completed"></Todolist>
            <TodoCreate @create="add"></TodoCreate>
        </div>
    </div>

</div>`,
    data() {
        return {
            darkMode: false,
            toDoList: [
                {
                    id: 1,
                    title: 'Learn Vue',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Learn React',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Learn Angular',
                    completed: false
                },
                {
                    id: 4,
                    title: 'Learn React Native',
                    completed: false
                },
                {
                    id: 5,
                    title: 'Learn Vue Native',
                    completed: false
                }
            ],
        };
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
        add(value) {
            this.toDoList.push({
                title: value,
                completed: false,
                id: this.toDoList.length + 1
            });
        }
    }


}