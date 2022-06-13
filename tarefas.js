class Task {
    constructor(nome, categoria, realizada=false) {
      this.nome = nome
      this.categoria = categoria
      this.realizada = realizada
    }
  }
  
  const tasks = [
    new Task('Comprar laranja', 'Compras',false),
    new Task('Escutar calypso', 'Lazer', true)
  ]