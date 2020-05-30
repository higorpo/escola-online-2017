(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.curso.turmas.dialogs.atualizarTurma', AtualizarTurmaCursoController);

    /** @ngInject */
    function AtualizarTurmaCursoController($scope, $mdDialog, $mdToast, $q, turmasApi, alunosApi, professoresApi, anoletivoApi, TurmaData)
    {
        var attTurma = this;

        // Data
        console.log("atualizar turma curso controller cursos chamado!");
        attTurma.anosLetivos = {};

        $scope.TurmaData = TurmaData;

        console.log($scope.TurmaData);

        // Functions
        attTurma.cancel = cancel;
        attTurma.atualizarTurma = atualizarTurma;
        attTurma.queryProfessoresSearch = queryProfessoresSearch;
        attTurma.queryAlunosSearch = queryAlunosSearch;

        // ----------------

        init();

        function init() {
            anoletivoApi.get().anos().then(function (response) {
                attTurma.anosLetivos = response;
            });
        }

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }

        function atualizarTurma(nome, ano_letivo, lider, vice_lider, regente, turno) {
            if(nome == null || ano_letivo == null || turno == null || nome.length < 1) {
                return 0;
            }

            if(lider == null) lider = {id: null};
            if(vice_lider == null) vice_lider = {id: null};
            if(regente == null) regente = {id: null};

            turmasApi.update($scope.TurmaData.id, nome, ano_letivo, lider.id, vice_lider.id, regente.id, turno).then(function (response) {
                 $mdToast.show(
                    $mdToast.simple()
                        .textContent('Turma atualizada com sucesso!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                $mdDialog.hide();
            }, function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Houve algum problema ao atualizar, tente novamente!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                console.error("Erro ao atualizar a turma!", response);
            });
        }

        function queryProfessoresSearch(query) {
            var deferred = $q.defer();

            professoresApi.get().name(query).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        }

        function queryAlunosSearch(query) {
            var deferred = $q.defer();

            alunosApi.get().name(query).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        }


    }
})();
