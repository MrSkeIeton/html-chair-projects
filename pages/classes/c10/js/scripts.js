
//let cor_favorita = prompt("Qual sua cor favorita?");
//alert('Sua cor favorita é ${cor_favorita}');

const nomes = ["Bingus", "Dingus", "Maxwell"];

const valores = new Array(10); //cria um array com 10 posições de valores undefined

console.log('Tamanho do Array nomes ${nomes.lenght}');

nomes.push("Flopa");

console.log(nomes);

const dingus = nomes.find(function(nome) { return nome == "Dingus"});

const dingus2 = nomes.find(nome => nome == "Dingus");

console.log(dingus);

let pos_dingus = nomes.indexOf("Digus");

let numeros = [27,12,20,23,42,77,6]

let sapato = {

	idade: 10,
	furos: 7,
	usavel: true,
	cor: "verde",
	marca: "sei la"
}

console.log(sapato.furos)


function funcao_especial() {
	console.log("Essa função é especial");
}

funcao_especial();

const funcao_muito_especial = function() {
	console.log("Essa função é muito mais especial");
}

funcao_muito_especial();

const func_argumento = function(valor) {
	console.log(`Argumento recebido é ${valor}`)
}

func_argumento("h");
func_argumento(1);
func_argumento(undefined);
func_argumento(null);
func_argumento(8/0);



const soma_valores = function(numero1, numero2) {
	return numero1 + numero2
};

let soma = soma_valores(77,33);

console.log(soma);

// ARROW FUCNTION

const print_x = function(x) {
	console.log(x);
}

const print_y = (y) => console.log(y);

const soma_valores_2 = (valor1, valor2) => valor1 + valor2;

const num_quadrado = [12,13,14,15,16];

num_quadrado.forEach( n => {
	if (n % 2 !== 0)
		console.log(n*n);
	}
);


let previsao_numeros_megasena = {
	casa1: 2,
	casa2: 8,
	casa3: 12,
	casa4: 87,
	casa5: 1,
	casa6: 0,
	casa7: 27
};

let letras  = ["A","B","C","D","E"];

let alfanumerico = [...letras];


const soma_infinita = (...params) => {
	let total = 0;
	for (let i = 0; i <params.length; i++) 
		total += params[i]

	return total;
}

console.log(soma_infinita(0,2,3,4,5,6,7,8,9,10))