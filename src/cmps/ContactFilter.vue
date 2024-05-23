<template>
    <section class="contact-filter">
        <input @input="onFilter" v-model="filterBy.term" type="text" placeholder="Search Contact">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {term: ''}
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }

}
</script>

<style lang="scss" scoped>
    form {
        margin: 10px 0;
    }
</style>