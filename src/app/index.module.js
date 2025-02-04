(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('escolaOnline', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // Sample
            'app.sample',
            'app.painel',
            'app.auth'
        ]);
})();