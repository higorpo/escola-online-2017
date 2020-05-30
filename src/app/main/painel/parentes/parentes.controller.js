(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('ParentesController', ParentesController);

    /** @ngInject */
    function ParentesController()
    {
        var vm = this;

        // Data
        console.log("controller parentes chamado!");

        vm.botaoCriarParente = botaoCriarParente;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function botaoCriarParente() {
            alert("Criando novo parente");
        }

        function botaoEditar(elemento_id, pessoa_id) {
            alert("Você está editando a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }           

        function botaoExcluir(elemento_id, pessoa_id) {
            alert("Você está excluindo a pessoa de id " + pessoa_id + " do elemento " + elemento_id);
        }           
    }
})();
