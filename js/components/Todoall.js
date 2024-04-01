import Todolist from "./TodoList.js";
import TodoCreate from "./TodoCreate.js";
export default {
    components: { Todolist, TodoCreate },

    template:
        `<div class="container py-5 _100vh">
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
                    completed: false,
                    tag: 'front-end'
                },
                {
                    id: 2,
                    title: 'Learn React',
                    completed: false,
                    tag: 'front-end'

                },
                {
                    id: 3,
                    title: 'Learn Angular',
                    completed: false,
                    tag: 'front-end'
                },
                {
                    id: 4,
                    title: 'Learn Laravel',
                    completed: false,
                    tag: 'Back-end'
                },
                {
                    id: 5,
                    title: 'Learn Nest JS',
                    completed: false,
                    tag: 'Back-end'
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