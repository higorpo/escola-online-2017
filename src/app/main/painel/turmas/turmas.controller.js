(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('TurmasController', TurmasController);

    /** @ngInject */
    function TurmasController()
    {
        var vm = this;

        // Data
        console.log("controller turmas chamado!");

        vm.botaoCriarTurma = botaoCriarTurma;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function botaoCriarTurma() {
            alert("Criando nova turma");
        }

        function botaoEditar(elemento_id, disciplina_id) {
            alert("Você está editando a turma de id " + disciplina_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, disciplina_id) {
            alert("Você está excluindo a turma de id " + disciplina_id + " do elemento " + elemento_id);
        }           
    }
})();
