'use strict'

const getCursos = async () => {
    const url =  ' https://api-larissa.netlify.app/.netlify/functions/api/cursos';
    const response = await fetch(url);
    const { cursos } = await response.json();

    return cursos;
}

export {getCursos}