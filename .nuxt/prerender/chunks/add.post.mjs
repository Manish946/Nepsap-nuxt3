import { defineEventHandler, useQuery, useBody } from 'file://E:/nuxt/Nepsap/node_modules/h3/dist/index.mjs';
import { a as add } from './firestore.mjs';
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

const add_post = defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const body = await useBody(event.req);
    const docRef = await add(query.col, body);
    return { result: docRef };
  } catch (error) {
    return { error: error.message };
  }
});

export { add_post as default };
//# sourceMappingURL=add.post.mjs.map
