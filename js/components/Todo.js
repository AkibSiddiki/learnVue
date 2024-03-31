export default {
    template: `
    <li class="list-group-item" :key="todo.id">
    <label for="" class="form-check-label">
        <input class="form-check-input me-1" type="checkbox" v-model="todo.completed">
        {{todo.title}}
    </label>
</li>
    `,
    props: {
        todo: Object,
    }
}