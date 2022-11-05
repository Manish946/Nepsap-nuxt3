import { defineEventHandler, useQuery } from 'h3';
import { q as queryByCollection } from './firestore.mjs';
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

const query_get = defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const docs = await queryByCollection(query.col);
    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }
});

export { query_get as default };
//# sourceMappingURL=query.get.mjs.map
