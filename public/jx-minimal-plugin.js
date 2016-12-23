import 'plugins/jx-minimal-plugin/jx-minimal-plugin-controller'
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';

require('ui/registry/vis_types').register(HelloWorldVisProvider);

function HelloWorldVisProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new TemplateVisType({
    name: 'Hello World-metric',
    title: 'Hello World Metric',
    description: 'no description.',
    icon: 'fa-calculator',
    template: require('plugins/jx-minimal-plugin/jx-minimal-plugin.html'),
    params: {
      defaults: {
        val: 'Hello World'
      },
      editor: require('plugins/jx-minimal-plugin/jx-minimal-plugin-editor.html')
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        max: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      }
    ])
  });
}

export default HelloWorldVisProvider
