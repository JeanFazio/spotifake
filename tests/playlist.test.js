const { 
    addPlaylist, addSongToPlaylist, 
    removeSongFromPlaylist, listSongsFromPlaylist 
} = require('../src/playlist')

describe('Módulo de Playlists', () => {
    test('deve adicionar uma nova playlist', () => {
        const novaPlaylist = { name: 'Minha Playlist', description: 'Melhores músicas', songs: [] }
        const resultado = addPlaylist(novaPlaylist)
        expect(resultado).toEqual(novaPlaylist)
    })

    test('deve adicionar uma música à playlist', () => {
        const novaMusica = { id: 1, title: 'Música 1', artist: 'Artista 1' }
        const resultado = addSongToPlaylist('Minha Playlist', novaMusica)
        expect(resultado).toEqual(novaMusica)
    })

    test('deve listar músicas da playlist', () => {
        const musicas = listSongsFromPlaylist('Minha Playlist')
        expect(musicas.length).toBe(1)
    })

    test('deve remover uma música da playlist', () => {
        const musicaRemovida = removeSongFromPlaylist('Minha Playlist', 'Música 1')
        expect(musicaRemovida.title).toBe('Música 1')
    })
})
