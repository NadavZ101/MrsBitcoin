<template>
  <section class="contact-list">
    <TransitionGroup name="list" tag="ul">
        <!-- <ul> -->
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>

                <section class="actions">
                    <button @click="onRemove(contact._id)" class="btn">x</button>
                    <RouterLink :to="`contact/edit/${contact._id}`"><button class="btn">Edit</button></RouterLink>
                    <RouterLink :to="`/contact/details/${contact._id}`"><button class="btn">Details</button></RouterLink>
                </section>
            </li>
        <!-- </ul> -->
    </TransitionGroup>
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

export default {
    props: {
       contacts: {
            type: Array,
            required: true,
       }
    },
    methods: {
        onRemove(contactId) {
            console.log(contactId)
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }
}
</script>

<style lang="scss" scoped>
    .contact-list {

        .list-enter-active,
        .list-leave-active {
            transition: all 0.5s ease;
        }
        .list-enter-from,
        .list-leave-to {
            opacity: 0;
            transform: translateX(30px);
        }

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            list-style: none;
            gap: 10px;
            padding: 1px;

            li {
                padding:10px;
                border-radius: 10px;

                background: lightslategrey;
                color: white;

                .actions {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-top: 10px;

                    .btn {
                        margin-top: 2px;
                        
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
