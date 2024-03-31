export default {
    template: `
        <form @submit.prevent="add">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add Todo" v-model="newTodo">
                <button class="btn btn-success " :disabled="newTodo.length == 0" type="submit">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newTodo: ''
        }
    },

    methods: {
        add() {
            this.$emit('create', this.newTodo);

            this.newTodo = '';
        }
    }
}