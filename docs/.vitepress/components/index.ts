import Demo from './Demo.vue';

import ScrollLoad from './ScrollLoad.vue';

export const install = (app) => {
  app.component('Demo', Demo);
  app.component('ScrollLoad', ScrollLoad);
};
