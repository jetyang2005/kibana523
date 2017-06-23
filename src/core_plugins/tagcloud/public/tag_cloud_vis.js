import 'plugins/tagcloud/tag_cloud.less';
import 'plugins/tagcloud/tag_cloud_controller';
import 'plugins/tagcloud/tag_cloud_vis_params';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import tagCloudTemplate from 'plugins/tagcloud/tag_cloud_controller.html';
import visTypes from 'ui/registry/vis_types';

visTypes.register(function TagCloudProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new TemplateVisType({
    name: 'tagcloud',
    title: '08-标签云',
    implementsRenderComplete: true,
    description: '标签云是一套相关的标签以及与此相应的权重。典型的标签云有30至150个标签。权重影响使用的字体大小或其他视觉效果。',
    icon: 'fa-cloud',
    template: tagCloudTemplate,
    params: {
      defaults: {
        scale: 'linear',
        orientation: 'single',
        minFontSize: 18,
        maxFontSize: 72
      },
      scales: ['linear', 'log', 'square root'],
      orientations: ['single', 'right angled', 'multiple'],
      editor: '<tagcloud-vis-params></tagcloud-vis-params>'
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: '标签尺寸',
        min: 1,
        max: 1,
        aggFilter: ['!std_dev', '!percentiles', '!percentile_ranks'],
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-cloud',
        title: '标签',
        min: 1,
        max: 1,
        aggFilter: ['terms']
      }
    ])
  });
});


