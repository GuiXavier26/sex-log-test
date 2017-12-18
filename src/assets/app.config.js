(function() {

    'use strict';

    angular
        .module("app")
        .config(Config);

    Config.$inject = ['$mdThemingProvider'];

    function Config($mdThemingProvider){

        var purplePalette = $mdThemingProvider.extendPalette('indigo', {
            '500': '#661577',
          });
          $mdThemingProvider.definePalette('indigo',purplePalette);
          
          $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
        

          
          var whitePalette = $mdThemingProvider.extendPalette('pink', {
              '500': '#FAFAFA',
            });
          
          $mdThemingProvider.definePalette('white',whitePalette);
            $mdThemingProvider.theme('white')
            .primaryPalette('white')
        

    }
 
    


})();



