import _ from 'lodash';
import Scanner from 'ui/utils/scanner';
import 'plugins/kibana/discover/saved_searches/_saved_search';
import 'ui/notify';
import uiModules from 'ui/modules';
import { SavedObjectLoader } from 'ui/courier/saved_object/saved_object_loader';
const module = uiModules.get('discover/saved_searches', [
  'kibana/notify'
]);

// Register this service with the saved object registry so it can be
// edited by the object editor.
require('plugins/kibana/management/saved_object_registry').register({
  service: 'savedSearches',
  title: 'searches',
  label:'搜索'
});

module.service('savedSearches', function (Promise, config, kbnIndex, esAdmin, createNotifier, SavedSearch, kbnUrl) {
  const savedSearchLoader = new SavedObjectLoader(SavedSearch, kbnIndex, esAdmin, kbnUrl);
  // Customize loader properties since adding an 's' on type doesn't work for type 'search' .
  savedSearchLoader.loaderProperties = {
    name: 'searches',
    noun: 'Saved Search',
    nouns: 'saved searches',
    label: '已保存的搜索'
  };
  savedSearchLoader.urlFor = function (id) {
    return kbnUrl.eval('#/discover/{{id}}', { id: id });
  };

  return savedSearchLoader;
});
