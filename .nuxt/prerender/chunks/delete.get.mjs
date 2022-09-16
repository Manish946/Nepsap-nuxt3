import { defineEventHandler, useQuery } from 'file://E:/nuxt/Nepsap/node_modules/h3/dist/index.mjs';
import { d as del } from './firestore.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/firebase/firestore/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/firebase/app/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ohmyfetch/dist/node.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/destr/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/radix3/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/hookable/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/scule/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ohash/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/ufo/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unstorage/dist/index.mjs';
import 'file://E:/nuxt/Nepsap/node_modules/unstorage/dist/drivers/fs.mjs';

const delete_get = defineEventHandler(async (event) => {
  try {
    const { col, id } = useQuery(event.req);
    await del(col, id);
    return { result: id };
  } catch (error) {
    return { error: error.message };
  }
});

export { delete_get as default };
//# sourceMappingURL=delete.get.mjs.map
