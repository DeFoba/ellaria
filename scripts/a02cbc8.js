var span_one_symb_1 = '';
var span_one_symb_2 = 'ELLARIA';
var span_one_symb_3 = 'AI';

// var nav1 = 'FAQ';
// var nav2 = 'Roadmap';
// var nav3 = 'About';
// var nav4 = 'Contact';

(window.webpackJsonp = window.webpackJsonp || []).push([
   [6], {
      125: function (t, e, n) {
         "use strict";
         n(52), n(16), n(40), n(79), n(121), n(59), n(49), n(48), n(42), n(50), n(35), n(34), n(33), n(46), n(51), n(36);
         var r = n(2);

         function o(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return c(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0,
               m = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return l = t.done, t
               },
               e: function (t) {
                  m = !0, o = t
               },
               f: function () {
                  try {
                     l || null == n.return || n.return()
                  } finally {
                     if (m) throw o
                  }
               }
            }
         }

         function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }
         var l = window.requestIdleCallback || function (t) {
               var e = Date.now();
               return setTimeout((function () {
                  t({
                     didTimeout: !1,
                     timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - e))
                     }
                  })
               }), 1)
            },
            m = window.cancelIdleCallback || function (t) {
               clearTimeout(t)
            },
            f = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
               t.forEach((function (t) {
                  var e = t.intersectionRatio,
                     link = t.target;
                  e <= 0 || !link.__prefetch || link.__prefetch()
               }))
            }));
         e.a = {
            name: "NuxtLink",
            extends: r.default.component("RouterLink"),
            props: {
               prefetch: {
                  type: Boolean,
                  default: !0
               },
               noPrefetch: {
                  type: Boolean,
                  default: !1
               }
            },
            mounted: function () {
               this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                  timeout: 2e3
               }))
            },
            beforeDestroy: function () {
               m(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
               observe: function () {
                  f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
               },
               shouldPrefetch: function () {
                  return this.getPrefetchComponents().length > 0
               },
               canPrefetch: function () {
                  var t = navigator.connection;
                  return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
               },
               getPrefetchComponents: function () {
                  return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
                     return t.components.default
                  })).filter((function (t) {
                     return "function" == typeof t && !t.options && !t.__prefetched
                  }))
               },
               prefetchLink: function () {
                  if (this.canPrefetch()) {
                     f.unobserve(this.$el);
                     var t, e = o(this.getPrefetchComponents());
                     try {
                        for (e.s(); !(t = e.n()).done;) {
                           var n = t.value,
                              r = n();
                           r instanceof Promise && r.catch((function () {})), n.__prefetched = !0
                        }
                     } catch (t) {
                        e.e(t)
                     } finally {
                        e.f()
                     }
                  }
               }
            }
         }
      },
      148: function (t, e, n) {
         "use strict";
         e.a = {}
      },
      151: function (t, e, n) {
         "use strict";
         n(16), Object.defineProperty(e, "__esModule", {
            value: !0
         }), e.default = function (t, e) {
            e("cache", {
               route: {
                  setCacheable: function () {},
                  setUncacheable: function () {},
                  addTags: function () {}
               },
               data: {
                  set: function () {},
                  get: function () {
                     return Promise.resolve()
                  }
               },
               groups: {
                  add: function () {}
               }
            })
         }
      },
      161: function (t, e, n) {
         "use strict";
         n.r(e);
         n(47), n(33), n(49), n(16), n(61), n(40), n(62);
         var r = n(24),
            o = n(29);

         function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var n = Object.getOwnPropertySymbols(object);
               t && (n = n.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(object, t).enumerable
               }))), e.push.apply(e, n)
            }
            return e
         }

         function l(t) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? c(Object(source), !0).forEach((function (e) {
                  Object(r.a)(t, e, source[e])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
               }))
            }
            return t
         }
         var m = {
               name: "LocomotiveScroll",
               directives: {
                  locomotive: {
                     inserted: function (t, e, n) {
                        n.context.locomotive = new n.context.LocomotiveScroll(l({
                           el: t
                        }, e.value.options)), o.a.$on("reinit-locomotive", (function () {
                           null != n.context.locomotive && (n.context.locomotive.destroy(), n.context.locomotive.init(), n.context.locomotive.on("scroll", (function (t) {
                              n.context.onScroll(t), n.context.$emit("scroll"), o.a.$emit("scroll", t)
                           })))
                        })), n.context.locomotive.on("scroll", (function (t) {
                           n.context.onScroll(t), o.a.$emit("scroll", t)
                        })), n.context.$emit("init")
                     },
                     unbind: function (t, e, n) {
                        n.context.locomotive.destroy(), n.context.locomotive = void 0
                     }
                  }
               },
               props: {
                  gettedOptions: {
                     type: Object,
                     default: function () {}
                  }
               },
               data: function () {
                  return {
                     locomotive: void 0,
                     defaultOptions: {
                        smooth: !0
                     }
                  }
               },
               computed: {
                  options: function () {
                     return l(l({}, this.defaultOptions), this.gettedOptions)
                  }
               },
               mounted: function () {
                  var t = this;
                  this.$nuxt.$on("update-locomotive", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.update()
                  })), this.$nuxt.$on("destroy-locomotive", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.destroy()
                  })), this.$nuxt.$on("init-locomotive", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.init()
                  })), this.$nuxt.$on("locomotive-scroll-top", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.scrollTo(0, {
                        duration: 0,
                        disableLerp: !0
                     })
                  })), this.$nuxt.$on("locomotive-scroll-studios", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.scrollTo(".c-studios", {
                        duration: 2e3
                     })
                  })), this.$nuxt.$on("locomotive-scroll-operator", (function () {
                     var e;
                     null == t || null === (e = t.locomotive) || void 0 === e || e.scrollTo(".c-operator", {
                        duration: 2e3
                     })
                  }))
               },
               methods: {
                  onScroll: function (t) {
                     void 0 !== this.$store._mutations["app/setScroll"] && this.$store.commit("app/setScroll", l({
                        isScrolling: this.locomotive.scroll.isScrolling,
                        limit: l({}, t.limit)
                     }, t.scroll))
                  }
               }
            },
            f = (n(402), n(14)),
            component = Object(f.a)(m, (function () {
               var t = this;
               return (0, t._self._c)("div", {
                  directives: [{
                     name: "locomotive",
                     rawName: "v-locomotive",
                     value: {
                        options: t.options
                     },
                     expression: "{ options }"
                  }],
                  staticClass: "smooth-scroll"
               }, [t._t("default")], 2)
            }), [], !1, null, null, null);
         e.default = component.exports
      },
      203: function (t, e, n) {
         var content = n(343);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("155ecfee", content, !0, {
            sourceMap: !1
         })
      },
      204: function (t, e, n) {
         var content = n(345);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("6d4931b3", content, !0, {
            sourceMap: !1
         })
      },
      205: function (t, e, n) {
         var content = n(347);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("4155e380", content, !0, {
            sourceMap: !1
         })
      },
      206: function (t, e) {
         t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMiAyMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjIgMjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9IlBhdGgiIGNsYXNzPSJzdDAiIGQ9Ik0xLDExYzAsNS41LDQuNSwxMCwxMCwxMHMxMC00LjUsMTAtMTBTMTYuNSwxLDExLDEiLz4KPC9zdmc+Cg=="
      },
      208: function (t, e, n) {
         var content = n(350);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("630115c8", content, !0, {
            sourceMap: !1
         })
      },
      209: function (t, e, n) {
         var content = n(362);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("bdbf6242", content, !0, {
            sourceMap: !1
         })
      },
      210: function (t, e, n) {
         var content = n(364);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("e9353860", content, !0, {
            sourceMap: !1
         })
      },
      211: function (t, e, n) {
         var content = n(366);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("22d00305", content, !0, {
            sourceMap: !1
         })
      },
      212: function (t, e, n) {
         var content = n(368);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("051e2419", content, !0, {
            sourceMap: !1
         })
      },
      213: function (t, e, n) {
         var content = n(370);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("2efc21ea", content, !0, {
            sourceMap: !1
         })
      },
      214: function (t, e, n) {
         var content = n(374);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("270460f2", content, !0, {
            sourceMap: !1
         })
      },
      215: function (t, e, n) {
         var content = n(376);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("7bca62de", content, !0, {
            sourceMap: !1
         })
      },
      216: function (t, e, n) {
         var content = n(378);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("0a521f4e", content, !0, {
            sourceMap: !1
         })
      },
      225: function (t, e, n) {
         var content = n(403);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
         ]), content.locals && (t.exports = content.locals);
         (0, n(28).default)("06d48c6e", content, !0, {
            sourceMap: !1
         })
      },
      230: function (t, e) {},
      234: function (t, e, n) {
         "use strict";
         var r = n(13),
            o = (n(60), n(16), n(52), n(2)),
            c = n(3),
            l = window.__NUXT__;

         function m() {
            if (!this._hydrated) return this.$fetch()
         }

         function f() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
               var t;
               this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
               var data = l.fetch[this._fetchKey];
               if (data && data._error) this.$fetchState.error = data._error;
               else
                  for (var e in data) o.default.set(this.$data, e, data[e])
            }
         }

         function d() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = h.call(this).then((function () {
               delete t._fetchPromise
            }))), this._fetchPromise
         }

         function h() {
            return v.apply(this, arguments)
         }

         function v() {
            return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
               var e, n, r, o = this;
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                     case 9:
                        t.next = 15;
                        break;
                     case 11:
                        t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                     case 15:
                        if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                           t.next = 19;
                           break
                        }
                        return t.next = 19, new Promise((function (t) {
                           return setTimeout(t, r)
                        }));
                     case 19:
                        this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                           return o.$nuxt.nbFetching--
                        }));
                     case 23:
                     case "end":
                        return t.stop()
                  }
               }), t, this, [
                  [6, 11]
               ])
            })))).apply(this, arguments)
         }
         e.a = {
            beforeCreate: function () {
               Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                  pending: !1,
                  error: null,
                  timestamp: Date.now()
               }), this.$fetch = d.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", m))
            }
         }
      },
      236: function (t, e, n) {
         t.exports = n.p + "img/noise-texture.b8e2a88.png"
      },
      239: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = {
               name: "EmailButton",
               props: {
                  mail: String
               },
               components: {},
               methods: {},
               created: function () {},
               mounted: function () {}
            },
            o = (n(377), n(14)),
            component = Object(o.a)(r, (function () {
               var t = this,
                  e = t._self._c;
               return e("a", {
                  staticClass: "ui-button -normilize",
                  attrs: {
                     href: "mailto:".concat(t.mail)
                  }
               }, [e("span", {
                  staticClass: "-gradient -h5"
               }, [t._v(t._s(t.mail))])])
            }), [], !1, null, "80bf5ece", null);
         e.default = component.exports
      },
      25: function (t, e, n) {
         "use strict";
         n.d(e, "c", (function () {
            return r
         })), n.d(e, "e", (function () {
            return o
         })), n.d(e, "d", (function () {
            return c
         })), n.d(e, "a", (function () {
            return l
         })), n.d(e, "b", (function () {
            return m
         }));
         var r = !1,
            o = "/app/.nuxt/static-json",
            c = "/",
            l = "__NUXT__",
            m = "$nuxt"
      },
      263: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = {
               name: "Button",
               props: {
                  buttonTitle: String,
                  path: String
               },
               components: {},
               methods: {},
               created: function () {},
               mounted: function () {}
            },
            o = (n(344), n(14)),
            component = Object(o.a)(r, (function () {
               var t = this,
                  e = t._self._c;
               return e("nuxt-link", {
                  staticClass: "ui-button -normilize",
                  attrs: {
                     to: {
                        path: t.path
                     }
                  }
               }, [e("span", [t._v(t._s(t.buttonTitle))])])
            }), [], !1, null, "b912fb3c", null);
         e.default = component.exports
      },
      29: function (t, e, n) {
         "use strict";
         n.d(e, "a", (function () {
            return r
         }));
         var r = new(n(2).default)
      },
      290: function (t, e, n) {
         n(291), n(292), t.exports = n(295)
      },
      292: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = n(2),
            o = n(0);
         r.default.use(o.c), e.default = function () {}
      },
      295: function (t, e, n) {
         "use strict";
         n.r(e),
            function (t) {
               n(48), n(50), n(33), n(46), n(51);
               var e = n(20),
                  r = n(13),
                  o = (n(133), n(309), n(322), n(323), n(60), n(42), n(16), n(40), n(49), n(47), n(79), n(121), n(71), n(59), n(34), n(35), n(36), n(52), n(2)),
                  c = n(226),
                  l = n(148),
                  m = n(3),
                  f = n(55),
                  d = n(234),
                  h = n(125);

               function v(t, e) {
                  var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                  if (!n) {
                     if (Array.isArray(t) || (n = function (t, e) {
                           if (!t) return;
                           if ("string" == typeof t) return y(t, e);
                           var n = Object.prototype.toString.call(t).slice(8, -1);
                           "Object" === n && t.constructor && (n = t.constructor.name);
                           if ("Map" === n || "Set" === n) return Array.from(t);
                           if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                           r = function () {};
                        return {
                           s: r,
                           n: function () {
                              return i >= t.length ? {
                                 done: !0
                              } : {
                                 done: !1,
                                 value: t[i++]
                              }
                           },
                           e: function (t) {
                              throw t
                           },
                           f: r
                        }
                     }
                     throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
                  var o, c = !0,
                     l = !1;
                  return {
                     s: function () {
                        n = n.call(t)
                     },
                     n: function () {
                        var t = n.next();
                        return c = t.done, t
                     },
                     e: function (t) {
                        l = !0, o = t
                     },
                     f: function () {
                        try {
                           c || null == n.return || n.return()
                        } finally {
                           if (l) throw o
                        }
                     }
                  }
               }

               function y(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                  return n
               }
               o.default.__nuxt__fetch__mixin__ || (o.default.mixin(d.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(h.a.name, h.a), o.default.component("NLink", h.a), t.fetch || (t.fetch = c.a);
               var _, w, x = [],
                  k = window.__NUXT__ || {},
                  O = k.config || {};
               O._app && (n.p = Object(m.v)(O._app.cdnURL, O._app.assetsPath)), Object.assign(o.default.config, {
                  silent: !0,
                  performance: !1
               });
               var C = o.default.config.errorHandler || console.error;

               function j(t, e, n) {
                  for (var r = function (component) {
                        var t = function (component, t) {
                           if (!component || !component.options || !component.options[t]) return {};
                           var option = component.options[t];
                           if ("function" == typeof option) {
                              for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                              return option.apply(void 0, n)
                           }
                           return option
                        }(component, "transition", e, n) || {};
                        return "string" == typeof t ? {
                           name: t
                        } : t
                     }, o = n ? Object(m.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function (i) {
                        var e = Object.assign({}, r(t[i])),
                           n = Object.assign({}, r(o[i]));
                        Object.keys(e).filter((function (t) {
                           return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                        })).forEach((function (t) {
                           n[t] = e[t]
                        })), l.push(n)
                     }, i = 0; i < c; i++) f(i);
                  return l
               }

               function z(t, e, n) {
                  return $.apply(this, arguments)
               }

               function $() {
                  return ($ = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                     var o, c, l, f, d = this;
                     return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                           case 0:
                              if (this._routeChanged = Boolean(_.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(m.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                 t.next = 12;
                                 break
                              }
                              return t.next = 9, Object(m.r)(e, (function (t, e) {
                                 return {
                                    Component: t,
                                    instance: e
                                 }
                              }));
                           case 9:
                              o = t.sent, o.some((function (t) {
                                 var r = t.Component,
                                    o = t.instance,
                                    c = r.options.watchQuery;
                                 return !0 === c || (Array.isArray(c) ? c.some((function (t) {
                                    return d._diffQuery[t]
                                 })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                              })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                           case 12:
                              r(), t.next = 26;
                              break;
                           case 15:
                              if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                 t.next = 23;
                                 break
                              }
                              return window.location.reload(!0), t.abrupt("return");
                           case 23:
                              this.error({
                                 statusCode: l,
                                 message: f
                              }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                           case 26:
                           case "end":
                              return t.stop()
                        }
                     }), t, this, [
                        [5, 15]
                     ])
                  })))).apply(this, arguments)
               }

               function S(t, e) {
                  return k.serverRendered && e && Object(m.b)(t, e), t._Ctor = t, t
               }

               function E(t) {
                  return Object(m.d)(t, function () {
                     var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                        var l;
                        return regeneratorRuntime.wrap((function (t) {
                           for (;;) switch (t.prev = t.next) {
                              case 0:
                                 if ("function" != typeof e || e.options) {
                                    t.next = 4;
                                    break
                                 }
                                 return t.next = 3, e();
                              case 3:
                                 e = t.sent;
                              case 4:
                                 return l = S(Object(m.s)(e), k.data ? k.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                              case 7:
                              case "end":
                                 return t.stop()
                           }
                        }), t)
                     })));
                     return function (e, n, r, o, c) {
                        return t.apply(this, arguments)
                     }
                  }())
               }

               function I(t, e, n) {
                  var r = this,
                     o = [],
                     c = !1;
                  if (void 0 !== n && (o = [], (n = Object(m.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function (t) {
                        t.options.middleware && (o = o.concat(t.options.middleware))
                     }))), o = o.map((function (t) {
                        return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                           statusCode: 500,
                           message: "Unknown middleware " + t
                        })), l.a[t])
                     })), !c) return Object(m.o)(o, e)
               }

               function P(t, e, n) {
                  return A.apply(this, arguments)
               }

               function A() {
                  return A = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                     var c, l, d, h, y, w, k, O, C, z, $, S, E, P, A, L = this;
                     return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                           case 0:
                              if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                 t.next = 2;
                                 break
                              }
                              return t.abrupt("return", o());
                           case 2:
                              return !1, e === n ? (x = [], !0) : (c = [], x = Object(m.g)(n, c).map((function (t, i) {
                                 return Object(m.c)(n.matched[c[i]].path)(n.params)
                              }))), l = !1, d = function (path) {
                                 n.path === path.path && L.$loading.finish && L.$loading.finish(), n.path !== path.path && L.$loading.pause && L.$loading.pause(), l || (l = !0, o(path))
                              }, t.next = 8, Object(m.t)(_, {
                                 route: e,
                                 from: n,
                                 next: d.bind(this)
                              });
                           case 8:
                              if (this._dateLastError = _.nuxt.dateErr, this._hadError = Boolean(_.nuxt.err), h = [], (y = Object(m.g)(e, h)).length) {
                                 t.next = 27;
                                 break
                              }
                              return t.next = 15, I.call(this, y, _.context);
                           case 15:
                              if (!l) {
                                 t.next = 17;
                                 break
                              }
                              return t.abrupt("return");
                           case 17:
                              return w = (f.a.options || f.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(f.a, _.context) : w);
                           case 20:
                              return k = t.sent, t.next = 23, I.call(this, y, _.context, k);
                           case 23:
                              if (!l) {
                                 t.next = 25;
                                 break
                              }
                              return t.abrupt("return");
                           case 25:
                              return _.context.error({
                                 statusCode: 404,
                                 message: "This page could not be found"
                              }), t.abrupt("return", o());
                           case 27:
                              return y.forEach((function (t) {
                                 t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                              })), this.setTransitions(j(y, e, n)), t.prev = 29, t.next = 32, I.call(this, y, _.context);
                           case 32:
                              if (!l) {
                                 t.next = 34;
                                 break
                              }
                              return t.abrupt("return");
                           case 34:
                              if (!_.context._errored) {
                                 t.next = 36;
                                 break
                              }
                              return t.abrupt("return", o());
                           case 36:
                              return "function" == typeof (O = y[0].options.layout) && (O = O(_.context)), t.next = 40, this.loadLayout(O);
                           case 40:
                              return O = t.sent, t.next = 43, I.call(this, y, _.context, O);
                           case 43:
                              if (!l) {
                                 t.next = 45;
                                 break
                              }
                              return t.abrupt("return");
                           case 45:
                              if (!_.context._errored) {
                                 t.next = 47;
                                 break
                              }
                              return t.abrupt("return", o());
                           case 47:
                              C = !0, t.prev = 48, z = v(y), t.prev = 50, z.s();
                           case 52:
                              if (($ = z.n()).done) {
                                 t.next = 63;
                                 break
                              }
                              if ("function" == typeof (S = $.value).options.validate) {
                                 t.next = 56;
                                 break
                              }
                              return t.abrupt("continue", 61);
                           case 56:
                              return t.next = 58, S.options.validate(_.context);
                           case 58:
                              if (C = t.sent) {
                                 t.next = 61;
                                 break
                              }
                              return t.abrupt("break", 63);
                           case 61:
                              t.next = 52;
                              break;
                           case 63:
                              t.next = 68;
                              break;
                           case 65:
                              t.prev = 65, t.t0 = t.catch(50), z.e(t.t0);
                           case 68:
                              return t.prev = 68, z.f(), t.finish(68);
                           case 71:
                              t.next = 77;
                              break;
                           case 73:
                              return t.prev = 73, t.t1 = t.catch(48), this.error({
                                 statusCode: t.t1.statusCode || "500",
                                 message: t.t1.message
                              }), t.abrupt("return", o());
                           case 77:
                              if (C) {
                                 t.next = 80;
                                 break
                              }
                              return this.error({
                                 statusCode: 404,
                                 message: "This page could not be found",
                              }), t.abrupt("return", o());
                           case 80:
                              return t.next = 82, Promise.all(y.map(function () {
                                 var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                    var o, c, l, f, d, v, y, w, p;
                                    return regeneratorRuntime.wrap((function (t) {
                                       for (;;) switch (t.prev = t.next) {
                                          case 0:
                                             if (r._path = Object(m.c)(e.matched[h[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== x[i], L._routeChanged && o ? r._dataRefresh = !0 : L._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : L._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function (t) {
                                                   return L._diffQuery[t]
                                                })) : "function" == typeof l && (E || (E = Object(m.h)(e)), r._dataRefresh = l.apply(E[i], [e.query, n.query]))), L._hadError || !L._isMounted || r._dataRefresh) {
                                                t.next = 6;
                                                break
                                             }
                                             return t.abrupt("return");
                                          case 6:
                                             return f = [], d = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = d && v ? 30 : 45, d && ((w = Object(m.q)(r.options.asyncData, _.context)).then((function (t) {
                                                Object(m.b)(r, t), L.$loading.increase && L.$loading.increase(y)
                                             })), f.push(w)), L.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(_.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (t) {
                                                L.$loading.increase && L.$loading.increase(y)
                                             })), f.push(p)), t.abrupt("return", Promise.all(f));
                                          case 14:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e, n) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 82:
                              l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                              break;
                           case 85:
                              if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (P = t.t2 || {}).message) {
                                 t.next = 90;
                                 break
                              }
                              return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, P));
                           case 90:
                              return x = [], Object(m.k)(P), "function" == typeof (A = (f.a.options || f.a).layout) && (A = A(_.context)), t.next = 96, this.loadLayout(A);
                           case 96:
                              this.error(P), this.$nuxt.$emit("routeChanged", e, n, P), o();
                           case 99:
                           case "end":
                              return t.stop()
                        }
                     }), t, this, [
                        [29, 85],
                        [48, 73],
                        [50, 65, 68, 71]
                     ])
                  }))), A.apply(this, arguments)
               }

               function L(t, n) {
                  Object(m.d)(t, (function (t, n, r, c) {
                     return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                  }))
               }

               function T(t) {
                  var e = Boolean(this.$options.nuxt.err);
                  this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                  var n = e ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                  "function" == typeof n && (n = n(_.context)), this.setLayout(n)
               }

               function M(t) {
                  t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
               }

               function R(t, e) {
                  var n = this;
                  if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                     var r = Object(m.h)(t),
                        c = Object(m.g)(t),
                        l = !1;
                     o.default.nextTick((function () {
                        r.forEach((function (t, i) {
                           if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                              var e = t.constructor.options.data.call(t);
                              for (var n in e) o.default.set(t.$data, n, e[n]);
                              l = !0
                           }
                        })), l && window.$nuxt.$nextTick((function () {
                           window.$nuxt.$emit("triggerScroll")
                        })), M(n)
                     }))
                  }
               }

               function D(t) {
                  window.onNuxtReadyCbs.forEach((function (e) {
                     "function" == typeof e && e(t)
                  })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function (e, n) {
                     o.default.nextTick((function () {
                        return t.$nuxt.$emit("routeChanged", e, n)
                     }))
                  }))
               }

               function N() {
                  return (N = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                     var n, r, c, l, f;
                     return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                           case 0:
                              return _ = e.app, w = e.router, e.store, n = new o.default(_), r = k.layout || "default", t.next = 7, n.loadLayout(r);
                           case 7:
                              return n.setLayout(r), c = function () {
                                 n.$mount("#__nuxt"), w.afterEach(L), w.afterEach(T.bind(n)), w.afterEach(R.bind(n)), o.default.nextTick((function () {
                                    D(n)
                                 }))
                              }, t.next = 11, Promise.all(E(_.context.route));
                           case 11:
                              if (l = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(j(l, w.currentRoute)), x = w.currentRoute.matched.map((function (t) {
                                    return Object(m.c)(t.path)(w.currentRoute.params)
                                 }))), n.$loading = {}, k.error && n.error(k.error), w.beforeEach(z.bind(n)), w.beforeEach(P.bind(n)), !k.serverRendered || !Object(m.n)(k.routePath, n.context.route.path)) {
                                 t.next = 20;
                                 break
                              }
                              return t.abrupt("return", c());
                           case 20:
                              return f = function () {
                                 L(w.currentRoute, w.currentRoute), T.call(n, w.currentRoute), M(n), c()
                              }, t.next = 23, new Promise((function (t) {
                                 return setTimeout(t, 0)
                              }));
                           case 23:
                              P.call(n, w.currentRoute, w.currentRoute, (function (path) {
                                 if (path) {
                                    var t = w.afterEach((function (e, n) {
                                       t(), f()
                                    }));
                                    w.push(path, void 0, (function (t) {
                                       t && C(t)
                                    }))
                                 } else f()
                              }));
                           case 24:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))).apply(this, arguments)
               }
               Object(f.b)(null, k.config).then((function (t) {
                  return N.apply(this, arguments)
               })).catch(C)
            }.call(this, n(53))
      },
      3: function (t, e, n) {
         "use strict";
         n.d(e, "k", (function () {
            return _
         })), n.d(e, "m", (function () {
            return w
         })), n.d(e, "l", (function () {
            return x
         })), n.d(e, "e", (function () {
            return k
         })), n.d(e, "b", (function () {
            return O
         })), n.d(e, "s", (function () {
            return C
         })), n.d(e, "g", (function () {
            return j
         })), n.d(e, "h", (function () {
            return z
         })), n.d(e, "d", (function () {
            return $
         })), n.d(e, "r", (function () {
            return S
         })), n.d(e, "j", (function () {
            return E
         })), n.d(e, "t", (function () {
            return P
         })), n.d(e, "o", (function () {
            return L
         })), n.d(e, "q", (function () {
            return T
         })), n.d(e, "f", (function () {
            return M
         })), n.d(e, "c", (function () {
            return R
         })), n.d(e, "i", (function () {
            return D
         })), n.d(e, "p", (function () {
            return N
         })), n.d(e, "a", (function () {
            return F
         })), n.d(e, "v", (function () {
            return K
         })), n.d(e, "n", (function () {
            return Q
         })), n.d(e, "u", (function () {
            return V
         }));
         n(50), n(33), n(46), n(51), n(61), n(40), n(62);
         var r = n(20),
            o = n(13),
            c = n(24),
            l = n(30),
            m = (n(60), n(16), n(49), n(196), n(42), n(71), n(59), n(47), n(35), n(36), n(48), n(34), n(69), n(198), n(162), n(267), n(99), n(126), n(240), n(79), n(121), n(2)),
            f = n(54);

         function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var n = Object.getOwnPropertySymbols(object);
               t && (n = n.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(object, t).enumerable
               }))), e.push.apply(e, n)
            }
            return e
         }

         function h(t) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? d(Object(source), !0).forEach((function (e) {
                  Object(c.a)(t, e, source[e])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
               }))
            }
            return t
         }

         function v(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return y(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return c = t.done, t
               },
               e: function (t) {
                  l = !0, o = t
               },
               f: function () {
                  try {
                     c || null == n.return || n.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }

         function _(t) {
            m.default.config.errorHandler && m.default.config.errorHandler(t)
         }

         function w(t) {
            return t.then((function (t) {
               return t.default || t
            }))
         }

         function x(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
         }

         function k(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
               r = t.$children || [],
               o = v(r);
            try {
               for (o.s(); !(e = o.n()).done;) {
                  var c = e.value;
                  c.$fetch ? n.push(c) : c.$children && k(c, n)
               }
            } catch (t) {
               o.e(t)
            } finally {
               o.f()
            }
            return n
         }

         function O(t, e) {
            if (e || !t.options.__hasNuxtData) {
               var n = t.options._originDataFn || t.options.data || function () {
                  return {}
               };
               t.options._originDataFn = n, t.options.data = function () {
                  var data = n.call(this, this);
                  return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), h(h({}, data), e)
               }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
         }

         function C(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = m.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
         }

         function j(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
               n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
               return Object.keys(t[n]).map((function (o) {
                  return e && e.push(r), t[n][o]
               }))
            })))
         }

         function z(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return j(t, e, "instances")
         }

         function $(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
               return Object.keys(t.components).reduce((function (r, o) {
                  return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
               }), [])
            })))
         }

         function S(t, e) {
            return Promise.all($(t, function () {
               var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                  var l, m;
                  return regeneratorRuntime.wrap((function (t) {
                     for (;;) switch (t.prev = t.next) {
                        case 0:
                           if ("function" != typeof n || n.options) {
                              t.next = 11;
                              break
                           }
                           return t.prev = 1, t.next = 4, n();
                        case 4:
                           n = t.sent, t.next = 11;
                           break;
                        case 7:
                           throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(m = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || m + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), t.t0;
                        case 11:
                           return o.components[c] = n = C(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                        case 13:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [1, 7]
                  ])
               })));
               return function (e, n, r, o) {
                  return t.apply(this, arguments)
               }
            }()))
         }

         function E(t) {
            return I.apply(this, arguments)
         }

         function I() {
            return (I = Object(o.a)(regeneratorRuntime.mark((function t(e) {
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        if (e) {
                           t.next = 2;
                           break
                        }
                        return t.abrupt("return");
                     case 2:
                        return t.next = 4, S(e);
                     case 4:
                        return t.abrupt("return", h(h({}, e), {}, {
                           meta: j(e).map((function (t, n) {
                              return h(h({}, t.options.meta), (e.matched[n] || {}).meta)
                           }))
                        }));
                     case 5:
                     case "end":
                        return t.stop()
                  }
               }), t)
            })))).apply(this, arguments)
         }

         function P(t, e) {
            return A.apply(this, arguments)
         }

         function A() {
            return (A = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
               var o, c, m, d;
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        return e.context || (e.context = {
                           isStatic: !1,
                           isDev: !1,
                           isHMR: !1,
                           app: e,
                           store: e.store,
                           payload: n.payload,
                           error: n.error,
                           base: e.router.options.base,
                           env: {}
                        }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, path, n) {
                           if (t) {
                              e.context._redirected = !0;
                              var o = Object(r.a)(path);
                              if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(f.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                              e.context.next({
                                 path: path,
                                 query: n,
                                 status: t
                              })
                           }
                        }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([E(n.route), E(n.from)]);
                     case 3:
                        o = t.sent, c = Object(l.a)(o, 2), m = c[0], d = c[1], n.route && (e.context.route = m), n.from && (e.context.from = d), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                     case 15:
                     case "end":
                        return t.stop()
                  }
               }), t)
            })))).apply(this, arguments)
         }

         function L(t, e) {
            return !t.length || e._redirected || e._errored ? Promise.resolve() : T(t[0], e).then((function () {
               return L(t.slice(1), e)
            }))
         }

         function T(t, e) {
            var n;
            return (n = 2 === t.length ? new Promise((function (n) {
               t(e, (function (t, data) {
                  t && e.error(t), n(data = data || {})
               }))
            })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
         }

         function M(base, t) {
            if ("hash" === t) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var e = (path || "/") + window.location.search + window.location.hash;
            return Object(f.c)(e)
         }

         function R(t, e) {
            return function (t, e) {
               for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", G(e)));
               return function (e, r) {
                  for (var path = "", data = e || {}, o = (r || {}).pretty ? H : encodeURIComponent, c = 0; c < t.length; c++) {
                     var l = t[c];
                     if ("string" != typeof l) {
                        var m = data[l.name || "pathMatch"],
                           f = void 0;
                        if (null == m) {
                           if (l.optional) {
                              l.partial && (path += l.prefix);
                              continue
                           }
                           throw new TypeError('Expected "' + l.name + '" to be defined')
                        }
                        if (Array.isArray(m)) {
                           if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(m) + "`");
                           if (0 === m.length) {
                              if (l.optional) continue;
                              throw new TypeError('Expected "' + l.name + '" to not be empty')
                           }
                           for (var d = 0; d < m.length; d++) {
                              if (f = o(m[d]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                              path += (0 === d ? l.prefix : l.delimiter) + f
                           }
                        } else {
                           if (f = l.asterisk ? Z(m) : o(m), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                           path += l.prefix + f
                        }
                     } else path += l
                  }
                  return path
               }
            }(function (t, e) {
               var n, r = [],
                  o = 0,
                  c = 0,
                  path = "",
                  l = e && e.delimiter || "/";
               for (; null != (n = B.exec(t));) {
                  var m = n[0],
                     f = n[1],
                     d = n.index;
                  if (path += t.slice(c, d), c = d + m.length, f) path += f[1];
                  else {
                     var h = t[c],
                        v = n[2],
                        y = n[3],
                        _ = n[4],
                        w = n[5],
                        x = n[6],
                        k = n[7];
                     path && (r.push(path), path = "");
                     var O = null != v && null != h && h !== v,
                        C = "+" === x || "*" === x,
                        j = "?" === x || "*" === x,
                        z = n[2] || l,
                        pattern = _ || w;
                     r.push({
                        name: y || o++,
                        prefix: v || "",
                        delimiter: z,
                        optional: j,
                        repeat: C,
                        partial: O,
                        asterisk: Boolean(k),
                        pattern: pattern ? W(pattern) : k ? ".*" : "[^" + U(z) + "]+?"
                     })
                  }
               }
               c < t.length && (path += t.substr(c));
               path && r.push(path);
               return r
            }(t, e), e)
         }

         function D(t, e) {
            var n = {},
               r = h(h({}, t), e);
            for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
            return n
         }

         function N(t) {
            var e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
               e = JSON.stringify(t, null, 2)
            } catch (n) {
               e = "[".concat(t.constructor.name, "]")
            }
            return h(h({}, t), {}, {
               message: e,
               statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
         }
         window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
            window.onNuxtReadyCbs.push(t)
         };
         var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

         function H(t, e) {
            var n = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(n, (function (t) {
               return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }))
         }

         function Z(t) {
            return H(t, !0)
         }

         function U(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
         }

         function W(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
         }

         function G(t) {
            return t && t.sensitive ? "" : "i"
         }

         function F(t, e, n) {
            t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
         }
         var K = f.b,
            Q = (f.e, f.a);

         function V(t) {
            try {
               window.history.scrollRestoration = t
            } catch (t) {}
         }
      },
      342: function (t, e, n) {
         "use strict";
         n(203)
      },
      343: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, ".error-page .-w .c-error_title[data-v-22fde065]{margin-top:8rem;display:flex;flex-direction:column;align-items:flex-start}.error-page .-w .c-error_title .c-error_title-row span[data-v-22fde065]{position:relative;display:block}.error-page .-w .c-error_title .c-error_title-row span label[data-v-22fde065]{position:absolute;top:0;left:100%;margin-left:.5rem}.error-page .-w .ui-button[data-v-22fde065]{margin-top:2.5rem;margin-bottom:2.5rem}@media(min-width: 1024px){.error-page .-w .c-error_title[data-v-22fde065]{margin-top:11rem}.error-page .-w .c-error_title .c-error_title-row[data-v-22fde065]:nth-child(1){margin-left:9.23%}.error-page .-w .ui-button[data-v-22fde065]{margin-left:25.35%;width:23.94%}}", ""]), t.exports = r
      },
      344: function (t, e, n) {
         "use strict";
         n(204)
      },
      345: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.ui-button[data-v-b912fb3c]{display:flex;justify-content:center;align-items:center;border:1px solid var(--c-white);box-shadow:inset 0 0 0 1px var(--c-white);border-radius:4rem;padding:1.2rem .8rem;overflow:hidden;position:relative;transform:translateZ(0);transition:color .3s cubic-bezier(var(--f-cubic))}.ui-button[data-v-b912fb3c]::before,.ui-button[data-v-b912fb3c]::after{content:"";display:block;position:absolute;z-index:0;top:0;left:0;width:100%;height:52%;background:var(--c-white);transform:scale(0, 1);transition:transform .6s cubic-bezier(var(--f-cubic));transform-origin:left center}.ui-button[data-v-b912fb3c]::after{top:48%;transform-origin:right center}.ui-button span[data-v-b912fb3c]{position:relative;z-index:1;transform:translateZ(0)}@media(min-width: 1024px){.ui-button[data-v-b912fb3c]{padding:.8rem}.ui-button[data-v-b912fb3c]:hover{color:var(--c-black)}.ui-button[data-v-b912fb3c]:hover::before,.ui-button[data-v-b912fb3c]:hover::after{transform:scale(1, 1);transition:transform .3s cubic-bezier(var(--f-cubic-2))}}@media(max-width: 350px){.ui-button[data-v-b912fb3c]{padding:.4rem .8rem}}', ""]), t.exports = r
      },
      346: function (t, e, n) {
         "use strict";
         n(205)
      },
      347: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]), t.exports = r
      },
      349: function (t, e, n) {
         "use strict";
         n(208)
      },
      350: function (t, e, n) {
         var r = n(27),
            o = n(158),
            c = n(351),
            l = n(352),
            m = n(353),
            f = n(354),
            d = n(355),
            h = n(356),
            v = n(357),
            y = n(358),
            _ = n(359),
            w = n(360),
            x = r(!1),
            k = o(c),
            O = o(l),
            C = o(m),
            j = o(f),
            z = o(d),
            $ = o(h),
            S = o(v),
            E = o(y),
            I = o(_),
            P = o(w);
         x.push([t.i, 'body{margin:0;background-color: #0a0a0a;}h1,h2,h3,h4,h5,h6{margin:0}p{margin:0}ul,ul *,ol,ol *{margin:0;padding:0;list-style-type:none}hr{background-color:rgba(var(--c-white), 0.1);height:1px;border:none}input,textarea{font-size:1rem;font-family:"Switzer-Regular",sans-serif;background-color:rgba(0,0,0,0);border:none;margin:0;color:var(--c-white);cursor:text}input:invalid,input:-moz-submit-invalid,input:required,input:optional,input:-moz-focusring,textarea:invalid,textarea:-moz-submit-invalid,textarea:required,textarea:optional,textarea:-moz-focusring{outline:none;border:none;box-shadow:none}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus,input:-internal-autofill-selected{background-color:var(--c-black) !important;background-image:none !important;color:var(--c-white) !important;-webkit-box-shadow:0 0 0px 1000px var(--c-black) inset}input:-webkit-autofill{-webkit-text-fill-color:var(--c-white) !important}input::placeholer,textarea::placeholder{color:var(--c-black)}input:focus,textarea:focus{outline:none}figure{margin:0}img,svg{display:block;width:100%}.hidden{display:none}@font-face{src:url(' + k + ') format("woff2");src:url(' + O + ') format("truetype");font-family:"Stolzl-Book";font-style:normal}@font-face{src:url(' + C + ') format("woff2");src:url(' + j + ') format("truetype");font-family:"Stolzl-Regular";font-style:normal}@font-face{src:url(' + z + ') format("woff2");src:url(' + $ + ') format("truetype");font-family:"Switzer-Regular";font-style:normal}@font-face{src:url(' + S + ') format("woff2");src:url(' + E + ') format("truetype");font-family:"Switzer-Italic";font-style:normal}@font-face{src:url(' + I + ') format("woff2");src:url(' + P + ') format("truetype");font-family:"Switzer-Semibold";font-style:normal}h1,.-h1{display:block;font-size:8rem;line-height:7.08rem;font-family:"Stolzl-Book";text-transform:uppercase;font-weight:normal}h2,.-h2{display:block;font-size:5.65rem;line-height:5rem;font-family:"Stolzl-Book";text-transform:uppercase;font-weight:normal}h3,.-h3{display:block;font-size:4rem;line-height:3.5rem;font-family:"Stolzl-Book";text-transform:uppercase;font-weight:normal}h4,.-h4{font-size:2.8rem;line-height:3rem;font-weight:normal}h5,.-h5{font-size:2rem;line-height:2.5rem;font-weight:normal}h6,.-h6{font-size:1.4rem;line-height:1.8rem;font-weight:normal}p{margin-bottom:1rem}.-p{font-size:1rem;line-height:1.414;margin-bottom:1rem}.-m{font-size:.65rem;line-height:1.414}.-b{font-family:"Switzer-Semibold"}.-i{font-family:"Switzer-Italic"}.-indent{position:relative}.-indent::before{content:"";display:inline-block;width:4rem}.-indent .rhombus{position:absolute;top:.5rem;left:0}.-indent .rhombus::before{content:"";display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}a,.-gradient{text-decoration:none;color:var(--c-white);background-image:linear-gradient(90deg, var(--c-blue) 0%, var(--c-magenta) 33%, var(--c-blue) 66%, var(--c-blue) 100%);background-size:300% 100%;background-position:left center;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);text-fill-color:rgba(0,0,0,0)}.-normilize{background:initial;-webkit-background-clip:initial;background-clip:initial;-webkit-text-fill-color:initial;text-fill-color:initial}.-breack{display:block}@media(max-width: 1920px){.-mid-h2{font-size:5.65rem;line-height:5rem;font-family:"Stolzl-Book";text-transform:uppercase}.-mid-h3{font-size:4rem;line-height:3.5rem;font-family:"Stolzl-Book";text-transform:uppercase}}@media(max-width: 1024px){.-m-h2{font-size:5.65rem;line-height:5rem;font-family:"Stolzl-Book"}.-m-h3{font-size:4rem;line-height:3.5rem;font-family:"Stolzl-Book"}.-m-h4{font-size:2.8rem;line-height:2.5rem}.-m-h5{font-size:2rem;line-height:2.25rem}.-m-h6{font-size:1.4rem;line-height:1.6rem}.-m-p{font-size:1rem;line-height:1.414;margin-bottom:1rem}.-m-m{font-size:.7rem;line-height:1.414}}@media(min-width: 1024px){a{transition:background-position 1.2s cubic-bezier(var(--f-cubic-2));will-change:background-image,background-position}a:hover{background-position:right center}.-indent::before{width:8.333vw !important}}:root{--c-white: #ffffff;--c-white--rgb: 255, 255, 255;--c-gray: #E6E6E6;--c-black: #0A0A0A;--c-black--rgb: 10, 10, 10;--c-blue: #64ADF2;--c-blue--rgb: 100, 173, 242;--c-magenta: #C380FF;--c-magenta--rgb: 195, 128, 255;--f-cubic: 0.23, 1, 0.32, 1;--f-cubic-2: 0.4, 0.1, 0, 1}html{font-size:16px;line-height:1.414;font-family:"Switzer-Regular",sans-serif;background:var(--c-black);text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;font-feature-settings:normal;color:var(--c-white)}body{margin:0;background-color: #0a0a0a;}.-w{margin:0 1rem}.page-content{pointer-events:all}.blur-image{overflow:visible;pointer-events:none}.blur-image img{aspect-ratio:1/1}.-blur-025{filter:blur(0.075rem);transform:translateZ(0)}.-blur-05{filter:blur(0.125rem);transform:translateZ(0)}.-blur-1{filter:blur(0.25rem);transform:translateZ(0)}@media(min-width: 1024px)and (min-height: 840px){html{font-size:20px;line-height:1.414;font-family:"Switzer-Regular",sans-serif}.-w{margin:0 2rem}.-blur-025{filter:blur(0.25rem);transform:translateZ(0)}.-blur-05{filter:blur(0.5rem);transform:translateZ(0)}.-blur-1{filter:blur(1rem);transform:translateZ(0)}}@media(min-width: 1440px)and (min-height: 960px){html{font-size:22px;line-height:1.414;font-family:"Switzer-Regular",sans-serif}}@media(min-width: 1600px)and (min-height: 1024px){html{font-size:24px;line-height:1.414;font-family:"Switzer-Regular",sans-serif}}figure{position:relative}.-i-fit{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;object-fit:cover}.-lz,.-fig{transform:scale(1.1);opacity:0;transition:all .6s cubic-bezier(var(--f-cubic));transition-delay:.15s}.-lz.isLoaded,.-fig.is-inview{transform:scale(1);opacity:1}.-visible{overflow:visible}.-pre-line{white-space:pre-line}.-a-to-bottom{display:block;opacity:0;transform:translate(0, -4rem);transition:transform 1.2s cubic-bezier(var(--f-cubic)),opacity 1.8s cubic-bezier(var(--f-cubic));transition-delay:.15s}@media(min-width: 1024px){.-a-to-bottom{transform:translate(0, -8rem)}}.-a-to-bottom.is-inview{opacity:1;transform:translateZ(0)}.-a-to-top{display:block;opacity:0;transform:translate(0, 4rem);transition:transform 1.2s cubic-bezier(var(--f-cubic)),opacity 1.8s cubic-bezier(var(--f-cubic));transition-delay:.15s}@media(min-width: 1024px){.-a-to-top{transform:translate(0, 8rem)}}.-a-to-top.is-inview{opacity:1;transform:translateZ(0)}*[data-scroll]{will-change:transform}html.-splashing .page-content{opacity:0}html.-splashing .-lz,html.-splashing .-fig{transition-delay:1.8s}html.-splashing .-a-to-top,html.-splashing .-a-to-bottom{transition-delay:1.95s}html.-splashing .c-welcome_title .c-welcome_title-row:nth-child(1) span{transition-delay:1.95s !important}html.-splashing .c-welcome_title .c-welcome_title-row:nth-child(2) span{transition-delay:2.1s !important}html.-splashing .c-welcome_title .c-welcome_title-row:nth-child(3) span{transition-delay:2.25s !important}html.-splashing .c-welcome_description-footer{transition-delay:2.4s !important}html.-splashing .c-list_container-wrap{transition-delay:1.8s !important}html.-splashing .c-about-welcome_title .c-about-welcome_title-row span{transition-delay:1.95s !important}html.-splashing .c-about-welcome_container .scroll{transition-delay:2.4s !important}html.-splashing .c-contact_title .c-contact_title-row span{transition-delay:1.95s !important}html.-splashing .h-logo{width:0rem;overflow:hidden}html.-splashing .h-logo .h-logo_the{transform:translate(0, 110%)}html.-splashing .h-logo .h-logo_white-wrap .-o-h.-os span{transform:translate(0, 110%)}html.page-leave .-a-to-bottom.is-inview{opacity:0;transform:translate(0, -4rem);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .9s cubic-bezier(var(--f-cubic));transition-delay:0s}html.page-leave .-a-to-top.is-inview{opacity:0;transform:translate(0, 4rem);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .9s cubic-bezier(var(--f-cubic));transition-delay:0s}.layout .h-menu-blur{display:none}@media(min-width: 1024px){.layout .h-menu-blur{display:block;position:absolute;z-index:1;top:.1rem;right:0;width:15.98%;max-width:17.5rem;pointer-events:none}.layout .h-menu-blur img{position:absolute;z-index:1;width:6rem;top:-1rem;left:0;right:0;margin:0 auto}}html .h-nav{pointer-events:all;opacity:1;transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic));transition-delay:.15s}html.nav-hide .h-nav{pointer-events:none;opacity:0;transform:translate(0, -2rem);transition:transform .9s cubic-bezier(var(--f-cubic)),opacity .9s cubic-bezier(var(--f-cubic))}html.no-header .h-nav,html.no-header .h-menu{opacity:0;pointer-events:none;transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.page-content{min-height:100vh}.t-overlay{position:fixed;z-index:15;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.t-overlay::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-black)}.t-overlay .t-brand-touch{width:8rem;height:3rem;background:var(--c-white);transform:scale(1, 1)}.t-overlay .loading{position:absolute;z-index:101;display:block;bottom:1rem;left:1rem;width:2rem;height:2rem;opacity:1;transition:opacity .3s cubic-bezier(var(--f-cubic));transition-delay:.6s}.t-overlay .loading img{animation-name:loading;animation-duration:.45s;animation-timing-function:linear;animation-iteration-count:infinite}.-t-o-enter-active{transition-delay:.3s}.-t-o-enter-active::before{opacity:1;transition:opacity .3s cubic-bezier(var(--f-cubic))}.-t-o-enter-active .t-brand-touch{transform:scale(1, 1);transform-origin:center left;transition:transform .3s cubic-bezier(var(--f-cubic))}.-t-o-enter::before{opacity:0}.-t-o-enter .t-brand-touch{transform:scale(0, 1)}.-t-o-enter .loading{opacity:0;transform:scale(0.5)}.-t-o-leave-active{transition-delay:1.05s;pointer-events:none}.-t-o-leave-active::before{opacity:0;transition:opacity .9s cubic-bezier(var(--f-cubic));transition-delay:.15s}.-t-o-leave-active .t-brand-touch{transform:scale(0, 1);transform-origin:center right;transition:transform .3s cubic-bezier(var(--f-cubic-2))}.-t-o-leave-to .loading{opacity:0;transition:opacity .9s cubic-bezier(var(--f-cubic))}@keyframes loading{from{transform:rotate(0)}to{transform:rotate(360deg)}}', ""]), t.exports = x
      },
      351: function (t, e, n) {
         t.exports = n.p + "fonts/Stolzl-Book.f56b256.woff2"
      },
      352: function (t, e, n) {
         t.exports = n.p + "fonts/Stolzl-Book.8f453e3.ttf"
      },
      353: function (t, e, n) {
         t.exports = n.p + "fonts/Stolzl-Regular.8f55747.woff2"
      },
      354: function (t, e, n) {
         t.exports = n.p + "fonts/Stolzl-Regular.e894a22.ttf"
      },
      355: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Regular.2ab0f75.woff2"
      },
      356: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Regular.c9b95f9.ttf"
      },
      357: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Italic.6279f37.woff2"
      },
      358: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Italic.f9eb847.ttf"
      },
      359: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Semibold.fb98e5f.woff2"
      },
      360: function (t, e, n) {
         t.exports = n.p + "fonts/Switzer-Semibold.47007ab.ttf"
      },
      361: function (t, e, n) {
         "use strict";
         n(209)
      },
      362: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.splash-screen{position:fixed;z-index:100;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;transform:translateZ(0)}.splash-screen::before{content:"";display:block;position:absolute;z-index:100;top:0;left:0;width:100%;height:100%;background:var(--c-black);opacity:1;transition:opacity .9s cubic-bezier(var(--f-cubic-2));transition-delay:1.2s}.splash-screen .loading{position:absolute;z-index:101;display:block;bottom:1rem;left:1rem;width:2rem;height:2rem;opacity:1;transition:opacity 0s cubic-bezier(var(--f-cubic));transition-delay:.6s}.splash-screen .loading img{animation-name:loading;animation-duration:.45s;animation-timing-function:linear;animation-iteration-count:infinite}html.-loading .page-content{opacity:0}html.-loading .h-logo,html.-loading .h-nav,html.-loading .h-menu{display:none}html.-splashing .splash-screen .s-logo::before{transform:scale(1, 1)}html.-splashing .splash-screen .s-logo .s-logo_the{opacity:1;transform:translateZ(0);transition-delay:.45s}html.-splashing .splash-screen .s-logo .s-logo_dot{opacity:1;transition-delay:1.05s}html.-splashing .splash-screen .s-logo .s-logo_white-wrap{transform:scale(1, 1);transition-delay:.3s}html.-splashing .splash-screen .s-logo .s-logo_white-wrap .-o-h span{opacity:1;transform:translateZ(0);transition-delay:.525s}.splash-screen.-t-splash-leave-active{transition-duration:2.4s}.splash-screen.-t-splash-leave-to::before{opacity:0}.splash-screen.-t-splash-leave-to .loading{opacity:0;transition:opacity .3s cubic-bezier(var(--f-cubic))}', ""]), t.exports = r
      },
      363: function (t, e, n) {
         "use strict";
         n(210)
      },
      364: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.s-logo[data-v-e0e6a4b4]{display:block;position:absolute;z-index:101;top:auto;right:auto;bottom:auto;left:auto;font-size:2.8rem;line-height:2rem;font-family:"Stolzl-Book";text-transform:uppercase;color:var(--c-white);width:50%}.s-logo[data-v-e0e6a4b4]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-black);transform:scale(1, 0);transform-origin:center bottom;transition:transform .6s cubic-bezier(var(--f-cubic))}.s-logo span[data-v-e0e6a4b4]{display:inline-block;position:relative;margin-top:.25rem;margin-bottom:.25rem}.s-logo .s-logo_the[data-v-e0e6a4b4]{padding-right:.5rem;padding-left:.5rem;opacity:0;transform:translate(0, 75%);transition:transform .9s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic-2))}.s-logo .s-logo_dot[data-v-e0e6a4b4]{position:absolute;bottom:0;left:100%;pointer-events:none;opacity:0;transition:opacity .3s cubic-bezier(var(--f-cubic))}.s-logo .s-logo_white-wrap[data-v-e0e6a4b4]{width:100%;text-align:right;position:relative;color:var(--c-black);overflow:hidden;transform:scale(0, 1);transform-origin:left top;transition:transform .6s cubic-bezier(var(--f-cubic))}.s-logo .s-logo_white-wrap[data-v-e0e6a4b4]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-white);transition:transform .3s cubic-bezier(var(--f-cubic))}.s-logo .s-logo_white-wrap .-o-h[data-v-e0e6a4b4]{position:relative;overflow:hidden;padding-top:.25rem;padding-bottom:1px;margin-bottom:.25rem}.s-logo .s-logo_white-wrap .-o-h span[data-v-e0e6a4b4]{display:block;font-family:"Stolzl-Regular";margin-right:.5rem;margin-top:0;margin-bottom:0;transform:translate(0, 110%);transition:transform .75s cubic-bezier(var(--f-cubic))}@media(min-width: 1024px){.s-logo[data-v-e0e6a4b4]{width:17.5rem;max-width:initial;display:flex;align-items:flex-end}.s-logo .s-logo_white-wrap[data-v-e0e6a4b4]{padding-top:.5rem}.s-logo .s-logo_white-wrap[data-v-e0e6a4b4]::before{transform:translate(0, 0.5rem)}}', ""]), t.exports = r
      },
      365: function (t, e, n) {
         "use strict";
         n(211)
      },
      366: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.h-logo[data-v-6e642a60]{display:block;position:fixed;z-index:20;top:0;left:0;font-size:2.8rem;line-height:2rem;font-family:"Stolzl-Book";text-transform:uppercase;color:var(--c-white);width:40%}.h-logo[data-v-6e642a60]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-black)}.h-logo span[data-v-6e642a60]{display:inline-block;position:relative;margin-top:.25rem;margin-bottom:.25rem}.h-logo .h-logo_the[data-v-6e642a60]{padding-right:.5rem;padding-left:.5rem;transform:translateZ(0);transition:transform .3s cubic-bezier(var(--f-cubic))}.h-logo .h-logo_dot[data-v-6e642a60]{position:absolute;bottom:0;left:150%;pointer-events:none}.h-logo .h-logo_white-wrap[data-v-6e642a60]{width:150%;text-align:right;position:relative;color:var(--c-black);overflow:hidden}.h-logo .h-logo_white-wrap[data-v-6e642a60]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-white);transition:transform .3s cubic-bezier(var(--f-cubic))}.h-logo .h-logo_white-wrap .-o-h[data-v-6e642a60]{position:relative;overflow:hidden;padding-top:.25rem;padding-bottom:1px;margin-bottom:.25rem}.h-logo .h-logo_white-wrap .-o-h span[data-v-6e642a60]{display:block;font-family:"Stolzl-Regular";margin-right:.5rem;margin-top:0;margin-bottom:0;transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic));transition-delay:.15s}@media(max-width: 1024px){.h-logo[data-v-6e642a60]{transform:scale(1);transform-origin:left top;transition:width .3s cubic-bezier(var(--f-cubic)),transform .3s cubic-bezier(var(--f-cubic))}html.m-head .h-logo[data-v-6e642a60],html.m-menu-head .h-logo[data-v-6e642a60]{transform:scale(0.714);width:9rem}}@media(min-width: 1024px){.h-logo[data-v-6e642a60]{width:17.5rem;max-width:initial;display:flex;align-items:flex-end;transition:width .6s cubic-bezier(var(--f-cubic))}.h-logo .h-logo_white-wrap[data-v-6e642a60]{padding-top:.5rem}.h-logo .h-logo_white-wrap[data-v-6e642a60]::before{transform:translate(0, 0.5rem)}.h-logo:hover .h-logo_white-wrap[data-v-6e642a60]::before{transform:translateZ(0)}}html .h-logo.-changed[data-v-6e642a60]{width:18rem}@media(min-width: 1024px){html .h-logo.-changed[data-v-6e642a60]{width:23.5rem}}.h-logo .h-logo_white-wrap .-o-h.-t-logo-enter-active[data-v-6e642a60]{transition-duration:.9s;position:relative}.h-logo .h-logo_white-wrap .-o-h.-t-logo-enter span[data-v-6e642a60]{transform:translate(0, 120%)}.h-logo .h-logo_white-wrap .-o-h.-t-logo-leave-active[data-v-6e642a60]{transition-duration:0s;display:none}', ""]), t.exports = r
      },
      367: function (t, e, n) {
         "use strict";
         n(212)
      },
      368: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, ".h-nav[data-v-83087134]{display:none}@media(min-width: 1280px){.h-nav[data-v-83087134]{display:block;position:absolute;z-index:10;top:1rem;left:38.2%;width:34%;display:flex;justify-content:space-between}.h-nav a[data-v-83087134]{opacity:1;transition:opacity 1.5s cubic-bezier(var(--f-cubic))}.h-nav a[data-v-83087134]:hover{color:var(--c-white)}.h-nav.-active-nav a[data-v-83087134]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.h-nav.-active-nav a.nuxt-link-active[data-v-83087134]{opacity:1}.h-nav.-hover-nav a[data-v-83087134],.h-nav.-hover-nav.-active-nav a[data-v-83087134]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.h-nav.-hover-nav a[data-v-83087134]:hover,.h-nav.-hover-nav.-active-nav a[data-v-83087134]:hover{opacity:1}}@media(min-width: 1600px){.h-nav[data-v-83087134]{width:23.61%;min-width:17rem;left:0;right:0;margin:0 auto}}", ""]), t.exports = r
      },
      369: function (t, e, n) {
         "use strict";
         n(213)
      },
      370: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.h-menu[data-v-6ad647ea]{position:fixed;z-index:10;top:0;right:0;width:60%;height:5.1rem;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none}.h-menu[data-v-6ad647ea]::before{content:"";display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background-color:var(--c-black)}.h-menu .h-menu_icon[data-v-6ad647ea]{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}.h-menu .h-menu_icon div[data-v-6ad647ea]{position:relative;overflow:hidden;transform:translateZ(0);transition:transform .3s cubic-bezier(var(--f-cubic))}.h-menu .h-menu_icon div[data-v-6ad647ea]::before{content:"";display:block;position:absolute;bottom:0;left:0;width:100%;height:100%;background:linear-gradient(90deg, var(--c-blue), var(--c-magenta));transform:translate(0, -100%)}.h-menu .h-menu_icon div>span[data-v-6ad647ea]{display:block;line-height:1.2;opacity:1}.h-menu .h-menu_icon div[data-v-6ad647ea]:nth-child(2){margin-left:1rem}.h-menu .h-menu_icon div[data-v-6ad647ea]:nth-child(3){margin-left:.5rem}@media(max-width: 1024px){.h-menu[data-v-6ad647ea]{transition:width .3s cubic-bezier(var(--f-cubic)),height .3s cubic-bezier(var(--f-cubic))}.h-menu[data-v-6ad647ea]::before{transform:scale(1, 1);transform-origin:top center;transition:transform .3s cubic-bezier(var(--f-cubic));transition-delay:0s}html.m-head .h-menu[data-v-6ad647ea]{width:40%;height:3.57rem}html.m-head .h-menu[data-v-6ad647ea]::before{transform:scale(1, 0);transition-delay:.3s}}.h-menu.-animate-menu .h-menu_icon div[data-v-6ad647ea]::before{animation:m-line-basic-6ad647ea 6s cubic-bezier(var(--f-cubic-2)) forwards;animation-play-state:running;will-change:transform}.h-menu.-animate-menu .h-menu_icon div>span[data-v-6ad647ea]{animation:m-text-basic-6ad647ea 6s cubic-bezier(var(--f-cubic-2)) forwards;animation-play-state:running;will-change:transform}@keyframes m-line-basic-6ad647ea{0%{transform:translate(0, -100%);height:100%;bottom:0}45%{transform:translate(0, -100%);height:100%;bottom:0}50%{transform:translate(0, 0);height:1px;bottom:0}55%{transform:translate(0, 0);height:1px;bottom:50%}100%{transform:translate(0, 0);height:1px;bottom:50%}}@keyframes m-text-basic-6ad647ea{0%{opacity:0;transform:translate(0, 100%)}5%{opacity:1;transform:translate(0, 0)}45%{opacity:1;transform:translate(0, 0)}50%{opacity:0;transform:translate(0, -100%)}100%{opacity:0;transform:translate(0, -100%)}}.h-menu.-hover-menu .h-menu_icon div[data-v-6ad647ea]::before{animation:initial;transform:translate(0, 0);height:1px;bottom:50%}.h-menu.-hover-menu .h-menu_icon div>span[data-v-6ad647ea]{opacity:0;animation:initial}.h-menu.-hover-menu .h-menu_icon div[data-v-6ad647ea]:nth-child(1){transform:translate(1.5rem, 0)}.h-menu.-hover-menu .h-menu_icon div[data-v-6ad647ea]:nth-child(2){transform:translate(-1rem, 0)}.h-menu.-hover-menu .h-menu_icon div[data-v-6ad647ea]:nth-child(3){transform:translate(0.5rem, 0)}@media(min-width: 1024px){.h-menu[data-v-6ad647ea]{width:15.98%;max-width:17.5rem;height:3rem}}', ""]), t.exports = r
      },
      371: function (t, e) {
         t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMEEwQTBBO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjIwIiB5MT0iMTAiIHgyPSIwLjgiIHkyPSIxMCIvPgo8cG9seWxpbmUgaWQ9IlBhdGgtOCIgY2xhc3M9InN0MCIgcG9pbnRzPSIxMC4yLDAuNSAwLjgsMTAgMTAuMiwxOS41ICIvPgo8L3N2Zz4K"
      },
      372: function (t, e, n) {
         t.exports = n.p + "img/temp-m-menu.3de257a.jpg"
      },
      373: function (t, e, n) {
         "use strict";
         n(214)
      },
      374: function (t, e, n) {
         var r = n(27),
            o = n(158),
            c = n(236),
            l = r(!1),
            m = o(c);
         l.push([t.i, '.m-menu[data-v-068c514c]{position:fixed;z-index:15;top:0;left:0;width:100%;height:100%}.m-menu .m-menu_content[data-v-068c514c]{display:flex;flex-direction:column;height:100%}.m-menu .m-menu_content[data-v-068c514c]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:var(--c-white);transform:scale(1, 1);transform-origin:top center;transition:transform .6s cubic-bezier(var(--f-cubic-2))}.m-menu .m-menu_content .m-menu_left[data-v-068c514c]{display:flex;flex-direction:column;height:8rem}.m-menu .m-menu_content .m-menu_left .m-menu-b[data-v-068c514c],.m-menu .m-menu_content .m-menu_left .m-menu-f[data-v-068c514c]{overflow:hidden;background:var(--c-black)}.m-menu .m-menu_content .m-menu_left .m-menu-b[data-v-068c514c]{display:none}.m-menu .m-menu_content .m-menu_left .m-menu-f[data-v-068c514c]{clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);transition:clip-path .6s cubic-bezier(var(--f-cubic-2))}.m-menu .m-menu_content .m-menu_left .m-menu-f figure[data-v-068c514c]{display:block;width:100%;height:100%;opacity:1;transform:scale(1);transition:transform 2.1s cubic-bezier(var(--f-cubic)),opacity 2.1s cubic-bezier(var(--f-cubic));transition-delay:0s}.m-menu .m-menu_content .m-menu_left .m-menu-f figure img[data-v-068c514c]{position:relative;width:100%;height:100%;object-fit:cover;transform:scale(1.8, 3);animation:graphics-068c514c 30s linear infinite;animation-play-state:paused;will-change:transform}@keyframes graphics-068c514c{0%{transform:scale(1.8, 3) rotate(0deg)}50%{transform:scale(8, 1.8) rotate(180deg)}100%{transform:scale(1.8, 3) rotate(359.99deg)}}.m-menu .m-menu_content .m-menu_left .m-menu-f span[data-v-068c514c]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:url(' + m + ');background-repeat:repeat;transform:translateZ(0);opacity:1}.m-menu .m-menu_content .m-menu_right[data-v-068c514c]{position:relative;display:flex;flex-direction:column;justify-content:space-between;height:100%}.m-menu .m-menu_content .m-menu_right .m-menu_head[data-v-068c514c]{position:relative;display:flex;flex-direction:column;justify-content:center;margin-top:1rem;margin-left:2.5rem;margin-right:2.5rem}.m-menu .m-menu_content .m-menu_right .m-menu_head[data-v-068c514c]::before{content:"";display:block;width:100%;padding-bottom:2rem}.m-menu .m-menu_content .m-menu_right .m-menu_head a[data-v-068c514c]{position:absolute;left:0;top:auto;bottom:auto;display:inline-flex;align-items:center;color:var(--c-black);opacity:1;transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic));transition-delay:.15s}.m-menu .m-menu_content .m-menu_right .m-menu_head a figure[data-v-068c514c]{width:1rem;margin-right:.5rem;transform:translateZ(0);transition:transform .3s cubic-bezier(var(--f-cubic));pointer-events:none}.m-menu .m-menu_content .m-menu_right .m-menu_nav[data-v-068c514c]{position:relative;margin-left:2.5rem;margin-right:2.5rem;margin-top:auto;margin-bottom:auto}.m-menu .m-menu_content .m-menu_right .m-menu_nav div[data-v-068c514c]{overflow:hidden;margin:-0.2rem 0;padding:.2rem 0}.m-menu .m-menu_content .m-menu_right .m-menu_nav div a[data-v-068c514c]{position:relative;display:inline-block;font-family:"Stolzl-Book";text-transform:initial;transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic));transition-delay:.15s}.m-menu .m-menu_content .m-menu_right .m-menu_nav div a span[data-v-068c514c]{color:var(--c-black);transition:color .3s cubic-bezier(var(--f-cubic))}.m-menu .m-menu_content .m-menu_right .m-menu_nav .-include[data-v-068c514c]{position:relative}.m-menu .m-menu_content .m-menu_right .m-menu_nav .-include span.-h5[data-v-068c514c]{display:block;position:absolute;top:0;left:100%;padding-left:.5rem}.m-menu .m-menu_content .m-menu_right .m-menu_footer[data-v-068c514c]{position:relative;display:flex;flex-direction:column;align-items:center;margin-top:auto;margin-left:2.5rem;margin-right:2.5rem;padding-bottom:2rem}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul[data-v-068c514c]{display:flex;opacity:1;transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic));transition-delay:.6s;padding-left:1rem}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]{display:block;position:relative;padding:.9rem;margin-right:1rem}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]::before,.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]::after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;border:1px solid var(--c-black);border-radius:50%;transform:scale(1);opacity:.1;transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]::before{background:var(--c-black);opacity:0;transform:scale(0.25)}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c] svg{position:relative;z-index:1;width:1.2rem;fill:var(--c-black);transform:scale(1);transition:transform .3s cubic-bezier(var(--f-cubic)),fill .3s cubic-bezier(var(--f-cubic))}.m-menu .m-menu_content .m-menu_right .m-menu_footer .ui-button[data-v-068c514c]{margin-top:2rem;margin-bottom:2rem;opacity:1;transform:translateZ(0);transition:transform .9s cubic-bezier(var(--f-cubic)),opacity .9s cubic-bezier(var(--f-cubic));transition-delay:.6s}.m-menu .m-menu_content .m-menu_right .m-menu_footer .rhombus[data-v-068c514c]{margin-left:auto;margin-right:auto}.m-menu .m-menu_content .m-menu_right .m-menu_footer .rhombus[data-v-068c514c]::before{content:"";margin-top:.4rem;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);opacity:1;transform:rotate(45deg) scale(1);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic));transition-delay:.9s}.m-menu .m-menu-close[data-v-068c514c]{position:absolute;top:0;right:0;width:8rem;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;overflow:hidden}.m-menu .m-menu-close[data-v-068c514c]::before{content:"";display:block;width:100%;padding-bottom:100%;background:var(--c-black);transform:translateZ(0);transition:transform .6s cubic-bezier(var(--f-cubic))}.m-menu .m-menu-close .m-menu_icon[data-v-068c514c]{position:absolute;width:50%;top:auto;left:auto;right:auto;bottom:auto;opacity:1;transform:scale(1);transition:transform .6s cubic-bezier(var(--f-cubic)),opacity .6s cubic-bezier(var(--f-cubic));transition-delay:.3s}.m-menu .m-menu-close .m-menu_icon[data-v-068c514c]::before,.m-menu .m-menu-close .m-menu_icon[data-v-068c514c]::after{content:"";display:block;position:absolute;width:100%;height:1px;background:linear-gradient(90deg, var(--c-blue), var(--c-magenta));transform:rotate(45deg) scale(1, 1);transition:transform .15s cubic-bezier(var(--f-cubic));will-change:transform}.m-menu .m-menu-close .m-menu_icon[data-v-068c514c]::after{transform:rotate(-45deg) scale(1, 1)}.m-menu.inview .m-menu_content .m-menu_left div:nth-child(2) figure img[data-v-068c514c]{animation-play-state:running}@media(min-width: 1024px){.m-menu .m-menu_content[data-v-068c514c]{flex-direction:row}.m-menu .m-menu_content .m-menu_left[data-v-068c514c]{width:34%;height:100%}.m-menu .m-menu_content .m-menu_left .m-menu-b[data-v-068c514c],.m-menu .m-menu_content .m-menu_left .m-menu-f[data-v-068c514c]{height:50%}@media (min-width: 1023px) {.h-logo .h-logo_dot[data-v-6e642a60]{left: 100%;}}.m-menu .m-menu_content .m-menu_left .m-menu-b[data-v-068c514c]{display:block;transform-origin:top center;transform:scale(1, 1);transition:transform .6s cubic-bezier(var(--f-cubic-2))}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch[data-v-068c514c]{position:absolute;left:2rem;bottom:1rem;width:1.5rem}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch div[data-v-068c514c]{position:relative;width:100%;padding-top:50%;padding-bottom:50%;display:flex;justify-content:center;align-items:center;transform:scale(1) rotate(0deg);transition:transform .3s cubic-bezier(var(--f-cubic));transition-delay:.3s}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch div[data-v-068c514c]::before{content:"";position:absolute;top:auto;right:auto;bottom:auto;left:auto;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch div[data-v-068c514c]:nth-child(1){transition-delay:.3s}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch div[data-v-068c514c]:nth-child(2){transition-delay:.45s}.m-menu .m-menu_content .m-menu_left .m-foot_brand-touch div[data-v-068c514c]:nth-child(3){transition-delay:.6s}.m-menu .m-menu_content .m-menu_right[data-v-068c514c]{width:66%}.m-menu .m-menu_content .m-menu_right .m-menu_head[data-v-068c514c]{margin-top:initial;margin-left:12.63%;max-height:25%}.m-menu .m-menu_content .m-menu_right .m-menu_head[data-v-068c514c]::before{padding-bottom:27.75%}.m-menu .m-menu_content .m-menu_right .m-menu_head a:hover figure[data-v-068c514c]{transform:translate(-1rem, 0)}.m-menu .m-menu_content .m-menu_right .m-menu_nav[data-v-068c514c]{margin-left:12.63%;margin-top:2rem;margin-right:initial}.m-menu .m-menu_content .m-menu_right .m-menu_nav div a:hover span[data-v-068c514c]{color:var(--c-blue)}.m-menu .m-menu_content .m-menu_right .m-menu_footer[data-v-068c514c]{flex-direction:row;margin-left:12.63%;margin-top:2rem;margin-bottom:2rem;margin-right:initial;padding-bottom:0}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul[data-v-068c514c]{padding-left:0}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]{margin-right:3rem}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]:hover::before{opacity:1;transform:scale(1)}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]:hover::after{transform:scale(0.5)}.m-menu .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul a[data-v-068c514c]:hover svg{transform:scale(1.25);fill:var(--c-white)}.m-menu .m-menu_content .m-menu_right .m-menu_footer .ui-button[data-v-068c514c]{margin-top:0;margin-bottom:0}.m-menu .m-menu_content .m-menu_right .m-menu_footer .rhombus[data-v-068c514c]{margin-right:13.875%}.m-menu .m-menu-close[data-v-068c514c]{width:15.98%;max-width:17.5rem}.m-menu .m-menu-close:hover .m-menu_icon[data-v-068c514c]::before{transform:rotate(45deg) scale(1.2, 1)}.m-menu .m-menu-close:hover .m-menu_icon[data-v-068c514c]::after{transform:rotate(-45deg) scale(1.2, 1)}}@media(max-width: 350px){.m-menu .m-menu_content .m-menu_right .m-menu_footer .ui-button[data-v-068c514c]{margin-top:1rem;margin-bottom:1rem}}', ""]), t.exports = l
      },
      375: function (t, e, n) {
         "use strict";
         n(215)
      },
      376: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, ".m-menu.-t-menu-enter-active{transition-duration:2s}.m-menu.-t-menu-enter .m-menu_content::before{transform:scale(1, 0)}.m-menu.-t-menu-enter .m-menu_content .m-menu_left .m-menu-b{transform:scale(1, 0)}.m-menu.-t-menu-enter .m-menu_content .m-menu_left .m-menu-f{clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)}.m-menu.-t-menu-enter .m-menu_content .m-menu_left .m-menu-f figure{opacity:0;transform:scale(3)}.m-menu.-t-menu-enter .m-menu_content .m-menu_left .m-foot_brand-touch div{transform:scale(0) rotate(90deg);transition:transform .6s cubic-bezier(var(--f-cubic-2))}.m-menu.-t-menu-enter .m-menu_content .m-menu_right .m-menu_head a{opacity:0;transform:translate(0, 4rem)}.m-menu.-t-menu-enter .m-menu_content .m-menu_right .m-menu_nav div a{transform:translate(0, 200%)}.m-menu.-t-menu-enter .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul,.m-menu.-t-menu-enter .m-menu_content .m-menu_right .m-menu_footer .ui-button{opacity:0;transform:translate(0, 4rem)}.m-menu.-t-menu-enter .m-menu_content .m-menu_right .m-menu_footer .rhombus::before{transform:rotate(135deg) scale(0)}.m-menu.-t-menu-enter .m-menu-close::before{transform:translate(0, -100%)}.m-menu.-t-menu-enter .m-menu-close .m-menu_icon{opacity:0;transform:scale(0.5)}.m-menu.-t-menu-leave-active{transition-duration:2s;pointer-events:none}.m-menu.-t-menu-leave-to .m-menu_content::before{transform:scale(1, 0);transition:transform .6s cubic-bezier(var(--f-cubic))}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-menu-b{transform:scale(1, 0);transition:transform .45s cubic-bezier(var(--f-cubic))}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-menu-f{clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);transition:clip-path .45s cubic-bezier(var(--f-cubic))}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-menu-f figure{opacity:0;transform:scale(3)}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-foot_brand-touch div{transform:scale(0) rotate(-90deg);transition:transform .6s cubic-bezier(var(--f-cubic-2));transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-foot_brand-touch div:nth-child(1){transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-foot_brand-touch div:nth-child(2){transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_left .m-foot_brand-touch div:nth-child(3){transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_right .m-menu_head a{opacity:0;transform:translate(0, -4rem);transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_right .m-menu_nav div a{transform:translate(0, -200%);transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_right .m-menu_footer .m-soc_ul,.m-menu.-t-menu-leave-to .m-menu_content .m-menu_right .m-menu_footer .ui-button{opacity:0;transform:translate(0, -4rem);transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic));transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu_content .m-menu_right .m-menu_footer .rhombus::before{transform:rotate(135deg) scale(0);transition-delay:0s}.m-menu.-t-menu-leave-to .m-menu-close::before{transform:translate(0, -100%);transition:transform .3s cubic-bezier(var(--f-cubic))}.m-menu.-t-menu-leave-to .m-menu-close .m-menu_icon{opacity:0;transform:scale(0.5);transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.m-menu_footer .ui-button{border:1px solid rgba(var(--c-black--rgb), 0.1)}.m-menu_footer .ui-button::before,.m-menu_footer .ui-button::after{background:var(--c-black)}.m-menu_footer .ui-button:hover span{color:var(--c-white) !important}", ""]), t.exports = r
      },
      377: function (t, e, n) {
         "use strict";
         n(216)
      },
      378: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, '.ui-button[data-v-80bf5ece]{display:flex;justify-content:center;align-items:center;border:1px solid var(--c-white);box-shadow:inset 0 0 0 1px var(--c-white);border-radius:4rem;padding:1.2rem .8rem;overflow:hidden;position:relative;transform:translateZ(0)}.ui-button[data-v-80bf5ece]::before,.ui-button[data-v-80bf5ece]::after{content:"";display:block;position:absolute;z-index:0;top:0;left:0;width:100%;height:52%;background:var(--c-white);transform:scale(0, 1);transition:transform .6s cubic-bezier(var(--f-cubic));transform-origin:left center}.ui-button[data-v-80bf5ece]::after{top:48%;transform-origin:right center}.ui-button span[data-v-80bf5ece]{position:relative;z-index:1;display:block;transform:translateZ(0);margin-top:-0.65rem;margin-bottom:-0.5rem;transition:color .3s cubic-bezier(var(--f-cubic))}@media(min-width: 1024px){.ui-button[data-v-80bf5ece]{padding:.8rem}.ui-button[data-v-80bf5ece]:hover::before,.ui-button[data-v-80bf5ece]:hover::after{transform:scale(1, 1);transition:transform .3s cubic-bezier(var(--f-cubic-2))}.ui-button:hover span[data-v-80bf5ece]{color:var(--c-black);background:initial;-webkit-background-clip:initial;background-clip:initial;-webkit-text-fill-color:initial;text-fill-color:initial}}@media(max-width: 350px){.ui-button[data-v-80bf5ece]{padding:.8rem .8rem}}', ""]), t.exports = r
      },
      379: function (t, e, n) {
         "use strict";
         n.r(e), n.d(e, "state", (function () {
            return c
         })), n.d(e, "mutations", (function () {
            return l
         })), n.d(e, "actions", (function () {
            return m
         }));
         var r = n(24),
            o = n(13),
            c = (n(60), n(16), n(35), n(36), function () {
               return {
                  options: {},
                  data: {}
               }
            }),
            l = {
               updateData: function (t, e) {
                  return Object.assign(t.data, e)
               }
            },
            m = {
               nuxtServerInit: function (t) {
                  return Object(o.a)(regeneratorRuntime.mark((function e() {
                     var n;
                     return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                           case 0:
                              return n = t.dispatch, e.next = 3, Promise.all([n("fetchData", {
                                 apiRoute: "/wp-json/api/options"
                              })]);
                           case 3:
                           case "end":
                              return e.stop()
                        }
                     }), e)
                  })))()
               },
               fetchData: function (t, e) {
                  var n = this;
                  return Object(o.a)(regeneratorRuntime.mark((function o() {
                     var c, l, m, f;
                     return regeneratorRuntime.wrap((function (o) {
                        for (;;) switch (o.prev = o.next) {
                           case 0:
                              if (c = t.state, l = t.commit, m = e.apiRoute, c.data[m]) {
                                 o.next = 8;
                                 break
                              }
                              return o.next = 5, n.$axios.$get(m);
                           case 5:
                              return f = o.sent, l("updateData", Object(r.a)({}, m, f)), o.abrupt("return", f);
                           case 8:
                              return o.abrupt("return", c.data[m]);
                           case 9:
                           case "end":
                              return o.stop()
                        }
                     }), o)
                  })))()
               }
            }
      },
      380: function (t, e, n) {
         "use strict";
         n.r(e), n.d(e, "state", (function () {
            return r
         })), n.d(e, "getters", (function () {
            return o
         })), n.d(e, "mutations", (function () {
            return c
         }));
         var r = function () {
               return {
                  scroll: {
                     isScrolling: !1,
                     limit: {
                        x: 0,
                        y: 0
                     },
                     x: 0,
                     y: 0
                  }
               }
            },
            o = {
               getScrollPosition: function (t) {
                  return t.y
               }
            },
            c = {
               setScroll: function (t, e) {
                  t.scroll = Object.assign({}, t.scroll, e)
               }
            }
      },
      402: function (t, e, n) {
         "use strict";
         n(225)
      },
      403: function (t, e, n) {
         var r = n(27)(!1);
         r.push([t.i, ".smooth-scroll{will-change:transform}", ""]), t.exports = r
      },
      404: function (t, e, n) {
         "use strict";
         n.r(e);
         n(52);
         var r = n(29),
            o = {
               name: "SplashScreen",
               data: function () {
                  return {
                     isSplashScreenShowed: !0
                  }
               },
               components: {},
               methods: {},
               created: function () {
                  var t = this;
                  r.a.$on("open-splash-screen", (function () {
                     t.isSplashScreenShowed = !0
                  })), r.a.$on("close-splash-screen", (function () {
                     t.isSplashScreenShowed = !1, document.documentElement.classList.remove("-loading"), setTimeout((function () {
                        document.documentElement.classList.remove("-splashing")
                     }), 1500)
                  }))
               },
               mounted: function () {
                  document.documentElement.classList.add("-loading"), document.documentElement.classList.add("-splashing")
               }
            },
            c = (n(361), n(14)),
            component = Object(c.a)(o, (function () {
               var t = this,
                  e = t._self._c;
               return e("Transition", {
                  attrs: {
                     name: "-t-splash"
                  }
               }, [t.isSplashScreenShowed ? e("div", {
                  staticClass: "splash-screen"
               }, [e("div", {
                  staticClass: "loading"
               }, [e("img", {
                  attrs: {
                     src: n(206),
                     alt: "Bird"
                  }
               })]), t._v(" "), e("SplashLogo")], 1) : t._e()])
            }), [], !1, null, null, null);
         e.default = component.exports;
         installComponents(component, {
            SplashLogo: n(405).default
         })
      },
      405: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = {
               name: "SplashLogo",
               data: function () {
                  return {}
               },
               components: {},
               methods: {},
               created: function () {},
               mounted: function () {}
            },
            o = (n(363), n(14)),
            component = Object(o.a)(r, (function () {
               this._self._c;
               return this._m(0)
            }), [function () {
               var t = this,
                  e = t._self._c;
               return e("div", {
                  staticClass: "s-logo"
               }, [e("span", {
                  staticClass: "s-logo_the"
               }, [t._v(window.logo_first)]), t._v(" "), e("div", {
                  staticClass: "s-logo_white-wrap"
               }, [e("div", {
                  staticClass: "-o-h -os"
               }, [e("span", [t._v(window.logo_second)])])]), t._v(" "), e("span", {
                  staticClass: "s-logo_dot"
               }, [t._v(".")])])
            }], !1, null, "e0e6a4b4", null);
         e.default = component.exports
      },
      406: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = n(20),
            o = (n(52), n(29)),
            c = {
               name: "HeaderLogo",
               data: function () {
                  return {
                     isStudios: !1,
                     isOperator: !1
                  }
               },
               components: {},
               methods: {
                  toTop: function () {
                     var t = this;
                     this.isStudios = !1, this.isOperator = !1, setTimeout((function () {
                        t.$nuxt.$emit("locomotive-scroll-top")
                     }), 150)
                  }
               },
               created: function () {},
               mounted: function () {
                  var t = this;
                  o.a.$on("scroll", (function (e) {
                     "object" === Object(r.a)(e.currentElements.studios) ? t.isStudios = !0 : (document.documentElement.classList.remove("l-studios"), t.isStudios = !1), "object" === Object(r.a)(e.currentElements.operator) ? t.isOperator = !0 : (document.documentElement.classList.remove("l-operator"), t.isOperator = !1), "object" === Object(r.a)(e.currentElements.studios) || "object" === Object(r.a)(e.currentElements.operator) ? t.$el.classList.add("-changed") : t.$el.classList.remove("-changed")
                  }))
               }
            },
            l = (n(365), n(14)),
            component = Object(l.a)(c, (function () {
               var t = this,
                  e = t._self._c;
               return e("nuxt-link", {
                  staticClass: "h-logo -normilize",
                  attrs: {
                     to: "/"
                  },
                  nativeOn: {
                     click: function (e) {
                        return t.toTop()
                     }
                  }
               }, [e("span", {
                  staticClass: "h-logo_the"
               }, [t._v(window.logo_first)]), t._v(" "), e("div", {
                  staticClass: "h-logo_white-wrap"
               }, [e("Transition", {
                  attrs: {
                     name: "-t-logo"
                  }
               }, [t.isStudios || t.isOperator ? t._e() : e("div", {
                  staticClass: "-o-h -os"
               }, [e("span", [t._v(window.logo_second)])])]), t._v(" "), e("Transition", {
                  attrs: {
                     name: "-t-logo"
                  }
               }, [t.isStudios && !t.isOperator ? e("div", {
                  staticClass: "-o-h -studios"
               }, [e("span", [t._v("Studios")])]) : t._e()]), t._v(" "), e("Transition", {
                  attrs: {
                     name: "-t-logo"
                  }
               }, [t.isOperator ? e("div", {
                  staticClass: "-o-h -operator"
               }, [e("span", [t._v("Operator")])]) : t._e()])], 1), t._v(" "), e("span", {
                  staticClass: "h-logo_dot"
               }, [t._v(".")])])
            }), [], !1, null, "6e642a60", null);
         e.default = component.exports
      },
      407: function (t, e, n) {
         "use strict";
         n.r(e);
         n(16);
         var r = {
               name: "HeaderNav",
               components: {},
               data: function () {
                  return {
                     hover: !1
                  }
               },
               methods: {
                  subIsActive: function (input) {
                     var t = this;
                     return (Array.isArray(input) ? input : [input]).some((function (path) {
                        return 0 === t.$route.path.indexOf(path)
                     }))
                  }
               },
               created: function () {},
               mounted: function () {}
            },
            o = (n(367), n(14)),
            component = Object(o.a)(r, (function () {
                var t = this,
                   e = t._self._c;
                return e("nav", {
                   staticClass: "h-nav",
                   class: {
                      "-hover-nav": t.hover,
                      "-active-nav": t.subIsActive(window.ob_btn_services.getAttribute("href")) || t.subIsActive(window.ob_btn_work.getAttribute("href")) || t.subIsActive(window.ob_btn_about.getAttribute("href")) || t.subIsActive(window.ob_btn_contact.getAttribute("href")) || t.subIsActive(window.ob_btn_docs.getAttribute("href"))
                   },
                   on: {
                      mouseleave: function (e) {
                         t.hover = !1
                      }
                   }
                }, [e("nuxt-link", {
                 staticClass: "-normilize",
                 attrs: {
                    to: window.ob_btn_about.getAttribute("href")
                 },
                 nativeOn: {
                    mouseover: function (e) {
                       t.hover = !0
                    }
                 }
              }, [t._v(window.nav3)]), t._v(" "), e("nuxt-link", {
                   staticClass: "-normilize",
                   attrs: {
                      to: window.ob_btn_work.getAttribute("href")
                   },
                   nativeOn: {
                      mouseover: function (e) {
                         t.hover = !0
                      }
                   }
                }, [t._v(window.nav2)]), t._v(" "), e("a", {
                 staticClass: "-normilize",
                 attrs: {
                    href: window.ob_btn_services.getAttribute("href")
                 },
                 nativeOn: {
                    mouseover: function (e) {
                       t.hover = !0
                    }
                 }
              }, [t._v(window.nav1)]), t._v(" "),
              
              
              e("nuxt-link", {
                   staticClass: "-normilize",
                   attrs: {
                      to: window.ob_btn_contact.getAttribute("href")
                   },
                   nativeOn: {
                      mouseover: function (e) {
                         t.hover = !0
                      }
                   }
                }, [t._v(window.nav4)]), t._v(" "),

               //  -----------------------------------------------------
                e("a", {
                  staticClass: "-normilize",
                  attrs: {
                     href: window.ob_btn_docs.getAttribute("href")
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        t.hover = !0
                     }
                  }
               }, [t._v(window.btn_docs)]), t._v(" "),



               e("a", {
                  staticClass: "-normilize c-gradient",
                  attrs: {
                     href: "https://app.ellaria.world",
                     style: "text-decoration: none !important;color: var(--c-white) !important;background-image: linear-gradient(90deg, var(--c-blue) 0%, var(--c-magenta) 33%, var(--c-blue) 66%, var(--c-blue) 100%) !important;background-size: 300% 100% !important;background-position: left center !important;-webkit-background-clip: text !important;background-clip: text !important;-webkit-text-fill-color: rgba(0,0,0,0) !important;text-fill-color: rgba(0,0,0,0) !important;",
                  
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        t.hover = !0
                     }
                  }
               }, [t._v("Staking")]), t._v(" "),
               // ------------------------------------------------------
               
               
               ], 1)
             }), [], !1, null, "83087134", null);
         e.default = component.exports
      },
      408: function (t, e, n) {
         "use strict";
         n.r(e);
         var r = {
               name: "HeaderMenu",
               components: {},
               data: function () {
                  return {
                     hover: !1,
                     animate: !0
                  }
               },
               methods: {},
               created: function () {},
               mounted: function () {}
            },
            o = (n(369), n(14)),
            component = Object(o.a)(r, (function () {
               var t = this;
               return (0, t._self._c)("div", {
                  staticClass: "h-menu",
                  class: {
                     "-hover-menu": t.hover,
                     "-animate-menu": t.animate
                  },
                  on: {
                     mouseover: function (e) {
                        t.hover = !0, t.animate = !1
                     },
                     mouseleave: function (e) {
                        t.hover = !1, t.animate = !0
                     }
                  }
               }, [t._m(0)])
            }), [function () {
               var t = this,
                  e = t._self._c;
               return e("div", {
                  staticClass: "h-menu_icon"
               }, [e("div", [e("span", {
                  staticClass: "-m -gradient"
               }, [e("span", {
                  staticClass: "-b"
               }, [t._v(window.span_one_symb_1)])])]), t._v(" "), e("div", [e("span", {
                  staticClass: "-m -gradient"
               }, [e("span", {
                  staticClass: "-b"
               }, [t._v(window.span_one_symb_2[0])]), t._v(window.span_one_symb_2.slice(1))])]), t._v(" "), e("div", [e("span", {
                  staticClass: "-m -gradient"
               }, [e("span", {
                  staticClass: "-b"
               }, [t._v(window.span_one_symb_3[0])]), t._v(window.span_one_symb_3.slice(1))])])])
            }], !1, null, "6ad647ea", null);
         e.default = component.exports
      },
      409: function (t, e, n) {
         "use strict";
         n.r(e);
         n(235);
         var r = [function () {
               var t = this,
                  e = t._self._c;
               return e("div", {
                  staticClass: "m-menu_left"
               }, [e("div", {
                  staticClass: "m-menu-b"
               }), t._v(" "), e("div", {
                  staticClass: "m-menu-f"
               }, [e("figure", [e("img", {
                  attrs: {
                     src: n(372),
                     alt: ""
                  }
               })]), t._v(" "), e("span")]), t._v(" "), e("div", {
                  staticClass: "m-foot_brand-touch"
               }, [e("div"), t._v(" "), e("div"), t._v(" "), e("div")])])
            }],
            o = (n(52), {
               name: "modalMenuOpen",
               components: {},
               methods: {
                  toTop: function () {
                     var t = this;
                     setTimeout((function () {
                        t.$nuxt.$emit("locomotive-scroll-top")
                     }), 450)
                  }
               },
               data: function (t) {
                  return {
                     data: t.$store.state.data["/wp-json/api/options"]
                  }
               },
               mounted: function () {
                  var t = this;
                  document.body.addEventListener("keyup", (function (e) {
                     27 === e.keyCode && t.$emit("close")
                  }))
               }
            }),
            c = (n(373), n(375), n(14)),
            component = Object(c.a)(o, (function () {
               var t, e, r, o = this,
                  c = o._self._c;
               return c("div", {
                  staticClass: "m-menu"
               }, [c("div", {
                  staticClass: "m-menu_content"
               }, [o._m(0), o._v(" "), c("div", {
                  staticClass: "m-menu_right"
               }, [c("div", {
                  staticClass: "m-menu_head"
               }, [c("nuxt-link", {
                  staticClass: "-normilize",
                  attrs: {
                     to: "/"
                  },
                  nativeOn: {
                     click: function (t) {
                        o.$emit("close"), o.toTop()
                     }
                  }
               }, [c("figure", {
                  staticClass: "icon-arrow"
               }, [c("img", {
                  attrs: {
                     src: n(371),
                     alt: ""
                  }
               })]), o._v(" "), c("span", [o._v("Home")])])], 1), o._v(" "), c("nav", {
                  staticClass: "m-menu_nav"
               }, [c("div", [c("nuxt-link", {
                  staticClass: "-h2 -m-h4 -normilize",
                  attrs: {
                     to: window.ob_btn_about.getAttribute("href")
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v(window.nav3)])])], 1), o._v(" "), c("div", {
                  staticClass: "-include"
               }, [c("nuxt-link", {
                  staticClass: "-h2 -m-h4 -normilize",
                  attrs: {
                     to: window.ob_btn_work.getAttribute("href")
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v(window.nav2)]), c("span", {
                  staticClass: "-h5 -m-h6"
               }, [o._v(o._s(null === (t = o.data) || void 0 === t ? void 0 : t.works_count))])])], 1), o._v(" "), c("div", [c("a", {
                  staticClass: "-h2 -m-h4 -normilize",
                  attrs: {
                     href: window.ob_btn_services.getAttribute("href")
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v(window.nav1)])])], 1), o._v(" "),
               
               
               
               c("div", [c("nuxt-link", {
                  staticClass: "-h2 -m-h4 -normilize",
                  attrs: {
                     to: window.ob_btn_contact.getAttribute("href")
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v(window.nav4)])])], 1), o._v(" "),


               // ----------------------------------------------
               c("div", [c("a", {
                  staticClass: "-h2 -m-h4 -normilize",
                  attrs: {
                     href: window.ob_btn_docs.getAttribute("href")
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v(window.btn_docs)])])], 1), o._v(" "),



               c("div", [c("a", {
                  staticClass: "-h2 -m-h4 -normilize c-gradient",
                  attrs: {
                     href: "https://app.ellaria.world",
                     style: "text-decoration: none !important;color: var(--c-white) !important;background-image: linear-gradient(90deg, var(--c-blue) 0%, var(--c-magenta) 33%, var(--c-blue) 66%, var(--c-blue) 100%) !important;background-size: 300% 100% !important;background-position: left center !important;-webkit-background-clip: text !important;background-clip: text !important;-webkit-text-fill-color: rgba(0,0,0,0) !important;text-fill-color: rgba(0,0,0,0) !important;",
                  
                  },
                  nativeOn: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("span", [o._v('Staking')])])], 1)
               // ----------------------------------------------
            
            
            
            ]), o._v(" "),
               
               
               
               c("div", {
                  staticClass: "m-menu_footer"
               }, [c("div", {
                  staticClass: "m-soc_ul"
               }, [o._l(null === (e = o.data) || void 0 === e ? void 0 : e.socials, (function (t, i) {
                  var e, n;
                  return [c("a", {
                     key: i,
                     staticClass: "-normilize",
                     attrs: {
                        href: null == t || null === (e = t.link) || void 0 === e ? void 0 : e.url,
                        target: null == t || null === (n = t.link) || void 0 === n ? void 0 : n.target
                     },
                     domProps: {
                        innerHTML: o._s(null == t ? void 0 : t.svg)
                     }
                  })]
               }))], 2), o._v(" "), c("EmailButton", {
                  attrs: {
                     mail: null === (r = o.data) || void 0 === r ? void 0 : r.mail
                  }
               }), o._v(" "), c("div", {
                  staticClass: "rhombus"
               })], 1)])]), o._v(" "), c("div", {
                  staticClass: "m-menu-close",
                  on: {
                     click: function (t) {
                        return o.$emit("close")
                     }
                  }
               }, [c("div", {
                  staticClass: "m-menu_icon"
               })])])
            }), r, !1, null, "068c514c", null);
         e.default = component.exports;
         installComponents(component, {
            EmailButton: n(239).default
         })
      },
      55: function (t, e, n) {
         "use strict";
         n.d(e, "b", (function () {
            return De
         })), n.d(e, "a", (function () {
            return T
         }));
         var r = {};
         n.r(r), n.d(r, "Button", (function () {
            return it
         })), n.d(r, "EmailButton", (function () {
            return st
         })), n.d(r, "Footer", (function () {
            return ct
         })), n.d(r, "Grid", (function () {
            return ut
         })), n.d(r, "HeaderLogo", (function () {
            return lt
         })), n.d(r, "HeaderMenu", (function () {
            return mt
         })), n.d(r, "HeaderNav", (function () {
            return ft
         })), n.d(r, "LocomotiveScroll", (function () {
            return ht
         })), n.d(r, "ModalMenu", (function () {
            return pt
         })), n.d(r, "SoMeList", (function () {
            return vt
         })), n.d(r, "SplashLogo", (function () {
            return bt
         })), n.d(r, "SplashScreen", (function () {
            return gt
         })), n.d(r, "AbstractionBackground", (function () {
            return yt
         })), n.d(r, "AmsterdamThree", (function () {
            return _t
         })), n.d(r, "ContactContent", (function () {
            return wt
         })), n.d(r, "ProjectContent", (function () {
            return xt
         })), n.d(r, "ProjectNext", (function () {
            return kt
         })), n.d(r, "ProjectWelcome", (function () {
            return Ot
         })), n.d(r, "Blend", (function () {
            return Ct
         })), n.d(r, "OurServices", (function () {
            return jt
         })), n.d(r, "Powered", (function () {
            return zt
         })), n.d(r, "ServicesWelcome", (function () {
            return $t
         })), n.d(r, "AboutWelcome", (function () {
            return St
         })), n.d(r, "Amsterdam", (function () {
            return Et
         })), n.d(r, "Behind", (function () {
            return It
         })), n.d(r, "WorkWith", (function () {
            return Pt
         })), n.d(r, "Clients", (function () {
            return At
         })), n.d(r, "Dna", (function () {
            return Lt
         })), n.d(r, "Manifesto", (function () {
            return Tt
         })), n.d(r, "Marquee", (function () {
            return Mt
         })), n.d(r, "StudiosOperator", (function () {
            return Rt
         })), n.d(r, "WelcomeSection", (function () {
            return Dt
         })), n.d(r, "WhatWeDo", (function () {
            return Nt
         })), n.d(r, "List", (function () {
            return Bt
         })), n.d(r, "ListItem", (function () {
            return Ht
         })), n.d(r, "WorkWelcome", (function () {
            return Zt
         })), n.d(r, "CustomShader", (function () {
            return Ut
         })), n.d(r, "CustomShader2", (function () {
            return qt
         }));
         n(47), n(33), n(49), n(61), n(40), n(62);
         var o = n(13),
            c = n(24),
            l = (n(60), n(42), n(16), n(59), n(34), n(69), n(2)),
            m = n(95),
            f = n(227),
            d = n(149),
            h = n.n(d),
            v = n(81),
            y = n.n(v),
            _ = (n(35), n(36), n(150)),
            w = n(54),
            x = n(3);
         "scrollRestoration" in window.history && (Object(x.u)("manual"), window.addEventListener("beforeunload", (function () {
            Object(x.u)("auto")
         })), window.addEventListener("load", (function () {
            Object(x.u)("manual")
         })));

         function k(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var n = Object.getOwnPropertySymbols(object);
               t && (n = n.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(object, t).enumerable
               }))), e.push.apply(e, n)
            }
            return e
         }

         function O(t) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? k(Object(source), !0).forEach((function (e) {
                  Object(c.a)(t, e, source[e])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
               }))
            }
            return t
         }
         var C = function () {};
         l.default.use(_.a);
         var j = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function (t, e, n) {
               var r = !1,
                  o = t !== e;
               n ? r = n : o && function (t) {
                  var e = Object(x.g)(t);
                  if (1 === e.length) {
                     var n = e[0].options;
                     return !1 !== (void 0 === n ? {} : n).scrollToTop
                  }
                  return e.some((function (t) {
                     var e = t.options;
                     return e && e.scrollToTop
                  }))
               }(t) && (r = {
                  x: 0,
                  y: 0
               });
               var c = window.$nuxt;
               return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function () {
                  return c.$emit("triggerScroll")
               })), new Promise((function (e) {
                  c.$once("triggerScroll", (function () {
                     if (t.hash) {
                        var n = t.hash;
                        void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                        try {
                           document.querySelector(n) && (r = {
                              selector: n
                           })
                        } catch (t) {
                           console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                        }
                     }
                     e(r)
                  }))
               }))
            },
            routes: [{
               path: "/About",
               component: function () {
                  return Object(x.m)(Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(35)]).then(n.bind(null, 670)))
               },
               name: window.nav3
            }, {
               path: "/Contact",
               component: function () {
                  return Object(x.m)(n.e(36).then(n.bind(null, 671)))
               },
               name: window.nav4
            }, {
               path: "/faq",
               component: function () {
                  return Object(x.m)(Promise.all([n.e(4), n.e(37)]).then(n.bind(null, 672)))
               },
               name: window.nav1
            }, {
               path: "/#",
               component: function () {
                  return Object(x.m)(n.e(40).then(n.bind(null, 673)))
               },
               name: "work"
            }, {
               path: "/#/:slug",
               component: function () {
                  return Object(x.m)(n.e(39).then(n.bind(null, 674)))
               },
               name: "work-slug"
            }, {
               path: "/",
               component: function () {
                  return Object(x.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(38)]).then(n.bind(null, 675)))
               },
               name: "index"
            }],
            fallback: !1
         };

         function z(t, e) {
            var base = e._app && e._app.basePath || j.base,
               n = new _.a(O(O({}, j), {}, {
                  base: base
               })),
               r = n.push;
            n.push = function (t) {
               var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                  n = arguments.length > 2 ? arguments[2] : void 0;
               return r.call(this, t, e, n)
            };
            var o = n.resolve.bind(n);
            return n.resolve = function (t, e, n) {
               return "string" == typeof t && (t = Object(w.c)(t)), o(t, e, n)
            }, n
         }
         var $ = {
               name: "NuxtChild",
               functional: !0,
               props: {
                  nuxtChildKey: {
                     type: String,
                     default: ""
                  },
                  keepAlive: Boolean,
                  keepAliveProps: {
                     type: Object,
                     default: void 0
                  }
               },
               render: function (t, e) {
                  var n = e.parent,
                     data = e.data,
                     r = e.props,
                     o = n.$createElement;
                  data.nuxtChild = !0;
                  for (var c = n, l = n.$nuxt.nuxt.transitions, m = n.$nuxt.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                  data.nuxtChildDepth = f;
                  var d = l[f] || m,
                     h = {};
                  S.forEach((function (t) {
                     void 0 !== d[t] && (h[t] = d[t])
                  }));
                  var v = {};
                  E.forEach((function (t) {
                     "function" == typeof d[t] && (v[t] = d[t].bind(c))
                  }));
                  var y = v.beforeEnter;
                  if (v.beforeEnter = function (t) {
                        if (window.$nuxt.$nextTick((function () {
                              window.$nuxt.$emit("triggerScroll")
                           })), y) return y.call(c, t)
                     }, !1 === d.css) {
                     var _ = v.leave;
                     (!_ || _.length < 2) && (v.leave = function (t, e) {
                        _ && _.call(c, t), c.$nextTick(e)
                     })
                  }
                  var w = o("routerView", data);
                  return r.keepAlive && (w = o("keep-alive", {
                     props: r.keepAliveProps
                  }, [w])), o("transition", {
                     props: h,
                     on: v
                  }, [w])
               }
            },
            S = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            E = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            I = n(57),
            P = Object(I.a)({
               name: "Error",
               data: function () {
                  return {}
               },
               components: {},
               methods: {},
               mounted: function () {},
               beforeDestroy: function () {}
            }),
            A = (n(342), n(14)),
            L = Object(A.a)(P, (function () {
               var t = this,
                  e = t._self._c;
               t._self._setupProxy;
               return e("div", {
                  staticClass: "error-page"
               }, [e("div", {
                  staticClass: "-w"
               }, [t._m(0), t._v(" "), e("Button", {
                  attrs: {
                     buttonTitle: "Back to home",
                     path: "/"
                  }
               })], 1)])
            }), [function () {
               var t = this,
                  e = t._self._c;
               t._self._setupProxy;
               return e("h1", {
                  staticClass: "c-error_title"
               }, [e("div", {
                  staticClass: "ERROR_BLOCK",
                  attrs: {
                     style: "position: absolute;left:0;top:0;width:100vw;height:100vh;background:#000;z-index:9999;animation: hide404 10s;"
                  }
               }, [t._v(" ")]), e("div", {
                  staticClass: "c-error_title-row"
               }, [e("span", {
                  staticClass: "-h2 -mid-h3 -m-h4"
               }, [t._v("This page "), e("label", {
                  staticClass: "-h5 -m-p -gradient"
               }, [t._v("404")])])]), t._v(" "), e("div", {
                  staticClass: "c-error_title-row"
               }, [e("span", {
                  staticClass: "-h2 -mid-h3 -m-h4"
               }, [t._v("Could not be found")])])])
            }], !1, null, "22fde065", null),
            T = L.exports;
         installComponents(L, {
            Button: n(263).default
         });
         var M = n(30),
            R = (n(99), {
               name: "Nuxt",
               components: {
                  NuxtChild: $,
                  NuxtError: T
               },
               props: {
                  nuxtChildKey: {
                     type: String,
                     default: void 0
                  },
                  keepAlive: Boolean,
                  keepAliveProps: {
                     type: Object,
                     default: void 0
                  },
                  name: {
                     type: String,
                     default: "default"
                  }
               },
               errorCaptured: function (t) {
                  this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
               },
               computed: {
                  routerViewKey: function () {
                     if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
                     var t = Object(M.a)(this.$route.matched, 1)[0];
                     if (!t) return this.$route.path;
                     var e = t.components.default;
                     if (e && e.options) {
                        var n = e.options;
                        if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                     }
                     return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                  }
               },
               beforeCreate: function () {
                  l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
               },
               render: function (t) {
                  var e = this;
                  return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
                     return e.errorFromNuxtError = !1
                  })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                     props: {
                        to: "/"
                     }
                  }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
                     return e.displayingNuxtError = !1
                  })), t(T, {
                     props: {
                        error: this.nuxt.err
                     }
                  })) : t("NuxtChild", {
                     key: this.routerViewKey,
                     props: this.$props
                  })
               }
            }),
            D = (n(48), n(50), n(46), n(51), n(52), {
               name: "NuxtLoading",
               data: function () {
                  return {
                     percent: 0,
                     show: !1,
                     canSucceed: !0,
                     reversed: !1,
                     skipTimerCount: 0,
                     rtl: !1,
                     throttle: 200,
                     duration: 5e3,
                     continuous: !1
                  }
               },
               computed: {
                  left: function () {
                     return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                  }
               },
               beforeDestroy: function () {
                  this.clear()
               },
               methods: {
                  clear: function () {
                     clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                  },
                  start: function () {
                     var t = this;
                     return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
                        return t.startTimer()
                     }), this.throttle) : this.startTimer(), this
                  },
                  set: function (t) {
                     return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                  },
                  get: function () {
                     return this.percent
                  },
                  increase: function (t) {
                     return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                  },
                  decrease: function (t) {
                     return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                  },
                  pause: function () {
                     return clearInterval(this._timer), this
                  },
                  resume: function () {
                     return this.startTimer(), this
                  },
                  finish: function () {
                     return this.percent = this.reversed ? 0 : 100, this.hide(), this
                  },
                  hide: function () {
                     var t = this;
                     return this.clear(), setTimeout((function () {
                        t.show = !1, t.$nextTick((function () {
                           t.percent = 0, t.reversed = !1
                        }))
                     }), 500), this
                  },
                  fail: function (t) {
                     return this.canSucceed = !1, this
                  },
                  startTimer: function () {
                     var t = this;
                     this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
                        t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                     }), 100)
                  }
               },
               render: function (t) {
                  var e = t(!1);
                  return this.show && (e = t("div", {
                     staticClass: "nuxt-progress",
                     class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                     },
                     style: {
                        width: this.percent + "%",
                        left: this.left
                     }
                  })), e
               }
            }),
            N = (n(346), Object(A.a)(D, undefined, undefined, !1, null, null, null).exports),
            B = n(20),
            H = n(29),
            Z = n(160),
            U = Object(I.a)({
               name: "DefaultLayout",
               data: function () {
                  return {
                     modalMenuOpen: !1,
                     transitionOverlay: !1,
                     mobile: null
                  }
               },
               components: {
                  LazyHydrate: Z.a
               },
               methods: {
                  pageLeave: function (t, e) {
                     var n;
                     document.documentElement.classList.add("page-leave"), this.transitionOverlay = !0, clearTimeout(n), n = setTimeout((function () {
                        e(), document.documentElement.classList.remove("page-leave")
                     }), 900)
                  },
                  pageEnter: function (t, e) {
                     var r, o = this;
                     clearTimeout(r), r = setTimeout((function () {
                        n(207)(t, (function () {
                           o.transitionOverlay = !1, o.$nuxt.$emit("update-locomotive"), e(), setTimeout((function () {
                              o.$nuxt.$emit("update-locomotive")
                           }), 300)
                        }))
                     }), 900)
                  },
                  docElMenuHeadIn: function () {
                     document.documentElement.classList.add("m-menu-head")
                  },
                  docElMenuHeadOut: function () {
                     document.documentElement.classList.remove("m-menu-head")
                  },
                  queryCheck: function () {
                     window.innerWidth > 1024 ? (this.mobile && null != this.mobile && (this.$nuxt.$emit("locomotive-scroll-top"), setTimeout((function () {
                        H.a.$emit("reinit-locomotive")
                     }), 300)), this.mobile = !1) : (this.mobile || null == this.mobile || (this.$nuxt.$emit("locomotive-scroll-top"), setTimeout((function () {
                        H.a.$emit("reinit-locomotive")
                     }), 300)), this.mobile = !0)
                  },
                  scrollFu: function (t) {
                     if (document.documentElement.setAttribute("data-direction", t.direction), "object" === Object(B.a)(t.currentElements.progress)) {
                        var progress = t.currentElements.progress.progress;
                        t.currentElements.progress.el.style.setProperty("--s-progress", progress)
                     }
                     if ("object" === Object(B.a)(t.currentElements.progressb)) {
                        var e = t.currentElements.progressb.progress;
                        t.currentElements.progressb.el.style.setProperty("--s-progress", e)
                     }
                     t.scroll.y > 100 ? document.documentElement.classList.add("special") : document.documentElement.classList.remove("special"), t.scroll.y > 500 ? document.documentElement.classList.add("nav-hide") : document.documentElement.classList.remove("nav-hide"), t.scroll.y > 100 ? document.documentElement.classList.add("m-head") : document.documentElement.classList.remove("m-head")
                  }
               },
               mounted: function () {
                  var t = this;
                  n(207)(".layout", (function () {
                     setTimeout((function () {
                        t.$nuxt.$emit("update-locomotive"), H.a.$emit("close-splash-screen")
                     }), 300)
                  })), H.a.$on("scroll", this.scrollFu), this.queryCheck(), window.addEventListener("resize", this.queryCheck)
               },
               beforeDestroy: function () {
                  window.removeEventListener("resize", this.queryCheck)
               }
            }),
            W = (n(349), Object(A.a)(U, (function () {
               var t = this,
                  e = t._self._c;
               t._self._setupProxy;
               return e("div", {
                  staticClass: "layout"
               }, [e("SplashScreen"), t._v(" "), e("Transition", {
                  attrs: {
                     name: "-p-switch"
                  },
                  on: {
                     leave: t.pageLeave,
                     enter: t.pageEnter
                  }
               }, [e("Nuxt", {
                  key: t.$route.path,
                  attrs: {
                     "keep-alive": ""
                  }
               })], 1), t._v(" "), e("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [e("HeaderLogo", {
                  nativeOn: {
                     click: function (e) {
                        t.modalMenuOpen = !1
                     }
                  }
               })], 1), t._v(" "), e("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [e("HeaderNav", {
                  ref: "nav"
               })], 1), t._v(" "), e("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [e("HeaderMenu", {
                  nativeOn: {
                     click: function (e) {
                        t.modalMenuOpen = !0, t.docElMenuHeadIn()
                     }
                  }
               })], 1), t._v(" "), e("Transition", {
                  attrs: {
                     name: "-t-o"
                  }
               }, [t.transitionOverlay ? e("div", {
                  staticClass: "t-overlay"
               }, [e("span", {
                  staticClass: "t-brand-touch"
               }), t._v(" "), e("div", {
                  staticClass: "loading"
               }, [e("img", {
                  attrs: {
                     src: n(206),
                     alt: "ELLARIA AI"
                  }
               })])]) : t._e()]), t._v(" "), e("Transition", {
                  attrs: {
                     name: "-t-menu"
                  }
               }, [t.modalMenuOpen ? e("ModalMenu", {
                  class: {
                     inview: t.modalMenuOpen
                  },
                  on: {
                     close: function (e) {
                        t.modalMenuOpen = !1, t.docElMenuHeadOut()
                     }
                  }
               }) : t._e()], 1)], 1)
            }), [], !1, null, null, null)),
            G = W.exports;

         function F(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return K(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return c = t.done, t
               },
               e: function (t) {
                  l = !0, o = t
               },
               f: function () {
                  try {
                     c || null == n.return || n.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function K(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }
         installComponents(W, {
            SplashScreen: n(404).default,
            HeaderLogo: n(406).default,
            HeaderNav: n(407).default,
            HeaderMenu: n(408).default,
            ModalMenu: n(409).default
         });
         var Q = {
               _default: Object(x.s)(G)
            },
            V = {
               render: function (t, e) {
                  var n = t("NuxtLoading", {
                        ref: "loading"
                     }),
                     r = t(this.layout || "nuxt"),
                     o = t("div", {
                        domProps: {
                           id: "__layout"
                        },
                        key: this.layoutName
                     }, [r]),
                     c = t("transition", {
                        props: {
                           name: "layout",
                           mode: "out-in"
                        },
                        on: {
                           beforeEnter: function (t) {
                              window.$nuxt.$nextTick((function () {
                                 window.$nuxt.$emit("triggerScroll")
                              }))
                           }
                        }
                     }, [o]);
                  return t("div", {
                     domProps: {
                        id: "__nuxt"
                     }
                  }, [n, c])
               },
               data: function () {
                  return {
                     isOnline: !0,
                     layout: null,
                     layoutName: "",
                     nbFetching: 0
                  }
               },
               beforeCreate: function () {
                  l.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
               },
               created: function () {
                  this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
               },
               mounted: function () {
                  var t = this;
                  return Object(o.a)(regeneratorRuntime.mark((function e() {
                     return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                           case 0:
                              t.$loading = t.$refs.loading;
                           case 1:
                           case "end":
                              return e.stop()
                        }
                     }), e)
                  })))()
               },
               watch: {
                  "nuxt.err": "errorChanged"
               },
               computed: {
                  isOffline: function () {
                     return !this.isOnline
                  },
                  isFetching: function () {
                     return this.nbFetching > 0
                  }
               },
               methods: {
                  refreshOnlineStatus: function () {
                     void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                  },
                  refresh: function () {
                     var t = this;
                     return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (e) {
                           for (;;) switch (e.prev = e.next) {
                              case 0:
                                 if ((n = Object(x.h)(t.$route)).length) {
                                    e.next = 3;
                                    break
                                 }
                                 return e.abrupt("return");
                              case 3:
                                 return t.$loading.start(), r = n.map((function (e) {
                                    var p = [];
                                    if (e.$options.fetch && e.$options.fetch.length && p.push(Object(x.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                    else {
                                       var n, r = F(Object(x.e)(e.$vnode.componentInstance));
                                       try {
                                          for (r.s(); !(n = r.n()).done;) {
                                             var component = n.value;
                                             p.push(component.$fetch())
                                          }
                                       } catch (t) {
                                          r.e(t)
                                       } finally {
                                          r.f()
                                       }
                                    }
                                    return e.$options.asyncData && p.push(Object(x.q)(e.$options.asyncData, t.context).then((function (t) {
                                       for (var n in t) l.default.set(e.$data, n, t[n])
                                    }))), Promise.all(p)
                                 })), e.prev = 5, e.next = 8, Promise.all(r);
                              case 8:
                                 e.next = 15;
                                 break;
                              case 10:
                                 e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(x.k)(e.t0), t.error(e.t0);
                              case 15:
                                 t.$loading.finish();
                              case 16:
                              case "end":
                                 return e.stop()
                           }
                        }), e, null, [
                           [5, 10]
                        ])
                     })))()
                  },
                  errorChanged: function () {
                     if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                        var t = (T.options || T).layout;
                        "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                     }
                  },
                  setLayout: function (t) {
                     return t && Q["_" + t] || (t = "default"), this.layoutName = t, this.layout = Q["_" + t], this.layout
                  },
                  loadLayout: function (t) {
                     return t && Q["_" + t] || (t = "default"), Promise.resolve(Q["_" + t])
                  }
               },
               components: {
                  NuxtLoading: N
               }
            };
         n(79);

         function J(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return X(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return c = t.done, t
               },
               e: function (t) {
                  l = !0, o = t
               },
               f: function () {
                  try {
                     c || null == n.return || n.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function X(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }
         l.default.use(m.a);
         var Y = ["state", "getters", "actions", "mutations"],
            tt = {};
         (tt = function (t, e) {
            if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = Object.assign({}, t)), nt(t, e)
         }(n(379), "store/index.ts")).modules = tt.modules || {},
            function (t, e) {
               t = t.default || t;
               var n = e.replace(/\.(js|mjs|ts)$/, "").split("/"),
                  r = n[n.length - 1],
                  o = "store/".concat(e);
               if (t = "state" === r ? function (t, e) {
                     if ("function" != typeof t) {
                        console.warn("".concat(e, " should export a method that returns an object"));
                        var n = Object.assign({}, t);
                        return function () {
                           return n
                        }
                     }
                     return nt(t, e)
                  }(t, o) : nt(t, o), Y.includes(r)) {
                  var c = r;
                  at(ot(tt, n, {
                     isProperty: !0
                  }), t, c)
               } else {
                  "index" === r && (n.pop(), r = n[n.length - 1]);
                  var l, m = ot(tt, n),
                     f = J(Y);
                  try {
                     for (f.s(); !(l = f.n()).done;) {
                        var d = l.value;
                        at(m, t[d], d)
                     }
                  } catch (t) {
                     f.e(t)
                  } finally {
                     f.f()
                  }!1 === t.namespaced && delete m.namespaced
               }
            }(n(380), "app.js");
         var et = tt instanceof Function ? tt : function () {
            return new m.a.Store(Object.assign({
               strict: !1
            }, tt))
         };

         function nt(t, e) {
            if (t.state && "function" != typeof t.state) {
               console.warn("'state' should be a method that returns an object in ".concat(e));
               var n = Object.assign({}, t.state);
               t = Object.assign({}, t, {
                  state: function () {
                     return n
                  }
               })
            }
            return t
         }

         function ot(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
               r = n.isProperty,
               o = void 0 !== r && r;
            if (!e.length || o && 1 === e.length) return t;
            var c = e.shift();
            return t.modules[c] = t.modules[c] || {}, t.modules[c].namespaced = !0, t.modules[c].modules = t.modules[c].modules || {}, ot(t.modules[c], e, {
               isProperty: o
            })
         }

         function at(t, e, n) {
            e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
         }
         n(121);
         var it = function () {
               return Promise.resolve().then(n.bind(null, 263)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            st = function () {
               return Promise.resolve().then(n.bind(null, 239)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            ct = function () {
               return n.e(19).then(n.bind(null, 428)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            ut = function () {
               return n.e(20).then(n.bind(null, 676)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            lt = function () {
               return Promise.resolve().then(n.bind(null, 406)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            mt = function () {
               return Promise.resolve().then(n.bind(null, 408)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            ft = function () {
               return Promise.resolve().then(n.bind(null, 407)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            ht = function () {
               return Promise.resolve().then(n.bind(null, 161)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            pt = function () {
               return Promise.resolve().then(n.bind(null, 409)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            vt = function () {
               return n.e(30).then(n.bind(null, 421)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            bt = function () {
               return Promise.resolve().then(n.bind(null, 405)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            gt = function () {
               return Promise.resolve().then(n.bind(null, 404)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            yt = function () {
               return Promise.all([n.e(0), n.e(1), n.e(2), n.e(9)]).then(n.bind(null, 593)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            _t = function () {
               return Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(11)]).then(n.bind(null, 509)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            wt = function () {
               return n.e(15).then(n.bind(null, 598)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            xt = function () {
               return n.e(26).then(n.bind(null, 605)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            kt = function () {
               return n.e(27).then(n.bind(null, 606)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Ot = function () {
               return n.e(28).then(n.bind(null, 604)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Ct = function () {
               return n.e(13).then(n.bind(null, 600)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            jt = function () {
               return n.e(25).then(n.bind(null, 601)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            zt = function () {
               return n.e(4).then(n.bind(null, 668)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            $t = function () {
               return n.e(29).then(n.bind(null, 599)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            St = function () {
               return n.e(8).then(n.bind(null, 594)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Et = function () {
               return Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(10)]).then(n.bind(null, 595)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            It = function () {
               return n.e(12).then(n.bind(null, 596)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Pt = function () {
               return n.e(34).then(n.bind(null, 597)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            At = function () {
               return n.e(14).then(n.bind(null, 612)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Lt = function () {
               return n.e(18).then(n.bind(null, 611)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Tt = function () {
               return n.e(23).then(n.bind(null, 607)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Mt = function () {
               return n.e(24).then(n.bind(null, 608)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Rt = function () {
               return n.e(31).then(n.bind(null, 610)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Dt = function () {
               return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5)]).then(n.bind(null, 669)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Nt = function () {
               return n.e(32).then(n.bind(null, 609)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Bt = function () {
               return n.e(21).then(n.bind(null, 603)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Ht = function () {
               return n.e(22).then(n.bind(null, 510)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Zt = function () {
               return n.e(33).then(n.bind(null, 602)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            Ut = function () {
               return Promise.all([n.e(0), n.e(1), n.e(16)]).then(n.bind(null, 508)).then((function (t) {
                  return Wt(t.default || t)
               }))
            },
            qt = function () {
               return Promise.all([n.e(0), n.e(1), n.e(17)]).then(n.bind(null, 472)).then((function (t) {
                  return Wt(t.default || t)
               }))
            };

         function Wt(t) {
            if (!t || !t.functional) return t;
            var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
            return {
               render: function (n) {
                  var r = {},
                     o = {};
                  for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                  return n(t, {
                     on: this.$listeners,
                     attrs: r,
                     props: o,
                     scopedSlots: this.$scopedSlots
                  }, this.$slots.default)
               }
            }
         }
         for (var Gt in r) l.default.component(Gt, r[Gt]), l.default.component("Lazy" + Gt, r[Gt]);
         var Ft = I.b,
            Kt = n(151),
            Qt = n.n(Kt),
            Vt = (n(230), n(68));
         n(71);

         function Jt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return Xt(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xt(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return c = t.done, t
               },
               e: function (t) {
                  l = !0, o = t
               },
               f: function () {
                  try {
                     c || null == n.return || n.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function Xt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }
         n(381);
         var s, Yt = {
               images: !0,
               videos: !0,
               audios: !0,
               iframes: !0,
               native: !1,
               directiveOnly: !0,
               loadingClass: "isLoading",
               loadedClass: "isLoaded",
               appendClass: "lazyLoad",
               observerConfig: {},
               globalName: "nuxt"
            },
            te = null,
            ee = ["src", "poster", "srcset"],
            ne = {
               img: "images",
               video: "videos",
               audio: "audios",
               iframe: "iframes",
               picture: "images"
            },
            re = function (t) {
               var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = t.tagName.toLowerCase();
               if ("svg" !== n) {
                  var r = t.children && t.children.length > 0 ? [].concat(Object(Vt.a)(t.children), [t]) : [t];
                  r.forEach((function (t) {
                     var r, o = Jt(ee);
                     try {
                        for (o.s(); !(r = o.n()).done;) {
                           var c = r.value;
                           t.dataset[c] && (t[c] = e ? Yt.defaultImage : t.dataset[c], e || t.removeAttribute("data-".concat(c))), t.load && t.load(), "audio" === n && "true" === t.getAttribute("data-lazy-controls") && (t.removeAttribute("controls"), t.removeAttribute("data-lazy-controls"))
                        }
                     } catch (t) {
                        o.e(t)
                     } finally {
                        o.f()
                     }
                  }))
               }
            },
            oe = function (t) {
               t.style.backgroundImage = "url(".concat(t.getAttribute("lazy-background"), ")"), t.removeAttribute("lazy-background"), !1 !== Yt.loadedClass && t.classList.add(Yt.loadedClass)
            },
            ae = function (t, e) {
               var n = t.tagName.toLowerCase();
               if (["img", "picture", "video"].includes(n)) {
                  t = "picture" === n ? t.querySelector("img") : t;
                  var r = "video" === n ? "loadeddata" : "load",
                     o = "picture" === n ? t.parentNode : t;
                  !1 !== Yt.loadingClass && "loading" === e ? (o.classList.add(Yt.loadingClass), t.addEventListener(r, (function () {
                     o.classList.remove(Yt.loadingClass)
                  }))) : !1 !== Yt.loadedClass && "loaded" === e && t.addEventListener(r, (function () {
                     o.classList.add(Yt.loadedClass)
                  }))
               } else "loaded" === e && !1 !== Yt.loadedClass && t.classList.add(Yt.loadedClass)
            },
            ie = function (t) {
               t.removeAttribute("data-no-lazy"), t.removeAttribute("data-not-lazy")
            },
            se = !1,
            ce = ("string" != typeof (s = Yt.globalName) ? "" : s.charAt(0).toUpperCase() + s.slice(1)) || "Nuxt";
         window["on".concat(ce, "Ready")]((function () {
            se = !0
         })), te = new IntersectionObserver((function (t, e) {
            se && t.forEach((function (t) {
               if (t.isIntersecting) {
                  var n = t.target;
                  n.getAttribute("lazy-background") ? oe(n) : (re(n), ae(n, "loaded"), ae(n, "loading"), e.unobserve(n))
               }
            }))
         }), Yt.observerConfig);
         var ue = l.default.directive("lazy-load", {
               inserted: function (t, e) {
                  var n = e.value;
                  e.def.set(t, n)
               },
               update: function (t, e, n, r) {
                  var o, c = e.value,
                     l = e.def,
                     m = Jt(ee);
                  try {
                     for (m.s(); !(o = m.n()).done;) {
                        var f = o.value;
                        if (r.data.attrs && n.data.attrs && r.data.attrs["data-".concat(f)] !== n.data.attrs["data-".concat(f)]) {
                           l.set(t, c);
                           break
                        }
                     }
                  } catch (t) {
                     m.e(t)
                  } finally {
                     m.f()
                  }
               },
               set: function (t, e) {
                  if (!0 === Yt.native) Yt.appendClass && t.classList.add(Yt.appendClass), ["notLazy", "noLazy"].every((function (e) {
                     return void 0 === t.dataset[e]
                  })) && (t.setAttribute("loading", "lazy"), ie(t), Yt.loadedClass && t.addEventListener("load", (function () {
                     t.classList.add(Yt.loadedClass)
                  })));
                  else if (Yt.defaultImage && re(t, !0), e) {
                     var n = [];
                     for (var r in e.replace(/( )src=/g, " data-src="), e.replace(/( )srcset=/g, " data-srcset="), e.replace(/( )poster=/g, " data-poster="), t.innerHTML = e, ne) Yt[ne[r]] && n.push.apply(n, Object(Vt.a)(t.querySelectorAll(r)));
                     for (var o = 0, c = n; o < c.length; o++) {
                        var element = c[o];
                        !1 !== Yt.appendClass && element.classList.add(Yt.appendClass), te.observe(element)
                     }
                  } else {
                     var l = "source" === t.tagName.toLowerCase() ? t.parentNode : t;
                     !0 !== Yt[ne[l.tagName.toLowerCase()]] || ["notLazy", "noLazy"].some((function (t) {
                        return void 0 !== l.dataset[t]
                     })) ? (re(l), ie(l)) : void 0 === l.dataset.manualLazy && (!1 !== Yt.appendClass && l.classList.add(Yt.appendClass), "audio" !== l.tagName.toLowerCase() || l.getAttribute("controls") || (l.setAttribute("controls", ""), l.setAttribute("data-lazy-controls", "true")), te.observe(l))
                  }
               }
            }),
            le = l.default.directive("lazy-background", {
               inserted: function (t, e) {
                  e.def.set(t)
               },
               update: function (t, e, n, r) {
                  e.def.set(t, n.data.attrs["lazy-background"] !== r.data.attrs["lazy-background"])
               },
               set: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Yt.defaultImage && (t.style.backgroundImage = "url(".concat(Yt.defaultImage, ")")), ["notLazy", "noLazy"].some((function (e) {
                     return void 0 !== t.dataset[e]
                  })) ? oe(t) : (void 0 === t.dataset.manualLazy && (!1 !== Yt.appendClass && t.classList.add(Yt.appendClass), te.observe(t)), e && (te.unobserve(t), te.observe(t)))
               }
            });
         l.default.use(ue), l.default.use(le);
         var me = function (t) {
               t.removeAttribute("data-manual-lazy"), !1 !== Yt.appendClass && t.classList.add(Yt.appendClass), t.getAttribute("lazy-background") ? oe(t) : (re(t), ae(t, "loading"), ae(t, "loaded"))
            },
            fe = function (t) {
               if (t.target) {
                  var e = t.target.querySelectorAll("[data-manual-lazy]");
                  Object(Vt.a)(e).forEach((function (t) {
                     return me(t)
                  }))
               } else me(t)
            },
            de = function (t, e) {
               e("lazyLoad", fe)
            },
            he = n(96),
            pe = n.n(he),
            ve = n(231);

         function be(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var n = Object.getOwnPropertySymbols(object);
               t && (n = n.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(object, t).enumerable
               }))), e.push.apply(e, n)
            }
            return e
         }

         function ge(t) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? be(Object(source), !0).forEach((function (e) {
                  Object(c.a)(t, e, source[e])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : be(Object(source)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
               }))
            }
            return t
         }

         function ye(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
               if (Array.isArray(t) || (n = function (t, e) {
                     if (!t) return;
                     if ("string" == typeof t) return _e(t, e);
                     var n = Object.prototype.toString.call(t).slice(8, -1);
                     "Object" === n && t.constructor && (n = t.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(t);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _e(t, e)
                  }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var i = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return i >= t.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: t[i++]
                        }
                     },
                     e: function (t) {
                        throw t
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  n = n.call(t)
               },
               n: function () {
                  var t = n.next();
                  return c = t.done, t
               },
               e: function (t) {
                  l = !0, o = t
               },
               f: function () {
                  try {
                     c || null == n.return || n.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function _e(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
         }
         for (var we = {
               setBaseURL: function (t) {
                  this.defaults.baseURL = t
               },
               setHeader: function (t, e) {
                  var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                     o = ye(Array.isArray(r) ? r : [r]);
                  try {
                     for (o.s(); !(n = o.n()).done;) {
                        var c = n.value;
                        e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                     }
                  } catch (t) {
                     o.e(t)
                  } finally {
                     o.f()
                  }
               },
               setToken: function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                     r = t ? (e ? e + " " : "") + t : null;
                  this.setHeader("Authorization", r, n)
               },
               onRequest: function (t) {
                  this.interceptors.request.use((function (e) {
                     return t(e) || e
                  }))
               },
               onResponse: function (t) {
                  this.interceptors.response.use((function (e) {
                     return t(e) || e
                  }))
               },
               onRequestError: function (t) {
                  this.interceptors.request.use(void 0, (function (e) {
                     return t(e) || Promise.reject(e)
                  }))
               },
               onResponseError: function (t) {
                  this.interceptors.response.use(void 0, (function (e) {
                     return t(e) || Promise.reject(e)
                  }))
               },
               onError: function (t) {
                  this.onRequestError(t), this.onResponseError(t)
               },
               create: function (t) {
                  return Ce(Object(ve.a)(t, this.defaults))
               }
            }, xe = function () {
               var t = Oe[ke];
               we["$" + t] = function () {
                  return this[t].apply(this, arguments).then((function (t) {
                     return t && t.data
                  }))
               }
            }, ke = 0, Oe = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; ke < Oe.length; ke++) xe();
         var Ce = function (t) {
               var e = pe.a.create(t);
               return e.CancelToken = pe.a.CancelToken, e.isCancel = pe.a.isCancel,
                  function (t) {
                     for (var e in we) t[e] = we[e].bind(t)
                  }(e), e.onRequest((function (t) {
                     t.headers = ge(ge({}, e.defaults.headers.common), t.headers)
                  })), je(e), e
            },
            je = function (t) {
               var e = {
                     finish: function () {},
                     start: function () {},
                     fail: function () {},
                     set: function () {}
                  },
                  n = function () {
                     var t = "undefined" != typeof window && window.$nuxt;
                     return t && t.$loading && t.$loading.set ? t.$loading : e
                  },
                  r = 0;
               t.onRequest((function (t) {
                  t && !1 === t.progress || r++
               })), t.onResponse((function (t) {
                  t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
               })), t.onError((function (t) {
                  t && t.config && !1 === t.config.progress || (r--, pe.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
               }));
               var o = function (t) {
                  if (r && t.total) {
                     var progress = 100 * t.loaded / (t.total * r);
                     n().set(Math.min(100, progress))
                  }
               };
               t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
            },
            ze = function (t, e) {
               var n = t.$config && t.$config.axios || {},
                  r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
               var o = Ce({
                  baseURL: r,
                  headers: {
                     common: {
                        Accept: "application/json, text/plain, */*"
                     },
                     delete: {},
                     get: {},
                     head: {},
                     post: {},
                     put: {},
                     patch: {}
                  }
               });
               t.$axios = o, e("axios", o)
            },
            $e = n(232),
            Se = (n(400), function (t) {
               t.prototype.LocomotiveScroll = $e.a
            }),
            Ee = Se;
         "undefined" != typeof window && window.Vue && (window.Vue.use(Se), Se.installed && (Se.installed = !1)), l.default.use(Ee);
         var Ie = n(161);
         l.default.component("LocomotiveScroll", Ie.default);
         var Pe = n(233);
         l.default.use(Pe.a, {
            config: {
               id: "G-B5DV5S3PSB"
            }
         });
         var meta = I.d;

         function Ae(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var n = Object.getOwnPropertySymbols(object);
               t && (n = n.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(object, t).enumerable
               }))), e.push.apply(e, n)
            }
            return e
         }

         function Le(t) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? Ae(Object(source), !0).forEach((function (e) {
                  Object(c.a)(t, e, source[e])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ae(Object(source)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
               }))
            }
            return t
         }
         l.default.component(h.a.name, h.a), l.default.component(y.a.name, Le(Le({}, y.a), {}, {
            render: function (t, e) {
               return y.a._warned || (y.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), y.a.render(t, e)
            }
         })), l.default.component($.name, $), l.default.component("NChild", $), l.default.component(R.name, R), Object.defineProperty(l.default.prototype, "$nuxt", {
            get: function () {
               var t = this.$root.$options.$nuxt;
               return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
         }), l.default.use(f.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
         });
         var Te = {
               name: "page",
               mode: "out-in",
               appear: !1,
               appearClass: "appear",
               appearActiveClass: "appear-active",
               appearToClass: "appear-to"
            },
            Me = m.a.Store.prototype.registerModule;

         function Re(path, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
               n = Array.isArray(path) ? !!path.reduce((function (t, path) {
                  return t && t[path]
               }), this.state) : path in this.state;
            return Me.call(this, path, t, Le({
               preserveState: n
            }, e))
         }

         function De(t) {
            return Ne.apply(this, arguments)
         }

         function Ne() {
            return Ne = Object(o.a)(regeneratorRuntime.mark((function t(e) {
               var n, r, c, m, f, d, path, h, v = arguments;
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        return h = function (t, e) {
                           if (!t) throw new Error("inject(key, value) has no key provided");
                           if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                           m[t = "$" + t] = e, m.context[t] || (m.context[t] = e), c[t] = m[t];
                           var n = "__nuxt_" + t + "_installed__";
                           l.default[n] || (l.default[n] = !0, l.default.use((function () {
                              Object.prototype.hasOwnProperty.call(l.default.prototype, t) || Object.defineProperty(l.default.prototype, t, {
                                 get: function () {
                                    return this.$root.$options[t]
                                 }
                              })
                           })))
                        }, n = v.length > 1 && void 0 !== v[1] ? v[1] : {}, t.next = 4, z(0, n);
                     case 4:
                        return r = t.sent, (c = et(e)).$router = r, c.registerModule = Re, m = Le({
                           head: {
                              title: "ELLARIA AI — Creative and marketing services",
                              titleTemplate: void 0,
                              htmlAttrs: {
                                 lang: "en"
                              },
                              meta: [{
                                 charset: "utf-8"
                              }, {
                                 name: "viewport",
                                 content: "width=device-width, initial-scale=1"
                              }, {
                                 name: "format-detection",
                                 content: "telephone=no"
                              }, {
                                 hid: "description",
                                 name: "description",
                                 content: "We specialize in creative operations. We act as an extended member of your creative, marketing and production teams. This allows you to scale, expand, improve and enhance your content."
                              }, {
                                 hid: "og:title",
                                 property: "og:title",
                                 content: "ELLARIA AI — Creative and marketing services"
                              }, {
                                 hid: "og:url",
                                 property: "og:url",
                                 content: "https://ellaria.world"
                              }, {
                                 hid: "og:description",
                                 property: "og:description",
                                 content: "We specialize in creative operations. We act as an extended member of your creative, marketing and production teams. This allows you to scale, expand, improve and enhance your content."
                              }, {
                                 hid: "og:image",
                                 property: "og:image",
                                 content: "/link-preview.jpg"
                              }, {
                                 hid: "og:site_name",
                                 property: "og:site_name",
                                 content: "ELLARIA AI — Creative and marketing services"
                              }],
                              link: [{
                                 rel: "icon",
                                 type: "image/x-icon",
                                 href: "/fav-32x32.ico"
                              }],
                              style: [],
                              script: []
                           },
                           store: c,
                           router: r,
                           nuxt: {
                              defaultTransition: Te,
                              transitions: [Te],
                              setTransitions: function (t) {
                                 return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
                                    return t = t ? "string" == typeof t ? Object.assign({}, Te, {
                                       name: t
                                    }) : Object.assign({}, Te, t) : Te
                                 })), this.$options.nuxt.transitions = t, t
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                 t = t || null, m.context._errored = Boolean(t), t = t ? Object(x.p)(t) : null;
                                 var n = m.nuxt;
                                 return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                              }
                           }
                        }, V), c.app = m, f = e ? e.next : function (t) {
                           return m.router.push(t)
                        }, e ? d = r.resolve(e.url).route : (path = Object(x.f)(r.options.base, r.options.mode), d = r.resolve(path).route), t.next = 14, Object(x.t)(m, {
                           store: c,
                           route: d,
                           next: f,
                           error: m.nuxt.error.bind(m),
                           payload: e ? e.payload : void 0,
                           req: e ? e.req : void 0,
                           res: e ? e.res : void 0,
                           beforeRenderFns: e ? e.beforeRenderFns : void 0,
                           ssrContext: e
                        });
                     case 14:
                        h("config", n), window.__NUXT__ && window.__NUXT__.state && c.replaceState(window.__NUXT__.state), t.next = 20;
                        break;
                     case 20:
                        if ("function" != typeof Ft) {
                           t.next = 23;
                           break
                        }
                        return t.next = 23, Ft(m.context, h);
                     case 23:
                        if ("function" != typeof Qt.a) {
                           t.next = 26;
                           break
                        }
                        return t.next = 26, Qt()(m.context, h);
                     case 26:
                        t.next = 29;
                        break;
                     case 29:
                        return t.next = 32, de(m.context, h);
                     case 32:
                        return t.next = 35, ze(m.context, h);
                     case 35:
                        t.next = 38;
                        break;
                     case 38:
                        t.next = 41;
                        break;
                     case 41:
                        t.next = 44;
                        break;
                     case 44:
                        if ("function" != typeof meta) {
                           t.next = 47;
                           break
                        }
                        return t.next = 47, meta(m.context, h);
                     case 47:
                        return t.next = 50, new Promise((function (t, e) {
                           if (!r.resolve(m.context.route.fullPath).route.matched.length) return t();
                           r.replace(m.context.route.fullPath, t, (function (n) {
                              if (!n._isRouter) return e(n);
                              if (2 !== n.type) return t();
                              var c = r.afterEach(function () {
                                 var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r) {
                                    return regeneratorRuntime.wrap((function (e) {
                                       for (;;) switch (e.prev = e.next) {
                                          case 0:
                                             return e.next = 3, Object(x.j)(n);
                                          case 3:
                                             m.context.route = e.sent, m.context.params = n.params || {}, m.context.query = n.query || {}, c(), t();
                                          case 8:
                                          case "end":
                                             return e.stop()
                                       }
                                    }), e)
                                 })));
                                 return function (t, n) {
                                    return e.apply(this, arguments)
                                 }
                              }())
                           }))
                        }));
                     case 50:
                        return t.abrupt("return", {
                           store: c,
                           app: m,
                           router: r
                        });
                     case 51:
                     case "end":
                        return t.stop()
                  }
               }), t)
            }))), Ne.apply(this, arguments)
         }
      }
   },
   [
      [290, 41, 7, 42]
   ]
]);