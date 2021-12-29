const listaAlunos = [];

function enviarDados() {
    //atribuir variaveis para os campos preenchidos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const nascimento = document.getElementById("nasc").value;
    const nota = Math.round(document.getElementById("nota").value);

    if(nota <= 100) {
        alert('Aluno cadastrado');
        //cria um objeto com os campos anteriores
        let aluno = {};
        aluno.nome = nome;
        aluno.telefone = telefone;
        aluno.nascimento = nascimento;
        aluno.nota = nota;

        //add no array de alunos
        listaAlunos.push(aluno);

        //add id do aluno conforme index do array
        for(let i = 0; i < listaAlunos.length; i++) {
            aluno.id = i + 1;
        };
    
        //atribuir variaveis para a tabela
        const numAluno = document.querySelector('.numAluno');
        const nomeEnviado = document.querySelector('.nomeEnviado');
        const telEnviado = document.querySelector('.telEnviado');
        const nascEnviado = document.querySelector('.nascEnviado');
        const notaEnviada = document.querySelector('.notaEnviada');

        //criar tabela com dados enviados
        numAluno.innerHTML += `<li>${aluno.id}</li>`;
        nomeEnviado.innerHTML += `<li>${aluno.nome}</li>`;
        telEnviado.innerHTML += `<li>${aluno.telefone}</li>`;
        nascEnviado.innerHTML += `<li>${aluno.nascimento}</li>`;
        notaEnviada.innerHTML += `<li>${aluno.nota}</li>`;
        
    }else{
        alert('Por favor, digite um valor de 0 a 100 no campo "Nota final do curso"');
    }

}
