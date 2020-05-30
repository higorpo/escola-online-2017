(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('DisciplinasController', DisciplinasController);

    /** @ngInject */
    function DisciplinasController()
    {
        var vm = this;

        // Data
        console.log("controller disciplinas chamado!");

        vm.botaoCriarDisciplina = botaoCriarDisciplina;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function botaoCriarDisciplina() {
            alert("Criando nova disciplina");
        }

        function botaoEditar(elemento_id, disciplina_id) {
            alert("Você está editando a disciplina de id " + disciplina_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, disciplina_id) {
            alert("Você está excluindo a disciplina de id " + disciplina_id + " do elemento " + elemento_id);
        }           
    }
})();
