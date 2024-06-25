(window.webpackJsonp = window.webpackJsonp || []).push([
   [35, 8, 10, 11, 12, 17, 19, 30, 34], {
      413: function (e, t, r) {
         "use strict";
         var n = r(97),
            o = r(5),
            c = r(7),
            l = r(128),
            d = r(155),
            m = r(4),
            f = r(38),
            h = r(39),
            v = r(157),
            w = r(82),
            y = r(22),
            _ = r(70),
            I = r(154),
            x = r(129),
            M = r(127),
            T = r(156),
            k = r(6),
            A = T.UNSUPPORTED_Y,
            C = 4294967295,
            j = Math.min,
            R = [].push,
            S = c(/./.exec),
            L = c(R),
            E = c("".slice),
            N = !k((function () {
               var e = /(?:)/,
                  t = e.exec;
               e.exec = function () {
                  return t.apply(this, arguments)
               };
               var r = "ab".split(e);
               return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            }));
         l("split", (function (e, t, r) {
            var c;
            return c = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
               var c = y(f(this)),
                  l = void 0 === r ? C : r >>> 0;
               if (0 === l) return [];
               if (void 0 === e) return [c];
               if (!d(e)) return o(t, c, e, l);
               for (var m, h, v, output = [], w = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), _ = 0, x = new RegExp(e.source, w + "g");
                  (m = o(M, x, c)) && !((h = x.lastIndex) > _ && (L(output, E(c, _, m.index)), m.length > 1 && m.index < c.length && n(R, output, I(m, 1)), v = m[0].length, _ = h, output.length >= l));) x.lastIndex === m.index && x.lastIndex++;
               return _ === c.length ? !v && S(x, "") || L(output, "") : L(output, E(c, _)), output.length > l ? I(output, 0, l) : output
            } : "0".split(void 0, 0).length ? function (e, r) {
               return void 0 === e && 0 === r ? [] : o(t, this, e, r)
            } : t, [function (t, r) {
               var n = f(this),
                  l = null == t ? void 0 : _(t, e);
               return l ? o(l, t, n, r) : o(c, y(n), t, r)
            }, function (e, n) {
               var o = m(this),
                  l = y(e),
                  d = r(c, o, l, n, c !== t);
               if (d.done) return d.value;
               var f = h(o, RegExp),
                  _ = o.unicode,
                  I = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (A ? "g" : "y"),
                  M = new f(A ? "^(?:" + o.source + ")" : o, I),
                  T = void 0 === n ? C : n >>> 0;
               if (0 === T) return [];
               if (0 === l.length) return null === x(M, l) ? [l] : [];
               for (var p = 0, q = 0, k = []; q < l.length;) {
                  M.lastIndex = A ? 0 : q;
                  var R, S = x(M, A ? E(l, q) : l);
                  if (null === S || (R = j(w(M.lastIndex + (A ? q : 0)), l.length)) === p) q = v(l, q, _);
                  else {
                     if (L(k, E(l, p, q)), k.length === T) return k;
                     for (var i = 1; i <= S.length - 1; i++)
                        if (L(k, S[i]), k.length === T) return k;
                     q = p = R
                  }
               }
               return L(k, E(l, p)), k
            }]
         }), !N, A)
      },
      414: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMzUiIHZpZXdCb3g9IjAgMCAxNDM4IDEwMzUiIHdpZHRoPSIxNDM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1LjQ5Mjk1NCUiIHgyPSI4MC4zMzMzMDIlIiB5MT0iNjcuNDk0NzUyJSIgeTI9IjI3Ljk5OTQ0NCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzMwYThjYyIvPjxzdG9wIG9mZnNldD0iLjM1NjIxNDgzIiBzdG9wLWNvbG9yPSIjMTUwZjQxIi8+PHN0b3Agb2Zmc2V0PSIuNjU5Mjg1NTI5IiBzdG9wLWNvbG9yPSIjNzY2YmQwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjgwYTc4Ii8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJiIiBoZWlnaHQ9IjEzNy43JSIgd2lkdGg9IjEyNSUiIHg9Ii0xMi41JSIgeT0iLTE4LjglIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iNTAiLz48L2ZpbHRlcj48cGF0aCBkPSJtNDY1LjQyMTk4MiA3NzUuNDg1MTUzYy04OS4xNDgwMTMtMTgzLjgzNTQ5Ny00MjcuODQ1Mzg3OC0yMDQuODczMDEtMzI4LjI4NTkyOS0zNDguODk5MDYgOTkuNTU5NDU5LTE0NC4wMjYwNSAxMzMuMDcxMzAzLTEwMC45ODAwNjIgMzg1LjU0ODg4NS0xMDAuOTgwMDYyIDI1Mi40Nzc1ODMgMCA2MjEuNDMzMjIyLTM5Mi4yNjg3MDI3IDUxMS43ODc2NzItMTAwLjk4MDA2Mi0xMDkuNjQ1NTQzIDI5MS4yODg2NCA2NDYuNDg1NzcgODE2LjkwMjgxMSA1Ny41ODgzMiA2NTkuNjA2OTQ0LTU4OC44OTc0NTQtMTU3LjI5NTg2Ni01MzcuNDkwOTM2IDc1LjA4NzczOC02MjYuNjM4OTQ4LTEwOC43NDc3NnoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsdGVyPSJ1cmwoI2IpIi8+PC9zdmc+"
      },
      415: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlLXdpZHRoOjQ7fQo8L3N0eWxlPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2OC4yMzY1IiB5MT0iLTEwNy43NjE1IiB4Mj0iMjY3LjIzODUiIHkyPSItMTA2Ljc2MzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDAwIDAgMCA0MDAgLTEwNjg5NSA0MzEwNSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0MzODBGRiIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzY0QURGMjtzdG9wLW9wYWNpdHk6MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjE5OCIvPgo8L3N2Zz4K"
      },
      416: function (e, t, r) {
         var content = r(419);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("142ed704", content, !0, {
            sourceMap: !1
         })
      },
      417: function (e, t, r) {
         e.exports = r.p + "../_index_files/icon-arrow-top-right.d09f690.svg"
      },
      418: function (e, t, r) {
         "use strict";
         r(416)
      },
      419: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, '.soc_ul[data-v-6dd519e3]{display:flex}.soc_ul a[data-v-6dd519e3]{display:block;position:relative;padding:.9rem;margin-right:1rem}.soc_ul a[data-v-6dd519e3]::before,.soc_ul a[data-v-6dd519e3]::after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;border:1px solid var(--c-white);box-shadow:inset 0 0 0 1px var(--c-white);border-radius:50%;transform:scale(1);opacity:1;transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.soc_ul a[data-v-6dd519e3]::before{background:var(--c-white);opacity:0;transform:scale(0.25)}.soc_ul a[data-v-6dd519e3] svg{position:relative;z-index:1;width:1.2rem;fill:var(--c-white);transform:scale(1);transition:transform .3s cubic-bezier(var(--f-cubic)),fill .3s cubic-bezier(var(--f-cubic))}@media(min-width: 1024px){.soc_ul a[data-v-6dd519e3]{margin-right:3rem}.soc_ul a[data-v-6dd519e3]:hover::before{opacity:1;transform:scale(1)}.soc_ul a[data-v-6dd519e3]:hover::after{transform:scale(0.5)}.soc_ul a:hover svg[data-v-6dd519e3]{transform:scale(1.25);fill:var(--c-black)}}', ""]), e.exports = n
      },
      421: function (e, t, r) {
         "use strict";
         r.r(t);
         r(235);
         var n = {
               name: "SoMeList",
               props: {
                  socials: Array
               },
               components: {},
               methods: {},
               created: function () {},
               mounted: function () {}
            },
            o = (r(418), r(14)),
            component = Object(o.a)(n, (function () {
               var e = this,
                  t = e._self._c;
               return t("div", {
                  staticClass: "soc_ul"
               }, [e._l(e.socials, (function (r, i) {
                  return [t("a", {
                     key: i,
                     staticClass: "-normilize",
                     attrs: {
                        href: r.link.url,
                        target: r.link.target
                     },
                     domProps: {
                        innerHTML: e._s(r.svg)
                     }
                  })]
               }))], 2)
            }), [], !1, null, "6dd519e3", null);
         t.default = component.exports
      },
      422: function (e, t, r) {
         "use strict";
         (function (e) {
            r.d(t, "a", (function () {
               return meta
            })), r.d(t, "b", (function () {
               return n
            })), r.d(t, "d", (function () {
               return o
            })), r.d(t, "c", (function () {
               return c
            }));
            r(33), r(46), r(16), r(47);
            var meta = {
                  title: "ELLARIA AI — Creative and marketing services",
                  description: "We specialize in creative operations. We act as an extended member of your creative, marketing and production teams. This allows you to scale, expand, improve and enhance your content.",
                  url: e.env.API_URL || "https://ellaria.world",
                  image: "/link-preview.jpg"
               },
               n = function (meta) {
                  return {
                     title: meta.title,
                     titleTemplate: meta.title_template,
                     meta: [{
                        hid: "description",
                        name: "description",
                        content: meta.description
                     }, {
                        hid: "og:title",
                        property: "og:title",
                        content: meta.title
                     }, {
                        hid: "og:url",
                        property: "og:url",
                        content: meta.url
                     }, {
                        hid: "og:description",
                        property: "og:description",
                        content: meta.description
                     }, {
                        hid: "og:image",
                        property: "og:image",
                        content: meta.image
                     }]
                  }
               },
               o = function (e, t, r) {
                  return t && (e[r] = t), e
               },
               c = function () {
                  var object = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                     e = arguments.length > 1 ? arguments[1] : void 0,
                     t = arguments.length > 2 ? arguments[2] : void 0;
                  return Object.keys(object).reduce((function (t, r) {
                     return e(t, object[r], r)
                  }), t)
               }
         }).call(this, r(159))
      },
      423: function (e, t, r) {
         e.exports = r.p + "../_index_files/icon-arrow-down.c6d98d3.svg"
      },
      426: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNDIgMzQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDIgMzQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNzE0LjgzOTgiIHkxPSIyMzAuMDkwNSIgeDI9IjcxNC44Mzk4IiB5Mj0iMjI5Ljg0MjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoODQwIDAgMCAtODQwIC02MDAyOTQuMTI1IDE5MzIzOC43ODEyKSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQzM4MEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjRBREYyO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3MS4zIiBjeT0iMTcxLjMiIHI9IjE3MCIvPgo8L3N2Zz4K"
      },
      427: function (e, t, r) {
         var content = r(468);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("276f418b", content, !0, {
            sourceMap: !1
         })
      },
      428: function (e, t, r) {
         "use strict";
         r.r(t);
         r(34), r(413);
         var n = [function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "blur-image blur-middle",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "-2",
                     "data-scroll-position": "bottom"
                  }
               }, [e("img", {
                  staticClass: "-blur-1",
                  attrs: {
                     src: r(465),
                     alt: ""
                  }
               })])
            }, function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "icon-arrow"
               }, [e("img", {
                  attrs: {
                     src: r(466),
                     alt: ""
                  }
               })])
            }, function () {
               var e = this,
                  t = e._self._c;
               return t("div", {
                  staticClass: "f-foot_brand-touch"
               }, [t("div"), e._v(" "), t("div"), e._v(" "), t("div")])
            }],
            o = (r(16), {
               name: "Footer",
               components: {},
               data: function (e) {
                  return {
                     hover: !1,
                     data: e.$store.state.data["/wp-json/api/options"],
                     year: (new Date).getFullYear()
                  }
               },
               methods: {
                  subIsActive: function (input) {
                     var e = this;
                     return (Array.isArray(input) ? input : [input]).some((function (path) {
                        return 0 === e.$route.path.indexOf(path)
                     }))
                  }
               },
               created: function () {},
               mounted: function () {}
            }),
            c = (r(467), r(14)),
            component = Object(c.a)(o, (function () {
               var e, t, r, n, o, c, l, d, m, f, h, v = this,
                  w = v._self._c;
               return w("footer", {
                  staticClass: "page-footer"
               }, [v._m(0), v._v(" "), w("div", {
                  staticClass: "f-head -w"
               }, [w("div", {
                  staticClass: "f-head_logo"
               }, [w("span", {
                  staticClass: "-a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [v._v(v._s(null === (e = v.data) || void 0 === e || null === (t = e.footer) || void 0 === t ? void 0 : t.title))])]), v._v(" "), w("nav", {
                  staticClass: "f-head_nav",
                  class: {
                     "-hover-nav": v.hover,
                     "-active-nav": v.subIsActive("/faq") || v.subIsActive("/#") || v.subIsActive("/about") || v.subIsActive("/contact")
                  },
                  on: {
                     mouseleave: function (e) {
                        v.hover = !1
                     }
                  }
               }, [w("nuxt-link", {
                  staticClass: "-h4 -normilize",
                  attrs: {
                     to: "/faq"
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        v.hover = !0
                     }
                  }
               }, [v._v("Services")]), v._v(" "), w("nuxt-link", {
                  staticClass: "-h4 -normilize",
                  attrs: {
                     to: "/#"
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        v.hover = !0
                     }
                  }
               }, [v._v("Work")]), v._v(" "), w("nuxt-link", {
                  staticClass: "-h4 -normilize",
                  attrs: {
                     to: "/about"
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        v.hover = !0
                     }
                  }
               }, [v._v("About")]), v._v(" "), w("nuxt-link", {
                  staticClass: "-h4 -normilize",
                  attrs: {
                     to: "/contact"
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        v.hover = !0
                     }
                  }
               }, [v._v("Contact")])], 1)]), v._v(" "), w("div", {
                  staticClass: "f-soc -w"
               }, [w("SoMeList", {
                  attrs: {
                     socials: null === (r = v.data) || void 0 === r ? void 0 : r.socials
                  }
               })], 1), v._v(" "), w("div", {
                  staticClass: "f-foot -w",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-repeat": ""
                  }
               }, [w("div", {
                  staticClass: "f-foot_slogan"
               }, [w("span", [v._v(v._s(v.data.footer.slogan))])]), v._v(" "), w("div", {
                  staticClass: "f-foot_address"
               }, [w("div", [v._l(null === (n = v.data) || void 0 === n || null === (o = n.footer) || void 0 === o || null === (c = o.address) || void 0 === c ? void 0 : c.split(/\r?\n/gm), (function (line, i) {
                  return [w("p", {
                     key: i
                  }, [v._v(v._s(line))])]
               }))], 2), v._v(" "), w("span", [v._v("© " + v._s(window.ov_year))])]), v._v(" "), w("div", {
                  staticClass: "f-foot_mail"
               }, [w("p", [v._v(v._s(null === (l = v.data) || void 0 === l || null === (d = l.footer) || void 0 === d ? void 0 : d.mail_text))]), v._v(" "), w("div", [w("span", [v._v(v._s(null === (m = v.data) || void 0 === m || null === (f = m.footer) || void 0 === f ? void 0 : f.mail_under_text))]), v._v(" "), v._m(1)]), v._v(" "), w("EmailButton", {
                  attrs: {
                     mail: null === (h = v.data) || void 0 === h ? void 0 : h.mail
                  }
               })], 1), v._v(" "), v._m(2)])])
            }), n, !1, null, "6f7ae3d8", null);
         t.default = component.exports;
         installComponents(component, {
            SoMeList: r(421).default,
            EmailButton: r(239).default,
            Footer: r(428).default
         })
      },
      430: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQgMTQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDQgMTQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlLXdpZHRoOjQ7fQo8L3N0eWxlPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii00NS42MDgzIiB5MT0iMTkyLjYwODMiIHgyPSItNDYuNjA4MyIgeTI9IjE5MS42MDgzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEyMCAwIDAgLTEyMCA1NjA1IDIzMTI1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQzM4MEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjRBREYyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjcyIiBjeT0iNzIiIHI9IjYwIi8+Cjwvc3ZnPgo="
      },
      432: function (e, t, r) {
         var content = r(480);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("f00ae170", content, !0, {
            sourceMap: !1
         })
      },
      465: function (e, t, r) {
         e.exports = r.p + "../_index_files/blur-600x600.08a7d9f.svg"
      },
      466: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjEwIiB5MT0iMCIgeDI9IjEwIiB5Mj0iMTkuMiIvPgo8cG9seWxpbmUgaWQ9IlBhdGgtOCIgY2xhc3M9InN0MCIgcG9pbnRzPSIwLjUsOS44IDEwLDE5LjIgMTkuNSw5LjggIi8+Cjwvc3ZnPgo="
      },
      467: function (e, t, r) {
         "use strict";
         r(427)
      },
      468: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, '.page-footer[data-v-6f7ae3d8]{position:relative;margin-top:12rem;padding-bottom:2rem;overflow:hidden}.page-footer .blur-middle[data-v-6f7ae3d8]{position:absolute;width:80%;bottom:-5%;left:0;right:0;margin:0 auto}.page-footer .f-head[data-v-6f7ae3d8]{position:relative;z-index:1;transform:translateZ(0)}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{user-select:none}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:11.25rem;line-height:.75;font-family:"Stolzl-Book";text-transform:uppercase;display:block;margin-left:-0.5rem}.page-footer .f-head .f-head_nav[data-v-6f7ae3d8]{margin-top:1rem;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.page-footer .f-head .f-head_nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-active-nav a.nuxt-link-active[data-v-6f7ae3d8]{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:3rem;display:flex;justify-content:center;padding-left:1rem}.page-footer .f-foot[data-v-6f7ae3d8]{position:relative;margin-top:3rem;display:flex;flex-direction:column}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:3rem}.page-footer .f-foot .f-foot_slogan span[data-v-6f7ae3d8]{margin-right:1rem}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{padding-left:40%;margin-top:3rem}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:3rem}.page-footer .f-foot .f-foot_address div p[data-v-6f7ae3d8]{margin-bottom:0}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{order:-1}.page-footer .f-foot .f-foot_mail p[data-v-6f7ae3d8]{width:80%}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:1.5rem;margin-bottom:2rem;display:flex;align-items:center}.page-footer .f-foot .f-foot_mail div>span[data-v-6f7ae3d8]{display:inline-block}.page-footer .f-foot .f-foot_mail div .icon-arrow[data-v-6f7ae3d8]{width:1rem;margin-left:.5rem}.page-footer .f-foot .f-foot_brand-touch[data-v-6f7ae3d8]{position:absolute;left:0;bottom:-1rem;width:1.5rem}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]{position:relative;width:100%;padding-top:50%;padding-bottom:50%;display:flex;justify-content:center;align-items:center;transform:scale(0) rotate(90deg);transition:transform .3s cubic-bezier(var(--f-cubic));transition-delay:0}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]::before{content:"";position:absolute;top:auto;right:auto;bottom:auto;left:auto;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]{transform:scale(1) rotate(0deg);transition:transform .6s cubic-bezier(var(--f-cubic-2));transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(1){transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(2){transition-delay:.45s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(3){transition-delay:.6s}@media(min-width: 1024px){.page-footer[data-v-6f7ae3d8]{margin-top:17%;padding-bottom:4rem}.page-footer .blur-middle[data-v-6f7ae3d8]{width:41.666%;max-width:40rem;bottom:-20%}.page-footer .f-head[data-v-6f7ae3d8]{display:flex;justify-content:flex-start;align-items:flex-start}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{margin-top:0;width:67.6%}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:33vw;margin-left:-2rem}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]{opacity:1;transition:opacity 1.5s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]:hover{color:var(--c-white)}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8],.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8]:hover,.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]:hover{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:2.5rem;display:block;padding-left:0}.page-footer .f-foot[data-v-6f7ae3d8]{margin-top:5rem;flex-direction:row;align-items:flex-start}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:0;width:33.8%}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{margin-top:0;width:33.8%;padding-left:0;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:8rem}.page-footer .f-foot .f-foot_address span[data-v-6f7ae3d8]{margin-top:auto;margin-bottom:.5rem}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{width:32.4%;order:initial;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:2.5rem;margin-bottom:3rem}.page-footer .f-foot .f-foot_mail a[data-v-6f7ae3d8]{margin-top:auto}.page-footer[data-v-6f7ae3d8] .soc_ul{margin-left:67.6%}}', ""]), e.exports = n
      },
      472: function (e, t, r) {
         "use strict";
         r.r(t);
         var n = r(412),
            o = {
               uniforms: {
                  tDiffuse: {
                     value: null
                  },
                  tSize: {
                     value: new n.ub(256, 256)
                  },
                  center: {
                     value: new n.ub(.5, .5)
                  },
                  angle: {
                     value: 1.57
                  },
                  scale: {
                     value: 1
                  }
               },
               vertexShader: "\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t}",
               fragmentShader: "\n\n\t\tuniform vec2 center;\n\t\tuniform float angle;\n\t\tuniform float scale;\n\t\tuniform vec2 tSize;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tfloat pattern() {\n\t\t\tfloat s = sin( angle ), c = cos( angle );\n\n\t\t\tvec2 tex = vUv * tSize - center;\n\t\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;\n\n\t\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n\t\t}\n\n    float random(vec2 p) {\n      vec2 k1 = vec2(\n          23.14069263277926, // e^pi (Gelfond's constant)\n          2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)\n      );\n      return fract(\n          cos(dot(p, k1)) * 12345.6789\n      );\n    }\n\n\t\tvoid main() {\n\t\t\tvec4 color = texture2D( tDiffuse, vUv );\n\n      vec2 uvrandom = vUv;\n      uvrandom.y *= random(vec2(uvrandom.y, 0.5));\n\n      color.rgb +=random(uvrandom)*0.1;\n\n      gl_FragColor = color;\n\t\t}"
            };
         t.default = o
      },
      473: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ijc1NCIgdmlld0JveD0iMCAwIDEwNTAgNzU0IiB3aWR0aD0iMTA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNS40OTI5NTQlIiB4Mj0iODAuMzMzMzAyJSIgeTE9IjY2LjUzODAxOCUiIHkyPSIyOS4yMDI1ODclIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMGE4Y2MiLz48c3RvcCBvZmZzZXQ9Ii4zNTYyMTQ4MyIgc3RvcC1jb2xvcj0iIzE1MGY0MSIvPjxzdG9wIG9mZnNldD0iLjY1OTI4NTUyOSIgc3RvcC1jb2xvcj0iIzc2NmJkMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4MGE3OCIvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0iYiIgaGVpZ2h0PSIxNTYuMyUiIHdpZHRoPSIxMzYuMyUiIHg9Ii0xOC4yJSIgeT0iLTI4LjIlIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iNTAiLz48L2ZpbHRlcj48cGF0aCBkPSJtMzY0Ljg3NDA4MSA2MDYuNzI3NjUyYy02Ni4zMDEwMzQtMTM2LjcyMTg3OC0zMTguMTk2NTY5My0xNTIuMzY3ODY3LTI0NC4xNTIzNDktMjU5LjQ4MjcxOSA3NC4wNDQyMjEtMTA3LjExNDg1MSA5OC45Njc2MDMtNzUuMTAwNzQ5IDI4Ni43Mzk4NzUtNzUuMTAwNzQ5czQ2Mi4xNzE0NDMtMjkxLjczNzUyNzggMzgwLjYyNjAxLTc1LjEwMDc1Yy04MS41NDU0MzIgMjE2LjYzNjc3OCAzNjguOTU1MDQzIDY3OS40NTY1NjYtNy41NDQ5NTkgMzE5Ljk1NjU2Ni0zNzYuNS0zNTkuNS0zNDkuMzY3NTQzIDIyNi40NDk1MjktNDE1LjY2ODU3NyA4OS43Mjc2NTJ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTA0MC4wNDI2NTggMCkiLz48L3N2Zz4="
      },
      474: function (e, t, r) {
         var content = r(513);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("235617ab", content, !0, {
            sourceMap: !1
         })
      },
      475: function (e, t, r) {
         var content = r(515);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("c7a08a5e", content, !0, {
            sourceMap: !1
         })
      },
      479: function (e, t, r) {
         "use strict";
         r(432)
      },
      480: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, ".amsterdam-three{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.amsterdam-three canvas{width:100% !important;height:100% !important}@media(min-width: 1024px){.amsterdam-three{height:100vh}}", ""]), e.exports = n
      },
      481: function (e, t, r) {
         var content = r(521);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("42264232", content, !0, {
            sourceMap: !1
         })
      },
      482: function (e, t, r) {
         var content = r(523);
         content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
         ]), content.locals && (e.exports = content.locals);
         (0, r(28).default)("484c03fe", content, !0, {
            sourceMap: !1
         })
      },
      509: function (e, t, r) {
         "use strict";
         r.r(t);
         var n = r(20),
            o = r(502),
            c = r(476),
            l = r.n(c),
            d = r(412),
            m = (r(424), r(50), r(33), r(46), r(51), r(30)),
            f = r(469),
            h = r(511),
            v = r(152),
            w = r(153),
            y = r(429),
            _ = r(425),
            I = r(420);
         r(238), r(434), r(16), r(435), r(436), r(437), r(438), r(439), r(440), r(441), r(442), r(443), r(444), r(445), r(446), r(447), r(448), r(449), r(450), r(451), r(452), r(453), r(454), r(455), r(456), r(457), r(458), r(42), r(35), r(36), r(505), r(49), r(506), r(48), r(240), r(126), r(34), r(69), r(59), r(459), r(460), r(461), r(462), r(463), r(464), r(47), r(162), r(244), r(245), r(246), r(247), r(248), r(249), r(250), r(251), r(252), r(253), r(254), r(255), r(256), r(257), r(241), r(258), r(470), r(237), r(40);

         function x(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
               if (Array.isArray(e) || (r = function (e, t) {
                     if (!e) return;
                     if ("string" == typeof e) return M(e, t);
                     var r = Object.prototype.toString.call(e).slice(8, -1);
                     "Object" === r && e.constructor && (r = e.constructor.name);
                     if ("Map" === r || "Set" === r) return Array.from(e);
                     if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t)
                  }(e)) || t && e && "number" == typeof e.length) {
                  r && (e = r);
                  var i = 0,
                     n = function () {};
                  return {
                     s: n,
                     n: function () {
                        return i >= e.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: e[i++]
                        }
                     },
                     e: function (e) {
                        throw e
                     },
                     f: n
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
               l = !1;
            return {
               s: function () {
                  r = r.call(e)
               },
               n: function () {
                  var e = r.next();
                  return c = e.done, e
               },
               e: function (e) {
                  l = !0, o = e
               },
               f: function () {
                  try {
                     c || null == r.return || r.return()
                  } finally {
                     if (l) throw o
                  }
               }
            }
         }

         function M(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
            return r
         }

         function T(e) {
            var t = function () {
               if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
               if (Reflect.construct.sham) return !1;
               if ("function" == typeof Proxy) return !0;
               try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
               } catch (e) {
                  return !1
               }
            }();
            return function () {
               var r, n = Object(I.a)(e);
               if (t) {
                  var o = Object(I.a)(this).constructor;
                  r = Reflect.construct(n, arguments, o)
               } else r = n.apply(this, arguments);
               return Object(_.a)(this, r)
            }
         }
         var k = function (e) {
            Object(y.a)(r, e);
            var t = T(r);

            function r(e) {
               var n;
               return Object(v.a)(this, r), (n = t.call(this, e)).dracoLoader = null, n.ktx2Loader = null, n.meshoptDecoder = null, n.pluginCallbacks = [], n.register((function (e) {
                  return new L(e)
               })), n.register((function (e) {
                  return new z(e)
               })), n.register((function (e) {
                  return new G(e)
               })), n.register((function (e) {
                  return new N(e)
               })), n.register((function (e) {
                  return new O(e)
               })), n.register((function (e) {
                  return new P(e)
               })), n.register((function (e) {
                  return new D(e)
               })), n.register((function (e) {
                  return new S(e)
               })), n.register((function (e) {
                  return new H(e)
               })), n.register((function (e) {
                  return new E(e)
               })), n.register((function (e) {
                  return new j(e)
               })), n.register((function (e) {
                  return new U(e)
               })), n
            }
            return Object(w.a)(r, [{
               key: "load",
               value: function (e, t, r, n) {
                  var o, c = this;
                  o = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : d.F.extractUrlBase(e), this.manager.itemStart(e);
                  var l = function (t) {
                        n ? n(t) : console.error(t), c.manager.itemError(e), c.manager.itemEnd(e)
                     },
                     m = new d.m(this.manager);
                  m.setPath(this.path), m.setResponseType("arraybuffer"), m.setRequestHeader(this.requestHeader), m.setWithCredentials(this.withCredentials), m.load(e, (function (data) {
                     try {
                        c.parse(data, o, (function (r) {
                           t(r), c.manager.itemEnd(e)
                        }), l)
                     } catch (e) {
                        l(e)
                     }
                  }), r, l)
               }
            }, {
               key: "setDRACOLoader",
               value: function (e) {
                  return this.dracoLoader = e, this
               }
            }, {
               key: "setDDSLoader",
               value: function () {
                  throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
               }
            }, {
               key: "setKTX2Loader",
               value: function (e) {
                  return this.ktx2Loader = e, this
               }
            }, {
               key: "setMeshoptDecoder",
               value: function (e) {
                  return this.meshoptDecoder = e, this
               }
            }, {
               key: "register",
               value: function (e) {
                  return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
               }
            }, {
               key: "unregister",
               value: function (e) {
                  return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
               }
            }, {
               key: "parse",
               value: function (data, path, e, t) {
                  var content, r = {},
                     n = {};
                  if ("string" == typeof data) content = data;
                  else if (d.F.decodeText(new Uint8Array(data, 0, 4)) === Z) {
                     try {
                        r[C.KHR_BINARY_GLTF] = new W(data)
                     } catch (e) {
                        return void(t && t(e))
                     }
                     content = r[C.KHR_BINARY_GLTF].content
                  } else content = d.F.decodeText(new Uint8Array(data));
                  var o = JSON.parse(content);
                  if (void 0 === o.asset || o.asset.version[0] < 2) t && t(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                  else {
                     var c = new xe(o, {
                        path: path || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                     });
                     c.fileLoader.setRequestHeader(this.requestHeader);
                     for (var i = 0; i < this.pluginCallbacks.length; i++) {
                        var l = this.pluginCallbacks[i](c);
                        n[l.name] = l, r[l.name] = !0
                     }
                     if (o.extensionsUsed)
                        for (var m = 0; m < o.extensionsUsed.length; ++m) {
                           var f = o.extensionsUsed[m],
                              h = o.extensionsRequired || [];
                           switch (f) {
                              case C.KHR_MATERIALS_UNLIT:
                                 r[f] = new R;
                                 break;
                              case C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                 r[f] = new X;
                                 break;
                              case C.KHR_DRACO_MESH_COMPRESSION:
                                 r[f] = new V(o, this.dracoLoader);
                                 break;
                              case C.KHR_TEXTURE_TRANSFORM:
                                 r[f] = new Y;
                                 break;
                              case C.KHR_MESH_QUANTIZATION:
                                 r[f] = new Q;
                                 break;
                              default:
                                 h.indexOf(f) >= 0 && void 0 === n[f] && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".')
                           }
                        }
                     c.setExtensions(r), c.setPlugins(n), c.parse(e, t)
                  }
               }
            }, {
               key: "parseAsync",
               value: function (data, path) {
                  var e = this;
                  return new Promise((function (t, r) {
                     e.parse(data, path, t, r)
                  }))
               }
            }]), r
         }(d.E);

         function A() {
            var e = {};
            return {
               get: function (t) {
                  return e[t]
               },
               add: function (t, object) {
                  e[t] = object
               },
               remove: function (t) {
                  delete e[t]
               },
               removeAll: function () {
                  e = {}
               }
            }
         }
         var C = {
               KHR_BINARY_GLTF: "KHR_binary_glTF",
               KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
               KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
               KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
               KHR_MATERIALS_IOR: "KHR_materials_ior",
               KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
               KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
               KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
               KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
               KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
               KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
               KHR_MATERIALS_VOLUME: "KHR_materials_volume",
               KHR_TEXTURE_BASISU: "KHR_texture_basisu",
               KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
               KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
               KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
               EXT_TEXTURE_WEBP: "EXT_texture_webp",
               EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
            },
            j = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_LIGHTS_PUNCTUAL, this.cache = {
                     refs: {},
                     uses: {}
                  }
               }
               return Object(w.a)(e, [{
                  key: "_markDefs",
                  value: function () {
                     for (var e = this.parser, t = this.parser.json.nodes || [], r = 0, n = t.length; r < n; r++) {
                        var o = t[r];
                        o.extensions && o.extensions[this.name] && void 0 !== o.extensions[this.name].light && e._addNodeRef(this.cache, o.extensions[this.name].light)
                     }
                  }
               }, {
                  key: "_loadLight",
                  value: function (e) {
                     var t = this.parser,
                        r = "light:" + e,
                        n = t.cache.get(r);
                     if (n) return n;
                     var o, c = t.json,
                        l = ((c.extensions && c.extensions[this.name] || {}).lights || [])[e],
                        m = new d.h(16777215);
                     void 0 !== l.color && m.fromArray(l.color);
                     var f = void 0 !== l.range ? l.range : 0;
                     switch (l.type) {
                        case "directional":
                           (o = new d.j(m)).target.position.set(0, 0, -1), o.add(o.target);
                           break;
                        case "point":
                           (o = new d.X(m)).distance = f;
                           break;
                        case "spot":
                           (o = new d.mb(m)).distance = f, l.spot = l.spot || {}, l.spot.innerConeAngle = void 0 !== l.spot.innerConeAngle ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = void 0 !== l.spot.outerConeAngle ? l.spot.outerConeAngle : Math.PI / 4, o.angle = l.spot.outerConeAngle, o.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
                           break;
                        default:
                           throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type)
                     }
                     return o.position.set(0, 0, 0), o.decay = 2, void 0 !== l.intensity && (o.intensity = l.intensity), o.name = t.createUniqueName(l.name || "light_" + e), n = Promise.resolve(o), t.cache.add(r, n), n
                  }
               }, {
                  key: "createNodeAttachment",
                  value: function (e) {
                     var t = this,
                        r = this.parser,
                        n = r.json.nodes[e],
                        o = (n.extensions && n.extensions[this.name] || {}).light;
                     return void 0 === o ? null : this._loadLight(o).then((function (e) {
                        return r._getNodeRef(t.cache, o, e)
                     }))
                  }
               }]), e
            }(),
            R = function () {
               function e() {
                  Object(v.a)(this, e), this.name = C.KHR_MATERIALS_UNLIT
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function () {
                     return d.L
                  }
               }, {
                  key: "extendParams",
                  value: function (e, t, r) {
                     var n = [];
                     e.color = new d.h(1, 1, 1), e.opacity = 1;
                     var o = t.pbrMetallicRoughness;
                     if (o) {
                        if (Array.isArray(o.baseColorFactor)) {
                           var c = o.baseColorFactor;
                           e.color.fromArray(c), e.opacity = c[3]
                        }
                        void 0 !== o.baseColorTexture && n.push(r.assignTexture(e, "map", o.baseColorTexture, d.Bb))
                     }
                     return Promise.all(n)
                  }
               }]), e
            }(),
            S = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_EMISSIVE_STRENGTH
               }
               return Object(w.a)(e, [{
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser.json.materials[e];
                     if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                     var n = r.extensions[this.name].emissiveStrength;
                     return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve()
                  }
               }]), e
            }(),
            L = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_CLEARCOAT
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [],
                        c = n.extensions[this.name];
                     if (void 0 !== c.clearcoatFactor && (t.clearcoat = c.clearcoatFactor), void 0 !== c.clearcoatTexture && o.push(r.assignTexture(t, "clearcoatMap", c.clearcoatTexture)), void 0 !== c.clearcoatRoughnessFactor && (t.clearcoatRoughness = c.clearcoatRoughnessFactor), void 0 !== c.clearcoatRoughnessTexture && o.push(r.assignTexture(t, "clearcoatRoughnessMap", c.clearcoatRoughnessTexture)), void 0 !== c.clearcoatNormalTexture && (o.push(r.assignTexture(t, "clearcoatNormalMap", c.clearcoatNormalTexture)), void 0 !== c.clearcoatNormalTexture.scale)) {
                        var l = c.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new d.ub(l, l)
                     }
                     return Promise.all(o)
                  }
               }]), e
            }(),
            E = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_IRIDESCENCE
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [],
                        c = n.extensions[this.name];
                     return void 0 !== c.iridescenceFactor && (t.iridescence = c.iridescenceFactor), void 0 !== c.iridescenceTexture && o.push(r.assignTexture(t, "iridescenceMap", c.iridescenceTexture)), void 0 !== c.iridescenceIor && (t.iridescenceIOR = c.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== c.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = c.iridescenceThicknessMinimum), void 0 !== c.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = c.iridescenceThicknessMaximum), void 0 !== c.iridescenceThicknessTexture && o.push(r.assignTexture(t, "iridescenceThicknessMap", c.iridescenceThicknessTexture)), Promise.all(o)
                  }
               }]), e
            }(),
            N = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_SHEEN
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [];
                     t.sheenColor = new d.h(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                     var c = n.extensions[this.name];
                     return void 0 !== c.sheenColorFactor && t.sheenColor.fromArray(c.sheenColorFactor), void 0 !== c.sheenRoughnessFactor && (t.sheenRoughness = c.sheenRoughnessFactor), void 0 !== c.sheenColorTexture && o.push(r.assignTexture(t, "sheenColorMap", c.sheenColorTexture, d.Bb)), void 0 !== c.sheenRoughnessTexture && o.push(r.assignTexture(t, "sheenRoughnessMap", c.sheenRoughnessTexture)), Promise.all(o)
                  }
               }]), e
            }(),
            O = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_TRANSMISSION
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [],
                        c = n.extensions[this.name];
                     return void 0 !== c.transmissionFactor && (t.transmission = c.transmissionFactor), void 0 !== c.transmissionTexture && o.push(r.assignTexture(t, "transmissionMap", c.transmissionTexture)), Promise.all(o)
                  }
               }]), e
            }(),
            P = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_VOLUME
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [],
                        c = n.extensions[this.name];
                     t.thickness = void 0 !== c.thicknessFactor ? c.thicknessFactor : 0, void 0 !== c.thicknessTexture && o.push(r.assignTexture(t, "thicknessMap", c.thicknessTexture)), t.attenuationDistance = c.attenuationDistance || 0;
                     var l = c.attenuationColor || [1, 1, 1];
                     return t.attenuationColor = new d.h(l[0], l[1], l[2]), Promise.all(o)
                  }
               }]), e
            }(),
            D = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_IOR
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser.json.materials[e];
                     if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                     var n = r.extensions[this.name];
                     return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
                  }
               }]), e
            }(),
            H = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_MATERIALS_SPECULAR
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function (e) {
                     var t = this.parser.json.materials[e];
                     return t.extensions && t.extensions[this.name] ? d.M : null
                  }
               }, {
                  key: "extendMaterialParams",
                  value: function (e, t) {
                     var r = this.parser,
                        n = r.json.materials[e];
                     if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                     var o = [],
                        c = n.extensions[this.name];
                     t.specularIntensity = void 0 !== c.specularFactor ? c.specularFactor : 1, void 0 !== c.specularTexture && o.push(r.assignTexture(t, "specularIntensityMap", c.specularTexture));
                     var l = c.specularColorFactor || [1, 1, 1];
                     return t.specularColor = new d.h(l[0], l[1], l[2]), void 0 !== c.specularColorTexture && o.push(r.assignTexture(t, "specularColorMap", c.specularColorTexture, d.Bb)), Promise.all(o)
                  }
               }]), e
            }(),
            z = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.KHR_TEXTURE_BASISU
               }
               return Object(w.a)(e, [{
                  key: "loadTexture",
                  value: function (e) {
                     var t = this.parser,
                        r = t.json,
                        n = r.textures[e];
                     if (!n.extensions || !n.extensions[this.name]) return null;
                     var o = n.extensions[this.name],
                        c = t.options.ktx2Loader;
                     if (!c) {
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                        return null
                     }
                     return t.loadTextureImage(e, o.source, c)
                  }
               }]), e
            }(),
            G = function () {
               function e(t) {
                  Object(v.a)(this, e), this.parser = t, this.name = C.EXT_TEXTURE_WEBP, this.isSupported = null
               }
               return Object(w.a)(e, [{
                  key: "loadTexture",
                  value: function (e) {
                     var t = this.name,
                        r = this.parser,
                        n = r.json,
                        o = n.textures[e];
                     if (!o.extensions || !o.extensions[t]) return null;
                     var c = o.extensions[t],
                        source = n.images[c.source],
                        l = r.textureLoader;
                     if (source.uri) {
                        var d = r.options.manager.getHandler(source.uri);
                        null !== d && (l = d)
                     }
                     return this.detectSupport().then((function (o) {
                        if (o) return r.loadTextureImage(e, c.source, l);
                        if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return r.loadTexture(e)
                     }))
                  }
               }, {
                  key: "detectSupport",
                  value: function () {
                     return this.isSupported || (this.isSupported = new Promise((function (e) {
                        var image = new Image;
                        image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", image.onload = image.onerror = function () {
                           e(1 === image.height)
                        }
                     }))), this.isSupported
                  }
               }]), e
            }(),
            U = function () {
               function e(t) {
                  Object(v.a)(this, e), this.name = C.EXT_MESHOPT_COMPRESSION, this.parser = t
               }
               return Object(w.a)(e, [{
                  key: "loadBufferView",
                  value: function (e) {
                     var t = this.parser.json,
                        r = t.bufferViews[e];
                     if (r.extensions && r.extensions[this.name]) {
                        var n = r.extensions[this.name],
                           o = this.parser.getDependency("buffer", n.buffer),
                           c = this.parser.options.meshoptDecoder;
                        if (!c || !c.supported) {
                           if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                           return null
                        }
                        return Promise.all([o, c.ready]).then((function (e) {
                           var t = n.byteOffset || 0,
                              r = n.byteLength || 0,
                              o = n.count,
                              l = n.byteStride,
                              d = new ArrayBuffer(o * l),
                              source = new Uint8Array(e[0], t, r);
                           return c.decodeGltfBuffer(new Uint8Array(d), o, l, source, n.mode, n.filter), d
                        }))
                     }
                     return null
                  }
               }]), e
            }(),
            Z = "glTF",
            B = 1313821514,
            F = 5130562,
            W = Object(w.a)((function e(data) {
               Object(v.a)(this, e), this.name = C.KHR_BINARY_GLTF, this.content = null, this.body = null;
               var t = new DataView(data, 0, 12);
               if (this.header = {
                     magic: d.F.decodeText(new Uint8Array(data.slice(0, 4))),
                     version: t.getUint32(4, !0),
                     length: t.getUint32(8, !0)
                  }, this.header.magic !== Z) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
               if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
               for (var r = this.header.length - 12, n = new DataView(data, 12), o = 0; o < r;) {
                  var c = n.getUint32(o, !0);
                  o += 4;
                  var l = n.getUint32(o, !0);
                  if (o += 4, l === B) {
                     var m = new Uint8Array(data, 12 + o, c);
                     this.content = d.F.decodeText(m)
                  } else if (l === F) {
                     var f = 12 + o;
                     this.body = data.slice(f, f + c)
                  }
                  o += c
               }
               if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
            })),
            V = function () {
               function e(t, r) {
                  if (Object(v.a)(this, e), !r) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                  this.name = C.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = r, this.dracoLoader.preload()
               }
               return Object(w.a)(e, [{
                  key: "decodePrimitive",
                  value: function (e, t) {
                     var r = this.json,
                        n = this.dracoLoader,
                        o = e.extensions[this.name].bufferView,
                        c = e.extensions[this.name].attributes,
                        l = {},
                        d = {},
                        m = {};
                     for (var f in c) {
                        var h = me[f] || f.toLowerCase();
                        l[h] = c[f]
                     }
                     for (var v in e.attributes) {
                        var w = me[v] || v.toLowerCase();
                        if (void 0 !== c[v]) {
                           var y = r.accessors[e.attributes[v]],
                              _ = ce[y.componentType];
                           m[w] = _, d[w] = !0 === y.normalized
                        }
                     }
                     return t.getDependency("bufferView", o).then((function (e) {
                        return new Promise((function (t) {
                           n.decodeDracoFile(e, (function (e) {
                              for (var r in e.attributes) {
                                 var n = e.attributes[r],
                                    o = d[r];
                                 void 0 !== o && (n.normalized = o)
                              }
                              t(e)
                           }), l, m)
                        }))
                     }))
                  }
               }]), e
            }(),
            Y = function () {
               function e() {
                  Object(v.a)(this, e), this.name = C.KHR_TEXTURE_TRANSFORM
               }
               return Object(w.a)(e, [{
                  key: "extendTexture",
                  value: function (e, t) {
                     return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                  }
               }]), e
            }(),
            J = function (e) {
               Object(y.a)(r, e);
               var t = T(r);

               function r(e) {
                  var n;
                  Object(v.a)(this, r), (n = t.call(this)).isGLTFSpecularGlossinessMaterial = !0;
                  var o = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                     c = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                     l = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                     m = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                     h = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
                     w = {
                        specular: {
                           value: (new d.h).setHex(16777215)
                        },
                        glossiness: {
                           value: 1
                        },
                        specularMap: {
                           value: null
                        },
                        glossinessMap: {
                           value: null
                        }
                     };
                  return n._extraUniforms = w, n.onBeforeCompile = function (e) {
                     for (var t in w) e.uniforms[t] = w[t];
                     e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", o).replace("#include <metalnessmap_pars_fragment>", c).replace("#include <roughnessmap_fragment>", l).replace("#include <metalnessmap_fragment>", m).replace("#include <lights_physical_fragment>", h)
                  }, Object.defineProperties(Object(f.a)(n), {
                     specular: {
                        get: function () {
                           return w.specular.value
                        },
                        set: function (e) {
                           w.specular.value = e
                        }
                     },
                     specularMap: {
                        get: function () {
                           return w.specularMap.value
                        },
                        set: function (e) {
                           w.specularMap.value = e, e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                        }
                     },
                     glossiness: {
                        get: function () {
                           return w.glossiness.value
                        },
                        set: function (e) {
                           w.glossiness.value = e
                        }
                     },
                     glossinessMap: {
                        get: function () {
                           return w.glossinessMap.value
                        },
                        set: function (e) {
                           w.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                        }
                     }
                  }), delete n.metalness, delete n.roughness, delete n.metalnessMap, delete n.roughnessMap, n.setValues(e), n
               }
               return Object(w.a)(r, [{
                  key: "copy",
                  value: function (source) {
                     return Object(h.a)(Object(I.a)(r.prototype), "copy", this).call(this, source), this.specularMap = source.specularMap, this.specular.copy(source.specular), this.glossinessMap = source.glossinessMap, this.glossiness = source.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
                  }
               }]), r
            }(d.N),
            X = function () {
               function e() {
                  Object(v.a)(this, e), this.name = C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
               }
               return Object(w.a)(e, [{
                  key: "getMaterialType",
                  value: function () {
                     return J
                  }
               }, {
                  key: "extendParams",
                  value: function (e, t, r) {
                     var n = t.extensions[this.name];
                     e.color = new d.h(1, 1, 1), e.opacity = 1;
                     var o = [];
                     if (Array.isArray(n.diffuseFactor)) {
                        var c = n.diffuseFactor;
                        e.color.fromArray(c), e.opacity = c[3]
                     }
                     if (void 0 !== n.diffuseTexture && o.push(r.assignTexture(e, "map", n.diffuseTexture, d.Bb)), e.emissive = new d.h(0, 0, 0), e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, e.specular = new d.h(1, 1, 1), Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
                        var l = n.specularGlossinessTexture;
                        o.push(r.assignTexture(e, "glossinessMap", l)), o.push(r.assignTexture(e, "specularMap", l, d.Bb))
                     }
                     return Promise.all(o)
                  }
               }, {
                  key: "createMaterial",
                  value: function (e) {
                     var t = new J(e);
                     return t.fog = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, t.normalMapType = d.ob, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t
                  }
               }]), e
            }(),
            Q = Object(w.a)((function e() {
               Object(v.a)(this, e), this.name = C.KHR_MESH_QUANTIZATION
            })),
            K = function (e) {
               Object(y.a)(r, e);
               var t = T(r);

               function r(e, n, o, c) {
                  return Object(v.a)(this, r), t.call(this, e, n, o, c)
               }
               return Object(w.a)(r, [{
                  key: "copySampleValue_",
                  value: function (e) {
                     for (var t = this.resultBuffer, r = this.sampleValues, n = this.valueSize, o = e * n * 3 + n, i = 0; i !== n; i++) t[i] = r[o + i];
                     return t
                  }
               }]), r
            }(d.t);
         K.prototype.interpolate_ = function (e, t, r, n) {
            for (var o = this.resultBuffer, c = this.sampleValues, l = this.valueSize, d = 2 * l, m = 3 * l, td = n - t, p = (r - t) / td, f = p * p, h = f * p, v = e * m, w = v - m, y = -2 * h + 3 * f, _ = h - f, I = 1 - y, x = _ - f + p, i = 0; i !== l; i++) {
               var M = c[w + i + l],
                  T = c[w + i + d] * td,
                  k = c[v + i + l],
                  A = c[v + i] * td;
               o[i] = I * M + x * T + y * k + _ * A
            }
            return o
         };
         var $ = new d.bb,
            ee = function (e) {
               Object(y.a)(r, e);
               var t = T(r);

               function r() {
                  return Object(v.a)(this, r), t.apply(this, arguments)
               }
               return Object(w.a)(r, [{
                  key: "interpolate_",
                  value: function (e, t, n, o) {
                     var c = Object(h.a)(Object(I.a)(r.prototype), "interpolate_", this).call(this, e, t, n, o);
                     return $.fromArray(c).normalize().toArray(c), c
                  }
               }]), r
            }(K),
            te = 0,
            ae = 1,
            re = 2,
            ie = 3,
            ne = 4,
            oe = 5,
            se = 6,
            ce = {
               5120: Int8Array,
               5121: Uint8Array,
               5122: Int16Array,
               5123: Uint16Array,
               5125: Uint32Array,
               5126: Float32Array
            },
            le = {
               9728: d.P,
               9729: d.A,
               9984: d.R,
               9985: d.D,
               9986: d.Q,
               9987: d.C
            },
            ue = {
               33071: d.f,
               33648: d.O,
               10497: d.eb
            },
            de = {
               SCALAR: 1,
               VEC2: 2,
               VEC3: 3,
               VEC4: 4,
               MAT2: 4,
               MAT3: 9,
               MAT4: 16
            },
            me = {
               POSITION: "position",
               NORMAL: "normal",
               TANGENT: "tangent",
               TEXCOORD_0: "uv",
               TEXCOORD_1: "uv2",
               COLOR_0: "color",
               WEIGHTS_0: "skinWeight",
               JOINTS_0: "skinIndex"
            },
            fe = {
               scale: "scale",
               translation: "position",
               rotation: "quaternion",
               weights: "morphTargetInfluences"
            },
            he = {
               CUBICSPLINE: void 0,
               LINEAR: d.v,
               STEP: d.u
            },
            ve = "OPAQUE",
            pe = "MASK",
            ge = "BLEND";

         function be(e, object, t) {
            for (var r in t.extensions) void 0 === e[r] && (object.userData.gltfExtensions = object.userData.gltfExtensions || {}, object.userData.gltfExtensions[r] = t.extensions[r])
         }

         function we(object, e) {
            void 0 !== e.extras && ("object" === Object(n.a)(e.extras) ? Object.assign(object.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
         }

         function ye(e, t) {
            if (e.updateMorphTargets(), void 0 !== t.weights)
               for (var i = 0, r = t.weights.length; i < r; i++) e.morphTargetInfluences[i] = t.weights[i];
            if (t.extras && Array.isArray(t.extras.targetNames)) {
               var n = t.extras.targetNames;
               if (e.morphTargetInfluences.length === n.length) {
                  e.morphTargetDictionary = {};
                  for (var o = 0, c = n.length; o < c; o++) e.morphTargetDictionary[n[o]] = o
               } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
            }
         }

         function _e(e) {
            for (var t = "", r = Object.keys(e).sort(), i = 0, n = r.length; i < n; i++) t += r[i] + ":" + e[r[i]] + ";";
            return t
         }

         function Ie(e) {
            switch (e) {
               case Int8Array:
                  return 1 / 127;
               case Uint8Array:
                  return 1 / 255;
               case Int16Array:
                  return 1 / 32767;
               case Uint16Array:
                  return 1 / 65535;
               default:
                  throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
            }
         }
         var xe = function () {
            function e() {
               var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
               Object(v.a)(this, e), this.json = t, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new A, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
                  refs: {},
                  uses: {}
               }, this.cameraCache = {
                  refs: {},
                  uses: {}
               }, this.lightCache = {
                  refs: {},
                  uses: {}
               }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
               var n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                  o = navigator.userAgent.indexOf("Firefox") > -1,
                  c = o ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
               "undefined" == typeof createImageBitmap || n || o && c < 98 ? this.textureLoader = new d.qb(this.options.manager) : this.textureLoader = new d.q(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new d.m(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
            }
            return Object(w.a)(e, [{
               key: "setExtensions",
               value: function (e) {
                  this.extensions = e
               }
            }, {
               key: "setPlugins",
               value: function (e) {
                  this.plugins = e
               }
            }, {
               key: "parse",
               value: function (e, t) {
                  var r = this,
                     n = this.json,
                     o = this.extensions;
                  this.cache.removeAll(), this._invokeAll((function (e) {
                     return e._markDefs && e._markDefs()
                  })), Promise.all(this._invokeAll((function (e) {
                     return e.beforeRoot && e.beforeRoot()
                  }))).then((function () {
                     return Promise.all([r.getDependencies("scene"), r.getDependencies("animation"), r.getDependencies("camera")])
                  })).then((function (t) {
                     var c = {
                        scene: t[0][n.scene || 0],
                        scenes: t[0],
                        animations: t[1],
                        cameras: t[2],
                        asset: n.asset,
                        parser: r,
                        userData: {}
                     };
                     be(o, c, n), we(c, n), Promise.all(r._invokeAll((function (e) {
                        return e.afterRoot && e.afterRoot(c)
                     }))).then((function () {
                        e(c)
                     }))
                  })).catch(t)
               }
            }, {
               key: "_markDefs",
               value: function () {
                  for (var e = this.json.nodes || [], t = this.json.skins || [], r = this.json.meshes || [], n = 0, o = t.length; n < o; n++)
                     for (var c = t[n].joints, i = 0, l = c.length; i < l; i++) e[c[i]].isBone = !0;
                  for (var d = 0, m = e.length; d < m; d++) {
                     var f = e[d];
                     void 0 !== f.mesh && (this._addNodeRef(this.meshCache, f.mesh), void 0 !== f.skin && (r[f.mesh].isSkinnedMesh = !0)), void 0 !== f.camera && this._addNodeRef(this.cameraCache, f.camera)
                  }
               }
            }, {
               key: "_addNodeRef",
               value: function (e, t) {
                  void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
               }
            }, {
               key: "_getNodeRef",
               value: function (e, t, object) {
                  var r = this;
                  if (e.refs[t] <= 1) return object;
                  var n = object.clone();
                  return function e(t, n) {
                     var o = r.associations.get(t);
                     null != o && r.associations.set(n, o);
                     var c, l = x(t.children.entries());
                     try {
                        for (l.s(); !(c = l.n()).done;) {
                           var d = Object(m.a)(c.value, 2),
                              i = d[0];
                           e(d[1], n.children[i])
                        }
                     } catch (e) {
                        l.e(e)
                     } finally {
                        l.f()
                     }
                  }(object, n), n.name += "_instance_" + e.uses[t]++, n
               }
            }, {
               key: "_invokeOne",
               value: function (e) {
                  var t = Object.values(this.plugins);
                  t.push(this);
                  for (var i = 0; i < t.length; i++) {
                     var r = e(t[i]);
                     if (r) return r
                  }
                  return null
               }
            }, {
               key: "_invokeAll",
               value: function (e) {
                  var t = Object.values(this.plugins);
                  t.unshift(this);
                  for (var r = [], i = 0; i < t.length; i++) {
                     var n = e(t[i]);
                     n && r.push(n)
                  }
                  return r
               }
            }, {
               key: "getDependency",
               value: function (e, t) {
                  var r = e + ":" + t,
                     n = this.cache.get(r);
                  if (!n) {
                     switch (e) {
                        case "scene":
                           n = this.loadScene(t);
                           break;
                        case "node":
                           n = this.loadNode(t);
                           break;
                        case "mesh":
                           n = this._invokeOne((function (e) {
                              return e.loadMesh && e.loadMesh(t)
                           }));
                           break;
                        case "accessor":
                           n = this.loadAccessor(t);
                           break;
                        case "bufferView":
                           n = this._invokeOne((function (e) {
                              return e.loadBufferView && e.loadBufferView(t)
                           }));
                           break;
                        case "buffer":
                           n = this.loadBuffer(t);
                           break;
                        case "material":
                           n = this._invokeOne((function (e) {
                              return e.loadMaterial && e.loadMaterial(t)
                           }));
                           break;
                        case "texture":
                           n = this._invokeOne((function (e) {
                              return e.loadTexture && e.loadTexture(t)
                           }));
                           break;
                        case "skin":
                           n = this.loadSkin(t);
                           break;
                        case "animation":
                           n = this._invokeOne((function (e) {
                              return e.loadAnimation && e.loadAnimation(t)
                           }));
                           break;
                        case "camera":
                           n = this.loadCamera(t);
                           break;
                        default:
                           throw new Error("Unknown type: " + e)
                     }
                     this.cache.add(r, n)
                  }
                  return n
               }
            }, {
               key: "getDependencies",
               value: function (e) {
                  var t = this.cache.get(e);
                  if (!t) {
                     var r = this,
                        defs = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                     t = Promise.all(defs.map((function (t, n) {
                        return r.getDependency(e, n)
                     }))), this.cache.add(e, t)
                  }
                  return t
               }
            }, {
               key: "loadBuffer",
               value: function (e) {
                  var t = this.json.buffers[e],
                     r = this.fileLoader;
                  if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                  if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[C.KHR_BINARY_GLTF].body);
                  var n = this.options;
                  return new Promise((function (e, o) {
                     r.load(d.F.resolveURL(t.uri, n.path), e, void 0, (function () {
                        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                     }))
                  }))
               }
            }, {
               key: "loadBufferView",
               value: function (e) {
                  var t = this.json.bufferViews[e];
                  return this.getDependency("buffer", t.buffer).then((function (e) {
                     var r = t.byteLength || 0,
                        n = t.byteOffset || 0;
                     return e.slice(n, n + r)
                  }))
               }
            }, {
               key: "loadAccessor",
               value: function (e) {
                  var t = this,
                     r = this.json,
                     n = this.json.accessors[e];
                  if (void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
                  var o = [];
                  return void 0 !== n.bufferView ? o.push(this.getDependency("bufferView", n.bufferView)) : o.push(null), void 0 !== n.sparse && (o.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(o).then((function (e) {
                     var o, c, l = e[0],
                        m = de[n.type],
                        f = ce[n.componentType],
                        h = f.BYTES_PER_ELEMENT,
                        v = h * m,
                        w = n.byteOffset || 0,
                        y = void 0 !== n.bufferView ? r.bufferViews[n.bufferView].byteStride : void 0,
                        _ = !0 === n.normalized;
                     if (y && y !== v) {
                        var I = Math.floor(w / y),
                           x = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + I + ":" + n.count,
                           M = t.cache.get(x);
                        M || (o = new f(l, I * y, n.count * y / h), M = new d.r(o, y / h), t.cache.add(x, M)), c = new d.s(M, m, w % y / h, _)
                     } else o = null === l ? new f(n.count * m) : new f(l, w, n.count * m), c = new d.d(o, m, _);
                     if (void 0 !== n.sparse) {
                        var T = de.SCALAR,
                           k = ce[n.sparse.indices.componentType],
                           A = n.sparse.indices.byteOffset || 0,
                           C = n.sparse.values.byteOffset || 0,
                           j = new k(e[1], A, n.sparse.count * T),
                           R = new f(e[2], C, n.sparse.count * m);
                        null !== l && (c = new d.d(c.array.slice(), c.itemSize, c.normalized));
                        for (var i = 0, S = j.length; i < S; i++) {
                           var L = j[i];
                           if (c.setX(L, R[i * m]), m >= 2 && c.setY(L, R[i * m + 1]), m >= 3 && c.setZ(L, R[i * m + 2]), m >= 4 && c.setW(L, R[i * m + 3]), m >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                        }
                     }
                     return c
                  }))
               }
            }, {
               key: "loadTexture",
               value: function (e) {
                  var t = this.json,
                     r = this.options,
                     n = t.textures[e].source,
                     o = t.images[n],
                     c = this.textureLoader;
                  if (o.uri) {
                     var l = r.manager.getHandler(o.uri);
                     null !== l && (c = l)
                  }
                  return this.loadTextureImage(e, n, c)
               }
            }, {
               key: "loadTextureImage",
               value: function (e, t, r) {
                  var n = this,
                     o = this.json,
                     c = o.textures[e],
                     l = o.images[t],
                     m = (l.uri || l.bufferView) + ":" + c.sampler;
                  if (this.textureCache[m]) return this.textureCache[m];
                  var f = this.loadImageSource(t, r).then((function (t) {
                     t.flipY = !1, c.name && (t.name = c.name);
                     var r = (o.samplers || {})[c.sampler] || {};
                     return t.magFilter = le[r.magFilter] || d.A, t.minFilter = le[r.minFilter] || d.C, t.wrapS = ue[r.wrapS] || d.eb, t.wrapT = ue[r.wrapT] || d.eb, n.associations.set(t, {
                        textures: e
                     }), t
                  })).catch((function () {
                     return null
                  }));
                  return this.textureCache[m] = f, f
               }
            }, {
               key: "loadImageSource",
               value: function (e, t) {
                  var r = this.json,
                     n = this.options;
                  if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((function (e) {
                     return e.clone()
                  }));
                  var o = r.images[e],
                     c = self.URL || self.webkitURL,
                     l = o.uri || "",
                     m = !1;
                  if (void 0 !== o.bufferView) l = this.getDependency("bufferView", o.bufferView).then((function (e) {
                     m = !0;
                     var t = new Blob([e], {
                        type: o.mimeType
                     });
                     return l = c.createObjectURL(t)
                  }));
                  else if (void 0 === o.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                  var f = Promise.resolve(l).then((function (e) {
                     return new Promise((function (r, o) {
                        var c = r;
                        !0 === t.isImageBitmapLoader && (c = function (e) {
                           var t = new d.pb(e);
                           t.needsUpdate = !0, r(t)
                        }), t.load(d.F.resolveURL(e, n.path), c, void 0, o)
                     }))
                  })).then((function (e) {
                     var t;
                     return !0 === m && c.revokeObjectURL(l), e.userData.mimeType = o.mimeType || ((t = o.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                  })).catch((function (e) {
                     throw console.error("THREE.GLTFLoader: Couldn't load texture", l), e
                  }));
                  return this.sourceCache[e] = f, f
               }
            }, {
               key: "assignTexture",
               value: function (e, t, r, n) {
                  var o = this;
                  return this.getDependency("texture", r.index).then((function (c) {
                     if (void 0 === r.texCoord || 0 == r.texCoord || "aoMap" === t && 1 == r.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + r.texCoord + " for texture " + t + " not yet supported."), o.extensions[C.KHR_TEXTURE_TRANSFORM]) {
                        var l = void 0 !== r.extensions ? r.extensions[C.KHR_TEXTURE_TRANSFORM] : void 0;
                        if (l) {
                           var d = o.associations.get(c);
                           c = o.extensions[C.KHR_TEXTURE_TRANSFORM].extendTexture(c, l), o.associations.set(c, d)
                        }
                     }
                     return void 0 !== n && (c.encoding = n), e[t] = c, c
                  }))
               }
            }, {
               key: "assignFinalMaterial",
               value: function (e) {
                  var t = e.geometry,
                     r = e.material,
                     n = void 0 === t.attributes.tangent,
                     o = void 0 !== t.attributes.color,
                     c = void 0 === t.attributes.normal;
                  if (e.isPoints) {
                     var l = "PointsMaterial:" + r.uuid,
                        m = this.cache.get(l);
                     m || (m = new d.Z, d.H.prototype.copy.call(m, r), m.color.copy(r.color), m.map = r.map, m.sizeAttenuation = !1, this.cache.add(l, m)), r = m
                  } else if (e.isLine) {
                     var f = "LineBasicMaterial:" + r.uuid,
                        h = this.cache.get(f);
                     h || (h = new d.x, d.H.prototype.copy.call(h, r), h.color.copy(r.color), this.cache.add(f, h)), r = h
                  }
                  if (n || o || c) {
                     var v = "ClonedMaterial:" + r.uuid + ":";
                     r.isGLTFSpecularGlossinessMaterial && (v += "specular-glossiness:"), n && (v += "derivative-tangents:"), o && (v += "vertex-colors:"), c && (v += "flat-shading:");
                     var w = this.cache.get(v);
                     w || (w = r.clone(), o && (w.vertexColors = !0), c && (w.flatShading = !0), n && (w.normalScale && (w.normalScale.y *= -1), w.clearcoatNormalScale && (w.clearcoatNormalScale.y *= -1)), this.cache.add(v, w), this.associations.set(w, this.associations.get(r))), r = w
                  }
                  r.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), e.material = r
               }
            }, {
               key: "getMaterialType",
               value: function () {
                  return d.N
               }
            }, {
               key: "loadMaterial",
               value: function (e) {
                  var t, r = this,
                     n = this.json,
                     o = this.extensions,
                     c = n.materials[e],
                     l = {},
                     m = c.extensions || {},
                     f = [];
                  if (m[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                     var h = o[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                     t = h.getMaterialType(), f.push(h.extendParams(l, c, r))
                  } else if (m[C.KHR_MATERIALS_UNLIT]) {
                     var v = o[C.KHR_MATERIALS_UNLIT];
                     t = v.getMaterialType(), f.push(v.extendParams(l, c, r))
                  } else {
                     var w = c.pbrMetallicRoughness || {};
                     if (l.color = new d.h(1, 1, 1), l.opacity = 1, Array.isArray(w.baseColorFactor)) {
                        var y = w.baseColorFactor;
                        l.color.fromArray(y), l.opacity = y[3]
                     }
                     void 0 !== w.baseColorTexture && f.push(r.assignTexture(l, "map", w.baseColorTexture, d.Bb)), l.metalness = void 0 !== w.metallicFactor ? w.metallicFactor : 1, l.roughness = void 0 !== w.roughnessFactor ? w.roughnessFactor : 1, void 0 !== w.metallicRoughnessTexture && (f.push(r.assignTexture(l, "metalnessMap", w.metallicRoughnessTexture)), f.push(r.assignTexture(l, "roughnessMap", w.metallicRoughnessTexture))), t = this._invokeOne((function (t) {
                        return t.getMaterialType && t.getMaterialType(e)
                     })), f.push(Promise.all(this._invokeAll((function (t) {
                        return t.extendMaterialParams && t.extendMaterialParams(e, l)
                     }))))
                  }!0 === c.doubleSided && (l.side = d.k);
                  var _ = c.alphaMode || ve;
                  if (_ === ge ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, _ === pe && (l.alphaTest = void 0 !== c.alphaCutoff ? c.alphaCutoff : .5)), void 0 !== c.normalTexture && t !== d.L && (f.push(r.assignTexture(l, "normalMap", c.normalTexture)), l.normalScale = new d.ub(1, 1), void 0 !== c.normalTexture.scale)) {
                     var I = c.normalTexture.scale;
                     l.normalScale.set(I, I)
                  }
                  return void 0 !== c.occlusionTexture && t !== d.L && (f.push(r.assignTexture(l, "aoMap", c.occlusionTexture)), void 0 !== c.occlusionTexture.strength && (l.aoMapIntensity = c.occlusionTexture.strength)), void 0 !== c.emissiveFactor && t !== d.L && (l.emissive = (new d.h).fromArray(c.emissiveFactor)), void 0 !== c.emissiveTexture && t !== d.L && f.push(r.assignTexture(l, "emissiveMap", c.emissiveTexture, d.Bb)), Promise.all(f).then((function () {
                     var n;
                     return n = t === J ? o[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l) : new t(l), c.name && (n.name = c.name), we(n, c), r.associations.set(n, {
                        materials: e
                     }), c.extensions && be(o, n, c), n
                  }))
               }
            }, {
               key: "createUniqueName",
               value: function (e) {
                  for (var t = d.ab.sanitizeNodeName(e || ""), r = t, i = 1; this.nodeNamesUsed[r]; ++i) r = t + "_" + i;
                  return this.nodeNamesUsed[r] = !0, r
               }
            }, {
               key: "loadGeometries",
               value: function (e) {
                  var t = this,
                     r = this.extensions,
                     n = this.primitiveCache;

                  function o(e) {
                     return r[C.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function (r) {
                        return Te(r, e, t)
                     }))
                  }
                  for (var c, l, m = [], i = 0, f = e.length; i < f; i++) {
                     var h = e[i],
                        v = (l = void 0, (l = (c = h).extensions && c.extensions[C.KHR_DRACO_MESH_COMPRESSION]) ? "draco:" + l.bufferView + ":" + l.indices + ":" + _e(l.attributes) : c.indices + ":" + _e(c.attributes) + ":" + c.mode),
                        w = n[v];
                     if (w) m.push(w.promise);
                     else {
                        var y = void 0;
                        y = h.extensions && h.extensions[C.KHR_DRACO_MESH_COMPRESSION] ? o(h) : Te(new d.e, h, t), n[v] = {
                           primitive: h,
                           promise: y
                        }, m.push(y)
                     }
                  }
                  return Promise.all(m)
               }
            }, {
               key: "loadMesh",
               value: function (e) {
                  for (var t, r = this, n = this.json, o = this.extensions, c = n.meshes[e], l = c.primitives, m = [], i = 0, f = l.length; i < f; i++) {
                     var h = void 0 === l[i].material ? (void 0 === (t = this.cache).DefaultMaterial && (t.DefaultMaterial = new d.N({
                        color: 16777215,
                        emissive: 0,
                        metalness: 1,
                        roughness: 1,
                        transparent: !1,
                        depthTest: !0,
                        side: d.o
                     })), t.DefaultMaterial) : this.getDependency("material", l[i].material);
                     m.push(h)
                  }
                  return m.push(r.loadGeometries(l)), Promise.all(m).then((function (t) {
                     for (var n = t.slice(0, t.length - 1), m = t[t.length - 1], f = [], h = 0, v = m.length; h < v; h++) {
                        var w = m[h],
                           y = l[h],
                           _ = void 0,
                           I = n[h];
                        if (y.mode === ne || y.mode === oe || y.mode === se || void 0 === y.mode) !0 !== (_ = !0 === c.isSkinnedMesh ? new d.ib(w, I) : new d.K(w, I)).isSkinnedMesh || _.geometry.attributes.skinWeight.normalized || _.normalizeSkinWeights(), y.mode === oe ? _.geometry = ke(_.geometry, d.sb) : y.mode === se && (_.geometry = ke(_.geometry, d.rb));
                        else if (y.mode === ae) _ = new d.z(w, I);
                        else if (y.mode === ie) _ = new d.w(w, I);
                        else if (y.mode === re) _ = new d.y(w, I);
                        else {
                           if (y.mode !== te) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + y.mode);
                           _ = new d.Y(w, I)
                        }
                        Object.keys(_.geometry.morphAttributes).length > 0 && ye(_, c), _.name = r.createUniqueName(c.name || "mesh_" + e), we(_, c), y.extensions && be(o, _, y), r.assignFinalMaterial(_), f.push(_)
                     }
                     for (var x = 0, M = f.length; x < M; x++) r.associations.set(f[x], {
                        meshes: e,
                        primitives: x
                     });
                     if (1 === f.length) return f[0];
                     var T = new d.p;
                     r.associations.set(T, {
                        meshes: e
                     });
                     for (var k = 0, A = f.length; k < A; k++) T.add(f[k]);
                     return T
                  }))
               }
            }, {
               key: "loadCamera",
               value: function (e) {
                  var t, r = this.json.cameras[e],
                     n = r[r.type];
                  if (n) return "perspective" === r.type ? t = new d.V(d.I.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === r.type && (t = new d.U(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), r.name && (t.name = this.createUniqueName(r.name)), we(t, r), Promise.resolve(t);
                  console.warn("THREE.GLTFLoader: Missing camera parameters.")
               }
            }, {
               key: "loadSkin",
               value: function (e) {
                  var t = this.json.skins[e],
                     r = {
                        joints: t.joints
                     };
                  return void 0 === t.inverseBindMatrices ? Promise.resolve(r) : this.getDependency("accessor", t.inverseBindMatrices).then((function (e) {
                     return r.inverseBindMatrices = e, r
                  }))
               }
            }, {
               key: "loadAnimation",
               value: function (e) {
                  for (var t = this.json.animations[e], r = [], n = [], o = [], c = [], l = [], i = 0, m = t.channels.length; i < m; i++) {
                     var f = t.channels[i],
                        h = t.samplers[f.sampler],
                        v = f.target,
                        w = void 0 !== v.node ? v.node : v.id,
                        input = void 0 !== t.parameters ? t.parameters[h.input] : h.input,
                        output = void 0 !== t.parameters ? t.parameters[h.output] : h.output;
                     r.push(this.getDependency("node", w)), n.push(this.getDependency("accessor", input)), o.push(this.getDependency("accessor", output)), c.push(h), l.push(v)
                  }
                  return Promise.all([Promise.all(r), Promise.all(n), Promise.all(o), Promise.all(c), Promise.all(l)]).then((function (r) {
                     for (var n = r[0], o = r[1], c = r[2], l = r[3], m = r[4], f = [], h = function (e, t) {
                           var r = n[e],
                              h = o[e],
                              v = c[e],
                              w = l[e],
                              y = m[e];
                           if (void 0 === r) return "continue";
                           r.updateMatrix(), r.matrixAutoUpdate = !0;
                           var _ = void 0;
                           switch (fe[y.path]) {
                              case fe.weights:
                                 _ = d.S;
                                 break;
                              case fe.rotation:
                                 _ = d.cb;
                                 break;
                              default:
                                 _ = d.xb
                           }
                           var I = r.name ? r.name : r.uuid,
                              x = void 0 !== w.interpolation ? he[w.interpolation] : d.v,
                              M = [];
                           fe[y.path] === fe.weights ? r.traverse((function (object) {
                              object.morphTargetInfluences && M.push(object.name ? object.name : object.uuid)
                           })) : M.push(I);
                           var T = v.array;
                           if (v.normalized) {
                              for (var k = Ie(T.constructor), A = new Float32Array(T.length), C = 0, j = T.length; C < j; C++) A[C] = T[C] * k;
                              T = A
                           }
                           for (var R = 0, S = M.length; R < S; R++) {
                              var track = new _(M[R] + "." + fe[y.path], h.array, T, x);
                              "CUBICSPLINE" === w.interpolation && (track.createInterpolant = function (e) {
                                 return new(this instanceof d.cb ? ee : K)(this.times, this.values, this.getValueSize() / 3, e)
                              }, track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), f.push(track)
                           }
                        }, v = 0, w = n.length; v < w; v++) h(v);
                     var y = t.name ? t.name : "animation_" + e;
                     return new d.a(y, void 0, f)
                  }))
               }
            }, {
               key: "createNodeMesh",
               value: function (e) {
                  var t = this.json,
                     r = this,
                     n = t.nodes[e];
                  return void 0 === n.mesh ? null : r.getDependency("mesh", n.mesh).then((function (e) {
                     var t = r._getNodeRef(r.meshCache, n.mesh, e);
                     return void 0 !== n.weights && t.traverse((function (e) {
                        if (e.isMesh)
                           for (var i = 0, t = n.weights.length; i < t; i++) e.morphTargetInfluences[i] = n.weights[i]
                     })), t
                  }))
               }
            }, {
               key: "loadNode",
               value: function (e) {
                  var t, r, n = this.json,
                     o = this.extensions,
                     c = this,
                     l = n.nodes[e],
                     m = l.name ? c.createUniqueName(l.name) : "";
                  return (t = [], r = c._invokeOne((function (t) {
                     return t.createNodeMesh && t.createNodeMesh(e)
                  })), r && t.push(r), void 0 !== l.camera && t.push(c.getDependency("camera", l.camera).then((function (e) {
                     return c._getNodeRef(c.cameraCache, l.camera, e)
                  }))), c._invokeAll((function (t) {
                     return t.createNodeAttachment && t.createNodeAttachment(e)
                  })).forEach((function (e) {
                     t.push(e)
                  })), Promise.all(t)).then((function (t) {
                     var r;
                     if ((r = !0 === l.isBone ? new d.b : t.length > 1 ? new d.p : 1 === t.length ? t[0] : new d.T) !== t[0])
                        for (var i = 0, n = t.length; i < n; i++) r.add(t[i]);
                     if (l.name && (r.userData.name = l.name, r.name = m), we(r, l), l.extensions && be(o, r, l), void 0 !== l.matrix) {
                        var f = new d.J;
                        f.fromArray(l.matrix), r.applyMatrix4(f)
                     } else void 0 !== l.translation && r.position.fromArray(l.translation), void 0 !== l.rotation && r.quaternion.fromArray(l.rotation), void 0 !== l.scale && r.scale.fromArray(l.scale);
                     return c.associations.has(r) || c.associations.set(r, {}), c.associations.get(r).nodes = e, r
                  }))
               }
            }, {
               key: "loadScene",
               value: function (e) {
                  var t = this.json,
                     r = this.extensions,
                     n = this.json.scenes[e],
                     o = this,
                     c = new d.p;
                  n.name && (c.name = o.createUniqueName(n.name)), we(c, n), n.extensions && be(r, c, n);
                  for (var l = n.nodes || [], f = [], i = 0, h = l.length; i < h; i++) f.push(Me(l[i], c, t, o));
                  return Promise.all(f).then((function () {
                     return o.associations = function (e) {
                        var t, r = new Map,
                           n = x(o.associations);
                        try {
                           for (n.s(); !(t = n.n()).done;) {
                              var c = Object(m.a)(t.value, 2),
                                 l = c[0],
                                 f = c[1];
                              (l instanceof d.H || l instanceof d.pb) && r.set(l, f)
                           }
                        } catch (e) {
                           n.e(e)
                        } finally {
                           n.f()
                        }
                        return e.traverse((function (e) {
                           var t = o.associations.get(e);
                           null != t && r.set(e, t)
                        })), r
                     }(c), c
                  }))
               }
            }]), e
         }();

         function Me(e, t, r, n) {
            var o = r.nodes[e];
            return n.getDependency("node", e).then((function (e) {
               return void 0 === o.skin ? e : n.getDependency("skin", o.skin).then((function (e) {
                  for (var r = [], i = 0, o = (t = e).joints.length; i < o; i++) r.push(n.getDependency("node", t.joints[i]));
                  return Promise.all(r)
               })).then((function (r) {
                  return e.traverse((function (e) {
                     if (e.isMesh) {
                        for (var n = [], o = [], c = 0, l = r.length; c < l; c++) {
                           var m = r[c];
                           if (m) {
                              n.push(m);
                              var f = new d.J;
                              void 0 !== t.inverseBindMatrices && f.fromArray(t.inverseBindMatrices.array, 16 * c), o.push(f)
                           } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c])
                        }
                        e.bind(new d.hb(n, o), e.matrixWorld)
                     }
                  })), e
               }));
               var t
            })).then((function (e) {
               t.add(e);
               var c = [];
               if (o.children)
                  for (var l = o.children, i = 0, d = l.length; i < d; i++) {
                     var m = l[i];
                     c.push(Me(m, e, r, n))
                  }
               return Promise.all(c)
            }))
         }

         function Te(e, t, r) {
            var n = t.attributes,
               o = [];

            function c(t, n) {
               return r.getDependency("accessor", t).then((function (t) {
                  e.setAttribute(n, t)
               }))
            }
            for (var l in n) {
               var m = me[l] || l.toLowerCase();
               m in e.attributes || o.push(c(n[l], m))
            }
            if (void 0 !== t.indices && !e.index) {
               var f = r.getDependency("accessor", t.indices).then((function (t) {
                  e.setIndex(t)
               }));
               o.push(f)
            }
            return we(e, t),
               function (e, t, r) {
                  var n = t.attributes,
                     o = new d.c;
                  if (void 0 !== n.POSITION) {
                     var c = r.json.accessors[n.POSITION],
                        l = c.min,
                        m = c.max;
                     if (void 0 !== l && void 0 !== m) {
                        if (o.set(new d.vb(l[0], l[1], l[2]), new d.vb(m[0], m[1], m[2])), c.normalized) {
                           var f = Ie(ce[c.componentType]);
                           o.min.multiplyScalar(f), o.max.multiplyScalar(f)
                        }
                        var h = t.targets;
                        if (void 0 !== h) {
                           for (var v = new d.vb, w = new d.vb, i = 0, y = h.length; i < y; i++) {
                              var _ = h[i];
                              if (void 0 !== _.POSITION) {
                                 var I = r.json.accessors[_.POSITION],
                                    x = I.min,
                                    M = I.max;
                                 if (void 0 !== x && void 0 !== M) {
                                    if (w.setX(Math.max(Math.abs(x[0]), Math.abs(M[0]))), w.setY(Math.max(Math.abs(x[1]), Math.abs(M[1]))), w.setZ(Math.max(Math.abs(x[2]), Math.abs(M[2]))), I.normalized) {
                                       var T = Ie(ce[I.componentType]);
                                       w.multiplyScalar(T)
                                    }
                                    v.max(w)
                                 } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                              }
                           }
                           o.expandByVector(v)
                        }
                        e.boundingBox = o;
                        var k = new d.jb;
                        o.getCenter(k.center), k.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = k
                     } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                  }
               }(e, t, r), Promise.all(o).then((function () {
                  return void 0 !== t.targets ? function (e, t, r) {
                     for (var n = !1, o = !1, c = !1, i = 0, l = t.length; i < l; i++) {
                        var d = t[i];
                        if (void 0 !== d.POSITION && (n = !0), void 0 !== d.NORMAL && (o = !0), void 0 !== d.COLOR_0 && (c = !0), n && o && c) break
                     }
                     if (!n && !o && !c) return Promise.resolve(e);
                     for (var m = [], f = [], h = [], v = 0, w = t.length; v < w; v++) {
                        var y = t[v];
                        if (n) {
                           var _ = void 0 !== y.POSITION ? r.getDependency("accessor", y.POSITION) : e.attributes.position;
                           m.push(_)
                        }
                        if (o) {
                           var I = void 0 !== y.NORMAL ? r.getDependency("accessor", y.NORMAL) : e.attributes.normal;
                           f.push(I)
                        }
                        if (c) {
                           var x = void 0 !== y.COLOR_0 ? r.getDependency("accessor", y.COLOR_0) : e.attributes.color;
                           h.push(x)
                        }
                     }
                     return Promise.all([Promise.all(m), Promise.all(f), Promise.all(h)]).then((function (t) {
                        var r = t[0],
                           l = t[1],
                           d = t[2];
                        return n && (e.morphAttributes.position = r), o && (e.morphAttributes.normal = l), c && (e.morphAttributes.color = d), e.morphTargetsRelative = !0, e
                     }))
                  }(e, t.targets, r) : e
               }))
         }

         function ke(e, t) {
            var r = e.getIndex();
            if (null === r) {
               var n = [],
                  o = e.getAttribute("position");
               if (void 0 === o) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
               for (var i = 0; i < o.count; i++) n.push(i);
               e.setIndex(n), r = e.getIndex()
            }
            var c = r.count - 2,
               l = [];
            if (t === d.rb)
               for (var m = 1; m <= c; m++) l.push(r.getX(0)), l.push(r.getX(m)), l.push(r.getX(m + 1));
            else
               for (var f = 0; f < c; f++) f % 2 == 0 ? (l.push(r.getX(f)), l.push(r.getX(f + 1)), l.push(r.getX(f + 2))) : (l.push(r.getX(f + 2)), l.push(r.getX(f + 1)), l.push(r.getX(f)));
            l.length / 3 !== c && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            var h = e.clone();
            return h.setIndex(l), h
         }
         r(242), r(243), r(99), r(507);

         function Ae(e) {
            var t = function () {
               if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
               if (Reflect.construct.sham) return !1;
               if ("function" == typeof Proxy) return !0;
               try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
               } catch (e) {
                  return !1
               }
            }();
            return function () {
               var r, n = Object(I.a)(e);
               if (t) {
                  var o = Object(I.a)(this).constructor;
                  r = Reflect.construct(n, arguments, o)
               } else r = n.apply(this, arguments);
               return Object(_.a)(this, r)
            }
         }
         var Ce = new WeakMap,
            je = function (e) {
               Object(y.a)(r, e);
               var t = Ae(r);

               function r(e) {
                  var n;
                  return Object(v.a)(this, r), (n = t.call(this, e)).decoderPath = "", n.decoderConfig = {}, n.decoderBinary = null, n.decoderPending = null, n.workerLimit = 4, n.workerPool = [], n.workerNextTaskID = 1, n.workerSourceURL = "", n.defaultAttributeIDs = {
                     position: "POSITION",
                     normal: "NORMAL",
                     color: "COLOR",
                     uv: "TEX_COORD"
                  }, n.defaultAttributeTypes = {
                     position: "Float32Array",
                     normal: "Float32Array",
                     color: "Float32Array",
                     uv: "Float32Array"
                  }, n
               }
               return Object(w.a)(r, [{
                  key: "setDecoderPath",
                  value: function (path) {
                     return this.decoderPath = path, this
                  }
               }, {
                  key: "setDecoderConfig",
                  value: function (e) {
                     return this.decoderConfig = e, this
                  }
               }, {
                  key: "setWorkerLimit",
                  value: function (e) {
                     return this.workerLimit = e, this
                  }
               }, {
                  key: "load",
                  value: function (e, t, r, n) {
                     var o = this,
                        c = new d.m(this.manager);
                     c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, (function (e) {
                        var r = {
                           attributeIDs: o.defaultAttributeIDs,
                           attributeTypes: o.defaultAttributeTypes,
                           useUniqueIDs: !1
                        };
                        o.decodeGeometry(e, r).then(t).catch(n)
                     }), r, n)
                  }
               }, {
                  key: "decodeDracoFile",
                  value: function (e, t, r, n) {
                     var o = {
                        attributeIDs: r || this.defaultAttributeIDs,
                        attributeTypes: n || this.defaultAttributeTypes,
                        useUniqueIDs: !!r
                     };
                     this.decodeGeometry(e, o).then(t)
                  }
               }, {
                  key: "decodeGeometry",
                  value: function (e, t) {
                     var r = this;
                     for (var n in t.attributeTypes) {
                        var o = t.attributeTypes[n];
                        void 0 !== o.BYTES_PER_ELEMENT && (t.attributeTypes[n] = o.name)
                     }
                     var c, l = JSON.stringify(t);
                     if (Ce.has(e)) {
                        var d = Ce.get(e);
                        if (d.key === l) return d.promise;
                        if (0 === e.byteLength) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                     }
                     var m = this.workerNextTaskID++,
                        f = e.byteLength,
                        h = this._getWorker(m, f).then((function (r) {
                           return c = r, new Promise((function (r, n) {
                              c._callbacks[m] = {
                                 resolve: r,
                                 reject: n
                              }, c.postMessage({
                                 type: "decode",
                                 id: m,
                                 taskConfig: t,
                                 buffer: e
                              }, [e])
                           }))
                        })).then((function (e) {
                           return r._createGeometry(e.geometry)
                        }));
                     return h.catch((function () {
                        return !0
                     })).then((function () {
                        c && m && r._releaseTask(c, m)
                     })), Ce.set(e, {
                        key: l,
                        promise: h
                     }), h
                  }
               }, {
                  key: "_createGeometry",
                  value: function (e) {
                     var t = new d.e;
                     e.index && t.setIndex(new d.d(e.index.array, 1));
                     for (var i = 0; i < e.attributes.length; i++) {
                        var r = e.attributes[i],
                           n = r.name,
                           o = r.array,
                           c = r.itemSize;
                        t.setAttribute(n, new d.d(o, c))
                     }
                     return t
                  }
               }, {
                  key: "_loadLibrary",
                  value: function (e, t) {
                     var r = new d.m(this.manager);
                     return r.setPath(this.decoderPath), r.setResponseType(t), r.setWithCredentials(this.withCredentials), new Promise((function (t, n) {
                        r.load(e, t, void 0, n)
                     }))
                  }
               }, {
                  key: "preload",
                  value: function () {
                     return this._initDecoder(), this
                  }
               }, {
                  key: "_initDecoder",
                  value: function () {
                     var e = this;
                     if (this.decoderPending) return this.decoderPending;
                     var t = "object" !== ("undefined" == typeof WebAssembly ? "undefined" : Object(n.a)(WebAssembly)) || "js" === this.decoderConfig.type,
                        r = [];
                     return t ? r.push(this._loadLibrary("draco_decoder.js", "text")) : (r.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), r.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(r).then((function (r) {
                        var n = r[0];
                        t || (e.decoderConfig.wasmBinary = r[1]);
                        var o = Re.toString(),
                           body = ["/* draco decoder */", n, "", "/* worker */", o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))].join("\n");
                        e.workerSourceURL = URL.createObjectURL(new Blob([body]))
                     })), this.decoderPending
                  }
               }, {
                  key: "_getWorker",
                  value: function (e, t) {
                     var r = this;
                     return this._initDecoder().then((function () {
                        if (r.workerPool.length < r.workerLimit) {
                           var n = new Worker(r.workerSourceURL);
                           n._callbacks = {}, n._taskCosts = {}, n._taskLoad = 0, n.postMessage({
                              type: "init",
                              decoderConfig: r.decoderConfig
                           }), n.onmessage = function (e) {
                              var t = e.data;
                              switch (t.type) {
                                 case "decode":
                                    n._callbacks[t.id].resolve(t);
                                    break;
                                 case "error":
                                    n._callbacks[t.id].reject(t);
                                    break;
                                 default:
                                    console.error('THREE.DRACOLoader: Unexpected message, "' + t.type + '"')
                              }
                           }, r.workerPool.push(n)
                        } else r.workerPool.sort((function (a, b) {
                           return a._taskLoad > b._taskLoad ? -1 : 1
                        }));
                        var o = r.workerPool[r.workerPool.length - 1];
                        return o._taskCosts[e] = t, o._taskLoad += t, o
                     }))
                  }
               }, {
                  key: "_releaseTask",
                  value: function (e, t) {
                     e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                  }
               }, {
                  key: "debug",
                  value: function () {
                     console.log("Task load: ", this.workerPool.map((function (e) {
                        return e._taskLoad
                     })))
                  }
               }, {
                  key: "dispose",
                  value: function () {
                     for (var i = 0; i < this.workerPool.length; ++i) this.workerPool[i].terminate();
                     return this.workerPool.length = 0, this
                  }
               }]), r
            }(d.E);

         function Re() {
            var e, t;

            function r(e, t, r, n, o, c) {
               var l = c.num_components(),
                  d = r.num_points() * l,
                  m = d * o.BYTES_PER_ELEMENT,
                  f = function (e, t) {
                     switch (t) {
                        case Float32Array:
                           return e.DT_FLOAT32;
                        case Int8Array:
                           return e.DT_INT8;
                        case Int16Array:
                           return e.DT_INT16;
                        case Int32Array:
                           return e.DT_INT32;
                        case Uint8Array:
                           return e.DT_UINT8;
                        case Uint16Array:
                           return e.DT_UINT16;
                        case Uint32Array:
                           return e.DT_UINT32
                     }
                  }(e, o),
                  h = e._malloc(m);
               t.GetAttributeDataArrayForAllPoints(r, c, f, m, h);
               var v = new o(e.HEAPF32.buffer, h, d).slice();
               return e._free(h), {
                  name: n,
                  array: v,
                  itemSize: l
               }
            }
            onmessage = function (n) {
               var o = n.data;
               switch (o.type) {
                  case "init":
                     e = o.decoderConfig, t = new Promise((function (t) {
                        e.onModuleLoaded = function (e) {
                           t({
                              draco: e
                           })
                        }, DracoDecoderModule(e)
                     }));
                     break;
                  case "decode":
                     var c = o.buffer,
                        l = o.taskConfig;
                     t.then((function (e) {
                        var t = e.draco,
                           n = new t.Decoder,
                           d = new t.DecoderBuffer;
                        d.Init(new Int8Array(c), c.byteLength);
                        try {
                           var m = function (e, t, n, o) {
                                 var c, l, d = o.attributeIDs,
                                    m = o.attributeTypes,
                                    f = t.GetEncodedGeometryType(n);
                                 if (f === e.TRIANGULAR_MESH) c = new e.Mesh, l = t.DecodeBufferToMesh(n, c);
                                 else {
                                    if (f !== e.POINT_CLOUD) throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                                    c = new e.PointCloud, l = t.DecodeBufferToPointCloud(n, c)
                                 }
                                 if (!l.ok() || 0 === c.ptr) throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
                                 var h = {
                                    index: null,
                                    attributes: []
                                 };
                                 for (var v in d) {
                                    var w = self[m[v]],
                                       y = void 0,
                                       _ = void 0;
                                    if (o.useUniqueIDs) _ = d[v], y = t.GetAttributeByUniqueId(c, _);
                                    else {
                                       if (-1 === (_ = t.GetAttributeId(c, e[d[v]]))) continue;
                                       y = t.GetAttribute(c, _)
                                    }
                                    h.attributes.push(r(e, t, c, v, w, y))
                                 }
                                 f === e.TRIANGULAR_MESH && (h.index = function (e, t, r) {
                                    var n = 3 * r.num_faces(),
                                       o = 4 * n,
                                       c = e._malloc(o);
                                    t.GetTrianglesUInt32Array(r, o, c);
                                    var l = new Uint32Array(e.HEAPF32.buffer, c, n).slice();
                                    return e._free(c), {
                                       array: l,
                                       itemSize: 1
                                    }
                                 }(e, t, c));
                                 return e.destroy(c), h
                              }(t, n, d, l),
                              f = m.attributes.map((function (e) {
                                 return e.array.buffer
                              }));
                           m.index && f.push(m.index.array.buffer), self.postMessage({
                              type: "decode",
                              id: o.id,
                              geometry: m
                           }, f)
                        } catch (e) {
                           console.error(e), self.postMessage({
                              type: "error",
                              id: o.id,
                              error: e.message
                           })
                        } finally {
                           t.destroy(d), t.destroy(n)
                        }
                     }))
               }
            }
         }
         var Se, Le, Ee = r(477),
            Ne = r(501),
            Oe = r(478),
            Pe = r(471),
            De = r(472),
            He = r(57),
            ze = r(29),
            Ge = "/models/amsterdam.glb";
         (Se = new je).setDecoderPath("/js/libs/draco/"), (Le = new k).setDRACOLoader(Se);
         var Ue = Object(He.a)({
               name: "AmsterdamThree",
               data: function () {
                  return {
                     scene: null,
                     renderer: null,
                     camera: null,
                     controls: null,
                     isPlaying: !0,
                     composer: null,
                     material: null,
                     width: 0,
                     height: 0,
                     addObjects: null,
                     initPost: null,
                     render: null,
                     setup: null,
                     resize: null,
                     mouseMove: null,
                     mouseX: 0,
                     mouseY: 0,
                     animationFrameId: 0,
                     observer: null
                  }
               },
               created: function () {
                  Le.loadAsync(Ge)
               },
               mounted: function () {
                  var e = this,
                     t = this.$refs.wrapper;
                  this.initPost = function () {
                     e.composer = new Ne.a(e.renderer), e.composer.addPass(new Oe.a(e.scene, e.camera));
                     var t = new Pe.a(De.default);
                     t.uniforms.scale.value = 1, e.composer.addPass(t)
                  }, this.resize = function () {
                     e.width = (null == t ? void 0 : t.offsetWidth) || 0, e.height = (null == t ? void 0 : t.offsetHeight) || 0, e.composer.setSize(e.width, e.height), e.renderer.setSize(e.width, e.height), e.camera.aspect = e.width / e.height, e.camera.updateProjectionMatrix(), window.innerWidth, window.innerWidth, e.controls.target = new d.vb(0, 0, 0)
                  }, this.mouseMove = function (t) {
                     window.innerWidth >= 1024 && (e.mouseX = t.clientX / (window.innerWidth / 2) - 1, e.mouseY = -t.clientY / (window.innerHeight / 2) + 1, o.a.timeline().to(e.scene.position, {
                        x: -e.mouseX / 100,
                        z: e.mouseY / 100,
                        duration: 4,
                        ease: "expo.out"
                     }))
                  }, this.setup = function () {
                     window.addEventListener("resize", e.resize), window.addEventListener("mousemove", l()(e.mouseMove, 0)), e.observer = new IntersectionObserver((function (t) {
                        e.isPlaying = t[0].isIntersecting, e.isPlaying && e.render()
                     })), e.observer.observe(t)
                  }, this.addObjects = function () {
                     var t = new d.X(9672440, .6, 0);
                     t.position.set(80, 30, -50), e.scene.add(t), Le.loadAsync(Ge).then((function (t) {
                        t.scene.traverse((function (e) {
                           e.isMesh && (e.material.color = new d.h(12812543))
                        })), t.scene.position.set(0, 0, 0), t.scene.scale.set(.1, .1, .1), e.scene.add(t.scene)
                     }))
                  }, this.render = function () {
                     e.isPlaying && (e.animationFrameId = requestAnimationFrame(e.render), e.composer.render())
                  }, this.scene = new d.fb, this.renderer = new d.Ab({
                     antialias: !1
                  }), this.renderer.setPixelRatio(Math.min(.8 * window.devicePixelRatio)), this.renderer.setClearColor(0, 1), this.renderer.physicallyCorrectLights = !1, this.renderer.outputEncoding = d.Bb, this.camera = new d.V(70, window.innerWidth / window.innerHeight, .001, 1e3), this.camera.position.set(0, .6, .25), this.scene.rotation.set(-.3, -2, 0), ze.a.$on("scroll", (function (t) {
                     if ("object" === Object(n.a)(t.currentElements.AmsterdamParent)) {
                        var progress = t.currentElements.AmsterdamParent.progress;
                        window.innerWidth >= 1024 ? (e.scene.rotation.x = -.3 - progress / 3, e.scene.rotation.y = -2 - progress / .32, e.camera.position.y = .6 - progress / 4, e.camera.position.z = .25 + progress / 4) : (e.scene.rotation.x = -.3 - progress / 4, e.scene.rotation.y = -2 - progress / 1, e.camera.position.y = .6 - progress / 10, e.camera.position.z = .25 + progress / 4)
                     }
                  })), this.controls = new Ee.a(this.camera, this.renderer.domElement), null == t || t.appendChild(this.renderer.domElement), this.addObjects(), this.initPost(), this.resize(), -1 === window.navigator.userAgent.indexOf("Lighthouse") ? (this.render(), this.setup()) : this.composer.render()
               },
               beforeDestroy: function () {
                  var e;
                  this.isPlaying = !1, cancelAnimationFrame(this.animationFrameId), null === (e = this.observer) || void 0 === e || e.disconnect(), this.controls.dispose(), this.renderer.dispose(), this.renderer.forceContextLoss(), window.removeEventListener("resize", this.resize)
               }
            }),
            Ze = (r(479), r(14)),
            component = Object(Ze.a)(Ue, (function () {
               var e = this._self._c;
               this._self._setupProxy;
               return e("div", {
                  ref: "wrapper",
                  staticClass: "amsterdam-three"
               })
            }), [], !1, null, null, null);
         t.default = component.exports
      },
      512: function (e, t, r) {
         "use strict";
         r(474)
      },
      513: function (e, t, r) {
         var n = r(27),
            o = r(158),
            c = r(236),
            l = n(!1),
            d = o(c);
         l.push([e.i, ".c-about-welcome[data-v-4a049f48]{position:relative;z-index:2;padding-bottom:3rem}.c-about-welcome .c-section_bg[data-v-4a049f48]{position:absolute;z-index:0;top:0%;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.c-about-welcome .c-section_bg img[data-v-4a049f48]{position:absolute;top:auto;left:auto;right:0;bottom:auto;width:200%;object-fit:contain}.c-about-welcome .c-section_bg img[data-v-4a049f48]:nth-child(1){opacity:.6;animation:blurs-4a049f48 60s linear infinite;animation-play-state:running;will-change:transform}.c-about-welcome .c-section_bg img[data-v-4a049f48]:nth-child(2){top:-20%;left:-10%;opacity:.6;animation:blurs-4a049f48 40s linear infinite reverse;animation-delay:-5s;animation-play-state:running;will-change:transform}.c-about-welcome .c-section_bg span[data-v-4a049f48]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:url(" + d + ");background-repeat:repeat;transform:translateZ(0)}@keyframes blurs-4a049f48{0%{opacity:.6;transform:rotate(0deg) scale(1, 0.8)}50%{opacity:.2;transform:rotate(180deg) scale(0.25, 1)}100%{opacity:.6;transform:rotate(359.99deg) scale(1, 0.8)}}.c-about-welcome .c-about-welcome_container[data-v-4a049f48]{position:relative;height:100%;display:flex;flex-direction:column}.c-about-welcome .c-about-welcome_container .c-about-welcome_title[data-v-4a049f48]{margin-top:8rem}.c-about-welcome .c-about-welcome_container .c-about-welcome_title .c-about-welcome_title-row[data-v-4a049f48]{overflow:hidden}.c-about-welcome .c-about-welcome_container .c-about-welcome_title .c-about-welcome_title-row span[data-v-4a049f48]{display:block;transform:translate(0, -100%);transition:transform .45s cubic-bezier(var(--f-cubic));transition-delay:.15s}.c-about-welcome .c-about-welcome_container .c-about-welcome_title.is-inview .c-about-welcome_title-row span[data-v-4a049f48]{transform:translateZ(0)}.c-about-welcome .c-about-welcome_container .c-about-welcome_title.is-inview .c-about-welcome_title-row span span label[data-v-4a049f48]{animation-play-state:running}.c-about-welcome .c-about-welcome_container .c-about-welcome_subline[data-v-4a049f48]{margin-top:2.5rem;width:80%;max-width:24rem}.c-about-welcome .c-about-welcome_container .scroll[data-v-4a049f48]{display:none}@media(min-width: 1024px){.c-about-welcome[data-v-4a049f48]{height:100vh;min-height:900px;padding-bottom:0;margin-bottom:-1%}.c-about-welcome .c-section_bg img[data-v-4a049f48]{width:80%}.c-about-welcome .c-section_bg img[data-v-4a049f48]:nth-child(2){width:40%}.c-about-welcome .c-about-welcome_container .c-about-welcome_title[data-v-4a049f48]{margin-top:11rem}.c-about-welcome .c-about-welcome_container .c-about-welcome_title .c-about-welcome_title-row[data-v-4a049f48]:nth-child(3){margin-left:9.23%}.c-about-welcome .c-about-welcome_container .c-about-welcome_subline[data-v-4a049f48]{margin-top:5rem;margin-left:50.7%;width:32.39%}.c-about-welcome .c-about-welcome_container .scroll[data-v-4a049f48]{display:block;margin-top:auto;margin-left:8.45%;margin-bottom:1.15rem;display:inline-flex;align-items:center;transition-delay:.6s}.c-about-welcome .c-about-welcome_container .scroll>span[data-v-4a049f48]{display:inline-block}.c-about-welcome .c-about-welcome_container .scroll .icon-arrow[data-v-4a049f48]{width:1rem;margin-left:.5rem}}html.page-leave .c-about-welcome .c-about-welcome_container .c-about-welcome_title .c-about-welcome_title-row span[data-v-4a049f48]{transform:translate(0, -100%);transition:transform .45s cubic-bezier(var(--f-cubic));transition-delay:0s}html.page-leave .c-about-welcome .c-about-welcome_container .scroll[data-v-4a049f48]{transition-delay:0s}", ""]), e.exports = l
      },
      514: function (e, t, r) {
         "use strict";
         r(475)
      },
      515: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, '.c-amsterdam[data-v-39e987be]{position:relative}.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]{position:relatibe;z-index:0;height:80vw}.c-amsterdam .c-amsterdam_ab-wrap .amsterdam-three[data-v-39e987be]{height:100%}.c-amsterdam .c-amsterdam_container[data-v-39e987be]{position:relative;z-index:3}.c-amsterdam .c-amsterdam_container .c-amsterdam_body[data-v-39e987be]{margin-top:4rem}.c-amsterdam .c-amsterdam_container .c-amsterdam_body .-indent[data-v-39e987be]{margin-bottom:3rem;max-width:24rem;max-width:40rem}.c-amsterdam .c-amsterdam_container .c-amsterdam_body p[data-v-39e987be]:nth-child(2){width:80%;max-width:24rem}.c-amsterdam .c-amsterdam_container .c-amsterdam_footer[data-v-39e987be]{position:relative;margin:8rem auto 0;display:flex;justify-content:space-between}.c-amsterdam .c-amsterdam_container .c-amsterdam_footer .blur-narrow[data-v-39e987be]{position:absolute;left:0;right:0;top:-8rem;width:40%;max-width:20rem;margin:0 auto}.c-amsterdam .c-amsterdam_container .c-amsterdam_footer p[data-v-39e987be]{position:relative;width:41.46%}@media(min-width: 1024px){.c-amsterdam[data-v-39e987be]{padding-top:0%;padding-bottom:10%;min-height:200vh;display:flex;align-items:flex-end}.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]{position:absolute;top:0;left:0;bottom:10%;width:100%;height:auto}.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]::before,.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]::after{content:"";position:absolute;z-index:1;left:0;width:100%;height:40rem;height:80vh;transform:translateZ(0)}.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]::before{top:0;background:linear-gradient(180deg, rgba(var(--c-black--rgb), 1), rgba(var(--c-black--rgb), 0))}.c-amsterdam .c-amsterdam_ab-wrap[data-v-39e987be]::after{bottom:-1px;background:linear-gradient(0deg, rgba(var(--c-black--rgb), 1), rgba(var(--c-black--rgb), 0))}.c-amsterdam .c-amsterdam_ab-wrap span[data-v-39e987be]{position:absolute;z-index:1;top:0;left:0;width:50%;height:100%;background:linear-gradient(90deg, rgba(var(--c-black--rgb), 1), rgba(var(--c-black--rgb), 0))}.c-amsterdam .c-amsterdam_ab-wrap .amsterdam-three[data-v-39e987be]{height:100vh;height:calc(var(--vh, 1vh)*100);min-height:50vw}.c-amsterdam .c-amsterdam_container .c-amsterdam_body[data-v-39e987be]{margin-top:auto;width:40.84%;margin-left:8.45%}.c-amsterdam .c-amsterdam_container .c-amsterdam_body .-indent[data-v-39e987be]{max-width:initial}.c-amsterdam .c-amsterdam_container .c-amsterdam_body .-indent[data-v-39e987be]::before{width:20.689%}.c-amsterdam .c-amsterdam_container .c-amsterdam_body p[data-v-39e987be]:nth-child(2){width:86.95%;max-width:initial}.c-amsterdam .c-amsterdam_container .c-amsterdam_footer[data-v-39e987be]{width:57.746%;margin:17% auto 0}.c-amsterdam .c-amsterdam_container .c-amsterdam_footer .blur-narrow[data-v-39e987be]{width:36.585%;max-width:initial}}', ""]), e.exports = n
      },
      519: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NDIgODQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NDIgODQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTY0LjgzOTgiIHkxPSI0ODAuMTk1NyIgeDI9Ijk2NC44Mzk4IiB5Mj0iNDc5Ljg0MjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoODQwIDAgMCAtODQwIC04MTAwNDQuMTI1IDQwMzQ4OC43ODEyKSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQzM4MEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjRBREYyO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQyMS4zIiBjeT0iNDIxLjMiIHI9IjQyMCIvPgo8L3N2Zz4K"
      },
      520: function (e, t, r) {
         "use strict";
         r(481)
      },
      521: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, '.c-about[data-v-5d48e891]{margin-top:8rem;position:relative}.c-about .blur-wide[data-v-5d48e891]{position:absolute;top:-2rem;left:0;right:0;width:80%;max-width:20rem;margin:0 auto;overflow:hidden}.c-about .blur-wide img[data-v-5d48e891]{transform:rotate(calc(var(--s-progress) * 180deg))}.c-about .blur-narrow[data-v-5d48e891]{position:absolute;top:-4rem;width:40%;max-width:12rem;left:20%}.c-about .c-about_container[data-v-5d48e891]{position:relative}.c-about .c-about_container .c-about_title[data-v-5d48e891]{margin-bottom:2.5rem;margin-left:1.5rem;margin-right:1.5rem}.c-about .c-about_container .c-about_body[data-v-5d48e891]{margin-left:1.5rem;margin-right:1.5rem;max-width:40rem}.c-about .c-about_container .c-about_body .c-about_quote[data-v-5d48e891]{margin-top:.5rem;text-align:right}.c-about .c-about_container .c-about_body .c-about_quote p[data-v-5d48e891]{position:relative;text-align:left}.c-about .c-about_container .c-about_body .c-about_quote p .brackets[data-v-5d48e891]{position:absolute;top:-0.5rem;left:0;display:flex}.c-about .c-about_container .c-about_body .c-about_quote p .brackets[data-v-5d48e891]::before,.c-about .c-about_container .c-about_body .c-about_quote p .brackets[data-v-5d48e891]::after{content:"";display:block;margin-right:.6rem;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.c-about .c-about_container .c-about_body .c-about_quote p .brackets[data-v-5d48e891]:nth-child(2){top:100%;left:100%}.c-about .c-about_container .c-about_body .c-about_quote .c-about_quote-owner[data-v-5d48e891]{margin-top:1rem;display:inline-flex;align-items:center}.c-about .c-about_container .c-about_body .c-about_quote .c-about_quote-owner .icon-arrow[data-v-5d48e891]{width:1rem;margin-left:.5rem}.c-about .c-about_container .c-about_body .c-about_description[data-v-5d48e891]{margin-top:2.5rem;width:80%}@media(min-width: 1024px){.c-about[data-v-5d48e891]{margin-top:15rem}.c-about .blur-wide[data-v-5d48e891]{top:-9rem;width:58.333%;max-width:42rem}.c-about .blur-wide img[data-v-5d48e891]{opacity:.4}.c-about .blur-narrow[data-v-5d48e891]{width:27.777%;max-width:24rem;left:27.777%}.c-about .c-about_container[data-v-5d48e891]{display:flex}.c-about .c-about_container .c-about_title[data-v-5d48e891]{width:50%;margin-left:8.45%;margin-right:0}.c-about .c-about_container .c-about_title[data-v-5d48e891] :v-deep(.-indent)::before{width:16.666%}.c-about .c-about_container .c-about_body[data-v-5d48e891]{width:50%;margin-left:0;margin-right:0;max-width:initial}.c-about .c-about_container .c-about_body .c-about_quote p[data-v-5d48e891]::before{width:16.666%}.c-about .c-about_container .c-about_body .c-about_quote p .rhombus[data-v-5d48e891]{top:.25rem}.c-about .c-about_container .c-about_body .c-about_quote a.c-about_quote-owner[data-v-5d48e891]{margin-top:2rem}.c-about .c-about_container .c-about_body .c-about_quote a.c-about_quote-owner figure[data-v-5d48e891]{transform:translateZ(0);transition:transform .3s cubic-bezier(var(--f-cubic));pointer-events:none}.c-about .c-about_container .c-about_body .c-about_quote a.c-about_quote-owner:hover figure[data-v-5d48e891]{transform:translate(0.5rem, -0.5rem)}.c-about .c-about_container .c-about_body .c-about_description[data-v-5d48e891]{margin-top:5.5rem;width:86.95%}}@media(min-width: 1280px){.c-about .c-about_container .c-about_title[data-v-5d48e891]{width:42.25%}.c-about .c-about_container .c-about_title[data-v-5d48e891] :v-deep(.-indent)::before{width:20%}.c-about .c-about_container .c-about_body[data-v-5d48e891]{width:39.43%}.c-about .c-about_container .c-about_body .c-about_quote p[data-v-5d48e891]::before{width:20.689%}}@media(min-width: 1600px){.c-about .c-about_container .c-about_body[data-v-5d48e891]{width:32.39%}.c-about .c-about_container .c-about_body .c-about_quote p[data-v-5d48e891]::before{width:26.086%}}', ""]), e.exports = n
      },
      522: function (e, t, r) {
         "use strict";
         r(482)
      },
      523: function (e, t, r) {
         var n = r(27)(!1);
         n.push([e.i, '.c-work-with[data-v-0d02eefe]{position:relative;margin-top:8rem}.c-work-with .work-with-bg[data-v-0d02eefe]{position:absolute;width:40%;max-width:13rem;bottom:-5rem;right:2.5rem}.c-work-with .work-with-bg figure[data-v-0d02eefe]{width:100%}.c-work-with .work-with-bg figure img[data-v-0d02eefe]{transform:rotate(calc(var(--s-progress) * 180deg))}.c-work-with .work-with-bg figure[data-v-0d02eefe]:nth-child(2){position:absolute;top:0;left:0}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_title[data-v-0d02eefe]{margin-bottom:2.5rem}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description[data-v-0d02eefe]{display:flex}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description .rhombus[data-v-0d02eefe]{width:4rem}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description .rhombus[data-v-0d02eefe]::before{content:"";margin-top:.5rem;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description div[data-v-0d02eefe]{width:80%}@media(min-width: 1024px){.c-work-with[data-v-0d02eefe]{margin-top:17%}.c-work-with .work-with-bg[data-v-0d02eefe]{width:23.63%;max-width:17rem;left:8.45%;right:auto}.c-work-with .c-work-with_container .c-work-with_block[data-v-0d02eefe]{width:40.84%;margin-left:50.7%}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_title .-indent[data-v-0d02eefe]::before{width:20.68%}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description .rhombus[data-v-0d02eefe]{width:20.68%}.c-work-with .c-work-with_container .c-work-with_block .c-work-with_description div[data-v-0d02eefe]{width:68.965%}}', ""]), e.exports = n
      },
      594: function (e, t, r) {
         "use strict";
         r.r(t);
         r(34), r(413);
         var n = [function () {
               var e = this,
                  t = e._self._c;
               return t("div", {
                  staticClass: "c-section_bg",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [t("img", {
                  staticClass: "blur-move-b",
                  attrs: {
                     src: r(473),
                     alt: ""
                  }
               }), e._v(" "), t("img", {
                  staticClass: "blur-move-a",
                  attrs: {
                     src: r(414),
                     alt: ""
                  }
               }), e._v(" "), t("span")])
            }, function () {
               var e = this,
                  t = e._self._c;
               return t("div", {
                  staticClass: "scroll -m -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [t("span", [e._v("Scroll")]), e._v(" "), t("figure", {
                  staticClass: "icon-arrow"
               }, [t("img", {
                  attrs: {
                     src: r(423),
                     alt: ""
                  }
               })])])
            }],
            o = {
               name: "AboutWelcome",
               props: {
                  data: Object
               }
            },
            c = (r(512), r(14)),
            component = Object(c.a)(o, (function () {
               var e, t, r, n = this,
                  o = n._self._c;
               return o("section", {
                  staticClass: "c-section c-about-welcome"
               }, [n._m(0), n._v(" "), o("div", {
                  staticClass: "c-about-welcome_container -w"
               }, [o("h1", {
                  staticClass: "c-about-welcome_title",
                  attrs: {
                     "data-scroll": ""
                  }
               }, n._l(null === (e = n.data) || void 0 === e || null === (t = e.title) || void 0 === t ? void 0 : t.split(/\r?\n/gm), (function (line, i) {
                  return o("div", {
                     key: i,
                     staticClass: "c-about-welcome_title-row"
                  }, [o("span", {
                     staticClass: "-h2 -mid-h3 -m-h4"
                  }, [n._v(n._s(line))])])
               })), 0), n._v(" "), o("div", {
                  staticClass: "c-about-welcome_subline -a-to-bottom",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [n._l(null === (r = n.data) || void 0 === r ? void 0 : r.desctiprion, (function (e, i) {
                  return [o("p", {
                     key: i
                  }, [n._v(n._s(null == e ? void 0 : e.text))])]
               }))], 2), n._v(" "), 
               
              //  -----------------------------------------------------
               o('a', {staticClass: 'logo_medium_link', attrs: {href: 'https://medium.com/@ellariaworld'}}, [
                 o('img', {staticClass: 'logo_medium_img', attrs: {
                    src: '../media/logo_medium_gradient.png'
                 }}),

                 o('span', {staticClass: 'logo_medium_text'}, [n._v("Medium")]),

                 o('figure', {staticClass: 'icon-arrow'}, [
                    o('img', {attrs: {src: '../_index_files/icon-arrow-top-right.d09f690.svg', alt: ''}})
                 ])
               ]), n._v(' '),
              //  -----------------------------------------------------
               
               
               n._m(1)])])
            }), n, !1, null, "4a049f48", null);
         t.default = component.exports
      },
      595: function (e, t, r) {
         "use strict";
         r.r(t);
         var n = [function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "blur-image blur-narrow",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "2"
                  }
               }, [e("img", {
                  staticClass: "-blur-1",
                  attrs: {
                     src: r(415),
                     alt: ""
                  }
               })])
            }],
            o = {
               name: "Amsterdam",
               props: {
                  data: Object
               },
               methods: {
                  heightCor: function () {
                     var e = .01 * window.innerHeight;
                     document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                  }
               },
               mounted: function () {
                  var e = .01 * window.innerHeight;
                  document.documentElement.style.setProperty("--vh", "".concat(e, "px")), window.addEventListener("resize", this.heightCor)
               },
               beforeUnmount: function () {
                  window.removeEventListener("resize", this.heightCor)
               }
            },
            c = (r(514), r(14)),
            component = Object(c.a)(o, (function () {
               var e, t, r, n, o = this,
                  c = o._self._c;
               return c("section", {
                  staticClass: "c-section c-amsterdam"
               }, [c("div", {
                  staticClass: "c-amsterdam_ab-wrap",
                  attrs: {
                     id: "c-ab",
                     "data-scroll": "",
                     "data-scroll-id": "AmsterdamParent"
                  }
               }, [c("client-only", [c("AmsterdamThree", {
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-sticky": "",
                     "data-scroll-target": "#c-ab"
                  }
               })], 1), o._v(" "), c("span")], 1), o._v(" "), c("div", {
                  staticClass: "c-amsterdam_container -w"
               }, [c("div", {
                  staticClass: "c-amsterdam_body"
               }, [c("p", {
                  staticClass: "-indent -h6 -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [c("span", {
                  staticClass: "rhombus"
               }), o._v(o._s(null === (e = o.data) || void 0 === e ? void 0 : e.header))]), o._v(" "), c("p", {
                  staticClass: "-a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [o._v(o._s(null === (t = o.data) || void 0 === t ? void 0 : t.text))])]), o._v(" "), c("div", {
                  staticClass: "c-amsterdam_footer"
               }, [o._m(0), o._v(" "), c("p", {
                  staticClass: "-a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [o._v(o._s(null === (r = o.data) || void 0 === r ? void 0 : r.left_text))]), o._v(" "), c("p", {
                  staticClass: "-a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [o._v(o._s(null === (n = o.data) || void 0 === n ? void 0 : n.right_text))])])])])
            }), n, !1, null, "39e987be", null);
         t.default = component.exports;
         installComponents(component, {
            AmsterdamThree: r(509).default
         })
      },
      596: function (e, t, r) {
         "use strict";
         r.r(t);
         r(235);
         var n = [function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "blur-image blur-wide",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "-1",
                     "data-scroll-id": "progressb"
                  }
               }, [e("img", {
                  attrs: {
                     src: r(519),
                     alt: ""
                  }
               })])
            }, function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "blur-image blur-narrow",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "2"
                  }
               }, [e("img", {
                  staticClass: "-blur-1",
                  attrs: {
                     src: r(415),
                     alt: ""
                  }
               })])
            }, function () {
               var e = this._self._c;
               return e("figure", {
                  staticClass: "icon-arrow"
               }, [e("img", {
                  attrs: {
                     src: r(417),
                     alt: ""
                  }
               })])
            }],
            o = (r(59), r(126), r(16), r(34), r(413), {
               name: "Behind",
               props: {
                  data: Object
               },
               computed: {
                  title: function () {
                     var e, t, r, n = null === (e = this.data) || void 0 === e || null === (t = e.title) || void 0 === t || null === (r = t.map((function (e) {
                        return "italic_text" === e.acf_fc_layout ? (text = e.italic_text, '<span class="-i">'.concat(text, "</span>")) : e.text;
                        var text
                     }))) || void 0 === r ? void 0 : r.join("");
                     return null == n ? void 0 : n.split(/\r?\n/gm).reduce((function (e, t, i, r) {
                        return e + (i === r.length - 1 ? '<div class="c-about_title-row -h4 -indent">'.concat(t, "</div>") : function (text) {
                           return '<div class="c-about_title-row -h4">'.concat(text, "</div>")
                        }(t))
                     }), "")
                  }
               }
            }),
            c = (r(520), r(14)),
            component = Object(c.a)(o, (function () {
               var e, t, r, n, o, c, l, d, m, f, h, v, w = this,
                  y = w._self._c;
               return y("section", {
                  staticClass: "c-section c-about"
               }, [w._m(0), w._v(" "), w._m(1), w._v(" "), y("div", {
                  staticClass: "c-about_container -w"
               }, [y("div", {
                  staticClass: "c-about_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  },
                  domProps: {
                     innerHTML: w._s(w.title)
                  }
               }), w._v(" "), y("div", {
                  staticClass: "c-about_body"
               }, [y("div", {
                  staticClass: "c-about_quote -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [y("p", {
                  staticClass: "-indent -h6"
               }, [y("span", {
                  staticClass: "brackets"
               }), y("span", {
                  staticClass: "brackets"
               }), w._v(w._s(null === (e = w.data) || void 0 === e || null === (t = e.quote) || void 0 === t ? void 0 : t.text))]), w._v(" "), y("a", {
                  staticClass: "c-about_quote-owner",
                  attrs: {
                     href: null === (r = w.data) || void 0 === r || null === (n = r.quote) || void 0 === n || null === (o = n.link) || void 0 === o ? void 0 : o.url,
                     target: null === (c = w.data) || void 0 === c || null === (l = c.quote) || void 0 === l || null === (d = l.link) || void 0 === d ? void 0 : d.target
                  }
               }, [y("span", [w._v(w._s(null === (m = w.data) || void 0 === m || null === (f = m.quote) || void 0 === f || null === (h = f.link) || void 0 === h ? void 0 : h.title))]), w._v(" "), w._m(2)])]), w._v(" "), y("div", {
                  staticClass: "c-about_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [y("p", [w._v(w._s(null === (v = w.data) || void 0 === v ? void 0 : v.text))])])])])])
            }), n, !1, null, "5d48e891", null);
         t.default = component.exports
      },
      597: function (e, t, r) {
         "use strict";
         r.r(t);
         var n = [function () {
               var e = this._self._c;
               return e("div", {
                  staticClass: "work-with-bg",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "1"
                  }
               }, [e("figure", {
                  staticClass: "blur-image blur-narrow",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [e("img", {
                  staticClass: "-blur-1",
                  attrs: {
                     src: r(415),
                     alt: ""
                  }
               })]), this._v(" "), e("figure", {
                  staticClass: "blur-image blur-narrow",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-id": "progress"
                  }
               }, [e("img", {
                  attrs: {
                     src: r(426),
                     alt: ""
                  }
               })])])
            }],
            o = {
               name: "WorkWith",
               props: {
                  data: Object
               }
            },
            c = (r(522), r(14)),
            component = Object(c.a)(o, (function () {
               var e, t, r = this,
                  n = r._self._c;
               return n("section", {
                  staticClass: "c-section c-work-with"
               }, [r._m(0), r._v(" "), n("div", {
                  staticClass: "c-work-with_container -w"
               }, [n("div", {
                  staticClass: "c-work-with_block"
               }, [n("div", {
                  staticClass: "c-work-with_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [r._l(null === (e = r.data) || void 0 === e ? void 0 : e.title, (function (e, i) {
                  var t;
                  return [n("div", {
                     key: i,
                     staticClass: "c-work-with_title-row -h4",
                     class: i === (null === (t = r.data) || void 0 === t ? void 0 : t.title.length) - 1 ? "-indent" : ""
                  }, [r._v(r._s(e.text))])]
               }))], 2), r._v(" "), n("div", {
                  staticClass: "c-work-with_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [n("span", {
                  staticClass: "rhombus"
               }), r._v(" "), n("div", [r._l(null === (t = r.data) || void 0 === t ? void 0 : t.text, (function (e, i) {
                  return [n("p", {
                     key: i
                  }, [r._v(r._s(e.text))])]
               }))], 2)])])])])
            }), n, !1, null, "0d02eefe", null);
         t.default = component.exports
      },
      670: function (e, t, r) {
         "use strict";
         r.r(t);
         r(47), r(33), r(49), r(16), r(61), r(40), r(62);
         var n = r(24),
            o = r(13),
            c = (r(34), r(69), r(71), r(60), r(160)),
            l = r(57),
            meta = r(422);

         function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
               var r = Object.getOwnPropertySymbols(object);
               e && (r = r.filter((function (e) {
                  return Object.getOwnPropertyDescriptor(object, e).enumerable
               }))), t.push.apply(t, r)
            }
            return t
         }

         function m(e) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {};
               i % 2 ? d(Object(source), !0).forEach((function (t) {
                  Object(n.a)(e, t, source[t])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
               }))
            }
            return e
         }
         var f = {
               name: "About",
               components: {
                  LazyHydrate: c.a
               },
               asyncData: function (e) {
                  return Object(o.a)(regeneratorRuntime.mark((function t() {
                     var r, n, o;
                     return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                           case 0:
                              return r = e.store, n = "/wp-json/api/page/about", o = "/wp-json/api/options", t.next = 5, r.dispatch("fetchData", {
                                 apiRoute: n
                              });
                           case 5:
                              return t.abrupt("return", {
                                 data: Object(l.c)(m({}, r.state.data[n])),
                                 globalData: r.state.data[o]
                              });
                           case 6:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               head: function () {
                  var e, t, r, n = Object(meta.c)(null === (e = this.data.value) || void 0 === e ? void 0 : e.seo_meta, meta.d, {}),
                     o = Object(meta.c)(null === (t = this.globalData) || void 0 === t ? void 0 : t.seo_meta, meta.d, {});
                  return Object(meta.b)(m(m(m(m({}, meta.a), o), {}, {
                     title: null === (r = this.data.value) || void 0 === r ? void 0 : r.post_title
                  }, n), {}, {
                     url: ("".concat(meta.a.url || "", "/").concat(this.$route.path || "") || "").replace(/\/{2,}/g, "/")
                  }))
               }
            },
            h = r(14),
            component = Object(h.a)(f, (function () {
               var e, t, n, o, c = this,
                  l = c._self._c;
               return l("LocomotiveScroll", {
                  staticClass: "scroll-wrap",
                  attrs: {
                     "getted-options": {
                        smooth: !0,
                        direction: "vertical",
                        getDirection: !0,
                        smartphone: {
                           smooth: !1,
                           direction: "vertical"
                        },
                        tablet: {
                           smooth: !1,
                           direction: "vertical"
                        }
                     }
                  }
               }, [l("div", {
                  staticClass: "page-content"
               }, [l("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [l("AboutWelcome", {
                  attrs: {
                     data: null === (e = c.data.value) || void 0 === e ? void 0 : {
                       "title": window.first_block_title_1 + window.first_block_title_2 + window.first_block_title_3,
                       "desctiprion": [
                         {
                           "text": window.first_block_description_1
                         },
                         {
                           "text": window.first_block_description_2
                         }
                       ]
                     }
                  }
               })], 1), c._v(" "), 


              //  --------------------------------
              //  l("div", {staticClass: 'reeeed'}, 1)
              //  ---------------------------------
               
               
               
               l("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [l("Amsterdam", {
                  attrs: {
                     data: null === (t = c.data.value) || void 0 === t ? void 0 : {
                       "header": window.amsterdam_desc_1,
                       "text": window.amsterdam_desc_2,
                       "left_text": window.amsterdam_desc_3,
                       "right_text": window.amsterdam_desc_4
                     }
                  }
               })], 1), c._v(" "), l("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [l("Behind", {
                  attrs: {
                     data: null === (n = c.data.value) || void 0 === n ? void 0 : {
                       "title": [
                         {
                           "acf_fc_layout": "text",
                           "text": window.behind_title_1 + '\n' + window.behind_title_2
                         },
                         {
                           "acf_fc_layout": "italic_text",
                           "italic_text": window.behind_title_3
                         }
                       ],
                       "quote": {
                         "text": window.quote_text,
                         "link": {
                           "title": window.quote_author_text,
                           "url": "https://ellaria.world",
                           "target": "_blank"
                         }
                       },
                       "text": window.behind_bottom_text
                     }
                  }
               })], 1), c._v(" "), l("LazyHydrate", {
                  attrs: {
                     "when-visible": ""
                  }
               }, [l("WorkWith", {
                  attrs: {
                     data: null === (o = c.data.value) || void 0 === o ? void 0 : {
                       "title": [
                         {
                           "text": window.working_with_title_1
                         },
                         {
                           "text": window.working_with_title_2
                         }
                       ],
                       "text": [
                         {
                           "text": window.working_with_text_1
                         },
                         {
                           "text": window.working_with_text_2
                         }
                       ]
                     }
                  }
               })], 1)], 1), c._v(" "), l("figure", {
                  staticClass: "h-menu-blur",
                  attrs: {
                     "data-scroll": "",
                     "data-scroll-speed": "-9.5",
                     "data-scroll-position": "top",
                     "data-scroll-offset": "0,-100%"
                  }
               }, [l("img", {
                  staticClass: "-blur-025",
                  attrs: {
                     src: r(430),
                     alt: ""
                  }
               })]), c._v(" "), l("Footer")], 1)
            }), [], !1, null, "4484db9a", null);
         t.default = component.exports;
         installComponents(component, {
            AboutWelcome: r(594).default,
            Amsterdam: r(595).default,
            Behind: r(596).default,
            WorkWith: r(597).default,
            Footer: r(428).default,
            LocomotiveScroll: r(161).default
         })
      }
   }
]);