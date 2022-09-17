import { defineEventHandler, useQuery } from 'h3';
import { d as del } from './firestore.mjs';
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
