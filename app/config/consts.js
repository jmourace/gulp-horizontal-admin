angular.module('webGestor').constant('consts', {
    appName: 'WebGestor - Gestor',
    version: '1.0',
    owner: 'WebMoura Desenvolvimento Web',
    ownerUrl: 'http://www.webmoura.com',
    year: '2017',
    apiUrl: 'http://localhost:3003/api'    
}).run(['$rootScope', 'consts', function($rootScope, consts){
    $rootScope.consts = consts
}])