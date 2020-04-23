import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import ExampleComponent from './ExampleComponent.vue';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'example-component'
];

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement('example-component', ExampleComponent, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});
