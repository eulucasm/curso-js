const container = document.querySelector('.container');
const inputTarefa = document.querySelector('.inputTarefa');
const listaTarefas = document.querySelector('.listaTarefas');
const btnTarefa = document.querySelector('.btnTarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

//fuñção para capturar ação no enter para submeter tarefa.
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { //13 é o valor da tecla Enter do teclado.
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//função para limpar o campo de digitação apór submeter uma tarefa
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); //focus é um evento html, onde faz voltar o cursor pro local de digitação
}
//função para adicionar botão a tarefa criada a fim de apaga-lo
function criaBotaoApagar(li) {
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'Apagar');
    botaoApagar.setAttribute('title', 'Apagar esta Tarefa');
    li.appendChild(botaoApagar);
}

//Função para criar a tarefa.
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//função para enviar item digitado com o click no button
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//função para apagar tarefa
document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('Apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

//função para salvar a tarefa forever sz
function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let listaTarefas of liTarefas) {
        let tarefaTexto = listaTarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //trim remove espaços nas pontas
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

//função para ler as tarefas e volta-las novamente a ul
function adicionaTarefasSalvas() {
    const listaTarefas = localStorage.getItem('listaTarefas');
    const listaDeTarefas = JSON.parse(listaTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }

}
adicionaTarefasSalvas();