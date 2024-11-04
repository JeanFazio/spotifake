const { addMusic } = require('../src/music.js')

describe('Módulo de Músicas', () => {
    test('deve adicionar uma nova música com todos os campos obrigatórios', () => {
        const newMusic = {
            id: 1,
            title: 'Música 1',
            artist: 'Artista 1',
            album: 'Álbum 1',
            duration: '3:30',
            genre: 'Pop'
        }
        const result = addMusic(newMusic)
        expect(result).toEqual(newMusic)
    })

    test('deve validar que a duração da música é armazenada corretamente', () => {
        const newMusic = {
            id: 2,
            title: 'Música 2',
            artist: 'Artista 2',
            album: 'Álbum 2',
            duration: '4:20',
            genre: 'Rock'
        }
        const result = addMusic(newMusic)
        expect(result.duration).toBe('4:20')
    })
})
