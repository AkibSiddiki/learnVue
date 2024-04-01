import Todo from './Todo.js';
import TagList from './TagList.js';
export default {
    components: { Todo, TagList },
    template: `
    <section v-show="todos.length" class="mt-4">
        <p class="mb-2">{{ title }} ({{ todos.length }})</p>
        <TagList
        :initialTags="todos.map(value => value.tag)"
        v-model:currentTag="currentTag"
        ></TagList>
        <ul class="list-group my-4">
            <Todo v-for="todo in filterTodos" :key="todo.id" :todo="todo"></Todo>
        </ul>
    </section>
    `,

    props: {
        todos: Array,
        title: String,
    },
    data() {
        return {
            currentTag: 'All'
        }
    },

    computed: {
        filterTodos() {
            if (this.currentTag === 'All') {
                return this.todos;
            }

            const filtered = this.todos.filter(value => value.tag === this.currentTag);
            if (filtered.length === 0) {
                this.currentTag = 'All';
                return this.todos;
            }

            return filtered;
        },
    }
}