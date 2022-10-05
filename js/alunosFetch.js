'use strict'

const getInformacaoAluno = async (matricula) => {
    const url =  `https://api-larissa.netlify.app/.netlify/functions/api/aluno/matricula/${matricula}`;
    const response = await fetch(url);
    const { informacaoAluno } = await response.json();

    return informacaoAluno;
}

const getDisciplinas = async (matricula) => {
    const url =  `https://api-larissa.netlify.app/.netlify/functions/api/${matricula}/disciplinas`;
    const response = await fetch(url);
    const { disciplinas } = await response.json()

    return disciplinas;
}

export {getInformacaoAluno, getDisciplinas};