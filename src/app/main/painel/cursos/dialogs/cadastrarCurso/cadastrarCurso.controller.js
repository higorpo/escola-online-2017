(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('CursosController.dialogs.cadastrarCurso', CadastrarCursosController);

    /** @ngInject */
    function CadastrarCursosController($mdDialog, $mdToast, cursoApi)
    {
        var cadCurso = this;

        // Data
        console.log("cadastrar cursos controller cursos chamado!");

        // Functions
        cadCurso.cancel = cancel;
        cadCurso.cadastrarCurso = cadastrarCurso;

        // ----------------

        /* Cancela a dialog */
        function cancel() {
            $mdDialog.cancel();
        }

        function cadastrarCurso(nome, descricao, carga_horaria, duracao) {
            if(nome == null || carga_horaria == null || duracao == null || nome.length < 1 || carga_horaria.length < 1 || duracao.length < 1) {
                return 0;
            }

            if(descricao == null || descricao == undefined || descricao.length < 1) {
                descricao = null;
            }

            cursoApi.create(nome, descricao, carga_horaria, duracao).then(function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Curso cadastrado com sucesso!')
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
                console.error("Erro ao criar o curso!", response);
            });
        }
    }
})();
