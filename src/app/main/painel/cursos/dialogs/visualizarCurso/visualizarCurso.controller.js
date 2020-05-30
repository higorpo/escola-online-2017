(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.dialogs.visualizarCurso', VisualizarCursoController);

    /** @ngInject */
    function VisualizarCursoController($scope, $mdDialog, $state, CursoData, CursoInfo, cursoApi)
    {
        var visuCurso = this;

        console.log("visualizar cursos controller cursos chamado!");
        
        // Data
        $scope.CursoData = CursoData;
        $scope.CursoInfo = CursoInfo;

        // Functions
        visuCurso.cancel = cancel;
        visuCurso.visualizarTurmas = visualizarTurmas;

        // ----------------

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }

        function visualizarTurmas(cursoID) {
            cancel();
            $state.go("app.painel.cursos.cursoTurma", {curso_id: cursoID});
        }
    }
})();
