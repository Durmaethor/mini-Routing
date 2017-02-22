angular.module('miniRouting', [ui.router]);

.config(function($urlRouterProvider, $stateProvider){

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
        })

        .state('products', {
            url: 'js/products/:id',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        })
    
   
});