class Gato {
	constructor(nome, peso, cor) {
		this.nome = nome;
		this.peso = peso;
		this.cor = cor;
	}
}

let gato_massa = new Gato("Dingus", 9, "Frajola")

let outro_gato = new Gato("Bingus", 7)

console.log(`O gato massa se chama ${gato_massa.nome}, pesa ${gato_massa.peso} e é de cor ${gato_massa.cor}`)
console.log(`O outro gato se chama ${outro_gato.nome}, pesa ${outro_gato.peso} e é de cor ${outro_gato.cor}`)


class Trabalhador {
	#nome;
	#idade;
	#cargo;
	constructor(nome, idade=18, cargo="Programador"){
		this.#nome = nome;
		this.#idade = idade;
		this.#cargo = cargo;
	}

	apresentacao(){
		console.log(`Este veiculo custa ${this.#nome}, possui ${this.#idade} rodas e é da marca ${this.#cargo}`);
	}

	cor_favorita(cor){
		return `${cor} é minha cor favorita e meu cargo é ${this.#cargo}`
	}

	get nome() {return this.#nome;}
	set nome(novo_nome) {
		this.#nome = novo_nome;
	}

	get idade() {return this.#idade;}
	set idade(nova_idade) {
		this.#idade = nova_idade;
	}

	get cargo() {return this.#cargo;}
	set cargo(novo_cargo) {
		this.#cargo = novo_cargo;
	}
}


let trabalhador_1 = new Trabalhador("João", 27, "Sapateiro");

let trabalhador_2 = new Trabalhador("Anonimo");

console.log(trabalhador_1);
console.log(trabalhador_2);

trabalhador_1.apresentacao();

console.log(trabalhador_2.cor_favorita("amarelo"));

//alterando informações com getters e setters

trabalhador_2.idade = 21;
trabalhador_2.cargo = "pescador";
trabalhador_2.nome = "Zé";

console.log(trabalhador_2);


class Veiculo {
	constructor(cor, velocidade_atual, velocidade_maxima){
		this.cor = cor;
		this.velocidade_atual = velocidade_atual;
		this.velocidade_maxima = velocidade_maxima;
	}

	acelera(aumento_velocidade){
		if (this.aumento_velocidade > 0) {
			this.velocidade_atual += aumento_velocidade;
		}
	}

	move(){
		console.log(`O veículo está se movendo a ${this.velocidade_atual}`)
	}
}

class Tanque extends Veiculo {
	constructor(cor, velocidade_atual, velocidade_maxima, quantidade_tiros){
		super(cor, velocidade_atual, velocidade_maxima);
		this.quantidade_tiros = quantidade_tiros;
	}

	atirar() {
		console.log('Atirando!')
	}
}


//prototype

class Pessoa {
	constructor(nome, sobrenome){
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	dizoi() {
		console.log(`prazer, me chamo ${this.nome} ${this.sobrenome}`)
	}
}

let pessoa1 = new Pessoa("Fernando", "Nando");

Pessoa.prototype.diz_tchau = function() {
	console.log("Tchau");
}

Pessoa.prototype.cor_favorita;

console.log(pessoa1);

pessoa1.cor_favorita = "Amarela";

console.log(pessoa1);