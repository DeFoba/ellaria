(window.webpackJsonp = window.webpackJsonp || []).push([
    [37, 13, 19, 25, 29, 30], {
       413: function (t, e, o) {
          "use strict";
          var r = o(97),
             c = o(5),
             n = o(7),
             d = o(128),
             l = o(155),
             v = o(4),
             f = o(38),
             m = o(39),
             I = o(157),
             h = o(82),
             _ = o(22),
             w = o(70),
             y = o(154),
             M = o(129),
             C = o(127),
             j = o(156),
             x = o(6),
             z = j.UNSUPPORTED_Y,
             Z = 4294967295,
             N = Math.min,
             k = [].push,
             H = n(/./.exec),
             D = n(k),
             L = n("".slice),
             G = !x((function () {
                var t = /(?:)/,
                   e = t.exec;
                t.exec = function () {
                   return e.apply(this, arguments)
                };
                var o = "ab".split(t);
                return 2 !== o.length || "a" !== o[0] || "b" !== o[1]
             }));
          d("split", (function (t, e, o) {
             var n;
             return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, o) {
                var n = _(f(this)),
                   d = void 0 === o ? Z : o >>> 0;
                if (0 === d) return [];
                if (void 0 === t) return [n];
                if (!l(t)) return c(e, n, t, d);
                for (var v, m, I, output = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), w = 0, M = new RegExp(t.source, h + "g");
                   (v = c(C, M, n)) && !((m = M.lastIndex) > w && (D(output, L(n, w, v.index)), v.length > 1 && v.index < n.length && r(k, output, y(v, 1)), I = v[0].length, w = m, output.length >= d));) M.lastIndex === v.index && M.lastIndex++;
                return w === n.length ? !I && H(M, "") || D(output, "") : D(output, L(n, w)), output.length > d ? y(output, 0, d) : output
             } : "0".split(void 0, 0).length ? function (t, o) {
                return void 0 === t && 0 === o ? [] : c(e, this, t, o)
             } : e, [function (e, o) {
                var r = f(this),
                   d = null == e ? void 0 : w(e, t);
                return d ? c(d, e, r, o) : c(n, _(r), e, o)
             }, function (t, r) {
                var c = v(this),
                   d = _(t),
                   l = o(n, c, d, r, n !== e);
                if (l.done) return l.value;
                var f = m(c, RegExp),
                   w = c.unicode,
                   y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (z ? "g" : "y"),
                   C = new f(z ? "^(?:" + c.source + ")" : c, y),
                   j = void 0 === r ? Z : r >>> 0;
                if (0 === j) return [];
                if (0 === d.length) return null === M(C, d) ? [d] : [];
                for (var p = 0, q = 0, x = []; q < d.length;) {
                   C.lastIndex = z ? 0 : q;
                   var k, H = M(C, z ? L(d, q) : d);
                   if (null === H || (k = N(h(C.lastIndex + (z ? q : 0)), d.length)) === p) q = I(d, q, w);
                   else {
                      if (D(x, L(d, p, q)), x.length === j) return x;
                      for (var i = 1; i <= H.length - 1; i++)
                         if (D(x, H[i]), x.length === j) return x;
                      q = p = k
                   }
                }
                return D(x, L(d, p)), x
             }]
          }), !G, z)
       },
       414: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMzUiIHZpZXdCb3g9IjAgMCAxNDM4IDEwMzUiIHdpZHRoPSIxNDM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1LjQ5Mjk1NCUiIHgyPSI4MC4zMzMzMDIlIiB5MT0iNjcuNDk0NzUyJSIgeTI9IjI3Ljk5OTQ0NCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzMwYThjYyIvPjxzdG9wIG9mZnNldD0iLjM1NjIxNDgzIiBzdG9wLWNvbG9yPSIjMTUwZjQxIi8+PHN0b3Agb2Zmc2V0PSIuNjU5Mjg1NTI5IiBzdG9wLWNvbG9yPSIjNzY2YmQwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjgwYTc4Ii8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJiIiBoZWlnaHQ9IjEzNy43JSIgd2lkdGg9IjEyNSUiIHg9Ii0xMi41JSIgeT0iLTE4LjglIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iNTAiLz48L2ZpbHRlcj48cGF0aCBkPSJtNDY1LjQyMTk4MiA3NzUuNDg1MTUzYy04OS4xNDgwMTMtMTgzLjgzNTQ5Ny00MjcuODQ1Mzg3OC0yMDQuODczMDEtMzI4LjI4NTkyOS0zNDguODk5MDYgOTkuNTU5NDU5LTE0NC4wMjYwNSAxMzMuMDcxMzAzLTEwMC45ODAwNjIgMzg1LjU0ODg4NS0xMDAuOTgwMDYyIDI1Mi40Nzc1ODMgMCA2MjEuNDMzMjIyLTM5Mi4yNjg3MDI3IDUxMS43ODc2NzItMTAwLjk4MDA2Mi0xMDkuNjQ1NTQzIDI5MS4yODg2NCA2NDYuNDg1NzcgODE2LjkwMjgxMSA1Ny41ODgzMiA2NTkuNjA2OTQ0LTU4OC44OTc0NTQtMTU3LjI5NTg2Ni01MzcuNDkwOTM2IDc1LjA4NzczOC02MjYuNjM4OTQ4LTEwOC43NDc3NnoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsdGVyPSJ1cmwoI2IpIi8+PC9zdmc+"
       },
       415: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlLXdpZHRoOjQ7fQo8L3N0eWxlPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2OC4yMzY1IiB5MT0iLTEwNy43NjE1IiB4Mj0iMjY3LjIzODUiIHkyPSItMTA2Ljc2MzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDAwIDAgMCA0MDAgLTEwNjg5NSA0MzEwNSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0MzODBGRiIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzY0QURGMjtzdG9wLW9wYWNpdHk6MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjE5OCIvPgo8L3N2Zz4K"
       },
       416: function (t, e, o) {
          var content = o(419);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [t.i, content, ""]
          ]), content.locals && (t.exports = content.locals);
          (0, o(28).default)("142ed704", content, !0, {
             sourceMap: !1
          })
       },
       418: function (t, e, o) {
          "use strict";
          o(416)
       },
       419: function (t, e, o) {
          var r = o(27)(!1);
          r.push([t.i, '.soc_ul[data-v-6dd519e3]{display:flex}.soc_ul a[data-v-6dd519e3]{display:block;position:relative;padding:.9rem;margin-right:1rem}.soc_ul a[data-v-6dd519e3]::before,.soc_ul a[data-v-6dd519e3]::after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;border:1px solid var(--c-white);box-shadow:inset 0 0 0 1px var(--c-white);border-radius:50%;transform:scale(1);opacity:1;transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.soc_ul a[data-v-6dd519e3]::before{background:var(--c-white);opacity:0;transform:scale(0.25)}.soc_ul a[data-v-6dd519e3] svg{position:relative;z-index:1;width:1.2rem;fill:var(--c-white);transform:scale(1);transition:transform .3s cubic-bezier(var(--f-cubic)),fill .3s cubic-bezier(var(--f-cubic))}@media(min-width: 1024px){.soc_ul a[data-v-6dd519e3]{margin-right:3rem}.soc_ul a[data-v-6dd519e3]:hover::before{opacity:1;transform:scale(1)}.soc_ul a[data-v-6dd519e3]:hover::after{transform:scale(0.5)}.soc_ul a:hover svg[data-v-6dd519e3]{transform:scale(1.25);fill:var(--c-black)}}', ""]), t.exports = r
       },
       421: function (t, e, o) {
          "use strict";
          o.r(e);
          o(235);
          var r = {
                name: "SoMeList",
                props: {
                   socials: Array
                },
                components: {},
                methods: {},
                created: function () {},
                mounted: function () {}
             },
             c = (o(418), o(14)),
             component = Object(c.a)(r, (function () {
                var t = this,
                   e = t._self._c;
                return e("div", {
                   staticClass: "soc_ul"
                }, [t._l(t.socials, (function (o, i) {
                   return [e("a", {
                      key: i,
                      staticClass: "-normilize",
                      attrs: {
                         href: o.link.url,
                         target: o.link.target
                      },
                      domProps: {
                         innerHTML: t._s(o.svg)
                      }
                   })]
                }))], 2)
             }), [], !1, null, "6dd519e3", null);
          e.default = component.exports
       },
       422: function (t, e, o) {
          "use strict";
          (function (t) {
             o.d(e, "a", (function () {
                return meta
             })), o.d(e, "b", (function () {
                return r
             })), o.d(e, "d", (function () {
                return c
             })), o.d(e, "c", (function () {
                return n
             }));
             o(33), o(46), o(16), o(47);
             var meta = {
                   title: "ELLARIA AI — Creative and marketing services",
                   description: "We specialize in creative operations. We act as an extended member of your creative, marketing and production teams. This allows you to scale, expand, improve and enhance your content.",
                   url: t.env.API_URL || "https://ellaria.world",
                   image: "/link-preview.jpg"
                },
                r = function (meta) {
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
                c = function (t, e, o) {
                   return e && (t[o] = e), t
                },
                n = function () {
                   var object = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = arguments.length > 1 ? arguments[1] : void 0,
                      e = arguments.length > 2 ? arguments[2] : void 0;
                   return Object.keys(object).reduce((function (e, o) {
                      return t(e, object[o], o)
                   }), e)
                }
          }).call(this, o(159))
       },
       426: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNDIgMzQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDIgMzQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNzE0LjgzOTgiIHkxPSIyMzAuMDkwNSIgeDI9IjcxNC44Mzk4IiB5Mj0iMjI5Ljg0MjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoODQwIDAgMCAtODQwIC02MDAyOTQuMTI1IDE5MzIzOC43ODEyKSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQzM4MEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjRBREYyO3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3MS4zIiBjeT0iMTcxLjMiIHI9IjE3MCIvPgo8L3N2Zz4K"
       },
       427: function (t, e, o) {
          var content = o(468);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [t.i, content, ""]
          ]), content.locals && (t.exports = content.locals);
          (0, o(28).default)("276f418b", content, !0, {
             sourceMap: !1
          })
       },
       428: function (t, e, o) {
          "use strict";
          o.r(e);
          o(34), o(413);
          var r = [function () {
                var t = this._self._c;
                return t("figure", {
                   staticClass: "blur-image blur-middle",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-speed": "-2",
                      "data-scroll-position": "bottom"
                   }
                }, [t("img", {
                   staticClass: "-blur-1",
                   attrs: {
                      src: o(465),
                      alt: ""
                   }
                })])
             }, function () {
                var t = this._self._c;
                return t("figure", {
                   staticClass: "icon-arrow"
                }, [t("img", {
                   attrs: {
                      src: o(466),
                      alt: ""
                   }
                })])
             }, function () {
                var t = this,
                   e = t._self._c;
                return e("div", {
                   staticClass: "f-foot_brand-touch"
                }, [e("div"), t._v(" "), e("div"), t._v(" "), e("div")])
             }],
             c = (o(16), {
                name: "Footer",
                components: {},
                data: function (t) {
                   return {
                      hover: !1,
                      data: t.$store.state.data["/wp-json/api/options"],
                      year: (new Date).getFullYear()
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
             }),
             n = (o(467), o(14)),
             component = Object(n.a)(c, (function () {
                var t, e, o, r, c, n, d, l, v, f, m, I = this,
                   h = I._self._c;
                return h("footer", {
                   staticClass: "page-footer"
                }, [I._m(0), I._v(" "), h("div", {
                   staticClass: "f-head -w"
                }, [h("div", {
                   staticClass: "f-head_logo"
                }, [h("span", {
                   staticClass: "-a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [I._v(I._s(null === (t = I.data) || void 0 === t || null === (e = t.footer) || void 0 === e ? void 0 : e.title))])]), I._v(" "), h("nav", {
                   staticClass: "f-head_nav",
                   class: {
                      "-hover-nav": I.hover,
                      "-active-nav": I.subIsActive("/faq") || I.subIsActive("/#") || I.subIsActive("/about") || I.subIsActive("/contact")
                   },
                   on: {
                      mouseleave: function (t) {
                         I.hover = !1
                      }
                   }
                }, [h("nuxt-link", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      to: "/about"
                   },
                   nativeOn: {
                      mouseover: function (t) {
                         I.hover = !0
                      }
                   }
                }, [I._v(window.js_text_prevent_override_about)]), I._v(" "), h("nuxt-link", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      to: "/#"
                   },
                   nativeOn: {
                      mouseover: function (t) {
                         I.hover = !0
                      }
                   }
                }, [I._v(window.js_text_prevent_override_work)]), I._v(" "), h("nuxt-link", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      to: "/faq"
                   },
                   nativeOn: {
                      mouseover: function (t) {
                         I.hover = !0
                      }
                   }
                }, [I._v(window.js_text_prevent_override_services)]), I._v(" "), h("nuxt-link", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      to: "/contact"
                   },
                   nativeOn: {
                      mouseover: function (t) {
                         I.hover = !0
                      }
                   }
                }, [I._v(window.js_text_prevent_override_contact)])], 1)]), I._v(" "), h("div", {
                   staticClass: "f-soc -w"
                }, [h("SoMeList", {
                   attrs: {
                      socials: null === (o = I.data) || void 0 === o ? void 0 : o.socials
                   }
                })], 1), I._v(" "), h("div", {
                   staticClass: "f-foot -w",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-repeat": ""
                   }
                }, [h("div", {
                   staticClass: "f-foot_slogan"
                }, [h("span", [I._v(I._s(I.data.footer.slogan))])]), I._v(" "), h("div", {
                   staticClass: "f-foot_address"
                }, [h("div", [I._l(null === (r = I.data) || void 0 === r || null === (c = r.footer) || void 0 === c || null === (n = c.address) || void 0 === n ? void 0 : n.split(/\r?\n/gm), (function (line, i) {
                   return [h("p", {
                      key: i
                   }, [I._v(I._s(line))])]
                }))], 2), I._v(" "), h("span", [I._v("© " + I._s(window.ov_year))])]), I._v(" "), h("div", {
                   staticClass: "f-foot_mail"
                }, [h("p", [I._v(I._s(null === (d = I.data) || void 0 === d || null === (l = d.footer) || void 0 === l ? void 0 : l.mail_text))]), I._v(" "), h("div", [h("span", [I._v(I._s(null === (v = I.data) || void 0 === v || null === (f = v.footer) || void 0 === f ? void 0 : f.mail_under_text))]), I._v(" "), I._m(1)]), I._v(" "), h("EmailButton", {
                   attrs: {
                      mail: null === (m = I.data) || void 0 === m ? void 0 : m.mail
                   }
                })], 1), I._v(" "), I._m(2)])])
             }), r, !1, null, "6f7ae3d8", null);
          e.default = component.exports;
          installComponents(component, {
             SoMeList: o(421).default,
             EmailButton: o(239).default,
             Footer: o(428).default
          })
       },
       430: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQgMTQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDQgMTQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlLXdpZHRoOjQ7fQo8L3N0eWxlPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii00NS42MDgzIiB5MT0iMTkyLjYwODMiIHgyPSItNDYuNjA4MyIgeTI9IjE5MS42MDgzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEyMCAwIDAgLTEyMCA1NjA1IDIzMTI1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQzM4MEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjRBREYyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjcyIiBjeT0iNzIiIHI9IjYwIi8+Cjwvc3ZnPgo="
       },
       465: function (t, e, o) {
          t.exports = o.p + "../_index_files/blur-600x600.08a7d9f.svg"
       },
       466: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjEwIiB5MT0iMCIgeDI9IjEwIiB5Mj0iMTkuMiIvPgo8cG9seWxpbmUgaWQ9IlBhdGgtOCIgY2xhc3M9InN0MCIgcG9pbnRzPSIwLjUsOS44IDEwLDE5LjIgMTkuNSw5LjggIi8+Cjwvc3ZnPgo="
       },
       467: function (t, e, o) {
          "use strict";
          o(427)
       },
       468: function (t, e, o) {
          var r = o(27)(!1);
          r.push([t.i, '.page-footer[data-v-6f7ae3d8]{position:relative;margin-top:12rem;padding-bottom:2rem;overflow:hidden}.page-footer .blur-middle[data-v-6f7ae3d8]{position:absolute;width:80%;bottom:-5%;left:0;right:0;margin:0 auto}.page-footer .f-head[data-v-6f7ae3d8]{position:relative;z-index:1;transform:translateZ(0)}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{user-select:none}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:11.25rem;line-height:.75;font-family:"Stolzl-Book";text-transform:uppercase;display:block;margin-left:-0.5rem}.page-footer .f-head .f-head_nav[data-v-6f7ae3d8]{margin-top:1rem;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.page-footer .f-head .f-head_nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-active-nav a.nuxt-link-active[data-v-6f7ae3d8]{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:3rem;display:flex;justify-content:center;padding-left:1rem}.page-footer .f-foot[data-v-6f7ae3d8]{position:relative;margin-top:3rem;display:flex;flex-direction:column}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:3rem}.page-footer .f-foot .f-foot_slogan span[data-v-6f7ae3d8]{margin-right:1rem}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{padding-left:40%;margin-top:3rem}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:3rem}.page-footer .f-foot .f-foot_address div p[data-v-6f7ae3d8]{margin-bottom:0}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{order:-1}.page-footer .f-foot .f-foot_mail p[data-v-6f7ae3d8]{width:80%}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:1.5rem;margin-bottom:2rem;display:flex;align-items:center}.page-footer .f-foot .f-foot_mail div>span[data-v-6f7ae3d8]{display:inline-block}.page-footer .f-foot .f-foot_mail div .icon-arrow[data-v-6f7ae3d8]{width:1rem;margin-left:.5rem}.page-footer .f-foot .f-foot_brand-touch[data-v-6f7ae3d8]{position:absolute;left:0;bottom:-1rem;width:1.5rem}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]{position:relative;width:100%;padding-top:50%;padding-bottom:50%;display:flex;justify-content:center;align-items:center;transform:scale(0) rotate(90deg);transition:transform .3s cubic-bezier(var(--f-cubic));transition-delay:0}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]::before{content:"";position:absolute;top:auto;right:auto;bottom:auto;left:auto;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]{transform:scale(1) rotate(0deg);transition:transform .6s cubic-bezier(var(--f-cubic-2));transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(1){transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(2){transition-delay:.45s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(3){transition-delay:.6s}@media(min-width: 1024px){.page-footer[data-v-6f7ae3d8]{margin-top:17%;padding-bottom:4rem}.page-footer .blur-middle[data-v-6f7ae3d8]{width:41.666%;max-width:40rem;bottom:-20%}.page-footer .f-head[data-v-6f7ae3d8]{display:flex;justify-content:flex-start;align-items:flex-start}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{margin-top:0;width:67.6%}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:33vw;margin-left:-2rem}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]{opacity:1;transition:opacity 1.5s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]:hover{color:var(--c-white)}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8],.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8]:hover,.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]:hover{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:2.5rem;display:block;padding-left:0}.page-footer .f-foot[data-v-6f7ae3d8]{margin-top:5rem;flex-direction:row;align-items:flex-start}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:0;width:33.8%}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{margin-top:0;width:33.8%;padding-left:0;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:8rem}.page-footer .f-foot .f-foot_address span[data-v-6f7ae3d8]{margin-top:auto;margin-bottom:.5rem}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{width:32.4%;order:initial;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:2.5rem;margin-bottom:3rem}.page-footer .f-foot .f-foot_mail a[data-v-6f7ae3d8]{margin-top:auto}.page-footer[data-v-6f7ae3d8] .soc_ul{margin-left:67.6%}}', ""]), t.exports = r
       },
       484: function (t, e, o) {
          var content = o(527);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [t.i, content, ""]
          ]), content.locals && (t.exports = content.locals);
          (0, o(28).default)("461dd3c1", content, !0, {
             sourceMap: !1
          })
       },
       485: function (t, e, o) {
          var content = o(529);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [t.i, content, ""]
          ]), content.locals && (t.exports = content.locals);
          (0, o(28).default)("6a9c3216", content, !0, {
             sourceMap: !1
          })
       },
       486: function (t, e, o) {
          var content = o(533);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [t.i, content, ""]
          ]), content.locals && (t.exports = content.locals);
          (0, o(28).default)("44dc3b2e", content, !0, {
             sourceMap: !1
          })
       },
       526: function (t, e, o) {
          "use strict";
          o(484)
       },
       527: function (t, e, o) {
          var r = o(27),
             c = o(158),
             n = o(236),
             d = r(!1),
             l = c(n);
          d.push([t.i, ".c-welcome[data-v-b79e3788]{min-height:400px;position:relative;padding-bottom:3rem}.c-welcome .c-section_bg[data-v-b79e3788]{position:absolute;z-index:0;top:0;left:0;bottom:auto;right:auto;width:100%;height:0%;display:flex;justify-content:center;align-items:center;overflow:hidden;padding-top:15rem;padding-bottom:45rem}.c-welcome .c-section_bg img[data-v-b79e3788]{position:absolute;top:auto;left:auto;right:auto;bottom:auto;width:60rem;object-fit:contain}.c-welcome .c-section_bg img[data-v-b79e3788]:nth-child(1){opacity:.6;animation:blurs-b79e3788 60s linear infinite;animation-play-state:paused;will-change:transform}.c-welcome .c-section_bg img[data-v-b79e3788]:nth-child(2){opacity:.6;animation:blurs-b79e3788 40s linear infinite reverse;animation-delay:-5s;animation-play-state:paused;will-change:transform}.c-welcome .c-section_bg span[data-v-b79e3788]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:url(" + l + ");background-repeat:repeat;transform:translateZ(0)}@keyframes blurs-b79e3788{0%{opacity:.6;transform:rotate(0deg) scale(1, 0.8)}50%{opacity:.2;transform:rotate(180deg) scale(0.25, 1)}100%{opacity:.6;transform:rotate(359.99deg) scale(1, 0.8)}}.c-welcome .c-section_bg.is-inview img[data-v-b79e3788]{animation-play-state:running}.c-welcome .c-welcome_container[data-v-b79e3788]{position:relative;z-index:1;height:100%;display:flex;flex-direction:column;overflow:hidden}.c-welcome .c-welcome_container .c-welcome_title[data-v-b79e3788]{margin-top:8rem;width:80%;margin-bottom:3rem}@media(min-width: 1024px){.c-welcome[data-v-b79e3788]{padding-bottom:3rem}.c-welcome .c-section_bg[data-v-b79e3788]{padding-top:0%;padding-bottom:100%}.c-welcome .c-section_bg img[data-v-b79e3788]{width:80%}.c-welcome .c-welcome_container .c-welcome_title[data-v-b79e3788]{margin-top:11rem;width:57.74%;margin-bottom:7%}}", ""]), t.exports = d
       },
       528: function (t, e, o) {
          "use strict";
          o(485)
       },
       529: function (t, e, o) {
          var r = o(27)(!1);
          r.push([t.i, '.c-blend[data-v-6367bc93]{position:relative;padding-top:5rem;height:32rem;margin-bottom:4rem}.c-blend .c-blend_container[data-v-6367bc93]{height:0;position:sticky;top:50vh;top:calc(var(--vh, 1vh)*50);display:flex;justify-content:center;align-items:center}.c-blend .c-blend_container[data-v-6367bc93]::before{content:"";position:absolute;top:50%;left:0;width:100%;height:1px;background:var(--c-white);opacity:.2;transform:scale(0, 1);transition:transform 1.2s cubic-bezier(var(--f-cubic-2))}.c-blend .c-blend_container .intersect[data-v-6367bc93]{position:relative;width:35%;overflow:hidden;margin:0 auto;border-radius:50%;transform:translate(calc((var(--s-progress) - 1) * 70%), 0);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .intersect .intersected[data-v-6367bc93]{width:100%;transform:translate(calc((var(--s-progress) - 1) * -140%), 0);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .intersect .intersected div[data-v-6367bc93]{width:100%;padding-bottom:100%;background:var(--c-white);border:1px solid var(--c-white);border-radius:50%;opacity:0;transform:scale(0.5);transition:transform 1.2s cubic-bezier(var(--f-cubic-2)),opacity 1.2s cubic-bezier(var(--f-cubic-2));transition-delay:1.2s}.c-blend .c-blend_container .dash[data-v-6367bc93]{position:absolute;right:0;left:0;width:35%;margin:0 auto;opacity:calc(2 - var(--s-progress)*2);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .dash div[data-v-6367bc93]{width:100%;padding-bottom:100%;border-radius:50%;border:1.5px dashed var(--c-white);opacity:0;transform:scale(0.5);transition:transform 1.2s cubic-bezier(var(--f-cubic-2)),opacity 1.2s cubic-bezier(var(--f-cubic-2));transition-delay:1.2s}.c-blend .c-blend_container .dash.-l[data-v-6367bc93]{transform:translate(-70%, 0) rotate(0deg);transform:translate(calc((var(--s-progress) - 1) * 70%), 0) rotate(calc(var(--s-progress) * 180deg));transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .dash.-r[data-v-6367bc93]{transform:translate(70%, 0) rotate(0deg);transform:translate(calc((var(--s-progress) - 1) * -70%), 0) rotate(calc(var(--s-progress) * 180deg));transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .name[data-v-6367bc93]{position:absolute;right:0;left:0;width:35%;margin:0 auto}.c-blend .c-blend_container .name div[data-v-6367bc93]{width:100%;padding-bottom:100%;position:relative;display:flex;justify-content:center;align-items:center;opacity:0;transform:scale(0.5);transition:transform 1.5s cubic-bezier(var(--f-cubic-2)),opacity 1.5s cubic-bezier(var(--f-cubic-2));transition-delay:1.2s}.c-blend .c-blend_container .name div span[data-v-6367bc93]{height:90%;position:absolute;top:5%;right:auto;bottom:auto;left:auto;transform:rotate(0deg);opacity:calc(2 - var(--s-progress)*3);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .name div span[data-v-6367bc93]:nth-child(2){transform:rotate(90deg)}.c-blend .c-blend_container .name div span[data-v-6367bc93]:nth-child(3){transform:rotate(180deg)}.c-blend .c-blend_container .name div span[data-v-6367bc93]:nth-child(4){transform:rotate(270deg)}.c-blend .c-blend_container .name.-l[data-v-6367bc93]{transform:translate(-70%, 0) rotate(0deg);transform:translate(calc((var(--s-progress) - 1) * 70%), 0);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .name.-r[data-v-6367bc93]{transform:translate(70%, 0) rotate(0deg);transform:translate(calc((var(--s-progress) - 1) * -70%), 0);transition:transform .15s cubic-bezier(var(--f-cubic))}.c-blend .c-blend_container .the-os[data-v-6367bc93]{position:absolute;top:auto;right:auto;bottom:auto;left:auto;color:var(--c-black)}.c-blend.is-inview .c-blend_container[data-v-6367bc93]::before{transform:scale(1, 1)}.c-blend.is-inview .c-blend_container .intersect .intersected div[data-v-6367bc93]{opacity:1;transform:scale(1)}.c-blend.is-inview .c-blend_container .dash div[data-v-6367bc93],.c-blend.is-inview .c-blend_container .name div[data-v-6367bc93]{opacity:1;transform:scale(1)}@media(min-width: 1024px){.c-blend[data-v-6367bc93]{padding-top:35%;padding-top:50vh;padding-top:calc(var(--vh, 1vh)*50);height:32rem;margin-bottom:38rem}.c-blend .c-blend_container[data-v-6367bc93]{position:relative;top:initial}}', ""]), t.exports = r
       },
       530: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjIuOSIgeTE9IjIuOSIgeDI9IjE3LjEiIHkyPSIxNy4xIi8+Cjxwb2x5bGluZSBpZD0iUGF0aC04IiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3LjEsMi45IDIuOSwyLjkgMi45LDE3LjEgIi8+Cjwvc3ZnPgo="
       },
       531: function (t, e) {
          t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjE3LjEiIHkxPSIyLjkiIHgyPSIyLjkiIHkyPSIxNy4xIi8+Cjxwb2x5bGluZSBpZD0iUGF0aC04IiBjbGFzcz0ic3QwIiBwb2ludHM9IjIuOSwyLjkgMi45LDE3LjEgMTcuMSwxNy4xICIvPgo8L3N2Zz4K"
       },
       532: function (t, e, o) {
          "use strict";
          o(486)
       },
       533: function (t, e, o) {
          var r = o(27)(!1);
          r.push([t.i, '.c-services[data-v-129ab5a2]{padding-top:4rem;position:relative}.c-services .services-bg[data-v-129ab5a2]{position:absolute;width:40%;max-width:13rem;bottom:-11rem;left:2.5rem}.c-services .services-bg figure[data-v-129ab5a2]{width:100%}.c-services .services-bg figure img[data-v-129ab5a2]{transform:rotate(calc(var(--s-progress) * 180deg))}.c-services .services-bg figure[data-v-129ab5a2]:nth-child(2){position:absolute;top:0;left:0}.c-services .c-services_container .c-services_block[data-v-129ab5a2]{width:80%;max-width:24rem}.c-services .c-services_container .c-services_block .c-services_title[data-v-129ab5a2]{margin-bottom:2.5rem}.c-services .c-services_container .c-services_block .c-services_description[data-v-129ab5a2]{display:flex}.c-services .c-services_container .c-services_block .c-services_description .rhombus[data-v-129ab5a2]{width:4rem}.c-services .c-services_container .c-services_block .c-services_description .rhombus[data-v-129ab5a2]::before{content:"";margin-top:.5rem;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.c-services .c-services_container .c-services_block .c-services_description div[data-v-129ab5a2]{width:80%}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal[data-v-129ab5a2]{display:flex;align-items:top;position:relative;min-height:9.5rem;border:1px solid rgba(var(--c-white--rgb), 0.2);margin-bottom:.25rem;padding:0 0 1.5rem 0}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal .petal_arrow[data-v-129ab5a2]{position:absolute;right:.5rem;bottom:.5rem;width:1rem}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal .petal_contain[data-v-129ab5a2]{width:80%;max-width:15rem;margin:1rem}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal .petal_contain h6[data-v-129ab5a2]{margin-bottom:1.5rem}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal.-radius-bl-tr[data-v-129ab5a2]{border-radius:0 5rem 0 5rem}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal.-radius-tl-br[data-v-129ab5a2]{border-radius:5rem 0 5rem 0;padding:1.5rem 0 0 0}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal.-radius-tl-br .petal_arrow[data-v-129ab5a2]{top:.5rem;bottom:auto}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal.-radius-tl-br .petal_contain[data-v-129ab5a2]{margin-top:auto}.c-services .c-services_container .c-services_block[data-v-129ab5a2]:nth-child(1){margin-bottom:4rem}.c-services .c-services_container .c-services_block[data-v-129ab5a2]:nth-child(2){margin-left:auto}@media(min-width: 1024px){.c-services[data-v-129ab5a2]{padding-top:10%}.c-services .services-bg[data-v-129ab5a2]{width:23.63%;max-width:17rem;left:8.45%;bottom:-2rem;overflow:visible}.c-services .c-services_container[data-v-129ab5a2]{display:flex}.c-services .c-services_container .c-services_block[data-v-129ab5a2]{width:40.84%;max-width:initial}.c-services .c-services_container .c-services_block .c-services_title .-indent[data-v-129ab5a2]::before{width:20.68%}.c-services .c-services_container .c-services_block .c-services_description .rhombus[data-v-129ab5a2]{width:20.68%}.c-services .c-services_container .c-services_block .c-services_description div[data-v-129ab5a2]{width:68.965%}.c-services .c-services_container .c-services_block .c-services_domains[data-v-129ab5a2]{padding-left:20.689%;margin-top:3rem}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal[data-v-129ab5a2]{min-height:9.5rem;padding:0 0 3rem 0}.c-services .c-services_container .c-services_block .c-services_domains .domains_petal.-radius-tl-br[data-v-129ab5a2]{padding:3rem 0 0 0}.c-services .c-services_container .c-services_block[data-v-129ab5a2]:nth-child(1){margin-bottom:0}.c-services .c-services_container .c-services_block[data-v-129ab5a2]:nth-child(2){margin-left:9.859%}}', ""]), t.exports = r
       },
       599: function (t, e, o) {
          "use strict";
          o.r(e);
          var r = [function () {
                var t = this,
                   e = t._self._c;
                return e("div", {
                   staticClass: "c-section_bg",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-repeat": ""
                   }
                }, [e("img", {
                   staticClass: "blur-move-a",
                   attrs: {
                      src: o(414),
                      alt: ""
                   }
                }), t._v(" "), e("img", {
                   staticClass: "blur-move-a",
                   attrs: {
                      src: o(414),
                      alt: ""
                   }
                }), t._v(" "), e("span")])
             }],
             c = {
                name: "ServicesWelcome",
                props: {
                   data: Object
                }
             },
             n = (o(526), o(14)),
             component = Object(n.a)(c, (function () {
                var t, e = this,
                   o = e._self._c;
                return o("section", {
                   staticClass: "c-section c-welcome"
                }, [e._m(0), e._v(" "), o("div", {
                   staticClass: "c-welcome_container -w"
                }, [o("div", {
                   staticClass: "c-welcome_title"
                }, [o("h4", {
                   staticClass: "-a-to-bottom -m-h6",
                   attrs: {
                      "data-scroll": ""
                   }
                }, e._l(null === (t = e.data) || void 0 === t ? void 0 : t.text, (function (line, i) {
                   return o("span", {
                      key: i,
                      class: "italic_text" === line.acf_fc_layout ? "-i" : ""
                   }, [e._v(e._s("italic_text" === line.acf_fc_layout ? line.italic_text : line.text))])
                })), 0)])])])
             }), r, !1, null, "b79e3788", null);
          e.default = component.exports
       },
       600: function (t, e, o) {
          "use strict";
          o.r(e);
          o(52);
          var r = {
                name: "Blend",
                components: {},
                methods: {
                   heightCor: function () {
                      var t = .01 * window.innerHeight;
                      document.documentElement.style.setProperty("--vh", "".concat(t, "px"))
                   }
                },
                created: function () {},
                mounted: function () {
                   var t = this;
                   setTimeout((function () {
                      var e = t.$refs.parent,
                         o = window.innerHeight,
                         r = t.$refs.parent.offsetHeight,
                         c = t.$refs.parent.offsetTop;
                      e.style.setProperty("--s-progress", 1 - (r + c) / (r + o))
                   }), 1050);
                   var e = .01 * window.innerHeight;
                   document.documentElement.style.setProperty("--vh", "".concat(e, "px")), window.addEventListener("resize", this.heightCor)
                },
                beforeUnmount: function () {
                   window.removeEventListener("resize", this.heightCor)
                }
             },
             c = (o(528), o(14)),
             component = Object(c.a)(r, (function () {
                return (0, this._self._c)("section", {
                   ref: "parent",
                   staticClass: "c-section c-blend",
                   attrs: {
                      id: "c-blend",
                      "data-scroll": "",
                      "data-scroll-id": "progress"
                   }
                }, [this._m(0)])
             }), [function () {
                var t = this,
                   e = t._self._c;
                return e("div", {
                   staticClass: "c-blend_container",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-sticky": "",
                      "data-scroll-target": "#c-blend"
                   }
                }, [e("div", {
                   staticClass: "intersect"
                }, [e("div", {
                   staticClass: "intersected"
                }, [e("div")])]), t._v(" "), e("div", {
                   staticClass: "dash -l"
                }, [e("div", {
                   attrs: {
                      "data-scroll": ""
                   }
                })]), t._v(" "), e("div", {
                   staticClass: "dash -r"
                }, [e("div", {
                   attrs: {
                      "data-scroll": ""
                   }
                })]), t._v(" "), e("div", {
                   staticClass: "name -l -m-m"
                }, [e("div", [e("span", [t._v(window.creativity_text_1)]), t._v(" "), e("span", [t._v(window.creativity_text_2)]), t._v(" "), e("span", [t._v(window.creativity_text_3)]), t._v(" "), e("span", [t._v(window.creativity_text_4)])])]), t._v(" "), e("div", {
                   staticClass: "name -r -m-m"
                }, [e("div", [e("span", [t._v(window.market_text_1)]), t._v(" "), e("span", [t._v(window.market_text_2)]), t._v(" "), e("span", [t._v(window.market_text_3)]), t._v(" "), e("span", [t._v(window.market_text_4)])])]), t._v(" "), e("span", {
                   staticClass: "the-os"
                }, [t._v(window.title_on_center)])])
             }], !1, null, "6367bc93", null);
          e.default = component.exports
       },
       601: function (t, e, o) {
          "use strict";
          o.r(e);
          o(33), o(46);
          var r = [function () {
                var t = this._self._c;
                return t("div", {
                   staticClass: "services-bg",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-speed": "1"
                   }
                }, [t("figure", {
                   staticClass: "blur-image blur-narrow",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [t("img", {
                   staticClass: "-blur-1",
                   attrs: {
                      src: o(415),
                      alt: ""
                   }
                })]), this._v(" "), t("figure", {
                   staticClass: "blur-image blur-narrow",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-id": "progressb"
                   }
                }, [t("img", {
                   attrs: {
                      src: o(426),
                      alt: ""
                   }
                })])])
             }],
             c = {
                name: "OurServices",
                props: {
                   data: Object
                }
             },
             n = (o(532), o(14)),
             component = Object(n.a)(c, (function () {
                var t, e, r, c, n, d, l, v, f, m, I, h, _, w, y, M, C, j, x = this,
                   z = x._self._c;
                return z("section", {
                   staticClass: "c-section c-services"
                }, [x._m(0), x._v(" "), z("div", {
                   staticClass: "c-services_container -w"
                }, [z("div", {
                   staticClass: "c-services_block"
                }, [z("div", {
                   staticClass: "c-services_title -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [z("div", {
                   staticClass: "c-services_title-row -h4"
                }, [x._v(x._s(null === (t = x.data) || void 0 === t || null === (e = t.first_service) || void 0 === e || null === (r = e.title) || void 0 === r ? void 0 : window.block_1_title_1))]), x._v(" "), z("div", { // <-----
                   staticClass: "c-services_title-row -h4 -indent"
                }, [z("span", {
                   staticClass: "-i"
                }, [x._v(x._s(null === (c = x.data) || void 0 === c || null === (n = c.first_service) || void 0 === n || null === (d = n.title) || void 0 === d ? void 0 : window.block_1_subtitle_1))])])]), x._v(" "), z("div", { // <-----
                   staticClass: "c-services_description -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [z("span", {
                   staticClass: "rhombus"
                }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (l = x.data) || void 0 === l || null === (v = l.first_service) || void 0 === v ? void 0 : window.block_1_description_1))])])])]), x._v(" "), z("div", { // <-----
                   staticClass: "c-services_block"
                }, [z("div", {
                   staticClass: "c-services_title -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [z("div", {
                   staticClass: "c-services_title-row -h4"
                }, [x._v(x._s(null === (f = x.data) || void 0 === f || null === (m = f.second_service) || void 0 === m || null === (I = m.title) || void 0 === I ? void 0 : window.block_2_title_1))]), x._v(" "), z("div", {
                   staticClass: "c-services_title-row -h4 -indent"
                }, [z("span", {
                   staticClass: "-i"
                }, [x._v(x._s(null === (h = x.data) || void 0 === h || null === (_ = h.second_service) || void 0 === _ || null === (w = _.title) || void 0 === w ? void 0 : window.block_2_subtitle_1))])])]), x._v(" "), z("div", {
                   staticClass: "c-services_description -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [z("span", {
                   staticClass: "rhombus"
                }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (y = x.data) || void 0 === y || null === (M = y.second_service) || void 0 === M ? void 0 : window.block_2_description_1))])])])])]), z("div", {
                  staticClass: "c-services_container -w"
               }, [z("div", {
                  staticClass: "c-services_block"
               }, [z("div", {
                  staticClass: "c-services_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("div", {
                  staticClass: "c-services_title-row -h4"
               }, [x._v(x._s(null === (t = x.data) || void 0 === t || null === (e = t.first_service) || void 0 === e || null === (r = e.title) || void 0 === r ? void 0 : window.block_1_title_2))]), x._v(" "), z("div", {
                  staticClass: "c-services_title-row -h4 -indent"
               }, [z("span", {
                  staticClass: "-i"
               }, [x._v(x._s(null === (c = x.data) || void 0 === c || null === (n = c.first_service) || void 0 === n || null === (d = n.title) || void 0 === d ? void 0 : window.block_1_subtitle_2))])])]), x._v(" "), z("div", {
                  staticClass: "c-services_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("span", {
                  staticClass: "rhombus"
               }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (l = x.data) || void 0 === l || null === (v = l.first_service) || void 0 === v ? void 0 : window.block_1_description_2))])])])]), x._v(" "), z("div", {
                  staticClass: "c-services_block"
               }, [z("div", {
                  staticClass: "c-services_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("div", {
                  staticClass: "c-services_title-row -h4"
               }, [x._v(x._s(null === (f = x.data) || void 0 === f || null === (m = f.second_service) || void 0 === m || null === (I = m.title) || void 0 === I ? void 0 : window.block_2_title_2))]), x._v(" "), z("div", {
                  staticClass: "c-services_title-row -h4 -indent"
               }, [z("span", {
                  staticClass: "-i"
               }, [x._v(x._s(null === (h = x.data) || void 0 === h || null === (_ = h.second_service) || void 0 === _ || null === (w = _.title) || void 0 === w ? void 0 : window.block_2_subtitle_2))])])]), x._v(" "), z("div", {
                  staticClass: "c-services_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("span", {
                  staticClass: "rhombus"
               }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (y = x.data) || void 0 === y || null === (M = y.second_service) || void 0 === M ? void 0 : window.block_2_description_2))])])])])]), z("div", {
                  staticClass: "c-services_container -w"
               }, [z("div", {
                  staticClass: "c-services_block"
               }, [z("div", {
                  staticClass: "c-services_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("div", {
                  staticClass: "c-services_title-row -h4"
               }, [x._v(x._s(null === (t = x.data) || void 0 === t || null === (e = t.first_service) || void 0 === e || null === (r = e.title) || void 0 === r ? void 0 : window.block_1_title_3))]), x._v(" "), z("div", {
                  staticClass: "c-services_title-row -h4 -indent"
               }, [z("span", {
                  staticClass: "-i"
               }, [x._v(x._s(null === (c = x.data) || void 0 === c || null === (n = c.first_service) || void 0 === n || null === (d = n.title) || void 0 === d ? void 0 : window.block_1_subtitle_3))])])]), x._v(" "), z("div", {
                  staticClass: "c-services_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("span", {
                  staticClass: "rhombus"
               }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (l = x.data) || void 0 === l || null === (v = l.first_service) || void 0 === v ? void 0 : window.block_1_description_3))])])])]), x._v(" "), z("div", {
                  staticClass: "c-services_block"
               }, [z("div", {
                  staticClass: "c-services_title -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("div", {
                  staticClass: "c-services_title-row -h4"
               }, [x._v(x._s(null === (f = x.data) || void 0 === f || null === (m = f.second_service) || void 0 === m || null === (I = m.title) || void 0 === I ? void 0 : window.block_2_title_3))]), x._v(" "), z("div", {
                  staticClass: "c-services_title-row -h4 -indent"
               }, [z("span", {
                  staticClass: "-i"
               }, [x._v(x._s(null === (h = x.data) || void 0 === h || null === (_ = h.second_service) || void 0 === _ || null === (w = _.title) || void 0 === w ? void 0 : window.block_2_subtitle_3))])])]), x._v(" "), z("div", {
                  staticClass: "c-services_description -a-to-top",
                  attrs: {
                     "data-scroll": ""
                  }
               }, [z("span", {
                  staticClass: "rhombus"
               }), x._v(" "), z("div", [z("p", [x._v(x._s(null === (y = x.data) || void 0 === y || null === (M = y.second_service) || void 0 === M ? void 0 : window.block_2_description_3))])])])])])])
             }), r, !1, null, "129ab5a2", null);
          e.default = component.exports
       },
       672: function (t, e, o) {
          "use strict";
          o.r(e);
          o(47), o(33), o(49), o(16), o(61), o(40), o(62);
          var r = o(24),
             c = o(13),
             n = (o(34), o(69), o(71), o(52), o(60), o(160)),
             d = o(57),
             meta = o(422);
 
          function l(object, t) {
             var e = Object.keys(object);
             if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                   return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
             }
             return e
          }
 
          function v(t) {
             for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function (e) {
                   Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (e) {
                   Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
             }
             return t
          }
          var f = {
                name: "Services",
                components: {
                   LazyHydrate: n.a
                },
                asyncData: function (t) {
                   return Object(c.a)(regeneratorRuntime.mark((function e() {
                      var o, r, c;
                      return regeneratorRuntime.wrap((function (e) {
                         for (;;) switch (e.prev = e.next) {
                            case 0:
                               return o = t.store, r = "/wp-json/api/page/services", c = "/wp-json/api/options", e.next = 5, o.dispatch("fetchData", {
                                  apiRoute: r
                               });
                            case 5:
                               return e.abrupt("return", {
                                  data: Object(d.c)(v({}, o.state.data[r])),
                                  globalData: o.state.data[c]
                               });
                            case 6:
                            case "end":
                               return e.stop()
                         }
                      }), e)
                   })))()
                },
                head: function () {
                   var t, e, o;
                   console.log(this.globalData);
                   var r = Object(meta.c)(null === (t = this.data.value) || void 0 === t ? void 0 : t.seo_meta, meta.d, {}),
                      c = Object(meta.c)(null === (e = this.globalData) || void 0 === e ? void 0 : e.seo_meta, meta.d, {});
                   return console.log({
                      globalMeta: c,
                      pageMeta: r
                   }, v(v(v(v({}, meta.a), c), r), {}, {
                      url: ("".concat(meta.a.url || "", "/").concat(this.$route.path || "") || "").replace(/\/{2,}/g, "/")
                   })), Object(meta.b)(v(v(v(v({}, meta.a), c), {}, {
                      title: null === (o = this.data.value) || void 0 === o ? void 0 : o.post_title
                   }, r), {}, {
                      url: ("".concat(meta.a.url || "", "/").concat(this.$route.path || "") || "").replace(/\/{2,}/g, "/")
                   }))
                },
                mounted: function () {
                   var t = this;
                   "#studios" == window.location.hash && (window.innerWidth > 1024 ? setTimeout((function () {
                      t.$nuxt.$emit("locomotive-scroll-studios")
                   }), 1200) : setTimeout((function () {
                      t.$nuxt.$emit("locomotive-scroll-studios")
                   }), 1500)), "#operator" == window.location.hash && (window.innerWidth > 1024 ? setTimeout((function () {
                      t.$nuxt.$emit("locomotive-scroll-operator")
                   }), 1200) : setTimeout((function () {
                      t.$nuxt.$emit("locomotive-scroll-operator")
                   }), 1500))
                }
             },
             m = o(14),
             component = Object(m.a)(f, (function () {
                var t, e, r, c = this,
                   n = c._self._c;
                return n("LocomotiveScroll", {
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
                }, [n("div", {
                   staticClass: "page-content"
                }, [n("LazyHydrate", {
                   attrs: {
                      "when-visible": ""
                   }
                }, [n("ServicesWelcome", {
                   attrs: {
                      data: null === (t = c.data.value) || void 0 === t ? void 0 : {
                        "text": [
                          {
                            "acf_fc_layout": "text",
                            "text": window.information_title_1
                          },
                          {
                            "acf_fc_layout": "italic_text",
                            "italic_text": window.information_title_2
                          },
                          {
                            "acf_fc_layout": "text",
                            "text": window.information_title_3
                          },
                          {
                            "acf_fc_layout": "italic_text",
                            "italic_text": window.information_title_4
                          },
                          {
                            "acf_fc_layout": "text",
                            "text": window.information_title_5
                          }
                        ]
                      }
                   }
                })], 1), c._v(" "), n("LazyHydrate", {
                   attrs: {
                      "when-visible": ""
                   }
                }, [n("Blend")], 1), c._v(" "), n("LazyHydrate", {
                   attrs: {
                      "when-visible": ""
                   }
                }, [n("OurServices", {
                   attrs: {
                      data: null === (e = c.data.value) || void 0 === e ? void 0 : e.services
                   }
                })], 1), c._v(" "), n("LazyHydrate", {
                   attrs: {
                      "when-visible": ""
                   }
                }, [n("Powered", {
                   attrs: {
                      data: null === (r = c.data.value) || void 0 === r ? void 0 : r.powered
                   }
                })], 1)], 1), c._v(" "), n("figure", {
                   staticClass: "h-menu-blur",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-speed": "-9.5",
                      "data-scroll-position": "top",
                      "data-scroll-offset": "0,-100%"
                   }
                }, [n("img", {
                   staticClass: "-blur-025",
                   attrs: {
                      src: o(430),
                      alt: ""
                   }
                })]), c._v(" "), n("Footer")], 1)
             }), [], !1, null, "b1b85640", null);
          e.default = component.exports;
          installComponents(component, {
             ServicesWelcome: o(599).default,
             Blend: o(600).default,
             OurServices: o(601).default,
             Powered: o(668).default,
             Footer: o(428).default,
             LocomotiveScroll: o(161).default
          })
       }
    }
 ]);