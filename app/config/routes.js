(function(){
    angular.module('fenixGestor').config([
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
})()