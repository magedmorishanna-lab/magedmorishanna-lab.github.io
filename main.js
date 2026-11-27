(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e6) {
      throw err = [e6], e6;
    }
  };
  var __commonJS = (cb2, mod) => function __require() {
    try {
      return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e6) {
      throw mod = 0, e6;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../skills/platform/files/render/page-kit/kit.js
  var kit_exports = {};
  __export(kit_exports, {
    Files: () => b3,
    React: () => fM,
    ReactDom: () => pM,
    ReactDomClient: () => mM,
    ReactJsxRuntime: () => hM,
    ReactRouterDom: () => cx
  });
  function yw(e6, t) {
    return t + e6.replace(/\\/g, "/");
  }
  function Zu(e6) {
    return typeof e6 == "object" && e6 != null && "pathname" in e6 && "search" in e6 && "hash" in e6 && "state" in e6 && "key" in e6;
  }
  function nc(e6 = {}) {
    let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = false } = e6, a;
    a = t.map((p, v) => c(p, typeof p == "string" ? null : p.state, v === 0 ? "default" : void 0, typeof p == "string" ? void 0 : p.mask));
    let i = s(r ?? a.length - 1), o = "POP", l = null;
    function s(p) {
      return Math.min(Math.max(p, 0), a.length - 1);
    }
    function u() {
      return a[i];
    }
    function c(p, v = null, y, g) {
      let m = xn(a ? u().pathname : "/", p, v, y, g);
      return Re(m.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(p)}`), m;
    }
    function d(p) {
      return typeof p == "string" ? p : Ue(p);
    }
    return { get index() {
      return i;
    }, get action() {
      return o;
    }, get location() {
      return u();
    }, createHref: d, createURL(p) {
      return new URL(d(p), "http://localhost");
    }, encodeLocation(p) {
      let v = typeof p == "string" ? Dt(p) : p;
      return { pathname: v.pathname || "", search: v.search || "", hash: v.hash || "" };
    }, push(p, v) {
      o = "PUSH";
      let y = Zu(p) ? p : c(p, v);
      i += 1, a.splice(i, a.length, y), n && l && l({ action: o, location: y, delta: 1 });
    }, replace(p, v) {
      o = "REPLACE";
      let y = Zu(p) ? p : c(p, v);
      a[i] = y, n && l && l({ action: o, location: y, delta: 0 });
    }, go(p) {
      o = "POP";
      let v = s(i + p), y = a[v];
      i = v, l && l({ action: o, location: y, delta: p });
    }, listen(p) {
      return l = p, () => {
        l = null;
      };
    } };
  }
  function Ji(e6 = {}) {
    function t(n, a) {
      let i = a.state?.masked, { pathname: o, search: l, hash: s } = i || n.location;
      return xn("", { pathname: o, search: l, hash: s }, a.state && a.state.usr || null, a.state && a.state.key || "default", i ? { pathname: n.location.pathname, search: n.location.search, hash: n.location.hash } : void 0);
    }
    function r(n, a) {
      return typeof a == "string" ? a : Ue(a);
    }
    return ww(t, r, null, e6);
  }
  function ac(e6 = {}) {
    function t(a, i) {
      let { pathname: o = "/", search: l = "", hash: s = "" } = Dt(a.location.hash.substring(1));
      return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), xn("", { pathname: o, search: l, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default");
    }
    function r(a, i) {
      let o = a.document.querySelector("base"), l = "";
      if (o && o.getAttribute("href")) {
        let s = a.location.href, u = s.indexOf("#");
        l = u === -1 ? s : s.slice(0, u);
      }
      return l + "#" + (typeof i == "string" ? i : Ue(i));
    }
    function n(a, i) {
      Re(a.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`);
    }
    return ww(t, r, n, e6);
  }
  function G(e6, t) {
    if (e6 === false || e6 === null || typeof e6 > "u") throw new Error(t);
  }
  function Re(e6, t) {
    if (!e6) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function gE() {
    return Math.random().toString(36).substring(2, 10);
  }
  function zy(e6, t) {
    return { usr: e6.state, key: e6.key, idx: t, masked: e6.mask ? { pathname: e6.pathname, search: e6.search, hash: e6.hash } : void 0 };
  }
  function xn(e6, t, r = null, n, a) {
    return { pathname: typeof e6 == "string" ? e6 : e6.pathname, search: "", hash: "", ...typeof t == "string" ? Dt(t) : t, state: r, key: t && t.key || n || gE(), mask: a };
  }
  function Ue({ pathname: e6 = "/", search: t = "", hash: r = "" }) {
    return t && t !== "?" && (e6 += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e6 += r.charAt(0) === "#" ? r : "#" + r), e6;
  }
  function Dt(e6) {
    let t = {};
    if (e6) {
      let r = e6.indexOf("#");
      r >= 0 && (t.hash = e6.substring(r), e6 = e6.substring(0, r));
      let n = e6.indexOf("?");
      n >= 0 && (t.search = e6.substring(n), e6 = e6.substring(0, n)), e6 && (t.pathname = e6);
    }
    return t;
  }
  function ww(e6, t, r, n = {}) {
    let { window: a = document.defaultView, v5Compat: i = false } = n, o = a.history, l = "POP", s = null, u = c();
    u == null && (u = 0, o.replaceState({ ...o.state, idx: u }, ""));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      l = "POP";
      let g = c(), m = g == null ? null : g - u;
      u = g, s && s({ action: l, location: y.location, delta: m });
    }
    function f(g, m) {
      l = "PUSH";
      let h = Zu(g) ? g : xn(y.location, g, m);
      r && r(h, g), u = c() + 1;
      let w = zy(h, u), b = y.createHref(h.mask || h);
      try {
        o.pushState(w, "", b);
      } catch (k) {
        if (k instanceof DOMException && k.name === "DataCloneError") throw k;
        a.location.assign(b);
      }
      i && s && s({ action: l, location: y.location, delta: 1 });
    }
    function p(g, m) {
      l = "REPLACE";
      let h = Zu(g) ? g : xn(y.location, g, m);
      r && r(h, g), u = c();
      let w = zy(h, u), b = y.createHref(h.mask || h);
      o.replaceState(w, "", b), i && s && s({ action: l, location: y.location, delta: 0 });
    }
    function v(g) {
      return xw(a, g);
    }
    let y = { get action() {
      return l;
    }, get location() {
      return e6(a, o);
    }, listen(g) {
      if (s) throw new Error("A history only accepts one active listener");
      return a.addEventListener($y, d), s = g, () => {
        a.removeEventListener($y, d), s = null;
      };
    }, createHref(g) {
      return t(a, g);
    }, createURL: v, encodeLocation(g) {
      let m = v(g);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    }, push: f, replace: p, go(g) {
      return o.go(g);
    } };
    return y;
  }
  function xw(e6, t, r = false) {
    let n = "http://localhost";
    e6 && (n = e6.location.origin !== "null" ? e6.location.origin : e6.location.href), G(n, "No window.location.(origin|href) available to create URL");
    let a = typeof t == "string" ? t : Ue(t);
    return a = a.replace(/ $/, "%20"), !r && Cl.test(a) && (a = n + a), new URL(a, n);
  }
  function ic(e6) {
    return { defaultValue: e6 };
  }
  function yE(e6) {
    return vE.has(e6);
  }
  function xE(e6) {
    return wE.has(e6);
  }
  function bE(e6) {
    return e6.index === true;
  }
  function bn(e6, t, r = [], n = {}, a = false) {
    return e6.map((i, o) => {
      let l = [...r, String(o)], s = typeof i.id == "string" ? i.id : l.join("-");
      if (G(i.index !== true || !i.children, "Cannot specify children on an index route"), G(a || !n[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), bE(i)) {
        let u = { ...i, id: s };
        return n[s] = Oy(u, t(u)), u;
      } else {
        let u = { ...i, id: s, children: void 0 };
        return n[s] = Oy(u, t(u)), i.children && (u.children = bn(i.children, t, l, n, a)), u;
      }
    });
  }
  function Oy(e6, t) {
    return Object.assign(e6, { ...t, ...typeof t.lazy == "object" && t.lazy != null ? { lazy: { ...e6.lazy, ...t.lazy } } : {} });
  }
  function eo(e6, t, r = "/") {
    return St(e6, t, r, false);
  }
  function St(e6, t, r, n, a) {
    let i = typeof t == "string" ? Dt(t) : t, o = Ze(i.pathname || "/", r);
    if (o == null) return null;
    let l = a ?? xl(e6), s = null, u = Cw(o);
    for (let c = 0; s == null && c < l.length; ++c) s = PE(l[c], u, n);
    return s;
  }
  function bw(e6, t) {
    let { route: r, pathname: n, params: a } = e6;
    return { id: r.id, pathname: n, params: a, data: t[r.id], loaderData: t[r.id], handle: r.handle };
  }
  function xl(e6) {
    let t = kw(e6);
    return kE(t), t;
  }
  function kw(e6, t = [], r = [], n = "", a = false) {
    let i = (o, l, s = a, u) => {
      let c = { relativePath: u === void 0 ? o.path || "" : u, caseSensitive: o.caseSensitive === true, childrenIndex: l, route: o };
      if (c.relativePath.startsWith("/")) {
        if (!c.relativePath.startsWith(n) && s) return;
        G(c.relativePath.startsWith(n), `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(n.length);
      }
      let d = nr([n, c.relativePath]), f = r.concat(c);
      o.children && o.children.length > 0 && (G(o.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), kw(o.children, t, f, d, s)), !(o.path == null && !o.index) && t.push({ path: d, score: LE(d, o.index), routesMeta: f.map((p, v) => {
        let [y, g] = wp(p.relativePath, p.caseSensitive, v === f.length - 1);
        return { ...p, matcher: y, compiledParams: g };
      }) });
    };
    return e6.forEach((o, l) => {
      if (o.path === "" || !o.path?.includes("?")) i(o, l);
      else for (let s of Ew(o.path)) i(o, l, true, s);
    }), t;
  }
  function Ew(e6) {
    let t = e6.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return a ? [i, ""] : [i];
    let o = Ew(n.join("/")), l = [];
    return l.push(...o.map((s) => s === "" ? i : [i, s].join("/"))), a && l.push(...o), l.map((s) => e6.startsWith("/") && s === "" ? "/" : s);
  }
  function kE(e6) {
    e6.sort((t, r) => t.score !== r.score ? r.score - t.score : ME(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
  }
  function LE(e6, t) {
    let r = e6.split("/"), n = r.length;
    return r.some(Iy) && (n += NE), t && (n += SE), r.filter((a) => !Iy(a)).reduce((a, i) => a + (EE.test(i) ? RE : i === "" ? CE : DE), n);
  }
  function ME(e6, t) {
    return e6.length === t.length && e6.slice(0, -1).every((n, a) => n === t[a]) ? e6[e6.length - 1] - t[t.length - 1] : 0;
  }
  function PE(e6, t, r = false) {
    let { routesMeta: n } = e6, a = {}, i = "/", o = [];
    for (let l = 0; l < n.length; ++l) {
      let s = n[l], u = l === n.length - 1, c = i === "/" ? t : t.slice(i.length) || "/", d = { path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, f = s.matcher && s.compiledParams ? Sw(d, c, s.matcher, s.compiledParams) : Ua(d, c), p = s.route;
      if (!f && u && r && !n[n.length - 1].route.index && (f = Ua({ path: s.relativePath, caseSensitive: s.caseSensitive, end: false }, c)), !f) return null;
      Object.assign(a, f.params), o.push({ params: a, pathname: nr([i, f.pathname]), pathnameBase: AE(nr([i, f.pathnameBase])), route: p }), f.pathnameBase !== "/" && (i = nr([i, f.pathnameBase]));
    }
    return o;
  }
  function Rw(e6, t = {}) {
    let r = e6;
    r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (Re(false, `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`), r = r.replace(/\*$/, "/*"));
    let n = r.startsWith("/") ? "/" : "", a = (o) => o == null ? "" : typeof o == "string" ? o : String(o), i = r.split(/\/+/).map((o, l, s) => {
      if (l === s.length - 1 && o === "*") return a(t["*"]);
      let c = o.match(/^:([\w-]+)(\??)(.*)/);
      if (c) {
        let [, d, f, p] = c, v = t[d];
        return G(f === "?" || v != null, `Missing ":${d}" param`), encodeURIComponent(a(v)) + p;
      }
      return o.replace(/\?$/g, "");
    }).filter((o) => !!o);
    return n + i.join("/");
  }
  function Ua(e6, t) {
    typeof e6 == "string" && (e6 = { path: e6, caseSensitive: false, end: true });
    let [r, n] = wp(e6.path, e6.caseSensitive, e6.end);
    return Sw(e6, t, r, n);
  }
  function Sw(e6, t, r, n) {
    let a = t.match(r);
    if (!a) return null;
    let i = a[0], o = Gi(i, 1), l = a.slice(1);
    return { params: n.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === "*") {
        let v = l[f] || "";
        o = Gi(i.slice(0, i.length - v.length), 1);
      }
      let p = l[f];
      return d && !p ? u[c] = void 0 : u[c] = (p || "").replace(/%2F/g, "/"), u;
    }, {}), pathname: i, pathnameBase: o, pattern: e6 };
  }
  function wp(e6, t = false, r = true) {
    Re(e6 === "*" || !e6.endsWith("*") || e6.endsWith("/*"), `Route path "${e6}" will be treated as if it were "${e6.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e6.replace(/\*$/, "/*")}".`);
    let n = [], a = "^" + e6.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, s, u, c) => {
      if (n.push({ paramName: l, isOptional: s != null }), s) {
        let d = c.charAt(u + o.length);
        return d && d !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e6.endsWith("*") ? (n.push({ paramName: "*" }), a += e6 === "*" || e6 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e6 !== "" && e6 !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
  }
  function Cw(e6) {
    try {
      return e6.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return Re(false, `The URL path "${e6}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e6;
    }
  }
  function Ze(e6, t) {
    if (t === "/") return e6;
    if (!e6.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length, n = e6.charAt(r);
    return n && n !== "/" ? null : e6.slice(r) || "/";
  }
  function _E({ basename: e6, pathname: t }) {
    return t === "/" ? e6 : nr([e6, t]);
  }
  function oc(e6, t = "/") {
    let { pathname: r, search: n = "", hash: a = "" } = typeof e6 == "string" ? Dt(e6) : e6, i;
    return r ? (r = bp(r), r.startsWith("/") || r.startsWith("\\") ? i = jy(r.substring(1), "/") : i = jy(r, t)) : i = t, { pathname: i, search: TE(n), hash: FE(a) };
  }
  function jy(e6, t) {
    let r = Gi(t).split("/");
    return e6.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }), r.length > 1 ? r.join("/") : "/";
  }
  function Qh(e6, t, r, n) {
    return `Cannot include a '${e6}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Dw(e6) {
    return e6.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
  }
  function lc(e6) {
    let t = Dw(e6);
    return t.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase);
  }
  function Dl(e6, t, r, n = false) {
    let a;
    typeof e6 == "string" ? a = Dt(e6) : (a = { ...e6 }, G(!a.pathname || !a.pathname.includes("?"), Qh("?", "pathname", "search", a)), G(!a.pathname || !a.pathname.includes("#"), Qh("#", "pathname", "hash", a)), G(!a.search || !a.search.includes("#"), Qh("#", "search", "hash", a)));
    let i = e6 === "" || a.pathname === "", o = i ? "/" : a.pathname, l;
    if (o == null) l = r;
    else {
      let d = t.length - 1;
      if (!n && o.startsWith("..")) {
        let f = o.split("/");
        for (; f[0] === ".."; ) f.shift(), d -= 1;
        a.pathname = f.join("/");
      }
      l = d >= 0 ? t[d] : "/";
    }
    let s = oc(a, l), u = o && o !== "/" && o.endsWith("/"), c = (i || o === ".") && r.endsWith("/");
    return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
  }
  function Gi(e6, t = 0) {
    let r = e6.length;
    for (; r > t && e6.charCodeAt(r - 1) === 47; ) r--;
    return r === e6.length ? e6 : e6.slice(0, r);
  }
  function kp(e6, t) {
    return new $E(e6, typeof t == "number" ? { status: t } : t);
  }
  function Be(e6) {
    return e6 != null && typeof e6.status == "number" && typeof e6.statusText == "string" && typeof e6.internal == "boolean" && "data" in e6;
  }
  function yn(e6) {
    let t = e6.map((r) => r.route.path).filter(Boolean);
    return nr(t) || "/";
  }
  function Lw(e6, t) {
    let r = e6;
    if (typeof r != "string" || !Sl.test(r)) return { absoluteURL: void 0, isExternal: false, to: r };
    let n = r, a = false;
    if (Nw) try {
      let i = new URL(window.location.href), o = Cl.test(r) ? new URL(yw(r, i.protocol)) : new URL(r), l = Ze(o.pathname, t);
      o.origin === i.origin && l != null ? r = l + o.search + o.hash : a = true;
    } catch {
      Re(false, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return { absoluteURL: n, isExternal: a, to: r };
  }
  function Mw(e6, t) {
    let r = { lazy: [], "lazy.loader": [], "lazy.action": [], "lazy.middleware": [], middleware: [], loader: [], action: [] };
    e6.forEach((a) => a({ id: t.id, index: t.index, path: t.path, instrument(i) {
      let o = Object.keys(r);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = {};
    if (typeof t.lazy == "function" && r.lazy.length > 0) {
      let a = ja(r.lazy, t.lazy, () => {
      });
      a && (n.lazy = a);
    }
    if (typeof t.lazy == "object") {
      let a = t.lazy;
      ["middleware", "loader", "action"].forEach((i) => {
        let o = a[i], l = r[`lazy.${i}`];
        if (typeof o == "function" && l.length > 0) {
          let s = ja(l, o, () => {
          });
          s && (n.lazy = Object.assign(n.lazy || {}, { [i]: s }));
        }
      });
    }
    return ["loader", "action"].forEach((a) => {
      let i = t[a];
      if (typeof i == "function" && r[a].length > 0) {
        let o = i[aa] ?? i, l = ja(r[a], o, (...s) => Hy(s[0]));
        l && (a === "loader" && o.hydrate === true && (l.hydrate = true), l[aa] = o, n[a] = l);
      }
    }), t.middleware && t.middleware.length > 0 && r.middleware.length > 0 && (n.middleware = t.middleware.map((a) => {
      let i = a[aa] ?? a, o = ja(r.middleware, i, (...l) => Hy(l[0]));
      return o ? (o[aa] = i, o) : a;
    })), n;
  }
  function zE(e6, t) {
    let r = { navigate: [], fetch: [] };
    if (t.forEach((n) => n({ instrument(a) {
      let i = Object.keys(a);
      for (let o of i) a[o] && r[o].push(a[o]);
    } })), r.navigate.length > 0) {
      let n = e6.navigate[aa] ?? e6.navigate, a = ja(r.navigate, n, (...i) => {
        let [o, l] = i;
        return { to: typeof o == "number" || typeof o == "string" ? o : o ? Ue(o) : ".", ...Uy(e6, l ?? {}) };
      });
      a && (a[aa] = n, e6.navigate = a);
    }
    if (r.fetch.length > 0) {
      let n = e6.fetch[aa] ?? e6.fetch, a = ja(r.fetch, n, (...i) => {
        let [o, , l, s] = i;
        return { href: l ?? ".", fetcherKey: o, ...Uy(e6, s ?? {}) };
      });
      a && (a[aa] = n, e6.fetch = a);
    }
    return e6;
  }
  function Pw(e6, t) {
    let r = { request: [] };
    t.forEach((a) => a({ instrument(i) {
      let o = Object.keys(i);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = e6;
    return r.request.length > 0 && (n = ja(r.request, e6, (...a) => {
      let [i, o] = a;
      return { request: Aw(i), context: o != null ? Tw(o) : o };
    })), n;
  }
  function ja(e6, t, r) {
    return e6.length === 0 ? null : async (...n) => {
      let a = await _w(e6, r(...n), () => t(...n), e6.length - 1);
      if (a.type === "error") throw a.value;
      return a.value;
    };
  }
  async function _w(e6, t, r, n) {
    let a = e6[n], i;
    if (a) {
      let o, l = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = _w(e6, t, r, n - 1), i = await o, G(i, "Expected a result"), i.type === "error" && i.value instanceof Error ? { status: "error", error: i.value } : { status: "success", error: void 0 });
      try {
        await a(l, t);
      } catch (s) {
        console.error("An instrumentation function threw an error:", s);
      }
      o || await l(), await o;
    } else try {
      i = { type: "success", value: await r() };
    } catch (o) {
      i = { type: "error", value: o };
    }
    return i || { type: "error", value: new Error("No result assigned in instrumentation chain.") };
  }
  function Hy(e6) {
    let { request: t, context: r, params: n, pattern: a } = e6;
    return { request: Aw(t), params: { ...n }, pattern: a, context: Tw(r) };
  }
  function Uy(e6, t) {
    return { currentUrl: Ue(e6.state.location), ..."formMethod" in t ? { formMethod: t.formMethod } : {}, ..."formEncType" in t ? { formEncType: t.formEncType } : {}, ..."formData" in t ? { formData: t.formData } : {}, ..."body" in t ? { body: t.body } : {} };
  }
  function Aw(e6) {
    return { method: e6.method, url: e6.url, headers: { get: (...t) => e6.headers.get(...t) } };
  }
  function Tw(e6) {
    if (IE(e6)) {
      let t = { ...e6 };
      return Object.freeze(t), t;
    } else return { get: (t) => e6.get(t) };
  }
  function IE(e6) {
    if (e6 === null || typeof e6 != "object") return false;
    let t = Object.getPrototypeOf(e6);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === OE;
  }
  function Rp(e6) {
    if (e6.createURL) return e6.createURL("/");
    try {
      return new URL(e6.createHref("/"), By);
    } catch {
      return By;
    }
  }
  function Zh(e6, t) {
    return e6.origin === t.origin && (e6.origin !== "null" || e6.protocol === t.protocol && e6.host === t.host);
  }
  function jE(e6, t) {
    if (e6.startsWith("//")) return true;
    let r = t.protocol.toLowerCase();
    return e6.toLowerCase().startsWith(r) ? t.host === "" || e6.slice(r.length).startsWith("//") : false;
  }
  function Ha(e6, t, r, n) {
    let a = null;
    try {
      a = e6 == null ? null : new URL(e6, r);
    } catch {
    }
    let i = new URL(t, r), o = a != null && !Zh(a, r), l = !Zh(i, r);
    if (n === "reject") {
      if (o || l) throw new Error("External navigation is not allowed");
    } else if (l && (a == null || !jE(e6, a) || !Zh(a, i))) throw new Error("External navigation is not allowed");
  }
  function Va(e6) {
    let t = e6.window ? e6.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
    G(e6.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let n = e6.hydrationRouteProperties || [], a = e6.mapRouteProperties || zw, i = a;
    if (e6.instrumentations) {
      let E = e6.instrumentations;
      i = (C) => ({ ...a(C), ...Mw(E.map((M) => M.route).filter(Boolean), C) });
    }
    let o = {}, l = new WE(bn(e6.routes, i, void 0, o)), s = e6.basename || "/";
    s.startsWith("/") || (s = `/${s}`);
    let u = e6.dataStrategy || QE, c = { ...e6.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, v = null, y = null, g = null, m = e6.hydrationData != null, h = St(l.activeRoutes, e6.history.location, s, false, l.branches), w = false, b = null, k, L;
    if (h == null && !e6.patchRoutesOnNavigation) {
      let E = Qe(404, { pathname: e6.history.location.pathname }), { matches: C, route: M } = Bi(l.activeRoutes);
      k = true, L = !k, h = C, b = { [M.id]: E };
    } else if (h && !e6.hydrationData && ps(h, l.activeRoutes, e6.history.location.pathname).active && (h = null), h) if (h.some((E) => E.route.lazy)) k = false, L = !k;
    else if (!h.some((E) => Dp(E.route))) k = true, L = !k;
    else {
      let E = e6.hydrationData ? e6.hydrationData.loaderData : null, C = e6.hydrationData ? e6.hydrationData.errors : null, M = h;
      if (C) {
        let F = h.findIndex(($) => C[$.route.id] !== void 0);
        M = M.slice(0, F + 1);
      }
      L = false, k = true, M.forEach((F) => {
        let $ = jw(F.route, E, C);
        L = L || $.renderFallback, k = k && !$.shouldLoad;
      });
    }
    else {
      k = false, L = !k, h = [];
      let E = ps(null, l.activeRoutes, e6.history.location.pathname);
      E.active && E.matches && (w = true, h = E.matches);
    }
    let D, x = { historyAction: e6.history.action, location: e6.history.location, matches: h, initialized: k, renderFallback: L, navigation: Vi, restoreScrollPosition: e6.hydrationData != null ? false : null, preventScrollReset: false, revalidation: "idle", loaderData: e6.hydrationData && e6.hydrationData.loaderData || {}, actionData: e6.hydrationData && e6.hydrationData.actionData || null, errors: e6.hydrationData && e6.hydrationData.errors || b, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, S = "POP", N = null, A = false, P, _ = false, I = /* @__PURE__ */ new Map(), re = null, Q = false, oe = false, _e = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Map(), Ye = 0, Ae = -1, Er = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Set(), ir = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Set(), xa = /* @__PURE__ */ new Map(), fs, xo = null;
    function k3() {
      if (d = e6.history.listen(({ action: E, location: C, delta: M }) => {
        if (fs) {
          fs(), fs = void 0;
          return;
        }
        Re(xa.size === 0 || M != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let F = qm({ currentLocation: x.location, nextLocation: C, historyAction: E });
        if (F && M != null) {
          let $ = new Promise((Z) => {
            fs = Z;
          });
          e6.history.go(M * -1), hs(F, { state: "blocked", location: C, proceed() {
            hs(F, { state: "proceeding", proceed: void 0, reset: void 0, location: C }), $.then(() => e6.history.go(M));
          }, reset() {
            let Z = new Map(x.blockers);
            Z.set(F, vn), wt({ blockers: Z });
          } }), N?.resolve(), N = null;
          return;
        }
        return ba(E, C);
      }), r) {
        aR(t, I);
        let E = () => iR(t, I);
        t.addEventListener("pagehide", E), re = () => t.removeEventListener("pagehide", E);
      }
      return x.initialized || ba("POP", x.location, { initialHydration: true }), D;
    }
    function E3() {
      d && d(), re && re(), f.clear(), P && P.abort(), x.fetchers.forEach((E, C) => Cd(x.fetchers, C)), x.blockers.forEach((E, C) => Ym(C));
    }
    function R3(E) {
      if (f.add(E), p) {
        let { newErrors: C } = p;
        p = null, E(x, { deletedFetchers: [], newErrors: C, viewTransitionOpts: void 0, flushSync: false });
      }
      return () => f.delete(E);
    }
    function wt(E, C = {}) {
      E.matches && (E.matches = E.matches.map(($) => {
        let Z = o[$.route.id], q = $.route;
        return q.element !== Z.element || q.errorElement !== Z.errorElement || q.hydrateFallbackElement !== Z.hydrateFallbackElement ? { ...$, route: Z } : $;
      })), x = { ...x, ...E };
      let M = [], F = [];
      x.fetchers.forEach(($, Z) => {
        $.state === "idle" && (Xt.has(Z) ? M.push(Z) : F.push(Z));
      }), Xt.forEach(($) => {
        !x.fetchers.has($) && !le.has($) && M.push($);
      }), f.size === 0 && (p = { newErrors: E.errors ?? null }), [...f].forEach(($) => $(x, { deletedFetchers: M, newErrors: E.errors ?? null, viewTransitionOpts: C.viewTransitionOpts, flushSync: C.flushSync === true })), M.forEach(($) => Cd(x.fetchers, $)), F.forEach(($) => x.fetchers.delete($));
    }
    function si(E, C, { flushSync: M } = {}) {
      let F = x.actionData != null && x.navigation.formMethod != null && Ge(x.navigation.formMethod) && x.navigation.state === "loading" && E.state?._isRedirect !== true, $;
      C.actionData ? Object.keys(C.actionData).length > 0 ? $ = C.actionData : $ = null : F ? $ = x.actionData : $ = null;
      let Z = C.loaderData ? rw(x.loaderData, C.loaderData, C.matches || [], C.errors) : x.loaderData, q = x.blockers;
      q.size > 0 && (q = new Map(q), q.forEach((ee, se) => q.set(se, vn)));
      let J = Q ? false : Km(E, C.matches || x.matches), Y = A === true || x.navigation.formMethod != null && Ge(x.navigation.formMethod) && E.state?._isRedirect !== true;
      l.commitHmrRoutes(), Q || S === "POP" || (S === "PUSH" ? e6.history.push(E, E.state) : S === "REPLACE" && e6.history.replace(E, E.state));
      let ne;
      if (S === "POP") {
        let ee = I.get(x.location.pathname);
        ee && ee.has(E.pathname) ? ne = { currentLocation: x.location, nextLocation: E } : I.has(E.pathname) && (ne = { currentLocation: E, nextLocation: x.location });
      } else if (_) {
        let ee = I.get(x.location.pathname);
        ee ? ee.add(E.pathname) : (ee = /* @__PURE__ */ new Set([E.pathname]), I.set(x.location.pathname, ee)), ne = { currentLocation: x.location, nextLocation: E };
      }
      wt({ ...C, actionData: $, loaderData: Z, historyAction: S, location: E, initialized: true, renderFallback: false, navigation: Vi, revalidation: "idle", restoreScrollPosition: J, preventScrollReset: Y, blockers: q }, { viewTransitionOpts: ne, flushSync: M === true }), S = "POP", A = false, _ = false, Q = false, oe = false, N?.resolve(), N = null, xo?.resolve(), xo = null;
    }
    async function jm(E, C) {
      if (N?.resolve(), N = null, typeof E == "number") {
        N || (N = iw());
        let Ee = N.promise;
        return e6.history.go(E), Ee;
      }
      let M = ip(x.location, x.matches, s, E, C?.fromRouteId, C?.relative), { path: F, submission: $, error: Z } = Yy(false, M, C), q;
      if (C?.mask) {
        let Ee = typeof C.mask == "string" ? Dt(C.mask) : { ...x.location.mask, ...C.mask };
        if (q = { pathname: Ee.pathname ?? "", search: Ee.search ?? "", hash: Ee.hash ?? "" }, Cl.test(q.pathname)) throw new Error("External navigation is not allowed");
        q.pathname.startsWith("\\") && (q.pathname = q.pathname.replace(/^\\+/, "/")), Ha(typeof C.mask == "string" ? C.mask : Ue(C.mask), Ue(q), e6.history.createURL("/"), "reject");
      }
      let J = x.location, Y = xn(J, F, C && C.state, void 0, q);
      Y = { ...Y, ...e6.history.encodeLocation(Y) }, Ha(E == null ? e6.history.createHref(x.location) : typeof E == "string" ? E : Ue(E), e6.history.createHref(Y.mask || Y), e6.history.createURL("/"), "reject");
      let ne = C && C.replace != null ? C.replace : void 0, ee = "PUSH";
      ne === true ? ee = "REPLACE" : ne === false || $ != null && Ge($.formMethod) && $.formAction === x.location.pathname + x.location.search && (ee = "REPLACE");
      let se = C && "preventScrollReset" in C ? C.preventScrollReset === true : void 0, ie = (C && C.flushSync) === true, ye = qm({ currentLocation: J, nextLocation: Y, historyAction: ee });
      if (ye) {
        hs(ye, { state: "blocked", location: Y, proceed() {
          hs(ye, { state: "proceeding", proceed: void 0, reset: void 0, location: Y }), jm(E, C);
        }, reset() {
          let Ee = new Map(x.blockers);
          Ee.set(ye, vn), wt({ blockers: Ee });
        } });
        return;
      }
      await ba(ee, Y, { submission: $, pendingError: Z, preventScrollReset: se, replace: C && C.replace, enableViewTransition: C && C.viewTransition, flushSync: ie, callSiteDefaultShouldRevalidate: C && C.defaultShouldRevalidate });
    }
    function S3() {
      xo || (xo = iw()), Sd(), wt({ revalidation: "loading" });
      let E = xo.promise;
      return x.navigation.state === "submitting" ? E : x.navigation.state === "idle" ? (ba(x.historyAction, x.location, { startUninterruptedRevalidation: true }), E) : (ba(S || x.historyAction, x.navigation.location, { overrideNavigation: x.navigation, enableViewTransition: _ === true }), E);
    }
    async function ba(E, C, M) {
      P && P.abort(), P = null, S = E, Q = (M && M.startUninterruptedRevalidation) === true, z3(x.location, x.matches), A = (M && M.preventScrollReset) === true, _ = (M && M.enableViewTransition) === true;
      let F = l.activeRoutes, $ = M?.initialHydration && x.matches && x.matches.length > 0 && !w ? x.matches : St(F, C, s, false, l.branches), Z = (M && M.flushSync) === true;
      if ($ && x.initialized && !oe && eR(x.location, C) && !(M && M.submission && Ge(M.submission.formMethod))) {
        si(C, { matches: $ }, { flushSync: Z });
        return;
      }
      let q = ps($, F, C.pathname);
      if (q.active && q.matches && ($ = q.matches), !$) {
        let { error: xe, notFoundMatches: we, route: Ht } = Dd(C.pathname);
        si(C, { matches: we, loaderData: {}, errors: { [Ht.id]: xe } }, { flushSync: Z });
        return;
      }
      let J = M && M.overrideNavigation ? { ...M.overrideNavigation, matches: $, historyAction: E } : void 0;
      P = new AbortController();
      let Y = Ui(e6.history, C, P.signal, M && M.submission), ne = e6.getContext ? await e6.getContext() : new yr(), ee;
      if (M && M.pendingError) ee = [vr($).route.id, { type: "error", error: M.pendingError }];
      else if (M && M.submission && Ge(M.submission.formMethod)) {
        let xe = await C3(Y, C, M.submission, $, E, ne, q.active, M && M.initialHydration === true, { replace: M.replace, flushSync: Z });
        if (xe.shortCircuited) return;
        if (xe.pendingActionResult) {
          let [we, Ht] = xe.pendingActionResult;
          if (ot(Ht) && Be(Ht.error) && Ht.error.status === 404) {
            P = null, si(C, { matches: xe.matches, loaderData: {}, errors: { [we]: Ht.error } });
            return;
          }
        }
        $ = xe.matches || $, ee = xe.pendingActionResult, J = Jh(C, $, E, M.submission), Z = false, q.active = false, Y = Ui(e6.history, Y.url, Y.signal);
      }
      let { shortCircuited: se, matches: ie, loaderData: ye, errors: Ee, workingFetchers: et } = await D3(Y, C, $, E, ne, q.active, J, M && M.submission, M && M.fetcherSubmission, M && M.replace, M && M.initialHydration === true, Z, ee, M && M.callSiteDefaultShouldRevalidate);
      se || (P = null, si(C, { matches: ie || $, ...nw(ee), loaderData: ye, errors: Ee, ...et ? { fetchers: et } : {} }));
    }
    async function C3(E, C, M, F, $, Z, q, J, Y = {}) {
      Sd();
      let ne = rR(C, F, $, M);
      if (wt({ navigation: ne }, { flushSync: Y.flushSync === true }), q) {
        let ie = await ms(F, C.pathname, E.signal);
        if (ie.type === "aborted") return { shortCircuited: true };
        if (ie.type === "error") {
          if (ie.partialMatches.length === 0) {
            let { matches: Ee, route: et } = Bi(l.activeRoutes);
            return { matches: Ee, pendingActionResult: [et.id, { type: "error", error: ie.error }] };
          }
          let ye = vr(ie.partialMatches).route.id;
          return { matches: ie.partialMatches, pendingActionResult: [ye, { type: "error", error: ie.error }] };
        } else if (ie.matches) F = ie.matches;
        else {
          let { notFoundMatches: ye, error: Ee, route: et } = Dd(C.pathname);
          return { matches: ye, pendingActionResult: [et.id, { type: "error", error: Ee }] };
        }
      }
      let ee, se = Wi(F, C);
      if (!se.route.action && !se.route.lazy) ee = { type: "error", error: Qe(405, { method: E.method, pathname: C.pathname, routeId: se.route.id }) };
      else {
        let ie = oa(i, o, E, C, F, se, J ? [] : n, Z), ye = await bo(E, C, ie, Z, null);
        if (ee = ye[se.route.id], !ee) {
          for (let Ee of F) if (ye[Ee.route.id]) {
            ee = ye[Ee.route.id];
            break;
          }
        }
        if (E.signal.aborted) return { shortCircuited: true };
      }
      if (ia(ee)) {
        let ie;
        return Y && Y.replace != null ? ie = Y.replace : ie = Jy(ee.response.headers.get("Location"), new URL(E.url), s, e6.history) === x.location.pathname + x.location.search, await ka(E, ee, true, { submission: M, replace: ie }), { shortCircuited: true };
      }
      if (ot(ee)) {
        let ie = vr(F, se.route.id);
        return (Y && Y.replace) !== true && (S = "PUSH"), { matches: F, pendingActionResult: [ie.route.id, ee, se.route.id] };
      }
      return { matches: F, pendingActionResult: [se.route.id, ee] };
    }
    async function D3(E, C, M, F, $, Z, q, J, Y, ne, ee, se, ie, ye) {
      let Ee = q || Jh(C, M, F, J), et = J || Y || aw(Ee), xe = !Q && !ee;
      if (Z) {
        if (xe) {
          let Bt = Hm(ie);
          wt({ navigation: Ee, ...Bt !== void 0 ? { actionData: Bt } : {} }, { flushSync: se });
        }
        let pe = await ms(M, C.pathname, E.signal);
        if (pe.type === "aborted") return { shortCircuited: true };
        if (pe.type === "error") {
          if (pe.partialMatches.length === 0) {
            let { matches: jr, route: on } = Bi(l.activeRoutes);
            return { matches: jr, loaderData: {}, errors: { [on.id]: pe.error } };
          }
          let Bt = vr(pe.partialMatches).route.id;
          return { matches: pe.partialMatches, loaderData: {}, errors: { [Bt]: pe.error } };
        } else if (pe.matches) M = pe.matches;
        else {
          let { error: Bt, notFoundMatches: jr, route: on } = Dd(C.pathname);
          return { matches: jr, loaderData: {}, errors: { [on.id]: Bt } };
        }
      }
      let we = l.activeRoutes, { dsMatches: Ht, revalidatingFetchers: Ut } = qy(E, $, i, o, e6.history, x, M, et, C, ee ? [] : n, ee === true, oe, _e, Xt, ir, yt, we, s, e6.patchRoutesOnNavigation != null, l.branches, ie, ye);
      if (Ae = ++Ye, !e6.dataStrategy && !Ht.some((pe) => pe.shouldLoad) && !Ht.some((pe) => pe.route.middleware && pe.route.middleware.length > 0) && Ut.length === 0) {
        let pe = new Map(x.fetchers), Bt = Vm(pe);
        return si(C, { matches: M, loaderData: {}, errors: ie && ot(ie[1]) ? { [ie[0]]: ie[1].error } : null, ...nw(ie), ...Bt ? { fetchers: pe } : {} }, { flushSync: se }), { shortCircuited: true };
      }
      if (xe) {
        let pe = {};
        if (!Z) {
          pe.navigation = Ee;
          let Bt = Hm(ie);
          Bt !== void 0 && (pe.actionData = Bt);
        }
        Ut.length > 0 && (pe.fetchers = N3(Ut)), wt(pe, { flushSync: se });
      }
      Ut.forEach((pe) => {
        an(pe.key), pe.controller && le.set(pe.key, pe.controller);
      });
      let ko = () => Ut.forEach((pe) => an(pe.key));
      P && P.signal.addEventListener("abort", ko);
      let { loaderResults: _n, fetcherResults: ui } = await Um(Ht, Ut, E, C, $);
      if (E.signal.aborted) return { shortCircuited: true };
      P && P.signal.removeEventListener("abort", ko), Ut.forEach((pe) => le.delete(pe.key));
      let An = Uu(_n);
      if (An) return await ka(E, An.result, true, { replace: ne }), { shortCircuited: true };
      if (An = Uu(ui), An) return yt.add(An.key), await ka(E, An.result, true, { replace: ne }), { shortCircuited: true };
      let Ir = new Map(x.fetchers), { loaderData: Nd, errors: Tn } = tw(x, M, _n, ie, Ut, ui, Ir);
      ee && x.errors && (Tn = { ...x.errors, ...Tn });
      let gs = Vm(Ir), vs = Wm(Ae, Ir), ys = gs || vs || Ut.length > 0;
      return { matches: M, loaderData: Nd, errors: Tn, ...ys ? { workingFetchers: Ir } : {} };
    }
    function Hm(E) {
      if (E && !ot(E[1])) return { [E[0]]: E[1].data };
      if (x.actionData) return Object.keys(x.actionData).length === 0 ? null : x.actionData;
    }
    function N3(E) {
      let C = new Map(x.fetchers);
      return E.forEach((M) => {
        let F = C.get(M.key), $ = gl(void 0, F ? F.data : void 0);
        C.set(M.key, $);
      }), C;
    }
    async function L3(E, C, M, F) {
      an(E);
      let $ = (F && F.flushSync) === true, Z = l.activeRoutes, q = ip(x.location, x.matches, s, M, C, F?.relative), J = St(Z, q, s, false, l.branches), Y = ps(J, Z, q);
      if (Y.active && Y.matches && (J = Y.matches), !J) {
        nn(E, C, Qe(404, { pathname: q }), { flushSync: $ });
        return;
      }
      let { path: ne, submission: ee, error: se } = Yy(true, q, F);
      if (se) {
        nn(E, C, se, { flushSync: $ });
        return;
      }
      let ie = e6.getContext ? await e6.getContext() : new yr(), ye = (F && F.preventScrollReset) === true;
      if (ee && Ge(ee.formMethod)) {
        await M3(E, C, ne, J, ie, Y.active, $, ye, ee, F && F.defaultShouldRevalidate);
        return;
      }
      ir.set(E, { routeId: C, path: ne }), await P3(E, C, ne, J, ie, Y.active, $, ye, ee);
    }
    async function M3(E, C, M, F, $, Z, q, J, Y, ne) {
      Sd(), ir.delete(E);
      let ee = x.fetchers.get(E);
      rn(E, nR(Y, ee), { flushSync: q });
      let se = new AbortController(), ie = Ui(e6.history, M, se.signal, Y);
      if (Z) {
        let Te = await ms(F, new URL(ie.url).pathname, ie.signal, E);
        if (Te.type === "aborted") return;
        if (Te.type === "error") {
          nn(E, C, Te.error, { flushSync: q });
          return;
        } else if (Te.matches) F = Te.matches;
        else {
          nn(E, C, Qe(404, { pathname: M }), { flushSync: q });
          return;
        }
      }
      let ye = Wi(F, M);
      if (!ye.route.action && !ye.route.lazy) {
        let Te = Qe(405, { method: Y.formMethod, pathname: M, routeId: C });
        nn(E, C, Te, { flushSync: q });
        return;
      }
      le.set(E, se);
      let Ee = Ye, et = oa(i, o, ie, M, F, ye, n, $), xe = await bo(ie, M, et, $, E), we = xe[ye.route.id];
      if (!we) {
        for (let Te of et) if (xe[Te.route.id]) {
          we = xe[Te.route.id];
          break;
        }
      }
      if (ie.signal.aborted) {
        le.get(E) === se && le.delete(E);
        return;
      }
      if (Xt.has(E)) {
        if (ia(we) || ot(we)) {
          rn(E, Gr(void 0));
          return;
        }
      } else {
        if (ia(we)) if (le.delete(E), Ae > Ee) {
          rn(E, Gr(void 0));
          return;
        } else return yt.add(E), rn(E, gl(Y)), ka(ie, we, false, { fetcherSubmission: Y, preventScrollReset: J });
        if (ot(we)) {
          nn(E, C, we.error);
          return;
        }
      }
      let Ht = x.navigation.location || x.location, Ut = Ui(e6.history, Ht, se.signal), ko = l.activeRoutes, _n = x.navigation.state !== "idle" ? St(ko, x.navigation.location, s, false, l.branches) : x.matches;
      G(_n, "Didn't find any matches after fetcher action");
      let ui = ++Ye;
      Er.set(E, ui);
      let { dsMatches: An, revalidatingFetchers: Ir } = qy(Ut, $, i, o, e6.history, x, _n, Y, Ht, n, false, oe, _e, Xt, ir, yt, ko, s, e6.patchRoutesOnNavigation != null, l.branches, [ye.route.id, we], ne), Nd = gl(Y, we.data), Tn = new Map(x.fetchers);
      Tn.set(E, Nd), Ir.filter((Te) => Te.key !== E).forEach((Te) => {
        let Ea = Te.key, Zm = Tn.get(Ea), j3 = gl(void 0, Zm ? Zm.data : void 0);
        Tn.set(Ea, j3), an(Ea), Te.controller && le.set(Ea, Te.controller);
      }), wt({ fetchers: Tn });
      let gs = () => Ir.forEach((Te) => an(Te.key));
      se.signal.addEventListener("abort", gs);
      let { loaderResults: vs, fetcherResults: ys } = await Um(An, Ir, Ut, Ht, $);
      if (se.signal.aborted) return;
      se.signal.removeEventListener("abort", gs), Er.delete(E), le.delete(E), Ir.forEach((Te) => le.delete(Te.key));
      let pe = x.fetchers.has(E), Bt = (Te) => {
        if (!pe) return Te;
        let Ea = new Map(Te.fetchers);
        return Ea.set(E, Gr(we.data)), { ...Te, fetchers: Ea };
      }, jr = Uu(vs);
      if (jr) return x = Bt(x), ka(Ut, jr.result, false, { preventScrollReset: J });
      if (jr = Uu(ys), jr) return yt.add(jr.key), x = Bt(x), ka(Ut, jr.result, false, { preventScrollReset: J });
      let on = new Map(x.fetchers);
      pe && on.set(E, Gr(we.data));
      let { loaderData: Qm, errors: Ld } = tw(x, _n, vs, void 0, Ir, ys, on);
      Wm(ui, on), x.navigation.state === "loading" && ui > Ae ? (G(S, "Expected pending action"), P && P.abort(), si(x.navigation.location, { matches: _n, loaderData: Qm, errors: Ld, fetchers: on })) : (wt({ errors: Ld, loaderData: rw(x.loaderData, Qm, _n, Ld), fetchers: on }), oe = false);
    }
    async function P3(E, C, M, F, $, Z, q, J, Y) {
      let ne = x.fetchers.get(E);
      rn(E, gl(Y, ne ? ne.data : void 0), { flushSync: q });
      let ee = new AbortController(), se = Ui(e6.history, M, ee.signal);
      if (Z) {
        let we = await ms(F, new URL(se.url).pathname, se.signal, E);
        if (we.type === "aborted") return;
        if (we.type === "error") {
          nn(E, C, we.error, { flushSync: q });
          return;
        } else if (we.matches) F = we.matches;
        else {
          nn(E, C, Qe(404, { pathname: M }), { flushSync: q });
          return;
        }
      }
      let ie = Wi(F, M);
      le.set(E, ee);
      let ye = Ye, Ee = oa(i, o, se, M, F, ie, n, $), et = await bo(se, M, Ee, $, E), xe = et[ie.route.id];
      if (!xe) {
        for (let we of F) if (et[we.route.id]) {
          xe = et[we.route.id];
          break;
        }
      }
      if (le.get(E) === ee && le.delete(E), !se.signal.aborted) {
        if (Xt.has(E)) {
          rn(E, Gr(void 0));
          return;
        }
        if (ia(xe)) if (Ae > ye) {
          rn(E, Gr(void 0));
          return;
        } else {
          yt.add(E), await ka(se, xe, false, { preventScrollReset: J });
          return;
        }
        if (ot(xe)) {
          nn(E, C, xe.error);
          return;
        }
        rn(E, Gr(xe.data));
      }
    }
    async function ka(E, C, M, { submission: F, fetcherSubmission: $, preventScrollReset: Z, replace: q } = {}) {
      M || (N?.resolve(), N = null), C.response.headers.has("X-Remix-Revalidate") && (oe = true);
      let J = C.response.headers.get("Location");
      G(J, "Expected a Location header on the redirect Response");
      let Y = J, ne = new URL(E.url);
      J = Jy(J, ne, s, e6.history), Ha(Y, J, ne, "allow-explicit");
      let ee = xn(x.location, J, { _isRedirect: true });
      if (r) {
        let xe = false;
        if (C.response.headers.has("X-Remix-Reload-Document")) xe = true;
        else if (xp(J)) {
          let we = xw(t, J, true);
          xe = we.origin !== t.location.origin || Ze(we.pathname, s) == null;
        }
        if (xe) {
          q ? t.location.replace(J) : t.location.assign(J);
          return;
        }
      }
      P = null;
      let se = q === true || C.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: ie, formAction: ye, formEncType: Ee } = x.navigation;
      !F && !$ && ie && ye && Ee && (F = aw(x.navigation));
      let et = F || $;
      if (VE.has(C.response.status) && et && Ge(et.formMethod)) await ba(se, ee, { submission: { ...et, formAction: J }, preventScrollReset: Z || A, enableViewTransition: M ? _ : void 0 });
      else {
        let xe = Jh(ee, [], se, F);
        await ba(se, ee, { overrideNavigation: xe, fetcherSubmission: $, preventScrollReset: Z || A, enableViewTransition: M ? _ : void 0 });
      }
    }
    async function bo(E, C, M, F, $) {
      let Z, q = {};
      try {
        Z = await Yw(u, E, C, M, $, F, false);
      } catch (J) {
        return M.filter((Y) => Y.shouldLoad).forEach((Y) => {
          q[Y.route.id] = { type: "error", error: J };
        }), q;
      }
      if (E.signal.aborted) return q;
      if (!Ge(E.method)) for (let J of M) {
        if (Z[J.route.id]?.type === "error") break;
        !Z.hasOwnProperty(J.route.id) && !x.loaderData.hasOwnProperty(J.route.id) && (!x.errors || !x.errors.hasOwnProperty(J.route.id)) && J.shouldCallHandler() && (Z[J.route.id] = { type: "error", result: new Error(`No result returned from dataStrategy for route ${J.route.id}`) });
      }
      for (let [J, Y] of Object.entries(Z)) if (e2(Y)) {
        let ne = Y.result;
        q[J] = { type: "redirect", response: Kw(ne, E, J, M, s) };
      } else q[J] = await Gw(Y);
      return q;
    }
    async function Um(E, C, M, F, $) {
      let Z = bo(M, F, E, $, null), q = Promise.all(C.map(async (ne) => {
        if (ne.matches && ne.match && ne.request && ne.controller) {
          let se = (await bo(ne.request, ne.path, ne.matches, $, ne.key))[ne.match.route.id];
          return { [ne.key]: se };
        } else return Promise.resolve({ [ne.key]: { type: "error", error: Qe(404, { pathname: ne.path }) } });
      })), J = await Z, Y = (await q).reduce((ne, ee) => Object.assign(ne, ee), {});
      return { loaderResults: J, fetcherResults: Y };
    }
    function Sd() {
      oe = true, ir.forEach((E, C) => {
        le.has(C) && _e.add(C), an(C);
      });
    }
    function rn(E, C, M = {}) {
      let F = new Map(x.fetchers);
      F.set(E, C), wt({ fetchers: F }, { flushSync: (M && M.flushSync) === true });
    }
    function nn(E, C, M, F = {}) {
      let $ = vr(x.matches, C), Z = new Map(x.fetchers);
      Cd(Z, E), wt({ errors: { [$.route.id]: M }, fetchers: Z }, { flushSync: (F && F.flushSync) === true });
    }
    function _3(E) {
      return or.set(E, (or.get(E) || 0) + 1), Xt.has(E) && Xt.delete(E), x.fetchers.get(E) || Nl;
    }
    function A3(E, C) {
      an(E, C?.reason), rn(E, Gr(null));
    }
    function Cd(E, C) {
      let M = x.fetchers.get(C);
      le.has(C) && !(M && M.state === "loading" && Er.has(C)) && an(C), ir.delete(C), Er.delete(C), yt.delete(C), Xt.delete(C), _e.delete(C), E.delete(C);
    }
    function T3(E) {
      let C = (or.get(E) || 0) - 1;
      C <= 0 ? (or.delete(E), Xt.add(E)) : or.set(E, C), wt({ fetchers: new Map(x.fetchers) });
    }
    function an(E, C) {
      let M = le.get(E);
      M && (M.abort(C), le.delete(E));
    }
    function Bm(E, C) {
      for (let M of E) {
        let F = C.get(M);
        G(F, `Expected fetcher: ${M}`);
        let $ = Gr(F.data);
        C.set(M, $);
      }
    }
    function Vm(E) {
      let C = [], M = false;
      for (let F of yt) {
        let $ = E.get(F);
        G($, `Expected fetcher: ${F}`), $.state === "loading" && (yt.delete(F), C.push(F), M = true);
      }
      return Bm(C, E), M;
    }
    function Wm(E, C) {
      let M = [];
      for (let [F, $] of Er) if ($ < E) {
        let Z = C.get(F);
        G(Z, `Expected fetcher: ${F}`), Z.state === "loading" && (an(F), Er.delete(F), M.push(F));
      }
      return Bm(M, C), M.length > 0;
    }
    function F3(E, C) {
      let M = x.blockers.get(E) || vn;
      return xa.get(E) !== C && xa.set(E, C), M;
    }
    function Ym(E) {
      x.blockers.delete(E), xa.delete(E);
    }
    function hs(E, C) {
      let M = x.blockers.get(E) || vn;
      G(M.state === "unblocked" && C.state === "blocked" || M.state === "blocked" && C.state === "blocked" || M.state === "blocked" && C.state === "proceeding" || M.state === "blocked" && C.state === "unblocked" || M.state === "proceeding" && C.state === "unblocked", `Invalid blocker state transition: ${M.state} -> ${C.state}`);
      let F = new Map(x.blockers);
      F.set(E, C), wt({ blockers: F });
    }
    function qm({ currentLocation: E, nextLocation: C, historyAction: M }) {
      if (xa.size === 0) return;
      xa.size > 1 && Re(false, "A router only supports one blocker at a time");
      let F = Array.from(xa.entries()), [$, Z] = F[F.length - 1], q = x.blockers.get($);
      if (!(q && q.state === "proceeding") && Z({ currentLocation: E, nextLocation: C, historyAction: M })) return $;
    }
    function Dd(E) {
      let C = Qe(404, { pathname: E }), M = l.activeRoutes, { matches: F, route: $ } = Bi(M);
      return { notFoundMatches: F, route: $, error: C };
    }
    function $3(E, C, M) {
      if (v = E, g = C, y = M || null, !m && x.navigation === Vi) {
        m = true;
        let F = Km(x.location, x.matches);
        F != null && wt({ restoreScrollPosition: F });
      }
      return () => {
        v = null, g = null, y = null;
      };
    }
    function Gm(E, C) {
      return y && y(E, C.map((F) => bw(F, x.loaderData))) || E.key;
    }
    function z3(E, C) {
      if (v && g) {
        let M = Gm(E, C);
        v[M] = g();
      }
    }
    function Km(E, C) {
      if (v) {
        let M = Gm(E, C), F = v[M];
        if (typeof F == "number") return F;
      }
      return null;
    }
    function ps(E, C, M) {
      if (e6.patchRoutesOnNavigation) {
        let F = l.branches;
        if (E) {
          if (Object.keys(E[0].params).length > 0) return { active: true, matches: St(C, M, s, true, F) };
        } else return { active: true, matches: St(C, M, s, true, F) || [] };
      }
      return { active: false, matches: null };
    }
    async function ms(E, C, M, F) {
      if (!e6.patchRoutesOnNavigation) return { type: "success", matches: E };
      let $ = E;
      for (; ; ) {
        let Z = o;
        try {
          await e6.patchRoutesOnNavigation({ signal: M, path: C, matches: $, fetcherKey: F, patch: (ne, ee) => {
            M.aborted || Gy(ne, ee, l, Z, i, false);
          } });
        } catch (ne) {
          return { type: "error", error: ne, partialMatches: $ };
        }
        if (M.aborted) return { type: "aborted" };
        let q = l.branches, J = St(l.activeRoutes, C, s, false, q), Y = null;
        if (J) {
          if (Object.keys(J[0].params).length === 0) return { type: "success", matches: J };
          if (Y = St(l.activeRoutes, C, s, true, q), !(Y && $.length < Y.length && Xm($, Y.slice(0, $.length)))) return { type: "success", matches: J };
        }
        if (Y || (Y = St(l.activeRoutes, C, s, true, q)), !Y || Xm($, Y)) return { type: "success", matches: null };
        $ = Y;
      }
    }
    function Xm(E, C) {
      return E.length === C.length && E.every((M, F) => M.route.id === C[F].route.id);
    }
    function O3(E) {
      o = {}, l.setHmrRoutes(bn(E, i, void 0, o));
    }
    function I3(E, C, M = false) {
      Gy(E, C, l, o, i, M), l.hasHMRRoutes || wt({});
    }
    return D = { get basename() {
      return s;
    }, get future() {
      return c;
    }, get state() {
      return x;
    }, get routes() {
      return l.stableRoutes;
    }, get branches() {
      return l.branches;
    }, get manifest() {
      return o;
    }, get window() {
      return t;
    }, initialize: k3, subscribe: R3, enableScrollRestoration: $3, navigate: jm, fetch: L3, revalidate: S3, createHref: (E) => e6.history.createHref(E), createURL: (E) => e6.history.createURL(E), encodeLocation: (E) => e6.history.encodeLocation(E), getFetcher: _3, resetFetcher: A3, deleteFetcher: T3, dispose: E3, getBlocker: F3, deleteBlocker: Ym, patchRoutes: I3, _internalFetchControllers: le, _internalSetRoutes: O3, _internalSetStateDoNotUseOrYouWillBreakYourApp(E) {
      wt(E);
    } }, e6.instrumentations && (D = zE(D, e6.instrumentations.map((E) => E.router).filter(Boolean))), D;
  }
  function Sp(e6, t) {
    G(e6.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let r = {}, n = (t ? t.basename : null) || "/", a = t?.mapRouteProperties || zw, i = a, o = { ...t?.future };
    if (t?.instrumentations) {
      let y = t.instrumentations;
      i = (g) => ({ ...a(g), ...Mw(y.map((m) => m.route).filter(Boolean), g) });
    }
    let l = bn(e6, i, void 0, r), s = xl(l);
    async function u(y, { requestContext: g, filterMatchesToLoad: m, skipLoaderErrorBubbling: h, skipRevalidation: w, dataStrategy: b, generateMiddlewareResponse: k, normalizePath: L } = {}) {
      let D = L || Wy, x = y.method, S = xn("", D(y), null, "default"), N = St(l, S, n, false, s);
      if (g = g ?? new yr(), !up(x) && x !== "HEAD") {
        let P = Qe(405, { method: x }), { matches: _, route: I } = Bi(l), re = { basename: n, location: S, matches: _, loaderData: {}, actionData: null, errors: { [I.id]: P }, statusCode: P.status, loaderHeaders: {}, actionHeaders: {} };
        return k ? k(() => Promise.resolve(re)) : re;
      } else if (!N) {
        let P = Qe(404, { pathname: S.pathname }), { matches: _, route: I } = Bi(l), re = { basename: n, location: S, matches: _, loaderData: {}, actionData: null, errors: { [I.id]: P }, statusCode: P.status, loaderHeaders: {}, actionHeaders: {} };
        return k ? k(() => Promise.resolve(re)) : re;
      }
      if (k) {
        G(g instanceof yr, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
        try {
          await Qy(N, r, i);
          let P, _ = await Zy({ request: y, url: Ju(y, S), pattern: yn(N), matches: N, params: N[0].params, context: g }, async () => await k(async (re, Q = {}) => {
            let oe = await d(re, S, N, g, b || null, h === true, null, "filterMatchesToLoad" in Q ? Q.filterMatchesToLoad ?? null : m ?? null, w === true);
            return $e(oe) ? oe : (P = { location: S, basename: n, ...oe }, P);
          }), async (I, re) => {
            if (Ki(I)) return I;
            if ($e(I)) try {
              I = new lt(I.status, I.statusText, await qw(I));
            } catch (Q) {
              I = Q;
            }
            if (wn(I) && (I = Zw(I)), P) {
              re in P.loaderData && (P.loaderData[re] = void 0);
              let Q = Cp(l, P, I, h ? re : vr(N, re).route.id);
              return k(() => Promise.resolve(Q));
            } else {
              let Q = h ? re : vr(N, N.find((_e) => _e.route.id === re || _e.route.loader)?.route.id || re).route.id, oe = { matches: N, location: S, basename: n, loaderData: {}, actionData: null, errors: { [Q]: I }, statusCode: Be(I) ? I.status : 500, actionHeaders: {}, loaderHeaders: {} };
              return k(() => Promise.resolve(oe));
            }
          });
          return G($e(_), "Expected a response in query()"), _;
        } catch (P) {
          if ($e(P)) return P;
          throw P;
        }
      }
      let A = await d(y, S, N, g, b || null, h === true, null, m || null, w === true);
      return $e(A) ? A : { location: S, basename: n, ...A };
    }
    async function c(y, { routeId: g, requestContext: m, dataStrategy: h, generateMiddlewareResponse: w, normalizePath: b } = {}) {
      let k = b || Wy, L = y.method, D = xn("", k(y), null, "default"), x = St(l, D, n, false, s);
      if (m = m ?? new yr(), !up(L) && L !== "HEAD" && L !== "OPTIONS") throw Qe(405, { method: L });
      if (!x) throw Qe(404, { pathname: D.pathname });
      let S = g ? x.find((P) => P.route.id === g) : Wi(x, D);
      if (g && !S) throw Qe(403, { pathname: D.pathname, routeId: g });
      if (!S) throw Qe(404, { pathname: D.pathname });
      if (w) return G(m instanceof yr, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`"), await Qy(x, r, i), await Zy({ request: y, url: Ju(y, D), pattern: yn(x), matches: x, params: x[0].params, context: m }, async () => await w(async (I) => {
        let re = await d(I, D, x, m, h || null, false, S, null, false), Q = A(re);
        return $e(Q) ? Q : typeof Q == "string" ? new Response(Q) : Response.json(Q);
      }), (_) => {
        if (wn(_)) return Promise.resolve(sp(_));
        if ($e(_)) return Promise.resolve(_);
        throw _;
      });
      let N = await d(y, D, x, m, h || null, false, S, null, false);
      return A(N);
      function A(P) {
        if ($e(P)) return P;
        let _ = P.errors ? Object.values(P.errors)[0] : void 0;
        if (_ !== void 0) throw _;
        if (P.actionData) return Object.values(P.actionData)[0];
        if (P.loaderData) return Object.values(P.loaderData)[0];
      }
    }
    async function d(y, g, m, h, w, b, k, L, D) {
      G(y.signal, "query()/queryRoute() requests must contain an AbortController signal");
      try {
        if (Ge(y.method)) return await f(y, g, m, k || Wi(m, g), h, w, b, k != null, L, D);
        let x = await p(y, g, m, h, w, b, k, L);
        return $e(x) ? x : { ...x, actionData: null, actionHeaders: {} };
      } catch (x) {
        if (Jw(x) && $e(x.result)) {
          if (x.type === "error") throw x.result;
          return x.result;
        }
        if (Ki(x)) return x;
        throw x;
      }
    }
    async function f(y, g, m, h, w, b, k, L, D, x) {
      let S;
      if (!h.route.action && !h.route.lazy) {
        let P = Qe(405, { method: y.method, pathname: new URL(y.url).pathname, routeId: h.route.id });
        if (L) throw P;
        S = { type: "error", error: P };
      } else {
        let P = oa(i, r, y, g, m, h, [], w);
        S = (await v(y, g, P, L, w, b))[h.route.id], y.signal.aborted && Vy(y, L);
      }
      if (ia(S)) throw new Response(null, { status: S.response.status, headers: { Location: S.response.headers.get("Location") } });
      if (L) {
        if (ot(S)) throw S.error;
        return { matches: [h], loaderData: {}, actionData: { [h.route.id]: S.data }, errors: null, statusCode: 200, loaderHeaders: {}, actionHeaders: {} };
      }
      if (x) if (ot(S)) {
        let P = k ? h : vr(m, h.route.id);
        return { statusCode: Be(S.error) ? S.error.status : S.statusCode != null ? S.statusCode : 500, actionData: null, actionHeaders: { ...S.headers ? { [h.route.id]: S.headers } : {} }, matches: m, loaderData: {}, errors: { [P.route.id]: S.error }, loaderHeaders: {} };
      } else return { actionData: { [h.route.id]: S.data }, actionHeaders: S.headers ? { [h.route.id]: S.headers } : {}, matches: m, loaderData: {}, errors: null, statusCode: S.statusCode || 200, loaderHeaders: {} };
      let N = new Request(y.url, { headers: y.headers, redirect: y.redirect, signal: y.signal });
      if (ot(S)) {
        let P = k ? h : vr(m, h.route.id);
        return { ...await p(N, g, m, w, b, k, null, D, [P.route.id, S]), statusCode: Be(S.error) ? S.error.status : S.statusCode != null ? S.statusCode : 500, actionData: null, actionHeaders: { ...S.headers ? { [h.route.id]: S.headers } : {} } };
      }
      return { ...await p(N, g, m, w, b, k, null, D), actionData: { [h.route.id]: S.data }, ...S.statusCode ? { statusCode: S.statusCode } : {}, actionHeaders: S.headers ? { [h.route.id]: S.headers } : {} };
    }
    async function p(y, g, m, h, w, b, k, L, D) {
      let x = k != null;
      if (x && !k?.route.loader && !k?.route.lazy) throw Qe(400, { method: y.method, pathname: new URL(y.url).pathname, routeId: k?.route.id });
      let S;
      if (k) S = oa(i, r, y, g, m, k, [], h);
      else {
        let P = D && ot(D[1]) ? m.findIndex((I) => I.route.id === D[0]) - 1 : void 0, _ = yn(m);
        S = m.map((I, re) => P != null && re > P ? kl(i, r, y, g, _, I, [], h, false) : kl(i, r, y, g, _, I, [], h, (I.route.loader || I.route.lazy) != null && (!L || L(I))));
      }
      if (!w && !S.some((P) => P.shouldLoad)) return { matches: m, loaderData: {}, errors: D && ot(D[1]) ? { [D[0]]: D[1].error } : null, statusCode: 200, loaderHeaders: {} };
      let N = await v(y, g, S, x, h, w);
      return y.signal.aborted && Vy(y, x), { ...Xw(m, N, D, true, b), matches: m };
    }
    async function v(y, g, m, h, w, b) {
      let k = await Yw(b || op, y, g, m, null, w, true), L = {};
      return await Promise.all(m.map(async (D) => {
        if (!(D.route.id in k)) return;
        let x = k[D.route.id];
        if (e2(x)) {
          let S = x.result;
          throw Kw(S, y, D.route.id, m, n);
        }
        if (h) {
          if ($e(x.result)) throw x;
          if (wn(x.result)) throw sp(x.result);
        }
        L[D.route.id] = await Gw(x);
      })), L;
    }
    return { dataRoutes: l, _internalRouteBranches: s, query: u, queryRoute: c };
  }
  function Cp(e6, t, r, n) {
    let a = n || t._deepestRenderedBoundaryId || e6[0].id;
    return { ...t, statusCode: Be(r) ? r.status : 500, errors: { [a]: r } };
  }
  function Vy(e6, t) {
    if (e6.signal.reason !== void 0) throw e6.signal.reason;
    let r = t ? "queryRoute" : "query";
    throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e6.method} ${e6.url}`);
  }
  function YE(e6) {
    return e6 != null && ("formData" in e6 && e6.formData != null || "body" in e6 && e6.body !== void 0);
  }
  function Wy(e6) {
    let t = new URL(e6.url);
    return { pathname: t.pathname, search: t.search, hash: t.hash };
  }
  function ip(e6, t, r, n, a, i) {
    let o, l;
    if (a) {
      o = [];
      for (let u of t) if (o.push(u), u.route.id === a) {
        l = u;
        break;
      }
    } else o = t, l = t[t.length - 1];
    let s = Dl(n || ".", lc(o), Ze(e6.pathname, r) || e6.pathname, i === "path");
    if (n == null && (s.search = e6.search, s.hash = e6.hash), (n == null || n === "" || n === ".") && l) {
      let u = Lp(s.search);
      if (l.route.index && !u) s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index";
      else if (!l.route.index && u) {
        let c = new URLSearchParams(s.search), d = c.getAll("index");
        c.delete("index"), d.filter((p) => p).forEach((p) => c.append("index", p));
        let f = c.toString();
        s.search = f ? `?${f}` : "";
      }
    }
    return r !== "/" && (s.pathname = _E({ basename: r, pathname: s.pathname })), Ue(s);
  }
  function Yy(e6, t, r) {
    if (!r || !YE(r)) return { path: t };
    if (r.formMethod && !up(r.formMethod)) return { path: t, error: Qe(405, { method: r.formMethod }) };
    let n = () => ({ path: t, error: Qe(400, { type: "invalid-body" }) }), i = (r.formMethod || "get").toUpperCase(), o = Qw(t);
    if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
        if (!Ge(i)) return n();
        let d = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((f, [p, v]) => `${f}${p}=${v}
`, "") : String(r.body);
        return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: void 0, text: d } };
      } else if (r.formEncType === "application/json") {
        if (!Ge(i)) return n();
        try {
          let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
          return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: d, text: void 0 } };
        } catch {
          return n();
        }
      }
    }
    G(typeof FormData == "function", "FormData is not available in this environment");
    let l, s;
    if (r.formData) l = lp(r.formData), s = r.formData;
    else if (r.body instanceof FormData) l = lp(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) l = r.body, s = ew(l);
    else if (r.body == null) l = new URLSearchParams(), s = new FormData();
    else try {
      l = new URLSearchParams(r.body), s = ew(l);
    } catch {
      return n();
    }
    let u = { formMethod: i, formAction: o, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: s, json: void 0, text: void 0 };
    if (Ge(u.formMethod)) return { path: t, submission: u };
    let c = Dt(t);
    return e6 && c.search && Lp(c.search) && l.append("index", ""), c.search = `?${l}`, { path: Ue(c), submission: u };
  }
  function qy(e6, t, r, n, a, i, o, l, s, u, c, d, f, p, v, y, g, m, h, w, b, k) {
    let L = b ? ot(b[1]) ? b[1].error : b[1].data : void 0, D = a.createURL(i.location), x = a.createURL(s), S;
    if (c && i.errors) {
      let Q = Object.keys(i.errors)[0];
      S = o.findIndex((oe) => oe.route.id === Q);
    } else if (b && ot(b[1])) {
      let Q = b[0];
      S = o.findIndex((oe) => oe.route.id === Q) - 1;
    }
    let N = b ? b[1].statusCode : void 0, A = N && N >= 400, P = { currentUrl: D, currentParams: i.matches[0]?.params || {}, nextUrl: x, nextParams: o[0].params, ...l, actionResult: L, actionStatus: N }, _ = yn(o), I = o.map((Q, oe) => {
      let { route: _e } = Q, le = null;
      if (S != null && oe > S) le = false;
      else if (_e.lazy) le = true;
      else if (!Dp(_e)) le = false;
      else if (c) {
        let { shouldLoad: yt } = jw(_e, i.loaderData, i.errors);
        le = yt;
      } else qE(i.loaderData, i.matches[oe], Q) && (le = true);
      if (le !== null) return kl(r, n, e6, s, _, Q, u, t, le);
      let Ye = false;
      typeof k == "boolean" ? Ye = k : A ? Ye = false : (d || D.pathname + D.search === x.pathname + x.search || D.search !== x.search || GE(i.matches[oe], Q)) && (Ye = true);
      let Ae = { ...P, defaultShouldRevalidate: Ye }, Er = bl(Q, Ae);
      return kl(r, n, e6, s, _, Q, u, t, Er, Ae, k);
    }), re = [];
    return v.forEach((Q, oe) => {
      if (c || !o.some((or) => or.route.id === Q.routeId) || p.has(oe)) return;
      let _e = i.fetchers.get(oe), le = _e && _e.state !== "idle" && _e.data === void 0, Ye = St(g, Q.path, m ?? "/", false, w);
      if (!Ye) {
        if (h && le) return;
        re.push({ key: oe, routeId: Q.routeId, path: Q.path, matches: null, match: null, request: null, controller: null });
        return;
      }
      if (y.has(oe)) return;
      let Ae = Wi(Ye, Q.path), Er = new AbortController(), yt = Ui(a, Q.path, Er.signal), ir = null;
      if (f.has(oe)) f.delete(oe), ir = oa(r, n, yt, Q.path, Ye, Ae, u, t);
      else if (le) d && (ir = oa(r, n, yt, Q.path, Ye, Ae, u, t));
      else {
        let or;
        typeof k == "boolean" ? or = k : A ? or = false : or = d;
        let Xt = { ...P, defaultShouldRevalidate: or };
        bl(Ae, Xt) && (ir = oa(r, n, yt, Q.path, Ye, Ae, u, t, Xt));
      }
      ir && re.push({ key: oe, routeId: Q.routeId, path: Q.path, matches: ir, match: Ae, request: yt, controller: Er });
    }), { dsMatches: I, revalidatingFetchers: re };
  }
  function Dp(e6) {
    return e6.loader != null || e6.middleware != null && e6.middleware.length > 0;
  }
  function jw(e6, t, r) {
    if (e6.lazy) return { shouldLoad: true, renderFallback: true };
    if (!Dp(e6)) return { shouldLoad: false, renderFallback: false };
    let n = t != null && e6.id in t, a = r != null && r[e6.id] !== void 0;
    if (!n && a) return { shouldLoad: false, renderFallback: false };
    if (typeof e6.loader == "function" && e6.loader.hydrate === true) return { shouldLoad: true, renderFallback: !n };
    let i = !n && !a;
    return { shouldLoad: i, renderFallback: i };
  }
  function qE(e6, t, r) {
    let n = !t || r.route.id !== t.route.id, a = !e6.hasOwnProperty(r.route.id);
    return n || a;
  }
  function GE(e6, t) {
    let r = e6.route.path;
    return e6.pathname !== t.pathname || r != null && r.endsWith("*") && e6.params["*"] !== t.params["*"];
  }
  function bl(e6, t) {
    if (e6.route.shouldRevalidate) {
      let r = e6.route.shouldRevalidate(t);
      if (typeof r == "boolean") return r;
    }
    return t.defaultShouldRevalidate;
  }
  function Gy(e6, t, r, n, a, i) {
    let o;
    if (e6) {
      let u = n[e6];
      G(u, `No route found to patch children into: routeId = ${e6}`), u.children || (u.children = []), o = u.children;
    } else o = r.activeRoutes;
    let l = [], s = [];
    if (t.forEach((u) => {
      let c = o.find((d) => Hw(u, d));
      c ? s.push({ existingRoute: c, newRoute: u }) : l.push(u);
    }), l.length > 0) {
      let u = bn(l, a, [e6 || "_", "patch", String(o?.length || "0")], n);
      o.push(...u);
    }
    if (i && s.length > 0) for (let u = 0; u < s.length; u++) {
      let { existingRoute: c, newRoute: d } = s[u], f = c, [p] = bn([d], a, [], {}, true);
      Object.assign(f, { element: p.element ? p.element : f.element, errorElement: p.errorElement ? p.errorElement : f.errorElement, hydrateFallbackElement: p.hydrateFallbackElement ? p.hydrateFallbackElement : f.hydrateFallbackElement });
    }
    r.hasHMRRoutes || r.setRoutes([...r.activeRoutes]);
  }
  function Hw(e6, t) {
    return "id" in e6 && "id" in t && e6.id === t.id ? true : e6.index === t.index && e6.path === t.path && e6.caseSensitive === t.caseSensitive ? (!e6.children || e6.children.length === 0) && (!t.children || t.children.length === 0) ? true : e6.children?.every((r, n) => t.children?.some((a) => Hw(r, a))) ?? false : false;
  }
  function KE(e6, t, r, n, a) {
    let i = r[e6.id];
    if (G(i, "No route found in manifest"), !e6.lazy) return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
    if (typeof e6.lazy == "function") {
      let c = Xy.get(i);
      if (c) return { lazyRoutePromise: c, lazyHandlerPromise: c };
      let d = (async () => {
        G(typeof e6.lazy == "function", "No lazy route function found");
        let f = await e6.lazy(), p = {};
        for (let v in f) {
          let y = f[v];
          if (y === void 0) continue;
          let g = xE(v), h = i[v] !== void 0 && v !== "hasErrorBoundary";
          g ? Re(!g, "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : h ? Re(!h, `Route "${i.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`) : p[v] = y;
        }
        Object.assign(i, p), Object.assign(i, { ...n(i), lazy: void 0 });
      })();
      return Xy.set(i, d), d.catch(() => {
      }), { lazyRoutePromise: d, lazyHandlerPromise: d };
    }
    let o = Object.keys(e6.lazy), l = [], s;
    for (let c of o) {
      if (a && a.includes(c)) continue;
      let d = Np({ key: c, route: e6, manifest: r, mapRouteProperties: n });
      d && (l.push(d), c === t && (s = d));
    }
    let u = l.length > 0 ? Promise.all(l).then(() => {
    }) : void 0;
    return u?.catch(() => {
    }), s?.catch(() => {
    }), { lazyRoutePromise: u, lazyHandlerPromise: s };
  }
  function XE(e6) {
    return e6 !== void 0;
  }
  function Qy(e6, t, r) {
    let n = e6.map(({ route: a }) => {
      if (!(typeof a.lazy != "object" || !a.lazy.middleware)) return Np({ key: "middleware", route: a, manifest: t, mapRouteProperties: r });
    }).filter(XE);
    return n.length > 0 ? Promise.all(n) : void 0;
  }
  async function op(e6) {
    let t = e6.matches.filter((a) => a.shouldLoad), r = {};
    return (await Promise.all(t.map((a) => a.resolve()))).forEach((a, i) => {
      r[t[i].route.id] = a;
    }), r;
  }
  async function QE(e6) {
    return e6.matches.some((t) => t.route.middleware) ? Uw(e6, () => op(e6)) : op(e6);
  }
  function Zy(e6, t, r) {
    return Bw(e6, t, n, $e, r);
    function n(a) {
      return wn(a) ? sp(a) : a;
    }
  }
  function Uw(e6, t) {
    return Bw(e6, t, (n) => {
      if (Ki(n)) throw n;
      return n;
    }, tR, r);
    function r(n, a, i) {
      if (i) return Promise.resolve(Object.assign(i.value, { [a]: { type: "error", result: n } }));
      {
        let { matches: o } = e6, l = Math.min(Math.max(o.findIndex((u) => u.route.id === a), 0), Math.max(o.findIndex((u) => u.shouldCallHandler()), 0)), s = vr(o, o[l].route.id).route.id;
        return Promise.resolve({ [s]: { type: "error", result: n } });
      }
    }
  }
  async function Bw(e6, t, r, n, a) {
    let { matches: i, ...o } = e6, l = i.flatMap((u) => u.route.middleware ? u.route.middleware.map((c) => [u.route.id, c]) : []);
    return await Vw(o, l, t, r, n, a);
  }
  async function Vw(e6, t, r, n, a, i, o = 0) {
    let { request: l } = e6;
    if (l.signal.aborted) throw l.signal.reason ?? new Error(`Request aborted: ${l.method} ${l.url}`);
    let s = t[o];
    if (!s) return await r();
    let [u, c] = s, d, f = async () => {
      if (d) throw new Error("You may only call `next()` once per middleware");
      try {
        return d = { value: await Vw(e6, t, r, n, a, i, o + 1) }, d.value;
      } catch (p) {
        return d = { value: await i(p, u, d) }, d.value;
      }
    };
    try {
      let p = await c(e6, f), v = p != null ? n(p) : void 0;
      return a(v) ? v : d ? v ?? d.value : (d = { value: await f() }, d.value);
    } catch (p) {
      return await i(p, u, d);
    }
  }
  function Ww(e6, t, r, n, a) {
    let i = Np({ key: "middleware", route: n.route, manifest: t, mapRouteProperties: e6 }), o = KE(n.route, Ge(r.method) ? "action" : "loader", t, e6, a);
    return { middleware: i, route: o.lazyRoutePromise, handler: o.lazyHandlerPromise };
  }
  function kl(e6, t, r, n, a, i, o, l, s, u = null, c) {
    let d = false, f = Ww(e6, t, r, i, o);
    return { ...i, _lazyPromises: f, shouldLoad: s, shouldRevalidateArgs: u, shouldCallHandler(p) {
      return d = true, u ? typeof c == "boolean" ? bl(i, { ...u, defaultShouldRevalidate: c }) : typeof p == "boolean" ? bl(i, { ...u, defaultShouldRevalidate: p }) : bl(i, u) : s;
    }, resolve(p) {
      let { lazy: v, loader: y, middleware: g } = i.route, m = d || s || p && !Ge(r.method) && (v || y), h = g && g.length > 0 && !y && !v;
      return m && (Ge(r.method) || !h) ? ZE({ request: r, path: n, pattern: a, match: i, lazyHandlerPromise: f?.handler, lazyRoutePromise: f?.route, handlerOverride: p, scopedContext: l }) : Promise.resolve({ type: "data", result: void 0 });
    } };
  }
  function oa(e6, t, r, n, a, i, o, l, s = null) {
    return a.map((u) => u.route.id !== i.route.id ? { ...u, shouldLoad: false, shouldRevalidateArgs: s, shouldCallHandler: () => false, _lazyPromises: Ww(e6, t, r, u, o), resolve: () => Promise.resolve({ type: "data", result: void 0 }) } : kl(e6, t, r, n, yn(a), u, o, l, true, s));
  }
  async function Yw(e6, t, r, n, a, i, o) {
    n.some((c) => c._lazyPromises?.middleware) && await Promise.all(n.map((c) => c._lazyPromises?.middleware));
    let l = { request: t, url: Ju(t, r), pattern: yn(n), params: n[0].params, context: i, matches: n }, u = await e6({ ...l, fetcherKey: a, runClientMiddleware: o ? () => {
      throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
    } : (c) => {
      let d = l;
      return Uw(d, () => c({ ...d, fetcherKey: a, runClientMiddleware: () => {
        throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
      } }));
    } });
    try {
      await Promise.all(n.flatMap((c) => [c._lazyPromises?.handler, c._lazyPromises?.route]));
    } catch {
    }
    return u;
  }
  async function ZE({ request: e6, path: t, pattern: r, match: n, lazyHandlerPromise: a, lazyRoutePromise: i, handlerOverride: o, scopedContext: l }) {
    let s, u, c = Ge(e6.method), d = c ? "action" : "loader", f = (p) => {
      let v, y = new Promise((h, w) => v = w);
      u = () => v(), e6.signal.addEventListener("abort", u);
      let g = (h) => typeof p != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${n.route.id}]`)) : p({ request: e6, url: Ju(e6, t), pattern: r, params: n.params, context: l }, ...h !== void 0 ? [h] : []), m = (async () => {
        try {
          return { type: "data", result: await (o ? o((w) => g(w)) : g()) };
        } catch (h) {
          return { type: "error", result: h };
        }
      })();
      return Promise.race([m, y]);
    };
    try {
      let p = c ? n.route.action : n.route.loader;
      if (a || i) if (p) {
        let v, [y] = await Promise.all([f(p).catch((g) => {
          v = g;
        }), a, i]);
        if (v !== void 0) throw v;
        s = y;
      } else {
        await a;
        let v = c ? n.route.action : n.route.loader;
        if (v) [s] = await Promise.all([f(v), i]);
        else if (d === "action") {
          let y = new URL(e6.url), g = y.pathname + y.search;
          throw Qe(405, { method: e6.method, pathname: g, routeId: n.route.id });
        } else return { type: "data", result: void 0 };
      }
      else if (p) s = await f(p);
      else {
        let v = new URL(e6.url), y = v.pathname + v.search;
        throw Qe(404, { pathname: y });
      }
    } catch (p) {
      return { type: "error", result: p };
    } finally {
      u && e6.signal.removeEventListener("abort", u);
    }
    return s;
  }
  async function qw(e6) {
    let t = e6.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e6.body == null ? null : e6.json() : e6.text();
  }
  async function Gw(e6) {
    let { result: t, type: r } = e6;
    if ($e(t)) {
      let n;
      try {
        n = await qw(t);
      } catch (a) {
        return { type: "error", error: a };
      }
      return r === "error" ? { type: "error", error: new lt(t.status, t.statusText, n), statusCode: t.status, headers: t.headers } : { type: "data", data: n, statusCode: t.status, headers: t.headers };
    }
    return r === "error" ? wn(t) ? t.data instanceof Error ? { type: "error", error: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: Zw(t), statusCode: Be(t) ? t.status : void 0, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: t, statusCode: Be(t) ? t.status : void 0 } : wn(t) ? { type: "data", data: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "data", data: t };
  }
  function Kw(e6, t, r, n, a) {
    let i = e6.headers.get("Location");
    if (G(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !xp(i)) {
      let o = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
      i = ip(new URL(t.url), o, a, i), e6.headers.set("Location", i);
    }
    return e6;
  }
  function wr(e6) {
    try {
      return JE.includes(new URL(e6).protocol);
    } catch {
      return false;
    }
  }
  function Jy(e6, t, r, n) {
    if (xp(e6)) {
      let a = e6, i = Cl.test(a) ? new URL(yw(a, t.protocol)) : new URL(a);
      if (wr(i.toString())) throw new Error("Invalid redirect location");
      let o = Ze(i.pathname, r) != null;
      if (i.origin === t.origin && o) return bp(i.pathname) + i.search + i.hash;
    }
    try {
      let a = n.createURL(e6);
      if (wr(a.toString())) throw new Error("Invalid redirect location");
    } catch {
    }
    return e6;
  }
  function Ui(e6, t, r, n) {
    let a = e6.createURL(Qw(t)).toString(), i = { signal: r };
    if (n && Ge(n.formMethod)) {
      let { formMethod: o, formEncType: l } = n;
      i.method = o.toUpperCase(), l === "application/json" ? (i.headers = new Headers({ "Content-Type": l }), i.body = JSON.stringify(n.json)) : l === "text/plain" ? i.body = n.text : l === "application/x-www-form-urlencoded" && n.formData ? i.body = lp(n.formData) : i.body = n.formData;
    }
    return new Request(a, i);
  }
  function Ju(e6, t) {
    let r = new URL(e6.url), n = typeof t == "string" ? Dt(t) : t;
    if (r.pathname = n.pathname || "/", n.search) {
      let a = new URLSearchParams(n.search), i = a.getAll("index");
      a.delete("index");
      for (let o of i.filter(Boolean)) a.append("index", o);
      r.search = a.size ? `?${a.toString()}` : "";
    } else r.search = "";
    return r.hash = n.hash || "", r;
  }
  function lp(e6) {
    let t = new URLSearchParams();
    for (let [r, n] of e6.entries()) t.append(r, typeof n == "string" ? n : n.name);
    return t;
  }
  function ew(e6) {
    let t = new FormData();
    for (let [r, n] of e6.entries()) t.append(r, n);
    return t;
  }
  function Xw(e6, t, r, n = false, a = false) {
    let i = {}, o = null, l, s = false, u = {}, c = r && ot(r[1]) ? r[1].error : void 0;
    return e6.forEach((d) => {
      if (!(d.route.id in t)) return;
      let f = d.route.id, p = t[f];
      if (G(!ia(p), "Cannot handle redirect results in processLoaderData"), ot(p)) {
        let v = p.error;
        if (c !== void 0 && (v = c, c = void 0), o = o || {}, a) o[f] = v;
        else {
          let y = vr(e6, f);
          o[y.route.id] == null && (o[y.route.id] = v);
        }
        n || (i[f] = Iw), s || (s = true, l = Be(p.error) ? p.error.status : 500), p.headers && (u[f] = p.headers);
      } else i[f] = p.data, p.statusCode && p.statusCode !== 200 && !s && (l = p.statusCode), p.headers && (u[f] = p.headers);
    }), c !== void 0 && r && (o = { [r[0]]: c }, r[2] && (i[r[2]] = void 0)), { loaderData: i, errors: o, statusCode: l || 200, loaderHeaders: u };
  }
  function tw(e6, t, r, n, a, i, o) {
    let { loaderData: l, errors: s } = Xw(t, r, n);
    return a.filter((u) => !u.matches || u.matches.some((c) => c.shouldLoad)).forEach((u) => {
      let { key: c, match: d, controller: f } = u;
      if (f && f.signal.aborted) return;
      let p = i[c];
      if (G(p, "Did not find corresponding fetcher result"), ot(p)) {
        let v = vr(e6.matches, d?.route.id);
        s && s[v.route.id] || (s = { ...s, [v.route.id]: p.error }), o.delete(c);
      } else if (ia(p)) G(false, "Unhandled fetcher revalidation redirect");
      else {
        let v = Gr(p.data);
        o.set(c, v);
      }
    }), { loaderData: l, errors: s };
  }
  function rw(e6, t, r, n) {
    let a = Object.entries(t).filter(([, i]) => i !== Iw).reduce((i, [o, l]) => (i[o] = l, i), {});
    for (let i of r) {
      let o = i.route.id;
      if (!t.hasOwnProperty(o) && e6.hasOwnProperty(o) && i.route.loader && (a[o] = e6[o]), n && n.hasOwnProperty(o)) break;
    }
    return a;
  }
  function nw(e6) {
    return e6 ? ot(e6[1]) ? { actionData: {} } : { actionData: { [e6[0]]: e6[1].data } } : {};
  }
  function vr(e6, t) {
    return (t ? e6.slice(0, e6.findIndex((n) => n.route.id === t) + 1) : [...e6]).reverse().find((n) => n.route.hasErrorBoundary === true) || e6[0];
  }
  function Bi(e6) {
    let t = e6.length === 1 ? e6[0] : e6.find((r) => r.index || !r.path || r.path === "/") || { id: "__shim-error-route__" };
    return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
  }
  function Qe(e6, { pathname: t, routeId: r, method: n, type: a, message: i } = {}) {
    let o = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return e6 === 400 ? (o = "Bad Request", n && t && r ? l = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.` : a === "invalid-body" && (l = "Unable to encode submission body")) : e6 === 403 ? (o = "Forbidden", l = `Route "${r}" does not match URL "${t}"`) : e6 === 404 ? (o = "Not Found", l = `No route matches URL "${t}"`) : e6 === 405 && (o = "Method Not Allowed", n && t && r ? l = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.` : n && (l = `Invalid request method "${n.toUpperCase()}"`)), new lt(e6 || 500, o, new Error(l), true);
  }
  function Uu(e6) {
    let t = Object.entries(e6);
    for (let r = t.length - 1; r >= 0; r--) {
      let [n, a] = t[r];
      if (ia(a)) return { key: n, result: a };
    }
  }
  function Qw(e6) {
    let t = typeof e6 == "string" ? Dt(e6) : e6;
    return Ue({ ...t, hash: "" });
  }
  function eR(e6, t) {
    return e6.pathname !== t.pathname || e6.search !== t.search ? false : e6.hash === "" ? t.hash !== "" : e6.hash === t.hash ? true : t.hash !== "";
  }
  function sp(e6) {
    return Response.json(e6.data, e6.init ?? void 0);
  }
  function Zw(e6) {
    return new lt(e6.init?.status ?? 500, e6.init?.statusText ?? "Internal Server Error", e6.data);
  }
  function tR(e6) {
    return e6 != null && typeof e6 == "object" && Object.entries(e6).every(([t, r]) => typeof t == "string" && Jw(r));
  }
  function Jw(e6) {
    return e6 != null && typeof e6 == "object" && "type" in e6 && "result" in e6 && (e6.type === "data" || e6.type === "error");
  }
  function e2(e6) {
    return $e(e6.result) && $w.has(e6.result.status);
  }
  function ot(e6) {
    return e6.type === "error";
  }
  function ia(e6) {
    return (e6 && e6.type) === "redirect";
  }
  function wn(e6) {
    return typeof e6 == "object" && e6 != null && "type" in e6 && "data" in e6 && "init" in e6 && e6.type === "DataWithResponseInit";
  }
  function $e(e6) {
    return e6 != null && typeof e6.status == "number" && typeof e6.statusText == "string" && typeof e6.headers == "object" && typeof e6.body < "u";
  }
  function Ll(e6) {
    return $w.has(e6);
  }
  function Ki(e6) {
    return $e(e6) && Ll(e6.status) && e6.headers.has("Location");
  }
  function up(e6) {
    return BE.has(e6.toUpperCase());
  }
  function Ge(e6) {
    return HE.has(e6.toUpperCase());
  }
  function Lp(e6) {
    return new URLSearchParams(e6).getAll("index").some((t) => t === "");
  }
  function Wi(e6, t) {
    let r = typeof t == "string" ? Dt(t).search : t.search;
    if (e6[e6.length - 1].route.index && Lp(r || "")) return e6[e6.length - 1];
    let n = Dw(e6);
    return n[n.length - 1];
  }
  function aw(e6) {
    let { formMethod: t, formAction: r, formEncType: n, text: a, formData: i, json: o } = e6;
    if (!(!t || !r || !n)) {
      if (a != null) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: void 0, text: a };
      if (i != null) return { formMethod: t, formAction: r, formEncType: n, formData: i, json: void 0, text: void 0 };
      if (o !== void 0) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: o, text: void 0 };
    }
  }
  function Jh(e6, t, r, n) {
    return n ? { state: "loading", location: e6, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { state: "loading", location: e6, matches: t, historyAction: r, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
  }
  function rR(e6, t, r, n) {
    return { state: "submitting", location: e6, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
  }
  function gl(e6, t) {
    return e6 ? { state: "loading", formMethod: e6.formMethod, formAction: e6.formAction, formEncType: e6.formEncType, formData: e6.formData, json: e6.json, text: e6.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
  }
  function nR(e6, t) {
    return { state: "submitting", formMethod: e6.formMethod, formAction: e6.formAction, formEncType: e6.formEncType, formData: e6.formData, json: e6.json, text: e6.text, data: t ? t.data : void 0 };
  }
  function Gr(e6) {
    return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e6 };
  }
  function aR(e6, t) {
    try {
      let r = e6.sessionStorage.getItem(Ow);
      if (r) {
        let n = JSON.parse(r);
        for (let [a, i] of Object.entries(n || {})) i && Array.isArray(i) && t.set(a, new Set(i || []));
      }
    } catch {
    }
  }
  function iR(e6, t) {
    if (t.size > 0) {
      let r = {};
      for (let [n, a] of t) r[n] = [...a];
      try {
        e6.sessionStorage.setItem(Ow, JSON.stringify(r));
      } catch (n) {
        Re(false, `Failed to save applied view transitions in sessionStorage (${n}).`);
      }
    }
  }
  function iw() {
    let e6, t, r = new Promise((n, a) => {
      e6 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e6, reject: t };
  }
  function Mp() {
    return Ot.useContext(Ml);
  }
  function cc(e6) {
    if (e6.startsWith(`${r2}:${oR}:{`)) try {
      let t = JSON.parse(e6.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
    } catch {
    }
  }
  function dc(e6) {
    if (e6.startsWith(`${r2}:${lR}:{`)) try {
      let t = JSON.parse(e6.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new lt(t.status, t.statusText, t.data);
    } catch {
    }
  }
  function _p(e6, { relative: t } = {}) {
    G(En(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: r, navigator: n } = B.useContext(mt), { hash: a, pathname: i, search: o } = Wa(e6, { relative: t }), l = i;
    return r !== "/" && (l = i === "/" ? r : nr([r, i])), n.createHref({ pathname: l, search: o, hash: a });
  }
  function En() {
    return B.useContext(la) != null;
  }
  function Ke() {
    return G(En(), "useLocation() may be used only in the context of a <Router> component."), B.useContext(la).location;
  }
  function n2() {
    return B.useContext(la).navigationType;
  }
  function a2(e6) {
    G(En(), "useMatch() may be used only in the context of a <Router> component.");
    let { pathname: t } = Ke();
    return B.useMemo(() => Ua(e6, Cw(t)), [t, e6]);
  }
  function o2(e6) {
    B.useContext(mt).static || B.useLayoutEffect(e6);
  }
  function Rn() {
    let { isDataRoute: e6 } = B.useContext(It);
    return e6 ? gR() : sR();
  }
  function sR() {
    G(En(), "useNavigate() may be used only in the context of a <Router> component.");
    let e6 = B.useContext(Tr), { basename: t, navigator: r } = B.useContext(mt), { matches: n } = B.useContext(It), { pathname: a } = Ke(), i = JSON.stringify(lc(n)), o = B.useRef(false);
    return o2(() => {
      o.current = true;
    }), B.useCallback((s, u = {}) => {
      if (Re(o.current, i2), !o.current) return;
      if (typeof s == "number") {
        r.go(s);
        return;
      }
      let c = Dl(s, JSON.parse(i), a, u.relative === "path");
      e6 == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : nr([t, c.pathname])), Ha(typeof s == "string" ? s : Ue(s), r.createHref(c), Rp(r), "reject"), (u.replace ? r.replace : r.push)(c, u.state, u);
    }, [t, r, i, a, e6]);
  }
  function s2() {
    return B.useContext(l2);
  }
  function Ap(e6) {
    let t = B.useContext(It).outlet;
    return B.useMemo(() => t && B.createElement(l2.Provider, { value: e6 }, t), [t, e6]);
  }
  function Pl() {
    let { matches: e6 } = B.useContext(It);
    return e6[e6.length - 1]?.params ?? {};
  }
  function Wa(e6, { relative: t } = {}) {
    let { matches: r } = B.useContext(It), { pathname: n } = Ke(), a = JSON.stringify(lc(r));
    return B.useMemo(() => Dl(e6, JSON.parse(a), n, t === "path"), [e6, a, n, t]);
  }
  function Tp(e6, t) {
    return u2(e6, t);
  }
  function u2(e6, t, r) {
    G(En(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: n } = B.useContext(mt), { matches: a } = B.useContext(It), i = a[a.length - 1], o = i ? i.params : {}, l = i ? i.pathname : "/", s = i ? i.pathnameBase : "/", u = i && i.route;
    if (Kr) {
      let g = u && u.path || "";
      m2(l, !u || g.endsWith("*") || g.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === "/" ? "*" : `${g}/*`}">.`);
    }
    let c = Ke(), d;
    if (t) {
      let g = typeof t == "string" ? Dt(t) : t;
      G(s === "/" || g.pathname?.startsWith(s), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${g.pathname}" was given in the \`location\` prop.`), d = g;
    } else d = c;
    let f = d.pathname || "/", p = f;
    if (s !== "/") {
      let g = s.replace(/^\//, "").split("/");
      p = "/" + f.replace(/^\//, "").split("/").slice(g.length).join("/");
    }
    let v = r && r.state.matches.length ? r.state.matches.map((g) => Object.assign(g, { route: r.manifest[g.route.id] || g.route })) : eo(e6, { pathname: p });
    Kr && (Re(u || v != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), Re(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
    let y = d2(v && v.map((g) => Object.assign({}, g, { params: Object.assign({}, o, g.params), pathname: nr([s, n.encodeLocation ? n.encodeLocation(g.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathname]), pathnameBase: g.pathnameBase === "/" ? s : nr([s, n.encodeLocation ? n.encodeLocation(g.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathnameBase]) })), a, r);
    return t && y ? B.createElement(la.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", mask: void 0, ...d }, navigationType: "POP" } }, y) : y;
  }
  function uR() {
    let e6 = Ya(), t = Be(e6) ? `${e6.status} ${e6.statusText}` : e6 instanceof Error ? e6.message : JSON.stringify(e6), r = e6 instanceof Error ? e6.stack : null, n = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: n }, i = { padding: "2px 4px", backgroundColor: n }, o = null;
    return Kr && (console.error("Error handled by React Router default ErrorBoundary:", e6), o = B.createElement(B.Fragment, null, B.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), B.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", B.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", B.createElement("code", { style: i }, "errorElement"), " prop on your route."))), B.createElement(B.Fragment, null, B.createElement("h2", null, "Unexpected Application Error!"), B.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? B.createElement("pre", { style: a }, r) : null, o);
  }
  function dR({ children: e6, error: t }) {
    let { basename: r, navigator: n } = B.useContext(mt);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let a = cc(t.digest);
      if (a) {
        let i = ep.get(t);
        if (i) throw i;
        let o = Lw(a.location, r), l = o.absoluteURL || o.to;
        if (Ha(a.location, l, Rp(n), "allow-explicit"), wr(l)) throw new Error("Invalid redirect location");
        if (Nw && !ep.get(t)) if (o.isExternal || a.reloadDocument) window.location.href = l;
        else {
          let s = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o.to, { replace: a.replace }));
          throw ep.set(t, s), s;
        }
        return B.createElement("meta", { httpEquiv: "refresh", content: `0;url=${l}` });
      }
    }
    return e6;
  }
  function fR({ routeContext: e6, match: t, children: r }) {
    let n = B.useContext(Tr);
    return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), B.createElement(It.Provider, { value: e6 }, r);
  }
  function d2(e6, t = [], r) {
    let n = r?.state;
    if (e6 == null) {
      if (!n) return null;
      if (n.errors) e6 = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e6 = n.matches;
      else return null;
    }
    let a = e6, i = n?.errors;
    if (i != null) {
      let c = a.findIndex((d) => d.route.id && i?.[d.route.id] !== void 0);
      G(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), a = a.slice(0, Math.min(a.length, c + 1));
    }
    let o = false, l = -1;
    if (r && n) {
      o = n.renderFallback;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = c), d.route.id) {
          let { loaderData: f, errors: p } = n, v = d.route.loader && !f.hasOwnProperty(d.route.id) && (!p || p[d.route.id] === void 0);
          if (d.route.lazy || v) {
            r.isStatic && (o = true), l >= 0 ? a = a.slice(0, l + 1) : a = [a[0]];
            break;
          }
        }
      }
    }
    let s = r?.onError, u = n && s ? (c, d) => {
      s(c, { location: n.location, params: n.matches?.[0]?.params ?? {}, pattern: yn(n.matches), errorInfo: d });
    } : void 0;
    return a.reduceRight((c, d, f) => {
      let p, v = false, y = null, g = null;
      n && (p = i && d.route.id ? i[d.route.id] : void 0, y = d.route.errorElement || cR, o && (l < 0 && f === 0 ? (m2("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), v = true, g = null) : l === f && (v = true, g = d.route.hydrateFallbackElement || null)));
      let m = t.concat(a.slice(0, f + 1)), h = () => {
        let w;
        return p ? w = y : v ? w = g : d.route.Component ? w = B.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = c, B.createElement(fR, { match: d, routeContext: { outlet: c, matches: m, isDataRoute: n != null }, children: w });
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? B.createElement(c2, { location: n.location, revalidation: n.revalidation, component: y, error: p, children: h(), routeContext: { outlet: null, matches: m, isDataRoute: true }, onError: u }) : h();
    }, null);
  }
  function Fp(e6) {
    return `${e6} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function $p(e6) {
    let t = B.useContext(Tr);
    return G(t, Fp(e6)), t;
  }
  function Qr(e6) {
    let t = B.useContext(Xr);
    return G(t, Fp(e6)), t;
  }
  function hR(e6) {
    let t = B.useContext(It);
    return G(t, Fp(e6)), t;
  }
  function no(e6) {
    let t = hR(e6), r = t.matches[t.matches.length - 1];
    return G(r.route.id, `${e6} can only be used on routes that contain a unique "id"`), r.route.id;
  }
  function pR() {
    return no("useRouteId");
  }
  function zp() {
    let e6 = Qr("useNavigation");
    return B.useMemo(() => {
      let { matches: t, historyAction: r, ...n } = e6.navigation;
      return n;
    }, [e6.navigation]);
  }
  function f2() {
    let e6 = $p("useRevalidator"), t = Qr("useRevalidator"), r = B.useCallback(async () => {
      await e6.router.revalidate();
    }, [e6.router]);
    return B.useMemo(() => ({ revalidate: r, state: t.revalidation }), [r, t.revalidation]);
  }
  function _l() {
    let { matches: e6, loaderData: t } = Qr("useMatches");
    return B.useMemo(() => e6.map((r) => bw(r, t)), [e6, t]);
  }
  function Al() {
    let e6 = Qr("useLoaderData"), t = no("useLoaderData");
    return e6.loaderData[t];
  }
  function h2(e6) {
    return Qr("useRouteLoaderData").loaderData[e6];
  }
  function Tl() {
    let e6 = Qr("useActionData"), t = no("useLoaderData");
    return e6.actionData ? e6.actionData[t] : void 0;
  }
  function Ya() {
    let e6 = B.useContext(Pp), t = Qr("useRouteError"), r = no("useRouteError");
    return e6 !== void 0 ? e6 : t.errors?.[r];
  }
  function Op() {
    return B.useContext(Xi)?._data;
  }
  function p2() {
    return B.useContext(Xi)?._error;
  }
  function Ip(e6) {
    let { router: t, basename: r } = $p("useBlocker"), n = Qr("useBlocker"), [a, i] = B.useState(""), o = B.useCallback((l) => {
      if (typeof e6 != "function") return !!e6;
      if (r === "/") return e6(l);
      let { currentLocation: s, nextLocation: u, historyAction: c } = l;
      return e6({ currentLocation: { ...s, pathname: Ze(s.pathname, r) || s.pathname }, nextLocation: { ...u, pathname: Ze(u.pathname, r) || u.pathname }, historyAction: c });
    }, [r, e6]);
    return B.useEffect(() => {
      let l = String(++mR);
      return i(l), () => t.deleteBlocker(l);
    }, [t]), B.useEffect(() => {
      a !== "" && t.getBlocker(a, o);
    }, [t, a, o]), a && n.blockers.has(a) ? n.blockers.get(a) : vn;
  }
  function gR() {
    let { router: e6 } = $p("useNavigate"), t = no("useNavigate"), r = B.useRef(false);
    return o2(() => {
      r.current = true;
    }), B.useCallback(async (a, i = {}) => {
      Re(r.current, i2), r.current && (typeof a == "number" ? await e6.navigate(a) : await e6.navigate(a, { fromRouteId: t, ...i }));
    }, [e6, t]);
  }
  function m2(e6, t, r) {
    !t && !ow[e6] && (ow[e6] = true, Re(false, r));
  }
  function g2(...e6) {
    let t = no("useRoute"), r = e6[0] ?? t, n = Qr("useRoute"), a = n.matches.find(({ route: i }) => i.id === r);
    if (a !== void 0) return { handle: a.route.handle, loaderData: n.loaderData[r], actionData: n.actionData?.[r] };
  }
  function lw(e6) {
    return { id: e6.route.id, pathname: e6.pathname, params: e6.params, handle: e6.route.handle };
  }
  function v2() {
    let { location: e6, historyAction: t, matches: r, navigation: n } = Qr("unstable_useRouterState"), a = B.useMemo(() => ({ type: t, location: e6, searchParams: new URLSearchParams(e6.search), params: r[r.length - 1]?.params ?? {}, matches: r.map((o) => lw(o)) }), [e6, r, t]), i = B.useMemo(() => {
      if (n.state === "idle") return null;
      let o = { type: n.historyAction, location: n.location, searchParams: new URLSearchParams(n.location.search), params: n.matches[n.matches.length - 1]?.params ?? {}, matches: n.matches.map((l) => lw(l)) };
      return n.state === "loading" ? { ...o, state: "loading", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { ...o, state: "submitting", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
    }, [n]);
    return B.useMemo(() => ({ active: a, pending: i }), [a, i]);
  }
  function Qi(e6, t) {
    !e6 && !sw[t] && (sw[t] = true, console.warn(t));
  }
  function wR(e6) {
    return uw ? uw(e6) : [e6, yR];
  }
  function Sn(e6) {
    let t = { hasErrorBoundary: e6.hasErrorBoundary || e6.ErrorBoundary != null || e6.errorElement != null };
    return e6.Component && (Kr && e6.element && Re(false, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, { element: V.createElement(e6.Component), Component: void 0 })), e6.HydrateFallback && (Kr && e6.hydrateFallbackElement && Re(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, { hydrateFallbackElement: V.createElement(e6.HydrateFallback), HydrateFallback: void 0 })), e6.ErrorBoundary && (Kr && e6.errorElement && Re(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, { errorElement: V.createElement(e6.ErrorBoundary), ErrorBoundary: void 0 })), t;
  }
  function fc(e6, t) {
    return Va({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: nc({ initialEntries: t?.initialEntries, initialIndex: t?.initialIndex }), hydrationData: t?.hydrationData, routes: e6, hydrationRouteProperties: qa, mapRouteProperties: Sn, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, instrumentations: t?.instrumentations }).initialize();
  }
  function Fl({ router: e6, flushSync: t, onError: r, useTransitions: n }) {
    n = Mp() || n;
    let [i, o] = V.useState(e6.state), [l, s] = wR(i), [u, c] = V.useState(), [d, f] = V.useState({ isTransitioning: false }), [p, v] = V.useState(), [y, g] = V.useState(), [m, h] = V.useState(), w = V.useRef(/* @__PURE__ */ new Map()), b = V.useCallback((x, { deletedFetchers: S, newErrors: N, flushSync: A, viewTransitionOpts: P }) => {
      N && r && Object.values(N).forEach((I) => r(I, { location: x.location, params: x.matches[0]?.params ?? {}, pattern: yn(x.matches) })), x.fetchers.forEach((I, re) => {
        I.data !== void 0 && w.current.set(re, I.data);
      }), S.forEach((I) => w.current.delete(I)), Qi(A === false || t != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
      let _ = e6.window != null && e6.window.document != null && typeof e6.window.document.startViewTransition == "function";
      if (Qi(P == null || _, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !P || !_) {
        t && A ? t(() => o(x)) : n === false ? o(x) : V.startTransition(() => {
          n === true && s((I) => cw(I, x)), o(x);
        });
        return;
      }
      if (t && A) {
        t(() => {
          y && (p?.resolve(), y.skipTransition()), f({ isTransitioning: true, flushSync: true, currentLocation: P.currentLocation, nextLocation: P.nextLocation });
        });
        let I = e6.window.document.startViewTransition(() => {
          t(() => o(x));
        });
        I.finished.finally(() => {
          t(() => {
            v(void 0), g(void 0), c(void 0), f({ isTransitioning: false });
          });
        }), t(() => g(I));
        return;
      }
      y ? (p?.resolve(), y.skipTransition(), h({ state: x, currentLocation: P.currentLocation, nextLocation: P.nextLocation })) : (c(x), f({ isTransitioning: true, flushSync: false, currentLocation: P.currentLocation, nextLocation: P.nextLocation }));
    }, [e6.window, t, y, p, n, s, r]);
    V.useLayoutEffect(() => e6.subscribe(b), [e6, b]), V.useEffect(() => {
      d.isTransitioning && !d.flushSync && v(new xR());
    }, [d]), V.useEffect(() => {
      if (p && u && e6.window) {
        let x = u, S = p.promise, N = e6.window.document.startViewTransition(async () => {
          n === false ? o(x) : V.startTransition(() => {
            n === true && s((A) => cw(A, x)), o(x);
          }), await S;
        });
        N.finished.finally(() => {
          v(void 0), g(void 0), c(void 0), f({ isTransitioning: false });
        }), g(N);
      }
    }, [u, p, e6.window, n, s]), V.useEffect(() => {
      p && u && l.location.key === u.location.key && p.resolve();
    }, [p, y, l.location, u]), V.useEffect(() => {
      !d.isTransitioning && m && (c(m.state), f({ isTransitioning: true, flushSync: false, currentLocation: m.currentLocation, nextLocation: m.nextLocation }), h(void 0));
    }, [d.isTransitioning, m]);
    let k = V.useMemo(() => ({ createHref: e6.createHref, createURL: e6.createURL, encodeLocation: e6.encodeLocation, go: (x) => e6.navigate(x), push: (x, S, N) => e6.navigate(x, { state: S, preventScrollReset: N?.preventScrollReset }), replace: (x, S, N) => e6.navigate(x, { replace: true, state: S, preventScrollReset: N?.preventScrollReset }) }), [e6]), L = e6.basename || "/", D = V.useMemo(() => ({ router: e6, navigator: k, static: false, basename: L, onError: r }), [e6, k, L, r]);
    return V.createElement(V.Fragment, null, V.createElement(Tr.Provider, { value: D }, V.createElement(Xr.Provider, { value: l }, V.createElement(ro.Provider, { value: w.current }, V.createElement(to.Provider, { value: d }, V.createElement(Cn, { basename: L, location: l.location, navigationType: l.historyAction, navigator: k, useTransitions: n }, V.createElement(bR, { routes: e6.routes, manifest: e6.manifest, future: e6.future, state: l, isStatic: false, onError: r })))))), null);
  }
  function cw(e6, t) {
    return { ...e6, navigation: t.navigation.state !== "idle" ? t.navigation : e6.navigation, revalidation: t.revalidation !== "idle" ? t.revalidation : e6.revalidation, actionData: t.navigation.state !== "submitting" ? t.actionData : e6.actionData, fetchers: t.fetchers };
  }
  function y2({ routes: e6, manifest: t, future: r, state: n, isStatic: a, onError: i }) {
    return u2(e6, void 0, { manifest: t, state: n, isStatic: a, onError: i, future: r });
  }
  function hc({ basename: e6, children: t, initialEntries: r, initialIndex: n, useTransitions: a }) {
    let i = V.useRef();
    i.current == null && (i.current = nc({ initialEntries: r, initialIndex: n, v5Compat: true }));
    let o = i.current, [l, s] = V.useState({ action: o.action, location: o.location }), u = V.useCallback((c) => {
      a === false ? s(c) : V.startTransition(() => s(c));
    }, [a]);
    return V.useLayoutEffect(() => o.listen(u), [o, u]), V.createElement(Cn, { basename: e6, children: t, location: l.location, navigationType: l.action, navigator: o, useTransitions: a });
  }
  function w2({ to: e6, replace: t, state: r, relative: n }) {
    G(En(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: a, navigator: i } = V.useContext(mt);
    Re(!a, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = V.useContext(It), { pathname: l } = Ke(), s = Rn(), u = Dl(e6, lc(o), l, n === "path");
    Ha(typeof e6 == "string" ? e6 : Ue(e6), i.createHref(u), Rp(i), "reject");
    let c = JSON.stringify(u);
    return V.useEffect(() => {
      s(JSON.parse(c), { replace: t, state: r, relative: n });
    }, [s, c, n, t, r]), null;
  }
  function pc(e6) {
    return Ap(e6.context);
  }
  function $l(e6) {
    G(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Cn({ basename: e6 = "/", children: t = null, location: r, navigationType: n = "POP", navigator: a, static: i = false, useTransitions: o }) {
    G(!En(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let l = e6.replace(/^\/*/, "/"), s = V.useMemo(() => ({ basename: l, navigator: a, static: i, useTransitions: o, future: {} }), [l, a, i, o]);
    typeof r == "string" && (r = Dt(r));
    let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: p = "default", mask: v } = r, y = V.useMemo(() => {
      let g = Ze(u, l);
      return g == null ? null : { location: { pathname: g, search: c, hash: d, state: f, key: p, mask: v }, navigationType: n };
    }, [l, u, c, d, f, p, n, v]);
    return Re(y != null, `<Router basename="${l}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : V.createElement(mt.Provider, { value: s }, V.createElement(la.Provider, { children: t, value: y }));
  }
  function mc({ children: e6, location: t }) {
    return Tp(Zi(e6), t);
  }
  function x2({ children: e6, errorElement: t, resolve: r }) {
    let n = V.useContext(Tr), a = V.useContext(Xr), i = V.useCallback((o, l) => {
      n && n.onError && a && n.onError(o, { location: a.location, params: a.matches[0]?.params || {}, pattern: yn(a.matches), errorInfo: l });
    }, [n, a]);
    return V.createElement(kR, { resolve: r, errorElement: t, onError: i }, V.createElement(ER, null, e6));
  }
  function ER({ children: e6 }) {
    let t = Op(), r = typeof e6 == "function" ? e6(t) : e6;
    return V.createElement(V.Fragment, null, r);
  }
  function Zi(e6, t = []) {
    let r = [];
    return V.Children.forEach(e6, (n, a) => {
      if (!V.isValidElement(n)) return;
      let i = [...t, a];
      if (n.type === V.Fragment) {
        r.push.apply(r, Zi(n.props.children, i));
        return;
      }
      G(n.type === $l, `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), G(!n.props.index || !n.props.children, "An index route cannot have child routes.");
      let o = { id: n.props.id || i.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, middleware: n.props.middleware, loader: n.props.loader, action: n.props.action, hydrateFallbackElement: n.props.hydrateFallbackElement, HydrateFallback: n.props.HydrateFallback, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.hasErrorBoundary === true || n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
      n.props.children && (o.children = Zi(n.props.children, i)), r.push(o);
    }), r;
  }
  function k2(e6) {
    return d2(e6);
  }
  function E2() {
    return { params: Pl(), loaderData: Al(), actionData: Tl(), matches: _l() };
  }
  function R2({ children: e6 }) {
    let t = E2();
    return V.cloneElement(e6, t);
  }
  function gc(e6) {
    return function() {
      let r = E2();
      return V.createElement(e6, r);
    };
  }
  function S2() {
    return { params: Pl(), loaderData: Al(), actionData: Tl() };
  }
  function C2({ children: e6 }) {
    let t = S2();
    return V.cloneElement(e6, t);
  }
  function vc(e6) {
    return function() {
      let r = S2();
      return V.createElement(e6, r);
    };
  }
  function D2() {
    return { params: Pl(), loaderData: Al(), actionData: Tl(), error: Ya() };
  }
  function N2({ children: e6 }) {
    let t = D2();
    return V.cloneElement(e6, t);
  }
  function yc(e6) {
    return function() {
      let r = D2();
      return V.createElement(e6, r);
    };
  }
  function wc(e6) {
    return typeof HTMLElement < "u" && e6 instanceof HTMLElement;
  }
  function RR(e6) {
    return wc(e6) && e6.tagName.toLowerCase() === "button";
  }
  function SR(e6) {
    return wc(e6) && e6.tagName.toLowerCase() === "form";
  }
  function CR(e6) {
    return wc(e6) && e6.tagName.toLowerCase() === "input";
  }
  function DR(e6) {
    return !!(e6.metaKey || e6.altKey || e6.ctrlKey || e6.shiftKey);
  }
  function NR(e6, t) {
    return e6.button === 0 && (!t || t === "_self") && !DR(e6);
  }
  function El(e6 = "") {
    return new URLSearchParams(typeof e6 == "string" || Array.isArray(e6) || e6 instanceof URLSearchParams ? e6 : Object.keys(e6).reduce((t, r) => {
      let n = e6[r];
      return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
    }, []));
  }
  function LR(e6, t) {
    let r = El(e6);
    return t && t.forEach((n, a) => {
      r.has(a) || t.getAll(a).forEach((i) => {
        r.append(a, i);
      });
    }), r;
  }
  function MR() {
    if (Bu === null) try {
      new FormData(document.createElement("form"), 0), Bu = false;
    } catch {
      Bu = true;
    }
    return Bu;
  }
  function tp(e6) {
    return e6 != null && !PR.has(e6) ? (Re(false, `"${e6}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`), null) : e6;
  }
  function _R(e6, t) {
    let r, n, a, i, o;
    if (SR(e6)) {
      let l = e6.getAttribute("action");
      n = l ? Ze(l, t) : null, r = e6.getAttribute("method") || Gu, a = tp(e6.getAttribute("enctype")) || Ku, i = new FormData(e6);
    } else if (RR(e6) || CR(e6) && (e6.type === "submit" || e6.type === "image")) {
      let l = e6.form;
      if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = e6.getAttribute("formaction") || l.getAttribute("action");
      if (n = s ? Ze(s, t) : null, r = e6.getAttribute("formmethod") || l.getAttribute("method") || Gu, a = tp(e6.getAttribute("formenctype")) || tp(l.getAttribute("enctype")) || Ku, i = new FormData(l, e6), !MR()) {
        let { name: u, type: c, value: d } = e6;
        if (c === "image") {
          let f = u ? `${u}.` : "";
          i.append(`${f}x`, "0"), i.append(`${f}y`, "0");
        } else u && i.append(u, d);
      }
    } else {
      if (wc(e6)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      r = Gu, n = null, a = Ku, o = e6;
    }
    return i && a === "text/plain" && (o = i, i = void 0), { action: n, method: r.toLowerCase(), encType: a, formData: i, body: o };
  }
  function AR() {
    let e6 = new TextDecoder(), t = "";
    return new TransformStream({ transform(r, n) {
      let a = e6.decode(r, { stream: true }), i = (t + a).split(`
`);
      t = i.pop() || "";
      for (let o of i) n.enqueue(o);
    }, flush(r) {
      t && r.enqueue(t);
    } });
  }
  async function np(e6) {
    let { indices: t } = this, r = t.get(e6);
    if (r) return [r];
    if (e6 === void 0) return Vp;
    if (e6 === null) return ec;
    if (Number.isNaN(e6)) return jp;
    if (e6 === Number.POSITIVE_INFINITY) return Bp;
    if (e6 === Number.NEGATIVE_INFINITY) return Hp;
    if (e6 === 0 && 1 / e6 < 0) return Up;
    let n = this.index++;
    t.set(e6, n);
    let a = [[e6, n]];
    return await $R.call(this, a), n;
  }
  async function $R(e6) {
    let { deferred: t, indices: r, plugins: n, postPlugins: a } = this, i = this.stringified, o = rp(), l = (u) => {
      let c = r.get(u);
      if (c) return [c];
      if (u === void 0) return Vp;
      if (u === null) return ec;
      if (Number.isNaN(u)) return jp;
      if (u === Number.POSITIVE_INFINITY) return Bp;
      if (u === Number.NEGATIVE_INFINITY) return Hp;
      if (u === 0 && 1 / u < 0) return Up;
      let d = this.index++;
      return r.set(u, d), e6.push([u, d]), d;
    }, s = 0;
    for (; e6.length > 0; ) {
      let u = rp();
      ++s % 6e3 === 0 && u - o >= TR && (await FR(), o = rp());
      let [c, d] = e6.pop(), f = (v) => Object.keys(v).map((y) => `"_${l(y)}":${l(v[y])}`).join(","), p = null;
      switch (typeof c) {
        case "boolean":
        case "number":
        case "string":
          i[d] = JSON.stringify(c);
          break;
        case "bigint":
          i[d] = `["${M2}","${c}"]`;
          break;
        case "symbol": {
          let v = Symbol.keyFor(c);
          v ? i[d] = `["${T2}",${JSON.stringify(v)}]` : p = new Error("Cannot encode symbol unless created with Symbol.for()");
          break;
        }
        case "object": {
          if (!c) {
            i[d] = `${ec}`;
            break;
          }
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let g of n) {
            let m = g(c);
            if (Array.isArray(m)) {
              y = true;
              let [h, ...w] = m;
              i[d] = `[${JSON.stringify(h)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          if (!y) {
            let g = v ? "[" : "{";
            if (v) {
              for (let m = 0; m < c.length; m++) g += (m ? "," : "") + (m in c ? l(c[m]) : L2);
              i[d] = `${g}]`;
            } else if (c instanceof Date) {
              let m = c.getTime();
              i[d] = `["${P2}",${Number.isNaN(m) ? JSON.stringify("invalid") : m}]`;
            } else c instanceof URL ? i[d] = `["${F2}",${JSON.stringify(c.href)}]` : c instanceof RegExp ? i[d] = `["${A2}",${JSON.stringify(c.source)},${JSON.stringify(c.flags)}]` : c instanceof Set ? c.size > 0 ? i[d] = `["${dp}",${[...c].map((m) => l(m)).join(",")}]` : i[d] = `["${dp}"]` : c instanceof Map ? c.size > 0 ? i[d] = `["${cp}",${[...c].flatMap(([m, h]) => [l(m), l(h)]).join(",")}]` : i[d] = `["${cp}"]` : c instanceof Promise ? (i[d] = `["${qi}",${d}]`, t[d] = c) : c instanceof Error ? (i[d] = `["${Yi}",${JSON.stringify(c.message)}`, c.name !== "Error" && (i[d] += `,${JSON.stringify(c.name)}`), i[d] += "]") : Object.getPrototypeOf(c) === null ? i[d] = `["${_2}",{${f(c)}}]` : OR(c) ? i[d] = `{${f(c)}}` : p = new Error("Cannot encode object with prototype");
          }
          break;
        }
        default: {
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let g of n) {
            let m = g(c);
            if (Array.isArray(m)) {
              y = true;
              let [h, ...w] = m;
              i[d] = `[${JSON.stringify(h)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          y || (p = new Error("Cannot encode function or unexpected type"));
        }
      }
      if (p) {
        let v = false;
        if (a) for (let y of a) {
          let g = y(c);
          if (Array.isArray(g)) {
            v = true;
            let [m, ...h] = g;
            i[d] = `[${JSON.stringify(m)}`, h.length > 0 && (i[d] += `,${h.map((w) => l(w)).join(",")}`), i[d] += "]";
            break;
          }
        }
        if (!v) throw p;
      }
    }
  }
  function OR(e6) {
    let t = Object.getPrototypeOf(e6);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === zR;
  }
  function hp(e6) {
    let { hydrated: t, values: r } = this;
    if (typeof e6 == "number") return dw.call(this, e6);
    if (!Array.isArray(e6) || !e6.length) throw new SyntaxError();
    let n = r.length;
    for (let a of e6) r.push(a);
    return t.length = r.length, dw.call(this, n);
  }
  function dw(e6) {
    let { hydrated: t, values: r, deferred: n, plugins: a } = this, i, o = [[e6, (s) => {
      i = s;
    }]], l = [];
    for (; o.length > 0; ) {
      let [s, u] = o.pop();
      switch (s) {
        case Vp:
          u(void 0);
          continue;
        case ec:
          u(null);
          continue;
        case jp:
          u(NaN);
          continue;
        case Bp:
          u(1 / 0);
          continue;
        case Hp:
          u(-1 / 0);
          continue;
        case Up:
          u(-0);
          continue;
      }
      if (t[s]) {
        u(t[s]);
        continue;
      }
      let c = r[s];
      if (!c || typeof c != "object") {
        t[s] = c, u(c);
        continue;
      }
      if (Array.isArray(c)) if (typeof c[0] == "string") {
        let [d, f, p] = c;
        switch (d) {
          case P2:
            u(t[s] = new Date(f));
            continue;
          case F2:
            u(t[s] = new URL(f));
            continue;
          case M2:
            u(t[s] = BigInt(f));
            continue;
          case A2:
            u(t[s] = new RegExp(f, p));
            continue;
          case T2:
            u(t[s] = Symbol.for(f));
            continue;
          case dp:
            let v = /* @__PURE__ */ new Set();
            t[s] = v;
            for (let b = c.length - 1; b > 0; b--) o.push([c[b], (k) => {
              v.add(k);
            }]);
            u(v);
            continue;
          case cp:
            let y = /* @__PURE__ */ new Map();
            t[s] = y;
            for (let b = c.length - 2; b > 0; b -= 2) {
              let k = [];
              o.push([c[b + 1], (L) => {
                k[1] = L;
              }]), o.push([c[b], (L) => {
                k[0] = L;
              }]), l.push(() => {
                y.set(k[0], k[1]);
              });
            }
            u(y);
            continue;
          case _2:
            let g = /* @__PURE__ */ Object.create(null);
            t[s] = g;
            for (let b of Object.keys(f).reverse()) {
              let k = [];
              o.push([f[b], (L) => {
                k[1] = L;
              }]), o.push([Number(b.slice(1)), (L) => {
                k[0] = L;
              }]), l.push(() => {
                g[k[0]] = k[1];
              });
            }
            u(g);
            continue;
          case qi:
            if (t[f]) u(t[s] = t[f]);
            else {
              let b = new $2();
              n[f] = b, u(t[s] = b.promise);
            }
            continue;
          case Yi:
            let [, m, h] = c, w = h && Vu && Ep.includes(h) && h in Vu && typeof Vu[h] == "function" ? new Vu[h](m) : new Error(m);
            t[s] = w, u(w);
            continue;
          case fp:
            u(t[s] = t[f]);
            continue;
          default:
            if (Array.isArray(a)) {
              let b = [], k = c.slice(1);
              for (let L = 0; L < k.length; L++) {
                let D = k[L];
                o.push([D, (x) => {
                  b[L] = x;
                }]);
              }
              l.push(() => {
                for (let L of a) {
                  let D = L(c[0], ...b);
                  if (D) {
                    u(t[s] = D.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        let d = [];
        t[s] = d;
        for (let f = 0; f < c.length; f++) {
          let p = c[f];
          p !== L2 && o.push([p, (v) => {
            d[f] = v;
          }]);
        }
        u(d);
        continue;
      }
      else {
        let d = {};
        t[s] = d;
        for (let f of Object.keys(c).reverse()) {
          let p = [];
          o.push([c[f], (v) => {
            p[1] = v;
          }]), o.push([Number(f.slice(1)), (v) => {
            p[0] = v;
          }]), l.push(() => {
            d[p[0]] = p[1];
          });
        }
        u(d);
        continue;
      }
    }
    for (; l.length > 0; ) l.pop()();
    return i;
  }
  async function IR(e6, t) {
    let { plugins: r } = t ?? {}, n = new $2(), a = e6.pipeThrough(AR()).getReader(), i = { values: [], hydrated: [], deferred: {}, plugins: r }, o = await jR.call(i, a), l = n.promise;
    return o.done ? n.resolve() : l = HR.call(i, a).then(n.resolve).catch((s) => {
      for (let u of Object.values(i.deferred)) u.reject(s);
      n.reject(s);
    }), { done: l.then(() => a.closed), value: o.value };
  }
  async function jR(e6) {
    let t = await e6.read();
    if (!t.value) throw new SyntaxError();
    let r;
    try {
      r = JSON.parse(t.value);
    } catch {
      throw new SyntaxError();
    }
    return { done: t.done, value: hp.call(this, r) };
  }
  async function HR(e6) {
    let t = await e6.read();
    for (; !t.done; ) {
      if (!t.value) continue;
      let r = t.value;
      switch (r[0]) {
        case qi: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = hp.call(this, l);
          i.resolve(s);
          break;
        }
        case Yi: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = hp.call(this, l);
          i.reject(s);
          break;
        }
        default:
          throw new SyntaxError();
      }
      t = await e6.read();
    }
  }
  function z2(e6, t) {
    let { onComplete: r, plugins: n, postPlugins: a, signal: i } = t ?? {}, o = { deferred: {}, index: 0, indices: /* @__PURE__ */ new Map(), stringified: [], plugins: n, postPlugins: a, signal: i }, l = new TextEncoder(), s = 0;
    return new ReadableStream({ async start(c) {
      let d = await np.call(o, e6);
      if (Array.isArray(d)) throw new Error("This should never happen");
      d < 0 ? c.enqueue(l.encode(`${d}
`)) : (c.enqueue(l.encode(`[${o.stringified.join(",")}]
`)), s = o.stringified.length - 1);
      let f = /* @__PURE__ */ new WeakSet(), p = Promise.resolve();
      if (Object.keys(o.deferred).length) {
        let v, y = new Promise((g, m) => {
          if (v = g, i) {
            let h = () => m(i.reason || new Error("Signal was aborted."));
            i.aborted ? h() : i.addEventListener("abort", (w) => {
              h();
            });
          }
        });
        for (; Object.keys(o.deferred).length > 0; ) {
          for (let [g, m] of Object.entries(o.deferred)) f.has(m) || f.add(o.deferred[Number(g)] = Promise.race([y, m]).then((h) => (p = p.then(async () => {
            let w = await np.call(o, h);
            if (Array.isArray(w)) c.enqueue(l.encode(`${qi}${g}:[["${fp}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${qi}${g}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${qi}${g}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), p), (h) => (p = p.then(async () => {
            (!h || typeof h != "object" || !(h instanceof Error)) && (h = new Error("An unknown error occurred"));
            let w = await np.call(o, h);
            if (Array.isArray(w)) c.enqueue(l.encode(`${Yi}${g}:[["${fp}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${Yi}${g}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${Yi}${g}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), p)).finally(() => {
            delete o.deferred[Number(g)];
          }));
          await Promise.race(Object.values(o.deferred));
        }
        v();
      }
      await Promise.all(Object.values(o.deferred)), await p, c.close(), r?.();
    } });
  }
  async function O2(e6) {
    let t = { signal: e6.signal };
    if (e6.method !== "GET") {
      t.method = e6.method;
      let r = e6.headers.get("Content-Type");
      r && /\bapplication\/json\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = JSON.stringify(await e6.json())) : r && /\btext\/plain\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = await e6.text()) : r && /\bapplication\/x-www-form-urlencoded\b/.test(r) ? t.body = new URLSearchParams(await e6.text()) : t.body = await e6.formData();
    }
    return t;
  }
  function kn(e6) {
    return e6.replace(BR, (t) => UR[t]);
  }
  function Ct(e6, t) {
    if (e6 === false || e6 === null || typeof e6 > "u") throw new Error(t);
  }
  function Yp({ context: e6, identifier: t, reader: r, textDecoder: n, nonce: a }) {
    if (!e6.renderMeta || !e6.renderMeta.didRenderScripts) return null;
    e6.renderMeta.streamCache || (e6.renderMeta.streamCache = {});
    let { streamCache: i } = e6.renderMeta, o = i[t];
    if (o || (o = i[t] = r.read().then((c) => {
      i[t].result = { done: c.done, value: n.decode(c.value, { stream: true }) };
    }).catch((c) => {
      i[t].error = c;
    })), o.error) throw o.error;
    if (o.result === void 0) throw o;
    let { done: l, value: s } = o.result, u = s ? gr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.enqueue(${kn(JSON.stringify(s))});` } }) : null;
    return l ? gr.createElement(gr.Fragment, null, u, gr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: "window.__reactRouterContext.streamController.close();" } })) : gr.createElement(gr.Fragment, null, u, gr.createElement(gr.Suspense, null, gr.createElement(Yp, { context: e6, identifier: t + 1, reader: r, textDecoder: n, nonce: a })));
  }
  function bc(e6, t, r, n, a, i) {
    let o = j2(e6, (l) => {
      let s = t.routes[l.route.id];
      return Ct(s, "Route not found in manifest"), { hasLoader: s.hasLoader, hasClientLoader: s.hasClientLoader };
    }, KR, n, a, i);
    return async (l) => l.runClientMiddleware(o);
  }
  function j2(e6, t, r, n, a, i, o = () => true) {
    return async (l) => {
      let { request: s, matches: u, fetcherKey: c } = l, d = e6();
      if (s.method !== "GET") return VR(l, r, a, i);
      let f = u.some((p) => {
        let { hasLoader: v, hasClientLoader: y } = t(p);
        return p.shouldCallHandler() && v && !y;
      });
      return !n && !f ? WR(l, t, r, a, i) : c ? GR(l, r, a, i) : YR(l, d, t, r, n, a, i, o);
    };
  }
  async function VR(e6, t, r, n) {
    let a = e6.matches.find((l) => l.shouldCallHandler());
    Ct(a, "No action match found");
    let i, o = await a.resolve(async (l) => await l(async () => {
      let { data: u, status: c } = await t(e6, r, n, [a.route.id]);
      return i = c, Rl(u, a.route.id);
    }));
    return $e(o.result) || Be(o.result) || wn(o.result) ? { [a.route.id]: o } : { [a.route.id]: { type: o.type, result: kp(o.result, i) } };
  }
  async function WR(e6, t, r, n, a) {
    let i = e6.matches.filter((l) => l.shouldCallHandler()), o = {};
    return await Promise.all(i.map((l) => l.resolve(async (s) => {
      try {
        let { hasClientLoader: u } = t(l), c = l.route.id, d = u ? await s(async () => {
          let { data: f } = await r(e6, n, a, [c]);
          return Rl(f, c);
        }) : await s();
        o[l.route.id] = { type: "data", result: d };
      } catch (u) {
        o[l.route.id] = { type: "error", result: u };
      }
    }))), o;
  }
  async function YR(e6, t, r, n, a, i, o, l = () => true) {
    let s = /* @__PURE__ */ new Set(), u = false, c = e6.matches.map(() => fw()), d = fw(), f = {}, p = Promise.all(e6.matches.map(async (y, g) => y.resolve(async (m) => {
      c[g].resolve();
      let h = y.route.id, { hasLoader: w, hasClientLoader: b } = r(y), k = !y.shouldRevalidateArgs || y.shouldRevalidateArgs.actionStatus == null || y.shouldRevalidateArgs.actionStatus < 400;
      if (!y.shouldCallHandler(k)) {
        u || (u = y.shouldRevalidateArgs != null && w);
        return;
      }
      if (l(y) && b) {
        w && (u = true);
        try {
          let D = await m(async () => {
            let { data: x } = await n(e6, i, o, [h]);
            return Rl(x, h);
          });
          f[h] = { type: "data", result: D };
        } catch (D) {
          f[h] = { type: "error", result: D };
        }
        return;
      }
      w && s.add(h);
      try {
        let D = await m(async () => {
          let x = await d.promise;
          return Rl(x, h);
        });
        f[h] = { type: "data", result: D };
      } catch (D) {
        f[h] = { type: "error", result: D };
      }
    })));
    if (await Promise.all(c.map((y) => y.promise)), (!t.state.initialized && t.state.navigation.state === "idle" || s.size === 0) && !window.__reactRouterHdrActive) d.resolve({ routes: {} });
    else {
      let y = a && u && s.size > 0 ? [...s.keys()] : void 0;
      try {
        let g = await n(e6, i, o, y);
        d.resolve(g.data);
      } catch (g) {
        d.reject(g);
      }
    }
    return await p, await qR(d.promise, e6.matches, s, f), f;
  }
  async function qR(e6, t, r, n) {
    try {
      let a, i = await e6;
      if ("routes" in i) {
        for (let o of t) if (o.route.id in i.routes) {
          let l = i.routes[o.route.id];
          if ("error" in l) {
            a = l.error, n[o.route.id]?.result == null && (n[o.route.id] = { type: "error", result: a });
            break;
          }
        }
      }
      a !== void 0 && Array.from(r.values()).forEach((o) => {
        n[o].result instanceof I2 && (n[o].result = a);
      });
    } catch {
    }
  }
  async function GR(e6, t, r, n) {
    let a = e6.matches.find((l) => l.shouldCallHandler());
    Ct(a, "No fetcher match found");
    let i = a.route.id, o = await a.resolve(async (l) => l(async () => {
      let { data: s } = await t(e6, r, n, [i]);
      return Rl(s, i);
    }));
    return { [a.route.id]: o };
  }
  function H2(e6) {
    let t = e6.searchParams.getAll("index");
    e6.searchParams.delete("index");
    let r = [];
    for (let n of t) n && r.push(n);
    for (let n of r) e6.searchParams.append("index", n);
    return e6;
  }
  function kc(e6, t, r, n) {
    let a = typeof e6 == "string" ? new URL(e6, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e6;
    return r ? a.pathname.endsWith("/") ? a.pathname = `${a.pathname}_.${n}` : a.pathname = `${a.pathname}.${n}` : a.pathname === "/" ? a.pathname = `_root.${n}` : t && Ze(a.pathname, t) === "/" ? a.pathname = `${Gi(t)}/_root.${n}` : a.pathname = `${Gi(a.pathname)}.${n}`, a;
  }
  async function KR(e6, t, r, n) {
    let { request: a } = e6, i = kc(a.url, t, r, "data");
    a.method === "GET" && (i = H2(i), n && i.searchParams.set("_routes", n.join(",")));
    let o = await fetch(i, await O2(a));
    if (o.status >= 400 && !o.headers.has("X-Remix-Response")) throw new lt(o.status, o.statusText, await o.text());
    if (o.status === 204 && o.headers.has("X-Remix-Redirect")) return { status: xc, data: { redirect: { redirect: o.headers.get("X-Remix-Redirect"), status: Number(o.headers.get("X-Remix-Status") || "302"), revalidate: o.headers.get("X-Remix-Revalidate") === "true", reload: o.headers.get("X-Remix-Reload-Document") === "true", replace: o.headers.get("X-Remix-Replace") === "true" } } };
    if (Wp.has(o.status)) {
      let l = {};
      return n && a.method !== "GET" && (l[n[0]] = { data: void 0 }), { status: o.status, data: { routes: l } };
    }
    Ct(o.body, "No response body to decode");
    try {
      let l = await Ga(o.body, window), s;
      if (a.method === "GET") {
        let u = l.value;
        Ar in u ? s = { redirect: u[Ar] } : s = { routes: u };
      } else {
        let u = l.value, c = n?.[0];
        Ct(c, "No routeId found for single fetch call decoding"), "redirect" in u ? s = { redirect: u } : s = { routes: { [c]: u } };
      }
      return { status: o.status, data: s };
    } catch {
      throw new Error("Unable to decode turbo-stream response");
    }
  }
  function Ga(e6, t) {
    return IR(e6, { plugins: [(r, ...n) => {
      if (r === "SanitizedError") {
        let [a, i, o] = n, l = Error;
        a && Ep.includes(a) && a in t && typeof t[a] == "function" && (l = t[a]);
        let s = new l(i);
        return s.stack = o, { value: s };
      }
      if (r === "ErrorResponse") {
        let [a, i, o] = n;
        return { value: new lt(i, o, a) };
      }
      if (r === "SingleFetchRedirect") return { value: { [Ar]: n[0] } };
      if (r === "SingleFetchClassInstance") return { value: n[0] };
      if (r === "SingleFetchFallback") return { value: void 0 };
    }] });
  }
  function Rl(e6, t) {
    if ("redirect" in e6) {
      let { redirect: n, revalidate: a, reload: i, replace: o, status: l } = e6.redirect;
      throw Ba(n, { status: l, headers: { ...a ? { "X-Remix-Revalidate": "yes" } : null, ...i ? { "X-Remix-Reload-Document": "yes" } : null, ...o ? { "X-Remix-Replace": "yes" } : null } });
    }
    let r = e6.routes[t];
    if (r == null) throw new I2(`No result found for routeId "${t}"`);
    if ("error" in r) throw r.error;
    if ("data" in r) return r.data;
    throw new Error(`Invalid response found for routeId "${t}"`);
  }
  function fw() {
    let e6, t, r = new Promise((n, a) => {
      e6 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e6, reject: t };
  }
  async function U2(e6, t) {
    if (e6.id in t) return t[e6.id];
    try {
      let r = await import(e6.module);
      return t[e6.id] = r, r;
    } catch (r) {
      if (console.error(`Error loading route module \`${e6.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import_meta.hot) throw r;
      return window.location.reload(), new Promise(() => {
      });
    }
  }
  function XR(e6, t, r) {
    let n = e6.map((i) => {
      let o = t[i.route.id], l = r.routes[i.route.id];
      return [l && l.css ? l.css.map((s) => ({ rel: "stylesheet", href: s })) : [], o?.links?.() || []];
    }).flat(2), a = Gp(e6, r);
    return Y2(n, a);
  }
  function B2(e6) {
    return e6.css ? e6.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
  }
  async function QR(e6) {
    if (!e6.css) return;
    let t = B2(e6);
    await Promise.all(t.map(W2));
  }
  async function V2(e6, t) {
    if (!e6.css && !t.links || !rS()) return;
    let r = [];
    if (e6.css && r.push(...B2(e6)), t.links && r.push(...t.links()), r.length === 0) return;
    let n = [];
    for (let a of r) !qp(a) && a.rel === "stylesheet" && n.push({ ...a, rel: "preload", as: "style" });
    await Promise.all(n.map(W2));
  }
  async function W2(e6) {
    return new Promise((t) => {
      if (e6.media && !window.matchMedia(e6.media).matches || document.querySelector(`link[rel="stylesheet"][href="${e6.href}"]`)) return t();
      let r = document.createElement("link");
      Object.assign(r, e6);
      function n() {
        document.head.contains(r) && document.head.removeChild(r);
      }
      r.onload = () => {
        n(), t();
      }, r.onerror = () => {
        n(), t();
      }, document.head.appendChild(r);
    });
  }
  function qp(e6) {
    return e6 != null && typeof e6.page == "string";
  }
  function ZR(e6) {
    return e6 == null ? false : e6.href == null ? e6.rel === "preload" && typeof e6.imageSrcSet == "string" && typeof e6.imageSizes == "string" : typeof e6.rel == "string" && typeof e6.href == "string";
  }
  async function JR(e6, t, r) {
    let n = await Promise.all(e6.map(async (a) => {
      let i = t.routes[a.route.id];
      if (i) {
        let o = await U2(i, r);
        return o.links ? o.links() : [];
      }
      return [];
    }));
    return Y2(n.flat(1).filter(ZR).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map((a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }));
  }
  function hw(e6, t, r, n, a, i) {
    let o = (s, u) => r[u] ? s.route.id !== r[u].route.id : true, l = (s, u) => r[u].pathname !== s.pathname || r[u].route.path?.endsWith("*") && r[u].params["*"] !== s.params["*"];
    return i === "assets" ? t.filter((s, u) => o(s, u) || l(s, u)) : i === "data" ? t.filter((s, u) => {
      let c = n.routes[s.route.id];
      if (!c || !c.hasLoader) return false;
      if (o(s, u) || l(s, u)) return true;
      if (s.route.shouldRevalidate) {
        let d = s.route.shouldRevalidate({ currentUrl: new URL(a.pathname + a.search + a.hash, window.origin), currentParams: r[0]?.params || {}, nextUrl: new URL(e6, window.origin), nextParams: s.params, defaultShouldRevalidate: true });
        if (typeof d == "boolean") return d;
      }
      return true;
    }) : [];
  }
  function Gp(e6, t, { includeHydrateFallback: r } = {}) {
    return eS(e6.map((n) => {
      let a = t.routes[n.route.id];
      if (!a) return [];
      let i = [a.module];
      return a.clientActionModule && (i = i.concat(a.clientActionModule)), a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)), r && a.hydrateFallbackModule && (i = i.concat(a.hydrateFallbackModule)), a.imports && (i = i.concat(a.imports)), i;
    }).flat(1));
  }
  function eS(e6) {
    return [...new Set(e6)];
  }
  function tS(e6) {
    let t = {}, r = Object.keys(e6).sort();
    for (let n of r) t[n] = e6[n];
    return t;
  }
  function Y2(e6, t) {
    let r = /* @__PURE__ */ new Set(), n = new Set(t);
    return e6.reduce((a, i) => {
      if (t && !qp(i) && i.as === "script" && i.href && n.has(i.href)) return a;
      let l = JSON.stringify(tS(i));
      return r.has(l) || (r.add(l), a.push({ key: l, link: i })), a;
    }, []);
  }
  function rS() {
    if (Wu !== void 0) return Wu;
    let e6 = document.createElement("link");
    return Wu = e6.relList.supports("preload"), e6 = null, Wu;
  }
  function nS() {
    let { nonce: e6 } = Zr();
    return pp.createElement(mp, { title: "Loading...", renderScripts: true }, Kr ? pp.createElement("script", { nonce: e6, dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            ` } }) : null);
  }
  function Kp(e6) {
    let t = {};
    return Object.values(e6).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function G2(e6, t, r) {
    let n = K2(t), a = t.HydrateFallback && (!r || e6.id === "root") ? t.HydrateFallback : e6.id === "root" ? nS : void 0, i = t.ErrorBoundary ? t.ErrorBoundary : e6.id === "root" ? () => na.createElement(t4, { error: Ya() }) : void 0;
    return e6.id === "root" && t.Layout ? { ...n ? { element: na.createElement(t.Layout, null, na.createElement(n, null)) } : { Component: n }, ...i ? { errorElement: na.createElement(t.Layout, null, na.createElement(i, null)) } : { ErrorBoundary: i }, ...a ? { hydrateFallbackElement: na.createElement(t.Layout, null, na.createElement(a, null)) } : { HydrateFallback: a } } : { Component: n, ErrorBoundary: i, HydrateFallback: a };
  }
  function Xp(e6, t, r, n, a = "", i = Kp(e6), o = Promise.resolve({ Component: () => null })) {
    return (i[a] || []).map((l) => {
      let s = t[l.id];
      Ct(s, "No `routeModule` available to create server routes");
      let u = { ...G2(l, s, n), caseSensitive: l.caseSensitive, id: l.id, index: l.index, path: l.path, handle: s.handle, lazy: n ? () => o : void 0, loader: l.hasLoader || l.hasClientLoader ? () => null : void 0 }, c = Xp(e6, t, r, n, l.id, i, o);
      return c.length > 0 && (u.children = c), u;
    });
  }
  function Ec(e6, t, r, n, a, i) {
    return Ka(t, r, n, a, i, "", Kp(t), e6);
  }
  function Yu(e6, t) {
    if (e6 === "loader" && !t.hasLoader || e6 === "action" && !t.hasAction) {
      let n = `You are trying to call ${e6 === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e6} (routeId: "${t.id}")`;
      throw console.error(n), new lt(400, "Bad Request", new Error(n), true);
    }
  }
  function Xu(e6, t) {
    let r = e6 === "clientAction" ? "a" : "an", n = `Route "${t}" does not have ${r} ${e6}, but you are trying to submit to it. To fix this, please add ${r} \`${e6}\` function to the route`;
    throw console.error(n), new lt(405, "Method Not Allowed", new Error(n), true);
  }
  function Ka(e6, t, r, n, a, i = "", o = Kp(e6), l) {
    return (o[i] || []).map((s) => {
      let u = t[s.id];
      function c(h) {
        return Ct(typeof h == "function", "No single fetch function available for route handler"), h();
      }
      function d(h) {
        return s.hasLoader ? c(h) : Promise.resolve(null);
      }
      function f(h) {
        if (!s.hasAction) throw Xu("action", s.id);
        return c(h);
      }
      function p(h) {
        import(h);
      }
      function v(h) {
        h.clientActionModule && p(h.clientActionModule), h.clientLoaderModule && p(h.clientLoaderModule);
      }
      async function y(h) {
        let w = t[s.id], b = w ? V2(s, w) : Promise.resolve();
        try {
          return h();
        } finally {
          await b;
        }
      }
      let g = { id: s.id, index: s.index, path: s.path };
      if (u) {
        Object.assign(g, { ...g, ...G2(s, u, a), middleware: u.clientMiddleware, handle: u.handle, shouldRevalidate: pw(g.path, u, s, n, l) });
        let h = r && r.loaderData && s.id in r.loaderData, w = h ? r?.loaderData?.[s.id] : void 0, b = r && r.errors && s.id in r.errors, k = b ? r?.errors?.[s.id] : void 0, L = l == null && (u.clientLoader?.hydrate === true || !s.hasLoader);
        g.loader = async ({ request: D, params: x, context: S, pattern: N, url: A }, P) => {
          let _ = L;
          return L = false, await y(async () => (Ct(u, "No `routeModule` available for critical-route loader"), u.clientLoader ? u.clientLoader({ request: D, params: x, context: S, pattern: N, url: A, async serverLoader() {
            if (Yu("loader", s), _) {
              if (h) return w;
              if (b) throw k;
            }
            return d(P);
          } }) : d(P)));
        }, g.loader.hydrate = sa(s.id, u.clientLoader, s.hasLoader, a), g.action = ({ request: D, params: x, context: S, pattern: N, url: A }, P) => y(async () => {
          if (Ct(u, "No `routeModule` available for critical-route action"), !u.clientAction) {
            if (a) throw Xu("clientAction", s.id);
            return f(P);
          }
          return u.clientAction({ request: D, params: x, context: S, pattern: N, url: A, async serverAction() {
            return Yu("action", s), f(P);
          } });
        });
      } else {
        s.hasClientLoader || (g.loader = (b, k) => y(() => d(k))), s.hasClientAction || (g.action = (b, k) => y(() => {
          if (a) throw Xu("clientAction", s.id);
          return f(k);
        }));
        let h;
        async function w() {
          return h ? await h : (h = (async () => {
            (s.clientLoaderModule || s.clientActionModule) && await new Promise((k) => setTimeout(k, 0));
            let b = iS(s, t);
            return v(s), await b;
          })(), await h);
        }
        g.lazy = { loader: s.hasClientLoader ? async () => {
          let { clientLoader: b } = s.clientLoaderModule ? await import(s.clientLoaderModule) : await w();
          return Ct(b, "No `clientLoader` export found"), (k, L) => b({ ...k, async serverLoader() {
            return Yu("loader", s), d(L);
          } });
        } : void 0, action: s.hasClientAction ? async () => {
          let b = s.clientActionModule ? import(s.clientActionModule) : w();
          v(s);
          let { clientAction: k } = await b;
          return Ct(k, "No `clientAction` export found"), (L, D) => k({ ...L, async serverAction() {
            return Yu("action", s), f(D);
          } });
        } : void 0, middleware: s.hasClientMiddleware ? async () => {
          let { clientMiddleware: b } = s.clientMiddlewareModule ? await import(s.clientMiddlewareModule) : await w();
          return Ct(b, "No `clientMiddleware` export found"), b;
        } : void 0, shouldRevalidate: async () => {
          let b = await w();
          return pw(g.path, b, s, n, l);
        }, handle: async () => (await w()).handle, Component: async () => (await w()).Component, ErrorBoundary: s.hasErrorBoundary ? async () => (await w()).ErrorBoundary : void 0 };
      }
      let m = Ka(e6, t, r, n, a, s.id, o, l);
      return m.length > 0 && (g.children = m), g;
    });
  }
  function pw(e6, t, r, n, a) {
    if (a) return aS(r.id, t.shouldRevalidate, a);
    if (!n && r.hasLoader && !r.hasClientLoader) {
      let i = e6 ? wp(e6)[1].map((l) => l.paramName) : [], o = (l) => i.some((s) => l.currentParams[s] !== l.nextParams[s]);
      if (t.shouldRevalidate) {
        let l = t.shouldRevalidate;
        return (s) => l({ ...s, defaultShouldRevalidate: o(s) });
      } else return (l) => o(l);
    }
    return t.shouldRevalidate;
  }
  function aS(e6, t, r) {
    let n = false;
    return (a) => n ? t ? t(a) : a.defaultShouldRevalidate : (n = true, r.has(e6));
  }
  async function iS(e6, t) {
    let r = U2(e6, t), n = QR(e6), a = await r;
    return await Promise.all([n, V2(e6, a)]), { Component: K2(a), ErrorBoundary: a.ErrorBoundary, clientMiddleware: a.clientMiddleware, clientAction: a.clientAction, clientLoader: a.clientLoader, handle: a.handle, links: a.links, meta: a.meta, shouldRevalidate: a.shouldRevalidate };
  }
  function K2(e6) {
    if (e6.default == null) return;
    if (!(typeof e6.default == "object" && Object.keys(e6.default).length === 0)) return e6.default;
  }
  function sa(e6, t, r, n) {
    return n && e6 !== "root" || t != null && (t.hydrate === true || r !== true);
  }
  function X2(e6) {
    let t = /* @__PURE__ */ new Set();
    return e6.forEach((r) => {
      r.startsWith("/") || (r = `/${r}`);
      for (let n = 1; n < r.length; n++) r[n] === "/" && t.add(r.slice(0, n));
      t.add(r);
    }), Array.from(t);
  }
  function Qp(e6, t) {
    return e6.mode === "lazy" && t === true;
  }
  function lS({ sri: e6, ...t }, r) {
    let n = new Set(r.state.matches.map((l) => l.route.id)), a = r.state.location.pathname.split("/").filter(Boolean), i = ["/"];
    for (a.pop(); a.length > 0; ) i.push(`/${a.join("/")}`), a.pop();
    i.forEach((l) => {
      let s = St(r.routes, l, r.basename || "/", false, r.branches);
      s && s.forEach((u) => n.add(u.route.id));
    });
    let o = [...n].reduce((l, s) => Object.assign(l, { [s]: t.routes[s] }), {});
    return { ...t, routes: o, sri: e6 ? true : void 0 };
  }
  function Sc(e6, t, r, n, a, i, o) {
    if (Qp(a, n)) return async ({ path: l, patch: s, signal: u, fetcherKey: c }) => {
      if (tc.has(l)) return;
      let { state: d } = e6();
      await Q2([l], c ? window.location.href : Ue(d.navigation.location || d.location), t, r, n, i, o, a.manifestPath, s, u);
    };
  }
  function Cc(e6, t, r, n, a, i) {
    q2.useEffect(() => {
      if (!Qp(a, n) || window.navigator?.connection?.saveData === true) return;
      function o(c) {
        let d = c.tagName === "FORM" ? c.getAttribute("action") : c.getAttribute("href");
        if (!d) return;
        let f = c.tagName === "A" ? c.pathname : new URL(d, window.location.origin).pathname;
        tc.has(f) || Qu.add(f);
      }
      async function l() {
        document.querySelectorAll("a[data-discover], form[data-discover]").forEach(o);
        let c = Array.from(Qu.keys()).filter((d) => tc.has(d) ? (Qu.delete(d), false) : true);
        if (c.length !== 0) try {
          await Q2(c, null, t, r, n, i, e6.basename, a.manifestPath, e6.patchRoutes);
        } catch (d) {
          console.error("Failed to fetch manifest patches", d);
        }
      }
      let s = uS(l, 100);
      l();
      let u = new MutationObserver(() => s());
      return u.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-discover", "href", "action"] }), () => u.disconnect();
    }, [n, i, t, r, e6, a]);
  }
  function Zp(e6, t) {
    let r = e6 || "/__manifest";
    return t == null ? r : nr([t, r]);
  }
  async function Q2(e6, t, r, n, a, i, o, l, s, u) {
    e6 = X2(e6);
    let c = new URLSearchParams();
    c.set("paths", e6.sort().join(",")), c.set("version", r.version);
    let d = new URL(Zp(l, o), window.location.origin);
    if (d.search = c.toString(), d.toString().length > Rc) {
      Qu.clear();
      return;
    }
    let f;
    try {
      let g = await fetch(d, { signal: u });
      if (g.ok) {
        if (g.status === 204 && g.headers.has("X-Remix-Reload-Document")) {
          if (!t) {
            console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
            return;
          }
          try {
            if (sessionStorage.getItem(ap) === r.version) {
              console.error("Unable to discover routes due to manifest version mismatch.");
              return;
            }
            sessionStorage.setItem(ap, r.version);
          } catch {
          }
          window.location.href = t, console.warn("Detected manifest version mismatch, reloading..."), await new Promise(() => {
          });
        } else if (g.status >= 400) throw new Error(await g.text());
      } else throw new Error(`${g.status} ${g.statusText}`);
      try {
        sessionStorage.removeItem(ap);
      } catch {
      }
      f = await g.json();
    } catch (g) {
      if (u?.aborted) return;
      throw g;
    }
    let p = new Set(Object.keys(r.routes)), v = Object.values(f).reduce((g, m) => (m && !p.has(m.id) && (g[m.id] = m), g), {});
    Object.assign(r.routes, v), e6.forEach((g) => sS(g, tc));
    let y = /* @__PURE__ */ new Set();
    Object.values(v).forEach((g) => {
      g && (!g.parentId || !v[g.parentId]) && y.add(g.parentId);
    }), y.forEach((g) => s(g || null, Ka(v, n, null, a, i, g)));
  }
  function sS(e6, t) {
    if (t.size >= oS) {
      let r = t.values().next().value;
      t.delete(r);
    }
    t.add(e6);
  }
  function uS(e6, t) {
    let r;
    return (...n) => {
      window.clearTimeout(r), r = window.setTimeout(() => e6(...n), t);
    };
  }
  function Dc() {
    let e6 = K.useContext(Tr);
    return Ct(e6, "You must render this element inside a <DataRouterContext.Provider> element"), e6;
  }
  function Nc() {
    let e6 = K.useContext(Xr);
    return Ct(e6, "You must render this element inside a <DataRouterStateContext.Provider> element"), e6;
  }
  function Zr() {
    let e6 = K.useContext(xr);
    return Ct(e6, "You must render this element inside a <HydratedRouter> element"), e6;
  }
  function cS(e6, t) {
    let r = K.useContext(xr), [n, a] = K.useState(false), [i, o] = K.useState(false), { onFocus: l, onBlur: s, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t, f = K.useRef(null);
    K.useEffect(() => {
      if (e6 === "render" && o(true), e6 === "viewport") {
        let y = (m) => {
          m.forEach((h) => {
            o(h.isIntersecting);
          });
        }, g = new IntersectionObserver(y, { threshold: 0.5 });
        return f.current && g.observe(f.current), () => {
          g.disconnect();
        };
      }
    }, [e6]), K.useEffect(() => {
      if (n) {
        let y = setTimeout(() => {
          o(true);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [n]);
    let p = () => {
      a(true);
    }, v = () => {
      a(false), o(false);
    };
    return r ? e6 !== "intent" ? [i, f, {}] : [i, f, { onFocus: vl(l, p), onBlur: vl(s, v), onMouseEnter: vl(u, p), onMouseLeave: vl(c, v), onTouchStart: vl(d, p) }] : [false, f, {}];
  }
  function vl(e6, t) {
    return (r) => {
      e6 && e6(r), r.defaultPrevented || t(r);
    };
  }
  function Jp(e6, t, r) {
    if (r && !rc) return [e6[0]];
    if (t) {
      let n = e6.findIndex((a) => t[a.route.id] !== void 0);
      return e6.slice(0, n + 1);
    }
    return e6;
  }
  function Z2({ nonce: e6, crossOrigin: t }) {
    let { isSpaMode: r, manifest: n, routeModules: a, criticalCss: i, nonce: o } = Zr(), { errors: l, matches: s } = Nc(), u = Jp(s, l, r), c = K.useMemo(() => XR(u, a, n), [u, a, n]);
    return e6 == null && o && (e6 = o), K.createElement(K.Fragment, null, typeof i == "string" ? K.createElement("style", { [mw]: "", nonce: e6, dangerouslySetInnerHTML: { __html: i } }) : null, typeof i == "object" ? K.createElement("link", { [mw]: "", rel: "stylesheet", href: i.href, nonce: e6, crossOrigin: t }) : null, c.map(({ key: d, link: f }) => qp(f) ? K.createElement(Lc, { key: d, nonce: e6, ...f, crossOrigin: f.crossOrigin ?? t }) : K.createElement("link", { key: d, nonce: e6, ...f, crossOrigin: f.crossOrigin ?? t })));
  }
  function Lc({ page: e6, ...t }) {
    let r = Mp(), { nonce: n } = Zr(), { router: a } = Dc(), i = K.useMemo(() => eo(a.routes, e6, a.basename), [a.routes, e6, a.basename]);
    return i ? (t.nonce == null && n && (t = { ...t, nonce: n }), r ? K.createElement(fS, { page: e6, matches: i, ...t }) : K.createElement(hS, { page: e6, matches: i, ...t })) : null;
  }
  function dS(e6) {
    let { manifest: t, routeModules: r } = Zr(), [n, a] = K.useState([]);
    return K.useEffect(() => {
      let i = false;
      return JR(e6, t, r).then((o) => {
        i || a(o);
      }), () => {
        i = true;
      };
    }, [e6, t, r]), n;
  }
  function fS({ page: e6, matches: t, ...r }) {
    let n = Ke(), { future: a } = Zr(), { basename: i } = Dc(), o = K.useMemo(() => {
      if (e6 === n.pathname + n.search + n.hash) return [];
      let l = kc(e6, i, a.v8_trailingSlashAwareDataRequests, "rsc"), s = false, u = [];
      for (let c of t) typeof c.route.shouldRevalidate == "function" ? s = true : u.push(c.route.id);
      return s && u.length > 0 && l.searchParams.set("_routes", u.join(",")), [l.pathname + l.search];
    }, [i, a.v8_trailingSlashAwareDataRequests, e6, n, t]);
    return K.createElement(K.Fragment, null, o.map((l) => K.createElement("link", { key: l, rel: "prefetch", as: "fetch", href: l, ...r })));
  }
  function hS({ page: e6, matches: t, ...r }) {
    let n = Ke(), { future: a, manifest: i, routeModules: o } = Zr(), { basename: l } = Dc(), { loaderData: s, matches: u } = Nc(), c = K.useMemo(() => hw(e6, t, u, i, n, "data"), [e6, t, u, i, n]), d = K.useMemo(() => hw(e6, t, u, i, n, "assets"), [e6, t, u, i, n]), f = K.useMemo(() => {
      if (e6 === n.pathname + n.search + n.hash) return [];
      let y = /* @__PURE__ */ new Set(), g = false;
      if (t.forEach((h) => {
        let w = i.routes[h.route.id];
        !w || !w.hasLoader || (!c.some((b) => b.route.id === h.route.id) && h.route.id in s && o[h.route.id]?.shouldRevalidate || w.hasClientLoader ? g = true : y.add(h.route.id));
      }), y.size === 0) return [];
      let m = kc(e6, l, a.v8_trailingSlashAwareDataRequests, "data");
      return g && y.size > 0 && m.searchParams.set("_routes", t.filter((h) => y.has(h.route.id)).map((h) => h.route.id).join(",")), [m.pathname + m.search];
    }, [l, a.v8_trailingSlashAwareDataRequests, s, n, i, c, t, e6, o]), p = K.useMemo(() => Gp(d, i), [d, i]), v = dS(d);
    return K.createElement(K.Fragment, null, f.map((y) => K.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...r })), p.map((y) => K.createElement("link", { key: y, rel: "modulepreload", href: y, ...r })), v.map(({ key: y, link: g }) => K.createElement("link", { key: y, nonce: r.nonce, ...g, crossOrigin: g.crossOrigin ?? r.crossOrigin })));
  }
  function J2() {
    let { isSpaMode: e6, routeModules: t } = Zr(), { errors: r, matches: n, loaderData: a } = Nc(), i = Ke(), o = Jp(n, r, e6), l = null;
    r && (l = r[o[o.length - 1].route.id]);
    let s = [], u = null, c = [];
    for (let d = 0; d < o.length; d++) {
      let f = o[d], p = f.route.id, v = a[p], y = f.params, g = t[p], m = [], h = { id: p, data: v, loaderData: v, meta: [], params: f.params, pathname: f.pathname, handle: f.route.handle, error: l };
      if (c[d] = h, g?.meta ? m = typeof g.meta == "function" ? g.meta({ data: v, loaderData: v, params: y, location: i, matches: c, error: l }) : Array.isArray(g.meta) ? [...g.meta] : g.meta : u && (m = [...u]), m = m || [], !Array.isArray(m)) throw new Error("The route at " + f.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://reactrouter.com/start/framework/route-module#meta`);
      h.meta = m, c[d] = h, s = [...m], u = s;
    }
    return K.createElement(K.Fragment, null, s.flat().map((d) => {
      if (!d) return null;
      if ("tagName" in d) {
        let { tagName: f, ...p } = d;
        return pS(f) ? K.createElement(f, { key: JSON.stringify(p), ...p }) : (console.warn(`A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`), null);
      }
      if ("title" in d) return K.createElement("title", { key: "title" }, String(d.title));
      if ("charset" in d && (d.charSet ?? (d.charSet = d.charset), delete d.charset), "charSet" in d && d.charSet != null) return typeof d.charSet == "string" ? K.createElement("meta", { key: "charSet", charSet: d.charSet }) : null;
      if ("script:ld+json" in d) try {
        let f = JSON.stringify(d["script:ld+json"]);
        return K.createElement("script", { key: `script:ld+json:${f}`, type: "application/ld+json", dangerouslySetInnerHTML: { __html: kn(f) } });
      } catch {
        return null;
      }
      return K.createElement("meta", { key: JSON.stringify(d), ...d });
    }));
  }
  function pS(e6) {
    return typeof e6 == "string" && /^(meta|link)$/.test(e6);
  }
  function e4() {
    rc = true;
  }
  function e0(e6) {
    let { manifest: t, serverHandoffString: r, isSpaMode: n, renderMeta: a, routeDiscovery: i, ssr: o, nonce: l } = Zr(), { router: s, static: u, staticContext: c } = Dc(), { matches: d } = Nc(), f = Mp(), p = Qp(i, o);
    e6.nonce == null && l && (e6 = { ...e6, nonce: l }), a && (a.didRenderScripts = true);
    let v = Jp(d, null, n);
    K.useEffect(() => {
      e4();
    }, []);
    let y = K.useMemo(() => {
      if (f) return null;
      let w = c ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ", b = u ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${p ? "" : `import ${JSON.stringify(t.url)}`};
${v.map((k, L) => {
        let D = `route${L}`, x = t.routes[k.route.id];
        Ct(x, `Route ${k.route.id} not found in manifest`);
        let { clientActionModule: S, clientLoaderModule: N, clientMiddlewareModule: A, hydrateFallbackModule: P, module: _ } = x, I = [...S ? [{ module: S, varName: `${D}_clientAction` }] : [], ...N ? [{ module: N, varName: `${D}_clientLoader` }] : [], ...A ? [{ module: A, varName: `${D}_clientMiddleware` }] : [], ...P ? [{ module: P, varName: `${D}_HydrateFallback` }] : [], { module: _, varName: `${D}_main` }];
        if (I.length === 1) return `import * as ${D} from ${JSON.stringify(_)};`;
        let re = I.map((oe) => `import * as ${oe.varName} from "${oe.module}";`).join(`
`), Q = `const ${D} = {${I.map((oe) => `...${oe.varName}`).join(",")}};`;
        return [re, Q].join(`
`);
      }).join(`
`)}
  ${p ? `window.__reactRouterManifest = ${JSON.stringify(lS(t, s), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${v.map((k, L) => `${JSON.stringify(k.route.id)}:route${L}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
      return K.createElement(K.Fragment, null, K.createElement("script", { ...e6, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: w }, type: void 0 }), K.createElement("script", { ...e6, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: b }, type: "module", async: true }));
    }, []), g = rc || f ? [] : [...new Set(t.entry.imports.concat(Gp(v, t, { includeHydrateFallback: true })))], m = typeof t.sri == "object" ? t.sri : {};
    return Qi(!f, "The <Scripts /> element is a no-op when using RSC and can be safely removed."), rc || f ? null : K.createElement(K.Fragment, null, typeof t.sri == "object" ? K.createElement("script", { ...e6, "rr-importmap": "", type: "importmap", suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: m }) } }) : null, p ? null : K.createElement("link", { rel: "modulepreload", href: t.url, crossOrigin: e6.crossOrigin, integrity: m[t.url], nonce: e6.nonce, suppressHydrationWarning: true }), K.createElement("link", { rel: "modulepreload", href: t.entry.module, crossOrigin: e6.crossOrigin, integrity: m[t.entry.module], nonce: e6.nonce, suppressHydrationWarning: true }), g.map((h) => K.createElement("link", { key: h, rel: "modulepreload", href: h, crossOrigin: e6.crossOrigin, integrity: m[h], nonce: e6.nonce, suppressHydrationWarning: true })), y);
  }
  function mS(...e6) {
    return (t) => {
      e6.forEach((r) => {
        typeof r == "function" ? r(t) : r != null && (r.current = t);
      });
    };
  }
  function t4({ error: e6, isOutsideRemixApp: t }) {
    let { nonce: r } = Zr();
    console.error(e6);
    let n = it.createElement("script", { nonce: r, dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Be(e6)) return it.createElement(mp, { title: "Unhandled Thrown Response!" }, it.createElement("h1", { style: { fontSize: "24px" } }, e6.status, " ", e6.statusText), Kr ? n : null);
    let a;
    if (e6 instanceof Error) a = e6;
    else {
      let i = e6 == null ? "Unknown Error" : typeof e6 == "object" && "toString" in e6 ? e6.toString() : JSON.stringify(e6);
      a = new Error(i);
    }
    return it.createElement(mp, { title: "Application Error!", isOutsideRemixApp: t }, it.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), it.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, a.stack), n);
  }
  function mp({ title: e6, renderScripts: t, isOutsideRemixApp: r, children: n }) {
    let { routeModules: a } = Zr();
    return a.root?.Layout && !r ? n : it.createElement("html", { lang: "en" }, it.createElement("head", null, it.createElement("meta", { charSet: "utf-8" }), it.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), it.createElement("title", null, e6)), it.createElement("body", null, it.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, n, t ? it.createElement(e0, null) : null)));
  }
  function r4(e6, t) {
    return Va({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Ji({ window: t?.window }), hydrationData: t?.hydrationData || a4(), routes: e6, mapRouteProperties: Sn, hydrationRouteProperties: qa, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function n4(e6, t) {
    return Va({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: ac({ window: t?.window }), hydrationData: t?.hydrationData || a4(), routes: e6, mapRouteProperties: Sn, hydrationRouteProperties: qa, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function a4() {
    let e6 = window?.__staticRouterHydrationData;
    return e6 && e6.errors && (e6 = { ...e6, errors: vS(e6.errors) }), e6;
  }
  function vS(e6) {
    if (!e6) return null;
    let t = Object.entries(e6), r = {};
    for (let [n, a] of t) if (a && a.__type === "RouteErrorResponse") r[n] = new lt(a.status, a.statusText, a.data, a.internal === true);
    else if (a && a.__type === "Error") {
      if (typeof a.__subType == "string" && Ep.includes(a.__subType)) {
        let i = window[a.__subType];
        if (typeof i == "function") try {
          let o = new i(a.message);
          o.stack = "", r[n] = o;
        } catch {
        }
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        i.stack = "", r[n] = i;
      }
    } else r[n] = a;
    return r;
  }
  function i4({ basename: e6, children: t, useTransitions: r, window: n }) {
    let a = H.useRef();
    a.current == null && (a.current = Ji({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = H.useState({ action: i.action, location: i.location }), s = H.useCallback((u) => {
      r === false ? l(u) : H.startTransition(() => l(u));
    }, [r]);
    return H.useLayoutEffect(() => i.listen(s), [i, s]), H.createElement(Cn, { basename: e6, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function o4({ basename: e6, children: t, useTransitions: r, window: n }) {
    let a = H.useRef();
    a.current == null && (a.current = ac({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = H.useState({ action: i.action, location: i.location }), s = H.useCallback((u) => {
      r === false ? l(u) : H.startTransition(() => l(u));
    }, [r]);
    return H.useLayoutEffect(() => i.listen(s), [i, s]), H.createElement(Cn, { basename: e6, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function t0({ basename: e6, children: t, history: r, useTransitions: n }) {
    let [a, i] = H.useState({ action: r.action, location: r.location }), o = H.useCallback((l) => {
      n === false ? i(l) : H.startTransition(() => i(l));
    }, [n]);
    return H.useLayoutEffect(() => r.listen(o), [r, o]), H.createElement(Cn, { basename: e6, children: t, location: a.location, navigationType: a.action, navigator: r, useTransitions: n });
  }
  function r0({ getKey: e6, storageKey: t, ...r }) {
    let n = H.useContext(xr), { basename: a } = H.useContext(mt), i = Ke(), o = _l();
    o0({ getKey: e6, storageKey: t });
    let l = H.useMemo(() => {
      if (!n || !e6) return null;
      let u = vp(i, o, a, e6);
      return u !== i.key ? u : null;
    }, []);
    if (!n || n.isSpaMode) return null;
    let s = ((u, c) => {
      if (!window.history.state || !window.history.state.key) {
        let d = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: d }, "");
      }
      try {
        let f = JSON.parse(sessionStorage.getItem(u) || "{}")[c || window.history.state.key];
        typeof f == "number" && window.scrollTo(0, f);
      } catch (d) {
        console.error(d), sessionStorage.removeItem(u);
      }
    }).toString();
    return r.nonce == null && n?.nonce && (r.nonce = n.nonce), H.createElement("script", { ...r, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `(${s})(${kn(JSON.stringify(t || gp))}, ${kn(JSON.stringify(l))})` } });
  }
  function l4(e6) {
    return `${e6} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Pc(e6) {
    let t = H.useContext(Tr);
    return G(t, l4(e6)), t;
  }
  function n0(e6) {
    let t = H.useContext(Xr);
    return G(t, l4(e6)), t;
  }
  function a0(e6, { target: t, replace: r, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s, useTransitions: u } = {}) {
    let c = Rn(), d = Ke(), f = Wa(e6, { relative: o });
    return H.useCallback((p) => {
      if (NR(p, t)) {
        p.preventDefault();
        let v = r !== void 0 ? r : Ue(d) === Ue(f), y = () => c(e6, { replace: v, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s });
        u ? H.startTransition(() => y()) : y();
      }
    }, [d, c, f, r, n, a, t, e6, i, o, l, s, u]);
  }
  function s4(e6) {
    Re(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = H.useRef(El(e6)), r = H.useRef(false), n = Ke(), a = H.useMemo(() => LR(n.search, r.current ? null : t.current), [n.search]), i = Rn(), o = H.useCallback((l, s) => {
      let u = El(typeof l == "function" ? l(new URLSearchParams(a)) : l);
      r.current = true, i("?" + u, s);
    }, [i, a]);
    return [a, o];
  }
  function _c() {
    let { router: e6 } = Pc("useSubmit"), { basename: t } = H.useContext(mt), r = pR(), n = e6.fetch, a = e6.navigate;
    return H.useCallback(async (i, o = {}) => {
      let { action: l, method: s, encType: u, formData: c, body: d } = _R(i, t);
      if (o.navigate === false) {
        let f = o.fetcherKey || wS();
        await n(f, r, o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, flushSync: o.flushSync });
      } else await a(o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, replace: o.replace, state: o.state, fromRouteId: r, flushSync: o.flushSync, viewTransition: o.viewTransition });
    }, [n, a, t, r]);
  }
  function i0(e6, { relative: t } = {}) {
    let { basename: r } = H.useContext(mt), n = H.useContext(It);
    G(n, "useFormAction must be used inside a RouteContext");
    let [a] = n.matches.slice(-1), i = { ...Wa(e6 || ".", { relative: t }) }, o = Ke();
    if (e6 == null) {
      i.search = o.search;
      let l = new URLSearchParams(i.search), s = l.getAll("index");
      if (s.some((c) => c === "")) {
        l.delete("index"), s.filter((d) => d).forEach((d) => l.append("index", d));
        let c = l.toString();
        i.search = c ? `?${c}` : "";
      }
    }
    return (!e6 || e6 === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : nr([r, i.pathname])), Ue(i);
  }
  function u4({ key: e6 } = {}) {
    let { router: t } = Pc("useFetcher"), r = n0("useFetcher"), n = H.useContext(ro), a = H.useContext(It), i = a.matches[a.matches.length - 1]?.route.id;
    G(n, "useFetcher must be used inside a FetchersContext"), G(a, "useFetcher must be used inside a RouteContext"), G(i != null, 'useFetcher can only be used on routes that contain a unique "id"');
    let o = H.useId(), [l, s] = H.useState(e6 || o);
    e6 && e6 !== l && s(e6);
    let { deleteFetcher: u, getFetcher: c, resetFetcher: d, fetch: f } = t;
    H.useEffect(() => (c(l), () => u(l)), [u, c, l]);
    let p = H.useCallback(async (k, L) => {
      G(i, "No routeId available for fetcher.load()"), await f(l, i, k, L);
    }, [l, i, f]), v = _c(), y = H.useCallback(async (k, L) => {
      await v(k, { ...L, navigate: false, fetcherKey: l });
    }, [l, v]), g = H.useCallback((k) => d(l, k), [d, l]), m = H.useMemo(() => {
      let k = H.forwardRef((L, D) => H.createElement(Mc, { ...L, navigate: false, fetcherKey: l, ref: D }));
      return k.displayName = "fetcher.Form", k;
    }, [l]), h = r.fetchers.get(l) || Nl, w = n.get(l);
    return H.useMemo(() => ({ Form: m, submit: y, load: p, reset: g, ...h, data: w }), [m, y, p, g, h, w]);
  }
  function c4() {
    let e6 = n0("useFetchers");
    return H.useMemo(() => Array.from(e6.fetchers.entries()).map(([t, r]) => ({ ...r, key: t })), [e6.fetchers]);
  }
  function vp(e6, t, r, n) {
    let a = null;
    return n && (r !== "/" ? a = n({ ...e6, pathname: Ze(e6.pathname, r) || e6.pathname }, t) : a = n(e6, t)), a == null && (a = e6.key), a;
  }
  function o0({ getKey: e6, storageKey: t } = {}) {
    let { router: r } = Pc("useScrollRestoration"), { restoreScrollPosition: n, preventScrollReset: a } = n0("useScrollRestoration"), { basename: i } = H.useContext(mt), o = Ke(), l = _l(), s = zp();
    H.useEffect(() => (window.history.scrollRestoration = "manual", () => {
      window.history.scrollRestoration = "auto";
    }), []), xS(H.useCallback(() => {
      if (s.state === "idle") {
        let u = vp(o, l, i, e6);
        qu[u] = window.scrollY;
      }
      try {
        sessionStorage.setItem(t || gp, JSON.stringify(qu));
      } catch (u) {
        Re(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`);
      }
      window.history.scrollRestoration = "auto";
    }, [s.state, e6, i, o, l, t])), typeof document < "u" && (H.useLayoutEffect(() => {
      try {
        let u = sessionStorage.getItem(t || gp);
        u && (qu = JSON.parse(u));
      } catch {
      }
    }, [t]), H.useLayoutEffect(() => {
      let u = r?.enableScrollRestoration(qu, () => window.scrollY, e6 ? (c, d) => vp(c, d, i, e6) : void 0);
      return () => u && u();
    }, [r, i, e6]), H.useLayoutEffect(() => {
      if (n !== false) {
        if (typeof n == "number") {
          window.scrollTo(0, n);
          return;
        }
        try {
          if (o.hash) {
            let u = document.getElementById(decodeURIComponent(o.hash.slice(1)));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
        } catch {
          Re(false, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
        }
        a !== true && window.scrollTo(0, 0);
      }
    }, [o, n, a]));
  }
  function d4(e6, t) {
    let { capture: r } = t || {};
    H.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("beforeunload", e6, n), () => {
        window.removeEventListener("beforeunload", e6, n);
      };
    }, [e6, r]);
  }
  function xS(e6, t) {
    let { capture: r } = t || {};
    H.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("pagehide", e6, n), () => {
        window.removeEventListener("pagehide", e6, n);
      };
    }, [e6, r]);
  }
  function f4({ when: e6, message: t }) {
    let r = Ip(e6);
    H.useEffect(() => {
      r.state === "blocked" && (window.confirm(t) ? setTimeout(r.proceed, 0) : r.reset());
    }, [r, t]), H.useEffect(() => {
      r.state === "blocked" && !e6 && r.reset();
    }, [r, e6]);
  }
  function l0(e6, { relative: t } = {}) {
    let r = H.useContext(to);
    G(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: n } = Pc("useViewTransitionState"), a = Wa(e6, { relative: t });
    if (!r.isTransitioning) return false;
    let i = Ze(r.currentLocation.pathname, n) || r.currentLocation.pathname, o = Ze(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return Ua(a.pathname, o) != null || Ua(a.pathname, i) != null;
  }
  function h4({ basename: e6, children: t, location: r = "/" }) {
    typeof r == "string" && (r = Dt(r));
    let n = "POP", a = { pathname: r.pathname || "/", search: r.search || "", hash: r.hash || "", state: r.state != null ? r.state : null, key: r.key || "default", mask: void 0 }, i = p4();
    return mr.createElement(Cn, { basename: e6, children: t, location: a, navigationType: n, navigator: i, static: true, useTransitions: false });
  }
  function Ol({ context: e6, router: t, hydrate: r = true, nonce: n }) {
    G(t && e6, "You must provide `router` and `context` to <StaticRouterProvider>");
    let a = { router: t, navigator: p4(), static: true, staticContext: e6, basename: e6.basename || "/" }, i = /* @__PURE__ */ new Map(), o = "";
    if (r !== false) {
      let s = { loaderData: e6.loaderData, actionData: e6.actionData, errors: bS(e6.errors) };
      o = `window.__staticRouterHydrationData = JSON.parse(${kn(JSON.stringify(JSON.stringify(s)))});`;
    }
    let { state: l } = a.router;
    return mr.createElement(mr.Fragment, null, mr.createElement(Tr.Provider, { value: a }, mr.createElement(Xr.Provider, { value: l }, mr.createElement(ro.Provider, { value: i }, mr.createElement(to.Provider, { value: { isTransitioning: false } }, mr.createElement(Cn, { basename: a.basename, location: l.location, navigationType: l.historyAction, navigator: a.navigator, static: a.static, useTransitions: false }, mr.createElement(y2, { manifest: t.manifest, routes: t.routes, future: t.future, state: l, isStatic: true })))))), o ? mr.createElement("script", { suppressHydrationWarning: true, nonce: n, dangerouslySetInnerHTML: { __html: o } }) : null);
  }
  function bS(e6) {
    if (!e6) return null;
    let t = Object.entries(e6), r = {};
    for (let [n, a] of t) Be(a) ? r[n] = { ...a, __type: "RouteErrorResponse" } : a instanceof Error ? r[n] = { message: a.message, __type: "Error", ...a.name !== "Error" ? { __subType: a.name } : {} } : r[n] = a;
    return r;
  }
  function p4() {
    return { createHref: g4, encodeLocation: v4, push(e6) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e6)})\` somewhere in your app.`);
    }, replace(e6) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e6)}, { replace: true })\` somewhere in your app.`);
    }, go(e6) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e6})\` somewhere in your app.`);
    }, back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    }, forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    } };
  }
  function m4(e6, t) {
    return Sp(e6, { ...t, mapRouteProperties: Sn });
  }
  function Il(e6, t, r = {}) {
    let n = {}, a = bn(e6, Sn, void 0, n), i = t.matches.map((l) => {
      let s = n[l.route.id] || l.route;
      return { ...l, route: s };
    }), o = (l) => `You cannot use router.${l}() on the server because it is a stateless environment`;
    return { get basename() {
      return t.basename;
    }, get future() {
      return { v8_middleware: false, v8_passThroughRequests: false, v8_trailingSlashAwareDataRequests: false, ...r?.future };
    }, get state() {
      return { historyAction: "POP", location: t.location, matches: i, loaderData: t.loaderData, actionData: t.actionData, errors: t.errors, initialized: true, renderFallback: false, navigation: Vi, restoreScrollPosition: null, preventScrollReset: false, revalidation: "idle", fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() };
    }, get routes() {
      return a;
    }, get branches() {
      return r.branches;
    }, get manifest() {
      return n;
    }, get window() {
    }, initialize() {
      throw o("initialize");
    }, subscribe() {
      throw o("subscribe");
    }, enableScrollRestoration() {
      throw o("enableScrollRestoration");
    }, navigate() {
      throw o("navigate");
    }, fetch() {
      throw o("fetch");
    }, revalidate() {
      throw o("revalidate");
    }, createHref: g4, encodeLocation: v4, getFetcher() {
      return Nl;
    }, deleteFetcher() {
      throw o("deleteFetcher");
    }, resetFetcher() {
      throw o("resetFetcher");
    }, dispose() {
      throw o("dispose");
    }, getBlocker() {
      return vn;
    }, deleteBlocker() {
      throw o("deleteBlocker");
    }, patchRoutes() {
      throw o("patchRoutes");
    }, _internalFetchControllers: /* @__PURE__ */ new Map(), _internalSetRoutes() {
      throw o("_internalSetRoutes");
    }, _internalSetStateDoNotUseOrYouWillBreakYourApp() {
      throw o("_internalSetStateDoNotUseOrYouWillBreakYourApp");
    } };
  }
  function g4(e6) {
    return typeof e6 == "string" ? e6 : Ue(e6);
  }
  function v4(e6) {
    let t = typeof e6 == "string" ? e6 : Ue(e6);
    t = t.replace(/ $/, "%20");
    let r = Sl.test(t) ? new URL(t) : new URL(t, "http://localhost");
    return { pathname: r.pathname, search: r.search, hash: r.hash };
  }
  function $4({ context: e6, url: t, nonce: r }) {
    typeof t == "string" && (t = new URL(t));
    let { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o } = e6, l = Xp(n.routes, a, e6.future, e6.isSpaMode);
    e6.staticHandlerContext.loaderData = { ...e6.staticHandlerContext.loaderData };
    for (let u of e6.staticHandlerContext.matches) {
      let c = u.route.id, d = a[c], f = e6.manifest.routes[c];
      d && f && sa(c, d.clientLoader, f.hasLoader, e6.isSpaMode) && (d.HydrateFallback || !f.hasLoader) && delete e6.staticHandlerContext.loaderData[c];
    }
    let s = Il(l, e6.staticHandlerContext, { branches: e6.branches });
    return Fr.createElement(Fr.Fragment, null, Fr.createElement(xr.Provider, { value: { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o, future: e6.future, ssr: e6.ssr, isSpaMode: e6.isSpaMode, routeDiscovery: e6.routeDiscovery, nonce: r, serializeError: e6.serializeError, renderMeta: e6.renderMeta } }, Fr.createElement(ao, { location: s.state.location }, Fr.createElement(Ol, { router: s, context: e6.staticHandlerContext, hydrate: false }))), e6.serverHandoffStream ? Fr.createElement(Fr.Suspense, null, Fr.createElement(Yp, { context: e6, identifier: 0, reader: e6.serverHandoffStream.getReader(), textDecoder: new TextDecoder(), nonce: r })) : null);
  }
  function z4(e6, t) {
    return function({ initialEntries: n, initialIndex: a, hydrationData: i, future: o }) {
      let l = lo.useRef(), s = lo.useRef();
      if (l.current == null) {
        s.current = { future: { v8_passThroughRequests: o?.v8_passThroughRequests === true, v8_middleware: o?.v8_middleware === true, v8_trailingSlashAwareDataRequests: o?.v8_trailingSlashAwareDataRequests === true }, manifest: { routes: {}, entry: { imports: [], module: "" }, url: "", version: "" }, routeModules: {}, ssr: false, isSpaMode: false, routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" } };
        let u = O4(bn(e6, (c) => c), t !== void 0 ? t : o?.v8_middleware ? new yr() : {}, s.current.manifest, s.current.routeModules);
        l.current = fc(u, { initialEntries: n, initialIndex: a, hydrationData: i });
      }
      return lo.createElement(xr.Provider, { value: s.current }, lo.createElement(Fl, { router: l.current }));
    };
  }
  function O4(e6, t, r, n, a) {
    return e6.map((i) => {
      if (!i.id) throw new Error("Expected a route.id in react-router processRoutes() function");
      let o = { id: i.id, path: i.path, index: i.index, Component: i.Component ? gc(i.Component) : void 0, HydrateFallback: i.HydrateFallback ? vc(i.HydrateFallback) : void 0, ErrorBoundary: i.ErrorBoundary ? yc(i.ErrorBoundary) : void 0, action: i.action ? (s) => i.action({ ...s, context: t }) : void 0, loader: i.loader ? (s) => i.loader({ ...s, context: t }) : void 0, middleware: i.middleware ? i.middleware.map((s) => (...u) => s({ ...u[0], context: t }, u[1])) : void 0, handle: i.handle, shouldRevalidate: i.shouldRevalidate }, l = { id: i.id, path: i.path, index: i.index, parentId: a, hasAction: i.action != null, hasLoader: i.loader != null, hasClientAction: false, hasClientLoader: false, hasClientMiddleware: false, hasErrorBoundary: i.ErrorBoundary != null, module: "build/stub-path-to-module.js", clientActionModule: void 0, clientLoaderModule: void 0, clientMiddlewareModule: void 0, hydrateFallbackModule: void 0 };
      return r.routes[o.id] = l, n[i.id] = { default: o.Component || pc, ErrorBoundary: o.ErrorBoundary || void 0, handle: i.handle, links: i.links, meta: i.meta, shouldRevalidate: i.shouldRevalidate }, i.children && (o.children = O4(i.children, t, r, n, o.id)), o;
    });
  }
  function TS(e6) {
    let t = new Uint8Array(e6.length);
    for (let r = 0; r < e6.length; r++) t[r] = e6.charCodeAt(r);
    return t;
  }
  async function FS(e6, t) {
    let r = zS(e6);
    return t.length > 0 && (r = await _S(r, t[0])), r;
  }
  async function $S(e6, t) {
    if (t.length > 0) {
      for (let r of t) {
        let n = await AS(e6, r);
        if (n !== false) return S4(n);
      }
      return null;
    }
    return S4(e6);
  }
  function zS(e6) {
    return btoa(IS(encodeURIComponent(JSON.stringify(e6))));
  }
  function S4(e6) {
    try {
      return JSON.parse(decodeURIComponent(OS(atob(e6))));
    } catch {
      return {};
    }
  }
  function OS(e6) {
    let t = e6.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) a = t.charAt(n++), /[\w*+\-./@]/.exec(a) ? r += a : (i = a.charCodeAt(0), i < 256 ? r += "%" + C4(i, 2) : r += "%u" + C4(i, 4).toUpperCase());
    return r;
  }
  function C4(e6, t) {
    let r = e6.toString(16);
    for (; r.length < t; ) r = "0" + r;
    return r;
  }
  function IS(e6) {
    let t = e6.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) {
      if (a = t.charAt(n++), a === "%") {
        if (t.charAt(n) === "u") {
          if (i = t.slice(n + 1, n + 5), /^[\da-f]{4}$/i.exec(i)) {
            r += String.fromCharCode(parseInt(i, 16)), n += 5;
            continue;
          }
        } else if (i = t.slice(n, n + 2), /^[\da-f]{2}$/i.exec(i)) {
          r += String.fromCharCode(parseInt(i, 16)), n += 2;
          continue;
        }
      }
      r += a;
    }
    return r;
  }
  function jS(e6, t) {
    Qi(!t, `The "${e6}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
  }
  function HS(e6) {
    return Object.keys(e6).reduce((t, r) => {
      let n = e6[r];
      return n && (t[r] = n.module), t;
    }, {});
  }
  function US(e6) {
    return e6 === "development" || e6 === "production" || e6 === "test";
  }
  function b0(e6, t) {
    if (e6 instanceof Error && t !== "development") {
      let r = new Error("Unexpected Server Error");
      return r.stack = void 0, r;
    }
    return e6;
  }
  function Fc(e6, t) {
    return Object.entries(e6).reduce((r, [n, a]) => Object.assign(r, { [n]: b0(a, t) }), {});
  }
  function j4(e6, t) {
    let r = b0(e6, t);
    return { message: r.message, stack: r.stack };
  }
  function Hl(e6, t) {
    if (e6 === false || e6 === null || typeof e6 > "u") throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"), new Error(t);
  }
  function H4(e6, t, r, n, a) {
    let i = St(t, n, a ?? "/", false, r);
    return i ? i.map((o) => {
      let l = e6[o.route.id];
      return Hl(l, `Route with id "${o.route.id}" not found in manifest.`), { params: o.params, pathname: o.pathname, route: l };
    }) : null;
  }
  async function D4(e6, t, r) {
    let n = await e6({ request: r.v8_passThroughRequests ? t.request : VS(BS(t.request)), url: t.url, params: t.params, context: t.context, pattern: t.pattern });
    if (wn(n) && n.init && n.init.status && Ll(n.init.status)) throw new Response(null, n.init);
    return n;
  }
  function BS(e6) {
    let t = new URL(e6.url), r = t.searchParams.getAll("index");
    t.searchParams.delete("index");
    let n = [];
    for (let i of r) i && n.push(i);
    for (let i of n) t.searchParams.append("index", i);
    let a = { method: e6.method, body: e6.body, headers: e6.headers, signal: e6.signal };
    return a.body && (a.duplex = "half"), new Request(t.href, a);
  }
  function VS(e6) {
    let t = new URL(e6.url);
    t.searchParams.delete("_routes");
    let r = { method: e6.method, body: e6.body, headers: e6.headers, signal: e6.signal };
    return r.body && (r.duplex = "half"), new Request(t.href, r);
  }
  function B4(e6) {
    globalThis[U4] = e6;
  }
  function p0() {
    return globalThis[U4];
  }
  function V4(e6, t) {
    if (typeof process < "u") try {
      if (process.env.hasOwnProperty("IS_RR_BUILD_REQUEST") && process.env.IS_RR_BUILD_REQUEST === "yes") return e6.headers.get(t);
    } catch {
    }
    return null;
  }
  function WS(e6) {
    let t = {};
    return Object.values(e6).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function W4(e6, t, r = "", n = WS(e6)) {
    return (n[r] || []).map((a) => {
      let i = { hasErrorBoundary: a.id === "root" || a.module.ErrorBoundary != null, id: a.id, path: a.path, middleware: a.module.middleware, loader: a.module.loader ? async (o) => {
        let l = V4(o.request, "X-React-Router-Prerender-Data");
        if (l != null) {
          let u = l && decodeURI(l);
          Hl(u, "Missing prerendered data for route");
          let c = new TextEncoder().encode(u), d = new ReadableStream({ start(v) {
            v.enqueue(c), v.close();
          } }), p = (await Ga(d, global)).value;
          if (p && Ar in p) {
            let v = p[Ar], y = { status: v.status };
            throw v.reload ? sc(v.redirect, y) : v.replace ? uc(v.redirect, y) : Ba(v.redirect, y);
          } else {
            Hl(p && a.id in p, "Unable to decode prerendered data");
            let v = p[a.id];
            return Hl("data" in v, "Unable to process prerendered data"), v.data;
          }
        }
        return await D4(a.module.loader, o, t);
      } : void 0, action: a.module.action ? (o) => D4(a.module.action, o, t) : void 0, handle: a.module.handle };
      return a.index ? { index: true, ...i } : { caseSensitive: a.caseSensitive, children: W4(e6, t, a.id, n), ...i };
    });
  }
  function N4(e6) {
    return kn(JSON.stringify(e6));
  }
  function k0(e6, t) {
    return YS(e6, (r) => {
      let n = t.routes[r.route.id];
      return Hl(n, `Route with id "${r.route.id}" not found in build`), n.module.headers;
    });
  }
  function YS(e6, t, r) {
    let n = e6.errors ? e6.matches.findIndex((l) => e6.errors[l.route.id]) : -1, a = n >= 0 ? e6.matches.slice(0, n + 1) : e6.matches, i;
    if (n >= 0) {
      let { actionHeaders: l, actionData: s, loaderHeaders: u, loaderData: c } = e6;
      e6.matches.slice(n).some((d) => {
        let f = d.route.id;
        return l[f] && (!s || !s.hasOwnProperty(f)) ? i = l[f] : u[f] && !c.hasOwnProperty(f) && (i = u[f]), i != null;
      });
    }
    let o = new Headers(r);
    return a.reduce((l, s, u) => {
      let { id: c } = s.route, d = e6.loaderHeaders[c] || new Headers(), f = e6.actionHeaders[c] || new Headers(), p = i != null && u === a.length - 1, v = p && i !== d && i !== f, y = t(s);
      if (y == null) {
        let m = new Headers(l);
        return v && Xa(i, m), Xa(f, m), Xa(d, m), m;
      }
      let g = new Headers(typeof y == "function" ? y({ loaderHeaders: d, parentHeaders: l, actionHeaders: f, errorHeaders: p ? i : void 0 }) : y);
      return v && Xa(i, g), Xa(f, g), Xa(d, g), Xa(l, g), g;
    }, new Headers(o));
  }
  function Xa(e6, t) {
    let r = e6.get("Set-Cookie");
    if (r) {
      let n = (0, Y4.splitCookiesString)(r), a = new Set(t.getSetCookie());
      n.forEach((i) => {
        a.has(i) || t.append("Set-Cookie", i);
      });
    }
  }
  function q4(e6, t) {
    let r = e6.headers.get("origin"), n = null, a = null;
    try {
      typeof r == "string" && r !== "null" ? (a = new URL(r), n = a.host) : n = r;
    } catch {
      throw new Error("`origin` header is not a valid URL. Aborting the action.");
    }
    let i = new URL(e6.url), o = a ? a.origin === i.origin : n === i.host;
    if (n && !o && !GS(n, t)) throw new Error("The `request.url` origin does not match `origin` header from a forwarded action request. Aborting the action.");
  }
  function qS(e6, t) {
    let r = e6.split("."), n = t.split(".");
    if (n.length < 1 || r.length < n.length) return false;
    for (; n.length; ) {
      let a = n.pop(), i = r.pop();
      switch (a) {
        case "":
          return false;
        case "*": {
          if (i) continue;
          return false;
        }
        case "**":
          return n.length > 0 ? false : i !== void 0;
        case void 0:
        default:
          if (i !== a) return false;
      }
    }
    return r.length === 0;
  }
  function GS(e6, t = []) {
    return t.some((r) => r && (r === e6 || qS(e6, r)));
  }
  function Bl(e6, t, r) {
    t = t || "/";
    let n = new URL(e6.url), a = n.pathname;
    r?.v8_trailingSlashAwareDataRequests ? a.endsWith("/_.data") ? a = a.replace(/_\.data$/, "") : a = a.replace(/\.data$/, "") : (Ze(a, t) === "/_root.data" ? a = t : a.endsWith(".data") && (a = a.replace(/\.data$/, "")), Ze(a, t) !== "/" && a.endsWith("/") && (a = a.slice(0, -1)));
    let i = new URLSearchParams(n.search);
    i.delete("_routes");
    let o = i.toString();
    return o && (o = `?${o}`), { pathname: a, search: o, hash: "" };
  }
  async function KS(e6, t, r, n, a, i, o) {
    try {
      try {
        q4(n, Array.isArray(e6.allowedActionOrigins) ? e6.allowedActionOrigins : []);
      } catch {
        return s(new Error("Bad Request"), 400);
      }
      let c = e6.future.v8_passThroughRequests ? n : new Request(a, { method: n.method, body: n.body, headers: n.headers, signal: n.signal, ...n.body ? { duplex: "half" } : void 0 }), d = await r.query(c, { requestContext: i, skipLoaderErrorBubbling: true, skipRevalidation: true, generateMiddlewareResponse: e6.future.v8_middleware ? async (f) => {
        try {
          let p = await f(c);
          return l(p);
        } catch (p) {
          return s(p);
        }
      } : void 0, normalizePath: (f) => Bl(f, e6.basename, e6.future) });
      return l(d);
    } catch (c) {
      return s(c);
    }
    function l(c) {
      return $e(c) ? c : u(c);
    }
    function s(c, d = 500) {
      return o(c), Ul(n, e6, t, { result: { error: c }, headers: new Headers(), status: d });
    }
    function u(c) {
      let d = k0(c, e6);
      if (Ll(c.statusCode) && d.has("Location")) return new Response(null, { status: c.statusCode, headers: d });
      c.errors && (Object.values(c.errors).forEach((p) => {
        (!Be(p) || p.error) && o(p);
      }), c.errors = Fc(c.errors, t));
      let f;
      return c.errors ? f = { error: Object.values(c.errors)[0] } : f = { data: Object.values(c.actionData || {})[0] }, Ul(n, e6, t, { result: f, headers: d, status: c.statusCode });
    }
  }
  async function XS(e6, t, r, n, a, i, o) {
    let l = new URL(n.url).searchParams.get("_routes"), s = l ? new Set(l.split(",")) : null;
    try {
      let f = e6.future.v8_passThroughRequests ? n : new Request(a, { headers: n.headers, signal: n.signal }), p = await r.query(f, { requestContext: i, filterMatchesToLoad: (v) => !s || s.has(v.route.id), skipLoaderErrorBubbling: true, generateMiddlewareResponse: e6.future.v8_middleware ? async (v) => {
        try {
          let y = await v(f);
          return u(y);
        } catch (y) {
          return c(y);
        }
      } : void 0, normalizePath: (v) => Bl(v, e6.basename, e6.future) });
      return u(p);
    } catch (f) {
      return c(f);
    }
    function u(f) {
      return $e(f) ? f : d(f);
    }
    function c(f) {
      return o(f), Ul(n, e6, t, { result: { error: f }, headers: new Headers(), status: 500 });
    }
    function d(f) {
      let p = k0(f, e6);
      if (Ll(f.statusCode) && p.has("Location")) return new Response(null, { status: f.statusCode, headers: p });
      f.errors && (Object.values(f.errors).forEach((g) => {
        (!Be(g) || g.error) && o(g);
      }), f.errors = Fc(f.errors, t));
      let v = {}, y = new Set(f.matches.filter((g) => s ? s.has(g.route.id) : g.route.loader != null).map((g) => g.route.id));
      if (f.errors) for (let [g, m] of Object.entries(f.errors)) v[g] = { error: m };
      for (let [g, m] of Object.entries(f.loaderData)) !(g in v) && y.has(g) && (v[g] = { data: m });
      return Ul(n, e6, t, { result: v, headers: p, status: f.statusCode });
    }
  }
  function Ul(e6, t, r, { result: n, headers: a, status: i }) {
    let o = new Headers(a);
    return o.set("X-Remix-Response", "yes"), G4.has(i) ? new Response(null, { status: i, headers: o }) : (o.set("Content-Type", "text/x-script"), o.delete("Content-Length"), new Response(v0(n, e6.signal, t.entry.module.streamTimeout, r), { status: i || 200, headers: o }));
  }
  function L4(e6, t, r, n) {
    let a = QS(e6.status, e6.headers, r.basename), i = new Headers(e6.headers);
    return i.delete("Location"), i.set("Content-Type", "text/x-script"), Ul(t, r, n, { result: t.method === "GET" ? { [Ar]: a } : a, headers: i, status: xc });
  }
  function QS(e6, t, r) {
    let n = t.get("Location");
    return r && (n = Ze(n, r) || n), { redirect: n, status: e6, revalidate: t.has("X-Remix-Revalidate") || t.has("Set-Cookie"), reload: t.has("X-Remix-Reload-Document"), replace: t.has("X-Remix-Replace") };
  }
  function v0(e6, t, r, n) {
    let a = new AbortController(), i = setTimeout(() => {
      a.abort(new Error("Server Timeout")), l();
    }, typeof r == "number" ? r : 4950), o = () => {
      a.abort(t.reason), l();
    };
    t.addEventListener("abort", o);
    let l = () => {
      clearTimeout(i), t.removeEventListener("abort", o);
    };
    return z2(e6, { signal: a.signal, onComplete: l, plugins: [(s) => {
      if (s instanceof Error) {
        let { name: u, message: c, stack: d } = n === "production" ? b0(s, n) : s;
        return ["SanitizedError", u, c, d];
      }
      if (s instanceof lt) {
        let { data: u, status: c, statusText: d } = s;
        return ["ErrorResponse", u, c, d];
      }
      if (s && typeof s == "object" && Ar in s) return ["SingleFetchRedirect", s[Ar]];
    }], postPlugins: [(s) => {
      if (s && typeof s == "object") return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(s))];
    }, () => ["SingleFetchFallback"]] });
  }
  function M4(e6, t) {
    let r = W4(e6.routes, e6.future), n = US(t) ? t : "production", a = Sp(r, { basename: e6.basename, instrumentations: e6.entry.module.instrumentations, future: e6.future }), i = e6.entry.module.handleError || ((l, { request: s }) => {
      n !== "test" && !s.signal.aborted && console.error(Be(l) && l.error ? l.error : l);
    }), o = async (l, s) => {
      let u = {}, c, d = (h) => {
        t === "development" && p0()?.processRequestError?.(h), i(h, { context: c, params: u, request: l });
      };
      if (e6.future.v8_middleware) {
        if (s && !(s instanceof yr)) {
          let h = new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `RouterContextProvider` from your `getLoadContext` function.");
          return d(h), $c(h, n);
        }
        c = s || new yr();
      } else c = s || {};
      let f = new URL(l.url), p = Bl(l, e6.basename, e6.future).pathname, v = V4(l, "X-React-Router-SPA-Mode") === "yes";
      if (!e6.ssr) {
        let h = decodeURI(p);
        if (e6.basename && e6.basename !== "/") {
          let w = Ze(h, e6.basename);
          if (w == null) return i(new lt(404, "Not Found", `Refusing to prerender the \`${h}\` path because it does not start with the basename \`${e6.basename}\``), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          h = w;
        }
        if (e6.prerender.length === 0) v = true;
        else if (!e6.prerender.includes(h.replace(/\/$/, "")) && !e6.prerender.includes(h.replace(/[^/]$/, "/"))) {
          if (f.pathname.endsWith(".data")) return i(new lt(404, "Not Found", `Refusing to SSR the path \`${h}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          v = true;
        }
      }
      let y = Zp(e6.routeDiscovery.manifestPath, e6.basename);
      if (e6.routeDiscovery.mode === "lazy" && f.pathname === y) try {
        return await ZS(e6, a.dataRoutes, a._internalRouteBranches, f);
      } catch (h) {
        return d(h), new Response("Unknown Server Error", { status: 500 });
      }
      let g = H4(e6.routes, a.dataRoutes, a._internalRouteBranches, p, e6.basename);
      g && g.length > 0 && Object.assign(u, g[0].params);
      let m;
      if (f.pathname.endsWith(".data")) m = await JS(n, e6, a, l, p, c, d), Ki(m) && (m = L4(m, l, e6, n)), e6.entry.module.handleDataRequest && (m = await e6.entry.module.handleDataRequest(m, { context: c, params: g ? g[0].params : {}, request: l }), Ki(m) && (m = L4(m, l, e6, n)));
      else if (!v && g && g[g.length - 1].route.module.default == null && g[g.length - 1].route.module.ErrorBoundary == null) m = await t8(n, e6, a, g.slice(-1)[0].route.id, l, c, d);
      else {
        let { pathname: h } = f, w;
        e6.unstable_getCriticalCss ? w = await e6.unstable_getCriticalCss({ pathname: h }) : t === "development" && p0()?.getCriticalCss && (w = await p0()?.getCriticalCss?.(h)), m = await e8(n, e6, a, l, c, d, v, w);
      }
      return l.method === "HEAD" ? new Response(null, { headers: m.headers, status: m.status, statusText: m.statusText }) : m;
    };
    return e6.entry.module.instrumentations && (o = Pw(o, e6.entry.module.instrumentations.map((l) => l.handler).filter(Boolean))), { serverMode: n, staticHandler: a, errorHandler: i, requestHandler: o };
  }
  async function ZS(e6, t, r, n) {
    if (n.toString().length > Rc) return new Response(null, { statusText: "Bad Request", status: 400 });
    if (e6.assets.version !== n.searchParams.get("version")) return new Response(null, { status: 204, headers: { "X-Remix-Reload-Document": "true" } });
    let a = {};
    if (n.searchParams.has("paths")) {
      let i = n.searchParams.get("paths") || "", o = new Set(i.split(",").filter(Boolean));
      for (let l of o) {
        l.startsWith("/") || (l = `/${l}`);
        let s = H4(e6.routes, t, r, l, e6.basename);
        if (s) for (let u of s) {
          let c = u.route.id, d = e6.assets.routes[c];
          d && (a[c] = d);
        }
      }
      return Response.json(a, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } });
    }
    return new Response("Invalid Request", { status: 400 });
  }
  async function JS(e6, t, r, n, a, i, o) {
    let l = new URL(n.url);
    return l.pathname = a, Ge(n.method) ? await KS(t, e6, r, n, l, i, o) : await XS(t, e6, r, n, l, i, o);
  }
  async function e8(e6, t, r, n, a, i, o, l) {
    try {
      if (Ge(n.method)) try {
        q4(n, Array.isArray(t.allowedActionOrigins) ? t.allowedActionOrigins : []);
      } catch (c) {
        return i(c), new Response("Bad Request", { status: 400 });
      }
      let u = await r.query(n, { requestContext: a, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(n);
          return $e(d) || (d = await s(d, o)), d;
        } catch (d) {
          return i(d), new Response(null, { status: 500 });
        }
      } : void 0, normalizePath: (c) => Bl(c, t.basename, t.future) });
      return $e(u) || (u = await s(u, o)), u;
    } catch (u) {
      return i(u), new Response(null, { status: 500 });
    }
    async function s(u, c) {
      let d = k0(u, t);
      if (G4.has(u.statusCode)) return new Response(null, { status: u.statusCode, headers: d });
      u.errors && (Object.values(u.errors).forEach((g) => {
        (!Be(g) || g.error) && i(g);
      }), u.errors = Fc(u.errors, e6));
      let f = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors }, p = { basename: t.basename, future: t.future, routeDiscovery: t.routeDiscovery, ssr: t.ssr, isSpaMode: c }, v = { manifest: t.assets, branches: r._internalRouteBranches, routeModules: HS(t.routes), staticHandlerContext: u, criticalCss: l, serverHandoffString: N4({ ...p, criticalCss: l }), serverHandoffStream: v0(f, n.signal, t.entry.module.streamTimeout, e6), renderMeta: {}, future: t.future, ssr: t.ssr, routeDiscovery: t.routeDiscovery, isSpaMode: c, serializeError: (g) => j4(g, e6) }, y = t.entry.module.default;
      try {
        return await y(n, u.statusCode, d, v, a);
      } catch (g) {
        i(g);
        let m = g;
        if ($e(g)) try {
          let w = await n8(g);
          m = new lt(g.status, g.statusText, w);
        } catch {
        }
        u = Cp(r.dataRoutes, u, m), u.errors && (u.errors = Fc(u.errors, e6));
        let h = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors };
        v = { ...v, staticHandlerContext: u, serverHandoffString: N4(p), serverHandoffStream: v0(h, n.signal, t.entry.module.streamTimeout, e6), renderMeta: {} };
        try {
          return await y(n, u.statusCode, d, v, a);
        } catch (w) {
          return i(w), $c(w, e6);
        }
      }
    }
  }
  async function t8(e6, t, r, n, a, i, o) {
    try {
      let u = await r.queryRoute(a, { routeId: n, requestContext: i, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(a);
          return l(d);
        } catch (d) {
          return s(d);
        }
      } : void 0, normalizePath: (c) => Bl(c, t.basename, t.future) });
      return l(u);
    } catch (u) {
      return s(u);
    }
    function l(u) {
      return $e(u) ? u : typeof u == "string" ? new Response(u) : Response.json(u);
    }
    function s(u) {
      if ($e(u)) return u;
      if (Be(u)) return o(u), r8(u, e6);
      if (u instanceof Error && u.message === "Expected a response from queryRoute") {
        let c = new Error("Expected a Response to be returned from resource route handler");
        return o(c), $c(c, e6);
      }
      return o(u), $c(u, e6);
    }
  }
  function r8(e6, t) {
    return Response.json(j4(e6.error || new Error("Unexpected Server Error"), t), { status: e6.status, statusText: e6.statusText });
  }
  function $c(e6, t) {
    let r = "Unexpected Server Error";
    return t !== "production" && (r += `

${String(e6)}`), new Response(r, { status: 500, headers: { "Content-Type": "text/plain" } });
  }
  function n8(e6) {
    let t = e6.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e6.body == null ? null : e6.json() : e6.text();
  }
  function m0(e6) {
    return `__flash_${e6}__`;
  }
  function E0({ cookie: e6, createData: t, readData: r, updateData: n, deleteData: a }) {
    let i = Ic(e6) ? e6 : Oc(e6?.name || "__session", e6);
    return Q4(i), { async getSession(o, l) {
      let s = o && await i.parse(o, l), u = s && await r(s);
      return jc(u || {}, s || "");
    }, async commitSession(o, l) {
      let { id: s, data: u } = o, c = l?.maxAge != null ? new Date(Date.now() + l.maxAge * 1e3) : l?.expires != null ? l.expires : i.expires;
      return s ? await n(s, u, c) : s = await t(u, c), i.serialize(s, l);
    }, async destroySession(o, l) {
      return await a(o.id), i.serialize("", { ...l, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function Q4(e6) {
    Qi(e6.isSigned, `The "${e6.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`);
  }
  function Z4({ cookie: e6 } = {}) {
    let t = Ic(e6) ? e6 : Oc(e6?.name || "__session", e6);
    return Q4(t), { async getSession(r, n) {
      return jc(r && await t.parse(r, n) || {});
    }, async commitSession(r, n) {
      let a = await t.serialize(r.data, n);
      if (a.length > 4096) throw new Error("Cookie length will exceed browser maximum. Length: " + a.length);
      return a;
    }, async destroySession(r, n) {
      return t.serialize("", { ...n, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function J4({ cookie: e6 } = {}) {
    let t = /* @__PURE__ */ new Map();
    return E0({ cookie: e6, async createData(r, n) {
      let a = Math.random().toString(36).substring(2, 10);
      return t.set(a, { data: r, expires: n }), a;
    }, async readData(r) {
      if (t.has(r)) {
        let { data: n, expires: a } = t.get(r);
        if (!a || a > /* @__PURE__ */ new Date()) return n;
        a && t.delete(r);
      }
      return null;
    }, async updateData(r, n, a) {
      t.set(r, { data: n, expires: a });
    }, async deleteData(r) {
      t.delete(r);
    } });
  }
  function ex(e6, ...t) {
    let r = t[0], n = a8(e6).replace(/\/:([\w-]+)(\?)?/g, (a, i, o) => {
      let l = o === void 0, s = r?.[i];
      if (l && s === void 0) throw new Error(`Path '${e6}' requires param '${i}' but it was not provided`);
      return s === void 0 ? "" : "/" + s;
    });
    if (e6.endsWith("*")) {
      let a = r?.["*"];
      a !== void 0 && (n += "/" + a);
    }
    return n || "/";
  }
  function a8(e6) {
    let t = e6.length - 1, r = e6[t];
    if (r !== "*" && r !== "/") return e6;
    for (t--; t >= 0 && e6[t] === "/"; t--) ;
    return e6.slice(0, t + 1);
  }
  function _4(e6) {
    let t = new TextDecoder(), r, n = new Promise((s) => r = s), a = false, i = [], o = null;
    function l(s) {
      for (let u of i) {
        let c = t.decode(u, { stream: true });
        c.endsWith(P4) && (c = c.slice(0, -P4.length)), s.enqueue(y0.encode(c));
      }
      i.length = 0, o = null;
    }
    return new TransformStream({ transform(s, u) {
      i.push(s), !o && (o = setTimeout(async () => {
        l(u), a || (a = true, i8(e6, u).catch((c) => u.error(c)).then(r));
      }, 0));
    }, async flush(s) {
      await n, o && (clearTimeout(o), l(s)), s.enqueue(y0.encode("</body></html>"));
    } });
  }
  async function i8(e6, t) {
    let r = new TextDecoder("utf-8", { fatal: true }), n = e6.getReader();
    try {
      let i;
      for (; (i = await n.read()) && !i.done; ) {
        let o = i.value;
        try {
          g0(JSON.stringify(r.decode(o, { stream: true })), t);
        } catch {
          let s = JSON.stringify(btoa(String.fromCodePoint(...o)));
          g0(`Uint8Array.from(atob(${s}), m => m.codePointAt(0))`, t);
        }
      }
    } finally {
      n.releaseLock();
    }
    let a = r.decode();
    a.length && g0(JSON.stringify(a), t);
  }
  function g0(e6, t) {
    t.enqueue(y0.encode(`<script>${o8(`(self.__FLIGHT_DATA||=[]).push(${e6})`)}<\/script>`));
  }
  function o8(e6) {
    return e6.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
  }
  function A4({ renderAppShell: e6, title: t, children: r }) {
    return e6 ? gt.default.createElement("html", { lang: "en" }, gt.default.createElement("head", null, gt.default.createElement("meta", { charSet: "utf-8" }), gt.default.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), gt.default.createElement("title", null, t)), gt.default.createElement("body", null, gt.default.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, r))) : r;
  }
  function rx({ error: e6, renderAppShell: t }) {
    console.error(e6);
    let r = gt.default.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Be(e6)) return gt.default.createElement(A4, { renderAppShell: t, title: "Unhandled Thrown Response!" }, gt.default.createElement("h1", { style: { fontSize: "24px" } }, e6.status, " ", e6.statusText), Kr ? r : null);
    let n;
    if (e6 instanceof Error) n = e6;
    else {
      let a = e6 == null ? "Unknown Error" : typeof e6 == "object" && "toString" in e6 ? e6.toString() : JSON.stringify(e6);
      n = new Error(a);
    }
    return gt.default.createElement(A4, { renderAppShell: t, title: "Application Error!" }, gt.default.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), gt.default.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, n.stack), r);
  }
  function nx({ hasRootLayout: e6 }) {
    let t = Ya();
    if (e6 === void 0) throw new Error("Missing 'hasRootLayout' prop");
    return gt.default.createElement(rx, { renderAppShell: !e6, error: t });
  }
  function l8(e6) {
    let t = {};
    for (let r of e6.matches) ax(t, r);
    return t;
  }
  function ax(e6, t) {
    t = Array.isArray(t) ? t : [t];
    for (let r of t) e6[r.id] = { links: r.links, meta: r.meta, default: s8 };
  }
  function c8(e6) {
    if (F4) return F4(e6);
    throw new Error("React Router v7 requires React 19+ for RSC features.");
  }
  async function ix({ request: e6, serverResponse: t, createFromReadableStream: r, renderHTML: n, hydrate: a = true }) {
    let i = new URL(e6.url);
    if (d8(i) || f8(i) || e6.headers.has("rsc-action-id") || t.headers.get("React-Router-Resource") === "true") return t;
    if (!t.body) throw new Error("Missing body in server response");
    let s = t.clone(), u = null;
    a && (u = t.clone());
    let c = t.body, d, f = [], p = () => d ? new ReadableStream({ start(h) {
      d.forEach((w) => h.enqueue(w)), f.push(h);
    } }) : (d = [], c.pipeThrough(new TransformStream({ transform(h, w) {
      d.push(h), w.enqueue(h), f.forEach((b) => b.enqueue(h));
    }, flush() {
      f.forEach((h) => h.close()), f = [];
    } }))), v = null, y = () => {
      let h = Promise.resolve(r(p()));
      return Object.defineProperties(h, { _deepestRenderedBoundaryId: { get() {
        return v;
      }, set(w) {
        v = w;
      } }, formState: { get() {
        return h.then((w) => w.type === "render" ? w.formState : void 0);
      } } });
    }, g, m;
    try {
      if (!s.body) throw new Error("Failed to clone server response");
      let h = await r(s.body);
      if (t.status === xc && h.type === "redirect") {
        if (wr(h.location)) throw new Error("Invalid redirect location");
        let N = new Headers(t.headers);
        return N.delete("Content-Encoding"), N.delete("Content-Length"), N.delete("Content-Type"), N.delete("X-Remix-Response"), N.set("Location", h.location), new Response(u?.body || "", { headers: N, status: h.status, statusText: t.statusText });
      }
      let w = new Headers(), b = t.status, k = t.statusText, L = await n(y, { onError(N) {
        if (typeof N == "object" && N && "digest" in N && typeof N.digest == "string") {
          if (g = cc(N.digest), g) return N.digest;
          let A = dc(N.digest);
          if (A) return m = A, b = A.status, k = A.statusText, N.digest;
        }
      }, onHeaders(N) {
        for (let [A, P] of N) w.append(A, P);
      } }), D = new Headers(w);
      for (let [N, A] of t.headers) D.append(N, A);
      if (D.set("Content-Type", "text/html; charset=utf-8"), g) {
        if (wr(g.location)) throw new Error("Invalid redirect location");
        return D.set("Location", g.location), new Response(L, { status: g.status, headers: D });
      }
      let x = new TransformStream({ flush(N) {
        if (g) {
          if (wr(g.location)) return;
          N.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${kn(g.location)}"/>`));
        }
      } });
      if (!a) return new Response(L.pipeThrough(x), { status: b, statusText: k, headers: D });
      if (!u?.body) throw new Error("Failed to clone server response");
      let S = L.pipeThrough(_4(u.body)).pipeThrough(x);
      return new Response(S, { status: b, statusText: k, headers: D });
    } catch (h) {
      if (h instanceof Response) return h;
      if (g) {
        if (wr(g.location)) throw new Error("Invalid redirect location");
        return new Response(`Redirect: ${g.location}`, { status: g.status, headers: { Location: g.location } });
      }
      try {
        let w = m ?? h, [b, k] = Be(w) ? [w.status, w.statusText] : [500, ""], L, D = new Headers(), x = await n(() => {
          let _ = Promise.resolve(r(p())).then((I) => Object.assign(I, { status: b, errors: v ? { [v]: w } : {} }));
          return Object.defineProperties(_, { _deepestRenderedBoundaryId: { get() {
            return v;
          }, set(I) {
            v = I;
          } }, formState: { get() {
            return _.then((I) => I.type === "render" ? I.formState : void 0);
          } } });
        }, { onError(P) {
          if (typeof P == "object" && P && "digest" in P && typeof P.digest == "string") {
            if (L = cc(P.digest), L) return P.digest;
            let _ = dc(P.digest);
            if (_) return b = _.status, k = _.statusText, P.digest;
          }
        }, onHeaders(P) {
          for (let [_, I] of P) D.append(_, I);
        } }), S = new Headers(D);
        for (let [P, _] of t.headers) S.append(P, _);
        if (S.set("Content-Type", "text/html; charset=utf-8"), L) {
          if (wr(L.location)) throw new Error("Invalid redirect location");
          return S.set("Location", L.location), new Response(x, { status: L.status, headers: S });
        }
        let N = new TransformStream({ flush(P) {
          if (L) {
            if (wr(L.location)) return;
            P.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${kn(L.location)}"/>`));
          }
        } });
        if (!a) return new Response(x.pipeThrough(N), { status: b, statusText: k, headers: S });
        if (!u?.body) throw new Error("Failed to clone server response");
        let A = x.pipeThrough(_4(u.body)).pipeThrough(N);
        return new Response(A, { status: b, statusText: k, headers: S });
      } catch {
      }
      throw h;
    }
  }
  function ox({ getPayload: e6 }) {
    let t = e6(), r = c8(t);
    if (r.type === "redirect") throw wr(r.location) ? new Error("Invalid redirect location") : new Response(null, { status: r.status, headers: { Location: r.location } });
    if (r.type !== "render") return null;
    let n = { ...r.loaderData };
    for (let l of r.matches) sa(l.id, l.clientLoader, l.hasLoader, false) && (l.hydrateFallbackElement || !l.hasLoader) && delete n[l.id];
    let a = { get _deepestRenderedBoundaryId() {
      return t._deepestRenderedBoundaryId ?? null;
    }, set _deepestRenderedBoundaryId(l) {
      t._deepestRenderedBoundaryId = l;
    }, actionData: r.actionData, actionHeaders: {}, basename: r.basename, errors: r.errors, loaderData: n, loaderHeaders: {}, location: r.location, statusCode: 200, matches: r.matches.map((l) => ({ params: l.params, pathname: l.pathname, pathnameBase: l.pathnameBase, route: { id: l.id, action: l.hasAction || !!l.clientAction, handle: l.handle, hasErrorBoundary: l.hasErrorBoundary, loader: l.hasLoader || !!l.clientLoader, index: l.index, path: l.path, shouldRevalidate: l.shouldRevalidate } })) }, i = Il(r.matches.reduceRight((l, s) => {
      let u = { id: s.id, action: s.hasAction || !!s.clientAction, element: s.element, errorElement: s.errorElement, handle: s.handle, hasErrorBoundary: !!s.errorElement, hydrateFallbackElement: s.hydrateFallbackElement, index: s.index, loader: s.hasLoader || !!s.clientLoader, path: s.path, shouldRevalidate: s.shouldRevalidate };
      return l.length > 0 && (u.children = l), [u];
    }, []), a), o = { future: { v8_middleware: false, v8_trailingSlashAwareDataRequests: true, v8_passThroughRequests: true }, isSpaMode: false, ssr: true, criticalCss: "", manifest: { routes: {}, version: "1", url: "", entry: { module: "", imports: [] } }, routeDiscovery: r.routeDiscovery.mode === "initial" ? { mode: "initial", manifestPath: T4 } : { mode: "lazy", manifestPath: r.routeDiscovery.manifestPath || T4 }, routeModules: l8(r) };
    return oo.createElement(Ml.Provider, { value: true }, oo.createElement(tx, { location: r.location }, oo.createElement(xr.Provider, { value: o }, oo.createElement(Ol, { context: a, router: i, hydrate: false, nonce: r.nonce }))));
  }
  function d8(e6) {
    return e6.pathname.endsWith(".rsc");
  }
  function f8(e6) {
    return e6.pathname.endsWith(".manifest");
  }
  function Hc({ state: e6, routes: t, getRouteInfo: r, location: n, basename: a, isSpaMode: i }) {
    let o = { ...e6, loaderData: { ...e6.loaderData } }, l = eo(t, n, a);
    if (l) for (let s of l) {
      let u = s.route.id, c = r(u);
      sa(u, c.clientLoader, c.hasLoader, i) && (c.hasHydrateFallback || !c.hasLoader) ? delete o.loaderData[u] : c.hasLoader || (o.loaderData[u] = null);
    }
    return o;
  }
  function R0(e6) {
    return lx.createElement(Fl, { flushSync: sx.flushSync, ...e6 });
  }
  function h8() {
    if (!X && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
      if (window.__reactRouterManifest.sri === true) {
        let e6 = document.querySelector("script[rr-importmap]");
        if (e6?.textContent) try {
          window.__reactRouterManifest.sri = JSON.parse(e6.textContent).integrity;
        } catch (t) {
          console.error("Failed to parse import map", t);
        }
      }
      X = { context: window.__reactRouterContext, manifest: window.__reactRouterManifest, routeModules: window.__reactRouterRouteModules, stateDecodingPromise: void 0, router: void 0, routerInitialized: false };
    }
  }
  function p8({ getContext: e6, instrumentations: t }) {
    if (h8(), !X) throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
    let r = X;
    if (!X.stateDecodingPromise) {
      let o = X.context.stream;
      G(o, "No stream found for single fetch decoding"), X.context.stream = void 0, X.stateDecodingPromise = Ga(o, window).then((l) => {
        X.context.state = l.value, r.stateDecodingPromise.value = true;
      }).catch((l) => {
        r.stateDecodingPromise.error = l;
      });
    }
    if (X.stateDecodingPromise.error) throw X.stateDecodingPromise.error;
    if (!X.stateDecodingPromise.value) throw X.stateDecodingPromise;
    let n = Ka(X.manifest.routes, X.routeModules, X.context.state, X.context.ssr, X.context.isSpaMode), a;
    if (X.context.isSpaMode) {
      let { loaderData: o } = X.context.state;
      X.manifest.routes.root?.hasLoader && o && "root" in o && (a = { loaderData: { root: o.root } });
    } else a = Hc({ state: X.context.state, routes: n, getRouteInfo: (o) => ({ clientLoader: X.routeModules[o]?.clientLoader, hasLoader: X.manifest.routes[o]?.hasLoader === true, hasHydrateFallback: X.routeModules[o]?.HydrateFallback != null }), location: window.location, basename: window.__reactRouterContext?.basename, isSpaMode: X.context.isSpaMode });
    window.history.state && window.history.state.masked && window.history.replaceState({ ...window.history.state, masked: void 0 }, "");
    let i = Va({ routes: n, history: Ji(), basename: X.context.basename, getContext: e6, hydrationData: a, hydrationRouteProperties: qa, instrumentations: t, mapRouteProperties: Sn, future: { v8_passThroughRequests: X.context.future.v8_passThroughRequests }, dataStrategy: bc(() => i, X.manifest, X.routeModules, X.context.ssr, X.context.basename, X.context.future.v8_trailingSlashAwareDataRequests), patchRoutesOnNavigation: Sc(() => i, X.manifest, X.routeModules, X.context.ssr, X.context.routeDiscovery, X.context.isSpaMode, X.context.basename) });
    return X.router = i, i.state.initialized && (X.routerInitialized = true, i.initialize()), i.createRoutesForHMR = Ec, window.__reactRouterDataRouter = i, i;
  }
  function ux(e6) {
    Vl || (Vl = p8({ getContext: e6.getContext, instrumentations: e6.instrumentations }));
    let [t, r] = st.useState(void 0);
    st.useEffect(() => {
    }, []), st.useEffect(() => {
    }, [t]);
    let [n, a] = st.useState(Vl.state.location);
    return st.useLayoutEffect(() => {
      X && X.router && !X.routerInitialized && (X.routerInitialized = true, X.router.initialize());
    }, []), st.useLayoutEffect(() => {
      if (X && X.router) return X.router.subscribe((i) => {
        i.location !== n && a(i.location);
      });
    }, [n]), G(X, "ssrInfo unavailable for HydratedRouter"), Cc(Vl, X.manifest, X.routeModules, X.context.ssr, X.context.routeDiscovery, X.context.isSpaMode), st.createElement(st.Fragment, null, st.createElement(xr.Provider, { value: { manifest: X.manifest, routeModules: X.routeModules, future: X.context.future, criticalCss: t, ssr: X.context.ssr, isSpaMode: X.context.isSpaMode, routeDiscovery: X.context.routeDiscovery } }, st.createElement(ao, { location: n }, st.createElement(R0, { router: Vl, useTransitions: e6.useTransitions, onError: e6.onError }))), st.createElement(st.Fragment, null));
  }
  function yx(e6) {
    var t, r, n = "";
    if (typeof e6 == "string" || typeof e6 == "number") n += e6;
    else if (typeof e6 == "object") if (Array.isArray(e6)) {
      var a = e6.length;
      for (t = 0; t < a; t++) e6[t] && (r = yx(e6[t])) && (n && (n += " "), n += r);
    } else for (r in e6) e6[r] && (n && (n += " "), n += r);
    return n;
  }
  function wx() {
    for (var e6, t, r = 0, n = "", a = arguments.length; r < a; r++) (e6 = arguments[r]) && (t = yx(e6)) && (n && (n += " "), n += t);
    return n;
  }
  function D8() {
    let e6 = 0, t, r, n = "";
    for (; e6 < arguments.length; ) (t = arguments[e6++]) && (r = bx(t)) && (n && (n += " "), n += r);
    return n;
  }
  function hx(e6, ...t) {
    let r, n, a, i = o;
    function o(s) {
      let u = t.reduce((c, d) => d(c), e6());
      return r = R8(u), n = r.cache.get, a = r.cache.set, i = l, l(s);
    }
    function l(s) {
      let u = n(s);
      if (u) return u;
      let c = C8(s, r);
      return a(s, c), c;
    }
    return function() {
      return i(D8.apply(null, arguments));
    };
  }
  function N0(...e6) {
    return Q8(wx(e6));
  }
  function mx(e6, t) {
    if (typeof e6 == "function") return e6(t);
    e6 != null && (e6.current = t);
  }
  function Z8(...e6) {
    return (t) => {
      let r = false, n = e6.map((a) => {
        let i = mx(a, t);
        return !r && typeof i == "function" && (r = true), i;
      });
      if (r) return () => {
        for (let a = 0; a < n.length; a++) {
          let i = n[a];
          typeof i == "function" ? i() : mx(e6[a], null);
        }
      };
    };
  }
  function eC(e6) {
    return typeof e6 == "object" && e6 !== null && "then" in e6;
  }
  function Rx(e6) {
    return e6 != null && typeof e6 == "object" && "$$typeof" in e6 && e6.$$typeof === J8 && "_payload" in e6 && eC(e6._payload);
  }
  function tC(e6) {
    let t = rC(e6), r = Je.forwardRef((n, a) => {
      let { children: i, ...o } = n;
      Rx(i) && typeof Uc == "function" && (i = Uc(i._payload));
      let l = Je.Children.toArray(i), s = l.find(aC);
      if (s) {
        let u = s.props.children, c = l.map((d) => d === s ? Je.Children.count(u) > 1 ? Je.Children.only(null) : Je.isValidElement(u) ? u.props.children : null : d);
        return (0, D0.jsx)(t, { ...o, ref: a, children: Je.isValidElement(u) ? Je.cloneElement(u, void 0, c) : null });
      }
      return (0, D0.jsx)(t, { ...o, ref: a, children: i });
    });
    return r.displayName = `${e6}.Slot`, r;
  }
  function rC(e6) {
    let t = Je.forwardRef((r, n) => {
      let { children: a, ...i } = r;
      if (Rx(a) && typeof Uc == "function" && (a = Uc(a._payload)), Je.isValidElement(a)) {
        let o = oC(a), l = iC(i, a.props);
        return a.type !== Je.Fragment && (l.ref = n ? Z8(n, o) : o), Je.cloneElement(a, l);
      }
      return Je.Children.count(a) > 1 ? Je.Children.only(null) : null;
    });
    return t.displayName = `${e6}.SlotClone`, t;
  }
  function aC(e6) {
    return Je.isValidElement(e6) && typeof e6.type == "function" && "__radixId" in e6.type && e6.type.__radixId === nC;
  }
  function iC(e6, t) {
    let r = { ...t };
    for (let n in t) {
      let a = e6[n], i = t[n];
      /^on[A-Z]/.test(n) ? a && i ? r[n] = (...o) => {
        let l = i(...o);
        return a(...o), l;
      } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
    }
    return { ...e6, ...r };
  }
  function oC(e6) {
    let t = Object.getOwnPropertyDescriptor(e6.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e6.ref : (t = Object.getOwnPropertyDescriptor(e6, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e6.props.ref : e6.props.ref || e6.ref);
  }
  function cC({ variant: e6 = "primary", fullWidth: t = false, large: r = false, className: n }) {
    return N0("m-px box-border inline-flex h-[var(--ds-control-compact)] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-text text-sizeBody font-medium leading-none transition-[background-color,border-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-foreground4", "disabled:cursor-default disabled:border-transparent disabled:bg-ds-muted disabled:text-ds-foreground4 disabled:shadow-none", r ? "h-[var(--ds-control)] rounded-[var(--ds-radius)] px-3.5" : "rounded-[var(--ds-radius-compact)] px-2.5", t && "flex w-[calc(100%-2px)]", uC[e6], n);
  }
  function kb(e6) {
    return NC.get((e6 ?? "").toLowerCase().split("-")[0]) ?? cd;
  }
  function Eb(e6) {
    return LC.has((e6 ?? "").toLowerCase().split("-")[0]) ? "rtl" : "auto";
  }
  function he() {
    return (0, is.useContext)(dd);
  }
  function lm(e6) {
    let t = (0, is.useContext)(dd);
    return e6 ? kb(e6) : t;
  }
  function sm() {
    let [e6, t] = (0, Ve.useState)({ ready: false, isOwnerUser: false });
    return (0, Ve.useEffect)(() => {
      let r = false, n = Jc();
      if (!n?.request) {
        t({ ready: true, isOwnerUser: false });
        return;
      }
      return n.request("context", null).then((a) => {
        r || t({ ready: true, isOwnerUser: a.isOwnerUser === true });
      }), () => {
        r = true;
      };
    }, []), e6;
  }
  function MC(e6, t) {
    let r = he(), [n, a] = (0, Ve.useState)({ scope: { key: e6, initialValue: t }, value: t, status: "loading", ready: false });
    n.scope.key !== e6 && a({ scope: { key: e6, initialValue: t }, value: t, status: "loading", ready: false });
    let { scope: i, value: o, status: l, ready: s } = n, u = (0, Ve.useRef)(null), c = (0, Ve.useCallback)((p) => {
      a((v) => v.scope === i ? { ...v, ...p } : v);
    }, [i]);
    (0, Ve.useEffect)(() => {
      let p = { scope: i, value: i.initialValue, hydrated: false, sequence: 0 };
      u.current = p;
      let v = Jc(), y = (g) => {
        if (u.current !== p) return;
        let m = i.initialValue;
        try {
          typeof g.value == "string" && (m = JSON.parse(g.value));
        } catch {
          g = { status: "invalid" };
        }
        p.value = m, p.hydrated = g.status === "saved" || g.status === "memory", c({ value: m, status: g.status ?? "memory", ready: true });
      };
      return v?.request ? v.request("local.read", { key: i.key }).then(y) : y({ status: "memory" }), () => {
        u.current === p && (u.current = null);
      };
    }, [i, c]);
    let d = (0, Ve.useCallback)((p) => {
      let v = u.current;
      if (!s || v?.scope !== i) return;
      let y = typeof p == "function" ? p(v.value) : p;
      v.value = y;
      let g = ++v.sequence, m;
      try {
        if (m = JSON.stringify(y), m === void 0) throw new Error("Invalid local state");
      } catch {
        c({ value: y, status: "invalid" });
        return;
      }
      let h = Jc();
      if (!h?.request || !v.hydrated) {
        c({ value: y, status: "memory" });
        return;
      }
      c({ value: y, status: "saving" }), h.request("local.write", { key: i.key, value: m }).then((w) => {
        u.current === v && v.sequence === g && c({ status: w.status ?? "unknown" });
      });
    }, [i, s, c]), f = l === "loading" ? r.loadingState : l === "saving" ? r.savingState : l === "saved" ? r.savedState : r.unsavedState;
    return [o, d, { ready: s, status: l, message: f }];
  }
  function Rb() {
    let e6 = he(), [t, r] = (0, Ve.useState)("idle"), [n, a] = (0, Ve.useState)(0), i = (0, Ve.useRef)(null), o = (0, Ve.useRef)(null), l = (0, Ve.useRef)(0), s = (0, Ve.useRef)(true);
    (0, Ve.useEffect)(() => (s.current = true, () => {
      s.current = false;
    }), []), (0, Ve.useEffect)(() => {
      if (n <= 0) return;
      let p = setTimeout(() => a(Math.max(0, l.current - Date.now())), Math.min(1e3, n));
      return () => clearTimeout(p);
    }, [n]);
    let u = (0, Ve.useCallback)((p) => {
      if (o.current) return o.current;
      if (Date.now() < l.current) return Promise.resolve({ status: "rate_limited", retryAfterMs: l.current - Date.now() });
      let v = Jc();
      if (!v?.request) return i.current = null, r("unavailable"), Promise.resolve({ status: "unavailable" });
      r("sending");
      let y = v.request("wake", p).then((g) => {
        if (!s.current) return g;
        let m = g.status ?? "unknown";
        r(m);
        let h = g.retryAfterMs ?? 0;
        return l.current = Date.now() + h, a(h), (m === "accepted" || m === "forbidden" || m === "invalid" || m === "conflict" || m === "canceled" || m === "unavailable") && (i.current = null), g;
      }).finally(() => {
        o.current = null;
      });
      return o.current = y, y;
    }, []), c = (0, Ve.useCallback)((p) => {
      if (o.current) return o.current;
      if (i.current) return Promise.resolve({ status: "retry_required" });
      let v;
      try {
        if (v = JSON.stringify(p.content), v === void 0 || new TextEncoder().encode(v).length > 16 * 1024) throw new Error("Invalid wake content");
      } catch {
        return r("invalid"), Promise.resolve({ status: "invalid" });
      }
      let y = { operationId: crypto.randomUUID(), content: v };
      return i.current = y, u(y);
    }, [u]), d = (0, Ve.useCallback)(() => i.current ? u(i.current) : Promise.resolve({ status: "idle" }), [u]), f = t === "idle" ? "" : t === "sending" ? e6.sending : t === "accepted" ? e6.wakeAccepted : t === "rate_limited" ? n > 0 ? e6.wakeWait(Math.ceil(n / 1e3)) : e6.wakeRetryNow : t === "unknown" ? e6.wakeUnconfirmed : t === "forbidden" ? e6.wakeForbidden : t === "canceled" ? e6.wakeCanceled : t === "invalid" || t === "conflict" ? e6.wakeFailed : e6.wakeUnavailable;
    return { wakeAgent: c, retry: d, busy: t === "sending", status: t, message: f, retryAfterMs: n, canRetry: t === "unknown" || t === "rate_limited" };
  }
  function TC() {
    return { values: {}, nodes: { [PC]: { type: _C, props: {}, children: [] } } };
  }
  function FC(e6, t) {
    return Object.keys(e6.nodes).find((r) => e6.nodes[r].children.includes(t));
  }
  function Sb(e6, t) {
    let r = e6[t];
    delete e6[t];
    for (let n of r.children) Sb(e6, n);
  }
  function Bc(e6, t) {
    if (t.op === "set") return { ...e6, values: { ...e6.values, [t.key]: t.value } };
    if (t.op === "add") {
      if (e6.nodes[t.id]) return e6;
      let a = { ...e6.nodes, [t.id]: { type: t.type, props: t.props ?? {}, children: [] } };
      if (!t.parent) return { ...e6, nodes: a };
      let i = e6.nodes[t.parent], o = t.after ? i.children.indexOf(t.after) + 1 : i.children.length;
      return a[t.parent] = { ...i, children: [...i.children.slice(0, o), t.id, ...i.children.slice(o)] }, { ...e6, nodes: a };
    }
    if (t.op === "update") {
      let a = { ...e6.nodes[t.id].props };
      for (let [i, o] of Object.entries(t.props)) o === null ? delete a[i] : a[i] = o;
      return { ...e6, nodes: { ...e6.nodes, [t.id]: { ...e6.nodes[t.id], props: a } } };
    }
    if (!e6.nodes[t.id]) return e6;
    let r = { ...e6.nodes }, n = FC(e6, t.id);
    return n && (r[n] = { ...r[n], children: r[n].children.filter((a) => a !== t.id) }), Sb(r, t.id), { ...e6, nodes: r };
  }
  function Qc(e6, t) {
    return e6 == null || t == null ? NaN : e6 < t ? -1 : e6 > t ? 1 : e6 >= t ? 0 : NaN;
  }
  function $C(e6, t) {
    return e6 == null || t == null ? NaN : t < e6 ? -1 : t > e6 ? 1 : t >= e6 ? 0 : NaN;
  }
  function Db(e6) {
    let t, r, n;
    e6.length !== 2 ? (t = Qc, r = (l, s) => Qc(e6(l), s), n = (l, s) => e6(l) - s) : (t = e6 === Qc || e6 === $C ? e6 : zC, r = e6, n = e6);
    function a(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) < 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function i(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) <= 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function o(l, s, u = 0, c = l.length) {
      let d = a(l, s, u, c - 1);
      return d > u && n(l[d - 1], s) > -n(l[d], s) ? d - 1 : d;
    }
    return { left: a, center: o, right: i };
  }
  function zC() {
    return 0;
  }
  function OC(e6) {
    return e6 === null ? NaN : +e6;
  }
  function Lx({ _intern: e6, _key: t }, r) {
    let n = t(r);
    return e6.has(n) ? e6.get(n) : r;
  }
  function HC({ _intern: e6, _key: t }, r) {
    let n = t(r);
    return e6.has(n) ? e6.get(n) : (e6.set(n, r), r);
  }
  function UC({ _intern: e6, _key: t }, r) {
    let n = t(r);
    return e6.has(n) && (r = e6.get(n), e6.delete(n)), r;
  }
  function BC(e6) {
    return e6 !== null && typeof e6 == "object" ? e6.valueOf() : e6;
  }
  function VC(e6, t, r) {
    var n, a = -1, i, o, l;
    if (t = +t, e6 = +e6, r = +r, e6 === t && r > 0) return [e6];
    if ((n = t < e6) && (i = e6, e6 = t, t = i), (l = Lb(e6, t, r)) === 0 || !isFinite(l)) return [];
    if (l > 0) {
      let s = Math.round(e6 / l), u = Math.round(t / l);
      for (s * l < e6 && ++s, u * l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) * l;
    } else {
      l = -l;
      let s = Math.round(e6 * l), u = Math.round(t * l);
      for (s / l < e6 && ++s, u / l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) / l;
    }
    return n && o.reverse(), o;
  }
  function Lb(e6, t, r) {
    var n = (t - e6) / Math.max(0, r), a = Math.floor(Math.log(n) / Math.LN10), i = n / Math.pow(10, a);
    return a >= 0 ? (i >= V0 ? 10 : i >= W0 ? 5 : i >= Y0 ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (i >= V0 ? 10 : i >= W0 ? 5 : i >= Y0 ? 2 : 1);
  }
  function WC(e6, t, r) {
    var n = Math.abs(t - e6) / Math.max(0, r), a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), i = n / a;
    return i >= V0 ? a *= 10 : i >= W0 ? a *= 5 : i >= Y0 && (a *= 2), t < e6 ? -a : a;
  }
  function YC(e6, t, r) {
    e6 = +e6, t = +t, r = (a = arguments.length) < 2 ? (t = e6, e6 = 0, 1) : a < 3 ? 1 : +r;
    for (var n = -1, a = Math.max(0, Math.ceil((t - e6) / r)) | 0, i = new Array(a); ++n < a; ) i[n] = e6 + n * r;
    return i;
  }
  function dm(e6, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e6);
        break;
      default:
        this.range(t).domain(e6);
        break;
    }
    return this;
  }
  function Mb() {
    var e6 = new Nx(), t = [], r = [], n = Mx;
    function a(i) {
      let o = e6.get(i);
      if (o === void 0) {
        if (n !== Mx) return n;
        e6.set(i, o = t.push(i) - 1);
      }
      return r[o % r.length];
    }
    return a.domain = function(i) {
      if (!arguments.length) return t.slice();
      t = [], e6 = new Nx();
      for (let o of i) e6.has(o) || e6.set(o, t.push(o) - 1);
      return a;
    }, a.range = function(i) {
      return arguments.length ? (r = Array.from(i), a) : r.slice();
    }, a.unknown = function(i) {
      return arguments.length ? (n = i, a) : n;
    }, a.copy = function() {
      return Mb(t, r).unknown(n);
    }, dm.apply(a, arguments), a;
  }
  function Pb() {
    var e6 = Mb().unknown(void 0), t = e6.domain, r = e6.range, n = 0, a = 1, i, o, l = false, s = 0, u = 0, c = 0.5;
    delete e6.unknown;
    function d() {
      var f = t().length, p = a < n, v = p ? a : n, y = p ? n : a;
      i = (y - v) / Math.max(1, f - s + u * 2), l && (i = Math.floor(i)), v += (y - v - i * (f - s)) * c, o = i * (1 - s), l && (v = Math.round(v), o = Math.round(o));
      var g = YC(f).map(function(m) {
        return v + i * m;
      });
      return r(p ? g.reverse() : g);
    }
    return e6.domain = function(f) {
      return arguments.length ? (t(f), d()) : t();
    }, e6.range = function(f) {
      return arguments.length ? ([n, a] = f, n = +n, a = +a, d()) : [n, a];
    }, e6.rangeRound = function(f) {
      return [n, a] = f, n = +n, a = +a, l = true, d();
    }, e6.bandwidth = function() {
      return o;
    }, e6.step = function() {
      return i;
    }, e6.round = function(f) {
      return arguments.length ? (l = !!f, d()) : l;
    }, e6.padding = function(f) {
      return arguments.length ? (s = Math.min(1, u = +f), d()) : s;
    }, e6.paddingInner = function(f) {
      return arguments.length ? (s = Math.min(1, f), d()) : s;
    }, e6.paddingOuter = function(f) {
      return arguments.length ? (u = +f, d()) : u;
    }, e6.align = function(f) {
      return arguments.length ? (c = Math.max(0, Math.min(1, f)), d()) : c;
    }, e6.copy = function() {
      return Pb(t(), [n, a]).round(l).paddingInner(s).paddingOuter(u).align(c);
    }, dm.apply(d(), arguments);
  }
  function yo(e6, t, r) {
    e6.prototype = t.prototype = r, r.constructor = e6;
  }
  function os(e6, t) {
    var r = Object.create(e6.prototype);
    for (var n in t) r[n] = t[n];
    return r;
  }
  function ya() {
  }
  function _x() {
    return this.rgb().formatHex();
  }
  function e7() {
    return this.rgb().formatHex8();
  }
  function t7() {
    return _b(this).formatHsl();
  }
  function Ax() {
    return this.rgb().formatRgb();
  }
  function es(e6) {
    var t, r;
    return e6 = (e6 + "").trim().toLowerCase(), (t = qC.exec(e6)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Tx(t) : r === 3 ? new ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Vc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Vc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = GC.exec(e6)) ? new ct(t[1], t[2], t[3], 1) : (t = KC.exec(e6)) ? new ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = XC.exec(e6)) ? Vc(t[1], t[2], t[3], t[4]) : (t = QC.exec(e6)) ? Vc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ZC.exec(e6)) ? zx(t[1], t[2] / 100, t[3] / 100, 1) : (t = JC.exec(e6)) ? zx(t[1], t[2] / 100, t[3] / 100, t[4]) : Px.hasOwnProperty(e6) ? Tx(Px[e6]) : e6 === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
  }
  function Tx(e6) {
    return new ct(e6 >> 16 & 255, e6 >> 8 & 255, e6 & 255, 1);
  }
  function Vc(e6, t, r, n) {
    return n <= 0 && (e6 = t = r = NaN), new ct(e6, t, r, n);
  }
  function fm(e6) {
    return e6 instanceof ya || (e6 = es(e6)), e6 ? (e6 = e6.rgb(), new ct(e6.r, e6.g, e6.b, e6.opacity)) : new ct();
  }
  function ed(e6, t, r, n) {
    return arguments.length === 1 ? fm(e6) : new ct(e6, t, r, n ?? 1);
  }
  function ct(e6, t, r, n) {
    this.r = +e6, this.g = +t, this.b = +r, this.opacity = +n;
  }
  function Fx() {
    return `#${Za(this.r)}${Za(this.g)}${Za(this.b)}`;
  }
  function r7() {
    return `#${Za(this.r)}${Za(this.g)}${Za(this.b)}${Za((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function $x() {
    let e6 = td(this.opacity);
    return `${e6 === 1 ? "rgb(" : "rgba("}${Ja(this.r)}, ${Ja(this.g)}, ${Ja(this.b)}${e6 === 1 ? ")" : `, ${e6})`}`;
  }
  function td(e6) {
    return isNaN(e6) ? 1 : Math.max(0, Math.min(1, e6));
  }
  function Ja(e6) {
    return Math.max(0, Math.min(255, Math.round(e6) || 0));
  }
  function Za(e6) {
    return e6 = Ja(e6), (e6 < 16 ? "0" : "") + e6.toString(16);
  }
  function zx(e6, t, r, n) {
    return n <= 0 ? e6 = t = r = NaN : r <= 0 || r >= 1 ? e6 = t = NaN : t <= 0 && (e6 = NaN), new zr(e6, t, r, n);
  }
  function _b(e6) {
    if (e6 instanceof zr) return new zr(e6.h, e6.s, e6.l, e6.opacity);
    if (e6 instanceof ya || (e6 = es(e6)), !e6) return new zr();
    if (e6 instanceof zr) return e6;
    e6 = e6.rgb();
    var t = e6.r / 255, r = e6.g / 255, n = e6.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, s = (i + a) / 2;
    return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new zr(o, l, s, e6.opacity);
  }
  function q0(e6, t, r, n) {
    return arguments.length === 1 ? _b(e6) : new zr(e6, t, r, n ?? 1);
  }
  function zr(e6, t, r, n) {
    this.h = +e6, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function Ox(e6) {
    return e6 = (e6 || 0) % 360, e6 < 0 ? e6 + 360 : e6;
  }
  function Wc(e6) {
    return Math.max(0, Math.min(1, e6 || 0));
  }
  function T0(e6, t, r) {
    return (e6 < 60 ? t + (r - t) * e6 / 60 : e6 < 180 ? r : e6 < 240 ? t + (r - t) * (240 - e6) / 60 : t) * 255;
  }
  function jb(e6) {
    if (e6 instanceof tn) return new tn(e6.l, e6.a, e6.b, e6.opacity);
    if (e6 instanceof Nn) return Hb(e6);
    e6 instanceof ct || (e6 = fm(e6));
    var t = O0(e6.r), r = O0(e6.g), n = O0(e6.b), a = F0((0.2225045 * t + 0.7168786 * r + 0.0606169 * n) / $b), i, o;
    return t === r && r === n ? i = o = a : (i = F0((0.4360747 * t + 0.3850649 * r + 0.1430804 * n) / Fb), o = F0((0.0139322 * t + 0.0971045 * r + 0.7141733 * n) / zb)), new tn(116 * a - 16, 500 * (i - a), 200 * (a - o), e6.opacity);
  }
  function G0(e6, t, r, n) {
    return arguments.length === 1 ? jb(e6) : new tn(e6, t, r, n ?? 1);
  }
  function tn(e6, t, r, n) {
    this.l = +e6, this.a = +t, this.b = +r, this.opacity = +n;
  }
  function F0(e6) {
    return e6 > n7 ? Math.pow(e6, 1 / 3) : e6 / Ib + Ob;
  }
  function $0(e6) {
    return e6 > mo ? e6 * e6 * e6 : Ib * (e6 - Ob);
  }
  function z0(e6) {
    return 255 * (e6 <= 31308e-7 ? 12.92 * e6 : 1.055 * Math.pow(e6, 1 / 2.4) - 0.055);
  }
  function O0(e6) {
    return (e6 /= 255) <= 0.04045 ? e6 / 12.92 : Math.pow((e6 + 0.055) / 1.055, 2.4);
  }
  function a7(e6) {
    if (e6 instanceof Nn) return new Nn(e6.h, e6.c, e6.l, e6.opacity);
    if (e6 instanceof tn || (e6 = jb(e6)), e6.a === 0 && e6.b === 0) return new Nn(NaN, 0 < e6.l && e6.l < 100 ? 0 : NaN, e6.l, e6.opacity);
    var t = Math.atan2(e6.b, e6.a) * Tb;
    return new Nn(t < 0 ? t + 360 : t, Math.sqrt(e6.a * e6.a + e6.b * e6.b), e6.l, e6.opacity);
  }
  function K0(e6, t, r, n) {
    return arguments.length === 1 ? a7(e6) : new Nn(e6, t, r, n ?? 1);
  }
  function Nn(e6, t, r, n) {
    this.h = +e6, this.c = +t, this.l = +r, this.opacity = +n;
  }
  function Hb(e6) {
    if (isNaN(e6.h)) return new tn(e6.l, 0, 0, e6.opacity);
    var t = e6.h * Ab;
    return new tn(e6.l, Math.cos(t) * e6.c, Math.sin(t) * e6.c, e6.opacity);
  }
  function i7(e6) {
    if (e6 instanceof ei) return new ei(e6.h, e6.s, e6.l, e6.opacity);
    e6 instanceof ct || (e6 = fm(e6));
    var t = e6.r / 255, r = e6.g / 255, n = e6.b / 255, a = (Hx * n + Ix * t - jx * r) / (Hx + Ix - jx), i = n - a, o = (ts * (r - a) - pm * i) / hd, l = Math.sqrt(o * o + i * i) / (ts * a * (1 - a)), s = l ? Math.atan2(o, i) * Tb - 120 : NaN;
    return new ei(s < 0 ? s + 360 : s, l, a, e6.opacity);
  }
  function X0(e6, t, r, n) {
    return arguments.length === 1 ? i7(e6) : new ei(e6, t, r, n ?? 1);
  }
  function ei(e6, t, r, n) {
    this.h = +e6, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function Bb(e6, t, r, n, a) {
    var i = e6 * e6, o = i * e6;
    return ((1 - 3 * e6 + 3 * i - o) * t + (4 - 6 * i + 3 * o) * r + (1 + 3 * e6 + 3 * i - 3 * o) * n + o * a) / 6;
  }
  function o7(e6) {
    var t = e6.length - 1;
    return function(r) {
      var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e6[n], i = e6[n + 1], o = n > 0 ? e6[n - 1] : 2 * a - i, l = n < t - 1 ? e6[n + 2] : 2 * i - a;
      return Bb((r - n / t) * t, o, a, i, l);
    };
  }
  function l7(e6) {
    var t = e6.length;
    return function(r) {
      var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), a = e6[(n + t - 1) % t], i = e6[n % t], o = e6[(n + 1) % t], l = e6[(n + 2) % t];
      return Bb((r - n / t) * t, a, i, o, l);
    };
  }
  function Vb(e6, t) {
    return function(r) {
      return e6 + r * t;
    };
  }
  function s7(e6, t, r) {
    return e6 = Math.pow(e6, r), t = Math.pow(t, r) - e6, r = 1 / r, function(n) {
      return Math.pow(e6 + n * t, r);
    };
  }
  function mm(e6, t) {
    var r = t - e6;
    return r ? Vb(e6, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : pd(isNaN(e6) ? t : e6);
  }
  function u7(e6) {
    return (e6 = +e6) == 1 ? dt : function(t, r) {
      return r - t ? s7(t, r, e6) : pd(isNaN(t) ? r : t);
    };
  }
  function dt(e6, t) {
    var r = t - e6;
    return r ? Vb(e6, r) : pd(isNaN(e6) ? t : e6);
  }
  function Wb(e6) {
    return function(t) {
      var r = t.length, n = new Array(r), a = new Array(r), i = new Array(r), o, l;
      for (o = 0; o < r; ++o) l = ed(t[o]), n[o] = l.r || 0, a[o] = l.g || 0, i[o] = l.b || 0;
      return n = e6(n), a = e6(a), i = e6(i), l.opacity = 1, function(s) {
        return l.r = n(s), l.g = a(s), l.b = i(s), l + "";
      };
    };
  }
  function c7(e6, t) {
    t || (t = []);
    var r = e6 ? Math.min(t.length, e6.length) : 0, n = t.slice(), a;
    return function(i) {
      for (a = 0; a < r; ++a) n[a] = e6[a] * (1 - i) + t[a] * i;
      return n;
    };
  }
  function d7(e6) {
    return ArrayBuffer.isView(e6) && !(e6 instanceof DataView);
  }
  function f7(e6, t) {
    var r = t ? t.length : 0, n = e6 ? Math.min(r, e6.length) : 0, a = new Array(n), i = new Array(r), o;
    for (o = 0; o < n; ++o) a[o] = gm(e6[o], t[o]);
    for (; o < r; ++o) i[o] = t[o];
    return function(l) {
      for (o = 0; o < n; ++o) i[o] = a[o](l);
      return i;
    };
  }
  function h7(e6, t) {
    var r = /* @__PURE__ */ new Date();
    return e6 = +e6, t = +t, function(n) {
      return r.setTime(e6 * (1 - n) + t * n), r;
    };
  }
  function nd(e6, t) {
    return e6 = +e6, t = +t, function(r) {
      return e6 * (1 - r) + t * r;
    };
  }
  function p7(e6, t) {
    var r = {}, n = {}, a;
    (e6 === null || typeof e6 != "object") && (e6 = {}), (t === null || typeof t != "object") && (t = {});
    for (a in t) a in e6 ? r[a] = gm(e6[a], t[a]) : n[a] = t[a];
    return function(i) {
      for (a in r) n[a] = r[a](i);
      return n;
    };
  }
  function m7(e6) {
    return function() {
      return e6;
    };
  }
  function g7(e6) {
    return function(t) {
      return e6(t) + "";
    };
  }
  function v7(e6, t) {
    var r = Z0.lastIndex = I0.lastIndex = 0, n, a, i, o = -1, l = [], s = [];
    for (e6 = e6 + "", t = t + ""; (n = Z0.exec(e6)) && (a = I0.exec(t)); ) (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, s.push({ i: o, x: nd(n, a) })), r = I0.lastIndex;
    return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? g7(s[0].x) : m7(t) : (t = s.length, function(u) {
      for (var c = 0, d; c < t; ++c) l[(d = s[c]).i] = d.x(u);
      return l.join("");
    });
  }
  function gm(e6, t) {
    var r = typeof t, n;
    return t == null || r === "boolean" ? pd(t) : (r === "number" ? nd : r === "string" ? (n = es(t)) ? (t = n, Q0) : v7 : t instanceof es ? Q0 : t instanceof Date ? h7 : d7(t) ? c7 : Array.isArray(t) ? f7 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? p7 : nd)(e6, t);
  }
  function Yb(e6, t) {
    return e6 = +e6, t = +t, function(r) {
      return Math.round(e6 * (1 - r) + t * r);
    };
  }
  function qb(e6) {
    return function(t, r) {
      var n = e6((t = q0(t)).h, (r = q0(r)).h), a = dt(t.s, r.s), i = dt(t.l, r.l), o = dt(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.s = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function x7(e6, t) {
    var r = dt((e6 = G0(e6)).l, (t = G0(t)).l), n = dt(e6.a, t.a), a = dt(e6.b, t.b), i = dt(e6.opacity, t.opacity);
    return function(o) {
      return e6.l = r(o), e6.a = n(o), e6.b = a(o), e6.opacity = i(o), e6 + "";
    };
  }
  function Gb(e6) {
    return function(t, r) {
      var n = e6((t = K0(t)).h, (r = K0(r)).h), a = dt(t.c, r.c), i = dt(t.l, r.l), o = dt(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.c = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function Kb(e6) {
    return (function t(r) {
      r = +r;
      function n(a, i) {
        var o = e6((a = X0(a)).h, (i = X0(i)).h), l = dt(a.s, i.s), s = dt(a.l, i.l), u = dt(a.opacity, i.opacity);
        return function(c) {
          return a.h = o(c), a.s = l(c), a.l = s(Math.pow(c, r)), a.opacity = u(c), a + "";
        };
      }
      return n.gamma = t, n;
    })(1);
  }
  function S7(e6) {
    return function() {
      return e6;
    };
  }
  function C7(e6) {
    return +e6;
  }
  function fo(e6) {
    return e6;
  }
  function J0(e6, t) {
    return (t -= e6 = +e6) ? function(r) {
      return (r - e6) / t;
    } : S7(isNaN(t) ? NaN : 0.5);
  }
  function D7(e6, t) {
    var r;
    return e6 > t && (r = e6, e6 = t, t = r), function(n) {
      return Math.max(e6, Math.min(t, n));
    };
  }
  function N7(e6, t, r) {
    var n = e6[0], a = e6[1], i = t[0], o = t[1];
    return a < n ? (n = J0(a, n), i = r(o, i)) : (n = J0(n, a), i = r(i, o)), function(l) {
      return i(n(l));
    };
  }
  function L7(e6, t, r) {
    var n = Math.min(e6.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
    for (e6[n] < e6[0] && (e6 = e6.slice().reverse(), t = t.slice().reverse()); ++o < n; ) a[o] = J0(e6[o], e6[o + 1]), i[o] = r(t[o], t[o + 1]);
    return function(l) {
      var s = jC(e6, l, 1, n) - 1;
      return i[s](a[s](l));
    };
  }
  function M7(e6, t) {
    return t.domain(e6.domain()).range(e6.range()).interpolate(e6.interpolate()).clamp(e6.clamp()).unknown(e6.unknown());
  }
  function P7() {
    var e6 = Ux, t = Ux, r = gm, n, a, i, o = fo, l, s, u;
    function c() {
      var f = Math.min(e6.length, t.length);
      return o !== fo && (o = D7(e6[0], e6[f - 1])), l = f > 2 ? L7 : N7, s = u = null, d;
    }
    function d(f) {
      return f == null || isNaN(f = +f) ? i : (s || (s = l(e6.map(n), t, r)))(n(o(f)));
    }
    return d.invert = function(f) {
      return o(a((u || (u = l(t, e6.map(n), nd)))(f)));
    }, d.domain = function(f) {
      return arguments.length ? (e6 = Array.from(f, C7), c()) : e6.slice();
    }, d.range = function(f) {
      return arguments.length ? (t = Array.from(f), c()) : t.slice();
    }, d.rangeRound = function(f) {
      return t = Array.from(f), r = Yb, c();
    }, d.clamp = function(f) {
      return arguments.length ? (o = f ? true : fo, c()) : o !== fo;
    }, d.interpolate = function(f) {
      return arguments.length ? (r = f, c()) : r;
    }, d.unknown = function(f) {
      return arguments.length ? (i = f, d) : i;
    }, function(f, p) {
      return n = f, a = p, c();
    };
  }
  function _7() {
    return P7()(fo, fo);
  }
  function A7(e6) {
    return Math.abs(e6 = Math.round(e6)) >= 1e21 ? e6.toLocaleString("en").replace(/,/g, "") : e6.toString(10);
  }
  function ad(e6, t) {
    if ((r = (e6 = t ? e6.toExponential(t - 1) : e6.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e6.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e6.slice(r + 1)];
  }
  function vo(e6) {
    return e6 = ad(Math.abs(e6)), e6 ? e6[1] : NaN;
  }
  function T7(e6, t) {
    return function(r, n) {
      for (var a = r.length, i = [], o = 0, l = e6[0], s = 0; a > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), i.push(r.substring(a -= l, a + l)), !((s += l + 1) > n)); ) l = e6[o = (o + 1) % e6.length];
      return i.reverse().join(t);
    };
  }
  function F7(e6) {
    return function(t) {
      return t.replace(/[0-9]/g, function(r) {
        return e6[+r];
      });
    };
  }
  function id(e6) {
    if (!(t = $7.exec(e6))) throw new Error("invalid format: " + e6);
    var t;
    return new vm({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  function vm(e6) {
    this.fill = e6.fill === void 0 ? " " : e6.fill + "", this.align = e6.align === void 0 ? ">" : e6.align + "", this.sign = e6.sign === void 0 ? "-" : e6.sign + "", this.symbol = e6.symbol === void 0 ? "" : e6.symbol + "", this.zero = !!e6.zero, this.width = e6.width === void 0 ? void 0 : +e6.width, this.comma = !!e6.comma, this.precision = e6.precision === void 0 ? void 0 : +e6.precision, this.trim = !!e6.trim, this.type = e6.type === void 0 ? "" : e6.type + "";
  }
  function z7(e6) {
    e: for (var t = e6.length, r = 1, n = -1, a; r < t; ++r) switch (e6[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e6[r]) break e;
        n > 0 && (n = 0);
        break;
    }
    return n > 0 ? e6.slice(0, n) + e6.slice(a + 1) : e6;
  }
  function O7(e6, t) {
    var r = ad(e6, t);
    if (!r) return e6 + "";
    var n = r[0], a = r[1], i = a - (Xb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
    return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + ad(e6, Math.max(0, t + i - 1))[0];
  }
  function Bx(e6, t) {
    var r = ad(e6, t);
    if (!r) return e6 + "";
    var n = r[0], a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
  }
  function Wx(e6) {
    return e6;
  }
  function I7(e6) {
    var t = e6.grouping === void 0 || e6.thousands === void 0 ? Wx : T7(Yx.call(e6.grouping, Number), e6.thousands + ""), r = e6.currency === void 0 ? "" : e6.currency[0] + "", n = e6.currency === void 0 ? "" : e6.currency[1] + "", a = e6.decimal === void 0 ? "." : e6.decimal + "", i = e6.numerals === void 0 ? Wx : F7(Yx.call(e6.numerals, String)), o = e6.percent === void 0 ? "%" : e6.percent + "", l = e6.minus === void 0 ? "\u2212" : e6.minus + "", s = e6.nan === void 0 ? "NaN" : e6.nan + "";
    function u(d) {
      d = id(d);
      var f = d.fill, p = d.align, v = d.sign, y = d.symbol, g = d.zero, m = d.width, h = d.comma, w = d.precision, b = d.trim, k = d.type;
      k === "n" ? (h = true, k = "g") : Vx[k] || (w === void 0 && (w = 12), b = true, k = "g"), (g || f === "0" && p === "=") && (g = true, f = "0", p = "=");
      var L = y === "$" ? r : y === "#" && /[boxX]/.test(k) ? "0" + k.toLowerCase() : "", D = y === "$" ? n : /[%p]/.test(k) ? o : "", x = Vx[k], S = /[defgprs%]/.test(k);
      w = w === void 0 ? 6 : /[gprs]/.test(k) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
      function N(A) {
        var P = L, _ = D, I, re, Q;
        if (k === "c") _ = x(A) + _, A = "";
        else {
          A = +A;
          var oe = A < 0 || 1 / A < 0;
          if (A = isNaN(A) ? s : x(Math.abs(A), w), b && (A = z7(A)), oe && +A == 0 && v !== "+" && (oe = false), P = (oe ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + P, _ = (k === "s" ? qx[8 + Xb / 3] : "") + _ + (oe && v === "(" ? ")" : ""), S) {
            for (I = -1, re = A.length; ++I < re; ) if (Q = A.charCodeAt(I), 48 > Q || Q > 57) {
              _ = (Q === 46 ? a + A.slice(I + 1) : A.slice(I)) + _, A = A.slice(0, I);
              break;
            }
          }
        }
        h && !g && (A = t(A, 1 / 0));
        var _e = P.length + A.length + _.length, le = _e < m ? new Array(m - _e + 1).join(f) : "";
        switch (h && g && (A = t(le + A, le.length ? m - _.length : 1 / 0), le = ""), p) {
          case "<":
            A = P + A + _ + le;
            break;
          case "=":
            A = P + le + A + _;
            break;
          case "^":
            A = le.slice(0, _e = le.length >> 1) + P + A + _ + le.slice(_e);
            break;
          default:
            A = le + P + A + _;
            break;
        }
        return i(A);
      }
      return N.toString = function() {
        return d + "";
      }, N;
    }
    function c(d, f) {
      var p = u((d = id(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(vo(f) / 3))) * 3, y = Math.pow(10, -v), g = qx[8 + v / 3];
      return function(m) {
        return p(y * m) + g;
      };
    }
    return { format: u, formatPrefix: c };
  }
  function j7(e6) {
    return Yc = I7(e6), Qb = Yc.format, Zb = Yc.formatPrefix, Yc;
  }
  function H7(e6) {
    return Math.max(0, -vo(Math.abs(e6)));
  }
  function U7(e6, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vo(t) / 3))) * 3 - vo(Math.abs(e6)));
  }
  function B7(e6, t) {
    return e6 = Math.abs(e6), t = Math.abs(t) - e6, Math.max(0, vo(t) - vo(e6)) + 1;
  }
  function V7(e6, t, r, n) {
    var a = WC(e6, t, r), i;
    switch (n = id(n ?? ",f"), n.type) {
      case "s": {
        var o = Math.max(Math.abs(e6), Math.abs(t));
        return n.precision == null && !isNaN(i = U7(a, o)) && (n.precision = i), Zb(n, o);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        n.precision == null && !isNaN(i = B7(a, Math.max(Math.abs(e6), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
        break;
      }
      case "f":
      case "%": {
        n.precision == null && !isNaN(i = H7(a)) && (n.precision = i - (n.type === "%") * 2);
        break;
      }
    }
    return Qb(n);
  }
  function W7(e6) {
    var t = e6.domain;
    return e6.ticks = function(r) {
      var n = t();
      return VC(n[0], n[n.length - 1], r ?? 10);
    }, e6.tickFormat = function(r, n) {
      var a = t();
      return V7(a[0], a[a.length - 1], r ?? 10, n);
    }, e6.nice = function(r) {
      r == null && (r = 10);
      var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], s, u, c = 10;
      for (l < o && (u = o, o = l, l = u, u = a, a = i, i = u); c-- > 0; ) {
        if (u = Lb(o, l, r), u === s) return n[a] = o, n[i] = l, t(n);
        if (u > 0) o = Math.floor(o / u) * u, l = Math.ceil(l / u) * u;
        else if (u < 0) o = Math.ceil(o * u) / u, l = Math.floor(l * u) / u;
        else break;
        s = u;
      }
      return e6;
    }, e6;
  }
  function Jb() {
    var e6 = _7();
    return e6.copy = function() {
      return M7(e6, Jb());
    }, dm.apply(e6, arguments), W7(e6);
  }
  function vt(e6, t, r, n) {
    function a(i) {
      return e6(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
    }
    return a.floor = (i) => (e6(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e6(i = new Date(i - 1)), t(i, 1), e6(i), i), a.round = (i) => {
      let o = a(i), l = a.ceil(i);
      return i - o < l - i ? o : l;
    }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
      let s = [];
      if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return s;
      let u;
      do
        s.push(u = /* @__PURE__ */ new Date(+i)), t(i, l), e6(i);
      while (u < i && i < o);
      return s;
    }, a.filter = (i) => vt((o) => {
      if (o >= o) for (; e6(o), !i(o); ) o.setTime(o - 1);
    }, (o, l) => {
      if (o >= o) if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !i(o); ) ;
      else for (; --l >= 0; ) for (; t(o, 1), !i(o); ) ;
    }), r && (a.count = (i, o) => (j0.setTime(+i), H0.setTime(+o), e6(j0), e6(H0), Math.floor(r(j0, H0))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
  }
  function ai(e6) {
    return vt((t) => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e6) % 7), t.setHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setDate(t.getDate() + r * 7);
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  function ii(e6) {
    return vt((t) => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e6) % 7), t.setUTCHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    }, (t, r) => (r - t) / 6048e5);
  }
  function iD(e6, t) {
    t.domain && ("nice" in e6 || "quantiles" in e6 || "padding" in e6, e6.domain(t.domain));
  }
  function oD(e6, t) {
    t.range && ("padding" in e6, e6.range(t.range));
  }
  function lD(e6, t) {
    "align" in e6 && "align" in t && typeof t.align < "u" && e6.align(t.align);
  }
  function sD(e6, t) {
    "base" in e6 && "base" in t && typeof t.base < "u" && e6.base(t.base);
  }
  function uD(e6, t) {
    "clamp" in e6 && "clamp" in t && typeof t.clamp < "u" && e6.clamp(t.clamp);
  }
  function cD(e6, t) {
    "constant" in e6 && "constant" in t && typeof t.constant < "u" && e6.constant(t.constant);
  }
  function dD(e6, t) {
    "exponent" in e6 && "exponent" in t && typeof t.exponent < "u" && e6.exponent(t.exponent);
  }
  function fD(e6) {
    switch (e6) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Gx[e6];
      default:
    }
    var t = e6.type, r = e6.gamma, n = Gx[t];
    return typeof r > "u" ? n : n.gamma(r);
  }
  function hD(e6, t) {
    if ("interpolate" in t && "interpolate" in e6 && typeof t.interpolate < "u") {
      var r = fD(t.interpolate);
      e6.interpolate(r);
    }
  }
  function gD(e6) {
    var t = e6.tickFormat(1, mD)(pD);
    return t === "2020-02-02 03:04";
  }
  function vD(e6, t) {
    if ("nice" in t && typeof t.nice < "u" && "nice" in e6) {
      var r = t.nice;
      if (typeof r == "boolean") r && e6.nice();
      else if (typeof r == "number") e6.nice(r);
      else {
        var n = e6, a = gD(n);
        if (typeof r == "string") n.nice(a ? Xx[r] : Kx[r]);
        else {
          var i = r.interval, o = r.step, l = (a ? Xx[i] : Kx[i]).every(o);
          l != null && n.nice(l);
        }
      }
    }
  }
  function yD(e6, t) {
    "padding" in e6 && "padding" in t && typeof t.padding < "u" && e6.padding(t.padding), "paddingInner" in e6 && "paddingInner" in t && typeof t.paddingInner < "u" && e6.paddingInner(t.paddingInner), "paddingOuter" in e6 && "paddingOuter" in t && typeof t.paddingOuter < "u" && e6.paddingOuter(t.paddingOuter);
  }
  function wD(e6, t) {
    if (t.reverse) {
      var r = e6.range().slice().reverse();
      "padding" in e6, e6.range(r);
    }
  }
  function xD(e6, t) {
    "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e6 ? e6.round(t.round) : "interpolate" in e6 && t.round && e6.interpolate(Yb));
  }
  function bD(e6, t) {
    "unknown" in e6 && "unknown" in t && typeof t.unknown < "u" && e6.unknown(t.unknown);
  }
  function kD(e6, t) {
    if ("zero" in t && t.zero === true) {
      var r = e6.domain(), n = r[0], a = r[1], i = a < n, o = i ? [a, n] : [n, a], l = o[0], s = o[1], u = [Math.min(0, l), Math.max(0, s)];
      e6.domain(i ? u.reverse() : u);
    }
  }
  function c5() {
    for (var e6 = arguments.length, t = new Array(e6), r = 0; r < e6; r++) t[r] = arguments[r];
    var n = new Set(t), a = ED.filter(function(i) {
      return n.has(i);
    });
    return function(i, o) {
      return typeof o < "u" && a.forEach(function(l) {
        RD[l](i, o);
      }), i;
    };
  }
  function CD(e6) {
    return SD(Pb(), e6);
  }
  function od(e6) {
    return DD(Jb(), e6);
  }
  function rm() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function d5() {
    return new rm();
  }
  function qc(e6) {
    return function() {
      return e6;
    };
  }
  function f5(e6) {
    this._context = e6;
  }
  function MD(e6) {
    return new f5(e6);
  }
  function PD(e6) {
    return e6[0];
  }
  function _D(e6) {
    return e6[1];
  }
  function AD() {
    var e6 = PD, t = _D, r = qc(true), n = null, a = MD, i = null;
    function o(l) {
      var s, u = l.length, c, d = false, f;
      for (n == null && (i = a(f = LD())), s = 0; s <= u; ++s) !(s < u && r(c = l[s], s, l)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e6(c, s, l), +t(c, s, l));
      if (f) return i = null, f + "" || null;
    }
    return o.x = function(l) {
      return arguments.length ? (e6 = typeof l == "function" ? l : qc(+l), o) : e6;
    }, o.y = function(l) {
      return arguments.length ? (t = typeof l == "function" ? l : qc(+l), o) : t;
    }, o.defined = function(l) {
      return arguments.length ? (r = typeof l == "function" ? l : qc(!!l), o) : r;
    }, o.curve = function(l) {
      return arguments.length ? (a = l, n != null && (i = a(n)), o) : a;
    }, o.context = function(l) {
      return arguments.length ? (l == null ? n = i = null : i = a(n = l), o) : n;
    }, o;
  }
  function Qx(e6, t) {
    e6(t);
  }
  function TD(e6) {
    var t = e6 === void 0 ? {} : e6, r = t.x, n = t.y, a = t.defined, i = t.curve, o = AD();
    return r && Qx(o.x, r), n && Qx(o.y, n), a && o.defined(a), i && o.curve(i), o;
  }
  function nm() {
    return nm = Object.assign ? Object.assign.bind() : function(e6) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
      }
      return e6;
    }, nm.apply(this, arguments);
  }
  function zD(e6, t) {
    if (e6 == null) return {};
    var r = {}, n = Object.keys(e6), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e6[a]);
    return r;
  }
  function OD(e6) {
    var t = e6.children, r = e6.data, n = r === void 0 ? [] : r, a = e6.x, i = e6.y, o = e6.fill, l = o === void 0 ? "transparent" : o, s = e6.className, u = e6.curve, c = e6.innerRef, d = e6.defined, f = d === void 0 ? function() {
      return true;
    } : d, p = zD(e6, $D), v = TD({ x: a, y: i, defined: f, curve: u });
    return t ? Zc.default.createElement(Zc.default.Fragment, null, t({ path: v })) : Zc.default.createElement("path", nm({ ref: c, className: (0, FD.default)("visx-linepath", s), d: v(n) || "", fill: l, strokeLinecap: "round" }, p));
  }
  function am() {
    return am = Object.assign ? Object.assign.bind() : function(e6) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
      }
      return e6;
    }, am.apply(this, arguments);
  }
  function HD(e6, t) {
    if (e6 == null) return {};
    var r = {}, n = Object.keys(e6), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e6[a]);
    return r;
  }
  function Zx(e6) {
    var t = e6.className, r = e6.innerRef, n = HD(e6, jD);
    return h5.default.createElement("rect", am({ ref: r, className: (0, ID.default)("visx-bar", t) }, n));
  }
  function We(e6) {
    let t = (0, ls.useContext)(md);
    return t === null ? {} : ld(t, { mark: e6 });
  }
  function p5() {
    return (0, ls.useContext)(md) === null ? {} : { "data-live-mark-text": "" };
  }
  function ld(e6, t = {}) {
    return t.mark ? { "data-live-id": e6, "data-live-mark": t.mark } : { "data-live-id": e6 };
  }
  function VD(e6 = "photo") {
    let t = gd.Children.toArray(m5[BD.includes(e6) ? e6 : "photo"].props.children);
    return (0, R.jsx)("svg", { className: "file-placeholder-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { "--file-strokes": t.length }, children: t.map((r, n) => (0, gd.cloneElement)(r, { pathLength: 1, style: { "--file-stroke": n } })) });
  }
  function Pn({ variant: e6 = "secondary", compact: t = false, pill: r = false, selected: n, unavailable: a = false, states: i, state: o, className: l, children: s, ...u }) {
    let c = ["file-button", t && "is-compact", r && "is-pill", a && "is-unavailable", l].filter(Boolean).join(" "), d = i && o !== void 0 ? { states: i, state: o } : null, f = d?.states[d.state];
    return (0, ge.jsx)("button", { type: "button", ...u, className: c, "data-variant": e6, "data-state": d?.state, "aria-pressed": n, disabled: a || u.disabled || f?.variant === "disabled", children: d ? (0, ge.jsx)(t9, { ...d }) : s });
  }
  function vd({ label: e6, className: t, ...r }) {
    let n = he();
    return (0, ge.jsx)(Pn, { variant: "ghost", ...r, className: ["file-close", t].filter(Boolean).join(" "), "aria-label": e6 ?? n.close, children: UD });
  }
  function QD(e6, t) {
    let r = document.createElement("textarea");
    r.value = e6, r.setAttribute("readonly", ""), r.style.cssText = "position:fixed;inset-block-start:0;opacity:0;pointer-events:none;font-size:16px";
    let n = document.activeElement;
    (t.closest("dialog") ?? document.body).append(r), r.focus({ preventScroll: true }), r.select(), r.setSelectionRange(0, r.value.length);
    let a = document.activeElement === r && r.selectionStart === 0 && r.selectionEnd === r.value.length, i;
    try {
      i = a && document.execCommand("copy");
    } catch {
      i = false;
    }
    return r.remove(), n?.focus({ preventScroll: true }), i ? Promise.resolve() : Promise.race([Promise.resolve().then(() => navigator.clipboard.writeText(e6)), new Promise((o, l) => setTimeout(l, XD))]);
  }
  function ZD({ text: e6, label: t, variant: r = "secondary", compact: n = true }) {
    let a = he(), [i, o] = (0, _t.useState)("idle");
    (0, _t.useEffect)(() => {
      if (i === "idle") return;
      let s = setTimeout(() => o("idle"), KD);
      return () => clearTimeout(s);
    }, [i]);
    let l = { idle: { icon: (0, ge.jsx)(WD, { size: 16 }), label: t ?? a.copy }, copied: { icon: (0, ge.jsx)(g5, { size: 16 }), label: a.copied }, failed: { label: a.copyFailed } };
    return (0, ge.jsxs)(ge.Fragment, { children: [(0, ge.jsx)(Pn, { variant: r, compact: n, states: l, state: i, onClick: (s) => {
      QD(e6, s.currentTarget).then(() => o("copied"), () => o("failed"));
    } }), (0, ge.jsx)("span", { className: "file-visually-hidden", role: "status", children: i === "idle" ? "" : l[i].label })] });
  }
  function Jx({ state: e6, className: t, hidden: r = false, faceRef: n }) {
    return (0, ge.jsxs)("span", { ref: n, className: t, "aria-hidden": r || void 0, children: [e6.icon, (0, ge.jsx)("span", { className: "file-button-label", children: e6.label }), e6.shortLabel && (0, ge.jsx)("span", { className: "file-button-label is-short", children: e6.shortLabel })] });
  }
  function t9({ states: e6, state: t }) {
    let r = (0, _t.useRef)(null), n = (0, _t.useRef)(null), a = (0, _t.useRef)(null), [i, o] = (0, _t.useState)(null);
    return e9(() => {
      let l = n.current.offsetWidth, s = a.current;
      if (a.current = { state: t, width: l }, !s || s.state === t) return;
      let u = r.current;
      u.style.width = `${s.width}px`, u.offsetWidth, u.style.width = `${l}px`, o(s.state);
      let c = setTimeout(() => {
        u.style.width = "", o(null);
      }, JD);
      return () => clearTimeout(c);
    }, [t]), (0, ge.jsxs)("span", { ref: r, className: "file-button-slot", children: [i !== null && (0, ge.jsx)(Jx, { state: e6[i], className: "file-button-face is-leaving", hidden: true }, `leaving-${i}`), (0, ge.jsx)(Jx, { state: e6[t], className: i !== null ? "file-button-face is-entering" : "file-button-face", faceRef: n }, t)] });
  }
  function y5({ href: e6, variant: t = "secondary", compact: r = false, pill: n = false, children: a }) {
    let i = Cm(e6), o = We(), l = ["file-button", r && "is-compact", n && "is-pill"].filter(Boolean).join(" ");
    if (!i) return (0, ge.jsx)("span", { ...o, className: l, "data-variant": t, children: a });
    let s = /^(?:https?:|mailto:|tel:|\/\/)/i.test(i);
    return (0, ge.jsxs)("a", { ...o, className: l, "data-variant": t, href: i, target: s ? "_blank" : void 0, rel: "noopener noreferrer", children: [(0, ge.jsx)("span", { children: a }), s && (0, ge.jsx)(Rm, { size: 16 })] });
  }
  function r9({ label: e6, options: t, value: r, onChange: n }) {
    let a = _t.default.useId();
    return (0, ge.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": a, children: [(0, ge.jsx)("span", { id: a, className: "file-control-label", children: e6 }), (0, ge.jsx)("div", { className: "file-choice-row", children: t.map((i) => (0, ge.jsx)(Pn, { compact: true, selected: i.value === r, unavailable: i.unavailable, onClick: () => n(i.value), children: i.label }, i.value)) })] });
  }
  function n9({ label: e6, value: t, onChange: r, ...n }) {
    let a = _t.default.useId();
    return (0, ge.jsxs)("div", { className: "file-control", children: [(0, ge.jsx)("label", { htmlFor: a, className: "file-control-label", children: e6 }), (0, ge.jsx)("input", { id: a, className: "file-field", type: "text", value: t, onChange: (i) => r(i.target.value), ...n })] });
  }
  function a9({ label: e6, min: t, max: r, step: n = 1, value: a, onChange: i, describe: o }) {
    let l = _t.default.useId(), s = `${((a - t) / (r - t || 1) * 100).toFixed(1)}%`;
    return (0, ge.jsxs)("div", { className: "file-control", children: [(0, ge.jsxs)("div", { className: "file-control-head", children: [(0, ge.jsx)("label", { htmlFor: l, className: "file-control-label", children: e6 }), (0, ge.jsx)("span", { children: o(a) })] }), (0, ge.jsx)("input", { id: l, className: "file-slider", type: "range", min: t, max: r, step: n, value: a, onChange: (u) => i(Number(u.target.value)), style: { "--file-slider-fill": s } })] });
  }
  function Sm(e6, t) {
    return (0, yd.useEffect)(() => {
      if (!t) return;
      let r = e6.current, n = r.ownerDocument.activeElement, a = !n.matches(":focus-visible"), i = [];
      for (let o = r.parentElement; o; o = o.parentElement) {
        let l = r.ownerDocument.defaultView.getComputedStyle(o);
        o !== r.ownerDocument.scrollingElement && !["auto", "scroll"].includes(l.overflowY) || (i.push({ element: o, overflow: o.style.getPropertyValue("overflow-y"), priority: o.style.getPropertyPriority("overflow-y"), gutter: o.style.getPropertyValue("scrollbar-gutter"), gutterPriority: o.style.getPropertyPriority("scrollbar-gutter") }), (o === r.ownerDocument.documentElement ? r.ownerDocument.defaultView.innerWidth - o.clientWidth : o.offsetWidth - o.clientWidth - parseFloat(l.borderLeftWidth) - parseFloat(l.borderRightWidth)) > 0 && !l.scrollbarGutter.includes("stable") && o.style.setProperty("scrollbar-gutter", "stable", "important"), o.style.setProperty("overflow-y", "hidden", "important"));
      }
      return r.showModal(), r.focus({ preventScroll: true }), () => {
        r.close();
        for (let { element: o, overflow: l, priority: s, gutter: u, gutterPriority: c } of i) o.style.setProperty("overflow-y", l, s), o.style.setProperty("scrollbar-gutter", u, c);
        n.isConnected && (a && (n.setAttribute("data-quiet-focus", ""), n.addEventListener("blur", () => n.removeAttribute("data-quiet-focus"), { once: true })), n.focus({ preventScroll: true }));
      };
    }, [e6, t]), (0, yd.useCallback)((r) => {
      let n = e6.current;
      n.hasAttribute("data-leaving") || (n.setAttribute("data-leaving", ""), Promise.allSettled(n.getAnimations().map((a) => a.finished)).then(r));
    }, [e6]);
  }
  function i9(e6, t, r) {
    let n = w5(t.scale), a = n === 1 ? Xl : { scale: n, x: eb(t.x, e6.offsetWidth * (n - 1) / 2), y: eb(t.y, e6.offsetHeight * (n - 1) / 2) };
    return e6.style.transition = r ? "transform 200ms ease-out" : "none", e6.style.transform = `translate(${a.x}px, ${a.y}px) scale(${a.scale})`, a;
  }
  function U0(e6, t, r, n) {
    let a = e6.parentElement.getBoundingClientRect(), i = { x: a.left + e6.offsetLeft + e6.offsetWidth / 2, y: a.top + e6.offsetTop + e6.offsetHeight / 2 }, o = w5(t), l = o / n.scale;
    return { scale: o, x: n.x + (r.x - i.x - n.x) * (1 - l), y: n.y + (r.y - i.y - n.y) * (1 - l) };
  }
  function ss({ photos: e6, start: t, title: r, detail: n, onClose: a }) {
    let i = he(), o = (0, Mt.useRef)(null), l = (0, Mt.useRef)(null), s = (0, Mt.useRef)(Xl), u = (0, Mt.useRef)(/* @__PURE__ */ new Map()), c = (0, Mt.useRef)(null), d = (0, Mt.useRef)(null), [f, p] = (0, Mt.useState)(t), [v, y] = (0, Mt.useState)(false), g = Sm(o, true), m = () => g(a), h = (0, Mt.useCallback)((S, N) => {
      s.current = i9(l.current, S, N), y(s.current.scale > 1);
    }, []);
    (0, Mt.useEffect)(() => {
      let S = o.current, N = (A) => {
        A.preventDefault(), A.ctrlKey ? h(U0(l.current, s.current.scale * Math.exp(-A.deltaY * 0.01), { x: A.clientX, y: A.clientY }, s.current), false) : s.current.scale > 1 && h({ ...s.current, x: s.current.x - A.deltaX, y: s.current.y - A.deltaY }, false);
      };
      return S.addEventListener("wheel", N, { passive: false }), () => S.removeEventListener("wheel", N);
    }, [h]), (0, Mt.useEffect)(() => {
      let S = o.current, N = S.ownerDocument.activeElement;
      v && N !== S && S.contains(N) && S.focus({ preventScroll: true });
    }, [v]), (0, Mt.useEffect)(() => {
      let S = o.current, N = S.ownerDocument.activeElement;
      (!N || !S.contains(N) || N.matches(":disabled")) && S.focus({ preventScroll: true });
    }, [f]);
    let w = (S) => {
      let N = Math.min(e6.length - 1, Math.max(0, f + S));
      N !== f && (s.current = Xl, y(false), p(N));
    }, b = (S) => {
      let N = S.target;
      if (N.closest("button")) return;
      let A = N.closest(".file-viewer-stage") ? d.current : "outside";
      d.current = null, !(A === null || A === "handled") && (s.current.scale > 1 ? h(Xl, true) : A === "outside" && m());
    }, k = (S) => {
      if (S.target.closest("button")) return;
      S.preventDefault(), d.current = null;
      try {
        S.currentTarget.setPointerCapture(S.pointerId);
      } catch {
      }
      u.current.set(S.pointerId, { x: S.clientX, y: S.clientY });
      let [N, A] = [...u.current.values()];
      u.current.size === 1 ? c.current = { type: s.current.scale > 1 ? "pan" : "swipe", start: N, origin: s.current, time: Date.now(), onPhoto: S.target === l.current } : u.current.size === 2 && (c.current = { type: "pinch", distance: tb(N, A), middle: rb(N, A), origin: s.current });
    }, L = (S) => {
      let N = c.current;
      if (!N || !u.current.has(S.pointerId)) return;
      u.current.set(S.pointerId, { x: S.clientX, y: S.clientY });
      let [A, P] = [...u.current.values()];
      if (N.type === "pinch" && P) {
        let _ = rb(A, P);
        h(U0(l.current, N.origin.scale * tb(A, P) / N.distance, _, { scale: N.origin.scale, x: N.origin.x + _.x - N.middle.x, y: N.origin.y + _.y - N.middle.y }), false);
      } else N.type === "pan" && h({ scale: s.current.scale, x: N.origin.x + S.clientX - N.start.x, y: N.origin.y + S.clientY - N.start.y }, false);
    }, D = (S) => {
      if (!u.current.delete(S.pointerId)) return;
      let N = c.current, [A] = [...u.current.values()];
      if (A) {
        N?.type === "pinch" && (c.current = { type: "pan", start: A, origin: s.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (c.current = null, !N) return;
      if (N.type === "pinch" || N.afterPinch) {
        s.current.scale < 1.05 && h(Xl, true);
        return;
      }
      let P = { x: S.clientX - N.start.x, y: S.clientY - N.start.y }, _ = Date.now();
      if (Math.hypot(P.x, P.y) < 10 && _ - N.time < 300) {
        N.onPhoto && s.current.scale === 1 ? (d.current = "handled", h(U0(l.current, 4, { x: S.clientX, y: S.clientY }, s.current), true)) : d.current = N.onPhoto ? "photo" : "outside";
        return;
      }
      N.type === "swipe" && Math.abs(P.x) > 40 && Math.abs(P.x) > Math.abs(P.y) && w(P.x < 0 ? 1 : -1);
    }, x = e6[f];
    return (0, ar.jsxs)("dialog", { ref: o, className: "file-viewer", "data-zoomed": v || void 0, "aria-label": i.photosOf(r), tabIndex: -1, onClick: b, onCancel: (S) => {
      S.preventDefault(), S.stopPropagation(), m();
    }, onKeyDown: (S) => {
      S.key === "Escape" ? (S.preventDefault(), S.stopPropagation(), m()) : (S.key === "ArrowRight" || S.key === "ArrowLeft") && (S.preventDefault(), w(S.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, ar.jsx)("div", { className: "file-viewer-bar", children: (0, ar.jsx)(vd, { className: "file-viewer-button", onClick: m }) }), (0, ar.jsx)("div", { className: "file-viewer-stage", onPointerDown: k, onPointerMove: L, onPointerUp: D, onPointerCancel: D, onDragStart: (S) => S.preventDefault(), children: (0, ar.jsx)("img", { ref: l, src: x.src, alt: x.alt, draggable: false }, x.src) }), (0, ar.jsxs)("div", { className: "file-viewer-footer", children: [e6.length > 1 && (0, ar.jsxs)("div", { className: "file-viewer-steps", children: [(0, ar.jsx)(Pn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.previousPhoto, disabled: f === 0, onClick: () => w(-1), children: km }), (0, ar.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: i.photoCount(f + 1, e6.length) }), (0, ar.jsx)(Pn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.nextPhoto, disabled: f === e6.length - 1, onClick: () => w(1), children: Em })] }), (0, ar.jsxs)("span", { className: "file-viewer-title", children: [r, n && ` \xB7 ${n}`] })] })] });
  }
  function x5({ atStart: e6, atEnd: t, onPrevious: r, onNext: n }) {
    let a = he();
    return (0, ga.jsxs)("div", { className: "file-strip-arrows", children: [(0, ga.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.previousPhoto, disabled: e6, onClick: r, children: km }), (0, ga.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.nextPhoto, disabled: t, onClick: n, children: Em })] });
  }
  function o9(e6) {
    let [t, r] = (0, li.useState)(null), n = (0, li.useRef)(null);
    (0, li.useEffect)(() => {
      let i = e6.current, o = i.ownerDocument.defaultView, l = () => {
        n.current = null;
      }, s = () => {
        n.current !== null && Math.abs(i.scrollLeft - n.current) < 2 && l();
        let u = i.scrollWidth - i.clientWidth;
        r(u < 2 ? null : { atStart: i.scrollLeft < 2, atEnd: i.scrollLeft > u - 2 });
      };
      s(), i.addEventListener("scroll", s, { passive: true });
      for (let u of rs) i.addEventListener(u, l, { passive: true });
      return i.addEventListener("load", s, true), o.addEventListener("resize", s), () => {
        i.removeEventListener("scroll", s);
        for (let u of rs) i.removeEventListener(u, l);
        i.removeEventListener("load", s, true), o.removeEventListener("resize", s);
      };
    }, [e6]);
    let a = (i) => {
      let o = e6.current, l = [...o.children], s = l.map((f) => f.offsetLeft - l[0].offsetLeft), u = n.current ?? o.scrollLeft, c = i > 0 ? s.find((f) => f > u + 2) : [...s].reverse().find((f) => f < u - 2), d = Math.min(o.scrollWidth - o.clientWidth, Math.max(0, c ?? (i > 0 ? o.scrollWidth : 0)));
      n.current = d, o.scrollTo({ left: d, behavior: "smooth" });
    };
    return t && { ...t, onPrevious: () => a(-1), onNext: () => a(1) };
  }
  function b5({ bleed: e6, className: t, children: r, ...n }) {
    let a = (0, li.useRef)(null), i = o9(a);
    return (0, ga.jsxs)("div", { className: "file-strip", "data-bleed": e6 || void 0, children: [(0, ga.jsx)("div", { ref: a, ...n, className: [t, e6 && "file-bleed"].filter(Boolean).join(" "), children: r }), i && (0, ga.jsx)(x5, { ...i })] });
  }
  function wd() {
    let e6 = (0, im.useRef)(null), t = (0, im.useRef)(false), r = (n) => {
      e6.current?.pointerId === n.pointerId && (e6.current = null, delete n.currentTarget.dataset.dragging, n.currentTarget.hasPointerCapture(n.pointerId) && n.currentTarget.releasePointerCapture(n.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (n) => {
      n.currentTarget.toggleAttribute("data-can-drag", n.pointerType === "mouse" && n.currentTarget.scrollWidth > n.currentTarget.clientWidth);
    }, onPointerDown: (n) => {
      t.current = false, !(n.pointerType !== "mouse" || n.button !== 0 || n.currentTarget.scrollWidth <= n.currentTarget.clientWidth) && n.target.closest("[data-drag-scroll], dialog") === n.currentTarget && (e6.current = { pointerId: n.pointerId, startX: n.clientX, scrollLeft: n.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (n) => {
      let a = e6.current;
      if (!a || a.pointerId !== n.pointerId) return;
      let i = n.clientX - a.startX;
      !a.active && Math.abs(i) < 5 || (a.active || (a.active = true, t.current = true, n.currentTarget.dataset.dragging = "", n.currentTarget.setPointerCapture(n.pointerId)), n.preventDefault(), n.currentTarget.scrollLeft = a.scrollLeft - i);
    }, onPointerUp: r, onPointerCancel: r, onLostPointerCapture: r, onPointerLeave: () => {
      e6.current?.active || (e6.current = null);
    }, onDragStart: (n) => n.preventDefault(), onClickCapture: (n) => {
      !t.current || n.detail === 0 || (t.current = false, n.preventDefault(), n.stopPropagation());
    } };
  }
  function kr(e6) {
    return { objectFit: e6.fit, objectPosition: e6.position, backgroundColor: e6.background };
  }
  function k5({ icon: e6 }) {
    return (0, U.jsx)("span", { className: "file-placeholder", "aria-hidden": "true", children: VD(e6) });
  }
  function l9({ children: e6, className: t }) {
    return (0, U.jsx)("div", { className: t ? `file-ground ${t}` : "file-ground", children: e6 });
  }
  function s9({ children: e6, width: t = "fluid", className: r, ...n }) {
    return (0, U.jsx)(dd.Provider, { value: lm(n.lang), children: (0, U.jsx)("main", { dir: Eb(n.lang), ...n, className: r ? `file-card ${r}` : "file-card", "data-width": t, children: e6 }) });
  }
  function Cm(e6) {
    if (/^[#./]/.test(e6)) return e6;
    try {
      return u9.includes(new URL(e6).protocol) ? e6 : void 0;
    } catch {
      return;
    }
  }
  function E5({ title: e6, fact: t, factKnown: r = false, intro: n }) {
    return (0, U.jsxs)("header", { ...We(), className: "file-header", children: [(0, U.jsx)("h1", { className: "file-title", children: e6 }), t && (0, U.jsx)("p", { className: r ? "file-fact is-known" : "file-fact", children: t }), n && (0, U.jsx)("p", { className: "file-intro", children: n })] });
  }
  function R5({ label: e6, heading: t = false, children: r }) {
    let n = wa.default.useId();
    return (0, U.jsxs)("section", { ...We("loop"), className: "file-group", "aria-labelledby": n, children: [typeof t == "string" ? (0, U.jsxs)("hgroup", { className: "file-group-head", children: [(0, U.jsx)("p", { className: "file-group-label", children: e6 }), (0, U.jsx)("h2", { id: n, className: "file-group-heading", children: t })] }) : (0, U.jsx)("h2", { id: n, className: t ? "file-group-heading" : "file-group-label", children: e6 }), r] });
  }
  function C5({ numbered: e6 = false, children: t }) {
    let r = We();
    return e6 ? (0, U.jsx)(S5.Provider, { value: true, children: (0, U.jsx)("ol", { ...r, className: "file-rows is-numbered", children: t }) }) : (0, U.jsx)("div", { ...r, className: "file-rows", children: t });
  }
  function D5({ number: e6, thumbnail: t, name: r, detail: n, value: a, valueKnown: i = false, checked: o }) {
    let l = (0, wa.useContext)(S5);
    return (0, U.jsxs)(l ? "li" : "div", { ...We("stroke"), className: "file-row", style: l && e6 !== void 0 ? { counterSet: `file-row ${e6}` } : void 0, children: [e6 !== void 0 ? (0, U.jsx)("span", { className: "file-row-slot is-number", children: e6 }) : l && (0, U.jsx)("span", { className: "file-row-slot is-number is-counted" }), o !== void 0 && (0, U.jsx)("span", { className: "file-row-check", role: "checkbox", "aria-checked": o, "aria-readonly": "true", "aria-label": r }), t && (0, U.jsxs)("span", { className: "file-row-slot", children: [(0, U.jsx)(k5, { icon: t.icon }), t.src && (0, U.jsx)("img", { src: t.src, alt: t.alt, style: kr(t), loading: "lazy" })] }), (0, U.jsxs)("div", { className: "file-row-body", children: [(0, U.jsxs)("div", { className: "file-row-main", children: [(0, U.jsx)("span", { ...p5(), className: "file-strong", children: r }), n && (0, U.jsx)("span", { className: "file-row-detail", children: n })] }), a && (0, U.jsx)("bdi", { className: i ? "file-row-value file-known" : "file-row-value", children: a })] })] });
  }
  function xd({ items: e6 }) {
    return (0, U.jsx)("dl", { ...We(), className: "file-facts", children: e6.map((t) => (0, U.jsxs)("div", { children: [(0, U.jsx)("dt", { children: t.label }), (0, U.jsx)("dd", { children: (0, U.jsx)("bdi", { children: t.value }) })] }, t.label)) });
  }
  function N5({ children: e6 }) {
    return (0, U.jsx)("div", { ...We(), className: "file-text", children: e6 });
  }
  function L5({ children: e6, sub: t }) {
    return (0, U.jsxs)("div", { ...We("stroke"), className: "file-heading", children: [(0, U.jsx)("span", { ...p5(), className: "file-strong", children: e6 }), t && (0, U.jsx)("span", { className: "file-secondary", children: t })] });
  }
  function M5({ children: e6 }) {
    return (0, U.jsx)("p", { ...We("stroke"), className: "file-p", children: e6 });
  }
  function P5({ items: e6 }) {
    return (0, U.jsx)("ul", { ...We(), className: "file-bullets", children: e6.map((t, r) => (0, U.jsx)("li", { children: t }, r)) });
  }
  function _5({ children: e6 }) {
    return (0, U.jsx)("p", { ...We("stroke"), className: "file-key file-bar", children: e6 });
  }
  function A5({ src: e6, alt: t, caption: r, fit: n = "contain", width: a, height: i }) {
    let o = n === "contain" && a && i ? { width: `min(${a}px, 100%, var(--file-photo-max-height) * ${a / i})` } : void 0;
    return (0, U.jsxs)("figure", { ...We("loop"), className: "file-figure", "data-fit": n, children: [(0, U.jsx)("img", { src: e6, alt: t, width: a, height: i, style: o, loading: "lazy" }), (0, U.jsx)("figcaption", { children: r })] });
  }
  function T5({ children: e6 }) {
    return (0, U.jsx)("p", { ...We("stroke"), className: "file-caption", children: e6 });
  }
  function F5() {
    return (0, U.jsx)("hr", { ...We(), className: "file-rule" });
  }
  function Dm({ href: e6, children: t }) {
    let r = Cm(e6);
    return r ? (0, U.jsx)("a", { className: "file-link", href: r, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(r) ? "_blank" : void 0, rel: "noopener noreferrer", children: t }) : (0, U.jsx)("span", { className: "file-link", children: t });
  }
  function $5({ title: e6, children: t, tone: r = "note" }) {
    return (0, U.jsxs)("aside", { ...We(), className: "file-callout file-bar", "data-tone": r, children: [(0, U.jsx)("span", { className: "file-strong", children: e6 }), (0, U.jsx)("span", { children: t })] });
  }
  function z5({ items: e6 }) {
    return (0, U.jsx)("ol", { ...We(), className: "file-steps", children: e6.map((t, r) => (0, U.jsxs)("li", { children: [(0, U.jsx)("span", { className: "file-step-n", children: r + 1 }), (0, U.jsx)("span", { children: t })] }, r)) });
  }
  function O5({ caption: e6, options: t, rows: r }) {
    let n = he(), a = We("loop"), i = (o, l) => ({ order: o * (r.length + 1) + l });
    return (0, U.jsx)("div", { ...a, className: "file-table-scroll", role: "region", "aria-label": e6, tabIndex: 0, children: (0, U.jsxs)("table", { className: "file-table is-options is-stacking", style: { "--file-table-columns": t.length + 1 }, children: [(0, U.jsx)("caption", { className: "file-visually-hidden", children: e6 }), (0, U.jsx)("thead", { children: (0, U.jsxs)("tr", { children: [(0, U.jsx)("th", { scope: "col", className: "file-table-corner", children: (0, U.jsx)("span", { className: "file-visually-hidden", children: n.attribute }) }), t.map((o, l) => (0, U.jsxs)("th", { scope: "col", style: i(l, 0), children: [(0, U.jsx)("span", { className: "file-strong", children: o.name }), (0, U.jsx)("span", { className: "file-secondary", children: o.number })] }, o.number))] }) }), (0, U.jsx)("tbody", { children: r.map((o, l) => (0, U.jsxs)("tr", { children: [(0, U.jsx)("th", { scope: "row", children: o.label }), o.values.map((s, u) => (0, U.jsxs)("td", { className: o.best === u ? "is-best" : void 0, style: i(u, l + 1), children: [(0, U.jsx)("span", { className: "file-cell-label", children: o.label }), (0, U.jsx)("bdi", { children: s })] }, u))] }, o.label)) })] }) });
  }
  function Nm({ items: e6, label: t, title: r = t, layout: n = "grid", bleed: a = n === "strip" && e6.length > 1 }) {
    let i = he(), o = wd(), l = We(), [s, u] = (0, wa.useState)(null), c = e6.map((f, p) => (0, U.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": i.fullScreen(f.alt), onClick: () => u(p), children: (0, U.jsx)("img", { src: f.src, alt: f.alt, style: kr(f), loading: "lazy" }) }, f.src)), d = e6.length === 1 ? " is-single" : "";
    return (0, U.jsxs)(U.Fragment, { children: [n === "strip" && e6.length > 1 ? (0, U.jsx)(b5, { ...o, ...l, bleed: a, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: c }) : (0, U.jsx)("div", { ...n === "strip" ? o : {}, ...l, className: `file-photos${d}${n === "strip" && a ? " file-bleed" : ""}`, "data-layout": n, role: "region", "aria-label": t, children: c }), s !== null && (0, U.jsx)(ss, { photos: e6, start: s, title: r, onClose: () => u(null) })] });
  }
  function I5({ children: e6 }) {
    return (0, U.jsx)("footer", { ...We(), className: "file-closing", children: e6 });
  }
  function j5({ caption: e6, columns: t, rows: r, sort: n, onSort: a, empty: i }) {
    let o = he();
    return (0, ce.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e6, tabIndex: 0, children: (0, ce.jsxs)("table", { className: "file-table file-data-table", children: [(0, ce.jsx)("caption", { children: e6 }), (0, ce.jsx)("thead", { children: (0, ce.jsx)("tr", { children: t.map((l) => (0, ce.jsx)("th", { scope: "col", "data-numeric": l.numeric || void 0, "aria-sort": l.sortable ? n?.key === l.key ? n.direction : "none" : void 0, children: l.sortable && a ? (0, ce.jsxs)("button", { type: "button", onClick: () => a(l.key), children: [l.label, n?.key === l.key && (0, ce.jsxs)("span", { "aria-hidden": "true", children: [" ", n.direction === "ascending" ? "\u2191" : "\u2193"] })] }) : l.label }, l.key)) }) }), (0, ce.jsxs)("tbody", { children: [r.map((l) => (0, ce.jsx)("tr", { children: t.map((s, u) => u === 0 ? (0, ce.jsx)("th", { scope: "row", children: l.cells[s.key] }, s.key) : (0, ce.jsx)("td", { "data-numeric": s.numeric || void 0, children: l.cells[s.key] }, s.key)) }, l.id)), r.length === 0 && (0, ce.jsx)("tr", { children: (0, ce.jsx)("td", { colSpan: t.length, children: i ?? o.noMatches }) })] })] }) });
  }
  function d9({ caption: e6, items: t, rows: r, selected: n, onSelect: a, onOpen: i, openLabel: o }) {
    let l = he(), s = (0, Ln.useRef)(null), u = (0, Ln.useRef)(/* @__PURE__ */ new Map()), c = (0, Ln.useRef)(), d = (0, Ln.useRef)(), f = wd();
    function p(g) {
      window.clearTimeout(d.current.timer), d.current.timer = window.setTimeout(v, g);
    }
    function v() {
      let g = d.current?.id;
      d.current = void 0, g !== void 0 && y();
    }
    (0, Ln.useLayoutEffect)(() => {
      if (n === void 0) {
        d.current && (d.current.id = void 0);
        return;
      }
      if (n === c.current) return;
      c.current = void 0;
      let g = u.current.get(n).offsetLeft - u.current.get(t[0].id).offsetLeft, m = s.current.scrollLeft !== g && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.clearTimeout(d.current?.timer), d.current = void 0, m && (d.current = { id: n, timer: 0 }, p(900)), s.current.scrollTo({ left: g, behavior: m ? "smooth" : "instant" });
    }, [n]), (0, Ln.useEffect)(() => () => window.clearTimeout(d.current?.timer), []);
    function y() {
      if (!a || t.length < 2) return;
      let g = s.current, m = u.current.get(t[0].id), h = u.current.get(t[1].id), w = g.scrollWidth > g.clientWidth && g.scrollLeft >= g.scrollWidth - g.clientWidth - 1 ? t[t.length - 1] : t[Math.min(t.length - 1, Math.max(0, Math.round(g.scrollLeft / (h.offsetLeft - m.offsetLeft))))];
      if (d.current) {
        d.current.id !== void 0 && w.id === d.current.id ? (window.clearTimeout(d.current.timer), d.current = void 0) : p(150);
        return;
      }
      w.id !== n && (c.current = w.id, a(w.id));
    }
    return (0, ce.jsx)("div", { ...f, ref: s, className: "file-compare", role: "region", "aria-label": e6, tabIndex: 0, style: { gridTemplateRows: `auto repeat(${r.length}, auto)` }, onScroll: y, children: t.map((g, m) => {
      let h = (0, ce.jsxs)(ce.Fragment, { children: [(0, ce.jsxs)("span", { className: "file-compare-photo", children: [g.photo ? (0, ce.jsx)("img", { src: g.photo.src, alt: g.photo.alt, style: kr(g.photo), draggable: false }) : (0, ce.jsx)("span", { className: "file-compare-photo-name", "aria-hidden": "true", children: g.title }), (0, ce.jsxs)("span", { className: "file-compare-tags", children: [(0, ce.jsx)("b", { className: "file-pill", children: g.number }), (g.tag || g.starred) && (0, ce.jsxs)("span", { className: "file-badge", children: [g.starred && c9, g.starred && !g.tag && (0, ce.jsx)("span", { className: "file-visually-hidden", children: l.recommended }), g.tag] })] })] }), (0, ce.jsx)("strong", { className: "file-hover-underline", children: g.title }), i && o && (0, ce.jsxs)("span", { className: "file-compare-open", children: [(0, ce.jsx)("span", { className: "file-hover-underline", children: o }), (0, ce.jsx)("svg", { "aria-hidden": "true", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.25", strokeLinecap: "round", strokeLinejoin: "round", children: (0, ce.jsx)("path", { d: "M10 16L13.6464 12.3536C13.8417 12.1583 13.8417 11.8417 13.6464 11.6464L10 8" }) })] })] });
      return (0, ce.jsxs)("article", { ref: (w) => {
        w ? u.current.set(g.id, w) : u.current.delete(g.id);
      }, className: `file-compare-column${g.id === n ? " is-selected" : ""}`, "aria-label": g.title, children: [i ? (0, ce.jsx)("button", { type: "button", className: "file-compare-head", "aria-label": l.view(g.title), onClick: () => i(g.id), children: h }) : (0, ce.jsx)("div", { className: "file-compare-head", children: h }), (0, ce.jsx)("dl", { children: r.map((w) => (0, ce.jsxs)("div", { className: `file-compare-cell${w.best === m ? " is-best" : ""}`, children: [(0, ce.jsx)("dt", { className: w.quiet ? "file-visually-hidden" : "file-cell-label", children: w.label }), (0, ce.jsx)("dd", { children: w.values[m] })] }, w.label)) })] }, g.id);
    }) });
  }
  function Lm() {
    let [e6, t] = (0, ma.useState)(null), [r, n] = (0, ma.useState)(p9);
    return (0, ma.useLayoutEffect)(() => {
      if (!e6) return;
      let a = () => {
        let o = Math.round(e6.getBoundingClientRect().width);
        o > 0 && n(o);
      };
      a();
      let i = new ResizeObserver(a);
      return i.observe(e6), () => i.disconnect();
    }, [e6]), [t, r];
  }
  function va({ label: e6, summary: t }) {
    return (0, T.jsxs)("div", { className: "file-chart-head", children: [(0, T.jsx)("span", { children: e6 }), t && (0, T.jsx)("span", { children: t })] });
  }
  function Mm(e6, t) {
    if (e6.some((i) => !Number.isFinite(i))) throw new RangeError("Chart values must be finite; use null for missing line observations.");
    let r = Math.min(...e6), n = Math.max(...e6);
    if (t) {
      if (!t.every(Number.isFinite) || t[0] >= t[1] || t[0] > r || t[1] < n) throw new RangeError("Chart bounds must be finite, ascending and contain every value.");
      return t;
    }
    let a = r === n ? Math.max(Math.abs(r) * 0.15, 1) : (n - r) * 0.15;
    return [r - a, n + a];
  }
  function m9(e6) {
    let t = Math.floor(30 / e6.length);
    return e6.length <= 5 && e6.every((r) => nb(r.label) <= t * 2 && r.label.split(/\s+/).every((n) => nb(n) <= t));
  }
  function U5({ label: e6, data: t, format: r = H5, max: n, orientation: a = m9(t) ? "columns" : "bars" }) {
    let i = he(), o = We(), [l, s] = Lm();
    if (t.length === 0) return (0, T.jsxs)("div", { ...o, className: "file-chart", children: [(0, T.jsx)(va, { label: e6 }), (0, T.jsx)("p", { children: i.noData })] });
    let u = [0, ...t.map((m) => m.value)], c = Math.min(...u), d = Math.max(...u), f = c === d ? 1 : (d - c) * 0.15, p = [c < 0 ? c - f : 0, d > 0 ? d + f : c < 0 ? 0 : 1], v = Mm(u, n === void 0 ? p : [c, n]), y = od({ domain: v, range: a === "bars" ? [0, 250] : [120, 0] }), g = CD({ domain: t.map((m, h) => h), range: [0, s], paddingInner: 0.35, paddingOuter: 0.35 / 2 });
    return (0, T.jsxs)("div", { ...o, className: "file-chart file-drawn-chart", children: [(0, T.jsx)(va, { label: e6 }), a === "bars" ? c < 0 ? (0, T.jsx)("div", { className: "file-signed-bars", children: t.map((m, h) => (0, T.jsxs)("div", { children: [(0, T.jsx)("span", { children: m.label }), (0, T.jsxs)("svg", { viewBox: "0 -2 250 24", preserveAspectRatio: "none", "aria-hidden": "true", children: [(0, T.jsx)("line", { x1: y(0), x2: y(0), y1: -2, y2: 22, stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" }), (0, T.jsx)(Zx, { x: Math.min(y(0), y(m.value)), y: 2, width: Math.abs(y(m.value) - y(0)), height: 16, fill: m.highlight ? ti : ns(h), stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" })] }), (0, T.jsx)("strong", { children: (0, T.jsx)("bdi", { children: m.valueLabel ?? r(m.value) }) })] }, h)) }) : (0, T.jsx)("div", { className: "file-filled-bars", children: t.map((m, h) => (0, T.jsxs)("div", { className: "file-filled-bar", children: [(0, T.jsx)("span", { className: "file-filled-bar-fill", style: { width: m.value > 0 ? `max(8px, ${m.value / (n ?? d) * 100}%)` : 0, background: ti } }), m.icon && (0, T.jsx)("span", { className: "file-filled-bar-icon", "aria-hidden": "true", children: m.icon }), (0, T.jsx)("span", { className: "file-filled-bar-label", children: m.label }), (0, T.jsxs)("span", { className: "file-filled-bar-value", children: [(0, T.jsx)("bdi", { children: m.valueLabel ?? r(m.value) }), m.note && (0, T.jsxs)("span", { className: "file-filled-bar-note", children: [" ", (0, T.jsx)("bdi", { children: m.note })] })] })] }, h)) }) : (0, T.jsxs)(T.Fragment, { children: [(0, T.jsxs)("svg", { ref: l, viewBox: `0 -20 ${s} 160`, role: "img", "aria-label": `${e6}: ${t.map((m) => `${m.label} ${m.valueLabel ?? r(m.value)}`).join(", ")}`, children: [y.ticks(3).map((m) => (0, T.jsx)("line", { x1: 0, x2: s, y1: y(m), y2: y(m), stroke: m === 0 ? "var(--ds-ink-2)" : "var(--ds-hairline)" }, m)), t.map((m, h) => (0, T.jsxs)("g", { children: [(0, T.jsx)(Zx, { x: g(h), y: Math.min(y(0), y(m.value)), width: g.bandwidth(), height: Math.abs(y(m.value) - y(0)), fill: m.highlight ? ti : ns(h), stroke: "var(--ds-ink-2)" }), (0, T.jsx)("text", { x: g(h) + g.bandwidth() / 2, y: y(m.value) + (m.value < 0 ? 16 : -6), textAnchor: "middle", fill: "var(--ds-ink-2)", fontSize: 13, children: m.valueLabel ?? r(m.value) })] }, h))] }), (0, T.jsx)("div", { className: "file-bar-labels", children: t.map((m, h) => (0, T.jsx)("span", { children: m.label }, h)) })] })] });
  }
  function g9({ label: e6, summary: t, headline: r, xName: n, data: a, points: i, range: o, target: l, xLabels: s = [], format: u = H5 }) {
    let c = he(), [d, f] = (0, ma.useState)(null), p = (0, ma.useRef)(false), [v, y] = Lm(), g = a ?? i.map((_, I) => ({ x: I, value: _, label: c.observationNumber(I + 1) }));
    if (g.some((_, I) => !Number.isFinite(_.x) || I > 0 && _.x <= g[I - 1].x)) throw new RangeError("Line coordinates must be finite and strictly increasing.");
    let m = g.filter((_) => _.value !== null), h = m.map((_) => _.value);
    if (l && h.push(l.value), h.some((_) => !Number.isFinite(_))) throw new RangeError("Line values must be finite; use null for missing observations.");
    if (m.length === 0) return (0, T.jsxs)("div", { className: "file-chart", children: [(0, T.jsx)(va, { label: e6, summary: t }), (0, T.jsx)("p", { children: c.noData })] });
    let w = Mm(h, o), b = a === void 0 && o ? (o[1] - o[0]) * 0.15 : 0, k = od({ domain: [w[0] - b, w[1] + b], range: [120, 0] }), L = g[0].x, D = g[g.length - 1].x, x = od({ domain: L === D ? [L - 1, D + 1] : [L, D], range: [8, y - 8] }), S = m.find((_) => _.x === d), N = S ?? m[m.length - 1], A = (_) => {
      let I = _.currentTarget.getBoundingClientRect(), re = (_.clientX - I.left) / I.width * y;
      f(m.reduce((Q, oe) => Math.abs(x(oe.x) - re) < Math.abs(x(Q.x) - re) ? oe : Q).x);
    }, P = (_) => `${_.label}: ${_.value === null ? c.noObservation : _.valueLabel ?? u(_.value)}`;
    return (0, T.jsxs)("div", { className: "file-chart file-drawn-chart", children: [r ? (0, T.jsx)("div", { className: "file-chart-head is-headline", "aria-live": "polite", children: (0, T.jsx)("span", { children: r(N) }) }) : (0, T.jsx)(va, { label: e6, summary: t }), (0, T.jsxs)("svg", { ref: v, className: "file-line-plot", viewBox: `0 -15 ${y} 150`, "aria-label": e6, role: "group", onPointerDown: (_) => {
      _.currentTarget.setPointerCapture(_.pointerId), p.current = true, A(_);
    }, onPointerMove: (_) => {
      (p.current || _.pointerType === "mouse") && A(_);
    }, onPointerUp: (_) => {
      p.current = false, _.pointerType !== "mouse" && f(null);
    }, onPointerCancel: () => {
      p.current = false, f(null);
    }, onPointerLeave: (_) => {
      _.pointerType === "mouse" && !p.current && f(null);
    }, children: [l && (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)("line", { x1: 0, x2: y, y1: k(l.value), y2: k(l.value), stroke: "var(--ds-ink-2)", strokeDasharray: "4 3" }), (0, T.jsx)("text", { x: 4, y: k(l.value) - 7, fill: "var(--ds-ink-2)", stroke: "var(--ds-white)", strokeWidth: 3, paintOrder: "stroke", fontSize: 13, children: l.label })] }), S && (0, T.jsx)("line", { x1: x(S.x), x2: x(S.x), y1: 0, y2: 120, stroke: "var(--ds-ink-3)", strokeDasharray: "4 3", "aria-hidden": "true" }), (0, T.jsx)(OD, { data: g, defined: (_) => _.value !== null, x: (_) => x(_.x), y: (_) => k(_.value), stroke: ti, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" }), m.map((_) => (0, T.jsx)("g", { tabIndex: 0, role: "img", "aria-label": P(_), onFocus: () => f(_.x), onBlur: () => f(null), children: (0, T.jsx)("circle", { cx: x(_.x), cy: k(_.value), r: 12, fill: "transparent" }) }, _.x)), S && (0, T.jsx)("circle", { cx: x(S.x), cy: k(S.value), r: 6, fill: ti, stroke: "var(--ds-white)", strokeWidth: 2, "aria-hidden": "true" })] }), (0, T.jsx)("div", { className: "file-chart-axis", children: (s.length ? s : [g[0].label, ...g.length > 1 ? [g[g.length - 1].label] : []]).map((_, I) => (0, T.jsx)("span", { children: _ }, I)) }), !r && (0, T.jsxs)("p", { className: "file-chart-readout", "aria-live": "polite", children: [(0, T.jsx)("span", { className: "file-chart-readout-point", children: P(N) }), l && (0, T.jsxs)("span", { children: [" \xB7 ", l.label, ": ", u(l.value), " (dashed)"] })] }), (0, T.jsxs)("details", { children: [(0, T.jsx)("summary", { children: c.chartData }), (0, T.jsx)(j5, { caption: e6, columns: [{ key: "label", label: n ?? c.observation }, { key: "value", label: c.value, numeric: true }], rows: g.map((_) => ({ id: String(_.x), cells: { label: _.label, value: _.value === null ? c.noObservation : _.valueLabel ?? u(_.value) } })) })] })] });
  }
  function v9(e6, t, r, n, a) {
    let i = (l) => e6.length === 1 ? t / 2 : l / (e6.length - 1) * t, o = od({ domain: Mm(e6, n < a ? [n, a] : void 0), range: [r, 0] });
    return { x: i, y: o, d: e6.map((l, s) => `${s ? "L" : "M"}${i(s).toFixed(1)} ${o(l).toFixed(1)}`).join(" ") };
  }
  function y9({ label: e6, series: t }) {
    let r = he(), n = 110, a = 28;
    return (0, T.jsxs)("div", { className: "file-chart", children: [(0, T.jsx)(va, { label: e6 }), (0, T.jsx)("div", { className: "file-sparklines", children: t.map((i, o) => {
      if (i.values.length === 0) return (0, T.jsxs)("div", { className: "file-sparkline", children: [(0, T.jsx)("span", { children: i.name }), (0, T.jsx)("span", { children: r.noData }), (0, T.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
      let { d: l, x: s, y: u } = v9(i.values, n, a, Math.min(...i.values), Math.max(...i.values)), c = i.highlight ? ti : ns(o);
      return (0, T.jsxs)("div", { className: i.highlight ? "file-sparkline is-highlight" : "file-sparkline", children: [(0, T.jsx)("span", { className: "file-sparkline-name", children: i.name }), (0, T.jsxs)("svg", { viewBox: `0 -2 ${n} ${a + 4}`, "aria-hidden": "true", children: [(0, T.jsx)("path", { d: l, fill: "none", stroke: c, strokeWidth: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }), (0, T.jsx)("circle", { cx: s(i.values.length - 1), cy: u(i.values[i.values.length - 1]), r: 3, fill: c })] }), (0, T.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
    }) })] });
  }
  function w9({ label: e6, legend: t, rows: r, range: n, scaleLabels: a }) {
    let i = he(), [o, l] = n, s = (u) => `${((u - o) / (l - o || 1) * 100).toFixed(1)}%`;
    return (0, T.jsxs)("div", { className: "file-chart", children: [(0, T.jsx)(va, { label: e6, summary: t ?? i.rangeLegend }), (0, T.jsx)("div", { className: "file-ranges", children: r.map((u, c) => (0, T.jsxs)("div", { className: u.highlight ? "file-range is-highlight" : "file-range", style: h9(c), children: [(0, T.jsx)("span", { className: "file-range-label", title: u.label, children: u.label }), (0, T.jsxs)("div", { className: "file-range-track", children: [(0, T.jsx)("div", { className: "file-range-line" }), (0, T.jsx)("div", { className: "file-range-band", style: { left: s(u.low), width: `calc(${s(u.high)} - ${s(u.low)})` } }), (0, T.jsx)("div", { className: "file-range-now", style: { left: s(u.now) } })] })] }, u.label)) }), (0, T.jsxs)("div", { className: "file-range-scale", children: [(0, T.jsx)("span", {}), (0, T.jsx)("div", { className: "file-chart-axis", children: a.map((u, c) => (0, T.jsx)("span", { children: u }, c)) })] })] });
  }
  function x9({ label: e6, legend: t, parts: r }) {
    let n = (a) => sd[a % sd.length];
    return (0, T.jsxs)("div", { className: "file-chart", children: [(0, T.jsx)(va, { label: e6, summary: t }), (0, T.jsx)("div", { className: "file-stack-bar", role: "img", "aria-label": r.map((a) => `${a.label} ${a.share}%`).join(", "), children: r.map((a, i) => (0, T.jsx)("div", { style: { width: `${a.share}%`, background: n(i) } }, a.label)) }), (0, T.jsx)("div", { className: "file-stack-parts", children: r.map((a, i) => (0, T.jsxs)("div", { className: "file-stack-part", children: [(0, T.jsx)("span", { className: "file-stack-swatch", style: { background: n(i) } }), (0, T.jsx)("span", { children: a.label }), (0, T.jsxs)("bdi", { className: "file-stack-share", children: [a.share, "%"] })] }, a.label)) })] });
  }
  function b9({ label: e6, summary: t, points: r, xRange: n, yRange: a, axisLabels: i }) {
    let [o, l] = Lm(), s = l - 8, u = 140, c = (f) => (f - n[0]) / (n[1] - n[0] || 1) * s, d = (f) => u - (f - a[0]) / (a[1] - a[0] || 1) * u;
    return (0, T.jsxs)("div", { className: "file-chart", children: [(0, T.jsx)(va, { label: e6, summary: t }), (0, T.jsxs)("svg", { ref: o, viewBox: `-4 -8 ${s + 8} ${u + 12}`, role: "img", "aria-label": e6, children: [f9.map((f) => (0, T.jsx)("line", { x1: 0, x2: s, y1: f * u, y2: f * u, stroke: "var(--ds-hairline)", strokeWidth: 1 }, f)), r.map((f, p) => (0, T.jsxs)("g", { children: [(0, T.jsx)("circle", { cx: c(f.x), cy: d(f.y), r: f.highlight ? 6 : 5, fill: f.highlight ? ti : ns(p), stroke: "var(--ds-white)", strokeWidth: 1.5 }), f.label && (0, T.jsx)("text", { x: c(f.x) + 10, y: d(f.y) + 4, fontSize: 13, fontFamily: "var(--file-font-text)", fontWeight: f.highlight ? 600 : 350, style: { letterSpacing: "calc(-0.01em * var(--file-tracking))" }, fill: f.highlight ? "var(--ds-teal)" : "var(--ds-ink-2)", children: f.label })] }, p))] }), (0, T.jsx)("div", { className: "file-chart-axis", children: i.map((f, p) => (0, T.jsx)("span", { children: f }, p)) })] });
  }
  function B5({ children: e6 }) {
    return (0, ze.jsx)("div", { ...We(), className: "file-photo-cards", children: e6 });
  }
  function V5({ name: e6, detail: t, icon: r, photo: n, checked: a = false, open: i, onOpenChange: o, children: l }) {
    let [s, u] = (0, wo.useState)(false), c = wo.Children.count(l) > 0, d = (p) => {
      u(p), o?.(p);
    }, f = (0, ze.jsxs)(ze.Fragment, { children: [(0, ze.jsxs)("span", { className: "file-photo-card-photo", children: [(0, ze.jsx)(k5, { icon: r }), n?.src && (0, ze.jsx)("img", { src: n.src, alt: n.alt, style: kr(n), loading: "lazy" }), a && (0, ze.jsx)("span", { className: "file-row-check file-photo-card-check", role: "checkbox", "aria-checked": true, "aria-readonly": "true", "aria-label": e6 })] }), (0, ze.jsxs)("span", { className: "file-photo-card-text", children: [(0, ze.jsx)("span", { className: "file-strong", children: e6 }), t && (0, ze.jsx)("span", { className: "file-row-detail", children: t })] })] });
    return (0, ze.jsxs)("div", { ...We("loop"), className: "file-photo-card", children: [c ? (0, ze.jsx)("button", { type: "button", className: "file-photo-card-open", "aria-haspopup": "dialog", onClick: () => d(true), children: f }) : f, c && (i ?? s) && (0, ze.jsx)(W5, { name: e6, detail: t, photo: n, onClose: () => d(false), children: l })] });
  }
  function W5({ name: e6, detail: t, photo: r, onClose: n, children: a }) {
    let i = (0, wo.useRef)(null), o = Sm(i, true), l = () => o(n);
    return (0, ze.jsxs)("dialog", { ref: i, className: "file-drawer", "aria-label": e6, tabIndex: -1, onCancel: (s) => {
      s.preventDefault(), l();
    }, onClick: (s) => {
      if (s.target !== s.currentTarget) return;
      let u = s.currentTarget.getBoundingClientRect();
      (s.clientX < u.left || s.clientX > u.right || s.clientY < u.top || s.clientY > u.bottom) && l();
    }, children: [(0, ze.jsx)("div", { className: "file-drawer-header", children: (0, ze.jsx)(vd, { onClick: l }) }), r?.src && (0, ze.jsx)("img", { className: "file-drawer-photo", src: r.src, alt: r.alt, style: kr(r) }), (0, ze.jsxs)("hgroup", { className: "file-drawer-title", children: [(0, ze.jsx)("h2", { className: "file-group-heading", children: e6 }), t && (0, ze.jsx)("p", { className: "file-secondary", children: t })] }), (0, ze.jsx)("div", { className: "file-drawer-body", children: a })] });
  }
  function R9(e6) {
    let t = [];
    for (let r of e6.filter((n) => n.width > 0 && n.height > 0).sort((n, a) => n.top - a.top || n.left - a.left)) {
      let n = r.top + r.height / 2, a = t.find((l) => n > l.top && n < l.top + l.height);
      if (!a) {
        t.push({ ...r });
        continue;
      }
      let i = Math.max(a.left + a.width, r.left + r.width), o = Math.max(a.top + a.height, r.top + r.height);
      a.left = Math.min(a.left, r.left), a.top = Math.min(a.top, r.top), a.width = i - a.left, a.height = o - a.top, a.size = Math.max(a.size, r.size);
    }
    return t;
  }
  function S9(e6, t, r) {
    if (r.length === 0) return "loop";
    if (e6 === "stroke" || e6 === "loop") return e6;
    let n = r[r.length - 1];
    return r.length <= 3 && t.height <= n.top + n.height - r[0].top + 48 ? "stroke" : "loop";
  }
  function C9(e6) {
    let t = Math.round(Math.max(160, Math.min(550, 1400 / e6)));
    return Array.from({ length: e6 }, (r, n) => ({ ms: t, wait: Math.round(n * t * 0.9) }));
  }
  function D9(e6, t, r, n, a, i) {
    let o = r - e6 - 2 * a, l = n - t - 2 * a, s = Math.PI / 2 * a, u = (d, f, p, v) => {
      let y = p + v / s * (Math.PI / 2);
      return [d + a * Math.cos(y), f + a * Math.sin(y), Math.cos(y), Math.sin(y)];
    }, c = i;
    return c < o ? [e6 + a + c, t, 0, -1] : (c -= o, c < s ? u(r - a, t + a, -Math.PI / 2, c) : (c -= s, c < l ? [r, t + a + c, 1, 0] : (c -= l, c < s ? u(r - a, n - a, 0, c) : (c -= s, c < o ? [r - a - c, n, 0, 1] : (c -= o, c < s ? u(e6 + a, n - a, Math.PI / 2, c) : (c -= s, c < l ? [e6, n - a - c, -1, 0] : u(e6 + a, t + a, Math.PI, c - l)))))));
  }
  function N9(e6, t) {
    let r = 7 + e6 + 3, n = 7 + t + 3, a = Math.min(18, (r - 4) / 4, (n - 4) / 4), i = r - 4 - 2 * a, o = 2 * (i + n - 4 - 2 * a) + 2 * Math.PI * a, l = i * 0.22, s = i * 0.42, u = Math.round(Math.max(24, Math.min(160, (o + s) / 8))), c = [];
    for (let f = 0; f <= u; f++) {
      let p = (o + s) * f / u, [v, y, g, m] = D9(4, 4, r, n, a, (l + p) % o), h = (p < o ? -1 + 4.7 * (p / o) : 3.7 + 3.2 * ((p - o) / s)) + 0.7 * Math.sin(p / 23 + e6) + 0.4 * Math.sin(p / 9 + t);
      c.push([v + g * h, y + m * h]);
    }
    let d = `M${Kt(c[0][0])} ${Kt(c[0][1])}`;
    for (let f = 0; f < c.length - 1; f++) {
      let p = c[Math.max(0, f - 1)], v = c[f], y = c[f + 1], g = c[Math.min(c.length - 1, f + 2)];
      d += `C${Kt(v[0] + (y[0] - p[0]) / 6)} ${Kt(v[1] + (y[1] - p[1]) / 6)} ${Kt(y[0] - (g[0] - v[0]) / 6)} ${Kt(y[1] - (g[1] - v[1]) / 6)} ${Kt(y[0])} ${Kt(y[1])}`;
    }
    return d;
  }
  function L9(e6, t) {
    return Math.round(Math.max(600, Math.min(1100, 400 + (e6 + t) * 0.96)));
  }
  function M9(e6) {
    for (let t of e6.querySelectorAll("[data-live-mark-text]")) if (t.closest("[data-live-id]") === e6) return t;
    return e6;
  }
  function P9(e6) {
    let t = [], r = e6.closest("dialog"), n = document.createTreeWalker(e6, NodeFilter.SHOW_TEXT), a = document.createRange();
    for (let i = n.nextNode(); i; i = n.nextNode()) {
      let o = i.parentElement;
      if (o.closest(".file-visually-hidden") || o.closest("dialog") !== r) continue;
      let l = parseFloat(getComputedStyle(o).fontSize);
      a.selectNodeContents(i);
      for (let s of a.getClientRects()) t.push({ left: s.left, top: s.top, width: s.width, height: s.height, size: l });
    }
    return t;
  }
  function ob(e6) {
    for (let r of e6.children) if (r.hasAttribute("data-live-marks")) return r;
    let t = document.createElement("div");
    return t.setAttribute("data-live-marks", ""), t.setAttribute("aria-hidden", "true"), e6.appendChild(t);
  }
  function lb(e6, t, r, n, a, i, o) {
    let l = document.createElementNS(ab, "svg");
    l.setAttribute("data-live-drawn", e6), l.setAttribute("data-live-for", t), l.setAttribute("viewBox", n), l.setAttribute("preserveAspectRatio", "none"), l.style.cssText = `left:${Kt(r.left)}px;top:${Kt(r.top)}px;width:${Kt(r.width)}px;height:${Kt(r.height)}px;--file-live-mark-ms:${i}ms;--file-live-mark-wait:${o}ms`;
    let s = document.createElementNS(ab, "path");
    return s.setAttribute("d", a), e6 === "loop" && s.setAttribute("pathLength", "1"), l.appendChild(s), l;
  }
  function _9(e6, t) {
    let r = () => {
      a.disconnect(), clearTimeout(i);
    }, n = () => {
      r(), t();
    }, a = new IntersectionObserver((o) => o.some((l) => l.intersectionRatio >= 0.5) && n(), { threshold: 0.5 }), i = setTimeout(n, 700);
    return a.observe(e6), r;
  }
  function V9(e6, t) {
    let r = e6.getBoundingClientRect(), n = e6.querySelector(".file-drawer-header")?.getBoundingClientRect().bottom ?? r.top, a = r.bottom - (parseFloat(getComputedStyle(e6).scrollPaddingBottom) || 0), i = t.getBoundingClientRect(), o = a - n - i.height, l = o > 2 * sb ? o / 2 : sb, s = matchMedia("(prefers-reduced-motion: reduce)").matches;
    e6.scrollTo({ top: e6.scrollTop + i.top - n - l, behavior: s ? "auto" : "smooth" });
  }
  function Kl(e6, t) {
    let r = e6.nodes;
    return t.op === "update" ? r[t.id] !== void 0 : t.op === "add" ? !t.parent || r[t.parent] !== void 0 : true;
  }
  function us(e6, t) {
    return jt.start(), (0, Y5.useSyncExternalStore)(jt.subscribe, e6, () => t);
  }
  function G5() {
    return us(jt.getOpen, null);
  }
  function Pm(e6) {
    return us(() => jt.getData().nodes[e6], void 0);
  }
  function Y9(e6, t) {
    let r = us(() => jt.getData().values[e6], void 0);
    return r === void 0 ? t : r;
  }
  function K5(e6) {
    return us(() => jt.items(e6), q5);
  }
  function q9(e6) {
    return us(() => jt.item(e6), void 0);
  }
  function X5(e6) {
    return { add(t, r) {
      jt.getData().nodes[e6] || jt.write({ actor: Kc, op: "add", id: e6, type: um });
      let n = G9();
      return jt.edit({ actor: Kc, op: "add", id: n, parent: e6, after: r, type: cm, props: t }), n;
    }, update(t, r) {
      jt.edit({ actor: Kc, op: "update", id: t, props: r });
    }, remove(t) {
      jt.edit({ actor: Kc, op: "remove", id: t });
    } };
  }
  function fa(e6) {
    return typeof e6 == "string" ? e6 : "";
  }
  function K9({ props: e6, children: t }) {
    let r = (0, Cb.useContext)(md), n = G5() === r;
    return (0, Se.jsx)(V5, { ...e6, open: n, onOpenChange: (a) => jt.setOpen(a ? r : null), children: t });
  }
  function Q5(e6, t) {
    let r = `${e6}:${t}`;
    ub.has(r) || (ub.add(r), console.warn(`Live node "${e6}" ${t}`));
  }
  function J5({ id: e6 }) {
    return (0, Ql.jsx)(Z5, { id: e6 });
  }
  function Z9(e6) {
    let t = Pm(e6)?.children ?? [], r = G5() === e6;
    return (0, e3.useEffect)(() => jt.holdDetail(e6), [e6]), { open: r, onOpenChange: (n) => jt.setOpen(n ? e6 : null), children: t.map((n) => (0, t3.jsx)(J5, { id: n }, n)) };
  }
  function J9(e6) {
    return (0, r3.jsx)("div", { ...e6, "data-live-reveal": "" });
  }
  function bd(e6, t) {
    let r = he(), n = sm(), a = Rb(), i = (0, ni.useRef)(false), [o, l] = (0, ni.useState)(null), [s, u] = (0, ni.useState)([]), c = t.photos[0], d = { type: "shopping.action", action: eN, product: { number: e6.number, title: e6.title, brand: e6.brand ?? null, meta: e6.meta ?? null, price: t.price ?? null, merchant: t.merchant ?? null, selection: t.selection ?? null, variant: t.variant ? { title: t.options.map((h) => t.chosen[h.name]).join(" / "), price: t.variant.price ?? null, listPrice: t.variant.listPrice ?? null, available: t.variant.available ?? null } : null, photo: c ? { src: c.src.startsWith("data:") ? null : c.src, alt: c.alt } : null } }, f = JSON.stringify(d), p = o === f, v = s.includes(f), y = p && ["forbidden", "invalid", "conflict", "unavailable"].includes(a.status), g = async () => {
      if (!(i.current || a.canRetry || v || y)) {
        i.current = true, l(f);
        try {
          (await a.wakeAgent({ content: d })).status === "accepted" && u((h) => [...h, f]);
        } finally {
          i.current = false;
        }
      }
    }, m = async () => {
      (await a.retry()).status === "accepted" && o && u((h) => [...h, o]);
    };
    return { available: n.isOwnerUser && e6.merchant !== void 0, soldOut: t.variant?.available === false, sent: v, sending: p && a.busy, disabled: a.busy || a.canRetry || a.retryAfterMs > 0 || v || y, send: g, canRetry: a.canRetry, retryDisabled: a.busy || a.retryAfterMs > 0, retry: m, message: o && !["sending", "accepted"].includes(a.status) ? `${r.buy}: ${a.message}` : "" };
  }
  function tN() {
    return (0, Pt.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, Pt.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  function rN(e6) {
    return { idle: { icon: (0, Pt.jsx)(tN, {}), label: e6.buy, shortLabel: e6.buyShort, variant: "active" }, sending: { icon: (0, Pt.jsx)(YD, { className: "file-spin", size: 16 }), label: e6.sending, variant: "disabled" }, sent: { icon: (0, Pt.jsx)(g5, { size: 16 }), label: e6.sentToInstinct, shortLabel: e6.sent, variant: "disabled" } };
  }
  function as({ state: e6 }) {
    let t = he(), r = (0, ni.useMemo)(() => rN(t), [t]);
    return e6.available ? (0, Pt.jsxs)("div", { className: "file-product-actions", children: [e6.soldOut ? (0, Pt.jsx)(Pn, { className: "file-product-action", pill: true, "data-kind": "checkout", disabled: true, children: t.soldOut }) : (0, Pt.jsx)(Pn, { className: "file-product-action", variant: "primary", pill: true, "data-kind": "checkout", "data-sent": e6.sent, disabled: e6.disabled, onClick: () => {
      e6.send();
    }, states: r, state: e6.sending ? "sending" : e6.sent ? "sent" : "idle" }), e6.message && (0, Pt.jsxs)("p", { className: "file-caption", role: "status", children: [e6.message, e6.canRetry && (0, Pt.jsxs)(Pt.Fragment, { children: [" ", (0, Pt.jsx)("button", { type: "button", disabled: e6.retryDisabled, onClick: () => {
      e6.retry();
    }, children: t.retry })] })] }), (0, Pt.jsx)("p", { className: "file-visually-hidden", role: "status", children: e6.sent ? t.sentToInstinct : "" })] }) : null;
  }
  function n3(e6, t = kb(void 0)) {
    return e6.badge ?? (e6.pick ? t.myPick : void 0);
  }
  function a3({ selection: e6 }) {
    let t = he();
    return e6.options.length === 0 ? null : (0, ut.jsxs)("div", { className: "file-variants", children: [e6.options.map((r) => {
      let n = e6.chosen[r.name], a = Object.entries(e6.chosen).filter(([i]) => i !== r.name).map(([, i]) => i).join(", ");
      return (0, ut.jsxs)("fieldset", { className: "file-variant", children: [(0, ut.jsx)("legend", { className: "file-visually-hidden", children: r.name }), (0, ut.jsxs)("span", { className: "file-variant-label", "aria-hidden": "true", children: [r.name, n ? (0, ut.jsx)("b", { children: n }) : (0, ut.jsx)("em", { children: t.choose(r.name) })] }), r === e6.swatches ? (0, ut.jsx)("div", { className: "file-swatches", children: r.values.map(({ value: i, swatch: o }) => {
        let l = e6.soldOut(r.name, i);
        return (0, ut.jsx)("button", { type: "button", className: l ? "file-swatch is-out" : "file-swatch", style: { background: o }, "aria-pressed": i === n, "aria-label": l ? t.valueSoldOut(i, a) : i, title: i, onClick: () => e6.choose(r.name, i) }, i);
      }) }) : (0, ut.jsx)("div", { className: "file-sizes", children: r.values.map(({ value: i }) => {
        let o = e6.soldOut(r.name, i);
        return (0, ut.jsx)(Pn, { className: "file-size", selected: i === n, unavailable: o, "aria-label": o ? t.valueSoldOut(i, "") : void 0, onClick: () => e6.choose(r.name, i), children: i }, i);
      }) })] }, r.name);
    }), e6.stock && (0, ut.jsx)("p", { className: e6.stock.tone ? `file-stock ${e6.stock.tone}` : "file-stock", "aria-live": "polite", children: e6.stock.text })] });
  }
  function _m({ view: e6, limit: t, label: r = false, choose: n }) {
    let a = e6.swatches;
    if (!a || a.values.length < 2) return null;
    let i = a.values.slice(0, t), o = a.values.length - i.length;
    return (0, ut.jsxs)("div", { className: "file-dots", role: n ? "group" : "img", "aria-label": n ? a.name : `${a.name}: ${a.values.map(({ value: l }) => l).join(", ")}`, children: [i.map(({ value: l, swatch: s }) => {
      let u = l === e6.swatch ? "file-dot is-current" : "file-dot";
      return n ? (0, ut.jsx)("button", { type: "button", className: u, style: { background: s }, "aria-pressed": l === e6.swatch, "aria-label": l, title: l, onClick: () => n(a.name, l) }, l) : (0, ut.jsx)("span", { className: u, style: { background: s } }, l);
    }), o > 0 && (0, ut.jsxs)("span", { className: "file-dots-more", children: ["+", o] }), r && e6.swatch && (0, ut.jsx)("span", { className: "file-dots-label", children: e6.swatch })] });
  }
  function o3(e6, t = String) {
    let r = e6.filter((n) => n !== void 0);
    return r.length > 0 && r.every((n) => t(n) === t(r[0])) ? r[0] : void 0;
  }
  function aN({ options: e6, swatches: t, chosen: r, unresolved: n, variants: a, variant: i }, o) {
    if (!a.some((c) => c.available !== void 0 || c.low !== void 0)) return;
    if (n.length > 0) return { text: o.chooseToCheckStock(n[0]) };
    if (!i) return;
    let l = e6.map((c) => r[c.name]), s = e6.filter((c) => c !== t).map((c) => r[c.name]), u = (s.length > 0 ? s : l).join(", ");
    if (i.available === false) return { tone: "is-out", text: o.soldOutIn(l.join(", ")) };
    if (i.low !== void 0) return { tone: "is-low", text: o.onlyLeftIn(i.low, u) };
    if (i.available) return { tone: "is-in", text: o.inStockIn(u) };
  }
  function l3(e6, t, r) {
    let n = e6.options ?? [], a = n.length > 0 ? e6.variants ?? [] : [], i = e6.selection, o = n.find((b) => b.values.length > 0 && b.values.every((k) => k.swatch)), l = n.length === 0 ? i?.options ?? {} : Object.fromEntries(n.flatMap((b) => {
      let k = t[b.name] ?? i?.options[b.name] ?? (b.values.length === 1 ? b.values[0].value : void 0);
      return k !== void 0 && b.values.some((L) => L.value === k) ? [[b.name, k]] : [];
    })), s = n.length === 0 ? i?.unresolvedOptions ?? [] : n.filter((b) => l[b.name] === void 0).map((b) => b.name), u = a.filter((b) => cb(b, l)), c = n.length > 0 && s.length === 0 ? u[0] : void 0, d = o ? l[o.name] : void 0, f = db(u) ?? (o && d !== void 0 ? db(a.filter((b) => b.options[o.name] === d)) : void 0) ?? e6.photos, p = u.filter((b) => b.price !== void 0), v = p.length > 0 && p.every((b) => b.price === p[0].price) ? p[0].price : void 0, y = v !== void 0 && p.every((b) => b.listPrice === p[0].listPrice) ? p[0].listPrice : void 0, g = (b, k) => a.filter((L) => cb(L, { ...l, [b]: k })), m = Object.entries(t).every(([b, k]) => i?.options[b] === k), h = c?.id ?? (m ? i?.variantId : void 0), w = Object.fromEntries(Object.entries(i?.options ?? {}).filter(([b]) => !n.some((k) => k.name === b)));
    return { options: n, swatches: o, swatch: d, chosen: l, unresolved: s, variant: c, photos: f, price: v ?? e6.price, listPrice: y, merchant: e6.merchant && { name: e6.merchant.name, url: o3(u.map((b) => b.url)) ?? e6.merchant.url }, stock: aN({ options: n, swatches: o, chosen: l, unresolved: s, variants: a, variant: c }, r), soldOut: (b, k) => {
      let L = g(b, k);
      return L.length > 0 && L.every((D) => D.available === false);
    }, offered: (b, k) => a.length === 0 || g(b, k).length > 0, selection: n.length === 0 ? i : { ...i?.productId !== void 0 && { productId: i.productId }, ...h !== void 0 && { variantId: h }, options: { ...w, ...l }, unresolvedOptions: s, ...i?.quantity !== void 0 && { quantity: i.quantity } } };
  }
  function s3(e6) {
    let t = he(), [r, n] = (0, i3.useState)({});
    return e6.map((a) => ({ ...l3(a, r[a.number] ?? {}, t), choose: (i, o) => n((l) => ({ ...l, [a.number]: { ...l[a.number], [i]: o } })) }));
  }
  function ds(e6) {
    return s3([e6])[0];
  }
  function ud(e6) {
    return e6.options.find((t) => t !== e6.swatches);
  }
  function u3(e6, t) {
    let r = ud(e6);
    if (!r) return;
    let n = r.values.map((o) => o.value).filter((o) => e6.offered(r.name, o)), a = n.filter((o) => !e6.soldOut(r.name, o)), i = n.filter((o) => e6.soldOut(r.name, o));
    if (n.length !== 0) return a.length === 0 ? t.soldOut : i.length === 0 ? fb(a) : a.length === 1 ? t.inStock(a[0]) : `${fb(a)} \xB7 ${t.valuesSoldOut(i)}`;
  }
  function kd({ product: e6 }) {
    let t = n3(e6, he());
    return (0, ae.jsxs)("span", { className: "file-tags", children: [(0, ae.jsx)("span", { className: e6.pick ? "file-pill is-pick" : "file-pill", children: e6.number }), t && (0, ae.jsx)("span", { className: "file-badge", children: t })] });
  }
  function iN({ product: e6, photo: t }) {
    let r = he();
    return (0, ae.jsxs)("span", { className: "file-product-photo", children: [t ? (0, ae.jsx)("img", { src: t.src, alt: t.alt, style: kr(t), loading: "lazy" }) : (0, ae.jsx)("span", { className: "file-product-empty", children: r.noPhoto }), (0, ae.jsx)(kd, { product: e6 })] });
  }
  function Am({ price: e6, listPrice: t }) {
    let r = he();
    return (0, ae.jsxs)(ae.Fragment, { children: [(0, ae.jsx)("bdi", { children: e6 }), t && (0, ae.jsxs)("s", { className: "file-price-was", children: [(0, ae.jsx)("span", { className: "file-visually-hidden", children: r.was }), (0, ae.jsx)("bdi", { children: t })] })] });
  }
  function Tm({ photos: e6, label: t, onOpen: r }) {
    let n = he(), a = wd(), i = e6.map((o, l) => (0, ae.jsx)("button", { type: "button", className: "file-product-zoom", "aria-label": n.fullScreen(o.alt), onClick: () => r(l), children: (0, ae.jsx)("img", { src: o.src, alt: o.alt, style: kr(o), loading: "lazy" }) }, o.src));
    return e6.length > 1 ? (0, ae.jsx)(b5, { ...a, bleed: true, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: i }) : (0, ae.jsx)("div", { ...a, className: "file-photos is-single", "data-layout": "strip", role: "region", "aria-label": t, children: i });
  }
  function Fm({ product: e6, view: t, source: r = false }) {
    let n = he(), a = r && t.merchant ? (0, ae.jsx)("span", { className: "file-product-source", children: (0, ae.jsxs)(Dm, { href: t.merchant.url, children: [n.viewAt(t.merchant.name), (0, ae.jsx)(Rm, { size: 14 })] }) }) : null;
    return (0, ae.jsxs)("div", { className: "file-product-copy", children: [(0, ae.jsxs)("div", { className: "file-product-line", children: [(0, ae.jsx)("span", { className: "file-product-name file-hover-underline", children: e6.title }), t.price && (0, ae.jsx)("span", { className: "file-product-price", children: (0, ae.jsx)(Am, { price: t.price, listPrice: t.listPrice }) })] }), (e6.brand || e6.meta) && (0, ae.jsx)("span", { className: "file-product-brand", children: [e6.brand, e6.meta].filter(Boolean).join(" \xB7 ") }), e6.note ? (0, ae.jsxs)("p", { className: "file-product-note", children: [e6.note, a] }) : a && (0, ae.jsx)("p", { className: "file-product-note", children: a })] });
  }
  function c3({ product: e6, selection: t, action: r }) {
    let n = he(), [a, i] = (0, cs.useState)(null), o = t.photos;
    return (0, ae.jsxs)("div", { className: "file-product-detail", children: [(0, ae.jsxs)("div", { className: "file-product-gallery", children: [o.length > 0 ? (0, ae.jsx)(Tm, { photos: o, label: n.photosOf(e6.title), onOpen: i }, o[0].src) : (0, ae.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, ae.jsx)(kd, { product: e6 })] }), (0, ae.jsxs)("div", { className: "file-product-info", children: [(0, ae.jsx)(Fm, { product: e6, view: t, source: true }), (0, ae.jsx)(a3, { selection: t }), e6.details && e6.details.length > 0 && (0, ae.jsx)(xd, { items: e6.details }), e6.merchant && (r === void 0 ? (0, ae.jsx)(oN, { product: e6, selection: t }) : r)] }), a !== null && (0, ae.jsx)(ss, { photos: o, start: a, title: e6.title, detail: t.swatch, onClose: () => i(null) })] });
  }
  function oN({ product: e6, selection: t }) {
    let r = bd(e6, t);
    return (0, ae.jsx)(as, { state: r });
  }
  function lN({ product: e6, action: t }) {
    let r = ds(e6);
    return (0, ae.jsx)(c3, { product: e6, selection: r, action: t });
  }
  function $m({ product: e6, selection: t, onClose: r, action: n }) {
    let [a, i] = (0, cs.useState)(true), o = (0, cs.useRef)(null), l = Sm(o, a), s = () => l(() => {
      i(false), r?.();
    });
    return a ? (0, ae.jsxs)("dialog", { ref: o, className: "file-product-modal", "aria-label": e6.title, onCancel: (u) => {
      u.preventDefault(), s();
    }, onClick: (u) => {
      if (u.target !== u.currentTarget) return;
      let c = u.currentTarget.getBoundingClientRect();
      (u.clientX < c.left || u.clientX > c.right || u.clientY < c.top || u.clientY > c.bottom) && s();
    }, children: [(0, ae.jsx)("div", { className: "file-product-modal-header", children: (0, ae.jsx)(vd, { onClick: s }) }), (0, ae.jsx)(c3, { product: e6, selection: t, action: n })] }) : null;
  }
  function sN({ product: e6, onClose: t, action: r }) {
    let n = ds(e6);
    return (0, ae.jsx)($m, { product: e6, selection: n, onClose: t, action: r });
  }
  function mb(e6, t) {
    if (typeof e6 == "string") {
      let a = hb(e6);
      return a ? { src: a, alt: t } : void 0;
    }
    if (!e6 || typeof e6 != "object") return;
    let r = e6, n = hb(br(r.src));
    if (n) return { src: n, alt: br(r.alt) ?? t, fit: r.fit === "contain" || r.fit === "cover" ? r.fit : void 0, position: br(r.position), background: br(r.background) };
  }
  function uN(e6) {
    let t = gb.get(e6);
    if (t) return t;
    let r = e6, n = br(r.title) ?? "", a = Array.isArray(r.photos) ? r.photos.flatMap((l) => mb(l, n) ?? []) : [], i = mb(r.photo, n), o = { id: e6.id, title: n, detail: br(r.detail), note: br(r.note), done: r.done === true, photo: i, photos: a.length > 0 ? a : i ? [i] : [], price: br(r.price), was: br(r.was), store: br(r.store), rating: pb(r.rating), reviews: pb(r.reviews), badge: br(r.badge), url: br(r.url) };
    return gb.set(e6, o), o;
  }
  function Zl(e6) {
    if (!e6) return;
    let t = e6.style.height || `${h3}px`, r = e6.style.transition;
    e6.style.transition = "none", e6.style.height = "auto";
    let n = `${e6.scrollHeight}px`;
    e6.style.height = t, e6.getBoundingClientRect(), e6.style.transition = r, e6.style.height = n;
  }
  function Xc(e6) {
    e6 && (e6.style.height = `${h3}px`);
  }
  function zm(e6, t, r) {
    (0, de.useEffect)(() => {
      if (!t) return;
      let n = (a) => {
        e6.current?.contains(a.target) || r();
      };
      return document.addEventListener("pointerdown", n), () => document.removeEventListener("pointerdown", n);
    });
  }
  function cN(e6) {
    let t = typeof window < "u" && !!window.instinctFile, { ready: r, isOwnerUser: n } = sm(), a = !!Pm(e6), i = !t || r && n;
    return { editable: i, addable: i && (!t || a) };
  }
  function dN({ collection: e6, checks: t = false }) {
    let { editable: r, addable: n } = cN(e6), a = K5(e6), i = (0, de.useMemo)(() => a.map(uN), [a]), o = (0, de.useMemo)(() => X5(e6), [e6]), l = he(), [s, u] = (0, de.useState)(null), [c, d] = (0, de.useState)(false), [f, p] = (0, de.useState)(false), [v, y] = (0, de.useState)(false), g = (0, de.useRef)(false), m = (0, de.useRef)(null), h = s ? i.findIndex((x) => x.id === s.id) : -1;
    (0, de.useEffect)(() => {
      s && !s.lifted && !g.current && (m.current?.getBoundingClientRect(), u({ ...s, lifted: true }));
    }, [s]), (0, de.useEffect)(() => {
      c && (m.current?.getBoundingClientRect(), p(true));
    }, [c]), (0, de.useEffect)(() => {
      s && h === -1 && (g.current = false, u(null));
    }, [s, h]);
    let w = (x) => {
      !s && !c && u({ id: x, lifted: false });
    }, b = (x) => {
      !s || g.current || (g.current = true, fN(m.current?.querySelector(`[data-live-id="${CSS.escape(s.id)}"]`)), u({ ...s, lifted: false }), setTimeout(() => {
        x?.(), g.current = false, u(null);
      }, om));
    }, k = !!s?.lifted, L = c && f, D = (x) => t ? (0, z.jsx)(wN, { done: !!x.done, label: x.title, onToggle: r ? () => o.update(x.id, { done: x.done ? null : true }) : void 0 }) : void 0;
    return (0, z.jsxs)("ul", { ref: m, ...ld(e6), className: "file-list", "data-checks": t ? "" : void 0, children: [i.map((x, S) => {
      let N = s?.id === x.id;
      return (0, z.jsx)("li", { ...ld(x.id, { mark: "stroke" }), className: "file-list-row", "data-above": k && S < h || L ? "" : void 0, "data-lifted": N && k ? "" : void 0, "data-quiet-line": k && (S === h || S === h + 1) ? "" : void 0, children: N && !ha(x) ? (0, z.jsx)(vb, { item: x, check: D(x), lifted: k, menu: [{ label: l.listDelete, destructive: true, onSelect: () => b(() => o.remove(x.id)) }], onDone: (A) => b(() => hN(o, x, A)) }) : (0, z.jsx)(pN, { item: x, check: D(x), open: N, lifted: N && k, edits: r ? o : void 0, onOpen: r || ha(x) ? () => w(x.id) : void 0, onClose: b }) }, x.id);
    }), n && (0, z.jsx)("li", { className: "file-list-row file-list-add-row", "data-above": L ? "" : void 0, "data-quiet-line": L || k && h === i.length - 1 ? "" : void 0, "data-hidden": s ? "" : void 0, children: c ? (0, z.jsx)(vb, { lifted: f, onAdd: (x) => o.add(x), onDone: (x) => {
      p(false), setTimeout(() => {
        x && o.add(x), d(false), y(!!x);
      }, om);
    } }) : (0, z.jsxs)("button", { type: "button", className: "file-list-add", "data-returning": v ? "" : void 0, disabled: !!s, onClick: () => d(true), children: [(0, z.jsx)(v5, { size: 16 }), (0, z.jsx)("span", { children: l.listAdd })] }) })] });
  }
  function fN(e6) {
    if (!e6 || e6.getBoundingClientRect().top >= 0) return;
    let t = e6.nextElementSibling ?? e6, r = () => t === e6 ? e6.getBoundingClientRect().bottom : t.getBoundingClientRect().top, n = r(), a = performance.now() + om * 2, i = () => {
      let o = r() - n;
      Math.abs(o) >= 0.5 && window.scrollBy(0, o), performance.now() < a && requestAnimationFrame(i);
    };
    requestAnimationFrame(i);
  }
  function hN(e6, t, r) {
    if (!r) {
      e6.remove(t.id);
      return;
    }
    r.title === t.title && (r.detail ?? "") === ho(t) || e6.update(t.id, { title: r.title, [d3(t)]: r.detail ?? null });
  }
  function p3() {
    return (0, z.jsx)("span", { "aria-hidden": "true", className: "file-list-pillow" });
  }
  function vb({ item: e6, check: t, lifted: r, menu: n, onAdd: a, onDone: i }) {
    let o = he(), l = a !== void 0, [s, u] = (0, de.useState)(e6?.title ?? ""), [c, d] = (0, de.useState)(e6 ? ho(e6) : ""), f = (0, de.useRef)(null), p = (0, de.useRef)(null), v = (0, de.useRef)(null), y = (0, de.useRef)(false), g = (0, de.useRef)(null), m = () => {
      let [D, x] = [s.trim(), c.trim()];
      return D ? { title: D, ...x ? { detail: x } : {} } : x ? { title: x } : null;
    }, h = (D = m()) => {
      y.current || (y.current = true, !e6 && D === null ? g.current = null : e6 && D === null ? g.current = { title: e6.title, detail: ho(e6) } : D && (g.current = { title: D.title, detail: D.detail ?? "" }), Xc(p.current), Xc(v.current), i(D));
    };
    zm(f, true, () => h()), (0, de.useEffect)(() => {
      let D = p.current;
      D.focus(), D.setSelectionRange(D.value.length, D.value.length);
    }, []), (0, de.useEffect)(() => {
      r && (Zl(p.current), Zl(v.current));
    }, [r]);
    let w = (D) => {
      if (D.key === "Escape") D.preventDefault(), e6 ? (u(e6.title), d(ho(e6)), h({ title: e6.title, detail: ho(e6) || void 0 })) : h(null);
      else if (D.key === "Enter" && !D.nativeEvent.isComposing) {
        D.preventDefault();
        let x = m();
        a && x ? (a(x), u(""), d(""), Xc(p.current), Xc(v.current), p.current?.focus()) : h(x);
      }
    }, b = g.current ?? { title: s, detail: c }, k = r || !!b.detail.trim(), L = (D, x, S, N, A) => (0, z.jsx)("textarea", { ref: D, rows: 1, className: x, "data-hidden": !l && !r ? "" : void 0, "aria-label": S, placeholder: S === o.listItem ? o.listAdd : o.listDetail, enterKeyHint: l ? "next" : "done", value: N, onKeyDown: w, onChange: (P) => {
      A(P.target.value), Zl(P.target);
    } });
    return (0, z.jsxs)("div", { ref: f, className: "file-list-editor", "data-lifted": r ? "" : void 0, "data-done": e6?.done ? "" : void 0, children: [(0, z.jsx)(p3, {}), t, l && (0, z.jsxs)("span", { "aria-hidden": "true", className: "file-list-lead", "data-gone": r || g.current ? "" : void 0, children: [(0, z.jsx)(v5, { size: 16 }), (0, z.jsx)("span", { className: "file-list-lead-check" })] }), (0, z.jsxs)("div", { className: "file-list-fields", children: [!l && (0, z.jsxs)("span", { "aria-hidden": "true", className: "file-list-ghost", children: [(0, z.jsx)("span", { className: "file-list-title", children: b.title }), b.detail.trim() && (0, z.jsx)("span", { className: "file-list-sub", children: b.detail })] }), L(p, "file-list-field file-list-title", o.listItem, s, u), (0, z.jsx)("div", { className: "file-list-detail", "data-open": k ? "" : void 0, children: (0, z.jsx)("div", { className: "file-list-detail-inner", children: L(v, "file-list-field file-list-sub", o.listDetail, c, d) }) })] }), n && (0, z.jsx)("span", { className: "file-list-fades-in", children: (0, z.jsx)(g3, { entries: n }) })] });
  }
  function pN({ item: e6, check: t, open: r, lifted: n, edits: a, onOpen: i, onClose: o }) {
    let l = he(), s = (0, de.useRef)(null), u = e6.photos, c = e6.photo ?? u[0], d = e6.note?.trim(), f = ha(e6) && !!(e6.price || e6.was || e6.rating !== void 0), p = ha(e6) ? d || e6.detail : ho(e6) || void 0;
    zm(s, n, () => o()), (0, de.useEffect)(() => {
      if (!n) return;
      let g = (m) => {
        m.key === "Escape" && o();
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n, o]);
    let v = f3(e6.url), y = [...v ? [{ label: l.listOpenLink, href: v }] : [], ...a ? [{ label: l.listDelete, destructive: true, onSelect: () => o(() => a.remove(e6.id)) }] : []];
    return (0, z.jsxs)("div", { ref: s, className: "file-list-card", "data-lifted": n ? "" : void 0, "data-done": e6.done ? "" : void 0, "data-product": ha(e6) ? "" : void 0, children: [(0, z.jsx)(p3, {}), t, (0, z.jsxs)("div", { className: "file-list-stack", children: [(0, z.jsxs)("div", { className: "file-list-summary", "data-card": ha(e6) ? "" : void 0, children: [i && (0, z.jsx)("button", { type: "button", className: "file-list-hit", "aria-label": a ? l.listEdit(e6.title) : e6.title, "aria-expanded": n, onClick: i }), (0, z.jsxs)("span", { className: "file-list-text", children: [(0, z.jsx)("span", { className: "file-list-title file-list-held", children: e6.title }), f ? (0, z.jsxs)("span", { className: "file-list-sub file-list-fades file-list-price-line", children: [e6.price && (0, z.jsx)("span", { className: "file-list-price", children: e6.price }), e6.was && (0, z.jsx)("s", { className: "file-list-was", children: e6.was }), e6.rating !== void 0 && (0, z.jsx)(m3, { rating: e6.rating, reviews: e6.reviews })] }) : p && (0, z.jsx)("span", { className: "file-list-sub file-list-fades", "data-note": d && ha(e6) ? "" : void 0, children: p })] }), c && (0, z.jsx)("img", { className: "file-list-thumb file-list-fades", src: c.src, alt: "", style: kr(c) })] }), ha(e6) && (0, z.jsx)("div", { className: "file-list-reveal", children: (0, z.jsx)("div", { className: "file-list-reveal-inner", children: r && (0, z.jsx)(mN, { item: e6, photo: c, photos: u, link: v, twoLines: f || !!p, menu: y, onNote: a ? (g) => a.update(e6.id, { note: g || null }) : void 0 }) }) })] })] });
  }
  function mN({ item: e6, photo: t, photos: r, link: n, twoLines: a, menu: i, onNote: o }) {
    let l = he(), [s, u] = (0, de.useState)(e6.note ?? ""), [c, d] = (0, de.useState)(null), f = r, p = (0, de.useRef)(null);
    (0, de.useEffect)(() => Zl(p.current), []);
    let v = e6.store ?? (n ? new URL(n).hostname : void 0), y = n && v ? (0, z.jsxs)("a", { className: "file-list-source", href: n, target: "_blank", rel: "noopener noreferrer", children: [l.viewAt(v), (0, z.jsx)(Rm, { size: 14 })] }) : v && (0, z.jsx)("span", { className: "file-list-source", children: v });
    return (0, z.jsxs)("div", { className: "file-list-details", "data-two-lines": a ? "" : void 0, children: [(0, z.jsx)("div", { className: "file-list-copy", children: (0, z.jsxs)("div", { className: "file-list-body", children: [(0, z.jsxs)("div", { className: "file-list-head", children: [(0, z.jsx)("span", { className: "file-list-title file-list-swap", children: e6.title }), i.length > 0 && (0, z.jsx)("span", { className: "file-list-shows", children: (0, z.jsx)(g3, { entries: i }) })] }), (e6.price || e6.was || e6.rating !== void 0) && (0, z.jsxs)("div", { className: "file-list-group", children: [(e6.price || e6.was) && (0, z.jsxs)("span", { className: "file-list-price-line", children: [e6.price && (0, z.jsx)("span", { className: "file-list-price", children: e6.price }), e6.was && (0, z.jsx)("s", { className: "file-list-was", children: e6.was })] }), e6.rating !== void 0 && (0, z.jsx)("span", { className: "file-list-price-line", children: (0, z.jsx)(m3, { rating: e6.rating, reviews: e6.reviews }) })] }), (0, z.jsxs)("div", { className: "file-list-group file-list-words", children: [e6.detail && (0, z.jsx)("span", { className: "file-list-sub", children: e6.detail }), !o && e6.note && (0, z.jsx)("span", { className: "file-list-sub file-list-note", children: e6.note }), o && (0, z.jsx)("textarea", { ref: p, rows: 1, className: "file-list-field file-list-note", "aria-label": l.listNote, placeholder: l.listNote, enterKeyHint: "done", value: s, onChange: (g) => {
      u(g.target.value), Zl(g.target);
    }, onKeyDown: (g) => {
      g.key === "Enter" && !g.nativeEvent.isComposing && (g.preventDefault(), g.currentTarget.blur());
    }, onBlur: () => {
      s.trim() !== (e6.note ?? "") && o(s.trim());
    } })] }), n && (0, z.jsx)(yN, { item: e6, photo: t, link: n }), y && (0, z.jsx)("div", { className: "file-list-foot", children: y })] }) }), r.length > 0 && (0, z.jsxs)("div", { className: "file-list-photos", children: [(0, z.jsxs)("div", { className: "file-list-strip file-product-gallery", children: [(0, z.jsx)(Tm, { photos: f, label: l.photosOf(e6.title), onOpen: d }), e6.badge && (0, z.jsx)("span", { className: "file-list-badge", children: e6.badge })] }), (0, z.jsx)("div", { className: "file-list-photo-stack", children: f.map((g, m) => (0, z.jsxs)("button", { type: "button", className: "file-list-photo", "aria-label": l.fullScreen(g.alt), onClick: () => d(m), children: [(0, z.jsx)("img", { src: g.src, alt: g.alt, style: kr(g), loading: "lazy" }), m === 0 && e6.badge && (0, z.jsx)("span", { className: "file-list-badge", children: e6.badge })] }, g.src)) })] }), r.length > 1 && (0, z.jsx)(vN, {}), c !== null && (0, z.jsx)(ss, { photos: f, start: c, title: e6.title, onClose: () => d(null) })] });
  }
  function gN(e6, t, r) {
    return { number: 1, title: e6.title, brand: e6.store, meta: e6.detail, price: e6.price, note: e6.note, badge: e6.badge, photos: t ? [t] : [], merchant: r ? { name: e6.store ?? new URL(r).hostname, url: r } : void 0 };
  }
  function vN() {
    let e6 = he(), t = (0, de.useRef)(null), r = (0, de.useRef)(null), [n, a] = (0, de.useState)(null), i = () => t.current.closest(".file-list-reveal-inner"), o = (s) => {
      let u = s.getBoundingClientRect().top - s.scrollTop;
      return [...s.querySelectorAll(".file-list-photo-stack > .file-list-photo")].map((c) => c.getBoundingClientRect().top - u - 12);
    };
    (0, de.useEffect)(() => {
      let s = i(), u = s.parentElement, c = () => {
        r.current = null;
      }, d = () => {
        r.current !== null && Math.abs(s.scrollTop - r.current) < 2 && c();
        let f = s.scrollHeight - s.clientHeight, p = o(s), v = p[p.length - 1] ?? 0;
        a(f < 2 ? null : { atStart: s.scrollTop < 2, atEnd: s.scrollTop > Math.min(f, v) - 2 });
      };
      d(), s.addEventListener("scroll", d, { passive: true });
      for (let f of rs) s.addEventListener(f, c, { passive: true });
      return s.addEventListener("load", d, true), u.addEventListener("transitionend", d), window.addEventListener("resize", d), () => {
        s.removeEventListener("scroll", d);
        for (let f of rs) s.removeEventListener(f, c);
        s.removeEventListener("load", d, true), u.removeEventListener("transitionend", d), window.removeEventListener("resize", d);
      };
    }, []);
    let l = (s) => {
      let u = i(), c = o(u), d = r.current ?? u.scrollTop, f = s > 0 ? c.find((v) => v > d + 2) : [...c].reverse().find((v) => v < d - 2), p = Math.min(u.scrollHeight - u.clientHeight, Math.max(0, f ?? (s > 0 ? u.scrollHeight : 0)));
      r.current = p, u.scrollTo({ top: p, behavior: "smooth" });
    };
    return (0, z.jsx)("div", { ref: t, className: "file-list-photo-arrows", children: n && (0, z.jsxs)(z.Fragment, { children: [(0, z.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": e6.previousPhoto, disabled: n.atStart, onClick: () => l(-1), children: km }), (0, z.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": e6.nextPhoto, disabled: n.atEnd, onClick: () => l(1), children: Em })] }) });
  }
  function yN({ item: e6, photo: t, link: r }) {
    let n = (0, de.useMemo)(() => gN(e6, t, r), [e6, t, r]), a = bd(n, ds(n));
    return (0, z.jsx)("div", { className: "file-list-action", children: (0, z.jsx)(as, { state: a }) });
  }
  function m3({ rating: e6, reviews: t }) {
    let { locale: r } = he(), n = `${Math.min(Math.max(e6, 0), 5) / 5 * 100}%`;
    return (0, z.jsxs)("span", { className: "file-list-rating", children: [(0, z.jsx)("span", { children: new Intl.NumberFormat(r, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(e6) }), (0, z.jsxs)("span", { "aria-hidden": "true", className: "file-list-stars", children: [(0, z.jsx)("span", { className: "file-list-stars-on", style: { width: n }, children: yb }), yb] }), t !== void 0 && (0, z.jsxs)("span", { children: ["(", new Intl.NumberFormat(r, { notation: "compact", maximumFractionDigits: 1 }).format(t).replace(/K$/, "k"), ")"] })] });
  }
  function wN({ done: e6, label: t, onToggle: r }) {
    return (0, z.jsxs)("button", { type: "button", role: "checkbox", "aria-checked": e6, "aria-label": t, className: "file-list-check", "data-done": e6 ? "" : void 0, disabled: !r, onClick: r, children: [(0, z.jsx)("span", { className: "file-list-check-fill" }), (0, z.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: (0, z.jsx)("path", { d: "M5 12.5l4.5 4.5L19 7.5", pathLength: 1 }) })] });
  }
  function g3({ entries: e6 }) {
    let t = he(), [r, n] = (0, de.useState)(false), a = (0, de.useRef)(null);
    return zm(a, r, () => n(false)), (0, z.jsxs)("span", { ref: a, className: "file-list-menu-anchor", children: [(0, z.jsx)("button", { type: "button", className: "file-list-more", "aria-label": t.listMore, "aria-haspopup": "menu", "aria-expanded": r, onClick: () => n(!r), children: (0, z.jsx)(qD, { size: 16 }) }), r && (0, z.jsx)("span", { role: "menu", className: "file-list-menu", onKeyDown: (i) => {
      i.key === "Escape" && n(false);
    }, children: e6.map((i) => i.href ? (0, z.jsx)("a", { role: "menuitem", className: "file-list-menu-item", href: i.href, target: "_blank", rel: "noopener noreferrer", onClick: () => n(false), children: i.label }, i.label) : (0, z.jsx)("button", { type: "button", role: "menuitem", className: "file-list-menu-item", "data-destructive": i.destructive ? "" : void 0, onClick: () => {
      n(false), i.onSelect?.();
    }, children: i.label }, i.label)) })] });
  }
  function v3({ height: e6 = 16, title: t = "Instinct" }) {
    return (0, $r.jsxs)("svg", { className: "file-wordmark", width: e6 / 57 * 243, height: e6, viewBox: "0 0 243 57", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", role: "img", "aria-label": t, children: [(0, $r.jsx)("path", { d: "M135.548 55.2V55.28H122.828V55.2C123.468 54.1867 123.948 53.2533 124.268 52.4C124.588 51.5467 124.801 50.5067 124.908 49.28C125.015 48.0533 125.068 46.4267 125.068 44.4V28.88C125.068 26.3733 124.828 24.3733 124.348 22.88C123.921 21.3867 123.308 20.2667 122.508 19.52V19.36L133.148 15.92H133.308V44.4C133.308 46.4267 133.361 48.0533 133.468 49.28C133.575 50.5067 133.788 51.5467 134.108 52.4C134.428 53.2533 134.908 54.1867 135.548 55.2ZM129.228 10C127.895 10 126.721 9.52 125.708 8.56C124.695 7.54667 124.188 6.34667 124.188 4.96C124.188 3.62667 124.695 2.48 125.708 1.52C126.721 0.506667 127.895 0 129.228 0C130.508 0 131.655 0.506667 132.668 1.52C133.681 2.48 134.188 3.62667 134.188 4.96C134.188 6.34667 133.681 7.54667 132.668 8.56C131.655 9.52 130.508 10 129.228 10Z" }), (0, $r.jsx)("path", { d: "M154.07 55.2V55.28H141.35V55.2C142.043 54.1867 142.523 53.2533 142.79 52.4C143.11 51.5467 143.323 50.5067 143.43 49.28C143.537 48.0533 143.59 46.4267 143.59 44.4V28.88C143.59 26.3733 143.35 24.3733 142.87 22.88C142.443 21.3867 141.83 20.2667 141.03 19.52V19.36L151.67 15.92H151.83V22.56C153.803 20.8533 155.91 19.3333 158.15 18C160.39 16.6133 162.95 15.92 165.83 15.92C169.243 15.92 171.883 17.0133 173.75 19.2C175.617 21.3333 176.55 24.56 176.55 28.88V44.4C176.55 46.4267 176.603 48.0533 176.71 49.28C176.817 50.5067 177.03 51.5467 177.35 52.4C177.67 53.2533 178.15 54.1867 178.79 55.2V55.28H166.15V55.2C166.79 54.1867 167.27 53.2533 167.59 52.4C167.91 51.5467 168.123 50.5067 168.23 49.28C168.337 48.0533 168.39 46.4267 168.39 44.4V29.68C168.39 27.12 167.777 25.12 166.55 23.68C165.377 22.24 163.377 21.52 160.55 21.52C158.79 21.52 157.19 21.7867 155.75 22.32C154.363 22.8 153.057 23.3867 151.83 24.08V44.4C151.83 46.4267 151.883 48.0533 151.99 49.28C152.097 50.5067 152.31 51.5467 152.63 52.4C152.95 53.2533 153.43 54.1867 154.07 55.2Z" }), (0, $r.jsx)("path", { d: "M200.799 56.24C197.119 56.1867 193.919 55.36 191.199 53.76C188.532 52.1067 186.505 49.8667 185.119 47.04C183.732 44.2133 183.039 41.0133 183.039 37.44C183.039 33.6533 183.812 30.1333 185.359 26.88C186.959 23.6267 189.199 21.0133 192.079 19.04C195.012 17.0133 198.479 16 202.479 16C205.945 16 208.772 16.7467 210.959 18.24C211.898 18.8813 212.678 19.7019 213.171 20.3999C211.194 24.405 208.033 26.336 208.033 26.336C208.033 26.336 207.718 25.1566 207.519 24.56C207.039 23.0667 206.265 21.8133 205.199 20.8C204.132 19.7867 202.639 19.28 200.719 19.28C198.479 19.28 196.559 19.9733 194.959 21.36C193.359 22.6933 192.132 24.4533 191.279 26.64C190.479 28.8267 190.079 31.2 190.079 33.76C190.079 36.9067 190.665 39.6533 191.839 42C193.012 44.2933 194.639 46.08 196.719 47.36C198.799 48.64 201.172 49.28 203.839 49.28C206.239 49.28 208.372 48.7733 210.239 47.76C212.159 46.7467 213.785 45.3867 215.119 43.68C214.532 47.68 212.932 50.7733 210.319 52.96C207.705 55.1467 204.532 56.24 200.799 56.24Z" }), (0, $r.jsx)("path", { d: "M240.864 20.4H231.264V46.16C231.264 46.8 231.371 47.4933 231.584 48.24C231.798 48.9333 232.331 49.5467 233.184 50.08C234.038 50.56 235.371 50.8 237.184 50.8C238.358 50.8 239.398 50.6933 240.304 50.48C241.211 50.2133 242.038 49.8667 242.784 49.44C242.144 51.6267 240.918 53.3067 239.104 54.48C237.291 55.6533 235.104 56.24 232.544 56.24C229.611 56.24 227.291 55.44 225.584 53.84C223.878 52.24 223.024 50 223.024 47.12V20.4H218.464V19.68L231.104 8.56H231.264V16.88H242.864L240.864 20.4Z" }), (0, $r.jsx)("path", { d: "M33.4355 55.2V55.28H20.7155V55.2C21.4088 54.1867 21.8888 53.2533 22.1555 52.4C22.4755 51.5467 22.6888 50.5067 22.7955 49.28C22.9022 48.0533 22.9555 46.4267 22.9555 44.4V28.88C22.9555 26.3733 22.7155 24.3733 22.2355 22.88C21.8088 21.3867 21.1955 20.2667 20.3955 19.52V19.36L31.0355 15.92H31.1955V22.56C33.1688 20.8533 35.2755 19.3333 37.5155 18C39.7555 16.6133 42.3155 15.92 45.1955 15.92C48.6088 15.92 51.2488 17.0133 53.1155 19.2C54.9822 21.3333 55.9155 24.56 55.9155 28.88V44.4C55.9155 46.4267 55.9688 48.0533 56.0755 49.28C56.1822 50.5067 56.3955 51.5467 56.7155 52.4C57.0355 53.2533 57.5155 54.1867 58.1555 55.2V55.28H45.5155V55.2C46.1555 54.1867 46.6355 53.2533 46.9555 52.4C47.2755 51.5467 47.4888 50.5067 47.5955 49.28C47.7022 48.0533 47.7555 46.4267 47.7555 44.4V29.68C47.7555 27.12 47.1422 25.12 45.9155 23.68C44.7422 22.24 42.7422 21.52 39.9155 21.52C38.1555 21.52 36.5555 21.7867 35.1155 22.32C33.7288 22.8 32.4222 23.3867 31.1955 24.08V44.4C31.1955 46.4267 31.2488 48.0533 31.3555 49.28C31.4622 50.5067 31.6755 51.5467 31.9955 52.4C32.3155 53.2533 32.7955 54.1867 33.4355 55.2Z" }), (0, $r.jsx)("path", { d: "M74.2943 56.16C72.0543 56.16 70.0543 55.8667 68.2943 55.28C66.5343 54.7467 65.1476 54.16 64.1343 53.52L63.7343 45.92L63.8943 45.84C65.5476 47.9733 67.3609 49.6533 69.3343 50.88C71.3076 52.1067 73.3876 52.72 75.5743 52.72C77.5476 52.72 79.0409 52.2133 80.0543 51.2C81.0676 50.1333 81.5743 48.72 81.5743 46.96C81.5743 45.0933 81.0143 43.7067 79.8943 42.8C78.8276 41.84 77.0409 40.64 74.5343 39.2C72.5609 38.0267 70.8543 36.9333 69.4143 35.92C67.9743 34.8533 66.8809 33.68 66.1343 32.4C65.3876 31.12 65.0143 29.52 65.0143 27.6C65.0143 24.0267 66.2676 21.2 68.7743 19.12C71.2809 16.9867 74.7743 15.92 79.2543 15.92C80.8543 15.92 82.3209 16.08 83.6543 16.4C85.0409 16.72 86.3209 17.0667 87.4943 17.44L87.5743 24.8H87.4143C85.9209 23.04 84.3743 21.6533 82.7743 20.64C81.1743 19.6267 79.4409 19.12 77.5743 19.12C75.9209 19.12 74.5876 19.5733 73.5743 20.48C72.5609 21.3333 72.0543 22.56 72.0543 24.16C72.0543 25.76 72.6143 27.04 73.7343 28C74.8543 28.9067 76.6143 30 79.0143 31.28C81.4143 32.6133 83.3343 33.84 84.7743 34.96C86.2143 36.08 87.2809 37.3067 87.9743 38.64C88.6676 39.92 89.0143 41.4667 89.0143 43.28C89.0143 47.3867 87.6276 50.56 84.8543 52.8C82.0809 55.04 78.5609 56.16 74.2943 56.16Z" }), (0, $r.jsx)("path", { d: "M115.464 20.4H105.864V46.16C105.864 46.8 105.971 47.4933 106.184 48.24C106.398 48.9333 106.931 49.5467 107.784 50.08C108.638 50.56 109.971 50.8 111.784 50.8C112.958 50.8 113.998 50.6933 114.904 50.48C115.811 50.2133 116.638 49.8667 117.384 49.44C116.744 51.6267 115.518 53.3067 113.704 54.48C111.891 55.6533 109.704 56.24 107.144 56.24C104.211 56.24 101.891 55.44 100.184 53.84C98.4776 52.24 97.6243 50 97.6243 47.12V20.4H93.0643V19.68L105.704 8.56H105.864V16.88H117.464L115.464 20.4Z" }), (0, $r.jsx)("path", { d: "M13.5 55.205V55.28H0V55.205C0.85 53.905 1.475 52.705 1.875 51.605C2.275 50.505 2.55 49.205 2.7 47.705C2.85 46.155 2.925 44.08 2.925 41.48V16.58C2.925 13.98 2.85 11.93 2.7 10.43C2.55 8.88 2.275 7.555 1.875 6.455C1.475 5.305 0.85 4.105 0 2.855V2.78H13.5V2.855C12.7 4.105 12.1 5.305 11.7 6.455C11.3 7.555 11.025 8.88 10.875 10.43C10.725 11.93 10.65 13.98 10.65 16.58V41.48C10.65 44.03 10.725 46.08 10.875 47.63C11.025 49.18 11.3 50.505 11.7 51.605C12.1 52.705 12.7 53.905 13.5 55.205Z" })] });
  }
  function y3({ ratio: e6 = "portrait", footer: t, lang: r, dir: n = Eb(r), children: a, className: i }) {
    return (0, pa.jsx)(dd.Provider, { value: lm(r), children: (0, pa.jsxs)("div", { className: ["file-image", i].filter(Boolean).join(" "), "data-ratio": e6, lang: r, dir: n, children: [(0, pa.jsx)("div", { className: "file-image-body", children: a }), (0, pa.jsxs)("div", { className: "file-image-footer", children: [(0, pa.jsx)("span", { children: t }), (0, pa.jsx)(v3, { height: 14 })] })] }) });
  }
  function xN({ product: e6, expandable: t = true, defaultOpen: r = false, kind: n }) {
    let a = he(), [i, o] = (0, Ed.useState)(r), l = ds(e6), s = bd(e6, l), u = (0, me.jsxs)(me.Fragment, { children: [(0, me.jsx)(iN, { product: e6, photo: l.photos[0] }), (0, me.jsx)(Fm, { product: { ...e6, note: void 0 }, view: l })] });
    return (0, me.jsxs)("article", { className: `file-product is-${n}`, children: [t ? (0, me.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": a.view(e6.title), onClick: () => o(true), children: u }) : (0, me.jsx)("div", { className: "file-product-preview", children: u }), (0, me.jsx)(_m, { view: l, limit: 5, choose: t ? l.choose : void 0 }), t && (0, me.jsx)(as, { state: s }), t && i && (0, me.jsx)($m, { product: e6, selection: l, action: (0, me.jsx)(as, { state: s }), onClose: () => o(false) })] });
  }
  function bN({ product: e6 }) {
    let t = ds(e6), r = bd(e6, t), [n, a] = (0, Ed.useState)(null), i = t.photos;
    return (0, me.jsxs)("article", { className: "file-product is-card", children: [(0, me.jsx)(kN, { product: e6, photos: i, onOpen: a }, i[0]?.src), (0, me.jsxs)("div", { className: "file-product-info", children: [(0, me.jsx)(Fm, { product: e6, view: t, source: true }), (0, me.jsx)(a3, { selection: t }), e6.details && e6.details.length > 0 && (0, me.jsx)(xd, { items: e6.details }), (0, me.jsx)(as, { state: r })] }), n !== null && (0, me.jsx)(ss, { photos: i, start: n, title: e6.title, detail: t.swatch, onClose: () => a(null) })] });
  }
  function kN({ product: e6, photos: t, onOpen: r }) {
    let n = he(), [a, i] = (0, Ed.useState)(0), o = a === 0 ? t : [t[a], ...t.filter((l, s) => s !== a)];
    return (0, me.jsxs)("div", { className: "file-product-media", children: [t.length > 0 ? (0, me.jsx)(Tm, { photos: o, label: n.photosOf(e6.title), onOpen: (l) => r(t.indexOf(o[l])) }) : (0, me.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, me.jsx)(kd, { product: e6 }), t.length > 1 && (0, me.jsx)("div", { className: "file-product-thumbs", children: t.map((l, s) => (0, me.jsx)("button", { type: "button", className: "file-product-thumb", "aria-label": l.alt, "aria-pressed": s === a, onClick: () => i(s), children: (0, me.jsx)("img", { src: l.src, alt: "", style: kr(l), loading: "lazy" }) }, l.src)) })] });
  }
  function Om(e6) {
    return (0, me.jsx)(xN, { ...e6, kind: "tile" });
  }
  function EN({ products: e6, expandable: t = true, children: r }) {
    if (e6 === void 0 && r === void 0) throw new Error("ProductGrid needs products={[...]}, an array of products, or ProductTile children.");
    return (0, me.jsxs)("div", { className: "file-product-grid", children: [e6?.map((n) => (0, me.jsx)(Om, { product: n, expandable: t }, n.number)), r || null] });
  }
  function RN({ products: e6, label: t, bleed: r = true }) {
    let n = wd();
    return (0, me.jsx)("div", { ...n, className: r ? "file-product-carousel file-bleed" : "file-product-carousel", role: "region", "aria-label": t, tabIndex: 0, children: e6.map((a) => (0, me.jsx)(Om, { product: a }, a.number)) });
  }
  function SN(e6, t) {
    let r = ud(e6), n = r ? e6.chosen[r.name] : void 0;
    return !r || !n ? u3(e6, t) : e6.soldOut(r.name, n) ? t.valuesSoldOut([n]) : e6.variant?.available ? t.inStock(n) : n;
  }
  function CN({ ratio: e6 = "portrait", number: t, pick: r = false, title: n, brand: a, price: i, photo: o, options: l, variants: s, selection: u, footer: c, lang: d, dir: f }) {
    let p = lm(d), v = l3({ price: i, photos: o ? [o] : [], options: l, variants: s, selection: u }, {}, p), y = o ?? v.photos[0], g = SN(v, p);
    return (0, Nt.jsxs)(y3, { ratio: e6, footer: c, lang: d, dir: f, className: "file-product-image", children: [(0, Nt.jsxs)("div", { className: "file-product-image-photo", children: [y ? (0, Nt.jsx)("img", { src: y.src, alt: y.alt, style: { ...kr(y), objectFit: "cover" } }) : (0, Nt.jsx)("span", { className: "file-product-empty", children: p.noPhoto }), t !== void 0 && (0, Nt.jsx)("span", { className: r ? "file-product-image-tag is-pick" : "file-product-image-tag", children: t })] }), (0, Nt.jsxs)("div", { className: "file-product-image-copy", children: [a && (0, Nt.jsx)("span", { className: "file-product-brand", children: a }), (0, Nt.jsxs)("div", { className: "file-product-line", children: [(0, Nt.jsx)("span", { className: "file-product-name file-hover-underline", children: n }), v.price && (0, Nt.jsx)("span", { className: "file-product-price", children: (0, Nt.jsx)(Am, { price: v.price, listPrice: v.listPrice }) })] }), (v.swatches || g) && (0, Nt.jsxs)("div", { className: "file-product-image-variant", children: [(0, Nt.jsx)(_m, { view: v, limit: 6, label: true }), g && (0, Nt.jsx)("span", { className: "file-product-image-size", children: g })] })] })] });
  }
  function DN(e6, t) {
    let r = e6.values.map(({ value: n }) => n);
    return `${r.length} \xB7 ${r.slice(0, 3).join(", ")}${r.length > 3 ? t.andMore(r.length - 3) : ""}`;
  }
  function NN({ caption: e6, products: t, rows: r }) {
    let n = he(), [a, i] = (0, w3.useState)(null), o = s3(t), l = t.findIndex((p) => p.number === a), s = o.some((p) => p.price), u = o.find((p) => p.swatches)?.swatches, c = o.map(ud).find((p) => p !== void 0), d = [...s ? [{ key: "price", cells: o.map((p) => ({ label: n.price, value: p.price ? (0, Ce.jsx)(Am, { price: p.price, listPrice: p.listPrice }) : "\u2014", className: "file-product-price", quiet: true })) }] : [], ...u ? [{ key: "colors", cells: o.map((p) => ({ label: n.plural((p.swatches ?? u).name), value: p.swatches ? DN(p.swatches, n) : "\u2014" })) }] : [], ...c ? [{ key: "sizes", cells: o.map((p) => {
      let v = ud(p), y = n.plural((v ?? c).name);
      return { label: v && p.swatch ? n.optionIn(y, p.swatch) : y, value: (v && u3(p, n)) ?? "\u2014" };
    }) }] : [], ...r.map((p) => ({ key: `row:${p.label}`, cells: p.values.map((v, y) => ({ label: p.label, value: (0, Ce.jsx)("bdi", { children: v }), className: p.best === y ? "is-best" : void 0 })) }))], f = (p, v) => ({ order: p * (d.length + 1) + v });
    return (0, Ce.jsxs)(Ce.Fragment, { children: [(0, Ce.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e6, tabIndex: 0, children: (0, Ce.jsxs)("table", { className: "file-table is-products is-stacking", style: { "--file-table-columns": t.length }, children: [(0, Ce.jsx)("caption", { className: "file-visually-hidden", children: e6 }), (0, Ce.jsx)("thead", { children: (0, Ce.jsx)("tr", { children: t.map((p, v) => {
      let y = o[v].photos[0];
      return (0, Ce.jsxs)("th", { scope: "col", style: f(v, 0), children: [(0, Ce.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": n.view(p.title), onClick: () => i(p.number), children: (0, Ce.jsxs)("span", { className: "file-product-head", children: [(0, Ce.jsxs)("span", { className: "file-product-head-photo", children: [y ? (0, Ce.jsx)("img", { src: y.src, alt: y.alt, style: kr(y), loading: "lazy" }) : (0, Ce.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, Ce.jsx)(kd, { product: p })] }), (0, Ce.jsx)("span", { className: "file-product-name file-hover-underline", children: p.title }), (p.brand || p.meta) && (0, Ce.jsx)("span", { className: "file-product-brand", children: [p.brand, p.meta].filter(Boolean).join(" \xB7 ") })] }) }), (0, Ce.jsx)(_m, { view: o[v], limit: 6, label: true, choose: o[v].choose })] }, p.number);
    }) }) }), (0, Ce.jsx)("tbody", { children: d.map((p, v) => (0, Ce.jsx)("tr", { children: p.cells.map((y, g) => (0, Ce.jsxs)("td", { className: y.className, style: f(g, v + 1), children: [(0, Ce.jsx)("span", { className: y.quiet ? "file-visually-hidden" : "file-cell-label", children: y.label }), y.value] }, g)) }, p.key)) })] }) }), l >= 0 && (0, Ce.jsx)($m, { product: t[l], selection: o[l], onClose: () => i(null) })] });
  }
  function LN({ children: e6 }) {
    return (0, Lt.jsx)("div", { className: "file-recommendations", children: e6 });
  }
  function MN({ number: e6, title: t, eyebrow: r, recommended: n = false, photos: a = [], photoCredit: i, links: o, children: l }) {
    let s = he(), u = x3.default.useId();
    return (0, Lt.jsxs)("section", { className: "file-recommendation", "data-recommended": n, "aria-labelledby": u, children: [(0, Lt.jsxs)("header", { className: "file-recommendation-header", children: [(0, Lt.jsxs)("div", { className: "file-recommendation-meta", children: [(0, Lt.jsx)("span", { className: "file-recommendation-number", children: e6 }), r && (0, Lt.jsx)("p", { className: "file-recommendation-eyebrow", children: r }), n && (0, Lt.jsx)("span", { className: "file-recommendation-badge", children: s.recommended })] }), (0, Lt.jsx)("h2", { id: u, className: "file-recommendation-title", children: t })] }), a.length > 0 && (0, Lt.jsxs)("figure", { className: "file-recommendation-photos", children: [(0, Lt.jsx)(Nm, { items: a, label: s.photosOf(t), layout: "strip", bleed: false }), i && (0, Lt.jsx)("figcaption", { className: "file-caption", children: i })] }), (0, Lt.jsx)("div", { className: "file-recommendation-content", children: l }), o && o.length > 0 && (0, Lt.jsx)("footer", { className: "file-recommendation-links", children: o.map((c) => (0, Lt.jsx)(Dm, { href: c.href, children: c.label }, c.href)) })] });
  }
  function PN() {
    let e6 = Ke(), t = Rn();
    return (0, Im.useEffect)(() => {
      window.instinctFile.route(e6.pathname + e6.search + e6.hash);
    }, [e6]), (0, Im.useEffect)(() => {
      let r = (n) => t(n.detail, { replace: true });
      return window.addEventListener("instinct-route", r), () => window.removeEventListener("instinct-route", r);
    }, [t]), null;
  }
  function _N({ children: e6 }) {
    return (0, Rd.jsxs)(hc, { initialEntries: [window.instinctFile.initialRoute], children: [(0, Rd.jsx)(PN, {}), e6] });
  }
  var import_meta, H3, Md, U3, B3, V3, W3, Rr, Jm, Y3, j, dg, te, pg, be, Sg, Dg, Py, ml, Fy, k4, R4, fM, hM, pM, mM, cx, Ot, B, V, gr, it, K, q2, na, pp, H, mr, gw, vw, pr, yl, qr, Sl, Cl, yp, $y, wl, yr, vE, wE, EE, RE, SE, CE, DE, NE, Iy, xp, bp, nr, AE, TE, FE, $E, Ba, sc, uc, Ep, lt, Nw, aa, OE, By, Fw, HE, UE, BE, $w, VE, Vi, Nl, vn, zw, Ow, Iw, Ia, ji, ra, Hi, WE, Ky, Np, Xy, JE, Tr, Xr, Ml, to, ro, Xi, t2, mt, la, It, Pp, Kr, r2, oR, lR, i2, l2, cR, c2, ep, mR, ow, sw, vR, uw, yR, qa, xR, bR, kR, b2, Gu, Ku, Bu, PR, L2, jp, Hp, Up, ec, Bp, Vp, M2, P2, Yi, cp, _2, qi, A2, dp, T2, F2, fp, $2, TR, rp, FR, zR, Vu, UR, BR, Ar, I2, xc, Wp, Wu, Qu, oS, tc, Rc, ap, xr, mw, rc, ao, gS, io, zl, Mc, yS, wS, gp, qu, Fr, lo, zc, Y4, oo, gt, w0, _S, AS, I4, Oc, Ic, x0, U4, G4, K4, jc, X4, y0, P4, tx, s8, T4, u8, F4, lx, sx, st, so, m8, X, Vl, uL, b3, Im, Je, xL, D0, Sx, Cx, P0, Gl, g8, xx, dx, v8, y8, C0, fx, w8, x8, b8, k8, E8, R8, S8, C8, bx, Pe, kx, N8, L8, M8, P8, _8, A8, T8, Dn, ca, uo, S0, Wl, F8, ue, da, $8, z8, O8, I8, j8, H8, Yl, co, U8, Ex, B8, V8, px, W8, ql, Y8, q8, G8, K8, X8, Q8, J8, Uc, L0, nC, gx, vx, lC, sC, M0, uC, _0, A0, Ve, is, fd, Cb, ma, Zc, h5, ls, Ln, wa, gd, R, Mt, _t, ge, yd, ar, li, ga, im, U, ce, T, wo, ze, Y5, Se, Ql, e3, t3, r3, de, ni, Pt, cs, ut, i3, ae, z, $r, pa, Ed, me, Nt, w3, Ce, x3, Lt, dC, wb, fC, hC, pC, mC, gC, vC, xb, bb, Or, At, cd, yC, wC, xC, bC, kC, EC, RC, SC, CC, Dx, DC, NC, LC, dd, Jc, PC, _C, um, cm, AC, Nb, IC, EL, RL, jC, Nx, V0, W0, Y0, Mx, ri, go, po, Jl, en, qC, GC, KC, XC, QC, ZC, JC, Px, Ab, Tb, rd, Fb, $b, zb, Ob, mo, Ib, n7, Ub, hm, pm, hd, ts, Ix, jx, Hx, pd, Q0, SL, CL, Z0, I0, y7, w7, b7, k7, E7, R7, Ux, $7, Xb, Vx, Yx, qx, Yc, Qb, Zb, j0, H0, ym, DL, e5, NL, t5, LL, r5, ML, n5, PL, a5, _L, i5, AL, Y7, TL, o5, q7, G7, K7, X7, Q7, Z7, FL, $L, zL, OL, IL, jL, HL, l5, J7, eD, tD, rD, nD, aD, UL, BL, VL, WL, YL, qL, GL, s5, KL, u5, XL, wm, QL, xm, ZL, Gx, pD, mD, Kx, Xx, ED, RD, SD, DD, em, tm, Qa, ND, LD, FD, $D, ID, jD, md, Mn, bm, UD, km, Em, m5, BD, oi, Rm, g5, WD, YD, v5, qD, GD, KD, XD, JD, e9, Xl, w5, eb, tb, rb, rs, u9, S5, c9, f9, H5, ti, sd, ns, h9, p9, nb, k9, E9, ab, ib, Kt, A9, T9, F9, $9, z9, O9, I9, j9, H9, U9, Gc, B0, q5, B9, sb, W9, jt, Kc, G9, X9, ub, Q9, Z5, eN, cb, nN, db, fb, om, d3, ho, ha, f3, hb, br, pb, gb, h3, yb, Rd;
  var init_kit = __esm({
    "../../skills/platform/files/render/page-kit/kit.js"() {
      import_meta = {};
      H3 = Object.create;
      Md = Object.defineProperty;
      U3 = Object.getOwnPropertyDescriptor;
      B3 = Object.getOwnPropertyNames;
      V3 = Object.getPrototypeOf;
      W3 = Object.prototype.hasOwnProperty;
      Rr = (e6, t) => () => (t || e6((t = { exports: {} }).exports, t), t.exports);
      Jm = (e6, t) => {
        for (var r in t) Md(e6, r, { get: t[r], enumerable: true });
      };
      Y3 = (e6, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of B3(t)) !W3.call(e6, a) && a !== r && Md(e6, a, { get: () => t[a], enumerable: !(n = U3(t, a)) || n.enumerable });
        return e6;
      };
      j = (e6, t, r) => (r = e6 != null ? H3(V3(e6)) : {}, Y3(t || !e6 || !e6.__esModule ? Md(r, "default", { value: e6, enumerable: true }) : r, e6));
      dg = Rr((fe) => {
        "use strict";
        var Eo = /* @__PURE__ */ Symbol.for("react.element"), q3 = /* @__PURE__ */ Symbol.for("react.portal"), G3 = /* @__PURE__ */ Symbol.for("react.fragment"), K3 = /* @__PURE__ */ Symbol.for("react.strict_mode"), X3 = /* @__PURE__ */ Symbol.for("react.profiler"), Q3 = /* @__PURE__ */ Symbol.for("react.provider"), Z3 = /* @__PURE__ */ Symbol.for("react.context"), J3 = /* @__PURE__ */ Symbol.for("react.forward_ref"), e6 = /* @__PURE__ */ Symbol.for("react.suspense"), t6 = /* @__PURE__ */ Symbol.for("react.memo"), r6 = /* @__PURE__ */ Symbol.for("react.lazy"), eg = Symbol.iterator;
        function n6(e10) {
          return e10 === null || typeof e10 != "object" ? null : (e10 = eg && e10[eg] || e10["@@iterator"], typeof e10 == "function" ? e10 : null);
        }
        var ng = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, ag = Object.assign, ig = {};
        function ci(e10, t, r) {
          this.props = e10, this.context = t, this.refs = ig, this.updater = r || ng;
        }
        ci.prototype.isReactComponent = {};
        ci.prototype.setState = function(e10, t) {
          if (typeof e10 != "object" && typeof e10 != "function" && e10 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e10, t, "setState");
        };
        ci.prototype.forceUpdate = function(e10) {
          this.updater.enqueueForceUpdate(this, e10, "forceUpdate");
        };
        function og() {
        }
        og.prototype = ci.prototype;
        function _d(e10, t, r) {
          this.props = e10, this.context = t, this.refs = ig, this.updater = r || ng;
        }
        var Ad = _d.prototype = new og();
        Ad.constructor = _d;
        ag(Ad, ci.prototype);
        Ad.isPureReactComponent = true;
        var tg = Array.isArray, lg = Object.prototype.hasOwnProperty, Td = { current: null }, sg = { key: true, ref: true, __self: true, __source: true };
        function ug(e10, t, r) {
          var n, a = {}, i = null, o = null;
          if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) lg.call(t, n) && !sg.hasOwnProperty(n) && (a[n] = t[n]);
          var l = arguments.length - 2;
          if (l === 1) a.children = r;
          else if (1 < l) {
            for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
            a.children = s;
          }
          if (e10 && e10.defaultProps) for (n in l = e10.defaultProps, l) a[n] === void 0 && (a[n] = l[n]);
          return { $$typeof: Eo, type: e10, key: i, ref: o, props: a, _owner: Td.current };
        }
        function a6(e10, t) {
          return { $$typeof: Eo, type: e10.type, key: t, ref: e10.ref, props: e10.props, _owner: e10._owner };
        }
        function Fd(e10) {
          return typeof e10 == "object" && e10 !== null && e10.$$typeof === Eo;
        }
        function i6(e10) {
          var t = { "=": "=0", ":": "=2" };
          return "$" + e10.replace(/[=:]/g, function(r) {
            return t[r];
          });
        }
        var rg = /\/+/g;
        function Pd(e10, t) {
          return typeof e10 == "object" && e10 !== null && e10.key != null ? i6("" + e10.key) : t.toString(36);
        }
        function xs(e10, t, r, n, a) {
          var i = typeof e10;
          (i === "undefined" || i === "boolean") && (e10 = null);
          var o = false;
          if (e10 === null) o = true;
          else switch (i) {
            case "string":
            case "number":
              o = true;
              break;
            case "object":
              switch (e10.$$typeof) {
                case Eo:
                case q3:
                  o = true;
              }
          }
          if (o) return o = e10, a = a(o), e10 = n === "" ? "." + Pd(o, 0) : n, tg(a) ? (r = "", e10 != null && (r = e10.replace(rg, "$&/") + "/"), xs(a, t, r, "", function(u) {
            return u;
          })) : a != null && (Fd(a) && (a = a6(a, r + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(rg, "$&/") + "/") + e10)), t.push(a)), 1;
          if (o = 0, n = n === "" ? "." : n + ":", tg(e10)) for (var l = 0; l < e10.length; l++) {
            i = e10[l];
            var s = n + Pd(i, l);
            o += xs(i, t, r, s, a);
          }
          else if (s = n6(e10), typeof s == "function") for (e10 = s.call(e10), l = 0; !(i = e10.next()).done; ) i = i.value, s = n + Pd(i, l++), o += xs(i, t, r, s, a);
          else if (i === "object") throw t = String(e10), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e10).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return o;
        }
        function ws(e10, t, r) {
          if (e10 == null) return e10;
          var n = [], a = 0;
          return xs(e10, n, "", "", function(i) {
            return t.call(r, i, a++);
          }), n;
        }
        function o6(e10) {
          if (e10._status === -1) {
            var t = e10._result;
            t = t(), t.then(function(r) {
              (e10._status === 0 || e10._status === -1) && (e10._status = 1, e10._result = r);
            }, function(r) {
              (e10._status === 0 || e10._status === -1) && (e10._status = 2, e10._result = r);
            }), e10._status === -1 && (e10._status = 0, e10._result = t);
          }
          if (e10._status === 1) return e10._result.default;
          throw e10._result;
        }
        var Tt = { current: null }, bs = { transition: null }, l6 = { ReactCurrentDispatcher: Tt, ReactCurrentBatchConfig: bs, ReactCurrentOwner: Td };
        function cg() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        fe.Children = { map: ws, forEach: function(e10, t, r) {
          ws(e10, function() {
            t.apply(this, arguments);
          }, r);
        }, count: function(e10) {
          var t = 0;
          return ws(e10, function() {
            t++;
          }), t;
        }, toArray: function(e10) {
          return ws(e10, function(t) {
            return t;
          }) || [];
        }, only: function(e10) {
          if (!Fd(e10)) throw Error("React.Children.only expected to receive a single React element child.");
          return e10;
        } };
        fe.Component = ci;
        fe.Fragment = G3;
        fe.Profiler = X3;
        fe.PureComponent = _d;
        fe.StrictMode = K3;
        fe.Suspense = e6;
        fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l6;
        fe.act = cg;
        fe.cloneElement = function(e10, t, r) {
          if (e10 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e10 + ".");
          var n = ag({}, e10.props), a = e10.key, i = e10.ref, o = e10._owner;
          if (t != null) {
            if (t.ref !== void 0 && (i = t.ref, o = Td.current), t.key !== void 0 && (a = "" + t.key), e10.type && e10.type.defaultProps) var l = e10.type.defaultProps;
            for (s in t) lg.call(t, s) && !sg.hasOwnProperty(s) && (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (s === 1) n.children = r;
          else if (1 < s) {
            l = Array(s);
            for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
            n.children = l;
          }
          return { $$typeof: Eo, type: e10.type, key: a, ref: i, props: n, _owner: o };
        };
        fe.createContext = function(e10) {
          return e10 = { $$typeof: Z3, _currentValue: e10, _currentValue2: e10, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e10.Provider = { $$typeof: Q3, _context: e10 }, e10.Consumer = e10;
        };
        fe.createElement = ug;
        fe.createFactory = function(e10) {
          var t = ug.bind(null, e10);
          return t.type = e10, t;
        };
        fe.createRef = function() {
          return { current: null };
        };
        fe.forwardRef = function(e10) {
          return { $$typeof: J3, render: e10 };
        };
        fe.isValidElement = Fd;
        fe.lazy = function(e10) {
          return { $$typeof: r6, _payload: { _status: -1, _result: e10 }, _init: o6 };
        };
        fe.memo = function(e10, t) {
          return { $$typeof: t6, type: e10, compare: t === void 0 ? null : t };
        };
        fe.startTransition = function(e10) {
          var t = bs.transition;
          bs.transition = {};
          try {
            e10();
          } finally {
            bs.transition = t;
          }
        };
        fe.unstable_act = cg;
        fe.useCallback = function(e10, t) {
          return Tt.current.useCallback(e10, t);
        };
        fe.useContext = function(e10) {
          return Tt.current.useContext(e10);
        };
        fe.useDebugValue = function() {
        };
        fe.useDeferredValue = function(e10) {
          return Tt.current.useDeferredValue(e10);
        };
        fe.useEffect = function(e10, t) {
          return Tt.current.useEffect(e10, t);
        };
        fe.useId = function() {
          return Tt.current.useId();
        };
        fe.useImperativeHandle = function(e10, t, r) {
          return Tt.current.useImperativeHandle(e10, t, r);
        };
        fe.useInsertionEffect = function(e10, t) {
          return Tt.current.useInsertionEffect(e10, t);
        };
        fe.useLayoutEffect = function(e10, t) {
          return Tt.current.useLayoutEffect(e10, t);
        };
        fe.useMemo = function(e10, t) {
          return Tt.current.useMemo(e10, t);
        };
        fe.useReducer = function(e10, t, r) {
          return Tt.current.useReducer(e10, t, r);
        };
        fe.useRef = function(e10) {
          return Tt.current.useRef(e10);
        };
        fe.useState = function(e10) {
          return Tt.current.useState(e10);
        };
        fe.useSyncExternalStore = function(e10, t, r) {
          return Tt.current.useSyncExternalStore(e10, t, r);
        };
        fe.useTransition = function() {
          return Tt.current.useTransition();
        };
        fe.version = "18.3.1";
      });
      te = Rr((FN, fg) => {
        "use strict";
        fg.exports = dg();
      });
      pg = Rr((ks) => {
        "use strict";
        var s6 = te(), u6 = /* @__PURE__ */ Symbol.for("react.element"), c6 = /* @__PURE__ */ Symbol.for("react.fragment"), d6 = Object.prototype.hasOwnProperty, f6 = s6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h6 = { key: true, ref: true, __self: true, __source: true };
        function hg(e6, t, r) {
          var n, a = {}, i = null, o = null;
          r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
          for (n in t) d6.call(t, n) && !h6.hasOwnProperty(n) && (a[n] = t[n]);
          if (e6 && e6.defaultProps) for (n in t = e6.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
          return { $$typeof: u6, type: e6, key: i, ref: o, props: a, _owner: f6.current };
        }
        ks.Fragment = c6;
        ks.jsx = hg;
        ks.jsxs = hg;
      });
      be = Rr((zN, mg) => {
        "use strict";
        mg.exports = pg();
      });
      Sg = Rr((De) => {
        "use strict";
        function Id(e6, t) {
          var r = e6.length;
          e6.push(t);
          e: for (; 0 < r; ) {
            var n = r - 1 >>> 1, a = e6[n];
            if (0 < Es(a, t)) e6[n] = t, e6[r] = a, r = n;
            else break e;
          }
        }
        function Sr(e6) {
          return e6.length === 0 ? null : e6[0];
        }
        function Ss(e6) {
          if (e6.length === 0) return null;
          var t = e6[0], r = e6.pop();
          if (r !== t) {
            e6[0] = r;
            e: for (var n = 0, a = e6.length, i = a >>> 1; n < i; ) {
              var o = 2 * (n + 1) - 1, l = e6[o], s = o + 1, u = e6[s];
              if (0 > Es(l, r)) s < a && 0 > Es(u, l) ? (e6[n] = u, e6[s] = r, n = s) : (e6[n] = l, e6[o] = r, n = o);
              else if (s < a && 0 > Es(u, r)) e6[n] = u, e6[s] = r, n = s;
              else break e;
            }
          }
          return t;
        }
        function Es(e6, t) {
          var r = e6.sortIndex - t.sortIndex;
          return r !== 0 ? r : e6.id - t.id;
        }
        typeof performance == "object" && typeof performance.now == "function" ? (gg = performance, De.unstable_now = function() {
          return gg.now();
        }) : ($d = Date, vg = $d.now(), De.unstable_now = function() {
          return $d.now() - vg;
        });
        var gg, $d, vg, Hr = [], Fn = [], p6 = 1, lr = null, xt = 3, Cs = false, Ra = false, So = false, xg = typeof setTimeout == "function" ? setTimeout : null, bg = typeof clearTimeout == "function" ? clearTimeout : null, yg = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function jd(e6) {
          for (var t = Sr(Fn); t !== null; ) {
            if (t.callback === null) Ss(Fn);
            else if (t.startTime <= e6) Ss(Fn), t.sortIndex = t.expirationTime, Id(Hr, t);
            else break;
            t = Sr(Fn);
          }
        }
        function Hd(e6) {
          if (So = false, jd(e6), !Ra) if (Sr(Hr) !== null) Ra = true, Bd(Ud);
          else {
            var t = Sr(Fn);
            t !== null && Vd(Hd, t.startTime - e6);
          }
        }
        function Ud(e6, t) {
          Ra = false, So && (So = false, bg(Co), Co = -1), Cs = true;
          var r = xt;
          try {
            for (jd(t), lr = Sr(Hr); lr !== null && (!(lr.expirationTime > t) || e6 && !Rg()); ) {
              var n = lr.callback;
              if (typeof n == "function") {
                lr.callback = null, xt = lr.priorityLevel;
                var a = n(lr.expirationTime <= t);
                t = De.unstable_now(), typeof a == "function" ? lr.callback = a : lr === Sr(Hr) && Ss(Hr), jd(t);
              } else Ss(Hr);
              lr = Sr(Hr);
            }
            if (lr !== null) var i = true;
            else {
              var o = Sr(Fn);
              o !== null && Vd(Hd, o.startTime - t), i = false;
            }
            return i;
          } finally {
            lr = null, xt = r, Cs = false;
          }
        }
        var Ds = false, Rs = null, Co = -1, kg = 5, Eg = -1;
        function Rg() {
          return !(De.unstable_now() - Eg < kg);
        }
        function zd() {
          if (Rs !== null) {
            var e6 = De.unstable_now();
            Eg = e6;
            var t = true;
            try {
              t = Rs(true, e6);
            } finally {
              t ? Ro() : (Ds = false, Rs = null);
            }
          } else Ds = false;
        }
        var Ro;
        typeof yg == "function" ? Ro = function() {
          yg(zd);
        } : typeof MessageChannel < "u" ? (Od = new MessageChannel(), wg = Od.port2, Od.port1.onmessage = zd, Ro = function() {
          wg.postMessage(null);
        }) : Ro = function() {
          xg(zd, 0);
        };
        var Od, wg;
        function Bd(e6) {
          Rs = e6, Ds || (Ds = true, Ro());
        }
        function Vd(e6, t) {
          Co = xg(function() {
            e6(De.unstable_now());
          }, t);
        }
        De.unstable_IdlePriority = 5;
        De.unstable_ImmediatePriority = 1;
        De.unstable_LowPriority = 4;
        De.unstable_NormalPriority = 3;
        De.unstable_Profiling = null;
        De.unstable_UserBlockingPriority = 2;
        De.unstable_cancelCallback = function(e6) {
          e6.callback = null;
        };
        De.unstable_continueExecution = function() {
          Ra || Cs || (Ra = true, Bd(Ud));
        };
        De.unstable_forceFrameRate = function(e6) {
          0 > e6 || 125 < e6 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : kg = 0 < e6 ? Math.floor(1e3 / e6) : 5;
        };
        De.unstable_getCurrentPriorityLevel = function() {
          return xt;
        };
        De.unstable_getFirstCallbackNode = function() {
          return Sr(Hr);
        };
        De.unstable_next = function(e6) {
          switch (xt) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = xt;
          }
          var r = xt;
          xt = t;
          try {
            return e6();
          } finally {
            xt = r;
          }
        };
        De.unstable_pauseExecution = function() {
        };
        De.unstable_requestPaint = function() {
        };
        De.unstable_runWithPriority = function(e6, t) {
          switch (e6) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e6 = 3;
          }
          var r = xt;
          xt = e6;
          try {
            return t();
          } finally {
            xt = r;
          }
        };
        De.unstable_scheduleCallback = function(e6, t, r) {
          var n = De.unstable_now();
          switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? n + r : n) : r = n, e6) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 1073741823;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return a = r + a, e6 = { id: p6++, callback: t, priorityLevel: e6, startTime: r, expirationTime: a, sortIndex: -1 }, r > n ? (e6.sortIndex = r, Id(Fn, e6), Sr(Hr) === null && e6 === Sr(Fn) && (So ? (bg(Co), Co = -1) : So = true, Vd(Hd, r - n))) : (e6.sortIndex = a, Id(Hr, e6), Ra || Cs || (Ra = true, Bd(Ud))), e6;
        };
        De.unstable_shouldYield = Rg;
        De.unstable_wrapCallback = function(e6) {
          var t = xt;
          return function() {
            var r = xt;
            xt = t;
            try {
              return e6.apply(this, arguments);
            } finally {
              xt = r;
            }
          };
        };
      });
      Dg = Rr((IN, Cg) => {
        "use strict";
        Cg.exports = Sg();
      });
      Py = Rr((rr) => {
        "use strict";
        var m6 = te(), er = Dg();
        function O(e6) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e6, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
          return "Minified React error #" + e6 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var Tv = /* @__PURE__ */ new Set(), Go = {};
        function za(e6, t) {
          Pi(e6, t), Pi(e6 + "Capture", t);
        }
        function Pi(e6, t) {
          for (Go[e6] = t, e6 = 0; e6 < t.length; e6++) Tv.add(t[e6]);
        }
        var fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pf = Object.prototype.hasOwnProperty, g6 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ng = {}, Lg = {};
        function v6(e6) {
          return pf.call(Lg, e6) ? true : pf.call(Ng, e6) ? false : g6.test(e6) ? Lg[e6] = true : (Ng[e6] = true, false);
        }
        function y6(e6, t, r, n) {
          if (r !== null && r.type === 0) return false;
          switch (typeof t) {
            case "function":
            case "symbol":
              return true;
            case "boolean":
              return n ? false : r !== null ? !r.acceptsBooleans : (e6 = e6.toLowerCase().slice(0, 5), e6 !== "data-" && e6 !== "aria-");
            default:
              return false;
          }
        }
        function w6(e6, t, r, n) {
          if (t === null || typeof t > "u" || y6(e6, t, r, n)) return true;
          if (n) return false;
          if (r !== null) switch (r.type) {
            case 3:
              return !t;
            case 4:
              return t === false;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
          return false;
        }
        function zt(e6, t, r, n, a, i, o) {
          this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e6, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
        }
        var pt = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e6) {
          pt[e6] = new zt(e6, 0, false, e6, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e6) {
          var t = e6[0];
          pt[t] = new zt(t, 1, false, e6[1], null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e6) {
          pt[e6] = new zt(e6, 2, false, e6.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e6) {
          pt[e6] = new zt(e6, 2, false, e6, null, false, false);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e6) {
          pt[e6] = new zt(e6, 3, false, e6.toLowerCase(), null, false, false);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e6) {
          pt[e6] = new zt(e6, 3, true, e6, null, false, false);
        });
        ["capture", "download"].forEach(function(e6) {
          pt[e6] = new zt(e6, 4, false, e6, null, false, false);
        });
        ["cols", "rows", "size", "span"].forEach(function(e6) {
          pt[e6] = new zt(e6, 6, false, e6, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(e6) {
          pt[e6] = new zt(e6, 5, false, e6.toLowerCase(), null, false, false);
        });
        var oh = /[\-:]([a-z])/g;
        function lh(e6) {
          return e6[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e6) {
          var t = e6.replace(oh, lh);
          pt[t] = new zt(t, 1, false, e6, null, false, false);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e6) {
          var t = e6.replace(oh, lh);
          pt[t] = new zt(t, 1, false, e6, "http://www.w3.org/1999/xlink", false, false);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e6) {
          var t = e6.replace(oh, lh);
          pt[t] = new zt(t, 1, false, e6, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(e6) {
          pt[e6] = new zt(e6, 1, false, e6.toLowerCase(), null, false, false);
        });
        pt.xlinkHref = new zt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(e6) {
          pt[e6] = new zt(e6, 1, false, e6.toLowerCase(), null, true, true);
        });
        function sh(e6, t, r, n) {
          var a = pt.hasOwnProperty(t) ? pt[t] : null;
          (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w6(t, r, a, n) && (r = null), n || a === null ? v6(t) && (r === null ? e6.removeAttribute(t) : e6.setAttribute(t, "" + r)) : a.mustUseProperty ? e6[a.propertyName] = r === null ? a.type === 3 ? false : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e6.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === true ? "" : "" + r, n ? e6.setAttributeNS(n, t, r) : e6.setAttribute(t, r))));
        }
        var gn = m6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ns = /* @__PURE__ */ Symbol.for("react.element"), hi = /* @__PURE__ */ Symbol.for("react.portal"), pi = /* @__PURE__ */ Symbol.for("react.fragment"), uh = /* @__PURE__ */ Symbol.for("react.strict_mode"), mf = /* @__PURE__ */ Symbol.for("react.profiler"), Fv = /* @__PURE__ */ Symbol.for("react.provider"), $v = /* @__PURE__ */ Symbol.for("react.context"), ch = /* @__PURE__ */ Symbol.for("react.forward_ref"), gf = /* @__PURE__ */ Symbol.for("react.suspense"), vf = /* @__PURE__ */ Symbol.for("react.suspense_list"), dh = /* @__PURE__ */ Symbol.for("react.memo"), zn = /* @__PURE__ */ Symbol.for("react.lazy"), zv = /* @__PURE__ */ Symbol.for("react.offscreen"), Mg = Symbol.iterator;
        function Do(e6) {
          return e6 === null || typeof e6 != "object" ? null : (e6 = Mg && e6[Mg] || e6["@@iterator"], typeof e6 == "function" ? e6 : null);
        }
        var je = Object.assign, Wd;
        function Fo(e6) {
          if (Wd === void 0) try {
            throw Error();
          } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Wd = t && t[1] || "";
          }
          return `
` + Wd + e6;
        }
        var Yd = false;
        function qd(e6, t) {
          if (!e6 || Yd) return "";
          Yd = true;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t) if (t = function() {
              throw Error();
            }, Object.defineProperty(t.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var n = u;
              }
              Reflect.construct(e6, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                n = u;
              }
              e6.call(t.prototype);
            }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e6();
            }
          } catch (u) {
            if (u && n && typeof u.stack == "string") {
              for (var a = u.stack.split(`
`), i = n.stack.split(`
`), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l]; ) l--;
              for (; 1 <= o && 0 <= l; o--, l--) if (a[o] !== i[l]) {
                if (o !== 1 || l !== 1) do
                  if (o--, l--, 0 > l || a[o] !== i[l]) {
                    var s = `
` + a[o].replace(" at new ", " at ");
                    return e6.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e6.displayName)), s;
                  }
                while (1 <= o && 0 <= l);
                break;
              }
            }
          } finally {
            Yd = false, Error.prepareStackTrace = r;
          }
          return (e6 = e6 ? e6.displayName || e6.name : "") ? Fo(e6) : "";
        }
        function x6(e6) {
          switch (e6.tag) {
            case 5:
              return Fo(e6.type);
            case 16:
              return Fo("Lazy");
            case 13:
              return Fo("Suspense");
            case 19:
              return Fo("SuspenseList");
            case 0:
            case 2:
            case 15:
              return e6 = qd(e6.type, false), e6;
            case 11:
              return e6 = qd(e6.type.render, false), e6;
            case 1:
              return e6 = qd(e6.type, true), e6;
            default:
              return "";
          }
        }
        function yf(e6) {
          if (e6 == null) return null;
          if (typeof e6 == "function") return e6.displayName || e6.name || null;
          if (typeof e6 == "string") return e6;
          switch (e6) {
            case pi:
              return "Fragment";
            case hi:
              return "Portal";
            case mf:
              return "Profiler";
            case uh:
              return "StrictMode";
            case gf:
              return "Suspense";
            case vf:
              return "SuspenseList";
          }
          if (typeof e6 == "object") switch (e6.$$typeof) {
            case $v:
              return (e6.displayName || "Context") + ".Consumer";
            case Fv:
              return (e6._context.displayName || "Context") + ".Provider";
            case ch:
              var t = e6.render;
              return e6 = e6.displayName, e6 || (e6 = t.displayName || t.name || "", e6 = e6 !== "" ? "ForwardRef(" + e6 + ")" : "ForwardRef"), e6;
            case dh:
              return t = e6.displayName || null, t !== null ? t : yf(e6.type) || "Memo";
            case zn:
              t = e6._payload, e6 = e6._init;
              try {
                return yf(e6(t));
              } catch {
              }
          }
          return null;
        }
        function b6(e6) {
          var t = e6.type;
          switch (e6.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return e6 = t.render, e6 = e6.displayName || e6.name || "", t.displayName || (e6 !== "" ? "ForwardRef(" + e6 + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return yf(t);
            case 8:
              return t === uh ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if (typeof t == "function") return t.displayName || t.name || null;
              if (typeof t == "string") return t;
          }
          return null;
        }
        function Qn(e6) {
          switch (typeof e6) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return e6;
            case "object":
              return e6;
            default:
              return "";
          }
        }
        function Ov(e6) {
          var t = e6.type;
          return (e6 = e6.nodeName) && e6.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function k6(e6) {
          var t = Ov(e6) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e6.constructor.prototype, t), n = "" + e6[t];
          if (!e6.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var a = r.get, i = r.set;
            return Object.defineProperty(e6, t, { configurable: true, get: function() {
              return a.call(this);
            }, set: function(o) {
              n = "" + o, i.call(this, o);
            } }), Object.defineProperty(e6, t, { enumerable: r.enumerable }), { getValue: function() {
              return n;
            }, setValue: function(o) {
              n = "" + o;
            }, stopTracking: function() {
              e6._valueTracker = null, delete e6[t];
            } };
          }
        }
        function Ls(e6) {
          e6._valueTracker || (e6._valueTracker = k6(e6));
        }
        function Iv(e6) {
          if (!e6) return false;
          var t = e6._valueTracker;
          if (!t) return true;
          var r = t.getValue(), n = "";
          return e6 && (n = Ov(e6) ? e6.checked ? "true" : "false" : e6.value), e6 = n, e6 !== r ? (t.setValue(e6), true) : false;
        }
        function nu(e6) {
          if (e6 = e6 || (typeof document < "u" ? document : void 0), typeof e6 > "u") return null;
          try {
            return e6.activeElement || e6.body;
          } catch {
            return e6.body;
          }
        }
        function wf(e6, t) {
          var r = t.checked;
          return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e6._wrapperState.initialChecked });
        }
        function Pg(e6, t) {
          var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
          r = Qn(t.value != null ? t.value : r), e6._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
        }
        function jv(e6, t) {
          t = t.checked, t != null && sh(e6, "checked", t, false);
        }
        function xf(e6, t) {
          jv(e6, t);
          var r = Qn(t.value), n = t.type;
          if (r != null) n === "number" ? (r === 0 && e6.value === "" || e6.value != r) && (e6.value = "" + r) : e6.value !== "" + r && (e6.value = "" + r);
          else if (n === "submit" || n === "reset") {
            e6.removeAttribute("value");
            return;
          }
          t.hasOwnProperty("value") ? bf(e6, t.type, r) : t.hasOwnProperty("defaultValue") && bf(e6, t.type, Qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e6.defaultChecked = !!t.defaultChecked);
        }
        function _g(e6, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e6._wrapperState.initialValue, r || t === e6.value || (e6.value = t), e6.defaultValue = t;
          }
          r = e6.name, r !== "" && (e6.name = ""), e6.defaultChecked = !!e6._wrapperState.initialChecked, r !== "" && (e6.name = r);
        }
        function bf(e6, t, r) {
          (t !== "number" || nu(e6.ownerDocument) !== e6) && (r == null ? e6.defaultValue = "" + e6._wrapperState.initialValue : e6.defaultValue !== "" + r && (e6.defaultValue = "" + r));
        }
        var $o = Array.isArray;
        function Si(e6, t, r, n) {
          if (e6 = e6.options, t) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = true;
            for (r = 0; r < e6.length; r++) a = t.hasOwnProperty("$" + e6[r].value), e6[r].selected !== a && (e6[r].selected = a), a && n && (e6[r].defaultSelected = true);
          } else {
            for (r = "" + Qn(r), t = null, a = 0; a < e6.length; a++) {
              if (e6[a].value === r) {
                e6[a].selected = true, n && (e6[a].defaultSelected = true);
                return;
              }
              t !== null || e6[a].disabled || (t = e6[a]);
            }
            t !== null && (t.selected = true);
          }
        }
        function kf(e6, t) {
          if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
          return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e6._wrapperState.initialValue });
        }
        function Ag(e6, t) {
          var r = t.value;
          if (r == null) {
            if (r = t.children, t = t.defaultValue, r != null) {
              if (t != null) throw Error(O(92));
              if ($o(r)) {
                if (1 < r.length) throw Error(O(93));
                r = r[0];
              }
              t = r;
            }
            t == null && (t = ""), r = t;
          }
          e6._wrapperState = { initialValue: Qn(r) };
        }
        function Hv(e6, t) {
          var r = Qn(t.value), n = Qn(t.defaultValue);
          r != null && (r = "" + r, r !== e6.value && (e6.value = r), t.defaultValue == null && e6.defaultValue !== r && (e6.defaultValue = r)), n != null && (e6.defaultValue = "" + n);
        }
        function Tg(e6) {
          var t = e6.textContent;
          t === e6._wrapperState.initialValue && t !== "" && t !== null && (e6.value = t);
        }
        function Uv(e6) {
          switch (e6) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function Ef(e6, t) {
          return e6 == null || e6 === "http://www.w3.org/1999/xhtml" ? Uv(t) : e6 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e6;
        }
        var Ms, Bv = (function(e6) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
            MSApp.execUnsafeLocalFunction(function() {
              return e6(t, r, n, a);
            });
          } : e6;
        })(function(e6, t) {
          if (e6.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e6) e6.innerHTML = t;
          else {
            for (Ms = Ms || document.createElement("div"), Ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ms.firstChild; e6.firstChild; ) e6.removeChild(e6.firstChild);
            for (; t.firstChild; ) e6.appendChild(t.firstChild);
          }
        });
        function Ko(e6, t) {
          if (t) {
            var r = e6.firstChild;
            if (r && r === e6.lastChild && r.nodeType === 3) {
              r.nodeValue = t;
              return;
            }
          }
          e6.textContent = t;
        }
        var Io = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, E6 = ["Webkit", "ms", "Moz", "O"];
        Object.keys(Io).forEach(function(e6) {
          E6.forEach(function(t) {
            t = t + e6.charAt(0).toUpperCase() + e6.substring(1), Io[t] = Io[e6];
          });
        });
        function Vv(e6, t, r) {
          return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Io.hasOwnProperty(e6) && Io[e6] ? ("" + t).trim() : t + "px";
        }
        function Wv(e6, t) {
          e6 = e6.style;
          for (var r in t) if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0, a = Vv(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e6.setProperty(r, a) : e6[r] = a;
          }
        }
        var R6 = je({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
        function Rf(e6, t) {
          if (t) {
            if (R6[e6] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e6));
            if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null) throw Error(O(60));
              if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(O(62));
          }
        }
        function Sf(e6, t) {
          if (e6.indexOf("-") === -1) return typeof t.is == "string";
          switch (e6) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var Cf = null;
        function fh(e6) {
          return e6 = e6.target || e6.srcElement || window, e6.correspondingUseElement && (e6 = e6.correspondingUseElement), e6.nodeType === 3 ? e6.parentNode : e6;
        }
        var Df = null, Ci = null, Di = null;
        function Fg(e6) {
          if (e6 = hl(e6)) {
            if (typeof Df != "function") throw Error(O(280));
            var t = e6.stateNode;
            t && (t = Pu(t), Df(e6.stateNode, e6.type, t));
          }
        }
        function Yv(e6) {
          Ci ? Di ? Di.push(e6) : Di = [e6] : Ci = e6;
        }
        function qv() {
          if (Ci) {
            var e6 = Ci, t = Di;
            if (Di = Ci = null, Fg(e6), t) for (e6 = 0; e6 < t.length; e6++) Fg(t[e6]);
          }
        }
        function Gv(e6, t) {
          return e6(t);
        }
        function Kv() {
        }
        var Gd = false;
        function Xv(e6, t, r) {
          if (Gd) return e6(t, r);
          Gd = true;
          try {
            return Gv(e6, t, r);
          } finally {
            Gd = false, (Ci !== null || Di !== null) && (Kv(), qv());
          }
        }
        function Xo(e6, t) {
          var r = e6.stateNode;
          if (r === null) return null;
          var n = Pu(r);
          if (n === null) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) || (e6 = e6.type, n = !(e6 === "button" || e6 === "input" || e6 === "select" || e6 === "textarea")), e6 = !n;
              break e;
            default:
              e6 = false;
          }
          if (e6) return null;
          if (r && typeof r != "function") throw Error(O(231, t, typeof r));
          return r;
        }
        var Nf = false;
        if (fn) try {
          di = {}, Object.defineProperty(di, "passive", { get: function() {
            Nf = true;
          } }), window.addEventListener("test", di, di), window.removeEventListener("test", di, di);
        } catch {
          Nf = false;
        }
        var di;
        function S6(e6, t, r, n, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var jo = false, au = null, iu = false, Lf = null, C6 = { onError: function(e6) {
          jo = true, au = e6;
        } };
        function D6(e6, t, r, n, a, i, o, l, s) {
          jo = false, au = null, S6.apply(C6, arguments);
        }
        function N6(e6, t, r, n, a, i, o, l, s) {
          if (D6.apply(this, arguments), jo) {
            if (jo) {
              var u = au;
              jo = false, au = null;
            } else throw Error(O(198));
            iu || (iu = true, Lf = u);
          }
        }
        function Oa(e6) {
          var t = e6, r = e6;
          if (e6.alternate) for (; t.return; ) t = t.return;
          else {
            e6 = t;
            do
              t = e6, (t.flags & 4098) !== 0 && (r = t.return), e6 = t.return;
            while (e6);
          }
          return t.tag === 3 ? r : null;
        }
        function Qv(e6) {
          if (e6.tag === 13) {
            var t = e6.memoizedState;
            if (t === null && (e6 = e6.alternate, e6 !== null && (t = e6.memoizedState)), t !== null) return t.dehydrated;
          }
          return null;
        }
        function $g(e6) {
          if (Oa(e6) !== e6) throw Error(O(188));
        }
        function L6(e6) {
          var t = e6.alternate;
          if (!t) {
            if (t = Oa(e6), t === null) throw Error(O(188));
            return t !== e6 ? null : e6;
          }
          for (var r = e6, n = t; ; ) {
            var a = r.return;
            if (a === null) break;
            var i = a.alternate;
            if (i === null) {
              if (n = a.return, n !== null) {
                r = n;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i; ) {
                if (i === r) return $g(a), e6;
                if (i === n) return $g(a), t;
                i = i.sibling;
              }
              throw Error(O(188));
            }
            if (r.return !== n.return) r = a, n = i;
            else {
              for (var o = false, l = a.child; l; ) {
                if (l === r) {
                  o = true, r = a, n = i;
                  break;
                }
                if (l === n) {
                  o = true, n = a, r = i;
                  break;
                }
                l = l.sibling;
              }
              if (!o) {
                for (l = i.child; l; ) {
                  if (l === r) {
                    o = true, r = i, n = a;
                    break;
                  }
                  if (l === n) {
                    o = true, n = i, r = a;
                    break;
                  }
                  l = l.sibling;
                }
                if (!o) throw Error(O(189));
              }
            }
            if (r.alternate !== n) throw Error(O(190));
          }
          if (r.tag !== 3) throw Error(O(188));
          return r.stateNode.current === r ? e6 : t;
        }
        function Zv(e6) {
          return e6 = L6(e6), e6 !== null ? Jv(e6) : null;
        }
        function Jv(e6) {
          if (e6.tag === 5 || e6.tag === 6) return e6;
          for (e6 = e6.child; e6 !== null; ) {
            var t = Jv(e6);
            if (t !== null) return t;
            e6 = e6.sibling;
          }
          return null;
        }
        var e1 = er.unstable_scheduleCallback, zg = er.unstable_cancelCallback, M6 = er.unstable_shouldYield, P6 = er.unstable_requestPaint, qe = er.unstable_now, _6 = er.unstable_getCurrentPriorityLevel, hh = er.unstable_ImmediatePriority, t1 = er.unstable_UserBlockingPriority, ou = er.unstable_NormalPriority, A6 = er.unstable_LowPriority, r1 = er.unstable_IdlePriority, Du = null, Wr = null;
        function T6(e6) {
          if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
            Wr.onCommitFiberRoot(Du, e6, void 0, (e6.current.flags & 128) === 128);
          } catch {
          }
        }
        var Mr = Math.clz32 ? Math.clz32 : z6, F6 = Math.log, $6 = Math.LN2;
        function z6(e6) {
          return e6 >>>= 0, e6 === 0 ? 32 : 31 - (F6(e6) / $6 | 0) | 0;
        }
        var Ps = 64, _s = 4194304;
        function zo(e6) {
          switch (e6 & -e6) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e6 & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return e6 & 130023424;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e6;
          }
        }
        function lu(e6, t) {
          var r = e6.pendingLanes;
          if (r === 0) return 0;
          var n = 0, a = e6.suspendedLanes, i = e6.pingedLanes, o = r & 268435455;
          if (o !== 0) {
            var l = o & ~a;
            l !== 0 ? n = zo(l) : (i &= o, i !== 0 && (n = zo(i)));
          } else o = r & ~a, o !== 0 ? n = zo(o) : i !== 0 && (n = zo(i));
          if (n === 0) return 0;
          if (t !== 0 && t !== n && (t & a) === 0 && (a = n & -n, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
          if ((n & 4) !== 0 && (n |= r & 16), t = e6.entangledLanes, t !== 0) for (e6 = e6.entanglements, t &= n; 0 < t; ) r = 31 - Mr(t), a = 1 << r, n |= e6[r], t &= ~a;
          return n;
        }
        function O6(e6, t) {
          switch (e6) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function I6(e6, t) {
          for (var r = e6.suspendedLanes, n = e6.pingedLanes, a = e6.expirationTimes, i = e6.pendingLanes; 0 < i; ) {
            var o = 31 - Mr(i), l = 1 << o, s = a[o];
            s === -1 ? ((l & r) === 0 || (l & n) !== 0) && (a[o] = O6(l, t)) : s <= t && (e6.expiredLanes |= l), i &= ~l;
          }
        }
        function Mf(e6) {
          return e6 = e6.pendingLanes & -1073741825, e6 !== 0 ? e6 : e6 & 1073741824 ? 1073741824 : 0;
        }
        function n1() {
          var e6 = Ps;
          return Ps <<= 1, (Ps & 4194240) === 0 && (Ps = 64), e6;
        }
        function Kd(e6) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e6);
          return t;
        }
        function dl(e6, t, r) {
          e6.pendingLanes |= t, t !== 536870912 && (e6.suspendedLanes = 0, e6.pingedLanes = 0), e6 = e6.eventTimes, t = 31 - Mr(t), e6[t] = r;
        }
        function j6(e6, t) {
          var r = e6.pendingLanes & ~t;
          e6.pendingLanes = t, e6.suspendedLanes = 0, e6.pingedLanes = 0, e6.expiredLanes &= t, e6.mutableReadLanes &= t, e6.entangledLanes &= t, t = e6.entanglements;
          var n = e6.eventTimes;
          for (e6 = e6.expirationTimes; 0 < r; ) {
            var a = 31 - Mr(r), i = 1 << a;
            t[a] = 0, n[a] = -1, e6[a] = -1, r &= ~i;
          }
        }
        function ph(e6, t) {
          var r = e6.entangledLanes |= t;
          for (e6 = e6.entanglements; r; ) {
            var n = 31 - Mr(r), a = 1 << n;
            a & t | e6[n] & t && (e6[n] |= t), r &= ~a;
          }
        }
        var ke = 0;
        function a1(e6) {
          return e6 &= -e6, 1 < e6 ? 4 < e6 ? (e6 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
        }
        var i1, mh, o1, l1, s1, Pf = false, As = [], Bn = null, Vn = null, Wn = null, Qo = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), In = [], H6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function Og(e6, t) {
          switch (e6) {
            case "focusin":
            case "focusout":
              Bn = null;
              break;
            case "dragenter":
            case "dragleave":
              Vn = null;
              break;
            case "mouseover":
            case "mouseout":
              Wn = null;
              break;
            case "pointerover":
            case "pointerout":
              Qo.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Zo.delete(t.pointerId);
          }
        }
        function No(e6, t, r, n, a, i) {
          return e6 === null || e6.nativeEvent !== i ? (e6 = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, t !== null && (t = hl(t), t !== null && mh(t)), e6) : (e6.eventSystemFlags |= n, t = e6.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e6);
        }
        function U6(e6, t, r, n, a) {
          switch (t) {
            case "focusin":
              return Bn = No(Bn, e6, t, r, n, a), true;
            case "dragenter":
              return Vn = No(Vn, e6, t, r, n, a), true;
            case "mouseover":
              return Wn = No(Wn, e6, t, r, n, a), true;
            case "pointerover":
              var i = a.pointerId;
              return Qo.set(i, No(Qo.get(i) || null, e6, t, r, n, a)), true;
            case "gotpointercapture":
              return i = a.pointerId, Zo.set(i, No(Zo.get(i) || null, e6, t, r, n, a)), true;
          }
          return false;
        }
        function u1(e6) {
          var t = Da(e6.target);
          if (t !== null) {
            var r = Oa(t);
            if (r !== null) {
              if (t = r.tag, t === 13) {
                if (t = Qv(r), t !== null) {
                  e6.blockedOn = t, s1(e6.priority, function() {
                    o1(r);
                  });
                  return;
                }
              } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e6.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return;
              }
            }
          }
          e6.blockedOn = null;
        }
        function qs(e6) {
          if (e6.blockedOn !== null) return false;
          for (var t = e6.targetContainers; 0 < t.length; ) {
            var r = _f(e6.domEventName, e6.eventSystemFlags, t[0], e6.nativeEvent);
            if (r === null) {
              r = e6.nativeEvent;
              var n = new r.constructor(r.type, r);
              Cf = n, r.target.dispatchEvent(n), Cf = null;
            } else return t = hl(r), t !== null && mh(t), e6.blockedOn = r, false;
            t.shift();
          }
          return true;
        }
        function Ig(e6, t, r) {
          qs(e6) && r.delete(t);
        }
        function B6() {
          Pf = false, Bn !== null && qs(Bn) && (Bn = null), Vn !== null && qs(Vn) && (Vn = null), Wn !== null && qs(Wn) && (Wn = null), Qo.forEach(Ig), Zo.forEach(Ig);
        }
        function Lo(e6, t) {
          e6.blockedOn === t && (e6.blockedOn = null, Pf || (Pf = true, er.unstable_scheduleCallback(er.unstable_NormalPriority, B6)));
        }
        function Jo(e6) {
          function t(a) {
            return Lo(a, e6);
          }
          if (0 < As.length) {
            Lo(As[0], e6);
            for (var r = 1; r < As.length; r++) {
              var n = As[r];
              n.blockedOn === e6 && (n.blockedOn = null);
            }
          }
          for (Bn !== null && Lo(Bn, e6), Vn !== null && Lo(Vn, e6), Wn !== null && Lo(Wn, e6), Qo.forEach(t), Zo.forEach(t), r = 0; r < In.length; r++) n = In[r], n.blockedOn === e6 && (n.blockedOn = null);
          for (; 0 < In.length && (r = In[0], r.blockedOn === null); ) u1(r), r.blockedOn === null && In.shift();
        }
        var Ni = gn.ReactCurrentBatchConfig, su = true;
        function V6(e6, t, r, n) {
          var a = ke, i = Ni.transition;
          Ni.transition = null;
          try {
            ke = 1, gh(e6, t, r, n);
          } finally {
            ke = a, Ni.transition = i;
          }
        }
        function W6(e6, t, r, n) {
          var a = ke, i = Ni.transition;
          Ni.transition = null;
          try {
            ke = 4, gh(e6, t, r, n);
          } finally {
            ke = a, Ni.transition = i;
          }
        }
        function gh(e6, t, r, n) {
          if (su) {
            var a = _f(e6, t, r, n);
            if (a === null) rf(e6, t, n, uu, r), Og(e6, n);
            else if (U6(a, e6, t, r, n)) n.stopPropagation();
            else if (Og(e6, n), t & 4 && -1 < H6.indexOf(e6)) {
              for (; a !== null; ) {
                var i = hl(a);
                if (i !== null && i1(i), i = _f(e6, t, r, n), i === null && rf(e6, t, n, uu, r), i === a) break;
                a = i;
              }
              a !== null && n.stopPropagation();
            } else rf(e6, t, n, null, r);
          }
        }
        var uu = null;
        function _f(e6, t, r, n) {
          if (uu = null, e6 = fh(n), e6 = Da(e6), e6 !== null) if (t = Oa(e6), t === null) e6 = null;
          else if (r = t.tag, r === 13) {
            if (e6 = Qv(t), e6 !== null) return e6;
            e6 = null;
          } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e6 = null;
          } else t !== e6 && (e6 = null);
          return uu = e6, null;
        }
        function c1(e6) {
          switch (e6) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (_6()) {
                case hh:
                  return 1;
                case t1:
                  return 4;
                case ou:
                case A6:
                  return 16;
                case r1:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Hn = null, vh = null, Gs = null;
        function d1() {
          if (Gs) return Gs;
          var e6, t = vh, r = t.length, n, a = "value" in Hn ? Hn.value : Hn.textContent, i = a.length;
          for (e6 = 0; e6 < r && t[e6] === a[e6]; e6++) ;
          var o = r - e6;
          for (n = 1; n <= o && t[r - n] === a[i - n]; n++) ;
          return Gs = a.slice(e6, 1 < n ? 1 - n : void 0);
        }
        function Ks(e6) {
          var t = e6.keyCode;
          return "charCode" in e6 ? (e6 = e6.charCode, e6 === 0 && t === 13 && (e6 = 13)) : e6 = t, e6 === 10 && (e6 = 13), 32 <= e6 || e6 === 13 ? e6 : 0;
        }
        function Ts() {
          return true;
        }
        function jg() {
          return false;
        }
        function tr(e6) {
          function t(r, n, a, i, o) {
            this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var l in e6) e6.hasOwnProperty(l) && (r = e6[l], this[l] = r ? r(i) : i[l]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ts : jg, this.isPropagationStopped = jg, this;
          }
          return je(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = Ts);
          }, stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = Ts);
          }, persist: function() {
          }, isPersistent: Ts }), t;
        }
        var Oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e6) {
          return e6.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, yh = tr(Oi), fl = je({}, Oi, { view: 0, detail: 0 }), Y6 = tr(fl), Xd, Qd, Mo, Nu = je({}, fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wh, button: 0, buttons: 0, relatedTarget: function(e6) {
          return e6.relatedTarget === void 0 ? e6.fromElement === e6.srcElement ? e6.toElement : e6.fromElement : e6.relatedTarget;
        }, movementX: function(e6) {
          return "movementX" in e6 ? e6.movementX : (e6 !== Mo && (Mo && e6.type === "mousemove" ? (Xd = e6.screenX - Mo.screenX, Qd = e6.screenY - Mo.screenY) : Qd = Xd = 0, Mo = e6), Xd);
        }, movementY: function(e6) {
          return "movementY" in e6 ? e6.movementY : Qd;
        } }), Hg = tr(Nu), q6 = je({}, Nu, { dataTransfer: 0 }), G6 = tr(q6), K6 = je({}, fl, { relatedTarget: 0 }), Zd = tr(K6), X6 = je({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Q6 = tr(X6), Z6 = je({}, Oi, { clipboardData: function(e6) {
          return "clipboardData" in e6 ? e6.clipboardData : window.clipboardData;
        } }), J6 = tr(Z6), ek = je({}, Oi, { data: 0 }), Ug = tr(ek), tk = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, rk = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, nk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function ak(e6) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e6) : (e6 = nk[e6]) ? !!t[e6] : false;
        }
        function wh() {
          return ak;
        }
        var ik = je({}, fl, { key: function(e6) {
          if (e6.key) {
            var t = tk[e6.key] || e6.key;
            if (t !== "Unidentified") return t;
          }
          return e6.type === "keypress" ? (e6 = Ks(e6), e6 === 13 ? "Enter" : String.fromCharCode(e6)) : e6.type === "keydown" || e6.type === "keyup" ? rk[e6.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wh, charCode: function(e6) {
          return e6.type === "keypress" ? Ks(e6) : 0;
        }, keyCode: function(e6) {
          return e6.type === "keydown" || e6.type === "keyup" ? e6.keyCode : 0;
        }, which: function(e6) {
          return e6.type === "keypress" ? Ks(e6) : e6.type === "keydown" || e6.type === "keyup" ? e6.keyCode : 0;
        } }), ok = tr(ik), lk = je({}, Nu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bg = tr(lk), sk = je({}, fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wh }), uk = tr(sk), ck = je({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dk = tr(ck), fk = je({}, Nu, { deltaX: function(e6) {
          return "deltaX" in e6 ? e6.deltaX : "wheelDeltaX" in e6 ? -e6.wheelDeltaX : 0;
        }, deltaY: function(e6) {
          return "deltaY" in e6 ? e6.deltaY : "wheelDeltaY" in e6 ? -e6.wheelDeltaY : "wheelDelta" in e6 ? -e6.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), hk = tr(fk), pk = [9, 13, 27, 32], xh = fn && "CompositionEvent" in window, Ho = null;
        fn && "documentMode" in document && (Ho = document.documentMode);
        var mk = fn && "TextEvent" in window && !Ho, f1 = fn && (!xh || Ho && 8 < Ho && 11 >= Ho), Vg = " ", Wg = false;
        function h1(e6, t) {
          switch (e6) {
            case "keyup":
              return pk.indexOf(t.keyCode) !== -1;
            case "keydown":
              return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function p1(e6) {
          return e6 = e6.detail, typeof e6 == "object" && "data" in e6 ? e6.data : null;
        }
        var mi = false;
        function gk(e6, t) {
          switch (e6) {
            case "compositionend":
              return p1(t);
            case "keypress":
              return t.which !== 32 ? null : (Wg = true, Vg);
            case "textInput":
              return e6 = t.data, e6 === Vg && Wg ? null : e6;
            default:
              return null;
          }
        }
        function vk(e6, t) {
          if (mi) return e6 === "compositionend" || !xh && h1(e6, t) ? (e6 = d1(), Gs = vh = Hn = null, mi = false, e6) : null;
          switch (e6) {
            case "paste":
              return null;
            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }
              return null;
            case "compositionend":
              return f1 && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var yk = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function Yg(e6) {
          var t = e6 && e6.nodeName && e6.nodeName.toLowerCase();
          return t === "input" ? !!yk[e6.type] : t === "textarea";
        }
        function m1(e6, t, r, n) {
          Yv(n), t = cu(t, "onChange"), 0 < t.length && (r = new yh("onChange", "change", null, r, n), e6.push({ event: r, listeners: t }));
        }
        var Uo = null, el = null;
        function wk(e6) {
          C1(e6, 0);
        }
        function Lu(e6) {
          var t = yi(e6);
          if (Iv(t)) return e6;
        }
        function xk(e6, t) {
          if (e6 === "change") return t;
        }
        var g1 = false;
        fn && (fn ? ($s = "oninput" in document, $s || (Jd = document.createElement("div"), Jd.setAttribute("oninput", "return;"), $s = typeof Jd.oninput == "function"), Fs = $s) : Fs = false, g1 = Fs && (!document.documentMode || 9 < document.documentMode));
        var Fs, $s, Jd;
        function qg() {
          Uo && (Uo.detachEvent("onpropertychange", v1), el = Uo = null);
        }
        function v1(e6) {
          if (e6.propertyName === "value" && Lu(el)) {
            var t = [];
            m1(t, el, e6, fh(e6)), Xv(wk, t);
          }
        }
        function bk(e6, t, r) {
          e6 === "focusin" ? (qg(), Uo = t, el = r, Uo.attachEvent("onpropertychange", v1)) : e6 === "focusout" && qg();
        }
        function kk(e6) {
          if (e6 === "selectionchange" || e6 === "keyup" || e6 === "keydown") return Lu(el);
        }
        function Ek(e6, t) {
          if (e6 === "click") return Lu(t);
        }
        function Rk(e6, t) {
          if (e6 === "input" || e6 === "change") return Lu(t);
        }
        function Sk(e6, t) {
          return e6 === t && (e6 !== 0 || 1 / e6 === 1 / t) || e6 !== e6 && t !== t;
        }
        var _r = typeof Object.is == "function" ? Object.is : Sk;
        function tl(e6, t) {
          if (_r(e6, t)) return true;
          if (typeof e6 != "object" || e6 === null || typeof t != "object" || t === null) return false;
          var r = Object.keys(e6), n = Object.keys(t);
          if (r.length !== n.length) return false;
          for (n = 0; n < r.length; n++) {
            var a = r[n];
            if (!pf.call(t, a) || !_r(e6[a], t[a])) return false;
          }
          return true;
        }
        function Gg(e6) {
          for (; e6 && e6.firstChild; ) e6 = e6.firstChild;
          return e6;
        }
        function Kg(e6, t) {
          var r = Gg(e6);
          e6 = 0;
          for (var n; r; ) {
            if (r.nodeType === 3) {
              if (n = e6 + r.textContent.length, e6 <= t && n >= t) return { node: r, offset: t - e6 };
              e6 = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gg(r);
          }
        }
        function y1(e6, t) {
          return e6 && t ? e6 === t ? true : e6 && e6.nodeType === 3 ? false : t && t.nodeType === 3 ? y1(e6, t.parentNode) : "contains" in e6 ? e6.contains(t) : e6.compareDocumentPosition ? !!(e6.compareDocumentPosition(t) & 16) : false : false;
        }
        function w1() {
          for (var e6 = window, t = nu(); t instanceof e6.HTMLIFrameElement; ) {
            try {
              var r = typeof t.contentWindow.location.href == "string";
            } catch {
              r = false;
            }
            if (r) e6 = t.contentWindow;
            else break;
            t = nu(e6.document);
          }
          return t;
        }
        function bh(e6) {
          var t = e6 && e6.nodeName && e6.nodeName.toLowerCase();
          return t && (t === "input" && (e6.type === "text" || e6.type === "search" || e6.type === "tel" || e6.type === "url" || e6.type === "password") || t === "textarea" || e6.contentEditable === "true");
        }
        function Ck(e6) {
          var t = w1(), r = e6.focusedElem, n = e6.selectionRange;
          if (t !== r && r && r.ownerDocument && y1(r.ownerDocument.documentElement, r)) {
            if (n !== null && bh(r)) {
              if (t = n.start, e6 = n.end, e6 === void 0 && (e6 = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e6, r.value.length);
              else if (e6 = (t = r.ownerDocument || document) && t.defaultView || window, e6.getSelection) {
                e6 = e6.getSelection();
                var a = r.textContent.length, i = Math.min(n.start, a);
                n = n.end === void 0 ? i : Math.min(n.end, a), !e6.extend && i > n && (a = n, n = i, i = a), a = Kg(r, i);
                var o = Kg(r, n);
                a && o && (e6.rangeCount !== 1 || e6.anchorNode !== a.node || e6.anchorOffset !== a.offset || e6.focusNode !== o.node || e6.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e6.removeAllRanges(), i > n ? (e6.addRange(t), e6.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e6.addRange(t)));
              }
            }
            for (t = [], e6 = r; e6 = e6.parentNode; ) e6.nodeType === 1 && t.push({ element: e6, left: e6.scrollLeft, top: e6.scrollTop });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e6 = t[r], e6.element.scrollLeft = e6.left, e6.element.scrollTop = e6.top;
          }
        }
        var Dk = fn && "documentMode" in document && 11 >= document.documentMode, gi = null, Af = null, Bo = null, Tf = false;
        function Xg(e6, t, r) {
          var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
          Tf || gi == null || gi !== nu(n) || (n = gi, "selectionStart" in n && bh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Bo && tl(Bo, n) || (Bo = n, n = cu(Af, "onSelect"), 0 < n.length && (t = new yh("onSelect", "select", null, t, r), e6.push({ event: t, listeners: n }), t.target = gi)));
        }
        function zs(e6, t) {
          var r = {};
          return r[e6.toLowerCase()] = t.toLowerCase(), r["Webkit" + e6] = "webkit" + t, r["Moz" + e6] = "moz" + t, r;
        }
        var vi = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, ef = {}, x1 = {};
        fn && (x1 = document.createElement("div").style, "AnimationEvent" in window || (delete vi.animationend.animation, delete vi.animationiteration.animation, delete vi.animationstart.animation), "TransitionEvent" in window || delete vi.transitionend.transition);
        function Mu(e6) {
          if (ef[e6]) return ef[e6];
          if (!vi[e6]) return e6;
          var t = vi[e6], r;
          for (r in t) if (t.hasOwnProperty(r) && r in x1) return ef[e6] = t[r];
          return e6;
        }
        var b1 = Mu("animationend"), k1 = Mu("animationiteration"), E1 = Mu("animationstart"), R1 = Mu("transitionend"), S1 = /* @__PURE__ */ new Map(), Qg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function Jn(e6, t) {
          S1.set(e6, t), za(t, [e6]);
        }
        for (Os = 0; Os < Qg.length; Os++) Is = Qg[Os], Zg = Is.toLowerCase(), Jg = Is[0].toUpperCase() + Is.slice(1), Jn(Zg, "on" + Jg);
        var Is, Zg, Jg, Os;
        Jn(b1, "onAnimationEnd");
        Jn(k1, "onAnimationIteration");
        Jn(E1, "onAnimationStart");
        Jn("dblclick", "onDoubleClick");
        Jn("focusin", "onFocus");
        Jn("focusout", "onBlur");
        Jn(R1, "onTransitionEnd");
        Pi("onMouseEnter", ["mouseout", "mouseover"]);
        Pi("onMouseLeave", ["mouseout", "mouseover"]);
        Pi("onPointerEnter", ["pointerout", "pointerover"]);
        Pi("onPointerLeave", ["pointerout", "pointerover"]);
        za("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        za("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        za("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        za("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        za("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));
        function ev(e6, t, r) {
          var n = e6.type || "unknown-event";
          e6.currentTarget = r, N6(n, t, void 0, e6), e6.currentTarget = null;
        }
        function C1(e6, t) {
          t = (t & 4) !== 0;
          for (var r = 0; r < e6.length; r++) {
            var n = e6[r], a = n.event;
            n = n.listeners;
            e: {
              var i = void 0;
              if (t) for (var o = n.length - 1; 0 <= o; o--) {
                var l = n[o], s = l.instance, u = l.currentTarget;
                if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                ev(a, l, u), i = s;
              }
              else for (o = 0; o < n.length; o++) {
                if (l = n[o], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                ev(a, l, u), i = s;
              }
            }
          }
          if (iu) throw e6 = Lf, iu = false, Lf = null, e6;
        }
        function Le(e6, t) {
          var r = t[If];
          r === void 0 && (r = t[If] = /* @__PURE__ */ new Set());
          var n = e6 + "__bubble";
          r.has(n) || (D1(t, e6, 2, false), r.add(n));
        }
        function tf(e6, t, r) {
          var n = 0;
          t && (n |= 4), D1(r, e6, n, t);
        }
        var js = "_reactListening" + Math.random().toString(36).slice(2);
        function rl(e6) {
          if (!e6[js]) {
            e6[js] = true, Tv.forEach(function(r) {
              r !== "selectionchange" && (Nk.has(r) || tf(r, false, e6), tf(r, true, e6));
            });
            var t = e6.nodeType === 9 ? e6 : e6.ownerDocument;
            t === null || t[js] || (t[js] = true, tf("selectionchange", false, t));
          }
        }
        function D1(e6, t, r, n) {
          switch (c1(t)) {
            case 1:
              var a = V6;
              break;
            case 4:
              a = W6;
              break;
            default:
              a = gh;
          }
          r = a.bind(null, t, r, e6), a = void 0, !Nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = true), n ? a !== void 0 ? e6.addEventListener(t, r, { capture: true, passive: a }) : e6.addEventListener(t, r, true) : a !== void 0 ? e6.addEventListener(t, r, { passive: a }) : e6.addEventListener(t, r, false);
        }
        function rf(e6, t, r, n, a) {
          var i = n;
          if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
            if (n === null) return;
            var o = n.tag;
            if (o === 3 || o === 4) {
              var l = n.stateNode.containerInfo;
              if (l === a || l.nodeType === 8 && l.parentNode === a) break;
              if (o === 4) for (o = n.return; o !== null; ) {
                var s = o.tag;
                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
                o = o.return;
              }
              for (; l !== null; ) {
                if (o = Da(l), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                  n = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            n = n.return;
          }
          Xv(function() {
            var u = i, c = fh(r), d = [];
            e: {
              var f = S1.get(e6);
              if (f !== void 0) {
                var p = yh, v = e6;
                switch (e6) {
                  case "keypress":
                    if (Ks(r) === 0) break e;
                  case "keydown":
                  case "keyup":
                    p = ok;
                    break;
                  case "focusin":
                    v = "focus", p = Zd;
                    break;
                  case "focusout":
                    v = "blur", p = Zd;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    p = Zd;
                    break;
                  case "click":
                    if (r.button === 2) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    p = Hg;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    p = G6;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    p = uk;
                    break;
                  case b1:
                  case k1:
                  case E1:
                    p = Q6;
                    break;
                  case R1:
                    p = dk;
                    break;
                  case "scroll":
                    p = Y6;
                    break;
                  case "wheel":
                    p = hk;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    p = J6;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    p = Bg;
                }
                var y = (t & 4) !== 0, g = !y && e6 === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, w; h !== null; ) {
                  w = h;
                  var b = w.stateNode;
                  if (w.tag === 5 && b !== null && (w = b, m !== null && (b = Xo(h, m), b != null && y.push(nl(h, b, w)))), g) break;
                  h = h.return;
                }
                0 < y.length && (f = new p(f, v, null, r, c), d.push({ event: f, listeners: y }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (f = e6 === "mouseover" || e6 === "pointerover", p = e6 === "mouseout" || e6 === "pointerout", f && r !== Cf && (v = r.relatedTarget || r.fromElement) && (Da(v) || v[hn])) break e;
                if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = r.relatedTarget || r.toElement, p = u, v = v ? Da(v) : null, v !== null && (g = Oa(v), v !== g || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
                  if (y = Hg, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e6 === "pointerout" || e6 === "pointerover") && (y = Bg, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), g = p == null ? f : yi(p), w = v == null ? f : yi(v), f = new y(b, h + "leave", p, r, c), f.target = g, f.relatedTarget = w, b = null, Da(c) === u && (y = new y(m, h + "enter", v, r, c), y.target = w, y.relatedTarget = g, b = y), g = b, p && v) t: {
                    for (y = p, m = v, h = 0, w = y; w; w = fi(w)) h++;
                    for (w = 0, b = m; b; b = fi(b)) w++;
                    for (; 0 < h - w; ) y = fi(y), h--;
                    for (; 0 < w - h; ) m = fi(m), w--;
                    for (; h--; ) {
                      if (y === m || m !== null && y === m.alternate) break t;
                      y = fi(y), m = fi(m);
                    }
                    y = null;
                  }
                  else y = null;
                  p !== null && tv(d, f, p, y, false), v !== null && g !== null && tv(d, g, v, y, true);
                }
              }
              e: {
                if (f = u ? yi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var k = xk;
                else if (Yg(f)) if (g1) k = Rk;
                else {
                  k = kk;
                  var L = bk;
                }
                else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = Ek);
                if (k && (k = k(e6, u))) {
                  m1(d, k, r, c);
                  break e;
                }
                L && L(e6, f, u), e6 === "focusout" && (L = f._wrapperState) && L.controlled && f.type === "number" && bf(f, "number", f.value);
              }
              switch (L = u ? yi(u) : window, e6) {
                case "focusin":
                  (Yg(L) || L.contentEditable === "true") && (gi = L, Af = u, Bo = null);
                  break;
                case "focusout":
                  Bo = Af = gi = null;
                  break;
                case "mousedown":
                  Tf = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Tf = false, Xg(d, r, c);
                  break;
                case "selectionchange":
                  if (Dk) break;
                case "keydown":
                case "keyup":
                  Xg(d, r, c);
              }
              var D;
              if (xh) e: {
                switch (e6) {
                  case "compositionstart":
                    var x = "onCompositionStart";
                    break e;
                  case "compositionend":
                    x = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    x = "onCompositionUpdate";
                    break e;
                }
                x = void 0;
              }
              else mi ? h1(e6, r) && (x = "onCompositionEnd") : e6 === "keydown" && r.keyCode === 229 && (x = "onCompositionStart");
              x && (f1 && r.locale !== "ko" && (mi || x !== "onCompositionStart" ? x === "onCompositionEnd" && mi && (D = d1()) : (Hn = c, vh = "value" in Hn ? Hn.value : Hn.textContent, mi = true)), L = cu(u, x), 0 < L.length && (x = new Ug(x, e6, null, r, c), d.push({ event: x, listeners: L }), D ? x.data = D : (D = p1(r), D !== null && (x.data = D)))), (D = mk ? gk(e6, r) : vk(e6, r)) && (u = cu(u, "onBeforeInput"), 0 < u.length && (c = new Ug("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = D));
            }
            C1(d, t);
          });
        }
        function nl(e6, t, r) {
          return { instance: e6, listener: t, currentTarget: r };
        }
        function cu(e6, t) {
          for (var r = t + "Capture", n = []; e6 !== null; ) {
            var a = e6, i = a.stateNode;
            a.tag === 5 && i !== null && (a = i, i = Xo(e6, r), i != null && n.unshift(nl(e6, i, a)), i = Xo(e6, t), i != null && n.push(nl(e6, i, a))), e6 = e6.return;
          }
          return n;
        }
        function fi(e6) {
          if (e6 === null) return null;
          do
            e6 = e6.return;
          while (e6 && e6.tag !== 5);
          return e6 || null;
        }
        function tv(e6, t, r, n, a) {
          for (var i = t._reactName, o = []; r !== null && r !== n; ) {
            var l = r, s = l.alternate, u = l.stateNode;
            if (s !== null && s === n) break;
            l.tag === 5 && u !== null && (l = u, a ? (s = Xo(r, i), s != null && o.unshift(nl(r, s, l))) : a || (s = Xo(r, i), s != null && o.push(nl(r, s, l)))), r = r.return;
          }
          o.length !== 0 && e6.push({ event: t, listeners: o });
        }
        var Lk = /\r\n?/g, Mk = /\u0000|\uFFFD/g;
        function rv(e6) {
          return (typeof e6 == "string" ? e6 : "" + e6).replace(Lk, `
`).replace(Mk, "");
        }
        function Hs(e6, t, r) {
          if (t = rv(t), rv(e6) !== t && r) throw Error(O(425));
        }
        function du() {
        }
        var Ff = null, $f = null;
        function zf(e6, t) {
          return e6 === "textarea" || e6 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Of = typeof setTimeout == "function" ? setTimeout : void 0, Pk = typeof clearTimeout == "function" ? clearTimeout : void 0, nv = typeof Promise == "function" ? Promise : void 0, _k = typeof queueMicrotask == "function" ? queueMicrotask : typeof nv < "u" ? function(e6) {
          return nv.resolve(null).then(e6).catch(Ak);
        } : Of;
        function Ak(e6) {
          setTimeout(function() {
            throw e6;
          });
        }
        function nf(e6, t) {
          var r = t, n = 0;
          do {
            var a = r.nextSibling;
            if (e6.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
              if (n === 0) {
                e6.removeChild(a), Jo(t);
                return;
              }
              n--;
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
            r = a;
          } while (r);
          Jo(t);
        }
        function Yn(e6) {
          for (; e6 != null; e6 = e6.nextSibling) {
            var t = e6.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
              if (t = e6.data, t === "$" || t === "$!" || t === "$?") break;
              if (t === "/$") return null;
            }
          }
          return e6;
        }
        function av(e6) {
          e6 = e6.previousSibling;
          for (var t = 0; e6; ) {
            if (e6.nodeType === 8) {
              var r = e6.data;
              if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e6;
                t--;
              } else r === "/$" && t++;
            }
            e6 = e6.previousSibling;
          }
          return null;
        }
        var Ii = Math.random().toString(36).slice(2), Vr = "__reactFiber$" + Ii, al = "__reactProps$" + Ii, hn = "__reactContainer$" + Ii, If = "__reactEvents$" + Ii, Tk = "__reactListeners$" + Ii, Fk = "__reactHandles$" + Ii;
        function Da(e6) {
          var t = e6[Vr];
          if (t) return t;
          for (var r = e6.parentNode; r; ) {
            if (t = r[hn] || r[Vr]) {
              if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e6 = av(e6); e6 !== null; ) {
                if (r = e6[Vr]) return r;
                e6 = av(e6);
              }
              return t;
            }
            e6 = r, r = e6.parentNode;
          }
          return null;
        }
        function hl(e6) {
          return e6 = e6[Vr] || e6[hn], !e6 || e6.tag !== 5 && e6.tag !== 6 && e6.tag !== 13 && e6.tag !== 3 ? null : e6;
        }
        function yi(e6) {
          if (e6.tag === 5 || e6.tag === 6) return e6.stateNode;
          throw Error(O(33));
        }
        function Pu(e6) {
          return e6[al] || null;
        }
        var jf = [], wi = -1;
        function ea(e6) {
          return { current: e6 };
        }
        function Me(e6) {
          0 > wi || (e6.current = jf[wi], jf[wi] = null, wi--);
        }
        function Ne(e6, t) {
          wi++, jf[wi] = e6.current, e6.current = t;
        }
        var Zn = {}, Rt = ea(Zn), Yt = ea(false), _a = Zn;
        function _i(e6, t) {
          var r = e6.type.contextTypes;
          if (!r) return Zn;
          var n = e6.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
          var a = {}, i;
          for (i in r) a[i] = t[i];
          return n && (e6 = e6.stateNode, e6.__reactInternalMemoizedUnmaskedChildContext = t, e6.__reactInternalMemoizedMaskedChildContext = a), a;
        }
        function qt(e6) {
          return e6 = e6.childContextTypes, e6 != null;
        }
        function fu() {
          Me(Yt), Me(Rt);
        }
        function iv(e6, t, r) {
          if (Rt.current !== Zn) throw Error(O(168));
          Ne(Rt, t), Ne(Yt, r);
        }
        function N1(e6, t, r) {
          var n = e6.stateNode;
          if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
          n = n.getChildContext();
          for (var a in n) if (!(a in t)) throw Error(O(108, b6(e6) || "Unknown", a));
          return je({}, r, n);
        }
        function hu(e6) {
          return e6 = (e6 = e6.stateNode) && e6.__reactInternalMemoizedMergedChildContext || Zn, _a = Rt.current, Ne(Rt, e6), Ne(Yt, Yt.current), true;
        }
        function ov(e6, t, r) {
          var n = e6.stateNode;
          if (!n) throw Error(O(169));
          r ? (e6 = N1(e6, t, _a), n.__reactInternalMemoizedMergedChildContext = e6, Me(Yt), Me(Rt), Ne(Rt, e6)) : Me(Yt), Ne(Yt, r);
        }
        var sn = null, _u = false, af = false;
        function L1(e6) {
          sn === null ? sn = [e6] : sn.push(e6);
        }
        function $k(e6) {
          _u = true, L1(e6);
        }
        function ta() {
          if (!af && sn !== null) {
            af = true;
            var e6 = 0, t = ke;
            try {
              var r = sn;
              for (ke = 1; e6 < r.length; e6++) {
                var n = r[e6];
                do
                  n = n(true);
                while (n !== null);
              }
              sn = null, _u = false;
            } catch (a) {
              throw sn !== null && (sn = sn.slice(e6 + 1)), e1(hh, ta), a;
            } finally {
              ke = t, af = false;
            }
          }
          return null;
        }
        var xi = [], bi = 0, pu = null, mu = 0, sr = [], ur = 0, Aa = null, un = 1, cn = "";
        function Sa(e6, t) {
          xi[bi++] = mu, xi[bi++] = pu, pu = e6, mu = t;
        }
        function M1(e6, t, r) {
          sr[ur++] = un, sr[ur++] = cn, sr[ur++] = Aa, Aa = e6;
          var n = un;
          e6 = cn;
          var a = 32 - Mr(n) - 1;
          n &= ~(1 << a), r += 1;
          var i = 32 - Mr(t) + a;
          if (30 < i) {
            var o = a - a % 5;
            i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, un = 1 << 32 - Mr(t) + a | r << a | n, cn = i + e6;
          } else un = 1 << i | r << a | n, cn = e6;
        }
        function kh(e6) {
          e6.return !== null && (Sa(e6, 1), M1(e6, 1, 0));
        }
        function Eh(e6) {
          for (; e6 === pu; ) pu = xi[--bi], xi[bi] = null, mu = xi[--bi], xi[bi] = null;
          for (; e6 === Aa; ) Aa = sr[--ur], sr[ur] = null, cn = sr[--ur], sr[ur] = null, un = sr[--ur], sr[ur] = null;
        }
        var Jt = null, Zt = null, Fe = false, Lr = null;
        function P1(e6, t) {
          var r = cr(5, null, null, 0);
          r.elementType = "DELETED", r.stateNode = t, r.return = e6, t = e6.deletions, t === null ? (e6.deletions = [r], e6.flags |= 16) : t.push(r);
        }
        function lv(e6, t) {
          switch (e6.tag) {
            case 5:
              var r = e6.type;
              return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e6.stateNode = t, Jt = e6, Zt = Yn(t.firstChild), true) : false;
            case 6:
              return t = e6.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e6.stateNode = t, Jt = e6, Zt = null, true) : false;
            case 13:
              return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Aa !== null ? { id: un, overflow: cn } : null, e6.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = cr(18, null, null, 0), r.stateNode = t, r.return = e6, e6.child = r, Jt = e6, Zt = null, true) : false;
            default:
              return false;
          }
        }
        function Hf(e6) {
          return (e6.mode & 1) !== 0 && (e6.flags & 128) === 0;
        }
        function Uf(e6) {
          if (Fe) {
            var t = Zt;
            if (t) {
              var r = t;
              if (!lv(e6, t)) {
                if (Hf(e6)) throw Error(O(418));
                t = Yn(r.nextSibling);
                var n = Jt;
                t && lv(e6, t) ? P1(n, r) : (e6.flags = e6.flags & -4097 | 2, Fe = false, Jt = e6);
              }
            } else {
              if (Hf(e6)) throw Error(O(418));
              e6.flags = e6.flags & -4097 | 2, Fe = false, Jt = e6;
            }
          }
        }
        function sv(e6) {
          for (e6 = e6.return; e6 !== null && e6.tag !== 5 && e6.tag !== 3 && e6.tag !== 13; ) e6 = e6.return;
          Jt = e6;
        }
        function Us(e6) {
          if (e6 !== Jt) return false;
          if (!Fe) return sv(e6), Fe = true, false;
          var t;
          if ((t = e6.tag !== 3) && !(t = e6.tag !== 5) && (t = e6.type, t = t !== "head" && t !== "body" && !zf(e6.type, e6.memoizedProps)), t && (t = Zt)) {
            if (Hf(e6)) throw _1(), Error(O(418));
            for (; t; ) P1(e6, t), t = Yn(t.nextSibling);
          }
          if (sv(e6), e6.tag === 13) {
            if (e6 = e6.memoizedState, e6 = e6 !== null ? e6.dehydrated : null, !e6) throw Error(O(317));
            e: {
              for (e6 = e6.nextSibling, t = 0; e6; ) {
                if (e6.nodeType === 8) {
                  var r = e6.data;
                  if (r === "/$") {
                    if (t === 0) {
                      Zt = Yn(e6.nextSibling);
                      break e;
                    }
                    t--;
                  } else r !== "$" && r !== "$!" && r !== "$?" || t++;
                }
                e6 = e6.nextSibling;
              }
              Zt = null;
            }
          } else Zt = Jt ? Yn(e6.stateNode.nextSibling) : null;
          return true;
        }
        function _1() {
          for (var e6 = Zt; e6; ) e6 = Yn(e6.nextSibling);
        }
        function Ai() {
          Zt = Jt = null, Fe = false;
        }
        function Rh(e6) {
          Lr === null ? Lr = [e6] : Lr.push(e6);
        }
        var zk = gn.ReactCurrentBatchConfig;
        function Po(e6, t, r) {
          if (e6 = r.ref, e6 !== null && typeof e6 != "function" && typeof e6 != "object") {
            if (r._owner) {
              if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(O(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(O(147, e6));
              var a = n, i = "" + e6;
              return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var l = a.refs;
                o === null ? delete l[i] : l[i] = o;
              }, t._stringRef = i, t);
            }
            if (typeof e6 != "string") throw Error(O(284));
            if (!r._owner) throw Error(O(290, e6));
          }
          return e6;
        }
        function Bs(e6, t) {
          throw e6 = Object.prototype.toString.call(t), Error(O(31, e6 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e6));
        }
        function uv(e6) {
          var t = e6._init;
          return t(e6._payload);
        }
        function A1(e6) {
          function t(m, h) {
            if (e6) {
              var w = m.deletions;
              w === null ? (m.deletions = [h], m.flags |= 16) : w.push(h);
            }
          }
          function r(m, h) {
            if (!e6) return null;
            for (; h !== null; ) t(m, h), h = h.sibling;
            return null;
          }
          function n(m, h) {
            for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
            return m;
          }
          function a(m, h) {
            return m = Xn(m, h), m.index = 0, m.sibling = null, m;
          }
          function i(m, h, w) {
            return m.index = w, e6 ? (w = m.alternate, w !== null ? (w = w.index, w < h ? (m.flags |= 2, h) : w) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
          }
          function o(m) {
            return e6 && m.alternate === null && (m.flags |= 2), m;
          }
          function l(m, h, w, b) {
            return h === null || h.tag !== 6 ? (h = ff(w, m.mode, b), h.return = m, h) : (h = a(h, w), h.return = m, h);
          }
          function s(m, h, w, b) {
            var k = w.type;
            return k === pi ? c(m, h, w.props.children, b, w.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zn && uv(k) === h.type) ? (b = a(h, w.props), b.ref = Po(m, h, w), b.return = m, b) : (b = ru(w.type, w.key, w.props, null, m.mode, b), b.ref = Po(m, h, w), b.return = m, b);
          }
          function u(m, h, w, b) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== w.containerInfo || h.stateNode.implementation !== w.implementation ? (h = hf(w, m.mode, b), h.return = m, h) : (h = a(h, w.children || []), h.return = m, h);
          }
          function c(m, h, w, b, k) {
            return h === null || h.tag !== 7 ? (h = Pa(w, m.mode, b, k), h.return = m, h) : (h = a(h, w), h.return = m, h);
          }
          function d(m, h, w) {
            if (typeof h == "string" && h !== "" || typeof h == "number") return h = ff("" + h, m.mode, w), h.return = m, h;
            if (typeof h == "object" && h !== null) {
              switch (h.$$typeof) {
                case Ns:
                  return w = ru(h.type, h.key, h.props, null, m.mode, w), w.ref = Po(m, null, h), w.return = m, w;
                case hi:
                  return h = hf(h, m.mode, w), h.return = m, h;
                case zn:
                  var b = h._init;
                  return d(m, b(h._payload), w);
              }
              if ($o(h) || Do(h)) return h = Pa(h, m.mode, w, null), h.return = m, h;
              Bs(m, h);
            }
            return null;
          }
          function f(m, h, w, b) {
            var k = h !== null ? h.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number") return k !== null ? null : l(m, h, "" + w, b);
            if (typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case Ns:
                  return w.key === k ? s(m, h, w, b) : null;
                case hi:
                  return w.key === k ? u(m, h, w, b) : null;
                case zn:
                  return k = w._init, f(m, h, k(w._payload), b);
              }
              if ($o(w) || Do(w)) return k !== null ? null : c(m, h, w, b, null);
              Bs(m, w);
            }
            return null;
          }
          function p(m, h, w, b, k) {
            if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(w) || null, l(h, m, "" + b, k);
            if (typeof b == "object" && b !== null) {
              switch (b.$$typeof) {
                case Ns:
                  return m = m.get(b.key === null ? w : b.key) || null, s(h, m, b, k);
                case hi:
                  return m = m.get(b.key === null ? w : b.key) || null, u(h, m, b, k);
                case zn:
                  var L = b._init;
                  return p(m, h, w, L(b._payload), k);
              }
              if ($o(b) || Do(b)) return m = m.get(w) || null, c(h, m, b, k, null);
              Bs(h, b);
            }
            return null;
          }
          function v(m, h, w, b) {
            for (var k = null, L = null, D = h, x = h = 0, S = null; D !== null && x < w.length; x++) {
              D.index > x ? (S = D, D = null) : S = D.sibling;
              var N = f(m, D, w[x], b);
              if (N === null) {
                D === null && (D = S);
                break;
              }
              e6 && D && N.alternate === null && t(m, D), h = i(N, h, x), L === null ? k = N : L.sibling = N, L = N, D = S;
            }
            if (x === w.length) return r(m, D), Fe && Sa(m, x), k;
            if (D === null) {
              for (; x < w.length; x++) D = d(m, w[x], b), D !== null && (h = i(D, h, x), L === null ? k = D : L.sibling = D, L = D);
              return Fe && Sa(m, x), k;
            }
            for (D = n(m, D); x < w.length; x++) S = p(D, m, x, w[x], b), S !== null && (e6 && S.alternate !== null && D.delete(S.key === null ? x : S.key), h = i(S, h, x), L === null ? k = S : L.sibling = S, L = S);
            return e6 && D.forEach(function(A) {
              return t(m, A);
            }), Fe && Sa(m, x), k;
          }
          function y(m, h, w, b) {
            var k = Do(w);
            if (typeof k != "function") throw Error(O(150));
            if (w = k.call(w), w == null) throw Error(O(151));
            for (var L = k = null, D = h, x = h = 0, S = null, N = w.next(); D !== null && !N.done; x++, N = w.next()) {
              D.index > x ? (S = D, D = null) : S = D.sibling;
              var A = f(m, D, N.value, b);
              if (A === null) {
                D === null && (D = S);
                break;
              }
              e6 && D && A.alternate === null && t(m, D), h = i(A, h, x), L === null ? k = A : L.sibling = A, L = A, D = S;
            }
            if (N.done) return r(m, D), Fe && Sa(m, x), k;
            if (D === null) {
              for (; !N.done; x++, N = w.next()) N = d(m, N.value, b), N !== null && (h = i(N, h, x), L === null ? k = N : L.sibling = N, L = N);
              return Fe && Sa(m, x), k;
            }
            for (D = n(m, D); !N.done; x++, N = w.next()) N = p(D, m, x, N.value, b), N !== null && (e6 && N.alternate !== null && D.delete(N.key === null ? x : N.key), h = i(N, h, x), L === null ? k = N : L.sibling = N, L = N);
            return e6 && D.forEach(function(P) {
              return t(m, P);
            }), Fe && Sa(m, x), k;
          }
          function g(m, h, w, b) {
            if (typeof w == "object" && w !== null && w.type === pi && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case Ns:
                  e: {
                    for (var k = w.key, L = h; L !== null; ) {
                      if (L.key === k) {
                        if (k = w.type, k === pi) {
                          if (L.tag === 7) {
                            r(m, L.sibling), h = a(L, w.props.children), h.return = m, m = h;
                            break e;
                          }
                        } else if (L.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zn && uv(k) === L.type) {
                          r(m, L.sibling), h = a(L, w.props), h.ref = Po(m, L, w), h.return = m, m = h;
                          break e;
                        }
                        r(m, L);
                        break;
                      } else t(m, L);
                      L = L.sibling;
                    }
                    w.type === pi ? (h = Pa(w.props.children, m.mode, b, w.key), h.return = m, m = h) : (b = ru(w.type, w.key, w.props, null, m.mode, b), b.ref = Po(m, h, w), b.return = m, m = b);
                  }
                  return o(m);
                case hi:
                  e: {
                    for (L = w.key; h !== null; ) {
                      if (h.key === L) if (h.tag === 4 && h.stateNode.containerInfo === w.containerInfo && h.stateNode.implementation === w.implementation) {
                        r(m, h.sibling), h = a(h, w.children || []), h.return = m, m = h;
                        break e;
                      } else {
                        r(m, h);
                        break;
                      }
                      else t(m, h);
                      h = h.sibling;
                    }
                    h = hf(w, m.mode, b), h.return = m, m = h;
                  }
                  return o(m);
                case zn:
                  return L = w._init, g(m, h, L(w._payload), b);
              }
              if ($o(w)) return v(m, h, w, b);
              if (Do(w)) return y(m, h, w, b);
              Bs(m, w);
            }
            return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, h !== null && h.tag === 6 ? (r(m, h.sibling), h = a(h, w), h.return = m, m = h) : (r(m, h), h = ff(w, m.mode, b), h.return = m, m = h), o(m)) : r(m, h);
          }
          return g;
        }
        var Ti = A1(true), T1 = A1(false), gu = ea(null), vu = null, ki = null, Sh = null;
        function Ch() {
          Sh = ki = vu = null;
        }
        function Dh(e6) {
          var t = gu.current;
          Me(gu), e6._currentValue = t;
        }
        function Bf(e6, t, r) {
          for (; e6 !== null; ) {
            var n = e6.alternate;
            if ((e6.childLanes & t) !== t ? (e6.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e6 === r) break;
            e6 = e6.return;
          }
        }
        function Li(e6, t) {
          vu = e6, Sh = ki = null, e6 = e6.dependencies, e6 !== null && e6.firstContext !== null && ((e6.lanes & t) !== 0 && (Wt = true), e6.firstContext = null);
        }
        function fr(e6) {
          var t = e6._currentValue;
          if (Sh !== e6) if (e6 = { context: e6, memoizedValue: t, next: null }, ki === null) {
            if (vu === null) throw Error(O(308));
            ki = e6, vu.dependencies = { lanes: 0, firstContext: e6 };
          } else ki = ki.next = e6;
          return t;
        }
        var Na = null;
        function Nh(e6) {
          Na === null ? Na = [e6] : Na.push(e6);
        }
        function F1(e6, t, r, n) {
          var a = t.interleaved;
          return a === null ? (r.next = r, Nh(t)) : (r.next = a.next, a.next = r), t.interleaved = r, pn(e6, n);
        }
        function pn(e6, t) {
          e6.lanes |= t;
          var r = e6.alternate;
          for (r !== null && (r.lanes |= t), r = e6, e6 = e6.return; e6 !== null; ) e6.childLanes |= t, r = e6.alternate, r !== null && (r.childLanes |= t), r = e6, e6 = e6.return;
          return r.tag === 3 ? r.stateNode : null;
        }
        var On = false;
        function Lh(e6) {
          e6.updateQueue = { baseState: e6.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
        }
        function $1(e6, t) {
          e6 = e6.updateQueue, t.updateQueue === e6 && (t.updateQueue = { baseState: e6.baseState, firstBaseUpdate: e6.firstBaseUpdate, lastBaseUpdate: e6.lastBaseUpdate, shared: e6.shared, effects: e6.effects });
        }
        function dn(e6, t) {
          return { eventTime: e6, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function qn(e6, t, r) {
          var n = e6.updateQueue;
          if (n === null) return null;
          if (n = n.shared, (ve & 2) !== 0) {
            var a = n.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, pn(e6, r);
          }
          return a = n.interleaved, a === null ? (t.next = t, Nh(n)) : (t.next = a.next, a.next = t), n.interleaved = t, pn(e6, r);
        }
        function Xs(e6, t, r) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
            var n = t.lanes;
            n &= e6.pendingLanes, r |= n, t.lanes = r, ph(e6, r);
          }
        }
        function cv(e6, t) {
          var r = e6.updateQueue, n = e6.alternate;
          if (n !== null && (n = n.updateQueue, r === n)) {
            var a = null, i = null;
            if (r = r.firstBaseUpdate, r !== null) {
              do {
                var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
                i === null ? a = i = o : i = i.next = o, r = r.next;
              } while (r !== null);
              i === null ? a = i = t : i = i.next = t;
            } else a = i = t;
            r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e6.updateQueue = r;
            return;
          }
          e6 = r.lastBaseUpdate, e6 === null ? r.firstBaseUpdate = t : e6.next = t, r.lastBaseUpdate = t;
        }
        function yu(e6, t, r, n) {
          var a = e6.updateQueue;
          On = false;
          var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending;
          if (l !== null) {
            a.shared.pending = null;
            var s = l, u = s.next;
            s.next = null, o === null ? i = u : o.next = u, o = s;
            var c = e6.alternate;
            c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
          }
          if (i !== null) {
            var d = a.baseState;
            o = 0, c = u = s = null, l = i;
            do {
              var f = l.lane, p = l.eventTime;
              if ((n & f) === f) {
                c !== null && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                  var v = e6, y = l;
                  switch (f = t, p = r, y.tag) {
                    case 1:
                      if (v = y.payload, typeof v == "function") {
                        d = v.call(p, d, f);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = v.flags & -65537 | 128;
                    case 0:
                      if (v = y.payload, f = typeof v == "function" ? v.call(p, d, f) : v, f == null) break e;
                      d = je({}, d, f);
                      break e;
                    case 2:
                      On = true;
                  }
                }
                l.callback !== null && l.lane !== 0 && (e6.flags |= 64, f = a.effects, f === null ? a.effects = [l] : f.push(l));
              } else p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = p, s = d) : c = c.next = p, o |= f;
              if (l = l.next, l === null) {
                if (l = a.shared.pending, l === null) break;
                f = l, l = f.next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
              }
            } while (true);
            if (c === null && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, t = a.shared.interleaved, t !== null) {
              a = t;
              do
                o |= a.lane, a = a.next;
              while (a !== t);
            } else i === null && (a.shared.lanes = 0);
            Fa |= o, e6.lanes = o, e6.memoizedState = d;
          }
        }
        function dv(e6, t, r) {
          if (e6 = t.effects, t.effects = null, e6 !== null) for (t = 0; t < e6.length; t++) {
            var n = e6[t], a = n.callback;
            if (a !== null) {
              if (n.callback = null, n = r, typeof a != "function") throw Error(O(191, a));
              a.call(n);
            }
          }
        }
        var pl = {}, Yr = ea(pl), il = ea(pl), ol = ea(pl);
        function La(e6) {
          if (e6 === pl) throw Error(O(174));
          return e6;
        }
        function Mh(e6, t) {
          switch (Ne(ol, t), Ne(il, e6), Ne(Yr, pl), e6 = t.nodeType, e6) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : Ef(null, "");
              break;
            default:
              e6 = e6 === 8 ? t.parentNode : t, t = e6.namespaceURI || null, e6 = e6.tagName, t = Ef(t, e6);
          }
          Me(Yr), Ne(Yr, t);
        }
        function Fi() {
          Me(Yr), Me(il), Me(ol);
        }
        function z1(e6) {
          La(ol.current);
          var t = La(Yr.current), r = Ef(t, e6.type);
          t !== r && (Ne(il, e6), Ne(Yr, r));
        }
        function Ph(e6) {
          il.current === e6 && (Me(Yr), Me(il));
        }
        var Oe = ea(0);
        function wu(e6) {
          for (var t = e6; t !== null; ) {
            if (t.tag === 13) {
              var r = t.memoizedState;
              if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
              if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e6) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e6) return null;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
          return null;
        }
        var of = [];
        function _h() {
          for (var e6 = 0; e6 < of.length; e6++) of[e6]._workInProgressVersionPrimary = null;
          of.length = 0;
        }
        var Qs = gn.ReactCurrentDispatcher, lf = gn.ReactCurrentBatchConfig, Ta = 0, Ie = null, tt = null, nt = null, xu = false, Vo = false, ll = 0, Ok = 0;
        function bt() {
          throw Error(O(321));
        }
        function Ah(e6, t) {
          if (t === null) return false;
          for (var r = 0; r < t.length && r < e6.length; r++) if (!_r(e6[r], t[r])) return false;
          return true;
        }
        function Th(e6, t, r, n, a, i) {
          if (Ta = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qs.current = e6 === null || e6.memoizedState === null ? Uk : Bk, e6 = r(n, a), Vo) {
            i = 0;
            do {
              if (Vo = false, ll = 0, 25 <= i) throw Error(O(301));
              i += 1, nt = tt = null, t.updateQueue = null, Qs.current = Vk, e6 = r(n, a);
            } while (Vo);
          }
          if (Qs.current = bu, t = tt !== null && tt.next !== null, Ta = 0, nt = tt = Ie = null, xu = false, t) throw Error(O(300));
          return e6;
        }
        function Fh() {
          var e6 = ll !== 0;
          return ll = 0, e6;
        }
        function Br() {
          var e6 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return nt === null ? Ie.memoizedState = nt = e6 : nt = nt.next = e6, nt;
        }
        function hr() {
          if (tt === null) {
            var e6 = Ie.alternate;
            e6 = e6 !== null ? e6.memoizedState : null;
          } else e6 = tt.next;
          var t = nt === null ? Ie.memoizedState : nt.next;
          if (t !== null) nt = t, tt = e6;
          else {
            if (e6 === null) throw Error(O(310));
            tt = e6, e6 = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, nt === null ? Ie.memoizedState = nt = e6 : nt = nt.next = e6;
          }
          return nt;
        }
        function sl(e6, t) {
          return typeof t == "function" ? t(e6) : t;
        }
        function sf(e6) {
          var t = hr(), r = t.queue;
          if (r === null) throw Error(O(311));
          r.lastRenderedReducer = e6;
          var n = tt, a = n.baseQueue, i = r.pending;
          if (i !== null) {
            if (a !== null) {
              var o = a.next;
              a.next = i.next, i.next = o;
            }
            n.baseQueue = a = i, r.pending = null;
          }
          if (a !== null) {
            i = a.next, n = n.baseState;
            var l = o = null, s = null, u = i;
            do {
              var c = u.lane;
              if ((Ta & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e6(n, u.action);
              else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? (l = s = d, o = n) : s = s.next = d, Ie.lanes |= c, Fa |= c;
              }
              u = u.next;
            } while (u !== null && u !== i);
            s === null ? o = n : s.next = l, _r(n, t.memoizedState) || (Wt = true), t.memoizedState = n, t.baseState = o, t.baseQueue = s, r.lastRenderedState = n;
          }
          if (e6 = r.interleaved, e6 !== null) {
            a = e6;
            do
              i = a.lane, Ie.lanes |= i, Fa |= i, a = a.next;
            while (a !== e6);
          } else a === null && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function uf(e6) {
          var t = hr(), r = t.queue;
          if (r === null) throw Error(O(311));
          r.lastRenderedReducer = e6;
          var n = r.dispatch, a = r.pending, i = t.memoizedState;
          if (a !== null) {
            r.pending = null;
            var o = a = a.next;
            do
              i = e6(i, o.action), o = o.next;
            while (o !== a);
            _r(i, t.memoizedState) || (Wt = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
          }
          return [i, n];
        }
        function O1() {
        }
        function I1(e6, t) {
          var r = Ie, n = hr(), a = t(), i = !_r(n.memoizedState, a);
          if (i && (n.memoizedState = a, Wt = true), n = n.queue, $h(U1.bind(null, r, n, e6), [e6]), n.getSnapshot !== t || i || nt !== null && nt.memoizedState.tag & 1) {
            if (r.flags |= 2048, ul(9, H1.bind(null, r, n, a, t), void 0, null), at === null) throw Error(O(349));
            (Ta & 30) !== 0 || j1(r, t, a);
          }
          return a;
        }
        function j1(e6, t, r) {
          e6.flags |= 16384, e6 = { getSnapshot: t, value: r }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e6]) : (r = t.stores, r === null ? t.stores = [e6] : r.push(e6));
        }
        function H1(e6, t, r, n) {
          t.value = r, t.getSnapshot = n, B1(t) && V1(e6);
        }
        function U1(e6, t, r) {
          return r(function() {
            B1(t) && V1(e6);
          });
        }
        function B1(e6) {
          var t = e6.getSnapshot;
          e6 = e6.value;
          try {
            var r = t();
            return !_r(e6, r);
          } catch {
            return true;
          }
        }
        function V1(e6) {
          var t = pn(e6, 1);
          t !== null && Pr(t, e6, 1, -1);
        }
        function fv(e6) {
          var t = Br();
          return typeof e6 == "function" && (e6 = e6()), t.memoizedState = t.baseState = e6, e6 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sl, lastRenderedState: e6 }, t.queue = e6, e6 = e6.dispatch = Hk.bind(null, Ie, e6), [t.memoizedState, e6];
        }
        function ul(e6, t, r, n) {
          return e6 = { tag: e6, create: t, destroy: r, deps: n, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e6.next = e6) : (r = t.lastEffect, r === null ? t.lastEffect = e6.next = e6 : (n = r.next, r.next = e6, e6.next = n, t.lastEffect = e6)), e6;
        }
        function W1() {
          return hr().memoizedState;
        }
        function Zs(e6, t, r, n) {
          var a = Br();
          Ie.flags |= e6, a.memoizedState = ul(1 | t, r, void 0, n === void 0 ? null : n);
        }
        function Au(e6, t, r, n) {
          var a = hr();
          n = n === void 0 ? null : n;
          var i = void 0;
          if (tt !== null) {
            var o = tt.memoizedState;
            if (i = o.destroy, n !== null && Ah(n, o.deps)) {
              a.memoizedState = ul(t, r, i, n);
              return;
            }
          }
          Ie.flags |= e6, a.memoizedState = ul(1 | t, r, i, n);
        }
        function hv(e6, t) {
          return Zs(8390656, 8, e6, t);
        }
        function $h(e6, t) {
          return Au(2048, 8, e6, t);
        }
        function Y1(e6, t) {
          return Au(4, 2, e6, t);
        }
        function q1(e6, t) {
          return Au(4, 4, e6, t);
        }
        function G1(e6, t) {
          if (typeof t == "function") return e6 = e6(), t(e6), function() {
            t(null);
          };
          if (t != null) return e6 = e6(), t.current = e6, function() {
            t.current = null;
          };
        }
        function K1(e6, t, r) {
          return r = r != null ? r.concat([e6]) : null, Au(4, 4, G1.bind(null, t, e6), r);
        }
        function zh() {
        }
        function X1(e6, t) {
          var r = hr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && Ah(t, n[1]) ? n[0] : (r.memoizedState = [e6, t], e6);
        }
        function Q1(e6, t) {
          var r = hr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && Ah(t, n[1]) ? n[0] : (e6 = e6(), r.memoizedState = [e6, t], e6);
        }
        function Z1(e6, t, r) {
          return (Ta & 21) === 0 ? (e6.baseState && (e6.baseState = false, Wt = true), e6.memoizedState = r) : (_r(r, t) || (r = n1(), Ie.lanes |= r, Fa |= r, e6.baseState = true), t);
        }
        function Ik(e6, t) {
          var r = ke;
          ke = r !== 0 && 4 > r ? r : 4, e6(true);
          var n = lf.transition;
          lf.transition = {};
          try {
            e6(false), t();
          } finally {
            ke = r, lf.transition = n;
          }
        }
        function J1() {
          return hr().memoizedState;
        }
        function jk(e6, t, r) {
          var n = Kn(e6);
          if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, ey(e6)) ty(t, r);
          else if (r = F1(e6, t, r, n), r !== null) {
            var a = $t();
            Pr(r, e6, n, a), ry(r, t, n);
          }
        }
        function Hk(e6, t, r) {
          var n = Kn(e6), a = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
          if (ey(e6)) ty(t, a);
          else {
            var i = e6.alternate;
            if (e6.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
              var o = t.lastRenderedState, l = i(o, r);
              if (a.hasEagerState = true, a.eagerState = l, _r(l, o)) {
                var s = t.interleaved;
                s === null ? (a.next = a, Nh(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
                return;
              }
            } catch {
            }
            r = F1(e6, t, a, n), r !== null && (a = $t(), Pr(r, e6, n, a), ry(r, t, n));
          }
        }
        function ey(e6) {
          var t = e6.alternate;
          return e6 === Ie || t !== null && t === Ie;
        }
        function ty(e6, t) {
          Vo = xu = true;
          var r = e6.pending;
          r === null ? t.next = t : (t.next = r.next, r.next = t), e6.pending = t;
        }
        function ry(e6, t, r) {
          if ((r & 4194240) !== 0) {
            var n = t.lanes;
            n &= e6.pendingLanes, r |= n, t.lanes = r, ph(e6, r);
          }
        }
        var bu = { readContext: fr, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: false }, Uk = { readContext: fr, useCallback: function(e6, t) {
          return Br().memoizedState = [e6, t === void 0 ? null : t], e6;
        }, useContext: fr, useEffect: hv, useImperativeHandle: function(e6, t, r) {
          return r = r != null ? r.concat([e6]) : null, Zs(4194308, 4, G1.bind(null, t, e6), r);
        }, useLayoutEffect: function(e6, t) {
          return Zs(4194308, 4, e6, t);
        }, useInsertionEffect: function(e6, t) {
          return Zs(4, 2, e6, t);
        }, useMemo: function(e6, t) {
          var r = Br();
          return t = t === void 0 ? null : t, e6 = e6(), r.memoizedState = [e6, t], e6;
        }, useReducer: function(e6, t, r) {
          var n = Br();
          return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e6 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e6, lastRenderedState: t }, n.queue = e6, e6 = e6.dispatch = jk.bind(null, Ie, e6), [n.memoizedState, e6];
        }, useRef: function(e6) {
          var t = Br();
          return e6 = { current: e6 }, t.memoizedState = e6;
        }, useState: fv, useDebugValue: zh, useDeferredValue: function(e6) {
          return Br().memoizedState = e6;
        }, useTransition: function() {
          var e6 = fv(false), t = e6[0];
          return e6 = Ik.bind(null, e6[1]), Br().memoizedState = e6, [t, e6];
        }, useMutableSource: function() {
        }, useSyncExternalStore: function(e6, t, r) {
          var n = Ie, a = Br();
          if (Fe) {
            if (r === void 0) throw Error(O(407));
            r = r();
          } else {
            if (r = t(), at === null) throw Error(O(349));
            (Ta & 30) !== 0 || j1(n, t, r);
          }
          a.memoizedState = r;
          var i = { value: r, getSnapshot: t };
          return a.queue = i, hv(U1.bind(null, n, i, e6), [e6]), n.flags |= 2048, ul(9, H1.bind(null, n, i, r, t), void 0, null), r;
        }, useId: function() {
          var e6 = Br(), t = at.identifierPrefix;
          if (Fe) {
            var r = cn, n = un;
            r = (n & ~(1 << 32 - Mr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = ll++, 0 < r && (t += "H" + r.toString(32)), t += ":";
          } else r = Ok++, t = ":" + t + "r" + r.toString(32) + ":";
          return e6.memoizedState = t;
        }, unstable_isNewReconciler: false }, Bk = { readContext: fr, useCallback: X1, useContext: fr, useEffect: $h, useImperativeHandle: K1, useInsertionEffect: Y1, useLayoutEffect: q1, useMemo: Q1, useReducer: sf, useRef: W1, useState: function() {
          return sf(sl);
        }, useDebugValue: zh, useDeferredValue: function(e6) {
          var t = hr();
          return Z1(t, tt.memoizedState, e6);
        }, useTransition: function() {
          var e6 = sf(sl)[0], t = hr().memoizedState;
          return [e6, t];
        }, useMutableSource: O1, useSyncExternalStore: I1, useId: J1, unstable_isNewReconciler: false }, Vk = { readContext: fr, useCallback: X1, useContext: fr, useEffect: $h, useImperativeHandle: K1, useInsertionEffect: Y1, useLayoutEffect: q1, useMemo: Q1, useReducer: uf, useRef: W1, useState: function() {
          return uf(sl);
        }, useDebugValue: zh, useDeferredValue: function(e6) {
          var t = hr();
          return tt === null ? t.memoizedState = e6 : Z1(t, tt.memoizedState, e6);
        }, useTransition: function() {
          var e6 = uf(sl)[0], t = hr().memoizedState;
          return [e6, t];
        }, useMutableSource: O1, useSyncExternalStore: I1, useId: J1, unstable_isNewReconciler: false };
        function Dr(e6, t) {
          if (e6 && e6.defaultProps) {
            t = je({}, t), e6 = e6.defaultProps;
            for (var r in e6) t[r] === void 0 && (t[r] = e6[r]);
            return t;
          }
          return t;
        }
        function Vf(e6, t, r, n) {
          t = e6.memoizedState, r = r(n, t), r = r == null ? t : je({}, t, r), e6.memoizedState = r, e6.lanes === 0 && (e6.updateQueue.baseState = r);
        }
        var Tu = { isMounted: function(e6) {
          return (e6 = e6._reactInternals) ? Oa(e6) === e6 : false;
        }, enqueueSetState: function(e6, t, r) {
          e6 = e6._reactInternals;
          var n = $t(), a = Kn(e6), i = dn(n, a);
          i.payload = t, r != null && (i.callback = r), t = qn(e6, i, a), t !== null && (Pr(t, e6, a, n), Xs(t, e6, a));
        }, enqueueReplaceState: function(e6, t, r) {
          e6 = e6._reactInternals;
          var n = $t(), a = Kn(e6), i = dn(n, a);
          i.tag = 1, i.payload = t, r != null && (i.callback = r), t = qn(e6, i, a), t !== null && (Pr(t, e6, a, n), Xs(t, e6, a));
        }, enqueueForceUpdate: function(e6, t) {
          e6 = e6._reactInternals;
          var r = $t(), n = Kn(e6), a = dn(r, n);
          a.tag = 2, t != null && (a.callback = t), t = qn(e6, a, n), t !== null && (Pr(t, e6, n, r), Xs(t, e6, n));
        } };
        function pv(e6, t, r, n, a, i, o) {
          return e6 = e6.stateNode, typeof e6.shouldComponentUpdate == "function" ? e6.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !tl(r, n) || !tl(a, i) : true;
        }
        function ny(e6, t, r) {
          var n = false, a = Zn, i = t.contextType;
          return typeof i == "object" && i !== null ? i = fr(i) : (a = qt(t) ? _a : Rt.current, n = t.contextTypes, i = (n = n != null) ? _i(e6, a) : Zn), t = new t(r, i), e6.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Tu, e6.stateNode = t, t._reactInternals = e6, n && (e6 = e6.stateNode, e6.__reactInternalMemoizedUnmaskedChildContext = a, e6.__reactInternalMemoizedMaskedChildContext = i), t;
        }
        function mv(e6, t, r, n) {
          e6 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e6 && Tu.enqueueReplaceState(t, t.state, null);
        }
        function Wf(e6, t, r, n) {
          var a = e6.stateNode;
          a.props = r, a.state = e6.memoizedState, a.refs = {}, Lh(e6);
          var i = t.contextType;
          typeof i == "object" && i !== null ? a.context = fr(i) : (i = qt(t) ? _a : Rt.current, a.context = _i(e6, i)), a.state = e6.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vf(e6, t, i, r), a.state = e6.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Tu.enqueueReplaceState(a, a.state, null), yu(e6, r, a, n), a.state = e6.memoizedState), typeof a.componentDidMount == "function" && (e6.flags |= 4194308);
        }
        function $i(e6, t) {
          try {
            var r = "", n = t;
            do
              r += x6(n), n = n.return;
            while (n);
            var a = r;
          } catch (i) {
            a = `
Error generating stack: ` + i.message + `
` + i.stack;
          }
          return { value: e6, source: t, stack: a, digest: null };
        }
        function cf(e6, t, r) {
          return { value: e6, source: null, stack: r ?? null, digest: t ?? null };
        }
        function Yf(e6, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function() {
              throw r;
            });
          }
        }
        var Wk = typeof WeakMap == "function" ? WeakMap : Map;
        function ay(e6, t, r) {
          r = dn(-1, r), r.tag = 3, r.payload = { element: null };
          var n = t.value;
          return r.callback = function() {
            Eu || (Eu = true, rh = n), Yf(e6, t);
          }, r;
        }
        function iy(e6, t, r) {
          r = dn(-1, r), r.tag = 3;
          var n = e6.type.getDerivedStateFromError;
          if (typeof n == "function") {
            var a = t.value;
            r.payload = function() {
              return n(a);
            }, r.callback = function() {
              Yf(e6, t);
            };
          }
          var i = e6.stateNode;
          return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
            Yf(e6, t), typeof n != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
          }), r;
        }
        function gv(e6, t, r) {
          var n = e6.pingCache;
          if (n === null) {
            n = e6.pingCache = new Wk();
            var a = /* @__PURE__ */ new Set();
            n.set(t, a);
          } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
          a.has(r) || (a.add(r), e6 = iE.bind(null, e6, t, r), t.then(e6, e6));
        }
        function vv(e6) {
          do {
            var t;
            if ((t = e6.tag === 13) && (t = e6.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e6;
            e6 = e6.return;
          } while (e6 !== null);
          return null;
        }
        function yv(e6, t, r, n, a) {
          return (e6.mode & 1) === 0 ? (e6 === t ? e6.flags |= 65536 : (e6.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = dn(-1, 1), t.tag = 2, qn(r, t, 1))), r.lanes |= 1), e6) : (e6.flags |= 65536, e6.lanes = a, e6);
        }
        var Yk = gn.ReactCurrentOwner, Wt = false;
        function Ft(e6, t, r, n) {
          t.child = e6 === null ? T1(t, null, r, n) : Ti(t, e6.child, r, n);
        }
        function wv(e6, t, r, n, a) {
          r = r.render;
          var i = t.ref;
          return Li(t, a), n = Th(e6, t, r, n, i, a), r = Fh(), e6 !== null && !Wt ? (t.updateQueue = e6.updateQueue, t.flags &= -2053, e6.lanes &= ~a, mn(e6, t, a)) : (Fe && r && kh(t), t.flags |= 1, Ft(e6, t, n, a), t.child);
        }
        function xv(e6, t, r, n, a) {
          if (e6 === null) {
            var i = r.type;
            return typeof i == "function" && !Wh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, oy(e6, t, i, n, a)) : (e6 = ru(r.type, null, n, t, t.mode, a), e6.ref = t.ref, e6.return = t, t.child = e6);
          }
          if (i = e6.child, (e6.lanes & a) === 0) {
            var o = i.memoizedProps;
            if (r = r.compare, r = r !== null ? r : tl, r(o, n) && e6.ref === t.ref) return mn(e6, t, a);
          }
          return t.flags |= 1, e6 = Xn(i, n), e6.ref = t.ref, e6.return = t, t.child = e6;
        }
        function oy(e6, t, r, n, a) {
          if (e6 !== null) {
            var i = e6.memoizedProps;
            if (tl(i, n) && e6.ref === t.ref) if (Wt = false, t.pendingProps = n = i, (e6.lanes & a) !== 0) (e6.flags & 131072) !== 0 && (Wt = true);
            else return t.lanes = e6.lanes, mn(e6, t, a);
          }
          return qf(e6, t, r, n, a);
        }
        function ly(e6, t, r) {
          var n = t.pendingProps, a = n.children, i = e6 !== null ? e6.memoizedState : null;
          if (n.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(Ri, Qt), Qt |= r;
          else {
            if ((r & 1073741824) === 0) return e6 = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e6, cachePool: null, transitions: null }, t.updateQueue = null, Ne(Ri, Qt), Qt |= e6, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, Ne(Ri, Qt), Qt |= n;
          }
          else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, Ne(Ri, Qt), Qt |= n;
          return Ft(e6, t, a, r), t.child;
        }
        function sy(e6, t) {
          var r = t.ref;
          (e6 === null && r !== null || e6 !== null && e6.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
        }
        function qf(e6, t, r, n, a) {
          var i = qt(r) ? _a : Rt.current;
          return i = _i(t, i), Li(t, a), r = Th(e6, t, r, n, i, a), n = Fh(), e6 !== null && !Wt ? (t.updateQueue = e6.updateQueue, t.flags &= -2053, e6.lanes &= ~a, mn(e6, t, a)) : (Fe && n && kh(t), t.flags |= 1, Ft(e6, t, r, a), t.child);
        }
        function bv(e6, t, r, n, a) {
          if (qt(r)) {
            var i = true;
            hu(t);
          } else i = false;
          if (Li(t, a), t.stateNode === null) Js(e6, t), ny(t, r, n), Wf(t, r, n, a), n = true;
          else if (e6 === null) {
            var o = t.stateNode, l = t.memoizedProps;
            o.props = l;
            var s = o.context, u = r.contextType;
            typeof u == "object" && u !== null ? u = fr(u) : (u = qt(r) ? _a : Rt.current, u = _i(t, u));
            var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== n || s !== u) && mv(t, o, n, u), On = false;
            var f = t.memoizedState;
            o.state = f, yu(t, n, o, a), s = t.memoizedState, l !== n || f !== s || Yt.current || On ? (typeof c == "function" && (Vf(t, r, c, n), s = t.memoizedState), (l = On || pv(t, r, l, n, f, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = s), o.props = n, o.state = s, o.context = u, n = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = false);
          } else {
            o = t.stateNode, $1(e6, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Dr(t.type, l), o.props = u, d = t.pendingProps, f = o.context, s = r.contextType, typeof s == "object" && s !== null ? s = fr(s) : (s = qt(r) ? _a : Rt.current, s = _i(t, s));
            var p = r.getDerivedStateFromProps;
            (c = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || f !== s) && mv(t, o, n, s), On = false, f = t.memoizedState, o.state = f, yu(t, n, o, a);
            var v = t.memoizedState;
            l !== d || f !== v || Yt.current || On ? (typeof p == "function" && (Vf(t, r, p, n), v = t.memoizedState), (u = On || pv(t, r, u, n, f, v, s) || false) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e6.memoizedProps && f === e6.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e6.memoizedProps && f === e6.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = s, n = u) : (typeof o.componentDidUpdate != "function" || l === e6.memoizedProps && f === e6.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e6.memoizedProps && f === e6.memoizedState || (t.flags |= 1024), n = false);
          }
          return Gf(e6, t, r, n, i, a);
        }
        function Gf(e6, t, r, n, a, i) {
          sy(e6, t);
          var o = (t.flags & 128) !== 0;
          if (!n && !o) return a && ov(t, r, false), mn(e6, t, i);
          n = t.stateNode, Yk.current = t;
          var l = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
          return t.flags |= 1, e6 !== null && o ? (t.child = Ti(t, e6.child, null, i), t.child = Ti(t, null, l, i)) : Ft(e6, t, l, i), t.memoizedState = n.state, a && ov(t, r, true), t.child;
        }
        function uy(e6) {
          var t = e6.stateNode;
          t.pendingContext ? iv(e6, t.pendingContext, t.pendingContext !== t.context) : t.context && iv(e6, t.context, false), Mh(e6, t.containerInfo);
        }
        function kv(e6, t, r, n, a) {
          return Ai(), Rh(a), t.flags |= 256, Ft(e6, t, r, n), t.child;
        }
        var Kf = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Xf(e6) {
          return { baseLanes: e6, cachePool: null, transitions: null };
        }
        function cy(e6, t, r) {
          var n = t.pendingProps, a = Oe.current, i = false, o = (t.flags & 128) !== 0, l;
          if ((l = o) || (l = e6 !== null && e6.memoizedState === null ? false : (a & 2) !== 0), l ? (i = true, t.flags &= -129) : (e6 === null || e6.memoizedState !== null) && (a |= 1), Ne(Oe, a & 1), e6 === null) return Uf(t), e6 = t.memoizedState, e6 !== null && (e6 = e6.dehydrated, e6 !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e6.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = n.children, e6 = n.fallback, i ? (n = t.mode, i = t.child, o = { mode: "hidden", children: o }, (n & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = zu(o, n, 0, null), e6 = Pa(e6, n, r, null), i.return = t, e6.return = t, i.sibling = e6, t.child = i, t.child.memoizedState = Xf(r), t.memoizedState = Kf, e6) : Oh(t, o));
          if (a = e6.memoizedState, a !== null && (l = a.dehydrated, l !== null)) return qk(e6, t, o, n, l, a, r);
          if (i) {
            i = n.fallback, o = t.mode, a = e6.child, l = a.sibling;
            var s = { mode: "hidden", children: n.children };
            return (o & 1) === 0 && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = s, t.deletions = null) : (n = Xn(a, s), n.subtreeFlags = a.subtreeFlags & 14680064), l !== null ? i = Xn(l, i) : (i = Pa(i, o, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, o = e6.child.memoizedState, o = o === null ? Xf(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e6.childLanes & ~r, t.memoizedState = Kf, n;
          }
          return i = e6.child, e6 = i.sibling, n = Xn(i, { mode: "visible", children: n.children }), (t.mode & 1) === 0 && (n.lanes = r), n.return = t, n.sibling = null, e6 !== null && (r = t.deletions, r === null ? (t.deletions = [e6], t.flags |= 16) : r.push(e6)), t.child = n, t.memoizedState = null, n;
        }
        function Oh(e6, t) {
          return t = zu({ mode: "visible", children: t }, e6.mode, 0, null), t.return = e6, e6.child = t;
        }
        function Vs(e6, t, r, n) {
          return n !== null && Rh(n), Ti(t, e6.child, null, r), e6 = Oh(t, t.pendingProps.children), e6.flags |= 2, t.memoizedState = null, e6;
        }
        function qk(e6, t, r, n, a, i, o) {
          if (r) return t.flags & 256 ? (t.flags &= -257, n = cf(Error(O(422))), Vs(e6, t, o, n)) : t.memoizedState !== null ? (t.child = e6.child, t.flags |= 128, null) : (i = n.fallback, a = t.mode, n = zu({ mode: "visible", children: n.children }, a, 0, null), i = Pa(i, a, o, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, (t.mode & 1) !== 0 && Ti(t, e6.child, null, o), t.child.memoizedState = Xf(o), t.memoizedState = Kf, i);
          if ((t.mode & 1) === 0) return Vs(e6, t, o, null);
          if (a.data === "$!") {
            if (n = a.nextSibling && a.nextSibling.dataset, n) var l = n.dgst;
            return n = l, i = Error(O(419)), n = cf(i, n, void 0), Vs(e6, t, o, n);
          }
          if (l = (o & e6.childLanes) !== 0, Wt || l) {
            if (n = at, n !== null) {
              switch (o & -o) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              a = (a & (n.suspendedLanes | o)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, pn(e6, a), Pr(n, e6, a, -1));
            }
            return Vh(), n = cf(Error(O(421))), Vs(e6, t, o, n);
          }
          return a.data === "$?" ? (t.flags |= 128, t.child = e6.child, t = oE.bind(null, e6), a._reactRetry = t, null) : (e6 = i.treeContext, Zt = Yn(a.nextSibling), Jt = t, Fe = true, Lr = null, e6 !== null && (sr[ur++] = un, sr[ur++] = cn, sr[ur++] = Aa, un = e6.id, cn = e6.overflow, Aa = t), t = Oh(t, n.children), t.flags |= 4096, t);
        }
        function Ev(e6, t, r) {
          e6.lanes |= t;
          var n = e6.alternate;
          n !== null && (n.lanes |= t), Bf(e6.return, t, r);
        }
        function df(e6, t, r, n, a) {
          var i = e6.memoizedState;
          i === null ? e6.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = a);
        }
        function dy(e6, t, r) {
          var n = t.pendingProps, a = n.revealOrder, i = n.tail;
          if (Ft(e6, t, n.children, r), n = Oe.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
          else {
            if (e6 !== null && (e6.flags & 128) !== 0) e: for (e6 = t.child; e6 !== null; ) {
              if (e6.tag === 13) e6.memoizedState !== null && Ev(e6, r, t);
              else if (e6.tag === 19) Ev(e6, r, t);
              else if (e6.child !== null) {
                e6.child.return = e6, e6 = e6.child;
                continue;
              }
              if (e6 === t) break e;
              for (; e6.sibling === null; ) {
                if (e6.return === null || e6.return === t) break e;
                e6 = e6.return;
              }
              e6.sibling.return = e6.return, e6 = e6.sibling;
            }
            n &= 1;
          }
          if (Ne(Oe, n), (t.mode & 1) === 0) t.memoizedState = null;
          else switch (a) {
            case "forwards":
              for (r = t.child, a = null; r !== null; ) e6 = r.alternate, e6 !== null && wu(e6) === null && (a = r), r = r.sibling;
              r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), df(t, false, a, r, i);
              break;
            case "backwards":
              for (r = null, a = t.child, t.child = null; a !== null; ) {
                if (e6 = a.alternate, e6 !== null && wu(e6) === null) {
                  t.child = a;
                  break;
                }
                e6 = a.sibling, a.sibling = r, r = a, a = e6;
              }
              df(t, true, r, null, i);
              break;
            case "together":
              df(t, false, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Js(e6, t) {
          (t.mode & 1) === 0 && e6 !== null && (e6.alternate = null, t.alternate = null, t.flags |= 2);
        }
        function mn(e6, t, r) {
          if (e6 !== null && (t.dependencies = e6.dependencies), Fa |= t.lanes, (r & t.childLanes) === 0) return null;
          if (e6 !== null && t.child !== e6.child) throw Error(O(153));
          if (t.child !== null) {
            for (e6 = t.child, r = Xn(e6, e6.pendingProps), t.child = r, r.return = t; e6.sibling !== null; ) e6 = e6.sibling, r = r.sibling = Xn(e6, e6.pendingProps), r.return = t;
            r.sibling = null;
          }
          return t.child;
        }
        function Gk(e6, t, r) {
          switch (t.tag) {
            case 3:
              uy(t), Ai();
              break;
            case 5:
              z1(t);
              break;
            case 1:
              qt(t.type) && hu(t);
              break;
            case 4:
              Mh(t, t.stateNode.containerInfo);
              break;
            case 10:
              var n = t.type._context, a = t.memoizedProps.value;
              Ne(gu, n._currentValue), n._currentValue = a;
              break;
            case 13:
              if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (Ne(Oe, Oe.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? cy(e6, t, r) : (Ne(Oe, Oe.current & 1), e6 = mn(e6, t, r), e6 !== null ? e6.sibling : null);
              Ne(Oe, Oe.current & 1);
              break;
            case 19:
              if (n = (r & t.childLanes) !== 0, (e6.flags & 128) !== 0) {
                if (n) return dy(e6, t, r);
                t.flags |= 128;
              }
              if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ne(Oe, Oe.current), n) break;
              return null;
            case 22:
            case 23:
              return t.lanes = 0, ly(e6, t, r);
          }
          return mn(e6, t, r);
        }
        var fy, Qf, hy, py;
        fy = function(e6, t) {
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5 || r.tag === 6) e6.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
        };
        Qf = function() {
        };
        hy = function(e6, t, r, n) {
          var a = e6.memoizedProps;
          if (a !== n) {
            e6 = t.stateNode, La(Yr.current);
            var i = null;
            switch (r) {
              case "input":
                a = wf(e6, a), n = wf(e6, n), i = [];
                break;
              case "select":
                a = je({}, a, { value: void 0 }), n = je({}, n, { value: void 0 }), i = [];
                break;
              case "textarea":
                a = kf(e6, a), n = kf(e6, n), i = [];
                break;
              default:
                typeof a.onClick != "function" && typeof n.onClick == "function" && (e6.onclick = du);
            }
            Rf(r, n);
            var o;
            r = null;
            for (u in a) if (!n.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null) if (u === "style") {
              var l = a[u];
              for (o in l) l.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Go.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
            for (u in n) {
              var s = n[u];
              if (l = a?.[u], n.hasOwnProperty(u) && s !== l && (s != null || l != null)) if (u === "style") if (l) {
                for (o in l) !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (r || (r = {}), r[o] = s[o]);
              } else r || (i || (i = []), i.push(u, r)), r = s;
              else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Go.hasOwnProperty(u) ? (s != null && u === "onScroll" && Le("scroll", e6), i || l === s || (i = [])) : (i = i || []).push(u, s));
            }
            r && (i = i || []).push("style", r);
            var u = i;
            (t.updateQueue = u) && (t.flags |= 4);
          }
        };
        py = function(e6, t, r, n) {
          r !== n && (t.flags |= 4);
        };
        function _o(e6, t) {
          if (!Fe) switch (e6.tailMode) {
            case "hidden":
              t = e6.tail;
              for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
              r === null ? e6.tail = null : r.sibling = null;
              break;
            case "collapsed":
              r = e6.tail;
              for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
              n === null ? t || e6.tail === null ? e6.tail = null : e6.tail.sibling = null : n.sibling = null;
          }
        }
        function kt(e6) {
          var t = e6.alternate !== null && e6.alternate.child === e6.child, r = 0, n = 0;
          if (t) for (var a = e6.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e6, a = a.sibling;
          else for (a = e6.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e6, a = a.sibling;
          return e6.subtreeFlags |= n, e6.childLanes = r, t;
        }
        function Kk(e6, t, r) {
          var n = t.pendingProps;
          switch (Eh(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return kt(t), null;
            case 1:
              return qt(t.type) && fu(), kt(t), null;
            case 3:
              return n = t.stateNode, Fi(), Me(Yt), Me(Rt), _h(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e6 === null || e6.child === null) && (Us(t) ? t.flags |= 4 : e6 === null || e6.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Lr !== null && (ih(Lr), Lr = null))), Qf(e6, t), kt(t), null;
            case 5:
              Ph(t);
              var a = La(ol.current);
              if (r = t.type, e6 !== null && t.stateNode != null) hy(e6, t, r, n, a), e6.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
              else {
                if (!n) {
                  if (t.stateNode === null) throw Error(O(166));
                  return kt(t), null;
                }
                if (e6 = La(Yr.current), Us(t)) {
                  n = t.stateNode, r = t.type;
                  var i = t.memoizedProps;
                  switch (n[Vr] = t, n[al] = i, e6 = (t.mode & 1) !== 0, r) {
                    case "dialog":
                      Le("cancel", n), Le("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Le("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Oo.length; a++) Le(Oo[a], n);
                      break;
                    case "source":
                      Le("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Le("error", n), Le("load", n);
                      break;
                    case "details":
                      Le("toggle", n);
                      break;
                    case "input":
                      Pg(n, i), Le("invalid", n);
                      break;
                    case "select":
                      n._wrapperState = { wasMultiple: !!i.multiple }, Le("invalid", n);
                      break;
                    case "textarea":
                      Ag(n, i), Le("invalid", n);
                  }
                  Rf(r, i), a = null;
                  for (var o in i) if (i.hasOwnProperty(o)) {
                    var l = i[o];
                    o === "children" ? typeof l == "string" ? n.textContent !== l && (i.suppressHydrationWarning !== true && Hs(n.textContent, l, e6), a = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (i.suppressHydrationWarning !== true && Hs(n.textContent, l, e6), a = ["children", "" + l]) : Go.hasOwnProperty(o) && l != null && o === "onScroll" && Le("scroll", n);
                  }
                  switch (r) {
                    case "input":
                      Ls(n), _g(n, i, true);
                      break;
                    case "textarea":
                      Ls(n), Tg(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      typeof i.onClick == "function" && (n.onclick = du);
                  }
                  n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
                } else {
                  o = a.nodeType === 9 ? a : a.ownerDocument, e6 === "http://www.w3.org/1999/xhtml" && (e6 = Uv(r)), e6 === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e6 = o.createElement("div"), e6.innerHTML = "<script><\/script>", e6 = e6.removeChild(e6.firstChild)) : typeof n.is == "string" ? e6 = o.createElement(r, { is: n.is }) : (e6 = o.createElement(r), r === "select" && (o = e6, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : e6 = o.createElementNS(e6, r), e6[Vr] = t, e6[al] = n, fy(e6, t, false, false), t.stateNode = e6;
                  e: {
                    switch (o = Sf(r, n), r) {
                      case "dialog":
                        Le("cancel", e6), Le("close", e6), a = n;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Le("load", e6), a = n;
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Oo.length; a++) Le(Oo[a], e6);
                        a = n;
                        break;
                      case "source":
                        Le("error", e6), a = n;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Le("error", e6), Le("load", e6), a = n;
                        break;
                      case "details":
                        Le("toggle", e6), a = n;
                        break;
                      case "input":
                        Pg(e6, n), a = wf(e6, n), Le("invalid", e6);
                        break;
                      case "option":
                        a = n;
                        break;
                      case "select":
                        e6._wrapperState = { wasMultiple: !!n.multiple }, a = je({}, n, { value: void 0 }), Le("invalid", e6);
                        break;
                      case "textarea":
                        Ag(e6, n), a = kf(e6, n), Le("invalid", e6);
                        break;
                      default:
                        a = n;
                    }
                    Rf(r, a), l = a;
                    for (i in l) if (l.hasOwnProperty(i)) {
                      var s = l[i];
                      i === "style" ? Wv(e6, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bv(e6, s)) : i === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && Ko(e6, s) : typeof s == "number" && Ko(e6, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Go.hasOwnProperty(i) ? s != null && i === "onScroll" && Le("scroll", e6) : s != null && sh(e6, i, s, o));
                    }
                    switch (r) {
                      case "input":
                        Ls(e6), _g(e6, n, false);
                        break;
                      case "textarea":
                        Ls(e6), Tg(e6);
                        break;
                      case "option":
                        n.value != null && e6.setAttribute("value", "" + Qn(n.value));
                        break;
                      case "select":
                        e6.multiple = !!n.multiple, i = n.value, i != null ? Si(e6, !!n.multiple, i, false) : n.defaultValue != null && Si(e6, !!n.multiple, n.defaultValue, true);
                        break;
                      default:
                        typeof a.onClick == "function" && (e6.onclick = du);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = true;
                        break e;
                      default:
                        n = false;
                    }
                  }
                  n && (t.flags |= 4);
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
              }
              return kt(t), null;
            case 6:
              if (e6 && t.stateNode != null) py(e6, t, e6.memoizedProps, n);
              else {
                if (typeof n != "string" && t.stateNode === null) throw Error(O(166));
                if (r = La(ol.current), La(Yr.current), Us(t)) {
                  if (n = t.stateNode, r = t.memoizedProps, n[Vr] = t, (i = n.nodeValue !== r) && (e6 = Jt, e6 !== null)) switch (e6.tag) {
                    case 3:
                      Hs(n.nodeValue, r, (e6.mode & 1) !== 0);
                      break;
                    case 5:
                      e6.memoizedProps.suppressHydrationWarning !== true && Hs(n.nodeValue, r, (e6.mode & 1) !== 0);
                  }
                  i && (t.flags |= 4);
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Vr] = t, t.stateNode = n;
              }
              return kt(t), null;
            case 13:
              if (Me(Oe), n = t.memoizedState, e6 === null || e6.memoizedState !== null && e6.memoizedState.dehydrated !== null) {
                if (Fe && Zt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) _1(), Ai(), t.flags |= 98560, i = false;
                else if (i = Us(t), n !== null && n.dehydrated !== null) {
                  if (e6 === null) {
                    if (!i) throw Error(O(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
                    i[Vr] = t;
                  } else Ai(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  kt(t), i = false;
                } else Lr !== null && (ih(Lr), Lr = null), i = true;
                if (!i) return t.flags & 65536 ? t : null;
              }
              return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (n = n !== null, n !== (e6 !== null && e6.memoizedState !== null) && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e6 === null || (Oe.current & 1) !== 0 ? rt === 0 && (rt = 3) : Vh())), t.updateQueue !== null && (t.flags |= 4), kt(t), null);
            case 4:
              return Fi(), Qf(e6, t), e6 === null && rl(t.stateNode.containerInfo), kt(t), null;
            case 10:
              return Dh(t.type._context), kt(t), null;
            case 17:
              return qt(t.type) && fu(), kt(t), null;
            case 19:
              if (Me(Oe), i = t.memoizedState, i === null) return kt(t), null;
              if (n = (t.flags & 128) !== 0, o = i.rendering, o === null) if (n) _o(i, false);
              else {
                if (rt !== 0 || e6 !== null && (e6.flags & 128) !== 0) for (e6 = t.child; e6 !== null; ) {
                  if (o = wu(e6), o !== null) {
                    for (t.flags |= 128, _o(i, false), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) i = r, e6 = n, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e6, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e6 = o.dependencies, i.dependencies = e6 === null ? null : { lanes: e6.lanes, firstContext: e6.firstContext }), r = r.sibling;
                    return Ne(Oe, Oe.current & 1 | 2), t.child;
                  }
                  e6 = e6.sibling;
                }
                i.tail !== null && qe() > zi && (t.flags |= 128, n = true, _o(i, false), t.lanes = 4194304);
              }
              else {
                if (!n) if (e6 = wu(o), e6 !== null) {
                  if (t.flags |= 128, n = true, r = e6.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), _o(i, true), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Fe) return kt(t), null;
                } else 2 * qe() - i.renderingStartTime > zi && r !== 1073741824 && (t.flags |= 128, n = true, _o(i, false), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (r = i.last, r !== null ? r.sibling = o : t.child = o, i.last = o);
              }
              return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = qe(), t.sibling = null, r = Oe.current, Ne(Oe, n ? r & 1 | 2 : r & 1), t) : (kt(t), null);
            case 22:
            case 23:
              return Bh(), n = t.memoizedState !== null, e6 !== null && e6.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (Qt & 1073741824) !== 0 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : kt(t), null;
            case 24:
              return null;
            case 25:
              return null;
          }
          throw Error(O(156, t.tag));
        }
        function Xk(e6, t) {
          switch (Eh(t), t.tag) {
            case 1:
              return qt(t.type) && fu(), e6 = t.flags, e6 & 65536 ? (t.flags = e6 & -65537 | 128, t) : null;
            case 3:
              return Fi(), Me(Yt), Me(Rt), _h(), e6 = t.flags, (e6 & 65536) !== 0 && (e6 & 128) === 0 ? (t.flags = e6 & -65537 | 128, t) : null;
            case 5:
              return Ph(t), null;
            case 13:
              if (Me(Oe), e6 = t.memoizedState, e6 !== null && e6.dehydrated !== null) {
                if (t.alternate === null) throw Error(O(340));
                Ai();
              }
              return e6 = t.flags, e6 & 65536 ? (t.flags = e6 & -65537 | 128, t) : null;
            case 19:
              return Me(Oe), null;
            case 4:
              return Fi(), null;
            case 10:
              return Dh(t.type._context), null;
            case 22:
            case 23:
              return Bh(), null;
            case 24:
              return null;
            default:
              return null;
          }
        }
        var Ws = false, Et = false, Qk = typeof WeakSet == "function" ? WeakSet : Set, W = null;
        function Ei(e6, t) {
          var r = e6.ref;
          if (r !== null) if (typeof r == "function") try {
            r(null);
          } catch (n) {
            He(e6, t, n);
          }
          else r.current = null;
        }
        function Zf(e6, t, r) {
          try {
            r();
          } catch (n) {
            He(e6, t, n);
          }
        }
        var Rv = false;
        function Zk(e6, t) {
          if (Ff = su, e6 = w1(), bh(e6)) {
            if ("selectionStart" in e6) var r = { start: e6.selectionStart, end: e6.selectionEnd };
            else e: {
              r = (r = e6.ownerDocument) && r.defaultView || window;
              var n = r.getSelection && r.getSelection();
              if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var a = n.anchorOffset, i = n.focusNode;
                n = n.focusOffset;
                try {
                  r.nodeType, i.nodeType;
                } catch {
                  r = null;
                  break e;
                }
                var o = 0, l = -1, s = -1, u = 0, c = 0, d = e6, f = null;
                t: for (; ; ) {
                  for (var p; d !== r || a !== 0 && d.nodeType !== 3 || (l = o + a), d !== i || n !== 0 && d.nodeType !== 3 || (s = o + n), d.nodeType === 3 && (o += d.nodeValue.length), (p = d.firstChild) !== null; ) f = d, d = p;
                  for (; ; ) {
                    if (d === e6) break t;
                    if (f === r && ++u === a && (l = o), f === i && ++c === n && (s = o), (p = d.nextSibling) !== null) break;
                    d = f, f = d.parentNode;
                  }
                  d = p;
                }
                r = l === -1 || s === -1 ? null : { start: l, end: s };
              } else r = null;
            }
            r = r || { start: 0, end: 0 };
          } else r = null;
          for ($f = { focusedElem: e6, selectionRange: r }, su = false, W = t; W !== null; ) if (t = W, e6 = t.child, (t.subtreeFlags & 1028) !== 0 && e6 !== null) e6.return = t, W = e6;
          else for (; W !== null; ) {
            t = W;
            try {
              var v = t.alternate;
              if ((t.flags & 1024) !== 0) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var y = v.memoizedProps, g = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Dr(t.type, y), g);
                    m.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(O(163));
              }
            } catch (b) {
              He(t, t.return, b);
            }
            if (e6 = t.sibling, e6 !== null) {
              e6.return = t.return, W = e6;
              break;
            }
            W = t.return;
          }
          return v = Rv, Rv = false, v;
        }
        function Wo(e6, t, r) {
          var n = t.updateQueue;
          if (n = n !== null ? n.lastEffect : null, n !== null) {
            var a = n = n.next;
            do {
              if ((a.tag & e6) === e6) {
                var i = a.destroy;
                a.destroy = void 0, i !== void 0 && Zf(t, r, i);
              }
              a = a.next;
            } while (a !== n);
          }
        }
        function Fu(e6, t) {
          if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var r = t = t.next;
            do {
              if ((r.tag & e6) === e6) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function Jf(e6) {
          var t = e6.ref;
          if (t !== null) {
            var r = e6.stateNode;
            switch (e6.tag) {
              case 5:
                e6 = r;
                break;
              default:
                e6 = r;
            }
            typeof t == "function" ? t(e6) : t.current = e6;
          }
        }
        function my(e6) {
          var t = e6.alternate;
          t !== null && (e6.alternate = null, my(t)), e6.child = null, e6.deletions = null, e6.sibling = null, e6.tag === 5 && (t = e6.stateNode, t !== null && (delete t[Vr], delete t[al], delete t[If], delete t[Tk], delete t[Fk])), e6.stateNode = null, e6.return = null, e6.dependencies = null, e6.memoizedProps = null, e6.memoizedState = null, e6.pendingProps = null, e6.stateNode = null, e6.updateQueue = null;
        }
        function gy(e6) {
          return e6.tag === 5 || e6.tag === 3 || e6.tag === 4;
        }
        function Sv(e6) {
          e: for (; ; ) {
            for (; e6.sibling === null; ) {
              if (e6.return === null || gy(e6.return)) return null;
              e6 = e6.return;
            }
            for (e6.sibling.return = e6.return, e6 = e6.sibling; e6.tag !== 5 && e6.tag !== 6 && e6.tag !== 18; ) {
              if (e6.flags & 2 || e6.child === null || e6.tag === 4) continue e;
              e6.child.return = e6, e6 = e6.child;
            }
            if (!(e6.flags & 2)) return e6.stateNode;
          }
        }
        function eh(e6, t, r) {
          var n = e6.tag;
          if (n === 5 || n === 6) e6 = e6.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e6, t) : r.insertBefore(e6, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e6, r)) : (t = r, t.appendChild(e6)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = du));
          else if (n !== 4 && (e6 = e6.child, e6 !== null)) for (eh(e6, t, r), e6 = e6.sibling; e6 !== null; ) eh(e6, t, r), e6 = e6.sibling;
        }
        function th(e6, t, r) {
          var n = e6.tag;
          if (n === 5 || n === 6) e6 = e6.stateNode, t ? r.insertBefore(e6, t) : r.appendChild(e6);
          else if (n !== 4 && (e6 = e6.child, e6 !== null)) for (th(e6, t, r), e6 = e6.sibling; e6 !== null; ) th(e6, t, r), e6 = e6.sibling;
        }
        var ft = null, Nr = false;
        function $n(e6, t, r) {
          for (r = r.child; r !== null; ) vy(e6, t, r), r = r.sibling;
        }
        function vy(e6, t, r) {
          if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
            Wr.onCommitFiberUnmount(Du, r);
          } catch {
          }
          switch (r.tag) {
            case 5:
              Et || Ei(r, t);
            case 6:
              var n = ft, a = Nr;
              ft = null, $n(e6, t, r), ft = n, Nr = a, ft !== null && (Nr ? (e6 = ft, r = r.stateNode, e6.nodeType === 8 ? e6.parentNode.removeChild(r) : e6.removeChild(r)) : ft.removeChild(r.stateNode));
              break;
            case 18:
              ft !== null && (Nr ? (e6 = ft, r = r.stateNode, e6.nodeType === 8 ? nf(e6.parentNode, r) : e6.nodeType === 1 && nf(e6, r), Jo(e6)) : nf(ft, r.stateNode));
              break;
            case 4:
              n = ft, a = Nr, ft = r.stateNode.containerInfo, Nr = true, $n(e6, t, r), ft = n, Nr = a;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Et && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                a = n = n.next;
                do {
                  var i = a, o = i.destroy;
                  i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Zf(r, t, o), a = a.next;
                } while (a !== n);
              }
              $n(e6, t, r);
              break;
            case 1:
              if (!Et && (Ei(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
              } catch (l) {
                He(r, t, l);
              }
              $n(e6, t, r);
              break;
            case 21:
              $n(e6, t, r);
              break;
            case 22:
              r.mode & 1 ? (Et = (n = Et) || r.memoizedState !== null, $n(e6, t, r), Et = n) : $n(e6, t, r);
              break;
            default:
              $n(e6, t, r);
          }
        }
        function Cv(e6) {
          var t = e6.updateQueue;
          if (t !== null) {
            e6.updateQueue = null;
            var r = e6.stateNode;
            r === null && (r = e6.stateNode = new Qk()), t.forEach(function(n) {
              var a = lE.bind(null, e6, n);
              r.has(n) || (r.add(n), n.then(a, a));
            });
          }
        }
        function Cr(e6, t) {
          var r = t.deletions;
          if (r !== null) for (var n = 0; n < r.length; n++) {
            var a = r[n];
            try {
              var i = e6, o = t, l = o;
              e: for (; l !== null; ) {
                switch (l.tag) {
                  case 5:
                    ft = l.stateNode, Nr = false;
                    break e;
                  case 3:
                    ft = l.stateNode.containerInfo, Nr = true;
                    break e;
                  case 4:
                    ft = l.stateNode.containerInfo, Nr = true;
                    break e;
                }
                l = l.return;
              }
              if (ft === null) throw Error(O(160));
              vy(i, o, a), ft = null, Nr = false;
              var s = a.alternate;
              s !== null && (s.return = null), a.return = null;
            } catch (u) {
              He(a, t, u);
            }
          }
          if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) yy(t, e6), t = t.sibling;
        }
        function yy(e6, t) {
          var r = e6.alternate, n = e6.flags;
          switch (e6.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (Cr(t, e6), Ur(e6), n & 4) {
                try {
                  Wo(3, e6, e6.return), Fu(3, e6);
                } catch (y) {
                  He(e6, e6.return, y);
                }
                try {
                  Wo(5, e6, e6.return);
                } catch (y) {
                  He(e6, e6.return, y);
                }
              }
              break;
            case 1:
              Cr(t, e6), Ur(e6), n & 512 && r !== null && Ei(r, r.return);
              break;
            case 5:
              if (Cr(t, e6), Ur(e6), n & 512 && r !== null && Ei(r, r.return), e6.flags & 32) {
                var a = e6.stateNode;
                try {
                  Ko(a, "");
                } catch (y) {
                  He(e6, e6.return, y);
                }
              }
              if (n & 4 && (a = e6.stateNode, a != null)) {
                var i = e6.memoizedProps, o = r !== null ? r.memoizedProps : i, l = e6.type, s = e6.updateQueue;
                if (e6.updateQueue = null, s !== null) try {
                  l === "input" && i.type === "radio" && i.name != null && jv(a, i), Sf(l, o);
                  var u = Sf(l, i);
                  for (o = 0; o < s.length; o += 2) {
                    var c = s[o], d = s[o + 1];
                    c === "style" ? Wv(a, d) : c === "dangerouslySetInnerHTML" ? Bv(a, d) : c === "children" ? Ko(a, d) : sh(a, c, d, u);
                  }
                  switch (l) {
                    case "input":
                      xf(a, i);
                      break;
                    case "textarea":
                      Hv(a, i);
                      break;
                    case "select":
                      var f = a._wrapperState.wasMultiple;
                      a._wrapperState.wasMultiple = !!i.multiple;
                      var p = i.value;
                      p != null ? Si(a, !!i.multiple, p, false) : f !== !!i.multiple && (i.defaultValue != null ? Si(a, !!i.multiple, i.defaultValue, true) : Si(a, !!i.multiple, i.multiple ? [] : "", false));
                  }
                  a[al] = i;
                } catch (y) {
                  He(e6, e6.return, y);
                }
              }
              break;
            case 6:
              if (Cr(t, e6), Ur(e6), n & 4) {
                if (e6.stateNode === null) throw Error(O(162));
                a = e6.stateNode, i = e6.memoizedProps;
                try {
                  a.nodeValue = i;
                } catch (y) {
                  He(e6, e6.return, y);
                }
              }
              break;
            case 3:
              if (Cr(t, e6), Ur(e6), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                Jo(t.containerInfo);
              } catch (y) {
                He(e6, e6.return, y);
              }
              break;
            case 4:
              Cr(t, e6), Ur(e6);
              break;
            case 13:
              Cr(t, e6), Ur(e6), a = e6.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Hh = qe())), n & 4 && Cv(e6);
              break;
            case 22:
              if (c = r !== null && r.memoizedState !== null, e6.mode & 1 ? (Et = (u = Et) || c, Cr(t, e6), Et = u) : Cr(t, e6), Ur(e6), n & 8192) {
                if (u = e6.memoizedState !== null, (e6.stateNode.isHidden = u) && !c && (e6.mode & 1) !== 0) for (W = e6, c = e6.child; c !== null; ) {
                  for (d = W = c; W !== null; ) {
                    switch (f = W, p = f.child, f.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Wo(4, f, f.return);
                        break;
                      case 1:
                        Ei(f, f.return);
                        var v = f.stateNode;
                        if (typeof v.componentWillUnmount == "function") {
                          n = f, r = f.return;
                          try {
                            t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                          } catch (y) {
                            He(n, r, y);
                          }
                        }
                        break;
                      case 5:
                        Ei(f, f.return);
                        break;
                      case 22:
                        if (f.memoizedState !== null) {
                          Nv(d);
                          continue;
                        }
                    }
                    p !== null ? (p.return = f, W = p) : Nv(d);
                  }
                  c = c.sibling;
                }
                e: for (c = null, d = e6; ; ) {
                  if (d.tag === 5) {
                    if (c === null) {
                      c = d;
                      try {
                        a = d.stateNode, u ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, s = d.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = Vv("display", o));
                      } catch (y) {
                        He(e6, e6.return, y);
                      }
                    }
                  } else if (d.tag === 6) {
                    if (c === null) try {
                      d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                    } catch (y) {
                      He(e6, e6.return, y);
                    }
                  } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e6) && d.child !== null) {
                    d.child.return = d, d = d.child;
                    continue;
                  }
                  if (d === e6) break e;
                  for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e6) break e;
                    c === d && (c = null), d = d.return;
                  }
                  c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
                }
              }
              break;
            case 19:
              Cr(t, e6), Ur(e6), n & 4 && Cv(e6);
              break;
            case 21:
              break;
            default:
              Cr(t, e6), Ur(e6);
          }
        }
        function Ur(e6) {
          var t = e6.flags;
          if (t & 2) {
            try {
              e: {
                for (var r = e6.return; r !== null; ) {
                  if (gy(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error(O(160));
              }
              switch (n.tag) {
                case 5:
                  var a = n.stateNode;
                  n.flags & 32 && (Ko(a, ""), n.flags &= -33);
                  var i = Sv(e6);
                  th(e6, i, a);
                  break;
                case 3:
                case 4:
                  var o = n.stateNode.containerInfo, l = Sv(e6);
                  eh(e6, l, o);
                  break;
                default:
                  throw Error(O(161));
              }
            } catch (s) {
              He(e6, e6.return, s);
            }
            e6.flags &= -3;
          }
          t & 4096 && (e6.flags &= -4097);
        }
        function Jk(e6, t, r) {
          W = e6, wy(e6, t, r);
        }
        function wy(e6, t, r) {
          for (var n = (e6.mode & 1) !== 0; W !== null; ) {
            var a = W, i = a.child;
            if (a.tag === 22 && n) {
              var o = a.memoizedState !== null || Ws;
              if (!o) {
                var l = a.alternate, s = l !== null && l.memoizedState !== null || Et;
                l = Ws;
                var u = Et;
                if (Ws = o, (Et = s) && !u) for (W = a; W !== null; ) o = W, s = o.child, o.tag === 22 && o.memoizedState !== null ? Lv(a) : s !== null ? (s.return = o, W = s) : Lv(a);
                for (; i !== null; ) W = i, wy(i, t, r), i = i.sibling;
                W = a, Ws = l, Et = u;
              }
              Dv(e6, t, r);
            } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, W = i) : Dv(e6, t, r);
          }
        }
        function Dv(e6) {
          for (; W !== null; ) {
            var t = W;
            if ((t.flags & 8772) !== 0) {
              var r = t.alternate;
              try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Et || Fu(5, t);
                    break;
                  case 1:
                    var n = t.stateNode;
                    if (t.flags & 4 && !Et) if (r === null) n.componentDidMount();
                    else {
                      var a = t.elementType === t.type ? r.memoizedProps : Dr(t.type, r.memoizedProps);
                      n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                    }
                    var i = t.updateQueue;
                    i !== null && dv(t, i, n);
                    break;
                  case 3:
                    var o = t.updateQueue;
                    if (o !== null) {
                      if (r = null, t.child !== null) switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                      dv(t, o, r);
                    }
                    break;
                  case 5:
                    var l = t.stateNode;
                    if (r === null && t.flags & 4) {
                      r = l;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && r.focus();
                          break;
                        case "img":
                          s.src && (r.src = s.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (t.memoizedState === null) {
                      var u = t.alternate;
                      if (u !== null) {
                        var c = u.memoizedState;
                        if (c !== null) {
                          var d = c.dehydrated;
                          d !== null && Jo(d);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(O(163));
                }
                Et || t.flags & 512 && Jf(t);
              } catch (f) {
                He(t, t.return, f);
              }
            }
            if (t === e6) {
              W = null;
              break;
            }
            if (r = t.sibling, r !== null) {
              r.return = t.return, W = r;
              break;
            }
            W = t.return;
          }
        }
        function Nv(e6) {
          for (; W !== null; ) {
            var t = W;
            if (t === e6) {
              W = null;
              break;
            }
            var r = t.sibling;
            if (r !== null) {
              r.return = t.return, W = r;
              break;
            }
            W = t.return;
          }
        }
        function Lv(e6) {
          for (; W !== null; ) {
            var t = W;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    Fu(4, t);
                  } catch (s) {
                    He(t, r, s);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if (typeof n.componentDidMount == "function") {
                    var a = t.return;
                    try {
                      n.componentDidMount();
                    } catch (s) {
                      He(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    Jf(t);
                  } catch (s) {
                    He(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    Jf(t);
                  } catch (s) {
                    He(t, o, s);
                  }
              }
            } catch (s) {
              He(t, t.return, s);
            }
            if (t === e6) {
              W = null;
              break;
            }
            var l = t.sibling;
            if (l !== null) {
              l.return = t.return, W = l;
              break;
            }
            W = t.return;
          }
        }
        var eE = Math.ceil, ku = gn.ReactCurrentDispatcher, Ih = gn.ReactCurrentOwner, dr = gn.ReactCurrentBatchConfig, ve = 0, at = null, Xe = null, ht = 0, Qt = 0, Ri = ea(0), rt = 0, cl = null, Fa = 0, $u = 0, jh = 0, Yo = null, Vt = null, Hh = 0, zi = 1 / 0, ln = null, Eu = false, rh = null, Gn = null, Ys = false, Un = null, Ru = 0, qo = 0, nh = null, eu = -1, tu = 0;
        function $t() {
          return (ve & 6) !== 0 ? qe() : eu !== -1 ? eu : eu = qe();
        }
        function Kn(e6) {
          return (e6.mode & 1) === 0 ? 1 : (ve & 2) !== 0 && ht !== 0 ? ht & -ht : zk.transition !== null ? (tu === 0 && (tu = n1()), tu) : (e6 = ke, e6 !== 0 || (e6 = window.event, e6 = e6 === void 0 ? 16 : c1(e6.type)), e6);
        }
        function Pr(e6, t, r, n) {
          if (50 < qo) throw qo = 0, nh = null, Error(O(185));
          dl(e6, r, n), ((ve & 2) === 0 || e6 !== at) && (e6 === at && ((ve & 2) === 0 && ($u |= r), rt === 4 && jn(e6, ht)), Gt(e6, n), r === 1 && ve === 0 && (t.mode & 1) === 0 && (zi = qe() + 500, _u && ta()));
        }
        function Gt(e6, t) {
          var r = e6.callbackNode;
          I6(e6, t);
          var n = lu(e6, e6 === at ? ht : 0);
          if (n === 0) r !== null && zg(r), e6.callbackNode = null, e6.callbackPriority = 0;
          else if (t = n & -n, e6.callbackPriority !== t) {
            if (r != null && zg(r), t === 1) e6.tag === 0 ? $k(Mv.bind(null, e6)) : L1(Mv.bind(null, e6)), _k(function() {
              (ve & 6) === 0 && ta();
            }), r = null;
            else {
              switch (a1(n)) {
                case 1:
                  r = hh;
                  break;
                case 4:
                  r = t1;
                  break;
                case 16:
                  r = ou;
                  break;
                case 536870912:
                  r = r1;
                  break;
                default:
                  r = ou;
              }
              r = Dy(r, xy.bind(null, e6));
            }
            e6.callbackPriority = t, e6.callbackNode = r;
          }
        }
        function xy(e6, t) {
          if (eu = -1, tu = 0, (ve & 6) !== 0) throw Error(O(327));
          var r = e6.callbackNode;
          if (Mi() && e6.callbackNode !== r) return null;
          var n = lu(e6, e6 === at ? ht : 0);
          if (n === 0) return null;
          if ((n & 30) !== 0 || (n & e6.expiredLanes) !== 0 || t) t = Su(e6, n);
          else {
            t = n;
            var a = ve;
            ve |= 2;
            var i = ky();
            (at !== e6 || ht !== t) && (ln = null, zi = qe() + 500, Ma(e6, t));
            do
              try {
                nE();
                break;
              } catch (l) {
                by(e6, l);
              }
            while (true);
            Ch(), ku.current = i, ve = a, Xe !== null ? t = 0 : (at = null, ht = 0, t = rt);
          }
          if (t !== 0) {
            if (t === 2 && (a = Mf(e6), a !== 0 && (n = a, t = ah(e6, a))), t === 1) throw r = cl, Ma(e6, 0), jn(e6, n), Gt(e6, qe()), r;
            if (t === 6) jn(e6, n);
            else {
              if (a = e6.current.alternate, (n & 30) === 0 && !tE(a) && (t = Su(e6, n), t === 2 && (i = Mf(e6), i !== 0 && (n = i, t = ah(e6, i))), t === 1)) throw r = cl, Ma(e6, 0), jn(e6, n), Gt(e6, qe()), r;
              switch (e6.finishedWork = a, e6.finishedLanes = n, t) {
                case 0:
                case 1:
                  throw Error(O(345));
                case 2:
                  Ca(e6, Vt, ln);
                  break;
                case 3:
                  if (jn(e6, n), (n & 130023424) === n && (t = Hh + 500 - qe(), 10 < t)) {
                    if (lu(e6, 0) !== 0) break;
                    if (a = e6.suspendedLanes, (a & n) !== n) {
                      $t(), e6.pingedLanes |= e6.suspendedLanes & a;
                      break;
                    }
                    e6.timeoutHandle = Of(Ca.bind(null, e6, Vt, ln), t);
                    break;
                  }
                  Ca(e6, Vt, ln);
                  break;
                case 4:
                  if (jn(e6, n), (n & 4194240) === n) break;
                  for (t = e6.eventTimes, a = -1; 0 < n; ) {
                    var o = 31 - Mr(n);
                    i = 1 << o, o = t[o], o > a && (a = o), n &= ~i;
                  }
                  if (n = a, n = qe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * eE(n / 1960)) - n, 10 < n) {
                    e6.timeoutHandle = Of(Ca.bind(null, e6, Vt, ln), n);
                    break;
                  }
                  Ca(e6, Vt, ln);
                  break;
                case 5:
                  Ca(e6, Vt, ln);
                  break;
                default:
                  throw Error(O(329));
              }
            }
          }
          return Gt(e6, qe()), e6.callbackNode === r ? xy.bind(null, e6) : null;
        }
        function ah(e6, t) {
          var r = Yo;
          return e6.current.memoizedState.isDehydrated && (Ma(e6, t).flags |= 256), e6 = Su(e6, t), e6 !== 2 && (t = Vt, Vt = r, t !== null && ih(t)), e6;
        }
        function ih(e6) {
          Vt === null ? Vt = e6 : Vt.push.apply(Vt, e6);
        }
        function tE(e6) {
          for (var t = e6; ; ) {
            if (t.flags & 16384) {
              var r = t.updateQueue;
              if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
                var a = r[n], i = a.getSnapshot;
                a = a.value;
                try {
                  if (!_r(i(), a)) return false;
                } catch {
                  return false;
                }
              }
            }
            if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
            else {
              if (t === e6) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e6) return true;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
          }
          return true;
        }
        function jn(e6, t) {
          for (t &= ~jh, t &= ~$u, e6.suspendedLanes |= t, e6.pingedLanes &= ~t, e6 = e6.expirationTimes; 0 < t; ) {
            var r = 31 - Mr(t), n = 1 << r;
            e6[r] = -1, t &= ~n;
          }
        }
        function Mv(e6) {
          if ((ve & 6) !== 0) throw Error(O(327));
          Mi();
          var t = lu(e6, 0);
          if ((t & 1) === 0) return Gt(e6, qe()), null;
          var r = Su(e6, t);
          if (e6.tag !== 0 && r === 2) {
            var n = Mf(e6);
            n !== 0 && (t = n, r = ah(e6, n));
          }
          if (r === 1) throw r = cl, Ma(e6, 0), jn(e6, t), Gt(e6, qe()), r;
          if (r === 6) throw Error(O(345));
          return e6.finishedWork = e6.current.alternate, e6.finishedLanes = t, Ca(e6, Vt, ln), Gt(e6, qe()), null;
        }
        function Uh(e6, t) {
          var r = ve;
          ve |= 1;
          try {
            return e6(t);
          } finally {
            ve = r, ve === 0 && (zi = qe() + 500, _u && ta());
          }
        }
        function $a(e6) {
          Un !== null && Un.tag === 0 && (ve & 6) === 0 && Mi();
          var t = ve;
          ve |= 1;
          var r = dr.transition, n = ke;
          try {
            if (dr.transition = null, ke = 1, e6) return e6();
          } finally {
            ke = n, dr.transition = r, ve = t, (ve & 6) === 0 && ta();
          }
        }
        function Bh() {
          Qt = Ri.current, Me(Ri);
        }
        function Ma(e6, t) {
          e6.finishedWork = null, e6.finishedLanes = 0;
          var r = e6.timeoutHandle;
          if (r !== -1 && (e6.timeoutHandle = -1, Pk(r)), Xe !== null) for (r = Xe.return; r !== null; ) {
            var n = r;
            switch (Eh(n), n.tag) {
              case 1:
                n = n.type.childContextTypes, n != null && fu();
                break;
              case 3:
                Fi(), Me(Yt), Me(Rt), _h();
                break;
              case 5:
                Ph(n);
                break;
              case 4:
                Fi();
                break;
              case 13:
                Me(Oe);
                break;
              case 19:
                Me(Oe);
                break;
              case 10:
                Dh(n.type._context);
                break;
              case 22:
              case 23:
                Bh();
            }
            r = r.return;
          }
          if (at = e6, Xe = e6 = Xn(e6.current, null), ht = Qt = t, rt = 0, cl = null, jh = $u = Fa = 0, Vt = Yo = null, Na !== null) {
            for (t = 0; t < Na.length; t++) if (r = Na[t], n = r.interleaved, n !== null) {
              r.interleaved = null;
              var a = n.next, i = r.pending;
              if (i !== null) {
                var o = i.next;
                i.next = a, n.next = o;
              }
              r.pending = n;
            }
            Na = null;
          }
          return e6;
        }
        function by(e6, t) {
          do {
            var r = Xe;
            try {
              if (Ch(), Qs.current = bu, xu) {
                for (var n = Ie.memoizedState; n !== null; ) {
                  var a = n.queue;
                  a !== null && (a.pending = null), n = n.next;
                }
                xu = false;
              }
              if (Ta = 0, nt = tt = Ie = null, Vo = false, ll = 0, Ih.current = null, r === null || r.return === null) {
                rt = 1, cl = t, Xe = null;
                break;
              }
              e: {
                var i = e6, o = r.return, l = r, s = t;
                if (t = ht, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                  var u = s, c = l, d = c.tag;
                  if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                    var f = c.alternate;
                    f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                  }
                  var p = vv(o);
                  if (p !== null) {
                    p.flags &= -257, yv(p, o, l, i, t), p.mode & 1 && gv(i, u, t), t = p, s = u;
                    var v = t.updateQueue;
                    if (v === null) {
                      var y = /* @__PURE__ */ new Set();
                      y.add(s), t.updateQueue = y;
                    } else v.add(s);
                    break e;
                  } else {
                    if ((t & 1) === 0) {
                      gv(i, u, t), Vh();
                      break e;
                    }
                    s = Error(O(426));
                  }
                } else if (Fe && l.mode & 1) {
                  var g = vv(o);
                  if (g !== null) {
                    (g.flags & 65536) === 0 && (g.flags |= 256), yv(g, o, l, i, t), Rh($i(s, l));
                    break e;
                  }
                }
                i = s = $i(s, l), rt !== 4 && (rt = 2), Yo === null ? Yo = [i] : Yo.push(i), i = o;
                do {
                  switch (i.tag) {
                    case 3:
                      i.flags |= 65536, t &= -t, i.lanes |= t;
                      var m = ay(i, s, t);
                      cv(i, m);
                      break e;
                    case 1:
                      l = s;
                      var h = i.type, w = i.stateNode;
                      if ((i.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Gn === null || !Gn.has(w)))) {
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var b = iy(i, l, t);
                        cv(i, b);
                        break e;
                      }
                  }
                  i = i.return;
                } while (i !== null);
              }
              Ry(r);
            } catch (k) {
              t = k, Xe === r && r !== null && (Xe = r = r.return);
              continue;
            }
            break;
          } while (true);
        }
        function ky() {
          var e6 = ku.current;
          return ku.current = bu, e6 === null ? bu : e6;
        }
        function Vh() {
          (rt === 0 || rt === 3 || rt === 2) && (rt = 4), at === null || (Fa & 268435455) === 0 && ($u & 268435455) === 0 || jn(at, ht);
        }
        function Su(e6, t) {
          var r = ve;
          ve |= 2;
          var n = ky();
          (at !== e6 || ht !== t) && (ln = null, Ma(e6, t));
          do
            try {
              rE();
              break;
            } catch (a) {
              by(e6, a);
            }
          while (true);
          if (Ch(), ve = r, ku.current = n, Xe !== null) throw Error(O(261));
          return at = null, ht = 0, rt;
        }
        function rE() {
          for (; Xe !== null; ) Ey(Xe);
        }
        function nE() {
          for (; Xe !== null && !M6(); ) Ey(Xe);
        }
        function Ey(e6) {
          var t = Cy(e6.alternate, e6, Qt);
          e6.memoizedProps = e6.pendingProps, t === null ? Ry(e6) : Xe = t, Ih.current = null;
        }
        function Ry(e6) {
          var t = e6;
          do {
            var r = t.alternate;
            if (e6 = t.return, (t.flags & 32768) === 0) {
              if (r = Kk(r, t, Qt), r !== null) {
                Xe = r;
                return;
              }
            } else {
              if (r = Xk(r, t), r !== null) {
                r.flags &= 32767, Xe = r;
                return;
              }
              if (e6 !== null) e6.flags |= 32768, e6.subtreeFlags = 0, e6.deletions = null;
              else {
                rt = 6, Xe = null;
                return;
              }
            }
            if (t = t.sibling, t !== null) {
              Xe = t;
              return;
            }
            Xe = t = e6;
          } while (t !== null);
          rt === 0 && (rt = 5);
        }
        function Ca(e6, t, r) {
          var n = ke, a = dr.transition;
          try {
            dr.transition = null, ke = 1, aE(e6, t, r, n);
          } finally {
            dr.transition = a, ke = n;
          }
          return null;
        }
        function aE(e6, t, r, n) {
          do
            Mi();
          while (Un !== null);
          if ((ve & 6) !== 0) throw Error(O(327));
          r = e6.finishedWork;
          var a = e6.finishedLanes;
          if (r === null) return null;
          if (e6.finishedWork = null, e6.finishedLanes = 0, r === e6.current) throw Error(O(177));
          e6.callbackNode = null, e6.callbackPriority = 0;
          var i = r.lanes | r.childLanes;
          if (j6(e6, i), e6 === at && (Xe = at = null, ht = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Ys || (Ys = true, Dy(ou, function() {
            return Mi(), null;
          })), i = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || i) {
            i = dr.transition, dr.transition = null;
            var o = ke;
            ke = 1;
            var l = ve;
            ve |= 4, Ih.current = null, Zk(e6, r), yy(r, e6), Ck($f), su = !!Ff, $f = Ff = null, e6.current = r, Jk(r, e6, a), P6(), ve = l, ke = o, dr.transition = i;
          } else e6.current = r;
          if (Ys && (Ys = false, Un = e6, Ru = a), i = e6.pendingLanes, i === 0 && (Gn = null), T6(r.stateNode, n), Gt(e6, qe()), t !== null) for (n = e6.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
          if (Eu) throw Eu = false, e6 = rh, rh = null, e6;
          return (Ru & 1) !== 0 && e6.tag !== 0 && Mi(), i = e6.pendingLanes, (i & 1) !== 0 ? e6 === nh ? qo++ : (qo = 0, nh = e6) : qo = 0, ta(), null;
        }
        function Mi() {
          if (Un !== null) {
            var e6 = a1(Ru), t = dr.transition, r = ke;
            try {
              if (dr.transition = null, ke = 16 > e6 ? 16 : e6, Un === null) var n = false;
              else {
                if (e6 = Un, Un = null, Ru = 0, (ve & 6) !== 0) throw Error(O(331));
                var a = ve;
                for (ve |= 4, W = e6.current; W !== null; ) {
                  var i = W, o = i.child;
                  if ((W.flags & 16) !== 0) {
                    var l = i.deletions;
                    if (l !== null) {
                      for (var s = 0; s < l.length; s++) {
                        var u = l[s];
                        for (W = u; W !== null; ) {
                          var c = W;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Wo(8, c, i);
                          }
                          var d = c.child;
                          if (d !== null) d.return = c, W = d;
                          else for (; W !== null; ) {
                            c = W;
                            var f = c.sibling, p = c.return;
                            if (my(c), c === u) {
                              W = null;
                              break;
                            }
                            if (f !== null) {
                              f.return = p, W = f;
                              break;
                            }
                            W = p;
                          }
                        }
                      }
                      var v = i.alternate;
                      if (v !== null) {
                        var y = v.child;
                        if (y !== null) {
                          v.child = null;
                          do {
                            var g = y.sibling;
                            y.sibling = null, y = g;
                          } while (y !== null);
                        }
                      }
                      W = i;
                    }
                  }
                  if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, W = o;
                  else e: for (; W !== null; ) {
                    if (i = W, (i.flags & 2048) !== 0) switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wo(9, i, i.return);
                    }
                    var m = i.sibling;
                    if (m !== null) {
                      m.return = i.return, W = m;
                      break e;
                    }
                    W = i.return;
                  }
                }
                var h = e6.current;
                for (W = h; W !== null; ) {
                  o = W;
                  var w = o.child;
                  if ((o.subtreeFlags & 2064) !== 0 && w !== null) w.return = o, W = w;
                  else e: for (o = h; W !== null; ) {
                    if (l = W, (l.flags & 2048) !== 0) try {
                      switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fu(9, l);
                      }
                    } catch (k) {
                      He(l, l.return, k);
                    }
                    if (l === o) {
                      W = null;
                      break e;
                    }
                    var b = l.sibling;
                    if (b !== null) {
                      b.return = l.return, W = b;
                      break e;
                    }
                    W = l.return;
                  }
                }
                if (ve = a, ta(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
                  Wr.onPostCommitFiberRoot(Du, e6);
                } catch {
                }
                n = true;
              }
              return n;
            } finally {
              ke = r, dr.transition = t;
            }
          }
          return false;
        }
        function Pv(e6, t, r) {
          t = $i(r, t), t = ay(e6, t, 1), e6 = qn(e6, t, 1), t = $t(), e6 !== null && (dl(e6, 1, t), Gt(e6, t));
        }
        function He(e6, t, r) {
          if (e6.tag === 3) Pv(e6, e6, r);
          else for (; t !== null; ) {
            if (t.tag === 3) {
              Pv(t, e6, r);
              break;
            } else if (t.tag === 1) {
              var n = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Gn === null || !Gn.has(n))) {
                e6 = $i(r, e6), e6 = iy(t, e6, 1), t = qn(t, e6, 1), e6 = $t(), t !== null && (dl(t, 1, e6), Gt(t, e6));
                break;
              }
            }
            t = t.return;
          }
        }
        function iE(e6, t, r) {
          var n = e6.pingCache;
          n !== null && n.delete(t), t = $t(), e6.pingedLanes |= e6.suspendedLanes & r, at === e6 && (ht & r) === r && (rt === 4 || rt === 3 && (ht & 130023424) === ht && 500 > qe() - Hh ? Ma(e6, 0) : jh |= r), Gt(e6, t);
        }
        function Sy(e6, t) {
          t === 0 && ((e6.mode & 1) === 0 ? t = 1 : (t = _s, _s <<= 1, (_s & 130023424) === 0 && (_s = 4194304)));
          var r = $t();
          e6 = pn(e6, t), e6 !== null && (dl(e6, t, r), Gt(e6, r));
        }
        function oE(e6) {
          var t = e6.memoizedState, r = 0;
          t !== null && (r = t.retryLane), Sy(e6, r);
        }
        function lE(e6, t) {
          var r = 0;
          switch (e6.tag) {
            case 13:
              var n = e6.stateNode, a = e6.memoizedState;
              a !== null && (r = a.retryLane);
              break;
            case 19:
              n = e6.stateNode;
              break;
            default:
              throw Error(O(314));
          }
          n !== null && n.delete(t), Sy(e6, r);
        }
        var Cy;
        Cy = function(e6, t, r) {
          if (e6 !== null) if (e6.memoizedProps !== t.pendingProps || Yt.current) Wt = true;
          else {
            if ((e6.lanes & r) === 0 && (t.flags & 128) === 0) return Wt = false, Gk(e6, t, r);
            Wt = (e6.flags & 131072) !== 0;
          }
          else Wt = false, Fe && (t.flags & 1048576) !== 0 && M1(t, mu, t.index);
          switch (t.lanes = 0, t.tag) {
            case 2:
              var n = t.type;
              Js(e6, t), e6 = t.pendingProps;
              var a = _i(t, Rt.current);
              Li(t, r), a = Th(null, t, n, e6, a, r);
              var i = Fh();
              return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qt(n) ? (i = true, hu(t)) : i = false, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Lh(t), a.updater = Tu, t.stateNode = a, a._reactInternals = t, Wf(t, n, e6, r), t = Gf(null, t, n, true, i, r)) : (t.tag = 0, Fe && i && kh(t), Ft(null, t, a, r), t = t.child), t;
            case 16:
              n = t.elementType;
              e: {
                switch (Js(e6, t), e6 = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = uE(n), e6 = Dr(n, e6), a) {
                  case 0:
                    t = qf(null, t, n, e6, r);
                    break e;
                  case 1:
                    t = bv(null, t, n, e6, r);
                    break e;
                  case 11:
                    t = wv(null, t, n, e6, r);
                    break e;
                  case 14:
                    t = xv(null, t, n, Dr(n.type, e6), r);
                    break e;
                }
                throw Error(O(306, n, ""));
              }
              return t;
            case 0:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Dr(n, a), qf(e6, t, n, a, r);
            case 1:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Dr(n, a), bv(e6, t, n, a, r);
            case 3:
              e: {
                if (uy(t), e6 === null) throw Error(O(387));
                n = t.pendingProps, i = t.memoizedState, a = i.element, $1(e6, t), yu(t, n, null, r);
                var o = t.memoizedState;
                if (n = o.element, i.isDehydrated) if (i = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                  a = $i(Error(O(423)), t), t = kv(e6, t, n, r, a);
                  break e;
                } else if (n !== a) {
                  a = $i(Error(O(424)), t), t = kv(e6, t, n, r, a);
                  break e;
                } else for (Zt = Yn(t.stateNode.containerInfo.firstChild), Jt = t, Fe = true, Lr = null, r = T1(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                  if (Ai(), n === a) {
                    t = mn(e6, t, r);
                    break e;
                  }
                  Ft(e6, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return z1(t), e6 === null && Uf(t), n = t.type, a = t.pendingProps, i = e6 !== null ? e6.memoizedProps : null, o = a.children, zf(n, a) ? o = null : i !== null && zf(n, i) && (t.flags |= 32), sy(e6, t), Ft(e6, t, o, r), t.child;
            case 6:
              return e6 === null && Uf(t), null;
            case 13:
              return cy(e6, t, r);
            case 4:
              return Mh(t, t.stateNode.containerInfo), n = t.pendingProps, e6 === null ? t.child = Ti(t, null, n, r) : Ft(e6, t, n, r), t.child;
            case 11:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Dr(n, a), wv(e6, t, n, a, r);
            case 7:
              return Ft(e6, t, t.pendingProps, r), t.child;
            case 8:
              return Ft(e6, t, t.pendingProps.children, r), t.child;
            case 12:
              return Ft(e6, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (n = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, Ne(gu, n._currentValue), n._currentValue = o, i !== null) if (_r(i.value, o)) {
                  if (i.children === a.children && !Yt.current) {
                    t = mn(e6, t, r);
                    break e;
                  }
                } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                  var l = i.dependencies;
                  if (l !== null) {
                    o = i.child;
                    for (var s = l.firstContext; s !== null; ) {
                      if (s.context === n) {
                        if (i.tag === 1) {
                          s = dn(-1, r & -r), s.tag = 2;
                          var u = i.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var c = u.pending;
                            c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                          }
                        }
                        i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), Bf(i.return, r, t), l.lanes |= r;
                        break;
                      }
                      s = s.next;
                    }
                  } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                  else if (i.tag === 18) {
                    if (o = i.return, o === null) throw Error(O(341));
                    o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), Bf(o, r, t), o = i.sibling;
                  } else o = i.child;
                  if (o !== null) o.return = i;
                  else for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (i = o.sibling, i !== null) {
                      i.return = o.return, o = i;
                      break;
                    }
                    o = o.return;
                  }
                  i = o;
                }
                Ft(e6, t, a.children, r), t = t.child;
              }
              return t;
            case 9:
              return a = t.type, n = t.pendingProps.children, Li(t, r), a = fr(a), n = n(a), t.flags |= 1, Ft(e6, t, n, r), t.child;
            case 14:
              return n = t.type, a = Dr(n, t.pendingProps), a = Dr(n.type, a), xv(e6, t, n, a, r);
            case 15:
              return oy(e6, t, t.type, t.pendingProps, r);
            case 17:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Dr(n, a), Js(e6, t), t.tag = 1, qt(n) ? (e6 = true, hu(t)) : e6 = false, Li(t, r), ny(t, n, a), Wf(t, n, a, r), Gf(null, t, n, true, e6, r);
            case 19:
              return dy(e6, t, r);
            case 22:
              return ly(e6, t, r);
          }
          throw Error(O(156, t.tag));
        };
        function Dy(e6, t) {
          return e1(e6, t);
        }
        function sE(e6, t, r, n) {
          this.tag = e6, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function cr(e6, t, r, n) {
          return new sE(e6, t, r, n);
        }
        function Wh(e6) {
          return e6 = e6.prototype, !(!e6 || !e6.isReactComponent);
        }
        function uE(e6) {
          if (typeof e6 == "function") return Wh(e6) ? 1 : 0;
          if (e6 != null) {
            if (e6 = e6.$$typeof, e6 === ch) return 11;
            if (e6 === dh) return 14;
          }
          return 2;
        }
        function Xn(e6, t) {
          var r = e6.alternate;
          return r === null ? (r = cr(e6.tag, t, e6.key, e6.mode), r.elementType = e6.elementType, r.type = e6.type, r.stateNode = e6.stateNode, r.alternate = e6, e6.alternate = r) : (r.pendingProps = t, r.type = e6.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e6.flags & 14680064, r.childLanes = e6.childLanes, r.lanes = e6.lanes, r.child = e6.child, r.memoizedProps = e6.memoizedProps, r.memoizedState = e6.memoizedState, r.updateQueue = e6.updateQueue, t = e6.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e6.sibling, r.index = e6.index, r.ref = e6.ref, r;
        }
        function ru(e6, t, r, n, a, i) {
          var o = 2;
          if (n = e6, typeof e6 == "function") Wh(e6) && (o = 1);
          else if (typeof e6 == "string") o = 5;
          else e: switch (e6) {
            case pi:
              return Pa(r.children, a, i, t);
            case uh:
              o = 8, a |= 8;
              break;
            case mf:
              return e6 = cr(12, r, t, a | 2), e6.elementType = mf, e6.lanes = i, e6;
            case gf:
              return e6 = cr(13, r, t, a), e6.elementType = gf, e6.lanes = i, e6;
            case vf:
              return e6 = cr(19, r, t, a), e6.elementType = vf, e6.lanes = i, e6;
            case zv:
              return zu(r, a, i, t);
            default:
              if (typeof e6 == "object" && e6 !== null) switch (e6.$$typeof) {
                case Fv:
                  o = 10;
                  break e;
                case $v:
                  o = 9;
                  break e;
                case ch:
                  o = 11;
                  break e;
                case dh:
                  o = 14;
                  break e;
                case zn:
                  o = 16, n = null;
                  break e;
              }
              throw Error(O(130, e6 == null ? e6 : typeof e6, ""));
          }
          return t = cr(o, r, t, a), t.elementType = e6, t.type = n, t.lanes = i, t;
        }
        function Pa(e6, t, r, n) {
          return e6 = cr(7, e6, n, t), e6.lanes = r, e6;
        }
        function zu(e6, t, r, n) {
          return e6 = cr(22, e6, n, t), e6.elementType = zv, e6.lanes = r, e6.stateNode = { isHidden: false }, e6;
        }
        function ff(e6, t, r) {
          return e6 = cr(6, e6, null, t), e6.lanes = r, e6;
        }
        function hf(e6, t, r) {
          return t = cr(4, e6.children !== null ? e6.children : [], e6.key, t), t.lanes = r, t.stateNode = { containerInfo: e6.containerInfo, pendingChildren: null, implementation: e6.implementation }, t;
        }
        function cE(e6, t, r, n, a) {
          this.tag = t, this.containerInfo = e6, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kd(0), this.expirationTimes = Kd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kd(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
        }
        function Yh(e6, t, r, n, a, i, o, l, s) {
          return e6 = new cE(e6, t, r, l, s), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = cr(3, null, null, t), e6.current = i, i.stateNode = e6, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lh(i), e6;
        }
        function dE(e6, t, r) {
          var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: hi, key: n == null ? null : "" + n, children: e6, containerInfo: t, implementation: r };
        }
        function Ny(e6) {
          if (!e6) return Zn;
          e6 = e6._reactInternals;
          e: {
            if (Oa(e6) !== e6 || e6.tag !== 1) throw Error(O(170));
            var t = e6;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (qt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (t !== null);
            throw Error(O(171));
          }
          if (e6.tag === 1) {
            var r = e6.type;
            if (qt(r)) return N1(e6, r, t);
          }
          return t;
        }
        function Ly(e6, t, r, n, a, i, o, l, s) {
          return e6 = Yh(r, n, true, e6, a, i, o, l, s), e6.context = Ny(null), r = e6.current, n = $t(), a = Kn(r), i = dn(n, a), i.callback = t ?? null, qn(r, i, a), e6.current.lanes = a, dl(e6, a, n), Gt(e6, n), e6;
        }
        function Ou(e6, t, r, n) {
          var a = t.current, i = $t(), o = Kn(a);
          return r = Ny(r), t.context === null ? t.context = r : t.pendingContext = r, t = dn(i, o), t.payload = { element: e6 }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e6 = qn(a, t, o), e6 !== null && (Pr(e6, a, o, i), Xs(e6, a, o)), o;
        }
        function Cu(e6) {
          if (e6 = e6.current, !e6.child) return null;
          switch (e6.child.tag) {
            case 5:
              return e6.child.stateNode;
            default:
              return e6.child.stateNode;
          }
        }
        function _v(e6, t) {
          if (e6 = e6.memoizedState, e6 !== null && e6.dehydrated !== null) {
            var r = e6.retryLane;
            e6.retryLane = r !== 0 && r < t ? r : t;
          }
        }
        function qh(e6, t) {
          _v(e6, t), (e6 = e6.alternate) && _v(e6, t);
        }
        function fE() {
          return null;
        }
        var My = typeof reportError == "function" ? reportError : function(e6) {
          console.error(e6);
        };
        function Gh(e6) {
          this._internalRoot = e6;
        }
        Iu.prototype.render = Gh.prototype.render = function(e6) {
          var t = this._internalRoot;
          if (t === null) throw Error(O(409));
          Ou(e6, t, null, null);
        };
        Iu.prototype.unmount = Gh.prototype.unmount = function() {
          var e6 = this._internalRoot;
          if (e6 !== null) {
            this._internalRoot = null;
            var t = e6.containerInfo;
            $a(function() {
              Ou(null, e6, null, null);
            }), t[hn] = null;
          }
        };
        function Iu(e6) {
          this._internalRoot = e6;
        }
        Iu.prototype.unstable_scheduleHydration = function(e6) {
          if (e6) {
            var t = l1();
            e6 = { blockedOn: null, target: e6, priority: t };
            for (var r = 0; r < In.length && t !== 0 && t < In[r].priority; r++) ;
            In.splice(r, 0, e6), r === 0 && u1(e6);
          }
        };
        function Kh(e6) {
          return !(!e6 || e6.nodeType !== 1 && e6.nodeType !== 9 && e6.nodeType !== 11);
        }
        function ju(e6) {
          return !(!e6 || e6.nodeType !== 1 && e6.nodeType !== 9 && e6.nodeType !== 11 && (e6.nodeType !== 8 || e6.nodeValue !== " react-mount-point-unstable "));
        }
        function Av() {
        }
        function hE(e6, t, r, n, a) {
          if (a) {
            if (typeof n == "function") {
              var i = n;
              n = function() {
                var u = Cu(o);
                i.call(u);
              };
            }
            var o = Ly(t, n, e6, 0, null, false, false, "", Av);
            return e6._reactRootContainer = o, e6[hn] = o.current, rl(e6.nodeType === 8 ? e6.parentNode : e6), $a(), o;
          }
          for (; a = e6.lastChild; ) e6.removeChild(a);
          if (typeof n == "function") {
            var l = n;
            n = function() {
              var u = Cu(s);
              l.call(u);
            };
          }
          var s = Yh(e6, 0, false, null, null, false, false, "", Av);
          return e6._reactRootContainer = s, e6[hn] = s.current, rl(e6.nodeType === 8 ? e6.parentNode : e6), $a(function() {
            Ou(t, s, r, n);
          }), s;
        }
        function Hu(e6, t, r, n, a) {
          var i = r._reactRootContainer;
          if (i) {
            var o = i;
            if (typeof a == "function") {
              var l = a;
              a = function() {
                var s = Cu(o);
                l.call(s);
              };
            }
            Ou(t, o, e6, a);
          } else o = hE(r, t, e6, a, n);
          return Cu(o);
        }
        i1 = function(e6) {
          switch (e6.tag) {
            case 3:
              var t = e6.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var r = zo(t.pendingLanes);
                r !== 0 && (ph(t, r | 1), Gt(t, qe()), (ve & 6) === 0 && (zi = qe() + 500, ta()));
              }
              break;
            case 13:
              $a(function() {
                var n = pn(e6, 1);
                if (n !== null) {
                  var a = $t();
                  Pr(n, e6, 1, a);
                }
              }), qh(e6, 1);
          }
        };
        mh = function(e6) {
          if (e6.tag === 13) {
            var t = pn(e6, 134217728);
            if (t !== null) {
              var r = $t();
              Pr(t, e6, 134217728, r);
            }
            qh(e6, 134217728);
          }
        };
        o1 = function(e6) {
          if (e6.tag === 13) {
            var t = Kn(e6), r = pn(e6, t);
            if (r !== null) {
              var n = $t();
              Pr(r, e6, t, n);
            }
            qh(e6, t);
          }
        };
        l1 = function() {
          return ke;
        };
        s1 = function(e6, t) {
          var r = ke;
          try {
            return ke = e6, t();
          } finally {
            ke = r;
          }
        };
        Df = function(e6, t, r) {
          switch (t) {
            case "input":
              if (xf(e6, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e6; r.parentNode; ) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== e6 && n.form === e6.form) {
                    var a = Pu(n);
                    if (!a) throw Error(O(90));
                    Iv(n), xf(n, a);
                  }
                }
              }
              break;
            case "textarea":
              Hv(e6, r);
              break;
            case "select":
              t = r.value, t != null && Si(e6, !!r.multiple, t, false);
          }
        };
        Gv = Uh;
        Kv = $a;
        var pE = { usingClientEntryPoint: false, Events: [hl, yi, Pu, Yv, qv, Uh] }, Ao = { findFiberByHostInstance: Da, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mE = { bundleType: Ao.bundleType, version: Ao.version, rendererPackageName: Ao.rendererPackageName, rendererConfig: Ao.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e6) {
          return e6 = Zv(e6), e6 === null ? null : e6.stateNode;
        }, findFiberByHostInstance: Ao.findFiberByHostInstance || fE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (To = __REACT_DEVTOOLS_GLOBAL_HOOK__, !To.isDisabled && To.supportsFiber)) try {
          Du = To.inject(mE), Wr = To;
        } catch {
        }
        var To;
        rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE;
        rr.createPortal = function(e6, t) {
          var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!Kh(t)) throw Error(O(200));
          return dE(e6, t, null, r);
        };
        rr.createRoot = function(e6, t) {
          if (!Kh(e6)) throw Error(O(299));
          var r = false, n = "", a = My;
          return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Yh(e6, 1, false, null, null, r, false, n, a), e6[hn] = t.current, rl(e6.nodeType === 8 ? e6.parentNode : e6), new Gh(t);
        };
        rr.findDOMNode = function(e6) {
          if (e6 == null) return null;
          if (e6.nodeType === 1) return e6;
          var t = e6._reactInternals;
          if (t === void 0) throw typeof e6.render == "function" ? Error(O(188)) : (e6 = Object.keys(e6).join(","), Error(O(268, e6)));
          return e6 = Zv(t), e6 = e6 === null ? null : e6.stateNode, e6;
        };
        rr.flushSync = function(e6) {
          return $a(e6);
        };
        rr.hydrate = function(e6, t, r) {
          if (!ju(t)) throw Error(O(200));
          return Hu(null, e6, t, true, r);
        };
        rr.hydrateRoot = function(e6, t, r) {
          if (!Kh(e6)) throw Error(O(405));
          var n = r != null && r.hydratedSources || null, a = false, i = "", o = My;
          if (r != null && (r.unstable_strictMode === true && (a = true), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = Ly(t, null, e6, 1, r ?? null, a, false, i, o), e6[hn] = t.current, rl(e6), n) for (e6 = 0; e6 < n.length; e6++) r = n[e6], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(r, a);
          return new Iu(t);
        };
        rr.render = function(e6, t, r) {
          if (!ju(t)) throw Error(O(200));
          return Hu(null, e6, t, false, r);
        };
        rr.unmountComponentAtNode = function(e6) {
          if (!ju(e6)) throw Error(O(40));
          return e6._reactRootContainer ? ($a(function() {
            Hu(null, null, e6, false, function() {
              e6._reactRootContainer = null, e6[hn] = null;
            });
          }), true) : false;
        };
        rr.unstable_batchedUpdates = Uh;
        rr.unstable_renderSubtreeIntoContainer = function(e6, t, r, n) {
          if (!ju(r)) throw Error(O(200));
          if (e6 == null || e6._reactInternals === void 0) throw Error(O(38));
          return Hu(e6, t, r, false, n);
        };
        rr.version = "18.3.1-next-f1338f8080-20240426";
      });
      ml = Rr((HN, Ay) => {
        "use strict";
        function _y() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y);
          } catch (e6) {
            console.error(e6);
          }
        }
        _y(), Ay.exports = Py();
      });
      Fy = Rr((Xh) => {
        "use strict";
        var Ty = ml();
        Xh.createRoot = Ty.createRoot, Xh.hydrateRoot = Ty.hydrateRoot;
        var UN;
      });
      k4 = Rr((Jr) => {
        "use strict";
        Object.defineProperty(Jr, "__esModule", { value: true });
        Jr.parseCookie = x4;
        Jr.parse = x4;
        Jr.stringifyCookie = DS;
        Jr.stringifySetCookie = Ac;
        Jr.serialize = Ac;
        Jr.parseSetCookie = NS;
        Jr.stringifySetCookie = Ac;
        Jr.serialize = Ac;
        var y4 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, w4 = /^[\u0021-\u003A\u003C-\u007E]*$/, kS = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, ES = /^[\u0020-\u003A\u003D-\u007E]*$/, RS = /^-?\d+$/, SS = Object.prototype.toString, CS = (() => {
          let e6 = function() {
          };
          return e6.prototype = /* @__PURE__ */ Object.create(null), e6;
        })();
        function x4(e6, t) {
          let r = new CS(), n = e6.length;
          if (n < 2) return r;
          let a = t?.decode || b4, i = 0;
          do {
            let o = u0(e6, i, n);
            if (o === -1) break;
            let l = s0(e6, i, n);
            if (o > l) {
              i = e6.lastIndexOf(";", o - 1) + 1;
              continue;
            }
            let s = ua(e6, i, o);
            r[s] === void 0 && (r[s] = a(ua(e6, o + 1, l))), i = l + 1;
          } while (i < n);
          return r;
        }
        function DS(e6, t) {
          let r = t?.encode || encodeURIComponent, n = [];
          for (let a of Object.keys(e6)) {
            let i = e6[a];
            if (i === void 0) continue;
            if (!y4.test(a)) throw new TypeError(`cookie name is invalid: ${a}`);
            let o = r(i);
            if (!w4.test(o)) throw new TypeError(`cookie val is invalid: ${i}`);
            n.push(`${a}=${o}`);
          }
          return n.join("; ");
        }
        function Ac(e6, t, r) {
          let n = typeof e6 == "object" ? e6 : { ...r, name: e6, value: String(t) }, i = (typeof t == "object" ? t : r)?.encode || encodeURIComponent;
          if (!y4.test(n.name)) throw new TypeError(`argument name is invalid: ${n.name}`);
          let o = n.value ? i(n.value) : "";
          if (!w4.test(o)) throw new TypeError(`argument val is invalid: ${n.value}`);
          let l = n.name + "=" + o;
          if (n.maxAge !== void 0) {
            if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
            l += "; Max-Age=" + n.maxAge;
          }
          if (n.domain) {
            if (!kS.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
            l += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!ES.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
            l += "; Path=" + n.path;
          }
          if (n.expires) {
            if (!LS(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
            l += "; Expires=" + n.expires.toUTCString();
          }
          if (n.httpOnly && (l += "; HttpOnly"), n.secure && (l += "; Secure"), n.partitioned && (l += "; Partitioned"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
            case "low":
              l += "; Priority=Low";
              break;
            case "medium":
              l += "; Priority=Medium";
              break;
            case "high":
              l += "; Priority=High";
              break;
            default:
              throw new TypeError(`option priority is invalid: ${n.priority}`);
          }
          if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
          }
          return l;
        }
        function NS(e6, t) {
          let r = t?.decode || b4, n = e6.length, a = s0(e6, 0, n), i = u0(e6, 0, a), o = i === -1 ? { name: "", value: r(ua(e6, 0, a)) } : { name: ua(e6, 0, i), value: r(ua(e6, i + 1, a)) }, l = a + 1;
          for (; l < n; ) {
            let s = s0(e6, l, n), u = u0(e6, l, s), c = u === -1 ? ua(e6, l, s) : ua(e6, l, u), d = u === -1 ? void 0 : ua(e6, u + 1, s);
            switch (c.toLowerCase()) {
              case "httponly":
                o.httpOnly = true;
                break;
              case "secure":
                o.secure = true;
                break;
              case "partitioned":
                o.partitioned = true;
                break;
              case "domain":
                o.domain = d;
                break;
              case "path":
                o.path = d;
                break;
              case "max-age":
                d && RS.test(d) && (o.maxAge = Number(d));
                break;
              case "expires":
                if (!d) break;
                let f = new Date(d);
                Number.isFinite(f.valueOf()) && (o.expires = f);
                break;
              case "priority":
                if (!d) break;
                let p = d.toLowerCase();
                (p === "low" || p === "medium" || p === "high") && (o.priority = p);
                break;
              case "samesite":
                if (!d) break;
                let v = d.toLowerCase();
                (v === "lax" || v === "strict" || v === "none") && (o.sameSite = v);
                break;
            }
            l = s + 1;
          }
          return o;
        }
        function s0(e6, t, r) {
          let n = e6.indexOf(";", t);
          return n === -1 ? r : n;
        }
        function u0(e6, t, r) {
          let n = e6.indexOf("=", t);
          return n < r ? n : -1;
        }
        function ua(e6, t, r) {
          let n = t, a = r;
          do {
            let i = e6.charCodeAt(n);
            if (i !== 32 && i !== 9) break;
          } while (++n < a);
          for (; a > n; ) {
            let i = e6.charCodeAt(a - 1);
            if (i !== 32 && i !== 9) break;
            a--;
          }
          return e6.slice(n, a);
        }
        function b4(e6) {
          if (e6.indexOf("%") === -1) return e6;
          try {
            return decodeURIComponent(e6);
          } catch {
            return e6;
          }
        }
        function LS(e6) {
          return SS.call(e6) === "[object Date]";
        }
      });
      R4 = Rr((rL, jl) => {
        "use strict";
        var Tc = { decodeValues: true, map: false, silent: false };
        function c0(e6) {
          return typeof e6 != "string" || e6 in {};
        }
        function d0() {
          return /* @__PURE__ */ Object.create(null);
        }
        function f0(e6) {
          return typeof e6 == "string" && !!e6.trim();
        }
        function h0(e6, t) {
          var r = e6.split(";").filter(f0), n = r.shift(), a = MS(n), i = a.name, o = a.value;
          if (t = t ? Object.assign({}, Tc, t) : Tc, c0(i)) return null;
          try {
            o = t.decodeValues ? decodeURIComponent(o) : o;
          } catch (s) {
            console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", s);
          }
          var l = d0();
          return l.name = i, l.value = o, r.forEach(function(s) {
            var u = s.split("="), c = u.shift().trimLeft().toLowerCase();
            if (!c0(c)) {
              var d = u.join("=");
              if (c === "expires") l.expires = new Date(d);
              else if (c === "max-age") {
                var f = parseInt(d, 10);
                Number.isNaN(f) || (l.maxAge = f);
              } else c === "secure" ? l.secure = true : c === "httponly" ? l.httpOnly = true : c === "samesite" ? l.sameSite = d : c === "partitioned" ? l.partitioned = true : c && (l[c] = d);
            }
          }), l;
        }
        function MS(e6) {
          var t = "", r = "", n = e6.split("=");
          return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e6, { name: t, value: r };
        }
        function E4(e6, t) {
          if (t = t ? Object.assign({}, Tc, t) : Tc, !e6) return t.map ? d0() : [];
          if (e6.headers) if (typeof e6.headers.getSetCookie == "function") e6 = e6.headers.getSetCookie();
          else if (e6.headers["set-cookie"]) e6 = e6.headers["set-cookie"];
          else {
            var r = e6.headers[Object.keys(e6.headers).find(function(a) {
              return a.toLowerCase() === "set-cookie";
            })];
            !r && e6.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e6 = r;
          }
          if (Array.isArray(e6) || (e6 = [e6]), t.map) {
            var n = d0();
            return e6.filter(f0).reduce(function(a, i) {
              var o = h0(i, t);
              return o && !c0(o.name) && (a[o.name] = o), a;
            }, n);
          } else return e6.filter(f0).map(function(a) {
            return h0(a, t);
          }).filter(Boolean);
        }
        function PS(e6) {
          if (Array.isArray(e6)) return e6;
          if (typeof e6 != "string") return [];
          var t = [], r = 0, n, a, i, o, l;
          function s() {
            for (; r < e6.length && /\s/.test(e6.charAt(r)); ) r += 1;
            return r < e6.length;
          }
          function u() {
            return a = e6.charAt(r), a !== "=" && a !== ";" && a !== ",";
          }
          for (; r < e6.length; ) {
            for (n = r, l = false; s(); ) if (a = e6.charAt(r), a === ",") {
              for (i = r, r += 1, s(), o = r; r < e6.length && u(); ) r += 1;
              r < e6.length && e6.charAt(r) === "=" ? (l = true, r = o, t.push(e6.substring(n, i)), n = r) : r = i + 1;
            } else r += 1;
            (!l || r >= e6.length) && t.push(e6.substring(n, e6.length));
          }
          return t;
        }
        jl.exports = E4;
        jl.exports.parse = E4;
        jl.exports.parseString = h0;
        jl.exports.splitCookiesString = PS;
      });
      fM = j(te());
      hM = j(be());
      pM = j(ml());
      mM = j(Fy());
      cx = {};
      Jm(cx, { Await: () => x2, BrowserRouter: () => i4, Form: () => Mc, HashRouter: () => o4, HydratedRouter: () => ux, IDLE_BLOCKER: () => vn, IDLE_FETCHER: () => Nl, IDLE_NAVIGATION: () => Vi, Link: () => io, Links: () => Z2, MemoryRouter: () => hc, Meta: () => J2, NavLink: () => zl, Navigate: () => w2, NavigationType: () => yp, Outlet: () => pc, PrefetchPageLinks: () => Lc, Route: () => $l, Router: () => Cn, RouterContextProvider: () => yr, RouterProvider: () => R0, Routes: () => mc, Scripts: () => e0, ScrollRestoration: () => r0, ServerRouter: () => $4, StaticRouter: () => h4, StaticRouterProvider: () => Ol, UNSAFE_AwaitContextProvider: () => t2, UNSAFE_DataRouterContext: () => Tr, UNSAFE_DataRouterStateContext: () => Xr, UNSAFE_ErrorResponseImpl: () => lt, UNSAFE_FetchersContext: () => ro, UNSAFE_FrameworkContext: () => xr, UNSAFE_LocationContext: () => la, UNSAFE_NavigationContext: () => mt, UNSAFE_RSCDefaultRootErrorBoundary: () => nx, UNSAFE_RemixErrorBoundary: () => ao, UNSAFE_RouteContext: () => It, UNSAFE_ServerMode: () => x0, UNSAFE_SingleFetchRedirectSymbol: () => Ar, UNSAFE_ViewTransitionContext: () => to, UNSAFE_WithComponentProps: () => R2, UNSAFE_WithErrorBoundaryProps: () => N2, UNSAFE_WithHydrateFallbackProps: () => C2, UNSAFE_createBrowserHistory: () => Ji, UNSAFE_createClientRoutes: () => Ka, UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => Ec, UNSAFE_createHashHistory: () => ac, UNSAFE_createMemoryHistory: () => nc, UNSAFE_createRouter: () => Va, UNSAFE_decodeViaTurboStream: () => Ga, UNSAFE_getHydrationData: () => Hc, UNSAFE_getPatchRoutesOnNavigationFunction: () => Sc, UNSAFE_getTurboStreamSingleFetchDataStrategy: () => bc, UNSAFE_hydrationRouteProperties: () => qa, UNSAFE_invariant: () => G, UNSAFE_mapRouteProperties: () => Sn, UNSAFE_shouldHydrateRouteLoader: () => sa, UNSAFE_useFogOFWarDiscovery: () => Cc, UNSAFE_useScrollRestoration: () => o0, UNSAFE_withComponentProps: () => gc, UNSAFE_withErrorBoundaryProps: () => yc, UNSAFE_withHydrateFallbackProps: () => vc, createBrowserRouter: () => r4, createContext: () => ic, createCookie: () => Oc, createCookieSessionStorage: () => Z4, createHashRouter: () => n4, createMemoryRouter: () => fc, createMemorySessionStorage: () => J4, createPath: () => Ue, createRequestHandler: () => K4, createRoutesFromChildren: () => Zi, createRoutesFromElements: () => b2, createRoutesStub: () => z4, createSearchParams: () => El, createSession: () => jc, createSessionStorage: () => E0, createStaticHandler: () => m4, createStaticRouter: () => Il, data: () => kp, generatePath: () => Rw, href: () => ex, isCookie: () => Ic, isRouteErrorResponse: () => Be, isSession: () => X4, matchPath: () => Ua, matchRoutes: () => eo, parsePath: () => Dt, redirect: () => Ba, redirectDocument: () => sc, renderMatches: () => k2, replace: () => uc, resolvePath: () => oc, unstable_HistoryRouter: () => t0, unstable_RSCStaticRouter: () => ox, unstable_routeRSCServerRequest: () => ix, unstable_setDevServerHooks: () => B4, unstable_usePrompt: () => f4, unstable_useRoute: () => g2, unstable_useRouterState: () => v2, useActionData: () => Tl, useAsyncError: () => p2, useAsyncValue: () => Op, useBeforeUnload: () => d4, useBlocker: () => Ip, useFetcher: () => u4, useFetchers: () => c4, useFormAction: () => i0, useHref: () => _p, useInRouterContext: () => En, useLinkClickHandler: () => a0, useLoaderData: () => Al, useLocation: () => Ke, useMatch: () => a2, useMatches: () => _l, useNavigate: () => Rn, useNavigation: () => zp, useNavigationType: () => n2, useOutlet: () => Ap, useOutletContext: () => s2, useParams: () => Pl, useResolvedPath: () => Wa, useRevalidator: () => f2, useRouteError: () => Ya, useRouteLoaderData: () => h2, useRoutes: () => Tp, useSearchParams: () => s4, useSubmit: () => _c, useViewTransitionState: () => l0 });
      Ot = j(te(), 1);
      B = j(te(), 1);
      V = j(te(), 1);
      gr = j(te(), 1);
      it = j(te(), 1);
      K = j(te(), 1);
      q2 = j(te(), 1);
      na = j(te(), 1);
      pp = j(te(), 1);
      H = j(te(), 1);
      mr = j(te(), 1);
      gw = (e6) => {
        throw TypeError(e6);
      };
      vw = (e6, t, r) => t.has(e6) || gw("Cannot " + r);
      pr = (e6, t, r) => (vw(e6, t, "read from private field"), r ? r.call(e6) : t.get(e6));
      yl = (e6, t, r) => t.has(e6) ? gw("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e6) : t.set(e6, r);
      qr = (e6, t, r, n) => (vw(e6, t, "write to private field"), n ? n.call(e6, r) : t.set(e6, r), r);
      Sl = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
      Cl = /^[\\/]{2}/;
      yp = ((e6) => (e6.Pop = "POP", e6.Push = "PUSH", e6.Replace = "REPLACE", e6))(yp || {});
      $y = "popstate";
      yr = class {
        constructor(e6) {
          if (yl(this, wl, /* @__PURE__ */ new Map()), e6) for (let [t, r] of e6) this.set(t, r);
        }
        get(e6) {
          if (pr(this, wl).has(e6)) return pr(this, wl).get(e6);
          if (e6.defaultValue !== void 0) return e6.defaultValue;
          throw new Error("No value found for context");
        }
        set(e6, t) {
          pr(this, wl).set(e6, t);
        }
      };
      wl = /* @__PURE__ */ new WeakMap();
      vE = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      wE = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
      EE = /^:[\w-]+$/;
      RE = 3;
      SE = 2;
      CE = 1;
      DE = 10;
      NE = -2;
      Iy = (e6) => e6 === "*";
      xp = (e6) => Sl.test(e6);
      bp = (e6) => e6.replace(/[\\/]{2,}/g, "/");
      nr = (e6) => bp(e6.join("/"));
      AE = (e6) => Gi(e6).replace(/^\/*/, "/");
      TE = (e6) => !e6 || e6 === "?" ? "" : e6.startsWith("?") ? e6 : "?" + e6;
      FE = (e6) => !e6 || e6 === "#" ? "" : e6.startsWith("#") ? e6 : "#" + e6;
      $E = class {
        constructor(e6, t) {
          this.type = "DataWithResponseInit", this.data = e6, this.init = t || null;
        }
      };
      Ba = (e6, t = 302) => {
        let r = t;
        typeof r == "number" ? r = { status: r } : typeof r.status > "u" && (r.status = 302);
        let n = new Headers(r.headers);
        return n.set("Location", e6), new Response(null, { ...r, headers: n });
      };
      sc = (e6, t) => {
        let r = Ba(e6, t);
        return r.headers.set("X-Remix-Reload-Document", "true"), r;
      };
      uc = (e6, t) => {
        let r = Ba(e6, t);
        return r.headers.set("X-Remix-Replace", "true"), r;
      };
      Ep = ["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
      lt = class {
        constructor(e6, t, r, n = false) {
          this.status = e6, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
      };
      Nw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      aa = /* @__PURE__ */ Symbol("Uninstrumented");
      OE = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      By = new URL("http://localhost");
      Fw = ["POST", "PUT", "PATCH", "DELETE"];
      HE = new Set(Fw);
      UE = ["GET", ...Fw];
      BE = new Set(UE);
      $w = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      VE = /* @__PURE__ */ new Set([307, 308]);
      Vi = { state: "idle", location: void 0, matches: void 0, historyAction: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      Nl = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      vn = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 };
      zw = (e6) => ({ hasErrorBoundary: !!e6.hasErrorBoundary });
      Ow = "remix-router-transitions";
      Iw = /* @__PURE__ */ Symbol("ResetLoaderData");
      WE = class {
        constructor(e6) {
          yl(this, Ia), yl(this, ji), yl(this, ra), yl(this, Hi), qr(this, Ia, e6), qr(this, ji, xl(e6));
        }
        get stableRoutes() {
          return pr(this, Ia);
        }
        get activeRoutes() {
          return pr(this, ra) ?? pr(this, Ia);
        }
        get branches() {
          return pr(this, Hi) ?? pr(this, ji);
        }
        get hasHMRRoutes() {
          return pr(this, ra) != null;
        }
        setRoutes(e6) {
          qr(this, Ia, e6), qr(this, ji, xl(e6));
        }
        setHmrRoutes(e6) {
          qr(this, ra, e6), qr(this, Hi, xl(e6));
        }
        commitHmrRoutes() {
          pr(this, ra) && (qr(this, Ia, pr(this, ra)), qr(this, ji, pr(this, Hi)), qr(this, ra, void 0), qr(this, Hi, void 0));
        }
      };
      Ia = /* @__PURE__ */ new WeakMap();
      ji = /* @__PURE__ */ new WeakMap();
      ra = /* @__PURE__ */ new WeakMap();
      Hi = /* @__PURE__ */ new WeakMap();
      Ky = /* @__PURE__ */ new WeakMap();
      Np = ({ key: e6, route: t, manifest: r, mapRouteProperties: n }) => {
        let a = r[t.id];
        if (G(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object") return;
        let i = a.lazy[e6];
        if (!i) return;
        let o = Ky.get(a);
        o || (o = {}, Ky.set(a, o));
        let l = o[e6];
        if (l) return l;
        let s = (async () => {
          let u = yE(e6), d = a[e6] !== void 0 && e6 !== "hasErrorBoundary";
          if (u) Re(!u, "Route property " + e6 + " is not a supported lazy route property. This property will be ignored."), o[e6] = Promise.resolve();
          else if (d) Re(false, `Route "${a.id}" has a static property "${e6}" defined. The lazy property will be ignored.`);
          else {
            let f = await i();
            f != null && (Object.assign(a, { [e6]: f }), Object.assign(a, n(a)));
          }
          typeof a.lazy == "object" && (a.lazy[e6] = void 0, Object.values(a.lazy).every((f) => f === void 0) && (a.lazy = void 0));
        })();
        return o[e6] = s, s;
      };
      Xy = /* @__PURE__ */ new WeakMap();
      JE = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
      Tr = Ot.createContext(null);
      Tr.displayName = "DataRouter";
      Xr = Ot.createContext(null);
      Xr.displayName = "DataRouterState";
      Ml = Ot.createContext(false);
      to = Ot.createContext({ isTransitioning: false });
      to.displayName = "ViewTransition";
      ro = Ot.createContext(/* @__PURE__ */ new Map());
      ro.displayName = "Fetchers";
      Xi = Ot.createContext(null);
      Xi.displayName = "Await";
      t2 = (e6) => Ot.createElement(Xi.Provider, e6);
      mt = Ot.createContext(null);
      mt.displayName = "Navigation";
      la = Ot.createContext(null);
      la.displayName = "Location";
      It = Ot.createContext({ outlet: null, matches: [], isDataRoute: false });
      It.displayName = "Route";
      Pp = Ot.createContext(null);
      Pp.displayName = "RouteError";
      Kr = true;
      r2 = "REACT_ROUTER_ERROR";
      oR = "REDIRECT";
      lR = "ROUTE_ERROR_RESPONSE";
      i2 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
      l2 = B.createContext(null);
      cR = B.createElement(uR, null);
      c2 = class extends B.Component {
        constructor(e6) {
          super(e6), this.state = { location: e6.location, revalidation: e6.revalidation, error: e6.error };
        }
        static getDerivedStateFromError(e6) {
          return { error: e6 };
        }
        static getDerivedStateFromProps(e6, t) {
          return t.location !== e6.location || t.revalidation !== "idle" && e6.revalidation === "idle" ? { error: e6.error, location: e6.location, revalidation: e6.revalidation } : { error: e6.error !== void 0 ? e6.error : t.error, location: t.location, revalidation: e6.revalidation || t.revalidation };
        }
        componentDidCatch(e6, t) {
          this.props.onError ? this.props.onError(e6, t) : console.error("React Router caught the following error during render", e6);
        }
        render() {
          let e6 = this.state.error;
          if (this.context && typeof e6 == "object" && e6 && "digest" in e6 && typeof e6.digest == "string") {
            let r = dc(e6.digest);
            r && (e6 = r);
          }
          let t = e6 !== void 0 ? B.createElement(It.Provider, { value: this.props.routeContext }, B.createElement(Pp.Provider, { value: e6, children: this.props.component })) : this.props.children;
          return this.context ? B.createElement(dR, { error: e6 }, t) : t;
        }
      };
      c2.contextType = Ml;
      ep = /* @__PURE__ */ new WeakMap();
      mR = 0;
      ow = {};
      sw = {};
      vR = "useOptimistic";
      uw = V[vR];
      yR = () => {
      };
      qa = ["HydrateFallback", "hydrateFallbackElement"];
      xR = class {
        constructor() {
          this.status = "pending", this.promise = new Promise((e6, t) => {
            this.resolve = (r) => {
              this.status === "pending" && (this.status = "resolved", e6(r));
            }, this.reject = (r) => {
              this.status === "pending" && (this.status = "rejected", t(r));
            };
          });
        }
      };
      bR = V.memo(y2);
      kR = class extends V.Component {
        constructor(e6) {
          super(e6), this.state = { error: null };
        }
        static getDerivedStateFromError(e6) {
          return { error: e6 };
        }
        componentDidCatch(e6, t) {
          this.props.onError ? this.props.onError(e6, t) : console.error("<Await> caught the following error during render", e6, t);
        }
        render() {
          let { children: e6, errorElement: t, resolve: r } = this.props, n = null, a = 0;
          if (!(r instanceof Promise)) a = 1, n = Promise.resolve(), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_data", { get: () => r });
          else if (this.state.error) {
            a = 2;
            let i = this.state.error;
            n = Promise.reject().catch(() => {
            }), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_error", { get: () => i });
          } else r._tracked ? (n = r, a = "_error" in n ? 2 : "_data" in n ? 1 : 0) : (a = 0, Object.defineProperty(r, "_tracked", { get: () => true }), n = r.then((i) => Object.defineProperty(r, "_data", { get: () => i }), (i) => {
            this.props.onError?.(i), Object.defineProperty(r, "_error", { get: () => i });
          }));
          if (a === 2 && !t) throw n._error;
          if (a === 2) return V.createElement(Xi.Provider, { value: n, children: t });
          if (a === 1) return V.createElement(Xi.Provider, { value: n, children: e6 });
          throw n;
        }
      };
      b2 = Zi;
      Gu = "get";
      Ku = "application/x-www-form-urlencoded";
      Bu = null;
      PR = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
      L2 = -1;
      jp = -2;
      Hp = -3;
      Up = -4;
      ec = -5;
      Bp = -6;
      Vp = -7;
      M2 = "B";
      P2 = "D";
      Yi = "E";
      cp = "M";
      _2 = "N";
      qi = "P";
      A2 = "R";
      dp = "S";
      T2 = "Y";
      F2 = "U";
      fp = "Z";
      $2 = class {
        constructor() {
          this.promise = new Promise((e6, t) => {
            this.resolve = e6, this.reject = t;
          });
        }
      };
      TR = 1;
      rp = () => Date.now();
      FR = () => new Promise((e6) => setTimeout(e6, 0));
      zR = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      Vu = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
      UR = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
      BR = /[&><\u2028\u2029]/g;
      Ar = /* @__PURE__ */ Symbol("SingleFetchRedirect");
      I2 = class extends Error {
      };
      xc = 202;
      Wp = /* @__PURE__ */ new Set([100, 101, 204, 205]);
      Qu = /* @__PURE__ */ new Set();
      oS = 1e3;
      tc = /* @__PURE__ */ new Set();
      Rc = 7680;
      ap = "react-router-manifest-version";
      xr = K.createContext(void 0);
      xr.displayName = "FrameworkContext";
      mw = "data-react-router-critical-css";
      rc = false;
      ao = class extends it.Component {
        constructor(e6) {
          super(e6), this.state = { error: e6.error || null, location: e6.location };
        }
        static getDerivedStateFromError(e6) {
          return { error: e6 };
        }
        static getDerivedStateFromProps(e6, t) {
          return t.location !== e6.location ? { error: e6.error || null, location: e6.location } : { error: e6.error || t.error, location: t.location };
        }
        render() {
          return this.state.error ? it.createElement(t4, { error: this.state.error, isOutsideRemixApp: true }) : this.props.children;
        }
      };
      gS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      try {
        gS && (window.__reactRouterVersion = "7.18.3");
      } catch {
      }
      t0.displayName = "unstable_HistoryRouter";
      io = H.forwardRef(function({ onClick: t, discover: r = "render", prefetch: n = "none", relative: a, reloadDocument: i, replace: o, mask: l, state: s, target: u, to: c, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...v }, y) {
        let { basename: g, navigator: m, useTransitions: h } = H.useContext(mt), w = typeof c == "string" && Sl.test(c), b = Lw(c, g);
        c = b.to;
        let k = _p(c, { relative: a }), L = Ke(), D = null;
        if (l) {
          let re = Dl(l, [], L.mask ? L.mask.pathname : "/", true);
          g !== "/" && (re.pathname = re.pathname === "/" ? g : nr([g, re.pathname])), D = m.createHref(re);
        }
        let [x, S, N] = cS(n, v), A = a0(c, { replace: o, mask: l, state: s, target: u, preventScrollReset: d, relative: a, viewTransition: f, defaultShouldRevalidate: p, useTransitions: h });
        function P(re) {
          t && t(re), re.defaultPrevented || A(re);
        }
        let _ = !(b.isExternal || i), I = H.createElement("a", { ...v, ...N, href: (_ ? D : void 0) || b.absoluteURL || k, onClick: _ ? P : t, ref: mS(y, S), target: u, "data-discover": !w && r === "render" ? "true" : void 0 });
        return x && !w ? H.createElement(H.Fragment, null, I, H.createElement(Lc, { page: k })) : I;
      });
      io.displayName = "Link";
      zl = H.forwardRef(function({ "aria-current": t = "page", caseSensitive: r = false, className: n = "", end: a = false, style: i, to: o, viewTransition: l, children: s, ...u }, c) {
        let d = Wa(o, { relative: u.relative }), f = Ke(), p = H.useContext(Xr), { navigator: v, basename: y } = H.useContext(mt), g = p != null && l0(d) && l === true, m = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, h = f.pathname, w = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
        r || (h = h.toLowerCase(), w = w ? w.toLowerCase() : null, m = m.toLowerCase()), w && y && (w = Ze(w, y) || w);
        let b = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length, k = h === m || !a && h.startsWith(m) && h.charAt(b) === "/", L = w != null && (w === m || !a && w.startsWith(m) && w.charAt(m.length) === "/"), D = { isActive: k, isPending: L, isTransitioning: g }, x = k ? t : void 0, S;
        typeof n == "function" ? S = n(D) : S = [n, k ? "active" : null, L ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
        let N = typeof i == "function" ? i(D) : i;
        return H.createElement(io, { ...u, "aria-current": x, className: S, ref: c, style: N, to: o, viewTransition: l }, typeof s == "function" ? s(D) : s);
      });
      zl.displayName = "NavLink";
      Mc = H.forwardRef(({ discover: e6 = "render", fetcherKey: t, navigate: r, reloadDocument: n, replace: a, state: i, method: o = Gu, action: l, onSubmit: s, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f, ...p }, v) => {
        let { useTransitions: y } = H.useContext(mt), g = _c(), m = i0(l, { relative: u }), h = o.toLowerCase() === "get" ? "get" : "post", w = typeof l == "string" && Sl.test(l);
        return H.createElement("form", { ref: v, method: h, action: m, onSubmit: n ? s : (k) => {
          if (s && s(k), k.defaultPrevented) return;
          k.preventDefault();
          let L = k.nativeEvent.submitter, D = L?.getAttribute("formmethod") || o, x = () => g(L || k.currentTarget, { fetcherKey: t, method: D, navigate: r, replace: a, state: i, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f });
          y && r !== false ? H.startTransition(() => x()) : x();
        }, ...p, "data-discover": !w && e6 === "render" ? "true" : void 0 });
      });
      Mc.displayName = "Form";
      r0.displayName = "ScrollRestoration";
      yS = 0;
      wS = () => `__${String(++yS)}__`;
      gp = "react-router-scroll-positions";
      qu = {};
      Fr = j(te(), 1);
      lo = j(te(), 1);
      zc = j(k4(), 1);
      Y4 = j(R4(), 1);
      oo = j(te(), 1);
      gt = j(te(), 1);
      w0 = new TextEncoder();
      _S = async (e6, t) => {
        let r = w0.encode(e6), n = await I4(t, ["sign"]), a = await crypto.subtle.sign("HMAC", n, r), i = btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/, "");
        return e6 + "." + i;
      };
      AS = async (e6, t) => {
        let r = e6.lastIndexOf("."), n = e6.slice(0, r), a = e6.slice(r + 1), i = w0.encode(n), o = await I4(t, ["verify"]);
        try {
          let l = TS(atob(a));
          return await crypto.subtle.verify("HMAC", o, l, i) ? n : false;
        } catch {
          return false;
        }
      };
      I4 = async (e6, t) => crypto.subtle.importKey("raw", w0.encode(e6), { name: "HMAC", hash: "SHA-256" }, false, t);
      Oc = (e6, t = {}) => {
        let { secrets: r = [], ...n } = { path: "/", sameSite: "lax", ...t };
        return jS(e6, n.expires), { get name() {
          return e6;
        }, get isSigned() {
          return r.length > 0;
        }, get expires() {
          return typeof n.maxAge < "u" ? new Date(Date.now() + n.maxAge * 1e3) : n.expires;
        }, async parse(a, i) {
          if (!a) return null;
          let o = (0, zc.parse)(a, { ...n, ...i });
          if (e6 in o) {
            let l = o[e6];
            return typeof l == "string" && l !== "" ? await $S(l, r) : "";
          } else return null;
        }, async serialize(a, i) {
          return (0, zc.serialize)(e6, a === "" ? "" : await FS(a, r), { ...n, ...i });
        } };
      };
      Ic = (e6) => e6 != null && typeof e6.name == "string" && typeof e6.isSigned == "boolean" && typeof e6.parse == "function" && typeof e6.serialize == "function";
      x0 = ((e6) => (e6.Development = "development", e6.Production = "production", e6.Test = "test", e6))(x0 || {});
      U4 = "__reactRouterDevServerHooks";
      G4 = /* @__PURE__ */ new Set([...Wp, 304]);
      K4 = (e6, t) => {
        let r, n, a, i, o;
        return async function(s, u) {
          if (r = typeof e6 == "function" ? await e6() : e6, typeof e6 == "function") {
            let c = M4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          } else if (!n || !a || !i || !o) {
            let c = M4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          }
          return o(s, u);
        };
      };
      jc = (e6 = {}, t = "") => {
        let r = new Map(Object.entries(e6));
        return { get id() {
          return t;
        }, get data() {
          return Object.fromEntries(r);
        }, has(n) {
          return r.has(n) || r.has(m0(n));
        }, get(n) {
          if (r.has(n)) return r.get(n);
          let a = m0(n);
          if (r.has(a)) {
            let i = r.get(a);
            return r.delete(a), i;
          }
        }, set(n, a) {
          r.set(n, a);
        }, flash(n, a) {
          r.set(m0(n), a);
        }, unset(n) {
          r.delete(n);
        } };
      };
      X4 = (e6) => e6 != null && typeof e6.id == "string" && typeof e6.data < "u" && typeof e6.has == "function" && typeof e6.get == "function" && typeof e6.set == "function" && typeof e6.flash == "function" && typeof e6.unset == "function";
      y0 = new TextEncoder();
      P4 = "</body></html>";
      tx = class extends gt.default.Component {
        constructor(e6) {
          super(e6), this.state = { error: null, location: e6.location };
        }
        static getDerivedStateFromError(e6) {
          return { error: e6 };
        }
        static getDerivedStateFromProps(e6, t) {
          return t.location !== e6.location ? { error: null, location: e6.location } : { error: t.error, location: t.location };
        }
        render() {
          return this.state.error ? gt.default.createElement(rx, { error: this.state.error, renderAppShell: true }) : this.props.children;
        }
      };
      s8 = () => null;
      T4 = "/__manifest";
      u8 = "use";
      F4 = oo[u8];
      lx = j(te(), 1);
      sx = j(ml(), 1);
      st = j(te(), 1);
      so = j(te(), 1);
      m8 = j(ml(), 1);
      X = null;
      Vl = null;
      uL = ic();
      b3 = {};
      Jm(b3, { BarChart: () => U5, Bullets: () => P5, Button: () => M0, ButtonLink: () => y5, Callout: () => $5, Caption: () => T5, ChoiceRow: () => r9, CloseButton: () => vd, Closing: () => I5, CompareColumns: () => d9, CopyButton: () => ZD, DataTable: () => j5, DotChart: () => b9, Drawer: () => W5, DsButton: () => _0, DsIconButton: () => A0, Facts: () => xd, Figure: () => A5, FileButton: () => Pn, FileCard: () => s9, FileGround: () => l9, FileRouter: () => _N, Group: () => R5, Header: () => E5, Heading: () => L5, ImageFrame: () => y3, KeySentence: () => _5, LineChart: () => g9, Link: () => io, List: () => dN, LiveRegion: () => J5, NavLink: () => zl, NumberedList: () => z5, Paragraph: () => M5, PhotoCard: () => V5, PhotoCards: () => B5, PhotoViewer: () => ss, Photos: () => Nm, ProductCard: () => bN, ProductCarousel: () => RN, ProductDetail: () => lN, ProductGrid: () => EN, ProductImage: () => CN, ProductModal: () => sN, ProductTable: () => NN, ProductTile: () => Om, RangeChart: () => w9, RecommendationCard: () => MN, RecommendationGrid: () => LN, Reveal: () => J9, Route: () => $l, Routes: () => mc, Row: () => D5, Rows: () => C5, Rule: () => F5, Slider: () => a9, Sparklines: () => y9, StackedBar: () => x9, StripArrows: () => x5, Table: () => O5, Text: () => N5, TextField: () => n9, TextLink: () => Dm, Wordmark: () => v3, liveListEdits: () => X5, liveTarget: () => ld, productBadge: () => n3, stripTakeoverEvents: () => rs, useFileContext: () => sm, useLiveDetail: () => Z9, useLiveItem: () => q9, useLiveItems: () => K5, useLiveValue: () => Y9, useLocalState: () => MC, useLocation: () => Ke, useNavigate: () => Rn, useWakeAgent: () => Rb });
      Im = j(te(), 1);
      Je = j(te(), 1);
      xL = j(te(), 1);
      D0 = j(be(), 1);
      Sx = j(te(), 1);
      Cx = j(be(), 1);
      P0 = j(te(), 1);
      Gl = j(be(), 1);
      g8 = (e6) => {
        let t = y8(e6), { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e6;
        return { getClassGroupId: (a) => {
          let i = a.split("-");
          return i[0] === "" && i.length !== 1 && i.shift(), xx(i, t) || v8(a);
        }, getConflictingClassGroupIds: (a, i) => {
          let o = r[a] || [];
          return i && n[a] ? [...o, ...n[a]] : o;
        } };
      };
      xx = (e6, t) => {
        if (e6.length === 0) return t.classGroupId;
        let r = e6[0], n = t.nextPart.get(r), a = n ? xx(e6.slice(1), n) : void 0;
        if (a) return a;
        if (t.validators.length === 0) return;
        let i = e6.join("-");
        return t.validators.find(({ validator: o }) => o(i))?.classGroupId;
      };
      dx = /^\[(.+)\]$/;
      v8 = (e6) => {
        if (dx.test(e6)) {
          let t = dx.exec(e6)[1], r = t?.substring(0, t.indexOf(":"));
          if (r) return "arbitrary.." + r;
        }
      };
      y8 = (e6) => {
        let { theme: t, prefix: r } = e6, n = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
        return x8(Object.entries(e6.classGroups), r).forEach(([a, i]) => {
          C0(i, n, a, t);
        }), n;
      };
      C0 = (e6, t, r, n) => {
        e6.forEach((a) => {
          if (typeof a == "string") {
            let i = a === "" ? t : fx(t, a);
            i.classGroupId = r;
            return;
          }
          if (typeof a == "function") {
            if (w8(a)) {
              C0(a(n), t, r, n);
              return;
            }
            t.validators.push({ validator: a, classGroupId: r });
            return;
          }
          Object.entries(a).forEach(([i, o]) => {
            C0(o, fx(t, i), r, n);
          });
        });
      };
      fx = (e6, t) => {
        let r = e6;
        return t.split("-").forEach((n) => {
          r.nextPart.has(n) || r.nextPart.set(n, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(n);
        }), r;
      };
      w8 = (e6) => e6.isThemeGetter;
      x8 = (e6, t) => t ? e6.map(([r, n]) => {
        let a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, l]) => [t + o, l])) : i);
        return [r, a];
      }) : e6;
      b8 = (e6) => {
        if (e6 < 1) return { get: () => {
        }, set: () => {
        } };
        let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (i, o) => {
          r.set(i, o), t++, t > e6 && (t = 0, n = r, r = /* @__PURE__ */ new Map());
        };
        return { get(i) {
          let o = r.get(i);
          if (o !== void 0) return o;
          if ((o = n.get(i)) !== void 0) return a(i, o), o;
        }, set(i, o) {
          r.has(i) ? r.set(i, o) : a(i, o);
        } };
      };
      k8 = (e6) => {
        let { separator: t, experimentalParseClassName: r } = e6, n = t.length === 1, a = t[0], i = t.length, o = (l) => {
          let s = [], u = 0, c = 0, d;
          for (let g = 0; g < l.length; g++) {
            let m = l[g];
            if (u === 0) {
              if (m === a && (n || l.slice(g, g + i) === t)) {
                s.push(l.slice(c, g)), c = g + i;
                continue;
              }
              if (m === "/") {
                d = g;
                continue;
              }
            }
            m === "[" ? u++ : m === "]" && u--;
          }
          let f = s.length === 0 ? l : l.substring(c), p = f.startsWith("!"), v = p ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
          return { modifiers: s, hasImportantModifier: p, baseClassName: v, maybePostfixModifierPosition: y };
        };
        return r ? (l) => r({ className: l, parseClassName: o }) : o;
      };
      E8 = (e6) => {
        if (e6.length <= 1) return e6;
        let t = [], r = [];
        return e6.forEach((n) => {
          n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
        }), t.push(...r.sort()), t;
      };
      R8 = (e6) => ({ cache: b8(e6.cacheSize), parseClassName: k8(e6), ...g8(e6) });
      S8 = /\s+/;
      C8 = (e6, t) => {
        let { parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: a } = t, i = [], o = e6.trim().split(S8), l = "";
        for (let s = o.length - 1; s >= 0; s -= 1) {
          let u = o[s], { modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = r(u), v = !!p, y = n(v ? f.substring(0, p) : f);
          if (!y) {
            if (!v) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            if (y = n(f), !y) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            v = false;
          }
          let g = E8(c).join(":"), m = d ? g + "!" : g, h = m + y;
          if (i.includes(h)) continue;
          i.push(h);
          let w = a(y, v);
          for (let b = 0; b < w.length; ++b) {
            let k = w[b];
            i.push(m + k);
          }
          l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
      };
      bx = (e6) => {
        if (typeof e6 == "string") return e6;
        let t, r = "";
        for (let n = 0; n < e6.length; n++) e6[n] && (t = bx(e6[n])) && (r && (r += " "), r += t);
        return r;
      };
      Pe = (e6) => {
        let t = (r) => r[e6] || [];
        return t.isThemeGetter = true, t;
      };
      kx = /^\[(?:([a-z-]+):)?(.+)\]$/i;
      N8 = /^\d+\/\d+$/;
      L8 = /* @__PURE__ */ new Set(["px", "full", "screen"]);
      M8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
      P8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
      _8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
      A8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      T8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      Dn = (e6) => uo(e6) || L8.has(e6) || N8.test(e6);
      ca = (e6) => co(e6, "length", U8);
      uo = (e6) => !!e6 && !Number.isNaN(Number(e6));
      S0 = (e6) => co(e6, "number", uo);
      Wl = (e6) => !!e6 && Number.isInteger(Number(e6));
      F8 = (e6) => e6.endsWith("%") && uo(e6.slice(0, -1));
      ue = (e6) => kx.test(e6);
      da = (e6) => M8.test(e6);
      $8 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
      z8 = (e6) => co(e6, $8, Ex);
      O8 = (e6) => co(e6, "position", Ex);
      I8 = /* @__PURE__ */ new Set(["image", "url"]);
      j8 = (e6) => co(e6, I8, V8);
      H8 = (e6) => co(e6, "", B8);
      Yl = () => true;
      co = (e6, t, r) => {
        let n = kx.exec(e6);
        return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : false;
      };
      U8 = (e6) => P8.test(e6) && !_8.test(e6);
      Ex = () => false;
      B8 = (e6) => A8.test(e6);
      V8 = (e6) => T8.test(e6);
      px = () => {
        let e6 = Pe("colors"), t = Pe("spacing"), r = Pe("blur"), n = Pe("brightness"), a = Pe("borderColor"), i = Pe("borderRadius"), o = Pe("borderSpacing"), l = Pe("borderWidth"), s = Pe("contrast"), u = Pe("grayscale"), c = Pe("hueRotate"), d = Pe("invert"), f = Pe("gap"), p = Pe("gradientColorStops"), v = Pe("gradientColorStopPositions"), y = Pe("inset"), g = Pe("margin"), m = Pe("opacity"), h = Pe("padding"), w = Pe("saturate"), b = Pe("scale"), k = Pe("sepia"), L = Pe("skew"), D = Pe("space"), x = Pe("translate"), S = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", ue, t], P = () => [ue, t], _ = () => ["", Dn, ca], I = () => ["auto", uo, ue], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], le = () => ["", "0", ue], Ye = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [uo, ue];
        return { cacheSize: 500, separator: ":", theme: { colors: [Yl], spacing: [Dn, ca], blur: ["none", "", da, ue], brightness: Ae(), borderColor: [e6], borderRadius: ["none", "", "full", da, ue], borderSpacing: P(), borderWidth: _(), contrast: Ae(), grayscale: le(), hueRotate: Ae(), invert: le(), gap: P(), gradientColorStops: [e6], gradientColorStopPositions: [F8, ca], inset: A(), margin: A(), opacity: Ae(), padding: P(), saturate: Ae(), scale: Ae(), sepia: le(), skew: Ae(), space: P(), translate: P() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", ue] }], container: ["container"], columns: [{ columns: [da] }], "break-after": [{ "break-after": Ye() }], "break-before": [{ "break-before": Ye() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...re(), ue] }], overflow: [{ overflow: N() }], "overflow-x": [{ "overflow-x": N() }], "overflow-y": [{ "overflow-y": N() }], overscroll: [{ overscroll: S() }], "overscroll-x": [{ "overscroll-x": S() }], "overscroll-y": [{ "overscroll-y": S() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [y] }], "inset-x": [{ "inset-x": [y] }], "inset-y": [{ "inset-y": [y] }], start: [{ start: [y] }], end: [{ end: [y] }], top: [{ top: [y] }], right: [{ right: [y] }], bottom: [{ bottom: [y] }], left: [{ left: [y] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", Wl, ue] }], basis: [{ basis: A() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", ue] }], grow: [{ grow: le() }], shrink: [{ shrink: le() }], order: [{ order: ["first", "last", "none", Wl, ue] }], "grid-cols": [{ "grid-cols": [Yl] }], "col-start-end": [{ col: ["auto", { span: ["full", Wl, ue] }, ue] }], "col-start": [{ "col-start": I() }], "col-end": [{ "col-end": I() }], "grid-rows": [{ "grid-rows": [Yl] }], "row-start-end": [{ row: ["auto", { span: [Wl, ue] }, ue] }], "row-start": [{ "row-start": I() }], "row-end": [{ "row-end": I() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ue] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ue] }], gap: [{ gap: [f] }], "gap-x": [{ "gap-x": [f] }], "gap-y": [{ "gap-y": [f] }], "justify-content": [{ justify: ["normal", ..._e()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ..._e(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [..._e(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [h] }], px: [{ px: [h] }], py: [{ py: [h] }], ps: [{ ps: [h] }], pe: [{ pe: [h] }], pt: [{ pt: [h] }], pr: [{ pr: [h] }], pb: [{ pb: [h] }], pl: [{ pl: [h] }], m: [{ m: [g] }], mx: [{ mx: [g] }], my: [{ my: [g] }], ms: [{ ms: [g] }], me: [{ me: [g] }], mt: [{ mt: [g] }], mr: [{ mr: [g] }], mb: [{ mb: [g] }], ml: [{ ml: [g] }], "space-x": [{ "space-x": [D] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [D] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, t] }], "min-w": [{ "min-w": [ue, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [ue, t, "none", "full", "min", "max", "fit", "prose", { screen: [da] }, da] }], h: [{ h: [ue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [ue, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", da, ca] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S0] }], "font-family": [{ font: [Yl] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue] }], "line-clamp": [{ "line-clamp": ["none", uo, S0] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dn, ue] }], "list-image": [{ "list-image": ["none", ue] }], "list-style-type": [{ list: ["none", "disc", "decimal", ue] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e6] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e6] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...Q(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", Dn, ca] }], "underline-offset": [{ "underline-offset": ["auto", Dn, ue] }], "text-decoration-color": [{ decoration: [e6] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: P() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", ue] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...re(), O8] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", z8] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, j8] }], "bg-color": [{ bg: [e6] }], "gradient-from-pos": [{ from: [v] }], "gradient-via-pos": [{ via: [v] }], "gradient-to-pos": [{ to: [v] }], "gradient-from": [{ from: [p] }], "gradient-via": [{ via: [p] }], "gradient-to": [{ to: [p] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [l] }], "border-w-x": [{ "border-x": [l] }], "border-w-y": [{ "border-y": [l] }], "border-w-s": [{ "border-s": [l] }], "border-w-e": [{ "border-e": [l] }], "border-w-t": [{ "border-t": [l] }], "border-w-r": [{ "border-r": [l] }], "border-w-b": [{ "border-b": [l] }], "border-w-l": [{ "border-l": [l] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...Q(), "hidden"] }], "divide-x": [{ "divide-x": [l] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: Q() }], "border-color": [{ border: [a] }], "border-color-x": [{ "border-x": [a] }], "border-color-y": [{ "border-y": [a] }], "border-color-s": [{ "border-s": [a] }], "border-color-e": [{ "border-e": [a] }], "border-color-t": [{ "border-t": [a] }], "border-color-r": [{ "border-r": [a] }], "border-color-b": [{ "border-b": [a] }], "border-color-l": [{ "border-l": [a] }], "divide-color": [{ divide: [a] }], "outline-style": [{ outline: ["", ...Q()] }], "outline-offset": [{ "outline-offset": [Dn, ue] }], "outline-w": [{ outline: [Dn, ca] }], "outline-color": [{ outline: [e6] }], "ring-w": [{ ring: _() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e6] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [Dn, ca] }], "ring-offset-color": [{ "ring-offset": [e6] }], shadow: [{ shadow: ["", "inner", "none", da, H8] }], "shadow-color": [{ shadow: [Yl] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...oe(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": oe() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [n] }], contrast: [{ contrast: [s] }], "drop-shadow": [{ "drop-shadow": ["", "none", da, ue] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [c] }], invert: [{ invert: [d] }], saturate: [{ saturate: [w] }], sepia: [{ sepia: [k] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [n] }], "backdrop-contrast": [{ "backdrop-contrast": [s] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }], "backdrop-invert": [{ "backdrop-invert": [d] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [w] }], "backdrop-sepia": [{ "backdrop-sepia": [k] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [o] }], "border-spacing-x": [{ "border-spacing-x": [o] }], "border-spacing-y": [{ "border-spacing-y": [o] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ue] }], duration: [{ duration: Ae() }], ease: [{ ease: ["linear", "in", "out", "in-out", ue] }], delay: [{ delay: Ae() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ue] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [b] }], "scale-x": [{ "scale-x": [b] }], "scale-y": [{ "scale-y": [b] }], rotate: [{ rotate: [Wl, ue] }], "translate-x": [{ "translate-x": [x] }], "translate-y": [{ "translate-y": [x] }], "skew-x": [{ "skew-x": [L] }], "skew-y": [{ "skew-y": [L] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ue] }], accent: [{ accent: ["auto", e6] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue] }], "caret-color": [{ caret: [e6] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": P() }], "scroll-mx": [{ "scroll-mx": P() }], "scroll-my": [{ "scroll-my": P() }], "scroll-ms": [{ "scroll-ms": P() }], "scroll-me": [{ "scroll-me": P() }], "scroll-mt": [{ "scroll-mt": P() }], "scroll-mr": [{ "scroll-mr": P() }], "scroll-mb": [{ "scroll-mb": P() }], "scroll-ml": [{ "scroll-ml": P() }], "scroll-p": [{ "scroll-p": P() }], "scroll-px": [{ "scroll-px": P() }], "scroll-py": [{ "scroll-py": P() }], "scroll-ps": [{ "scroll-ps": P() }], "scroll-pe": [{ "scroll-pe": P() }], "scroll-pt": [{ "scroll-pt": P() }], "scroll-pr": [{ "scroll-pr": P() }], "scroll-pb": [{ "scroll-pb": P() }], "scroll-pl": [{ "scroll-pl": P() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", ue] }], fill: [{ fill: [e6, "none"] }], "stroke-w": [{ stroke: [Dn, ca, S0] }], stroke: [{ stroke: [e6, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
      };
      W8 = (e6, { cacheSize: t, prefix: r, separator: n, experimentalParseClassName: a, extend: i = {}, override: o = {} }) => {
        ql(e6, "cacheSize", t), ql(e6, "prefix", r), ql(e6, "separator", n), ql(e6, "experimentalParseClassName", a);
        for (let l in o) Y8(e6[l], o[l]);
        for (let l in i) q8(e6[l], i[l]);
        return e6;
      };
      ql = (e6, t, r) => {
        r !== void 0 && (e6[t] = r);
      };
      Y8 = (e6, t) => {
        if (t) for (let r in t) ql(e6, r, t[r]);
      };
      q8 = (e6, t) => {
        if (t) for (let r in t) {
          let n = t[r];
          n !== void 0 && (e6[r] = (e6[r] || []).concat(n));
        }
      };
      G8 = (e6, ...t) => typeof e6 == "function" ? hx(px, e6, ...t) : hx(() => W8(px(), e6), ...t);
      K8 = { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.0625rem", sizeBody: "0.875rem", sizeSm: "0.75rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
      X8 = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
      Q8 = G8({ extend: { classGroups: { "font-size": [{ text: Object.keys(K8) }], leading: [{ leading: Object.keys(X8) }] } } });
      J8 = /* @__PURE__ */ Symbol.for("react.lazy");
      Uc = Je[" use ".trim().toString()];
      L0 = tC("Slot");
      nC = /* @__PURE__ */ Symbol("radix.slottable");
      gx = (e6) => typeof e6 == "boolean" ? `${e6}` : e6 === 0 ? "0" : e6;
      vx = wx;
      lC = (e6, t) => (r) => {
        var n;
        if (t?.variants == null) return vx(e6, r?.class, r?.className);
        let { variants: a, defaultVariants: i } = t, o = Object.keys(a).map((u) => {
          let c = r?.[u], d = i?.[u];
          if (c === null) return null;
          let f = gx(c) || gx(d);
          return a[u][f];
        }), l = r && Object.entries(r).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}), s = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
          let { class: d, className: f, ...p } = c;
          return Object.entries(p).every((v) => {
            let [y, g] = v;
            return Array.isArray(g) ? g.includes({ ...i, ...l }[y]) : { ...i, ...l }[y] === g;
          }) ? [...u, d, f] : u;
        }, []);
        return vx(e6, o, s, r?.class, r?.className);
      };
      sC = lC("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
      M0 = (0, Sx.forwardRef)(({ className: e6, variant: t, size: r, asChild: n = false, ...a }, i) => (0, Cx.jsx)(n ? L0 : "button", { className: N0(sC({ variant: t, size: r, className: e6 })), ref: i, ...a }));
      M0.displayName = "Button";
      uC = { primary: "border-ds-foreground1 bg-ds-foreground1 text-ds-onPrimary", secondary: "border-transparent bg-ds-background1 text-ds-foreground1 shadow-[0_0_0_1px_var(--ds-hairline)] disabled:bg-ds-background2 disabled:shadow-[0_0_0_1px_var(--ds-hairline)]", ghost: "border-transparent bg-transparent font-semibold text-ds-foreground1 underline [text-underline-position:from-font] disabled:bg-transparent disabled:font-medium", destructive: "border-transparent bg-ds-dangerWash text-ds-danger", success: "border-transparent bg-ds-successWash text-ds-success" };
      _0 = (0, P0.forwardRef)(({ variant: e6, fullWidth: t, large: r, className: n, asChild: a = false, iconBefore: i, iconAfter: o, type: l = "button", children: s, ...u }, c) => {
        let d = cC({ variant: e6, fullWidth: t, large: r, className: n });
        return a ? (0, Gl.jsx)(L0, { ref: c, className: d, ...u, children: s }) : (0, Gl.jsxs)("button", { ref: c, type: l, className: d, ...u, children: [i, s, o] });
      });
      _0.displayName = "DsButton";
      A0 = (0, P0.forwardRef)(({ label: e6, className: t, asChild: r = false, type: n = "button", ...a }, i) => (0, Gl.jsx)(r ? L0 : "button", { ref: i, type: r ? void 0 : n, "aria-label": e6, title: e6, className: N0("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[var(--ds-radius-compact)] border-0 bg-transparent p-2 leading-none text-ds-ink transition-[background-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.94] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...a }));
      A0.displayName = "DsIconButton";
      Ve = j(te(), 1);
      is = j(te(), 1);
      fd = j(te(), 1);
      Cb = j(te(), 1);
      ma = j(te(), 1);
      Zc = j(te(), 1);
      h5 = j(te(), 1);
      ls = j(te(), 1);
      Ln = j(te(), 1);
      wa = j(te(), 1);
      gd = j(te(), 1);
      R = j(be(), 1);
      Mt = j(te(), 1);
      _t = j(te(), 1);
      ge = j(be(), 1);
      yd = j(te(), 1);
      ar = j(be(), 1);
      li = j(te(), 1);
      ga = j(be(), 1);
      im = j(te(), 1);
      U = j(be(), 1);
      ce = j(be(), 1);
      T = j(be(), 1);
      wo = j(te(), 1);
      ze = j(be(), 1);
      Y5 = j(te(), 1);
      Se = j(be(), 1);
      Ql = j(be(), 1);
      e3 = j(te(), 1);
      t3 = j(be(), 1);
      r3 = j(be(), 1);
      de = j(te(), 1);
      ni = j(te(), 1);
      Pt = j(be(), 1);
      cs = j(te(), 1);
      ut = j(be(), 1);
      i3 = j(te(), 1);
      ae = j(be(), 1);
      z = j(be(), 1);
      $r = j(be(), 1);
      pa = j(be(), 1);
      Ed = j(te(), 1);
      me = j(be(), 1);
      Nt = j(be(), 1);
      w3 = j(te(), 1);
      Ce = j(be(), 1);
      x3 = j(te(), 1);
      Lt = j(be(), 1);
      dC = Object.create;
      wb = Object.defineProperty;
      fC = Object.getOwnPropertyDescriptor;
      hC = Object.getOwnPropertyNames;
      pC = Object.getPrototypeOf;
      mC = Object.prototype.hasOwnProperty;
      gC = (e6, t) => () => (t || e6((t = { exports: {} }).exports, t), t.exports);
      vC = (e6, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of hC(t)) !mC.call(e6, a) && a !== r && wb(e6, a, { get: () => t[a], enumerable: !(n = fC(t, a)) || n.enumerable });
        return e6;
      };
      xb = (e6, t, r) => (r = e6 != null ? dC(pC(e6)) : {}, vC(t || !e6 || !e6.__esModule ? wb(r, "default", { value: e6, enumerable: true }) : r, e6));
      bb = gC((e6, t) => {
        (function() {
          "use strict";
          var r = {}.hasOwnProperty;
          function n() {
            for (var o = "", l = 0; l < arguments.length; l++) {
              var s = arguments[l];
              s && (o = i(o, a(s)));
            }
            return o;
          }
          function a(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var l = "";
            for (var s in o) r.call(o, s) && o[s] && (l = i(l, s));
            return l;
          }
          function i(o, l) {
            return l ? o ? o + " " + l : o + l : o;
          }
          typeof t < "u" && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
            return n;
          }) : window.classNames = n;
        })();
      });
      Or = (e6) => e6;
      At = (e6) => e6.toLocaleLowerCase();
      cd = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e6) => `Observation ${e6}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e6, t) => `${e6} of ${t}`, photosOf: (e6) => `Photos of ${e6}`, fullScreen: (e6) => `${e6}, full screen`, view: (e6) => `View ${e6}`, viewAt: (e6) => `View at ${e6}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e6) => `Choose ${/^[aeiou]/i.test(e6) ? "an" : "a"} ${At(e6)}`, chooseToCheckStock: (e6) => `${cd.choose(e6)} to check stock`, soldOutIn: (e6) => `Sold out in ${e6}`, onlyLeftIn: (e6, t) => `Only ${e6} left in ${t}`, inStockIn: (e6) => `In stock in ${e6}`, inStock: (e6) => `${e6} in stock`, valuesSoldOut: (e6) => `${e6.join(", ")} sold out`, valueSoldOut: (e6, t) => `${e6}, sold out${t ? ` in ${t}` : ""}`, plural: (e6) => /(s|sh|ch|x|z)$/i.test(e6) ? `${e6}es` : /[^aeiou]y$/i.test(e6) ? `${e6.slice(0, -1)}ies` : `${e6}s`, optionIn: (e6, t) => `${e6} in ${t}`, andMore: (e6) => ` and ${e6} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e6) => `Please wait ${e6} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here.", listAdd: "Add an item", listItem: "Item", listDetail: "Add a detail", listNote: "Add a note", listMore: "More actions", listDelete: "Delete", listOpenLink: "Open link", listEdit: (e6) => `Edit ${e6}`, locale: "en" };
      yC = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e6) => `Observaci\xF3n ${e6}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e6, t) => `${e6} de ${t}`, photosOf: (e6) => `Fotos de ${e6}`, fullScreen: (e6) => `${e6}, pantalla completa`, view: (e6) => `Ver ${e6}`, viewAt: (e6) => `Ver en ${e6}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e6) => `Elige ${At(e6)}`, chooseToCheckStock: (e6) => `Elige ${At(e6)} para ver la disponibilidad`, soldOutIn: (e6) => `Agotado en ${e6}`, onlyLeftIn: (e6, t) => `Solo quedan ${e6} en ${t}`, inStockIn: (e6) => `Disponible en ${e6}`, inStock: (e6) => `${e6} disponible`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e6, t) => `${e6}, agotado${t ? ` en ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} en ${t}`, andMore: (e6) => ` y ${e6} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e6) => `Espera ${e6} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED.", listAdd: "A\xF1adir un elemento", listItem: "Elemento", listDetail: "A\xF1adir un detalle", listNote: "A\xF1adir una nota", listMore: "M\xE1s acciones", listDelete: "Eliminar", listOpenLink: "Abrir enlace", listEdit: (e6) => `Editar ${e6}`, locale: "es" };
      wC = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e6) => `Observation ${e6}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e6, t) => `${e6} sur ${t}`, photosOf: (e6) => `Photos de ${e6}`, fullScreen: (e6) => `${e6}, plein \xE9cran`, view: (e6) => `Voir ${e6}`, viewAt: (e6) => `Voir chez ${e6}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e6) => `${e6} \xE0 choisir`, chooseToCheckStock: (e6) => `Choisissez ${At(e6)} pour voir le stock`, soldOutIn: (e6) => `\xC9puis\xE9 en ${e6}`, onlyLeftIn: (e6, t) => `Plus que ${e6} en ${t}`, inStockIn: (e6) => `En stock en ${e6}`, inStock: (e6) => `${e6} en stock`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e6, t) => `${e6}, \xE9puis\xE9${t ? ` en ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} en ${t}`, andMore: (e6) => ` et ${e6} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e6) => `Attendez ${e6} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici.", listAdd: "Ajouter un \xE9l\xE9ment", listItem: "\xC9l\xE9ment", listDetail: "Ajouter un d\xE9tail", listNote: "Ajouter une note", listMore: "Plus d\u2019actions", listDelete: "Supprimer", listOpenLink: "Ouvrir le lien", listEdit: (e6) => `Modifier ${e6}`, locale: "fr" };
      xC = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e6) => `Messpunkt ${e6}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e6, t) => `${e6} von ${t}`, photosOf: (e6) => `Fotos von ${e6}`, fullScreen: (e6) => `${e6}, Vollbild`, view: (e6) => `${e6} ansehen`, viewAt: (e6) => `Bei ${e6} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e6) => `${e6} w\xE4hlen`, chooseToCheckStock: (e6) => `${e6} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e6) => `Ausverkauft in ${e6}`, onlyLeftIn: (e6, t) => `Nur noch ${e6} in ${t}`, inStockIn: (e6) => `Verf\xFCgbar in ${e6}`, inStock: (e6) => `${e6} verf\xFCgbar`, valuesSoldOut: (e6) => `${e6.join(", ")} ausverkauft`, valueSoldOut: (e6, t) => `${e6}, ausverkauft${t ? ` in ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} in ${t}`, andMore: (e6) => ` und ${e6} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e6) => `Bitte warte ${e6} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar.", listAdd: "Eintrag hinzuf\xFCgen", listItem: "Eintrag", listDetail: "Detail hinzuf\xFCgen", listNote: "Notiz hinzuf\xFCgen", listMore: "Weitere Aktionen", listDelete: "L\xF6schen", listOpenLink: "Link \xF6ffnen", listEdit: (e6) => `${e6} bearbeiten`, locale: "de" };
      bC = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e6) => `Osservazione ${e6}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e6, t) => `${e6} di ${t}`, photosOf: (e6) => `Foto di ${e6}`, fullScreen: (e6) => `${e6}, schermo intero`, view: (e6) => `Vedi ${e6}`, viewAt: (e6) => `Vedi su ${e6}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e6) => `Scegli ${At(e6)}`, chooseToCheckStock: (e6) => `Scegli ${At(e6)} per vedere la disponibilit\xE0`, soldOutIn: (e6) => `Esaurito in ${e6}`, onlyLeftIn: (e6, t) => `Solo ${e6} rimasti in ${t}`, inStockIn: (e6) => `Disponibile in ${e6}`, inStock: (e6) => `${e6} disponibile`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e6, t) => `${e6}, esaurito${t ? ` in ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} in ${t}`, andMore: (e6) => ` e altri ${e6}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e6) => `Aspetta ${e6} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui.", listAdd: "Aggiungi un elemento", listItem: "Elemento", listDetail: "Aggiungi un dettaglio", listNote: "Aggiungi una nota", listMore: "Altre azioni", listDelete: "Elimina", listOpenLink: "Apri link", listEdit: (e6) => `Modifica ${e6}`, locale: "it" };
      kC = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e6) => `Observa\xE7\xE3o ${e6}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close: "Fechar", previousPhoto: "Foto anterior", nextPhoto: "Pr\xF3xima foto", photoCount: (e6, t) => `${e6} de ${t}`, photosOf: (e6) => `Fotos de ${e6}`, fullScreen: (e6) => `${e6}, tela cheia`, view: (e6) => `Ver ${e6}`, viewAt: (e6) => `Ver em ${e6}`, buy: "Vamos comprar", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado ao Instinct", sent: "Enviado", soldOut: "Esgotado", retry: "Tentar de novo", copy: "Copiar", copied: "Copiado", copyFailed: "C\xF3pia bloqueada", choose: (e6) => `Selecione ${At(e6)}`, chooseToCheckStock: (e6) => `Selecione ${At(e6)} para ver o estoque`, soldOutIn: (e6) => `Esgotado em ${e6}`, onlyLeftIn: (e6, t) => `S\xF3 restam ${e6} em ${t}`, inStockIn: (e6) => `Dispon\xEDvel em ${e6}`, inStock: (e6) => `${e6} dispon\xEDvel`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "esgotados" : "esgotado"}`, valueSoldOut: (e6, t) => `${e6}, esgotado${t ? ` em ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} em ${t}`, andMore: (e6) => ` e mais ${e6}`, loadingState: "Carregando o que foi salvo\u2026", savingState: "Salvando\u2026", savedState: "Salvo neste dispositivo", unsavedState: "N\xE3o salvo. As altera\xE7\xF5es duram s\xF3 enquanto este File estiver aberto.", wakeAccepted: "Enviado ao seu agente", wakeWait: (e6) => `Aguarde ${e6} segundos e tente de novo.`, wakeRetryNow: "Voc\xEA j\xE1 pode tentar de novo.", wakeUnconfirmed: "Entrega n\xE3o confirmada. Tente de novo para verificar sem enviar duas vezes.", wakeForbidden: "Entre como dono do File para enviar isto ao seu agente.", wakeCanceled: "Esta solicita\xE7\xE3o foi cancelada. Voc\xEA pode enviar uma nova.", wakeFailed: "N\xE3o foi poss\xEDvel enviar esta solicita\xE7\xE3o.", wakeUnavailable: "As a\xE7\xF5es do agente n\xE3o est\xE3o dispon\xEDveis aqui.", listAdd: "Adicionar um item", listItem: "Item", listDetail: "Adicionar um detalhe", listNote: "Adicionar uma nota", listMore: "Mais a\xE7\xF5es", listDelete: "Excluir", listOpenLink: "Abrir link", listEdit: (e6) => `Editar ${e6}`, locale: "pt" };
      EC = { myPick: "La meva tria", recommended: "Recomanat", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE0x.", noPhoto: "Sense foto", noData: "No hi ha dades per mostrar.", noMatches: "Cap resultat.", chartData: "Mostra les dades del gr\xE0fic", observation: "Observaci\xF3", observationNumber: (e6) => `Observaci\xF3 ${e6}`, value: "Valor", noObservation: "Sense observaci\xF3", attribute: "Atribut", price: "Preu", was: ", abans ", close: "Tanca", previousPhoto: "Foto anterior", nextPhoto: "Foto seg\xFCent", photoCount: (e6, t) => `${e6} de ${t}`, photosOf: (e6) => `Fotos de ${e6}`, fullScreen: (e6) => `${e6}, pantalla completa`, view: (e6) => `Mostra ${e6}`, viewAt: (e6) => `Mostra a ${e6}`, buy: "Comprem-ho", buyShort: "Compra", sending: "S\u2019est\xE0 enviant\u2026", sentToInstinct: "Enviat a Instinct", sent: "Enviat", soldOut: "Esgotat", retry: "Torna-ho a provar", copy: "Copia", copied: "Copiat", copyFailed: "No s\u2019ha pogut copiar", choose: (e6) => `Tria ${At(e6)}`, chooseToCheckStock: (e6) => `Tria ${At(e6)} per veure la disponibilitat`, soldOutIn: (e6) => `Esgotat en ${e6}`, onlyLeftIn: (e6, t) => `Nom\xE9s en queden ${e6} en ${t}`, inStockIn: (e6) => `Disponible en ${e6}`, inStock: (e6) => `${e6} disponible`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "esgotats" : "esgotat"}`, valueSoldOut: (e6, t) => `${e6}, esgotat${t ? ` en ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} en ${t}`, andMore: (e6) => ` i ${e6} m\xE9s`, loadingState: "S\u2019est\xE0 carregant l\u2019estat desat\u2026", savingState: "S\u2019est\xE0 desant\u2026", savedState: "Desat en aquest dispositiu", unsavedState: "No desat. Els canvis nom\xE9s duren mentre aquest File estigui obert.", wakeAccepted: "Enviat al teu agent", wakeWait: (e6) => `Espera ${e6} segons i torna-ho a provar.`, wakeRetryNow: "Ja ho pots tornar a provar.", wakeUnconfirmed: "Lliurament no confirmat. Torna-ho a provar per comprovar-ho sense enviar-ho dues vegades.", wakeForbidden: "Inicia la sessi\xF3 com a propietari del File per enviar-ho al teu agent.", wakeCanceled: "S\u2019ha cancel\xB7lat aquesta sol\xB7licitud. Pots enviar-ne una de nova.", wakeFailed: "No s\u2019ha pogut enviar aquesta sol\xB7licitud.", wakeUnavailable: "Les accions de l\u2019agent no estan disponibles aqu\xED.", listAdd: "Afegeix un element", listItem: "Element", listDetail: "Afegeix un detall", listNote: "Afegeix una nota", listMore: "M\xE9s accions", listDelete: "Suprimeix", listOpenLink: "Obre l\u2019enlla\xE7", listEdit: (e6) => `Edita ${e6}`, locale: "ca" };
      RC = { myPick: "Mijn keuze", recommended: "Aanbevolen", rangeLegend: "laag \xB7 nu \xB7 hoog", noPhoto: "Geen foto", noData: "Geen gegevens om te tonen.", noMatches: "Geen resultaten.", chartData: "Grafiekgegevens bekijken", observation: "Meting", observationNumber: (e6) => `Meting ${e6}`, value: "Waarde", noObservation: "Geen meting", attribute: "Kenmerk", price: "Prijs", was: ", was ", close: "Sluiten", previousPhoto: "Vorige foto", nextPhoto: "Volgende foto", photoCount: (e6, t) => `${e6} van ${t}`, photosOf: (e6) => `Foto\u2019s van ${e6}`, fullScreen: (e6) => `${e6}, volledig scherm`, view: (e6) => `${e6} bekijken`, viewAt: (e6) => `Bekijken bij ${e6}`, buy: "Laten we dit kopen", buyShort: "Kopen", sending: "Versturen\u2026", sentToInstinct: "Naar Instinct gestuurd", sent: "Verstuurd", soldOut: "Uitverkocht", retry: "Opnieuw", copy: "Kopi\xEBren", copied: "Gekopieerd", copyFailed: "Kopi\xEBren geblokkeerd", choose: (e6) => `Kies ${At(e6)}`, chooseToCheckStock: (e6) => `Kies ${At(e6)} om de voorraad te zien`, soldOutIn: (e6) => `Uitverkocht in ${e6}`, onlyLeftIn: (e6, t) => `Nog maar ${e6} in ${t}`, inStockIn: (e6) => `Op voorraad in ${e6}`, inStock: (e6) => `${e6} op voorraad`, valuesSoldOut: (e6) => `${e6.join(", ")} uitverkocht`, valueSoldOut: (e6, t) => `${e6}, uitverkocht${t ? ` in ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} in ${t}`, andMore: (e6) => ` en nog ${e6}`, loadingState: "Opgeslagen stand laden\u2026", savingState: "Opslaan\u2026", savedState: "Opgeslagen op dit apparaat", unsavedState: "Niet opgeslagen. Wijzigingen blijven alleen zolang dit File open is.", wakeAccepted: "Naar je agent gestuurd", wakeWait: (e6) => `Wacht ${e6} seconden en probeer het dan opnieuw.`, wakeRetryNow: "Je kunt het nu opnieuw proberen.", wakeUnconfirmed: "Bezorging niet bevestigd. Probeer opnieuw om te controleren zonder dubbel te versturen.", wakeForbidden: "Log in als eigenaar van dit File om dit naar je agent te sturen.", wakeCanceled: "Dit verzoek is geannuleerd. Je kunt een nieuw verzoek sturen.", wakeFailed: "Dit verzoek kon niet worden verstuurd.", wakeUnavailable: "Agentacties zijn hier niet beschikbaar.", listAdd: "Item toevoegen", listItem: "Item", listDetail: "Detail toevoegen", listNote: "Notitie toevoegen", listMore: "Meer acties", listDelete: "Verwijderen", listOpenLink: "Link openen", listEdit: (e6) => `${e6} bewerken`, locale: "nl" };
      SC = { myPick: "Alegerea mea", recommended: "Recomandat", rangeLegend: "min. \xB7 acum \xB7 max.", noPhoto: "F\u0103r\u0103 fotografie", noData: "Nu exist\u0103 date de afi\u0219at.", noMatches: "Niciun rezultat.", chartData: "Vezi datele graficului", observation: "Observa\u021Bie", observationNumber: (e6) => `Observa\u021Bia ${e6}`, value: "Valoare", noObservation: "F\u0103r\u0103 observa\u021Bie", attribute: "Atribut", price: "Pre\u021B", was: ", \xEEnainte ", close: "\xCEnchide", previousPhoto: "Fotografia anterioar\u0103", nextPhoto: "Fotografia urm\u0103toare", photoCount: (e6, t) => `${e6} din ${t}`, photosOf: (e6) => `Fotografii cu ${e6}`, fullScreen: (e6) => `${e6}, ecran complet`, view: (e6) => `Vezi ${e6}`, viewAt: (e6) => `Vezi la ${e6}`, buy: "Hai s\u0103-l cump\u0103r\u0103m", buyShort: "Cump\u0103r\u0103", sending: "Se trimite\u2026", sentToInstinct: "Trimis la Instinct", sent: "Trimis", soldOut: "Epuizat", retry: "Re\xEEncearc\u0103", copy: "Copiaz\u0103", copied: "Copiat", copyFailed: "Copiere blocat\u0103", choose: (e6) => `Alege ${At(e6)}`, chooseToCheckStock: (e6) => `Alege ${At(e6)} ca s\u0103 vezi stocul`, soldOutIn: (e6) => `Epuizat \xEEn ${e6}`, onlyLeftIn: (e6, t) => `Doar ${e6} r\u0103mase \xEEn ${t}`, inStockIn: (e6) => `\xCEn stoc \xEEn ${e6}`, inStock: (e6) => `${e6} \xEEn stoc`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "epuizate" : "epuizat"}`, valueSoldOut: (e6, t) => `${e6}, epuizat${t ? ` \xEEn ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} \xEEn ${t}`, andMore: (e6) => ` \u0219i \xEEnc\u0103 ${e6}`, loadingState: "Se \xEEncarc\u0103 starea salvat\u0103\u2026", savingState: "Se salveaz\u0103\u2026", savedState: "Salvat pe acest dispozitiv", unsavedState: "Nesalvat. Modific\u0103rile r\u0103m\xE2n doar c\xE2t timp acest File e deschis.", wakeAccepted: "Trimis agentului t\u0103u", wakeWait: (e6) => `A\u0219teapt\u0103 ${e6} secunde, apoi re\xEEncearc\u0103.`, wakeRetryNow: "Po\u021Bi re\xEEncerca acum.", wakeUnconfirmed: "Livrare neconfirmat\u0103. Re\xEEncearc\u0103 pentru a verifica f\u0103r\u0103 a trimite de dou\u0103 ori.", wakeForbidden: "Conecteaz\u0103-te ca proprietar al File-ului ca s\u0103-l trimi\u021Bi agentului t\u0103u.", wakeCanceled: "Cererea a fost anulat\u0103. Po\u021Bi trimite una nou\u0103.", wakeFailed: "Cererea nu a putut fi trimis\u0103.", wakeUnavailable: "Ac\u021Biunile agentului nu sunt disponibile aici.", listAdd: "Adaug\u0103 un element", listItem: "Element", listDetail: "Adaug\u0103 un detaliu", listNote: "Adaug\u0103 o not\u0103", listMore: "Mai multe ac\u021Biuni", listDelete: "\u0218terge", listOpenLink: "Deschide linkul", listEdit: (e6) => `Editeaz\u0103 ${e6}`, locale: "ro" };
      CC = { myPick: "\u041C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440", recommended: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E", rangeLegend: "\u043C\u0438\u043D. \xB7 \u0441\u0435\u0439\u0447\u0430\u0441 \xB7 \u043C\u0430\u043A\u0441.", noPhoto: "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E", noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.", noMatches: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", chartData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430", observation: "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", observationNumber: (e6) => `\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 ${e6}`, value: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", noObservation: "\u041D\u0435\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F", attribute: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440", price: "\u0426\u0435\u043D\u0430", was: ", \u0431\u044B\u043B\u043E ", close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", previousPhoto: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", nextPhoto: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", photoCount: (e6, t) => `${e6} \u0438\u0437 ${t}`, photosOf: (e6) => `\u0424\u043E\u0442\u043E: ${e6}`, fullScreen: (e6) => `${e6}, \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D`, view: (e6) => `\u041E\u0442\u043A\u0440\u044B\u0442\u044C ${e6}`, viewAt: (e6) => `\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 ${e6}`, buy: "\u0414\u0430\u0432\u0430\u0439 \u043A\u0443\u043F\u0438\u043C", buyShort: "\u041A\u0443\u043F\u0438\u0442\u044C", sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026", sentToInstinct: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Instinct", sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", soldOut: "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438", retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", copyFailed: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E", choose: (e6) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${At(e6)}`, chooseToCheckStock: (e6) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${At(e6)}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435`, soldOutIn: (e6) => `\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e6}`, onlyLeftIn: (e6, t) => `\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e6}: ${t}`, inStockIn: (e6) => `\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e6}`, inStock: (e6) => `${e6} \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valuesSoldOut: (e6) => `${e6.join(", ")} \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valueSoldOut: (e6, t) => `${e6}, \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438${t ? ` (${t})` : ""}`, plural: Or, optionIn: (e6, t) => `${e6}: ${t}`, andMore: (e6) => ` \u0438 \u0435\u0449\u0451 ${e6}`, loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E\u2026", savingState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026", savedState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435", unsavedState: "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442, \u043F\u043E\u043A\u0430 \u044D\u0442\u043E\u0442 File \u043E\u0442\u043A\u0440\u044B\u0442.", wakeAccepted: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0433\u0435\u043D\u0442\u0443", wakeWait: (e6) => `\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 ${e6} \u0441 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.`, wakeRetryNow: "\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.", wakeUnconfirmed: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.", wakeForbidden: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 File, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0430\u0433\u0435\u043D\u0442\u0443.", wakeCanceled: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439.", wakeFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441.", wakeUnavailable: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B.", listAdd: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u043D\u043A\u0442", listItem: "\u041F\u0443\u043D\u043A\u0442", listDetail: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u044C", listNote: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443", listMore: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F", listDelete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", listOpenLink: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", listEdit: (e6) => `\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \xAB${e6}\xBB`, locale: "ru" };
      Dx = { myPick: "\u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9", recommended: "\u05DE\u05D5\u05DE\u05DC\u05E5", rangeLegend: "\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \xB7 \u05E2\u05DB\u05E9\u05D9\u05D5 \xB7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD", noPhoto: "\u05D0\u05D9\u05DF \u05EA\u05DE\u05D5\u05E0\u05D4", noData: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.", noMatches: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA.", chartData: "\u05D4\u05E6\u05D2\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E8\u05E9\u05D9\u05DD", observation: "\u05DE\u05D3\u05D9\u05D3\u05D4", observationNumber: (e6) => `\u05DE\u05D3\u05D9\u05D3\u05D4 ${e6}`, value: "\u05E2\u05E8\u05DA", noObservation: "\u05D0\u05D9\u05DF \u05DE\u05D3\u05D9\u05D3\u05D4", attribute: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF", price: "\u05DE\u05D7\u05D9\u05E8", was: ", \u05D1\u05DE\u05E7\u05D5\u05DD ", close: "\u05E1\u05D2\u05D9\u05E8\u05D4", previousPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA", nextPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4", photoCount: (e6, t) => `${e6} \u05DE\u05EA\u05D5\u05DA ${t}`, photosOf: (e6) => `\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC ${e6}`, fullScreen: (e6) => `${e6}, \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0`, view: (e6) => `\u05D4\u05E6\u05D2\u05EA ${e6}`, viewAt: (e6) => `\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1-${e6}`, buy: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05E7\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4", buyShort: "\u05DC\u05E7\u05E0\u05D5\u05EA", sending: "\u05E9\u05D5\u05DC\u05D7\u2026", sentToInstinct: "\u05E0\u05E9\u05DC\u05D7 \u05DC-Instinct", sent: "\u05E0\u05E9\u05DC\u05D7", soldOut: "\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9", retry: "\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1", copy: "\u05D4\u05E2\u05EA\u05E7\u05D4", copied: "\u05D4\u05D5\u05E2\u05EA\u05E7", copyFailed: "\u05D4\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4", choose: (e6) => `\u05D1\u05D7\u05E8\u05D5 ${e6}`, chooseToCheckStock: (e6) => `\u05D1\u05D7\u05E8\u05D5 ${e6} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05DC\u05D0\u05D9`, soldOutIn: (e6) => `\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9 \u05D1-${e6}`, onlyLeftIn: (e6, t) => `\u05E0\u05E9\u05D0\u05E8\u05D5 \u05E8\u05E7 ${e6} \u05D1-${t}`, inStockIn: (e6) => `\u05D1\u05DE\u05DC\u05D0\u05D9 \u05D1-${e6}`, inStock: (e6) => `${e6} \u05D1\u05DE\u05DC\u05D0\u05D9`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "\u05D0\u05D6\u05DC\u05D5" : "\u05D0\u05D6\u05DC"}`, valueSoldOut: (e6, t) => `${e6}, \u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9${t ? ` \u05D1-${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} \u05D1-${t}`, andMore: (e6) => ` \u05D5\u05E2\u05D5\u05D3 ${e6}`, loadingState: "\u05D8\u05D5\u05E2\u05DF \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8\u2026", savingState: "\u05E9\u05D5\u05DE\u05E8\u2026", savedState: "\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4", unsavedState: "\u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E8\u05E7 \u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4-File \u05E4\u05EA\u05D5\u05D7.", wakeAccepted: "\u05E0\u05E9\u05DC\u05D7 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA", wakeWait: (e6) => `\u05D9\u05E9 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF ${e6} \u05E9\u05E0\u05D9\u05D5\u05EA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.`, wakeRetryNow: "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05E2\u05DB\u05E9\u05D9\u05D5.", wakeUnconfirmed: "\u05D4\u05DE\u05E1\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D0\u05D5\u05E9\u05E8\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05DC\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD.", wakeForbidden: "\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D1\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4-File \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D6\u05D4 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA.", wakeCanceled: "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4.", wakeFailed: "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4.", wakeUnavailable: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E1\u05D5\u05DB\u05DF \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF.", listAdd: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E4\u05E8\u05D9\u05D8", listItem: "\u05E4\u05E8\u05D9\u05D8", listDetail: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E4\u05E8\u05D8", listNote: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D4\u05E2\u05E8\u05D4", listMore: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA", listDelete: "\u05DE\u05D7\u05D9\u05E7\u05D4", listOpenLink: "\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8", listEdit: (e6) => `\u05E2\u05E8\u05D9\u05DB\u05EA ${e6}`, locale: "he" };
      DC = { myPick: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A", recommended: "\u0645\u0648\u0635\u0649 \u0628\u0647", rangeLegend: "\u0627\u0644\u0623\u062F\u0646\u0649 \xB7 \u0627\u0644\u062D\u0627\u0644\u064A \xB7 \u0627\u0644\u0623\u0639\u0644\u0649", noPhoto: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0648\u0631\u0629", noData: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.", noMatches: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.", chartData: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0633\u0645", observation: "\u0642\u064A\u0627\u0633", observationNumber: (e6) => `\u0627\u0644\u0642\u064A\u0627\u0633 ${e6}`, value: "\u0627\u0644\u0642\u064A\u0645\u0629", noObservation: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0642\u064A\u0627\u0633", attribute: "\u0627\u0644\u062E\u0627\u0635\u064A\u0629", price: "\u0627\u0644\u0633\u0639\u0631", was: "\u060C \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 ", close: "\u0625\u063A\u0644\u0627\u0642", previousPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629", nextPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629", photoCount: (e6, t) => `${e6} \u0645\u0646 ${t}`, photosOf: (e6) => `\u0635\u0648\u0631 ${e6}`, fullScreen: (e6) => `${e6}\u060C \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629`, view: (e6) => `\u0639\u0631\u0636 ${e6}`, viewAt: (e6) => `\u0639\u0631\u0636 \u0644\u062F\u0649 ${e6}`, buy: "\u0644\u0646\u0634\u062A\u0631\u0650 \u0647\u0630\u0627", buyShort: "\u0634\u0631\u0627\u0621", sending: "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026", sentToInstinct: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 Instinct", sent: "\u0623\u064F\u0631\u0633\u0644", soldOut: "\u0646\u0641\u062F", retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629", copy: "\u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", copyFailed: "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0646\u0633\u062E", choose: (e6) => `\u0627\u062E\u062A\u0631 ${e6}`, chooseToCheckStock: (e6) => `\u0627\u062E\u062A\u0631 ${e6} \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631`, soldOutIn: (e6) => `\u0646\u0641\u062F \u0641\u064A ${e6}`, onlyLeftIn: (e6, t) => `\u0628\u0642\u064A ${e6} \u0641\u0642\u0637 \u0641\u064A ${t}`, inStockIn: (e6) => `\u0645\u062A\u0648\u0641\u0631 \u0641\u064A ${e6}`, inStock: (e6) => `${e6} \u0645\u062A\u0648\u0641\u0631`, valuesSoldOut: (e6) => `${e6.join(", ")} ${e6.length > 1 ? "\u0646\u0641\u062F\u062A" : "\u0646\u0641\u062F"}`, valueSoldOut: (e6, t) => `${e6}\u060C \u0646\u0641\u062F${t ? ` \u0641\u064A ${t}` : ""}`, plural: Or, optionIn: (e6, t) => `${e6} \u0641\u064A ${t}`, andMore: (e6) => ` \u0648${e6} \u0623\u062E\u0631\u0649`, loadingState: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026", savingState: "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026", savedState: "\u0645\u062D\u0641\u0648\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632", unsavedState: "\u063A\u064A\u0631 \u0645\u062D\u0641\u0648\u0638. \u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0627 \u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0640 File \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0641\u0642\u0637.", wakeAccepted: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643", wakeWait: (e6) => `\u0627\u0646\u062A\u0638\u0631 ${e6} \u062B\u0627\u0646\u064A\u0629\u060C \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.`, wakeRetryNow: "\u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646.", wakeUnconfirmed: "\u0644\u0645 \u064A\u062A\u0623\u0643\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u062F\u0648\u0646 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u062A\u064A\u0646.", wakeForbidden: "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0635\u0641\u062A\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u0640 File \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643.", wakeCanceled: "\u0623\u064F\u0644\u063A\u064A \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627.", listAdd: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631", listItem: "\u0639\u0646\u0635\u0631", listDetail: "\u0625\u0636\u0627\u0641\u0629 \u062A\u0641\u0635\u064A\u0644", listNote: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062D\u0638\u0629", listMore: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0623\u062E\u0631\u0649", listDelete: "\u062D\u0630\u0641", listOpenLink: "\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637", listEdit: (e6) => `\u062A\u0639\u062F\u064A\u0644 ${e6}`, locale: "ar" };
      NC = new Map(Object.entries({ en: cd, es: yC, fr: wC, de: xC, it: bC, pt: kC, ca: EC, nl: RC, ro: SC, ru: CC, he: Dx, iw: Dx, ar: DC }));
      LC = /* @__PURE__ */ new Set(["he", "iw", "ar", "fa", "ur"]);
      dd = (0, is.createContext)(cd);
      Jc = () => window.instinctFile;
      PC = "root";
      _C = "Region";
      um = "Collection";
      cm = "Item";
      AC = /^\/_live\/[0-9a-f]{32}\.(jpg|png|webp|gif)$/;
      Nb = Db(Qc);
      IC = Nb.right;
      EL = Nb.left;
      RL = Db(OC).center;
      jC = IC;
      Nx = class extends Map {
        constructor(e6, t = BC) {
          if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t } }), e6 != null) for (let [r, n] of e6) this.set(r, n);
        }
        get(e6) {
          return super.get(Lx(this, e6));
        }
        has(e6) {
          return super.has(Lx(this, e6));
        }
        set(e6, t) {
          return super.set(HC(this, e6), t);
        }
        delete(e6) {
          return super.delete(UC(this, e6));
        }
      };
      V0 = Math.sqrt(50);
      W0 = Math.sqrt(10);
      Y0 = Math.sqrt(2);
      Mx = /* @__PURE__ */ Symbol("implicit");
      ri = 0.7;
      go = 1 / ri;
      po = "\\s*([+-]?\\d+)\\s*";
      Jl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
      en = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
      qC = /^#([0-9a-f]{3,8})$/;
      GC = new RegExp(`^rgb\\(${po},${po},${po}\\)$`);
      KC = new RegExp(`^rgb\\(${en},${en},${en}\\)$`);
      XC = new RegExp(`^rgba\\(${po},${po},${po},${Jl}\\)$`);
      QC = new RegExp(`^rgba\\(${en},${en},${en},${Jl}\\)$`);
      ZC = new RegExp(`^hsl\\(${Jl},${en},${en}\\)$`);
      JC = new RegExp(`^hsla\\(${Jl},${en},${en},${Jl}\\)$`);
      Px = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      yo(ya, es, { copy(e6) {
        return Object.assign(new this.constructor(), this, e6);
      }, displayable() {
        return this.rgb().displayable();
      }, hex: _x, formatHex: _x, formatHex8: e7, formatHsl: t7, formatRgb: Ax, toString: Ax });
      yo(ct, ed, os(ya, { brighter(e6) {
        return e6 = e6 == null ? go : Math.pow(go, e6), new ct(this.r * e6, this.g * e6, this.b * e6, this.opacity);
      }, darker(e6) {
        return e6 = e6 == null ? ri : Math.pow(ri, e6), new ct(this.r * e6, this.g * e6, this.b * e6, this.opacity);
      }, rgb() {
        return this;
      }, clamp() {
        return new ct(Ja(this.r), Ja(this.g), Ja(this.b), td(this.opacity));
      }, displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: Fx, formatHex: Fx, formatHex8: r7, formatRgb: $x, toString: $x }));
      yo(zr, q0, os(ya, { brighter(e6) {
        return e6 = e6 == null ? go : Math.pow(go, e6), new zr(this.h, this.s, this.l * e6, this.opacity);
      }, darker(e6) {
        return e6 = e6 == null ? ri : Math.pow(ri, e6), new zr(this.h, this.s, this.l * e6, this.opacity);
      }, rgb() {
        var e6 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e6) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
        return new ct(T0(e6 >= 240 ? e6 - 240 : e6 + 120, a, n), T0(e6, a, n), T0(e6 < 120 ? e6 + 240 : e6 - 120, a, n), this.opacity);
      }, clamp() {
        return new zr(Ox(this.h), Wc(this.s), Wc(this.l), td(this.opacity));
      }, displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl() {
        let e6 = td(this.opacity);
        return `${e6 === 1 ? "hsl(" : "hsla("}${Ox(this.h)}, ${Wc(this.s) * 100}%, ${Wc(this.l) * 100}%${e6 === 1 ? ")" : `, ${e6})`}`;
      } }));
      Ab = Math.PI / 180;
      Tb = 180 / Math.PI;
      rd = 18;
      Fb = 0.96422;
      $b = 1;
      zb = 0.82521;
      Ob = 4 / 29;
      mo = 6 / 29;
      Ib = 3 * mo * mo;
      n7 = mo * mo * mo;
      yo(tn, G0, os(ya, { brighter(e6) {
        return new tn(this.l + rd * (e6 ?? 1), this.a, this.b, this.opacity);
      }, darker(e6) {
        return new tn(this.l - rd * (e6 ?? 1), this.a, this.b, this.opacity);
      }, rgb() {
        var e6 = (this.l + 16) / 116, t = isNaN(this.a) ? e6 : e6 + this.a / 500, r = isNaN(this.b) ? e6 : e6 - this.b / 200;
        return t = Fb * $0(t), e6 = $b * $0(e6), r = zb * $0(r), new ct(z0(3.1338561 * t - 1.6168667 * e6 - 0.4906146 * r), z0(-0.9787684 * t + 1.9161415 * e6 + 0.033454 * r), z0(0.0719453 * t - 0.2289914 * e6 + 1.4052427 * r), this.opacity);
      } }));
      yo(Nn, K0, os(ya, { brighter(e6) {
        return new Nn(this.h, this.c, this.l + rd * (e6 ?? 1), this.opacity);
      }, darker(e6) {
        return new Nn(this.h, this.c, this.l - rd * (e6 ?? 1), this.opacity);
      }, rgb() {
        return Hb(this).rgb();
      } }));
      Ub = -0.14861;
      hm = 1.78277;
      pm = -0.29227;
      hd = -0.90649;
      ts = 1.97294;
      Ix = ts * hd;
      jx = ts * hm;
      Hx = hm * pm - hd * Ub;
      yo(ei, X0, os(ya, { brighter(e6) {
        return e6 = e6 == null ? go : Math.pow(go, e6), new ei(this.h, this.s, this.l * e6, this.opacity);
      }, darker(e6) {
        return e6 = e6 == null ? ri : Math.pow(ri, e6), new ei(this.h, this.s, this.l * e6, this.opacity);
      }, rgb() {
        var e6 = isNaN(this.h) ? 0 : (this.h + 120) * Ab, t = +this.l, r = isNaN(this.s) ? 0 : this.s * t * (1 - t), n = Math.cos(e6), a = Math.sin(e6);
        return new ct(255 * (t + r * (Ub * n + hm * a)), 255 * (t + r * (pm * n + hd * a)), 255 * (t + r * (ts * n)), this.opacity);
      } }));
      pd = (e6) => () => e6;
      Q0 = (function e(t) {
        var r = u7(t);
        function n(a, i) {
          var o = r((a = ed(a)).r, (i = ed(i)).r), l = r(a.g, i.g), s = r(a.b, i.b), u = dt(a.opacity, i.opacity);
          return function(c) {
            return a.r = o(c), a.g = l(c), a.b = s(c), a.opacity = u(c), a + "";
          };
        }
        return n.gamma = e, n;
      })(1);
      SL = Wb(o7);
      CL = Wb(l7);
      Z0 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
      I0 = new RegExp(Z0.source, "g");
      y7 = qb(mm);
      w7 = qb(dt);
      b7 = Gb(mm);
      k7 = Gb(dt);
      E7 = Kb(mm);
      R7 = Kb(dt);
      Ux = [0, 1];
      $7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      id.prototype = vm.prototype;
      vm.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
      };
      Vx = { "%": (e6, t) => (e6 * 100).toFixed(t), b: (e6) => Math.round(e6).toString(2), c: (e6) => e6 + "", d: A7, e: (e6, t) => e6.toExponential(t), f: (e6, t) => e6.toFixed(t), g: (e6, t) => e6.toPrecision(t), o: (e6) => Math.round(e6).toString(8), p: (e6, t) => Bx(e6 * 100, t), r: Bx, s: O7, X: (e6) => Math.round(e6).toString(16).toUpperCase(), x: (e6) => Math.round(e6).toString(16) };
      Yx = Array.prototype.map;
      qx = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      j7({ thousands: ",", grouping: [3], currency: ["$", ""] });
      j0 = /* @__PURE__ */ new Date();
      H0 = /* @__PURE__ */ new Date();
      ym = vt((e6) => {
        e6.setTime(e6 - e6.getMilliseconds());
      }, (e6, t) => {
        e6.setTime(+e6 + t * 1e3);
      }, (e6, t) => (t - e6) / 1e3, (e6) => e6.getUTCSeconds());
      DL = ym.range;
      e5 = vt((e6) => {
        e6.setTime(e6 - e6.getMilliseconds() - e6.getSeconds() * 1e3);
      }, (e6, t) => {
        e6.setTime(+e6 + t * 6e4);
      }, (e6, t) => (t - e6) / 6e4, (e6) => e6.getMinutes());
      NL = e5.range;
      t5 = vt((e6) => {
        e6.setUTCSeconds(0, 0);
      }, (e6, t) => {
        e6.setTime(+e6 + t * 6e4);
      }, (e6, t) => (t - e6) / 6e4, (e6) => e6.getUTCMinutes());
      LL = t5.range;
      r5 = vt((e6) => {
        e6.setTime(e6 - e6.getMilliseconds() - e6.getSeconds() * 1e3 - e6.getMinutes() * 6e4);
      }, (e6, t) => {
        e6.setTime(+e6 + t * 36e5);
      }, (e6, t) => (t - e6) / 36e5, (e6) => e6.getHours());
      ML = r5.range;
      n5 = vt((e6) => {
        e6.setUTCMinutes(0, 0, 0);
      }, (e6, t) => {
        e6.setTime(+e6 + t * 36e5);
      }, (e6, t) => (t - e6) / 36e5, (e6) => e6.getUTCHours());
      PL = n5.range;
      a5 = vt((e6) => e6.setHours(0, 0, 0, 0), (e6, t) => e6.setDate(e6.getDate() + t), (e6, t) => (t - e6 - (t.getTimezoneOffset() - e6.getTimezoneOffset()) * 6e4) / 864e5, (e6) => e6.getDate() - 1);
      _L = a5.range;
      i5 = vt((e6) => {
        e6.setUTCHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setUTCDate(e6.getUTCDate() + t);
      }, (e6, t) => (t - e6) / 864e5, (e6) => e6.getUTCDate() - 1);
      AL = i5.range;
      Y7 = vt((e6) => {
        e6.setUTCHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setUTCDate(e6.getUTCDate() + t);
      }, (e6, t) => (t - e6) / 864e5, (e6) => Math.floor(e6 / 864e5));
      TL = Y7.range;
      o5 = ai(0);
      q7 = ai(1);
      G7 = ai(2);
      K7 = ai(3);
      X7 = ai(4);
      Q7 = ai(5);
      Z7 = ai(6);
      FL = o5.range;
      $L = q7.range;
      zL = G7.range;
      OL = K7.range;
      IL = X7.range;
      jL = Q7.range;
      HL = Z7.range;
      l5 = ii(0);
      J7 = ii(1);
      eD = ii(2);
      tD = ii(3);
      rD = ii(4);
      nD = ii(5);
      aD = ii(6);
      UL = l5.range;
      BL = J7.range;
      VL = eD.range;
      WL = tD.range;
      YL = rD.range;
      qL = nD.range;
      GL = aD.range;
      s5 = vt((e6) => {
        e6.setDate(1), e6.setHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setMonth(e6.getMonth() + t);
      }, (e6, t) => t.getMonth() - e6.getMonth() + (t.getFullYear() - e6.getFullYear()) * 12, (e6) => e6.getMonth());
      KL = s5.range;
      u5 = vt((e6) => {
        e6.setUTCDate(1), e6.setUTCHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setUTCMonth(e6.getUTCMonth() + t);
      }, (e6, t) => t.getUTCMonth() - e6.getUTCMonth() + (t.getUTCFullYear() - e6.getUTCFullYear()) * 12, (e6) => e6.getUTCMonth());
      XL = u5.range;
      wm = vt((e6) => {
        e6.setMonth(0, 1), e6.setHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setFullYear(e6.getFullYear() + t);
      }, (e6, t) => t.getFullYear() - e6.getFullYear(), (e6) => e6.getFullYear());
      wm.every = (e6) => !isFinite(e6 = Math.floor(e6)) || !(e6 > 0) ? null : vt((t) => {
        t.setFullYear(Math.floor(t.getFullYear() / e6) * e6), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setFullYear(t.getFullYear() + r * e6);
      });
      QL = wm.range;
      xm = vt((e6) => {
        e6.setUTCMonth(0, 1), e6.setUTCHours(0, 0, 0, 0);
      }, (e6, t) => {
        e6.setUTCFullYear(e6.getUTCFullYear() + t);
      }, (e6, t) => t.getUTCFullYear() - e6.getUTCFullYear(), (e6) => e6.getUTCFullYear());
      xm.every = (e6) => !isFinite(e6 = Math.floor(e6)) || !(e6 > 0) ? null : vt((t) => {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e6) * e6), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setUTCFullYear(t.getUTCFullYear() + r * e6);
      });
      ZL = xm.range;
      Gx = { lab: x7, hcl: b7, "hcl-long": k7, hsl: y7, "hsl-long": w7, cubehelix: E7, "cubehelix-long": R7, rgb: Q0 };
      pD = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
      mD = "%Y-%m-%d %H:%M";
      Kx = { day: a5, hour: r5, minute: e5, month: s5, second: ym, week: o5, year: wm };
      Xx = { day: i5, hour: n5, minute: t5, month: u5, second: ym, week: l5, year: xm };
      ED = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
      RD = { domain: iD, nice: vD, zero: kD, interpolate: hD, round: xD, align: lD, base: sD, clamp: uD, constant: cD, exponent: dD, padding: yD, range: oD, reverse: wD, unknown: bD };
      SD = c5("domain", "range", "reverse", "align", "padding", "round");
      DD = c5("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
      em = Math.PI;
      tm = 2 * em;
      Qa = 1e-6;
      ND = tm - Qa;
      rm.prototype = d5.prototype = { constructor: rm, moveTo: function(e6, t) {
        this._ += "M" + (this._x0 = this._x1 = +e6) + "," + (this._y0 = this._y1 = +t);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(e6, t) {
        this._ += "L" + (this._x1 = +e6) + "," + (this._y1 = +t);
      }, quadraticCurveTo: function(e6, t, r, n) {
        this._ += "Q" + +e6 + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
      }, bezierCurveTo: function(e6, t, r, n, a, i) {
        this._ += "C" + +e6 + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +a) + "," + (this._y1 = +i);
      }, arcTo: function(e6, t, r, n, a) {
        e6 = +e6, t = +t, r = +r, n = +n, a = +a;
        var i = this._x1, o = this._y1, l = r - e6, s = n - t, u = i - e6, c = o - t, d = u * u + c * c;
        if (a < 0) throw new Error("negative radius: " + a);
        if (this._x1 === null) this._ += "M" + (this._x1 = e6) + "," + (this._y1 = t);
        else if (d > Qa) if (!(Math.abs(c * l - s * u) > Qa) || !a) this._ += "L" + (this._x1 = e6) + "," + (this._y1 = t);
        else {
          var f = r - i, p = n - o, v = l * l + s * s, y = f * f + p * p, g = Math.sqrt(v), m = Math.sqrt(d), h = a * Math.tan((em - Math.acos((v + d - y) / (2 * g * m))) / 2), w = h / m, b = h / g;
          Math.abs(w - 1) > Qa && (this._ += "L" + (e6 + w * u) + "," + (t + w * c)), this._ += "A" + a + "," + a + ",0,0," + +(c * f > u * p) + "," + (this._x1 = e6 + b * l) + "," + (this._y1 = t + b * s);
        }
      }, arc: function(e6, t, r, n, a, i) {
        e6 = +e6, t = +t, r = +r, i = !!i;
        var o = r * Math.cos(n), l = r * Math.sin(n), s = e6 + o, u = t + l, c = 1 ^ i, d = i ? n - a : a - n;
        if (r < 0) throw new Error("negative radius: " + r);
        this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > Qa || Math.abs(this._y1 - u) > Qa) && (this._ += "L" + s + "," + u), r && (d < 0 && (d = d % tm + tm), d > ND ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e6 - o) + "," + (t - l) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = s) + "," + (this._y1 = u) : d > Qa && (this._ += "A" + r + "," + r + ",0," + +(d >= em) + "," + c + "," + (this._x1 = e6 + r * Math.cos(a)) + "," + (this._y1 = t + r * Math.sin(a))));
      }, rect: function(e6, t, r, n) {
        this._ += "M" + (this._x0 = this._x1 = +e6) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
      }, toString: function() {
        return this._;
      } };
      LD = d5;
      f5.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(e6, t) {
        switch (e6 = +e6, t = +t, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(e6, t) : this._context.moveTo(e6, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(e6, t);
            break;
        }
      } };
      FD = xb(bb());
      $D = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
      ID = xb(bb());
      jD = ["className", "innerRef"];
      md = (0, ls.createContext)(null);
      Mn = (e6, t = {}) => (0, R.jsx)("path", { d: e6, vectorEffect: "non-scaling-stroke", ...t });
      bm = (e6) => (0, R.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: e6 });
      UD = bm(Mn("M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75", { strokeLinecap: "round" }));
      km = bm(Mn("M15.0002 20L8.4144 13.4142C7.63335 12.6332 7.63335 11.3669 8.4144 10.5858L15.0002 4", { strokeLinecap: "round", strokeLinejoin: "round" }));
      Em = bm(Mn("M9 4L15.5858 10.5858C16.3668 11.3668 16.3668 12.6331 15.5858 13.4142L9 20", { strokeLinecap: "round", strokeLinejoin: "round" }));
      m5 = { photo: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, R.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, R.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }), food: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), (0, R.jsx)("path", { d: "M7 2v20" }), (0, R.jsx)("path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })] }), poultry: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), (0, R.jsx)("path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" })] }), meat: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), (0, R.jsx)("path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), (0, R.jsx)("circle", { cx: "12.5", cy: "8.5", r: "2.5" })] }), fish: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), (0, R.jsx)("path", { d: "M18 12v.5" }), (0, R.jsx)("path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), (0, R.jsx)("path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), (0, R.jsx)("path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), (0, R.jsx)("path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" })] }), salad: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M7 21h10" }), (0, R.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, R.jsx)("path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), (0, R.jsx)("path", { d: "m13 12 4-4" }), (0, R.jsx)("path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })] }), bowl: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, R.jsx)("path", { d: "M7 21h10" }), (0, R.jsx)("path", { d: "M19.5 12 22 6" }), (0, R.jsx)("path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), (0, R.jsx)("path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), (0, R.jsx)("path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" })] }), bread: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), (0, R.jsx)("path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), (0, R.jsx)("path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), (0, R.jsx)("path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), (0, R.jsx)("path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" })] }), pizza: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m12 14-1 1" }), (0, R.jsx)("path", { d: "m13.75 18.25-1.25 1.42" }), (0, R.jsx)("path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), (0, R.jsx)("path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), (0, R.jsx)("path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" })] }), sandwich: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), (0, R.jsx)("path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), (0, R.jsx)("path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), (0, R.jsx)("path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), (0, R.jsx)("rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" })] }), dessert: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16 13H3" }), (0, R.jsx)("path", { d: "M16 17H3" }), (0, R.jsx)("path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), (0, R.jsx)("circle", { cx: "9", cy: "7", r: "2" })] }), fruit: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }), (0, R.jsx)("path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" })] }), vegetable: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), (0, R.jsx)("path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), (0, R.jsx)("path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" })] }), drink: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), (0, R.jsx)("path", { d: "M5 8h14" }), (0, R.jsx)("path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), (0, R.jsx)("path", { d: "m12 8 1-6h2" })] }), coffee: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 2v2" }), (0, R.jsx)("path", { d: "M14 2v2" }), (0, R.jsx)("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), (0, R.jsx)("path", { d: "M6 2v2" })] }), wine: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M8 22h8" }), (0, R.jsx)("path", { d: "M7 10h10" }), (0, R.jsx)("path", { d: "M12 15v7" }), (0, R.jsx)("path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" })] }), cocktail: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M8 22h8" }), (0, R.jsx)("path", { d: "M12 11v11" }), (0, R.jsx)("path", { d: "m19 3-7 8-7-8Z" })] }), place: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), (0, R.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }), hotel: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), (0, R.jsx)("path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), (0, R.jsx)("path", { d: "M12 4v6" }), (0, R.jsx)("path", { d: "M2 18h20" })] }), home: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), (0, R.jsx)("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })] }), building: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 12h4" }), (0, R.jsx)("path", { d: "M10 8h4" }), (0, R.jsx)("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }), (0, R.jsx)("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), (0, R.jsx)("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })] }), flight: (0, R.jsx)(R.Fragment, { children: (0, R.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) }), car: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), (0, R.jsx)("circle", { cx: "7", cy: "17", r: "2" }), (0, R.jsx)("path", { d: "M9 17h6" }), (0, R.jsx)("circle", { cx: "17", cy: "17", r: "2" })] }), nature: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), (0, R.jsx)("path", { d: "M7 16v6" }), (0, R.jsx)("path", { d: "M13 19v3" }), (0, R.jsx)("path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" })] }), product: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" }), (0, R.jsx)("path", { d: "M3.103 6.034h17.794" }), (0, R.jsx)("path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" })] }), clothing: (0, R.jsx)(R.Fragment, { children: (0, R.jsx)("path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }) }), device: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }), (0, R.jsx)("path", { d: "M12 18h.01" })] }), furniture: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), (0, R.jsx)("path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), (0, R.jsx)("path", { d: "M4 18v2" }), (0, R.jsx)("path", { d: "M20 18v2" }), (0, R.jsx)("path", { d: "M12 4v9" })] }), gift: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 7v14" }), (0, R.jsx)("path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), (0, R.jsx)("path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), (0, R.jsx)("rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" })] }), book: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 7v14" }), (0, R.jsx)("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })] }), person: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("circle", { cx: "12", cy: "8", r: "5" }), (0, R.jsx)("path", { d: "M20 21a8 8 0 0 0-16 0" })] }), pet: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("circle", { cx: "11", cy: "4", r: "2" }), (0, R.jsx)("circle", { cx: "18", cy: "8", r: "2" }), (0, R.jsx)("circle", { cx: "20", cy: "16", r: "2" }), (0, R.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })] }), music: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M9 18V5l12-2v13" }), (0, R.jsx)("circle", { cx: "6", cy: "18", r: "3" }), (0, R.jsx)("circle", { cx: "18", cy: "16", r: "3" })] }), event: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), (0, R.jsx)("path", { d: "M13 5v2" }), (0, R.jsx)("path", { d: "M13 17v2" }), (0, R.jsx)("path", { d: "M13 11v2" })] }) };
      BD = Object.keys(m5);
      oi = (e6) => function({ size: t = 16, className: r }) {
        return (0, R.jsx)("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: r, "aria-hidden": "true", children: e6 });
      };
      Rm = oi(Mn("M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18", { strokeLinecap: "round", strokeLinejoin: "round" }));
      g5 = oi(Mn("M4.75 12.7768L10 19.25L19.25 4.75", { strokeLinecap: "round" }));
      WD = oi(Mn("M15.25 8.75V4C15.25 3.30964 14.6904 2.75 14 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V14C2.75 14.6904 3.30964 15.25 4 15.25H8.75M10 8.75H20C20.6904 8.75 21.25 9.30964 21.25 10V20C21.25 20.6904 20.6904 21.25 20 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20V10C8.75 9.30964 9.30964 8.75 10 8.75Z", { strokeLinecap: "round", strokeLinejoin: "round" }));
      YD = oi((0, R.jsxs)(R.Fragment, { children: [Mn("M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12", { strokeOpacity: 0.3 }), Mn("M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25", { strokeLinecap: "round" })] }));
      v5 = oi(Mn("M12 5.25V12M12 12V18.75M12 12H5.25M12 12H18.75", { strokeLinecap: "round" }));
      qD = oi((0, R.jsx)(R.Fragment, { children: [3.75, 12, 20.25].map((e6) => (0, R.jsx)("circle", { cx: e6, cy: "12", r: "1", fill: "currentColor", vectorEffect: "non-scaling-stroke" }, e6)) }));
      GD = oi((0, R.jsx)("path", { d: "M13.3602 1.8549C12.8126 0.715033 11.1861 0.715035 10.6384 1.8549L8.26986 6.78487C8.26986 6.78487 8.26707 6.78867 8.26265 6.78925L2.81303 7.50272C1.55724 7.66713 1.04518 9.21568 1.97288 10.0903L5.95701 13.8466C5.9588 13.8483 5.95864 13.8502 5.95864 13.8502L4.95808 19.2169C4.72462 20.4691 6.04988 21.4152 7.15912 20.8172L11.9937 18.2111C11.9971 18.2093 12.0015 18.2093 12.0049 18.2111L16.8395 20.8172C17.9488 21.4152 19.274 20.4691 19.0406 19.2169L18.04 13.8502C18.04 13.8502 18.0398 13.8483 18.0416 13.8466L22.0258 10.0903C22.9535 9.21568 22.4414 7.66713 21.1856 7.50272L15.736 6.78925C15.7316 6.78867 15.7288 6.78487 15.7288 6.78487L13.3602 1.8549Z", fill: "currentColor", stroke: "none" }));
      KD = 2e3;
      XD = 1500;
      JD = 320;
      e9 = typeof window > "u" ? _t.useEffect : _t.useLayoutEffect;
      Xl = { scale: 1, x: 0, y: 0 };
      w5 = (e6) => Math.min(4, Math.max(1, e6));
      eb = (e6, t) => Math.min(t, Math.max(-t, e6));
      tb = (e6, t) => Math.hypot(e6.x - t.x, e6.y - t.y);
      rb = (e6, t) => ({ x: (e6.x + t.x) / 2, y: (e6.y + t.y) / 2 });
      rs = ["pointerdown", "wheel", "touchstart"];
      u9 = ["https:", "http:", "mailto:", "tel:"];
      S5 = (0, wa.createContext)(false);
      c9 = (0, ce.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, ce.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });
      f9 = [0, 0.5, 1];
      H5 = (e6) => String(e6);
      ti = "var(--ds-teal)";
      sd = ["var(--ds-ink-2)", "var(--ds-ink-3)", "var(--ds-ink-4)"];
      ns = (e6) => sd[e6 % sd.length];
      h9 = (e6) => ({ "--file-series": ns(e6) });
      p9 = 350;
      nb = (e6) => [...e6].reduce((t, r) => t + (r >= "\u2E80" ? 2 : 1), 0);
      k9 = "M0.42 3.09L1.61 2.89L0.48 2.69L1.62 2.43L0.99 2.17L1.97 2.13L1.43 1.9L2.46 1.86L2.15 1.73L2.75 1.64L2.37 1.39L3.35 0.96L2.98 0.79L8.51 0.11L26.87 0.15L26.4 0.56L27.63 0.18L31.8 0.62L38.9 0.13L45.68 0.81L47.76 0.4L55.48 0.77L56.29 1.18L55.58 1.23L58.14 1.65L59.81 1.57L60.9 0.86L60.75 1.02L60.99 1.16L60.77 1.29L60.96 1.36L60.12 1.53L61 1.98L60.66 2.11L60.78 2.4L60.62 2.54L60.91 2.62L60.59 2.74L60.77 2.86L60.64 3.13L60.21 3.27L60.83 4.03L60.31 4.49L60.77 4.95L60.3 5.23L60.56 5.37L60.37 5.65L60.88 5.7L60.33 5.9L60.73 6.04L60.24 6.22L60.41 6.56L53.72 6.69L51.56 7.12L53.3 7.17L53.68 7.37L52.95 7.49L43.88 7.49L43.34 7.17L44.31 7.17L44.04 6.91L36.19 6.62L21.85 7.21L21.55 6.53L20.27 6.65L21.36 6.91L19.71 7.23L16.12 7.16L16.75 7.45L16.16 7.64L16.78 7.65L15.91 7.79L6.54 7.78L2.19 7.22L2.59 6.92L1.52 6.51L1.67 6.34L1.46 6.11L1.89 6.11L1.25 5.8L1.75 5.46L1.07 5.17L1.42 5.03L1.18 4.66L1.6 4.6L0.78 4.06L1.65 3.81L0.57 3.8L1.45 3.75L1.26 3.62L1.67 3.27L1.31 3.25L1.96 3.02L0.68 3.51ZM4.51 7.91L5.27 7.67ZM11.88 7.73L12.5 7.71ZM18.52 7.52L19.25 7.58ZM48.59 7.44L49.2 7.51ZM56.71 7.35L57.69 7.39ZM46.44 7.35L47.22 7.29ZM42.12 7.21L42.92 7.23ZM40.43 7.11L41.23 7.11ZM44.47 7.25L44.94 7.28ZM19.76 7.21L20.66 7.19ZM54.52 7.24L55.14 7.2ZM46.78 7.12L49.14 7.11ZM25.38 7L25.99 7.05ZM40.06 7.06L40.64 6.92ZM17.92 6.98L18.45 6.98ZM31.56 6.87L32.37 6.87ZM51.56 6.74L53.26 6.67ZM59.1 6.78L59.62 6.72ZM21.76 6.42L22.95 6.75ZM16.15 6.52L16.67 6.42ZM17.54 6.49L18.05 6.51ZM0.81 3.97L1.43 3.86ZM58.65 2.16L59.99 2.16ZM0 2.15L0.9 2.03ZM57.21 1.79L57.78 2.15L58.45 1.72ZM0.39 1.96L0.96 1.94ZM59.2 1.89L60.35 1.77ZM55.93 1.38L57.07 1.33ZM59.1 1.38L59.57 1.39ZM57.17 1.29L58.35 1.28ZM59.18 1.23L59.86 1.17ZM55.19 1.1L55.75 1.02ZM53.92 1.05L54.38 1.08ZM2.03 0.84L2.99 0.9ZM59.36 1.02L59.87 1.09ZM56.26 0.83L56.73 0.76ZM46.89 0.54L47.4 0.59ZM48.54 0.56L51.82 0.61ZM28.76 0.57L29.23 0.53ZM30.84 0.35L32.27 0.45ZM32.23 0.33L33.89 0.31ZM39.33 0.17L40.33 0.19Z";
      E9 = "0 0 61 8";
      ab = "http://www.w3.org/2000/svg";
      ib = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
      Kt = (e6) => Math.round(e6 * 10) / 10;
      A9 = class {
        drawn = /* @__PURE__ */ new Map();
        point(e6, t, r) {
          let n = this.drawn.get(e6);
          if (n?.id === t && n.element === r) {
            n.nodes.length > 0 && this.stay(e6, n);
            return;
          }
          n && this.release(n, 200);
          let a = { id: t, element: r, nodes: [], drawMs: 0, stop: () => {
          } };
          this.drawn.set(e6, a), a.stop = _9(r, () => this.draw(e6, a));
        }
        check() {
          for (let [e6, t] of this.drawn) {
            if (!t.place) continue;
            let r = t.element.isConnected ? this.place(t.element) : void 0;
            r && Math.abs(r.left - t.place.left) < 1 && Math.abs(r.top - t.place.top) < 1 && Math.abs(r.width - t.place.width) < 1 && Math.abs(r.height - t.place.height) < 1 || (this.drawn.delete(e6), this.release(t, 200));
          }
        }
        area(e6) {
          return e6.closest("dialog") ?? document.body;
        }
        within(e6, t) {
          let r = ob(this.area(e6)).getBoundingClientRect();
          return { left: t.left - r.left, top: t.top - r.top, width: t.width, height: t.height };
        }
        place(e6) {
          return this.within(e6, e6.getBoundingClientRect());
        }
        draw(e6, t) {
          if (!t.element.isConnected) {
            this.drawn.delete(e6);
            return;
          }
          let r = ob(this.area(t.element)), n = this.place(t.element), a = R9(P9(M9(t.element)));
          if (S9(t.element.getAttribute("data-live-mark"), n, a) === "stroke") {
            let i = C9(a.length);
            if (a.forEach((o, l) => {
              let s = this.within(t.element, o), u = { left: s.left - 0.18 * o.size, top: s.top + s.height - (0.13 + 0.42) * o.size, width: s.width + 2 * 0.18 * o.size, height: 0.42 * o.size };
              t.nodes.push(lb("stroke", t.id, u, E9, k9, i[l].ms, i[l].wait));
            }), t.drawMs = i[i.length - 1].wait + i[i.length - 1].ms, getComputedStyle(t.element).direction === "rtl") for (let o of t.nodes) o.setAttribute("data-rtl", "");
          } else {
            let i = Math.max(n.left, 10), o = Math.min(n.left + n.width, this.area(t.element).clientWidth - 10) - i, l = { left: i - 7, top: n.top - 7, width: o + 14, height: n.height + 14 };
            t.drawMs = L9(o, n.height), t.nodes.push(lb("loop", t.id, l, `0 0 ${Kt(l.width)} ${Kt(l.height)}`, N9(o, n.height), t.drawMs, 0));
          }
          ib() && (t.drawMs = 0), t.place = n;
          for (let i of t.nodes) r.appendChild(i);
          r.getBoundingClientRect();
          for (let i of t.nodes) i.setAttribute("data-phase", "shown");
          this.stay(e6, t);
        }
        stay(e6, t) {
          clearTimeout(t.hold), t.hold = setTimeout(() => {
            this.drawn.get(e6) === t && this.drawn.delete(e6), this.release(t, 400);
          }, t.drawMs + 1100);
        }
        release(e6, t) {
          e6.stop(), clearTimeout(e6.hold);
          for (let r of e6.nodes) {
            if (ib()) {
              r.remove();
              continue;
            }
            r.style.setProperty("--file-live-mark-fade", `${t}ms`), r.setAttribute("data-phase", "leaving"), setTimeout(() => r.remove(), t);
          }
        }
      };
      T9 = 30;
      F9 = 500;
      $9 = 250;
      z9 = 5;
      O9 = 360;
      I9 = 200;
      j9 = 2e3;
      H9 = 280;
      U9 = "cubic-bezier(0.2, 0.7, 0.2, 1)";
      Gc = () => [...document.querySelectorAll("[data-live-id]")];
      B0 = () => [...document.querySelectorAll("[data-live-reveal]")];
      q5 = [];
      B9 = /* @__PURE__ */ new Set(["PhotoCard"]);
      sb = 16;
      W9 = class {
        constructor(e6) {
          this.runtime = e6;
        }
        base = TC();
        data = this.base;
        seq = null;
        own = [];
        sending = Promise.resolve();
        reading = false;
        pending = [];
        started = false;
        listeners = /* @__PURE__ */ new Set();
        marks = new A9();
        open = null;
        details = /* @__PURE__ */ new Set();
        entering = /* @__PURE__ */ new Map();
        gliding = /* @__PURE__ */ new WeakMap();
        enterSlot = 0;
        itemOf = /* @__PURE__ */ new WeakMap();
        lists = /* @__PURE__ */ new Map();
        subscribe = (e6) => (this.listeners.add(e6), () => {
          this.listeners.delete(e6);
        });
        getData = () => this.data;
        getOpen = () => this.open;
        setOpen(e6) {
          this.open !== e6 && (this.open = e6, this.emit());
        }
        holdDetail(e6) {
          return this.details.add(e6), () => {
            this.details.delete(e6);
          };
        }
        drawerOf(e6) {
          let t = this.data.nodes;
          for (let r = e6; r !== void 0; r = Object.keys(t).find((n) => t[n].children.includes(r))) {
            let n = t[r];
            if (n && n.children.length > 0 && (B9.has(n.type) || this.details.has(r))) return r;
          }
          return null;
        }
        start() {
          if (this.started || typeof window > "u") return;
          this.started = true;
          let e6 = this.runtime()?.live;
          e6?.subscribe((r) => this.receive(r));
          let t = this.read();
          t && e6?.hold?.(t);
        }
        item(e6) {
          let t = this.data.nodes[e6];
          if (t?.type !== cm) return;
          let r = this.itemOf.get(t);
          return r || (r = { ...t.props, id: e6 }, this.itemOf.set(t, r)), r;
        }
        items(e6) {
          let t = this.data.nodes[e6];
          if (t?.type !== um) return q5;
          let r = t.children.map((i) => this.data.nodes[i]), n = this.lists.get(e6);
          if (n?.collection === t && r.every((i, o) => i === n.nodes[o])) return n.items;
          let a = t.children.map((i) => this.item(i));
          return this.lists.set(e6, { collection: t, nodes: r, items: a }), a;
        }
        emit() {
          for (let e6 of [...this.listeners]) e6();
        }
        read() {
          let e6 = this.runtime();
          if (!(this.reading || !e6?.request)) return this.reading = true, e6.request("live.read", null).then((t) => {
            this.reading = false, t.status === "ok" && typeof t.seq == "number" && typeof t.data == "string" && (this.seq === null || t.seq > this.seq) ? this.load(t.seq, JSON.parse(t.data)) : this.drain(), t.status === "ok" && this.readBehind();
          }, () => {
            this.reading = false, this.drain();
          });
        }
        readBehind() {
          let e6 = this.seq, t = this.own.filter((n) => n.at !== void 0 && (e6 === null || n.at > e6));
          if (t.length === 0) return;
          let r = t[t.length - 1];
          r.behind = (r.behind ?? 0) + 1, r.behind === 1 ? this.read() : r.behind <= z9 && setTimeout(() => {
            this.own.includes(r) && this.read();
          }, $9 * 2 ** (r.behind - 2));
        }
        load(e6, t) {
          this.base = t, this.seq = e6, this.show(), this.drain();
        }
        show() {
          let e6 = this.seq;
          e6 !== null && (this.own = this.own.filter((t) => t.at === void 0 || t.at > e6)), this.data = this.own.reduce((t, r) => Kl(t, r.op) ? Bc(t, r.op) : t, this.base);
        }
        drain() {
          let e6 = this.pending;
          this.pending = [];
          for (let t of e6) this.apply(t);
          this.emit();
        }
        inStep(e6) {
          return this.seq !== null && e6.seq === this.seq + 1;
        }
        apply(e6) {
          this.inStep(e6) && (Kl(this.base, e6.op) && (this.base = Bc(this.base, e6.op)), this.seq = e6.seq, this.show());
        }
        change(e6) {
          let t = new Map(Gc().map((n) => [n, n.getBoundingClientRect()])), r = new Set(B0());
          e6(), this.emit(), requestAnimationFrame(() => this.settle(t, r));
        }
        write(e6) {
          Kl(this.data, e6) && this.change(() => {
            this.base = Bc(this.base, e6), this.show();
          });
        }
        edit(e6) {
          let t = this.runtime();
          if (!t?.request) return this.write(e6);
          if (!Kl(this.data, e6)) return;
          let r = { op: e6 };
          this.change(() => {
            this.own.push(r), this.show();
          });
          let n = async () => {
            for (; ; ) {
              let a = await t.request("live.write", { op: e6 }).catch(() => ({ status: "unknown" }));
              if (a.status !== "rate_limited") return a;
              await new Promise((i) => setTimeout(i, Math.max(a.retryAfterMs ?? 0, F9)));
            }
          };
          this.sending = this.sending.then(n).then((a) => this.answer(r, a)).catch((a) => {
            console.error(a), this.own = this.own.filter((i) => i !== r), this.show(), this.read();
          });
        }
        answer(e6, t) {
          if (this.own.includes(e6)) {
            if (t.status === "local") return this.own = this.own.filter((r) => r !== e6), this.change(() => {
              Kl(this.base, e6.op) && (this.base = Bc(this.base, e6.op)), this.show();
            });
            if (t.status === "ok" && typeof t.seq == "number") return t.applied ? e6.at = t.seq : this.own = this.own.filter((r) => r !== e6), t.applied && !this.reading && this.inStep({ seq: t.seq }) ? this.change(() => this.apply({ seq: t.seq, op: e6.op })) : ((this.seq === null || t.seq > this.seq) && this.read(), this.change(() => this.show()));
            this.own = this.own.filter((r) => r !== e6), this.change(() => this.show()), t.status === "unknown" && this.read();
          }
        }
        receive(e6) {
          if (e6.kind === "resync") this.read();
          else if (e6.kind === "op") {
            if (this.seq !== null && e6.seq <= this.seq) return;
            if (this.reading || !this.inStep(e6)) {
              this.pending.push(e6), this.read();
              return;
            }
            let t = this.data.nodes, r = new Map(Gc().map((a) => [a, a.getBoundingClientRect()])), n = new Set(B0());
            this.apply(e6), e6.op.op === "add" && !(e6.op.id in t) && this.entering.set(e6.op.id, this.nextEnter()), this.emit(), requestAnimationFrame(() => this.settle(r, n));
          } else this.setOpen(this.drawerOf(e6.id)), this.focus(e6, T9);
        }
        nextEnter() {
          let e6 = performance.now();
          return this.enterSlot = Math.min(Math.max(e6, this.enterSlot + I9), e6 + j9), this.enterSlot - e6;
        }
        settle(e6, t) {
          let r = Gc();
          for (let o of r) this.gliding.get(o)?.cancel();
          let n = B0().filter((o) => !t.has(o));
          for (let o of n) {
            let l = r.find((s) => o.contains(s) && this.entering.has(s.getAttribute("data-live-id")));
            this.enter(o, l ? this.entering.get(l.getAttribute("data-live-id")) : this.nextEnter());
          }
          let a = new Map(r.map((o) => [o, o.getBoundingClientRect()])), i = /* @__PURE__ */ new Map();
          for (let o of r) {
            let l = e6.get(o), s = this.entering.get(o.getAttribute("data-live-id"));
            if (!l) {
              s !== void 0 && !n.some((v) => v.contains(o)) && this.enter(o, s);
              continue;
            }
            let u = a.get(o), c = { x: l.left - u.left, y: l.top - u.top };
            i.set(o, c);
            let d = o.parentElement?.closest("[data-live-id]"), f = (d && i.get(d)) ?? { x: 0, y: 0 }, p = { x: c.x - f.x, y: c.y - f.y };
            Math.abs(p.x) < 1 && Math.abs(p.y) < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches || this.gliding.set(o, o.animate([{ transform: `translate(${p.x}px, ${p.y}px)` }, { transform: "none" }], { duration: H9, easing: U9 }));
          }
          this.entering.clear(), this.marks.check();
        }
        enter(e6, t) {
          e6.style.setProperty("--file-live-enter-delay", `${Math.round(t)}ms`), e6.setAttribute("data-live-enter", ""), setTimeout(() => this.endEnter(e6), t + O9);
        }
        endEnter(e6) {
          e6.removeAttribute("data-live-enter"), e6.style.removeProperty("--file-live-enter-delay");
        }
        focus(e6, t) {
          let r = Gc().find((a) => a.getAttribute("data-live-id") === e6.id);
          if (!r) {
            t > 0 && requestAnimationFrame(() => this.focus(e6, t - 1));
            return;
          }
          if (this.open === e6.id) return;
          let n = r.closest("dialog");
          n ? V9(n, r) : this.runtime()?.live?.reveal(e6.request, r);
          for (let a = r; a; a = a.parentElement?.closest("[data-live-id]")) this.endEnter(a), this.gliding.get(a)?.cancel();
          this.marks.point(e6.actor, e6.id, r);
        }
      };
      jt = new W9(() => window.instinctFile);
      Kc = "owner";
      G9 = () => `item-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
      X9 = { Region: (e6, t) => (0, Se.jsx)(Se.Fragment, { children: t }), Group: (e6, t) => (0, Se.jsx)(R5, { ...e6, children: t }), Rows: (e6, t) => (0, Se.jsx)(C5, { ...e6, children: t }), PhotoCards: (e6, t) => (0, Se.jsx)(B5, { children: t }), Text: (e6, t) => (0, Se.jsx)(N5, { children: t }), Header: (e6) => (0, Se.jsx)(E5, { ...e6 }), Row: (e6) => (0, Se.jsx)(D5, { ...e6 }), PhotoCard: (e6, t) => (0, Se.jsx)(K9, { props: e6, children: t }), Facts: (e6) => (0, Se.jsx)(xd, { ...e6 }), Heading: (e6) => (0, Se.jsx)(L5, { sub: typeof e6.sub == "string" ? e6.sub : void 0, children: fa(e6.text) }), Paragraph: (e6) => (0, Se.jsx)(M5, { children: fa(e6.text) }), Bullets: (e6) => (0, Se.jsx)(P5, { ...e6 }), KeySentence: (e6) => (0, Se.jsx)(_5, { children: fa(e6.text) }), Callout: (e6) => (0, Se.jsx)($5, { title: fa(e6.title), tone: e6.tone, children: fa(e6.text) }), NumberedList: (e6) => (0, Se.jsx)(z5, { ...e6 }), Table: (e6) => (0, Se.jsx)(O5, { ...e6 }), Caption: (e6) => (0, Se.jsx)(T5, { children: fa(e6.text) }), Rule: () => (0, Se.jsx)(F5, {}), Closing: (e6) => (0, Se.jsx)(I5, { children: fa(e6.text) }), Figure: (e6) => (0, Se.jsx)(A5, { ...e6 }), Photos: (e6) => (0, Se.jsx)(Nm, { ...e6 }), BarChart: (e6) => (0, Se.jsx)(U5, { ...e6 }), ButtonLink: (e6) => (0, Se.jsx)(y5, { ...e6, children: fa(e6.label) }) };
      ub = /* @__PURE__ */ new Set();
      Q9 = class extends fd.Component {
        state = { failed: false };
        static getDerivedStateFromError() {
          return { failed: true };
        }
        componentDidCatch(e6) {
          Q5(this.props.id, `could not render as ${this.props.node.type}: ${e6.message}`);
        }
        componentDidUpdate(e6) {
          this.state.failed && e6.node !== this.props.node && this.setState({ failed: false });
        }
        render() {
          return this.state.failed ? null : this.props.children;
        }
      };
      Z5 = (0, fd.memo)(function({ id: e6 }) {
        let t = Pm(e6);
        if (!t || t.type === um || t.type === cm) return null;
        let r = X9[t.type];
        if (!r) return Q5(e6, `has unknown type "${t.type}"; this File's kit cannot render it`), null;
        let n = t.children.map((a) => (0, Ql.jsx)(Z5, { id: a }, a));
        return (0, Ql.jsx)(Q9, { id: e6, node: t, children: (0, Ql.jsx)(md.Provider, { value: e6, children: r(t.props, n) }) });
      });
      eN = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
      cb = (e6, t) => Object.entries(t).every(([r, n]) => e6.options[r] === n);
      nN = (e6) => e6.map((t) => t.src).join(" ");
      db = (e6) => o3(e6.map((t) => t.photos?.length ? t.photos : void 0), nN);
      fb = (e6) => e6.length > 1 ? `${e6[0]}\u2013${e6[e6.length - 1]}` : e6[0];
      om = 320;
      d3 = (e6) => e6.detail || !e6.note ? "detail" : "note";
      ho = (e6) => e6[d3(e6)] ?? "";
      ha = (e6) => !!(e6.photo || e6.photos.length > 0 || e6.price || e6.was || e6.store || e6.rating !== void 0 || e6.badge || e6.url);
      f3 = (e6) => e6 && /^https?:/i.test(e6) ? Cm(e6) : void 0;
      hb = (e6) => e6 && AC.test(e6) ? e6 : f3(e6);
      br = (e6) => typeof e6 == "string" && e6.trim() ? e6 : void 0;
      pb = (e6) => typeof e6 == "number" && Number.isFinite(e6) ? e6 : void 0;
      gb = /* @__PURE__ */ new WeakMap();
      h3 = 22;
      yb = [0, 1, 2, 3, 4].map((e6) => (0, z.jsx)(GD, { size: 12 }, e6));
      Rd = j(be(), 1);
    }
  });

  // page-kit:react-dom/client
  var require_client = __commonJS({
    "page-kit:react-dom/client"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactDomClient;
    }
  });

  // page-kit:react
  var require_react = __commonJS({
    "page-kit:react"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).React;
    }
  });

  // page-kit:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "page-kit:react/jsx-runtime"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactJsxRuntime;
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // page-kit:@instinct/files
  var { BarChart, Bullets, Button, ButtonLink, Callout, Caption, ChoiceRow, CloseButton, Closing, CompareColumns, CopyButton, DataTable, DotChart, Drawer, DsButton, DsIconButton, Facts, Figure, FileButton, FileCard, FileGround, FileRouter, Group, Header, Heading, ImageFrame, KeySentence, LineChart, Link, List, LiveRegion, NavLink, NumberedList, Paragraph, PhotoCard, PhotoCards, PhotoViewer, Photos, ProductCard, ProductCarousel, ProductDetail, ProductGrid, ProductImage, ProductModal, ProductTable, ProductTile, RangeChart, RecommendationCard, RecommendationGrid, Reveal, Route, Routes, Row, Rows, Rule, Slider, Sparklines, StackedBar, StripArrows, Table, Text, TextField, TextLink, Wordmark, liveListEdits, liveTarget, productBadge, stripTakeoverEvents, useFileContext, useLiveDetail, useLiveItem, useLiveItems, useLiveValue, useLocalState, useLocation, useNavigate, useWakeAgent } = (init_kit(), __toCommonJS(kit_exports)).Files;

  // src/App.tsx
  var import_react = __toESM(require_react());

  // src/photos/logo-mark.png
  var logo_mark_default = "./assets/XNALF7F3.png";

  // src/photos/logo-allwhite.png
  var logo_allwhite_default = "./assets/Y6GYJMB2.png";

  // src/photos/clients/cib.png
  var cib_default = "./assets/BRCPC2S2.png";

  // src/photos/clients/ldc.png
  var ldc_default = "./assets/Q3JMZJEM.png";

  // src/photos/clients/flagship.png
  var flagship_default = "./assets/2BCUQ7OB.png";

  // src/photos/clients/mbme-pay.png
  var mbme_pay_default = "./assets/HDSYHRN4.png";

  // src/photos/clients/octane.png
  var octane_default = "./assets/NXHAWU7R.png";

  // src/photos/clients/dds-technologies.png
  var dds_technologies_default = "./assets/3TKZK7FD.png";

  // src/photos/clients/binary-waves.png
  var binary_waves_default = "./assets/6M4XWH6K.png";

  // src/photos/clients/loy-nova.png
  var loy_nova_default = "./assets/7ON4SF3N.png";

  // src/photos/clients/klivvr.png
  var klivvr_default = "./assets/45JNUYSQ.png";

  // src/photos/clients/khazna.png
  var khazna_default = "./assets/TBA4NDFT.png";

  // src/photos/clients/cashflow.png
  var cashflow_default = "./assets/SMQODHKY.png";

  // src/photos/clients/see.png
  var see_default = "./assets/EKPEGGNT.png";

  // src/photos/clients/neo.png
  var neo_default = "./assets/H6WJ47FZ.png";

  // src/photos/clients/modupay.png
  var modupay_default = "./assets/4DFPFZ7D.png";

  // src/photos/clients/cybersigma.png
  var cybersigma_default = "./assets/HVQYCOCV.png";

  // src/photos/clients/shufti.png
  var shufti_default = "./assets/5VLTYO7K.png";

  // src/photos/clients/just2pay.png
  var just2pay_default = "./assets/N65BYT3F.png";

  // src/photos/clients/elgameya.png
  var elgameya_default = "./assets/RFOJM5W3.png";

  // src/photos/clients/tal2a.png
  var tal2a_default = "./assets/FXNCPDXL.png";

  // src/photos/clients/paymint.png
  var paymint_default = "./assets/AHZENMLY.png";

  // src/photos/clients/cashcall.png
  var cashcall_default = "./assets/5BMAL42X.png";

  // src/photos/clients/easycash.png
  var easycash_default = "./assets/4JP7HPRK.png";

  // src/photos/clients/bel-baqy.png
  var bel_baqy_default = "./assets/DUHJN63O.png";

  // src/App.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var iconPaths = {
    consult: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "4.6", r: "2.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "4.8", cy: "19.2", r: "2.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "19.2", cy: "19.2", r: "2.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.4 6.6 6.4 17" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.6 6.6 17.6 17" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.2 19.2h9.6" })
    ] }),
    payments: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.5", y: "5.5", width: "19", height: "13", rx: "2.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 10h19" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 14.8h4" })
    ] }),
    shield: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 19 5.4v5.4c0 4.9-3.4 8.3-7 10-3.6-1.7-7-5.1-7-10V5.4Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9.2 11.6 2 2 3.6-3.6" })
    ] }),
    code: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "4.5", width: "18", height: "15", rx: "2.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 8.8h18" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m10.3 12-2.3 2.3 2.3 2.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m13.7 12 2.3 2.3-2.3 2.3" })
    ] }),
    modules: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "4", width: "7", height: "7", rx: "1.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "13", y: "4", width: "7", height: "7", rx: "1.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "13", width: "7", height: "7", rx: "1.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.5 13.8v6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 16.8h6" })
    ] }),
    plug: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 7V3.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 7V3.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 7h10v4a5 5 0 0 1-10 0Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 16v4.8" })
    ] }),
    rocket: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 15.5c-1.6-1.1-2.6-2.8-3-5.2.4-3 1.5-5.6 3-7.3 1.5 1.7 2.6 4.3 3 7.3-.4 2.4-1.4 4.1-3 5.2Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "8.8", r: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.3 13.2 6.8 16.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.7 13.2l2.5 3.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.6 17.2c.1 1.6.6 2.8 1.4 3.8.8-1 1.3-2.2 1.4-3.8" })
    ] }),
    badge: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "9.5", r: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m10 9.5 1.5 1.5 2.8-2.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.4 13.9 8 20l4-2 4 2-1.4-6.1" })
    ] }),
    compass: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "8.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.2 8.8l-2 4.4-4.4 2 2-4.4Z" })
    ] }),
    chip: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10.5", y: "10.5", width: "3", height: "3", rx: "0.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" })
    ] }),
    lock: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "5.5", y: "10.5", width: "13", height: "10", rx: "2.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 10.5V7.7a3.5 3.5 0 0 1 7 0v2.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "15.3", r: "1.2" })
    ] }),
    spark: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5c.8 4.6 3.9 7.7 8.5 8.5-4.6.8-7.7 3.9-8.5 8.5-.8-4.6-3.9-7.7-8.5-8.5 4.6-.8 7.7-3.9 8.5-8.5Z" }) }),
    bank: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 9.5 12 4l8 5.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 11h16" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 13.5v4.5M9.8 13.5v4.5M14.2 13.5v4.5M18 13.5v4.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 20.5h17" })
    ] }),
    trend: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 17.5l5-5 3.5 3.5 6.5-7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.8 9H19v4.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 20.5h17" })
    ] }),
    building: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "3.5", width: "12", height: "17.5", rx: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 7.5h1.8M12.7 7.5h1.8M9.5 11h1.8M12.7 11h1.8M9.5 14.5h1.8M12.7 14.5h1.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.6 21v-3h2.8v3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 21h17" })
    ] }),
    clipboard: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "4.5", width: "12", height: "16", rx: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9.5", y: "2.5", width: "5", height: "3.6", rx: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9.3 13.4 1.9 1.9 3.6-3.6" })
    ] }),
    eye: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "2.8" })
    ] }),
    target: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "8.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4.8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor", stroke: "none" })
    ] }),
    flag: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 21V4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 4.8c4-2.4 7 1.6 13-.8v8.4c-6 2.4-9-1.6-13 .8" })
    ] })
  };
  function Ticker() {
    const phrase = "Plug & Play Digital Payment Modules | Digital Payments Compliance | Digital Transformation Consulting";
    const group = (key, hidden) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-ticker-group", "aria-hidden": hidden || void 0, children: [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "pnp-ticker-item", children: [
      phrase,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-ticker-sep", children: "|" })
    ] }, i)) }, key);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-ticker", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-ticker-track", children: [group("a", false), group("b", true)] }) });
  }
  function LineIcon({ name }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: iconPaths[name] });
  }
  var practices = [
    { number: "01", name: "Business & IT consultancy", icon: "consult", more: "consultancy", detail: "Strategy, business analysis, solution architecture, enterprise data, PMO delivery, DevOps, and risk management, plus independent QA and card testing & certification labs." },
    { number: "02", name: "Payment system solutions", icon: "payments", more: "payments", detail: "End-to-end issuing, acquiring, payment orchestration, tokenization, APIs, and value-added services, delivered with our payments partner." },
    { number: "03", name: "Security & compliance", icon: "shield", more: "security", detail: "PCI DSS and ISO certification, VAPT and red-team testing, GRC and central bank advisory, and a 24/7 security operations center, delivered with our security partner, a PCI QSA and CERT-In empanelled firm." },
    { number: "04", name: "Client software solutions", icon: "code", more: "software", detail: "Mobile apps, web portals and dashboards, AI-driven process automation, and cloud & HSM services." }
  ];
  var offerCards = [
    { icon: "badge", name: "Security & Compliance Solutions", detail: "Payment Security & PCI DSS, ISO Standards, VAPT, GRC & 24/7 SOC", more: "security", red: false },
    { icon: "payments", name: "Payment System Solutions", detail: "Acquiring, Issuing, Orchestration & Tokenization", more: "payments", red: true },
    { icon: "consult", name: "Business & IT Consultancy", detail: "Architecture, DevOps, PMO, QA & Card Testing Labs", more: "consultancy", red: false },
    { icon: "code", name: "Client Software Solutions", detail: "Mobile Apps, Executive Portals & AI Automation", more: "software", red: true }
  ];
  var advantageCards = [
    { number: "01", icon: "plug", name: "Plug & Play Integration", detail: "Seamlessly connect new payment gateways, acquiring switches, or digital wallets into your existing core infrastructure without disruptive IT overhauls.", tag: "Zero Legacy Disruption", red: false },
    { number: "02", icon: "modules", name: "Composable & Flexible", detail: "Start with a single module, such as Tokenization, e-KYC, or Risk Management, and snap on new capabilities as your business model evolves.", tag: "Modular Building Blocks", red: true },
    { number: "03", icon: "rocket", name: "Accelerated Time-to-Market", detail: "Compress deployment cycles from months to weeks using pre-certified, ready-to-launch components.", tag: "Weeks, Not Months", red: false },
    { number: "04", icon: "shield", name: "Built-In Compliance & Security", detail: "Every module is engineered from day one to meet strict PCI DSS, ISO, and Central Bank regulatory standards.", tag: "Compliance by Design", red: true }
  ];
  var PURPLE = "#4C00FF";
  var RED = "#FF5252";
  var LAV = "#F4F1FF";
  var LAV_STROKE = "#DDD5FF";
  function PaymentsFlow() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 640 210", role: "img", "aria-label": "Diagram: a payment card authorizes through the switch and settles to the bank", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "From card to bank" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 40, y: 52, width: 128, height: 80, rx: 10, fill: "#ffffff", stroke: PURPLE, strokeWidth: 2.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 40, y: 66, width: 128, height: 12, fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 56, y: 92, width: 24, height: 18, rx: 3, fill: LAV, stroke: PURPLE, strokeWidth: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 92, y1: 98, x2: 148, y2: 98, stroke: LAV_STROKE, strokeWidth: 3, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 104, y: 168, textAnchor: "middle", fontSize: 12, fontWeight: 700, fill: "#111111", letterSpacing: 2, children: "CARD" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 180, y1: 92, x2: 252, y2: 92, stroke: PURPLE, strokeWidth: 2.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M246 86 l10 6 -10 6 Z", fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 214, cy: 92, r: 6, fill: RED }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 216, y: 74, textAnchor: "middle", fontSize: 11, fill: "#585254", children: "authorize" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 306, cy: 92, r: 36, fill: "#ffffff", stroke: PURPLE, strokeWidth: 2.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 84 h26 m-8-6 8 6 -8 6", fill: "none", stroke: PURPLE, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M324 102 h-26 m8-6 -8 6 8 6", fill: "none", stroke: RED, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 306, y: 168, textAnchor: "middle", fontSize: 12, fontWeight: 700, fill: "#111111", letterSpacing: 2, children: "SWITCH" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 352, y1: 92, x2: 424, y2: 92, stroke: PURPLE, strokeWidth: 2.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M418 86 l10 6 -10 6 Z", fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 390, cy: 92, r: 6, fill: RED }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 388, y: 74, textAnchor: "middle", fontSize: 11, fill: "#585254", children: "settle" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M452 62 L522 34 L592 62 Z", fill: LAV, stroke: PURPLE, strokeWidth: 2.5, strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 462, y: 66, width: 120, height: 8, fill: PURPLE }),
      [474, 506, 538, 562].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x, y: 78, width: 10, height: 44, fill: "#ffffff", stroke: PURPLE, strokeWidth: 2.5 }, x)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 458, y: 126, width: 128, height: 8, fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 522, y: 168, textAnchor: "middle", fontSize: 12, fontWeight: 700, fill: "#111111", letterSpacing: 2, children: "BANK" })
    ] });
  }
  function SecurityShield() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 240 220", role: "img", "aria-label": "Diagram: a shield with a check mark, orbited by a lock, a key and an audited document", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Security and compliance shield" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 120, cy: 112, r: 98, fill: "none", stroke: LAV_STROKE, strokeWidth: 2, strokeDasharray: "3 7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 34 L182 54 v48 c0 46 -31 76 -62 92 c-31 -16 -62 -46 -62 -92 V54 Z", fill: LAV, stroke: PURPLE, strokeWidth: 3, strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 112 l18 18 36-40", fill: "none", stroke: RED, strokeWidth: 7, strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 16, y: 84, width: 26, height: 20, rx: 4, fill: "#ffffff", stroke: PURPLE, strokeWidth: 2.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 84 v-6 a8 8 0 0 1 16 0 v6", fill: "none", stroke: PURPLE, strokeWidth: 2.5 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 192, y: 80, width: 26, height: 32, rx: 4, fill: "#ffffff", stroke: PURPLE, strokeWidth: 2.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 198, y1: 90, x2: 212, y2: 90, stroke: LAV_STROKE, strokeWidth: 2.5, strokeLinecap: "round" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 198, y1: 97, x2: 212, y2: 97, stroke: LAV_STROKE, strokeWidth: 2.5, strokeLinecap: "round" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M198 105 l4 4 7-7", fill: "none", stroke: RED, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 196, cy: 170, r: 8, fill: "none", stroke: PURPLE, strokeWidth: 2.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202 164 l14 -14 m-4 2 4 4 m-8 2 4 4", fill: "none", stroke: PURPLE, strokeWidth: 2.5, strokeLinecap: "round" })
      ] })
    ] });
  }
  function DashboardMock() {
    const bars = [34, 58, 44, 72, 60, 88, 76];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 780 480", role: "img", "aria-label": "Illustration of a payment operations dashboard with volume chart, settlement ring and recent transactions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Payment operations dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "dm-screen", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0", stopColor: "#ffffff" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", stopColor: "#faf8ff" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", { cx: 390, cy: 456, rx: 330, ry: 16, fill: "rgba(20,10,60,0.22)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 70, y: 30, width: 640, height: 420, rx: 18, fill: "url(#dm-screen)", stroke: "#e9e2ff", strokeWidth: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 70, y: 30, width: 640, height: 44, rx: 18, fill: "#f4f0ff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 70, y: 56, width: 640, height: 18, fill: "#f4f0ff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 96, cy: 52, r: 6, fill: RED }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 114, cy: 52, r: 6, fill: "#c9b8ff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 132, cy: 52, r: 6, fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 250, y: 42, width: 280, height: 20, rx: 10, fill: "#ffffff", stroke: "#e3d9ff", strokeWidth: 1.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 70, y: 74, width: 120, height: 376, fill: "#fbfaff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 190, y1: 74, x2: 190, y2: 450, stroke: "#efe9ff", strokeWidth: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 100, cy: 102, r: 10, fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 118, y: 97, width: 52, height: 9, rx: 4.5, fill: "#d9cbff" }),
      [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 92, y: 140 + i * 44, width: 12, height: 12, rx: 4, fill: i === 0 ? PURPLE : "#e3d9ff" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 112, y: 141 + i * 44, width: 58, height: 9, rx: 4.5, fill: i === 0 ? "#b79cff" : "#efe9ff" })
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 214, y: 98, width: 150, height: 10, rx: 5, fill: "#3a2a63" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 214, y: 116, width: 96, height: 8, rx: 4, fill: "#cfc2f2" }),
      [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 214 + i * 168, y: 140, width: 152, height: 70, rx: 12, fill: "#ffffff", stroke: "#eee7ff", strokeWidth: 1.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 230 + i * 168, y: 156, width: 52, height: 8, rx: 4, fill: "#cfc2f2" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 230 + i * 168, y: 172, width: 76, height: 13, rx: 6.5, fill: i === 1 ? RED : PURPLE }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 230 + i * 168, y: 192, width: 40, height: 7, rx: 3.5, fill: "#efe9ff" })
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 214, y: 228, width: 320, height: 198, rx: 12, fill: "#ffffff", stroke: "#eee7ff", strokeWidth: 1.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 230, y: 246, width: 90, height: 10, rx: 5, fill: "#3a2a63" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 240, y1: 396, x2: 510, y2: 396, stroke: "#efe9ff", strokeWidth: 2 }),
      bars.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "rect",
        {
          x: 244 + i * 38,
          y: 396 - h * 1.35,
          width: 20,
          height: h * 1.35,
          rx: 6,
          fill: i === 5 ? RED : i % 2 === 0 ? PURPLE : "#b79cff",
          opacity: i === 5 ? 1 : 0.92 - i * 0.04
        },
        i
      )),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 550, y: 228, width: 160, height: 92, rx: 12, fill: "#ffffff", stroke: "#eee7ff", strokeWidth: 1.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 592, cy: 274, r: 26, fill: "none", stroke: "#efe9ff", strokeWidth: 9 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 592, cy: 274, r: 26, fill: "none", stroke: PURPLE, strokeWidth: 9, strokeDasharray: "118 45", strokeLinecap: "round", transform: "rotate(-90 592 274)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 632, y: 250, width: 62, height: 8, rx: 4, fill: "#cfc2f2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 632, y: 266, width: 48, height: 12, rx: 6, fill: PURPLE }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 632, y: 288, width: 56, height: 7, rx: 3.5, fill: "#efe9ff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 550, y: 334, width: 160, height: 92, rx: 12, fill: "#ffffff", stroke: "#eee7ff", strokeWidth: 1.5 }),
      [0, 1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 568, cy: 358 + i * 26, r: 8, fill: i === 0 ? LAV : "#fbfaff", stroke: "#d9cbff", strokeWidth: 1.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 584, y: 353 + i * 26, width: 70, height: 8, rx: 4, fill: "#e7defc" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 664, y: 353 + i * 26, width: 32, height: 8, rx: 4, fill: i === 1 ? RED : PURPLE, opacity: i === 1 ? 0.85 : 0.55 })
      ] }, i))
    ] });
  }
  function Wave() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { className: "pnp-wave", viewBox: "0 0 1440 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 58 C 320 108 1120 -8 1440 52 L1440 90 L0 90 Z", fill: "#ffffff" }) });
  }
  function DecoA() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "90", height: "90", viewBox: "0 0 90 90", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 10 h26 v10 h-16 v16 h-10 Z", fill: "#8f66ff", opacity: "0.85" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M52 40 l16 0 0 16 Z", fill: "#c9b8ff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 66, cy: 66, r: 7, fill: RED })
    ] });
  }
  function DecoB() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "90", height: "90", viewBox: "0 0 90 90", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 80 h-26 v-10 h16 v-16 h10 Z", fill: "#8f66ff", opacity: "0.85" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 20, y: 20, width: 16, height: 16, rx: 4, fill: "#c9b8ff", transform: "rotate(18 28 28)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: 24, cy: 62, r: 7, fill: RED })
    ] });
  }
  var stack = [
    { name: "Payment orchestration", detail: "Invoices and pay links routed across providers and card rails from one portal, through a single integration." },
    { name: "Card acceptance", detail: "Online card payments with hosted or embedded checkout, 3-D Secure, multi-acquirer routing, and webhook reconciliation." },
    { name: "POS switching", detail: "ISO 8583 authorization and routing for terminal estates, with on-us and off-us policy and remote terminal management." },
    { name: "Fraud controls", detail: "Rules-based risk scoring with clear, explainable decisions your team can review." },
    { name: "Digital wallets", detail: "Multi-pocket wallet experiences for consumers and merchants." },
    { name: "Settlement & reconciliation", detail: "A controlled end of day: settlement totals, splits, and reports your operations team can reconcile." }
  ];
  var assurance = [
    { name: "PCI compliance programs", detail: "Scoping, gap assessment, and audit-readiness through RoC and SAQ validation for merchants, fintechs, and processors." },
    { name: "Security testing", detail: "Vulnerability assessment, application and cloud penetration testing, and red-team exercises with rated findings and a retest." },
    { name: "Governance, risk & compliance", detail: "ISMS implementation to ISO 27001, SOC readiness, and support through regulatory audits." },
    { name: "Security advisory", detail: "Architecture reviews, control assessments, and alignment with central bank and regulator requirements." }
  ];
  var pillars = [
    { number: "01", name: "Strategy", icon: "compass", detail: "Advise and roadmap." },
    { number: "02", name: "Technology", icon: "chip", detail: "Design and build." },
    { number: "03", name: "Security", icon: "lock", detail: "Protect and monitor." },
    { number: "04", name: "Compliance", icon: "clipboard", detail: "Govern and certify." }
  ];
  var industries = [
    { name: "Banking", icon: "bank", detail: "Modernize the core, prove every change, and stay compliant." },
    { name: "Financial institutions", icon: "trend", detail: "From licensing to market launch on a resilient, compliant foundation." },
    { name: "Enterprises", icon: "building", detail: "Connected operations in place of fragmented processes." },
    { name: "Startups & fintechs", icon: "spark", detail: "Turn customer engagement into scalable, recurring payment revenue." }
  ];
  var clients = [
    { src: cib_default, name: "CIB" },
    { src: ldc_default, name: "LDC" },
    { src: flagship_default, name: "Flagship" },
    { src: mbme_pay_default, name: "MBME Pay" },
    { src: octane_default, name: "Octane" },
    { src: dds_technologies_default, name: "DDS Technologies" },
    { src: binary_waves_default, name: "Binary Waves" },
    { src: loy_nova_default, name: "Loy Nova" },
    { src: klivvr_default, name: "Klivvr" },
    { src: khazna_default, name: "Khazna" },
    { src: cashflow_default, name: "Cashflow Digital Payment" },
    { src: see_default, name: "SEE" },
    { src: neo_default, name: "NEO" },
    { src: modupay_default, name: "modupay" },
    { src: cybersigma_default, name: "Cybersigma" },
    { src: shufti_default, name: "Shufti" },
    { src: just2pay_default, name: "Just2Pay" },
    { src: elgameya_default, name: "ElGameya" },
    { src: tal2a_default, name: "TAL2A" },
    { src: paymint_default, name: "Paymint" },
    { src: cashcall_default, name: "Cashcall" },
    { src: easycash_default, name: "eascash" },
    { src: bel_baqy_default, name: "Bel Baqy" }
  ];
  var sectionLinks = [
    { id: "why", label: "Why Plug n Play" },
    { id: "sectors", label: "Sectors" },
    { id: "clients", label: "Clients" }
  ];
  function scrollToId(id2) {
    const el = document.getElementById(id2);
    if (el) el.scrollIntoView({ block: "start" });
  }
  function useReveal(selector) {
    import_react.default.useEffect(() => {
      const els = Array.from(document.querySelectorAll(selector));
      if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((e6) => {
          if (e6.isIntersecting) {
            e6.target.classList.add("is-visible");
            io2.unobserve(e6.target);
          }
        });
      }, { threshold: 0.2 });
      els.forEach((el) => io2.observe(el));
      return () => io2.disconnect();
    }, [selector]);
  }
  function Header2() {
    const [menuOpen, setMenuOpen] = import_react.default.useState(false);
    const [solid, setSolid] = import_react.default.useState(false);
    const close = () => setMenuOpen(false);
    const { pathname } = useLocation();
    const onHome = pathname === "/";
    import_react.default.useEffect(() => {
      const onScroll = () => {
        const hero = document.querySelector(".pnp-hero");
        const threshold = hero ? Math.max(48, hero.getBoundingClientRect().height - 96) : 48;
        setSolid(window.scrollY > threshold);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [pathname]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: solid || menuOpen ? "pnp-header is-solid" : "pnp-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, { className: "pnp-brand", to: "/", "aria-label": "Plug n Play, home", onClick: close, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "pnp-logo-dark", src: logo_mark_default, alt: "Plug n Play" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "pnp-logo-light", src: logo_allwhite_default, alt: "", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: menuOpen ? "pnp-nav is-open" : "pnp-nav", "aria-label": "Pages and sections", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/services", onClick: close, children: "Services" }),
        sectionLinks.map((n) => onHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "pnp-navbtn", onClick: () => {
          close();
          scrollToId(n.id);
        }, children: n.label }, n.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/?section=" + n.id, onClick: close, children: n.label }, n.id))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "pnp-cta-header", href: "mailto:maged@plugnplay-solutions.com", children: "Request demo" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "pnp-burger", "aria-label": menuOpen ? "Close menu" : "Open menu", "aria-expanded": menuOpen, onClick: () => setMenuOpen(!menuOpen), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
        ] })
      ] })
    ] });
  }
  function SiteFooter() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { className: "pnp-sitefooter", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-footer-cta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Let's build the future of digital payments together." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "pnp-cta", href: "mailto:maged@plugnplay-solutions.com", children: "Contact us" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-footer-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-footer-brand", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "pnp-footer-logo", src: logo_allwhite_default, alt: "Plug n Play" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-footer-desc", children: "A specialized digital payments and digital transformation consultancy for financial institutions and enterprises." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "pnp-footer-nav", "aria-label": "Footer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/services", children: "Services" }),
          sectionLinks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/?section=" + n.id, children: n.label }, n.id))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-footer-contact", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "mailto:maged@plugnplay-solutions.com", children: "maged@plugnplay-solutions.com" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cairo, Egypt, serving MEA" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "plugnplay-solutions.com" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-footer-base", children: "\xA9 2026 Plug n Play. All rights reserved." })
    ] });
  }
  function Home() {
    const { search } = useLocation();
    useReveal(".pnp-reveal");
    import_react.default.useEffect(() => {
      const id2 = new URLSearchParams(search).get("section");
      if (id2) scrollToId(id2);
      else window.scrollTo(0, 0);
    }, [search]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-hero pnp-hero--ticker", id: "top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-eyebrow", children: "Digital payments & transformation consultancy" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "pnp-h1", children: "Payments that snap into place" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-sub", children: "Plug n Play helps financial institutions and enterprises scale securely, govern effectively, and innovate with confidence." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-ctas", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "pnp-cta", href: "mailto:maged@plugnplay-solutions.com", children: "Contact us" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "pnp-cta-ghost", to: "/services", children: "Explore services" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-hero-visual", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-deco pnp-deco--a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecoA, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-deco pnp-deco--b", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecoB, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMock, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", id: "services", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-section-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-pill", children: "What we offer" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-h2", children: "Comprehensive capabilities across the payment value chain" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-offer-cards", children: offerCards.map((o, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.red ? "pnp-offer-card pnp-offer-card--red pnp-reveal" : "pnp-offer-card pnp-reveal", style: { "--reveal-delay": idx * 90 + "ms" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: o.icon }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-offer-title", children: o.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-card-detail", children: o.detail }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "pnp-more", to: "/services?focus=" + o.more, children: "Learn more" })
        ] }, o.name)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-offer-foot", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "pnp-offer-pill", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "flag" }),
          "Plug & Play Digital Payment Architecture"
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", id: "why", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-why-banner", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-eyebrow", children: "Why Plug n Play?" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-why-title", children: "Plug & play payment architecture, built for speed and scale" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-why-intro", children: "Instead of rigid, monolithic legacy systems, Plug n Play delivers pre-built, compliant payment and security building blocks. Pick only the capabilities you need, connect via unified APIs, and launch in record time." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-why-cards", children: advantageCards.map((a, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: a.red ? "pnp-why-card pnp-why-card--red pnp-reveal" : "pnp-why-card pnp-reveal", style: { "--reveal-delay": idx * 90 + "ms" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: a.icon }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-why-card-title", children: a.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-card-detail", children: a.detail }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-why-card-foot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-tag", children: a.tag }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-arrow", "aria-hidden": "true", children: "\u2192" })
          ] })
        ] }, a.number)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-eco-bar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-eco-pill", children: "One Unified Ecosystem" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-eco-flow", children: "Select Your Modules \u2192 Integrate via Single API \u2192 Scale Without Limits" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-section-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-pill", children: "How we work" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-h2", children: "Strategy to certification, under one roof" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-intro-cards", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-intro-card pnp-reveal", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "compass" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-intro-title", children: "Core Positioning" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "pnp-card-detail", children: [
              "Plug n Play is a specialized Digital Payments and Digital Transformation consulting firm enabling financial institutions and enterprises to ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-intro-mark", children: "scale securely, govern effectively, and innovate sustainably." })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-intro-card pnp-intro-card--red pnp-reveal", style: { "--reveal-delay": "90ms" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "modules" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-intro-title", children: "Integrated Delivery Model" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "pnp-card-detail", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-intro-mark", children: "We advise, design, implement, and govern end-to-end" }),
              " payment and transformation initiatives, uniting Strategy, Technology, Security, and Compliance under one roof."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-pillars", children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-pillar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: p.icon }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-num", children: p.number }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-pillar-name", children: p.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-pillar-detail", children: p.detail })
        ] }, p.number)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", id: "sectors", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-section-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-pill", children: "Who we serve" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-h2", children: "Sectors we build for" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-serve", children: industries.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-serve-item pnp-reveal", style: { "--reveal-delay": idx * 90 + "ms" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: i.icon }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-serve-name", children: i.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-serve-detail", children: i.detail })
        ] }, i.name)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", id: "purpose", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-section-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-pill", children: "Our purpose" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-h2", children: "Driving sustainable financial modernization" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-purpose-cards", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-purpose-card pnp-purpose-card--vision pnp-reveal", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "pnp-purpose-chip", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "eye" }),
              "Our Vision"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "pnp-purpose-text", children: [
              "To empower enterprises and communities across the ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-mark", children: "MEA region and beyond" }),
              " with seamless digital payments and smart business solutions that drive sustainable global growth."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-tag", children: "Regional Leadership \xB7 Global Standards" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-purpose-card pnp-purpose-card--mission pnp-reveal", style: { "--reveal-delay": "90ms" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "pnp-purpose-chip", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "target" }),
              "Our Mission"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "pnp-purpose-text", children: [
              "To help institutions and businesses modernize digital payments through specialized consulting and managed services, delivering ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-mark", children: "measurable ROI, trusted governance, and scalable impact." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-tag", children: "Consultancy + Managed Services Excellence" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-purpose-bar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-pill pnp-purpose-pill--red", children: "Strategy-Led Execution" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-pill pnp-purpose-pill--white", children: "Regulatory Excellence" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-purpose-pill pnp-purpose-pill--purple", children: "End-to-End Accountability" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "pnp-section", id: "clients", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-section-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pnp-pill", children: "Clients & partners" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pnp-h2", children: "Trusted across the payments ecosystem" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-marquee", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-marquee-track", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-marquee-group", children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-cell", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: c.src, alt: c.name, title: c.name }) }, c.name)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-marquee-group", "aria-hidden": "true", children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-cell", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: c.src, alt: "" }) }, c.name)) })
        ] }) })
      ] })
    ] });
  }
  function ServicesPage() {
    const { search } = useLocation();
    import_react.default.useEffect(() => {
      const focus = new URLSearchParams(search).get("focus");
      if (focus) scrollToId("svc-" + focus);
      else window.scrollTo(0, 0);
    }, [search]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-hero pnp-hero--compact", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-eyebrow", children: "Services" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "pnp-h1", children: "What we do, in detail" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-sub", children: "Four practices across consulting, payments, security, and software, delivered with specialized delivery partners." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "pnp-section", id: "svc-consultancy", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-svc", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "consult" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-svc-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-card-title", children: "Business & IT consultancy" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-card-detail", children: practices[0].detail })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "pnp-section", id: "svc-payments", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-stack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-stack-title", children: "Payment system solutions" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-stack-intro", children: practices[1].detail }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { className: "pnp-figure", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsFlow, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-stackgrid", children: stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-stack-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "pnp-stack-name", children: s.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-stack-detail", children: s.detail })
        ] }, s.name)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "pnp-section", id: "svc-security", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-stack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-stack-title", children: "Security & compliance" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-stack-intro", children: practices[2].detail }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { className: "pnp-figure pnp-figure--shield", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecurityShield, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-stackgrid pnp-stackgrid--two", children: assurance.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-stack-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "pnp-stack-name", children: s.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-stack-detail", children: s.detail })
        ] }, s.name)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "pnp-section", id: "svc-software", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-svc", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pnp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineIcon, { name: "code" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-svc-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pnp-card-title", children: "Client software solutions" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pnp-card-detail", children: practices[3].detail })
        ] })
      ] }) })
    ] });
  }
  function App() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FileCard, { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pnp-page", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { path: "/services", element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPage, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, { children: "Draft for review, prepared 27 Nov 2026 from the Plug n Play company profile. Not yet published on plugnplay-solutions.com." })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/chunk-HT4INDD5.mjs:
react-router/dist/development/dom-export.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
