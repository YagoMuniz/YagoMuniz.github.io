
var pessoa = {
	nome: "Yago Muniz",
	cargo: "Desenvolvedor de Software",
	img: "perfil.png"
}
document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.img;