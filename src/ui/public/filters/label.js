import uiModules from 'ui/modules';
import { words, capitalize } from 'lodash';

uiModules
  .get('kibana')
  .filter('label', function () {
    return function (str) {
      return words(str).map(capitalize).join(' ');
    };
  });

  //saved_object_finder.js 汉化使用
  function labelFilter(str){
    return words(str).map(capitalize).join(' ');
  }
  export default labelFilter;
