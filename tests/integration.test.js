const { addUser } = require('../src/user')
const { addMusic } = require('../src/music')
const { 
    createUserPlaylist, 
    addMusicToUserPlaylist, 
    removeMusicFromUserPlaylist, 
    listUserPlaylistSongs 
} = require('../src/app')
const { getPlaylist } = require('../src/playlist');

describe('Teste de Integração', () => {
    test('deve realizar o fluxo completo de cadastro de música, criação de playlist, adição, remoção e listagem de músicas', () => {
        // Cadastro do usuário
        const usuario = { id: 1, name: 'Jean', email: 'jean@example.com', birthDate: '1990-01-01', playlists: [] }
        addUser(usuario)

        // Cadastro de uma música
        const musica = { id: 1, title: 'Música 1', artist: 'Artista 1', album: 'Álbum 1', duration: '3:30', genre: 'Pop' }
        addMusic(musica)

        // Criação de playlist e adição de músicas
        createUserPlaylist(1, 'Minha Playlist', 'Melhores músicas')
        addMusicToUserPlaylist(1, 'Minha Playlist', 1)

        // Verifica se a música foi adicionada à playlist
        let musicas = listUserPlaylistSongs('Minha Playlist')
        expect(musicas.length).toBe(1)
        expect(musicas[0].id).toBe(1)
        expect(musicas[0].title).toBe('Música 1')

        // Remoção de música da playlist
        removeMusicFromUserPlaylist('Minha Playlist', 'Música 1')
        musicas = listUserPlaylistSongs('Minha Playlist')

        // Verifica se a playlist está vazia após a remoção
        expect(musicas.length).toBe(0)
    })
    
     test('deve verificar se a playlist e as músicas estão sendo persistidas corretamente', () => {
        const user = { id: 2, name: 'Ana', email: 'ana@example.com', birthDate: '1992-02-02', playlists: [] }
        addUser(user)

        const music1 = { id: 2, title: 'Música 2', artist: 'Artista 2', album: 'Álbum 2', duration: '4:00', genre: 'Rock' }
        const music2 = { id: 3, title: 'Música 3', artist: 'Artista 3', album: 'Álbum 3', duration: '5:00', genre: 'Jazz' }
        addMusic(music1)
        addMusic(music2)

        createUserPlaylist(2, 'Playlist de Ana', 'Músicas favoritas')
        addMusicToUserPlaylist(2, 'Playlist de Ana', 2)
        addMusicToUserPlaylist(2, 'Playlist de Ana', 3)

        const playlist = getPlaylist('Playlist de Ana') // Função para obter a playlist
        expect(playlist.songs.length).toBe(2) // Verifica se a playlist contém 2 músicas
    })
})
