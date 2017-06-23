import VislibVisTypeVislibVisTypeProvider from 'ui/vislib_vis_type/vislib_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import histogramTemplate from 'plugins/kbn_vislib_vis_types/editors/histogram.html';

export default function HistogramVisType(Private) {
  const VislibVisType = Private(VislibVisTypeVislibVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new VislibVisType({
    name: 'histogram',
    title: '01-柱状图',
    icon: 'fa-bar-chart',
    description: '柱状图主要用于表示不同类目数据间的大小，如果不确定用什么图形来显示你的数据，可以从柱状图这里来尝试下。' ,
    params: {
      defaults: {
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        scale: 'linear',
        mode: 'stacked',
        times: [],
        addTimeMarker: false,
        defaultYExtents: false,
        setYExtents: false
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
      scales: ['linear', 'log', 'square root'],
      modes: ['stacked', 'percentage', 'grouped'],
      editor: histogramTemplate
    },
    implementsRenderComplete: true,
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Y-轴',
        min: 1,
        aggFilter: '!std_dev',
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        title: 'X-轴',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'group',
        title: '分割条',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'split',
        title: '分割图',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      }
    ])
  });
};
