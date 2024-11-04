const playlists = [] // Lista de playlists

// Adicionar uma playlist
function addPlaylist(playlist) {
    playlists.push(playlist)
    return playlist
}

// Encontrar uma playlist pelo nome
function getPlaylist(name) {
    return playlists.find(playlist => playlist.name === name)
}

// Excluir uma playlist
function deletePlaylist(name) {
    const index = playlists.findIndex(playlist => playlist.name === name)
    if (index !== -1) {
        return playlists.splice(index, 1)[0]
    }
    return null
}

// Adicionar música a uma playlist
function addSongToPlaylist(playlistName, song) {
    const playlist = getPlaylist(playlistName)
    if (playlist) {
        playlist.songs.push(song)
        return song
    }
    return null
}

// Remover música de uma playlist
function removeSongFromPlaylist(playlistName, songTitle) {
    const playlist = getPlaylist(playlistName)
    if (playlist) {
        const index = playlist.songs.findIndex(song => song.title === songTitle)
        if (index !== -1) {
            return playlist.songs.splice(index, 1)[0]
        }
    }
    return null
}

// Listar músicas de uma playlist
function listSongsFromPlaylist(playlistName) {
    const playlist = getPlaylist(playlistName)
    if (playlist) {
        return playlist.songs
    }
    return []
}

module.exports = {
    addPlaylist,
    getPlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    listSongsFromPlaylist
}
