(function ()
{
    'use strict';

    angular
        .module('app.core')
        .config(config);

    /** @ngInject */
    function config($mdThemingProvider, $ariaProvider, $logProvider, $provide, msScrollConfigProvider, fuseConfigProvider)
    {

        // Configure the colors
        $mdThemingProvider.definePalette('escolaOnlineTheme', {
            '50': 'FF6B6B',
            '100': 'FA5050',
            '200': 'F63030',
            '300': 'E52525',
            '400': 'D82121',
            '500': 'CB1D1D',
            '600': 'BA1A1A',
            '700': 'A41B1B',
            '800': '951919',
            '900': '841616',
            
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
          });

        $mdThemingProvider.theme('default')
            .primaryPalette('escolaOnlineTheme')
            .accentPalette('red')
            .warnPalette('deep-orange');


        // Enable debug logging
        $logProvider.debugEnabled(true);

        /*eslint-disable */

        // ng-aria configuration
        $ariaProvider.config({
            tabindex: false
        });

        // Fuse theme configurations
        fuseConfigProvider.config({
            'disableCustomScrollbars'        : false,
            'disableCustomScrollbarsOnMobile': true,
            'disableMdInkRippleOnMobile'     : true
        });

        // msScroll configuration
        msScrollConfigProvider.config({
            wheelPropagation: true
        });

        /*eslint-enable */

        /* Locale settings */
        var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
        $provide.value("$locale", {
            "DATETIME_FORMATS": {
                "AMPMS": [
                    "AM",
                    "PM"
                ],
                "DAY": [
                    "domingo",
                    "segunda-feira",
                    "ter\u00e7a-feira",
                    "quarta-feira",
                    "quinta-feira",
                    "sexta-feira",
                    "s\u00e1bado"
                ],
                "ERANAMES": [
                    "Antes de Cristo",
                    "Ano do Senhor"
                ],
                "ERAS": [
                    "a.C.",
                    "d.C."
                ],
                "FIRSTDAYOFWEEK": 6,
                "MONTH": [
                    "janeiro",
                    "fevereiro",
                    "mar\u00e7o",
                    "abril",
                    "maio",
                    "junho",
                    "julho",
                    "agosto",
                    "setembro",
                    "outubro",
                    "novembro",
                    "dezembro"
                ],
                "SHORTDAY": [
                    "dom",
                    "seg",
                    "ter",
                    "qua",
                    "qui",
                    "sex",
                    "s\u00e1b"
                ],
                "SHORTMONTH": [
                    "jan",
                    "fev",
                    "mar",
                    "abr",
                    "mai",
                    "jun",
                    "jul",
                    "ago",
                    "set",
                    "out",
                    "nov",
                    "dez"
                ],
                "STANDALONEMONTH": [
                    "janeiro",
                    "fevereiro",
                    "mar\u00e7o",
                    "abril",
                    "maio",
                    "junho",
                    "julho",
                    "agosto",
                    "setembro",
                    "outubro",
                    "novembro",
                    "dezembro"
                ],
                "WEEKENDRANGE": [
                    5,
                    6
                ],
                "fullDate": "EEEE, d 'de' MMMM 'de' y",
                "longDate": "d 'de' MMMM 'de' y",
                "medium": "d 'de' MMM 'de' y HH:mm:ss",
                "mediumDate": "d 'de' MMM 'de' y",
                "mediumTime": "HH:mm:ss",
                "short": "dd/MM/yy HH:mm",
                "shortDate": "dd/MM/yy",
                "shortTime": "HH:mm"
            },
            "NUMBER_FORMATS": {
                "CURRENCY_SYM": "R$",
                "DECIMAL_SEP": ",",
                "GROUP_SEP": ".",
                "PATTERNS": [
                    {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                    },
                    {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "-\u00a4",
                    "negSuf": "",
                    "posPre": "\u00a4",
                    "posSuf": ""
                    }
                ]
            },
            "id": "pt-br",
            "localeID": "pt_BR",
            "pluralCat": function(n, opt_precision) {  if (n >= 0 && n <= 2 && n != 2) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
        });
    }
})();