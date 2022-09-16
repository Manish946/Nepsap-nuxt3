import { _ as _export_sfc, a as __nuxt_component_0$1, b as __nuxt_component_1$1, c as __nuxt_component_2 } from './server.mjs';
import { useSSRContext } from 'file://E:/nuxt/Nepsap/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://E:/nuxt/Nepsap/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ohmyfetch/dist/node.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ufo/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/hookable/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unctx/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/h3/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/defu/dist/defu.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/@vue/shared/index.js';
import 'file://E:/nuxt/Nepsap/node_modules/firebase/auth/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/lottie-web/build/player/lottie.js';
import './nitro-prerenderer.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/destr/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/radix3/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/scule/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ohash/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unstorage/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unstorage/dist/drivers/fs.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0$1;
  const _component_About_component = __nuxt_component_1$1;
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

export { About as default };
//# sourceMappingURL=About.58137218.mjs.map
