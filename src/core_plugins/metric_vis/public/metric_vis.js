import 'plugins/metric_vis/metric_vis.less';
import 'plugins/metric_vis/metric_vis_controller';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import metricVisTemplate from 'plugins/metric_vis/metric_vis.html';
import metricVisParamsTemplate from 'plugins/metric_vis/metric_vis_params.html';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// register the provider with the visTypes registry
require('ui/registry/vis_types').register(MetricVisProvider);

function MetricVisProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'metric',
    title: '04-度量',
    description: '用于在仪表盘上显示一个大的数字，这个数字可能是一组数字的平均值或者是数据条数的统计。',
    icon: 'fa-calculator',
    template: metricVisTemplate,
    params: {
      defaults: {
        handleNoResults: true,
        fontSize: 60
      },
      editor: metricVisParamsTemplate
    },
    implementsRenderComplete: true,
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: '度量',
        min: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      }
    ])
  });
}

// export the provider so that the visType can be required with Private()
export default MetricVisProvider;
