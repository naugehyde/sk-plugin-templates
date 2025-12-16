module.exports = (app) => {
  const plugin = {
    id: "configurator-plugin-signalk",
    name: "Configurator Plugin for Signalk",

    stop: () => {
      app.debug("Configurator Plugin stopped");
    },
    start: (settings, restartPlugin) => {
      app.debug("Configurator Plugin started");
    },

    schema: {
      type: "object",
      required: ["required_setting"],
      properties: {
        required_setting: {
          type: "string",
          title: "I am required",
          default: "Don't forget to set me!",
        },
        optional_setting: {
          type: "string",
          title: "I am optional",
          example: "You can leave me blank. Just sayin",
        },
      },
    },
  };
  return plugin;

};
