<template>
  <section v-if="contact" class="contact-details">
    <div class="details">
        <h1>{{ contact.name }}</h1>
        <img :src=" 'https://www.robohash.org/' + contact.name + '.png?set=set2'" alt="" class="">
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
        <p>{{ contact.transactions }}</p>
        <button @click="removeContact" class="btn">x</button>
    </div>
    <RouterLink to="/contact"><button class="btn">Back</button></RouterLink>
  </section>
  <div v-else>Loading...</div>

</template>

<script>
import { contactService } from '@/services/contactService';

export default {
    data() {
       return {
        contact: null
       }
    },
    async created() {
        try {
            const { contactId } = this.$route.params
            this.contact = await contactService.getContactById(contactId)
        } catch (err) {
            console.log(err)
        }
    },
    methods: {
        async removeContact() {
            try {
                await contactService.deleteContact(this.$route.params.contactId)
                this.$router.push('/contact')
            } catch (err) {
                console.log(err)
            }
        }
    },
    // computed: {
    //      contactId() { return this.$route.params.contactId}
    // }
}
</script>

<style lang="scss" scoped>
    .contact-details {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 30px;

        .details {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: auto;
            padding: 5px;
            border-radius: 10px;
            background-color: lightslategrey;
            color: white;
            
            img {
                width: 100px;
                height: 100px;
            }
        }

        .btn {
            border-radius: 5px;
            
            &:hover {
                cursor: pointer;
            }
        }


    }
</style>

