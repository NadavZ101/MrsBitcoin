<template>
    <section class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <img :src="`https://www.robohash.org/` + contact.name + `.png?set=set2`">
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
    </section>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
    .contact-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        img {
            width: 100px;
            height: 100px;
        }
    }
</style>