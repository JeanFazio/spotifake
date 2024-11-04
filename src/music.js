const musics = []

//adicionar musica
function addMusic(music){
    musics.push(music)
    return music
}

//encontrar musica por id
function getMusic(id){
    return musics.find(music => music.id === id)
}

//excluir musica
function deleteMusic(id){
    const index = musics.findIndex(music => music.id === id)
    if(index !== -1){
        return musics.splice(index, 1)[0]
    }
    return null
}

module.exports = {addMusic, getMusic, deleteMusic}