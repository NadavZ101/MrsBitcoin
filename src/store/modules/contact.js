import { contactService } from "@/services/contactService"

export default {
    state() {
        return {
            contacts: []
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (error) {
                console.log(err)
            }
        },
        async removeContact({ commit }, { contactId }) {

            try {
                await contactService.deleteContact(contactId)
                commit({ type: 'removeContact', contactId })
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}