let notebook = {
	marca: "a",
	RAM_GB: 0,
	GPU_GB: 0,
	tela: 0.0,
	preco: 0.0
};

const input_usuario = () => {
	notebook.marca = prompt("Marca:");
	notebook.RAM_GB = parseInt(prompt("Quantidade de ram:"));
	notebook.GPU_GB = parseInt(prompt("Quantidade de Vram:"));
	notebook.tela = parseFloat(prompt("Tamanho da tela:"));
	notebook.preco = parseFloat(prompt("Preço do notebook:"));
};

console.log(notebook);
input_usuario();