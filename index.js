

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      visTypes: [
                'plugins/jx-minimal-plugin/jx-minimal-plugin'
          ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },



  });
};
