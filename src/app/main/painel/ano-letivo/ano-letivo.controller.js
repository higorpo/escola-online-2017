(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('AnoLetivoController', AnoLetivoController);

    /** @ngInject */
    function AnoLetivoController()
    {
        var vm = this;

        // Data
        console.log("controller ano letivo chamado!");

        vm.botaoCriarAnoLetivo = botaoCriarAnoLetivo;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;
        vm.botaoCriarSemestre = botaoCriarSemestre;
        vm.botaoExcluirSemestre = botaoExcluirSemestre;
        vm.botaoEditarSemestre  = botaoEditarSemestre;

        function botaoCriarAnoLetivo() {
            alert("Criando novo curso");
        }

        function botaoEditar(elemento_id, disciplina_id) {
            alert("Você está editando o curso de id " + disciplina_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, disciplina_id) {
            alert("Você está excluindo o curso de id " + disciplina_id + " do elemento " + elemento_id);
        } 

        function botaoCriarSemestre() {
            alert("Criando novo semestre");
        }

        function botaoEditarSemestre(elemento_id, disciplina_id) {
            alert("Você está editando o semestre de id " + disciplina_id + " do elemento " + elemento_id);
        }           

        function botaoExcluirSemestre(elemento_id, disciplina_id) {
            alert("Você está excluindo o semestre de id " + disciplina_id + " do elemento " + elemento_id);
        }           
    }
})();
