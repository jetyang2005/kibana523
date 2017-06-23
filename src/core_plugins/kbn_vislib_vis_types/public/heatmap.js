import VislibVisTypeVislibVisTypeProvider from 'ui/vislib_vis_type/vislib_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import heatmapTemplate from 'plugins/kbn_vislib_vis_types/editors/heatmap.html';
import heatmapColors from 'ui/vislib/components/color/colormaps';

export default function HeatmapVisType(Private) {
  const VislibVisType = Private(VislibVisTypeVislibVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new VislibVisType({
    name: 'heatmap',
    title: '09-热力图',
    icon: 'fa-barcode',
    description: '热力图主要通过颜色去表现数值的大小。',
    params: {
      defaults: {
        addTooltip: true,
        addLegend: true,
        enableHover: false,
        legendPosition: 'right',
        times: [],
        colorsNumber: 4,
        colorSchema: 'Greens',
        setColorRange: false,
        colorsRange: [],
        invertColors: false,
        percentageMode: false,
        valueAxes: [{
          show: false,
          id: 'ValueAxis-1',
          type: 'value',
          scale: {
            type: 'linear',
            defaultYExtents: false,
          },
          labels: {
            show: false,
            rotate: 0,
            color: '#555'
          }
        }]
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
      colorSchemas: Object.keys(heatmapColors),
      editor: heatmapTemplate
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: '值',
        min: 1,
        max: 1,
        aggFilter: ['count', 'avg', 'median', 'sum', 'min', 'max', 'cardinality', 'std_dev'],
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
        title: 'Y-轴',
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
}
