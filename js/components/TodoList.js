import Todo from './Todo.js';
export default {
    components: { Todo },
    template: `<section v-show="todos.length" class="mt-4">
    <p class="mb-2">{{title}} ({{ todos.length }})</p>
    <ul class="list-group mb-4">
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
    </ul>
</section>`,
    props: {
        todos: Array,
        title: String
    }
}