import _ from 'lodash';
export default function GetFieldTypes() {

  return function (indexPattern) {
    const fieldCount = _.countBy(indexPattern.fields, function (field) {
      return (field.scripted) ? 'scripted' : 'indexed';
    });

    _.defaults(fieldCount, {
      indexed: 0,
      scripted: 0,
      sourceFilters: 0
    });

    return [
      {
        title: '领域',
        index: 'indexedFields',
        count: fieldCount.indexed
      },
      {
        title: '脚本领域',
        index: 'scriptedFields',
        count: fieldCount.scripted
      },
      {
        title: '源筛选器',
        index: 'sourceFilters',
        count: fieldCount.sourceFilters
      }
    ];
  };
};
