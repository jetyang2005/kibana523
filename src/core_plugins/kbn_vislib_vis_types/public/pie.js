import VislibVisTypeVislibVisTypeProvider from 'ui/vislib_vis_type/vislib_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import pieTemplate from 'plugins/kbn_vislib_vis_types/editors/pie.html';

export default function HistogramVisType(Private) {
  const VislibVisType = Private(VislibVisTypeVislibVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new VislibVisType({
    name: 'pie',
    title: '03-饼状图',
    icon: 'fa-pie-chart',
    description: '饼状图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。饼图更适合表现数据相对于总数的百分比等关系' +
     '如果只是表示不同类目数据间的大小，建议使用 柱状图。',
    params: {
      defaults: {
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: false
      },
      legendPositions: [{
        value: 'left',
        text: 'left',
      }, {
        value: 'right',
        text: 'right',
      }, {
        value: 'top',
        text: 'top',
      }, {
        value: 'bottom',
        text: 'bottom',
      }],
      editor: pieTemplate
    },
    responseConverter: false,
    hierarchicalData: true,
    implementsRenderComplete: true,
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: '切片大小',
        min: 1,
        max: 1,
        aggFilter: ['sum', 'count', 'cardinality'],
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-scissors',
        title: '分割片',
        min: 0,
        max: Infinity,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'split',
        icon: 'fa fa-th',
        title: '分割图',
        mustBeFirst: true,
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      }
    ])
  });
};
