const listaAlunos = [];

function enviarDados() {
    //atribuir variaveis para os campos preenchidos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const nascimento = document.getElementById("nasc").value;
    const nota = Math.round(document.getElementById("nota").value);

    if(nota <= 100 && nota > 0 && nome !== "") {
        alert('Aluno cadastrado');
        //cria um objeto com os campos anteriores
        let aluno = {};
        aluno.nome = nome;
        aluno.telefone = telefone;
        aluno.nascimento = nascimento.replace(/^(\d{4})*-(\d{2})*-(\d{2})$/, "$3-$2-$1");
        aluno.nota = nota;

        //add no array de alunos
        listaAlunos.push(aluno);

        //add id do aluno conforme index do array
        for(let i = 0; i < listaAlunos.length; i++) {
            aluno.id = i + 1;
        };
        mostrarAlunos();

    }else{
        if(nota > 100 || nota == "") {
            alert('Por favor, digite um valor de 0 a 100 no campo "Nota final do curso"');
        }
        if(nome == "") {
            alert('Por favor preencha o campo "Nome do aluno"');
        }     
    }
};

function removerAluno() {
    if(listaAlunos.length == 0) {
        alert('Não há alunos registrados');       
    }else {
        let index = Number(prompt('Insira o ID do aluno que deseja remover da lista:'));

        if (index < 1 || index > listaAlunos.length) {
            alert('ID inválido');
        }else {
            let remove = index - 1;
            listaAlunos.splice(remove, 1);
            mostrarAlunos();
        }
    } 
};

function mostrarAlunos() {
    //atribuir variaveis para a tabela
    const numAluno = document.querySelector('.numAluno');
    const nomeEnviado = document.querySelector('.nomeEnviado');
    const telEnviado = document.querySelector('.telEnviado');
    const nascEnviado = document.querySelector('.nascEnviado');
    const notaEnviada = document.querySelector('.notaEnviada');

    //criar tabela com dados enviados
    numAluno.innerHTML = '';
    nomeEnviado.innerHTML = '';
    telEnviado.innerHTML = '';
    nascEnviado.innerHTML = '';
    notaEnviada.innerHTML = '';

    for(let i = 0; i < listaAlunos.length; i++) {
        numAluno.innerHTML += `<li>${listaAlunos[i].id}</li>`;
        nomeEnviado.innerHTML += `<li>${listaAlunos[i].nome}</li>`;
        telEnviado.innerHTML += `<li>${listaAlunos[i].telefone}</li>`;
        nascEnviado.innerHTML += `<li>${listaAlunos[i].nascimento}</li>`;
        notaEnviada.innerHTML += `<li>${listaAlunos[i].nota}</li>`;
    }
};
