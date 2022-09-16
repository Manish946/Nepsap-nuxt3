import { _ as _export_sfc, e as __nuxt_component_0, O as Overview, a as __nuxt_component_0$1 } from "../server.mjs";
import lottie from "lottie-web";
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$3 = {
  name: "HomeCompoent",
  methods: {},
  components: {
    lottie
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets1.lottiefiles.com/packages/lf20_ca8zbrdk.json"
    }), lottie.loadAnimation({
      container: this.$refs.smallContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets1.lottiefiles.com/packages/lf20_ca8zbrdk.json"
    });
  }
};
const Home_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-layout" }, _attrs))}><div class="small-home-animation"><div class="mobile-home-animation"></div></div><div class="home-wrapper"><h1 class="home-primary-text"> Nepalese Scientific-Academic &amp; Professional Panel In Denmark </h1><h1 class="home-secondary-text"> Our vision is to help the new-comers both students and professional with the relvant information regarding accomodation, guidance to understand Danish laws, and procedures to apply the job and others. </h1><div class="home-button"><a href="#" class="new-comers-button">New Comers</a><a href="#" class="joinus-button">Join Us</a></div></div><div class="large-home-animation"><div class="default-home-animation"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "Newcomers-Component",
  data() {
    return {};
  },
  methods: {},
  components: {},
  mounted() {
  }
};
const _imports_0 = "" + globalThis.__buildAssetsURL("cpr-t.c8f7fd2d.svg");
const _imports_1 = "" + globalThis.__buildAssetsURL("studentsvg.24c0d59f.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("rental.55cfe1b3.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("work.75a6f405.svg");
const _imports_4 = "" + globalThis.__buildAssetsURL("transport.7fd4c528.svg");
const _imports_5 = "" + globalThis.__buildAssetsURL("skat.c6d35c5f.svg");
const _imports_6 = "" + globalThis.__buildAssetsURL("danish.5a5ef43f.svg");
const _imports_7 = "" + globalThis.__buildAssetsURL("sociallife.8c84945d.svg");
const Newcomers_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "newcomers" }, _attrs))}><div class="newcomers-header"><h1 class="header">Information For New Comers</h1><h2 class="sub-header"> As a new-comer, following information can be very valuable. </h2></div><div class="information-box"><div class="information-container-wrapper"><div class="information-container"><div class="information-header"><div class="information-container-logo"><img height="50" width="50"${ssrRenderAttr("src", _imports_0)} alt=""><p class="information-container-text">CPR</p></div><div class="information-container-title"><h1 class="information-container-sub-text"> Central Person Register </h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text"> Everyone who lives in Denmark is required to have a civil registration number called a CPR number. You need to register it in the Kommune you will be living. You need it to open a bank account, access your health insurance, borrow books from the library, pay tax, receive a salary and so on. It must be a valid address, meaning that you have the right to register your address in the CPR system. You are not able to register for your CPR until you actually live at your residence. </p></div></div><div class="information-buttons"><a href="https://ihcph.kk.dk/registration" target="_blank" class="register-button">Register</a><a href="https://goo.gl/maps/rwrCoQrypMFBeqys8" target="_blank" class="location-button"> Contact</a></div></div></div></div><div class="information-box"><div class="information-container-wrapper student-housing-secondary"><div class="information-container"><div class="information-header"><div class="information-container-logo student-housing-secondary-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_1)} alt=""><p class="information-container-text student-housing-primary"> Student </p></div><div class="information-container-title"><h1 class="information-container-sub-text student-housing-primary"> Accomodation - Student Housing </h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text student-housing-primary"> Many students prefer to live in the student housing. This is because it is cheap and to get to know other students by living with them. Applying is done through Kollegiernes Kontor in K\xF8benhavn (KKIK). It\u2019s free to apply but you do need to upload valid student documentation in your application upon applying. </p></div></div><div class="information-buttons"><a href="https://www.kollegierneskontor.dk/default.aspx?lang=GB" target="_blank" class="register-button student-housing-primary-background">Signup</a></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text student-housing-primary"> If you don\u2019t upload valid documentation as soon as you make your application, your application will be deleted. To make the waiting list as realistic as possible, all users of the system must log on at least every month to renew their application and through this keep their place on the waiting list. </p></div></div></div></div></div><div class="information-box"><div class="information-container-wrapper rental-background"><div class="information-container"><div class="information-header"><div class="information-container-logo rental-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_2)} alt=""><p class="information-container-text rental-text-color">Rental</p></div><div class="information-container-title"><h1 class="information-container-sub-text rental-text-color"> Accomodation - Rental Housing </h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text bolder-text rental-sub-text-color"> Get signed up on waiting list of rental companies: FSB, AAB, KAB, DBA, etc. When renting a home, please make sure you get a rental contract, and check the following before you sign it: </p><div class="rental-list"><p class="rental-item rental-sub-text-color"> 1. Read the terms carefully and make sure it describes the specific terms and conditions clearly. A standard contract has been issued by the Danish Ministry of Social Affairs and Integration. </p><p class="rental-item rental-sub-text-color"> 2. You will typically have up to three months\u2019 notice to terminate the lease, which applies to both the letter and yourself as a tenant. </p><p class="rental-item rental-sub-text-color"> 3. A deposit is usually required. Normally one month\u2019s deposit for a room and three months\u2019 deposit for a flat. Whether you get the full deposit back depends on the condition of the flat when you move out. </p><p class="rental-item rental-sub-text-color"> 4. Do not pay any deposit in advance without having a contract. </p><p class="rental-item rental-sub-text-color"> 5. Normally, utilities such as heating, water, and gas are not included in the rent. If they are, it will be specified. </p><p class="rental-item rental-sub-text-color"> 6. Check the room/flat personally before signing the rental contract. </p><p class="rental-item rental-sub-text-color"> 7. You must report any defects in the flat no later than 14 days after you have taken it over. Otherwise you may have to pay for the defects yourself. </p></div></div></div><div class="information-buttons"><a href="https://www.retshjaelpen.dk/front-page" target="_blank" class="register-button rental-button-background">Free Legal</a></div></div></div></div><div class="information-box"><div class="information-container-wrapper work-background"><div class="information-container"><div class="information-header"><div class="information-container-logo work-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_3)} alt=""><p class="information-container-text work-text-color"> Work </p></div><div class="information-container-title"><h1 class="information-container-sub-text work-text-color"> Work </h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text work-text-color bolder-text"> Overview of Work in Denmark. </p><div class="rental-list"><p class="rental-item work-sub-text-color"> 1. Students are allowed to work 20 hours/week, June/July/August full time. </p><p class="rental-item work-sub-text-color"> 2. Try to look for student job in college/university/library/etc. </p><p class="rental-item work-sub-text-color"> 3. Utilize the opportunity to do the internship in Danish company. This helps to find full time job after completing studies and expand the network. </p><p class="rental-item work-sub-text-color"> 4. As a student, you can join a trade union and receive advice on job-related issues, such as the minimum wage for your type of job, as stated in collective agreements. If you are a member of a trade union, it is always a good idea to let union specialists check your contract before you sign it. Most student jobs are based on an hourly wage rate. </p><p class="rental-item work-sub-text-color"> 5. Some of the trade union offers free membership for student: <a href="https://krifa.dk/" target="_blank" class="work-link-color">Krifa</a>, <a href="https://www.ase.dk/" target="_blank" class="work-link-color">Ase</a>, <a href="https://www.frie.dk/fagforening" target="_blank" class="work-link-color">Frie</a>, <a href="https://www.detfagligehus.dk/" target="_blank" class="work-link-color">Detfagligehus</a>, <a href="https://www.businessdanmark.dk/" target="_blank" class="work-link-color">Businessdanmark</a></p><p class="rental-item work-sub-text-color"> 6. Job and internship portals: <a href="https://thehub.io/" target="_blank" class="work-link-color">thehub</a>, <a href="https://studerendeonline.dk/" target="_blank" class="work-link-color">studerendeonline</a>, <a href="https://www.workindenmark.dk" target="_blank" class="work-link-color">workindenmark</a>, <a href="https://job.jobnet.dk/CV/frontpage" target="_blank" class="work-link-color">jobnet</a>, </p></div></div></div><div class="information-buttons"><a href="https://www.retshjaelpen.dk/front-page" target="_blank" class="register-button work-button-background">Free Legal</a></div></div></div></div><div class="information-box"><div class="information-container-wrapper transport-background"><div class="information-container"><div class="information-header"><div class="information-container-logo transport-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_4)} alt=""><p class="information-container-text transport-text-color">Transportation</p></div><div class="information-container-title"><h1 class="information-container-sub-text transport-text-color">Transportation</h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text transport-text-color"> The best way to get around Copenhagen is by bicycle especially if the weather is cooperating. To travel longer distance: train (s-tog), Metro and bus (Movia) are best option. </p><br><p class="cpr-text transport-text-color"> Public transport discount for all 16-19-year-olds, for students on a youth education programme and for students in higher education. Apply: ungdomskort.dk </p><br><p class="cpr-text transport-text-color"> If you have more than 24 km to and from work (that is more than 12 km each way), you are entitled to a deduction for transport between home and work no matter the means of transport (car, train, bus, bike, etc.). </p></div></div><div class="information-buttons"><a href="https://www.ungdomskort.dk/" target="_blank" class="register-button transport-button-background">Ungdomskort</a></div></div></div></div><div class="information-box"><div class="information-container-wrapper tax-background"><div class="information-container"><div class="information-header"><div class="information-container-logo tax-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_5)} alt=""><p class="information-container-text tax-text-color"> Tax </p></div><div class="information-container-title"><h1 class="information-container-sub-text tax-text-color"> Tax in Denmark </h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text tax-sub-text-color"> Any person living in Denmark must pay tax in Denmark - full tax liability. </p><br><p class="cpr-text tax-sub-text-color"> You have to send copy of your letter of employment. You will receive a preliminary tax assessment from SKAT right away when getting a CPR-nummer (civil registration no.). </p><br><p class="cpr-text tax-sub-text-color"> Whenever you submit corrections to SKAT during the year about your current income you will receive a new preliminary tax assessment. In November you will automatically get a preliminary assessment for next year. </p><br></div></div><div class="information-buttons"><a href="https://skat.dk/" target="_blank" class="register-button tax-button-background">Skat</a></div></div></div></div><div class="information-box"><div class="information-container-wrapper danish-background"><div class="information-container"><div class="information-header"><div class="information-container-logo danish-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_6)} alt=""><p class="information-container-text danish-text-color">Danish</p></div><div class="information-container-title"><h1 class="information-container-sub-text danish-text-color">Danish Language</h1></div></div><div class="information-content"><div class="cpr-text-wrapper"><p class="cpr-text bolder-text danish-text-color"> Language is very important for the following reasons: </p><div class="rental-list"><p class="rental-item danish-sub-text-color">1. More job opportunities.</p><p class="rental-item danish-sub-text-color"> 2. Helps in being more social in Danish culture. </p><p class="rental-item danish-sub-text-color"> 3. One of the requirements to obtain long term residency (Permanent resident). </p></div><p class="cpr-text bolder-text danish-text-color">Language schools:</p><br><div class="information-buttons"><a href="https://ucplus.dk/" target="_blank" class="register-button danish-button-background">UCPlus</a><a href="https://www.clavis.org/" target="_blank" class="register-button danish-button-background"> Clavis</a><a href="https://www.studieskolen.dk/da/dansk/koebenhavns-sprogcenter" target="_blank" class="register-button danish-button-background"> KBH SC</a></div></div></div></div></div></div><div class="information-box"><div class="information-container-wrapper sociallife-background"><div class="information-container"><div class="information-header"><div class="information-container-logo sociallife-sub-background"><img height="50" width="50"${ssrRenderAttr("src", _imports_7)} alt=""><p class="information-container-text sociallife-text-color"> Social life </p></div><div class="information-container-title"><h1 class="information-container-sub-text sociallife-text-color"> Social life </h1></div></div><div class="nepalese-social-links"><a href="https://dk.nepalembassy.gov.np/" target="_blank" class="links-item-button sociallife-button-background">Embassy of Nepal</a><a href="https://www.facebook.com/NCCDENMRK2017" target="_blank" class="links-item-button sociallife-button-background">NRNA Denmark</a><a href="https://www.facebook.com/nepalicophagen" target="_blank" class="links-item-button sociallife-button-background">Ne-Co Events</a><a href="https://bit.ly/37klSwC" target="_blank" class="links-item-button sociallife-button-background">Nepali Pathsala Copenhagen</a><a href="https://www.facebook.com/CreativeNepaleseWomenInDenmark" target="_blank" class="links-item-button sociallife-button-background">Creative Nepalese Women in Denmark </a><a href="https://www.facebook.com/Bellahojclassic" target="_blank" class="links-item-button sociallife-button-background">Bellah\xF8j Classic Sports Club</a><a href="https://www.facebook.com/groups/405917069594915" target="_blank" class="links-item-button sociallife-button-background">Nepalese Volleyball Group</a><a href="https://www.facebook.com/groups/288433634864049" target="_blank" class="links-item-button sociallife-button-background">Nepali Badminton Club</a><a href="https://www.facebook.com/people/Copenhagen-Green-Badminton-Club/100020513726450/" target="_blank" class="links-item-button sociallife-button-background">Copenhagen Green Badminton Club</a><a href="https://www.facebook.com/groups/1741818719455355" target="_blank" class="links-item-button sociallife-button-background">Nepali Fishing Team in Copenhagen</a></div><div class="information-buttons"></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Newcomers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "HomeCompoent",
  methods: {},
  components: {},
  mounted() {
  }
};
const Footer_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="footer-join"><h1>Become a Nepsap member</h1>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "join-button",
    to: "/members"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get Started`);
      } else {
        return [
          createTextVNode("Get Started")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer"><div><h1 class="footer-header">Nepsap</h1><p>Copyright \xA9 2022 Designed And Developed By Manish Shrestha</p></div><div><h1 class="footer-header">Social</h1><ul class="social-links"><li><a href="https://www.facebook.com/NepSAPDenmark" target="_blank" class="social-link"><p class="fa fa-facebook"></p><p class="link-text">Facebook</p></a></li><li><a href="https://www.linkedin.com/groups/8681164/" target="_blank" class="social-link"><p class="fa fa-linkedin"></p><p class="link-text">Linkedin</p></a></li><li><a href="mailto: nepsap.denmark@gmail.com" target="_blank" class="social-link"><p class="fa fa-google"></p><p class="link-text">Gmail</p></a></li></ul></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  layout: "default",
  components: { Overview },
  name: "Index"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0$1;
  const _component_Home = __nuxt_component_1;
  const _component_Overview = resolveComponent("Overview");
  const _component_Newcomers = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<main><div class="home">`);
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Overview, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Newcomers, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.7032ab5c.js.map
