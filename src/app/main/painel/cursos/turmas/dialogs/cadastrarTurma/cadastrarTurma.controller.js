(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.curso.turmas.dialogs.cadastrarTurma', CadastrarTurmaCursoController);

    /** @ngInject */
    function CadastrarTurmaCursoController($mdDialog, $mdToast, $q, turmasApi, professoresApi, anoletivoApi, CursoData)
    {
        var cadTurma = this;

        // Data
        console.log("cadastrar turma curso controller cursos chamado!");
        cadTurma.anosLetivos = {};

        // Functions
        cadTurma.cancel = cancel;
        cadTurma.cadastrarTurma = cadastrarTurma;
        cadTurma.queryProfessoresSearch = queryProfessoresSearch;

        // ----------------

        init();

        function init() {
            anoletivoApi.get().anos().then(function (response) {
                cadTurma.anosLetivos = response;
            });
        }

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }

        function cadastrarTurma(nome, ano_letivo, turno, regente) {
            if(nome == null || ano_letivo == null || turno == null || nome.length < 1) {
                return 0;
            }

            if(regente == null) regente = {id: null};
            console.log(regente);

            turmasApi.create(nome, ano_letivo, turno, regente.id, CursoData.id).then(function (response) {
                 $mdToast.show(
                    $mdToast.simple()
                        .textContent('Turma cadastrada com sucesso!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                $mdDialog.hide();
            }, function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Houve algum problema no cadastro, tente novamente!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                console.error("Erro ao criar a turma!", response);
            });
        }

        function queryProfessoresSearch(query) {
            var deferred = $q.defer();

            professoresApi.get().name(query).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        }


    }
})();
