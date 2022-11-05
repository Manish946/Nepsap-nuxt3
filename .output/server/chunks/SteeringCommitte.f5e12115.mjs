import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import 'firebase/auth';
import 'lottie-web';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const _sfc_main = {
  name: "SteeringCommittePage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<main><div class="home"></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SteeringCommitte.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SteeringCommitte = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SteeringCommitte as default };
//# sourceMappingURL=SteeringCommitte.f5e12115.mjs.map
