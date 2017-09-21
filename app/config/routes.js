(function(){
    angular.module('webGestor').config([
        '$stateProvider',
        '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider){
            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html'
            })

            $urlRouterProvider.otherwise('/dashboard')
        }
    ])
    .run([
        '$rootScope',
        '$http',
        '$location',
        '$window',
        function($rootScope, $http, $location, $window){
            validateUser()
            $rootScope.$on('$locationChangeStart', () => validateUser())

            function validateUser(){
                console.log('Coloque aqui to que desejar que seja executado a casa mudança de state.')
            }
        }
    ])
})()