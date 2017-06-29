import _ from 'lodash';
import uiModules from 'ui/modules';
import labelFilter from 'ui/filters/label';

uiModules
.get('app/visualize')
.directive('visAggParamEditor', function (config, $parse, Private) {
  return {
    restrict: 'E',
    scope: true,
    template: function ($el) {
      return $el.html();
    },
    link: {
      pre: function ($scope, $el, attr) {
        $scope.$bind('aggParam', attr.aggParam);
        $scope.labelOrName = $scope.aggParam.label ? $scope.aggParam.label : labelFilter($scope.aggParam.name);
      },
      post: function ($scope, $el, attr) {
        $scope.config = config;

        $scope.optionEnabled = function (option) {
          if (option && _.isFunction(option.enabled)) {
            return option.enabled($scope.agg);
          }

          return true;
        };
      }
    }
  };
});
