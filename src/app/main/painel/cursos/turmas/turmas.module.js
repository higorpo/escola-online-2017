(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.painel.cursos.cursoTurma', {
                url    : '/curso/:curso_id/turmas',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/cursos/turmas/turmas.html',
                        controller : 'CursosController.curso.turmas as cursoTurmas'
                    }
                },
                resolve: {
                    CursoData: function ($stateParams, $q, cursoApi) {
                        var deferred = $q.defer();
                        
                        cursoApi.get($stateParams.curso_id).then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    },
                    TurmasData: function ($stateParams, $q, turmasApi) {
                        var deferred = $q.defer();
                        
                        turmasApi.get().curso($stateParams.curso_id).then(function (response) {
                            deferred.resolve(response);
                        }, function () {
                            deferred.resolve([]);
                        });

                        return deferred.promise;
                    }
                }
            });
    }

})();