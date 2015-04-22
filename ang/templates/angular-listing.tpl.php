<div ng-app="nodeListing">

   <div ng-controller="ListController">

     <h3>Filter</h3>
    <input type="text" ng-model="nodeFilter">
      <ul ng-cloak>
        <li ng-repeat="node in nodes | filter:nodeFilter | orderBy:'title' | limitTo:150"><button ng-click="open(node.nid)">Open</button> {{ node.title }}</li>
      </ul>

     <script type="text/ng-template" id="loadedNodeTemplate">
     <div class="myCustomDialogBox">
     <h3>{{ loadedNode.title }}</h3>
     <div class="image"><img ng-src="{{loadedNode.image.src}}" title="{{loadedNode.image.alt}}"alt="Node Image"/></div>
     <div class="nodeBody">{{ loadedNode.body }}</div>
     <div class="nodeLink"><a href="node/{{loadedNode.nid}}">See Full Information</a>
     
     </div>
     </script>

    </div>

</div>

