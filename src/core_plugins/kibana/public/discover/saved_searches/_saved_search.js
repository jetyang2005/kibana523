import _ from 'lodash';
import 'ui/notify';
import uiModules from 'ui/modules';


const module = uiModules.get('discover/saved_searches', [
  'kibana/notify',
  'kibana/courier'
]);

module.factory('SavedSearch', function (courier) {
  _.class(SavedSearch).inherits(courier.SavedObject);
  function SavedSearch(id) {
    courier.SavedObject.call(this, {
      type: SavedSearch.type,
      mapping: SavedSearch.mapping,
      searchSource: SavedSearch.searchSource,

      id: id,
      defaults: {
        title: '新保存的搜索',
        description: '',
        columns: [],
        hits: 0,
        sort: [],
        version: 1
      }
    });
  }

  SavedSearch.type = 'search';

  SavedSearch.mapping = {
    title: 'string',
    description: 'string',
    hits: 'integer',
    columns: 'string',
    sort: 'string',
    version: 'integer'
  };

  SavedSearch.searchSource = true;

  return SavedSearch;
});
