javascript
const pessoas = [
    { altura: 1.90, genero: 'Masculino' },
    { altura: 1.61, genero: 'Feminino' },
    { altura: 1.82, genero: 'Masculino' },
    { altura: 1.55, genero: 'Feminino' },
    { altura: 1.90, genero: 'Masculino' },
    { altura: 1.65, genero: 'Feminino' },
    { altura: 1.78, genero: 'Masculino' },
    { altura: 1.62, genero: 'Feminino' },
    { altura: 1.85, genero: 'Masculino' },
    { altura: 1.70, genero: 'Feminino' },
    { altura: 1.77, genero: 'Masculino' },
    { altura: 1.68, genero: 'Feminino' },
    { altura: 1.80, genero: 'Masculino' },
    { altura: 1.64, genero: 'Feminino' },
    { altura: 1.72, genero: 'Masculino' }
];

let maiorAltura = Math.max(...pessoas.map(p => p.altura));
let menorAltura = Math.min(...pessoas.map(p => p.altura));

let alturasMasculinas = pessoas.filter(p => p.genero === 'Masculino').map(p => p.altura);
let mediaAlturaMasculina = alturasMasculinas.reduce((a, b) => a + b, 0) / alturasMasculinas.length;

let numeroFeminino = pessoas.filter(p => p.genero === 'Feminino').length;

console.log(
Maior altura: ${maiorAltura}
);
console.log(
Menor altura: ${menorAltura}
);
console.log(
Média de altura dos Masculinos: ${mediaAlturaMasculina}
);
console.log(
Número de pessoas do gênero Feminino: ${numeroFeminino}
);
