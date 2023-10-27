import V3TagInput from "./components/TagInput.vue";
export { default as V3TagInput } from "./components/TagInput.vue";
export default {
  install: (app, options) => {
    app.component("V3TagInput", V3TagInput);
  },
};
