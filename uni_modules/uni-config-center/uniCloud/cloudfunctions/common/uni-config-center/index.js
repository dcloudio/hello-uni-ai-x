"use strict";
var t = require("fs"),
  r = require("path");
function e(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
var n = e(t),
  o = e(r),
  i =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
            ? self
            : {};
var u = (function (t) {
  var r = { exports: {} };
  return t(r, r.exports), r.exports;
})(function (t, r) {
  var e = "__lodash_hash_undefined__",
    n = 9007199254740991,
    o = "[object Arguments]",
    u = "[object Function]",
    c = "[object Object]",
    a = /^\[object .+?Constructor\]$/,
    f = /^(?:0|[1-9]\d*)$/,
    s = {};
  (s["[object Float32Array]"] =
    s["[object Float64Array]"] =
    s["[object Int8Array]"] =
    s["[object Int16Array]"] =
    s["[object Int32Array]"] =
    s["[object Uint8Array]"] =
    s["[object Uint8ClampedArray]"] =
    s["[object Uint16Array]"] =
    s["[object Uint32Array]"] =
      !0),
    (s[o] =
      s["[object Array]"] =
      s["[object ArrayBuffer]"] =
      s["[object Boolean]"] =
      s["[object DataView]"] =
      s["[object Date]"] =
      s["[object Error]"] =
      s[u] =
      s["[object Map]"] =
      s["[object Number]"] =
      s[c] =
      s["[object RegExp]"] =
      s["[object Set]"] =
      s["[object String]"] =
      s["[object WeakMap]"] =
        !1);
  var l = "object" == typeof i && i && i.Object === Object && i,
    h = "object" == typeof self && self && self.Object === Object && self,
    p = l || h || Function("return this")(),
    _ = r && !r.nodeType && r,
    v = _ && t && !t.nodeType && t,
    d = v && v.exports === _,
    y = d && l.process,
    g = (function () {
      try {
        var t = v && v.require && v.require("util").types;
        return t || (y && y.binding && y.binding("util"));
      } catch (t) {}
    })(),
    b = g && g.isTypedArray;
  function j(t, r, e) {
    switch (e.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, e[0]);
      case 2:
        return t.call(r, e[0], e[1]);
      case 3:
        return t.call(r, e[0], e[1], e[2]);
    }
    return t.apply(r, e);
  }
  var w,
    O,
    m,
    A = Array.prototype,
    z = Function.prototype,
    M = Object.prototype,
    x = p["__core-js_shared__"],
    C = z.toString,
    F = M.hasOwnProperty,
    U = (w = /[^.]+$/.exec((x && x.keys && x.keys.IE_PROTO) || ""))
      ? "Symbol(src)_1." + w
      : "",
    S = M.toString,
    I = C.call(Object),
    P = RegExp(
      "^" +
        C.call(F)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    ),
    T = d ? p.Buffer : void 0,
    q = p.Symbol,
    E = p.Uint8Array,
    $ = T ? T.allocUnsafe : void 0,
    D =
      ((O = Object.getPrototypeOf),
      (m = Object),
      function (t) {
        return O(m(t));
      }),
    k = Object.create,
    B = M.propertyIsEnumerable,
    N = A.splice,
    L = q ? q.toStringTag : void 0,
    R = (function () {
      try {
        var t = vt(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    })(),
    G = T ? T.isBuffer : void 0,
    V = Math.max,
    W = Date.now,
    H = vt(p, "Map"),
    J = vt(Object, "create"),
    K = (function () {
      function t() {}
      return function (r) {
        if (!xt(r)) return {};
        if (k) return k(r);
        t.prototype = r;
        var e = new t();
        return (t.prototype = void 0), e;
      };
    })();
  function Q(t) {
    var r = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function X(t) {
    var r = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function Y(t) {
    var r = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function Z(t) {
    var r = (this.__data__ = new X(t));
    this.size = r.size;
  }
  function tt(t, r) {
    var e = Ot(t),
      n = !e && wt(t),
      o = !e && !n && At(t),
      i = !e && !n && !o && Ft(t),
      u = e || n || o || i,
      c = u
        ? (function (t, r) {
            for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
            return n;
          })(t.length, String)
        : [],
      a = c.length;
    for (var f in t)
      (!r && !F.call(t, f)) ||
        (u &&
          ("length" == f ||
            (o && ("offset" == f || "parent" == f)) ||
            (i && ("buffer" == f || "byteLength" == f || "byteOffset" == f)) ||
            dt(f, a))) ||
        c.push(f);
    return c;
  }
  function rt(t, r, e) {
    ((void 0 !== e && !jt(t[r], e)) || (void 0 === e && !(r in t))) &&
      ot(t, r, e);
  }
  function et(t, r, e) {
    var n = t[r];
    (F.call(t, r) && jt(n, e) && (void 0 !== e || r in t)) || ot(t, r, e);
  }
  function nt(t, r) {
    for (var e = t.length; e--; ) if (jt(t[e][0], r)) return e;
    return -1;
  }
  function ot(t, r, e) {
    "__proto__" == r && R
      ? R(t, r, { configurable: !0, enumerable: !0, value: e, writable: !0 })
      : (t[r] = e);
  }
  (Q.prototype.clear = function () {
    (this.__data__ = J ? J(null) : {}), (this.size = 0);
  }),
    (Q.prototype.delete = function (t) {
      var r = this.has(t) && delete this.__data__[t];
      return (this.size -= r ? 1 : 0), r;
    }),
    (Q.prototype.get = function (t) {
      var r = this.__data__;
      if (J) {
        var n = r[t];
        return n === e ? void 0 : n;
      }
      return F.call(r, t) ? r[t] : void 0;
    }),
    (Q.prototype.has = function (t) {
      var r = this.__data__;
      return J ? void 0 !== r[t] : F.call(r, t);
    }),
    (Q.prototype.set = function (t, r) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = J && void 0 === r ? e : r),
        this
      );
    }),
    (X.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
    (X.prototype.delete = function (t) {
      var r = this.__data__,
        e = nt(r, t);
      return (
        !(e < 0) &&
        (e == r.length - 1 ? r.pop() : N.call(r, e, 1), --this.size, !0)
      );
    }),
    (X.prototype.get = function (t) {
      var r = this.__data__,
        e = nt(r, t);
      return e < 0 ? void 0 : r[e][1];
    }),
    (X.prototype.has = function (t) {
      return nt(this.__data__, t) > -1;
    }),
    (X.prototype.set = function (t, r) {
      var e = this.__data__,
        n = nt(e, t);
      return n < 0 ? (++this.size, e.push([t, r])) : (e[n][1] = r), this;
    }),
    (Y.prototype.clear = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new Q(),
          map: new (H || X)(),
          string: new Q(),
        });
    }),
    (Y.prototype.delete = function (t) {
      var r = _t(this, t).delete(t);
      return (this.size -= r ? 1 : 0), r;
    }),
    (Y.prototype.get = function (t) {
      return _t(this, t).get(t);
    }),
    (Y.prototype.has = function (t) {
      return _t(this, t).has(t);
    }),
    (Y.prototype.set = function (t, r) {
      var e = _t(this, t),
        n = e.size;
      return e.set(t, r), (this.size += e.size == n ? 0 : 1), this;
    }),
    (Z.prototype.clear = function () {
      (this.__data__ = new X()), (this.size = 0);
    }),
    (Z.prototype.delete = function (t) {
      var r = this.__data__,
        e = r.delete(t);
      return (this.size = r.size), e;
    }),
    (Z.prototype.get = function (t) {
      return this.__data__.get(t);
    }),
    (Z.prototype.has = function (t) {
      return this.__data__.has(t);
    }),
    (Z.prototype.set = function (t, r) {
      var e = this.__data__;
      if (e instanceof X) {
        var n = e.__data__;
        if (!H || n.length < 199)
          return n.push([t, r]), (this.size = ++e.size), this;
        e = this.__data__ = new Y(n);
      }
      return e.set(t, r), (this.size = e.size), this;
    });
  var it,
    ut = function (t, r, e) {
      for (var n = -1, o = Object(t), i = e(t), u = i.length; u--; ) {
        var c = i[it ? u : ++n];
        if (!1 === r(o[c], c, o)) break;
      }
      return t;
    };
  function ct(t) {
    return null == t
      ? void 0 === t
        ? "[object Undefined]"
        : "[object Null]"
      : L && L in Object(t)
        ? (function (t) {
            var r = F.call(t, L),
              e = t[L];
            try {
              t[L] = void 0;
              var n = !0;
            } catch (t) {}
            var o = S.call(t);
            n && (r ? (t[L] = e) : delete t[L]);
            return o;
          })(t)
        : (function (t) {
            return S.call(t);
          })(t);
  }
  function at(t) {
    return Ct(t) && ct(t) == o;
  }
  function ft(t) {
    return (
      !(
        !xt(t) ||
        (function (t) {
          return !!U && U in t;
        })(t)
      ) &&
      (zt(t) ? P : a).test(
        (function (t) {
          if (null != t) {
            try {
              return C.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        })(t),
      )
    );
  }
  function st(t) {
    if (!xt(t))
      return (function (t) {
        var r = [];
        if (null != t) for (var e in Object(t)) r.push(e);
        return r;
      })(t);
    var r = yt(t),
      e = [];
    for (var n in t) ("constructor" != n || (!r && F.call(t, n))) && e.push(n);
    return e;
  }
  function lt(t, r, e, n, o) {
    t !== r &&
      ut(
        r,
        function (i, u) {
          if ((o || (o = new Z()), xt(i)))
            !(function (t, r, e, n, o, i, u) {
              var a = gt(t, e),
                f = gt(r, e),
                s = u.get(f);
              if (s) return void rt(t, e, s);
              var l = i ? i(a, f, e + "", t, r, u) : void 0,
                h = void 0 === l;
              if (h) {
                var p = Ot(f),
                  _ = !p && At(f),
                  v = !p && !_ && Ft(f);
                (l = f),
                  p || _ || v
                    ? Ot(a)
                      ? (l = a)
                      : Ct((j = a)) && mt(j)
                        ? (l = (function (t, r) {
                            var e = -1,
                              n = t.length;
                            r || (r = Array(n));
                            for (; ++e < n; ) r[e] = t[e];
                            return r;
                          })(a))
                        : _
                          ? ((h = !1),
                            (l = (function (t, r) {
                              if (r) return t.slice();
                              var e = t.length,
                                n = $ ? $(e) : new t.constructor(e);
                              return t.copy(n), n;
                            })(f, !0)))
                          : v
                            ? ((h = !1),
                              (d = f),
                              (y = !0
                                ? ((g = d.buffer),
                                  (b = new g.constructor(g.byteLength)),
                                  new E(b).set(new E(g)),
                                  b)
                                : d.buffer),
                              (l = new d.constructor(
                                y,
                                d.byteOffset,
                                d.length,
                              )))
                            : (l = [])
                    : (function (t) {
                          if (!Ct(t) || ct(t) != c) return !1;
                          var r = D(t);
                          if (null === r) return !0;
                          var e = F.call(r, "constructor") && r.constructor;
                          return (
                            "function" == typeof e &&
                            e instanceof e &&
                            C.call(e) == I
                          );
                        })(f) || wt(f)
                      ? ((l = a),
                        wt(a)
                          ? (l = (function (t) {
                              return (function (t, r, e, n) {
                                var o = !e;
                                e || (e = {});
                                var i = -1,
                                  u = r.length;
                                for (; ++i < u; ) {
                                  var c = r[i],
                                    a = n ? n(e[c], t[c], c, e, t) : void 0;
                                  void 0 === a && (a = t[c]),
                                    o ? ot(e, c, a) : et(e, c, a);
                                }
                                return e;
                              })(t, Ut(t));
                            })(a))
                          : (xt(a) && !zt(a)) ||
                            (l = (function (t) {
                              return "function" != typeof t.constructor || yt(t)
                                ? {}
                                : K(D(t));
                            })(f)))
                      : (h = !1);
              }
              var d, y, g, b;
              var j;
              h && (u.set(f, l), o(l, f, n, i, u), u.delete(f));
              rt(t, e, l);
            })(t, r, u, e, lt, n, o);
          else {
            var a = n ? n(gt(t, u), i, u + "", t, r, o) : void 0;
            void 0 === a && (a = i), rt(t, u, a);
          }
        },
        Ut,
      );
  }
  function ht(t, r) {
    return bt(
      (function (t, r, e) {
        return (
          (r = V(void 0 === r ? t.length - 1 : r, 0)),
          function () {
            for (
              var n = arguments, o = -1, i = V(n.length - r, 0), u = Array(i);
              ++o < i;

            )
              u[o] = n[r + o];
            o = -1;
            for (var c = Array(r + 1); ++o < r; ) c[o] = n[o];
            return (c[r] = e(u)), j(t, this, c);
          }
        );
      })(t, r, Pt),
      t + "",
    );
  }
  var pt = R
    ? function (t, r) {
        return R(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value:
            ((e = r),
            function () {
              return e;
            }),
          writable: !0,
        });
        var e;
      }
    : Pt;
  function _t(t, r) {
    var e,
      n,
      o = t.__data__;
    return (
      "string" == (n = typeof (e = r)) ||
      "number" == n ||
      "symbol" == n ||
      "boolean" == n
        ? "__proto__" !== e
        : null === e
    )
      ? o["string" == typeof r ? "string" : "hash"]
      : o.map;
  }
  function vt(t, r) {
    var e = (function (t, r) {
      return null == t ? void 0 : t[r];
    })(t, r);
    return ft(e) ? e : void 0;
  }
  function dt(t, r) {
    var e = typeof t;
    return (
      !!(r = null == r ? n : r) &&
      ("number" == e || ("symbol" != e && f.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < r
    );
  }
  function yt(t) {
    var r = t && t.constructor;
    return t === (("function" == typeof r && r.prototype) || M);
  }
  function gt(t, r) {
    if (("constructor" !== r || "function" != typeof t[r]) && "__proto__" != r)
      return t[r];
  }
  var bt = (function (t) {
    var r = 0,
      e = 0;
    return function () {
      var n = W(),
        o = 16 - (n - e);
      if (((e = n), o > 0)) {
        if (++r >= 800) return arguments[0];
      } else r = 0;
      return t.apply(void 0, arguments);
    };
  })(pt);
  function jt(t, r) {
    return t === r || (t != t && r != r);
  }
  var wt = at(
      (function () {
        return arguments;
      })(),
    )
      ? at
      : function (t) {
          return Ct(t) && F.call(t, "callee") && !B.call(t, "callee");
        },
    Ot = Array.isArray;
  function mt(t) {
    return null != t && Mt(t.length) && !zt(t);
  }
  var At =
    G ||
    function () {
      return !1;
    };
  function zt(t) {
    if (!xt(t)) return !1;
    var r = ct(t);
    return (
      r == u ||
      "[object GeneratorFunction]" == r ||
      "[object AsyncFunction]" == r ||
      "[object Proxy]" == r
    );
  }
  function Mt(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
  }
  function xt(t) {
    var r = typeof t;
    return null != t && ("object" == r || "function" == r);
  }
  function Ct(t) {
    return null != t && "object" == typeof t;
  }
  var Ft = b
    ? (function (t) {
        return function (r) {
          return t(r);
        };
      })(b)
    : function (t) {
        return Ct(t) && Mt(t.length) && !!s[ct(t)];
      };
  function Ut(t) {
    return mt(t) ? tt(t, !0) : st(t);
  }
  var St,
    It =
      ((St = function (t, r, e) {
        lt(t, r, e);
      }),
      ht(function (t, r) {
        var e = -1,
          n = r.length,
          o = n > 1 ? r[n - 1] : void 0,
          i = n > 2 ? r[2] : void 0;
        for (
          o = St.length > 3 && "function" == typeof o ? (n--, o) : void 0,
            i &&
              (function (t, r, e) {
                if (!xt(e)) return !1;
                var n = typeof r;
                return (
                  !!("number" == n
                    ? mt(e) && dt(r, e.length)
                    : "string" == n && (r in e)) && jt(e[r], t)
                );
              })(r[0], r[1], i) &&
              ((o = n < 3 ? void 0 : o), (n = 1)),
            t = Object(t);
          ++e < n;

        ) {
          var u = r[e];
          u && St(t, u, e, o);
        }
        return t;
      }));
  function Pt(t) {
    return t;
  }
  t.exports = It;
});
const c = Object.prototype.hasOwnProperty,
  a = (t, r) => c.call(t, r);
class f {
  constructor({ pluginId: t, defaultConfig: r = {}, customMerge: e, root: n }) {
    (this.pluginId = t),
      (this.defaultConfig = r),
      (this.pluginConfigPath = o.default.resolve(n || __dirname, t)),
      (this.customMerge = e),
      (this._config = void 0);
  }
  resolve(t) {
    return o.default.resolve(this.pluginConfigPath, t);
  }
  hasFile(t) {
    return n.default.existsSync(this.resolve(t));
  }
  requireFile(t) {
    try {
      return require(this.resolve(t));
    } catch (t) {
      if ("MODULE_NOT_FOUND" === t.code) return;
      throw t;
    }
  }
  _getUserConfig() {
    return this.requireFile("config.json");
  }
  config(t, r) {
    if (!this._config) {
      const t = this._getUserConfig();
      this._config = Array.isArray(t)
        ? t
        : (this.customMerge || u)(this.defaultConfig, t);
    }
    let e = this._config;
    return t
      ? (function (t, r, e) {
          if ("number" == typeof r) return t[r];
          if ("symbol" == typeof r) return a(t, r) ? t[r] : e;
          const n =
            "string" != typeof (o = r)
              ? o
              : o
                  .split(".")
                  .reduce(
                    (t, r) => (
                      r.split(/\[([^}]+)\]/g).forEach((r) => r && t.push(r)), t
                    ),
                    [],
                  );
          var o;
          let i = t;
          for (let t = 0; t < n.length; t++) {
            const r = n[t];
            if (!a(i, r)) return e;
            i = i[r];
          }
          return i;
        })(e, t, r)
      : e;
  }
}
const s = new (class {
  constructor() {
    this._configMap = new Map();
  }
  plugin({
    pluginId: t,
    defaultConfig: r,
    customMerge: e,
    root: n = __dirname,
    cache: o = !0,
  }) {
    if (this._configMap.has(t) && o) return this._configMap.get(t);
    const i = new f({ pluginId: t, defaultConfig: r, customMerge: e, root: n });
    return o && this._configMap.set(t, i), i;
  }
})();
var l = s.plugin.bind(s);
module.exports = l;
