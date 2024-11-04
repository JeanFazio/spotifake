const { addUser, getUser, deleteUser } = require('./user')
const { addMusic, getMusic, deleteMusic } = require('./music')
const { addPlaylist, getPlaylist, deletePlaylist, addSongToPlaylist, removeSongFromPlaylist, listSongsFromPlaylist } = require('./playlist')


// Criar playlist para o usuário
function createUserPlaylist(userId, playlistName, playlistDescription) {
    const user = getUser(userId)
    if (user) {
        const newPlaylist = { name: playlistName, description: playlistDescription, songs: [] }
        user.playlists.push(newPlaylist)
        addPlaylist(newPlaylist)
        return newPlaylist
    }
    return null
}

// Adicionar música à playlist de um usuário
function addMusicToUserPlaylist(userId, playlistName, musicId) {
    const music = getMusic(musicId)
    if (music) {
        return addSongToPlaylist(playlistName, music)
    }
    return null
}

// Remover música da playlist
function removeMusicFromUserPlaylist(playlistName, songTitle) {
    return removeSongFromPlaylist(playlistName, songTitle)
}

// Listar músicas da playlist de um usuário
function listUserPlaylistSongs(playlistName) {
    return listSongsFromPlaylist(playlistName)
}

module.exports = {
    createUserPlaylist,
    addMusicToUserPlaylist,
    removeMusicFromUserPlaylist,
    listUserPlaylistSongs
}
