(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController', CursosController);

    /** @ngInject */
    function CursosController($scope, $mdDialog, $mdToast, CursosData, cursosApi, cursoApi)
    {
        var vm = this;

        // Data
        console.log("controller cursos chamado!");

        $scope.CursosData = CursosData;

        vm.visualizarCurso = visualizarCurso;
        vm.botaoCriarCurso = botaoCriarCurso;
        vm.botaoExcluir = botaoExcluir;
        vm.botaoEditar  = botaoEditar;

        function visualizarCurso(ev, elemento_id, curso_id) {
            $mdDialog.show({
                controller: 'CursosController.dialogs.visualizarCurso as visuCurso',
                templateUrl: 'app/main/painel/cursos/dialogs/visualizarCurso/visualizarCurso.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                resolve: {
                    CursoData : function ($q) {
                        var deferred = $q.defer();

                        cursoApi.get(curso_id).then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    },
                    CursoInfo : function ($q) {
                        var deferred = $q.defer();

                        cursoApi.getDetails(curso_id).then(function (response) {
                            console.log(response);
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    }
                } 
                    
            });
        }

        function botaoCriarCurso(ev) {
            $mdDialog.show({
                controller: 'CursosController.dialogs.cadastrarCurso as cadCurso',
                templateUrl: 'app/main/painel/cursos/dialogs/cadastrarCurso/cadastrarCurso.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true
            }).then(function () {
                
                cursosApi.get().then(function (response) {
                    $scope.CursosData = response;
                });

            }, function () {
                
            });
        }

        function botaoEditar(ev, elemento_id, curso_id) {
            $mdDialog.show({
                controller: 'CursosController.dialogs.atualizarCurso as attCurso',
                templateUrl: 'app/main/painel/cursos/dialogs/atualizarCurso/atualizarCurso.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                resolve: {
                    CursoData : function ($q) {
                        var deferred = $q.defer();

                        cursoApi.get(curso_id).then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    }
                } 
                    
            }).then(function () {
                
                cursosApi.get().then(function (response) {
                    $scope.CursosData = response;
                });

            }, function () {
                
            });
        }           

        function botaoExcluir(ev, elemento_id, curso_id) {
            var confirm = $mdDialog.confirm()
                .title('Deseja excluir?')
                .textContent('Realmente deseja excluir este curso: '+ $scope.CursosData[elemento_id].nome +'?')
                .ariaLabel('Excluir curso')
                .targetEvent(ev)
                .ok('Excluir')
                .cancel('Cancelar');

            $mdDialog.show(confirm).then(function() {
                cursoApi.delete(curso_id).then(function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Curso deletado com sucesso!')
                            .position("bottom right")
                            .hideDelay(3000)
                        );

                    cursosApi.get().then(function (response) {
                        $scope.CursosData = response;
                    });
                }, function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Houve um problema ao deletar o curso, tente novamente!')
                            .position("bottom right")
                            .hideDelay(3000)
                        );
                })

            }, function() {
                
            });
        }           
    }
})();
