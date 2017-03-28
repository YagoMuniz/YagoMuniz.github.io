
var app = angular.module("sitePessoal", ['ngRoute']);

app.controller("mainController", function($scope) {
	$scope.nome = "Yago Muniz";
	$scope.cargo = "Desenvolvedor de Software";
	$scope.img = "perfil.png";

	$scope.resumo = [
		"Graduando em Sistemas de Informação, atualmente no 2º período. Concluinte Eletrônia na Escola Técnica Redentorista, Técnico em TI na Escola Virgem de Lourdes."
	]
	$scope.habilidades = [
		{
			linguagem : "C/C++",
			plataforma : "(Desktop)"
		},
		{
			linguagem : "Java",
			plataforma : "(Desktop e Mobile)"
		},
		{
			linguagem : "Python",
			plataforma : "(Desktop e Web)"
		},
		{
			linguagem : "Golang",
			plataforma : "(Web)"
		},
		{
			linguagem : "C#",
			plataforma : "(Desktop e Mobile)"
		}

	]
	$scope.experiencia = ["Experiência como técnico em telecomunicações na empresa Ensel Engenharias, São Paulo - SP, service-desk na empresa Softcom, Campina Grande - PB e desenvolvedor de software na empresa Factory Software."]

	$scope.ano = new Date().getFullYear();

	$scope.orcamentos = [];

	$scope.solicitarOrcamento = function (orcamento) {
		$scope.orcamentos.push(orcamento);
		console.log($scope.orcamentos);
	}
});
