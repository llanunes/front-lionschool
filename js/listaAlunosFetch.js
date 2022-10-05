'use strict'

const getAlunoPorCurso = async (curso) => {
    const url =  `https://api-larissa.netlify.app/.netlify/functions/api/alunos/curso/?curso=${curso}`;
    const response = await fetch(url);
    const { listaAlunos } = await response.json();

    return listaAlunos;
}

const filtrarAlunoPorStatusEAnoDeConclusao = async (curso, status, conclusao) => {
    const url = `https://api-larissa.netlify.app/.netlify/functions/api/alunos/curso/?curso=${curso}&status=${status}&conclusao=${conclusao}`;
    const response = await fetch(url);
    const {listaAlunos} = await response.json();

    return listaAlunos;
}

const filtrarAlunoPorStatus = async (curso, status) => {
    const url = `https://api-larissa.netlify.app/.netlify/functions/api/alunos/curso/?curso=${curso}&status=${status}`;
    const response = await fetch(url);
    const {listaAlunos} = await response.json();

    return listaAlunos;
}

const getAnos = async (curso, conclusao) => {
    const url =  `https://api-larissa.netlify.app/.netlify/functions/api/alunos/curso/?curso=${curso}&conclusao=${conclusao}`;
    const response = await fetch(url);
    const {listaAlunos} = await response.json();

    return listaAlunos;
}

export {
    getAlunoPorCurso,
    filtrarAlunoPorStatusEAnoDeConclusao,
    getAnos,
    filtrarAlunoPorStatus
}