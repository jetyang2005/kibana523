import 'plugins/table_vis/table_vis.less';
import 'plugins/table_vis/table_vis_controller';
import 'plugins/table_vis/table_vis_params';
import 'ui/agg_table';
import 'ui/agg_table/agg_table_group';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import tableVisTemplate from 'plugins/table_vis/table_vis.html';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// our params are a bit complex so we will manage them with a directive

// require the directives that we use as well

// register the provider with the visTypes registry
require('ui/registry/vis_types').register(TableVisTypeProvider);

// define the TableVisType
function TableVisTypeProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // define the TableVisController which is used in the template
  // by angular's ng-controller directive

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'table',
    title: '06-数据表',
    icon: 'fa-table',
    description: '数据表提供了明细的数据列表，在其他类型的报表中也可以看到数据表形式的数据。',
    template: tableVisTemplate,
    params: {
      defaults: {
        perPage: 10,
        showPartialRows: false,
        showMeticsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum'
      },
      editor: '<table-vis-params></table-vis-params>'
    },
    implementsRenderComplete: true,
    hierarchicalData: function (vis) {
      return Boolean(vis.params.showPartialRows || vis.params.showMeticsAtAllLevels);
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: '度量',
        min: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      },
      {
        group: 'buckets',
        name: 'bucket',
        title: '分割行'
      },
      {
        group: 'buckets',
        name: 'split',
        title: '分割表'
      }
    ])
  });
}

export default TableVisTypeProvider;
