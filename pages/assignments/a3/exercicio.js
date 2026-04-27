let notebook = {
	marca: "a",
	RAM_GB: 0,
	GPU_GB: 0,
	tela: 0.0,
	preco: 0.0
};

const input_usuario = () => {
	
	notebook.marca = prompt("Marca: ");
	notebook.RAM_GB = prompt("Quantidade de ram: ");
	notebook.GPU_GB = prompt("Quantidade de Vram:")
	notebook.tela = prompt("Tamanho da tela: ")
	notebook.preco = prompt("Preco do notebook: ")
};

input_usuario();