import { u as useFirebaseUser, f as __nuxt_component_0, _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, unref } from "vue";
import "vue-router";
import "destr";
import "firebase/auth";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/shared";
import "lottie-web";
const _sfc_main$1 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useFirebaseUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
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
export {
  login as default
};
//# sourceMappingURL=login.6549be41.js.map
