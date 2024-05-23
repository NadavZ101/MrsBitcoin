export const userService = {
    getUser,
}

const user = {
    name: 'Booloon',
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}