<template>
    <section class="contact-index">
        <h1>Contacts</h1>
        <RouterLink to="contact/edit"><button class="btn">Add Contact</button></RouterLink>
        <ContactFilter @filter="onFilter"/>
        <ContactList @remove="removeContact" :contacts="contacts"/>
    </section>
</template>

<script>
import { contactService } from '@/services/contactService';
import ContactList from '../cmps/ContactList.vue'
import { RouterLink } from 'vue-router';
import ContactFilter from '@/cmps/ContactFilter.vue';

export default {
    data() {
        return {
            // contacts: [],
        }
    },

    async created() {
        // this.$store.subscribe((cmd, state) => {
        //     console.log(cmd)
        //     console.log(state)
        // })
        try {
            this.$store.dispatch({ type: 'loadContacts'})

            /* Without State Management (STORE) */
                // try {
                //     this.contacts = await contactService.getContacts()
                // } catch (err) {
                //     console.error("Failed to load contacts:", err)
                // }
        } catch (err) {
            console.log(err)
        }
        
    },

    methods: {
        async removeContact(contactId) {
            try {
                this.$store.dispatch({ type: 'removeContact', contactId})

                /* Without State Management (STORE) */
                    // await contactService.deleteContact(contactId)
                    // const idx = this.contacts.findIndex(contact => contact._id === contactId)
                    // if (idx !== -1) {
                    //     this.contacts.splice(idx, 1)
                    // }
            } catch (err) {
                console.error(err)
            }
        },
        async onFilter(filterBy) {
            try {
                this.$store.dispatch({ type: 'loadContacts', filterBy})

                /* Without State Management (STORE) */
                    // this.contacts = await contactService.getContacts(filterBy)
            } catch (err) {
                console.error(err)
            }
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    components: {
        ContactList,
        ContactFilter,
    }
}
</script>
    
<style lang="scss" scoped>

button {
    margin-bottom: 5px;
}

</style>