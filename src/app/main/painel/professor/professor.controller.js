(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('ProfessorController', ProfessorController);

    /** @ngInject */
    function ProfessorController()
    {
        var vm = this;

        // Data
        console.log("controller professor chamado!");


        vm.botaoCriarProfessor = botaoCriarProfessor;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function botaoCriarProfessor() {
            alert("Criando novo professor");
        }

        function botaoEditar(elemento_id, pessoa_id) {
            alert("Você está editando a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, pessoa_id) {
            alert("Você está excluindo a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }  
           
    }
})();
