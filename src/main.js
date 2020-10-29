const template = `<div>{{title}}</div>`;
const data = function data() {
  return {
    title: "Vue3 Tutorial",
  };
};

const App = { data, template };
Vue.createApp(App).mount("#vue-app");
