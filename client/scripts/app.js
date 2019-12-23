var app = angular.module('app',['ui.router','ngResource','ui.bootstrap','toaster']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {
    $httpProvider.interceptors.push('loadingFactory');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: 'partials/view.html',
            controller:'viewController',
            controllerAs:'view'
        })
        .state('result', {
            url:'/result',
            templateUrl: 'partials/result.html',
            controller:'resultController',
            controllerAs:'result'
        })
});

