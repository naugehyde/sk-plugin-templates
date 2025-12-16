module.exports = (app) => {
  const plugin = {
    id: "basic-plugin-signalk",
    name: "Basic Plugin for Signalk",

    stop: () => {
      app.debug("Basic Plugin stopped");
    },
    start: (settings, restartPlugin) => {
      app.debug("Basic Plugin stopped");
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
