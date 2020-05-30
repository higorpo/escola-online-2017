(function ()
{
    'use strict';

    angular
        .module('app.core')
        .config(config);

    /** @ngInject */
    function config(msApiProvider)
    {
        // user
        msApiProvider.register('cursos.get', ['http://localhost/TCC/api/cursos/list']);
        msApiProvider.register('curso', ['http://localhost/TCC/api/cursos/curso']);
        msApiProvider.register('cursoInfo', ['http://localhost/TCC/api/curso/info']);
        msApiProvider.register('cursoTurmas', ['http://localhost/TCC/api/curso/turmas']);
        msApiProvider.register('usuario', ['http://localhost/TCC/api/usuarios/usuario']);
        msApiProvider.register('anoletivo.anos', ['http://localhost/TCC/api/anoletivo/anos']);
        msApiProvider.register('turmas', ['http://localhost/TCC/api/turmas/turma']);
        msApiProvider.register('alunos', ['app/data/alunos.json']);
    }
})();