(function() {
    'use strict';
    angular.module('uigrid', [])

    .directive('kDataGrid', function() {
        return {
            template: '<input type="text"  ng-model="filterdata"/> <table class="table">' +
                '    <thead>' +
                '        <tr class="rch">' +
                '            <th ng-hide="title.hide" ng-repeat="title in data.columns">{{title.title}}' +
                '             <span class="glyphicon glyphicon-sort" ng-click="sortColumn($event,title.field)"  ></span> </th>' +
                '            <th ng-show="data.rowdelete"></th>' +
                '       </tr>' +
                '    </thead>' +
                '    <tbody>' +
                '        <tr ng-repeat="item in data.data | filter:filterdata " >' +
                '            <td ng-hide="title.hide" ng-click="selectRow($event,item)" ' +
                '            ng-repeat="title in data.columns">{{item[title.field]}}</td>' +
                '            <td ng-show="data.rowdelete"  >' +
                '               <span class="glyphicon glyphicon-remove" style="cursor: pointer;" ng-click="delete($event,item)"></span></td>' +
                '        </tr>' +
                '    </tbody>' +
                '</table>',
            restrict: 'E',

            scope: {
                data: "=dataprovider",
                rowSelected: "=rowSelected",
                deleteItem: "=deleteItem"
            },
            controller: function($scope, $filter) {
                $scope.filterdata = '';
                $scope.selectedItem = $scope.selectedItem || {};
                $scope.selectRow = function($event, item) {

                    $scope.selectedItem = item;
                    $scope.rowSelected($scope.selectedItem);
                    $($event.target.parentElement).addClass("selected").siblings().removeClass("selected");
                }

                $scope.delete = function($event, item) {
                    $scope.deleteItem(item);
                }

                $scope.sortColumn = function($event, field) {

                    $scope.data.data = $filter('orderBy')($scope.data.data, field);

                }

            }
        }
    })

    .directive('showhide', ['$document', function($document) {
        return {
            restrict: 'A',
            multiElement: true,
            scope: {
                showele: '=',
                ignore: '@'
            },
            link: function(scope, element, attr) {
                scope.$watch('showele', function(value) {
                    if (value) {
                        element.addClass('show');
                        $document.on('click', onClick);
                    } else {
                        element.removeClass('show');
                         $document.off('click', onClick);
                    }
                });
                
                var onClick = function(event) {
                    debugger;
                    event.stopPropagation();

                   if(!$(event.target).parents().andSelf().is(element) && (event.target != $(scope.ignore)[0]))
                   {
                        debugger;
                        scope.$apply(function() {
                            scope.showele= false;
                        });
                   }
                };

                scope.$on('$destroy', function() {
                    $document.off('click', onClick);
                });
            }
        };
    }])

})();
