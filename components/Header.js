export default function Header({title}){

    const header = document.createElement('header')
    header.classList = 'header'

    header.innerHTML = `
        <h1 class='header-title'>${title}</h1>
    `
    //se devuelve el elemento no la funcion
    return header
}   






