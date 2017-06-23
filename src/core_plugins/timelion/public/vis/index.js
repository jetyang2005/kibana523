define(function (require) {
  // we also need to load the controller and used by the template
  require('plugins/timelion/vis/timelion_vis_controller');
  require('plugins/timelion/vis/timelion_vis_params_controller');

  // Stylin
  require('plugins/timelion/vis/timelion_vis.less');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(TimelionVisProvider);

  function TimelionVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'timelion',
      title: '05-时序图',
      icon: 'fa-clock-o',
      description: '用时序表达式语言创建时序图，随着时间变化展示数据的平均值或者数据偏移变化情况。',
      template: require('plugins/timelion/vis/timelion_vis.html'),
      params: {
        editor: require('plugins/timelion/vis/timelion_vis_params.html')
      },
      requiresSearch: false,
      implementsRenderComplete: true,
    });
  }

  // export the provider so that the visType can be required with Private()
  return TimelionVisProvider;
});
