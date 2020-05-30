(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.curso.turmas', CursoTurmasController);

    /** @ngInject */
    function CursoTurmasController($scope, $mdDialog, $mdToast, CursoData, TurmasData, turmasApi)
    {
        var cursoTurmas = this;

        console.log("controller curso turmas chamado!");

        // Data
        $scope.TurmasData = TurmasData;
        $scope.CursoData = CursoData;

        cursoTurmas.botaoCriarTurma = botaoCriarTurma;
        cursoTurmas.visualizarTurma  = visualizarTurma;
        cursoTurmas.botaoExcluir = botaoExcluir;
        cursoTurmas.botaoEditar  = botaoEditar;

        function botaoCriarTurma(ev) {
            $mdDialog.show({
                controller: 'CursosController.curso.turmas.dialogs.cadastrarTurma as cadTurma',
                templateUrl: 'app/main/painel/cursos/turmas/dialogs/cadastrarTurma/cadastrarTurma.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {CursoData: CursoData}
            }).then(function () {
                
                turmasApi.get().curso($scope.CursoData.id).then(function (response) {
                    $scope.TurmasData = response;
                });

            }, function () {
                
            });
        }

        function visualizarTurma(ev, elemento_id, turma_id) {
            $mdDialog.show({
                controller: 'CursosController.curso.turmas.dialogs.visualizarTurma as visuTurma',
                templateUrl: 'app/main/painel/cursos/turmas/dialogs/visualizarTurma/visualizarTurma.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                resolve: {
                    TurmaData : function ($q) {
                        var deferred = $q.defer();

                        turmasApi.get().turma(turma_id).then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    }
                } 
                    
            });
        }


        function botaoEditar(ev, elemento_id, turma_id) {
            $mdDialog.show({
                controller: 'CursosController.curso.turmas.dialogs.atualizarTurma as attTurma',
                templateUrl: 'app/main/painel/cursos/turmas/dialogs/atualizarTurma/atualizarTurma.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                resolve: {
                    TurmaData : function ($q) {
                        var deferred = $q.defer();

                        turmasApi.get().turma(turma_id).then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    }
                } 
            }).then(function () {
                turmasApi.get().curso($scope.CursoData.id).then(function (response) {
                    $scope.TurmasData = response;
                });
            }, function () {

            });
        }           

        function botaoExcluir(ev, elemento_id, turma_id) {
            var confirm = $mdDialog.confirm()
                .title('Deseja excluir?')
                .textContent('Realmente deseja excluir esta turma: '+ $scope.TurmasData[elemento_id].nome +'?')
                .ariaLabel('Excluir turma')
                .targetEvent(ev)
                .ok('Excluir')
                .cancel('Cancelar');

            $mdDialog.show(confirm).then(function() {
                turmasApi.delete(turma_id).then(function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Turma deletada com sucesso!')
                            .position("bottom right")
                            .hideDelay(3000)
                        );

                    turmasApi.get().curso($scope.CursoData.id).then(function (response) {
                        $scope.TurmasData = response;
                    });
                }, function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Houve um problema ao deletar a turma, tente novamente!')
                            .position("bottom right")
                            .hideDelay(3000)
                        );
                })

            }, function() {
                
            });
        }           
    }
})();
