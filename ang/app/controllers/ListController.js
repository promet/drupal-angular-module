(function () {
  var ListController = function($scope, Node, NGDialog) {
    $scope.nodes = Node.query();

    // Callback to load the node info in the modal
    $scope.open = function(nid) {
      $scope.loadedNode = Node.get({param: nid});
      ngDialog.open({
        template: 'loadedNodeTemplate',
        scope: $scope
      });
    };
    
    ListController.$inject = ['$scope', 'Node', 'ngDialog'];
    
    angular.module('nodeListing').controller('ListController', ListController);
  };
}());
