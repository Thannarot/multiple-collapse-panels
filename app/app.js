(function() {
    'use strict';
    angular.module('app', []);
    angular.module('app').controller('MainController', MainController);
    function MainController($scope,appSettings){
      $scope.const = appSettings;
      console.log(appSettings.applicationName);
    }
})();
