export default {
    template: `
    <div class="btn-group" role="group">
    <button v-for="tag in tags"
        class="btn"
        :class="{ 'btn-light': currentTag === tag, 'btn-outline-light': currentTag !== tag }"
        @click="$emit('update:currentTag', tag)"
    >
        {{ tag }}
    </button>
</div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['All', ... new Set(this.initialTags)];
        }
    }

}