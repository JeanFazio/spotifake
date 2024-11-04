const { addUser } = require('../src/user')

describe('Módulo de Usuários', () => {
    test('deve adicionar um novo usuário com email válido', () => {
        const newUser = {
            id: 1,
            name: 'Jean',
            email: 'jean@example.com',
            birthDate: '1990-01-01',
            playlists: []
        }
        const result = addUser(newUser)
        expect(result).toEqual(newUser)
    })

    test('deve impedir o cadastro de um usuário com email duplicado', () => {
        const user1 = {
            id: 1,
            name: 'Jean',
            email: 'jean@example.com',
            birthDate: '1990-01-01',
            playlists: []
        }
        const user2 = {
            id: 2,
            name: 'Outro Jean',
            email: 'jean@example.com', // Mesmo email
            birthDate: '1995-01-01',
            playlists: []
        }

        addUser(user1)
        const result = addUser(user2)

        expect(result).toBeUndefined() // Agora vai passar, já que o sistema não permite duplicação
    })

})
