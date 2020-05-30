(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('AlunoController', AlunoController);

    /** @ngInject */
    function AlunoController()
    {
        var vm = this;

        // Data
        console.log("controller aluno chamado!");

        
        vm.botaoCriarAluno = botaoCriarAluno;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function botaoCriarAluno() {
            alert("Criando novo aluno");
        }

        function botaoEditar(elemento_id, pessoa_id) {
            alert("Você está editando a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, pessoa_id) {
            alert("Você está excluindo a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }           
    }
})();
