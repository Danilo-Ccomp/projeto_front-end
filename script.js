function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    /*
        if (html.classList.contains('light')) {
            html.classList.remove('light')
        } else {
            html.classList.add('light')
        }
        */

    // pegar tag img
    const img = document.querySelector("#profile img")
    // se tiver light mode
    // substituir a img
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/perfil_oculos.jpeg')
        img.setAttribute('alt', 'Foto de perfil Danilo Silva no light mode')
        //senão, manter img
    } else {
        img.setAttribute('src', './assets/perfil.jpeg')
        img.setAttribute('alt', 'Foto de perfil Danilo Silva')
    }
}