export default {
    template: `
        <form @submit.prevent="add">
            <label class="form-label">Add Todo & Tag</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add Todo" v-model="newTodo">
                <input type="text" class="form-control" placeholder="Add Tag" v-model="newTag">
                <button class="btn btn-success " :disabled="newTodo.length == 0" type="submit">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newTodo: '',
            newTag: ''
        }
    },

    methods: {
        add() {
            this.$emit('create', this.newTodo, this.newTag);
            this.newTodo = '';
            this.newTag = '';
        }
    }
}