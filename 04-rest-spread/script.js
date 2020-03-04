function showList(empresa, ...clients) {
  console.log(empresa);
  console.log(clients);
}
showList('Origamid', 'João', 'Maria');


const numeros = [1, 2, 3, 4, 5, 6, 29, 30, 50];


console.log(Math.max(...numeros));

const items = document.querySelectorAll('li');

console.log(items);
// items.forEach(item => {
//   console.log(item);
// })
[...items].forEach(item => {
  console.log(item);
})

const carro = {
  cor: 'Azul',
  portas: 4,
  anos: 2020
}

class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log('andou');
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const cloneCarro = {...carro, turbo: true};
console.log(cloneCarro);

const novoCarro = new Carro('Vermelho', 4);

const cloneNovoCarro = {...novoCarro};

console.log(novoCarro);
console.log(cloneNovoCarro);
