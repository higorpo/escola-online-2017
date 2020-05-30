(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.dialogs.atualizarCurso', AtualizarCursoController);

    /** @ngInject */
    function AtualizarCursoController($scope, $mdDialog, $mdToast, CursoData, cursoApi)
    {
        var attCurso = this;

        console.log("cadastrar cursos controller cursos chamado!");
        
        // Corrigir problema
        CursoData.carga_horaria = Number.parseInt(CursoData.carga_horaria);
        CursoData.duracao = Number.parseInt(CursoData.duracao);

        // Data
        $scope.CursoData = CursoData;

        // Functions
        attCurso.cancel = cancel;
        attCurso.atualizarCurso = atualizarCurso;

        // ----------------

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }

        function atualizarCurso(nome, descricao, carga_horaria, duracao) {
            if(nome == CursoData.nome && descricao == CursoData.descricao && carga_horaria == CursoData.carga_horaria && duracao == CursoData.duracao) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Você não fez nenhuma alteração!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );

                cancel();
                return 0;
            }

            if(nome == null || carga_horaria == null || duracao == null || nome.length < 1 || carga_horaria.length < 1 || duracao.length < 1) {
                return 0;
            }

            if(descricao == null || descricao == undefined || descricao.length < 1) {
                descricao = null;
            }

            cursoApi.update(CursoData.id, nome, descricao, carga_horaria, duracao).then(function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Curso atualizado com sucesso!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                $mdDialog.hide();
            }, function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Houve algum problema na atualização, tente novamente!')
                        .position("bottom right")
                        .hideDelay(3000)
                    );
                console.error("Erro ao atualizar o curso!", response);
            });
        }
    }
})();
