const users = []

function addUser(user) {
    // Verifica se já existe um usuário com o mesmo email
    const existingUser = users.find(u => u.email === user.email)
    
    if (existingUser) {
        return undefined // Não permite o cadastro de usuários com email duplicado
    }

    users.push(user)
    return user
}

function getUser(id) {
    return users.find(user => user.id === id)
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
    return null
}

module.exports = { addUser, getUser, deleteUser }
