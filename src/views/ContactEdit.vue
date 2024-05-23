<template>
  <div v-if="!contact">Loading...</div>
  <section v-else class="contact-edit">
    <h1 v-if="!contact._id">Add Contact</h1>
    <h1 v-else>Edit Contact</h1>
    <form @submit.prevent="save">
      <input v-model="contact.name" type="text" placeholder="Name">
      <input v-model="contact.email" type="text" placeholder="Email">
      <input v-model="contact.phone" type="text" placeholder="Phone">
      <button class="btn">Save</button>
    </form>
  </section>
</template>

<script>
import { contactService } from '@/services/contactService';

export default {
    data() {
      return {
        contact: null
      }
    },
    methods: {
      async save() {
        try {
          await contactService.saveContact(this.contact)
          this.$router.push('/contact')
        } catch (err) {
          console.error(err)
        }
      }
    },

    async created() {
      const { contactId } = this.$route.params
      console.log("🚀 ~ created ~ this.$route.params:", this.$route.params)
      console.log("🚀 ~ created ~ contactId:", contactId)
      
      if (contactId) {
        this.contact = await contactService.getContactById(contactId)
      } else {
        this.contact = contactService.getEmptyContact()
      }
    }

}
</script>

<style lang="scss" scoped>
  .contact-edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 30px;

    h1 {
      margin: 10px 0;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 200px;

      .btn {
        width: 50%;
        place-self: center;
        border-radius: 5px;
        margin: 10px 0;
        
        background: steelblue;
        color: whitesmoke;
      }
      .btn:hover {
          cursor: pointer;
        }


    }


  }
</style>