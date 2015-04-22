(function() {
  'use strict';
  
  angular.module('nodeListing', ['ngResource', 'ngDialog'])
  
    // Factory for the ngResource service.
    .factory('Node', function($resource) {
      return $resource(Drupal.settings.basePath + 'api/node/:param', {}, {
        'search' : {method : 'GET', isArray : true}
      });
    })
     
    .controller('ListController', ['$scope', 'Node', 'ngDialog', function($scope, Node, ngDialog) {
      // Initial list of nodes.
      $scope.nodes = Node.query();
  
      // Callback to load the node info in the modal
      $scope.open = function(nid) {
        $scope.loadedNode = Node.get({param: nid});
        ngDialog.open({
          template: 'loadedNodeTemplate',
          scope: $scope
        });
      };
  
    }]);
})();
