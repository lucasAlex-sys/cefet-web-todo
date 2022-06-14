const listTasks = document.querySelector("#lista-tarefas")
const addTask = document.getElementById('incluir-nova-tarefa');
const newTask = document.getElementById('nova-tarefa-nome');
const newCategory = document.getElementById('nova-tarefa-categoria');
const tasks = []
class Task {
  constructor(nome, categoria, realizada=false) {
    this.nome = nome
    this.categoria = categoria
    this.realizada = realizada
  }
  adicionaNaPagina() {
    const itens = document.createElement("li");
    itens.classList.add("item-tarefa")
    itens.classList.add(`categoria-${this.categoria}`)
    itens.innerText = this.nome;
    if (this.realizada)
    {
        itens.classList.add("marcado")
    }
    listTasks.appendChild(itens)
  }
}

listTasks.innerHTML = "";
const exemplo1 = new Task('Comprar laranja', 'compras',false)
const exemplo2 = new Task('Escutar calypso', 'lazer', true)
exemplo1.adicionaNaPagina()
exemplo2.adicionaNaPagina()
tasks.forEach(item => item.adicionaNaPagina());

addTask.addEventListener('click', () => {
  const task = new Task(newTask.value, newCategory.value);
  tasks.push(task);
  task.adicionaNaPagina();
  newTask.value = "";
  newTask.focus();
});

  