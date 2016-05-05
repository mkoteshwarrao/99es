app.directive('cHeader', function($rootScope) {

    return {
        restrict: 'E',
        templateUrl: 'pages/header.html',
        controller: 'loginController'
    };

});

app.directive('cFooter', function() {

    return {
        restrict: 'E',
        templateUrl: 'pages/footer.html'
    };

});

app.directive('pDetails', function() {
    return {
        template: '<div>' +
            '<h2>{{item.title}}</h2>' +
            '<h2>Colour : {{item.color}}</h2>' +
            '<h2>Price : {{item.price}}</h2>' +
            '<img ng-src="{{item.image}}" width="100 px" height="100 px" />' +
            '<div>{{item.info}}</div>' +
            '<a ng-href="#/products">back</a>' +
            '</div>',
        restrict: 'E'
    };
});


app.directive('productGrid', function() {
    return {
        restrict: 'E',
        template: '<div class="container-fluid">' +
            '<table class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>category_id</th>' +
            '<th>description</th>' +
            '<th>id</th>' +
             '<th>status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr ng-repeat="item in products" ng-click="editProduct(item)">' +
            '<td>{{item.category_id}}</td>' +
            '<td>{{item.description }}</td>' +
            '<td>{{item.id }}</td>' +
            '<td>{{item.status }}</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>'
    };
})

/*
category_id:"1000"
description:"plumber"
id:"1000"
status:"1"
*/