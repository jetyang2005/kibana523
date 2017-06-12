import _ from 'lodash';
import uiModules from 'ui/modules';
import fieldsTableTemplate from 'ui/fields_table/views/fields_table.html';
import IndicesEditSectionsProvider from 'plugins/kibana/management/sections/indices/_edit_sections';
const app = uiModules.get('kibana');

app.directive('fieldsTable', function (Private) {

  return {
    restrict: 'E',
    scope: {
      objectType: '@',
      objectId: '@',
      allowEmbed: '@',
    },
    template: fieldsTableTemplate,
    controllerAs: 'fieldsTable',
    controller: function ($scope, $route, Private, AppState, docTitle) {

      const $state = $scope.state = new AppState();
      $scope.indexPattern = $route.current.scope.vis.indexPattern;
      docTitle.change($scope.indexPattern);
      const otherIds = _.without($route.current.locals.indexPatternIds, $scope.indexPattern);
      $scope.$watch('indexPattern.fields', function () {
        $scope.editSections = Private(IndicesEditSectionsProvider)($scope.indexPattern);
      });
      $scope.changeTab = function (obj) {
        $state.tab = obj.index;
        $state.save();
      };

      $scope.$watch('state.tab', function (tab) {
        if (!tab) $scope.changeTab($scope.editSections[0]);
      });
      $scope.$watchCollection('indexPattern.fields', function () {
        $scope.conflictFields = _.filter($scope.indexPattern.fields, {type: 'conflict'});
      });

      $scope.refreshFields = function () {
        $scope.indexPattern.refreshFields();
      };

      $scope.removePattern = function () {
        if ($scope.indexPattern.id === config.get('defaultIndex')) {
          config.remove('defaultIndex');
          if (otherIds.length) {
            config.set('defaultIndex', otherIds[0]);
          }
        }

        courier.indexPatterns.delete($scope.indexPattern)
          .then(refreshKibanaIndex)
          .then(function () {
            $location.url('/management/kibana/index');
          })
          .catch(notify.fatal);
      };

      $scope.setDefaultPattern = function () {
        config.set('defaultIndex', $scope.indexPattern.id);
      };

      $scope.setIndexPatternsTimeField = function (field) {
        if (field.type !== 'date') {
          notify.error('That field is a ' + field.type + ' not a date.');
          return;
        }
        $scope.indexPattern.timeFieldName = field.name;
        return $scope.indexPattern.save();
      };
    }
  };
});
