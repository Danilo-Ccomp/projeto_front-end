function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // pegar tag img
    const img = document.querySelector("#profile img")
    // se tiver light mode
    // substituir a img
    if (html.classList.contains('light')) {
        img.setAttribute('src', '/Assets/perfil_oculos.jpeg')
        img.setAttribute('alt', 'Foto de perfil Danilo Silva no light mode')
        //senão, manter img
    } else {
        img.setAttribute('src', '/Assets/perfil.jpeg')
        img.setAttribute('alt', 'Foto de perfil Danilo Silva')
    }
}