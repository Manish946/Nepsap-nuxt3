globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"FIREBASE_API_KEY":"AIzaSyC9G0Rh5HDlVE6Xd2RRh7qdP6RYnkJxWdE","public":{"FIREBASE_API_KEY":"AIzaSyC9G0Rh5HDlVE6Xd2RRh7qdP6RYnkJxWdE"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('./error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/About.3059fe80.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f-U3cGEEkFZMjcNEphZ9TMlnekn2k\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 31,
    "path": "../public/_nuxt/About.3059fe80.css"
  },
  "/_nuxt/About.981decb7.js": {
    "type": "application/javascript",
    "etag": "\"1060-YYofZiSTCvFnZtttO8zGXvdH76A\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 4192,
    "path": "../public/_nuxt/About.981decb7.js"
  },
  "/_nuxt/background.e5b21fbc.svg": {
    "type": "image/svg+xml",
    "etag": "\"bb0-Vc7CpKBC0rSluWlRG8MWLlvqMv0\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 2992,
    "path": "../public/_nuxt/background.e5b21fbc.svg"
  },
  "/_nuxt/Contact.505b6282.js": {
    "type": "application/javascript",
    "etag": "\"86d-L/12E6eJ1xtGpbFG9ZbRXM1uPYI\"",
    "mtime": "2022-09-17T18:48:10.070Z",
    "size": 2157,
    "path": "../public/_nuxt/Contact.505b6282.js"
  },
  "/_nuxt/cpr-t.c8f7fd2d.svg": {
    "type": "image/svg+xml",
    "etag": "\"7c38-TjjgsKFRKzPMHlqzYWhlytHeu+E\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 31800,
    "path": "../public/_nuxt/cpr-t.c8f7fd2d.svg"
  },
  "/_nuxt/cpr.8ba00503.svg": {
    "type": "image/svg+xml",
    "etag": "\"c146-ji81VUtGrBqoBHkCocSqvDRAMNM\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 49478,
    "path": "../public/_nuxt/cpr.8ba00503.svg"
  },
  "/_nuxt/danish.5a5ef43f.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c2d-UO7O4XCbzYDehnPuf6eToe0rTiw\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 19501,
    "path": "../public/_nuxt/danish.5a5ef43f.svg"
  },
  "/_nuxt/entry.2b58f143.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2863-2GQrJ/EZbsT8JZuruIrB8t/HJdQ\"",
    "mtime": "2022-09-17T18:48:10.072Z",
    "size": 10339,
    "path": "../public/_nuxt/entry.2b58f143.css"
  },
  "/_nuxt/entry.64158aec.js": {
    "type": "application/javascript",
    "etag": "\"902b6-+h/+stfDhWRXgio/2/ygqWjpL0k\"",
    "mtime": "2022-09-17T18:48:10.070Z",
    "size": 590518,
    "path": "../public/_nuxt/entry.64158aec.js"
  },
  "/_nuxt/error-404.18ced855.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-F8gJ3uSz6Dg2HRyb374Ax3RegKE\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.18ced855.css"
  },
  "/_nuxt/error-404.93508dfb.js": {
    "type": "application/javascript",
    "etag": "\"8a3-8uIhrEjBRw1Z66IKss5poCsuN2M\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 2211,
    "path": "../public/_nuxt/error-404.93508dfb.js"
  },
  "/_nuxt/error-500.18e888f7.js": {
    "type": "application/javascript",
    "etag": "\"751-4c47luhNKkCFteS17nKL5I66e9s\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.18e888f7.js"
  },
  "/_nuxt/error-500.e60962de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-VhleGjkSRH7z4cQDJV3dxcboMhU\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.e60962de.css"
  },
  "/_nuxt/error-component.6d22f91e.js": {
    "type": "application/javascript",
    "etag": "\"465-uIm+TXhSCbTo050ZsJRt8s5ihNc\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.6d22f91e.js"
  },
  "/_nuxt/Events.614f4776.js": {
    "type": "application/javascript",
    "etag": "\"124-1vbQmwjrtYbtc/XAYPPJviEGzJI\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 292,
    "path": "../public/_nuxt/Events.614f4776.js"
  },
  "/_nuxt/index.1a1e1cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18cf-j9kxCir8IaP6XyMdVA6hv41FCWs\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 6351,
    "path": "../public/_nuxt/index.1a1e1cf9.css"
  },
  "/_nuxt/index.81ebd5fa.js": {
    "type": "application/javascript",
    "etag": "\"4c99-8ZLXRs8BtgpE6f5s5aA+Y3NTaC0\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 19609,
    "path": "../public/_nuxt/index.81ebd5fa.js"
  },
  "/_nuxt/login.d7a9f379.js": {
    "type": "application/javascript",
    "etag": "\"29b-To904qpComaA2XCdmsfQAX39QEs\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 667,
    "path": "../public/_nuxt/login.d7a9f379.js"
  },
  "/_nuxt/Members.53e4f42a.js": {
    "type": "application/javascript",
    "etag": "\"565-vIkwEbT2o61bGuBHbjQg0FZo1CU\"",
    "mtime": "2022-09-17T18:48:10.070Z",
    "size": 1381,
    "path": "../public/_nuxt/Members.53e4f42a.js"
  },
  "/_nuxt/Nav.fedcd70b.js": {
    "type": "application/javascript",
    "etag": "\"bec-pz0enb6e672yCtDNGWk/L8KzGTY\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 3052,
    "path": "../public/_nuxt/Nav.fedcd70b.js"
  },
  "/_nuxt/Nepsaplogo.5f836417.svg": {
    "type": "image/svg+xml",
    "etag": "\"1812-OPtJ/hUFQa4dTMZ9yuID5u43uGc\"",
    "mtime": "2022-09-17T18:48:10.066Z",
    "size": 6162,
    "path": "../public/_nuxt/Nepsaplogo.5f836417.svg"
  },
  "/_nuxt/rental.55cfe1b3.svg": {
    "type": "image/svg+xml",
    "etag": "\"26e-mH/BSAYwRpbjGww2oBMhNSEdElg\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 622,
    "path": "../public/_nuxt/rental.55cfe1b3.svg"
  },
  "/_nuxt/rentalHouse.75a9d507.svg": {
    "type": "image/svg+xml",
    "etag": "\"f492-kVRSPOIVLLd1UQr+Bq1i6wsGjjU\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 62610,
    "path": "../public/_nuxt/rentalHouse.75a9d507.svg"
  },
  "/_nuxt/skat.62044a6c.svg": {
    "type": "image/svg+xml",
    "etag": "\"6cc4-9RbB5gQ86AjhIMrW6v9wNiYo4Sg\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 27844,
    "path": "../public/_nuxt/skat.62044a6c.svg"
  },
  "/_nuxt/skat.c6d35c5f.svg": {
    "type": "image/svg+xml",
    "etag": "\"1de3-hTXiO6wakU0njl0jutp2j6cH3yw\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 7651,
    "path": "../public/_nuxt/skat.c6d35c5f.svg"
  },
  "/_nuxt/sociallife.8c84945d.svg": {
    "type": "image/svg+xml",
    "etag": "\"115e9-r/hwq4587m/xFmYLZRwIoMjghb0\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 71145,
    "path": "../public/_nuxt/sociallife.8c84945d.svg"
  },
  "/_nuxt/SteeringCommitte.cd6455ce.js": {
    "type": "application/javascript",
    "etag": "\"12f-6pAX/Lg2K5s1dOLLbai9xC8KNSg\"",
    "mtime": "2022-09-17T18:48:10.071Z",
    "size": 303,
    "path": "../public/_nuxt/SteeringCommitte.cd6455ce.js"
  },
  "/_nuxt/studentHouse.c42364b3.svg": {
    "type": "image/svg+xml",
    "etag": "\"8ba3-It93RcqM3siL0a2j+rpeOekV+4Q\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 35747,
    "path": "../public/_nuxt/studentHouse.c42364b3.svg"
  },
  "/_nuxt/studentsvg.24c0d59f.svg": {
    "type": "image/svg+xml",
    "etag": "\"12f1-7AuAiZBSF4mUKnbFdld5+kLBae0\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 4849,
    "path": "../public/_nuxt/studentsvg.24c0d59f.svg"
  },
  "/_nuxt/transport.7fd4c528.svg": {
    "type": "image/svg+xml",
    "etag": "\"d4bd-CNnWSxp88wTeVNKcdhV5kTY4smE\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 54461,
    "path": "../public/_nuxt/transport.7fd4c528.svg"
  },
  "/_nuxt/work.75a6f405.svg": {
    "type": "image/svg+xml",
    "etag": "\"800-pf/C1T5RyZZwtTDrtFYKoF15R8I\"",
    "mtime": "2022-09-17T18:48:10.069Z",
    "size": 2048,
    "path": "../public/_nuxt/work.75a6f405.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_4IhsIX = () => import('./query.get.mjs');
const _lazy_43hbPR = () => import('./hello.mjs');
const _lazy_LF1Qk4 = () => import('./delete.get.mjs');
const _lazy_8HZck9 = () => import('./add.post.mjs');
const _lazy_W9Dtqa = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/query', handler: _lazy_4IhsIX, lazy: true, middleware: false, method: "get" },
  { route: '/api/hello', handler: _lazy_43hbPR, lazy: true, middleware: false, method: undefined },
  { route: '/api/delete', handler: _lazy_LF1Qk4, lazy: true, middleware: false, method: "get" },
  { route: '/api/add', handler: _lazy_8HZck9, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_W9Dtqa, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_W9Dtqa, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen({ host, port }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useNitroApp as a, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
