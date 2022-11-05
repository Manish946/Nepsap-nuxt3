import { _ as _export_sfc, a as __nuxt_component_0$1, u as useFirebaseUser, f as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, unref } from 'vue';
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

const _sfc_main$1 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useFirebaseUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><button>Login With Gmail</button>`);
      if (unref(user)) {
        _push(`<button>Logout</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user)) {
        _push(ssrRenderComponent(_component_client_only, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0$1;
  const _component_SignIn = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<main><div class="contact">`);
  _push(ssrRenderComponent(_component_SignIn, null, null, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login.6549be41.mjs.map
