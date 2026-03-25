class Funcionario {
	constructor (nome="",sobrenome="",anos_trabalhando=0) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.anos_trabalhando = anos_trabalhando;
	}
}

let funcionario1 = new Funcionario("Analice", "Soares", 12);
let funcionario2 = new Funcionario("Aurora", "Cardoso", 7);
let funcionario3 = new Funcionario("André", "Cardoso", 6);
let funcionario4 = new Funcionario("Fernando", "Fernandes", 1);
let funcionario5 = new Funcionario("João", "Saraiva", 3);

const lista_funcinarios = [funcionario1,funcionario2,funcionario3,funcionario4,funcionario5];

Funcionario.prototype.get_informacoes = function() {
	return `Nome do funcionario: ${this.nome} ${this.sobrenome}\nAnos na impresa: ${this.anos_trabalhando}`;
}

for (let i = 0; i < lista_funcinarios.length; i++) {
	console.log(lista_funcinarios[i].get_informacoes());
}