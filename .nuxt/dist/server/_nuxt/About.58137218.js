import { _ as _export_sfc, a as __nuxt_component_0, b as __nuxt_component_1, c as __nuxt_component_2 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "firebase/auth";
import "lottie-web";
const About_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0;
  const _component_About_component = __nuxt_component_1;
  const _component_About_content = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<main><div class="about">`);
  _push(ssrRenderComponent(_component_About_component, null, null, _parent));
  _push(`</div><div class="about-content">`);
  _push(ssrRenderComponent(_component_About_content, null, null, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
//# sourceMappingURL=About.58137218.js.map
