var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// js/d3.v7.js
var require_d3_v7 = __commonJS({
  "js/d3.v7.js"(exports, module) {
    !function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {});
    }(exports, function(t) {
      "use strict";
      function n(t2, n2) {
        return null == t2 || null == n2 ? NaN : t2 < n2 ? -1 : t2 > n2 ? 1 : t2 >= n2 ? 0 : NaN;
      }
      function e(t2, n2) {
        return null == t2 || null == n2 ? NaN : n2 < t2 ? -1 : n2 > t2 ? 1 : n2 >= t2 ? 0 : NaN;
      }
      function r(t2) {
        let r2, o2, a2;
        function u2(t3, n2, e2 = 0, i2 = t3.length) {
          if (e2 < i2) {
            if (0 !== r2(n2, n2))
              return i2;
            do {
              const r3 = e2 + i2 >>> 1;
              o2(t3[r3], n2) < 0 ? e2 = r3 + 1 : i2 = r3;
            } while (e2 < i2);
          }
          return e2;
        }
        return 2 !== t2.length ? (r2 = n, o2 = (e2, r3) => n(t2(e2), r3), a2 = (n2, e2) => t2(n2) - e2) : (r2 = t2 === n || t2 === e ? t2 : i, o2 = t2, a2 = t2), { left: u2, center: function(t3, n2, e2 = 0, r3 = t3.length) {
          const i2 = u2(t3, n2, e2, r3 - 1);
          return i2 > e2 && a2(t3[i2 - 1], n2) > -a2(t3[i2], n2) ? i2 - 1 : i2;
        }, right: function(t3, n2, e2 = 0, i2 = t3.length) {
          if (e2 < i2) {
            if (0 !== r2(n2, n2))
              return i2;
            do {
              const r3 = e2 + i2 >>> 1;
              o2(t3[r3], n2) <= 0 ? e2 = r3 + 1 : i2 = r3;
            } while (e2 < i2);
          }
          return e2;
        } };
      }
      function i() {
        return 0;
      }
      function o(t2) {
        return null === t2 ? NaN : +t2;
      }
      const a = r(n), u = a.right, c = a.left, f = r(o).center;
      var s = u;
      const l = d(y), h = d(function(t2) {
        const n2 = y(t2);
        return (t3, e2, r2, i2, o2) => {
          n2(t3, e2, (r2 <<= 2) + 0, (i2 <<= 2) + 0, o2 <<= 2), n2(t3, e2, r2 + 1, i2 + 1, o2), n2(t3, e2, r2 + 2, i2 + 2, o2), n2(t3, e2, r2 + 3, i2 + 3, o2);
        };
      });
      function d(t2) {
        return function(n2, e2, r2 = e2) {
          if (!((e2 = +e2) >= 0))
            throw new RangeError("invalid rx");
          if (!((r2 = +r2) >= 0))
            throw new RangeError("invalid ry");
          let { data: i2, width: o2, height: a2 } = n2;
          if (!((o2 = Math.floor(o2)) >= 0))
            throw new RangeError("invalid width");
          if (!((a2 = Math.floor(void 0 !== a2 ? a2 : i2.length / o2)) >= 0))
            throw new RangeError("invalid height");
          if (!o2 || !a2 || !e2 && !r2)
            return n2;
          const u2 = e2 && t2(e2), c2 = r2 && t2(r2), f2 = i2.slice();
          return u2 && c2 ? (p(u2, f2, i2, o2, a2), p(u2, i2, f2, o2, a2), p(u2, f2, i2, o2, a2), g(c2, i2, f2, o2, a2), g(c2, f2, i2, o2, a2), g(c2, i2, f2, o2, a2)) : u2 ? (p(u2, i2, f2, o2, a2), p(u2, f2, i2, o2, a2), p(u2, i2, f2, o2, a2)) : c2 && (g(c2, i2, f2, o2, a2), g(c2, f2, i2, o2, a2), g(c2, i2, f2, o2, a2)), n2;
        };
      }
      function p(t2, n2, e2, r2, i2) {
        for (let o2 = 0, a2 = r2 * i2; o2 < a2; )
          t2(n2, e2, o2, o2 += r2, 1);
      }
      function g(t2, n2, e2, r2, i2) {
        for (let o2 = 0, a2 = r2 * i2; o2 < r2; ++o2)
          t2(n2, e2, o2, o2 + a2, r2);
      }
      function y(t2) {
        const n2 = Math.floor(t2);
        if (n2 === t2)
          return function(t3) {
            const n3 = 2 * t3 + 1;
            return (e3, r3, i2, o2, a2) => {
              if (!((o2 -= a2) >= i2))
                return;
              let u2 = t3 * r3[i2];
              const c2 = a2 * t3;
              for (let t4 = i2, n4 = i2 + c2; t4 < n4; t4 += a2)
                u2 += r3[Math.min(o2, t4)];
              for (let t4 = i2, f2 = o2; t4 <= f2; t4 += a2)
                u2 += r3[Math.min(o2, t4 + c2)], e3[t4] = u2 / n3, u2 -= r3[Math.max(i2, t4 - c2)];
            };
          }(t2);
        const e2 = t2 - n2, r2 = 2 * t2 + 1;
        return (t3, i2, o2, a2, u2) => {
          if (!((a2 -= u2) >= o2))
            return;
          let c2 = n2 * i2[o2];
          const f2 = u2 * n2, s2 = f2 + u2;
          for (let t4 = o2, n3 = o2 + f2; t4 < n3; t4 += u2)
            c2 += i2[Math.min(a2, t4)];
          for (let n3 = o2, l2 = a2; n3 <= l2; n3 += u2)
            c2 += i2[Math.min(a2, n3 + f2)], t3[n3] = (c2 + e2 * (i2[Math.max(o2, n3 - s2)] + i2[Math.min(a2, n3 + s2)])) / r2, c2 -= i2[Math.max(o2, n3 - f2)];
        };
      }
      function v(t2, n2) {
        let e2 = 0;
        if (void 0 === n2)
          for (let n3 of t2)
            null != n3 && (n3 = +n3) >= n3 && ++e2;
        else {
          let r2 = -1;
          for (let i2 of t2)
            null != (i2 = n2(i2, ++r2, t2)) && (i2 = +i2) >= i2 && ++e2;
        }
        return e2;
      }
      function _(t2) {
        return 0 | t2.length;
      }
      function b(t2) {
        return !(t2 > 0);
      }
      function m(t2) {
        return "object" != typeof t2 || "length" in t2 ? t2 : Array.from(t2);
      }
      function x(t2, n2) {
        let e2, r2 = 0, i2 = 0, o2 = 0;
        if (void 0 === n2)
          for (let n3 of t2)
            null != n3 && (n3 = +n3) >= n3 && (e2 = n3 - i2, i2 += e2 / ++r2, o2 += e2 * (n3 - i2));
        else {
          let a2 = -1;
          for (let u2 of t2)
            null != (u2 = n2(u2, ++a2, t2)) && (u2 = +u2) >= u2 && (e2 = u2 - i2, i2 += e2 / ++r2, o2 += e2 * (u2 - i2));
        }
        if (r2 > 1)
          return o2 / (r2 - 1);
      }
      function w(t2, n2) {
        const e2 = x(t2, n2);
        return e2 ? Math.sqrt(e2) : e2;
      }
      function M(t2, n2) {
        let e2, r2;
        if (void 0 === n2)
          for (const n3 of t2)
            null != n3 && (void 0 === e2 ? n3 >= n3 && (e2 = r2 = n3) : (e2 > n3 && (e2 = n3), r2 < n3 && (r2 = n3)));
        else {
          let i2 = -1;
          for (let o2 of t2)
            null != (o2 = n2(o2, ++i2, t2)) && (void 0 === e2 ? o2 >= o2 && (e2 = r2 = o2) : (e2 > o2 && (e2 = o2), r2 < o2 && (r2 = o2)));
        }
        return [e2, r2];
      }
      class T {
        constructor() {
          this._partials = new Float64Array(32), this._n = 0;
        }
        add(t2) {
          const n2 = this._partials;
          let e2 = 0;
          for (let r2 = 0; r2 < this._n && r2 < 32; r2++) {
            const i2 = n2[r2], o2 = t2 + i2, a2 = Math.abs(t2) < Math.abs(i2) ? t2 - (o2 - i2) : i2 - (o2 - t2);
            a2 && (n2[e2++] = a2), t2 = o2;
          }
          return n2[e2] = t2, this._n = e2 + 1, this;
        }
        valueOf() {
          const t2 = this._partials;
          let n2, e2, r2, i2 = this._n, o2 = 0;
          if (i2 > 0) {
            for (o2 = t2[--i2]; i2 > 0 && (n2 = o2, e2 = t2[--i2], o2 = n2 + e2, r2 = e2 - (o2 - n2), !r2); )
              ;
            i2 > 0 && (r2 < 0 && t2[i2 - 1] < 0 || r2 > 0 && t2[i2 - 1] > 0) && (e2 = 2 * r2, n2 = o2 + e2, e2 == n2 - o2 && (o2 = n2));
          }
          return o2;
        }
      }
      class InternMap extends Map {
        constructor(t2, n2 = N) {
          if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n2 } }), null != t2)
            for (const [n3, e2] of t2)
              this.set(n3, e2);
        }
        get(t2) {
          return super.get(A(this, t2));
        }
        has(t2) {
          return super.has(A(this, t2));
        }
        set(t2, n2) {
          return super.set(S(this, t2), n2);
        }
        delete(t2) {
          return super.delete(E(this, t2));
        }
      }
      class InternSet extends Set {
        constructor(t2, n2 = N) {
          if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n2 } }), null != t2)
            for (const n3 of t2)
              this.add(n3);
        }
        has(t2) {
          return super.has(A(this, t2));
        }
        add(t2) {
          return super.add(S(this, t2));
        }
        delete(t2) {
          return super.delete(E(this, t2));
        }
      }
      function A({ _intern: t2, _key: n2 }, e2) {
        const r2 = n2(e2);
        return t2.has(r2) ? t2.get(r2) : e2;
      }
      function S({ _intern: t2, _key: n2 }, e2) {
        const r2 = n2(e2);
        return t2.has(r2) ? t2.get(r2) : (t2.set(r2, e2), e2);
      }
      function E({ _intern: t2, _key: n2 }, e2) {
        const r2 = n2(e2);
        return t2.has(r2) && (e2 = t2.get(r2), t2.delete(r2)), e2;
      }
      function N(t2) {
        return null !== t2 && "object" == typeof t2 ? t2.valueOf() : t2;
      }
      function k(t2) {
        return t2;
      }
      function C(t2, ...n2) {
        return F(t2, k, k, n2);
      }
      function P(t2, ...n2) {
        return F(t2, Array.from, k, n2);
      }
      function z(t2, n2) {
        for (let e2 = 1, r2 = n2.length; e2 < r2; ++e2)
          t2 = t2.flatMap((t3) => t3.pop().map(([n3, e3]) => [...t3, n3, e3]));
        return t2;
      }
      function $(t2, n2, ...e2) {
        return F(t2, k, n2, e2);
      }
      function D(t2, n2, ...e2) {
        return F(t2, Array.from, n2, e2);
      }
      function R(t2) {
        if (1 !== t2.length)
          throw new Error("duplicate key");
        return t2[0];
      }
      function F(t2, n2, e2, r2) {
        return function t3(i2, o2) {
          if (o2 >= r2.length)
            return e2(i2);
          const a2 = new InternMap(), u2 = r2[o2++];
          let c2 = -1;
          for (const t4 of i2) {
            const n3 = u2(t4, ++c2, i2), e3 = a2.get(n3);
            e3 ? e3.push(t4) : a2.set(n3, [t4]);
          }
          for (const [n3, e3] of a2)
            a2.set(n3, t3(e3, o2));
          return n2(a2);
        }(t2, 0);
      }
      function q(t2, n2) {
        return Array.from(n2, (n3) => t2[n3]);
      }
      function U(t2, ...n2) {
        if ("function" != typeof t2[Symbol.iterator])
          throw new TypeError("values is not iterable");
        t2 = Array.from(t2);
        let [e2] = n2;
        if (e2 && 2 !== e2.length || n2.length > 1) {
          const r2 = Uint32Array.from(t2, (t3, n3) => n3);
          return n2.length > 1 ? (n2 = n2.map((n3) => t2.map(n3)), r2.sort((t3, e3) => {
            for (const r3 of n2) {
              const n3 = O(r3[t3], r3[e3]);
              if (n3)
                return n3;
            }
          })) : (e2 = t2.map(e2), r2.sort((t3, n3) => O(e2[t3], e2[n3]))), q(t2, r2);
        }
        return t2.sort(I(e2));
      }
      function I(t2 = n) {
        if (t2 === n)
          return O;
        if ("function" != typeof t2)
          throw new TypeError("compare is not a function");
        return (n2, e2) => {
          const r2 = t2(n2, e2);
          return r2 || 0 === r2 ? r2 : (0 === t2(e2, e2)) - (0 === t2(n2, n2));
        };
      }
      function O(t2, n2) {
        return (null == t2 || !(t2 >= t2)) - (null == n2 || !(n2 >= n2)) || (t2 < n2 ? -1 : t2 > n2 ? 1 : 0);
      }
      var B = Array.prototype.slice;
      function Y(t2) {
        return () => t2;
      }
      const L = Math.sqrt(50), j = Math.sqrt(10), H = Math.sqrt(2);
      function X(t2, n2, e2) {
        const r2 = (n2 - t2) / Math.max(0, e2), i2 = Math.floor(Math.log10(r2)), o2 = r2 / Math.pow(10, i2), a2 = o2 >= L ? 10 : o2 >= j ? 5 : o2 >= H ? 2 : 1;
        let u2, c2, f2;
        return i2 < 0 ? (f2 = Math.pow(10, -i2) / a2, u2 = Math.round(t2 * f2), c2 = Math.round(n2 * f2), u2 / f2 < t2 && ++u2, c2 / f2 > n2 && --c2, f2 = -f2) : (f2 = Math.pow(10, i2) * a2, u2 = Math.round(t2 / f2), c2 = Math.round(n2 / f2), u2 * f2 < t2 && ++u2, c2 * f2 > n2 && --c2), c2 < u2 && 0.5 <= e2 && e2 < 2 ? X(t2, n2, 2 * e2) : [u2, c2, f2];
      }
      function G(t2, n2, e2) {
        if (!((e2 = +e2) > 0))
          return [];
        if ((t2 = +t2) === (n2 = +n2))
          return [t2];
        const r2 = n2 < t2, [i2, o2, a2] = r2 ? X(n2, t2, e2) : X(t2, n2, e2);
        if (!(o2 >= i2))
          return [];
        const u2 = o2 - i2 + 1, c2 = new Array(u2);
        if (r2)
          if (a2 < 0)
            for (let t3 = 0; t3 < u2; ++t3)
              c2[t3] = (o2 - t3) / -a2;
          else
            for (let t3 = 0; t3 < u2; ++t3)
              c2[t3] = (o2 - t3) * a2;
        else if (a2 < 0)
          for (let t3 = 0; t3 < u2; ++t3)
            c2[t3] = (i2 + t3) / -a2;
        else
          for (let t3 = 0; t3 < u2; ++t3)
            c2[t3] = (i2 + t3) * a2;
        return c2;
      }
      function V(t2, n2, e2) {
        return X(t2 = +t2, n2 = +n2, e2 = +e2)[2];
      }
      function W(t2, n2, e2) {
        e2 = +e2;
        const r2 = (n2 = +n2) < (t2 = +t2), i2 = r2 ? V(n2, t2, e2) : V(t2, n2, e2);
        return (r2 ? -1 : 1) * (i2 < 0 ? 1 / -i2 : i2);
      }
      function Z(t2, n2, e2) {
        let r2;
        for (; ; ) {
          const i2 = V(t2, n2, e2);
          if (i2 === r2 || 0 === i2 || !isFinite(i2))
            return [t2, n2];
          i2 > 0 ? (t2 = Math.floor(t2 / i2) * i2, n2 = Math.ceil(n2 / i2) * i2) : i2 < 0 && (t2 = Math.ceil(t2 * i2) / i2, n2 = Math.floor(n2 * i2) / i2), r2 = i2;
        }
      }
      function K(t2) {
        return Math.max(1, Math.ceil(Math.log(v(t2)) / Math.LN2) + 1);
      }
      function Q() {
        var t2 = k, n2 = M, e2 = K;
        function r2(r3) {
          Array.isArray(r3) || (r3 = Array.from(r3));
          var i2, o2, a2, u2 = r3.length, c2 = new Array(u2);
          for (i2 = 0; i2 < u2; ++i2)
            c2[i2] = t2(r3[i2], i2, r3);
          var f2 = n2(c2), l2 = f2[0], h2 = f2[1], d2 = e2(c2, l2, h2);
          if (!Array.isArray(d2)) {
            const t3 = h2, e3 = +d2;
            if (n2 === M && ([l2, h2] = Z(l2, h2, e3)), (d2 = G(l2, h2, e3))[0] <= l2 && (a2 = V(l2, h2, e3)), d2[d2.length - 1] >= h2)
              if (t3 >= h2 && n2 === M) {
                const t4 = V(l2, h2, e3);
                isFinite(t4) && (t4 > 0 ? h2 = (Math.floor(h2 / t4) + 1) * t4 : t4 < 0 && (h2 = (Math.ceil(h2 * -t4) + 1) / -t4));
              } else
                d2.pop();
          }
          for (var p2 = d2.length, g2 = 0, y2 = p2; d2[g2] <= l2; )
            ++g2;
          for (; d2[y2 - 1] > h2; )
            --y2;
          (g2 || y2 < p2) && (d2 = d2.slice(g2, y2), p2 = y2 - g2);
          var v2, _2 = new Array(p2 + 1);
          for (i2 = 0; i2 <= p2; ++i2)
            (v2 = _2[i2] = []).x0 = i2 > 0 ? d2[i2 - 1] : l2, v2.x1 = i2 < p2 ? d2[i2] : h2;
          if (isFinite(a2)) {
            if (a2 > 0)
              for (i2 = 0; i2 < u2; ++i2)
                null != (o2 = c2[i2]) && l2 <= o2 && o2 <= h2 && _2[Math.min(p2, Math.floor((o2 - l2) / a2))].push(r3[i2]);
            else if (a2 < 0) {
              for (i2 = 0; i2 < u2; ++i2)
                if (null != (o2 = c2[i2]) && l2 <= o2 && o2 <= h2) {
                  const t3 = Math.floor((l2 - o2) * a2);
                  _2[Math.min(p2, t3 + (d2[t3] <= o2))].push(r3[i2]);
                }
            }
          } else
            for (i2 = 0; i2 < u2; ++i2)
              null != (o2 = c2[i2]) && l2 <= o2 && o2 <= h2 && _2[s(d2, o2, 0, p2)].push(r3[i2]);
          return _2;
        }
        return r2.value = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : Y(n3), r2) : t2;
        }, r2.domain = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : Y([t3[0], t3[1]]), r2) : n2;
        }, r2.thresholds = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : Y(Array.isArray(t3) ? B.call(t3) : t3), r2) : e2;
        }, r2;
      }
      function J(t2, n2) {
        let e2;
        if (void 0 === n2)
          for (const n3 of t2)
            null != n3 && (e2 < n3 || void 0 === e2 && n3 >= n3) && (e2 = n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            null != (i2 = n2(i2, ++r2, t2)) && (e2 < i2 || void 0 === e2 && i2 >= i2) && (e2 = i2);
        }
        return e2;
      }
      function tt(t2, n2) {
        let e2, r2 = -1, i2 = -1;
        if (void 0 === n2)
          for (const n3 of t2)
            ++i2, null != n3 && (e2 < n3 || void 0 === e2 && n3 >= n3) && (e2 = n3, r2 = i2);
        else
          for (let o2 of t2)
            null != (o2 = n2(o2, ++i2, t2)) && (e2 < o2 || void 0 === e2 && o2 >= o2) && (e2 = o2, r2 = i2);
        return r2;
      }
      function nt(t2, n2) {
        let e2;
        if (void 0 === n2)
          for (const n3 of t2)
            null != n3 && (e2 > n3 || void 0 === e2 && n3 >= n3) && (e2 = n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            null != (i2 = n2(i2, ++r2, t2)) && (e2 > i2 || void 0 === e2 && i2 >= i2) && (e2 = i2);
        }
        return e2;
      }
      function et(t2, n2) {
        let e2, r2 = -1, i2 = -1;
        if (void 0 === n2)
          for (const n3 of t2)
            ++i2, null != n3 && (e2 > n3 || void 0 === e2 && n3 >= n3) && (e2 = n3, r2 = i2);
        else
          for (let o2 of t2)
            null != (o2 = n2(o2, ++i2, t2)) && (e2 > o2 || void 0 === e2 && o2 >= o2) && (e2 = o2, r2 = i2);
        return r2;
      }
      function rt(t2, n2, e2 = 0, r2 = 1 / 0, i2) {
        if (n2 = Math.floor(n2), e2 = Math.floor(Math.max(0, e2)), r2 = Math.floor(Math.min(t2.length - 1, r2)), !(e2 <= n2 && n2 <= r2))
          return t2;
        for (i2 = void 0 === i2 ? O : I(i2); r2 > e2; ) {
          if (r2 - e2 > 600) {
            const o3 = r2 - e2 + 1, a3 = n2 - e2 + 1, u3 = Math.log(o3), c2 = 0.5 * Math.exp(2 * u3 / 3), f2 = 0.5 * Math.sqrt(u3 * c2 * (o3 - c2) / o3) * (a3 - o3 / 2 < 0 ? -1 : 1);
            rt(t2, n2, Math.max(e2, Math.floor(n2 - a3 * c2 / o3 + f2)), Math.min(r2, Math.floor(n2 + (o3 - a3) * c2 / o3 + f2)), i2);
          }
          const o2 = t2[n2];
          let a2 = e2, u2 = r2;
          for (it(t2, e2, n2), i2(t2[r2], o2) > 0 && it(t2, e2, r2); a2 < u2; ) {
            for (it(t2, a2, u2), ++a2, --u2; i2(t2[a2], o2) < 0; )
              ++a2;
            for (; i2(t2[u2], o2) > 0; )
              --u2;
          }
          0 === i2(t2[e2], o2) ? it(t2, e2, u2) : (++u2, it(t2, u2, r2)), u2 <= n2 && (e2 = u2 + 1), n2 <= u2 && (r2 = u2 - 1);
        }
        return t2;
      }
      function it(t2, n2, e2) {
        const r2 = t2[n2];
        t2[n2] = t2[e2], t2[e2] = r2;
      }
      function ot(t2, e2 = n) {
        let r2, i2 = false;
        if (1 === e2.length) {
          let o2;
          for (const a2 of t2) {
            const t3 = e2(a2);
            (i2 ? n(t3, o2) > 0 : 0 === n(t3, t3)) && (r2 = a2, o2 = t3, i2 = true);
          }
        } else
          for (const n2 of t2)
            (i2 ? e2(n2, r2) > 0 : 0 === e2(n2, n2)) && (r2 = n2, i2 = true);
        return r2;
      }
      function at(t2, n2, e2) {
        if (t2 = Float64Array.from(function* (t3, n3) {
          if (void 0 === n3)
            for (let n4 of t3)
              null != n4 && (n4 = +n4) >= n4 && (yield n4);
          else {
            let e3 = -1;
            for (let r3 of t3)
              null != (r3 = n3(r3, ++e3, t3)) && (r3 = +r3) >= r3 && (yield r3);
          }
        }(t2, e2)), (r2 = t2.length) && !isNaN(n2 = +n2)) {
          if (n2 <= 0 || r2 < 2)
            return nt(t2);
          if (n2 >= 1)
            return J(t2);
          var r2, i2 = (r2 - 1) * n2, o2 = Math.floor(i2), a2 = J(rt(t2, o2).subarray(0, o2 + 1));
          return a2 + (nt(t2.subarray(o2 + 1)) - a2) * (i2 - o2);
        }
      }
      function ut(t2, n2, e2 = o) {
        if ((r2 = t2.length) && !isNaN(n2 = +n2)) {
          if (n2 <= 0 || r2 < 2)
            return +e2(t2[0], 0, t2);
          if (n2 >= 1)
            return +e2(t2[r2 - 1], r2 - 1, t2);
          var r2, i2 = (r2 - 1) * n2, a2 = Math.floor(i2), u2 = +e2(t2[a2], a2, t2);
          return u2 + (+e2(t2[a2 + 1], a2 + 1, t2) - u2) * (i2 - a2);
        }
      }
      function ct(t2, n2, e2 = o) {
        if (!isNaN(n2 = +n2)) {
          if (r2 = Float64Array.from(t2, (n3, r3) => o(e2(t2[r3], r3, t2))), n2 <= 0)
            return et(r2);
          if (n2 >= 1)
            return tt(r2);
          var r2, i2 = Uint32Array.from(t2, (t3, n3) => n3), a2 = r2.length - 1, u2 = Math.floor(a2 * n2);
          return rt(i2, u2, 0, a2, (t3, n3) => O(r2[t3], r2[n3])), (u2 = ot(i2.subarray(0, u2 + 1), (t3) => r2[t3])) >= 0 ? u2 : -1;
        }
      }
      function ft(t2) {
        return Array.from(function* (t3) {
          for (const n2 of t3)
            yield* n2;
        }(t2));
      }
      function st(t2, n2) {
        return [t2, n2];
      }
      function lt(t2, n2, e2) {
        t2 = +t2, n2 = +n2, e2 = (i2 = arguments.length) < 2 ? (n2 = t2, t2 = 0, 1) : i2 < 3 ? 1 : +e2;
        for (var r2 = -1, i2 = 0 | Math.max(0, Math.ceil((n2 - t2) / e2)), o2 = new Array(i2); ++r2 < i2; )
          o2[r2] = t2 + r2 * e2;
        return o2;
      }
      function ht(t2, e2 = n) {
        if (1 === e2.length)
          return et(t2, e2);
        let r2, i2 = -1, o2 = -1;
        for (const n2 of t2)
          ++o2, (i2 < 0 ? 0 === e2(n2, n2) : e2(n2, r2) < 0) && (r2 = n2, i2 = o2);
        return i2;
      }
      var dt = pt(Math.random);
      function pt(t2) {
        return function(n2, e2 = 0, r2 = n2.length) {
          let i2 = r2 - (e2 = +e2);
          for (; i2; ) {
            const r3 = t2() * i2-- | 0, o2 = n2[i2 + e2];
            n2[i2 + e2] = n2[r3 + e2], n2[r3 + e2] = o2;
          }
          return n2;
        };
      }
      function gt(t2) {
        if (!(i2 = t2.length))
          return [];
        for (var n2 = -1, e2 = nt(t2, yt), r2 = new Array(e2); ++n2 < e2; )
          for (var i2, o2 = -1, a2 = r2[n2] = new Array(i2); ++o2 < i2; )
            a2[o2] = t2[o2][n2];
        return r2;
      }
      function yt(t2) {
        return t2.length;
      }
      function vt(t2) {
        return t2 instanceof InternSet ? t2 : new InternSet(t2);
      }
      function _t(t2, n2) {
        const e2 = t2[Symbol.iterator](), r2 = /* @__PURE__ */ new Set();
        for (const t3 of n2) {
          const n3 = bt(t3);
          if (r2.has(n3))
            continue;
          let i2, o2;
          for (; { value: i2, done: o2 } = e2.next(); ) {
            if (o2)
              return false;
            const t4 = bt(i2);
            if (r2.add(t4), Object.is(n3, t4))
              break;
          }
        }
        return true;
      }
      function bt(t2) {
        return null !== t2 && "object" == typeof t2 ? t2.valueOf() : t2;
      }
      function mt(t2) {
        return t2;
      }
      var xt = 1, wt = 2, Mt = 3, Tt = 4, At = 1e-6;
      function St(t2) {
        return "translate(" + t2 + ",0)";
      }
      function Et(t2) {
        return "translate(0," + t2 + ")";
      }
      function Nt(t2) {
        return (n2) => +t2(n2);
      }
      function kt(t2, n2) {
        return n2 = Math.max(0, t2.bandwidth() - 2 * n2) / 2, t2.round() && (n2 = Math.round(n2)), (e2) => +t2(e2) + n2;
      }
      function Ct() {
        return !this.__axis;
      }
      function Pt(t2, n2) {
        var e2 = [], r2 = null, i2 = null, o2 = 6, a2 = 6, u2 = 3, c2 = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5, f2 = t2 === xt || t2 === Tt ? -1 : 1, s2 = t2 === Tt || t2 === wt ? "x" : "y", l2 = t2 === xt || t2 === Mt ? St : Et;
        function h2(h3) {
          var d2 = null == r2 ? n2.ticks ? n2.ticks.apply(n2, e2) : n2.domain() : r2, p2 = null == i2 ? n2.tickFormat ? n2.tickFormat.apply(n2, e2) : mt : i2, g2 = Math.max(o2, 0) + u2, y2 = n2.range(), v2 = +y2[0] + c2, _2 = +y2[y2.length - 1] + c2, b2 = (n2.bandwidth ? kt : Nt)(n2.copy(), c2), m2 = h3.selection ? h3.selection() : h3, x2 = m2.selectAll(".domain").data([null]), w2 = m2.selectAll(".tick").data(d2, n2).order(), M2 = w2.exit(), T2 = w2.enter().append("g").attr("class", "tick"), A2 = w2.select("line"), S2 = w2.select("text");
          x2 = x2.merge(x2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), w2 = w2.merge(T2), A2 = A2.merge(T2.append("line").attr("stroke", "currentColor").attr(s2 + "2", f2 * o2)), S2 = S2.merge(T2.append("text").attr("fill", "currentColor").attr(s2, f2 * g2).attr("dy", t2 === xt ? "0em" : t2 === Mt ? "0.71em" : "0.32em")), h3 !== m2 && (x2 = x2.transition(h3), w2 = w2.transition(h3), A2 = A2.transition(h3), S2 = S2.transition(h3), M2 = M2.transition(h3).attr("opacity", At).attr("transform", function(t3) {
            return isFinite(t3 = b2(t3)) ? l2(t3 + c2) : this.getAttribute("transform");
          }), T2.attr("opacity", At).attr("transform", function(t3) {
            var n3 = this.parentNode.__axis;
            return l2((n3 && isFinite(n3 = n3(t3)) ? n3 : b2(t3)) + c2);
          })), M2.remove(), x2.attr("d", t2 === Tt || t2 === wt ? a2 ? "M" + f2 * a2 + "," + v2 + "H" + c2 + "V" + _2 + "H" + f2 * a2 : "M" + c2 + "," + v2 + "V" + _2 : a2 ? "M" + v2 + "," + f2 * a2 + "V" + c2 + "H" + _2 + "V" + f2 * a2 : "M" + v2 + "," + c2 + "H" + _2), w2.attr("opacity", 1).attr("transform", function(t3) {
            return l2(b2(t3) + c2);
          }), A2.attr(s2 + "2", f2 * o2), S2.attr(s2, f2 * g2).text(p2), m2.filter(Ct).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === wt ? "start" : t2 === Tt ? "end" : "middle"), m2.each(function() {
            this.__axis = b2;
          });
        }
        return h2.scale = function(t3) {
          return arguments.length ? (n2 = t3, h2) : n2;
        }, h2.ticks = function() {
          return e2 = Array.from(arguments), h2;
        }, h2.tickArguments = function(t3) {
          return arguments.length ? (e2 = null == t3 ? [] : Array.from(t3), h2) : e2.slice();
        }, h2.tickValues = function(t3) {
          return arguments.length ? (r2 = null == t3 ? null : Array.from(t3), h2) : r2 && r2.slice();
        }, h2.tickFormat = function(t3) {
          return arguments.length ? (i2 = t3, h2) : i2;
        }, h2.tickSize = function(t3) {
          return arguments.length ? (o2 = a2 = +t3, h2) : o2;
        }, h2.tickSizeInner = function(t3) {
          return arguments.length ? (o2 = +t3, h2) : o2;
        }, h2.tickSizeOuter = function(t3) {
          return arguments.length ? (a2 = +t3, h2) : a2;
        }, h2.tickPadding = function(t3) {
          return arguments.length ? (u2 = +t3, h2) : u2;
        }, h2.offset = function(t3) {
          return arguments.length ? (c2 = +t3, h2) : c2;
        }, h2;
      }
      var zt = { value: () => {
      } };
      function $t() {
        for (var t2, n2 = 0, e2 = arguments.length, r2 = {}; n2 < e2; ++n2) {
          if (!(t2 = arguments[n2] + "") || t2 in r2 || /[\s.]/.test(t2))
            throw new Error("illegal type: " + t2);
          r2[t2] = [];
        }
        return new Dt(r2);
      }
      function Dt(t2) {
        this._ = t2;
      }
      function Rt(t2, n2) {
        for (var e2, r2 = 0, i2 = t2.length; r2 < i2; ++r2)
          if ((e2 = t2[r2]).name === n2)
            return e2.value;
      }
      function Ft(t2, n2, e2) {
        for (var r2 = 0, i2 = t2.length; r2 < i2; ++r2)
          if (t2[r2].name === n2) {
            t2[r2] = zt, t2 = t2.slice(0, r2).concat(t2.slice(r2 + 1));
            break;
          }
        return null != e2 && t2.push({ name: n2, value: e2 }), t2;
      }
      Dt.prototype = $t.prototype = { constructor: Dt, on: function(t2, n2) {
        var e2, r2, i2 = this._, o2 = (r2 = i2, (t2 + "").trim().split(/^|\s+/).map(function(t3) {
          var n3 = "", e3 = t3.indexOf(".");
          if (e3 >= 0 && (n3 = t3.slice(e3 + 1), t3 = t3.slice(0, e3)), t3 && !r2.hasOwnProperty(t3))
            throw new Error("unknown type: " + t3);
          return { type: t3, name: n3 };
        })), a2 = -1, u2 = o2.length;
        if (!(arguments.length < 2)) {
          if (null != n2 && "function" != typeof n2)
            throw new Error("invalid callback: " + n2);
          for (; ++a2 < u2; )
            if (e2 = (t2 = o2[a2]).type)
              i2[e2] = Ft(i2[e2], t2.name, n2);
            else if (null == n2)
              for (e2 in i2)
                i2[e2] = Ft(i2[e2], t2.name, null);
          return this;
        }
        for (; ++a2 < u2; )
          if ((e2 = (t2 = o2[a2]).type) && (e2 = Rt(i2[e2], t2.name)))
            return e2;
      }, copy: function() {
        var t2 = {}, n2 = this._;
        for (var e2 in n2)
          t2[e2] = n2[e2].slice();
        return new Dt(t2);
      }, call: function(t2, n2) {
        if ((e2 = arguments.length - 2) > 0)
          for (var e2, r2, i2 = new Array(e2), o2 = 0; o2 < e2; ++o2)
            i2[o2] = arguments[o2 + 2];
        if (!this._.hasOwnProperty(t2))
          throw new Error("unknown type: " + t2);
        for (o2 = 0, e2 = (r2 = this._[t2]).length; o2 < e2; ++o2)
          r2[o2].value.apply(n2, i2);
      }, apply: function(t2, n2, e2) {
        if (!this._.hasOwnProperty(t2))
          throw new Error("unknown type: " + t2);
        for (var r2 = this._[t2], i2 = 0, o2 = r2.length; i2 < o2; ++i2)
          r2[i2].value.apply(n2, e2);
      } };
      var qt = "http://www.w3.org/1999/xhtml", Ut = { svg: "http://www.w3.org/2000/svg", xhtml: qt, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
      function It(t2) {
        var n2 = t2 += "", e2 = n2.indexOf(":");
        return e2 >= 0 && "xmlns" !== (n2 = t2.slice(0, e2)) && (t2 = t2.slice(e2 + 1)), Ut.hasOwnProperty(n2) ? { space: Ut[n2], local: t2 } : t2;
      }
      function Ot(t2) {
        return function() {
          var n2 = this.ownerDocument, e2 = this.namespaceURI;
          return e2 === qt && n2.documentElement.namespaceURI === qt ? n2.createElement(t2) : n2.createElementNS(e2, t2);
        };
      }
      function Bt(t2) {
        return function() {
          return this.ownerDocument.createElementNS(t2.space, t2.local);
        };
      }
      function Yt(t2) {
        var n2 = It(t2);
        return (n2.local ? Bt : Ot)(n2);
      }
      function Lt() {
      }
      function jt(t2) {
        return null == t2 ? Lt : function() {
          return this.querySelector(t2);
        };
      }
      function Ht(t2) {
        return null == t2 ? [] : Array.isArray(t2) ? t2 : Array.from(t2);
      }
      function Xt() {
        return [];
      }
      function Gt(t2) {
        return null == t2 ? Xt : function() {
          return this.querySelectorAll(t2);
        };
      }
      function Vt(t2) {
        return function() {
          return this.matches(t2);
        };
      }
      function Wt(t2) {
        return function(n2) {
          return n2.matches(t2);
        };
      }
      var Zt = Array.prototype.find;
      function Kt() {
        return this.firstElementChild;
      }
      var Qt = Array.prototype.filter;
      function Jt() {
        return Array.from(this.children);
      }
      function tn(t2) {
        return new Array(t2.length);
      }
      function nn(t2, n2) {
        this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = n2;
      }
      function en(t2, n2, e2, r2, i2, o2) {
        for (var a2, u2 = 0, c2 = n2.length, f2 = o2.length; u2 < f2; ++u2)
          (a2 = n2[u2]) ? (a2.__data__ = o2[u2], r2[u2] = a2) : e2[u2] = new nn(t2, o2[u2]);
        for (; u2 < c2; ++u2)
          (a2 = n2[u2]) && (i2[u2] = a2);
      }
      function rn(t2, n2, e2, r2, i2, o2, a2) {
        var u2, c2, f2, s2 = /* @__PURE__ */ new Map(), l2 = n2.length, h2 = o2.length, d2 = new Array(l2);
        for (u2 = 0; u2 < l2; ++u2)
          (c2 = n2[u2]) && (d2[u2] = f2 = a2.call(c2, c2.__data__, u2, n2) + "", s2.has(f2) ? i2[u2] = c2 : s2.set(f2, c2));
        for (u2 = 0; u2 < h2; ++u2)
          f2 = a2.call(t2, o2[u2], u2, o2) + "", (c2 = s2.get(f2)) ? (r2[u2] = c2, c2.__data__ = o2[u2], s2.delete(f2)) : e2[u2] = new nn(t2, o2[u2]);
        for (u2 = 0; u2 < l2; ++u2)
          (c2 = n2[u2]) && s2.get(d2[u2]) === c2 && (i2[u2] = c2);
      }
      function on(t2) {
        return t2.__data__;
      }
      function an(t2) {
        return "object" == typeof t2 && "length" in t2 ? t2 : Array.from(t2);
      }
      function un(t2, n2) {
        return t2 < n2 ? -1 : t2 > n2 ? 1 : t2 >= n2 ? 0 : NaN;
      }
      function cn(t2) {
        return function() {
          this.removeAttribute(t2);
        };
      }
      function fn(t2) {
        return function() {
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function sn(t2, n2) {
        return function() {
          this.setAttribute(t2, n2);
        };
      }
      function ln(t2, n2) {
        return function() {
          this.setAttributeNS(t2.space, t2.local, n2);
        };
      }
      function hn(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          null == e2 ? this.removeAttribute(t2) : this.setAttribute(t2, e2);
        };
      }
      function dn(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          null == e2 ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e2);
        };
      }
      function pn(t2) {
        return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
      }
      function gn(t2) {
        return function() {
          this.style.removeProperty(t2);
        };
      }
      function yn(t2, n2, e2) {
        return function() {
          this.style.setProperty(t2, n2, e2);
        };
      }
      function vn(t2, n2, e2) {
        return function() {
          var r2 = n2.apply(this, arguments);
          null == r2 ? this.style.removeProperty(t2) : this.style.setProperty(t2, r2, e2);
        };
      }
      function _n(t2, n2) {
        return t2.style.getPropertyValue(n2) || pn(t2).getComputedStyle(t2, null).getPropertyValue(n2);
      }
      function bn(t2) {
        return function() {
          delete this[t2];
        };
      }
      function mn(t2, n2) {
        return function() {
          this[t2] = n2;
        };
      }
      function xn(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          null == e2 ? delete this[t2] : this[t2] = e2;
        };
      }
      function wn(t2) {
        return t2.trim().split(/^|\s+/);
      }
      function Mn(t2) {
        return t2.classList || new Tn(t2);
      }
      function Tn(t2) {
        this._node = t2, this._names = wn(t2.getAttribute("class") || "");
      }
      function An(t2, n2) {
        for (var e2 = Mn(t2), r2 = -1, i2 = n2.length; ++r2 < i2; )
          e2.add(n2[r2]);
      }
      function Sn(t2, n2) {
        for (var e2 = Mn(t2), r2 = -1, i2 = n2.length; ++r2 < i2; )
          e2.remove(n2[r2]);
      }
      function En(t2) {
        return function() {
          An(this, t2);
        };
      }
      function Nn(t2) {
        return function() {
          Sn(this, t2);
        };
      }
      function kn(t2, n2) {
        return function() {
          (n2.apply(this, arguments) ? An : Sn)(this, t2);
        };
      }
      function Cn() {
        this.textContent = "";
      }
      function Pn(t2) {
        return function() {
          this.textContent = t2;
        };
      }
      function zn(t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          this.textContent = null == n2 ? "" : n2;
        };
      }
      function $n() {
        this.innerHTML = "";
      }
      function Dn(t2) {
        return function() {
          this.innerHTML = t2;
        };
      }
      function Rn(t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          this.innerHTML = null == n2 ? "" : n2;
        };
      }
      function Fn() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function qn() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Un() {
        return null;
      }
      function In() {
        var t2 = this.parentNode;
        t2 && t2.removeChild(this);
      }
      function On() {
        var t2 = this.cloneNode(false), n2 = this.parentNode;
        return n2 ? n2.insertBefore(t2, this.nextSibling) : t2;
      }
      function Bn() {
        var t2 = this.cloneNode(true), n2 = this.parentNode;
        return n2 ? n2.insertBefore(t2, this.nextSibling) : t2;
      }
      function Yn(t2) {
        return function() {
          var n2 = this.__on;
          if (n2) {
            for (var e2, r2 = 0, i2 = -1, o2 = n2.length; r2 < o2; ++r2)
              e2 = n2[r2], t2.type && e2.type !== t2.type || e2.name !== t2.name ? n2[++i2] = e2 : this.removeEventListener(e2.type, e2.listener, e2.options);
            ++i2 ? n2.length = i2 : delete this.__on;
          }
        };
      }
      function Ln(t2, n2, e2) {
        return function() {
          var r2, i2 = this.__on, o2 = /* @__PURE__ */ function(t3) {
            return function(n3) {
              t3.call(this, n3, this.__data__);
            };
          }(n2);
          if (i2) {
            for (var a2 = 0, u2 = i2.length; a2 < u2; ++a2)
              if ((r2 = i2[a2]).type === t2.type && r2.name === t2.name)
                return this.removeEventListener(r2.type, r2.listener, r2.options), this.addEventListener(r2.type, r2.listener = o2, r2.options = e2), void (r2.value = n2);
          }
          this.addEventListener(t2.type, o2, e2), r2 = { type: t2.type, name: t2.name, value: n2, listener: o2, options: e2 }, i2 ? i2.push(r2) : this.__on = [r2];
        };
      }
      function jn(t2, n2, e2) {
        var r2 = pn(t2), i2 = r2.CustomEvent;
        "function" == typeof i2 ? i2 = new i2(n2, e2) : (i2 = r2.document.createEvent("Event"), e2 ? (i2.initEvent(n2, e2.bubbles, e2.cancelable), i2.detail = e2.detail) : i2.initEvent(n2, false, false)), t2.dispatchEvent(i2);
      }
      function Hn(t2, n2) {
        return function() {
          return jn(this, t2, n2);
        };
      }
      function Xn(t2, n2) {
        return function() {
          return jn(this, t2, n2.apply(this, arguments));
        };
      }
      nn.prototype = { constructor: nn, appendChild: function(t2) {
        return this._parent.insertBefore(t2, this._next);
      }, insertBefore: function(t2, n2) {
        return this._parent.insertBefore(t2, n2);
      }, querySelector: function(t2) {
        return this._parent.querySelector(t2);
      }, querySelectorAll: function(t2) {
        return this._parent.querySelectorAll(t2);
      } }, Tn.prototype = { add: function(t2) {
        this._names.indexOf(t2) < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
      }, remove: function(t2) {
        var n2 = this._names.indexOf(t2);
        n2 >= 0 && (this._names.splice(n2, 1), this._node.setAttribute("class", this._names.join(" ")));
      }, contains: function(t2) {
        return this._names.indexOf(t2) >= 0;
      } };
      var Gn = [null];
      function Vn(t2, n2) {
        this._groups = t2, this._parents = n2;
      }
      function Wn() {
        return new Vn([[document.documentElement]], Gn);
      }
      function Zn(t2) {
        return "string" == typeof t2 ? new Vn([[document.querySelector(t2)]], [document.documentElement]) : new Vn([[t2]], Gn);
      }
      Vn.prototype = Wn.prototype = { constructor: Vn, select: function(t2) {
        "function" != typeof t2 && (t2 = jt(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2, u2 = n2[i2], c2 = u2.length, f2 = r2[i2] = new Array(c2), s2 = 0; s2 < c2; ++s2)
            (o2 = u2[s2]) && (a2 = t2.call(o2, o2.__data__, s2, u2)) && ("__data__" in o2 && (a2.__data__ = o2.__data__), f2[s2] = a2);
        return new Vn(r2, this._parents);
      }, selectAll: function(t2) {
        t2 = "function" == typeof t2 ? /* @__PURE__ */ function(t3) {
          return function() {
            return Ht(t3.apply(this, arguments));
          };
        }(t2) : Gt(t2);
        for (var n2 = this._groups, e2 = n2.length, r2 = [], i2 = [], o2 = 0; o2 < e2; ++o2)
          for (var a2, u2 = n2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            (a2 = u2[f2]) && (r2.push(t2.call(a2, a2.__data__, f2, u2)), i2.push(a2));
        return new Vn(r2, i2);
      }, selectChild: function(t2) {
        return this.select(null == t2 ? Kt : /* @__PURE__ */ function(t3) {
          return function() {
            return Zt.call(this.children, t3);
          };
        }("function" == typeof t2 ? t2 : Wt(t2)));
      }, selectChildren: function(t2) {
        return this.selectAll(null == t2 ? Jt : /* @__PURE__ */ function(t3) {
          return function() {
            return Qt.call(this.children, t3);
          };
        }("function" == typeof t2 ? t2 : Wt(t2)));
      }, filter: function(t2) {
        "function" != typeof t2 && (t2 = Vt(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2 = n2[i2], u2 = a2.length, c2 = r2[i2] = [], f2 = 0; f2 < u2; ++f2)
            (o2 = a2[f2]) && t2.call(o2, o2.__data__, f2, a2) && c2.push(o2);
        return new Vn(r2, this._parents);
      }, data: function(t2, n2) {
        if (!arguments.length)
          return Array.from(this, on);
        var e2 = n2 ? rn : en, r2 = this._parents, i2 = this._groups;
        "function" != typeof t2 && (t2 = /* @__PURE__ */ function(t3) {
          return function() {
            return t3;
          };
        }(t2));
        for (var o2 = i2.length, a2 = new Array(o2), u2 = new Array(o2), c2 = new Array(o2), f2 = 0; f2 < o2; ++f2) {
          var s2 = r2[f2], l2 = i2[f2], h2 = l2.length, d2 = an(t2.call(s2, s2 && s2.__data__, f2, r2)), p2 = d2.length, g2 = u2[f2] = new Array(p2), y2 = a2[f2] = new Array(p2);
          e2(s2, l2, g2, y2, c2[f2] = new Array(h2), d2, n2);
          for (var v2, _2, b2 = 0, m2 = 0; b2 < p2; ++b2)
            if (v2 = g2[b2]) {
              for (b2 >= m2 && (m2 = b2 + 1); !(_2 = y2[m2]) && ++m2 < p2; )
                ;
              v2._next = _2 || null;
            }
        }
        return (a2 = new Vn(a2, r2))._enter = u2, a2._exit = c2, a2;
      }, enter: function() {
        return new Vn(this._enter || this._groups.map(tn), this._parents);
      }, exit: function() {
        return new Vn(this._exit || this._groups.map(tn), this._parents);
      }, join: function(t2, n2, e2) {
        var r2 = this.enter(), i2 = this, o2 = this.exit();
        return "function" == typeof t2 ? (r2 = t2(r2)) && (r2 = r2.selection()) : r2 = r2.append(t2 + ""), null != n2 && (i2 = n2(i2)) && (i2 = i2.selection()), null == e2 ? o2.remove() : e2(o2), r2 && i2 ? r2.merge(i2).order() : i2;
      }, merge: function(t2) {
        for (var n2 = t2.selection ? t2.selection() : t2, e2 = this._groups, r2 = n2._groups, i2 = e2.length, o2 = r2.length, a2 = Math.min(i2, o2), u2 = new Array(i2), c2 = 0; c2 < a2; ++c2)
          for (var f2, s2 = e2[c2], l2 = r2[c2], h2 = s2.length, d2 = u2[c2] = new Array(h2), p2 = 0; p2 < h2; ++p2)
            (f2 = s2[p2] || l2[p2]) && (d2[p2] = f2);
        for (; c2 < i2; ++c2)
          u2[c2] = e2[c2];
        return new Vn(u2, this._parents);
      }, selection: function() {
        return this;
      }, order: function() {
        for (var t2 = this._groups, n2 = -1, e2 = t2.length; ++n2 < e2; )
          for (var r2, i2 = t2[n2], o2 = i2.length - 1, a2 = i2[o2]; --o2 >= 0; )
            (r2 = i2[o2]) && (a2 && 4 ^ r2.compareDocumentPosition(a2) && a2.parentNode.insertBefore(r2, a2), a2 = r2);
        return this;
      }, sort: function(t2) {
        function n2(n3, e3) {
          return n3 && e3 ? t2(n3.__data__, e3.__data__) : !n3 - !e3;
        }
        t2 || (t2 = un);
        for (var e2 = this._groups, r2 = e2.length, i2 = new Array(r2), o2 = 0; o2 < r2; ++o2) {
          for (var a2, u2 = e2[o2], c2 = u2.length, f2 = i2[o2] = new Array(c2), s2 = 0; s2 < c2; ++s2)
            (a2 = u2[s2]) && (f2[s2] = a2);
          f2.sort(n2);
        }
        return new Vn(i2, this._parents).order();
      }, call: function() {
        var t2 = arguments[0];
        return arguments[0] = this, t2.apply(null, arguments), this;
      }, nodes: function() {
        return Array.from(this);
      }, node: function() {
        for (var t2 = this._groups, n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          for (var r2 = t2[n2], i2 = 0, o2 = r2.length; i2 < o2; ++i2) {
            var a2 = r2[i2];
            if (a2)
              return a2;
          }
        return null;
      }, size: function() {
        let t2 = 0;
        for (const n2 of this)
          ++t2;
        return t2;
      }, empty: function() {
        return !this.node();
      }, each: function(t2) {
        for (var n2 = this._groups, e2 = 0, r2 = n2.length; e2 < r2; ++e2)
          for (var i2, o2 = n2[e2], a2 = 0, u2 = o2.length; a2 < u2; ++a2)
            (i2 = o2[a2]) && t2.call(i2, i2.__data__, a2, o2);
        return this;
      }, attr: function(t2, n2) {
        var e2 = It(t2);
        if (arguments.length < 2) {
          var r2 = this.node();
          return e2.local ? r2.getAttributeNS(e2.space, e2.local) : r2.getAttribute(e2);
        }
        return this.each((null == n2 ? e2.local ? fn : cn : "function" == typeof n2 ? e2.local ? dn : hn : e2.local ? ln : sn)(e2, n2));
      }, style: function(t2, n2, e2) {
        return arguments.length > 1 ? this.each((null == n2 ? gn : "function" == typeof n2 ? vn : yn)(t2, n2, null == e2 ? "" : e2)) : _n(this.node(), t2);
      }, property: function(t2, n2) {
        return arguments.length > 1 ? this.each((null == n2 ? bn : "function" == typeof n2 ? xn : mn)(t2, n2)) : this.node()[t2];
      }, classed: function(t2, n2) {
        var e2 = wn(t2 + "");
        if (arguments.length < 2) {
          for (var r2 = Mn(this.node()), i2 = -1, o2 = e2.length; ++i2 < o2; )
            if (!r2.contains(e2[i2]))
              return false;
          return true;
        }
        return this.each(("function" == typeof n2 ? kn : n2 ? En : Nn)(e2, n2));
      }, text: function(t2) {
        return arguments.length ? this.each(null == t2 ? Cn : ("function" == typeof t2 ? zn : Pn)(t2)) : this.node().textContent;
      }, html: function(t2) {
        return arguments.length ? this.each(null == t2 ? $n : ("function" == typeof t2 ? Rn : Dn)(t2)) : this.node().innerHTML;
      }, raise: function() {
        return this.each(Fn);
      }, lower: function() {
        return this.each(qn);
      }, append: function(t2) {
        var n2 = "function" == typeof t2 ? t2 : Yt(t2);
        return this.select(function() {
          return this.appendChild(n2.apply(this, arguments));
        });
      }, insert: function(t2, n2) {
        var e2 = "function" == typeof t2 ? t2 : Yt(t2), r2 = null == n2 ? Un : "function" == typeof n2 ? n2 : jt(n2);
        return this.select(function() {
          return this.insertBefore(e2.apply(this, arguments), r2.apply(this, arguments) || null);
        });
      }, remove: function() {
        return this.each(In);
      }, clone: function(t2) {
        return this.select(t2 ? Bn : On);
      }, datum: function(t2) {
        return arguments.length ? this.property("__data__", t2) : this.node().__data__;
      }, on: function(t2, n2, e2) {
        var r2, i2, o2 = function(t3) {
          return t3.trim().split(/^|\s+/).map(function(t4) {
            var n3 = "", e3 = t4.indexOf(".");
            return e3 >= 0 && (n3 = t4.slice(e3 + 1), t4 = t4.slice(0, e3)), { type: t4, name: n3 };
          });
        }(t2 + ""), a2 = o2.length;
        if (!(arguments.length < 2)) {
          for (u2 = n2 ? Ln : Yn, r2 = 0; r2 < a2; ++r2)
            this.each(u2(o2[r2], n2, e2));
          return this;
        }
        var u2 = this.node().__on;
        if (u2) {
          for (var c2, f2 = 0, s2 = u2.length; f2 < s2; ++f2)
            for (r2 = 0, c2 = u2[f2]; r2 < a2; ++r2)
              if ((i2 = o2[r2]).type === c2.type && i2.name === c2.name)
                return c2.value;
        }
      }, dispatch: function(t2, n2) {
        return this.each(("function" == typeof n2 ? Xn : Hn)(t2, n2));
      }, [Symbol.iterator]: function* () {
        for (var t2 = this._groups, n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          for (var r2, i2 = t2[n2], o2 = 0, a2 = i2.length; o2 < a2; ++o2)
            (r2 = i2[o2]) && (yield r2);
      } };
      var Kn = 0;
      function Qn() {
        return new Jn();
      }
      function Jn() {
        this._ = "@" + (++Kn).toString(36);
      }
      function te(t2) {
        let n2;
        for (; n2 = t2.sourceEvent; )
          t2 = n2;
        return t2;
      }
      function ne(t2, n2) {
        if (t2 = te(t2), void 0 === n2 && (n2 = t2.currentTarget), n2) {
          var e2 = n2.ownerSVGElement || n2;
          if (e2.createSVGPoint) {
            var r2 = e2.createSVGPoint();
            return r2.x = t2.clientX, r2.y = t2.clientY, [(r2 = r2.matrixTransform(n2.getScreenCTM().inverse())).x, r2.y];
          }
          if (n2.getBoundingClientRect) {
            var i2 = n2.getBoundingClientRect();
            return [t2.clientX - i2.left - n2.clientLeft, t2.clientY - i2.top - n2.clientTop];
          }
        }
        return [t2.pageX, t2.pageY];
      }
      Jn.prototype = Qn.prototype = { constructor: Jn, get: function(t2) {
        for (var n2 = this._; !(n2 in t2); )
          if (!(t2 = t2.parentNode))
            return;
        return t2[n2];
      }, set: function(t2, n2) {
        return t2[this._] = n2;
      }, remove: function(t2) {
        return this._ in t2 && delete t2[this._];
      }, toString: function() {
        return this._;
      } };
      const ee = { passive: false }, re = { capture: true, passive: false };
      function ie(t2) {
        t2.stopImmediatePropagation();
      }
      function oe(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      function ae(t2) {
        var n2 = t2.document.documentElement, e2 = Zn(t2).on("dragstart.drag", oe, re);
        "onselectstart" in n2 ? e2.on("selectstart.drag", oe, re) : (n2.__noselect = n2.style.MozUserSelect, n2.style.MozUserSelect = "none");
      }
      function ue(t2, n2) {
        var e2 = t2.document.documentElement, r2 = Zn(t2).on("dragstart.drag", null);
        n2 && (r2.on("click.drag", oe, re), setTimeout(function() {
          r2.on("click.drag", null);
        }, 0)), "onselectstart" in e2 ? r2.on("selectstart.drag", null) : (e2.style.MozUserSelect = e2.__noselect, delete e2.__noselect);
      }
      var ce = (t2) => () => t2;
      function fe(t2, { sourceEvent: n2, subject: e2, target: r2, identifier: i2, active: o2, x: a2, y: u2, dx: c2, dy: f2, dispatch: s2 }) {
        Object.defineProperties(this, { type: { value: t2, enumerable: true, configurable: true }, sourceEvent: { value: n2, enumerable: true, configurable: true }, subject: { value: e2, enumerable: true, configurable: true }, target: { value: r2, enumerable: true, configurable: true }, identifier: { value: i2, enumerable: true, configurable: true }, active: { value: o2, enumerable: true, configurable: true }, x: { value: a2, enumerable: true, configurable: true }, y: { value: u2, enumerable: true, configurable: true }, dx: { value: c2, enumerable: true, configurable: true }, dy: { value: f2, enumerable: true, configurable: true }, _: { value: s2 } });
      }
      function se(t2) {
        return !t2.ctrlKey && !t2.button;
      }
      function le() {
        return this.parentNode;
      }
      function he(t2, n2) {
        return null == n2 ? { x: t2.x, y: t2.y } : n2;
      }
      function de() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function pe(t2, n2, e2) {
        t2.prototype = n2.prototype = e2, e2.constructor = t2;
      }
      function ge(t2, n2) {
        var e2 = Object.create(t2.prototype);
        for (var r2 in n2)
          e2[r2] = n2[r2];
        return e2;
      }
      function ye() {
      }
      fe.prototype.on = function() {
        var t2 = this._.on.apply(this._, arguments);
        return t2 === this._ ? this : t2;
      };
      var ve = 0.7, _e = 1 / ve, be = "\\s*([+-]?\\d+)\\s*", me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", we = /^#([0-9a-f]{3,8})$/, Me = new RegExp(`^rgb\\(${be},${be},${be}\\)$`), Te = new RegExp(`^rgb\\(${xe},${xe},${xe}\\)$`), Ae = new RegExp(`^rgba\\(${be},${be},${be},${me}\\)$`), Se = new RegExp(`^rgba\\(${xe},${xe},${xe},${me}\\)$`), Ee = new RegExp(`^hsl\\(${me},${xe},${xe}\\)$`), Ne = new RegExp(`^hsla\\(${me},${xe},${xe},${me}\\)$`), ke = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      function Ce() {
        return this.rgb().formatHex();
      }
      function Pe() {
        return this.rgb().formatRgb();
      }
      function ze(t2) {
        var n2, e2;
        return t2 = (t2 + "").trim().toLowerCase(), (n2 = we.exec(t2)) ? (e2 = n2[1].length, n2 = parseInt(n2[1], 16), 6 === e2 ? $e(n2) : 3 === e2 ? new qe(n2 >> 8 & 15 | n2 >> 4 & 240, n2 >> 4 & 15 | 240 & n2, (15 & n2) << 4 | 15 & n2, 1) : 8 === e2 ? De(n2 >> 24 & 255, n2 >> 16 & 255, n2 >> 8 & 255, (255 & n2) / 255) : 4 === e2 ? De(n2 >> 12 & 15 | n2 >> 8 & 240, n2 >> 8 & 15 | n2 >> 4 & 240, n2 >> 4 & 15 | 240 & n2, ((15 & n2) << 4 | 15 & n2) / 255) : null) : (n2 = Me.exec(t2)) ? new qe(n2[1], n2[2], n2[3], 1) : (n2 = Te.exec(t2)) ? new qe(255 * n2[1] / 100, 255 * n2[2] / 100, 255 * n2[3] / 100, 1) : (n2 = Ae.exec(t2)) ? De(n2[1], n2[2], n2[3], n2[4]) : (n2 = Se.exec(t2)) ? De(255 * n2[1] / 100, 255 * n2[2] / 100, 255 * n2[3] / 100, n2[4]) : (n2 = Ee.exec(t2)) ? Le(n2[1], n2[2] / 100, n2[3] / 100, 1) : (n2 = Ne.exec(t2)) ? Le(n2[1], n2[2] / 100, n2[3] / 100, n2[4]) : ke.hasOwnProperty(t2) ? $e(ke[t2]) : "transparent" === t2 ? new qe(NaN, NaN, NaN, 0) : null;
      }
      function $e(t2) {
        return new qe(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2, 1);
      }
      function De(t2, n2, e2, r2) {
        return r2 <= 0 && (t2 = n2 = e2 = NaN), new qe(t2, n2, e2, r2);
      }
      function Re(t2) {
        return t2 instanceof ye || (t2 = ze(t2)), t2 ? new qe((t2 = t2.rgb()).r, t2.g, t2.b, t2.opacity) : new qe();
      }
      function Fe(t2, n2, e2, r2) {
        return 1 === arguments.length ? Re(t2) : new qe(t2, n2, e2, null == r2 ? 1 : r2);
      }
      function qe(t2, n2, e2, r2) {
        this.r = +t2, this.g = +n2, this.b = +e2, this.opacity = +r2;
      }
      function Ue() {
        return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}`;
      }
      function Ie() {
        const t2 = Oe(this.opacity);
        return `${1 === t2 ? "rgb(" : "rgba("}${Be(this.r)}, ${Be(this.g)}, ${Be(this.b)}${1 === t2 ? ")" : `, ${t2})`}`;
      }
      function Oe(t2) {
        return isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2));
      }
      function Be(t2) {
        return Math.max(0, Math.min(255, Math.round(t2) || 0));
      }
      function Ye(t2) {
        return ((t2 = Be(t2)) < 16 ? "0" : "") + t2.toString(16);
      }
      function Le(t2, n2, e2, r2) {
        return r2 <= 0 ? t2 = n2 = e2 = NaN : e2 <= 0 || e2 >= 1 ? t2 = n2 = NaN : n2 <= 0 && (t2 = NaN), new Xe(t2, n2, e2, r2);
      }
      function je(t2) {
        if (t2 instanceof Xe)
          return new Xe(t2.h, t2.s, t2.l, t2.opacity);
        if (t2 instanceof ye || (t2 = ze(t2)), !t2)
          return new Xe();
        if (t2 instanceof Xe)
          return t2;
        var n2 = (t2 = t2.rgb()).r / 255, e2 = t2.g / 255, r2 = t2.b / 255, i2 = Math.min(n2, e2, r2), o2 = Math.max(n2, e2, r2), a2 = NaN, u2 = o2 - i2, c2 = (o2 + i2) / 2;
        return u2 ? (a2 = n2 === o2 ? (e2 - r2) / u2 + 6 * (e2 < r2) : e2 === o2 ? (r2 - n2) / u2 + 2 : (n2 - e2) / u2 + 4, u2 /= c2 < 0.5 ? o2 + i2 : 2 - o2 - i2, a2 *= 60) : u2 = c2 > 0 && c2 < 1 ? 0 : a2, new Xe(a2, u2, c2, t2.opacity);
      }
      function He(t2, n2, e2, r2) {
        return 1 === arguments.length ? je(t2) : new Xe(t2, n2, e2, null == r2 ? 1 : r2);
      }
      function Xe(t2, n2, e2, r2) {
        this.h = +t2, this.s = +n2, this.l = +e2, this.opacity = +r2;
      }
      function Ge(t2) {
        return (t2 = (t2 || 0) % 360) < 0 ? t2 + 360 : t2;
      }
      function Ve(t2) {
        return Math.max(0, Math.min(1, t2 || 0));
      }
      function We(t2, n2, e2) {
        return 255 * (t2 < 60 ? n2 + (e2 - n2) * t2 / 60 : t2 < 180 ? e2 : t2 < 240 ? n2 + (e2 - n2) * (240 - t2) / 60 : n2);
      }
      pe(ye, ze, { copy(t2) {
        return Object.assign(new this.constructor(), this, t2);
      }, displayable() {
        return this.rgb().displayable();
      }, hex: Ce, formatHex: Ce, formatHex8: function() {
        return this.rgb().formatHex8();
      }, formatHsl: function() {
        return je(this).formatHsl();
      }, formatRgb: Pe, toString: Pe }), pe(qe, Fe, ge(ye, { brighter(t2) {
        return t2 = null == t2 ? _e : Math.pow(_e, t2), new qe(this.r * t2, this.g * t2, this.b * t2, this.opacity);
      }, darker(t2) {
        return t2 = null == t2 ? ve : Math.pow(ve, t2), new qe(this.r * t2, this.g * t2, this.b * t2, this.opacity);
      }, rgb() {
        return this;
      }, clamp() {
        return new qe(Be(this.r), Be(this.g), Be(this.b), Oe(this.opacity));
      }, displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: Ue, formatHex: Ue, formatHex8: function() {
        return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}${Ye(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
      }, formatRgb: Ie, toString: Ie })), pe(Xe, He, ge(ye, { brighter(t2) {
        return t2 = null == t2 ? _e : Math.pow(_e, t2), new Xe(this.h, this.s, this.l * t2, this.opacity);
      }, darker(t2) {
        return t2 = null == t2 ? ve : Math.pow(ve, t2), new Xe(this.h, this.s, this.l * t2, this.opacity);
      }, rgb() {
        var t2 = this.h % 360 + 360 * (this.h < 0), n2 = isNaN(t2) || isNaN(this.s) ? 0 : this.s, e2 = this.l, r2 = e2 + (e2 < 0.5 ? e2 : 1 - e2) * n2, i2 = 2 * e2 - r2;
        return new qe(We(t2 >= 240 ? t2 - 240 : t2 + 120, i2, r2), We(t2, i2, r2), We(t2 < 120 ? t2 + 240 : t2 - 120, i2, r2), this.opacity);
      }, clamp() {
        return new Xe(Ge(this.h), Ve(this.s), Ve(this.l), Oe(this.opacity));
      }, displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl() {
        const t2 = Oe(this.opacity);
        return `${1 === t2 ? "hsl(" : "hsla("}${Ge(this.h)}, ${100 * Ve(this.s)}%, ${100 * Ve(this.l)}%${1 === t2 ? ")" : `, ${t2})`}`;
      } }));
      const Ze = Math.PI / 180, Ke = 180 / Math.PI, Qe = 0.96422, Je = 1, tr = 0.82521, nr = 4 / 29, er = 6 / 29, rr = 3 * er * er, ir = er * er * er;
      function or(t2) {
        if (t2 instanceof ur)
          return new ur(t2.l, t2.a, t2.b, t2.opacity);
        if (t2 instanceof pr)
          return gr(t2);
        t2 instanceof qe || (t2 = Re(t2));
        var n2, e2, r2 = lr(t2.r), i2 = lr(t2.g), o2 = lr(t2.b), a2 = cr((0.2225045 * r2 + 0.7168786 * i2 + 0.0606169 * o2) / Je);
        return r2 === i2 && i2 === o2 ? n2 = e2 = a2 : (n2 = cr((0.4360747 * r2 + 0.3850649 * i2 + 0.1430804 * o2) / Qe), e2 = cr((0.0139322 * r2 + 0.0971045 * i2 + 0.7141733 * o2) / tr)), new ur(116 * a2 - 16, 500 * (n2 - a2), 200 * (a2 - e2), t2.opacity);
      }
      function ar(t2, n2, e2, r2) {
        return 1 === arguments.length ? or(t2) : new ur(t2, n2, e2, null == r2 ? 1 : r2);
      }
      function ur(t2, n2, e2, r2) {
        this.l = +t2, this.a = +n2, this.b = +e2, this.opacity = +r2;
      }
      function cr(t2) {
        return t2 > ir ? Math.pow(t2, 1 / 3) : t2 / rr + nr;
      }
      function fr(t2) {
        return t2 > er ? t2 * t2 * t2 : rr * (t2 - nr);
      }
      function sr(t2) {
        return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
      }
      function lr(t2) {
        return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
      }
      function hr(t2) {
        if (t2 instanceof pr)
          return new pr(t2.h, t2.c, t2.l, t2.opacity);
        if (t2 instanceof ur || (t2 = or(t2)), 0 === t2.a && 0 === t2.b)
          return new pr(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
        var n2 = Math.atan2(t2.b, t2.a) * Ke;
        return new pr(n2 < 0 ? n2 + 360 : n2, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
      }
      function dr(t2, n2, e2, r2) {
        return 1 === arguments.length ? hr(t2) : new pr(t2, n2, e2, null == r2 ? 1 : r2);
      }
      function pr(t2, n2, e2, r2) {
        this.h = +t2, this.c = +n2, this.l = +e2, this.opacity = +r2;
      }
      function gr(t2) {
        if (isNaN(t2.h))
          return new ur(t2.l, 0, 0, t2.opacity);
        var n2 = t2.h * Ze;
        return new ur(t2.l, Math.cos(n2) * t2.c, Math.sin(n2) * t2.c, t2.opacity);
      }
      pe(ur, ar, ge(ye, { brighter(t2) {
        return new ur(this.l + 18 * (null == t2 ? 1 : t2), this.a, this.b, this.opacity);
      }, darker(t2) {
        return new ur(this.l - 18 * (null == t2 ? 1 : t2), this.a, this.b, this.opacity);
      }, rgb() {
        var t2 = (this.l + 16) / 116, n2 = isNaN(this.a) ? t2 : t2 + this.a / 500, e2 = isNaN(this.b) ? t2 : t2 - this.b / 200;
        return new qe(sr(3.1338561 * (n2 = Qe * fr(n2)) - 1.6168667 * (t2 = Je * fr(t2)) - 0.4906146 * (e2 = tr * fr(e2))), sr(-0.9787684 * n2 + 1.9161415 * t2 + 0.033454 * e2), sr(0.0719453 * n2 - 0.2289914 * t2 + 1.4052427 * e2), this.opacity);
      } })), pe(pr, dr, ge(ye, { brighter(t2) {
        return new pr(this.h, this.c, this.l + 18 * (null == t2 ? 1 : t2), this.opacity);
      }, darker(t2) {
        return new pr(this.h, this.c, this.l - 18 * (null == t2 ? 1 : t2), this.opacity);
      }, rgb() {
        return gr(this).rgb();
      } }));
      var yr = -0.14861, vr = 1.78277, _r = -0.29227, br = -0.90649, mr = 1.97294, xr = mr * br, wr = mr * vr, Mr = vr * _r - br * yr;
      function Tr(t2, n2, e2, r2) {
        return 1 === arguments.length ? function(t3) {
          if (t3 instanceof Ar)
            return new Ar(t3.h, t3.s, t3.l, t3.opacity);
          t3 instanceof qe || (t3 = Re(t3));
          var n3 = t3.r / 255, e3 = t3.g / 255, r3 = t3.b / 255, i2 = (Mr * r3 + xr * n3 - wr * e3) / (Mr + xr - wr), o2 = r3 - i2, a2 = (mr * (e3 - i2) - _r * o2) / br, u2 = Math.sqrt(a2 * a2 + o2 * o2) / (mr * i2 * (1 - i2)), c2 = u2 ? Math.atan2(a2, o2) * Ke - 120 : NaN;
          return new Ar(c2 < 0 ? c2 + 360 : c2, u2, i2, t3.opacity);
        }(t2) : new Ar(t2, n2, e2, null == r2 ? 1 : r2);
      }
      function Ar(t2, n2, e2, r2) {
        this.h = +t2, this.s = +n2, this.l = +e2, this.opacity = +r2;
      }
      function Sr(t2, n2, e2, r2, i2) {
        var o2 = t2 * t2, a2 = o2 * t2;
        return ((1 - 3 * t2 + 3 * o2 - a2) * n2 + (4 - 6 * o2 + 3 * a2) * e2 + (1 + 3 * t2 + 3 * o2 - 3 * a2) * r2 + a2 * i2) / 6;
      }
      function Er(t2) {
        var n2 = t2.length - 1;
        return function(e2) {
          var r2 = e2 <= 0 ? e2 = 0 : e2 >= 1 ? (e2 = 1, n2 - 1) : Math.floor(e2 * n2), i2 = t2[r2], o2 = t2[r2 + 1], a2 = r2 > 0 ? t2[r2 - 1] : 2 * i2 - o2, u2 = r2 < n2 - 1 ? t2[r2 + 2] : 2 * o2 - i2;
          return Sr((e2 - r2 / n2) * n2, a2, i2, o2, u2);
        };
      }
      function Nr(t2) {
        var n2 = t2.length;
        return function(e2) {
          var r2 = Math.floor(((e2 %= 1) < 0 ? ++e2 : e2) * n2), i2 = t2[(r2 + n2 - 1) % n2], o2 = t2[r2 % n2], a2 = t2[(r2 + 1) % n2], u2 = t2[(r2 + 2) % n2];
          return Sr((e2 - r2 / n2) * n2, i2, o2, a2, u2);
        };
      }
      pe(Ar, Tr, ge(ye, { brighter(t2) {
        return t2 = null == t2 ? _e : Math.pow(_e, t2), new Ar(this.h, this.s, this.l * t2, this.opacity);
      }, darker(t2) {
        return t2 = null == t2 ? ve : Math.pow(ve, t2), new Ar(this.h, this.s, this.l * t2, this.opacity);
      }, rgb() {
        var t2 = isNaN(this.h) ? 0 : (this.h + 120) * Ze, n2 = +this.l, e2 = isNaN(this.s) ? 0 : this.s * n2 * (1 - n2), r2 = Math.cos(t2), i2 = Math.sin(t2);
        return new qe(255 * (n2 + e2 * (yr * r2 + vr * i2)), 255 * (n2 + e2 * (_r * r2 + br * i2)), 255 * (n2 + e2 * (mr * r2)), this.opacity);
      } }));
      var kr = (t2) => () => t2;
      function Cr(t2, n2) {
        return function(e2) {
          return t2 + e2 * n2;
        };
      }
      function Pr(t2, n2) {
        var e2 = n2 - t2;
        return e2 ? Cr(t2, e2 > 180 || e2 < -180 ? e2 - 360 * Math.round(e2 / 360) : e2) : kr(isNaN(t2) ? n2 : t2);
      }
      function zr(t2) {
        return 1 == (t2 = +t2) ? $r : function(n2, e2) {
          return e2 - n2 ? function(t3, n3, e3) {
            return t3 = Math.pow(t3, e3), n3 = Math.pow(n3, e3) - t3, e3 = 1 / e3, function(r2) {
              return Math.pow(t3 + r2 * n3, e3);
            };
          }(n2, e2, t2) : kr(isNaN(n2) ? e2 : n2);
        };
      }
      function $r(t2, n2) {
        var e2 = n2 - t2;
        return e2 ? Cr(t2, e2) : kr(isNaN(t2) ? n2 : t2);
      }
      var Dr = function t2(n2) {
        var e2 = zr(n2);
        function r2(t3, n3) {
          var r3 = e2((t3 = Fe(t3)).r, (n3 = Fe(n3)).r), i2 = e2(t3.g, n3.g), o2 = e2(t3.b, n3.b), a2 = $r(t3.opacity, n3.opacity);
          return function(n4) {
            return t3.r = r3(n4), t3.g = i2(n4), t3.b = o2(n4), t3.opacity = a2(n4), t3 + "";
          };
        }
        return r2.gamma = t2, r2;
      }(1);
      function Rr(t2) {
        return function(n2) {
          var e2, r2, i2 = n2.length, o2 = new Array(i2), a2 = new Array(i2), u2 = new Array(i2);
          for (e2 = 0; e2 < i2; ++e2)
            r2 = Fe(n2[e2]), o2[e2] = r2.r || 0, a2[e2] = r2.g || 0, u2[e2] = r2.b || 0;
          return o2 = t2(o2), a2 = t2(a2), u2 = t2(u2), r2.opacity = 1, function(t3) {
            return r2.r = o2(t3), r2.g = a2(t3), r2.b = u2(t3), r2 + "";
          };
        };
      }
      var Fr = Rr(Er), qr = Rr(Nr);
      function Ur(t2, n2) {
        n2 || (n2 = []);
        var e2, r2 = t2 ? Math.min(n2.length, t2.length) : 0, i2 = n2.slice();
        return function(o2) {
          for (e2 = 0; e2 < r2; ++e2)
            i2[e2] = t2[e2] * (1 - o2) + n2[e2] * o2;
          return i2;
        };
      }
      function Ir(t2) {
        return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
      }
      function Or(t2, n2) {
        var e2, r2 = n2 ? n2.length : 0, i2 = t2 ? Math.min(r2, t2.length) : 0, o2 = new Array(i2), a2 = new Array(r2);
        for (e2 = 0; e2 < i2; ++e2)
          o2[e2] = Gr(t2[e2], n2[e2]);
        for (; e2 < r2; ++e2)
          a2[e2] = n2[e2];
        return function(t3) {
          for (e2 = 0; e2 < i2; ++e2)
            a2[e2] = o2[e2](t3);
          return a2;
        };
      }
      function Br(t2, n2) {
        var e2 = /* @__PURE__ */ new Date();
        return t2 = +t2, n2 = +n2, function(r2) {
          return e2.setTime(t2 * (1 - r2) + n2 * r2), e2;
        };
      }
      function Yr(t2, n2) {
        return t2 = +t2, n2 = +n2, function(e2) {
          return t2 * (1 - e2) + n2 * e2;
        };
      }
      function Lr(t2, n2) {
        var e2, r2 = {}, i2 = {};
        for (e2 in null !== t2 && "object" == typeof t2 || (t2 = {}), null !== n2 && "object" == typeof n2 || (n2 = {}), n2)
          e2 in t2 ? r2[e2] = Gr(t2[e2], n2[e2]) : i2[e2] = n2[e2];
        return function(t3) {
          for (e2 in r2)
            i2[e2] = r2[e2](t3);
          return i2;
        };
      }
      var jr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Hr = new RegExp(jr.source, "g");
      function Xr(t2, n2) {
        var e2, r2, i2, o2 = jr.lastIndex = Hr.lastIndex = 0, a2 = -1, u2 = [], c2 = [];
        for (t2 += "", n2 += ""; (e2 = jr.exec(t2)) && (r2 = Hr.exec(n2)); )
          (i2 = r2.index) > o2 && (i2 = n2.slice(o2, i2), u2[a2] ? u2[a2] += i2 : u2[++a2] = i2), (e2 = e2[0]) === (r2 = r2[0]) ? u2[a2] ? u2[a2] += r2 : u2[++a2] = r2 : (u2[++a2] = null, c2.push({ i: a2, x: Yr(e2, r2) })), o2 = Hr.lastIndex;
        return o2 < n2.length && (i2 = n2.slice(o2), u2[a2] ? u2[a2] += i2 : u2[++a2] = i2), u2.length < 2 ? c2[0] ? /* @__PURE__ */ function(t3) {
          return function(n3) {
            return t3(n3) + "";
          };
        }(c2[0].x) : /* @__PURE__ */ function(t3) {
          return function() {
            return t3;
          };
        }(n2) : (n2 = c2.length, function(t3) {
          for (var e3, r3 = 0; r3 < n2; ++r3)
            u2[(e3 = c2[r3]).i] = e3.x(t3);
          return u2.join("");
        });
      }
      function Gr(t2, n2) {
        var e2, r2 = typeof n2;
        return null == n2 || "boolean" === r2 ? kr(n2) : ("number" === r2 ? Yr : "string" === r2 ? (e2 = ze(n2)) ? (n2 = e2, Dr) : Xr : n2 instanceof ze ? Dr : n2 instanceof Date ? Br : Ir(n2) ? Ur : Array.isArray(n2) ? Or : "function" != typeof n2.valueOf && "function" != typeof n2.toString || isNaN(n2) ? Lr : Yr)(t2, n2);
      }
      function Vr(t2, n2) {
        return t2 = +t2, n2 = +n2, function(e2) {
          return Math.round(t2 * (1 - e2) + n2 * e2);
        };
      }
      var Wr, Zr = 180 / Math.PI, Kr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function Qr(t2, n2, e2, r2, i2, o2) {
        var a2, u2, c2;
        return (a2 = Math.sqrt(t2 * t2 + n2 * n2)) && (t2 /= a2, n2 /= a2), (c2 = t2 * e2 + n2 * r2) && (e2 -= t2 * c2, r2 -= n2 * c2), (u2 = Math.sqrt(e2 * e2 + r2 * r2)) && (e2 /= u2, r2 /= u2, c2 /= u2), t2 * r2 < n2 * e2 && (t2 = -t2, n2 = -n2, c2 = -c2, a2 = -a2), { translateX: i2, translateY: o2, rotate: Math.atan2(n2, t2) * Zr, skewX: Math.atan(c2) * Zr, scaleX: a2, scaleY: u2 };
      }
      function Jr(t2, n2, e2, r2) {
        function i2(t3) {
          return t3.length ? t3.pop() + " " : "";
        }
        return function(o2, a2) {
          var u2 = [], c2 = [];
          return o2 = t2(o2), a2 = t2(a2), function(t3, r3, i3, o3, a3, u3) {
            if (t3 !== i3 || r3 !== o3) {
              var c3 = a3.push("translate(", null, n2, null, e2);
              u3.push({ i: c3 - 4, x: Yr(t3, i3) }, { i: c3 - 2, x: Yr(r3, o3) });
            } else
              (i3 || o3) && a3.push("translate(" + i3 + n2 + o3 + e2);
          }(o2.translateX, o2.translateY, a2.translateX, a2.translateY, u2, c2), function(t3, n3, e3, o3) {
            t3 !== n3 ? (t3 - n3 > 180 ? n3 += 360 : n3 - t3 > 180 && (t3 += 360), o3.push({ i: e3.push(i2(e3) + "rotate(", null, r2) - 2, x: Yr(t3, n3) })) : n3 && e3.push(i2(e3) + "rotate(" + n3 + r2);
          }(o2.rotate, a2.rotate, u2, c2), function(t3, n3, e3, o3) {
            t3 !== n3 ? o3.push({ i: e3.push(i2(e3) + "skewX(", null, r2) - 2, x: Yr(t3, n3) }) : n3 && e3.push(i2(e3) + "skewX(" + n3 + r2);
          }(o2.skewX, a2.skewX, u2, c2), function(t3, n3, e3, r3, o3, a3) {
            if (t3 !== e3 || n3 !== r3) {
              var u3 = o3.push(i2(o3) + "scale(", null, ",", null, ")");
              a3.push({ i: u3 - 4, x: Yr(t3, e3) }, { i: u3 - 2, x: Yr(n3, r3) });
            } else
              1 === e3 && 1 === r3 || o3.push(i2(o3) + "scale(" + e3 + "," + r3 + ")");
          }(o2.scaleX, o2.scaleY, a2.scaleX, a2.scaleY, u2, c2), o2 = a2 = null, function(t3) {
            for (var n3, e3 = -1, r3 = c2.length; ++e3 < r3; )
              u2[(n3 = c2[e3]).i] = n3.x(t3);
            return u2.join("");
          };
        };
      }
      var ti = Jr(function(t2) {
        const n2 = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
        return n2.isIdentity ? Kr : Qr(n2.a, n2.b, n2.c, n2.d, n2.e, n2.f);
      }, "px, ", "px)", "deg)"), ni = Jr(function(t2) {
        return null == t2 ? Kr : (Wr || (Wr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wr.setAttribute("transform", t2), (t2 = Wr.transform.baseVal.consolidate()) ? Qr((t2 = t2.matrix).a, t2.b, t2.c, t2.d, t2.e, t2.f) : Kr);
      }, ", ", ")", ")");
      function ei(t2) {
        return ((t2 = Math.exp(t2)) + 1 / t2) / 2;
      }
      var ri = function t2(n2, e2, r2) {
        function i2(t3, i3) {
          var o2, a2, u2 = t3[0], c2 = t3[1], f2 = t3[2], s2 = i3[0], l2 = i3[1], h2 = i3[2], d2 = s2 - u2, p2 = l2 - c2, g2 = d2 * d2 + p2 * p2;
          if (g2 < 1e-12)
            a2 = Math.log(h2 / f2) / n2, o2 = function(t4) {
              return [u2 + t4 * d2, c2 + t4 * p2, f2 * Math.exp(n2 * t4 * a2)];
            };
          else {
            var y2 = Math.sqrt(g2), v2 = (h2 * h2 - f2 * f2 + r2 * g2) / (2 * f2 * e2 * y2), _2 = (h2 * h2 - f2 * f2 - r2 * g2) / (2 * h2 * e2 * y2), b2 = Math.log(Math.sqrt(v2 * v2 + 1) - v2), m2 = Math.log(Math.sqrt(_2 * _2 + 1) - _2);
            a2 = (m2 - b2) / n2, o2 = function(t4) {
              var r3 = t4 * a2, i4 = ei(b2), o3 = f2 / (e2 * y2) * (i4 * function(t5) {
                return ((t5 = Math.exp(2 * t5)) - 1) / (t5 + 1);
              }(n2 * r3 + b2) - function(t5) {
                return ((t5 = Math.exp(t5)) - 1 / t5) / 2;
              }(b2));
              return [u2 + o3 * d2, c2 + o3 * p2, f2 * i4 / ei(n2 * r3 + b2)];
            };
          }
          return o2.duration = 1e3 * a2 * n2 / Math.SQRT2, o2;
        }
        return i2.rho = function(n3) {
          var e3 = Math.max(1e-3, +n3), r3 = e3 * e3;
          return t2(e3, r3, r3 * r3);
        }, i2;
      }(Math.SQRT2, 2, 4);
      function ii(t2) {
        return function(n2, e2) {
          var r2 = t2((n2 = He(n2)).h, (e2 = He(e2)).h), i2 = $r(n2.s, e2.s), o2 = $r(n2.l, e2.l), a2 = $r(n2.opacity, e2.opacity);
          return function(t3) {
            return n2.h = r2(t3), n2.s = i2(t3), n2.l = o2(t3), n2.opacity = a2(t3), n2 + "";
          };
        };
      }
      var oi = ii(Pr), ai = ii($r);
      function ui(t2) {
        return function(n2, e2) {
          var r2 = t2((n2 = dr(n2)).h, (e2 = dr(e2)).h), i2 = $r(n2.c, e2.c), o2 = $r(n2.l, e2.l), a2 = $r(n2.opacity, e2.opacity);
          return function(t3) {
            return n2.h = r2(t3), n2.c = i2(t3), n2.l = o2(t3), n2.opacity = a2(t3), n2 + "";
          };
        };
      }
      var ci = ui(Pr), fi = ui($r);
      function si(t2) {
        return function n2(e2) {
          function r2(n3, r3) {
            var i2 = t2((n3 = Tr(n3)).h, (r3 = Tr(r3)).h), o2 = $r(n3.s, r3.s), a2 = $r(n3.l, r3.l), u2 = $r(n3.opacity, r3.opacity);
            return function(t3) {
              return n3.h = i2(t3), n3.s = o2(t3), n3.l = a2(Math.pow(t3, e2)), n3.opacity = u2(t3), n3 + "";
            };
          }
          return e2 = +e2, r2.gamma = n2, r2;
        }(1);
      }
      var li = si(Pr), hi = si($r);
      function di(t2, n2) {
        void 0 === n2 && (n2 = t2, t2 = Gr);
        for (var e2 = 0, r2 = n2.length - 1, i2 = n2[0], o2 = new Array(r2 < 0 ? 0 : r2); e2 < r2; )
          o2[e2] = t2(i2, i2 = n2[++e2]);
        return function(t3) {
          var n3 = Math.max(0, Math.min(r2 - 1, Math.floor(t3 *= r2)));
          return o2[n3](t3 - n3);
        };
      }
      var pi, gi, yi = 0, vi = 0, _i = 0, bi = 1e3, mi = 0, xi = 0, wi = 0, Mi = "object" == typeof performance && performance.now ? performance : Date, Ti = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
        setTimeout(t2, 17);
      };
      function Ai() {
        return xi || (Ti(Si), xi = Mi.now() + wi);
      }
      function Si() {
        xi = 0;
      }
      function Ei() {
        this._call = this._time = this._next = null;
      }
      function Ni(t2, n2, e2) {
        var r2 = new Ei();
        return r2.restart(t2, n2, e2), r2;
      }
      function ki() {
        Ai(), ++yi;
        for (var t2, n2 = pi; n2; )
          (t2 = xi - n2._time) >= 0 && n2._call.call(void 0, t2), n2 = n2._next;
        --yi;
      }
      function Ci() {
        xi = (mi = Mi.now()) + wi, yi = vi = 0;
        try {
          ki();
        } finally {
          yi = 0, function() {
            var t2, n2, e2 = pi, r2 = 1 / 0;
            for (; e2; )
              e2._call ? (r2 > e2._time && (r2 = e2._time), t2 = e2, e2 = e2._next) : (n2 = e2._next, e2._next = null, e2 = t2 ? t2._next = n2 : pi = n2);
            gi = t2, zi(r2);
          }(), xi = 0;
        }
      }
      function Pi() {
        var t2 = Mi.now(), n2 = t2 - mi;
        n2 > bi && (wi -= n2, mi = t2);
      }
      function zi(t2) {
        yi || (vi && (vi = clearTimeout(vi)), t2 - xi > 24 ? (t2 < 1 / 0 && (vi = setTimeout(Ci, t2 - Mi.now() - wi)), _i && (_i = clearInterval(_i))) : (_i || (mi = Mi.now(), _i = setInterval(Pi, bi)), yi = 1, Ti(Ci)));
      }
      function $i(t2, n2, e2) {
        var r2 = new Ei();
        return n2 = null == n2 ? 0 : +n2, r2.restart((e3) => {
          r2.stop(), t2(e3 + n2);
        }, n2, e2), r2;
      }
      Ei.prototype = Ni.prototype = { constructor: Ei, restart: function(t2, n2, e2) {
        if ("function" != typeof t2)
          throw new TypeError("callback is not a function");
        e2 = (null == e2 ? Ai() : +e2) + (null == n2 ? 0 : +n2), this._next || gi === this || (gi ? gi._next = this : pi = this, gi = this), this._call = t2, this._time = e2, zi();
      }, stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, zi());
      } };
      var Di = $t("start", "end", "cancel", "interrupt"), Ri = [], Fi = 0, qi = 1, Ui = 2, Ii = 3, Oi = 4, Bi = 5, Yi = 6;
      function Li(t2, n2, e2, r2, i2, o2) {
        var a2 = t2.__transition;
        if (a2) {
          if (e2 in a2)
            return;
        } else
          t2.__transition = {};
        !function(t3, n3, e3) {
          var r3, i3 = t3.__transition;
          function o3(t4) {
            e3.state = qi, e3.timer.restart(a3, e3.delay, e3.time), e3.delay <= t4 && a3(t4 - e3.delay);
          }
          function a3(o4) {
            var f2, s2, l2, h2;
            if (e3.state !== qi)
              return c2();
            for (f2 in i3)
              if ((h2 = i3[f2]).name === e3.name) {
                if (h2.state === Ii)
                  return $i(a3);
                h2.state === Oi ? (h2.state = Yi, h2.timer.stop(), h2.on.call("interrupt", t3, t3.__data__, h2.index, h2.group), delete i3[f2]) : +f2 < n3 && (h2.state = Yi, h2.timer.stop(), h2.on.call("cancel", t3, t3.__data__, h2.index, h2.group), delete i3[f2]);
              }
            if ($i(function() {
              e3.state === Ii && (e3.state = Oi, e3.timer.restart(u2, e3.delay, e3.time), u2(o4));
            }), e3.state = Ui, e3.on.call("start", t3, t3.__data__, e3.index, e3.group), e3.state === Ui) {
              for (e3.state = Ii, r3 = new Array(l2 = e3.tween.length), f2 = 0, s2 = -1; f2 < l2; ++f2)
                (h2 = e3.tween[f2].value.call(t3, t3.__data__, e3.index, e3.group)) && (r3[++s2] = h2);
              r3.length = s2 + 1;
            }
          }
          function u2(n4) {
            for (var i4 = n4 < e3.duration ? e3.ease.call(null, n4 / e3.duration) : (e3.timer.restart(c2), e3.state = Bi, 1), o4 = -1, a4 = r3.length; ++o4 < a4; )
              r3[o4].call(t3, i4);
            e3.state === Bi && (e3.on.call("end", t3, t3.__data__, e3.index, e3.group), c2());
          }
          function c2() {
            for (var r4 in e3.state = Yi, e3.timer.stop(), delete i3[n3], i3)
              return;
            delete t3.__transition;
          }
          i3[n3] = e3, e3.timer = Ni(o3, 0, e3.time);
        }(t2, e2, { name: n2, index: r2, group: i2, on: Di, tween: Ri, time: o2.time, delay: o2.delay, duration: o2.duration, ease: o2.ease, timer: null, state: Fi });
      }
      function ji(t2, n2) {
        var e2 = Xi(t2, n2);
        if (e2.state > Fi)
          throw new Error("too late; already scheduled");
        return e2;
      }
      function Hi(t2, n2) {
        var e2 = Xi(t2, n2);
        if (e2.state > Ii)
          throw new Error("too late; already running");
        return e2;
      }
      function Xi(t2, n2) {
        var e2 = t2.__transition;
        if (!e2 || !(e2 = e2[n2]))
          throw new Error("transition not found");
        return e2;
      }
      function Gi(t2, n2) {
        var e2, r2, i2, o2 = t2.__transition, a2 = true;
        if (o2) {
          for (i2 in n2 = null == n2 ? null : n2 + "", o2)
            (e2 = o2[i2]).name === n2 ? (r2 = e2.state > Ui && e2.state < Bi, e2.state = Yi, e2.timer.stop(), e2.on.call(r2 ? "interrupt" : "cancel", t2, t2.__data__, e2.index, e2.group), delete o2[i2]) : a2 = false;
          a2 && delete t2.__transition;
        }
      }
      function Vi(t2, n2) {
        var e2, r2;
        return function() {
          var i2 = Hi(this, t2), o2 = i2.tween;
          if (o2 !== e2) {
            for (var a2 = 0, u2 = (r2 = e2 = o2).length; a2 < u2; ++a2)
              if (r2[a2].name === n2) {
                (r2 = r2.slice()).splice(a2, 1);
                break;
              }
          }
          i2.tween = r2;
        };
      }
      function Wi(t2, n2, e2) {
        var r2, i2;
        if ("function" != typeof e2)
          throw new Error();
        return function() {
          var o2 = Hi(this, t2), a2 = o2.tween;
          if (a2 !== r2) {
            i2 = (r2 = a2).slice();
            for (var u2 = { name: n2, value: e2 }, c2 = 0, f2 = i2.length; c2 < f2; ++c2)
              if (i2[c2].name === n2) {
                i2[c2] = u2;
                break;
              }
            c2 === f2 && i2.push(u2);
          }
          o2.tween = i2;
        };
      }
      function Zi(t2, n2, e2) {
        var r2 = t2._id;
        return t2.each(function() {
          var t3 = Hi(this, r2);
          (t3.value || (t3.value = {}))[n2] = e2.apply(this, arguments);
        }), function(t3) {
          return Xi(t3, r2).value[n2];
        };
      }
      function Ki(t2, n2) {
        var e2;
        return ("number" == typeof n2 ? Yr : n2 instanceof ze ? Dr : (e2 = ze(n2)) ? (n2 = e2, Dr) : Xr)(t2, n2);
      }
      function Qi(t2) {
        return function() {
          this.removeAttribute(t2);
        };
      }
      function Ji(t2) {
        return function() {
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function to(t2, n2, e2) {
        var r2, i2, o2 = e2 + "";
        return function() {
          var a2 = this.getAttribute(t2);
          return a2 === o2 ? null : a2 === r2 ? i2 : i2 = n2(r2 = a2, e2);
        };
      }
      function no(t2, n2, e2) {
        var r2, i2, o2 = e2 + "";
        return function() {
          var a2 = this.getAttributeNS(t2.space, t2.local);
          return a2 === o2 ? null : a2 === r2 ? i2 : i2 = n2(r2 = a2, e2);
        };
      }
      function eo(t2, n2, e2) {
        var r2, i2, o2;
        return function() {
          var a2, u2, c2 = e2(this);
          if (null != c2)
            return (a2 = this.getAttribute(t2)) === (u2 = c2 + "") ? null : a2 === r2 && u2 === i2 ? o2 : (i2 = u2, o2 = n2(r2 = a2, c2));
          this.removeAttribute(t2);
        };
      }
      function ro(t2, n2, e2) {
        var r2, i2, o2;
        return function() {
          var a2, u2, c2 = e2(this);
          if (null != c2)
            return (a2 = this.getAttributeNS(t2.space, t2.local)) === (u2 = c2 + "") ? null : a2 === r2 && u2 === i2 ? o2 : (i2 = u2, o2 = n2(r2 = a2, c2));
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function io(t2, n2) {
        var e2, r2;
        function i2() {
          var i3 = n2.apply(this, arguments);
          return i3 !== r2 && (e2 = (r2 = i3) && /* @__PURE__ */ function(t3, n3) {
            return function(e3) {
              this.setAttributeNS(t3.space, t3.local, n3.call(this, e3));
            };
          }(t2, i3)), e2;
        }
        return i2._value = n2, i2;
      }
      function oo(t2, n2) {
        var e2, r2;
        function i2() {
          var i3 = n2.apply(this, arguments);
          return i3 !== r2 && (e2 = (r2 = i3) && /* @__PURE__ */ function(t3, n3) {
            return function(e3) {
              this.setAttribute(t3, n3.call(this, e3));
            };
          }(t2, i3)), e2;
        }
        return i2._value = n2, i2;
      }
      function ao(t2, n2) {
        return function() {
          ji(this, t2).delay = +n2.apply(this, arguments);
        };
      }
      function uo(t2, n2) {
        return n2 = +n2, function() {
          ji(this, t2).delay = n2;
        };
      }
      function co(t2, n2) {
        return function() {
          Hi(this, t2).duration = +n2.apply(this, arguments);
        };
      }
      function fo(t2, n2) {
        return n2 = +n2, function() {
          Hi(this, t2).duration = n2;
        };
      }
      var so = Wn.prototype.constructor;
      function lo(t2) {
        return function() {
          this.style.removeProperty(t2);
        };
      }
      var ho = 0;
      function po(t2, n2, e2, r2) {
        this._groups = t2, this._parents = n2, this._name = e2, this._id = r2;
      }
      function go(t2) {
        return Wn().transition(t2);
      }
      function yo() {
        return ++ho;
      }
      var vo = Wn.prototype;
      po.prototype = go.prototype = { constructor: po, select: function(t2) {
        var n2 = this._name, e2 = this._id;
        "function" != typeof t2 && (t2 = jt(t2));
        for (var r2 = this._groups, i2 = r2.length, o2 = new Array(i2), a2 = 0; a2 < i2; ++a2)
          for (var u2, c2, f2 = r2[a2], s2 = f2.length, l2 = o2[a2] = new Array(s2), h2 = 0; h2 < s2; ++h2)
            (u2 = f2[h2]) && (c2 = t2.call(u2, u2.__data__, h2, f2)) && ("__data__" in u2 && (c2.__data__ = u2.__data__), l2[h2] = c2, Li(l2[h2], n2, e2, h2, l2, Xi(u2, e2)));
        return new po(o2, this._parents, n2, e2);
      }, selectAll: function(t2) {
        var n2 = this._name, e2 = this._id;
        "function" != typeof t2 && (t2 = Gt(t2));
        for (var r2 = this._groups, i2 = r2.length, o2 = [], a2 = [], u2 = 0; u2 < i2; ++u2)
          for (var c2, f2 = r2[u2], s2 = f2.length, l2 = 0; l2 < s2; ++l2)
            if (c2 = f2[l2]) {
              for (var h2, d2 = t2.call(c2, c2.__data__, l2, f2), p2 = Xi(c2, e2), g2 = 0, y2 = d2.length; g2 < y2; ++g2)
                (h2 = d2[g2]) && Li(h2, n2, e2, g2, d2, p2);
              o2.push(d2), a2.push(c2);
            }
        return new po(o2, a2, n2, e2);
      }, selectChild: vo.selectChild, selectChildren: vo.selectChildren, filter: function(t2) {
        "function" != typeof t2 && (t2 = Vt(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2 = n2[i2], u2 = a2.length, c2 = r2[i2] = [], f2 = 0; f2 < u2; ++f2)
            (o2 = a2[f2]) && t2.call(o2, o2.__data__, f2, a2) && c2.push(o2);
        return new po(r2, this._parents, this._name, this._id);
      }, merge: function(t2) {
        if (t2._id !== this._id)
          throw new Error();
        for (var n2 = this._groups, e2 = t2._groups, r2 = n2.length, i2 = e2.length, o2 = Math.min(r2, i2), a2 = new Array(r2), u2 = 0; u2 < o2; ++u2)
          for (var c2, f2 = n2[u2], s2 = e2[u2], l2 = f2.length, h2 = a2[u2] = new Array(l2), d2 = 0; d2 < l2; ++d2)
            (c2 = f2[d2] || s2[d2]) && (h2[d2] = c2);
        for (; u2 < r2; ++u2)
          a2[u2] = n2[u2];
        return new po(a2, this._parents, this._name, this._id);
      }, selection: function() {
        return new so(this._groups, this._parents);
      }, transition: function() {
        for (var t2 = this._name, n2 = this._id, e2 = yo(), r2 = this._groups, i2 = r2.length, o2 = 0; o2 < i2; ++o2)
          for (var a2, u2 = r2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            if (a2 = u2[f2]) {
              var s2 = Xi(a2, n2);
              Li(a2, t2, e2, f2, u2, { time: s2.time + s2.delay + s2.duration, delay: 0, duration: s2.duration, ease: s2.ease });
            }
        return new po(r2, this._parents, t2, e2);
      }, call: vo.call, nodes: vo.nodes, node: vo.node, size: vo.size, empty: vo.empty, each: vo.each, on: function(t2, n2) {
        var e2 = this._id;
        return arguments.length < 2 ? Xi(this.node(), e2).on.on(t2) : this.each(function(t3, n3, e3) {
          var r2, i2, o2 = function(t4) {
            return (t4 + "").trim().split(/^|\s+/).every(function(t5) {
              var n4 = t5.indexOf(".");
              return n4 >= 0 && (t5 = t5.slice(0, n4)), !t5 || "start" === t5;
            });
          }(n3) ? ji : Hi;
          return function() {
            var a2 = o2(this, t3), u2 = a2.on;
            u2 !== r2 && (i2 = (r2 = u2).copy()).on(n3, e3), a2.on = i2;
          };
        }(e2, t2, n2));
      }, attr: function(t2, n2) {
        var e2 = It(t2), r2 = "transform" === e2 ? ni : Ki;
        return this.attrTween(t2, "function" == typeof n2 ? (e2.local ? ro : eo)(e2, r2, Zi(this, "attr." + t2, n2)) : null == n2 ? (e2.local ? Ji : Qi)(e2) : (e2.local ? no : to)(e2, r2, n2));
      }, attrTween: function(t2, n2) {
        var e2 = "attr." + t2;
        if (arguments.length < 2)
          return (e2 = this.tween(e2)) && e2._value;
        if (null == n2)
          return this.tween(e2, null);
        if ("function" != typeof n2)
          throw new Error();
        var r2 = It(t2);
        return this.tween(e2, (r2.local ? io : oo)(r2, n2));
      }, style: function(t2, n2, e2) {
        var r2 = "transform" == (t2 += "") ? ti : Ki;
        return null == n2 ? this.styleTween(t2, /* @__PURE__ */ function(t3, n3) {
          var e3, r3, i2;
          return function() {
            var o2 = _n(this, t3), a2 = (this.style.removeProperty(t3), _n(this, t3));
            return o2 === a2 ? null : o2 === e3 && a2 === r3 ? i2 : i2 = n3(e3 = o2, r3 = a2);
          };
        }(t2, r2)).on("end.style." + t2, lo(t2)) : "function" == typeof n2 ? this.styleTween(t2, /* @__PURE__ */ function(t3, n3, e3) {
          var r3, i2, o2;
          return function() {
            var a2 = _n(this, t3), u2 = e3(this), c2 = u2 + "";
            return null == u2 && (this.style.removeProperty(t3), c2 = u2 = _n(this, t3)), a2 === c2 ? null : a2 === r3 && c2 === i2 ? o2 : (i2 = c2, o2 = n3(r3 = a2, u2));
          };
        }(t2, r2, Zi(this, "style." + t2, n2))).each(function(t3, n3) {
          var e3, r3, i2, o2, a2 = "style." + n3, u2 = "end." + a2;
          return function() {
            var c2 = Hi(this, t3), f2 = c2.on, s2 = null == c2.value[a2] ? o2 || (o2 = lo(n3)) : void 0;
            f2 === e3 && i2 === s2 || (r3 = (e3 = f2).copy()).on(u2, i2 = s2), c2.on = r3;
          };
        }(this._id, t2)) : this.styleTween(t2, function(t3, n3, e3) {
          var r3, i2, o2 = e3 + "";
          return function() {
            var a2 = _n(this, t3);
            return a2 === o2 ? null : a2 === r3 ? i2 : i2 = n3(r3 = a2, e3);
          };
        }(t2, r2, n2), e2).on("end.style." + t2, null);
      }, styleTween: function(t2, n2, e2) {
        var r2 = "style." + (t2 += "");
        if (arguments.length < 2)
          return (r2 = this.tween(r2)) && r2._value;
        if (null == n2)
          return this.tween(r2, null);
        if ("function" != typeof n2)
          throw new Error();
        return this.tween(r2, function(t3, n3, e3) {
          var r3, i2;
          function o2() {
            var o3 = n3.apply(this, arguments);
            return o3 !== i2 && (r3 = (i2 = o3) && /* @__PURE__ */ function(t4, n4, e4) {
              return function(r4) {
                this.style.setProperty(t4, n4.call(this, r4), e4);
              };
            }(t3, o3, e3)), r3;
          }
          return o2._value = n3, o2;
        }(t2, n2, null == e2 ? "" : e2));
      }, text: function(t2) {
        return this.tween("text", "function" == typeof t2 ? /* @__PURE__ */ function(t3) {
          return function() {
            var n2 = t3(this);
            this.textContent = null == n2 ? "" : n2;
          };
        }(Zi(this, "text", t2)) : /* @__PURE__ */ function(t3) {
          return function() {
            this.textContent = t3;
          };
        }(null == t2 ? "" : t2 + ""));
      }, textTween: function(t2) {
        var n2 = "text";
        if (arguments.length < 1)
          return (n2 = this.tween(n2)) && n2._value;
        if (null == t2)
          return this.tween(n2, null);
        if ("function" != typeof t2)
          throw new Error();
        return this.tween(n2, function(t3) {
          var n3, e2;
          function r2() {
            var r3 = t3.apply(this, arguments);
            return r3 !== e2 && (n3 = (e2 = r3) && /* @__PURE__ */ function(t4) {
              return function(n4) {
                this.textContent = t4.call(this, n4);
              };
            }(r3)), n3;
          }
          return r2._value = t3, r2;
        }(t2));
      }, remove: function() {
        return this.on("end.remove", /* @__PURE__ */ function(t2) {
          return function() {
            var n2 = this.parentNode;
            for (var e2 in this.__transition)
              if (+e2 !== t2)
                return;
            n2 && n2.removeChild(this);
          };
        }(this._id));
      }, tween: function(t2, n2) {
        var e2 = this._id;
        if (t2 += "", arguments.length < 2) {
          for (var r2, i2 = Xi(this.node(), e2).tween, o2 = 0, a2 = i2.length; o2 < a2; ++o2)
            if ((r2 = i2[o2]).name === t2)
              return r2.value;
          return null;
        }
        return this.each((null == n2 ? Vi : Wi)(e2, t2, n2));
      }, delay: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each(("function" == typeof t2 ? ao : uo)(n2, t2)) : Xi(this.node(), n2).delay;
      }, duration: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each(("function" == typeof t2 ? co : fo)(n2, t2)) : Xi(this.node(), n2).duration;
      }, ease: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each(function(t3, n3) {
          if ("function" != typeof n3)
            throw new Error();
          return function() {
            Hi(this, t3).ease = n3;
          };
        }(n2, t2)) : Xi(this.node(), n2).ease;
      }, easeVarying: function(t2) {
        if ("function" != typeof t2)
          throw new Error();
        return this.each(/* @__PURE__ */ function(t3, n2) {
          return function() {
            var e2 = n2.apply(this, arguments);
            if ("function" != typeof e2)
              throw new Error();
            Hi(this, t3).ease = e2;
          };
        }(this._id, t2));
      }, end: function() {
        var t2, n2, e2 = this, r2 = e2._id, i2 = e2.size();
        return new Promise(function(o2, a2) {
          var u2 = { value: a2 }, c2 = { value: function() {
            0 == --i2 && o2();
          } };
          e2.each(function() {
            var e3 = Hi(this, r2), i3 = e3.on;
            i3 !== t2 && ((n2 = (t2 = i3).copy())._.cancel.push(u2), n2._.interrupt.push(u2), n2._.end.push(c2)), e3.on = n2;
          }), 0 === i2 && o2();
        });
      }, [Symbol.iterator]: vo[Symbol.iterator] };
      function _o(t2) {
        return ((t2 *= 2) <= 1 ? t2 * t2 : --t2 * (2 - t2) + 1) / 2;
      }
      function bo(t2) {
        return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
      }
      var mo = function t2(n2) {
        function e2(t3) {
          return Math.pow(t3, n2);
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), xo = function t2(n2) {
        function e2(t3) {
          return 1 - Math.pow(1 - t3, n2);
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), wo = function t2(n2) {
        function e2(t3) {
          return ((t3 *= 2) <= 1 ? Math.pow(t3, n2) : 2 - Math.pow(2 - t3, n2)) / 2;
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), Mo = Math.PI, To = Mo / 2;
      function Ao(t2) {
        return (1 - Math.cos(Mo * t2)) / 2;
      }
      function So(t2) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t2) - 9765625e-10);
      }
      function Eo(t2) {
        return ((t2 *= 2) <= 1 ? So(1 - t2) : 2 - So(t2 - 1)) / 2;
      }
      function No(t2) {
        return ((t2 *= 2) <= 1 ? 1 - Math.sqrt(1 - t2 * t2) : Math.sqrt(1 - (t2 -= 2) * t2) + 1) / 2;
      }
      var ko = 4 / 11, Co = 6 / 11, Po = 8 / 11, zo = 3 / 4, $o = 9 / 11, Do = 10 / 11, Ro = 15 / 16, Fo = 21 / 22, qo = 63 / 64, Uo = 1 / ko / ko;
      function Io(t2) {
        return (t2 = +t2) < ko ? Uo * t2 * t2 : t2 < Po ? Uo * (t2 -= Co) * t2 + zo : t2 < Do ? Uo * (t2 -= $o) * t2 + Ro : Uo * (t2 -= Fo) * t2 + qo;
      }
      var Oo = 1.70158, Bo = function t2(n2) {
        function e2(t3) {
          return (t3 = +t3) * t3 * (n2 * (t3 - 1) + t3);
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(Oo), Yo = function t2(n2) {
        function e2(t3) {
          return --t3 * t3 * ((t3 + 1) * n2 + t3) + 1;
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(Oo), Lo = function t2(n2) {
        function e2(t3) {
          return ((t3 *= 2) < 1 ? t3 * t3 * ((n2 + 1) * t3 - n2) : (t3 -= 2) * t3 * ((n2 + 1) * t3 + n2) + 2) / 2;
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(Oo), jo = 2 * Math.PI, Ho = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= jo);
        function i2(t3) {
          return n2 * So(- --t3) * Math.sin((r2 - t3) / e2);
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * jo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), Xo = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= jo);
        function i2(t3) {
          return 1 - n2 * So(t3 = +t3) * Math.sin((t3 + r2) / e2);
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * jo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), Go = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= jo);
        function i2(t3) {
          return ((t3 = 2 * t3 - 1) < 0 ? n2 * So(-t3) * Math.sin((r2 - t3) / e2) : 2 - n2 * So(t3) * Math.sin((r2 + t3) / e2)) / 2;
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * jo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), Vo = { time: null, delay: 0, duration: 250, ease: bo };
      function Wo(t2, n2) {
        for (var e2; !(e2 = t2.__transition) || !(e2 = e2[n2]); )
          if (!(t2 = t2.parentNode))
            throw new Error(`transition ${n2} not found`);
        return e2;
      }
      Wn.prototype.interrupt = function(t2) {
        return this.each(function() {
          Gi(this, t2);
        });
      }, Wn.prototype.transition = function(t2) {
        var n2, e2;
        t2 instanceof po ? (n2 = t2._id, t2 = t2._name) : (n2 = yo(), (e2 = Vo).time = Ai(), t2 = null == t2 ? null : t2 + "");
        for (var r2 = this._groups, i2 = r2.length, o2 = 0; o2 < i2; ++o2)
          for (var a2, u2 = r2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            (a2 = u2[f2]) && Li(a2, t2, n2, f2, u2, e2 || Wo(a2, n2));
        return new po(r2, this._parents, t2, n2);
      };
      var Zo = [null];
      var Ko = (t2) => () => t2;
      function Qo(t2, { sourceEvent: n2, target: e2, selection: r2, mode: i2, dispatch: o2 }) {
        Object.defineProperties(this, { type: { value: t2, enumerable: true, configurable: true }, sourceEvent: { value: n2, enumerable: true, configurable: true }, target: { value: e2, enumerable: true, configurable: true }, selection: { value: r2, enumerable: true, configurable: true }, mode: { value: i2, enumerable: true, configurable: true }, _: { value: o2 } });
      }
      function Jo(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      var ta = { name: "drag" }, na = { name: "space" }, ea = { name: "handle" }, ra = { name: "center" };
      const { abs: ia, max: oa, min: aa } = Math;
      function ua(t2) {
        return [+t2[0], +t2[1]];
      }
      function ca(t2) {
        return [ua(t2[0]), ua(t2[1])];
      }
      var fa = { name: "x", handles: ["w", "e"].map(va), input: function(t2, n2) {
        return null == t2 ? null : [[+t2[0], n2[0][1]], [+t2[1], n2[1][1]]];
      }, output: function(t2) {
        return t2 && [t2[0][0], t2[1][0]];
      } }, sa = { name: "y", handles: ["n", "s"].map(va), input: function(t2, n2) {
        return null == t2 ? null : [[n2[0][0], +t2[0]], [n2[1][0], +t2[1]]];
      }, output: function(t2) {
        return t2 && [t2[0][1], t2[1][1]];
      } }, la = { name: "xy", handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(va), input: function(t2) {
        return null == t2 ? null : ca(t2);
      }, output: function(t2) {
        return t2;
      } }, ha = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" }, da = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" }, pa = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" }, ga = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 }, ya = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };
      function va(t2) {
        return { type: t2 };
      }
      function _a(t2) {
        return !t2.ctrlKey && !t2.button;
      }
      function ba() {
        var t2 = this.ownerSVGElement || this;
        return t2.hasAttribute("viewBox") ? [[(t2 = t2.viewBox.baseVal).x, t2.y], [t2.x + t2.width, t2.y + t2.height]] : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]];
      }
      function ma() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function xa(t2) {
        for (; !t2.__brush; )
          if (!(t2 = t2.parentNode))
            return;
        return t2.__brush;
      }
      function wa(t2) {
        var n2, e2 = ba, r2 = _a, i2 = ma, o2 = true, a2 = $t("start", "brush", "end"), u2 = 6;
        function c2(n3) {
          var e3 = n3.property("__brush", g2).selectAll(".overlay").data([va("overlay")]);
          e3.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", ha.overlay).merge(e3).each(function() {
            var t3 = xa(this).extent;
            Zn(this).attr("x", t3[0][0]).attr("y", t3[0][1]).attr("width", t3[1][0] - t3[0][0]).attr("height", t3[1][1] - t3[0][1]);
          }), n3.selectAll(".selection").data([va("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", ha.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
          var r3 = n3.selectAll(".handle").data(t2.handles, function(t3) {
            return t3.type;
          });
          r3.exit().remove(), r3.enter().append("rect").attr("class", function(t3) {
            return "handle handle--" + t3.type;
          }).attr("cursor", function(t3) {
            return ha[t3.type];
          }), n3.each(f2).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h2).filter(i2).on("touchstart.brush", h2).on("touchmove.brush", d2).on("touchend.brush touchcancel.brush", p2).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function f2() {
          var t3 = Zn(this), n3 = xa(this).selection;
          n3 ? (t3.selectAll(".selection").style("display", null).attr("x", n3[0][0]).attr("y", n3[0][1]).attr("width", n3[1][0] - n3[0][0]).attr("height", n3[1][1] - n3[0][1]), t3.selectAll(".handle").style("display", null).attr("x", function(t4) {
            return "e" === t4.type[t4.type.length - 1] ? n3[1][0] - u2 / 2 : n3[0][0] - u2 / 2;
          }).attr("y", function(t4) {
            return "s" === t4.type[0] ? n3[1][1] - u2 / 2 : n3[0][1] - u2 / 2;
          }).attr("width", function(t4) {
            return "n" === t4.type || "s" === t4.type ? n3[1][0] - n3[0][0] + u2 : u2;
          }).attr("height", function(t4) {
            return "e" === t4.type || "w" === t4.type ? n3[1][1] - n3[0][1] + u2 : u2;
          })) : t3.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
        }
        function s2(t3, n3, e3) {
          var r3 = t3.__brush.emitter;
          return !r3 || e3 && r3.clean ? new l2(t3, n3, e3) : r3;
        }
        function l2(t3, n3, e3) {
          this.that = t3, this.args = n3, this.state = t3.__brush, this.active = 0, this.clean = e3;
        }
        function h2(e3) {
          if ((!n2 || e3.touches) && r2.apply(this, arguments)) {
            var i3, a3, u3, c3, l3, h3, d4, p3, g3, y2, v2, _2 = this, b2 = e3.target.__data__.type, m2 = "selection" === (o2 && e3.metaKey ? b2 = "overlay" : b2) ? ta : o2 && e3.altKey ? ra : ea, x2 = t2 === sa ? null : ga[b2], w2 = t2 === fa ? null : ya[b2], M2 = xa(_2), T2 = M2.extent, A2 = M2.selection, S2 = T2[0][0], E2 = T2[0][1], N2 = T2[1][0], k2 = T2[1][1], C2 = 0, P2 = 0, z2 = x2 && w2 && o2 && e3.shiftKey, $2 = Array.from(e3.touches || [e3], (t3) => {
              const n3 = t3.identifier;
              return (t3 = ne(t3, _2)).point0 = t3.slice(), t3.identifier = n3, t3;
            });
            Gi(_2);
            var D2 = s2(_2, arguments, true).beforestart();
            if ("overlay" === b2) {
              A2 && (g3 = true);
              const n3 = [$2[0], $2[1] || $2[0]];
              M2.selection = A2 = [[i3 = t2 === sa ? S2 : aa(n3[0][0], n3[1][0]), u3 = t2 === fa ? E2 : aa(n3[0][1], n3[1][1])], [l3 = t2 === sa ? N2 : oa(n3[0][0], n3[1][0]), d4 = t2 === fa ? k2 : oa(n3[0][1], n3[1][1])]], $2.length > 1 && I2(e3);
            } else
              i3 = A2[0][0], u3 = A2[0][1], l3 = A2[1][0], d4 = A2[1][1];
            a3 = i3, c3 = u3, h3 = l3, p3 = d4;
            var R2 = Zn(_2).attr("pointer-events", "none"), F2 = R2.selectAll(".overlay").attr("cursor", ha[b2]);
            if (e3.touches)
              D2.moved = U2, D2.ended = O2;
            else {
              var q2 = Zn(e3.view).on("mousemove.brush", U2, true).on("mouseup.brush", O2, true);
              o2 && q2.on("keydown.brush", function(t3) {
                switch (t3.keyCode) {
                  case 16:
                    z2 = x2 && w2;
                    break;
                  case 18:
                    m2 === ea && (x2 && (l3 = h3 - C2 * x2, i3 = a3 + C2 * x2), w2 && (d4 = p3 - P2 * w2, u3 = c3 + P2 * w2), m2 = ra, I2(t3));
                    break;
                  case 32:
                    m2 !== ea && m2 !== ra || (x2 < 0 ? l3 = h3 - C2 : x2 > 0 && (i3 = a3 - C2), w2 < 0 ? d4 = p3 - P2 : w2 > 0 && (u3 = c3 - P2), m2 = na, F2.attr("cursor", ha.selection), I2(t3));
                    break;
                  default:
                    return;
                }
                Jo(t3);
              }, true).on("keyup.brush", function(t3) {
                switch (t3.keyCode) {
                  case 16:
                    z2 && (y2 = v2 = z2 = false, I2(t3));
                    break;
                  case 18:
                    m2 === ra && (x2 < 0 ? l3 = h3 : x2 > 0 && (i3 = a3), w2 < 0 ? d4 = p3 : w2 > 0 && (u3 = c3), m2 = ea, I2(t3));
                    break;
                  case 32:
                    m2 === na && (t3.altKey ? (x2 && (l3 = h3 - C2 * x2, i3 = a3 + C2 * x2), w2 && (d4 = p3 - P2 * w2, u3 = c3 + P2 * w2), m2 = ra) : (x2 < 0 ? l3 = h3 : x2 > 0 && (i3 = a3), w2 < 0 ? d4 = p3 : w2 > 0 && (u3 = c3), m2 = ea), F2.attr("cursor", ha[b2]), I2(t3));
                    break;
                  default:
                    return;
                }
                Jo(t3);
              }, true), ae(e3.view);
            }
            f2.call(_2), D2.start(e3, m2.name);
          }
          function U2(t3) {
            for (const n3 of t3.changedTouches || [t3])
              for (const t4 of $2)
                t4.identifier === n3.identifier && (t4.cur = ne(n3, _2));
            if (z2 && !y2 && !v2 && 1 === $2.length) {
              const t4 = $2[0];
              ia(t4.cur[0] - t4[0]) > ia(t4.cur[1] - t4[1]) ? v2 = true : y2 = true;
            }
            for (const t4 of $2)
              t4.cur && (t4[0] = t4.cur[0], t4[1] = t4.cur[1]);
            g3 = true, Jo(t3), I2(t3);
          }
          function I2(t3) {
            const n3 = $2[0], e4 = n3.point0;
            var r3;
            switch (C2 = n3[0] - e4[0], P2 = n3[1] - e4[1], m2) {
              case na:
              case ta:
                x2 && (C2 = oa(S2 - i3, aa(N2 - l3, C2)), a3 = i3 + C2, h3 = l3 + C2), w2 && (P2 = oa(E2 - u3, aa(k2 - d4, P2)), c3 = u3 + P2, p3 = d4 + P2);
                break;
              case ea:
                $2[1] ? (x2 && (a3 = oa(S2, aa(N2, $2[0][0])), h3 = oa(S2, aa(N2, $2[1][0])), x2 = 1), w2 && (c3 = oa(E2, aa(k2, $2[0][1])), p3 = oa(E2, aa(k2, $2[1][1])), w2 = 1)) : (x2 < 0 ? (C2 = oa(S2 - i3, aa(N2 - i3, C2)), a3 = i3 + C2, h3 = l3) : x2 > 0 && (C2 = oa(S2 - l3, aa(N2 - l3, C2)), a3 = i3, h3 = l3 + C2), w2 < 0 ? (P2 = oa(E2 - u3, aa(k2 - u3, P2)), c3 = u3 + P2, p3 = d4) : w2 > 0 && (P2 = oa(E2 - d4, aa(k2 - d4, P2)), c3 = u3, p3 = d4 + P2));
                break;
              case ra:
                x2 && (a3 = oa(S2, aa(N2, i3 - C2 * x2)), h3 = oa(S2, aa(N2, l3 + C2 * x2))), w2 && (c3 = oa(E2, aa(k2, u3 - P2 * w2)), p3 = oa(E2, aa(k2, d4 + P2 * w2)));
            }
            h3 < a3 && (x2 *= -1, r3 = i3, i3 = l3, l3 = r3, r3 = a3, a3 = h3, h3 = r3, b2 in da && F2.attr("cursor", ha[b2 = da[b2]])), p3 < c3 && (w2 *= -1, r3 = u3, u3 = d4, d4 = r3, r3 = c3, c3 = p3, p3 = r3, b2 in pa && F2.attr("cursor", ha[b2 = pa[b2]])), M2.selection && (A2 = M2.selection), y2 && (a3 = A2[0][0], h3 = A2[1][0]), v2 && (c3 = A2[0][1], p3 = A2[1][1]), A2[0][0] === a3 && A2[0][1] === c3 && A2[1][0] === h3 && A2[1][1] === p3 || (M2.selection = [[a3, c3], [h3, p3]], f2.call(_2), D2.brush(t3, m2.name));
          }
          function O2(t3) {
            if (function(t4) {
              t4.stopImmediatePropagation();
            }(t3), t3.touches) {
              if (t3.touches.length)
                return;
              n2 && clearTimeout(n2), n2 = setTimeout(function() {
                n2 = null;
              }, 500);
            } else
              ue(t3.view, g3), q2.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            R2.attr("pointer-events", "all"), F2.attr("cursor", ha.overlay), M2.selection && (A2 = M2.selection), function(t4) {
              return t4[0][0] === t4[1][0] || t4[0][1] === t4[1][1];
            }(A2) && (M2.selection = null, f2.call(_2)), D2.end(t3, m2.name);
          }
        }
        function d2(t3) {
          s2(this, arguments).moved(t3);
        }
        function p2(t3) {
          s2(this, arguments).ended(t3);
        }
        function g2() {
          var n3 = this.__brush || { selection: null };
          return n3.extent = ca(e2.apply(this, arguments)), n3.dim = t2, n3;
        }
        return c2.move = function(n3, e3, r3) {
          n3.tween ? n3.on("start.brush", function(t3) {
            s2(this, arguments).beforestart().start(t3);
          }).on("interrupt.brush end.brush", function(t3) {
            s2(this, arguments).end(t3);
          }).tween("brush", function() {
            var n4 = this, r4 = n4.__brush, i3 = s2(n4, arguments), o3 = r4.selection, a3 = t2.input("function" == typeof e3 ? e3.apply(this, arguments) : e3, r4.extent), u3 = Gr(o3, a3);
            function c3(t3) {
              r4.selection = 1 === t3 && null === a3 ? null : u3(t3), f2.call(n4), i3.brush();
            }
            return null !== o3 && null !== a3 ? c3 : c3(1);
          }) : n3.each(function() {
            var n4 = this, i3 = arguments, o3 = n4.__brush, a3 = t2.input("function" == typeof e3 ? e3.apply(n4, i3) : e3, o3.extent), u3 = s2(n4, i3).beforestart();
            Gi(n4), o3.selection = null === a3 ? null : a3, f2.call(n4), u3.start(r3).brush(r3).end(r3);
          });
        }, c2.clear = function(t3, n3) {
          c2.move(t3, null, n3);
        }, l2.prototype = { beforestart: function() {
          return 1 == ++this.active && (this.state.emitter = this, this.starting = true), this;
        }, start: function(t3, n3) {
          return this.starting ? (this.starting = false, this.emit("start", t3, n3)) : this.emit("brush", t3), this;
        }, brush: function(t3, n3) {
          return this.emit("brush", t3, n3), this;
        }, end: function(t3, n3) {
          return 0 == --this.active && (delete this.state.emitter, this.emit("end", t3, n3)), this;
        }, emit: function(n3, e3, r3) {
          var i3 = Zn(this.that).datum();
          a2.call(n3, this.that, new Qo(n3, { sourceEvent: e3, target: c2, selection: t2.output(this.state.selection), mode: r3, dispatch: a2 }), i3);
        } }, c2.extent = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : Ko(ca(t3)), c2) : e2;
        }, c2.filter = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : Ko(!!t3), c2) : r2;
        }, c2.touchable = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : Ko(!!t3), c2) : i2;
        }, c2.handleSize = function(t3) {
          return arguments.length ? (u2 = +t3, c2) : u2;
        }, c2.keyModifiers = function(t3) {
          return arguments.length ? (o2 = !!t3, c2) : o2;
        }, c2.on = function() {
          var t3 = a2.on.apply(a2, arguments);
          return t3 === a2 ? c2 : t3;
        }, c2;
      }
      var Ma = Math.abs, Ta = Math.cos, Aa = Math.sin, Sa = Math.PI, Ea = Sa / 2, Na = 2 * Sa, ka = Math.max, Ca = 1e-12;
      function Pa(t2, n2) {
        return Array.from({ length: n2 - t2 }, (n3, e2) => t2 + e2);
      }
      function za(t2, n2) {
        var e2 = 0, r2 = null, i2 = null, o2 = null;
        function a2(a3) {
          var u2, c2 = a3.length, f2 = new Array(c2), s2 = Pa(0, c2), l2 = new Array(c2 * c2), h2 = new Array(c2), d2 = 0;
          a3 = Float64Array.from({ length: c2 * c2 }, n2 ? (t3, n3) => a3[n3 % c2][n3 / c2 | 0] : (t3, n3) => a3[n3 / c2 | 0][n3 % c2]);
          for (let n3 = 0; n3 < c2; ++n3) {
            let e3 = 0;
            for (let r3 = 0; r3 < c2; ++r3)
              e3 += a3[n3 * c2 + r3] + t2 * a3[r3 * c2 + n3];
            d2 += f2[n3] = e3;
          }
          u2 = (d2 = ka(0, Na - e2 * c2) / d2) ? e2 : Na / c2;
          {
            let n3 = 0;
            r2 && s2.sort((t3, n4) => r2(f2[t3], f2[n4]));
            for (const e3 of s2) {
              const r3 = n3;
              if (t2) {
                const t3 = Pa(1 + ~c2, c2).filter((t4) => t4 < 0 ? a3[~t4 * c2 + e3] : a3[e3 * c2 + t4]);
                i2 && t3.sort((t4, n4) => i2(t4 < 0 ? -a3[~t4 * c2 + e3] : a3[e3 * c2 + t4], n4 < 0 ? -a3[~n4 * c2 + e3] : a3[e3 * c2 + n4]));
                for (const r4 of t3)
                  if (r4 < 0) {
                    (l2[~r4 * c2 + e3] || (l2[~r4 * c2 + e3] = { source: null, target: null })).target = { index: e3, startAngle: n3, endAngle: n3 += a3[~r4 * c2 + e3] * d2, value: a3[~r4 * c2 + e3] };
                  } else {
                    (l2[e3 * c2 + r4] || (l2[e3 * c2 + r4] = { source: null, target: null })).source = { index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4] };
                  }
                h2[e3] = { index: e3, startAngle: r3, endAngle: n3, value: f2[e3] };
              } else {
                const t3 = Pa(0, c2).filter((t4) => a3[e3 * c2 + t4] || a3[t4 * c2 + e3]);
                i2 && t3.sort((t4, n4) => i2(a3[e3 * c2 + t4], a3[e3 * c2 + n4]));
                for (const r4 of t3) {
                  let t4;
                  if (e3 < r4 ? (t4 = l2[e3 * c2 + r4] || (l2[e3 * c2 + r4] = { source: null, target: null }), t4.source = { index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4] }) : (t4 = l2[r4 * c2 + e3] || (l2[r4 * c2 + e3] = { source: null, target: null }), t4.target = { index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4] }, e3 === r4 && (t4.source = t4.target)), t4.source && t4.target && t4.source.value < t4.target.value) {
                    const n4 = t4.source;
                    t4.source = t4.target, t4.target = n4;
                  }
                }
                h2[e3] = { index: e3, startAngle: r3, endAngle: n3, value: f2[e3] };
              }
              n3 += u2;
            }
          }
          return (l2 = Object.values(l2)).groups = h2, o2 ? l2.sort(o2) : l2;
        }
        return a2.padAngle = function(t3) {
          return arguments.length ? (e2 = ka(0, t3), a2) : e2;
        }, a2.sortGroups = function(t3) {
          return arguments.length ? (r2 = t3, a2) : r2;
        }, a2.sortSubgroups = function(t3) {
          return arguments.length ? (i2 = t3, a2) : i2;
        }, a2.sortChords = function(t3) {
          return arguments.length ? (null == t3 ? o2 = null : (n3 = t3, o2 = function(t4, e3) {
            return n3(t4.source.value + t4.target.value, e3.source.value + e3.target.value);
          })._ = t3, a2) : o2 && o2._;
          var n3;
        }, a2;
      }
      const $a = Math.PI, Da = 2 * $a, Ra = 1e-6, Fa = Da - Ra;
      function qa(t2) {
        this._ += t2[0];
        for (let n2 = 1, e2 = t2.length; n2 < e2; ++n2)
          this._ += arguments[n2] + t2[n2];
      }
      let Ua = class {
        constructor(t2) {
          this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == t2 ? qa : function(t3) {
            let n2 = Math.floor(t3);
            if (!(n2 >= 0))
              throw new Error(`invalid digits: ${t3}`);
            if (n2 > 15)
              return qa;
            const e2 = 10 ** n2;
            return function(t4) {
              this._ += t4[0];
              for (let n3 = 1, r2 = t4.length; n3 < r2; ++n3)
                this._ += Math.round(arguments[n3] * e2) / e2 + t4[n3];
            };
          }(t2);
        }
        moveTo(t2, n2) {
          this._append`M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}`;
        }
        closePath() {
          null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
        }
        lineTo(t2, n2) {
          this._append`L${this._x1 = +t2},${this._y1 = +n2}`;
        }
        quadraticCurveTo(t2, n2, e2, r2) {
          this._append`Q${+t2},${+n2},${this._x1 = +e2},${this._y1 = +r2}`;
        }
        bezierCurveTo(t2, n2, e2, r2, i2, o2) {
          this._append`C${+t2},${+n2},${+e2},${+r2},${this._x1 = +i2},${this._y1 = +o2}`;
        }
        arcTo(t2, n2, e2, r2, i2) {
          if (t2 = +t2, n2 = +n2, e2 = +e2, r2 = +r2, (i2 = +i2) < 0)
            throw new Error(`negative radius: ${i2}`);
          let o2 = this._x1, a2 = this._y1, u2 = e2 - t2, c2 = r2 - n2, f2 = o2 - t2, s2 = a2 - n2, l2 = f2 * f2 + s2 * s2;
          if (null === this._x1)
            this._append`M${this._x1 = t2},${this._y1 = n2}`;
          else if (l2 > Ra)
            if (Math.abs(s2 * u2 - c2 * f2) > Ra && i2) {
              let h2 = e2 - o2, d2 = r2 - a2, p2 = u2 * u2 + c2 * c2, g2 = h2 * h2 + d2 * d2, y2 = Math.sqrt(p2), v2 = Math.sqrt(l2), _2 = i2 * Math.tan(($a - Math.acos((p2 + l2 - g2) / (2 * y2 * v2))) / 2), b2 = _2 / v2, m2 = _2 / y2;
              Math.abs(b2 - 1) > Ra && this._append`L${t2 + b2 * f2},${n2 + b2 * s2}`, this._append`A${i2},${i2},0,0,${+(s2 * h2 > f2 * d2)},${this._x1 = t2 + m2 * u2},${this._y1 = n2 + m2 * c2}`;
            } else
              this._append`L${this._x1 = t2},${this._y1 = n2}`;
          else
            ;
        }
        arc(t2, n2, e2, r2, i2, o2) {
          if (t2 = +t2, n2 = +n2, o2 = !!o2, (e2 = +e2) < 0)
            throw new Error(`negative radius: ${e2}`);
          let a2 = e2 * Math.cos(r2), u2 = e2 * Math.sin(r2), c2 = t2 + a2, f2 = n2 + u2, s2 = 1 ^ o2, l2 = o2 ? r2 - i2 : i2 - r2;
          null === this._x1 ? this._append`M${c2},${f2}` : (Math.abs(this._x1 - c2) > Ra || Math.abs(this._y1 - f2) > Ra) && this._append`L${c2},${f2}`, e2 && (l2 < 0 && (l2 = l2 % Da + Da), l2 > Fa ? this._append`A${e2},${e2},0,1,${s2},${t2 - a2},${n2 - u2}A${e2},${e2},0,1,${s2},${this._x1 = c2},${this._y1 = f2}` : l2 > Ra && this._append`A${e2},${e2},0,${+(l2 >= $a)},${s2},${this._x1 = t2 + e2 * Math.cos(i2)},${this._y1 = n2 + e2 * Math.sin(i2)}`);
        }
        rect(t2, n2, e2, r2) {
          this._append`M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}h${e2 = +e2}v${+r2}h${-e2}Z`;
        }
        toString() {
          return this._;
        }
      };
      function Ia() {
        return new Ua();
      }
      Ia.prototype = Ua.prototype;
      var Oa = Array.prototype.slice;
      function Ba(t2) {
        return function() {
          return t2;
        };
      }
      function Ya(t2) {
        return t2.source;
      }
      function La(t2) {
        return t2.target;
      }
      function ja(t2) {
        return t2.radius;
      }
      function Ha(t2) {
        return t2.startAngle;
      }
      function Xa(t2) {
        return t2.endAngle;
      }
      function Ga() {
        return 0;
      }
      function Va() {
        return 10;
      }
      function Wa(t2) {
        var n2 = Ya, e2 = La, r2 = ja, i2 = ja, o2 = Ha, a2 = Xa, u2 = Ga, c2 = null;
        function f2() {
          var f3, s2 = n2.apply(this, arguments), l2 = e2.apply(this, arguments), h2 = u2.apply(this, arguments) / 2, d2 = Oa.call(arguments), p2 = +r2.apply(this, (d2[0] = s2, d2)), g2 = o2.apply(this, d2) - Ea, y2 = a2.apply(this, d2) - Ea, v2 = +i2.apply(this, (d2[0] = l2, d2)), _2 = o2.apply(this, d2) - Ea, b2 = a2.apply(this, d2) - Ea;
          if (c2 || (c2 = f3 = Ia()), h2 > Ca && (Ma(y2 - g2) > 2 * h2 + Ca ? y2 > g2 ? (g2 += h2, y2 -= h2) : (g2 -= h2, y2 += h2) : g2 = y2 = (g2 + y2) / 2, Ma(b2 - _2) > 2 * h2 + Ca ? b2 > _2 ? (_2 += h2, b2 -= h2) : (_2 -= h2, b2 += h2) : _2 = b2 = (_2 + b2) / 2), c2.moveTo(p2 * Ta(g2), p2 * Aa(g2)), c2.arc(0, 0, p2, g2, y2), g2 !== _2 || y2 !== b2)
            if (t2) {
              var m2 = v2 - +t2.apply(this, arguments), x2 = (_2 + b2) / 2;
              c2.quadraticCurveTo(0, 0, m2 * Ta(_2), m2 * Aa(_2)), c2.lineTo(v2 * Ta(x2), v2 * Aa(x2)), c2.lineTo(m2 * Ta(b2), m2 * Aa(b2));
            } else
              c2.quadraticCurveTo(0, 0, v2 * Ta(_2), v2 * Aa(_2)), c2.arc(0, 0, v2, _2, b2);
          if (c2.quadraticCurveTo(0, 0, p2 * Ta(g2), p2 * Aa(g2)), c2.closePath(), f3)
            return c2 = null, f3 + "" || null;
        }
        return t2 && (f2.headRadius = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : Ba(+n3), f2) : t2;
        }), f2.radius = function(t3) {
          return arguments.length ? (r2 = i2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : r2;
        }, f2.sourceRadius = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : r2;
        }, f2.targetRadius = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : i2;
        }, f2.startAngle = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : o2;
        }, f2.endAngle = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : a2;
        }, f2.padAngle = function(t3) {
          return arguments.length ? (u2 = "function" == typeof t3 ? t3 : Ba(+t3), f2) : u2;
        }, f2.source = function(t3) {
          return arguments.length ? (n2 = t3, f2) : n2;
        }, f2.target = function(t3) {
          return arguments.length ? (e2 = t3, f2) : e2;
        }, f2.context = function(t3) {
          return arguments.length ? (c2 = null == t3 ? null : t3, f2) : c2;
        }, f2;
      }
      var Za = Array.prototype.slice;
      function Ka(t2, n2) {
        return t2 - n2;
      }
      var Qa = (t2) => () => t2;
      function Ja(t2, n2) {
        for (var e2, r2 = -1, i2 = n2.length; ++r2 < i2; )
          if (e2 = tu(t2, n2[r2]))
            return e2;
        return 0;
      }
      function tu(t2, n2) {
        for (var e2 = n2[0], r2 = n2[1], i2 = -1, o2 = 0, a2 = t2.length, u2 = a2 - 1; o2 < a2; u2 = o2++) {
          var c2 = t2[o2], f2 = c2[0], s2 = c2[1], l2 = t2[u2], h2 = l2[0], d2 = l2[1];
          if (nu(c2, l2, n2))
            return 0;
          s2 > r2 != d2 > r2 && e2 < (h2 - f2) * (r2 - s2) / (d2 - s2) + f2 && (i2 = -i2);
        }
        return i2;
      }
      function nu(t2, n2, e2) {
        var r2, i2, o2, a2;
        return function(t3, n3, e3) {
          return (n3[0] - t3[0]) * (e3[1] - t3[1]) == (e3[0] - t3[0]) * (n3[1] - t3[1]);
        }(t2, n2, e2) && (i2 = t2[r2 = +(t2[0] === n2[0])], o2 = e2[r2], a2 = n2[r2], i2 <= o2 && o2 <= a2 || a2 <= o2 && o2 <= i2);
      }
      function eu() {
      }
      var ru = [[], [[[1, 1.5], [0.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [0.5, 1]]], [[[1, 0.5], [1.5, 1]]], [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]], [[[1, 0.5], [1, 1.5]]], [[[1, 0.5], [0.5, 1]]], [[[0.5, 1], [1, 0.5]]], [[[1, 1.5], [1, 0.5]]], [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, 0.5]]], [[[0.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[0.5, 1], [1, 1.5]]], []];
      function iu() {
        var t2 = 1, n2 = 1, e2 = K, r2 = u2;
        function i2(t3) {
          var n3 = e2(t3);
          if (Array.isArray(n3))
            n3 = n3.slice().sort(Ka);
          else {
            const e3 = M(t3, ou);
            for (n3 = G(...Z(e3[0], e3[1], n3), n3); n3[n3.length - 1] >= e3[1]; )
              n3.pop();
            for (; n3[1] < e3[0]; )
              n3.shift();
          }
          return n3.map((n4) => o2(t3, n4));
        }
        function o2(e3, i3) {
          const o3 = null == i3 ? NaN : +i3;
          if (isNaN(o3))
            throw new Error(`invalid value: ${i3}`);
          var u3 = [], c2 = [];
          return function(e4, r3, i4) {
            var o4, u4, c3, f2, s2, l2, h2 = new Array(), d2 = new Array();
            o4 = u4 = -1, f2 = au(e4[0], r3), ru[f2 << 1].forEach(p2);
            for (; ++o4 < t2 - 1; )
              c3 = f2, f2 = au(e4[o4 + 1], r3), ru[c3 | f2 << 1].forEach(p2);
            ru[f2 << 0].forEach(p2);
            for (; ++u4 < n2 - 1; ) {
              for (o4 = -1, f2 = au(e4[u4 * t2 + t2], r3), s2 = au(e4[u4 * t2], r3), ru[f2 << 1 | s2 << 2].forEach(p2); ++o4 < t2 - 1; )
                c3 = f2, f2 = au(e4[u4 * t2 + t2 + o4 + 1], r3), l2 = s2, s2 = au(e4[u4 * t2 + o4 + 1], r3), ru[c3 | f2 << 1 | s2 << 2 | l2 << 3].forEach(p2);
              ru[f2 | s2 << 3].forEach(p2);
            }
            o4 = -1, s2 = e4[u4 * t2] >= r3, ru[s2 << 2].forEach(p2);
            for (; ++o4 < t2 - 1; )
              l2 = s2, s2 = au(e4[u4 * t2 + o4 + 1], r3), ru[s2 << 2 | l2 << 3].forEach(p2);
            function p2(t3) {
              var n3, e5, r4 = [t3[0][0] + o4, t3[0][1] + u4], c4 = [t3[1][0] + o4, t3[1][1] + u4], f3 = a2(r4), s3 = a2(c4);
              (n3 = d2[f3]) ? (e5 = h2[s3]) ? (delete d2[n3.end], delete h2[e5.start], n3 === e5 ? (n3.ring.push(c4), i4(n3.ring)) : h2[n3.start] = d2[e5.end] = { start: n3.start, end: e5.end, ring: n3.ring.concat(e5.ring) }) : (delete d2[n3.end], n3.ring.push(c4), d2[n3.end = s3] = n3) : (n3 = h2[s3]) ? (e5 = d2[f3]) ? (delete h2[n3.start], delete d2[e5.end], n3 === e5 ? (n3.ring.push(c4), i4(n3.ring)) : h2[e5.start] = d2[n3.end] = { start: e5.start, end: n3.end, ring: e5.ring.concat(n3.ring) }) : (delete h2[n3.start], n3.ring.unshift(r4), h2[n3.start = f3] = n3) : h2[f3] = d2[s3] = { start: f3, end: s3, ring: [r4, c4] };
            }
            ru[s2 << 3].forEach(p2);
          }(e3, o3, function(t3) {
            r2(t3, e3, o3), function(t4) {
              for (var n3 = 0, e4 = t4.length, r3 = t4[e4 - 1][1] * t4[0][0] - t4[e4 - 1][0] * t4[0][1]; ++n3 < e4; )
                r3 += t4[n3 - 1][1] * t4[n3][0] - t4[n3 - 1][0] * t4[n3][1];
              return r3;
            }(t3) > 0 ? u3.push([t3]) : c2.push(t3);
          }), c2.forEach(function(t3) {
            for (var n3, e4 = 0, r3 = u3.length; e4 < r3; ++e4)
              if (-1 !== Ja((n3 = u3[e4])[0], t3))
                return void n3.push(t3);
          }), { type: "MultiPolygon", value: i3, coordinates: u3 };
        }
        function a2(n3) {
          return 2 * n3[0] + n3[1] * (t2 + 1) * 4;
        }
        function u2(e3, r3, i3) {
          e3.forEach(function(e4) {
            var o3 = e4[0], a3 = e4[1], u3 = 0 | o3, c2 = 0 | a3, f2 = uu(r3[c2 * t2 + u3]);
            o3 > 0 && o3 < t2 && u3 === o3 && (e4[0] = cu(o3, uu(r3[c2 * t2 + u3 - 1]), f2, i3)), a3 > 0 && a3 < n2 && c2 === a3 && (e4[1] = cu(a3, uu(r3[(c2 - 1) * t2 + u3]), f2, i3));
          });
        }
        return i2.contour = o2, i2.size = function(e3) {
          if (!arguments.length)
            return [t2, n2];
          var r3 = Math.floor(e3[0]), o3 = Math.floor(e3[1]);
          if (!(r3 >= 0 && o3 >= 0))
            throw new Error("invalid size");
          return t2 = r3, n2 = o3, i2;
        }, i2.thresholds = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : Array.isArray(t3) ? Qa(Za.call(t3)) : Qa(t3), i2) : e2;
        }, i2.smooth = function(t3) {
          return arguments.length ? (r2 = t3 ? u2 : eu, i2) : r2 === u2;
        }, i2;
      }
      function ou(t2) {
        return isFinite(t2) ? t2 : NaN;
      }
      function au(t2, n2) {
        return null != t2 && +t2 >= n2;
      }
      function uu(t2) {
        return null == t2 || isNaN(t2 = +t2) ? -1 / 0 : t2;
      }
      function cu(t2, n2, e2, r2) {
        const i2 = r2 - n2, o2 = e2 - n2, a2 = isFinite(i2) || isFinite(o2) ? i2 / o2 : Math.sign(i2) / Math.sign(o2);
        return isNaN(a2) ? t2 : t2 + a2 - 0.5;
      }
      function fu(t2) {
        return t2[0];
      }
      function su(t2) {
        return t2[1];
      }
      function lu() {
        return 1;
      }
      const hu = 134217729, du = 33306690738754706e-32;
      function pu(t2, n2, e2, r2, i2) {
        let o2, a2, u2, c2, f2 = n2[0], s2 = r2[0], l2 = 0, h2 = 0;
        s2 > f2 == s2 > -f2 ? (o2 = f2, f2 = n2[++l2]) : (o2 = s2, s2 = r2[++h2]);
        let d2 = 0;
        if (l2 < t2 && h2 < e2)
          for (s2 > f2 == s2 > -f2 ? (a2 = f2 + o2, u2 = o2 - (a2 - f2), f2 = n2[++l2]) : (a2 = s2 + o2, u2 = o2 - (a2 - s2), s2 = r2[++h2]), o2 = a2, 0 !== u2 && (i2[d2++] = u2); l2 < t2 && h2 < e2; )
            s2 > f2 == s2 > -f2 ? (a2 = o2 + f2, c2 = a2 - o2, u2 = o2 - (a2 - c2) + (f2 - c2), f2 = n2[++l2]) : (a2 = o2 + s2, c2 = a2 - o2, u2 = o2 - (a2 - c2) + (s2 - c2), s2 = r2[++h2]), o2 = a2, 0 !== u2 && (i2[d2++] = u2);
        for (; l2 < t2; )
          a2 = o2 + f2, c2 = a2 - o2, u2 = o2 - (a2 - c2) + (f2 - c2), f2 = n2[++l2], o2 = a2, 0 !== u2 && (i2[d2++] = u2);
        for (; h2 < e2; )
          a2 = o2 + s2, c2 = a2 - o2, u2 = o2 - (a2 - c2) + (s2 - c2), s2 = r2[++h2], o2 = a2, 0 !== u2 && (i2[d2++] = u2);
        return 0 === o2 && 0 !== d2 || (i2[d2++] = o2), d2;
      }
      function gu(t2) {
        return new Float64Array(t2);
      }
      const yu = 22204460492503146e-32, vu = 11093356479670487e-47, _u = gu(4), bu = gu(8), mu = gu(12), xu = gu(16), wu = gu(4);
      function Mu(t2, n2, e2, r2, i2, o2) {
        const a2 = (n2 - o2) * (e2 - i2), u2 = (t2 - i2) * (r2 - o2), c2 = a2 - u2, f2 = Math.abs(a2 + u2);
        return Math.abs(c2) >= 33306690738754716e-32 * f2 ? c2 : -function(t3, n3, e3, r3, i3, o3, a3) {
          let u3, c3, f3, s2, l2, h2, d2, p2, g2, y2, v2, _2, b2, m2, x2, w2, M2, T2;
          const A2 = t3 - i3, S2 = e3 - i3, E2 = n3 - o3, N2 = r3 - o3;
          m2 = A2 * N2, h2 = hu * A2, d2 = h2 - (h2 - A2), p2 = A2 - d2, h2 = hu * N2, g2 = h2 - (h2 - N2), y2 = N2 - g2, x2 = p2 * y2 - (m2 - d2 * g2 - p2 * g2 - d2 * y2), w2 = E2 * S2, h2 = hu * E2, d2 = h2 - (h2 - E2), p2 = E2 - d2, h2 = hu * S2, g2 = h2 - (h2 - S2), y2 = S2 - g2, M2 = p2 * y2 - (w2 - d2 * g2 - p2 * g2 - d2 * y2), v2 = x2 - M2, l2 = x2 - v2, _u[0] = x2 - (v2 + l2) + (l2 - M2), _2 = m2 + v2, l2 = _2 - m2, b2 = m2 - (_2 - l2) + (v2 - l2), v2 = b2 - w2, l2 = b2 - v2, _u[1] = b2 - (v2 + l2) + (l2 - w2), T2 = _2 + v2, l2 = T2 - _2, _u[2] = _2 - (T2 - l2) + (v2 - l2), _u[3] = T2;
          let k2 = function(t4, n4) {
            let e4 = n4[0];
            for (let r4 = 1; r4 < t4; r4++)
              e4 += n4[r4];
            return e4;
          }(4, _u), C2 = yu * a3;
          if (k2 >= C2 || -k2 >= C2)
            return k2;
          if (l2 = t3 - A2, u3 = t3 - (A2 + l2) + (l2 - i3), l2 = e3 - S2, f3 = e3 - (S2 + l2) + (l2 - i3), l2 = n3 - E2, c3 = n3 - (E2 + l2) + (l2 - o3), l2 = r3 - N2, s2 = r3 - (N2 + l2) + (l2 - o3), 0 === u3 && 0 === c3 && 0 === f3 && 0 === s2)
            return k2;
          if (C2 = vu * a3 + du * Math.abs(k2), k2 += A2 * s2 + N2 * u3 - (E2 * f3 + S2 * c3), k2 >= C2 || -k2 >= C2)
            return k2;
          m2 = u3 * N2, h2 = hu * u3, d2 = h2 - (h2 - u3), p2 = u3 - d2, h2 = hu * N2, g2 = h2 - (h2 - N2), y2 = N2 - g2, x2 = p2 * y2 - (m2 - d2 * g2 - p2 * g2 - d2 * y2), w2 = c3 * S2, h2 = hu * c3, d2 = h2 - (h2 - c3), p2 = c3 - d2, h2 = hu * S2, g2 = h2 - (h2 - S2), y2 = S2 - g2, M2 = p2 * y2 - (w2 - d2 * g2 - p2 * g2 - d2 * y2), v2 = x2 - M2, l2 = x2 - v2, wu[0] = x2 - (v2 + l2) + (l2 - M2), _2 = m2 + v2, l2 = _2 - m2, b2 = m2 - (_2 - l2) + (v2 - l2), v2 = b2 - w2, l2 = b2 - v2, wu[1] = b2 - (v2 + l2) + (l2 - w2), T2 = _2 + v2, l2 = T2 - _2, wu[2] = _2 - (T2 - l2) + (v2 - l2), wu[3] = T2;
          const P2 = pu(4, _u, 4, wu, bu);
          m2 = A2 * s2, h2 = hu * A2, d2 = h2 - (h2 - A2), p2 = A2 - d2, h2 = hu * s2, g2 = h2 - (h2 - s2), y2 = s2 - g2, x2 = p2 * y2 - (m2 - d2 * g2 - p2 * g2 - d2 * y2), w2 = E2 * f3, h2 = hu * E2, d2 = h2 - (h2 - E2), p2 = E2 - d2, h2 = hu * f3, g2 = h2 - (h2 - f3), y2 = f3 - g2, M2 = p2 * y2 - (w2 - d2 * g2 - p2 * g2 - d2 * y2), v2 = x2 - M2, l2 = x2 - v2, wu[0] = x2 - (v2 + l2) + (l2 - M2), _2 = m2 + v2, l2 = _2 - m2, b2 = m2 - (_2 - l2) + (v2 - l2), v2 = b2 - w2, l2 = b2 - v2, wu[1] = b2 - (v2 + l2) + (l2 - w2), T2 = _2 + v2, l2 = T2 - _2, wu[2] = _2 - (T2 - l2) + (v2 - l2), wu[3] = T2;
          const z2 = pu(P2, bu, 4, wu, mu);
          m2 = u3 * s2, h2 = hu * u3, d2 = h2 - (h2 - u3), p2 = u3 - d2, h2 = hu * s2, g2 = h2 - (h2 - s2), y2 = s2 - g2, x2 = p2 * y2 - (m2 - d2 * g2 - p2 * g2 - d2 * y2), w2 = c3 * f3, h2 = hu * c3, d2 = h2 - (h2 - c3), p2 = c3 - d2, h2 = hu * f3, g2 = h2 - (h2 - f3), y2 = f3 - g2, M2 = p2 * y2 - (w2 - d2 * g2 - p2 * g2 - d2 * y2), v2 = x2 - M2, l2 = x2 - v2, wu[0] = x2 - (v2 + l2) + (l2 - M2), _2 = m2 + v2, l2 = _2 - m2, b2 = m2 - (_2 - l2) + (v2 - l2), v2 = b2 - w2, l2 = b2 - v2, wu[1] = b2 - (v2 + l2) + (l2 - w2), T2 = _2 + v2, l2 = T2 - _2, wu[2] = _2 - (T2 - l2) + (v2 - l2), wu[3] = T2;
          const $2 = pu(z2, mu, 4, wu, xu);
          return xu[$2 - 1];
        }(t2, n2, e2, r2, i2, o2, f2);
      }
      const Tu = Math.pow(2, -52), Au = new Uint32Array(512);
      class Su {
        static from(t2, n2 = zu, e2 = $u) {
          const r2 = t2.length, i2 = new Float64Array(2 * r2);
          for (let o2 = 0; o2 < r2; o2++) {
            const r3 = t2[o2];
            i2[2 * o2] = n2(r3), i2[2 * o2 + 1] = e2(r3);
          }
          return new Su(i2);
        }
        constructor(t2) {
          const n2 = t2.length >> 1;
          if (n2 > 0 && "number" != typeof t2[0])
            throw new Error("Expected coords to contain numbers.");
          this.coords = t2;
          const e2 = Math.max(2 * n2 - 5, 0);
          this._triangles = new Uint32Array(3 * e2), this._halfedges = new Int32Array(3 * e2), this._hashSize = Math.ceil(Math.sqrt(n2)), this._hullPrev = new Uint32Array(n2), this._hullNext = new Uint32Array(n2), this._hullTri = new Uint32Array(n2), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n2), this._dists = new Float64Array(n2), this.update();
        }
        update() {
          const { coords: t2, _hullPrev: n2, _hullNext: e2, _hullTri: r2, _hullHash: i2 } = this, o2 = t2.length >> 1;
          let a2 = 1 / 0, u2 = 1 / 0, c2 = -1 / 0, f2 = -1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            const e3 = t2[2 * n3], r3 = t2[2 * n3 + 1];
            e3 < a2 && (a2 = e3), r3 < u2 && (u2 = r3), e3 > c2 && (c2 = e3), r3 > f2 && (f2 = r3), this._ids[n3] = n3;
          }
          const s2 = (a2 + c2) / 2, l2 = (u2 + f2) / 2;
          let h2, d2, p2, g2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            const e3 = Eu(s2, l2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < g2 && (h2 = n3, g2 = e3);
          }
          const y2 = t2[2 * h2], v2 = t2[2 * h2 + 1];
          g2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            if (n3 === h2)
              continue;
            const e3 = Eu(y2, v2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < g2 && e3 > 0 && (d2 = n3, g2 = e3);
          }
          let _2 = t2[2 * d2], b2 = t2[2 * d2 + 1], m2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            if (n3 === h2 || n3 === d2)
              continue;
            const e3 = ku(y2, v2, _2, b2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < m2 && (p2 = n3, m2 = e3);
          }
          let x2 = t2[2 * p2], w2 = t2[2 * p2 + 1];
          if (m2 === 1 / 0) {
            for (let n4 = 0; n4 < o2; n4++)
              this._dists[n4] = t2[2 * n4] - t2[0] || t2[2 * n4 + 1] - t2[1];
            Cu(this._ids, this._dists, 0, o2 - 1);
            const n3 = new Uint32Array(o2);
            let e3 = 0;
            for (let t3 = 0, r3 = -1 / 0; t3 < o2; t3++) {
              const i3 = this._ids[t3];
              this._dists[i3] > r3 && (n3[e3++] = i3, r3 = this._dists[i3]);
            }
            return this.hull = n3.subarray(0, e3), this.triangles = new Uint32Array(0), void (this.halfedges = new Uint32Array(0));
          }
          if (Mu(y2, v2, _2, b2, x2, w2) < 0) {
            const t3 = d2, n3 = _2, e3 = b2;
            d2 = p2, _2 = x2, b2 = w2, p2 = t3, x2 = n3, w2 = e3;
          }
          const M2 = function(t3, n3, e3, r3, i3, o3) {
            const a3 = e3 - t3, u3 = r3 - n3, c3 = i3 - t3, f3 = o3 - n3, s3 = a3 * a3 + u3 * u3, l3 = c3 * c3 + f3 * f3, h3 = 0.5 / (a3 * f3 - u3 * c3), d4 = t3 + (f3 * s3 - u3 * l3) * h3, p3 = n3 + (a3 * l3 - c3 * s3) * h3;
            return { x: d4, y: p3 };
          }(y2, v2, _2, b2, x2, w2);
          this._cx = M2.x, this._cy = M2.y;
          for (let n3 = 0; n3 < o2; n3++)
            this._dists[n3] = Eu(t2[2 * n3], t2[2 * n3 + 1], M2.x, M2.y);
          Cu(this._ids, this._dists, 0, o2 - 1), this._hullStart = h2;
          let T2 = 3;
          e2[h2] = n2[p2] = d2, e2[d2] = n2[h2] = p2, e2[p2] = n2[d2] = h2, r2[h2] = 0, r2[d2] = 1, r2[p2] = 2, i2.fill(-1), i2[this._hashKey(y2, v2)] = h2, i2[this._hashKey(_2, b2)] = d2, i2[this._hashKey(x2, w2)] = p2, this.trianglesLen = 0, this._addTriangle(h2, d2, p2, -1, -1, -1);
          for (let o3, a3, u3 = 0; u3 < this._ids.length; u3++) {
            const c3 = this._ids[u3], f3 = t2[2 * c3], s3 = t2[2 * c3 + 1];
            if (u3 > 0 && Math.abs(f3 - o3) <= Tu && Math.abs(s3 - a3) <= Tu)
              continue;
            if (o3 = f3, a3 = s3, c3 === h2 || c3 === d2 || c3 === p2)
              continue;
            let l3 = 0;
            for (let t3 = 0, n3 = this._hashKey(f3, s3); t3 < this._hashSize && (l3 = i2[(n3 + t3) % this._hashSize], -1 === l3 || l3 === e2[l3]); t3++)
              ;
            l3 = n2[l3];
            let g3, y3 = l3;
            for (; g3 = e2[y3], Mu(f3, s3, t2[2 * y3], t2[2 * y3 + 1], t2[2 * g3], t2[2 * g3 + 1]) >= 0; )
              if (y3 = g3, y3 === l3) {
                y3 = -1;
                break;
              }
            if (-1 === y3)
              continue;
            let v3 = this._addTriangle(y3, c3, e2[y3], -1, -1, r2[y3]);
            r2[c3] = this._legalize(v3 + 2), r2[y3] = v3, T2++;
            let _3 = e2[y3];
            for (; g3 = e2[_3], Mu(f3, s3, t2[2 * _3], t2[2 * _3 + 1], t2[2 * g3], t2[2 * g3 + 1]) < 0; )
              v3 = this._addTriangle(_3, c3, g3, r2[c3], -1, r2[_3]), r2[c3] = this._legalize(v3 + 2), e2[_3] = _3, T2--, _3 = g3;
            if (y3 === l3)
              for (; g3 = n2[y3], Mu(f3, s3, t2[2 * g3], t2[2 * g3 + 1], t2[2 * y3], t2[2 * y3 + 1]) < 0; )
                v3 = this._addTriangle(g3, c3, y3, -1, r2[y3], r2[g3]), this._legalize(v3 + 2), r2[g3] = v3, e2[y3] = y3, T2--, y3 = g3;
            this._hullStart = n2[c3] = y3, e2[y3] = n2[_3] = c3, e2[c3] = _3, i2[this._hashKey(f3, s3)] = c3, i2[this._hashKey(t2[2 * y3], t2[2 * y3 + 1])] = y3;
          }
          this.hull = new Uint32Array(T2);
          for (let t3 = 0, n3 = this._hullStart; t3 < T2; t3++)
            this.hull[t3] = n3, n3 = e2[n3];
          this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
        }
        _hashKey(t2, n2) {
          return Math.floor(function(t3, n3) {
            const e2 = t3 / (Math.abs(t3) + Math.abs(n3));
            return (n3 > 0 ? 3 - e2 : 1 + e2) / 4;
          }(t2 - this._cx, n2 - this._cy) * this._hashSize) % this._hashSize;
        }
        _legalize(t2) {
          const { _triangles: n2, _halfedges: e2, coords: r2 } = this;
          let i2 = 0, o2 = 0;
          for (; ; ) {
            const a2 = e2[t2], u2 = t2 - t2 % 3;
            if (o2 = u2 + (t2 + 2) % 3, -1 === a2) {
              if (0 === i2)
                break;
              t2 = Au[--i2];
              continue;
            }
            const c2 = a2 - a2 % 3, f2 = u2 + (t2 + 1) % 3, s2 = c2 + (a2 + 2) % 3, l2 = n2[o2], h2 = n2[t2], d2 = n2[f2], p2 = n2[s2];
            if (Nu(r2[2 * l2], r2[2 * l2 + 1], r2[2 * h2], r2[2 * h2 + 1], r2[2 * d2], r2[2 * d2 + 1], r2[2 * p2], r2[2 * p2 + 1])) {
              n2[t2] = p2, n2[a2] = l2;
              const r3 = e2[s2];
              if (-1 === r3) {
                let n3 = this._hullStart;
                do {
                  if (this._hullTri[n3] === s2) {
                    this._hullTri[n3] = t2;
                    break;
                  }
                  n3 = this._hullPrev[n3];
                } while (n3 !== this._hullStart);
              }
              this._link(t2, r3), this._link(a2, e2[o2]), this._link(o2, s2);
              const u3 = c2 + (a2 + 1) % 3;
              i2 < Au.length && (Au[i2++] = u3);
            } else {
              if (0 === i2)
                break;
              t2 = Au[--i2];
            }
          }
          return o2;
        }
        _link(t2, n2) {
          this._halfedges[t2] = n2, -1 !== n2 && (this._halfedges[n2] = t2);
        }
        _addTriangle(t2, n2, e2, r2, i2, o2) {
          const a2 = this.trianglesLen;
          return this._triangles[a2] = t2, this._triangles[a2 + 1] = n2, this._triangles[a2 + 2] = e2, this._link(a2, r2), this._link(a2 + 1, i2), this._link(a2 + 2, o2), this.trianglesLen += 3, a2;
        }
      }
      function Eu(t2, n2, e2, r2) {
        const i2 = t2 - e2, o2 = n2 - r2;
        return i2 * i2 + o2 * o2;
      }
      function Nu(t2, n2, e2, r2, i2, o2, a2, u2) {
        const c2 = t2 - a2, f2 = n2 - u2, s2 = e2 - a2, l2 = r2 - u2, h2 = i2 - a2, d2 = o2 - u2, p2 = s2 * s2 + l2 * l2, g2 = h2 * h2 + d2 * d2;
        return c2 * (l2 * g2 - p2 * d2) - f2 * (s2 * g2 - p2 * h2) + (c2 * c2 + f2 * f2) * (s2 * d2 - l2 * h2) < 0;
      }
      function ku(t2, n2, e2, r2, i2, o2) {
        const a2 = e2 - t2, u2 = r2 - n2, c2 = i2 - t2, f2 = o2 - n2, s2 = a2 * a2 + u2 * u2, l2 = c2 * c2 + f2 * f2, h2 = 0.5 / (a2 * f2 - u2 * c2), d2 = (f2 * s2 - u2 * l2) * h2, p2 = (a2 * l2 - c2 * s2) * h2;
        return d2 * d2 + p2 * p2;
      }
      function Cu(t2, n2, e2, r2) {
        if (r2 - e2 <= 20)
          for (let i2 = e2 + 1; i2 <= r2; i2++) {
            const r3 = t2[i2], o2 = n2[r3];
            let a2 = i2 - 1;
            for (; a2 >= e2 && n2[t2[a2]] > o2; )
              t2[a2 + 1] = t2[a2--];
            t2[a2 + 1] = r3;
          }
        else {
          let i2 = e2 + 1, o2 = r2;
          Pu(t2, e2 + r2 >> 1, i2), n2[t2[e2]] > n2[t2[r2]] && Pu(t2, e2, r2), n2[t2[i2]] > n2[t2[r2]] && Pu(t2, i2, r2), n2[t2[e2]] > n2[t2[i2]] && Pu(t2, e2, i2);
          const a2 = t2[i2], u2 = n2[a2];
          for (; ; ) {
            do {
              i2++;
            } while (n2[t2[i2]] < u2);
            do {
              o2--;
            } while (n2[t2[o2]] > u2);
            if (o2 < i2)
              break;
            Pu(t2, i2, o2);
          }
          t2[e2 + 1] = t2[o2], t2[o2] = a2, r2 - i2 + 1 >= o2 - e2 ? (Cu(t2, n2, i2, r2), Cu(t2, n2, e2, o2 - 1)) : (Cu(t2, n2, e2, o2 - 1), Cu(t2, n2, i2, r2));
        }
      }
      function Pu(t2, n2, e2) {
        const r2 = t2[n2];
        t2[n2] = t2[e2], t2[e2] = r2;
      }
      function zu(t2) {
        return t2[0];
      }
      function $u(t2) {
        return t2[1];
      }
      const Du = 1e-6;
      class Ru {
        constructor() {
          this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
        }
        moveTo(t2, n2) {
          this._ += `M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}`;
        }
        closePath() {
          null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
        }
        lineTo(t2, n2) {
          this._ += `L${this._x1 = +t2},${this._y1 = +n2}`;
        }
        arc(t2, n2, e2) {
          const r2 = (t2 = +t2) + (e2 = +e2), i2 = n2 = +n2;
          if (e2 < 0)
            throw new Error("negative radius");
          null === this._x1 ? this._ += `M${r2},${i2}` : (Math.abs(this._x1 - r2) > Du || Math.abs(this._y1 - i2) > Du) && (this._ += "L" + r2 + "," + i2), e2 && (this._ += `A${e2},${e2},0,1,1,${t2 - e2},${n2}A${e2},${e2},0,1,1,${this._x1 = r2},${this._y1 = i2}`);
        }
        rect(t2, n2, e2, r2) {
          this._ += `M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}h${+e2}v${+r2}h${-e2}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class Fu {
        constructor() {
          this._ = [];
        }
        moveTo(t2, n2) {
          this._.push([t2, n2]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(t2, n2) {
          this._.push([t2, n2]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class qu {
        constructor(t2, [n2, e2, r2, i2] = [0, 0, 960, 500]) {
          if (!((r2 = +r2) >= (n2 = +n2) && (i2 = +i2) >= (e2 = +e2)))
            throw new Error("invalid bounds");
          this.delaunay = t2, this._circumcenters = new Float64Array(2 * t2.points.length), this.vectors = new Float64Array(2 * t2.points.length), this.xmax = r2, this.xmin = n2, this.ymax = i2, this.ymin = e2, this._init();
        }
        update() {
          return this.delaunay.update(), this._init(), this;
        }
        _init() {
          const { delaunay: { points: t2, hull: n2, triangles: e2 }, vectors: r2 } = this;
          let i2, o2;
          const a2 = this.circumcenters = this._circumcenters.subarray(0, e2.length / 3 * 2);
          for (let r3, u3, c3 = 0, f3 = 0, s3 = e2.length; c3 < s3; c3 += 3, f3 += 2) {
            const s4 = 2 * e2[c3], l3 = 2 * e2[c3 + 1], h3 = 2 * e2[c3 + 2], d4 = t2[s4], p2 = t2[s4 + 1], g2 = t2[l3], y2 = t2[l3 + 1], v2 = t2[h3], _2 = t2[h3 + 1], b2 = g2 - d4, m2 = y2 - p2, x2 = v2 - d4, w2 = _2 - p2, M2 = 2 * (b2 * w2 - m2 * x2);
            if (Math.abs(M2) < 1e-9) {
              if (void 0 === i2) {
                i2 = o2 = 0;
                for (const e4 of n2)
                  i2 += t2[2 * e4], o2 += t2[2 * e4 + 1];
                i2 /= n2.length, o2 /= n2.length;
              }
              const e3 = 1e9 * Math.sign((i2 - d4) * w2 - (o2 - p2) * x2);
              r3 = (d4 + v2) / 2 - e3 * w2, u3 = (p2 + _2) / 2 + e3 * x2;
            } else {
              const t3 = 1 / M2, n3 = b2 * b2 + m2 * m2, e3 = x2 * x2 + w2 * w2;
              r3 = d4 + (w2 * n3 - m2 * e3) * t3, u3 = p2 + (b2 * e3 - x2 * n3) * t3;
            }
            a2[f3] = r3, a2[f3 + 1] = u3;
          }
          let u2, c2, f2, s2 = n2[n2.length - 1], l2 = 4 * s2, h2 = t2[2 * s2], d2 = t2[2 * s2 + 1];
          r2.fill(0);
          for (let e3 = 0; e3 < n2.length; ++e3)
            s2 = n2[e3], u2 = l2, c2 = h2, f2 = d2, l2 = 4 * s2, h2 = t2[2 * s2], d2 = t2[2 * s2 + 1], r2[u2 + 2] = r2[l2] = f2 - d2, r2[u2 + 3] = r2[l2 + 1] = h2 - c2;
        }
        render(t2) {
          const n2 = null == t2 ? t2 = new Ru() : void 0, { delaunay: { halfedges: e2, inedges: r2, hull: i2 }, circumcenters: o2, vectors: a2 } = this;
          if (i2.length <= 1)
            return null;
          for (let n3 = 0, r3 = e2.length; n3 < r3; ++n3) {
            const r4 = e2[n3];
            if (r4 < n3)
              continue;
            const i3 = 2 * Math.floor(n3 / 3), a3 = 2 * Math.floor(r4 / 3), u3 = o2[i3], c3 = o2[i3 + 1], f2 = o2[a3], s2 = o2[a3 + 1];
            this._renderSegment(u3, c3, f2, s2, t2);
          }
          let u2, c2 = i2[i2.length - 1];
          for (let n3 = 0; n3 < i2.length; ++n3) {
            u2 = c2, c2 = i2[n3];
            const e3 = 2 * Math.floor(r2[c2] / 3), f2 = o2[e3], s2 = o2[e3 + 1], l2 = 4 * u2, h2 = this._project(f2, s2, a2[l2 + 2], a2[l2 + 3]);
            h2 && this._renderSegment(f2, s2, h2[0], h2[1], t2);
          }
          return n2 && n2.value();
        }
        renderBounds(t2) {
          const n2 = null == t2 ? t2 = new Ru() : void 0;
          return t2.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n2 && n2.value();
        }
        renderCell(t2, n2) {
          const e2 = null == n2 ? n2 = new Ru() : void 0, r2 = this._clip(t2);
          if (null === r2 || !r2.length)
            return;
          n2.moveTo(r2[0], r2[1]);
          let i2 = r2.length;
          for (; r2[0] === r2[i2 - 2] && r2[1] === r2[i2 - 1] && i2 > 1; )
            i2 -= 2;
          for (let t3 = 2; t3 < i2; t3 += 2)
            r2[t3] === r2[t3 - 2] && r2[t3 + 1] === r2[t3 - 1] || n2.lineTo(r2[t3], r2[t3 + 1]);
          return n2.closePath(), e2 && e2.value();
        }
        *cellPolygons() {
          const { delaunay: { points: t2 } } = this;
          for (let n2 = 0, e2 = t2.length / 2; n2 < e2; ++n2) {
            const t3 = this.cellPolygon(n2);
            t3 && (t3.index = n2, yield t3);
          }
        }
        cellPolygon(t2) {
          const n2 = new Fu();
          return this.renderCell(t2, n2), n2.value();
        }
        _renderSegment(t2, n2, e2, r2, i2) {
          let o2;
          const a2 = this._regioncode(t2, n2), u2 = this._regioncode(e2, r2);
          0 === a2 && 0 === u2 ? (i2.moveTo(t2, n2), i2.lineTo(e2, r2)) : (o2 = this._clipSegment(t2, n2, e2, r2, a2, u2)) && (i2.moveTo(o2[0], o2[1]), i2.lineTo(o2[2], o2[3]));
        }
        contains(t2, n2, e2) {
          return (n2 = +n2) == n2 && (e2 = +e2) == e2 && this.delaunay._step(t2, n2, e2) === t2;
        }
        *neighbors(t2) {
          const n2 = this._clip(t2);
          if (n2)
            for (const e2 of this.delaunay.neighbors(t2)) {
              const t3 = this._clip(e2);
              if (t3) {
                t:
                  for (let r2 = 0, i2 = n2.length; r2 < i2; r2 += 2)
                    for (let o2 = 0, a2 = t3.length; o2 < a2; o2 += 2)
                      if (n2[r2] === t3[o2] && n2[r2 + 1] === t3[o2 + 1] && n2[(r2 + 2) % i2] === t3[(o2 + a2 - 2) % a2] && n2[(r2 + 3) % i2] === t3[(o2 + a2 - 1) % a2]) {
                        yield e2;
                        break t;
                      }
              }
            }
        }
        _cell(t2) {
          const { circumcenters: n2, delaunay: { inedges: e2, halfedges: r2, triangles: i2 } } = this, o2 = e2[t2];
          if (-1 === o2)
            return null;
          const a2 = [];
          let u2 = o2;
          do {
            const e3 = Math.floor(u2 / 3);
            if (a2.push(n2[2 * e3], n2[2 * e3 + 1]), u2 = u2 % 3 == 2 ? u2 - 2 : u2 + 1, i2[u2] !== t2)
              break;
            u2 = r2[u2];
          } while (u2 !== o2 && -1 !== u2);
          return a2;
        }
        _clip(t2) {
          if (0 === t2 && 1 === this.delaunay.hull.length)
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          const n2 = this._cell(t2);
          if (null === n2)
            return null;
          const { vectors: e2 } = this, r2 = 4 * t2;
          return this._simplify(e2[r2] || e2[r2 + 1] ? this._clipInfinite(t2, n2, e2[r2], e2[r2 + 1], e2[r2 + 2], e2[r2 + 3]) : this._clipFinite(t2, n2));
        }
        _clipFinite(t2, n2) {
          const e2 = n2.length;
          let r2, i2, o2, a2, u2 = null, c2 = n2[e2 - 2], f2 = n2[e2 - 1], s2 = this._regioncode(c2, f2), l2 = 0;
          for (let h2 = 0; h2 < e2; h2 += 2)
            if (r2 = c2, i2 = f2, c2 = n2[h2], f2 = n2[h2 + 1], o2 = s2, s2 = this._regioncode(c2, f2), 0 === o2 && 0 === s2)
              a2 = l2, l2 = 0, u2 ? u2.push(c2, f2) : u2 = [c2, f2];
            else {
              let n3, e3, h3, d2, p2;
              if (0 === o2) {
                if (null === (n3 = this._clipSegment(r2, i2, c2, f2, o2, s2)))
                  continue;
                [e3, h3, d2, p2] = n3;
              } else {
                if (null === (n3 = this._clipSegment(c2, f2, r2, i2, s2, o2)))
                  continue;
                [d2, p2, e3, h3] = n3, a2 = l2, l2 = this._edgecode(e3, h3), a2 && l2 && this._edge(t2, a2, l2, u2, u2.length), u2 ? u2.push(e3, h3) : u2 = [e3, h3];
              }
              a2 = l2, l2 = this._edgecode(d2, p2), a2 && l2 && this._edge(t2, a2, l2, u2, u2.length), u2 ? u2.push(d2, p2) : u2 = [d2, p2];
            }
          if (u2)
            a2 = l2, l2 = this._edgecode(u2[0], u2[1]), a2 && l2 && this._edge(t2, a2, l2, u2, u2.length);
          else if (this.contains(t2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          return u2;
        }
        _clipSegment(t2, n2, e2, r2, i2, o2) {
          const a2 = i2 < o2;
          for (a2 && ([t2, n2, e2, r2, i2, o2] = [e2, r2, t2, n2, o2, i2]); ; ) {
            if (0 === i2 && 0 === o2)
              return a2 ? [e2, r2, t2, n2] : [t2, n2, e2, r2];
            if (i2 & o2)
              return null;
            let u2, c2, f2 = i2 || o2;
            8 & f2 ? (u2 = t2 + (e2 - t2) * (this.ymax - n2) / (r2 - n2), c2 = this.ymax) : 4 & f2 ? (u2 = t2 + (e2 - t2) * (this.ymin - n2) / (r2 - n2), c2 = this.ymin) : 2 & f2 ? (c2 = n2 + (r2 - n2) * (this.xmax - t2) / (e2 - t2), u2 = this.xmax) : (c2 = n2 + (r2 - n2) * (this.xmin - t2) / (e2 - t2), u2 = this.xmin), i2 ? (t2 = u2, n2 = c2, i2 = this._regioncode(t2, n2)) : (e2 = u2, r2 = c2, o2 = this._regioncode(e2, r2));
          }
        }
        _clipInfinite(t2, n2, e2, r2, i2, o2) {
          let a2, u2 = Array.from(n2);
          if ((a2 = this._project(u2[0], u2[1], e2, r2)) && u2.unshift(a2[0], a2[1]), (a2 = this._project(u2[u2.length - 2], u2[u2.length - 1], i2, o2)) && u2.push(a2[0], a2[1]), u2 = this._clipFinite(t2, u2))
            for (let n3, e3 = 0, r3 = u2.length, i3 = this._edgecode(u2[r3 - 2], u2[r3 - 1]); e3 < r3; e3 += 2)
              n3 = i3, i3 = this._edgecode(u2[e3], u2[e3 + 1]), n3 && i3 && (e3 = this._edge(t2, n3, i3, u2, e3), r3 = u2.length);
          else
            this.contains(t2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u2 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
          return u2;
        }
        _edge(t2, n2, e2, r2, i2) {
          for (; n2 !== e2; ) {
            let e3, o2;
            switch (n2) {
              case 5:
                n2 = 4;
                continue;
              case 4:
                n2 = 6, e3 = this.xmax, o2 = this.ymin;
                break;
              case 6:
                n2 = 2;
                continue;
              case 2:
                n2 = 10, e3 = this.xmax, o2 = this.ymax;
                break;
              case 10:
                n2 = 8;
                continue;
              case 8:
                n2 = 9, e3 = this.xmin, o2 = this.ymax;
                break;
              case 9:
                n2 = 1;
                continue;
              case 1:
                n2 = 5, e3 = this.xmin, o2 = this.ymin;
            }
            r2[i2] === e3 && r2[i2 + 1] === o2 || !this.contains(t2, e3, o2) || (r2.splice(i2, 0, e3, o2), i2 += 2);
          }
          return i2;
        }
        _project(t2, n2, e2, r2) {
          let i2, o2, a2, u2 = 1 / 0;
          if (r2 < 0) {
            if (n2 <= this.ymin)
              return null;
            (i2 = (this.ymin - n2) / r2) < u2 && (a2 = this.ymin, o2 = t2 + (u2 = i2) * e2);
          } else if (r2 > 0) {
            if (n2 >= this.ymax)
              return null;
            (i2 = (this.ymax - n2) / r2) < u2 && (a2 = this.ymax, o2 = t2 + (u2 = i2) * e2);
          }
          if (e2 > 0) {
            if (t2 >= this.xmax)
              return null;
            (i2 = (this.xmax - t2) / e2) < u2 && (o2 = this.xmax, a2 = n2 + (u2 = i2) * r2);
          } else if (e2 < 0) {
            if (t2 <= this.xmin)
              return null;
            (i2 = (this.xmin - t2) / e2) < u2 && (o2 = this.xmin, a2 = n2 + (u2 = i2) * r2);
          }
          return [o2, a2];
        }
        _edgecode(t2, n2) {
          return (t2 === this.xmin ? 1 : t2 === this.xmax ? 2 : 0) | (n2 === this.ymin ? 4 : n2 === this.ymax ? 8 : 0);
        }
        _regioncode(t2, n2) {
          return (t2 < this.xmin ? 1 : t2 > this.xmax ? 2 : 0) | (n2 < this.ymin ? 4 : n2 > this.ymax ? 8 : 0);
        }
        _simplify(t2) {
          if (t2 && t2.length > 4) {
            for (let n2 = 0; n2 < t2.length; n2 += 2) {
              const e2 = (n2 + 2) % t2.length, r2 = (n2 + 4) % t2.length;
              (t2[n2] === t2[e2] && t2[e2] === t2[r2] || t2[n2 + 1] === t2[e2 + 1] && t2[e2 + 1] === t2[r2 + 1]) && (t2.splice(e2, 2), n2 -= 2);
            }
            t2.length || (t2 = null);
          }
          return t2;
        }
      }
      const Uu = 2 * Math.PI, Iu = Math.pow;
      function Ou(t2) {
        return t2[0];
      }
      function Bu(t2) {
        return t2[1];
      }
      function Yu(t2, n2, e2) {
        return [t2 + Math.sin(t2 + n2) * e2, n2 + Math.cos(t2 - n2) * e2];
      }
      class Lu {
        static from(t2, n2 = Ou, e2 = Bu, r2) {
          return new Lu("length" in t2 ? function(t3, n3, e3, r3) {
            const i2 = t3.length, o2 = new Float64Array(2 * i2);
            for (let a2 = 0; a2 < i2; ++a2) {
              const i3 = t3[a2];
              o2[2 * a2] = n3.call(r3, i3, a2, t3), o2[2 * a2 + 1] = e3.call(r3, i3, a2, t3);
            }
            return o2;
          }(t2, n2, e2, r2) : Float64Array.from(function* (t3, n3, e3, r3) {
            let i2 = 0;
            for (const o2 of t3)
              yield n3.call(r3, o2, i2, t3), yield e3.call(r3, o2, i2, t3), ++i2;
          }(t2, n2, e2, r2)));
        }
        constructor(t2) {
          this._delaunator = new Su(t2), this.inedges = new Int32Array(t2.length / 2), this._hullIndex = new Int32Array(t2.length / 2), this.points = this._delaunator.coords, this._init();
        }
        update() {
          return this._delaunator.update(), this._init(), this;
        }
        _init() {
          const t2 = this._delaunator, n2 = this.points;
          if (t2.hull && t2.hull.length > 2 && function(t3) {
            const { triangles: n3, coords: e3 } = t3;
            for (let t4 = 0; t4 < n3.length; t4 += 3) {
              const r3 = 2 * n3[t4], i3 = 2 * n3[t4 + 1], o3 = 2 * n3[t4 + 2];
              if ((e3[o3] - e3[r3]) * (e3[i3 + 1] - e3[r3 + 1]) - (e3[i3] - e3[r3]) * (e3[o3 + 1] - e3[r3 + 1]) > 1e-10)
                return false;
            }
            return true;
          }(t2)) {
            this.collinear = Int32Array.from({ length: n2.length / 2 }, (t4, n3) => n3).sort((t4, e4) => n2[2 * t4] - n2[2 * e4] || n2[2 * t4 + 1] - n2[2 * e4 + 1]);
            const t3 = this.collinear[0], e3 = this.collinear[this.collinear.length - 1], r3 = [n2[2 * t3], n2[2 * t3 + 1], n2[2 * e3], n2[2 * e3 + 1]], i3 = 1e-8 * Math.hypot(r3[3] - r3[1], r3[2] - r3[0]);
            for (let t4 = 0, e4 = n2.length / 2; t4 < e4; ++t4) {
              const e5 = Yu(n2[2 * t4], n2[2 * t4 + 1], i3);
              n2[2 * t4] = e5[0], n2[2 * t4 + 1] = e5[1];
            }
            this._delaunator = new Su(n2);
          } else
            delete this.collinear;
          const e2 = this.halfedges = this._delaunator.halfedges, r2 = this.hull = this._delaunator.hull, i2 = this.triangles = this._delaunator.triangles, o2 = this.inedges.fill(-1), a2 = this._hullIndex.fill(-1);
          for (let t3 = 0, n3 = e2.length; t3 < n3; ++t3) {
            const n4 = i2[t3 % 3 == 2 ? t3 - 2 : t3 + 1];
            -1 !== e2[t3] && -1 !== o2[n4] || (o2[n4] = t3);
          }
          for (let t3 = 0, n3 = r2.length; t3 < n3; ++t3)
            a2[r2[t3]] = t3;
          r2.length <= 2 && r2.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r2[0], o2[r2[0]] = 1, 2 === r2.length && (o2[r2[1]] = 0, this.triangles[1] = r2[1], this.triangles[2] = r2[1]));
        }
        voronoi(t2) {
          return new qu(this, t2);
        }
        *neighbors(t2) {
          const { inedges: n2, hull: e2, _hullIndex: r2, halfedges: i2, triangles: o2, collinear: a2 } = this;
          if (a2) {
            const n3 = a2.indexOf(t2);
            return n3 > 0 && (yield a2[n3 - 1]), void (n3 < a2.length - 1 && (yield a2[n3 + 1]));
          }
          const u2 = n2[t2];
          if (-1 === u2)
            return;
          let c2 = u2, f2 = -1;
          do {
            if (yield f2 = o2[c2], c2 = c2 % 3 == 2 ? c2 - 2 : c2 + 1, o2[c2] !== t2)
              return;
            if (c2 = i2[c2], -1 === c2) {
              const n3 = e2[(r2[t2] + 1) % e2.length];
              return void (n3 !== f2 && (yield n3));
            }
          } while (c2 !== u2);
        }
        find(t2, n2, e2 = 0) {
          if ((t2 = +t2) != t2 || (n2 = +n2) != n2)
            return -1;
          const r2 = e2;
          let i2;
          for (; (i2 = this._step(e2, t2, n2)) >= 0 && i2 !== e2 && i2 !== r2; )
            e2 = i2;
          return i2;
        }
        _step(t2, n2, e2) {
          const { inedges: r2, hull: i2, _hullIndex: o2, halfedges: a2, triangles: u2, points: c2 } = this;
          if (-1 === r2[t2] || !c2.length)
            return (t2 + 1) % (c2.length >> 1);
          let f2 = t2, s2 = Iu(n2 - c2[2 * t2], 2) + Iu(e2 - c2[2 * t2 + 1], 2);
          const l2 = r2[t2];
          let h2 = l2;
          do {
            let r3 = u2[h2];
            const l3 = Iu(n2 - c2[2 * r3], 2) + Iu(e2 - c2[2 * r3 + 1], 2);
            if (l3 < s2 && (s2 = l3, f2 = r3), h2 = h2 % 3 == 2 ? h2 - 2 : h2 + 1, u2[h2] !== t2)
              break;
            if (h2 = a2[h2], -1 === h2) {
              if (h2 = i2[(o2[t2] + 1) % i2.length], h2 !== r3 && Iu(n2 - c2[2 * h2], 2) + Iu(e2 - c2[2 * h2 + 1], 2) < s2)
                return h2;
              break;
            }
          } while (h2 !== l2);
          return f2;
        }
        render(t2) {
          const n2 = null == t2 ? t2 = new Ru() : void 0, { points: e2, halfedges: r2, triangles: i2 } = this;
          for (let n3 = 0, o2 = r2.length; n3 < o2; ++n3) {
            const o3 = r2[n3];
            if (o3 < n3)
              continue;
            const a2 = 2 * i2[n3], u2 = 2 * i2[o3];
            t2.moveTo(e2[a2], e2[a2 + 1]), t2.lineTo(e2[u2], e2[u2 + 1]);
          }
          return this.renderHull(t2), n2 && n2.value();
        }
        renderPoints(t2, n2) {
          void 0 !== n2 || t2 && "function" == typeof t2.moveTo || (n2 = t2, t2 = null), n2 = null == n2 ? 2 : +n2;
          const e2 = null == t2 ? t2 = new Ru() : void 0, { points: r2 } = this;
          for (let e3 = 0, i2 = r2.length; e3 < i2; e3 += 2) {
            const i3 = r2[e3], o2 = r2[e3 + 1];
            t2.moveTo(i3 + n2, o2), t2.arc(i3, o2, n2, 0, Uu);
          }
          return e2 && e2.value();
        }
        renderHull(t2) {
          const n2 = null == t2 ? t2 = new Ru() : void 0, { hull: e2, points: r2 } = this, i2 = 2 * e2[0], o2 = e2.length;
          t2.moveTo(r2[i2], r2[i2 + 1]);
          for (let n3 = 1; n3 < o2; ++n3) {
            const i3 = 2 * e2[n3];
            t2.lineTo(r2[i3], r2[i3 + 1]);
          }
          return t2.closePath(), n2 && n2.value();
        }
        hullPolygon() {
          const t2 = new Fu();
          return this.renderHull(t2), t2.value();
        }
        renderTriangle(t2, n2) {
          const e2 = null == n2 ? n2 = new Ru() : void 0, { points: r2, triangles: i2 } = this, o2 = 2 * i2[t2 *= 3], a2 = 2 * i2[t2 + 1], u2 = 2 * i2[t2 + 2];
          return n2.moveTo(r2[o2], r2[o2 + 1]), n2.lineTo(r2[a2], r2[a2 + 1]), n2.lineTo(r2[u2], r2[u2 + 1]), n2.closePath(), e2 && e2.value();
        }
        *trianglePolygons() {
          const { triangles: t2 } = this;
          for (let n2 = 0, e2 = t2.length / 3; n2 < e2; ++n2)
            yield this.trianglePolygon(n2);
        }
        trianglePolygon(t2) {
          const n2 = new Fu();
          return this.renderTriangle(t2, n2), n2.value();
        }
      }
      var ju = {}, Hu = {}, Xu = 34, Gu = 10, Vu = 13;
      function Wu(t2) {
        return new Function("d", "return {" + t2.map(function(t3, n2) {
          return JSON.stringify(t3) + ": d[" + n2 + '] || ""';
        }).join(",") + "}");
      }
      function Zu(t2) {
        var n2 = /* @__PURE__ */ Object.create(null), e2 = [];
        return t2.forEach(function(t3) {
          for (var r2 in t3)
            r2 in n2 || e2.push(n2[r2] = r2);
        }), e2;
      }
      function Ku(t2, n2) {
        var e2 = t2 + "", r2 = e2.length;
        return r2 < n2 ? new Array(n2 - r2 + 1).join(0) + e2 : e2;
      }
      function Qu(t2) {
        var n2, e2 = t2.getUTCHours(), r2 = t2.getUTCMinutes(), i2 = t2.getUTCSeconds(), o2 = t2.getUTCMilliseconds();
        return isNaN(t2) ? "Invalid Date" : ((n2 = t2.getUTCFullYear()) < 0 ? "-" + Ku(-n2, 6) : n2 > 9999 ? "+" + Ku(n2, 6) : Ku(n2, 4)) + "-" + Ku(t2.getUTCMonth() + 1, 2) + "-" + Ku(t2.getUTCDate(), 2) + (o2 ? "T" + Ku(e2, 2) + ":" + Ku(r2, 2) + ":" + Ku(i2, 2) + "." + Ku(o2, 3) + "Z" : i2 ? "T" + Ku(e2, 2) + ":" + Ku(r2, 2) + ":" + Ku(i2, 2) + "Z" : r2 || e2 ? "T" + Ku(e2, 2) + ":" + Ku(r2, 2) + "Z" : "");
      }
      function Ju(t2) {
        var n2 = new RegExp('["' + t2 + "\n\r]"), e2 = t2.charCodeAt(0);
        function r2(t3, n3) {
          var r3, i3 = [], o3 = t3.length, a3 = 0, u2 = 0, c2 = o3 <= 0, f2 = false;
          function s2() {
            if (c2)
              return Hu;
            if (f2)
              return f2 = false, ju;
            var n4, r4, i4 = a3;
            if (t3.charCodeAt(i4) === Xu) {
              for (; a3++ < o3 && t3.charCodeAt(a3) !== Xu || t3.charCodeAt(++a3) === Xu; )
                ;
              return (n4 = a3) >= o3 ? c2 = true : (r4 = t3.charCodeAt(a3++)) === Gu ? f2 = true : r4 === Vu && (f2 = true, t3.charCodeAt(a3) === Gu && ++a3), t3.slice(i4 + 1, n4 - 1).replace(/""/g, '"');
            }
            for (; a3 < o3; ) {
              if ((r4 = t3.charCodeAt(n4 = a3++)) === Gu)
                f2 = true;
              else if (r4 === Vu)
                f2 = true, t3.charCodeAt(a3) === Gu && ++a3;
              else if (r4 !== e2)
                continue;
              return t3.slice(i4, n4);
            }
            return c2 = true, t3.slice(i4, o3);
          }
          for (t3.charCodeAt(o3 - 1) === Gu && --o3, t3.charCodeAt(o3 - 1) === Vu && --o3; (r3 = s2()) !== Hu; ) {
            for (var l2 = []; r3 !== ju && r3 !== Hu; )
              l2.push(r3), r3 = s2();
            n3 && null == (l2 = n3(l2, u2++)) || i3.push(l2);
          }
          return i3;
        }
        function i2(n3, e3) {
          return n3.map(function(n4) {
            return e3.map(function(t3) {
              return a2(n4[t3]);
            }).join(t2);
          });
        }
        function o2(n3) {
          return n3.map(a2).join(t2);
        }
        function a2(t3) {
          return null == t3 ? "" : t3 instanceof Date ? Qu(t3) : n2.test(t3 += "") ? '"' + t3.replace(/"/g, '""') + '"' : t3;
        }
        return { parse: function(t3, n3) {
          var e3, i3, o3 = r2(t3, function(t4, r3) {
            if (e3)
              return e3(t4, r3 - 1);
            i3 = t4, e3 = n3 ? function(t5, n4) {
              var e4 = Wu(t5);
              return function(r4, i4) {
                return n4(e4(r4), i4, t5);
              };
            }(t4, n3) : Wu(t4);
          });
          return o3.columns = i3 || [], o3;
        }, parseRows: r2, format: function(n3, e3) {
          return null == e3 && (e3 = Zu(n3)), [e3.map(a2).join(t2)].concat(i2(n3, e3)).join("\n");
        }, formatBody: function(t3, n3) {
          return null == n3 && (n3 = Zu(t3)), i2(t3, n3).join("\n");
        }, formatRows: function(t3) {
          return t3.map(o2).join("\n");
        }, formatRow: o2, formatValue: a2 };
      }
      var tc = Ju(","), nc = tc.parse, ec = tc.parseRows, rc = tc.format, ic = tc.formatBody, oc = tc.formatRows, ac = tc.formatRow, uc = tc.formatValue, cc = Ju("	"), fc = cc.parse, sc = cc.parseRows, lc = cc.format, hc = cc.formatBody, dc = cc.formatRows, pc = cc.formatRow, gc = cc.formatValue;
      const yc = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();
      function vc(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.blob();
      }
      function _c(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.arrayBuffer();
      }
      function bc(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.text();
      }
      function mc(t2, n2) {
        return fetch(t2, n2).then(bc);
      }
      function xc(t2) {
        return function(n2, e2, r2) {
          return 2 === arguments.length && "function" == typeof e2 && (r2 = e2, e2 = void 0), mc(n2, e2).then(function(n3) {
            return t2(n3, r2);
          });
        };
      }
      var wc = xc(nc), Mc = xc(fc);
      function Tc(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        if (204 !== t2.status && 205 !== t2.status)
          return t2.json();
      }
      function Ac(t2) {
        return (n2, e2) => mc(n2, e2).then((n3) => new DOMParser().parseFromString(n3, t2));
      }
      var Sc = Ac("application/xml"), Ec = Ac("text/html"), Nc = Ac("image/svg+xml");
      function kc(t2, n2, e2, r2) {
        if (isNaN(n2) || isNaN(e2))
          return t2;
        var i2, o2, a2, u2, c2, f2, s2, l2, h2, d2 = t2._root, p2 = { data: r2 }, g2 = t2._x0, y2 = t2._y0, v2 = t2._x1, _2 = t2._y1;
        if (!d2)
          return t2._root = p2, t2;
        for (; d2.length; )
          if ((f2 = n2 >= (o2 = (g2 + v2) / 2)) ? g2 = o2 : v2 = o2, (s2 = e2 >= (a2 = (y2 + _2) / 2)) ? y2 = a2 : _2 = a2, i2 = d2, !(d2 = d2[l2 = s2 << 1 | f2]))
            return i2[l2] = p2, t2;
        if (u2 = +t2._x.call(null, d2.data), c2 = +t2._y.call(null, d2.data), n2 === u2 && e2 === c2)
          return p2.next = d2, i2 ? i2[l2] = p2 : t2._root = p2, t2;
        do {
          i2 = i2 ? i2[l2] = new Array(4) : t2._root = new Array(4), (f2 = n2 >= (o2 = (g2 + v2) / 2)) ? g2 = o2 : v2 = o2, (s2 = e2 >= (a2 = (y2 + _2) / 2)) ? y2 = a2 : _2 = a2;
        } while ((l2 = s2 << 1 | f2) == (h2 = (c2 >= a2) << 1 | u2 >= o2));
        return i2[h2] = d2, i2[l2] = p2, t2;
      }
      function Cc(t2, n2, e2, r2, i2) {
        this.node = t2, this.x0 = n2, this.y0 = e2, this.x1 = r2, this.y1 = i2;
      }
      function Pc(t2) {
        return t2[0];
      }
      function zc(t2) {
        return t2[1];
      }
      function $c(t2, n2, e2) {
        var r2 = new Dc(null == n2 ? Pc : n2, null == e2 ? zc : e2, NaN, NaN, NaN, NaN);
        return null == t2 ? r2 : r2.addAll(t2);
      }
      function Dc(t2, n2, e2, r2, i2, o2) {
        this._x = t2, this._y = n2, this._x0 = e2, this._y0 = r2, this._x1 = i2, this._y1 = o2, this._root = void 0;
      }
      function Rc(t2) {
        for (var n2 = { data: t2.data }, e2 = n2; t2 = t2.next; )
          e2 = e2.next = { data: t2.data };
        return n2;
      }
      var Fc = $c.prototype = Dc.prototype;
      function qc(t2) {
        return function() {
          return t2;
        };
      }
      function Uc(t2) {
        return 1e-6 * (t2() - 0.5);
      }
      function Ic(t2) {
        return t2.x + t2.vx;
      }
      function Oc(t2) {
        return t2.y + t2.vy;
      }
      function Bc(t2) {
        return t2.index;
      }
      function Yc(t2, n2) {
        var e2 = t2.get(n2);
        if (!e2)
          throw new Error("node not found: " + n2);
        return e2;
      }
      Fc.copy = function() {
        var t2, n2, e2 = new Dc(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r2 = this._root;
        if (!r2)
          return e2;
        if (!r2.length)
          return e2._root = Rc(r2), e2;
        for (t2 = [{ source: r2, target: e2._root = new Array(4) }]; r2 = t2.pop(); )
          for (var i2 = 0; i2 < 4; ++i2)
            (n2 = r2.source[i2]) && (n2.length ? t2.push({ source: n2, target: r2.target[i2] = new Array(4) }) : r2.target[i2] = Rc(n2));
        return e2;
      }, Fc.add = function(t2) {
        const n2 = +this._x.call(null, t2), e2 = +this._y.call(null, t2);
        return kc(this.cover(n2, e2), n2, e2, t2);
      }, Fc.addAll = function(t2) {
        var n2, e2, r2, i2, o2 = t2.length, a2 = new Array(o2), u2 = new Array(o2), c2 = 1 / 0, f2 = 1 / 0, s2 = -1 / 0, l2 = -1 / 0;
        for (e2 = 0; e2 < o2; ++e2)
          isNaN(r2 = +this._x.call(null, n2 = t2[e2])) || isNaN(i2 = +this._y.call(null, n2)) || (a2[e2] = r2, u2[e2] = i2, r2 < c2 && (c2 = r2), r2 > s2 && (s2 = r2), i2 < f2 && (f2 = i2), i2 > l2 && (l2 = i2));
        if (c2 > s2 || f2 > l2)
          return this;
        for (this.cover(c2, f2).cover(s2, l2), e2 = 0; e2 < o2; ++e2)
          kc(this, a2[e2], u2[e2], t2[e2]);
        return this;
      }, Fc.cover = function(t2, n2) {
        if (isNaN(t2 = +t2) || isNaN(n2 = +n2))
          return this;
        var e2 = this._x0, r2 = this._y0, i2 = this._x1, o2 = this._y1;
        if (isNaN(e2))
          i2 = (e2 = Math.floor(t2)) + 1, o2 = (r2 = Math.floor(n2)) + 1;
        else {
          for (var a2, u2, c2 = i2 - e2 || 1, f2 = this._root; e2 > t2 || t2 >= i2 || r2 > n2 || n2 >= o2; )
            switch (u2 = (n2 < r2) << 1 | t2 < e2, (a2 = new Array(4))[u2] = f2, f2 = a2, c2 *= 2, u2) {
              case 0:
                i2 = e2 + c2, o2 = r2 + c2;
                break;
              case 1:
                e2 = i2 - c2, o2 = r2 + c2;
                break;
              case 2:
                i2 = e2 + c2, r2 = o2 - c2;
                break;
              case 3:
                e2 = i2 - c2, r2 = o2 - c2;
            }
          this._root && this._root.length && (this._root = f2);
        }
        return this._x0 = e2, this._y0 = r2, this._x1 = i2, this._y1 = o2, this;
      }, Fc.data = function() {
        var t2 = [];
        return this.visit(function(n2) {
          if (!n2.length)
            do {
              t2.push(n2.data);
            } while (n2 = n2.next);
        }), t2;
      }, Fc.extent = function(t2) {
        return arguments.length ? this.cover(+t2[0][0], +t2[0][1]).cover(+t2[1][0], +t2[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
      }, Fc.find = function(t2, n2, e2) {
        var r2, i2, o2, a2, u2, c2, f2, s2 = this._x0, l2 = this._y0, h2 = this._x1, d2 = this._y1, p2 = [], g2 = this._root;
        for (g2 && p2.push(new Cc(g2, s2, l2, h2, d2)), null == e2 ? e2 = 1 / 0 : (s2 = t2 - e2, l2 = n2 - e2, h2 = t2 + e2, d2 = n2 + e2, e2 *= e2); c2 = p2.pop(); )
          if (!(!(g2 = c2.node) || (i2 = c2.x0) > h2 || (o2 = c2.y0) > d2 || (a2 = c2.x1) < s2 || (u2 = c2.y1) < l2))
            if (g2.length) {
              var y2 = (i2 + a2) / 2, v2 = (o2 + u2) / 2;
              p2.push(new Cc(g2[3], y2, v2, a2, u2), new Cc(g2[2], i2, v2, y2, u2), new Cc(g2[1], y2, o2, a2, v2), new Cc(g2[0], i2, o2, y2, v2)), (f2 = (n2 >= v2) << 1 | t2 >= y2) && (c2 = p2[p2.length - 1], p2[p2.length - 1] = p2[p2.length - 1 - f2], p2[p2.length - 1 - f2] = c2);
            } else {
              var _2 = t2 - +this._x.call(null, g2.data), b2 = n2 - +this._y.call(null, g2.data), m2 = _2 * _2 + b2 * b2;
              if (m2 < e2) {
                var x2 = Math.sqrt(e2 = m2);
                s2 = t2 - x2, l2 = n2 - x2, h2 = t2 + x2, d2 = n2 + x2, r2 = g2.data;
              }
            }
        return r2;
      }, Fc.remove = function(t2) {
        if (isNaN(o2 = +this._x.call(null, t2)) || isNaN(a2 = +this._y.call(null, t2)))
          return this;
        var n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2 = this._root, p2 = this._x0, g2 = this._y0, y2 = this._x1, v2 = this._y1;
        if (!d2)
          return this;
        if (d2.length)
          for (; ; ) {
            if ((f2 = o2 >= (u2 = (p2 + y2) / 2)) ? p2 = u2 : y2 = u2, (s2 = a2 >= (c2 = (g2 + v2) / 2)) ? g2 = c2 : v2 = c2, n2 = d2, !(d2 = d2[l2 = s2 << 1 | f2]))
              return this;
            if (!d2.length)
              break;
            (n2[l2 + 1 & 3] || n2[l2 + 2 & 3] || n2[l2 + 3 & 3]) && (e2 = n2, h2 = l2);
          }
        for (; d2.data !== t2; )
          if (r2 = d2, !(d2 = d2.next))
            return this;
        return (i2 = d2.next) && delete d2.next, r2 ? (i2 ? r2.next = i2 : delete r2.next, this) : n2 ? (i2 ? n2[l2] = i2 : delete n2[l2], (d2 = n2[0] || n2[1] || n2[2] || n2[3]) && d2 === (n2[3] || n2[2] || n2[1] || n2[0]) && !d2.length && (e2 ? e2[h2] = d2 : this._root = d2), this) : (this._root = i2, this);
      }, Fc.removeAll = function(t2) {
        for (var n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          this.remove(t2[n2]);
        return this;
      }, Fc.root = function() {
        return this._root;
      }, Fc.size = function() {
        var t2 = 0;
        return this.visit(function(n2) {
          if (!n2.length)
            do {
              ++t2;
            } while (n2 = n2.next);
        }), t2;
      }, Fc.visit = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2 = [], c2 = this._root;
        for (c2 && u2.push(new Cc(c2, this._x0, this._y0, this._x1, this._y1)); n2 = u2.pop(); )
          if (!t2(c2 = n2.node, r2 = n2.x0, i2 = n2.y0, o2 = n2.x1, a2 = n2.y1) && c2.length) {
            var f2 = (r2 + o2) / 2, s2 = (i2 + a2) / 2;
            (e2 = c2[3]) && u2.push(new Cc(e2, f2, s2, o2, a2)), (e2 = c2[2]) && u2.push(new Cc(e2, r2, s2, f2, a2)), (e2 = c2[1]) && u2.push(new Cc(e2, f2, i2, o2, s2)), (e2 = c2[0]) && u2.push(new Cc(e2, r2, i2, f2, s2));
          }
        return this;
      }, Fc.visitAfter = function(t2) {
        var n2, e2 = [], r2 = [];
        for (this._root && e2.push(new Cc(this._root, this._x0, this._y0, this._x1, this._y1)); n2 = e2.pop(); ) {
          var i2 = n2.node;
          if (i2.length) {
            var o2, a2 = n2.x0, u2 = n2.y0, c2 = n2.x1, f2 = n2.y1, s2 = (a2 + c2) / 2, l2 = (u2 + f2) / 2;
            (o2 = i2[0]) && e2.push(new Cc(o2, a2, u2, s2, l2)), (o2 = i2[1]) && e2.push(new Cc(o2, s2, u2, c2, l2)), (o2 = i2[2]) && e2.push(new Cc(o2, a2, l2, s2, f2)), (o2 = i2[3]) && e2.push(new Cc(o2, s2, l2, c2, f2));
          }
          r2.push(n2);
        }
        for (; n2 = r2.pop(); )
          t2(n2.node, n2.x0, n2.y0, n2.x1, n2.y1);
        return this;
      }, Fc.x = function(t2) {
        return arguments.length ? (this._x = t2, this) : this._x;
      }, Fc.y = function(t2) {
        return arguments.length ? (this._y = t2, this) : this._y;
      };
      const Lc = 1664525, jc = 1013904223, Hc = 4294967296;
      function Xc(t2) {
        return t2.x;
      }
      function Gc(t2) {
        return t2.y;
      }
      var Vc = Math.PI * (3 - Math.sqrt(5));
      function Wc(t2, n2) {
        if ((e2 = (t2 = n2 ? t2.toExponential(n2 - 1) : t2.toExponential()).indexOf("e")) < 0)
          return null;
        var e2, r2 = t2.slice(0, e2);
        return [r2.length > 1 ? r2[0] + r2.slice(2) : r2, +t2.slice(e2 + 1)];
      }
      function Zc(t2) {
        return (t2 = Wc(Math.abs(t2))) ? t2[1] : NaN;
      }
      var Kc, Qc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Jc(t2) {
        if (!(n2 = Qc.exec(t2)))
          throw new Error("invalid format: " + t2);
        var n2;
        return new tf({ fill: n2[1], align: n2[2], sign: n2[3], symbol: n2[4], zero: n2[5], width: n2[6], comma: n2[7], precision: n2[8] && n2[8].slice(1), trim: n2[9], type: n2[10] });
      }
      function tf(t2) {
        this.fill = void 0 === t2.fill ? " " : t2.fill + "", this.align = void 0 === t2.align ? ">" : t2.align + "", this.sign = void 0 === t2.sign ? "-" : t2.sign + "", this.symbol = void 0 === t2.symbol ? "" : t2.symbol + "", this.zero = !!t2.zero, this.width = void 0 === t2.width ? void 0 : +t2.width, this.comma = !!t2.comma, this.precision = void 0 === t2.precision ? void 0 : +t2.precision, this.trim = !!t2.trim, this.type = void 0 === t2.type ? "" : t2.type + "";
      }
      function nf(t2, n2) {
        var e2 = Wc(t2, n2);
        if (!e2)
          return t2 + "";
        var r2 = e2[0], i2 = e2[1];
        return i2 < 0 ? "0." + new Array(-i2).join("0") + r2 : r2.length > i2 + 1 ? r2.slice(0, i2 + 1) + "." + r2.slice(i2 + 1) : r2 + new Array(i2 - r2.length + 2).join("0");
      }
      Jc.prototype = tf.prototype, tf.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
      };
      var ef = { "%": (t2, n2) => (100 * t2).toFixed(n2), b: (t2) => Math.round(t2).toString(2), c: (t2) => t2 + "", d: function(t2) {
        return Math.abs(t2 = Math.round(t2)) >= 1e21 ? t2.toLocaleString("en").replace(/,/g, "") : t2.toString(10);
      }, e: (t2, n2) => t2.toExponential(n2), f: (t2, n2) => t2.toFixed(n2), g: (t2, n2) => t2.toPrecision(n2), o: (t2) => Math.round(t2).toString(8), p: (t2, n2) => nf(100 * t2, n2), r: nf, s: function(t2, n2) {
        var e2 = Wc(t2, n2);
        if (!e2)
          return t2 + "";
        var r2 = e2[0], i2 = e2[1], o2 = i2 - (Kc = 3 * Math.max(-8, Math.min(8, Math.floor(i2 / 3)))) + 1, a2 = r2.length;
        return o2 === a2 ? r2 : o2 > a2 ? r2 + new Array(o2 - a2 + 1).join("0") : o2 > 0 ? r2.slice(0, o2) + "." + r2.slice(o2) : "0." + new Array(1 - o2).join("0") + Wc(t2, Math.max(0, n2 + o2 - 1))[0];
      }, X: (t2) => Math.round(t2).toString(16).toUpperCase(), x: (t2) => Math.round(t2).toString(16) };
      function rf(t2) {
        return t2;
      }
      var of, af = Array.prototype.map, uf = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      function cf(t2) {
        var n2, e2, r2 = void 0 === t2.grouping || void 0 === t2.thousands ? rf : (n2 = af.call(t2.grouping, Number), e2 = t2.thousands + "", function(t3, r3) {
          for (var i3 = t3.length, o3 = [], a3 = 0, u3 = n2[0], c3 = 0; i3 > 0 && u3 > 0 && (c3 + u3 + 1 > r3 && (u3 = Math.max(1, r3 - c3)), o3.push(t3.substring(i3 -= u3, i3 + u3)), !((c3 += u3 + 1) > r3)); )
            u3 = n2[a3 = (a3 + 1) % n2.length];
          return o3.reverse().join(e2);
        }), i2 = void 0 === t2.currency ? "" : t2.currency[0] + "", o2 = void 0 === t2.currency ? "" : t2.currency[1] + "", a2 = void 0 === t2.decimal ? "." : t2.decimal + "", u2 = void 0 === t2.numerals ? rf : /* @__PURE__ */ function(t3) {
          return function(n3) {
            return n3.replace(/[0-9]/g, function(n4) {
              return t3[+n4];
            });
          };
        }(af.call(t2.numerals, String)), c2 = void 0 === t2.percent ? "%" : t2.percent + "", f2 = void 0 === t2.minus ? "\u2212" : t2.minus + "", s2 = void 0 === t2.nan ? "NaN" : t2.nan + "";
        function l2(t3) {
          var n3 = (t3 = Jc(t3)).fill, e3 = t3.align, l3 = t3.sign, h2 = t3.symbol, d2 = t3.zero, p2 = t3.width, g2 = t3.comma, y2 = t3.precision, v2 = t3.trim, _2 = t3.type;
          "n" === _2 ? (g2 = true, _2 = "g") : ef[_2] || (void 0 === y2 && (y2 = 12), v2 = true, _2 = "g"), (d2 || "0" === n3 && "=" === e3) && (d2 = true, n3 = "0", e3 = "=");
          var b2 = "$" === h2 ? i2 : "#" === h2 && /[boxX]/.test(_2) ? "0" + _2.toLowerCase() : "", m2 = "$" === h2 ? o2 : /[%p]/.test(_2) ? c2 : "", x2 = ef[_2], w2 = /[defgprs%]/.test(_2);
          function M2(t4) {
            var i3, o3, c3, h3 = b2, M3 = m2;
            if ("c" === _2)
              M3 = x2(t4) + M3, t4 = "";
            else {
              var T2 = (t4 = +t4) < 0 || 1 / t4 < 0;
              if (t4 = isNaN(t4) ? s2 : x2(Math.abs(t4), y2), v2 && (t4 = function(t5) {
                t:
                  for (var n4, e4 = t5.length, r3 = 1, i4 = -1; r3 < e4; ++r3)
                    switch (t5[r3]) {
                      case ".":
                        i4 = n4 = r3;
                        break;
                      case "0":
                        0 === i4 && (i4 = r3), n4 = r3;
                        break;
                      default:
                        if (!+t5[r3])
                          break t;
                        i4 > 0 && (i4 = 0);
                    }
                return i4 > 0 ? t5.slice(0, i4) + t5.slice(n4 + 1) : t5;
              }(t4)), T2 && 0 == +t4 && "+" !== l3 && (T2 = false), h3 = (T2 ? "(" === l3 ? l3 : f2 : "-" === l3 || "(" === l3 ? "" : l3) + h3, M3 = ("s" === _2 ? uf[8 + Kc / 3] : "") + M3 + (T2 && "(" === l3 ? ")" : ""), w2) {
                for (i3 = -1, o3 = t4.length; ++i3 < o3; )
                  if (48 > (c3 = t4.charCodeAt(i3)) || c3 > 57) {
                    M3 = (46 === c3 ? a2 + t4.slice(i3 + 1) : t4.slice(i3)) + M3, t4 = t4.slice(0, i3);
                    break;
                  }
              }
            }
            g2 && !d2 && (t4 = r2(t4, 1 / 0));
            var A2 = h3.length + t4.length + M3.length, S2 = A2 < p2 ? new Array(p2 - A2 + 1).join(n3) : "";
            switch (g2 && d2 && (t4 = r2(S2 + t4, S2.length ? p2 - M3.length : 1 / 0), S2 = ""), e3) {
              case "<":
                t4 = h3 + t4 + M3 + S2;
                break;
              case "=":
                t4 = h3 + S2 + t4 + M3;
                break;
              case "^":
                t4 = S2.slice(0, A2 = S2.length >> 1) + h3 + t4 + M3 + S2.slice(A2);
                break;
              default:
                t4 = S2 + h3 + t4 + M3;
            }
            return u2(t4);
          }
          return y2 = void 0 === y2 ? 6 : /[gprs]/.test(_2) ? Math.max(1, Math.min(21, y2)) : Math.max(0, Math.min(20, y2)), M2.toString = function() {
            return t3 + "";
          }, M2;
        }
        return { format: l2, formatPrefix: function(t3, n3) {
          var e3 = l2(((t3 = Jc(t3)).type = "f", t3)), r3 = 3 * Math.max(-8, Math.min(8, Math.floor(Zc(n3) / 3))), i3 = Math.pow(10, -r3), o3 = uf[8 + r3 / 3];
          return function(t4) {
            return e3(i3 * t4) + o3;
          };
        } };
      }
      function ff(n2) {
        return of = cf(n2), t.format = of.format, t.formatPrefix = of.formatPrefix, of;
      }
      function sf(t2) {
        return Math.max(0, -Zc(Math.abs(t2)));
      }
      function lf(t2, n2) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Zc(n2) / 3))) - Zc(Math.abs(t2)));
      }
      function hf(t2, n2) {
        return t2 = Math.abs(t2), n2 = Math.abs(n2) - t2, Math.max(0, Zc(n2) - Zc(t2)) + 1;
      }
      t.format = void 0, t.formatPrefix = void 0, ff({ thousands: ",", grouping: [3], currency: ["$", ""] });
      var df = 1e-6, pf = 1e-12, gf = Math.PI, yf = gf / 2, vf = gf / 4, _f = 2 * gf, bf = 180 / gf, mf = gf / 180, xf = Math.abs, wf = Math.atan, Mf = Math.atan2, Tf = Math.cos, Af = Math.ceil, Sf = Math.exp, Ef = Math.hypot, Nf = Math.log, kf = Math.pow, Cf = Math.sin, Pf = Math.sign || function(t2) {
        return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
      }, zf = Math.sqrt, $f = Math.tan;
      function Df(t2) {
        return t2 > 1 ? 0 : t2 < -1 ? gf : Math.acos(t2);
      }
      function Rf(t2) {
        return t2 > 1 ? yf : t2 < -1 ? -yf : Math.asin(t2);
      }
      function Ff(t2) {
        return (t2 = Cf(t2 / 2)) * t2;
      }
      function qf() {
      }
      function Uf(t2, n2) {
        t2 && Of.hasOwnProperty(t2.type) && Of[t2.type](t2, n2);
      }
      var If = { Feature: function(t2, n2) {
        Uf(t2.geometry, n2);
      }, FeatureCollection: function(t2, n2) {
        for (var e2 = t2.features, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Uf(e2[r2].geometry, n2);
      } }, Of = { Sphere: function(t2, n2) {
        n2.sphere();
      }, Point: function(t2, n2) {
        t2 = t2.coordinates, n2.point(t2[0], t2[1], t2[2]);
      }, MultiPoint: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          t2 = e2[r2], n2.point(t2[0], t2[1], t2[2]);
      }, LineString: function(t2, n2) {
        Bf(t2.coordinates, n2, 0);
      }, MultiLineString: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Bf(e2[r2], n2, 0);
      }, Polygon: function(t2, n2) {
        Yf(t2.coordinates, n2);
      }, MultiPolygon: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Yf(e2[r2], n2);
      }, GeometryCollection: function(t2, n2) {
        for (var e2 = t2.geometries, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Uf(e2[r2], n2);
      } };
      function Bf(t2, n2, e2) {
        var r2, i2 = -1, o2 = t2.length - e2;
        for (n2.lineStart(); ++i2 < o2; )
          r2 = t2[i2], n2.point(r2[0], r2[1], r2[2]);
        n2.lineEnd();
      }
      function Yf(t2, n2) {
        var e2 = -1, r2 = t2.length;
        for (n2.polygonStart(); ++e2 < r2; )
          Bf(t2[e2], n2, 1);
        n2.polygonEnd();
      }
      function Lf(t2, n2) {
        t2 && If.hasOwnProperty(t2.type) ? If[t2.type](t2, n2) : Uf(t2, n2);
      }
      var jf, Hf, Xf, Gf, Vf, Wf, Zf, Kf, Qf, Jf, ts, ns, es, rs, is, os, as = new T(), us = new T(), cs = { point: qf, lineStart: qf, lineEnd: qf, polygonStart: function() {
        as = new T(), cs.lineStart = fs, cs.lineEnd = ss;
      }, polygonEnd: function() {
        var t2 = +as;
        us.add(t2 < 0 ? _f + t2 : t2), this.lineStart = this.lineEnd = this.point = qf;
      }, sphere: function() {
        us.add(_f);
      } };
      function fs() {
        cs.point = ls;
      }
      function ss() {
        hs(jf, Hf);
      }
      function ls(t2, n2) {
        cs.point = hs, jf = t2, Hf = n2, Xf = t2 *= mf, Gf = Tf(n2 = (n2 *= mf) / 2 + vf), Vf = Cf(n2);
      }
      function hs(t2, n2) {
        var e2 = (t2 *= mf) - Xf, r2 = e2 >= 0 ? 1 : -1, i2 = r2 * e2, o2 = Tf(n2 = (n2 *= mf) / 2 + vf), a2 = Cf(n2), u2 = Vf * a2, c2 = Gf * o2 + u2 * Tf(i2), f2 = u2 * r2 * Cf(i2);
        as.add(Mf(f2, c2)), Xf = t2, Gf = o2, Vf = a2;
      }
      function ds(t2) {
        return [Mf(t2[1], t2[0]), Rf(t2[2])];
      }
      function ps(t2) {
        var n2 = t2[0], e2 = t2[1], r2 = Tf(e2);
        return [r2 * Tf(n2), r2 * Cf(n2), Cf(e2)];
      }
      function gs(t2, n2) {
        return t2[0] * n2[0] + t2[1] * n2[1] + t2[2] * n2[2];
      }
      function ys(t2, n2) {
        return [t2[1] * n2[2] - t2[2] * n2[1], t2[2] * n2[0] - t2[0] * n2[2], t2[0] * n2[1] - t2[1] * n2[0]];
      }
      function vs(t2, n2) {
        t2[0] += n2[0], t2[1] += n2[1], t2[2] += n2[2];
      }
      function _s(t2, n2) {
        return [t2[0] * n2, t2[1] * n2, t2[2] * n2];
      }
      function bs(t2) {
        var n2 = zf(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
        t2[0] /= n2, t2[1] /= n2, t2[2] /= n2;
      }
      var ms, xs, ws, Ms, Ts, As, Ss, Es, Ns, ks, Cs, Ps, zs, $s, Ds, Rs, Fs = { point: qs, lineStart: Is, lineEnd: Os, polygonStart: function() {
        Fs.point = Bs, Fs.lineStart = Ys, Fs.lineEnd = Ls, rs = new T(), cs.polygonStart();
      }, polygonEnd: function() {
        cs.polygonEnd(), Fs.point = qs, Fs.lineStart = Is, Fs.lineEnd = Os, as < 0 ? (Wf = -(Kf = 180), Zf = -(Qf = 90)) : rs > df ? Qf = 90 : rs < -df && (Zf = -90), os[0] = Wf, os[1] = Kf;
      }, sphere: function() {
        Wf = -(Kf = 180), Zf = -(Qf = 90);
      } };
      function qs(t2, n2) {
        is.push(os = [Wf = t2, Kf = t2]), n2 < Zf && (Zf = n2), n2 > Qf && (Qf = n2);
      }
      function Us(t2, n2) {
        var e2 = ps([t2 * mf, n2 * mf]);
        if (es) {
          var r2 = ys(es, e2), i2 = ys([r2[1], -r2[0], 0], r2);
          bs(i2), i2 = ds(i2);
          var o2, a2 = t2 - Jf, u2 = a2 > 0 ? 1 : -1, c2 = i2[0] * bf * u2, f2 = xf(a2) > 180;
          f2 ^ (u2 * Jf < c2 && c2 < u2 * t2) ? (o2 = i2[1] * bf) > Qf && (Qf = o2) : f2 ^ (u2 * Jf < (c2 = (c2 + 360) % 360 - 180) && c2 < u2 * t2) ? (o2 = -i2[1] * bf) < Zf && (Zf = o2) : (n2 < Zf && (Zf = n2), n2 > Qf && (Qf = n2)), f2 ? t2 < Jf ? js(Wf, t2) > js(Wf, Kf) && (Kf = t2) : js(t2, Kf) > js(Wf, Kf) && (Wf = t2) : Kf >= Wf ? (t2 < Wf && (Wf = t2), t2 > Kf && (Kf = t2)) : t2 > Jf ? js(Wf, t2) > js(Wf, Kf) && (Kf = t2) : js(t2, Kf) > js(Wf, Kf) && (Wf = t2);
        } else
          is.push(os = [Wf = t2, Kf = t2]);
        n2 < Zf && (Zf = n2), n2 > Qf && (Qf = n2), es = e2, Jf = t2;
      }
      function Is() {
        Fs.point = Us;
      }
      function Os() {
        os[0] = Wf, os[1] = Kf, Fs.point = qs, es = null;
      }
      function Bs(t2, n2) {
        if (es) {
          var e2 = t2 - Jf;
          rs.add(xf(e2) > 180 ? e2 + (e2 > 0 ? 360 : -360) : e2);
        } else
          ts = t2, ns = n2;
        cs.point(t2, n2), Us(t2, n2);
      }
      function Ys() {
        cs.lineStart();
      }
      function Ls() {
        Bs(ts, ns), cs.lineEnd(), xf(rs) > df && (Wf = -(Kf = 180)), os[0] = Wf, os[1] = Kf, es = null;
      }
      function js(t2, n2) {
        return (n2 -= t2) < 0 ? n2 + 360 : n2;
      }
      function Hs(t2, n2) {
        return t2[0] - n2[0];
      }
      function Xs(t2, n2) {
        return t2[0] <= t2[1] ? t2[0] <= n2 && n2 <= t2[1] : n2 < t2[0] || t2[1] < n2;
      }
      var Gs = { sphere: qf, point: Vs, lineStart: Zs, lineEnd: Js, polygonStart: function() {
        Gs.lineStart = tl, Gs.lineEnd = nl;
      }, polygonEnd: function() {
        Gs.lineStart = Zs, Gs.lineEnd = Js;
      } };
      function Vs(t2, n2) {
        t2 *= mf;
        var e2 = Tf(n2 *= mf);
        Ws(e2 * Tf(t2), e2 * Cf(t2), Cf(n2));
      }
      function Ws(t2, n2, e2) {
        ++ms, ws += (t2 - ws) / ms, Ms += (n2 - Ms) / ms, Ts += (e2 - Ts) / ms;
      }
      function Zs() {
        Gs.point = Ks;
      }
      function Ks(t2, n2) {
        t2 *= mf;
        var e2 = Tf(n2 *= mf);
        $s = e2 * Tf(t2), Ds = e2 * Cf(t2), Rs = Cf(n2), Gs.point = Qs, Ws($s, Ds, Rs);
      }
      function Qs(t2, n2) {
        t2 *= mf;
        var e2 = Tf(n2 *= mf), r2 = e2 * Tf(t2), i2 = e2 * Cf(t2), o2 = Cf(n2), a2 = Mf(zf((a2 = Ds * o2 - Rs * i2) * a2 + (a2 = Rs * r2 - $s * o2) * a2 + (a2 = $s * i2 - Ds * r2) * a2), $s * r2 + Ds * i2 + Rs * o2);
        xs += a2, As += a2 * ($s + ($s = r2)), Ss += a2 * (Ds + (Ds = i2)), Es += a2 * (Rs + (Rs = o2)), Ws($s, Ds, Rs);
      }
      function Js() {
        Gs.point = Vs;
      }
      function tl() {
        Gs.point = el;
      }
      function nl() {
        rl(Ps, zs), Gs.point = Vs;
      }
      function el(t2, n2) {
        Ps = t2, zs = n2, t2 *= mf, n2 *= mf, Gs.point = rl;
        var e2 = Tf(n2);
        $s = e2 * Tf(t2), Ds = e2 * Cf(t2), Rs = Cf(n2), Ws($s, Ds, Rs);
      }
      function rl(t2, n2) {
        t2 *= mf;
        var e2 = Tf(n2 *= mf), r2 = e2 * Tf(t2), i2 = e2 * Cf(t2), o2 = Cf(n2), a2 = Ds * o2 - Rs * i2, u2 = Rs * r2 - $s * o2, c2 = $s * i2 - Ds * r2, f2 = Ef(a2, u2, c2), s2 = Rf(f2), l2 = f2 && -s2 / f2;
        Ns.add(l2 * a2), ks.add(l2 * u2), Cs.add(l2 * c2), xs += s2, As += s2 * ($s + ($s = r2)), Ss += s2 * (Ds + (Ds = i2)), Es += s2 * (Rs + (Rs = o2)), Ws($s, Ds, Rs);
      }
      function il(t2) {
        return function() {
          return t2;
        };
      }
      function ol(t2, n2) {
        function e2(e3, r2) {
          return e3 = t2(e3, r2), n2(e3[0], e3[1]);
        }
        return t2.invert && n2.invert && (e2.invert = function(e3, r2) {
          return (e3 = n2.invert(e3, r2)) && t2.invert(e3[0], e3[1]);
        }), e2;
      }
      function al(t2, n2) {
        return xf(t2) > gf && (t2 -= Math.round(t2 / _f) * _f), [t2, n2];
      }
      function ul(t2, n2, e2) {
        return (t2 %= _f) ? n2 || e2 ? ol(fl(t2), sl(n2, e2)) : fl(t2) : n2 || e2 ? sl(n2, e2) : al;
      }
      function cl(t2) {
        return function(n2, e2) {
          return xf(n2 += t2) > gf && (n2 -= Math.round(n2 / _f) * _f), [n2, e2];
        };
      }
      function fl(t2) {
        var n2 = cl(t2);
        return n2.invert = cl(-t2), n2;
      }
      function sl(t2, n2) {
        var e2 = Tf(t2), r2 = Cf(t2), i2 = Tf(n2), o2 = Cf(n2);
        function a2(t3, n3) {
          var a3 = Tf(n3), u2 = Tf(t3) * a3, c2 = Cf(t3) * a3, f2 = Cf(n3), s2 = f2 * e2 + u2 * r2;
          return [Mf(c2 * i2 - s2 * o2, u2 * e2 - f2 * r2), Rf(s2 * i2 + c2 * o2)];
        }
        return a2.invert = function(t3, n3) {
          var a3 = Tf(n3), u2 = Tf(t3) * a3, c2 = Cf(t3) * a3, f2 = Cf(n3), s2 = f2 * i2 - c2 * o2;
          return [Mf(c2 * i2 + f2 * o2, u2 * e2 + s2 * r2), Rf(s2 * e2 - u2 * r2)];
        }, a2;
      }
      function ll(t2) {
        function n2(n3) {
          return (n3 = t2(n3[0] * mf, n3[1] * mf))[0] *= bf, n3[1] *= bf, n3;
        }
        return t2 = ul(t2[0] * mf, t2[1] * mf, t2.length > 2 ? t2[2] * mf : 0), n2.invert = function(n3) {
          return (n3 = t2.invert(n3[0] * mf, n3[1] * mf))[0] *= bf, n3[1] *= bf, n3;
        }, n2;
      }
      function hl(t2, n2, e2, r2, i2, o2) {
        if (e2) {
          var a2 = Tf(n2), u2 = Cf(n2), c2 = r2 * e2;
          null == i2 ? (i2 = n2 + r2 * _f, o2 = n2 - c2 / 2) : (i2 = dl(a2, i2), o2 = dl(a2, o2), (r2 > 0 ? i2 < o2 : i2 > o2) && (i2 += r2 * _f));
          for (var f2, s2 = i2; r2 > 0 ? s2 > o2 : s2 < o2; s2 -= c2)
            f2 = ds([a2, -u2 * Tf(s2), -u2 * Cf(s2)]), t2.point(f2[0], f2[1]);
        }
      }
      function dl(t2, n2) {
        (n2 = ps(n2))[0] -= t2, bs(n2);
        var e2 = Df(-n2[1]);
        return ((-n2[2] < 0 ? -e2 : e2) + _f - df) % _f;
      }
      function pl() {
        var t2, n2 = [];
        return { point: function(n3, e2, r2) {
          t2.push([n3, e2, r2]);
        }, lineStart: function() {
          n2.push(t2 = []);
        }, lineEnd: qf, rejoin: function() {
          n2.length > 1 && n2.push(n2.pop().concat(n2.shift()));
        }, result: function() {
          var e2 = n2;
          return n2 = [], t2 = null, e2;
        } };
      }
      function gl(t2, n2) {
        return xf(t2[0] - n2[0]) < df && xf(t2[1] - n2[1]) < df;
      }
      function yl(t2, n2, e2, r2) {
        this.x = t2, this.z = n2, this.o = e2, this.e = r2, this.v = false, this.n = this.p = null;
      }
      function vl(t2, n2, e2, r2, i2) {
        var o2, a2, u2 = [], c2 = [];
        if (t2.forEach(function(t3) {
          if (!((n3 = t3.length - 1) <= 0)) {
            var n3, e3, r3 = t3[0], a3 = t3[n3];
            if (gl(r3, a3)) {
              if (!r3[2] && !a3[2]) {
                for (i2.lineStart(), o2 = 0; o2 < n3; ++o2)
                  i2.point((r3 = t3[o2])[0], r3[1]);
                return void i2.lineEnd();
              }
              a3[0] += 2 * df;
            }
            u2.push(e3 = new yl(r3, t3, null, true)), c2.push(e3.o = new yl(r3, null, e3, false)), u2.push(e3 = new yl(a3, t3, null, false)), c2.push(e3.o = new yl(a3, null, e3, true));
          }
        }), u2.length) {
          for (c2.sort(n2), _l(u2), _l(c2), o2 = 0, a2 = c2.length; o2 < a2; ++o2)
            c2[o2].e = e2 = !e2;
          for (var f2, s2, l2 = u2[0]; ; ) {
            for (var h2 = l2, d2 = true; h2.v; )
              if ((h2 = h2.n) === l2)
                return;
            f2 = h2.z, i2.lineStart();
            do {
              if (h2.v = h2.o.v = true, h2.e) {
                if (d2)
                  for (o2 = 0, a2 = f2.length; o2 < a2; ++o2)
                    i2.point((s2 = f2[o2])[0], s2[1]);
                else
                  r2(h2.x, h2.n.x, 1, i2);
                h2 = h2.n;
              } else {
                if (d2)
                  for (f2 = h2.p.z, o2 = f2.length - 1; o2 >= 0; --o2)
                    i2.point((s2 = f2[o2])[0], s2[1]);
                else
                  r2(h2.x, h2.p.x, -1, i2);
                h2 = h2.p;
              }
              f2 = (h2 = h2.o).z, d2 = !d2;
            } while (!h2.v);
            i2.lineEnd();
          }
        }
      }
      function _l(t2) {
        if (n2 = t2.length) {
          for (var n2, e2, r2 = 0, i2 = t2[0]; ++r2 < n2; )
            i2.n = e2 = t2[r2], e2.p = i2, i2 = e2;
          i2.n = e2 = t2[0], e2.p = i2;
        }
      }
      function bl(t2) {
        return xf(t2[0]) <= gf ? t2[0] : Pf(t2[0]) * ((xf(t2[0]) + gf) % _f - gf);
      }
      function ml(t2, n2) {
        var e2 = bl(n2), r2 = n2[1], i2 = Cf(r2), o2 = [Cf(e2), -Tf(e2), 0], a2 = 0, u2 = 0, c2 = new T();
        1 === i2 ? r2 = yf + df : -1 === i2 && (r2 = -yf - df);
        for (var f2 = 0, s2 = t2.length; f2 < s2; ++f2)
          if (h2 = (l2 = t2[f2]).length)
            for (var l2, h2, d2 = l2[h2 - 1], p2 = bl(d2), g2 = d2[1] / 2 + vf, y2 = Cf(g2), v2 = Tf(g2), _2 = 0; _2 < h2; ++_2, p2 = m2, y2 = w2, v2 = M2, d2 = b2) {
              var b2 = l2[_2], m2 = bl(b2), x2 = b2[1] / 2 + vf, w2 = Cf(x2), M2 = Tf(x2), A2 = m2 - p2, S2 = A2 >= 0 ? 1 : -1, E2 = S2 * A2, N2 = E2 > gf, k2 = y2 * w2;
              if (c2.add(Mf(k2 * S2 * Cf(E2), v2 * M2 + k2 * Tf(E2))), a2 += N2 ? A2 + S2 * _f : A2, N2 ^ p2 >= e2 ^ m2 >= e2) {
                var C2 = ys(ps(d2), ps(b2));
                bs(C2);
                var P2 = ys(o2, C2);
                bs(P2);
                var z2 = (N2 ^ A2 >= 0 ? -1 : 1) * Rf(P2[2]);
                (r2 > z2 || r2 === z2 && (C2[0] || C2[1])) && (u2 += N2 ^ A2 >= 0 ? 1 : -1);
              }
            }
        return (a2 < -df || a2 < df && c2 < -pf) ^ 1 & u2;
      }
      function xl(t2, n2, e2, r2) {
        return function(i2) {
          var o2, a2, u2, c2 = n2(i2), f2 = pl(), s2 = n2(f2), l2 = false, h2 = { point: d2, lineStart: g2, lineEnd: y2, polygonStart: function() {
            h2.point = v2, h2.lineStart = _2, h2.lineEnd = b2, a2 = [], o2 = [];
          }, polygonEnd: function() {
            h2.point = d2, h2.lineStart = g2, h2.lineEnd = y2, a2 = ft(a2);
            var t3 = ml(o2, r2);
            a2.length ? (l2 || (i2.polygonStart(), l2 = true), vl(a2, Ml, t3, e2, i2)) : t3 && (l2 || (i2.polygonStart(), l2 = true), i2.lineStart(), e2(null, null, 1, i2), i2.lineEnd()), l2 && (i2.polygonEnd(), l2 = false), a2 = o2 = null;
          }, sphere: function() {
            i2.polygonStart(), i2.lineStart(), e2(null, null, 1, i2), i2.lineEnd(), i2.polygonEnd();
          } };
          function d2(n3, e3) {
            t2(n3, e3) && i2.point(n3, e3);
          }
          function p2(t3, n3) {
            c2.point(t3, n3);
          }
          function g2() {
            h2.point = p2, c2.lineStart();
          }
          function y2() {
            h2.point = d2, c2.lineEnd();
          }
          function v2(t3, n3) {
            u2.push([t3, n3]), s2.point(t3, n3);
          }
          function _2() {
            s2.lineStart(), u2 = [];
          }
          function b2() {
            v2(u2[0][0], u2[0][1]), s2.lineEnd();
            var t3, n3, e3, r3, c3 = s2.clean(), h3 = f2.result(), d4 = h3.length;
            if (u2.pop(), o2.push(u2), u2 = null, d4)
              if (1 & c3) {
                if ((n3 = (e3 = h3[0]).length - 1) > 0) {
                  for (l2 || (i2.polygonStart(), l2 = true), i2.lineStart(), t3 = 0; t3 < n3; ++t3)
                    i2.point((r3 = e3[t3])[0], r3[1]);
                  i2.lineEnd();
                }
              } else
                d4 > 1 && 2 & c3 && h3.push(h3.pop().concat(h3.shift())), a2.push(h3.filter(wl));
          }
          return h2;
        };
      }
      function wl(t2) {
        return t2.length > 1;
      }
      function Ml(t2, n2) {
        return ((t2 = t2.x)[0] < 0 ? t2[1] - yf - df : yf - t2[1]) - ((n2 = n2.x)[0] < 0 ? n2[1] - yf - df : yf - n2[1]);
      }
      al.invert = al;
      var Tl = xl(function() {
        return true;
      }, function(t2) {
        var n2, e2 = NaN, r2 = NaN, i2 = NaN;
        return { lineStart: function() {
          t2.lineStart(), n2 = 1;
        }, point: function(o2, a2) {
          var u2 = o2 > 0 ? gf : -gf, c2 = xf(o2 - e2);
          xf(c2 - gf) < df ? (t2.point(e2, r2 = (r2 + a2) / 2 > 0 ? yf : -yf), t2.point(i2, r2), t2.lineEnd(), t2.lineStart(), t2.point(u2, r2), t2.point(o2, r2), n2 = 0) : i2 !== u2 && c2 >= gf && (xf(e2 - i2) < df && (e2 -= i2 * df), xf(o2 - u2) < df && (o2 -= u2 * df), r2 = function(t3, n3, e3, r3) {
            var i3, o3, a3 = Cf(t3 - e3);
            return xf(a3) > df ? wf((Cf(n3) * (o3 = Tf(r3)) * Cf(e3) - Cf(r3) * (i3 = Tf(n3)) * Cf(t3)) / (i3 * o3 * a3)) : (n3 + r3) / 2;
          }(e2, r2, o2, a2), t2.point(i2, r2), t2.lineEnd(), t2.lineStart(), t2.point(u2, r2), n2 = 0), t2.point(e2 = o2, r2 = a2), i2 = u2;
        }, lineEnd: function() {
          t2.lineEnd(), e2 = r2 = NaN;
        }, clean: function() {
          return 2 - n2;
        } };
      }, function(t2, n2, e2, r2) {
        var i2;
        if (null == t2)
          i2 = e2 * yf, r2.point(-gf, i2), r2.point(0, i2), r2.point(gf, i2), r2.point(gf, 0), r2.point(gf, -i2), r2.point(0, -i2), r2.point(-gf, -i2), r2.point(-gf, 0), r2.point(-gf, i2);
        else if (xf(t2[0] - n2[0]) > df) {
          var o2 = t2[0] < n2[0] ? gf : -gf;
          i2 = e2 * o2 / 2, r2.point(-o2, i2), r2.point(0, i2), r2.point(o2, i2);
        } else
          r2.point(n2[0], n2[1]);
      }, [-gf, -yf]);
      function Al(t2) {
        var n2 = Tf(t2), e2 = 6 * mf, r2 = n2 > 0, i2 = xf(n2) > df;
        function o2(t3, e3) {
          return Tf(t3) * Tf(e3) > n2;
        }
        function a2(t3, e3, r3) {
          var i3 = [1, 0, 0], o3 = ys(ps(t3), ps(e3)), a3 = gs(o3, o3), u3 = o3[0], c2 = a3 - u3 * u3;
          if (!c2)
            return !r3 && t3;
          var f2 = n2 * a3 / c2, s2 = -n2 * u3 / c2, l2 = ys(i3, o3), h2 = _s(i3, f2);
          vs(h2, _s(o3, s2));
          var d2 = l2, p2 = gs(h2, d2), g2 = gs(d2, d2), y2 = p2 * p2 - g2 * (gs(h2, h2) - 1);
          if (!(y2 < 0)) {
            var v2 = zf(y2), _2 = _s(d2, (-p2 - v2) / g2);
            if (vs(_2, h2), _2 = ds(_2), !r3)
              return _2;
            var b2, m2 = t3[0], x2 = e3[0], w2 = t3[1], M2 = e3[1];
            x2 < m2 && (b2 = m2, m2 = x2, x2 = b2);
            var T2 = x2 - m2, A2 = xf(T2 - gf) < df;
            if (!A2 && M2 < w2 && (b2 = w2, w2 = M2, M2 = b2), A2 || T2 < df ? A2 ? w2 + M2 > 0 ^ _2[1] < (xf(_2[0] - m2) < df ? w2 : M2) : w2 <= _2[1] && _2[1] <= M2 : T2 > gf ^ (m2 <= _2[0] && _2[0] <= x2)) {
              var S2 = _s(d2, (-p2 + v2) / g2);
              return vs(S2, h2), [_2, ds(S2)];
            }
          }
        }
        function u2(n3, e3) {
          var i3 = r2 ? t2 : gf - t2, o3 = 0;
          return n3 < -i3 ? o3 |= 1 : n3 > i3 && (o3 |= 2), e3 < -i3 ? o3 |= 4 : e3 > i3 && (o3 |= 8), o3;
        }
        return xl(o2, function(t3) {
          var n3, e3, c2, f2, s2;
          return { lineStart: function() {
            f2 = c2 = false, s2 = 1;
          }, point: function(l2, h2) {
            var d2, p2 = [l2, h2], g2 = o2(l2, h2), y2 = r2 ? g2 ? 0 : u2(l2, h2) : g2 ? u2(l2 + (l2 < 0 ? gf : -gf), h2) : 0;
            if (!n3 && (f2 = c2 = g2) && t3.lineStart(), g2 !== c2 && (!(d2 = a2(n3, p2)) || gl(n3, d2) || gl(p2, d2)) && (p2[2] = 1), g2 !== c2)
              s2 = 0, g2 ? (t3.lineStart(), d2 = a2(p2, n3), t3.point(d2[0], d2[1])) : (d2 = a2(n3, p2), t3.point(d2[0], d2[1], 2), t3.lineEnd()), n3 = d2;
            else if (i2 && n3 && r2 ^ g2) {
              var v2;
              y2 & e3 || !(v2 = a2(p2, n3, true)) || (s2 = 0, r2 ? (t3.lineStart(), t3.point(v2[0][0], v2[0][1]), t3.point(v2[1][0], v2[1][1]), t3.lineEnd()) : (t3.point(v2[1][0], v2[1][1]), t3.lineEnd(), t3.lineStart(), t3.point(v2[0][0], v2[0][1], 3)));
            }
            !g2 || n3 && gl(n3, p2) || t3.point(p2[0], p2[1]), n3 = p2, c2 = g2, e3 = y2;
          }, lineEnd: function() {
            c2 && t3.lineEnd(), n3 = null;
          }, clean: function() {
            return s2 | (f2 && c2) << 1;
          } };
        }, function(n3, r3, i3, o3) {
          hl(o3, t2, e2, i3, n3, r3);
        }, r2 ? [0, -t2] : [-gf, t2 - gf]);
      }
      var Sl, El, Nl, kl, Cl = 1e9, Pl = -Cl;
      function zl(t2, n2, e2, r2) {
        function i2(i3, o3) {
          return t2 <= i3 && i3 <= e2 && n2 <= o3 && o3 <= r2;
        }
        function o2(i3, o3, u3, f2) {
          var s2 = 0, l2 = 0;
          if (null == i3 || (s2 = a2(i3, u3)) !== (l2 = a2(o3, u3)) || c2(i3, o3) < 0 ^ u3 > 0)
            do {
              f2.point(0 === s2 || 3 === s2 ? t2 : e2, s2 > 1 ? r2 : n2);
            } while ((s2 = (s2 + u3 + 4) % 4) !== l2);
          else
            f2.point(o3[0], o3[1]);
        }
        function a2(r3, i3) {
          return xf(r3[0] - t2) < df ? i3 > 0 ? 0 : 3 : xf(r3[0] - e2) < df ? i3 > 0 ? 2 : 1 : xf(r3[1] - n2) < df ? i3 > 0 ? 1 : 0 : i3 > 0 ? 3 : 2;
        }
        function u2(t3, n3) {
          return c2(t3.x, n3.x);
        }
        function c2(t3, n3) {
          var e3 = a2(t3, 1), r3 = a2(n3, 1);
          return e3 !== r3 ? e3 - r3 : 0 === e3 ? n3[1] - t3[1] : 1 === e3 ? t3[0] - n3[0] : 2 === e3 ? t3[1] - n3[1] : n3[0] - t3[0];
        }
        return function(a3) {
          var c3, f2, s2, l2, h2, d2, p2, g2, y2, v2, _2, b2 = a3, m2 = pl(), x2 = { point: w2, lineStart: function() {
            x2.point = M2, f2 && f2.push(s2 = []);
            v2 = true, y2 = false, p2 = g2 = NaN;
          }, lineEnd: function() {
            c3 && (M2(l2, h2), d2 && y2 && m2.rejoin(), c3.push(m2.result()));
            x2.point = w2, y2 && b2.lineEnd();
          }, polygonStart: function() {
            b2 = m2, c3 = [], f2 = [], _2 = true;
          }, polygonEnd: function() {
            var n3 = function() {
              for (var n4 = 0, e4 = 0, i4 = f2.length; e4 < i4; ++e4)
                for (var o3, a4, u3 = f2[e4], c4 = 1, s3 = u3.length, l3 = u3[0], h3 = l3[0], d4 = l3[1]; c4 < s3; ++c4)
                  o3 = h3, a4 = d4, h3 = (l3 = u3[c4])[0], d4 = l3[1], a4 <= r2 ? d4 > r2 && (h3 - o3) * (r2 - a4) > (d4 - a4) * (t2 - o3) && ++n4 : d4 <= r2 && (h3 - o3) * (r2 - a4) < (d4 - a4) * (t2 - o3) && --n4;
              return n4;
            }(), e3 = _2 && n3, i3 = (c3 = ft(c3)).length;
            (e3 || i3) && (a3.polygonStart(), e3 && (a3.lineStart(), o2(null, null, 1, a3), a3.lineEnd()), i3 && vl(c3, u2, n3, o2, a3), a3.polygonEnd());
            b2 = a3, c3 = f2 = s2 = null;
          } };
          function w2(t3, n3) {
            i2(t3, n3) && b2.point(t3, n3);
          }
          function M2(o3, a4) {
            var u3 = i2(o3, a4);
            if (f2 && s2.push([o3, a4]), v2)
              l2 = o3, h2 = a4, d2 = u3, v2 = false, u3 && (b2.lineStart(), b2.point(o3, a4));
            else if (u3 && y2)
              b2.point(o3, a4);
            else {
              var c4 = [p2 = Math.max(Pl, Math.min(Cl, p2)), g2 = Math.max(Pl, Math.min(Cl, g2))], m3 = [o3 = Math.max(Pl, Math.min(Cl, o3)), a4 = Math.max(Pl, Math.min(Cl, a4))];
              !function(t3, n3, e3, r3, i3, o4) {
                var a5, u4 = t3[0], c5 = t3[1], f3 = 0, s3 = 1, l3 = n3[0] - u4, h3 = n3[1] - c5;
                if (a5 = e3 - u4, l3 || !(a5 > 0)) {
                  if (a5 /= l3, l3 < 0) {
                    if (a5 < f3)
                      return;
                    a5 < s3 && (s3 = a5);
                  } else if (l3 > 0) {
                    if (a5 > s3)
                      return;
                    a5 > f3 && (f3 = a5);
                  }
                  if (a5 = i3 - u4, l3 || !(a5 < 0)) {
                    if (a5 /= l3, l3 < 0) {
                      if (a5 > s3)
                        return;
                      a5 > f3 && (f3 = a5);
                    } else if (l3 > 0) {
                      if (a5 < f3)
                        return;
                      a5 < s3 && (s3 = a5);
                    }
                    if (a5 = r3 - c5, h3 || !(a5 > 0)) {
                      if (a5 /= h3, h3 < 0) {
                        if (a5 < f3)
                          return;
                        a5 < s3 && (s3 = a5);
                      } else if (h3 > 0) {
                        if (a5 > s3)
                          return;
                        a5 > f3 && (f3 = a5);
                      }
                      if (a5 = o4 - c5, h3 || !(a5 < 0)) {
                        if (a5 /= h3, h3 < 0) {
                          if (a5 > s3)
                            return;
                          a5 > f3 && (f3 = a5);
                        } else if (h3 > 0) {
                          if (a5 < f3)
                            return;
                          a5 < s3 && (s3 = a5);
                        }
                        return f3 > 0 && (t3[0] = u4 + f3 * l3, t3[1] = c5 + f3 * h3), s3 < 1 && (n3[0] = u4 + s3 * l3, n3[1] = c5 + s3 * h3), true;
                      }
                    }
                  }
                }
              }(c4, m3, t2, n2, e2, r2) ? u3 && (b2.lineStart(), b2.point(o3, a4), _2 = false) : (y2 || (b2.lineStart(), b2.point(c4[0], c4[1])), b2.point(m3[0], m3[1]), u3 || b2.lineEnd(), _2 = false);
            }
            p2 = o3, g2 = a4, y2 = u3;
          }
          return x2;
        };
      }
      var $l = { sphere: qf, point: qf, lineStart: function() {
        $l.point = Rl, $l.lineEnd = Dl;
      }, lineEnd: qf, polygonStart: qf, polygonEnd: qf };
      function Dl() {
        $l.point = $l.lineEnd = qf;
      }
      function Rl(t2, n2) {
        El = t2 *= mf, Nl = Cf(n2 *= mf), kl = Tf(n2), $l.point = Fl;
      }
      function Fl(t2, n2) {
        t2 *= mf;
        var e2 = Cf(n2 *= mf), r2 = Tf(n2), i2 = xf(t2 - El), o2 = Tf(i2), a2 = r2 * Cf(i2), u2 = kl * e2 - Nl * r2 * o2, c2 = Nl * e2 + kl * r2 * o2;
        Sl.add(Mf(zf(a2 * a2 + u2 * u2), c2)), El = t2, Nl = e2, kl = r2;
      }
      function ql(t2) {
        return Sl = new T(), Lf(t2, $l), +Sl;
      }
      var Ul = [null, null], Il = { type: "LineString", coordinates: Ul };
      function Ol(t2, n2) {
        return Ul[0] = t2, Ul[1] = n2, ql(Il);
      }
      var Bl = { Feature: function(t2, n2) {
        return Ll(t2.geometry, n2);
      }, FeatureCollection: function(t2, n2) {
        for (var e2 = t2.features, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Ll(e2[r2].geometry, n2))
            return true;
        return false;
      } }, Yl = { Sphere: function() {
        return true;
      }, Point: function(t2, n2) {
        return jl(t2.coordinates, n2);
      }, MultiPoint: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (jl(e2[r2], n2))
            return true;
        return false;
      }, LineString: function(t2, n2) {
        return Hl(t2.coordinates, n2);
      }, MultiLineString: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Hl(e2[r2], n2))
            return true;
        return false;
      }, Polygon: function(t2, n2) {
        return Xl(t2.coordinates, n2);
      }, MultiPolygon: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Xl(e2[r2], n2))
            return true;
        return false;
      }, GeometryCollection: function(t2, n2) {
        for (var e2 = t2.geometries, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Ll(e2[r2], n2))
            return true;
        return false;
      } };
      function Ll(t2, n2) {
        return !(!t2 || !Yl.hasOwnProperty(t2.type)) && Yl[t2.type](t2, n2);
      }
      function jl(t2, n2) {
        return 0 === Ol(t2, n2);
      }
      function Hl(t2, n2) {
        for (var e2, r2, i2, o2 = 0, a2 = t2.length; o2 < a2; o2++) {
          if (0 === (r2 = Ol(t2[o2], n2)))
            return true;
          if (o2 > 0 && (i2 = Ol(t2[o2], t2[o2 - 1])) > 0 && e2 <= i2 && r2 <= i2 && (e2 + r2 - i2) * (1 - Math.pow((e2 - r2) / i2, 2)) < pf * i2)
            return true;
          e2 = r2;
        }
        return false;
      }
      function Xl(t2, n2) {
        return !!ml(t2.map(Gl), Vl(n2));
      }
      function Gl(t2) {
        return (t2 = t2.map(Vl)).pop(), t2;
      }
      function Vl(t2) {
        return [t2[0] * mf, t2[1] * mf];
      }
      function Wl(t2, n2, e2) {
        var r2 = lt(t2, n2 - df, e2).concat(n2);
        return function(t3) {
          return r2.map(function(n3) {
            return [t3, n3];
          });
        };
      }
      function Zl(t2, n2, e2) {
        var r2 = lt(t2, n2 - df, e2).concat(n2);
        return function(t3) {
          return r2.map(function(n3) {
            return [n3, t3];
          });
        };
      }
      function Kl() {
        var t2, n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2, h2 = 10, d2 = h2, p2 = 90, g2 = 360, y2 = 2.5;
        function v2() {
          return { type: "MultiLineString", coordinates: _2() };
        }
        function _2() {
          return lt(Af(r2 / p2) * p2, e2, p2).map(s2).concat(lt(Af(u2 / g2) * g2, a2, g2).map(l2)).concat(lt(Af(n2 / h2) * h2, t2, h2).filter(function(t3) {
            return xf(t3 % p2) > df;
          }).map(c2)).concat(lt(Af(o2 / d2) * d2, i2, d2).filter(function(t3) {
            return xf(t3 % g2) > df;
          }).map(f2));
        }
        return v2.lines = function() {
          return _2().map(function(t3) {
            return { type: "LineString", coordinates: t3 };
          });
        }, v2.outline = function() {
          return { type: "Polygon", coordinates: [s2(r2).concat(l2(a2).slice(1), s2(e2).reverse().slice(1), l2(u2).reverse().slice(1))] };
        }, v2.extent = function(t3) {
          return arguments.length ? v2.extentMajor(t3).extentMinor(t3) : v2.extentMinor();
        }, v2.extentMajor = function(t3) {
          return arguments.length ? (r2 = +t3[0][0], e2 = +t3[1][0], u2 = +t3[0][1], a2 = +t3[1][1], r2 > e2 && (t3 = r2, r2 = e2, e2 = t3), u2 > a2 && (t3 = u2, u2 = a2, a2 = t3), v2.precision(y2)) : [[r2, u2], [e2, a2]];
        }, v2.extentMinor = function(e3) {
          return arguments.length ? (n2 = +e3[0][0], t2 = +e3[1][0], o2 = +e3[0][1], i2 = +e3[1][1], n2 > t2 && (e3 = n2, n2 = t2, t2 = e3), o2 > i2 && (e3 = o2, o2 = i2, i2 = e3), v2.precision(y2)) : [[n2, o2], [t2, i2]];
        }, v2.step = function(t3) {
          return arguments.length ? v2.stepMajor(t3).stepMinor(t3) : v2.stepMinor();
        }, v2.stepMajor = function(t3) {
          return arguments.length ? (p2 = +t3[0], g2 = +t3[1], v2) : [p2, g2];
        }, v2.stepMinor = function(t3) {
          return arguments.length ? (h2 = +t3[0], d2 = +t3[1], v2) : [h2, d2];
        }, v2.precision = function(h3) {
          return arguments.length ? (y2 = +h3, c2 = Wl(o2, i2, 90), f2 = Zl(n2, t2, y2), s2 = Wl(u2, a2, 90), l2 = Zl(r2, e2, y2), v2) : y2;
        }, v2.extentMajor([[-180, -90 + df], [180, 90 - df]]).extentMinor([[-180, -80 - df], [180, 80 + df]]);
      }
      var Ql, Jl, th, nh, eh = (t2) => t2, rh = new T(), ih = new T(), oh = { point: qf, lineStart: qf, lineEnd: qf, polygonStart: function() {
        oh.lineStart = ah, oh.lineEnd = fh;
      }, polygonEnd: function() {
        oh.lineStart = oh.lineEnd = oh.point = qf, rh.add(xf(ih)), ih = new T();
      }, result: function() {
        var t2 = rh / 2;
        return rh = new T(), t2;
      } };
      function ah() {
        oh.point = uh;
      }
      function uh(t2, n2) {
        oh.point = ch, Ql = th = t2, Jl = nh = n2;
      }
      function ch(t2, n2) {
        ih.add(nh * t2 - th * n2), th = t2, nh = n2;
      }
      function fh() {
        ch(Ql, Jl);
      }
      var sh = oh, lh = 1 / 0, hh = lh, dh = -lh, ph = dh, gh = { point: function(t2, n2) {
        t2 < lh && (lh = t2);
        t2 > dh && (dh = t2);
        n2 < hh && (hh = n2);
        n2 > ph && (ph = n2);
      }, lineStart: qf, lineEnd: qf, polygonStart: qf, polygonEnd: qf, result: function() {
        var t2 = [[lh, hh], [dh, ph]];
        return dh = ph = -(hh = lh = 1 / 0), t2;
      } };
      var yh, vh, _h, bh, mh = gh, xh = 0, wh = 0, Mh = 0, Th = 0, Ah = 0, Sh = 0, Eh = 0, Nh = 0, kh = 0, Ch = { point: Ph, lineStart: zh, lineEnd: Rh, polygonStart: function() {
        Ch.lineStart = Fh, Ch.lineEnd = qh;
      }, polygonEnd: function() {
        Ch.point = Ph, Ch.lineStart = zh, Ch.lineEnd = Rh;
      }, result: function() {
        var t2 = kh ? [Eh / kh, Nh / kh] : Sh ? [Th / Sh, Ah / Sh] : Mh ? [xh / Mh, wh / Mh] : [NaN, NaN];
        return xh = wh = Mh = Th = Ah = Sh = Eh = Nh = kh = 0, t2;
      } };
      function Ph(t2, n2) {
        xh += t2, wh += n2, ++Mh;
      }
      function zh() {
        Ch.point = $h;
      }
      function $h(t2, n2) {
        Ch.point = Dh, Ph(_h = t2, bh = n2);
      }
      function Dh(t2, n2) {
        var e2 = t2 - _h, r2 = n2 - bh, i2 = zf(e2 * e2 + r2 * r2);
        Th += i2 * (_h + t2) / 2, Ah += i2 * (bh + n2) / 2, Sh += i2, Ph(_h = t2, bh = n2);
      }
      function Rh() {
        Ch.point = Ph;
      }
      function Fh() {
        Ch.point = Uh;
      }
      function qh() {
        Ih(yh, vh);
      }
      function Uh(t2, n2) {
        Ch.point = Ih, Ph(yh = _h = t2, vh = bh = n2);
      }
      function Ih(t2, n2) {
        var e2 = t2 - _h, r2 = n2 - bh, i2 = zf(e2 * e2 + r2 * r2);
        Th += i2 * (_h + t2) / 2, Ah += i2 * (bh + n2) / 2, Sh += i2, Eh += (i2 = bh * t2 - _h * n2) * (_h + t2), Nh += i2 * (bh + n2), kh += 3 * i2, Ph(_h = t2, bh = n2);
      }
      var Oh = Ch;
      function Bh(t2) {
        this._context = t2;
      }
      Bh.prototype = { _radius: 4.5, pointRadius: function(t2) {
        return this._radius = t2, this;
      }, polygonStart: function() {
        this._line = 0;
      }, polygonEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        0 === this._line && this._context.closePath(), this._point = NaN;
      }, point: function(t2, n2) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t2, n2), this._point = 1;
            break;
          case 1:
            this._context.lineTo(t2, n2);
            break;
          default:
            this._context.moveTo(t2 + this._radius, n2), this._context.arc(t2, n2, this._radius, 0, _f);
        }
      }, result: qf };
      var Yh, Lh, jh, Hh, Xh, Gh = new T(), Vh = { point: qf, lineStart: function() {
        Vh.point = Wh;
      }, lineEnd: function() {
        Yh && Zh(Lh, jh), Vh.point = qf;
      }, polygonStart: function() {
        Yh = true;
      }, polygonEnd: function() {
        Yh = null;
      }, result: function() {
        var t2 = +Gh;
        return Gh = new T(), t2;
      } };
      function Wh(t2, n2) {
        Vh.point = Zh, Lh = Hh = t2, jh = Xh = n2;
      }
      function Zh(t2, n2) {
        Hh -= t2, Xh -= n2, Gh.add(zf(Hh * Hh + Xh * Xh)), Hh = t2, Xh = n2;
      }
      var Kh = Vh;
      let Qh, Jh, td, nd;
      class ed {
        constructor(t2) {
          this._append = null == t2 ? rd : function(t3) {
            const n2 = Math.floor(t3);
            if (!(n2 >= 0))
              throw new RangeError(`invalid digits: ${t3}`);
            if (n2 > 15)
              return rd;
            if (n2 !== Qh) {
              const t4 = 10 ** n2;
              Qh = n2, Jh = function(n3) {
                let e2 = 1;
                this._ += n3[0];
                for (const r2 = n3.length; e2 < r2; ++e2)
                  this._ += Math.round(arguments[e2] * t4) / t4 + n3[e2];
              };
            }
            return Jh;
          }(t2), this._radius = 4.5, this._ = "";
        }
        pointRadius(t2) {
          return this._radius = +t2, this;
        }
        polygonStart() {
          this._line = 0;
        }
        polygonEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          0 === this._line && (this._ += "Z"), this._point = NaN;
        }
        point(t2, n2) {
          switch (this._point) {
            case 0:
              this._append`M${t2},${n2}`, this._point = 1;
              break;
            case 1:
              this._append`L${t2},${n2}`;
              break;
            default:
              if (this._append`M${t2},${n2}`, this._radius !== td || this._append !== Jh) {
                const t3 = this._radius, n3 = this._;
                this._ = "", this._append`m0,${t3}a${t3},${t3} 0 1,1 0,${-2 * t3}a${t3},${t3} 0 1,1 0,${2 * t3}z`, td = t3, Jh = this._append, nd = this._, this._ = n3;
              }
              this._ += nd;
          }
        }
        result() {
          const t2 = this._;
          return this._ = "", t2.length ? t2 : null;
        }
      }
      function rd(t2) {
        let n2 = 1;
        this._ += t2[0];
        for (const e2 = t2.length; n2 < e2; ++n2)
          this._ += arguments[n2] + t2[n2];
      }
      function id(t2) {
        return function(n2) {
          var e2 = new od();
          for (var r2 in t2)
            e2[r2] = t2[r2];
          return e2.stream = n2, e2;
        };
      }
      function od() {
      }
      function ad(t2, n2, e2) {
        var r2 = t2.clipExtent && t2.clipExtent();
        return t2.scale(150).translate([0, 0]), null != r2 && t2.clipExtent(null), Lf(e2, t2.stream(mh)), n2(mh.result()), null != r2 && t2.clipExtent(r2), t2;
      }
      function ud(t2, n2, e2) {
        return ad(t2, function(e3) {
          var r2 = n2[1][0] - n2[0][0], i2 = n2[1][1] - n2[0][1], o2 = Math.min(r2 / (e3[1][0] - e3[0][0]), i2 / (e3[1][1] - e3[0][1])), a2 = +n2[0][0] + (r2 - o2 * (e3[1][0] + e3[0][0])) / 2, u2 = +n2[0][1] + (i2 - o2 * (e3[1][1] + e3[0][1])) / 2;
          t2.scale(150 * o2).translate([a2, u2]);
        }, e2);
      }
      function cd(t2, n2, e2) {
        return ud(t2, [[0, 0], n2], e2);
      }
      function fd(t2, n2, e2) {
        return ad(t2, function(e3) {
          var r2 = +n2, i2 = r2 / (e3[1][0] - e3[0][0]), o2 = (r2 - i2 * (e3[1][0] + e3[0][0])) / 2, a2 = -i2 * e3[0][1];
          t2.scale(150 * i2).translate([o2, a2]);
        }, e2);
      }
      function sd(t2, n2, e2) {
        return ad(t2, function(e3) {
          var r2 = +n2, i2 = r2 / (e3[1][1] - e3[0][1]), o2 = -i2 * e3[0][0], a2 = (r2 - i2 * (e3[1][1] + e3[0][1])) / 2;
          t2.scale(150 * i2).translate([o2, a2]);
        }, e2);
      }
      od.prototype = { constructor: od, point: function(t2, n2) {
        this.stream.point(t2, n2);
      }, sphere: function() {
        this.stream.sphere();
      }, lineStart: function() {
        this.stream.lineStart();
      }, lineEnd: function() {
        this.stream.lineEnd();
      }, polygonStart: function() {
        this.stream.polygonStart();
      }, polygonEnd: function() {
        this.stream.polygonEnd();
      } };
      var ld = 16, hd = Tf(30 * mf);
      function dd(t2, n2) {
        return +n2 ? /* @__PURE__ */ function(t3, n3) {
          function e2(r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2, p2, g2, y2) {
            var v2 = f2 - r2, _2 = s2 - i2, b2 = v2 * v2 + _2 * _2;
            if (b2 > 4 * n3 && g2--) {
              var m2 = a2 + h2, x2 = u2 + d2, w2 = c2 + p2, M2 = zf(m2 * m2 + x2 * x2 + w2 * w2), T2 = Rf(w2 /= M2), A2 = xf(xf(w2) - 1) < df || xf(o2 - l2) < df ? (o2 + l2) / 2 : Mf(x2, m2), S2 = t3(A2, T2), E2 = S2[0], N2 = S2[1], k2 = E2 - r2, C2 = N2 - i2, P2 = _2 * k2 - v2 * C2;
              (P2 * P2 / b2 > n3 || xf((v2 * k2 + _2 * C2) / b2 - 0.5) > 0.3 || a2 * h2 + u2 * d2 + c2 * p2 < hd) && (e2(r2, i2, o2, a2, u2, c2, E2, N2, A2, m2 /= M2, x2 /= M2, w2, g2, y2), y2.point(E2, N2), e2(E2, N2, A2, m2, x2, w2, f2, s2, l2, h2, d2, p2, g2, y2));
            }
          }
          return function(n4) {
            var r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2, p2, g2 = { point: y2, lineStart: v2, lineEnd: b2, polygonStart: function() {
              n4.polygonStart(), g2.lineStart = m2;
            }, polygonEnd: function() {
              n4.polygonEnd(), g2.lineStart = v2;
            } };
            function y2(e3, r3) {
              e3 = t3(e3, r3), n4.point(e3[0], e3[1]);
            }
            function v2() {
              s2 = NaN, g2.point = _2, n4.lineStart();
            }
            function _2(r3, i3) {
              var o3 = ps([r3, i3]), a3 = t3(r3, i3);
              e2(s2, l2, f2, h2, d2, p2, s2 = a3[0], l2 = a3[1], f2 = r3, h2 = o3[0], d2 = o3[1], p2 = o3[2], ld, n4), n4.point(s2, l2);
            }
            function b2() {
              g2.point = y2, n4.lineEnd();
            }
            function m2() {
              v2(), g2.point = x2, g2.lineEnd = w2;
            }
            function x2(t4, n5) {
              _2(r2 = t4, n5), i2 = s2, o2 = l2, a2 = h2, u2 = d2, c2 = p2, g2.point = _2;
            }
            function w2() {
              e2(s2, l2, f2, h2, d2, p2, i2, o2, r2, a2, u2, c2, ld, n4), g2.lineEnd = b2, b2();
            }
            return g2;
          };
        }(t2, n2) : function(t3) {
          return id({ point: function(n3, e2) {
            n3 = t3(n3, e2), this.stream.point(n3[0], n3[1]);
          } });
        }(t2);
      }
      var pd = id({ point: function(t2, n2) {
        this.stream.point(t2 * mf, n2 * mf);
      } });
      function gd(t2, n2, e2, r2, i2, o2) {
        if (!o2)
          return function(t3, n3, e3, r3, i3) {
            function o3(o4, a3) {
              return [n3 + t3 * (o4 *= r3), e3 - t3 * (a3 *= i3)];
            }
            return o3.invert = function(o4, a3) {
              return [(o4 - n3) / t3 * r3, (e3 - a3) / t3 * i3];
            }, o3;
          }(t2, n2, e2, r2, i2);
        var a2 = Tf(o2), u2 = Cf(o2), c2 = a2 * t2, f2 = u2 * t2, s2 = a2 / t2, l2 = u2 / t2, h2 = (u2 * e2 - a2 * n2) / t2, d2 = (u2 * n2 + a2 * e2) / t2;
        function p2(t3, o3) {
          return [c2 * (t3 *= r2) - f2 * (o3 *= i2) + n2, e2 - f2 * t3 - c2 * o3];
        }
        return p2.invert = function(t3, n3) {
          return [r2 * (s2 * t3 - l2 * n3 + h2), i2 * (d2 - l2 * t3 - s2 * n3)];
        }, p2;
      }
      function yd(t2) {
        return vd(function() {
          return t2;
        })();
      }
      function vd(t2) {
        var n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2 = 150, h2 = 480, d2 = 250, p2 = 0, g2 = 0, y2 = 0, v2 = 0, _2 = 0, b2 = 0, m2 = 1, x2 = 1, w2 = null, M2 = Tl, T2 = null, A2 = eh, S2 = 0.5;
        function E2(t3) {
          return c2(t3[0] * mf, t3[1] * mf);
        }
        function N2(t3) {
          return (t3 = c2.invert(t3[0], t3[1])) && [t3[0] * bf, t3[1] * bf];
        }
        function k2() {
          var t3 = gd(l2, 0, 0, m2, x2, b2).apply(null, n2(p2, g2)), r3 = gd(l2, h2 - t3[0], d2 - t3[1], m2, x2, b2);
          return e2 = ul(y2, v2, _2), u2 = ol(n2, r3), c2 = ol(e2, u2), a2 = dd(u2, S2), C2();
        }
        function C2() {
          return f2 = s2 = null, E2;
        }
        return E2.stream = function(t3) {
          return f2 && s2 === t3 ? f2 : f2 = pd(function(t4) {
            return id({ point: function(n3, e3) {
              var r3 = t4(n3, e3);
              return this.stream.point(r3[0], r3[1]);
            } });
          }(e2)(M2(a2(A2(s2 = t3)))));
        }, E2.preclip = function(t3) {
          return arguments.length ? (M2 = t3, w2 = void 0, C2()) : M2;
        }, E2.postclip = function(t3) {
          return arguments.length ? (A2 = t3, T2 = r2 = i2 = o2 = null, C2()) : A2;
        }, E2.clipAngle = function(t3) {
          return arguments.length ? (M2 = +t3 ? Al(w2 = t3 * mf) : (w2 = null, Tl), C2()) : w2 * bf;
        }, E2.clipExtent = function(t3) {
          return arguments.length ? (A2 = null == t3 ? (T2 = r2 = i2 = o2 = null, eh) : zl(T2 = +t3[0][0], r2 = +t3[0][1], i2 = +t3[1][0], o2 = +t3[1][1]), C2()) : null == T2 ? null : [[T2, r2], [i2, o2]];
        }, E2.scale = function(t3) {
          return arguments.length ? (l2 = +t3, k2()) : l2;
        }, E2.translate = function(t3) {
          return arguments.length ? (h2 = +t3[0], d2 = +t3[1], k2()) : [h2, d2];
        }, E2.center = function(t3) {
          return arguments.length ? (p2 = t3[0] % 360 * mf, g2 = t3[1] % 360 * mf, k2()) : [p2 * bf, g2 * bf];
        }, E2.rotate = function(t3) {
          return arguments.length ? (y2 = t3[0] % 360 * mf, v2 = t3[1] % 360 * mf, _2 = t3.length > 2 ? t3[2] % 360 * mf : 0, k2()) : [y2 * bf, v2 * bf, _2 * bf];
        }, E2.angle = function(t3) {
          return arguments.length ? (b2 = t3 % 360 * mf, k2()) : b2 * bf;
        }, E2.reflectX = function(t3) {
          return arguments.length ? (m2 = t3 ? -1 : 1, k2()) : m2 < 0;
        }, E2.reflectY = function(t3) {
          return arguments.length ? (x2 = t3 ? -1 : 1, k2()) : x2 < 0;
        }, E2.precision = function(t3) {
          return arguments.length ? (a2 = dd(u2, S2 = t3 * t3), C2()) : zf(S2);
        }, E2.fitExtent = function(t3, n3) {
          return ud(E2, t3, n3);
        }, E2.fitSize = function(t3, n3) {
          return cd(E2, t3, n3);
        }, E2.fitWidth = function(t3, n3) {
          return fd(E2, t3, n3);
        }, E2.fitHeight = function(t3, n3) {
          return sd(E2, t3, n3);
        }, function() {
          return n2 = t2.apply(this, arguments), E2.invert = n2.invert && N2, k2();
        };
      }
      function _d(t2) {
        var n2 = 0, e2 = gf / 3, r2 = vd(t2), i2 = r2(n2, e2);
        return i2.parallels = function(t3) {
          return arguments.length ? r2(n2 = t3[0] * mf, e2 = t3[1] * mf) : [n2 * bf, e2 * bf];
        }, i2;
      }
      function bd(t2, n2) {
        var e2 = Cf(t2), r2 = (e2 + Cf(n2)) / 2;
        if (xf(r2) < df)
          return function(t3) {
            var n3 = Tf(t3);
            function e3(t4, e4) {
              return [t4 * n3, Cf(e4) / n3];
            }
            return e3.invert = function(t4, e4) {
              return [t4 / n3, Rf(e4 * n3)];
            }, e3;
          }(t2);
        var i2 = 1 + e2 * (2 * r2 - e2), o2 = zf(i2) / r2;
        function a2(t3, n3) {
          var e3 = zf(i2 - 2 * r2 * Cf(n3)) / r2;
          return [e3 * Cf(t3 *= r2), o2 - e3 * Tf(t3)];
        }
        return a2.invert = function(t3, n3) {
          var e3 = o2 - n3, a3 = Mf(t3, xf(e3)) * Pf(e3);
          return e3 * r2 < 0 && (a3 -= gf * Pf(t3) * Pf(e3)), [a3 / r2, Rf((i2 - (t3 * t3 + e3 * e3) * r2 * r2) / (2 * r2))];
        }, a2;
      }
      function md() {
        return _d(bd).scale(155.424).center([0, 33.6442]);
      }
      function xd() {
        return md().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
      }
      function wd(t2) {
        return function(n2, e2) {
          var r2 = Tf(n2), i2 = Tf(e2), o2 = t2(r2 * i2);
          return o2 === 1 / 0 ? [2, 0] : [o2 * i2 * Cf(n2), o2 * Cf(e2)];
        };
      }
      function Md(t2) {
        return function(n2, e2) {
          var r2 = zf(n2 * n2 + e2 * e2), i2 = t2(r2), o2 = Cf(i2), a2 = Tf(i2);
          return [Mf(n2 * o2, r2 * a2), Rf(r2 && e2 * o2 / r2)];
        };
      }
      var Td = wd(function(t2) {
        return zf(2 / (1 + t2));
      });
      Td.invert = Md(function(t2) {
        return 2 * Rf(t2 / 2);
      });
      var Ad = wd(function(t2) {
        return (t2 = Df(t2)) && t2 / Cf(t2);
      });
      function Sd(t2, n2) {
        return [t2, Nf($f((yf + n2) / 2))];
      }
      function Ed(t2) {
        var n2, e2, r2, i2 = yd(t2), o2 = i2.center, a2 = i2.scale, u2 = i2.translate, c2 = i2.clipExtent, f2 = null;
        function s2() {
          var o3 = gf * a2(), u3 = i2(ll(i2.rotate()).invert([0, 0]));
          return c2(null == f2 ? [[u3[0] - o3, u3[1] - o3], [u3[0] + o3, u3[1] + o3]] : t2 === Sd ? [[Math.max(u3[0] - o3, f2), n2], [Math.min(u3[0] + o3, e2), r2]] : [[f2, Math.max(u3[1] - o3, n2)], [e2, Math.min(u3[1] + o3, r2)]]);
        }
        return i2.scale = function(t3) {
          return arguments.length ? (a2(t3), s2()) : a2();
        }, i2.translate = function(t3) {
          return arguments.length ? (u2(t3), s2()) : u2();
        }, i2.center = function(t3) {
          return arguments.length ? (o2(t3), s2()) : o2();
        }, i2.clipExtent = function(t3) {
          return arguments.length ? (null == t3 ? f2 = n2 = e2 = r2 = null : (f2 = +t3[0][0], n2 = +t3[0][1], e2 = +t3[1][0], r2 = +t3[1][1]), s2()) : null == f2 ? null : [[f2, n2], [e2, r2]];
        }, s2();
      }
      function Nd(t2) {
        return $f((yf + t2) / 2);
      }
      function kd(t2, n2) {
        var e2 = Tf(t2), r2 = t2 === n2 ? Cf(t2) : Nf(e2 / Tf(n2)) / Nf(Nd(n2) / Nd(t2)), i2 = e2 * kf(Nd(t2), r2) / r2;
        if (!r2)
          return Sd;
        function o2(t3, n3) {
          i2 > 0 ? n3 < -yf + df && (n3 = -yf + df) : n3 > yf - df && (n3 = yf - df);
          var e3 = i2 / kf(Nd(n3), r2);
          return [e3 * Cf(r2 * t3), i2 - e3 * Tf(r2 * t3)];
        }
        return o2.invert = function(t3, n3) {
          var e3 = i2 - n3, o3 = Pf(r2) * zf(t3 * t3 + e3 * e3), a2 = Mf(t3, xf(e3)) * Pf(e3);
          return e3 * r2 < 0 && (a2 -= gf * Pf(t3) * Pf(e3)), [a2 / r2, 2 * wf(kf(i2 / o3, 1 / r2)) - yf];
        }, o2;
      }
      function Cd(t2, n2) {
        return [t2, n2];
      }
      function Pd(t2, n2) {
        var e2 = Tf(t2), r2 = t2 === n2 ? Cf(t2) : (e2 - Tf(n2)) / (n2 - t2), i2 = e2 / r2 + t2;
        if (xf(r2) < df)
          return Cd;
        function o2(t3, n3) {
          var e3 = i2 - n3, o3 = r2 * t3;
          return [e3 * Cf(o3), i2 - e3 * Tf(o3)];
        }
        return o2.invert = function(t3, n3) {
          var e3 = i2 - n3, o3 = Mf(t3, xf(e3)) * Pf(e3);
          return e3 * r2 < 0 && (o3 -= gf * Pf(t3) * Pf(e3)), [o3 / r2, i2 - Pf(r2) * zf(t3 * t3 + e3 * e3)];
        }, o2;
      }
      Ad.invert = Md(function(t2) {
        return t2;
      }), Sd.invert = function(t2, n2) {
        return [t2, 2 * wf(Sf(n2)) - yf];
      }, Cd.invert = Cd;
      var zd = 1.340264, $d = -0.081106, Dd = 893e-6, Rd = 3796e-6, Fd = zf(3) / 2;
      function qd(t2, n2) {
        var e2 = Rf(Fd * Cf(n2)), r2 = e2 * e2, i2 = r2 * r2 * r2;
        return [t2 * Tf(e2) / (Fd * (zd + 3 * $d * r2 + i2 * (7 * Dd + 9 * Rd * r2))), e2 * (zd + $d * r2 + i2 * (Dd + Rd * r2))];
      }
      function Ud(t2, n2) {
        var e2 = Tf(n2), r2 = Tf(t2) * e2;
        return [e2 * Cf(t2) / r2, Cf(n2) / r2];
      }
      function Id(t2, n2) {
        var e2 = n2 * n2, r2 = e2 * e2;
        return [t2 * (0.8707 - 0.131979 * e2 + r2 * (r2 * (3971e-6 * e2 - 1529e-6 * r2) - 0.013791)), n2 * (1.007226 + e2 * (0.015085 + r2 * (0.028874 * e2 - 0.044475 - 5916e-6 * r2)))];
      }
      function Od(t2, n2) {
        return [Tf(n2) * Cf(t2), Cf(n2)];
      }
      function Bd(t2, n2) {
        var e2 = Tf(n2), r2 = 1 + Tf(t2) * e2;
        return [e2 * Cf(t2) / r2, Cf(n2) / r2];
      }
      function Yd(t2, n2) {
        return [Nf($f((yf + n2) / 2)), -t2];
      }
      function Ld(t2, n2) {
        return t2.parent === n2.parent ? 1 : 2;
      }
      function jd(t2, n2) {
        return t2 + n2.x;
      }
      function Hd(t2, n2) {
        return Math.max(t2, n2.y);
      }
      function Xd(t2) {
        var n2 = 0, e2 = t2.children, r2 = e2 && e2.length;
        if (r2)
          for (; --r2 >= 0; )
            n2 += e2[r2].value;
        else
          n2 = 1;
        t2.value = n2;
      }
      function Gd(t2, n2) {
        t2 instanceof Map ? (t2 = [void 0, t2], void 0 === n2 && (n2 = Wd)) : void 0 === n2 && (n2 = Vd);
        for (var e2, r2, i2, o2, a2, u2 = new Qd(t2), c2 = [u2]; e2 = c2.pop(); )
          if ((i2 = n2(e2.data)) && (a2 = (i2 = Array.from(i2)).length))
            for (e2.children = i2, o2 = a2 - 1; o2 >= 0; --o2)
              c2.push(r2 = i2[o2] = new Qd(i2[o2])), r2.parent = e2, r2.depth = e2.depth + 1;
        return u2.eachBefore(Kd);
      }
      function Vd(t2) {
        return t2.children;
      }
      function Wd(t2) {
        return Array.isArray(t2) ? t2[1] : null;
      }
      function Zd(t2) {
        void 0 !== t2.data.value && (t2.value = t2.data.value), t2.data = t2.data.data;
      }
      function Kd(t2) {
        var n2 = 0;
        do {
          t2.height = n2;
        } while ((t2 = t2.parent) && t2.height < ++n2);
      }
      function Qd(t2) {
        this.data = t2, this.depth = this.height = 0, this.parent = null;
      }
      function Jd(t2) {
        return null == t2 ? null : tp(t2);
      }
      function tp(t2) {
        if ("function" != typeof t2)
          throw new Error();
        return t2;
      }
      function np() {
        return 0;
      }
      function ep(t2) {
        return function() {
          return t2;
        };
      }
      qd.invert = function(t2, n2) {
        for (var e2, r2 = n2, i2 = r2 * r2, o2 = i2 * i2 * i2, a2 = 0; a2 < 12 && (o2 = (i2 = (r2 -= e2 = (r2 * (zd + $d * i2 + o2 * (Dd + Rd * i2)) - n2) / (zd + 3 * $d * i2 + o2 * (7 * Dd + 9 * Rd * i2))) * r2) * i2 * i2, !(xf(e2) < pf)); ++a2)
          ;
        return [Fd * t2 * (zd + 3 * $d * i2 + o2 * (7 * Dd + 9 * Rd * i2)) / Tf(r2), Rf(Cf(r2) / Fd)];
      }, Ud.invert = Md(wf), Id.invert = function(t2, n2) {
        var e2, r2 = n2, i2 = 25;
        do {
          var o2 = r2 * r2, a2 = o2 * o2;
          r2 -= e2 = (r2 * (1.007226 + o2 * (0.015085 + a2 * (0.028874 * o2 - 0.044475 - 5916e-6 * a2))) - n2) / (1.007226 + o2 * (0.045255 + a2 * (0.259866 * o2 - 0.311325 - 5916e-6 * 11 * a2)));
        } while (xf(e2) > df && --i2 > 0);
        return [t2 / (0.8707 + (o2 = r2 * r2) * (o2 * (o2 * o2 * o2 * (3971e-6 - 1529e-6 * o2) - 0.013791) - 0.131979)), r2];
      }, Od.invert = Md(Rf), Bd.invert = Md(function(t2) {
        return 2 * wf(t2);
      }), Yd.invert = function(t2, n2) {
        return [-n2, 2 * wf(Sf(t2)) - yf];
      }, Qd.prototype = Gd.prototype = { constructor: Qd, count: function() {
        return this.eachAfter(Xd);
      }, each: function(t2, n2) {
        let e2 = -1;
        for (const r2 of this)
          t2.call(n2, r2, ++e2, this);
        return this;
      }, eachAfter: function(t2, n2) {
        for (var e2, r2, i2, o2 = this, a2 = [o2], u2 = [], c2 = -1; o2 = a2.pop(); )
          if (u2.push(o2), e2 = o2.children)
            for (r2 = 0, i2 = e2.length; r2 < i2; ++r2)
              a2.push(e2[r2]);
        for (; o2 = u2.pop(); )
          t2.call(n2, o2, ++c2, this);
        return this;
      }, eachBefore: function(t2, n2) {
        for (var e2, r2, i2 = this, o2 = [i2], a2 = -1; i2 = o2.pop(); )
          if (t2.call(n2, i2, ++a2, this), e2 = i2.children)
            for (r2 = e2.length - 1; r2 >= 0; --r2)
              o2.push(e2[r2]);
        return this;
      }, find: function(t2, n2) {
        let e2 = -1;
        for (const r2 of this)
          if (t2.call(n2, r2, ++e2, this))
            return r2;
      }, sum: function(t2) {
        return this.eachAfter(function(n2) {
          for (var e2 = +t2(n2.data) || 0, r2 = n2.children, i2 = r2 && r2.length; --i2 >= 0; )
            e2 += r2[i2].value;
          n2.value = e2;
        });
      }, sort: function(t2) {
        return this.eachBefore(function(n2) {
          n2.children && n2.children.sort(t2);
        });
      }, path: function(t2) {
        for (var n2 = this, e2 = function(t3, n3) {
          if (t3 === n3)
            return t3;
          var e3 = t3.ancestors(), r3 = n3.ancestors(), i3 = null;
          t3 = e3.pop(), n3 = r3.pop();
          for (; t3 === n3; )
            i3 = t3, t3 = e3.pop(), n3 = r3.pop();
          return i3;
        }(n2, t2), r2 = [n2]; n2 !== e2; )
          n2 = n2.parent, r2.push(n2);
        for (var i2 = r2.length; t2 !== e2; )
          r2.splice(i2, 0, t2), t2 = t2.parent;
        return r2;
      }, ancestors: function() {
        for (var t2 = this, n2 = [t2]; t2 = t2.parent; )
          n2.push(t2);
        return n2;
      }, descendants: function() {
        return Array.from(this);
      }, leaves: function() {
        var t2 = [];
        return this.eachBefore(function(n2) {
          n2.children || t2.push(n2);
        }), t2;
      }, links: function() {
        var t2 = this, n2 = [];
        return t2.each(function(e2) {
          e2 !== t2 && n2.push({ source: e2.parent, target: e2 });
        }), n2;
      }, copy: function() {
        return Gd(this).eachBefore(Zd);
      }, [Symbol.iterator]: function* () {
        var t2, n2, e2, r2, i2 = this, o2 = [i2];
        do {
          for (t2 = o2.reverse(), o2 = []; i2 = t2.pop(); )
            if (yield i2, n2 = i2.children)
              for (e2 = 0, r2 = n2.length; e2 < r2; ++e2)
                o2.push(n2[e2]);
        } while (o2.length);
      } };
      const rp = 1664525, ip = 1013904223, op = 4294967296;
      function ap() {
        let t2 = 1;
        return () => (t2 = (rp * t2 + ip) % op) / op;
      }
      function up(t2, n2) {
        for (var e2, r2, i2 = 0, o2 = (t2 = function(t3, n3) {
          let e3, r3, i3 = t3.length;
          for (; i3; )
            r3 = n3() * i3-- | 0, e3 = t3[i3], t3[i3] = t3[r3], t3[r3] = e3;
          return t3;
        }(Array.from(t2), n2)).length, a2 = []; i2 < o2; )
          e2 = t2[i2], r2 && sp(r2, e2) ? ++i2 : (r2 = hp(a2 = cp(a2, e2)), i2 = 0);
        return r2;
      }
      function cp(t2, n2) {
        var e2, r2;
        if (lp(n2, t2))
          return [n2];
        for (e2 = 0; e2 < t2.length; ++e2)
          if (fp(n2, t2[e2]) && lp(dp(t2[e2], n2), t2))
            return [t2[e2], n2];
        for (e2 = 0; e2 < t2.length - 1; ++e2)
          for (r2 = e2 + 1; r2 < t2.length; ++r2)
            if (fp(dp(t2[e2], t2[r2]), n2) && fp(dp(t2[e2], n2), t2[r2]) && fp(dp(t2[r2], n2), t2[e2]) && lp(pp(t2[e2], t2[r2], n2), t2))
              return [t2[e2], t2[r2], n2];
        throw new Error();
      }
      function fp(t2, n2) {
        var e2 = t2.r - n2.r, r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 < 0 || e2 * e2 < r2 * r2 + i2 * i2;
      }
      function sp(t2, n2) {
        var e2 = t2.r - n2.r + 1e-9 * Math.max(t2.r, n2.r, 1), r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 > 0 && e2 * e2 > r2 * r2 + i2 * i2;
      }
      function lp(t2, n2) {
        for (var e2 = 0; e2 < n2.length; ++e2)
          if (!sp(t2, n2[e2]))
            return false;
        return true;
      }
      function hp(t2) {
        switch (t2.length) {
          case 1:
            return function(t3) {
              return { x: t3.x, y: t3.y, r: t3.r };
            }(t2[0]);
          case 2:
            return dp(t2[0], t2[1]);
          case 3:
            return pp(t2[0], t2[1], t2[2]);
        }
      }
      function dp(t2, n2) {
        var e2 = t2.x, r2 = t2.y, i2 = t2.r, o2 = n2.x, a2 = n2.y, u2 = n2.r, c2 = o2 - e2, f2 = a2 - r2, s2 = u2 - i2, l2 = Math.sqrt(c2 * c2 + f2 * f2);
        return { x: (e2 + o2 + c2 / l2 * s2) / 2, y: (r2 + a2 + f2 / l2 * s2) / 2, r: (l2 + i2 + u2) / 2 };
      }
      function pp(t2, n2, e2) {
        var r2 = t2.x, i2 = t2.y, o2 = t2.r, a2 = n2.x, u2 = n2.y, c2 = n2.r, f2 = e2.x, s2 = e2.y, l2 = e2.r, h2 = r2 - a2, d2 = r2 - f2, p2 = i2 - u2, g2 = i2 - s2, y2 = c2 - o2, v2 = l2 - o2, _2 = r2 * r2 + i2 * i2 - o2 * o2, b2 = _2 - a2 * a2 - u2 * u2 + c2 * c2, m2 = _2 - f2 * f2 - s2 * s2 + l2 * l2, x2 = d2 * p2 - h2 * g2, w2 = (p2 * m2 - g2 * b2) / (2 * x2) - r2, M2 = (g2 * y2 - p2 * v2) / x2, T2 = (d2 * b2 - h2 * m2) / (2 * x2) - i2, A2 = (h2 * v2 - d2 * y2) / x2, S2 = M2 * M2 + A2 * A2 - 1, E2 = 2 * (o2 + w2 * M2 + T2 * A2), N2 = w2 * w2 + T2 * T2 - o2 * o2, k2 = -(Math.abs(S2) > 1e-6 ? (E2 + Math.sqrt(E2 * E2 - 4 * S2 * N2)) / (2 * S2) : N2 / E2);
        return { x: r2 + w2 + M2 * k2, y: i2 + T2 + A2 * k2, r: k2 };
      }
      function gp(t2, n2, e2) {
        var r2, i2, o2, a2, u2 = t2.x - n2.x, c2 = t2.y - n2.y, f2 = u2 * u2 + c2 * c2;
        f2 ? (i2 = n2.r + e2.r, i2 *= i2, a2 = t2.r + e2.r, i2 > (a2 *= a2) ? (r2 = (f2 + a2 - i2) / (2 * f2), o2 = Math.sqrt(Math.max(0, a2 / f2 - r2 * r2)), e2.x = t2.x - r2 * u2 - o2 * c2, e2.y = t2.y - r2 * c2 + o2 * u2) : (r2 = (f2 + i2 - a2) / (2 * f2), o2 = Math.sqrt(Math.max(0, i2 / f2 - r2 * r2)), e2.x = n2.x + r2 * u2 - o2 * c2, e2.y = n2.y + r2 * c2 + o2 * u2)) : (e2.x = n2.x + e2.r, e2.y = n2.y);
      }
      function yp(t2, n2) {
        var e2 = t2.r + n2.r - 1e-6, r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 > 0 && e2 * e2 > r2 * r2 + i2 * i2;
      }
      function vp(t2) {
        var n2 = t2._, e2 = t2.next._, r2 = n2.r + e2.r, i2 = (n2.x * e2.r + e2.x * n2.r) / r2, o2 = (n2.y * e2.r + e2.y * n2.r) / r2;
        return i2 * i2 + o2 * o2;
      }
      function _p(t2) {
        this._ = t2, this.next = null, this.previous = null;
      }
      function bp(t2, n2) {
        if (!(o2 = (t2 = function(t3) {
          return "object" == typeof t3 && "length" in t3 ? t3 : Array.from(t3);
        }(t2)).length))
          return 0;
        var e2, r2, i2, o2, a2, u2, c2, f2, s2, l2, h2;
        if ((e2 = t2[0]).x = 0, e2.y = 0, !(o2 > 1))
          return e2.r;
        if (r2 = t2[1], e2.x = -r2.r, r2.x = e2.r, r2.y = 0, !(o2 > 2))
          return e2.r + r2.r;
        gp(r2, e2, i2 = t2[2]), e2 = new _p(e2), r2 = new _p(r2), i2 = new _p(i2), e2.next = i2.previous = r2, r2.next = e2.previous = i2, i2.next = r2.previous = e2;
        t:
          for (c2 = 3; c2 < o2; ++c2) {
            gp(e2._, r2._, i2 = t2[c2]), i2 = new _p(i2), f2 = r2.next, s2 = e2.previous, l2 = r2._.r, h2 = e2._.r;
            do {
              if (l2 <= h2) {
                if (yp(f2._, i2._)) {
                  r2 = f2, e2.next = r2, r2.previous = e2, --c2;
                  continue t;
                }
                l2 += f2._.r, f2 = f2.next;
              } else {
                if (yp(s2._, i2._)) {
                  (e2 = s2).next = r2, r2.previous = e2, --c2;
                  continue t;
                }
                h2 += s2._.r, s2 = s2.previous;
              }
            } while (f2 !== s2.next);
            for (i2.previous = e2, i2.next = r2, e2.next = r2.previous = r2 = i2, a2 = vp(e2); (i2 = i2.next) !== r2; )
              (u2 = vp(i2)) < a2 && (e2 = i2, a2 = u2);
            r2 = e2.next;
          }
        for (e2 = [r2._], i2 = r2; (i2 = i2.next) !== r2; )
          e2.push(i2._);
        for (i2 = up(e2, n2), c2 = 0; c2 < o2; ++c2)
          (e2 = t2[c2]).x -= i2.x, e2.y -= i2.y;
        return i2.r;
      }
      function mp(t2) {
        return Math.sqrt(t2.value);
      }
      function xp(t2) {
        return function(n2) {
          n2.children || (n2.r = Math.max(0, +t2(n2) || 0));
        };
      }
      function wp(t2, n2, e2) {
        return function(r2) {
          if (i2 = r2.children) {
            var i2, o2, a2, u2 = i2.length, c2 = t2(r2) * n2 || 0;
            if (c2)
              for (o2 = 0; o2 < u2; ++o2)
                i2[o2].r += c2;
            if (a2 = bp(i2, e2), c2)
              for (o2 = 0; o2 < u2; ++o2)
                i2[o2].r -= c2;
            r2.r = a2 + c2;
          }
        };
      }
      function Mp(t2) {
        return function(n2) {
          var e2 = n2.parent;
          n2.r *= t2, e2 && (n2.x = e2.x + t2 * n2.x, n2.y = e2.y + t2 * n2.y);
        };
      }
      function Tp(t2) {
        t2.x0 = Math.round(t2.x0), t2.y0 = Math.round(t2.y0), t2.x1 = Math.round(t2.x1), t2.y1 = Math.round(t2.y1);
      }
      function Ap(t2, n2, e2, r2, i2) {
        for (var o2, a2 = t2.children, u2 = -1, c2 = a2.length, f2 = t2.value && (r2 - n2) / t2.value; ++u2 < c2; )
          (o2 = a2[u2]).y0 = e2, o2.y1 = i2, o2.x0 = n2, o2.x1 = n2 += o2.value * f2;
      }
      var Sp = { depth: -1 }, Ep = {}, Np = {};
      function kp(t2) {
        return t2.id;
      }
      function Cp(t2) {
        return t2.parentId;
      }
      function Pp(t2) {
        let n2 = t2.length;
        if (n2 < 2)
          return "";
        for (; --n2 > 1 && !zp(t2, n2); )
          ;
        return t2.slice(0, n2);
      }
      function zp(t2, n2) {
        if ("/" === t2[n2]) {
          let e2 = 0;
          for (; n2 > 0 && "\\" === t2[--n2]; )
            ++e2;
          if (0 == (1 & e2))
            return true;
        }
        return false;
      }
      function $p(t2, n2) {
        return t2.parent === n2.parent ? 1 : 2;
      }
      function Dp(t2) {
        var n2 = t2.children;
        return n2 ? n2[0] : t2.t;
      }
      function Rp(t2) {
        var n2 = t2.children;
        return n2 ? n2[n2.length - 1] : t2.t;
      }
      function Fp(t2, n2, e2) {
        var r2 = e2 / (n2.i - t2.i);
        n2.c -= r2, n2.s += e2, t2.c += r2, n2.z += e2, n2.m += e2;
      }
      function qp(t2, n2, e2) {
        return t2.a.parent === n2.parent ? t2.a : e2;
      }
      function Up(t2, n2) {
        this._ = t2, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n2;
      }
      function Ip(t2, n2, e2, r2, i2) {
        for (var o2, a2 = t2.children, u2 = -1, c2 = a2.length, f2 = t2.value && (i2 - e2) / t2.value; ++u2 < c2; )
          (o2 = a2[u2]).x0 = n2, o2.x1 = r2, o2.y0 = e2, o2.y1 = e2 += o2.value * f2;
      }
      Up.prototype = Object.create(Qd.prototype);
      var Op = (1 + Math.sqrt(5)) / 2;
      function Bp(t2, n2, e2, r2, i2, o2) {
        for (var a2, u2, c2, f2, s2, l2, h2, d2, p2, g2, y2, v2 = [], _2 = n2.children, b2 = 0, m2 = 0, x2 = _2.length, w2 = n2.value; b2 < x2; ) {
          c2 = i2 - e2, f2 = o2 - r2;
          do {
            s2 = _2[m2++].value;
          } while (!s2 && m2 < x2);
          for (l2 = h2 = s2, y2 = s2 * s2 * (g2 = Math.max(f2 / c2, c2 / f2) / (w2 * t2)), p2 = Math.max(h2 / y2, y2 / l2); m2 < x2; ++m2) {
            if (s2 += u2 = _2[m2].value, u2 < l2 && (l2 = u2), u2 > h2 && (h2 = u2), y2 = s2 * s2 * g2, (d2 = Math.max(h2 / y2, y2 / l2)) > p2) {
              s2 -= u2;
              break;
            }
            p2 = d2;
          }
          v2.push(a2 = { value: s2, dice: c2 < f2, children: _2.slice(b2, m2) }), a2.dice ? Ap(a2, e2, r2, i2, w2 ? r2 += f2 * s2 / w2 : o2) : Ip(a2, e2, r2, w2 ? e2 += c2 * s2 / w2 : i2, o2), w2 -= s2, b2 = m2;
        }
        return v2;
      }
      var Yp = function t2(n2) {
        function e2(t3, e3, r2, i2, o2) {
          Bp(n2, t3, e3, r2, i2, o2);
        }
        return e2.ratio = function(n3) {
          return t2((n3 = +n3) > 1 ? n3 : 1);
        }, e2;
      }(Op);
      var Lp = function t2(n2) {
        function e2(t3, e3, r2, i2, o2) {
          if ((a2 = t3._squarify) && a2.ratio === n2)
            for (var a2, u2, c2, f2, s2, l2 = -1, h2 = a2.length, d2 = t3.value; ++l2 < h2; ) {
              for (c2 = (u2 = a2[l2]).children, f2 = u2.value = 0, s2 = c2.length; f2 < s2; ++f2)
                u2.value += c2[f2].value;
              u2.dice ? Ap(u2, e3, r2, i2, d2 ? r2 += (o2 - r2) * u2.value / d2 : o2) : Ip(u2, e3, r2, d2 ? e3 += (i2 - e3) * u2.value / d2 : i2, o2), d2 -= u2.value;
            }
          else
            t3._squarify = a2 = Bp(n2, t3, e3, r2, i2, o2), a2.ratio = n2;
        }
        return e2.ratio = function(n3) {
          return t2((n3 = +n3) > 1 ? n3 : 1);
        }, e2;
      }(Op);
      function jp(t2, n2, e2) {
        return (n2[0] - t2[0]) * (e2[1] - t2[1]) - (n2[1] - t2[1]) * (e2[0] - t2[0]);
      }
      function Hp(t2, n2) {
        return t2[0] - n2[0] || t2[1] - n2[1];
      }
      function Xp(t2) {
        const n2 = t2.length, e2 = [0, 1];
        let r2, i2 = 2;
        for (r2 = 2; r2 < n2; ++r2) {
          for (; i2 > 1 && jp(t2[e2[i2 - 2]], t2[e2[i2 - 1]], t2[r2]) <= 0; )
            --i2;
          e2[i2++] = r2;
        }
        return e2.slice(0, i2);
      }
      var Gp = Math.random, Vp = function t2(n2) {
        function e2(t3, e3) {
          return t3 = null == t3 ? 0 : +t3, e3 = null == e3 ? 1 : +e3, 1 === arguments.length ? (e3 = t3, t3 = 0) : e3 -= t3, function() {
            return n2() * e3 + t3;
          };
        }
        return e2.source = t2, e2;
      }(Gp), Wp = function t2(n2) {
        function e2(t3, e3) {
          return arguments.length < 2 && (e3 = t3, t3 = 0), t3 = Math.floor(t3), e3 = Math.floor(e3) - t3, function() {
            return Math.floor(n2() * e3 + t3);
          };
        }
        return e2.source = t2, e2;
      }(Gp), Zp = function t2(n2) {
        function e2(t3, e3) {
          var r2, i2;
          return t3 = null == t3 ? 0 : +t3, e3 = null == e3 ? 1 : +e3, function() {
            var o2;
            if (null != r2)
              o2 = r2, r2 = null;
            else
              do {
                r2 = 2 * n2() - 1, o2 = 2 * n2() - 1, i2 = r2 * r2 + o2 * o2;
              } while (!i2 || i2 > 1);
            return t3 + e3 * o2 * Math.sqrt(-2 * Math.log(i2) / i2);
          };
        }
        return e2.source = t2, e2;
      }(Gp), Kp = function t2(n2) {
        var e2 = Zp.source(n2);
        function r2() {
          var t3 = e2.apply(this, arguments);
          return function() {
            return Math.exp(t3());
          };
        }
        return r2.source = t2, r2;
      }(Gp), Qp = function t2(n2) {
        function e2(t3) {
          return (t3 = +t3) <= 0 ? () => 0 : function() {
            for (var e3 = 0, r2 = t3; r2 > 1; --r2)
              e3 += n2();
            return e3 + r2 * n2();
          };
        }
        return e2.source = t2, e2;
      }(Gp), Jp = function t2(n2) {
        var e2 = Qp.source(n2);
        function r2(t3) {
          if (0 == (t3 = +t3))
            return n2;
          var r3 = e2(t3);
          return function() {
            return r3() / t3;
          };
        }
        return r2.source = t2, r2;
      }(Gp), tg = function t2(n2) {
        function e2(t3) {
          return function() {
            return -Math.log1p(-n2()) / t3;
          };
        }
        return e2.source = t2, e2;
      }(Gp), ng = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0)
            throw new RangeError("invalid alpha");
          return t3 = 1 / -t3, function() {
            return Math.pow(1 - n2(), t3);
          };
        }
        return e2.source = t2, e2;
      }(Gp), eg = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0 || t3 > 1)
            throw new RangeError("invalid p");
          return function() {
            return Math.floor(n2() + t3);
          };
        }
        return e2.source = t2, e2;
      }(Gp), rg = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0 || t3 > 1)
            throw new RangeError("invalid p");
          return 0 === t3 ? () => 1 / 0 : 1 === t3 ? () => 1 : (t3 = Math.log1p(-t3), function() {
            return 1 + Math.floor(Math.log1p(-n2()) / t3);
          });
        }
        return e2.source = t2, e2;
      }(Gp), ig = function t2(n2) {
        var e2 = Zp.source(n2)();
        function r2(t3, r3) {
          if ((t3 = +t3) < 0)
            throw new RangeError("invalid k");
          if (0 === t3)
            return () => 0;
          if (r3 = null == r3 ? 1 : +r3, 1 === t3)
            return () => -Math.log1p(-n2()) * r3;
          var i2 = (t3 < 1 ? t3 + 1 : t3) - 1 / 3, o2 = 1 / (3 * Math.sqrt(i2)), a2 = t3 < 1 ? () => Math.pow(n2(), 1 / t3) : () => 1;
          return function() {
            do {
              do {
                var t4 = e2(), u2 = 1 + o2 * t4;
              } while (u2 <= 0);
              u2 *= u2 * u2;
              var c2 = 1 - n2();
            } while (c2 >= 1 - 0.0331 * t4 * t4 * t4 * t4 && Math.log(c2) >= 0.5 * t4 * t4 + i2 * (1 - u2 + Math.log(u2)));
            return i2 * u2 * a2() * r3;
          };
        }
        return r2.source = t2, r2;
      }(Gp), og = function t2(n2) {
        var e2 = ig.source(n2);
        function r2(t3, n3) {
          var r3 = e2(t3), i2 = e2(n3);
          return function() {
            var t4 = r3();
            return 0 === t4 ? 0 : t4 / (t4 + i2());
          };
        }
        return r2.source = t2, r2;
      }(Gp), ag = function t2(n2) {
        var e2 = rg.source(n2), r2 = og.source(n2);
        function i2(t3, n3) {
          return t3 = +t3, (n3 = +n3) >= 1 ? () => t3 : n3 <= 0 ? () => 0 : function() {
            for (var i3 = 0, o2 = t3, a2 = n3; o2 * a2 > 16 && o2 * (1 - a2) > 16; ) {
              var u2 = Math.floor((o2 + 1) * a2), c2 = r2(u2, o2 - u2 + 1)();
              c2 <= a2 ? (i3 += u2, o2 -= u2, a2 = (a2 - c2) / (1 - c2)) : (o2 = u2 - 1, a2 /= c2);
            }
            for (var f2 = a2 < 0.5, s2 = e2(f2 ? a2 : 1 - a2), l2 = s2(), h2 = 0; l2 <= o2; ++h2)
              l2 += s2();
            return i3 + (f2 ? h2 : o2 - h2);
          };
        }
        return i2.source = t2, i2;
      }(Gp), ug = function t2(n2) {
        function e2(t3, e3, r2) {
          var i2;
          return 0 == (t3 = +t3) ? i2 = (t4) => -Math.log(t4) : (t3 = 1 / t3, i2 = (n3) => Math.pow(n3, t3)), e3 = null == e3 ? 0 : +e3, r2 = null == r2 ? 1 : +r2, function() {
            return e3 + r2 * i2(-Math.log1p(-n2()));
          };
        }
        return e2.source = t2, e2;
      }(Gp), cg = function t2(n2) {
        function e2(t3, e3) {
          return t3 = null == t3 ? 0 : +t3, e3 = null == e3 ? 1 : +e3, function() {
            return t3 + e3 * Math.tan(Math.PI * n2());
          };
        }
        return e2.source = t2, e2;
      }(Gp), fg = function t2(n2) {
        function e2(t3, e3) {
          return t3 = null == t3 ? 0 : +t3, e3 = null == e3 ? 1 : +e3, function() {
            var r2 = n2();
            return t3 + e3 * Math.log(r2 / (1 - r2));
          };
        }
        return e2.source = t2, e2;
      }(Gp), sg = function t2(n2) {
        var e2 = ig.source(n2), r2 = ag.source(n2);
        function i2(t3) {
          return function() {
            for (var i3 = 0, o2 = t3; o2 > 16; ) {
              var a2 = Math.floor(0.875 * o2), u2 = e2(a2)();
              if (u2 > o2)
                return i3 + r2(a2 - 1, o2 / u2)();
              i3 += a2, o2 -= u2;
            }
            for (var c2 = -Math.log1p(-n2()), f2 = 0; c2 <= o2; ++f2)
              c2 -= Math.log1p(-n2());
            return i3 + f2;
          };
        }
        return i2.source = t2, i2;
      }(Gp);
      const lg = 1 / 4294967296;
      function hg(t2, n2) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t2);
            break;
          default:
            this.range(n2).domain(t2);
        }
        return this;
      }
      function dg(t2, n2) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t2 ? this.interpolator(t2) : this.range(t2);
            break;
          default:
            this.domain(t2), "function" == typeof n2 ? this.interpolator(n2) : this.range(n2);
        }
        return this;
      }
      const pg = Symbol("implicit");
      function gg() {
        var t2 = new InternMap(), n2 = [], e2 = [], r2 = pg;
        function i2(i3) {
          let o2 = t2.get(i3);
          if (void 0 === o2) {
            if (r2 !== pg)
              return r2;
            t2.set(i3, o2 = n2.push(i3) - 1);
          }
          return e2[o2 % e2.length];
        }
        return i2.domain = function(e3) {
          if (!arguments.length)
            return n2.slice();
          n2 = [], t2 = new InternMap();
          for (const r3 of e3)
            t2.has(r3) || t2.set(r3, n2.push(r3) - 1);
          return i2;
        }, i2.range = function(t3) {
          return arguments.length ? (e2 = Array.from(t3), i2) : e2.slice();
        }, i2.unknown = function(t3) {
          return arguments.length ? (r2 = t3, i2) : r2;
        }, i2.copy = function() {
          return gg(n2, e2).unknown(r2);
        }, hg.apply(i2, arguments), i2;
      }
      function yg() {
        var t2, n2, e2 = gg().unknown(void 0), r2 = e2.domain, i2 = e2.range, o2 = 0, a2 = 1, u2 = false, c2 = 0, f2 = 0, s2 = 0.5;
        function l2() {
          var e3 = r2().length, l3 = a2 < o2, h2 = l3 ? a2 : o2, d2 = l3 ? o2 : a2;
          t2 = (d2 - h2) / Math.max(1, e3 - c2 + 2 * f2), u2 && (t2 = Math.floor(t2)), h2 += (d2 - h2 - t2 * (e3 - c2)) * s2, n2 = t2 * (1 - c2), u2 && (h2 = Math.round(h2), n2 = Math.round(n2));
          var p2 = lt(e3).map(function(n3) {
            return h2 + t2 * n3;
          });
          return i2(l3 ? p2.reverse() : p2);
        }
        return delete e2.unknown, e2.domain = function(t3) {
          return arguments.length ? (r2(t3), l2()) : r2();
        }, e2.range = function(t3) {
          return arguments.length ? ([o2, a2] = t3, o2 = +o2, a2 = +a2, l2()) : [o2, a2];
        }, e2.rangeRound = function(t3) {
          return [o2, a2] = t3, o2 = +o2, a2 = +a2, u2 = true, l2();
        }, e2.bandwidth = function() {
          return n2;
        }, e2.step = function() {
          return t2;
        }, e2.round = function(t3) {
          return arguments.length ? (u2 = !!t3, l2()) : u2;
        }, e2.padding = function(t3) {
          return arguments.length ? (c2 = Math.min(1, f2 = +t3), l2()) : c2;
        }, e2.paddingInner = function(t3) {
          return arguments.length ? (c2 = Math.min(1, t3), l2()) : c2;
        }, e2.paddingOuter = function(t3) {
          return arguments.length ? (f2 = +t3, l2()) : f2;
        }, e2.align = function(t3) {
          return arguments.length ? (s2 = Math.max(0, Math.min(1, t3)), l2()) : s2;
        }, e2.copy = function() {
          return yg(r2(), [o2, a2]).round(u2).paddingInner(c2).paddingOuter(f2).align(s2);
        }, hg.apply(l2(), arguments);
      }
      function vg(t2) {
        var n2 = t2.copy;
        return t2.padding = t2.paddingOuter, delete t2.paddingInner, delete t2.paddingOuter, t2.copy = function() {
          return vg(n2());
        }, t2;
      }
      function _g(t2) {
        return +t2;
      }
      var bg = [0, 1];
      function mg(t2) {
        return t2;
      }
      function xg(t2, n2) {
        return (n2 -= t2 = +t2) ? function(e2) {
          return (e2 - t2) / n2;
        } : /* @__PURE__ */ function(t3) {
          return function() {
            return t3;
          };
        }(isNaN(n2) ? NaN : 0.5);
      }
      function wg(t2, n2, e2) {
        var r2 = t2[0], i2 = t2[1], o2 = n2[0], a2 = n2[1];
        return i2 < r2 ? (r2 = xg(i2, r2), o2 = e2(a2, o2)) : (r2 = xg(r2, i2), o2 = e2(o2, a2)), function(t3) {
          return o2(r2(t3));
        };
      }
      function Mg(t2, n2, e2) {
        var r2 = Math.min(t2.length, n2.length) - 1, i2 = new Array(r2), o2 = new Array(r2), a2 = -1;
        for (t2[r2] < t2[0] && (t2 = t2.slice().reverse(), n2 = n2.slice().reverse()); ++a2 < r2; )
          i2[a2] = xg(t2[a2], t2[a2 + 1]), o2[a2] = e2(n2[a2], n2[a2 + 1]);
        return function(n3) {
          var e3 = s(t2, n3, 1, r2) - 1;
          return o2[e3](i2[e3](n3));
        };
      }
      function Tg(t2, n2) {
        return n2.domain(t2.domain()).range(t2.range()).interpolate(t2.interpolate()).clamp(t2.clamp()).unknown(t2.unknown());
      }
      function Ag() {
        var t2, n2, e2, r2, i2, o2, a2 = bg, u2 = bg, c2 = Gr, f2 = mg;
        function s2() {
          var t3 = Math.min(a2.length, u2.length);
          return f2 !== mg && (f2 = function(t4, n3) {
            var e3;
            return t4 > n3 && (e3 = t4, t4 = n3, n3 = e3), function(e4) {
              return Math.max(t4, Math.min(n3, e4));
            };
          }(a2[0], a2[t3 - 1])), r2 = t3 > 2 ? Mg : wg, i2 = o2 = null, l2;
        }
        function l2(n3) {
          return null == n3 || isNaN(n3 = +n3) ? e2 : (i2 || (i2 = r2(a2.map(t2), u2, c2)))(t2(f2(n3)));
        }
        return l2.invert = function(e3) {
          return f2(n2((o2 || (o2 = r2(u2, a2.map(t2), Yr)))(e3)));
        }, l2.domain = function(t3) {
          return arguments.length ? (a2 = Array.from(t3, _g), s2()) : a2.slice();
        }, l2.range = function(t3) {
          return arguments.length ? (u2 = Array.from(t3), s2()) : u2.slice();
        }, l2.rangeRound = function(t3) {
          return u2 = Array.from(t3), c2 = Vr, s2();
        }, l2.clamp = function(t3) {
          return arguments.length ? (f2 = !!t3 || mg, s2()) : f2 !== mg;
        }, l2.interpolate = function(t3) {
          return arguments.length ? (c2 = t3, s2()) : c2;
        }, l2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, l2) : e2;
        }, function(e3, r3) {
          return t2 = e3, n2 = r3, s2();
        };
      }
      function Sg() {
        return Ag()(mg, mg);
      }
      function Eg(n2, e2, r2, i2) {
        var o2, a2 = W(n2, e2, r2);
        switch ((i2 = Jc(null == i2 ? ",f" : i2)).type) {
          case "s":
            var u2 = Math.max(Math.abs(n2), Math.abs(e2));
            return null != i2.precision || isNaN(o2 = lf(a2, u2)) || (i2.precision = o2), t.formatPrefix(i2, u2);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != i2.precision || isNaN(o2 = hf(a2, Math.max(Math.abs(n2), Math.abs(e2)))) || (i2.precision = o2 - ("e" === i2.type));
            break;
          case "f":
          case "%":
            null != i2.precision || isNaN(o2 = sf(a2)) || (i2.precision = o2 - 2 * ("%" === i2.type));
        }
        return t.format(i2);
      }
      function Ng(t2) {
        var n2 = t2.domain;
        return t2.ticks = function(t3) {
          var e2 = n2();
          return G(e2[0], e2[e2.length - 1], null == t3 ? 10 : t3);
        }, t2.tickFormat = function(t3, e2) {
          var r2 = n2();
          return Eg(r2[0], r2[r2.length - 1], null == t3 ? 10 : t3, e2);
        }, t2.nice = function(e2) {
          null == e2 && (e2 = 10);
          var r2, i2, o2 = n2(), a2 = 0, u2 = o2.length - 1, c2 = o2[a2], f2 = o2[u2], s2 = 10;
          for (f2 < c2 && (i2 = c2, c2 = f2, f2 = i2, i2 = a2, a2 = u2, u2 = i2); s2-- > 0; ) {
            if ((i2 = V(c2, f2, e2)) === r2)
              return o2[a2] = c2, o2[u2] = f2, n2(o2);
            if (i2 > 0)
              c2 = Math.floor(c2 / i2) * i2, f2 = Math.ceil(f2 / i2) * i2;
            else {
              if (!(i2 < 0))
                break;
              c2 = Math.ceil(c2 * i2) / i2, f2 = Math.floor(f2 * i2) / i2;
            }
            r2 = i2;
          }
          return t2;
        }, t2;
      }
      function kg(t2, n2) {
        var e2, r2 = 0, i2 = (t2 = t2.slice()).length - 1, o2 = t2[r2], a2 = t2[i2];
        return a2 < o2 && (e2 = r2, r2 = i2, i2 = e2, e2 = o2, o2 = a2, a2 = e2), t2[r2] = n2.floor(o2), t2[i2] = n2.ceil(a2), t2;
      }
      function Cg(t2) {
        return Math.log(t2);
      }
      function Pg(t2) {
        return Math.exp(t2);
      }
      function zg(t2) {
        return -Math.log(-t2);
      }
      function $g(t2) {
        return -Math.exp(-t2);
      }
      function Dg(t2) {
        return isFinite(t2) ? +("1e" + t2) : t2 < 0 ? 0 : t2;
      }
      function Rg(t2) {
        return (n2, e2) => -t2(-n2, e2);
      }
      function Fg(n2) {
        const e2 = n2(Cg, Pg), r2 = e2.domain;
        let i2, o2, a2 = 10;
        function u2() {
          return i2 = function(t2) {
            return t2 === Math.E ? Math.log : 10 === t2 && Math.log10 || 2 === t2 && Math.log2 || (t2 = Math.log(t2), (n3) => Math.log(n3) / t2);
          }(a2), o2 = /* @__PURE__ */ function(t2) {
            return 10 === t2 ? Dg : t2 === Math.E ? Math.exp : (n3) => Math.pow(t2, n3);
          }(a2), r2()[0] < 0 ? (i2 = Rg(i2), o2 = Rg(o2), n2(zg, $g)) : n2(Cg, Pg), e2;
        }
        return e2.base = function(t2) {
          return arguments.length ? (a2 = +t2, u2()) : a2;
        }, e2.domain = function(t2) {
          return arguments.length ? (r2(t2), u2()) : r2();
        }, e2.ticks = (t2) => {
          const n3 = r2();
          let e3 = n3[0], u3 = n3[n3.length - 1];
          const c2 = u3 < e3;
          c2 && ([e3, u3] = [u3, e3]);
          let f2, s2, l2 = i2(e3), h2 = i2(u3);
          const d2 = null == t2 ? 10 : +t2;
          let p2 = [];
          if (!(a2 % 1) && h2 - l2 < d2) {
            if (l2 = Math.floor(l2), h2 = Math.ceil(h2), e3 > 0) {
              for (; l2 <= h2; ++l2)
                for (f2 = 1; f2 < a2; ++f2)
                  if (s2 = l2 < 0 ? f2 / o2(-l2) : f2 * o2(l2), !(s2 < e3)) {
                    if (s2 > u3)
                      break;
                    p2.push(s2);
                  }
            } else
              for (; l2 <= h2; ++l2)
                for (f2 = a2 - 1; f2 >= 1; --f2)
                  if (s2 = l2 > 0 ? f2 / o2(-l2) : f2 * o2(l2), !(s2 < e3)) {
                    if (s2 > u3)
                      break;
                    p2.push(s2);
                  }
            2 * p2.length < d2 && (p2 = G(e3, u3, d2));
          } else
            p2 = G(l2, h2, Math.min(h2 - l2, d2)).map(o2);
          return c2 ? p2.reverse() : p2;
        }, e2.tickFormat = (n3, r3) => {
          if (null == n3 && (n3 = 10), null == r3 && (r3 = 10 === a2 ? "s" : ","), "function" != typeof r3 && (a2 % 1 || null != (r3 = Jc(r3)).precision || (r3.trim = true), r3 = t.format(r3)), n3 === 1 / 0)
            return r3;
          const u3 = Math.max(1, a2 * n3 / e2.ticks().length);
          return (t2) => {
            let n4 = t2 / o2(Math.round(i2(t2)));
            return n4 * a2 < a2 - 0.5 && (n4 *= a2), n4 <= u3 ? r3(t2) : "";
          };
        }, e2.nice = () => r2(kg(r2(), { floor: (t2) => o2(Math.floor(i2(t2))), ceil: (t2) => o2(Math.ceil(i2(t2))) })), e2;
      }
      function qg(t2) {
        return function(n2) {
          return Math.sign(n2) * Math.log1p(Math.abs(n2 / t2));
        };
      }
      function Ug(t2) {
        return function(n2) {
          return Math.sign(n2) * Math.expm1(Math.abs(n2)) * t2;
        };
      }
      function Ig(t2) {
        var n2 = 1, e2 = t2(qg(n2), Ug(n2));
        return e2.constant = function(e3) {
          return arguments.length ? t2(qg(n2 = +e3), Ug(n2)) : n2;
        }, Ng(e2);
      }
      function Og(t2) {
        return function(n2) {
          return n2 < 0 ? -Math.pow(-n2, t2) : Math.pow(n2, t2);
        };
      }
      function Bg(t2) {
        return t2 < 0 ? -Math.sqrt(-t2) : Math.sqrt(t2);
      }
      function Yg(t2) {
        return t2 < 0 ? -t2 * t2 : t2 * t2;
      }
      function Lg(t2) {
        var n2 = t2(mg, mg), e2 = 1;
        return n2.exponent = function(n3) {
          return arguments.length ? 1 === (e2 = +n3) ? t2(mg, mg) : 0.5 === e2 ? t2(Bg, Yg) : t2(Og(e2), Og(1 / e2)) : e2;
        }, Ng(n2);
      }
      function jg() {
        var t2 = Lg(Ag());
        return t2.copy = function() {
          return Tg(t2, jg()).exponent(t2.exponent());
        }, hg.apply(t2, arguments), t2;
      }
      function Hg(t2) {
        return Math.sign(t2) * t2 * t2;
      }
      const Xg = /* @__PURE__ */ new Date(), Gg = /* @__PURE__ */ new Date();
      function Vg(t2, n2, e2, r2) {
        function i2(n3) {
          return t2(n3 = 0 === arguments.length ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+n3)), n3;
        }
        return i2.floor = (n3) => (t2(n3 = /* @__PURE__ */ new Date(+n3)), n3), i2.ceil = (e3) => (t2(e3 = new Date(e3 - 1)), n2(e3, 1), t2(e3), e3), i2.round = (t3) => {
          const n3 = i2(t3), e3 = i2.ceil(t3);
          return t3 - n3 < e3 - t3 ? n3 : e3;
        }, i2.offset = (t3, e3) => (n2(t3 = /* @__PURE__ */ new Date(+t3), null == e3 ? 1 : Math.floor(e3)), t3), i2.range = (e3, r3, o2) => {
          const a2 = [];
          if (e3 = i2.ceil(e3), o2 = null == o2 ? 1 : Math.floor(o2), !(e3 < r3 && o2 > 0))
            return a2;
          let u2;
          do {
            a2.push(u2 = /* @__PURE__ */ new Date(+e3)), n2(e3, o2), t2(e3);
          } while (u2 < e3 && e3 < r3);
          return a2;
        }, i2.filter = (e3) => Vg((n3) => {
          if (n3 >= n3)
            for (; t2(n3), !e3(n3); )
              n3.setTime(n3 - 1);
        }, (t3, r3) => {
          if (t3 >= t3)
            if (r3 < 0)
              for (; ++r3 <= 0; )
                for (; n2(t3, -1), !e3(t3); )
                  ;
            else
              for (; --r3 >= 0; )
                for (; n2(t3, 1), !e3(t3); )
                  ;
        }), e2 && (i2.count = (n3, r3) => (Xg.setTime(+n3), Gg.setTime(+r3), t2(Xg), t2(Gg), Math.floor(e2(Xg, Gg))), i2.every = (t3) => (t3 = Math.floor(t3), isFinite(t3) && t3 > 0 ? t3 > 1 ? i2.filter(r2 ? (n3) => r2(n3) % t3 == 0 : (n3) => i2.count(0, n3) % t3 == 0) : i2 : null)), i2;
      }
      const Wg = Vg(() => {
      }, (t2, n2) => {
        t2.setTime(+t2 + n2);
      }, (t2, n2) => n2 - t2);
      Wg.every = (t2) => (t2 = Math.floor(t2), isFinite(t2) && t2 > 0 ? t2 > 1 ? Vg((n2) => {
        n2.setTime(Math.floor(n2 / t2) * t2);
      }, (n2, e2) => {
        n2.setTime(+n2 + e2 * t2);
      }, (n2, e2) => (e2 - n2) / t2) : Wg : null);
      const Zg = Wg.range, Kg = 1e3, Qg = 6e4, Jg = 36e5, ty = 864e5, ny = 6048e5, ey = 2592e6, ry = 31536e6, iy = Vg((t2) => {
        t2.setTime(t2 - t2.getMilliseconds());
      }, (t2, n2) => {
        t2.setTime(+t2 + n2 * Kg);
      }, (t2, n2) => (n2 - t2) / Kg, (t2) => t2.getUTCSeconds()), oy = iy.range, ay = Vg((t2) => {
        t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * Kg);
      }, (t2, n2) => {
        t2.setTime(+t2 + n2 * Qg);
      }, (t2, n2) => (n2 - t2) / Qg, (t2) => t2.getMinutes()), uy = ay.range, cy = Vg((t2) => {
        t2.setUTCSeconds(0, 0);
      }, (t2, n2) => {
        t2.setTime(+t2 + n2 * Qg);
      }, (t2, n2) => (n2 - t2) / Qg, (t2) => t2.getUTCMinutes()), fy = cy.range, sy = Vg((t2) => {
        t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * Kg - t2.getMinutes() * Qg);
      }, (t2, n2) => {
        t2.setTime(+t2 + n2 * Jg);
      }, (t2, n2) => (n2 - t2) / Jg, (t2) => t2.getHours()), ly = sy.range, hy = Vg((t2) => {
        t2.setUTCMinutes(0, 0, 0);
      }, (t2, n2) => {
        t2.setTime(+t2 + n2 * Jg);
      }, (t2, n2) => (n2 - t2) / Jg, (t2) => t2.getUTCHours()), dy = hy.range, py = Vg((t2) => t2.setHours(0, 0, 0, 0), (t2, n2) => t2.setDate(t2.getDate() + n2), (t2, n2) => (n2 - t2 - (n2.getTimezoneOffset() - t2.getTimezoneOffset()) * Qg) / ty, (t2) => t2.getDate() - 1), gy = py.range, yy = Vg((t2) => {
        t2.setUTCHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setUTCDate(t2.getUTCDate() + n2);
      }, (t2, n2) => (n2 - t2) / ty, (t2) => t2.getUTCDate() - 1), vy = yy.range, _y = Vg((t2) => {
        t2.setUTCHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setUTCDate(t2.getUTCDate() + n2);
      }, (t2, n2) => (n2 - t2) / ty, (t2) => Math.floor(t2 / ty)), by = _y.range;
      function my(t2) {
        return Vg((n2) => {
          n2.setDate(n2.getDate() - (n2.getDay() + 7 - t2) % 7), n2.setHours(0, 0, 0, 0);
        }, (t3, n2) => {
          t3.setDate(t3.getDate() + 7 * n2);
        }, (t3, n2) => (n2 - t3 - (n2.getTimezoneOffset() - t3.getTimezoneOffset()) * Qg) / ny);
      }
      const xy = my(0), wy = my(1), My = my(2), Ty = my(3), Ay = my(4), Sy = my(5), Ey = my(6), Ny = xy.range, ky = wy.range, Cy = My.range, Py = Ty.range, zy = Ay.range, $y = Sy.range, Dy = Ey.range;
      function Ry(t2) {
        return Vg((n2) => {
          n2.setUTCDate(n2.getUTCDate() - (n2.getUTCDay() + 7 - t2) % 7), n2.setUTCHours(0, 0, 0, 0);
        }, (t3, n2) => {
          t3.setUTCDate(t3.getUTCDate() + 7 * n2);
        }, (t3, n2) => (n2 - t3) / ny);
      }
      const Fy = Ry(0), qy = Ry(1), Uy = Ry(2), Iy = Ry(3), Oy = Ry(4), By = Ry(5), Yy = Ry(6), Ly = Fy.range, jy = qy.range, Hy = Uy.range, Xy = Iy.range, Gy = Oy.range, Vy = By.range, Wy = Yy.range, Zy = Vg((t2) => {
        t2.setDate(1), t2.setHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setMonth(t2.getMonth() + n2);
      }, (t2, n2) => n2.getMonth() - t2.getMonth() + 12 * (n2.getFullYear() - t2.getFullYear()), (t2) => t2.getMonth()), Ky = Zy.range, Qy = Vg((t2) => {
        t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setUTCMonth(t2.getUTCMonth() + n2);
      }, (t2, n2) => n2.getUTCMonth() - t2.getUTCMonth() + 12 * (n2.getUTCFullYear() - t2.getUTCFullYear()), (t2) => t2.getUTCMonth()), Jy = Qy.range, tv = Vg((t2) => {
        t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setFullYear(t2.getFullYear() + n2);
      }, (t2, n2) => n2.getFullYear() - t2.getFullYear(), (t2) => t2.getFullYear());
      tv.every = (t2) => isFinite(t2 = Math.floor(t2)) && t2 > 0 ? Vg((n2) => {
        n2.setFullYear(Math.floor(n2.getFullYear() / t2) * t2), n2.setMonth(0, 1), n2.setHours(0, 0, 0, 0);
      }, (n2, e2) => {
        n2.setFullYear(n2.getFullYear() + e2 * t2);
      }) : null;
      const nv = tv.range, ev = Vg((t2) => {
        t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
      }, (t2, n2) => {
        t2.setUTCFullYear(t2.getUTCFullYear() + n2);
      }, (t2, n2) => n2.getUTCFullYear() - t2.getUTCFullYear(), (t2) => t2.getUTCFullYear());
      ev.every = (t2) => isFinite(t2 = Math.floor(t2)) && t2 > 0 ? Vg((n2) => {
        n2.setUTCFullYear(Math.floor(n2.getUTCFullYear() / t2) * t2), n2.setUTCMonth(0, 1), n2.setUTCHours(0, 0, 0, 0);
      }, (n2, e2) => {
        n2.setUTCFullYear(n2.getUTCFullYear() + e2 * t2);
      }) : null;
      const rv = ev.range;
      function iv(t2, n2, e2, i2, o2, a2) {
        const u2 = [[iy, 1, Kg], [iy, 5, 5e3], [iy, 15, 15e3], [iy, 30, 3e4], [a2, 1, Qg], [a2, 5, 3e5], [a2, 15, 9e5], [a2, 30, 18e5], [o2, 1, Jg], [o2, 3, 108e5], [o2, 6, 216e5], [o2, 12, 432e5], [i2, 1, ty], [i2, 2, 1728e5], [e2, 1, ny], [n2, 1, ey], [n2, 3, 7776e6], [t2, 1, ry]];
        function c2(n3, e3, i3) {
          const o3 = Math.abs(e3 - n3) / i3, a3 = r(([, , t3]) => t3).right(u2, o3);
          if (a3 === u2.length)
            return t2.every(W(n3 / ry, e3 / ry, i3));
          if (0 === a3)
            return Wg.every(Math.max(W(n3, e3, i3), 1));
          const [c3, f2] = u2[o3 / u2[a3 - 1][2] < u2[a3][2] / o3 ? a3 - 1 : a3];
          return c3.every(f2);
        }
        return [function(t3, n3, e3) {
          const r2 = n3 < t3;
          r2 && ([t3, n3] = [n3, t3]);
          const i3 = e3 && "function" == typeof e3.range ? e3 : c2(t3, n3, e3), o3 = i3 ? i3.range(t3, +n3 + 1) : [];
          return r2 ? o3.reverse() : o3;
        }, c2];
      }
      const [ov, av] = iv(ev, Qy, Fy, _y, hy, cy), [uv, cv] = iv(tv, Zy, xy, py, sy, ay);
      function fv(t2) {
        if (0 <= t2.y && t2.y < 100) {
          var n2 = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
          return n2.setFullYear(t2.y), n2;
        }
        return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
      }
      function sv(t2) {
        if (0 <= t2.y && t2.y < 100) {
          var n2 = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
          return n2.setUTCFullYear(t2.y), n2;
        }
        return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
      }
      function lv(t2, n2, e2) {
        return { y: t2, m: n2, d: e2, H: 0, M: 0, S: 0, L: 0 };
      }
      function hv(t2) {
        var n2 = t2.dateTime, e2 = t2.date, r2 = t2.time, i2 = t2.periods, o2 = t2.days, a2 = t2.shortDays, u2 = t2.months, c2 = t2.shortMonths, f2 = mv(i2), s2 = xv(i2), l2 = mv(o2), h2 = xv(o2), d2 = mv(a2), p2 = xv(a2), g2 = mv(u2), y2 = xv(u2), v2 = mv(c2), _2 = xv(c2), b2 = { a: function(t3) {
          return a2[t3.getDay()];
        }, A: function(t3) {
          return o2[t3.getDay()];
        }, b: function(t3) {
          return c2[t3.getMonth()];
        }, B: function(t3) {
          return u2[t3.getMonth()];
        }, c: null, d: Yv, e: Yv, f: Gv, g: i_, G: a_, H: Lv, I: jv, j: Hv, L: Xv, m: Vv, M: Wv, p: function(t3) {
          return i2[+(t3.getHours() >= 12)];
        }, q: function(t3) {
          return 1 + ~~(t3.getMonth() / 3);
        }, Q: k_, s: C_, S: Zv, u: Kv, U: Qv, V: t_, w: n_, W: e_, x: null, X: null, y: r_, Y: o_, Z: u_, "%": N_ }, m2 = { a: function(t3) {
          return a2[t3.getUTCDay()];
        }, A: function(t3) {
          return o2[t3.getUTCDay()];
        }, b: function(t3) {
          return c2[t3.getUTCMonth()];
        }, B: function(t3) {
          return u2[t3.getUTCMonth()];
        }, c: null, d: c_, e: c_, f: d_, g: T_, G: S_, H: f_, I: s_, j: l_, L: h_, m: p_, M: g_, p: function(t3) {
          return i2[+(t3.getUTCHours() >= 12)];
        }, q: function(t3) {
          return 1 + ~~(t3.getUTCMonth() / 3);
        }, Q: k_, s: C_, S: y_, u: v_, U: __, V: m_, w: x_, W: w_, x: null, X: null, y: M_, Y: A_, Z: E_, "%": N_ }, x2 = { a: function(t3, n3, e3) {
          var r3 = d2.exec(n3.slice(e3));
          return r3 ? (t3.w = p2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, A: function(t3, n3, e3) {
          var r3 = l2.exec(n3.slice(e3));
          return r3 ? (t3.w = h2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, b: function(t3, n3, e3) {
          var r3 = v2.exec(n3.slice(e3));
          return r3 ? (t3.m = _2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, B: function(t3, n3, e3) {
          var r3 = g2.exec(n3.slice(e3));
          return r3 ? (t3.m = y2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, c: function(t3, e3, r3) {
          return T2(t3, n2, e3, r3);
        }, d: zv, e: zv, f: Uv, g: Nv, G: Ev, H: Dv, I: Dv, j: $v, L: qv, m: Pv, M: Rv, p: function(t3, n3, e3) {
          var r3 = f2.exec(n3.slice(e3));
          return r3 ? (t3.p = s2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, q: Cv, Q: Ov, s: Bv, S: Fv, u: Mv, U: Tv, V: Av, w: wv, W: Sv, x: function(t3, n3, r3) {
          return T2(t3, e2, n3, r3);
        }, X: function(t3, n3, e3) {
          return T2(t3, r2, n3, e3);
        }, y: Nv, Y: Ev, Z: kv, "%": Iv };
        function w2(t3, n3) {
          return function(e3) {
            var r3, i3, o3, a3 = [], u3 = -1, c3 = 0, f3 = t3.length;
            for (e3 instanceof Date || (e3 = /* @__PURE__ */ new Date(+e3)); ++u3 < f3; )
              37 === t3.charCodeAt(u3) && (a3.push(t3.slice(c3, u3)), null != (i3 = pv[r3 = t3.charAt(++u3)]) ? r3 = t3.charAt(++u3) : i3 = "e" === r3 ? " " : "0", (o3 = n3[r3]) && (r3 = o3(e3, i3)), a3.push(r3), c3 = u3 + 1);
            return a3.push(t3.slice(c3, u3)), a3.join("");
          };
        }
        function M2(t3, n3) {
          return function(e3) {
            var r3, i3, o3 = lv(1900, void 0, 1);
            if (T2(o3, t3, e3 += "", 0) != e3.length)
              return null;
            if ("Q" in o3)
              return new Date(o3.Q);
            if ("s" in o3)
              return new Date(1e3 * o3.s + ("L" in o3 ? o3.L : 0));
            if (n3 && !("Z" in o3) && (o3.Z = 0), "p" in o3 && (o3.H = o3.H % 12 + 12 * o3.p), void 0 === o3.m && (o3.m = "q" in o3 ? o3.q : 0), "V" in o3) {
              if (o3.V < 1 || o3.V > 53)
                return null;
              "w" in o3 || (o3.w = 1), "Z" in o3 ? (i3 = (r3 = sv(lv(o3.y, 0, 1))).getUTCDay(), r3 = i3 > 4 || 0 === i3 ? qy.ceil(r3) : qy(r3), r3 = yy.offset(r3, 7 * (o3.V - 1)), o3.y = r3.getUTCFullYear(), o3.m = r3.getUTCMonth(), o3.d = r3.getUTCDate() + (o3.w + 6) % 7) : (i3 = (r3 = fv(lv(o3.y, 0, 1))).getDay(), r3 = i3 > 4 || 0 === i3 ? wy.ceil(r3) : wy(r3), r3 = py.offset(r3, 7 * (o3.V - 1)), o3.y = r3.getFullYear(), o3.m = r3.getMonth(), o3.d = r3.getDate() + (o3.w + 6) % 7);
            } else
              ("W" in o3 || "U" in o3) && ("w" in o3 || (o3.w = "u" in o3 ? o3.u % 7 : "W" in o3 ? 1 : 0), i3 = "Z" in o3 ? sv(lv(o3.y, 0, 1)).getUTCDay() : fv(lv(o3.y, 0, 1)).getDay(), o3.m = 0, o3.d = "W" in o3 ? (o3.w + 6) % 7 + 7 * o3.W - (i3 + 5) % 7 : o3.w + 7 * o3.U - (i3 + 6) % 7);
            return "Z" in o3 ? (o3.H += o3.Z / 100 | 0, o3.M += o3.Z % 100, sv(o3)) : fv(o3);
          };
        }
        function T2(t3, n3, e3, r3) {
          for (var i3, o3, a3 = 0, u3 = n3.length, c3 = e3.length; a3 < u3; ) {
            if (r3 >= c3)
              return -1;
            if (37 === (i3 = n3.charCodeAt(a3++))) {
              if (i3 = n3.charAt(a3++), !(o3 = x2[i3 in pv ? n3.charAt(a3++) : i3]) || (r3 = o3(t3, e3, r3)) < 0)
                return -1;
            } else if (i3 != e3.charCodeAt(r3++))
              return -1;
          }
          return r3;
        }
        return b2.x = w2(e2, b2), b2.X = w2(r2, b2), b2.c = w2(n2, b2), m2.x = w2(e2, m2), m2.X = w2(r2, m2), m2.c = w2(n2, m2), { format: function(t3) {
          var n3 = w2(t3 += "", b2);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, parse: function(t3) {
          var n3 = M2(t3 += "", false);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, utcFormat: function(t3) {
          var n3 = w2(t3 += "", m2);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, utcParse: function(t3) {
          var n3 = M2(t3 += "", true);
          return n3.toString = function() {
            return t3;
          }, n3;
        } };
      }
      var dv, pv = { "-": "", _: " ", 0: "0" }, gv = /^\s*\d+/, yv = /^%/, vv = /[\\^$*+?|[\]().{}]/g;
      function _v(t2, n2, e2) {
        var r2 = t2 < 0 ? "-" : "", i2 = (r2 ? -t2 : t2) + "", o2 = i2.length;
        return r2 + (o2 < e2 ? new Array(e2 - o2 + 1).join(n2) + i2 : i2);
      }
      function bv(t2) {
        return t2.replace(vv, "\\$&");
      }
      function mv(t2) {
        return new RegExp("^(?:" + t2.map(bv).join("|") + ")", "i");
      }
      function xv(t2) {
        return new Map(t2.map((t3, n2) => [t3.toLowerCase(), n2]));
      }
      function wv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.w = +r2[0], e2 + r2[0].length) : -1;
      }
      function Mv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.u = +r2[0], e2 + r2[0].length) : -1;
      }
      function Tv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.U = +r2[0], e2 + r2[0].length) : -1;
      }
      function Av(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.V = +r2[0], e2 + r2[0].length) : -1;
      }
      function Sv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.W = +r2[0], e2 + r2[0].length) : -1;
      }
      function Ev(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 4));
        return r2 ? (t2.y = +r2[0], e2 + r2[0].length) : -1;
      }
      function Nv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.y = +r2[0] + (+r2[0] > 68 ? 1900 : 2e3), e2 + r2[0].length) : -1;
      }
      function kv(t2, n2, e2) {
        var r2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n2.slice(e2, e2 + 6));
        return r2 ? (t2.Z = r2[1] ? 0 : -(r2[2] + (r2[3] || "00")), e2 + r2[0].length) : -1;
      }
      function Cv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.q = 3 * r2[0] - 3, e2 + r2[0].length) : -1;
      }
      function Pv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.m = r2[0] - 1, e2 + r2[0].length) : -1;
      }
      function zv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.d = +r2[0], e2 + r2[0].length) : -1;
      }
      function $v(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 3));
        return r2 ? (t2.m = 0, t2.d = +r2[0], e2 + r2[0].length) : -1;
      }
      function Dv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.H = +r2[0], e2 + r2[0].length) : -1;
      }
      function Rv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.M = +r2[0], e2 + r2[0].length) : -1;
      }
      function Fv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.S = +r2[0], e2 + r2[0].length) : -1;
      }
      function qv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 3));
        return r2 ? (t2.L = +r2[0], e2 + r2[0].length) : -1;
      }
      function Uv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2, e2 + 6));
        return r2 ? (t2.L = Math.floor(r2[0] / 1e3), e2 + r2[0].length) : -1;
      }
      function Iv(t2, n2, e2) {
        var r2 = yv.exec(n2.slice(e2, e2 + 1));
        return r2 ? e2 + r2[0].length : -1;
      }
      function Ov(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2));
        return r2 ? (t2.Q = +r2[0], e2 + r2[0].length) : -1;
      }
      function Bv(t2, n2, e2) {
        var r2 = gv.exec(n2.slice(e2));
        return r2 ? (t2.s = +r2[0], e2 + r2[0].length) : -1;
      }
      function Yv(t2, n2) {
        return _v(t2.getDate(), n2, 2);
      }
      function Lv(t2, n2) {
        return _v(t2.getHours(), n2, 2);
      }
      function jv(t2, n2) {
        return _v(t2.getHours() % 12 || 12, n2, 2);
      }
      function Hv(t2, n2) {
        return _v(1 + py.count(tv(t2), t2), n2, 3);
      }
      function Xv(t2, n2) {
        return _v(t2.getMilliseconds(), n2, 3);
      }
      function Gv(t2, n2) {
        return Xv(t2, n2) + "000";
      }
      function Vv(t2, n2) {
        return _v(t2.getMonth() + 1, n2, 2);
      }
      function Wv(t2, n2) {
        return _v(t2.getMinutes(), n2, 2);
      }
      function Zv(t2, n2) {
        return _v(t2.getSeconds(), n2, 2);
      }
      function Kv(t2) {
        var n2 = t2.getDay();
        return 0 === n2 ? 7 : n2;
      }
      function Qv(t2, n2) {
        return _v(xy.count(tv(t2) - 1, t2), n2, 2);
      }
      function Jv(t2) {
        var n2 = t2.getDay();
        return n2 >= 4 || 0 === n2 ? Ay(t2) : Ay.ceil(t2);
      }
      function t_(t2, n2) {
        return t2 = Jv(t2), _v(Ay.count(tv(t2), t2) + (4 === tv(t2).getDay()), n2, 2);
      }
      function n_(t2) {
        return t2.getDay();
      }
      function e_(t2, n2) {
        return _v(wy.count(tv(t2) - 1, t2), n2, 2);
      }
      function r_(t2, n2) {
        return _v(t2.getFullYear() % 100, n2, 2);
      }
      function i_(t2, n2) {
        return _v((t2 = Jv(t2)).getFullYear() % 100, n2, 2);
      }
      function o_(t2, n2) {
        return _v(t2.getFullYear() % 1e4, n2, 4);
      }
      function a_(t2, n2) {
        var e2 = t2.getDay();
        return _v((t2 = e2 >= 4 || 0 === e2 ? Ay(t2) : Ay.ceil(t2)).getFullYear() % 1e4, n2, 4);
      }
      function u_(t2) {
        var n2 = t2.getTimezoneOffset();
        return (n2 > 0 ? "-" : (n2 *= -1, "+")) + _v(n2 / 60 | 0, "0", 2) + _v(n2 % 60, "0", 2);
      }
      function c_(t2, n2) {
        return _v(t2.getUTCDate(), n2, 2);
      }
      function f_(t2, n2) {
        return _v(t2.getUTCHours(), n2, 2);
      }
      function s_(t2, n2) {
        return _v(t2.getUTCHours() % 12 || 12, n2, 2);
      }
      function l_(t2, n2) {
        return _v(1 + yy.count(ev(t2), t2), n2, 3);
      }
      function h_(t2, n2) {
        return _v(t2.getUTCMilliseconds(), n2, 3);
      }
      function d_(t2, n2) {
        return h_(t2, n2) + "000";
      }
      function p_(t2, n2) {
        return _v(t2.getUTCMonth() + 1, n2, 2);
      }
      function g_(t2, n2) {
        return _v(t2.getUTCMinutes(), n2, 2);
      }
      function y_(t2, n2) {
        return _v(t2.getUTCSeconds(), n2, 2);
      }
      function v_(t2) {
        var n2 = t2.getUTCDay();
        return 0 === n2 ? 7 : n2;
      }
      function __(t2, n2) {
        return _v(Fy.count(ev(t2) - 1, t2), n2, 2);
      }
      function b_(t2) {
        var n2 = t2.getUTCDay();
        return n2 >= 4 || 0 === n2 ? Oy(t2) : Oy.ceil(t2);
      }
      function m_(t2, n2) {
        return t2 = b_(t2), _v(Oy.count(ev(t2), t2) + (4 === ev(t2).getUTCDay()), n2, 2);
      }
      function x_(t2) {
        return t2.getUTCDay();
      }
      function w_(t2, n2) {
        return _v(qy.count(ev(t2) - 1, t2), n2, 2);
      }
      function M_(t2, n2) {
        return _v(t2.getUTCFullYear() % 100, n2, 2);
      }
      function T_(t2, n2) {
        return _v((t2 = b_(t2)).getUTCFullYear() % 100, n2, 2);
      }
      function A_(t2, n2) {
        return _v(t2.getUTCFullYear() % 1e4, n2, 4);
      }
      function S_(t2, n2) {
        var e2 = t2.getUTCDay();
        return _v((t2 = e2 >= 4 || 0 === e2 ? Oy(t2) : Oy.ceil(t2)).getUTCFullYear() % 1e4, n2, 4);
      }
      function E_() {
        return "+0000";
      }
      function N_() {
        return "%";
      }
      function k_(t2) {
        return +t2;
      }
      function C_(t2) {
        return Math.floor(+t2 / 1e3);
      }
      function P_(n2) {
        return dv = hv(n2), t.timeFormat = dv.format, t.timeParse = dv.parse, t.utcFormat = dv.utcFormat, t.utcParse = dv.utcParse, dv;
      }
      t.timeFormat = void 0, t.timeParse = void 0, t.utcFormat = void 0, t.utcParse = void 0, P_({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
      var z_ = "%Y-%m-%dT%H:%M:%S.%LZ";
      var $_ = Date.prototype.toISOString ? function(t2) {
        return t2.toISOString();
      } : t.utcFormat(z_), D_ = $_;
      var R_ = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? function(t2) {
        var n2 = new Date(t2);
        return isNaN(n2) ? null : n2;
      } : t.utcParse(z_), F_ = R_;
      function q_(t2) {
        return new Date(t2);
      }
      function U_(t2) {
        return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
      }
      function I_(t2, n2, e2, r2, i2, o2, a2, u2, c2, f2) {
        var s2 = Sg(), l2 = s2.invert, h2 = s2.domain, d2 = f2(".%L"), p2 = f2(":%S"), g2 = f2("%I:%M"), y2 = f2("%I %p"), v2 = f2("%a %d"), _2 = f2("%b %d"), b2 = f2("%B"), m2 = f2("%Y");
        function x2(t3) {
          return (c2(t3) < t3 ? d2 : u2(t3) < t3 ? p2 : a2(t3) < t3 ? g2 : o2(t3) < t3 ? y2 : r2(t3) < t3 ? i2(t3) < t3 ? v2 : _2 : e2(t3) < t3 ? b2 : m2)(t3);
        }
        return s2.invert = function(t3) {
          return new Date(l2(t3));
        }, s2.domain = function(t3) {
          return arguments.length ? h2(Array.from(t3, U_)) : h2().map(q_);
        }, s2.ticks = function(n3) {
          var e3 = h2();
          return t2(e3[0], e3[e3.length - 1], null == n3 ? 10 : n3);
        }, s2.tickFormat = function(t3, n3) {
          return null == n3 ? x2 : f2(n3);
        }, s2.nice = function(t3) {
          var e3 = h2();
          return t3 && "function" == typeof t3.range || (t3 = n2(e3[0], e3[e3.length - 1], null == t3 ? 10 : t3)), t3 ? h2(kg(e3, t3)) : s2;
        }, s2.copy = function() {
          return Tg(s2, I_(t2, n2, e2, r2, i2, o2, a2, u2, c2, f2));
        }, s2;
      }
      function O_() {
        var t2, n2, e2, r2, i2, o2 = 0, a2 = 1, u2 = mg, c2 = false;
        function f2(n3) {
          return null == n3 || isNaN(n3 = +n3) ? i2 : u2(0 === e2 ? 0.5 : (n3 = (r2(n3) - t2) * e2, c2 ? Math.max(0, Math.min(1, n3)) : n3));
        }
        function s2(t3) {
          return function(n3) {
            var e3, r3;
            return arguments.length ? ([e3, r3] = n3, u2 = t3(e3, r3), f2) : [u2(0), u2(1)];
          };
        }
        return f2.domain = function(i3) {
          return arguments.length ? ([o2, a2] = i3, t2 = r2(o2 = +o2), n2 = r2(a2 = +a2), e2 = t2 === n2 ? 0 : 1 / (n2 - t2), f2) : [o2, a2];
        }, f2.clamp = function(t3) {
          return arguments.length ? (c2 = !!t3, f2) : c2;
        }, f2.interpolator = function(t3) {
          return arguments.length ? (u2 = t3, f2) : u2;
        }, f2.range = s2(Gr), f2.rangeRound = s2(Vr), f2.unknown = function(t3) {
          return arguments.length ? (i2 = t3, f2) : i2;
        }, function(i3) {
          return r2 = i3, t2 = i3(o2), n2 = i3(a2), e2 = t2 === n2 ? 0 : 1 / (n2 - t2), f2;
        };
      }
      function B_(t2, n2) {
        return n2.domain(t2.domain()).interpolator(t2.interpolator()).clamp(t2.clamp()).unknown(t2.unknown());
      }
      function Y_() {
        var t2 = Lg(O_());
        return t2.copy = function() {
          return B_(t2, Y_()).exponent(t2.exponent());
        }, dg.apply(t2, arguments);
      }
      function L_() {
        var t2, n2, e2, r2, i2, o2, a2, u2 = 0, c2 = 0.5, f2 = 1, s2 = 1, l2 = mg, h2 = false;
        function d2(t3) {
          return isNaN(t3 = +t3) ? a2 : (t3 = 0.5 + ((t3 = +o2(t3)) - n2) * (s2 * t3 < s2 * n2 ? r2 : i2), l2(h2 ? Math.max(0, Math.min(1, t3)) : t3));
        }
        function p2(t3) {
          return function(n3) {
            var e3, r3, i3;
            return arguments.length ? ([e3, r3, i3] = n3, l2 = di(t3, [e3, r3, i3]), d2) : [l2(0), l2(0.5), l2(1)];
          };
        }
        return d2.domain = function(a3) {
          return arguments.length ? ([u2, c2, f2] = a3, t2 = o2(u2 = +u2), n2 = o2(c2 = +c2), e2 = o2(f2 = +f2), r2 = t2 === n2 ? 0 : 0.5 / (n2 - t2), i2 = n2 === e2 ? 0 : 0.5 / (e2 - n2), s2 = n2 < t2 ? -1 : 1, d2) : [u2, c2, f2];
        }, d2.clamp = function(t3) {
          return arguments.length ? (h2 = !!t3, d2) : h2;
        }, d2.interpolator = function(t3) {
          return arguments.length ? (l2 = t3, d2) : l2;
        }, d2.range = p2(Gr), d2.rangeRound = p2(Vr), d2.unknown = function(t3) {
          return arguments.length ? (a2 = t3, d2) : a2;
        }, function(a3) {
          return o2 = a3, t2 = a3(u2), n2 = a3(c2), e2 = a3(f2), r2 = t2 === n2 ? 0 : 0.5 / (n2 - t2), i2 = n2 === e2 ? 0 : 0.5 / (e2 - n2), s2 = n2 < t2 ? -1 : 1, d2;
        };
      }
      function j_() {
        var t2 = Lg(L_());
        return t2.copy = function() {
          return B_(t2, j_()).exponent(t2.exponent());
        }, dg.apply(t2, arguments);
      }
      function H_(t2) {
        for (var n2 = t2.length / 6 | 0, e2 = new Array(n2), r2 = 0; r2 < n2; )
          e2[r2] = "#" + t2.slice(6 * r2, 6 * ++r2);
        return e2;
      }
      var X_ = H_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), G_ = H_("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), V_ = H_("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), W_ = H_("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Z_ = H_("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), K_ = H_("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Q_ = H_("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), J_ = H_("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), tb = H_("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), nb = H_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), eb = (t2) => Fr(t2[t2.length - 1]), rb = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(H_), ib = eb(rb), ob = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(H_), ab = eb(ob), ub = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(H_), cb = eb(ub), fb = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(H_), sb = eb(fb), lb = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(H_), hb = eb(lb), db = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(H_), pb = eb(db), gb = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(H_), yb = eb(gb), vb = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(H_), _b = eb(vb), bb = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(H_), mb = eb(bb), xb = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(H_), wb = eb(xb), Mb = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(H_), Tb = eb(Mb), Ab = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(H_), Sb = eb(Ab), Eb = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(H_), Nb = eb(Eb), kb = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(H_), Cb = eb(kb), Pb = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(H_), zb = eb(Pb), $b = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(H_), Db = eb($b), Rb = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(H_), Fb = eb(Rb), qb = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(H_), Ub = eb(qb), Ib = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(H_), Ob = eb(Ib), Bb = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(H_), Yb = eb(Bb), Lb = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(H_), jb = eb(Lb), Hb = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(H_), Xb = eb(Hb), Gb = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(H_), Vb = eb(Gb), Wb = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(H_), Zb = eb(Wb), Kb = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(H_), Qb = eb(Kb), Jb = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(H_), tm = eb(Jb), nm = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(H_), em = eb(nm);
      var rm = hi(Tr(300, 0.5, 0), Tr(-240, 0.5, 1)), im = hi(Tr(-100, 0.75, 0.35), Tr(80, 1.5, 0.8)), om = hi(Tr(260, 0.75, 0.35), Tr(80, 1.5, 0.8)), am = Tr();
      var um = Fe(), cm = Math.PI / 3, fm = 2 * Math.PI / 3;
      function sm(t2) {
        var n2 = t2.length;
        return function(e2) {
          return t2[Math.max(0, Math.min(n2 - 1, Math.floor(e2 * n2)))];
        };
      }
      var lm = sm(H_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), hm = sm(H_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), dm = sm(H_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), pm = sm(H_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
      function gm(t2) {
        return function() {
          return t2;
        };
      }
      const ym = Math.abs, vm = Math.atan2, _m = Math.cos, bm = Math.max, mm = Math.min, xm = Math.sin, wm = Math.sqrt, Mm = 1e-12, Tm = Math.PI, Am = Tm / 2, Sm = 2 * Tm;
      function Em(t2) {
        return t2 >= 1 ? Am : t2 <= -1 ? -Am : Math.asin(t2);
      }
      function Nm(t2) {
        let n2 = 3;
        return t2.digits = function(e2) {
          if (!arguments.length)
            return n2;
          if (null == e2)
            n2 = null;
          else {
            const t3 = Math.floor(e2);
            if (!(t3 >= 0))
              throw new RangeError(`invalid digits: ${e2}`);
            n2 = t3;
          }
          return t2;
        }, () => new Ua(n2);
      }
      function km(t2) {
        return t2.innerRadius;
      }
      function Cm(t2) {
        return t2.outerRadius;
      }
      function Pm(t2) {
        return t2.startAngle;
      }
      function zm(t2) {
        return t2.endAngle;
      }
      function $m(t2) {
        return t2 && t2.padAngle;
      }
      function Dm(t2, n2, e2, r2, i2, o2, a2) {
        var u2 = t2 - e2, c2 = n2 - r2, f2 = (a2 ? o2 : -o2) / wm(u2 * u2 + c2 * c2), s2 = f2 * c2, l2 = -f2 * u2, h2 = t2 + s2, d2 = n2 + l2, p2 = e2 + s2, g2 = r2 + l2, y2 = (h2 + p2) / 2, v2 = (d2 + g2) / 2, _2 = p2 - h2, b2 = g2 - d2, m2 = _2 * _2 + b2 * b2, x2 = i2 - o2, w2 = h2 * g2 - p2 * d2, M2 = (b2 < 0 ? -1 : 1) * wm(bm(0, x2 * x2 * m2 - w2 * w2)), T2 = (w2 * b2 - _2 * M2) / m2, A2 = (-w2 * _2 - b2 * M2) / m2, S2 = (w2 * b2 + _2 * M2) / m2, E2 = (-w2 * _2 + b2 * M2) / m2, N2 = T2 - y2, k2 = A2 - v2, C2 = S2 - y2, P2 = E2 - v2;
        return N2 * N2 + k2 * k2 > C2 * C2 + P2 * P2 && (T2 = S2, A2 = E2), { cx: T2, cy: A2, x01: -s2, y01: -l2, x11: T2 * (i2 / x2 - 1), y11: A2 * (i2 / x2 - 1) };
      }
      var Rm = Array.prototype.slice;
      function Fm(t2) {
        return "object" == typeof t2 && "length" in t2 ? t2 : Array.from(t2);
      }
      function qm(t2) {
        this._context = t2;
      }
      function Um(t2) {
        return new qm(t2);
      }
      function Im(t2) {
        return t2[0];
      }
      function Om(t2) {
        return t2[1];
      }
      function Bm(t2, n2) {
        var e2 = gm(true), r2 = null, i2 = Um, o2 = null, a2 = Nm(u2);
        function u2(u3) {
          var c2, f2, s2, l2 = (u3 = Fm(u3)).length, h2 = false;
          for (null == r2 && (o2 = i2(s2 = a2())), c2 = 0; c2 <= l2; ++c2)
            !(c2 < l2 && e2(f2 = u3[c2], c2, u3)) === h2 && ((h2 = !h2) ? o2.lineStart() : o2.lineEnd()), h2 && o2.point(+t2(f2, c2, u3), +n2(f2, c2, u3));
          if (s2)
            return o2 = null, s2 + "" || null;
        }
        return t2 = "function" == typeof t2 ? t2 : void 0 === t2 ? Im : gm(t2), n2 = "function" == typeof n2 ? n2 : void 0 === n2 ? Om : gm(n2), u2.x = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(+n3), u2) : t2;
        }, u2.y = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : gm(+t3), u2) : n2;
        }, u2.defined = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : gm(!!t3), u2) : e2;
        }, u2.curve = function(t3) {
          return arguments.length ? (i2 = t3, null != r2 && (o2 = i2(r2)), u2) : i2;
        }, u2.context = function(t3) {
          return arguments.length ? (null == t3 ? r2 = o2 = null : o2 = i2(r2 = t3), u2) : r2;
        }, u2;
      }
      function Ym(t2, n2, e2) {
        var r2 = null, i2 = gm(true), o2 = null, a2 = Um, u2 = null, c2 = Nm(f2);
        function f2(f3) {
          var s3, l2, h2, d2, p2, g2 = (f3 = Fm(f3)).length, y2 = false, v2 = new Array(g2), _2 = new Array(g2);
          for (null == o2 && (u2 = a2(p2 = c2())), s3 = 0; s3 <= g2; ++s3) {
            if (!(s3 < g2 && i2(d2 = f3[s3], s3, f3)) === y2)
              if (y2 = !y2)
                l2 = s3, u2.areaStart(), u2.lineStart();
              else {
                for (u2.lineEnd(), u2.lineStart(), h2 = s3 - 1; h2 >= l2; --h2)
                  u2.point(v2[h2], _2[h2]);
                u2.lineEnd(), u2.areaEnd();
              }
            y2 && (v2[s3] = +t2(d2, s3, f3), _2[s3] = +n2(d2, s3, f3), u2.point(r2 ? +r2(d2, s3, f3) : v2[s3], e2 ? +e2(d2, s3, f3) : _2[s3]));
          }
          if (p2)
            return u2 = null, p2 + "" || null;
        }
        function s2() {
          return Bm().defined(i2).curve(a2).context(o2);
        }
        return t2 = "function" == typeof t2 ? t2 : void 0 === t2 ? Im : gm(+t2), n2 = "function" == typeof n2 ? n2 : gm(void 0 === n2 ? 0 : +n2), e2 = "function" == typeof e2 ? e2 : void 0 === e2 ? Om : gm(+e2), f2.x = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(+n3), r2 = null, f2) : t2;
        }, f2.x0 = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(+n3), f2) : t2;
        }, f2.x1 = function(t3) {
          return arguments.length ? (r2 = null == t3 ? null : "function" == typeof t3 ? t3 : gm(+t3), f2) : r2;
        }, f2.y = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : gm(+t3), e2 = null, f2) : n2;
        }, f2.y0 = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : n2;
        }, f2.y1 = function(t3) {
          return arguments.length ? (e2 = null == t3 ? null : "function" == typeof t3 ? t3 : gm(+t3), f2) : e2;
        }, f2.lineX0 = f2.lineY0 = function() {
          return s2().x(t2).y(n2);
        }, f2.lineY1 = function() {
          return s2().x(t2).y(e2);
        }, f2.lineX1 = function() {
          return s2().x(r2).y(n2);
        }, f2.defined = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : gm(!!t3), f2) : i2;
        }, f2.curve = function(t3) {
          return arguments.length ? (a2 = t3, null != o2 && (u2 = a2(o2)), f2) : a2;
        }, f2.context = function(t3) {
          return arguments.length ? (null == t3 ? o2 = u2 = null : u2 = a2(o2 = t3), f2) : o2;
        }, f2;
      }
      function Lm(t2, n2) {
        return n2 < t2 ? -1 : n2 > t2 ? 1 : n2 >= t2 ? 0 : NaN;
      }
      function jm(t2) {
        return t2;
      }
      qm.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t2, n2);
        }
      } };
      var Hm = Gm(Um);
      function Xm(t2) {
        this._curve = t2;
      }
      function Gm(t2) {
        function n2(n3) {
          return new Xm(t2(n3));
        }
        return n2._curve = t2, n2;
      }
      function Vm(t2) {
        var n2 = t2.curve;
        return t2.angle = t2.x, delete t2.x, t2.radius = t2.y, delete t2.y, t2.curve = function(t3) {
          return arguments.length ? n2(Gm(t3)) : n2()._curve;
        }, t2;
      }
      function Wm() {
        return Vm(Bm().curve(Hm));
      }
      function Zm() {
        var t2 = Ym().curve(Hm), n2 = t2.curve, e2 = t2.lineX0, r2 = t2.lineX1, i2 = t2.lineY0, o2 = t2.lineY1;
        return t2.angle = t2.x, delete t2.x, t2.startAngle = t2.x0, delete t2.x0, t2.endAngle = t2.x1, delete t2.x1, t2.radius = t2.y, delete t2.y, t2.innerRadius = t2.y0, delete t2.y0, t2.outerRadius = t2.y1, delete t2.y1, t2.lineStartAngle = function() {
          return Vm(e2());
        }, delete t2.lineX0, t2.lineEndAngle = function() {
          return Vm(r2());
        }, delete t2.lineX1, t2.lineInnerRadius = function() {
          return Vm(i2());
        }, delete t2.lineY0, t2.lineOuterRadius = function() {
          return Vm(o2());
        }, delete t2.lineY1, t2.curve = function(t3) {
          return arguments.length ? n2(Gm(t3)) : n2()._curve;
        }, t2;
      }
      function Km(t2, n2) {
        return [(n2 = +n2) * Math.cos(t2 -= Math.PI / 2), n2 * Math.sin(t2)];
      }
      Xm.prototype = { areaStart: function() {
        this._curve.areaStart();
      }, areaEnd: function() {
        this._curve.areaEnd();
      }, lineStart: function() {
        this._curve.lineStart();
      }, lineEnd: function() {
        this._curve.lineEnd();
      }, point: function(t2, n2) {
        this._curve.point(n2 * Math.sin(t2), n2 * -Math.cos(t2));
      } };
      class Qm {
        constructor(t2, n2) {
          this._context = t2, this._x = n2;
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        }
        point(t2, n2) {
          switch (t2 = +t2, n2 = +n2, this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
              break;
            case 1:
              this._point = 2;
            default:
              this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t2) / 2, this._y0, this._x0, n2, t2, n2) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n2) / 2, t2, this._y0, t2, n2);
          }
          this._x0 = t2, this._y0 = n2;
        }
      }
      class Jm {
        constructor(t2) {
          this._context = t2;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
        }
        point(t2, n2) {
          if (t2 = +t2, n2 = +n2, 0 === this._point)
            this._point = 1;
          else {
            const e2 = Km(this._x0, this._y0), r2 = Km(this._x0, this._y0 = (this._y0 + n2) / 2), i2 = Km(t2, this._y0), o2 = Km(t2, n2);
            this._context.moveTo(...e2), this._context.bezierCurveTo(...r2, ...i2, ...o2);
          }
          this._x0 = t2, this._y0 = n2;
        }
      }
      function tx(t2) {
        return new Qm(t2, true);
      }
      function nx(t2) {
        return new Qm(t2, false);
      }
      function ex(t2) {
        return new Jm(t2);
      }
      function rx(t2) {
        return t2.source;
      }
      function ix(t2) {
        return t2.target;
      }
      function ox(t2) {
        let n2 = rx, e2 = ix, r2 = Im, i2 = Om, o2 = null, a2 = null, u2 = Nm(c2);
        function c2() {
          let c3;
          const f2 = Rm.call(arguments), s2 = n2.apply(this, f2), l2 = e2.apply(this, f2);
          if (null == o2 && (a2 = t2(c3 = u2())), a2.lineStart(), f2[0] = s2, a2.point(+r2.apply(this, f2), +i2.apply(this, f2)), f2[0] = l2, a2.point(+r2.apply(this, f2), +i2.apply(this, f2)), a2.lineEnd(), c3)
            return a2 = null, c3 + "" || null;
        }
        return c2.source = function(t3) {
          return arguments.length ? (n2 = t3, c2) : n2;
        }, c2.target = function(t3) {
          return arguments.length ? (e2 = t3, c2) : e2;
        }, c2.x = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : gm(+t3), c2) : r2;
        }, c2.y = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : gm(+t3), c2) : i2;
        }, c2.context = function(n3) {
          return arguments.length ? (null == n3 ? o2 = a2 = null : a2 = t2(o2 = n3), c2) : o2;
        }, c2;
      }
      const ax = wm(3);
      var ux = { draw(t2, n2) {
        const e2 = 0.59436 * wm(n2 + mm(n2 / 28, 0.75)), r2 = e2 / 2, i2 = r2 * ax;
        t2.moveTo(0, e2), t2.lineTo(0, -e2), t2.moveTo(-i2, -r2), t2.lineTo(i2, r2), t2.moveTo(-i2, r2), t2.lineTo(i2, -r2);
      } }, cx = { draw(t2, n2) {
        const e2 = wm(n2 / Tm);
        t2.moveTo(e2, 0), t2.arc(0, 0, e2, 0, Sm);
      } }, fx = { draw(t2, n2) {
        const e2 = wm(n2 / 5) / 2;
        t2.moveTo(-3 * e2, -e2), t2.lineTo(-e2, -e2), t2.lineTo(-e2, -3 * e2), t2.lineTo(e2, -3 * e2), t2.lineTo(e2, -e2), t2.lineTo(3 * e2, -e2), t2.lineTo(3 * e2, e2), t2.lineTo(e2, e2), t2.lineTo(e2, 3 * e2), t2.lineTo(-e2, 3 * e2), t2.lineTo(-e2, e2), t2.lineTo(-3 * e2, e2), t2.closePath();
      } };
      const sx = wm(1 / 3), lx = 2 * sx;
      var hx = { draw(t2, n2) {
        const e2 = wm(n2 / lx), r2 = e2 * sx;
        t2.moveTo(0, -e2), t2.lineTo(r2, 0), t2.lineTo(0, e2), t2.lineTo(-r2, 0), t2.closePath();
      } }, dx = { draw(t2, n2) {
        const e2 = 0.62625 * wm(n2);
        t2.moveTo(0, -e2), t2.lineTo(e2, 0), t2.lineTo(0, e2), t2.lineTo(-e2, 0), t2.closePath();
      } }, px = { draw(t2, n2) {
        const e2 = 0.87559 * wm(n2 - mm(n2 / 7, 2));
        t2.moveTo(-e2, 0), t2.lineTo(e2, 0), t2.moveTo(0, e2), t2.lineTo(0, -e2);
      } }, gx = { draw(t2, n2) {
        const e2 = wm(n2), r2 = -e2 / 2;
        t2.rect(r2, r2, e2, e2);
      } }, yx = { draw(t2, n2) {
        const e2 = 0.4431 * wm(n2);
        t2.moveTo(e2, e2), t2.lineTo(e2, -e2), t2.lineTo(-e2, -e2), t2.lineTo(-e2, e2), t2.closePath();
      } };
      const vx = xm(Tm / 10) / xm(7 * Tm / 10), _x = xm(Sm / 10) * vx, bx = -_m(Sm / 10) * vx;
      var mx = { draw(t2, n2) {
        const e2 = wm(0.8908130915292852 * n2), r2 = _x * e2, i2 = bx * e2;
        t2.moveTo(0, -e2), t2.lineTo(r2, i2);
        for (let n3 = 1; n3 < 5; ++n3) {
          const o2 = Sm * n3 / 5, a2 = _m(o2), u2 = xm(o2);
          t2.lineTo(u2 * e2, -a2 * e2), t2.lineTo(a2 * r2 - u2 * i2, u2 * r2 + a2 * i2);
        }
        t2.closePath();
      } };
      const xx = wm(3);
      var wx = { draw(t2, n2) {
        const e2 = -wm(n2 / (3 * xx));
        t2.moveTo(0, 2 * e2), t2.lineTo(-xx * e2, -e2), t2.lineTo(xx * e2, -e2), t2.closePath();
      } };
      const Mx = wm(3);
      var Tx = { draw(t2, n2) {
        const e2 = 0.6824 * wm(n2), r2 = e2 / 2, i2 = e2 * Mx / 2;
        t2.moveTo(0, -e2), t2.lineTo(i2, r2), t2.lineTo(-i2, r2), t2.closePath();
      } };
      const Ax = -0.5, Sx = wm(3) / 2, Ex = 1 / wm(12), Nx = 3 * (Ex / 2 + 1);
      var kx = { draw(t2, n2) {
        const e2 = wm(n2 / Nx), r2 = e2 / 2, i2 = e2 * Ex, o2 = r2, a2 = e2 * Ex + e2, u2 = -o2, c2 = a2;
        t2.moveTo(r2, i2), t2.lineTo(o2, a2), t2.lineTo(u2, c2), t2.lineTo(Ax * r2 - Sx * i2, Sx * r2 + Ax * i2), t2.lineTo(Ax * o2 - Sx * a2, Sx * o2 + Ax * a2), t2.lineTo(Ax * u2 - Sx * c2, Sx * u2 + Ax * c2), t2.lineTo(Ax * r2 + Sx * i2, Ax * i2 - Sx * r2), t2.lineTo(Ax * o2 + Sx * a2, Ax * a2 - Sx * o2), t2.lineTo(Ax * u2 + Sx * c2, Ax * c2 - Sx * u2), t2.closePath();
      } }, Cx = { draw(t2, n2) {
        const e2 = 0.6189 * wm(n2 - mm(n2 / 6, 1.7));
        t2.moveTo(-e2, -e2), t2.lineTo(e2, e2), t2.moveTo(-e2, e2), t2.lineTo(e2, -e2);
      } };
      const Px = [cx, fx, hx, gx, mx, wx, kx], zx = [cx, px, Cx, Tx, ux, yx, dx];
      function $x() {
      }
      function Dx(t2, n2, e2) {
        t2._context.bezierCurveTo((2 * t2._x0 + t2._x1) / 3, (2 * t2._y0 + t2._y1) / 3, (t2._x0 + 2 * t2._x1) / 3, (t2._y0 + 2 * t2._y1) / 3, (t2._x0 + 4 * t2._x1 + n2) / 6, (t2._y0 + 4 * t2._y1 + e2) / 6);
      }
      function Rx(t2) {
        this._context = t2;
      }
      function Fx(t2) {
        this._context = t2;
      }
      function qx(t2) {
        this._context = t2;
      }
      function Ux(t2, n2) {
        this._basis = new Rx(t2), this._beta = n2;
      }
      Rx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 3:
            Dx(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Dx(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      } }, Fx.prototype = { areaStart: $x, areaEnd: $x, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        }
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._x2 = t2, this._y2 = n2;
            break;
          case 1:
            this._point = 2, this._x3 = t2, this._y3 = n2;
            break;
          case 2:
            this._point = 3, this._x4 = t2, this._y4 = n2, this._context.moveTo((this._x0 + 4 * this._x1 + t2) / 6, (this._y0 + 4 * this._y1 + n2) / 6);
            break;
          default:
            Dx(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      } }, qx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e2 = (this._x0 + 4 * this._x1 + t2) / 6, r2 = (this._y0 + 4 * this._y1 + n2) / 6;
            this._line ? this._context.lineTo(e2, r2) : this._context.moveTo(e2, r2);
            break;
          case 3:
            this._point = 4;
          default:
            Dx(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      } }, Ux.prototype = { lineStart: function() {
        this._x = [], this._y = [], this._basis.lineStart();
      }, lineEnd: function() {
        var t2 = this._x, n2 = this._y, e2 = t2.length - 1;
        if (e2 > 0)
          for (var r2, i2 = t2[0], o2 = n2[0], a2 = t2[e2] - i2, u2 = n2[e2] - o2, c2 = -1; ++c2 <= e2; )
            r2 = c2 / e2, this._basis.point(this._beta * t2[c2] + (1 - this._beta) * (i2 + r2 * a2), this._beta * n2[c2] + (1 - this._beta) * (o2 + r2 * u2));
        this._x = this._y = null, this._basis.lineEnd();
      }, point: function(t2, n2) {
        this._x.push(+t2), this._y.push(+n2);
      } };
      var Ix = function t2(n2) {
        function e2(t3) {
          return 1 === n2 ? new Rx(t3) : new Ux(t3, n2);
        }
        return e2.beta = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.85);
      function Ox(t2, n2, e2) {
        t2._context.bezierCurveTo(t2._x1 + t2._k * (t2._x2 - t2._x0), t2._y1 + t2._k * (t2._y2 - t2._y0), t2._x2 + t2._k * (t2._x1 - n2), t2._y2 + t2._k * (t2._y1 - e2), t2._x2, t2._y2);
      }
      function Bx(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      Bx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            Ox(this, this._x1, this._y1);
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2, this._x1 = t2, this._y1 = n2;
            break;
          case 2:
            this._point = 3;
          default:
            Ox(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var Yx = function t2(n2) {
        function e2(t3) {
          return new Bx(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function Lx(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      Lx.prototype = { areaStart: $x, areaEnd: $x, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._x3 = t2, this._y3 = n2;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t2, this._y4 = n2);
            break;
          case 2:
            this._point = 3, this._x5 = t2, this._y5 = n2;
            break;
          default:
            Ox(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var jx = function t2(n2) {
        function e2(t3) {
          return new Lx(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function Hx(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      Hx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Ox(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var Xx = function t2(n2) {
        function e2(t3) {
          return new Hx(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function Gx(t2, n2, e2) {
        var r2 = t2._x1, i2 = t2._y1, o2 = t2._x2, a2 = t2._y2;
        if (t2._l01_a > Mm) {
          var u2 = 2 * t2._l01_2a + 3 * t2._l01_a * t2._l12_a + t2._l12_2a, c2 = 3 * t2._l01_a * (t2._l01_a + t2._l12_a);
          r2 = (r2 * u2 - t2._x0 * t2._l12_2a + t2._x2 * t2._l01_2a) / c2, i2 = (i2 * u2 - t2._y0 * t2._l12_2a + t2._y2 * t2._l01_2a) / c2;
        }
        if (t2._l23_a > Mm) {
          var f2 = 2 * t2._l23_2a + 3 * t2._l23_a * t2._l12_a + t2._l12_2a, s2 = 3 * t2._l23_a * (t2._l23_a + t2._l12_a);
          o2 = (o2 * f2 + t2._x1 * t2._l23_2a - n2 * t2._l12_2a) / s2, a2 = (a2 * f2 + t2._y1 * t2._l23_2a - e2 * t2._l12_2a) / s2;
        }
        t2._context.bezierCurveTo(r2, i2, o2, a2, t2._x2, t2._y2);
      }
      function Vx(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Vx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Gx(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var Wx = function t2(n2) {
        function e2(t3) {
          return n2 ? new Vx(t3, n2) : new Bx(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function Zx(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Zx.prototype = { areaStart: $x, areaEnd: $x, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t2, this._y3 = n2;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t2, this._y4 = n2);
            break;
          case 2:
            this._point = 3, this._x5 = t2, this._y5 = n2;
            break;
          default:
            Gx(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var Kx = function t2(n2) {
        function e2(t3) {
          return n2 ? new Zx(t3, n2) : new Lx(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function Qx(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Qx.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Gx(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      } };
      var Jx = function t2(n2) {
        function e2(t3) {
          return n2 ? new Qx(t3, n2) : new Hx(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function tw(t2) {
        this._context = t2;
      }
      function nw(t2) {
        return t2 < 0 ? -1 : 1;
      }
      function ew(t2, n2, e2) {
        var r2 = t2._x1 - t2._x0, i2 = n2 - t2._x1, o2 = (t2._y1 - t2._y0) / (r2 || i2 < 0 && -0), a2 = (e2 - t2._y1) / (i2 || r2 < 0 && -0), u2 = (o2 * i2 + a2 * r2) / (r2 + i2);
        return (nw(o2) + nw(a2)) * Math.min(Math.abs(o2), Math.abs(a2), 0.5 * Math.abs(u2)) || 0;
      }
      function rw(t2, n2) {
        var e2 = t2._x1 - t2._x0;
        return e2 ? (3 * (t2._y1 - t2._y0) / e2 - n2) / 2 : n2;
      }
      function iw(t2, n2, e2) {
        var r2 = t2._x0, i2 = t2._y0, o2 = t2._x1, a2 = t2._y1, u2 = (o2 - r2) / 3;
        t2._context.bezierCurveTo(r2 + u2, i2 + u2 * n2, o2 - u2, a2 - u2 * e2, o2, a2);
      }
      function ow(t2) {
        this._context = t2;
      }
      function aw(t2) {
        this._context = new uw(t2);
      }
      function uw(t2) {
        this._context = t2;
      }
      function cw(t2) {
        this._context = t2;
      }
      function fw(t2) {
        var n2, e2, r2 = t2.length - 1, i2 = new Array(r2), o2 = new Array(r2), a2 = new Array(r2);
        for (i2[0] = 0, o2[0] = 2, a2[0] = t2[0] + 2 * t2[1], n2 = 1; n2 < r2 - 1; ++n2)
          i2[n2] = 1, o2[n2] = 4, a2[n2] = 4 * t2[n2] + 2 * t2[n2 + 1];
        for (i2[r2 - 1] = 2, o2[r2 - 1] = 7, a2[r2 - 1] = 8 * t2[r2 - 1] + t2[r2], n2 = 1; n2 < r2; ++n2)
          e2 = i2[n2] / o2[n2 - 1], o2[n2] -= e2, a2[n2] -= e2 * a2[n2 - 1];
        for (i2[r2 - 1] = a2[r2 - 1] / o2[r2 - 1], n2 = r2 - 2; n2 >= 0; --n2)
          i2[n2] = (a2[n2] - i2[n2 + 1]) / o2[n2];
        for (o2[r2 - 1] = (t2[r2] + i2[r2 - 1]) / 2, n2 = 0; n2 < r2 - 1; ++n2)
          o2[n2] = 2 * t2[n2 + 1] - i2[n2 + 1];
        return [i2, o2];
      }
      function sw(t2, n2) {
        this._context = t2, this._t = n2;
      }
      function lw(t2, n2) {
        if ((i2 = t2.length) > 1)
          for (var e2, r2, i2, o2 = 1, a2 = t2[n2[0]], u2 = a2.length; o2 < i2; ++o2)
            for (r2 = a2, a2 = t2[n2[o2]], e2 = 0; e2 < u2; ++e2)
              a2[e2][1] += a2[e2][0] = isNaN(r2[e2][1]) ? r2[e2][0] : r2[e2][1];
      }
      function hw(t2) {
        for (var n2 = t2.length, e2 = new Array(n2); --n2 >= 0; )
          e2[n2] = n2;
        return e2;
      }
      function dw(t2, n2) {
        return t2[n2];
      }
      function pw(t2) {
        const n2 = [];
        return n2.key = t2, n2;
      }
      function gw(t2) {
        var n2 = t2.map(yw);
        return hw(t2).sort(function(t3, e2) {
          return n2[t3] - n2[e2];
        });
      }
      function yw(t2) {
        for (var n2, e2 = -1, r2 = 0, i2 = t2.length, o2 = -1 / 0; ++e2 < i2; )
          (n2 = +t2[e2][1]) > o2 && (o2 = n2, r2 = e2);
        return r2;
      }
      function vw(t2) {
        var n2 = t2.map(_w);
        return hw(t2).sort(function(t3, e2) {
          return n2[t3] - n2[e2];
        });
      }
      function _w(t2) {
        for (var n2, e2 = 0, r2 = -1, i2 = t2.length; ++r2 < i2; )
          (n2 = +t2[r2][1]) && (e2 += n2);
        return e2;
      }
      tw.prototype = { areaStart: $x, areaEnd: $x, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._point && this._context.closePath();
      }, point: function(t2, n2) {
        t2 = +t2, n2 = +n2, this._point ? this._context.lineTo(t2, n2) : (this._point = 1, this._context.moveTo(t2, n2));
      } }, ow.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            iw(this, this._t0, rw(this, this._t0));
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        var e2 = NaN;
        if (n2 = +n2, (t2 = +t2) !== this._x1 || n2 !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, iw(this, rw(this, e2 = ew(this, t2, n2)), e2);
              break;
            default:
              iw(this, this._t0, e2 = ew(this, t2, n2));
          }
          this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2, this._t0 = e2;
        }
      } }, (aw.prototype = Object.create(ow.prototype)).point = function(t2, n2) {
        ow.prototype.point.call(this, n2, t2);
      }, uw.prototype = { moveTo: function(t2, n2) {
        this._context.moveTo(n2, t2);
      }, closePath: function() {
        this._context.closePath();
      }, lineTo: function(t2, n2) {
        this._context.lineTo(n2, t2);
      }, bezierCurveTo: function(t2, n2, e2, r2, i2, o2) {
        this._context.bezierCurveTo(n2, t2, r2, e2, o2, i2);
      } }, cw.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x = [], this._y = [];
      }, lineEnd: function() {
        var t2 = this._x, n2 = this._y, e2 = t2.length;
        if (e2)
          if (this._line ? this._context.lineTo(t2[0], n2[0]) : this._context.moveTo(t2[0], n2[0]), 2 === e2)
            this._context.lineTo(t2[1], n2[1]);
          else
            for (var r2 = fw(t2), i2 = fw(n2), o2 = 0, a2 = 1; a2 < e2; ++o2, ++a2)
              this._context.bezierCurveTo(r2[0][o2], i2[0][o2], r2[1][o2], i2[1][o2], t2[a2], n2[a2]);
        (this._line || 0 !== this._line && 1 === e2) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      }, point: function(t2, n2) {
        this._x.push(+t2), this._y.push(+n2);
      } }, sw.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x = this._y = NaN, this._point = 0;
      }, lineEnd: function() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n2), this._context.lineTo(t2, n2);
            else {
              var e2 = this._x * (1 - this._t) + t2 * this._t;
              this._context.lineTo(e2, this._y), this._context.lineTo(e2, n2);
            }
        }
        this._x = t2, this._y = n2;
      } };
      var bw = (t2) => () => t2;
      function mw(t2, { sourceEvent: n2, target: e2, transform: r2, dispatch: i2 }) {
        Object.defineProperties(this, { type: { value: t2, enumerable: true, configurable: true }, sourceEvent: { value: n2, enumerable: true, configurable: true }, target: { value: e2, enumerable: true, configurable: true }, transform: { value: r2, enumerable: true, configurable: true }, _: { value: i2 } });
      }
      function xw(t2, n2, e2) {
        this.k = t2, this.x = n2, this.y = e2;
      }
      xw.prototype = { constructor: xw, scale: function(t2) {
        return 1 === t2 ? this : new xw(this.k * t2, this.x, this.y);
      }, translate: function(t2, n2) {
        return 0 === t2 & 0 === n2 ? this : new xw(this.k, this.x + this.k * t2, this.y + this.k * n2);
      }, apply: function(t2) {
        return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
      }, applyX: function(t2) {
        return t2 * this.k + this.x;
      }, applyY: function(t2) {
        return t2 * this.k + this.y;
      }, invert: function(t2) {
        return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
      }, invertX: function(t2) {
        return (t2 - this.x) / this.k;
      }, invertY: function(t2) {
        return (t2 - this.y) / this.k;
      }, rescaleX: function(t2) {
        return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
      }, rescaleY: function(t2) {
        return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
      }, toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      } };
      var ww = new xw(1, 0, 0);
      function Mw(t2) {
        for (; !t2.__zoom; )
          if (!(t2 = t2.parentNode))
            return ww;
        return t2.__zoom;
      }
      function Tw(t2) {
        t2.stopImmediatePropagation();
      }
      function Aw(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      function Sw(t2) {
        return !(t2.ctrlKey && "wheel" !== t2.type || t2.button);
      }
      function Ew() {
        var t2 = this;
        return t2 instanceof SVGElement ? (t2 = t2.ownerSVGElement || t2).hasAttribute("viewBox") ? [[(t2 = t2.viewBox.baseVal).x, t2.y], [t2.x + t2.width, t2.y + t2.height]] : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]] : [[0, 0], [t2.clientWidth, t2.clientHeight]];
      }
      function Nw() {
        return this.__zoom || ww;
      }
      function kw(t2) {
        return -t2.deltaY * (1 === t2.deltaMode ? 0.05 : t2.deltaMode ? 1 : 2e-3) * (t2.ctrlKey ? 10 : 1);
      }
      function Cw() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Pw(t2, n2, e2) {
        var r2 = t2.invertX(n2[0][0]) - e2[0][0], i2 = t2.invertX(n2[1][0]) - e2[1][0], o2 = t2.invertY(n2[0][1]) - e2[0][1], a2 = t2.invertY(n2[1][1]) - e2[1][1];
        return t2.translate(i2 > r2 ? (r2 + i2) / 2 : Math.min(0, r2) || Math.max(0, i2), a2 > o2 ? (o2 + a2) / 2 : Math.min(0, o2) || Math.max(0, a2));
      }
      Mw.prototype = xw.prototype, t.Adder = T, t.Delaunay = Lu, t.FormatSpecifier = tf, t.InternMap = InternMap, t.InternSet = InternSet, t.Node = Qd, t.Path = Ua, t.Voronoi = qu, t.ZoomTransform = xw, t.active = function(t2, n2) {
        var e2, r2, i2 = t2.__transition;
        if (i2) {
          for (r2 in n2 = null == n2 ? null : n2 + "", i2)
            if ((e2 = i2[r2]).state > qi && e2.name === n2)
              return new po([[t2]], Zo, n2, +r2);
        }
        return null;
      }, t.arc = function() {
        var t2 = km, n2 = Cm, e2 = gm(0), r2 = null, i2 = Pm, o2 = zm, a2 = $m, u2 = null, c2 = Nm(f2);
        function f2() {
          var f3, s2, l2 = +t2.apply(this, arguments), h2 = +n2.apply(this, arguments), d2 = i2.apply(this, arguments) - Am, p2 = o2.apply(this, arguments) - Am, g2 = ym(p2 - d2), y2 = p2 > d2;
          if (u2 || (u2 = f3 = c2()), h2 < l2 && (s2 = h2, h2 = l2, l2 = s2), h2 > Mm)
            if (g2 > Sm - Mm)
              u2.moveTo(h2 * _m(d2), h2 * xm(d2)), u2.arc(0, 0, h2, d2, p2, !y2), l2 > Mm && (u2.moveTo(l2 * _m(p2), l2 * xm(p2)), u2.arc(0, 0, l2, p2, d2, y2));
            else {
              var v2, _2, b2 = d2, m2 = p2, x2 = d2, w2 = p2, M2 = g2, T2 = g2, A2 = a2.apply(this, arguments) / 2, S2 = A2 > Mm && (r2 ? +r2.apply(this, arguments) : wm(l2 * l2 + h2 * h2)), E2 = mm(ym(h2 - l2) / 2, +e2.apply(this, arguments)), N2 = E2, k2 = E2;
              if (S2 > Mm) {
                var C2 = Em(S2 / l2 * xm(A2)), P2 = Em(S2 / h2 * xm(A2));
                (M2 -= 2 * C2) > Mm ? (x2 += C2 *= y2 ? 1 : -1, w2 -= C2) : (M2 = 0, x2 = w2 = (d2 + p2) / 2), (T2 -= 2 * P2) > Mm ? (b2 += P2 *= y2 ? 1 : -1, m2 -= P2) : (T2 = 0, b2 = m2 = (d2 + p2) / 2);
              }
              var z2 = h2 * _m(b2), $2 = h2 * xm(b2), D2 = l2 * _m(w2), R2 = l2 * xm(w2);
              if (E2 > Mm) {
                var F2, q2 = h2 * _m(m2), U2 = h2 * xm(m2), I2 = l2 * _m(x2), O2 = l2 * xm(x2);
                if (g2 < Tm)
                  if (F2 = function(t3, n3, e3, r3, i3, o3, a3, u3) {
                    var c3 = e3 - t3, f4 = r3 - n3, s3 = a3 - i3, l3 = u3 - o3, h3 = l3 * c3 - s3 * f4;
                    if (!(h3 * h3 < Mm))
                      return [t3 + (h3 = (s3 * (n3 - o3) - l3 * (t3 - i3)) / h3) * c3, n3 + h3 * f4];
                  }(z2, $2, I2, O2, q2, U2, D2, R2)) {
                    var B2 = z2 - F2[0], Y2 = $2 - F2[1], L2 = q2 - F2[0], j2 = U2 - F2[1], H2 = 1 / xm(function(t3) {
                      return t3 > 1 ? 0 : t3 < -1 ? Tm : Math.acos(t3);
                    }((B2 * L2 + Y2 * j2) / (wm(B2 * B2 + Y2 * Y2) * wm(L2 * L2 + j2 * j2))) / 2), X2 = wm(F2[0] * F2[0] + F2[1] * F2[1]);
                    N2 = mm(E2, (l2 - X2) / (H2 - 1)), k2 = mm(E2, (h2 - X2) / (H2 + 1));
                  } else
                    N2 = k2 = 0;
              }
              T2 > Mm ? k2 > Mm ? (v2 = Dm(I2, O2, z2, $2, h2, k2, y2), _2 = Dm(q2, U2, D2, R2, h2, k2, y2), u2.moveTo(v2.cx + v2.x01, v2.cy + v2.y01), k2 < E2 ? u2.arc(v2.cx, v2.cy, k2, vm(v2.y01, v2.x01), vm(_2.y01, _2.x01), !y2) : (u2.arc(v2.cx, v2.cy, k2, vm(v2.y01, v2.x01), vm(v2.y11, v2.x11), !y2), u2.arc(0, 0, h2, vm(v2.cy + v2.y11, v2.cx + v2.x11), vm(_2.cy + _2.y11, _2.cx + _2.x11), !y2), u2.arc(_2.cx, _2.cy, k2, vm(_2.y11, _2.x11), vm(_2.y01, _2.x01), !y2))) : (u2.moveTo(z2, $2), u2.arc(0, 0, h2, b2, m2, !y2)) : u2.moveTo(z2, $2), l2 > Mm && M2 > Mm ? N2 > Mm ? (v2 = Dm(D2, R2, q2, U2, l2, -N2, y2), _2 = Dm(z2, $2, I2, O2, l2, -N2, y2), u2.lineTo(v2.cx + v2.x01, v2.cy + v2.y01), N2 < E2 ? u2.arc(v2.cx, v2.cy, N2, vm(v2.y01, v2.x01), vm(_2.y01, _2.x01), !y2) : (u2.arc(v2.cx, v2.cy, N2, vm(v2.y01, v2.x01), vm(v2.y11, v2.x11), !y2), u2.arc(0, 0, l2, vm(v2.cy + v2.y11, v2.cx + v2.x11), vm(_2.cy + _2.y11, _2.cx + _2.x11), y2), u2.arc(_2.cx, _2.cy, N2, vm(_2.y11, _2.x11), vm(_2.y01, _2.x01), !y2))) : u2.arc(0, 0, l2, w2, x2, y2) : u2.lineTo(D2, R2);
            }
          else
            u2.moveTo(0, 0);
          if (u2.closePath(), f3)
            return u2 = null, f3 + "" || null;
        }
        return f2.centroid = function() {
          var e3 = (+t2.apply(this, arguments) + +n2.apply(this, arguments)) / 2, r3 = (+i2.apply(this, arguments) + +o2.apply(this, arguments)) / 2 - Tm / 2;
          return [_m(r3) * e3, xm(r3) * e3];
        }, f2.innerRadius = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(+n3), f2) : t2;
        }, f2.outerRadius = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : n2;
        }, f2.cornerRadius = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : e2;
        }, f2.padRadius = function(t3) {
          return arguments.length ? (r2 = null == t3 ? null : "function" == typeof t3 ? t3 : gm(+t3), f2) : r2;
        }, f2.startAngle = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : i2;
        }, f2.endAngle = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : o2;
        }, f2.padAngle = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : gm(+t3), f2) : a2;
        }, f2.context = function(t3) {
          return arguments.length ? (u2 = null == t3 ? null : t3, f2) : u2;
        }, f2;
      }, t.area = Ym, t.areaRadial = Zm, t.ascending = n, t.autoType = function(t2) {
        for (var n2 in t2) {
          var e2, r2, i2 = t2[n2].trim();
          if (i2)
            if ("true" === i2)
              i2 = true;
            else if ("false" === i2)
              i2 = false;
            else if ("NaN" === i2)
              i2 = NaN;
            else if (isNaN(e2 = +i2)) {
              if (!(r2 = i2.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))
                continue;
              yc && r2[4] && !r2[7] && (i2 = i2.replace(/-/g, "/").replace(/T/, " ")), i2 = new Date(i2);
            } else
              i2 = e2;
          else
            i2 = null;
          t2[n2] = i2;
        }
        return t2;
      }, t.axisBottom = function(t2) {
        return Pt(Mt, t2);
      }, t.axisLeft = function(t2) {
        return Pt(Tt, t2);
      }, t.axisRight = function(t2) {
        return Pt(wt, t2);
      }, t.axisTop = function(t2) {
        return Pt(xt, t2);
      }, t.bin = Q, t.bisect = s, t.bisectCenter = f, t.bisectLeft = c, t.bisectRight = u, t.bisector = r, t.blob = function(t2, n2) {
        return fetch(t2, n2).then(vc);
      }, t.blur = function(t2, n2) {
        if (!((n2 = +n2) >= 0))
          throw new RangeError("invalid r");
        let e2 = t2.length;
        if (!((e2 = Math.floor(e2)) >= 0))
          throw new RangeError("invalid length");
        if (!e2 || !n2)
          return t2;
        const r2 = y(n2), i2 = t2.slice();
        return r2(t2, i2, 0, e2, 1), r2(i2, t2, 0, e2, 1), r2(t2, i2, 0, e2, 1), t2;
      }, t.blur2 = l, t.blurImage = h, t.brush = function() {
        return wa(la);
      }, t.brushSelection = function(t2) {
        var n2 = t2.__brush;
        return n2 ? n2.dim.output(n2.selection) : null;
      }, t.brushX = function() {
        return wa(fa);
      }, t.brushY = function() {
        return wa(sa);
      }, t.buffer = function(t2, n2) {
        return fetch(t2, n2).then(_c);
      }, t.chord = function() {
        return za(false, false);
      }, t.chordDirected = function() {
        return za(true, false);
      }, t.chordTranspose = function() {
        return za(false, true);
      }, t.cluster = function() {
        var t2 = Ld, n2 = 1, e2 = 1, r2 = false;
        function i2(i3) {
          var o2, a2 = 0;
          i3.eachAfter(function(n3) {
            var e3 = n3.children;
            e3 ? (n3.x = function(t3) {
              return t3.reduce(jd, 0) / t3.length;
            }(e3), n3.y = function(t3) {
              return 1 + t3.reduce(Hd, 0);
            }(e3)) : (n3.x = o2 ? a2 += t2(n3, o2) : 0, n3.y = 0, o2 = n3);
          });
          var u2 = function(t3) {
            for (var n3; n3 = t3.children; )
              t3 = n3[0];
            return t3;
          }(i3), c2 = function(t3) {
            for (var n3; n3 = t3.children; )
              t3 = n3[n3.length - 1];
            return t3;
          }(i3), f2 = u2.x - t2(u2, c2) / 2, s2 = c2.x + t2(c2, u2) / 2;
          return i3.eachAfter(r2 ? function(t3) {
            t3.x = (t3.x - i3.x) * n2, t3.y = (i3.y - t3.y) * e2;
          } : function(t3) {
            t3.x = (t3.x - f2) / (s2 - f2) * n2, t3.y = (1 - (i3.y ? t3.y / i3.y : 1)) * e2;
          });
        }
        return i2.separation = function(n3) {
          return arguments.length ? (t2 = n3, i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (r2 = false, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? null : [n2, e2];
        }, i2.nodeSize = function(t3) {
          return arguments.length ? (r2 = true, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? [n2, e2] : null;
        }, i2;
      }, t.color = ze, t.contourDensity = function() {
        var t2 = fu, n2 = su, e2 = lu, r2 = 960, i2 = 500, o2 = 20, a2 = 2, u2 = 3 * o2, c2 = r2 + 2 * u2 >> a2, f2 = i2 + 2 * u2 >> a2, s2 = Qa(20);
        function h2(r3) {
          var i3 = new Float32Array(c2 * f2), s3 = Math.pow(2, -a2), h3 = -1;
          for (const o3 of r3) {
            var d4 = (t2(o3, ++h3, r3) + u2) * s3, p3 = (n2(o3, h3, r3) + u2) * s3, g3 = +e2(o3, h3, r3);
            if (g3 && d4 >= 0 && d4 < c2 && p3 >= 0 && p3 < f2) {
              var y3 = Math.floor(d4), v3 = Math.floor(p3), _3 = d4 - y3 - 0.5, b2 = p3 - v3 - 0.5;
              i3[y3 + v3 * c2] += (1 - _3) * (1 - b2) * g3, i3[y3 + 1 + v3 * c2] += _3 * (1 - b2) * g3, i3[y3 + 1 + (v3 + 1) * c2] += _3 * b2 * g3, i3[y3 + (v3 + 1) * c2] += (1 - _3) * b2 * g3;
            }
          }
          return l({ data: i3, width: c2, height: f2 }, o2 * s3), i3;
        }
        function d2(t3) {
          var n3 = h2(t3), e3 = s2(n3), r3 = Math.pow(2, 2 * a2);
          return Array.isArray(e3) || (e3 = G(Number.MIN_VALUE, J(n3) / r3, e3)), iu().size([c2, f2]).thresholds(e3.map((t4) => t4 * r3))(n3).map((t4, n4) => (t4.value = +e3[n4], p2(t4)));
        }
        function p2(t3) {
          return t3.coordinates.forEach(g2), t3;
        }
        function g2(t3) {
          t3.forEach(y2);
        }
        function y2(t3) {
          t3.forEach(v2);
        }
        function v2(t3) {
          t3[0] = t3[0] * Math.pow(2, a2) - u2, t3[1] = t3[1] * Math.pow(2, a2) - u2;
        }
        function _2() {
          return c2 = r2 + 2 * (u2 = 3 * o2) >> a2, f2 = i2 + 2 * u2 >> a2, d2;
        }
        return d2.contours = function(t3) {
          var n3 = h2(t3), e3 = iu().size([c2, f2]), r3 = Math.pow(2, 2 * a2), i3 = (t4) => {
            t4 = +t4;
            var i4 = p2(e3.contour(n3, t4 * r3));
            return i4.value = t4, i4;
          };
          return Object.defineProperty(i3, "max", { get: () => J(n3) / r3 }), i3;
        }, d2.x = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : Qa(+n3), d2) : t2;
        }, d2.y = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : Qa(+t3), d2) : n2;
        }, d2.weight = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : Qa(+t3), d2) : e2;
        }, d2.size = function(t3) {
          if (!arguments.length)
            return [r2, i2];
          var n3 = +t3[0], e3 = +t3[1];
          if (!(n3 >= 0 && e3 >= 0))
            throw new Error("invalid size");
          return r2 = n3, i2 = e3, _2();
        }, d2.cellSize = function(t3) {
          if (!arguments.length)
            return 1 << a2;
          if (!((t3 = +t3) >= 1))
            throw new Error("invalid cell size");
          return a2 = Math.floor(Math.log(t3) / Math.LN2), _2();
        }, d2.thresholds = function(t3) {
          return arguments.length ? (s2 = "function" == typeof t3 ? t3 : Array.isArray(t3) ? Qa(Za.call(t3)) : Qa(t3), d2) : s2;
        }, d2.bandwidth = function(t3) {
          if (!arguments.length)
            return Math.sqrt(o2 * (o2 + 1));
          if (!((t3 = +t3) >= 0))
            throw new Error("invalid bandwidth");
          return o2 = (Math.sqrt(4 * t3 * t3 + 1) - 1) / 2, _2();
        }, d2;
      }, t.contours = iu, t.count = v, t.create = function(t2) {
        return Zn(Yt(t2).call(document.documentElement));
      }, t.creator = Yt, t.cross = function(...t2) {
        const n2 = "function" == typeof t2[t2.length - 1] && /* @__PURE__ */ function(t3) {
          return (n3) => t3(...n3);
        }(t2.pop()), e2 = (t2 = t2.map(m)).map(_), r2 = t2.length - 1, i2 = new Array(r2 + 1).fill(0), o2 = [];
        if (r2 < 0 || e2.some(b))
          return o2;
        for (; ; ) {
          o2.push(i2.map((n3, e3) => t2[e3][n3]));
          let a2 = r2;
          for (; ++i2[a2] === e2[a2]; ) {
            if (0 === a2)
              return n2 ? o2.map(n2) : o2;
            i2[a2--] = 0;
          }
        }
      }, t.csv = wc, t.csvFormat = rc, t.csvFormatBody = ic, t.csvFormatRow = ac, t.csvFormatRows = oc, t.csvFormatValue = uc, t.csvParse = nc, t.csvParseRows = ec, t.cubehelix = Tr, t.cumsum = function(t2, n2) {
        var e2 = 0, r2 = 0;
        return Float64Array.from(t2, void 0 === n2 ? (t3) => e2 += +t3 || 0 : (i2) => e2 += +n2(i2, r2++, t2) || 0);
      }, t.curveBasis = function(t2) {
        return new Rx(t2);
      }, t.curveBasisClosed = function(t2) {
        return new Fx(t2);
      }, t.curveBasisOpen = function(t2) {
        return new qx(t2);
      }, t.curveBumpX = tx, t.curveBumpY = nx, t.curveBundle = Ix, t.curveCardinal = Yx, t.curveCardinalClosed = jx, t.curveCardinalOpen = Xx, t.curveCatmullRom = Wx, t.curveCatmullRomClosed = Kx, t.curveCatmullRomOpen = Jx, t.curveLinear = Um, t.curveLinearClosed = function(t2) {
        return new tw(t2);
      }, t.curveMonotoneX = function(t2) {
        return new ow(t2);
      }, t.curveMonotoneY = function(t2) {
        return new aw(t2);
      }, t.curveNatural = function(t2) {
        return new cw(t2);
      }, t.curveStep = function(t2) {
        return new sw(t2, 0.5);
      }, t.curveStepAfter = function(t2) {
        return new sw(t2, 1);
      }, t.curveStepBefore = function(t2) {
        return new sw(t2, 0);
      }, t.descending = e, t.deviation = w, t.difference = function(t2, ...n2) {
        t2 = new InternSet(t2);
        for (const e2 of n2)
          for (const n3 of e2)
            t2.delete(n3);
        return t2;
      }, t.disjoint = function(t2, n2) {
        const e2 = n2[Symbol.iterator](), r2 = new InternSet();
        for (const n3 of t2) {
          if (r2.has(n3))
            return false;
          let t3, i2;
          for (; ({ value: t3, done: i2 } = e2.next()) && !i2; ) {
            if (Object.is(n3, t3))
              return false;
            r2.add(t3);
          }
        }
        return true;
      }, t.dispatch = $t, t.drag = function() {
        var t2, n2, e2, r2, i2 = se, o2 = le, a2 = he, u2 = de, c2 = {}, f2 = $t("start", "drag", "end"), s2 = 0, l2 = 0;
        function h2(t3) {
          t3.on("mousedown.drag", d2).filter(u2).on("touchstart.drag", y2).on("touchmove.drag", v2, ee).on("touchend.drag touchcancel.drag", _2).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function d2(a3, u3) {
          if (!r2 && i2.call(this, a3, u3)) {
            var c3 = b2(this, o2.call(this, a3, u3), a3, u3, "mouse");
            c3 && (Zn(a3.view).on("mousemove.drag", p2, re).on("mouseup.drag", g2, re), ae(a3.view), ie(a3), e2 = false, t2 = a3.clientX, n2 = a3.clientY, c3("start", a3));
          }
        }
        function p2(r3) {
          if (oe(r3), !e2) {
            var i3 = r3.clientX - t2, o3 = r3.clientY - n2;
            e2 = i3 * i3 + o3 * o3 > l2;
          }
          c2.mouse("drag", r3);
        }
        function g2(t3) {
          Zn(t3.view).on("mousemove.drag mouseup.drag", null), ue(t3.view, e2), oe(t3), c2.mouse("end", t3);
        }
        function y2(t3, n3) {
          if (i2.call(this, t3, n3)) {
            var e3, r3, a3 = t3.changedTouches, u3 = o2.call(this, t3, n3), c3 = a3.length;
            for (e3 = 0; e3 < c3; ++e3)
              (r3 = b2(this, u3, t3, n3, a3[e3].identifier, a3[e3])) && (ie(t3), r3("start", t3, a3[e3]));
          }
        }
        function v2(t3) {
          var n3, e3, r3 = t3.changedTouches, i3 = r3.length;
          for (n3 = 0; n3 < i3; ++n3)
            (e3 = c2[r3[n3].identifier]) && (oe(t3), e3("drag", t3, r3[n3]));
        }
        function _2(t3) {
          var n3, e3, i3 = t3.changedTouches, o3 = i3.length;
          for (r2 && clearTimeout(r2), r2 = setTimeout(function() {
            r2 = null;
          }, 500), n3 = 0; n3 < o3; ++n3)
            (e3 = c2[i3[n3].identifier]) && (ie(t3), e3("end", t3, i3[n3]));
        }
        function b2(t3, n3, e3, r3, i3, o3) {
          var u3, l3, d4, p3 = f2.copy(), g3 = ne(o3 || e3, n3);
          if (null != (d4 = a2.call(t3, new fe("beforestart", { sourceEvent: e3, target: h2, identifier: i3, active: s2, x: g3[0], y: g3[1], dx: 0, dy: 0, dispatch: p3 }), r3)))
            return u3 = d4.x - g3[0] || 0, l3 = d4.y - g3[1] || 0, function e4(o4, a3, f3) {
              var y3, v3 = g3;
              switch (o4) {
                case "start":
                  c2[i3] = e4, y3 = s2++;
                  break;
                case "end":
                  delete c2[i3], --s2;
                case "drag":
                  g3 = ne(f3 || a3, n3), y3 = s2;
              }
              p3.call(o4, t3, new fe(o4, { sourceEvent: a3, subject: d4, target: h2, identifier: i3, active: y3, x: g3[0] + u3, y: g3[1] + l3, dx: g3[0] - v3[0], dy: g3[1] - v3[1], dispatch: p3 }), r3);
            };
        }
        return h2.filter = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : ce(!!t3), h2) : i2;
        }, h2.container = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : ce(t3), h2) : o2;
        }, h2.subject = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : ce(t3), h2) : a2;
        }, h2.touchable = function(t3) {
          return arguments.length ? (u2 = "function" == typeof t3 ? t3 : ce(!!t3), h2) : u2;
        }, h2.on = function() {
          var t3 = f2.on.apply(f2, arguments);
          return t3 === f2 ? h2 : t3;
        }, h2.clickDistance = function(t3) {
          return arguments.length ? (l2 = (t3 = +t3) * t3, h2) : Math.sqrt(l2);
        }, h2;
      }, t.dragDisable = ae, t.dragEnable = ue, t.dsv = function(t2, n2, e2, r2) {
        3 === arguments.length && "function" == typeof e2 && (r2 = e2, e2 = void 0);
        var i2 = Ju(t2);
        return mc(n2, e2).then(function(t3) {
          return i2.parse(t3, r2);
        });
      }, t.dsvFormat = Ju, t.easeBack = Lo, t.easeBackIn = Bo, t.easeBackInOut = Lo, t.easeBackOut = Yo, t.easeBounce = Io, t.easeBounceIn = function(t2) {
        return 1 - Io(1 - t2);
      }, t.easeBounceInOut = function(t2) {
        return ((t2 *= 2) <= 1 ? 1 - Io(1 - t2) : Io(t2 - 1) + 1) / 2;
      }, t.easeBounceOut = Io, t.easeCircle = No, t.easeCircleIn = function(t2) {
        return 1 - Math.sqrt(1 - t2 * t2);
      }, t.easeCircleInOut = No, t.easeCircleOut = function(t2) {
        return Math.sqrt(1 - --t2 * t2);
      }, t.easeCubic = bo, t.easeCubicIn = function(t2) {
        return t2 * t2 * t2;
      }, t.easeCubicInOut = bo, t.easeCubicOut = function(t2) {
        return --t2 * t2 * t2 + 1;
      }, t.easeElastic = Xo, t.easeElasticIn = Ho, t.easeElasticInOut = Go, t.easeElasticOut = Xo, t.easeExp = Eo, t.easeExpIn = function(t2) {
        return So(1 - +t2);
      }, t.easeExpInOut = Eo, t.easeExpOut = function(t2) {
        return 1 - So(t2);
      }, t.easeLinear = (t2) => +t2, t.easePoly = wo, t.easePolyIn = mo, t.easePolyInOut = wo, t.easePolyOut = xo, t.easeQuad = _o, t.easeQuadIn = function(t2) {
        return t2 * t2;
      }, t.easeQuadInOut = _o, t.easeQuadOut = function(t2) {
        return t2 * (2 - t2);
      }, t.easeSin = Ao, t.easeSinIn = function(t2) {
        return 1 == +t2 ? 1 : 1 - Math.cos(t2 * To);
      }, t.easeSinInOut = Ao, t.easeSinOut = function(t2) {
        return Math.sin(t2 * To);
      }, t.every = function(t2, n2) {
        if ("function" != typeof n2)
          throw new TypeError("test is not a function");
        let e2 = -1;
        for (const r2 of t2)
          if (!n2(r2, ++e2, t2))
            return false;
        return true;
      }, t.extent = M, t.fcumsum = function(t2, n2) {
        const e2 = new T();
        let r2 = -1;
        return Float64Array.from(t2, void 0 === n2 ? (t3) => e2.add(+t3 || 0) : (i2) => e2.add(+n2(i2, ++r2, t2) || 0));
      }, t.filter = function(t2, n2) {
        if ("function" != typeof n2)
          throw new TypeError("test is not a function");
        const e2 = [];
        let r2 = -1;
        for (const i2 of t2)
          n2(i2, ++r2, t2) && e2.push(i2);
        return e2;
      }, t.flatGroup = function(t2, ...n2) {
        return z(P(t2, ...n2), n2);
      }, t.flatRollup = function(t2, n2, ...e2) {
        return z(D(t2, n2, ...e2), e2);
      }, t.forceCenter = function(t2, n2) {
        var e2, r2 = 1;
        function i2() {
          var i3, o2, a2 = e2.length, u2 = 0, c2 = 0;
          for (i3 = 0; i3 < a2; ++i3)
            u2 += (o2 = e2[i3]).x, c2 += o2.y;
          for (u2 = (u2 / a2 - t2) * r2, c2 = (c2 / a2 - n2) * r2, i3 = 0; i3 < a2; ++i3)
            (o2 = e2[i3]).x -= u2, o2.y -= c2;
        }
        return null == t2 && (t2 = 0), null == n2 && (n2 = 0), i2.initialize = function(t3) {
          e2 = t3;
        }, i2.x = function(n3) {
          return arguments.length ? (t2 = +n3, i2) : t2;
        }, i2.y = function(t3) {
          return arguments.length ? (n2 = +t3, i2) : n2;
        }, i2.strength = function(t3) {
          return arguments.length ? (r2 = +t3, i2) : r2;
        }, i2;
      }, t.forceCollide = function(t2) {
        var n2, e2, r2, i2 = 1, o2 = 1;
        function a2() {
          for (var t3, a3, c3, f2, s2, l2, h2, d2 = n2.length, p2 = 0; p2 < o2; ++p2)
            for (a3 = $c(n2, Ic, Oc).visitAfter(u2), t3 = 0; t3 < d2; ++t3)
              c3 = n2[t3], l2 = e2[c3.index], h2 = l2 * l2, f2 = c3.x + c3.vx, s2 = c3.y + c3.vy, a3.visit(g2);
          function g2(t4, n3, e3, o3, a4) {
            var u3 = t4.data, d4 = t4.r, p3 = l2 + d4;
            if (!u3)
              return n3 > f2 + p3 || o3 < f2 - p3 || e3 > s2 + p3 || a4 < s2 - p3;
            if (u3.index > c3.index) {
              var g3 = f2 - u3.x - u3.vx, y2 = s2 - u3.y - u3.vy, v2 = g3 * g3 + y2 * y2;
              v2 < p3 * p3 && (0 === g3 && (v2 += (g3 = Uc(r2)) * g3), 0 === y2 && (v2 += (y2 = Uc(r2)) * y2), v2 = (p3 - (v2 = Math.sqrt(v2))) / v2 * i2, c3.vx += (g3 *= v2) * (p3 = (d4 *= d4) / (h2 + d4)), c3.vy += (y2 *= v2) * p3, u3.vx -= g3 * (p3 = 1 - p3), u3.vy -= y2 * p3);
            }
          }
        }
        function u2(t3) {
          if (t3.data)
            return t3.r = e2[t3.data.index];
          for (var n3 = t3.r = 0; n3 < 4; ++n3)
            t3[n3] && t3[n3].r > t3.r && (t3.r = t3[n3].r);
        }
        function c2() {
          if (n2) {
            var r3, i3, o3 = n2.length;
            for (e2 = new Array(o3), r3 = 0; r3 < o3; ++r3)
              i3 = n2[r3], e2[i3.index] = +t2(i3, r3, n2);
          }
        }
        return "function" != typeof t2 && (t2 = qc(null == t2 ? 1 : +t2)), a2.initialize = function(t3, e3) {
          n2 = t3, r2 = e3, c2();
        }, a2.iterations = function(t3) {
          return arguments.length ? (o2 = +t3, a2) : o2;
        }, a2.strength = function(t3) {
          return arguments.length ? (i2 = +t3, a2) : i2;
        }, a2.radius = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : qc(+n3), c2(), a2) : t2;
        }, a2;
      }, t.forceLink = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2 = Bc, c2 = function(t3) {
          return 1 / Math.min(i2[t3.source.index], i2[t3.target.index]);
        }, f2 = qc(30), s2 = 1;
        function l2(r3) {
          for (var i3 = 0, u3 = t2.length; i3 < s2; ++i3)
            for (var c3, f3, l3, h3, d4, p3, g2, y2 = 0; y2 < u3; ++y2)
              f3 = (c3 = t2[y2]).source, h3 = (l3 = c3.target).x + l3.vx - f3.x - f3.vx || Uc(a2), d4 = l3.y + l3.vy - f3.y - f3.vy || Uc(a2), h3 *= p3 = ((p3 = Math.sqrt(h3 * h3 + d4 * d4)) - e2[y2]) / p3 * r3 * n2[y2], d4 *= p3, l3.vx -= h3 * (g2 = o2[y2]), l3.vy -= d4 * g2, f3.vx += h3 * (g2 = 1 - g2), f3.vy += d4 * g2;
        }
        function h2() {
          if (r2) {
            var a3, c3, f3 = r2.length, s3 = t2.length, l3 = new Map(r2.map((t3, n3) => [u2(t3, n3, r2), t3]));
            for (a3 = 0, i2 = new Array(f3); a3 < s3; ++a3)
              (c3 = t2[a3]).index = a3, "object" != typeof c3.source && (c3.source = Yc(l3, c3.source)), "object" != typeof c3.target && (c3.target = Yc(l3, c3.target)), i2[c3.source.index] = (i2[c3.source.index] || 0) + 1, i2[c3.target.index] = (i2[c3.target.index] || 0) + 1;
            for (a3 = 0, o2 = new Array(s3); a3 < s3; ++a3)
              c3 = t2[a3], o2[a3] = i2[c3.source.index] / (i2[c3.source.index] + i2[c3.target.index]);
            n2 = new Array(s3), d2(), e2 = new Array(s3), p2();
          }
        }
        function d2() {
          if (r2)
            for (var e3 = 0, i3 = t2.length; e3 < i3; ++e3)
              n2[e3] = +c2(t2[e3], e3, t2);
        }
        function p2() {
          if (r2)
            for (var n3 = 0, i3 = t2.length; n3 < i3; ++n3)
              e2[n3] = +f2(t2[n3], n3, t2);
        }
        return null == t2 && (t2 = []), l2.initialize = function(t3, n3) {
          r2 = t3, a2 = n3, h2();
        }, l2.links = function(n3) {
          return arguments.length ? (t2 = n3, h2(), l2) : t2;
        }, l2.id = function(t3) {
          return arguments.length ? (u2 = t3, l2) : u2;
        }, l2.iterations = function(t3) {
          return arguments.length ? (s2 = +t3, l2) : s2;
        }, l2.strength = function(t3) {
          return arguments.length ? (c2 = "function" == typeof t3 ? t3 : qc(+t3), d2(), l2) : c2;
        }, l2.distance = function(t3) {
          return arguments.length ? (f2 = "function" == typeof t3 ? t3 : qc(+t3), p2(), l2) : f2;
        }, l2;
      }, t.forceManyBody = function() {
        var t2, n2, e2, r2, i2, o2 = qc(-30), a2 = 1, u2 = 1 / 0, c2 = 0.81;
        function f2(e3) {
          var i3, o3 = t2.length, a3 = $c(t2, Xc, Gc).visitAfter(l2);
          for (r2 = e3, i3 = 0; i3 < o3; ++i3)
            n2 = t2[i3], a3.visit(h2);
        }
        function s2() {
          if (t2) {
            var n3, e3, r3 = t2.length;
            for (i2 = new Array(r3), n3 = 0; n3 < r3; ++n3)
              e3 = t2[n3], i2[e3.index] = +o2(e3, n3, t2);
          }
        }
        function l2(t3) {
          var n3, e3, r3, o3, a3, u3 = 0, c3 = 0;
          if (t3.length) {
            for (r3 = o3 = a3 = 0; a3 < 4; ++a3)
              (n3 = t3[a3]) && (e3 = Math.abs(n3.value)) && (u3 += n3.value, c3 += e3, r3 += e3 * n3.x, o3 += e3 * n3.y);
            t3.x = r3 / c3, t3.y = o3 / c3;
          } else {
            (n3 = t3).x = n3.data.x, n3.y = n3.data.y;
            do {
              u3 += i2[n3.data.index];
            } while (n3 = n3.next);
          }
          t3.value = u3;
        }
        function h2(t3, o3, f3, s3) {
          if (!t3.value)
            return true;
          var l3 = t3.x - n2.x, h3 = t3.y - n2.y, d2 = s3 - o3, p2 = l3 * l3 + h3 * h3;
          if (d2 * d2 / c2 < p2)
            return p2 < u2 && (0 === l3 && (p2 += (l3 = Uc(e2)) * l3), 0 === h3 && (p2 += (h3 = Uc(e2)) * h3), p2 < a2 && (p2 = Math.sqrt(a2 * p2)), n2.vx += l3 * t3.value * r2 / p2, n2.vy += h3 * t3.value * r2 / p2), true;
          if (!(t3.length || p2 >= u2)) {
            (t3.data !== n2 || t3.next) && (0 === l3 && (p2 += (l3 = Uc(e2)) * l3), 0 === h3 && (p2 += (h3 = Uc(e2)) * h3), p2 < a2 && (p2 = Math.sqrt(a2 * p2)));
            do {
              t3.data !== n2 && (d2 = i2[t3.data.index] * r2 / p2, n2.vx += l3 * d2, n2.vy += h3 * d2);
            } while (t3 = t3.next);
          }
        }
        return f2.initialize = function(n3, r3) {
          t2 = n3, e2 = r3, s2();
        }, f2.strength = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : qc(+t3), s2(), f2) : o2;
        }, f2.distanceMin = function(t3) {
          return arguments.length ? (a2 = t3 * t3, f2) : Math.sqrt(a2);
        }, f2.distanceMax = function(t3) {
          return arguments.length ? (u2 = t3 * t3, f2) : Math.sqrt(u2);
        }, f2.theta = function(t3) {
          return arguments.length ? (c2 = t3 * t3, f2) : Math.sqrt(c2);
        }, f2;
      }, t.forceRadial = function(t2, n2, e2) {
        var r2, i2, o2, a2 = qc(0.1);
        function u2(t3) {
          for (var a3 = 0, u3 = r2.length; a3 < u3; ++a3) {
            var c3 = r2[a3], f2 = c3.x - n2 || 1e-6, s2 = c3.y - e2 || 1e-6, l2 = Math.sqrt(f2 * f2 + s2 * s2), h2 = (o2[a3] - l2) * i2[a3] * t3 / l2;
            c3.vx += f2 * h2, c3.vy += s2 * h2;
          }
        }
        function c2() {
          if (r2) {
            var n3, e3 = r2.length;
            for (i2 = new Array(e3), o2 = new Array(e3), n3 = 0; n3 < e3; ++n3)
              o2[n3] = +t2(r2[n3], n3, r2), i2[n3] = isNaN(o2[n3]) ? 0 : +a2(r2[n3], n3, r2);
          }
        }
        return "function" != typeof t2 && (t2 = qc(+t2)), null == n2 && (n2 = 0), null == e2 && (e2 = 0), u2.initialize = function(t3) {
          r2 = t3, c2();
        }, u2.strength = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : qc(+t3), c2(), u2) : a2;
        }, u2.radius = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : qc(+n3), c2(), u2) : t2;
        }, u2.x = function(t3) {
          return arguments.length ? (n2 = +t3, u2) : n2;
        }, u2.y = function(t3) {
          return arguments.length ? (e2 = +t3, u2) : e2;
        }, u2;
      }, t.forceSimulation = function(t2) {
        var n2, e2 = 1, r2 = 1e-3, i2 = 1 - Math.pow(r2, 1 / 300), o2 = 0, a2 = 0.6, u2 = /* @__PURE__ */ new Map(), c2 = Ni(l2), f2 = $t("tick", "end"), s2 = /* @__PURE__ */ function() {
          let t3 = 1;
          return () => (t3 = (Lc * t3 + jc) % Hc) / Hc;
        }();
        function l2() {
          h2(), f2.call("tick", n2), e2 < r2 && (c2.stop(), f2.call("end", n2));
        }
        function h2(r3) {
          var c3, f3, s3 = t2.length;
          void 0 === r3 && (r3 = 1);
          for (var l3 = 0; l3 < r3; ++l3)
            for (e2 += (o2 - e2) * i2, u2.forEach(function(t3) {
              t3(e2);
            }), c3 = 0; c3 < s3; ++c3)
              null == (f3 = t2[c3]).fx ? f3.x += f3.vx *= a2 : (f3.x = f3.fx, f3.vx = 0), null == f3.fy ? f3.y += f3.vy *= a2 : (f3.y = f3.fy, f3.vy = 0);
          return n2;
        }
        function d2() {
          for (var n3, e3 = 0, r3 = t2.length; e3 < r3; ++e3) {
            if ((n3 = t2[e3]).index = e3, null != n3.fx && (n3.x = n3.fx), null != n3.fy && (n3.y = n3.fy), isNaN(n3.x) || isNaN(n3.y)) {
              var i3 = 10 * Math.sqrt(0.5 + e3), o3 = e3 * Vc;
              n3.x = i3 * Math.cos(o3), n3.y = i3 * Math.sin(o3);
            }
            (isNaN(n3.vx) || isNaN(n3.vy)) && (n3.vx = n3.vy = 0);
          }
        }
        function p2(n3) {
          return n3.initialize && n3.initialize(t2, s2), n3;
        }
        return null == t2 && (t2 = []), d2(), n2 = { tick: h2, restart: function() {
          return c2.restart(l2), n2;
        }, stop: function() {
          return c2.stop(), n2;
        }, nodes: function(e3) {
          return arguments.length ? (t2 = e3, d2(), u2.forEach(p2), n2) : t2;
        }, alpha: function(t3) {
          return arguments.length ? (e2 = +t3, n2) : e2;
        }, alphaMin: function(t3) {
          return arguments.length ? (r2 = +t3, n2) : r2;
        }, alphaDecay: function(t3) {
          return arguments.length ? (i2 = +t3, n2) : +i2;
        }, alphaTarget: function(t3) {
          return arguments.length ? (o2 = +t3, n2) : o2;
        }, velocityDecay: function(t3) {
          return arguments.length ? (a2 = 1 - t3, n2) : 1 - a2;
        }, randomSource: function(t3) {
          return arguments.length ? (s2 = t3, u2.forEach(p2), n2) : s2;
        }, force: function(t3, e3) {
          return arguments.length > 1 ? (null == e3 ? u2.delete(t3) : u2.set(t3, p2(e3)), n2) : u2.get(t3);
        }, find: function(n3, e3, r3) {
          var i3, o3, a3, u3, c3, f3 = 0, s3 = t2.length;
          for (null == r3 ? r3 = 1 / 0 : r3 *= r3, f3 = 0; f3 < s3; ++f3)
            (a3 = (i3 = n3 - (u3 = t2[f3]).x) * i3 + (o3 = e3 - u3.y) * o3) < r3 && (c3 = u3, r3 = a3);
          return c3;
        }, on: function(t3, e3) {
          return arguments.length > 1 ? (f2.on(t3, e3), n2) : f2.on(t3);
        } };
      }, t.forceX = function(t2) {
        var n2, e2, r2, i2 = qc(0.1);
        function o2(t3) {
          for (var i3, o3 = 0, a3 = n2.length; o3 < a3; ++o3)
            (i3 = n2[o3]).vx += (r2[o3] - i3.x) * e2[o3] * t3;
        }
        function a2() {
          if (n2) {
            var o3, a3 = n2.length;
            for (e2 = new Array(a3), r2 = new Array(a3), o3 = 0; o3 < a3; ++o3)
              e2[o3] = isNaN(r2[o3] = +t2(n2[o3], o3, n2)) ? 0 : +i2(n2[o3], o3, n2);
          }
        }
        return "function" != typeof t2 && (t2 = qc(null == t2 ? 0 : +t2)), o2.initialize = function(t3) {
          n2 = t3, a2();
        }, o2.strength = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : qc(+t3), a2(), o2) : i2;
        }, o2.x = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : qc(+n3), a2(), o2) : t2;
        }, o2;
      }, t.forceY = function(t2) {
        var n2, e2, r2, i2 = qc(0.1);
        function o2(t3) {
          for (var i3, o3 = 0, a3 = n2.length; o3 < a3; ++o3)
            (i3 = n2[o3]).vy += (r2[o3] - i3.y) * e2[o3] * t3;
        }
        function a2() {
          if (n2) {
            var o3, a3 = n2.length;
            for (e2 = new Array(a3), r2 = new Array(a3), o3 = 0; o3 < a3; ++o3)
              e2[o3] = isNaN(r2[o3] = +t2(n2[o3], o3, n2)) ? 0 : +i2(n2[o3], o3, n2);
          }
        }
        return "function" != typeof t2 && (t2 = qc(null == t2 ? 0 : +t2)), o2.initialize = function(t3) {
          n2 = t3, a2();
        }, o2.strength = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : qc(+t3), a2(), o2) : i2;
        }, o2.y = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : qc(+n3), a2(), o2) : t2;
        }, o2;
      }, t.formatDefaultLocale = ff, t.formatLocale = cf, t.formatSpecifier = Jc, t.fsum = function(t2, n2) {
        const e2 = new T();
        if (void 0 === n2)
          for (let n3 of t2)
            (n3 = +n3) && e2.add(n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = +n2(i2, ++r2, t2)) && e2.add(i2);
        }
        return +e2;
      }, t.geoAlbers = xd, t.geoAlbersUsa = function() {
        var t2, n2, e2, r2, i2, o2, a2 = xd(), u2 = md().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c2 = md().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), f2 = { point: function(t3, n3) {
          o2 = [t3, n3];
        } };
        function s2(t3) {
          var n3 = t3[0], a3 = t3[1];
          return o2 = null, e2.point(n3, a3), o2 || (r2.point(n3, a3), o2) || (i2.point(n3, a3), o2);
        }
        function l2() {
          return t2 = n2 = null, s2;
        }
        return s2.invert = function(t3) {
          var n3 = a2.scale(), e3 = a2.translate(), r3 = (t3[0] - e3[0]) / n3, i3 = (t3[1] - e3[1]) / n3;
          return (i3 >= 0.12 && i3 < 0.234 && r3 >= -0.425 && r3 < -0.214 ? u2 : i3 >= 0.166 && i3 < 0.234 && r3 >= -0.214 && r3 < -0.115 ? c2 : a2).invert(t3);
        }, s2.stream = function(e3) {
          return t2 && n2 === e3 ? t2 : (r3 = [a2.stream(n2 = e3), u2.stream(e3), c2.stream(e3)], i3 = r3.length, t2 = { point: function(t3, n3) {
            for (var e4 = -1; ++e4 < i3; )
              r3[e4].point(t3, n3);
          }, sphere: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].sphere();
          }, lineStart: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].lineStart();
          }, lineEnd: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].lineEnd();
          }, polygonStart: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].polygonStart();
          }, polygonEnd: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].polygonEnd();
          } });
          var r3, i3;
        }, s2.precision = function(t3) {
          return arguments.length ? (a2.precision(t3), u2.precision(t3), c2.precision(t3), l2()) : a2.precision();
        }, s2.scale = function(t3) {
          return arguments.length ? (a2.scale(t3), u2.scale(0.35 * t3), c2.scale(t3), s2.translate(a2.translate())) : a2.scale();
        }, s2.translate = function(t3) {
          if (!arguments.length)
            return a2.translate();
          var n3 = a2.scale(), o3 = +t3[0], s3 = +t3[1];
          return e2 = a2.translate(t3).clipExtent([[o3 - 0.455 * n3, s3 - 0.238 * n3], [o3 + 0.455 * n3, s3 + 0.238 * n3]]).stream(f2), r2 = u2.translate([o3 - 0.307 * n3, s3 + 0.201 * n3]).clipExtent([[o3 - 0.425 * n3 + df, s3 + 0.12 * n3 + df], [o3 - 0.214 * n3 - df, s3 + 0.234 * n3 - df]]).stream(f2), i2 = c2.translate([o3 - 0.205 * n3, s3 + 0.212 * n3]).clipExtent([[o3 - 0.214 * n3 + df, s3 + 0.166 * n3 + df], [o3 - 0.115 * n3 - df, s3 + 0.234 * n3 - df]]).stream(f2), l2();
        }, s2.fitExtent = function(t3, n3) {
          return ud(s2, t3, n3);
        }, s2.fitSize = function(t3, n3) {
          return cd(s2, t3, n3);
        }, s2.fitWidth = function(t3, n3) {
          return fd(s2, t3, n3);
        }, s2.fitHeight = function(t3, n3) {
          return sd(s2, t3, n3);
        }, s2.scale(1070);
      }, t.geoArea = function(t2) {
        return us = new T(), Lf(t2, cs), 2 * us;
      }, t.geoAzimuthalEqualArea = function() {
        return yd(Td).scale(124.75).clipAngle(179.999);
      }, t.geoAzimuthalEqualAreaRaw = Td, t.geoAzimuthalEquidistant = function() {
        return yd(Ad).scale(79.4188).clipAngle(179.999);
      }, t.geoAzimuthalEquidistantRaw = Ad, t.geoBounds = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2;
        if (Qf = Kf = -(Wf = Zf = 1 / 0), is = [], Lf(t2, Fs), e2 = is.length) {
          for (is.sort(Hs), n2 = 1, o2 = [r2 = is[0]]; n2 < e2; ++n2)
            Xs(r2, (i2 = is[n2])[0]) || Xs(r2, i2[1]) ? (js(r2[0], i2[1]) > js(r2[0], r2[1]) && (r2[1] = i2[1]), js(i2[0], r2[1]) > js(r2[0], r2[1]) && (r2[0] = i2[0])) : o2.push(r2 = i2);
          for (a2 = -1 / 0, n2 = 0, r2 = o2[e2 = o2.length - 1]; n2 <= e2; r2 = i2, ++n2)
            i2 = o2[n2], (u2 = js(r2[1], i2[0])) > a2 && (a2 = u2, Wf = i2[0], Kf = r2[1]);
        }
        return is = os = null, Wf === 1 / 0 || Zf === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Wf, Zf], [Kf, Qf]];
      }, t.geoCentroid = function(t2) {
        ms = xs = ws = Ms = Ts = As = Ss = Es = 0, Ns = new T(), ks = new T(), Cs = new T(), Lf(t2, Gs);
        var n2 = +Ns, e2 = +ks, r2 = +Cs, i2 = Ef(n2, e2, r2);
        return i2 < pf && (n2 = As, e2 = Ss, r2 = Es, xs < df && (n2 = ws, e2 = Ms, r2 = Ts), (i2 = Ef(n2, e2, r2)) < pf) ? [NaN, NaN] : [Mf(e2, n2) * bf, Rf(r2 / i2) * bf];
      }, t.geoCircle = function() {
        var t2, n2, e2 = il([0, 0]), r2 = il(90), i2 = il(6), o2 = { point: function(e3, r3) {
          t2.push(e3 = n2(e3, r3)), e3[0] *= bf, e3[1] *= bf;
        } };
        function a2() {
          var a3 = e2.apply(this, arguments), u2 = r2.apply(this, arguments) * mf, c2 = i2.apply(this, arguments) * mf;
          return t2 = [], n2 = ul(-a3[0] * mf, -a3[1] * mf, 0).invert, hl(o2, u2, c2, 1), a3 = { type: "Polygon", coordinates: [t2] }, t2 = n2 = null, a3;
        }
        return a2.center = function(t3) {
          return arguments.length ? (e2 = "function" == typeof t3 ? t3 : il([+t3[0], +t3[1]]), a2) : e2;
        }, a2.radius = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : il(+t3), a2) : r2;
        }, a2.precision = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : il(+t3), a2) : i2;
        }, a2;
      }, t.geoClipAntimeridian = Tl, t.geoClipCircle = Al, t.geoClipExtent = function() {
        var t2, n2, e2, r2 = 0, i2 = 0, o2 = 960, a2 = 500;
        return e2 = { stream: function(e3) {
          return t2 && n2 === e3 ? t2 : t2 = zl(r2, i2, o2, a2)(n2 = e3);
        }, extent: function(u2) {
          return arguments.length ? (r2 = +u2[0][0], i2 = +u2[0][1], o2 = +u2[1][0], a2 = +u2[1][1], t2 = n2 = null, e2) : [[r2, i2], [o2, a2]];
        } };
      }, t.geoClipRectangle = zl, t.geoConicConformal = function() {
        return _d(kd).scale(109.5).parallels([30, 30]);
      }, t.geoConicConformalRaw = kd, t.geoConicEqualArea = md, t.geoConicEqualAreaRaw = bd, t.geoConicEquidistant = function() {
        return _d(Pd).scale(131.154).center([0, 13.9389]);
      }, t.geoConicEquidistantRaw = Pd, t.geoContains = function(t2, n2) {
        return (t2 && Bl.hasOwnProperty(t2.type) ? Bl[t2.type] : Ll)(t2, n2);
      }, t.geoDistance = Ol, t.geoEqualEarth = function() {
        return yd(qd).scale(177.158);
      }, t.geoEqualEarthRaw = qd, t.geoEquirectangular = function() {
        return yd(Cd).scale(152.63);
      }, t.geoEquirectangularRaw = Cd, t.geoGnomonic = function() {
        return yd(Ud).scale(144.049).clipAngle(60);
      }, t.geoGnomonicRaw = Ud, t.geoGraticule = Kl, t.geoGraticule10 = function() {
        return Kl()();
      }, t.geoIdentity = function() {
        var t2, n2, e2, r2, i2, o2, a2, u2 = 1, c2 = 0, f2 = 0, s2 = 1, l2 = 1, h2 = 0, d2 = null, p2 = 1, g2 = 1, y2 = id({ point: function(t3, n3) {
          var e3 = b2([t3, n3]);
          this.stream.point(e3[0], e3[1]);
        } }), v2 = eh;
        function _2() {
          return p2 = u2 * s2, g2 = u2 * l2, o2 = a2 = null, b2;
        }
        function b2(e3) {
          var r3 = e3[0] * p2, i3 = e3[1] * g2;
          if (h2) {
            var o3 = i3 * t2 - r3 * n2;
            r3 = r3 * t2 + i3 * n2, i3 = o3;
          }
          return [r3 + c2, i3 + f2];
        }
        return b2.invert = function(e3) {
          var r3 = e3[0] - c2, i3 = e3[1] - f2;
          if (h2) {
            var o3 = i3 * t2 + r3 * n2;
            r3 = r3 * t2 - i3 * n2, i3 = o3;
          }
          return [r3 / p2, i3 / g2];
        }, b2.stream = function(t3) {
          return o2 && a2 === t3 ? o2 : o2 = y2(v2(a2 = t3));
        }, b2.postclip = function(t3) {
          return arguments.length ? (v2 = t3, d2 = e2 = r2 = i2 = null, _2()) : v2;
        }, b2.clipExtent = function(t3) {
          return arguments.length ? (v2 = null == t3 ? (d2 = e2 = r2 = i2 = null, eh) : zl(d2 = +t3[0][0], e2 = +t3[0][1], r2 = +t3[1][0], i2 = +t3[1][1]), _2()) : null == d2 ? null : [[d2, e2], [r2, i2]];
        }, b2.scale = function(t3) {
          return arguments.length ? (u2 = +t3, _2()) : u2;
        }, b2.translate = function(t3) {
          return arguments.length ? (c2 = +t3[0], f2 = +t3[1], _2()) : [c2, f2];
        }, b2.angle = function(e3) {
          return arguments.length ? (n2 = Cf(h2 = e3 % 360 * mf), t2 = Tf(h2), _2()) : h2 * bf;
        }, b2.reflectX = function(t3) {
          return arguments.length ? (s2 = t3 ? -1 : 1, _2()) : s2 < 0;
        }, b2.reflectY = function(t3) {
          return arguments.length ? (l2 = t3 ? -1 : 1, _2()) : l2 < 0;
        }, b2.fitExtent = function(t3, n3) {
          return ud(b2, t3, n3);
        }, b2.fitSize = function(t3, n3) {
          return cd(b2, t3, n3);
        }, b2.fitWidth = function(t3, n3) {
          return fd(b2, t3, n3);
        }, b2.fitHeight = function(t3, n3) {
          return sd(b2, t3, n3);
        }, b2;
      }, t.geoInterpolate = function(t2, n2) {
        var e2 = t2[0] * mf, r2 = t2[1] * mf, i2 = n2[0] * mf, o2 = n2[1] * mf, a2 = Tf(r2), u2 = Cf(r2), c2 = Tf(o2), f2 = Cf(o2), s2 = a2 * Tf(e2), l2 = a2 * Cf(e2), h2 = c2 * Tf(i2), d2 = c2 * Cf(i2), p2 = 2 * Rf(zf(Ff(o2 - r2) + a2 * c2 * Ff(i2 - e2))), g2 = Cf(p2), y2 = p2 ? function(t3) {
          var n3 = Cf(t3 *= p2) / g2, e3 = Cf(p2 - t3) / g2, r3 = e3 * s2 + n3 * h2, i3 = e3 * l2 + n3 * d2, o3 = e3 * u2 + n3 * f2;
          return [Mf(i3, r3) * bf, Mf(o3, zf(r3 * r3 + i3 * i3)) * bf];
        } : function() {
          return [e2 * bf, r2 * bf];
        };
        return y2.distance = p2, y2;
      }, t.geoLength = ql, t.geoMercator = function() {
        return Ed(Sd).scale(961 / _f);
      }, t.geoMercatorRaw = Sd, t.geoNaturalEarth1 = function() {
        return yd(Id).scale(175.295);
      }, t.geoNaturalEarth1Raw = Id, t.geoOrthographic = function() {
        return yd(Od).scale(249.5).clipAngle(90 + df);
      }, t.geoOrthographicRaw = Od, t.geoPath = function(t2, n2) {
        let e2, r2, i2 = 3, o2 = 4.5;
        function a2(t3) {
          return t3 && ("function" == typeof o2 && r2.pointRadius(+o2.apply(this, arguments)), Lf(t3, e2(r2))), r2.result();
        }
        return a2.area = function(t3) {
          return Lf(t3, e2(sh)), sh.result();
        }, a2.measure = function(t3) {
          return Lf(t3, e2(Kh)), Kh.result();
        }, a2.bounds = function(t3) {
          return Lf(t3, e2(mh)), mh.result();
        }, a2.centroid = function(t3) {
          return Lf(t3, e2(Oh)), Oh.result();
        }, a2.projection = function(n3) {
          return arguments.length ? (e2 = null == n3 ? (t2 = null, eh) : (t2 = n3).stream, a2) : t2;
        }, a2.context = function(t3) {
          return arguments.length ? (r2 = null == t3 ? (n2 = null, new ed(i2)) : new Bh(n2 = t3), "function" != typeof o2 && r2.pointRadius(o2), a2) : n2;
        }, a2.pointRadius = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : (r2.pointRadius(+t3), +t3), a2) : o2;
        }, a2.digits = function(t3) {
          if (!arguments.length)
            return i2;
          if (null == t3)
            i2 = null;
          else {
            const n3 = Math.floor(t3);
            if (!(n3 >= 0))
              throw new RangeError(`invalid digits: ${t3}`);
            i2 = n3;
          }
          return null === n2 && (r2 = new ed(i2)), a2;
        }, a2.projection(t2).digits(i2).context(n2);
      }, t.geoProjection = yd, t.geoProjectionMutator = vd, t.geoRotation = ll, t.geoStereographic = function() {
        return yd(Bd).scale(250).clipAngle(142);
      }, t.geoStereographicRaw = Bd, t.geoStream = Lf, t.geoTransform = function(t2) {
        return { stream: id(t2) };
      }, t.geoTransverseMercator = function() {
        var t2 = Ed(Yd), n2 = t2.center, e2 = t2.rotate;
        return t2.center = function(t3) {
          return arguments.length ? n2([-t3[1], t3[0]]) : [(t3 = n2())[1], -t3[0]];
        }, t2.rotate = function(t3) {
          return arguments.length ? e2([t3[0], t3[1], t3.length > 2 ? t3[2] + 90 : 90]) : [(t3 = e2())[0], t3[1], t3[2] - 90];
        }, e2([0, 0, 90]).scale(159.155);
      }, t.geoTransverseMercatorRaw = Yd, t.gray = function(t2, n2) {
        return new ur(t2, 0, 0, null == n2 ? 1 : n2);
      }, t.greatest = ot, t.greatestIndex = function(t2, e2 = n) {
        if (1 === e2.length)
          return tt(t2, e2);
        let r2, i2 = -1, o2 = -1;
        for (const n2 of t2)
          ++o2, (i2 < 0 ? 0 === e2(n2, n2) : e2(n2, r2) > 0) && (r2 = n2, i2 = o2);
        return i2;
      }, t.group = C, t.groupSort = function(t2, e2, r2) {
        return (2 !== e2.length ? U($(t2, e2, r2), ([t3, e3], [r3, i2]) => n(e3, i2) || n(t3, r3)) : U(C(t2, r2), ([t3, r3], [i2, o2]) => e2(r3, o2) || n(t3, i2))).map(([t3]) => t3);
      }, t.groups = P, t.hcl = dr, t.hierarchy = Gd, t.histogram = Q, t.hsl = He, t.html = Ec, t.image = function(t2, n2) {
        return new Promise(function(e2, r2) {
          var i2 = new Image();
          for (var o2 in n2)
            i2[o2] = n2[o2];
          i2.onerror = r2, i2.onload = function() {
            e2(i2);
          }, i2.src = t2;
        });
      }, t.index = function(t2, ...n2) {
        return F(t2, k, R, n2);
      }, t.indexes = function(t2, ...n2) {
        return F(t2, Array.from, R, n2);
      }, t.interpolate = Gr, t.interpolateArray = function(t2, n2) {
        return (Ir(n2) ? Ur : Or)(t2, n2);
      }, t.interpolateBasis = Er, t.interpolateBasisClosed = Nr, t.interpolateBlues = Xb, t.interpolateBrBG = ib, t.interpolateBuGn = wb, t.interpolateBuPu = Tb, t.interpolateCividis = function(t2) {
        return t2 = Math.max(0, Math.min(1, t2)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t2 * (35.34 - t2 * (2381.73 - t2 * (6402.7 - t2 * (7024.72 - 2710.57 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t2 * (170.73 + t2 * (52.82 - t2 * (131.46 - t2 * (176.58 - 67.37 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t2 * (442.36 - t2 * (2482.43 - t2 * (6167.24 - t2 * (6614.94 - 2475.67 * t2))))))) + ")";
      }, t.interpolateCool = om, t.interpolateCubehelix = li, t.interpolateCubehelixDefault = rm, t.interpolateCubehelixLong = hi, t.interpolateDate = Br, t.interpolateDiscrete = function(t2) {
        var n2 = t2.length;
        return function(e2) {
          return t2[Math.max(0, Math.min(n2 - 1, Math.floor(e2 * n2)))];
        };
      }, t.interpolateGnBu = Sb, t.interpolateGreens = Vb, t.interpolateGreys = Zb, t.interpolateHcl = ci, t.interpolateHclLong = fi, t.interpolateHsl = oi, t.interpolateHslLong = ai, t.interpolateHue = function(t2, n2) {
        var e2 = Pr(+t2, +n2);
        return function(t3) {
          var n3 = e2(t3);
          return n3 - 360 * Math.floor(n3 / 360);
        };
      }, t.interpolateInferno = dm, t.interpolateLab = function(t2, n2) {
        var e2 = $r((t2 = ar(t2)).l, (n2 = ar(n2)).l), r2 = $r(t2.a, n2.a), i2 = $r(t2.b, n2.b), o2 = $r(t2.opacity, n2.opacity);
        return function(n3) {
          return t2.l = e2(n3), t2.a = r2(n3), t2.b = i2(n3), t2.opacity = o2(n3), t2 + "";
        };
      }, t.interpolateMagma = hm, t.interpolateNumber = Yr, t.interpolateNumberArray = Ur, t.interpolateObject = Lr, t.interpolateOrRd = Nb, t.interpolateOranges = em, t.interpolatePRGn = ab, t.interpolatePiYG = cb, t.interpolatePlasma = pm, t.interpolatePuBu = zb, t.interpolatePuBuGn = Cb, t.interpolatePuOr = sb, t.interpolatePuRd = Db, t.interpolatePurples = Qb, t.interpolateRainbow = function(t2) {
        (t2 < 0 || t2 > 1) && (t2 -= Math.floor(t2));
        var n2 = Math.abs(t2 - 0.5);
        return am.h = 360 * t2 - 100, am.s = 1.5 - 1.5 * n2, am.l = 0.8 - 0.9 * n2, am + "";
      }, t.interpolateRdBu = hb, t.interpolateRdGy = pb, t.interpolateRdPu = Fb, t.interpolateRdYlBu = yb, t.interpolateRdYlGn = _b, t.interpolateReds = tm, t.interpolateRgb = Dr, t.interpolateRgbBasis = Fr, t.interpolateRgbBasisClosed = qr, t.interpolateRound = Vr, t.interpolateSinebow = function(t2) {
        var n2;
        return t2 = (0.5 - t2) * Math.PI, um.r = 255 * (n2 = Math.sin(t2)) * n2, um.g = 255 * (n2 = Math.sin(t2 + cm)) * n2, um.b = 255 * (n2 = Math.sin(t2 + fm)) * n2, um + "";
      }, t.interpolateSpectral = mb, t.interpolateString = Xr, t.interpolateTransformCss = ti, t.interpolateTransformSvg = ni, t.interpolateTurbo = function(t2) {
        return t2 = Math.max(0, Math.min(1, t2)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t2 * (1172.33 - t2 * (10793.56 - t2 * (33300.12 - t2 * (38394.49 - 14825.05 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t2 * (557.33 + t2 * (1225.33 - t2 * (3574.96 - t2 * (1073.77 + 707.56 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t2 * (3211.1 - t2 * (15327.97 - t2 * (27814 - t2 * (22569.18 - 6838.66 * t2))))))) + ")";
      }, t.interpolateViridis = lm, t.interpolateWarm = im, t.interpolateYlGn = Ob, t.interpolateYlGnBu = Ub, t.interpolateYlOrBr = Yb, t.interpolateYlOrRd = jb, t.interpolateZoom = ri, t.interrupt = Gi, t.intersection = function(t2, ...n2) {
        t2 = new InternSet(t2), n2 = n2.map(vt);
        t:
          for (const e2 of t2)
            for (const r2 of n2)
              if (!r2.has(e2)) {
                t2.delete(e2);
                continue t;
              }
        return t2;
      }, t.interval = function(t2, n2, e2) {
        var r2 = new Ei(), i2 = n2;
        return null == n2 ? (r2.restart(t2, n2, e2), r2) : (r2._restart = r2.restart, r2.restart = function(t3, n3, e3) {
          n3 = +n3, e3 = null == e3 ? Ai() : +e3, r2._restart(function o2(a2) {
            a2 += i2, r2._restart(o2, i2 += n3, e3), t3(a2);
          }, n3, e3);
        }, r2.restart(t2, n2, e2), r2);
      }, t.isoFormat = D_, t.isoParse = F_, t.json = function(t2, n2) {
        return fetch(t2, n2).then(Tc);
      }, t.lab = ar, t.lch = function(t2, n2, e2, r2) {
        return 1 === arguments.length ? hr(t2) : new pr(e2, n2, t2, null == r2 ? 1 : r2);
      }, t.least = function(t2, e2 = n) {
        let r2, i2 = false;
        if (1 === e2.length) {
          let o2;
          for (const a2 of t2) {
            const t3 = e2(a2);
            (i2 ? n(t3, o2) < 0 : 0 === n(t3, t3)) && (r2 = a2, o2 = t3, i2 = true);
          }
        } else
          for (const n2 of t2)
            (i2 ? e2(n2, r2) < 0 : 0 === e2(n2, n2)) && (r2 = n2, i2 = true);
        return r2;
      }, t.leastIndex = ht, t.line = Bm, t.lineRadial = Wm, t.link = ox, t.linkHorizontal = function() {
        return ox(tx);
      }, t.linkRadial = function() {
        const t2 = ox(ex);
        return t2.angle = t2.x, delete t2.x, t2.radius = t2.y, delete t2.y, t2;
      }, t.linkVertical = function() {
        return ox(nx);
      }, t.local = Qn, t.map = function(t2, n2) {
        if ("function" != typeof t2[Symbol.iterator])
          throw new TypeError("values is not iterable");
        if ("function" != typeof n2)
          throw new TypeError("mapper is not a function");
        return Array.from(t2, (e2, r2) => n2(e2, r2, t2));
      }, t.matcher = Vt, t.max = J, t.maxIndex = tt, t.mean = function(t2, n2) {
        let e2 = 0, r2 = 0;
        if (void 0 === n2)
          for (let n3 of t2)
            null != n3 && (n3 = +n3) >= n3 && (++e2, r2 += n3);
        else {
          let i2 = -1;
          for (let o2 of t2)
            null != (o2 = n2(o2, ++i2, t2)) && (o2 = +o2) >= o2 && (++e2, r2 += o2);
        }
        if (e2)
          return r2 / e2;
      }, t.median = function(t2, n2) {
        return at(t2, 0.5, n2);
      }, t.medianIndex = function(t2, n2) {
        return ct(t2, 0.5, n2);
      }, t.merge = ft, t.min = nt, t.minIndex = et, t.mode = function(t2, n2) {
        const e2 = new InternMap();
        if (void 0 === n2)
          for (let n3 of t2)
            null != n3 && n3 >= n3 && e2.set(n3, (e2.get(n3) || 0) + 1);
        else {
          let r3 = -1;
          for (let i3 of t2)
            null != (i3 = n2(i3, ++r3, t2)) && i3 >= i3 && e2.set(i3, (e2.get(i3) || 0) + 1);
        }
        let r2, i2 = 0;
        for (const [t3, n3] of e2)
          n3 > i2 && (i2 = n3, r2 = t3);
        return r2;
      }, t.namespace = It, t.namespaces = Ut, t.nice = Z, t.now = Ai, t.pack = function() {
        var t2 = null, n2 = 1, e2 = 1, r2 = np;
        function i2(i3) {
          const o2 = ap();
          return i3.x = n2 / 2, i3.y = e2 / 2, t2 ? i3.eachBefore(xp(t2)).eachAfter(wp(r2, 0.5, o2)).eachBefore(Mp(1)) : i3.eachBefore(xp(mp)).eachAfter(wp(np, 1, o2)).eachAfter(wp(r2, i3.r / Math.min(n2, e2), o2)).eachBefore(Mp(Math.min(n2, e2) / (2 * i3.r))), i3;
        }
        return i2.radius = function(n3) {
          return arguments.length ? (t2 = Jd(n3), i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (n2 = +t3[0], e2 = +t3[1], i2) : [n2, e2];
        }, i2.padding = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : ep(+t3), i2) : r2;
        }, i2;
      }, t.packEnclose = function(t2) {
        return up(t2, ap());
      }, t.packSiblings = function(t2) {
        return bp(t2, ap()), t2;
      }, t.pairs = function(t2, n2 = st) {
        const e2 = [];
        let r2, i2 = false;
        for (const o2 of t2)
          i2 && e2.push(n2(r2, o2)), r2 = o2, i2 = true;
        return e2;
      }, t.partition = function() {
        var t2 = 1, n2 = 1, e2 = 0, r2 = false;
        function i2(i3) {
          var o2 = i3.height + 1;
          return i3.x0 = i3.y0 = e2, i3.x1 = t2, i3.y1 = n2 / o2, i3.eachBefore(/* @__PURE__ */ function(t3, n3) {
            return function(r3) {
              r3.children && Ap(r3, r3.x0, t3 * (r3.depth + 1) / n3, r3.x1, t3 * (r3.depth + 2) / n3);
              var i4 = r3.x0, o3 = r3.y0, a2 = r3.x1 - e2, u2 = r3.y1 - e2;
              a2 < i4 && (i4 = a2 = (i4 + a2) / 2), u2 < o3 && (o3 = u2 = (o3 + u2) / 2), r3.x0 = i4, r3.y0 = o3, r3.x1 = a2, r3.y1 = u2;
            };
          }(n2, o2)), r2 && i3.eachBefore(Tp), i3;
        }
        return i2.round = function(t3) {
          return arguments.length ? (r2 = !!t3, i2) : r2;
        }, i2.size = function(e3) {
          return arguments.length ? (t2 = +e3[0], n2 = +e3[1], i2) : [t2, n2];
        }, i2.padding = function(t3) {
          return arguments.length ? (e2 = +t3, i2) : e2;
        }, i2;
      }, t.path = Ia, t.pathRound = function(t2 = 3) {
        return new Ua(+t2);
      }, t.permute = q, t.pie = function() {
        var t2 = jm, n2 = Lm, e2 = null, r2 = gm(0), i2 = gm(Sm), o2 = gm(0);
        function a2(a3) {
          var u2, c2, f2, s2, l2, h2 = (a3 = Fm(a3)).length, d2 = 0, p2 = new Array(h2), g2 = new Array(h2), y2 = +r2.apply(this, arguments), v2 = Math.min(Sm, Math.max(-Sm, i2.apply(this, arguments) - y2)), _2 = Math.min(Math.abs(v2) / h2, o2.apply(this, arguments)), b2 = _2 * (v2 < 0 ? -1 : 1);
          for (u2 = 0; u2 < h2; ++u2)
            (l2 = g2[p2[u2] = u2] = +t2(a3[u2], u2, a3)) > 0 && (d2 += l2);
          for (null != n2 ? p2.sort(function(t3, e3) {
            return n2(g2[t3], g2[e3]);
          }) : null != e2 && p2.sort(function(t3, n3) {
            return e2(a3[t3], a3[n3]);
          }), u2 = 0, f2 = d2 ? (v2 - h2 * b2) / d2 : 0; u2 < h2; ++u2, y2 = s2)
            c2 = p2[u2], s2 = y2 + ((l2 = g2[c2]) > 0 ? l2 * f2 : 0) + b2, g2[c2] = { data: a3[c2], index: u2, value: l2, startAngle: y2, endAngle: s2, padAngle: _2 };
          return g2;
        }
        return a2.value = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(+n3), a2) : t2;
        }, a2.sortValues = function(t3) {
          return arguments.length ? (n2 = t3, e2 = null, a2) : n2;
        }, a2.sort = function(t3) {
          return arguments.length ? (e2 = t3, n2 = null, a2) : e2;
        }, a2.startAngle = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : gm(+t3), a2) : r2;
        }, a2.endAngle = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : gm(+t3), a2) : i2;
        }, a2.padAngle = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : gm(+t3), a2) : o2;
        }, a2;
      }, t.piecewise = di, t.pointRadial = Km, t.pointer = ne, t.pointers = function(t2, n2) {
        return t2.target && (t2 = te(t2), void 0 === n2 && (n2 = t2.currentTarget), t2 = t2.touches || [t2]), Array.from(t2, (t3) => ne(t3, n2));
      }, t.polygonArea = function(t2) {
        for (var n2, e2 = -1, r2 = t2.length, i2 = t2[r2 - 1], o2 = 0; ++e2 < r2; )
          n2 = i2, i2 = t2[e2], o2 += n2[1] * i2[0] - n2[0] * i2[1];
        return o2 / 2;
      }, t.polygonCentroid = function(t2) {
        for (var n2, e2, r2 = -1, i2 = t2.length, o2 = 0, a2 = 0, u2 = t2[i2 - 1], c2 = 0; ++r2 < i2; )
          n2 = u2, u2 = t2[r2], c2 += e2 = n2[0] * u2[1] - u2[0] * n2[1], o2 += (n2[0] + u2[0]) * e2, a2 += (n2[1] + u2[1]) * e2;
        return [o2 / (c2 *= 3), a2 / c2];
      }, t.polygonContains = function(t2, n2) {
        for (var e2, r2, i2 = t2.length, o2 = t2[i2 - 1], a2 = n2[0], u2 = n2[1], c2 = o2[0], f2 = o2[1], s2 = false, l2 = 0; l2 < i2; ++l2)
          e2 = (o2 = t2[l2])[0], (r2 = o2[1]) > u2 != f2 > u2 && a2 < (c2 - e2) * (u2 - r2) / (f2 - r2) + e2 && (s2 = !s2), c2 = e2, f2 = r2;
        return s2;
      }, t.polygonHull = function(t2) {
        if ((e2 = t2.length) < 3)
          return null;
        var n2, e2, r2 = new Array(e2), i2 = new Array(e2);
        for (n2 = 0; n2 < e2; ++n2)
          r2[n2] = [+t2[n2][0], +t2[n2][1], n2];
        for (r2.sort(Hp), n2 = 0; n2 < e2; ++n2)
          i2[n2] = [r2[n2][0], -r2[n2][1]];
        var o2 = Xp(r2), a2 = Xp(i2), u2 = a2[0] === o2[0], c2 = a2[a2.length - 1] === o2[o2.length - 1], f2 = [];
        for (n2 = o2.length - 1; n2 >= 0; --n2)
          f2.push(t2[r2[o2[n2]][2]]);
        for (n2 = +u2; n2 < a2.length - c2; ++n2)
          f2.push(t2[r2[a2[n2]][2]]);
        return f2;
      }, t.polygonLength = function(t2) {
        for (var n2, e2, r2 = -1, i2 = t2.length, o2 = t2[i2 - 1], a2 = o2[0], u2 = o2[1], c2 = 0; ++r2 < i2; )
          n2 = a2, e2 = u2, n2 -= a2 = (o2 = t2[r2])[0], e2 -= u2 = o2[1], c2 += Math.hypot(n2, e2);
        return c2;
      }, t.precisionFixed = sf, t.precisionPrefix = lf, t.precisionRound = hf, t.quadtree = $c, t.quantile = at, t.quantileIndex = ct, t.quantileSorted = ut, t.quantize = function(t2, n2) {
        for (var e2 = new Array(n2), r2 = 0; r2 < n2; ++r2)
          e2[r2] = t2(r2 / (n2 - 1));
        return e2;
      }, t.quickselect = rt, t.radialArea = Zm, t.radialLine = Wm, t.randomBates = Jp, t.randomBernoulli = eg, t.randomBeta = og, t.randomBinomial = ag, t.randomCauchy = cg, t.randomExponential = tg, t.randomGamma = ig, t.randomGeometric = rg, t.randomInt = Wp, t.randomIrwinHall = Qp, t.randomLcg = function(t2 = Math.random()) {
        let n2 = 0 | (0 <= t2 && t2 < 1 ? t2 / lg : Math.abs(t2));
        return () => (n2 = 1664525 * n2 + 1013904223 | 0, lg * (n2 >>> 0));
      }, t.randomLogNormal = Kp, t.randomLogistic = fg, t.randomNormal = Zp, t.randomPareto = ng, t.randomPoisson = sg, t.randomUniform = Vp, t.randomWeibull = ug, t.range = lt, t.rank = function(t2, e2 = n) {
        if ("function" != typeof t2[Symbol.iterator])
          throw new TypeError("values is not iterable");
        let r2 = Array.from(t2);
        const i2 = new Float64Array(r2.length);
        2 !== e2.length && (r2 = r2.map(e2), e2 = n);
        const o2 = (t3, n2) => e2(r2[t3], r2[n2]);
        let a2, u2;
        return (t2 = Uint32Array.from(r2, (t3, n2) => n2)).sort(e2 === n ? (t3, n2) => O(r2[t3], r2[n2]) : I(o2)), t2.forEach((t3, n2) => {
          const e3 = o2(t3, void 0 === a2 ? t3 : a2);
          e3 >= 0 ? ((void 0 === a2 || e3 > 0) && (a2 = t3, u2 = n2), i2[t3] = u2) : i2[t3] = NaN;
        }), i2;
      }, t.reduce = function(t2, n2, e2) {
        if ("function" != typeof n2)
          throw new TypeError("reducer is not a function");
        const r2 = t2[Symbol.iterator]();
        let i2, o2, a2 = -1;
        if (arguments.length < 3) {
          if ({ done: i2, value: e2 } = r2.next(), i2)
            return;
          ++a2;
        }
        for (; { done: i2, value: o2 } = r2.next(), !i2; )
          e2 = n2(e2, o2, ++a2, t2);
        return e2;
      }, t.reverse = function(t2) {
        if ("function" != typeof t2[Symbol.iterator])
          throw new TypeError("values is not iterable");
        return Array.from(t2).reverse();
      }, t.rgb = Fe, t.ribbon = function() {
        return Wa();
      }, t.ribbonArrow = function() {
        return Wa(Va);
      }, t.rollup = $, t.rollups = D, t.scaleBand = yg, t.scaleDiverging = function t2() {
        var n2 = Ng(L_()(mg));
        return n2.copy = function() {
          return B_(n2, t2());
        }, dg.apply(n2, arguments);
      }, t.scaleDivergingLog = function t2() {
        var n2 = Fg(L_()).domain([0.1, 1, 10]);
        return n2.copy = function() {
          return B_(n2, t2()).base(n2.base());
        }, dg.apply(n2, arguments);
      }, t.scaleDivergingPow = j_, t.scaleDivergingSqrt = function() {
        return j_.apply(null, arguments).exponent(0.5);
      }, t.scaleDivergingSymlog = function t2() {
        var n2 = Ig(L_());
        return n2.copy = function() {
          return B_(n2, t2()).constant(n2.constant());
        }, dg.apply(n2, arguments);
      }, t.scaleIdentity = function t2(n2) {
        var e2;
        function r2(t3) {
          return null == t3 || isNaN(t3 = +t3) ? e2 : t3;
        }
        return r2.invert = r2, r2.domain = r2.range = function(t3) {
          return arguments.length ? (n2 = Array.from(t3, _g), r2) : n2.slice();
        }, r2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, r2) : e2;
        }, r2.copy = function() {
          return t2(n2).unknown(e2);
        }, n2 = arguments.length ? Array.from(n2, _g) : [0, 1], Ng(r2);
      }, t.scaleImplicit = pg, t.scaleLinear = function t2() {
        var n2 = Sg();
        return n2.copy = function() {
          return Tg(n2, t2());
        }, hg.apply(n2, arguments), Ng(n2);
      }, t.scaleLog = function t2() {
        const n2 = Fg(Ag()).domain([1, 10]);
        return n2.copy = () => Tg(n2, t2()).base(n2.base()), hg.apply(n2, arguments), n2;
      }, t.scaleOrdinal = gg, t.scalePoint = function() {
        return vg(yg.apply(null, arguments).paddingInner(1));
      }, t.scalePow = jg, t.scaleQuantile = function t2() {
        var e2, r2 = [], i2 = [], o2 = [];
        function a2() {
          var t3 = 0, n2 = Math.max(1, i2.length);
          for (o2 = new Array(n2 - 1); ++t3 < n2; )
            o2[t3 - 1] = ut(r2, t3 / n2);
          return u2;
        }
        function u2(t3) {
          return null == t3 || isNaN(t3 = +t3) ? e2 : i2[s(o2, t3)];
        }
        return u2.invertExtent = function(t3) {
          var n2 = i2.indexOf(t3);
          return n2 < 0 ? [NaN, NaN] : [n2 > 0 ? o2[n2 - 1] : r2[0], n2 < o2.length ? o2[n2] : r2[r2.length - 1]];
        }, u2.domain = function(t3) {
          if (!arguments.length)
            return r2.slice();
          r2 = [];
          for (let n2 of t3)
            null == n2 || isNaN(n2 = +n2) || r2.push(n2);
          return r2.sort(n), a2();
        }, u2.range = function(t3) {
          return arguments.length ? (i2 = Array.from(t3), a2()) : i2.slice();
        }, u2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, u2) : e2;
        }, u2.quantiles = function() {
          return o2.slice();
        }, u2.copy = function() {
          return t2().domain(r2).range(i2).unknown(e2);
        }, hg.apply(u2, arguments);
      }, t.scaleQuantize = function t2() {
        var n2, e2 = 0, r2 = 1, i2 = 1, o2 = [0.5], a2 = [0, 1];
        function u2(t3) {
          return null != t3 && t3 <= t3 ? a2[s(o2, t3, 0, i2)] : n2;
        }
        function c2() {
          var t3 = -1;
          for (o2 = new Array(i2); ++t3 < i2; )
            o2[t3] = ((t3 + 1) * r2 - (t3 - i2) * e2) / (i2 + 1);
          return u2;
        }
        return u2.domain = function(t3) {
          return arguments.length ? ([e2, r2] = t3, e2 = +e2, r2 = +r2, c2()) : [e2, r2];
        }, u2.range = function(t3) {
          return arguments.length ? (i2 = (a2 = Array.from(t3)).length - 1, c2()) : a2.slice();
        }, u2.invertExtent = function(t3) {
          var n3 = a2.indexOf(t3);
          return n3 < 0 ? [NaN, NaN] : n3 < 1 ? [e2, o2[0]] : n3 >= i2 ? [o2[i2 - 1], r2] : [o2[n3 - 1], o2[n3]];
        }, u2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, u2) : u2;
        }, u2.thresholds = function() {
          return o2.slice();
        }, u2.copy = function() {
          return t2().domain([e2, r2]).range(a2).unknown(n2);
        }, hg.apply(Ng(u2), arguments);
      }, t.scaleRadial = function t2() {
        var n2, e2 = Sg(), r2 = [0, 1], i2 = false;
        function o2(t3) {
          var r3 = function(t4) {
            return Math.sign(t4) * Math.sqrt(Math.abs(t4));
          }(e2(t3));
          return isNaN(r3) ? n2 : i2 ? Math.round(r3) : r3;
        }
        return o2.invert = function(t3) {
          return e2.invert(Hg(t3));
        }, o2.domain = function(t3) {
          return arguments.length ? (e2.domain(t3), o2) : e2.domain();
        }, o2.range = function(t3) {
          return arguments.length ? (e2.range((r2 = Array.from(t3, _g)).map(Hg)), o2) : r2.slice();
        }, o2.rangeRound = function(t3) {
          return o2.range(t3).round(true);
        }, o2.round = function(t3) {
          return arguments.length ? (i2 = !!t3, o2) : i2;
        }, o2.clamp = function(t3) {
          return arguments.length ? (e2.clamp(t3), o2) : e2.clamp();
        }, o2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, o2) : n2;
        }, o2.copy = function() {
          return t2(e2.domain(), r2).round(i2).clamp(e2.clamp()).unknown(n2);
        }, hg.apply(o2, arguments), Ng(o2);
      }, t.scaleSequential = function t2() {
        var n2 = Ng(O_()(mg));
        return n2.copy = function() {
          return B_(n2, t2());
        }, dg.apply(n2, arguments);
      }, t.scaleSequentialLog = function t2() {
        var n2 = Fg(O_()).domain([1, 10]);
        return n2.copy = function() {
          return B_(n2, t2()).base(n2.base());
        }, dg.apply(n2, arguments);
      }, t.scaleSequentialPow = Y_, t.scaleSequentialQuantile = function t2() {
        var e2 = [], r2 = mg;
        function i2(t3) {
          if (null != t3 && !isNaN(t3 = +t3))
            return r2((s(e2, t3, 1) - 1) / (e2.length - 1));
        }
        return i2.domain = function(t3) {
          if (!arguments.length)
            return e2.slice();
          e2 = [];
          for (let n2 of t3)
            null == n2 || isNaN(n2 = +n2) || e2.push(n2);
          return e2.sort(n), i2;
        }, i2.interpolator = function(t3) {
          return arguments.length ? (r2 = t3, i2) : r2;
        }, i2.range = function() {
          return e2.map((t3, n2) => r2(n2 / (e2.length - 1)));
        }, i2.quantiles = function(t3) {
          return Array.from({ length: t3 + 1 }, (n2, r3) => at(e2, r3 / t3));
        }, i2.copy = function() {
          return t2(r2).domain(e2);
        }, dg.apply(i2, arguments);
      }, t.scaleSequentialSqrt = function() {
        return Y_.apply(null, arguments).exponent(0.5);
      }, t.scaleSequentialSymlog = function t2() {
        var n2 = Ig(O_());
        return n2.copy = function() {
          return B_(n2, t2()).constant(n2.constant());
        }, dg.apply(n2, arguments);
      }, t.scaleSqrt = function() {
        return jg.apply(null, arguments).exponent(0.5);
      }, t.scaleSymlog = function t2() {
        var n2 = Ig(Ag());
        return n2.copy = function() {
          return Tg(n2, t2()).constant(n2.constant());
        }, hg.apply(n2, arguments);
      }, t.scaleThreshold = function t2() {
        var n2, e2 = [0.5], r2 = [0, 1], i2 = 1;
        function o2(t3) {
          return null != t3 && t3 <= t3 ? r2[s(e2, t3, 0, i2)] : n2;
        }
        return o2.domain = function(t3) {
          return arguments.length ? (e2 = Array.from(t3), i2 = Math.min(e2.length, r2.length - 1), o2) : e2.slice();
        }, o2.range = function(t3) {
          return arguments.length ? (r2 = Array.from(t3), i2 = Math.min(e2.length, r2.length - 1), o2) : r2.slice();
        }, o2.invertExtent = function(t3) {
          var n3 = r2.indexOf(t3);
          return [e2[n3 - 1], e2[n3]];
        }, o2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, o2) : n2;
        }, o2.copy = function() {
          return t2().domain(e2).range(r2).unknown(n2);
        }, hg.apply(o2, arguments);
      }, t.scaleTime = function() {
        return hg.apply(I_(uv, cv, tv, Zy, xy, py, sy, ay, iy, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      }, t.scaleUtc = function() {
        return hg.apply(I_(ov, av, ev, Qy, Fy, yy, hy, cy, iy, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
      }, t.scan = function(t2, n2) {
        const e2 = ht(t2, n2);
        return e2 < 0 ? void 0 : e2;
      }, t.schemeAccent = G_, t.schemeBlues = Hb, t.schemeBrBG = rb, t.schemeBuGn = xb, t.schemeBuPu = Mb, t.schemeCategory10 = X_, t.schemeDark2 = V_, t.schemeGnBu = Ab, t.schemeGreens = Gb, t.schemeGreys = Wb, t.schemeOrRd = Eb, t.schemeOranges = nm, t.schemePRGn = ob, t.schemePaired = W_, t.schemePastel1 = Z_, t.schemePastel2 = K_, t.schemePiYG = ub, t.schemePuBu = Pb, t.schemePuBuGn = kb, t.schemePuOr = fb, t.schemePuRd = $b, t.schemePurples = Kb, t.schemeRdBu = lb, t.schemeRdGy = db, t.schemeRdPu = Rb, t.schemeRdYlBu = gb, t.schemeRdYlGn = vb, t.schemeReds = Jb, t.schemeSet1 = Q_, t.schemeSet2 = J_, t.schemeSet3 = tb, t.schemeSpectral = bb, t.schemeTableau10 = nb, t.schemeYlGn = Ib, t.schemeYlGnBu = qb, t.schemeYlOrBr = Bb, t.schemeYlOrRd = Lb, t.select = Zn, t.selectAll = function(t2) {
        return "string" == typeof t2 ? new Vn([document.querySelectorAll(t2)], [document.documentElement]) : new Vn([Ht(t2)], Gn);
      }, t.selection = Wn, t.selector = jt, t.selectorAll = Gt, t.shuffle = dt, t.shuffler = pt, t.some = function(t2, n2) {
        if ("function" != typeof n2)
          throw new TypeError("test is not a function");
        let e2 = -1;
        for (const r2 of t2)
          if (n2(r2, ++e2, t2))
            return true;
        return false;
      }, t.sort = U, t.stack = function() {
        var t2 = gm([]), n2 = hw, e2 = lw, r2 = dw;
        function i2(i3) {
          var o2, a2, u2 = Array.from(t2.apply(this, arguments), pw), c2 = u2.length, f2 = -1;
          for (const t3 of i3)
            for (o2 = 0, ++f2; o2 < c2; ++o2)
              (u2[o2][f2] = [0, +r2(t3, u2[o2].key, f2, i3)]).data = t3;
          for (o2 = 0, a2 = Fm(n2(u2)); o2 < c2; ++o2)
            u2[a2[o2]].index = o2;
          return e2(u2, a2), u2;
        }
        return i2.keys = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(Array.from(n3)), i2) : t2;
        }, i2.value = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : gm(+t3), i2) : r2;
        }, i2.order = function(t3) {
          return arguments.length ? (n2 = null == t3 ? hw : "function" == typeof t3 ? t3 : gm(Array.from(t3)), i2) : n2;
        }, i2.offset = function(t3) {
          return arguments.length ? (e2 = null == t3 ? lw : t3, i2) : e2;
        }, i2;
      }, t.stackOffsetDiverging = function(t2, n2) {
        if ((u2 = t2.length) > 0)
          for (var e2, r2, i2, o2, a2, u2, c2 = 0, f2 = t2[n2[0]].length; c2 < f2; ++c2)
            for (o2 = a2 = 0, e2 = 0; e2 < u2; ++e2)
              (i2 = (r2 = t2[n2[e2]][c2])[1] - r2[0]) > 0 ? (r2[0] = o2, r2[1] = o2 += i2) : i2 < 0 ? (r2[1] = a2, r2[0] = a2 += i2) : (r2[0] = 0, r2[1] = i2);
      }, t.stackOffsetExpand = function(t2, n2) {
        if ((r2 = t2.length) > 0) {
          for (var e2, r2, i2, o2 = 0, a2 = t2[0].length; o2 < a2; ++o2) {
            for (i2 = e2 = 0; e2 < r2; ++e2)
              i2 += t2[e2][o2][1] || 0;
            if (i2)
              for (e2 = 0; e2 < r2; ++e2)
                t2[e2][o2][1] /= i2;
          }
          lw(t2, n2);
        }
      }, t.stackOffsetNone = lw, t.stackOffsetSilhouette = function(t2, n2) {
        if ((e2 = t2.length) > 0) {
          for (var e2, r2 = 0, i2 = t2[n2[0]], o2 = i2.length; r2 < o2; ++r2) {
            for (var a2 = 0, u2 = 0; a2 < e2; ++a2)
              u2 += t2[a2][r2][1] || 0;
            i2[r2][1] += i2[r2][0] = -u2 / 2;
          }
          lw(t2, n2);
        }
      }, t.stackOffsetWiggle = function(t2, n2) {
        if ((i2 = t2.length) > 0 && (r2 = (e2 = t2[n2[0]]).length) > 0) {
          for (var e2, r2, i2, o2 = 0, a2 = 1; a2 < r2; ++a2) {
            for (var u2 = 0, c2 = 0, f2 = 0; u2 < i2; ++u2) {
              for (var s2 = t2[n2[u2]], l2 = s2[a2][1] || 0, h2 = (l2 - (s2[a2 - 1][1] || 0)) / 2, d2 = 0; d2 < u2; ++d2) {
                var p2 = t2[n2[d2]];
                h2 += (p2[a2][1] || 0) - (p2[a2 - 1][1] || 0);
              }
              c2 += l2, f2 += h2 * l2;
            }
            e2[a2 - 1][1] += e2[a2 - 1][0] = o2, c2 && (o2 -= f2 / c2);
          }
          e2[a2 - 1][1] += e2[a2 - 1][0] = o2, lw(t2, n2);
        }
      }, t.stackOrderAppearance = gw, t.stackOrderAscending = vw, t.stackOrderDescending = function(t2) {
        return vw(t2).reverse();
      }, t.stackOrderInsideOut = function(t2) {
        var n2, e2, r2 = t2.length, i2 = t2.map(_w), o2 = gw(t2), a2 = 0, u2 = 0, c2 = [], f2 = [];
        for (n2 = 0; n2 < r2; ++n2)
          e2 = o2[n2], a2 < u2 ? (a2 += i2[e2], c2.push(e2)) : (u2 += i2[e2], f2.push(e2));
        return f2.reverse().concat(c2);
      }, t.stackOrderNone = hw, t.stackOrderReverse = function(t2) {
        return hw(t2).reverse();
      }, t.stratify = function() {
        var t2, n2 = kp, e2 = Cp;
        function r2(r3) {
          var i2, o2, a2, u2, c2, f2, s2, l2, h2 = Array.from(r3), d2 = n2, p2 = e2, g2 = /* @__PURE__ */ new Map();
          if (null != t2) {
            const n3 = h2.map((n4, e4) => function(t3) {
              t3 = `${t3}`;
              let n5 = t3.length;
              zp(t3, n5 - 1) && !zp(t3, n5 - 2) && (t3 = t3.slice(0, -1));
              return "/" === t3[0] ? t3 : `/${t3}`;
            }(t2(n4, e4, r3))), e3 = n3.map(Pp), i3 = new Set(n3).add("");
            for (const t3 of e3)
              i3.has(t3) || (i3.add(t3), n3.push(t3), e3.push(Pp(t3)), h2.push(Np));
            d2 = (t3, e4) => n3[e4], p2 = (t3, n4) => e3[n4];
          }
          for (a2 = 0, i2 = h2.length; a2 < i2; ++a2)
            o2 = h2[a2], f2 = h2[a2] = new Qd(o2), null != (s2 = d2(o2, a2, r3)) && (s2 += "") && (l2 = f2.id = s2, g2.set(l2, g2.has(l2) ? Ep : f2)), null != (s2 = p2(o2, a2, r3)) && (s2 += "") && (f2.parent = s2);
          for (a2 = 0; a2 < i2; ++a2)
            if (s2 = (f2 = h2[a2]).parent) {
              if (!(c2 = g2.get(s2)))
                throw new Error("missing: " + s2);
              if (c2 === Ep)
                throw new Error("ambiguous: " + s2);
              c2.children ? c2.children.push(f2) : c2.children = [f2], f2.parent = c2;
            } else {
              if (u2)
                throw new Error("multiple roots");
              u2 = f2;
            }
          if (!u2)
            throw new Error("no root");
          if (null != t2) {
            for (; u2.data === Np && 1 === u2.children.length; )
              u2 = u2.children[0], --i2;
            for (let t3 = h2.length - 1; t3 >= 0 && (f2 = h2[t3]).data === Np; --t3)
              f2.data = null;
          }
          if (u2.parent = Sp, u2.eachBefore(function(t3) {
            t3.depth = t3.parent.depth + 1, --i2;
          }).eachBefore(Kd), u2.parent = null, i2 > 0)
            throw new Error("cycle");
          return u2;
        }
        return r2.id = function(t3) {
          return arguments.length ? (n2 = Jd(t3), r2) : n2;
        }, r2.parentId = function(t3) {
          return arguments.length ? (e2 = Jd(t3), r2) : e2;
        }, r2.path = function(n3) {
          return arguments.length ? (t2 = Jd(n3), r2) : t2;
        }, r2;
      }, t.style = _n, t.subset = function(t2, n2) {
        return _t(n2, t2);
      }, t.sum = function(t2, n2) {
        let e2 = 0;
        if (void 0 === n2)
          for (let n3 of t2)
            (n3 = +n3) && (e2 += n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = +n2(i2, ++r2, t2)) && (e2 += i2);
        }
        return e2;
      }, t.superset = _t, t.svg = Nc, t.symbol = function(t2, n2) {
        let e2 = null, r2 = Nm(i2);
        function i2() {
          let i3;
          if (e2 || (e2 = i3 = r2()), t2.apply(this, arguments).draw(e2, +n2.apply(this, arguments)), i3)
            return e2 = null, i3 + "" || null;
        }
        return t2 = "function" == typeof t2 ? t2 : gm(t2 || cx), n2 = "function" == typeof n2 ? n2 : gm(void 0 === n2 ? 64 : +n2), i2.type = function(n3) {
          return arguments.length ? (t2 = "function" == typeof n3 ? n3 : gm(n3), i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (n2 = "function" == typeof t3 ? t3 : gm(+t3), i2) : n2;
        }, i2.context = function(t3) {
          return arguments.length ? (e2 = null == t3 ? null : t3, i2) : e2;
        }, i2;
      }, t.symbolAsterisk = ux, t.symbolCircle = cx, t.symbolCross = fx, t.symbolDiamond = hx, t.symbolDiamond2 = dx, t.symbolPlus = px, t.symbolSquare = gx, t.symbolSquare2 = yx, t.symbolStar = mx, t.symbolTimes = Cx, t.symbolTriangle = wx, t.symbolTriangle2 = Tx, t.symbolWye = kx, t.symbolX = Cx, t.symbols = Px, t.symbolsFill = Px, t.symbolsStroke = zx, t.text = mc, t.thresholdFreedmanDiaconis = function(t2, n2, e2) {
        const r2 = v(t2), i2 = at(t2, 0.75) - at(t2, 0.25);
        return r2 && i2 ? Math.ceil((e2 - n2) / (2 * i2 * Math.pow(r2, -1 / 3))) : 1;
      }, t.thresholdScott = function(t2, n2, e2) {
        const r2 = v(t2), i2 = w(t2);
        return r2 && i2 ? Math.ceil((e2 - n2) * Math.cbrt(r2) / (3.49 * i2)) : 1;
      }, t.thresholdSturges = K, t.tickFormat = Eg, t.tickIncrement = V, t.tickStep = W, t.ticks = G, t.timeDay = py, t.timeDays = gy, t.timeFormatDefaultLocale = P_, t.timeFormatLocale = hv, t.timeFriday = Sy, t.timeFridays = $y, t.timeHour = sy, t.timeHours = ly, t.timeInterval = Vg, t.timeMillisecond = Wg, t.timeMilliseconds = Zg, t.timeMinute = ay, t.timeMinutes = uy, t.timeMonday = wy, t.timeMondays = ky, t.timeMonth = Zy, t.timeMonths = Ky, t.timeSaturday = Ey, t.timeSaturdays = Dy, t.timeSecond = iy, t.timeSeconds = oy, t.timeSunday = xy, t.timeSundays = Ny, t.timeThursday = Ay, t.timeThursdays = zy, t.timeTickInterval = cv, t.timeTicks = uv, t.timeTuesday = My, t.timeTuesdays = Cy, t.timeWednesday = Ty, t.timeWednesdays = Py, t.timeWeek = xy, t.timeWeeks = Ny, t.timeYear = tv, t.timeYears = nv, t.timeout = $i, t.timer = Ni, t.timerFlush = ki, t.transition = go, t.transpose = gt, t.tree = function() {
        var t2 = $p, n2 = 1, e2 = 1, r2 = null;
        function i2(i3) {
          var c2 = function(t3) {
            for (var n3, e3, r3, i4, o3, a3 = new Up(t3, 0), u3 = [a3]; n3 = u3.pop(); )
              if (r3 = n3._.children)
                for (n3.children = new Array(o3 = r3.length), i4 = o3 - 1; i4 >= 0; --i4)
                  u3.push(e3 = n3.children[i4] = new Up(r3[i4], i4)), e3.parent = n3;
            return (a3.parent = new Up(null, 0)).children = [a3], a3;
          }(i3);
          if (c2.eachAfter(o2), c2.parent.m = -c2.z, c2.eachBefore(a2), r2)
            i3.eachBefore(u2);
          else {
            var f2 = i3, s2 = i3, l2 = i3;
            i3.eachBefore(function(t3) {
              t3.x < f2.x && (f2 = t3), t3.x > s2.x && (s2 = t3), t3.depth > l2.depth && (l2 = t3);
            });
            var h2 = f2 === s2 ? 1 : t2(f2, s2) / 2, d2 = h2 - f2.x, p2 = n2 / (s2.x + h2 + d2), g2 = e2 / (l2.depth || 1);
            i3.eachBefore(function(t3) {
              t3.x = (t3.x + d2) * p2, t3.y = t3.depth * g2;
            });
          }
          return i3;
        }
        function o2(n3) {
          var e3 = n3.children, r3 = n3.parent.children, i3 = n3.i ? r3[n3.i - 1] : null;
          if (e3) {
            !function(t3) {
              for (var n4, e4 = 0, r4 = 0, i4 = t3.children, o4 = i4.length; --o4 >= 0; )
                (n4 = i4[o4]).z += e4, n4.m += e4, e4 += n4.s + (r4 += n4.c);
            }(n3);
            var o3 = (e3[0].z + e3[e3.length - 1].z) / 2;
            i3 ? (n3.z = i3.z + t2(n3._, i3._), n3.m = n3.z - o3) : n3.z = o3;
          } else
            i3 && (n3.z = i3.z + t2(n3._, i3._));
          n3.parent.A = function(n4, e4, r4) {
            if (e4) {
              for (var i4, o4 = n4, a3 = n4, u3 = e4, c2 = o4.parent.children[0], f2 = o4.m, s2 = a3.m, l2 = u3.m, h2 = c2.m; u3 = Rp(u3), o4 = Dp(o4), u3 && o4; )
                c2 = Dp(c2), (a3 = Rp(a3)).a = n4, (i4 = u3.z + l2 - o4.z - f2 + t2(u3._, o4._)) > 0 && (Fp(qp(u3, n4, r4), n4, i4), f2 += i4, s2 += i4), l2 += u3.m, f2 += o4.m, h2 += c2.m, s2 += a3.m;
              u3 && !Rp(a3) && (a3.t = u3, a3.m += l2 - s2), o4 && !Dp(c2) && (c2.t = o4, c2.m += f2 - h2, r4 = n4);
            }
            return r4;
          }(n3, i3, n3.parent.A || r3[0]);
        }
        function a2(t3) {
          t3._.x = t3.z + t3.parent.m, t3.m += t3.parent.m;
        }
        function u2(t3) {
          t3.x *= n2, t3.y = t3.depth * e2;
        }
        return i2.separation = function(n3) {
          return arguments.length ? (t2 = n3, i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (r2 = false, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? null : [n2, e2];
        }, i2.nodeSize = function(t3) {
          return arguments.length ? (r2 = true, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? [n2, e2] : null;
        }, i2;
      }, t.treemap = function() {
        var t2 = Yp, n2 = false, e2 = 1, r2 = 1, i2 = [0], o2 = np, a2 = np, u2 = np, c2 = np, f2 = np;
        function s2(t3) {
          return t3.x0 = t3.y0 = 0, t3.x1 = e2, t3.y1 = r2, t3.eachBefore(l2), i2 = [0], n2 && t3.eachBefore(Tp), t3;
        }
        function l2(n3) {
          var e3 = i2[n3.depth], r3 = n3.x0 + e3, s3 = n3.y0 + e3, l3 = n3.x1 - e3, h2 = n3.y1 - e3;
          l3 < r3 && (r3 = l3 = (r3 + l3) / 2), h2 < s3 && (s3 = h2 = (s3 + h2) / 2), n3.x0 = r3, n3.y0 = s3, n3.x1 = l3, n3.y1 = h2, n3.children && (e3 = i2[n3.depth + 1] = o2(n3) / 2, r3 += f2(n3) - e3, s3 += a2(n3) - e3, (l3 -= u2(n3) - e3) < r3 && (r3 = l3 = (r3 + l3) / 2), (h2 -= c2(n3) - e3) < s3 && (s3 = h2 = (s3 + h2) / 2), t2(n3, r3, s3, l3, h2));
        }
        return s2.round = function(t3) {
          return arguments.length ? (n2 = !!t3, s2) : n2;
        }, s2.size = function(t3) {
          return arguments.length ? (e2 = +t3[0], r2 = +t3[1], s2) : [e2, r2];
        }, s2.tile = function(n3) {
          return arguments.length ? (t2 = tp(n3), s2) : t2;
        }, s2.padding = function(t3) {
          return arguments.length ? s2.paddingInner(t3).paddingOuter(t3) : s2.paddingInner();
        }, s2.paddingInner = function(t3) {
          return arguments.length ? (o2 = "function" == typeof t3 ? t3 : ep(+t3), s2) : o2;
        }, s2.paddingOuter = function(t3) {
          return arguments.length ? s2.paddingTop(t3).paddingRight(t3).paddingBottom(t3).paddingLeft(t3) : s2.paddingTop();
        }, s2.paddingTop = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : ep(+t3), s2) : a2;
        }, s2.paddingRight = function(t3) {
          return arguments.length ? (u2 = "function" == typeof t3 ? t3 : ep(+t3), s2) : u2;
        }, s2.paddingBottom = function(t3) {
          return arguments.length ? (c2 = "function" == typeof t3 ? t3 : ep(+t3), s2) : c2;
        }, s2.paddingLeft = function(t3) {
          return arguments.length ? (f2 = "function" == typeof t3 ? t3 : ep(+t3), s2) : f2;
        }, s2;
      }, t.treemapBinary = function(t2, n2, e2, r2, i2) {
        var o2, a2, u2 = t2.children, c2 = u2.length, f2 = new Array(c2 + 1);
        for (f2[0] = a2 = o2 = 0; o2 < c2; ++o2)
          f2[o2 + 1] = a2 += u2[o2].value;
        !function t3(n3, e3, r3, i3, o3, a3, c3) {
          if (n3 >= e3 - 1) {
            var s2 = u2[n3];
            return s2.x0 = i3, s2.y0 = o3, s2.x1 = a3, void (s2.y1 = c3);
          }
          var l2 = f2[n3], h2 = r3 / 2 + l2, d2 = n3 + 1, p2 = e3 - 1;
          for (; d2 < p2; ) {
            var g2 = d2 + p2 >>> 1;
            f2[g2] < h2 ? d2 = g2 + 1 : p2 = g2;
          }
          h2 - f2[d2 - 1] < f2[d2] - h2 && n3 + 1 < d2 && --d2;
          var y2 = f2[d2] - l2, v2 = r3 - y2;
          if (a3 - i3 > c3 - o3) {
            var _2 = r3 ? (i3 * v2 + a3 * y2) / r3 : a3;
            t3(n3, d2, y2, i3, o3, _2, c3), t3(d2, e3, v2, _2, o3, a3, c3);
          } else {
            var b2 = r3 ? (o3 * v2 + c3 * y2) / r3 : c3;
            t3(n3, d2, y2, i3, o3, a3, b2), t3(d2, e3, v2, i3, b2, a3, c3);
          }
        }(0, c2, t2.value, n2, e2, r2, i2);
      }, t.treemapDice = Ap, t.treemapResquarify = Lp, t.treemapSlice = Ip, t.treemapSliceDice = function(t2, n2, e2, r2, i2) {
        (1 & t2.depth ? Ip : Ap)(t2, n2, e2, r2, i2);
      }, t.treemapSquarify = Yp, t.tsv = Mc, t.tsvFormat = lc, t.tsvFormatBody = hc, t.tsvFormatRow = pc, t.tsvFormatRows = dc, t.tsvFormatValue = gc, t.tsvParse = fc, t.tsvParseRows = sc, t.union = function(...t2) {
        const n2 = new InternSet();
        for (const e2 of t2)
          for (const t3 of e2)
            n2.add(t3);
        return n2;
      }, t.unixDay = _y, t.unixDays = by, t.utcDay = yy, t.utcDays = vy, t.utcFriday = By, t.utcFridays = Vy, t.utcHour = hy, t.utcHours = dy, t.utcMillisecond = Wg, t.utcMilliseconds = Zg, t.utcMinute = cy, t.utcMinutes = fy, t.utcMonday = qy, t.utcMondays = jy, t.utcMonth = Qy, t.utcMonths = Jy, t.utcSaturday = Yy, t.utcSaturdays = Wy, t.utcSecond = iy, t.utcSeconds = oy, t.utcSunday = Fy, t.utcSundays = Ly, t.utcThursday = Oy, t.utcThursdays = Gy, t.utcTickInterval = av, t.utcTicks = ov, t.utcTuesday = Uy, t.utcTuesdays = Hy, t.utcWednesday = Iy, t.utcWednesdays = Xy, t.utcWeek = Fy, t.utcWeeks = Ly, t.utcYear = ev, t.utcYears = rv, t.variance = x, t.version = "7.8.5", t.window = pn, t.xml = Sc, t.zip = function() {
        return gt(arguments);
      }, t.zoom = function() {
        var t2, n2, e2, r2 = Sw, i2 = Ew, o2 = Pw, a2 = kw, u2 = Cw, c2 = [0, 1 / 0], f2 = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s2 = 250, l2 = ri, h2 = $t("start", "zoom", "end"), d2 = 500, p2 = 150, g2 = 0, y2 = 10;
        function v2(t3) {
          t3.property("__zoom", Nw).on("wheel.zoom", T2, { passive: false }).on("mousedown.zoom", A2).on("dblclick.zoom", S2).filter(u2).on("touchstart.zoom", E2).on("touchmove.zoom", N2).on("touchend.zoom touchcancel.zoom", k2).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function _2(t3, n3) {
          return (n3 = Math.max(c2[0], Math.min(c2[1], n3))) === t3.k ? t3 : new xw(n3, t3.x, t3.y);
        }
        function b2(t3, n3, e3) {
          var r3 = n3[0] - e3[0] * t3.k, i3 = n3[1] - e3[1] * t3.k;
          return r3 === t3.x && i3 === t3.y ? t3 : new xw(t3.k, r3, i3);
        }
        function m2(t3) {
          return [(+t3[0][0] + +t3[1][0]) / 2, (+t3[0][1] + +t3[1][1]) / 2];
        }
        function x2(t3, n3, e3, r3) {
          t3.on("start.zoom", function() {
            w2(this, arguments).event(r3).start();
          }).on("interrupt.zoom end.zoom", function() {
            w2(this, arguments).event(r3).end();
          }).tween("zoom", function() {
            var t4 = this, o3 = arguments, a3 = w2(t4, o3).event(r3), u3 = i2.apply(t4, o3), c3 = null == e3 ? m2(u3) : "function" == typeof e3 ? e3.apply(t4, o3) : e3, f3 = Math.max(u3[1][0] - u3[0][0], u3[1][1] - u3[0][1]), s3 = t4.__zoom, h3 = "function" == typeof n3 ? n3.apply(t4, o3) : n3, d4 = l2(s3.invert(c3).concat(f3 / s3.k), h3.invert(c3).concat(f3 / h3.k));
            return function(t5) {
              if (1 === t5)
                t5 = h3;
              else {
                var n4 = d4(t5), e4 = f3 / n4[2];
                t5 = new xw(e4, c3[0] - n4[0] * e4, c3[1] - n4[1] * e4);
              }
              a3.zoom(null, t5);
            };
          });
        }
        function w2(t3, n3, e3) {
          return !e3 && t3.__zooming || new M2(t3, n3);
        }
        function M2(t3, n3) {
          this.that = t3, this.args = n3, this.active = 0, this.sourceEvent = null, this.extent = i2.apply(t3, n3), this.taps = 0;
        }
        function T2(t3, ...n3) {
          if (r2.apply(this, arguments)) {
            var e3 = w2(this, n3).event(t3), i3 = this.__zoom, u3 = Math.max(c2[0], Math.min(c2[1], i3.k * Math.pow(2, a2.apply(this, arguments)))), s3 = ne(t3);
            if (e3.wheel)
              e3.mouse[0][0] === s3[0] && e3.mouse[0][1] === s3[1] || (e3.mouse[1] = i3.invert(e3.mouse[0] = s3)), clearTimeout(e3.wheel);
            else {
              if (i3.k === u3)
                return;
              e3.mouse = [s3, i3.invert(s3)], Gi(this), e3.start();
            }
            Aw(t3), e3.wheel = setTimeout(function() {
              e3.wheel = null, e3.end();
            }, p2), e3.zoom("mouse", o2(b2(_2(i3, u3), e3.mouse[0], e3.mouse[1]), e3.extent, f2));
          }
        }
        function A2(t3, ...n3) {
          if (!e2 && r2.apply(this, arguments)) {
            var i3 = t3.currentTarget, a3 = w2(this, n3, true).event(t3), u3 = Zn(t3.view).on("mousemove.zoom", function(t4) {
              if (Aw(t4), !a3.moved) {
                var n4 = t4.clientX - s3, e3 = t4.clientY - l3;
                a3.moved = n4 * n4 + e3 * e3 > g2;
              }
              a3.event(t4).zoom("mouse", o2(b2(a3.that.__zoom, a3.mouse[0] = ne(t4, i3), a3.mouse[1]), a3.extent, f2));
            }, true).on("mouseup.zoom", function(t4) {
              u3.on("mousemove.zoom mouseup.zoom", null), ue(t4.view, a3.moved), Aw(t4), a3.event(t4).end();
            }, true), c3 = ne(t3, i3), s3 = t3.clientX, l3 = t3.clientY;
            ae(t3.view), Tw(t3), a3.mouse = [c3, this.__zoom.invert(c3)], Gi(this), a3.start();
          }
        }
        function S2(t3, ...n3) {
          if (r2.apply(this, arguments)) {
            var e3 = this.__zoom, a3 = ne(t3.changedTouches ? t3.changedTouches[0] : t3, this), u3 = e3.invert(a3), c3 = e3.k * (t3.shiftKey ? 0.5 : 2), l3 = o2(b2(_2(e3, c3), a3, u3), i2.apply(this, n3), f2);
            Aw(t3), s2 > 0 ? Zn(this).transition().duration(s2).call(x2, l3, a3, t3) : Zn(this).call(v2.transform, l3, a3, t3);
          }
        }
        function E2(e3, ...i3) {
          if (r2.apply(this, arguments)) {
            var o3, a3, u3, c3, f3 = e3.touches, s3 = f3.length, l3 = w2(this, i3, e3.changedTouches.length === s3).event(e3);
            for (Tw(e3), a3 = 0; a3 < s3; ++a3)
              c3 = [c3 = ne(u3 = f3[a3], this), this.__zoom.invert(c3), u3.identifier], l3.touch0 ? l3.touch1 || l3.touch0[2] === c3[2] || (l3.touch1 = c3, l3.taps = 0) : (l3.touch0 = c3, o3 = true, l3.taps = 1 + !!t2);
            t2 && (t2 = clearTimeout(t2)), o3 && (l3.taps < 2 && (n2 = c3[0], t2 = setTimeout(function() {
              t2 = null;
            }, d2)), Gi(this), l3.start());
          }
        }
        function N2(t3, ...n3) {
          if (this.__zooming) {
            var e3, r3, i3, a3, u3 = w2(this, n3).event(t3), c3 = t3.changedTouches, s3 = c3.length;
            for (Aw(t3), e3 = 0; e3 < s3; ++e3)
              i3 = ne(r3 = c3[e3], this), u3.touch0 && u3.touch0[2] === r3.identifier ? u3.touch0[0] = i3 : u3.touch1 && u3.touch1[2] === r3.identifier && (u3.touch1[0] = i3);
            if (r3 = u3.that.__zoom, u3.touch1) {
              var l3 = u3.touch0[0], h3 = u3.touch0[1], d4 = u3.touch1[0], p3 = u3.touch1[1], g3 = (g3 = d4[0] - l3[0]) * g3 + (g3 = d4[1] - l3[1]) * g3, y3 = (y3 = p3[0] - h3[0]) * y3 + (y3 = p3[1] - h3[1]) * y3;
              r3 = _2(r3, Math.sqrt(g3 / y3)), i3 = [(l3[0] + d4[0]) / 2, (l3[1] + d4[1]) / 2], a3 = [(h3[0] + p3[0]) / 2, (h3[1] + p3[1]) / 2];
            } else {
              if (!u3.touch0)
                return;
              i3 = u3.touch0[0], a3 = u3.touch0[1];
            }
            u3.zoom("touch", o2(b2(r3, i3, a3), u3.extent, f2));
          }
        }
        function k2(t3, ...r3) {
          if (this.__zooming) {
            var i3, o3, a3 = w2(this, r3).event(t3), u3 = t3.changedTouches, c3 = u3.length;
            for (Tw(t3), e2 && clearTimeout(e2), e2 = setTimeout(function() {
              e2 = null;
            }, d2), i3 = 0; i3 < c3; ++i3)
              o3 = u3[i3], a3.touch0 && a3.touch0[2] === o3.identifier ? delete a3.touch0 : a3.touch1 && a3.touch1[2] === o3.identifier && delete a3.touch1;
            if (a3.touch1 && !a3.touch0 && (a3.touch0 = a3.touch1, delete a3.touch1), a3.touch0)
              a3.touch0[1] = this.__zoom.invert(a3.touch0[0]);
            else if (a3.end(), 2 === a3.taps && (o3 = ne(o3, this), Math.hypot(n2[0] - o3[0], n2[1] - o3[1]) < y2)) {
              var f3 = Zn(this).on("dblclick.zoom");
              f3 && f3.apply(this, arguments);
            }
          }
        }
        return v2.transform = function(t3, n3, e3, r3) {
          var i3 = t3.selection ? t3.selection() : t3;
          i3.property("__zoom", Nw), t3 !== i3 ? x2(t3, n3, e3, r3) : i3.interrupt().each(function() {
            w2(this, arguments).event(r3).start().zoom(null, "function" == typeof n3 ? n3.apply(this, arguments) : n3).end();
          });
        }, v2.scaleBy = function(t3, n3, e3, r3) {
          v2.scaleTo(t3, function() {
            return this.__zoom.k * ("function" == typeof n3 ? n3.apply(this, arguments) : n3);
          }, e3, r3);
        }, v2.scaleTo = function(t3, n3, e3, r3) {
          v2.transform(t3, function() {
            var t4 = i2.apply(this, arguments), r4 = this.__zoom, a3 = null == e3 ? m2(t4) : "function" == typeof e3 ? e3.apply(this, arguments) : e3, u3 = r4.invert(a3), c3 = "function" == typeof n3 ? n3.apply(this, arguments) : n3;
            return o2(b2(_2(r4, c3), a3, u3), t4, f2);
          }, e3, r3);
        }, v2.translateBy = function(t3, n3, e3, r3) {
          v2.transform(t3, function() {
            return o2(this.__zoom.translate("function" == typeof n3 ? n3.apply(this, arguments) : n3, "function" == typeof e3 ? e3.apply(this, arguments) : e3), i2.apply(this, arguments), f2);
          }, null, r3);
        }, v2.translateTo = function(t3, n3, e3, r3, a3) {
          v2.transform(t3, function() {
            var t4 = i2.apply(this, arguments), a4 = this.__zoom, u3 = null == r3 ? m2(t4) : "function" == typeof r3 ? r3.apply(this, arguments) : r3;
            return o2(ww.translate(u3[0], u3[1]).scale(a4.k).translate("function" == typeof n3 ? -n3.apply(this, arguments) : -n3, "function" == typeof e3 ? -e3.apply(this, arguments) : -e3), t4, f2);
          }, r3, a3);
        }, M2.prototype = { event: function(t3) {
          return t3 && (this.sourceEvent = t3), this;
        }, start: function() {
          return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
        }, zoom: function(t3, n3) {
          return this.mouse && "mouse" !== t3 && (this.mouse[1] = n3.invert(this.mouse[0])), this.touch0 && "touch" !== t3 && (this.touch0[1] = n3.invert(this.touch0[0])), this.touch1 && "touch" !== t3 && (this.touch1[1] = n3.invert(this.touch1[0])), this.that.__zoom = n3, this.emit("zoom"), this;
        }, end: function() {
          return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
        }, emit: function(t3) {
          var n3 = Zn(this.that).datum();
          h2.call(t3, this.that, new mw(t3, { sourceEvent: this.sourceEvent, target: v2, type: t3, transform: this.that.__zoom, dispatch: h2 }), n3);
        } }, v2.wheelDelta = function(t3) {
          return arguments.length ? (a2 = "function" == typeof t3 ? t3 : bw(+t3), v2) : a2;
        }, v2.filter = function(t3) {
          return arguments.length ? (r2 = "function" == typeof t3 ? t3 : bw(!!t3), v2) : r2;
        }, v2.touchable = function(t3) {
          return arguments.length ? (u2 = "function" == typeof t3 ? t3 : bw(!!t3), v2) : u2;
        }, v2.extent = function(t3) {
          return arguments.length ? (i2 = "function" == typeof t3 ? t3 : bw([[+t3[0][0], +t3[0][1]], [+t3[1][0], +t3[1][1]]]), v2) : i2;
        }, v2.scaleExtent = function(t3) {
          return arguments.length ? (c2[0] = +t3[0], c2[1] = +t3[1], v2) : [c2[0], c2[1]];
        }, v2.translateExtent = function(t3) {
          return arguments.length ? (f2[0][0] = +t3[0][0], f2[1][0] = +t3[1][0], f2[0][1] = +t3[0][1], f2[1][1] = +t3[1][1], v2) : [[f2[0][0], f2[0][1]], [f2[1][0], f2[1][1]]];
        }, v2.constrain = function(t3) {
          return arguments.length ? (o2 = t3, v2) : o2;
        }, v2.duration = function(t3) {
          return arguments.length ? (s2 = +t3, v2) : s2;
        }, v2.interpolate = function(t3) {
          return arguments.length ? (l2 = t3, v2) : l2;
        }, v2.on = function() {
          var t3 = h2.on.apply(h2, arguments);
          return t3 === h2 ? v2 : t3;
        }, v2.clickDistance = function(t3) {
          return arguments.length ? (g2 = (t3 = +t3) * t3, v2) : Math.sqrt(g2);
        }, v2.tapDistance = function(t3) {
          return arguments.length ? (y2 = +t3, v2) : y2;
        }, v2;
      }, t.zoomIdentity = ww, t.zoomTransform = Mw;
    });
  }
});

// js/scatter_widget.js
var d3 = __toESM(require_d3_v7());
function render({ model, el }) {
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const height = 500;
  const width = 800;
  let container = document.createElement("div");
  let fieldset_radio = document.createElement("fieldset");
  fieldset_radio.setAttribute("style", "width: 170px; margin-left: 1px; margin-top: -10px; display:inline");
  let legend_radio = document.createElement("legend");
  legend_radio.innerText = "Class:";
  fieldset_radio.appendChild(legend_radio);
  let radio_buttons = {};
  function add_label_elem(parent, id) {
    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.setAttribute("style", "padding-left: 5px;");
    if (id == "a") {
      label.setAttribute("style", "padding-left: 17px;");
    }
    label.innerText = id;
    parent.appendChild(label);
  }
  ["a", "b", "c", "d"].map(function(d, i) {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "colorselector");
    radio.setAttribute("value", i);
    if (i == 0) {
      radio.setAttribute("checked", "true");
      radio.click();
    }
    add_label_elem(fieldset_radio, d);
    radio.onclick = function() {
      selected_color = colors[i];
    };
    radio_buttons[d] = radio;
    fieldset_radio.appendChild(radio);
  });
  container.appendChild(fieldset_radio);
  let fieldset_size = document.createElement("fieldset");
  fieldset_size.setAttribute("style", "width: 200px; margin: 10px; display:inline");
  let legend_size = document.createElement("legend");
  legend_size.innerText = "Brushsize:";
  fieldset_size.appendChild(legend_size);
  let size_input = document.createElement("input");
  size_input.setAttribute("type", "range");
  size_input.setAttribute("id", "size");
  size_input.setAttribute("name", "size");
  size_input.setAttribute("min", "5");
  size_input.setAttribute("max", "100");
  size_input.setAttribute("value", model.get("brushsize"));
  size_input.setAttribute("style", "display:inline; padding-left: 30px;");
  size_input.onchange = resize_brush;
  size_input.oninput = resize_brush;
  fieldset_size.appendChild(size_input);
  container.appendChild(fieldset_size);
  let reset_btn = document.createElement("button");
  reset_btn.setAttribute("id", "reset");
  reset_btn.setAttribute("style", "display:inline");
  reset_btn.innerText = "Reset";
  reset_btn.onclick = reset;
  container.appendChild(reset_btn);
  let undo_btn = document.createElement("button");
  undo_btn.setAttribute("id", "undo");
  undo_btn.setAttribute("style", "display:inline");
  undo_btn.innerText = "Undo";
  undo_btn.onclick = undo;
  container.appendChild(undo_btn);
  let div = document.createElement("div");
  div.setAttribute("style", "display:inline; padding-left: 10px;");
  let count_spans = {};
  ["a", "b", "c", "d"].map(function(d, i) {
    let background_colors = ["#a4c8e0", "#ffcb9e", "#aad8aa", "#eea8a8"];
    let span = document.createElement("span");
    span.setAttribute("style", `background-color: ${background_colors[i]}`);
    span.innerText = `${d}: 0`;
    span.setAttribute("class", "count");
    count_spans[d] = span;
    div.appendChild(span);
  });
  container.appendChild(div);
  el.appendChild(container);
  let data = model.get("data");
  let svg = d3.select(container).append("svg").style("display", "block").style("cursor", "crosshair");
  let selected_color = colors[0];
  let batch = 0;
  svg.attr("width", width).attr("height", height).style("background", "#eeeeee").call(
    d3.drag().on("start", drag_start).on("drag", dragged).on("end", drag_end)
  ).on("mousemove", mousemove);
  function redraw_from_scratch() {
    svg.selectAll("circle.drawn").remove();
    data.map(function(d) {
      svg.append("circle").attr("cx", d.x).attr("cy", height - d.y).attr("r", 4).style("fill", d.color).attr("class", `batch_${d.batch} drawn`);
    });
    update_counts();
  }
  redraw_from_scratch();
  model.on("change:data", function() {
    update_counts();
  });
  model.on("change:brushsize", function() {
    circle_brush.attr("r", size_input.value);
  });
  let circle_brush = svg.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", model.get("brushsize")).style("fill-opacity", 0.1);
  function drag_start(event) {
    ["a", "b", "c", "d"].map(function(d, i) {
      if (radio_buttons[d].checked) {
        selected_color = colors[i];
      }
    });
  }
  function mousemove(event) {
    let rect = svg.node().getBoundingClientRect();
    circle_brush.attr("cx", event.pageX - rect["x"] + "px").attr("cy", event.pageY - rect["top"] + "px");
  }
  function resize_brush() {
    model.set("brushsize", Number(size_input.value));
  }
  function dragged(event) {
    let r1 = container.getBoundingClientRect();
    let r2 = svg.node().getBoundingClientRect();
    let size = size_input.value;
    let new_x = event.x + (Math.random() - 0.5) * size;
    let corrected_y = event.y - (r2.y - r1.y);
    let new_y = corrected_y + (Math.random() - 0.5) * size;
    svg.append("circle").attr("cx", new_x).attr("cy", new_y).attr("r", 4).style("fill", selected_color).attr("class", `batch_${batch} drawn`);
    data.push({ x: new_x, y: height - new_y, color: selected_color, batch });
    circle_brush.attr("cx", event.x + "px").attr("cy", corrected_y + "px");
  }
  function drag_end(event) {
    model.set("data", grab_data());
    model.save_changes();
    batch = Math.max(...data.map(function(d) {
      return d.batch;
    }), 0) + 1;
    update_counts();
  }
  function grab_data() {
    return data.map(function(d) {
      return { x: d.x, y: d.y, color: d.color };
    });
  }
  function reset() {
    data = [];
    model.set("data", []);
    model.save_changes();
    svg.selectAll("circle.drawn").remove();
    update_counts();
  }
  function undo() {
    let batch2 = Math.max(...data.map(function(d) {
      return d.batch;
    }), 0);
    d3.selectAll(`circle.batch_${batch2}`).remove();
    data = data.filter(function(d) {
      return d.batch != batch2;
    });
    model.set("data", grab_data());
    model.save_changes();
    update_counts();
  }
  function update_counts() {
    ["a", "b", "c", "d"].map(function(d, i) {
      let count = data.filter(function(d2) {
        return d2.color == colors[i];
      }).length;
      count_spans[d].innerText = `${d}: ${count}`;
    });
  }
  return () => {
    d3.select(container).remove();
  };
}
var scatter_widget_default = { render };
export {
  scatter_widget_default as default
};
