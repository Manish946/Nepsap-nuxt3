import { defineEventHandler, useQuery, useBody } from 'h3';
import { a as add } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

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
