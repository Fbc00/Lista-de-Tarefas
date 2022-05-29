const tarefa = document.querySelector('.tarefa');
const form = document.querySelector('.form');
const ul = document.querySelector('.ul');



function criali() {
    const li = document.createElement('li');
    return li
}

function setResult() {
    if(!tarefa.value) { alert('Digite uma tarefa'); return }
    li = criali();
    li.innerHTML = tarefa.value + ' <button class="remove" onclick="remove()">Deletar</button>';
    ul.appendChild(li);
    limpaInput();
    salvarTarefa();
}

function limpaInput() {
    tarefa.value = '';
    tarefa.focus();
    
}


form.addEventListener('submit', function (e) { 
    e.preventDefault();
});

function remove() { 
    const butao = document.querySelector('.remove');
    butao.parentElement.remove();
    salvarTarefa();
   
}


function salvarTarefa() {
    const tarefas = document.querySelectorAll('li');
    const tarefasArray = [];
    tarefas.forEach(element => {
        let tarefa = element.innerText.replace('Deletar', '').trim();
        tarefasArray.push(tarefa);
        const tarefasJson = JSON.stringify(tarefasArray);
        localStorage.setItem('tarefas', tarefasJson);

    });
}

(function adicionaTarefasSalvas() {
    window.onload = function () { 
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        tarefas.forEach(element => {
            li = criali();
            li.innerHTML = element + ' <button class="remove" onclick="remove()">Deletar</button>';
            ul.appendChild(li);
        });
    }
})();