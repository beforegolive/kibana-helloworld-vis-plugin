import uiModules from 'ui/modules';

const module = uiModules.get('kibana/jx-minimal-plugin', ['kibana']);

module.controller('HelloWorldController', function($scope, Private){
  $scope.label = 'Hello World'
})
