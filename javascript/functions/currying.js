// separar funções com muitos argumentos
// em funções menores onde cada função usa um argumento
// da primeira função

// função simples que retorna multiplicação de a e b
const multiply = (a, b) => ( a * b );

const result = multiply(3, 4);
console.log(result);

// recebe função de a,
// retorna função que recebe b e retorna a saida de uma função usando a e b
const curryedMultiply = (a) => ( (b) => multiply(a, b) );
const triple = curryedMultiply(3);

const curryedResult = triple(4);
console.log(curryedResult);
