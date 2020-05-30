(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.curso.turmas.dialogs.visualizarTurma', VisualizarTurmaCursoController);

    /** @ngInject */
    function VisualizarTurmaCursoController($scope, $mdDialog, TurmaData)
    {
        var visuTurma = this;

        // Data
        console.log("visualizar turma curso controller cursos chamado!");

        $scope.TurmaData = TurmaData;

        // Functions
        visuTurma.cancel = cancel;

        // ----------------

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }
    }
})();
