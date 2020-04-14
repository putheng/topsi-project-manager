class Components {
  install(Vue: any, options: any) {
    const requireComponents = require.context("../components/Utils", true, /.+\.vue/);

    requireComponents.keys().forEach(fileName => {
      const componentName = fileName.replace("./", "").replace(".vue", "");
      const config = requireComponents(fileName);
      Vue.component(componentName, config.default || config);
    });
  }
}

export default new Components();
