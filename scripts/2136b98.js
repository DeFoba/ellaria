(window.webpackJsonp = window.webpackJsonp || []).push([
    [5, 9, 16, 19, 30], {
       413: function (e, t, o) {
          "use strict";
          var n = o(97),
             r = o(5),
             c = o(7),
             l = o(128),
             d = o(155),
             f = o(4),
             v = o(38),
             m = o(39),
             h = o(157),
             w = o(82),
             x = o(22),
             _ = o(70),
             y = o(154),
             z = o(129),
             I = o(127),
             P = o(156),
             C = o(6),
             M = P.UNSUPPORTED_Y,
             k = 4294967295,
             S = Math.min,
             R = [].push,
             A = c(/./.exec),
             j = c(R),
             N = c("".slice),
             Z = !C((function () {
                var e = /(?:)/,
                   t = e.exec;
                e.exec = function () {
                   return t.apply(this, arguments)
                };
                var o = "ab".split(e);
                return 2 !== o.length || "a" !== o[0] || "b" !== o[1]
             }));
          l("split", (function (e, t, o) {
             var c;
             return c = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, o) {
                var c = x(v(this)),
                   l = void 0 === o ? k : o >>> 0;
                if (0 === l) return [];
                if (void 0 === e) return [c];
                if (!d(e)) return r(t, c, e, l);
                for (var f, m, h, output = [], w = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), _ = 0, z = new RegExp(e.source, w + "g");
                   (f = r(I, z, c)) && !((m = z.lastIndex) > _ && (j(output, N(c, _, f.index)), f.length > 1 && f.index < c.length && n(R, output, y(f, 1)), h = f[0].length, _ = m, output.length >= l));) z.lastIndex === f.index && z.lastIndex++;
                return _ === c.length ? !h && A(z, "") || j(output, "") : j(output, N(c, _)), output.length > l ? y(output, 0, l) : output
             } : "0".split(void 0, 0).length ? function (e, o) {
                return void 0 === e && 0 === o ? [] : r(t, this, e, o)
             } : t, [function (t, o) {
                var n = v(this),
                   l = null == t ? void 0 : _(t, e);
                return l ? r(l, t, n, o) : r(c, x(n), t, o)
             }, function (e, n) {
                var r = f(this),
                   l = x(e),
                   d = o(c, r, l, n, c !== t);
                if (d.done) return d.value;
                var v = m(r, RegExp),
                   _ = r.unicode,
                   y = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (M ? "g" : "y"),
                   I = new v(M ? "^(?:" + r.source + ")" : r, y),
                   P = void 0 === n ? k : n >>> 0;
                if (0 === P) return [];
                if (0 === l.length) return null === z(I, l) ? [l] : [];
                for (var p = 0, q = 0, C = []; q < l.length;) {
                   I.lastIndex = M ? 0 : q;
                   var R, A = z(I, M ? N(l, q) : l);
                   if (null === A || (R = S(w(I.lastIndex + (M ? q : 0)), l.length)) === p) q = h(l, q, _);
                   else {
                      if (j(C, N(l, p, q)), C.length === P) return C;
                      for (var i = 1; i <= A.length - 1; i++)
                         if (j(C, A[i]), C.length === P) return C;
                      q = p = R
                   }
                }
                return j(C, N(l, p)), C
             }]
          }), !Z, M)
       },
       415: function (e, t) {
          e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlLXdpZHRoOjQ7fQo8L3N0eWxlPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2OC4yMzY1IiB5MT0iLTEwNy43NjE1IiB4Mj0iMjY3LjIzODUiIHkyPSItMTA2Ljc2MzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDAwIDAgMCA0MDAgLTEwNjg5NSA0MzEwNSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0MzODBGRiIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzY0QURGMjtzdG9wLW9wYWNpdHk6MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjE5OCIvPgo8L3N2Zz4K"
       },
       416: function (e, t, o) {
          var content = o(419);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [e.i, content, ""]
          ]), content.locals && (e.exports = content.locals);
          (0, o(28).default)("142ed704", content, !0, {
             sourceMap: !1
          })
       },
       418: function (e, t, o) {
          "use strict";
          o(416)
       },
       419: function (e, t, o) {
          var n = o(27)(!1);
          n.push([e.i, '.soc_ul[data-v-6dd519e3]{display:flex}.soc_ul a[data-v-6dd519e3]{display:block;position:relative;padding:.9rem;margin-right:1rem}.soc_ul a[data-v-6dd519e3]::before,.soc_ul a[data-v-6dd519e3]::after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;border:1px solid var(--c-white);box-shadow:inset 0 0 0 1px var(--c-white);border-radius:50%;transform:scale(1);opacity:1;transition:transform .3s cubic-bezier(var(--f-cubic)),opacity .3s cubic-bezier(var(--f-cubic))}.soc_ul a[data-v-6dd519e3]::before{background:var(--c-white);opacity:0;transform:scale(0.25)}.soc_ul a[data-v-6dd519e3] svg{position:relative;z-index:1;width:1.2rem;fill:var(--c-white);transform:scale(1);transition:transform .3s cubic-bezier(var(--f-cubic)),fill .3s cubic-bezier(var(--f-cubic))}@media(min-width: 1024px){.soc_ul a[data-v-6dd519e3]{margin-right:3rem}.soc_ul a[data-v-6dd519e3]:hover::before{opacity:1;transform:scale(1)}.soc_ul a[data-v-6dd519e3]:hover::after{transform:scale(0.5)}.soc_ul a:hover svg[data-v-6dd519e3]{transform:scale(1.25);fill:var(--c-black)}}', ""]), e.exports = n
       },
       421: function (e, t, o) {
          "use strict";
          o.r(t);
          o(235);
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
             r = (o(418), o(14)),
             component = Object(r.a)(n, (function () {
                var e = this,
                   t = e._self._c;
                return t("div", {
                   staticClass: "soc_ul"
                }, [e._l(e.socials, (function (o, i) {
                   return [t("a", {
                      key: i,
                      staticClass: "-normilize",
                      attrs: {
                         href: o.link.url,
                         target: o.link.target
                      },
                      domProps: {
                         innerHTML: e._s(o.svg)
                      }
                   })]
                }))], 2)
             }), [], !1, null, "6dd519e3", null);
          t.default = component.exports
       },
       423: function (e, t, o) {
          e.exports = o.p + "../_index_files/icon-arrow-down.c6d98d3.svg"
       },
       427: function (e, t, o) {
          var content = o(468);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [e.i, content, ""]
          ]), content.locals && (e.exports = content.locals);
          (0, o(28).default)("276f418b", content, !0, {
             sourceMap: !1
          })
       },
       428: function (e, t, o) {
          "use strict";
          o.r(t);
          o(34), o(413);
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
                      src: o(465),
                      alt: ""
                   }
                })])
             }, function () {
                var e = this._self._c;
                return e("figure", {
                   staticClass: "icon-arrow"
                }, [e("img", {
                   attrs: {
                      src: o(466),
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
             r = (o(16), {
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
             c = (o(467), o(14)),
             component = Object(c.a)(r, (function () {
                var e, t, o, n, r, c, l, d, f, v, m, h = this,
                   w = h._self._c;
                return w("footer", {
                   staticClass: "page-footer"
                }, [h._m(0), h._v(" "), w("div", {
                   staticClass: "f-head -w"
                }, [w("div", {
                   staticClass: "f-head_logo"
                }, [w("span", {
                   staticClass: "-a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [h._v(h._s(null === (e = h.data) || void 0 === e || null === (t = e.footer) || void 0 === t ? void 0 : t.title))])]), h._v(" "), w("nav", {
                   staticClass: "f-head_nav",
                   class: {
                      "-hover-nav": h.hover,
                      "-active-nav": h.subIsActive(window.ob_btn_about.getAttribute('href')) || h.subIsActive(window.ob_btn_work.getAttribute('href')) || h.subIsActive(window.ob_btn_services.getAttribute('href')) || h.subIsActive(window.ob_btn_contact.getAttribute('href'))
                   },
                   on: {
                      mouseleave: function (e) {
                         h.hover = !1
                      }
                   }
                }, [w("nuxt-link", {
                    staticClass: "-h4 -normilize",
                    attrs: {
                       to: window.ob_btn_about.getAttribute('href')
                    },
                    nativeOn: {
                       mouseover: function (e) {
                          h.hover = !0
                       }
                    }
                 }, [h._v(window.btn_about)]), 
                 
                 
                 
                 h._v(" "), w("nuxt-link", {
                    staticClass: "-h4 -normilize",
                    attrs: {
                       to: window.ob_btn_work.getAttribute('href')
                    },
                    nativeOn: {
                       mouseover: function (e) {
                          h.hover = !0
                       }
                    }
                 }, [h._v(window.btn_work)]), 
                 
                 
                 h._v(" "), w("a", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      href: window.ob_btn_services.getAttribute('href')
                   },
                   nativeOn: {
                      mouseover: function (e) {
                         h.hover = !0
                      }
                   }
                }, 
                
                
                [h._v(window.btn_services)]), h._v(" "),
                
                
                w("nuxt-link", {
                   staticClass: "-h4 -normilize",
                   attrs: {
                      to: window.ob_btn_contact.getAttribute('href')
                   },
                   nativeOn: {
                      mouseover: function (e) {
                         h.hover = !0
                      }
                   }
                }, [h._v(window.btn_contact)]), h._v(" "),



               //  ----------------------------- ABOUT and HOME
                w("a", {
                  staticClass: "-h4 -normilize",
                  attrs: {
                     href: window.ob_btn_docs.getAttribute('href')
                  },
                  nativeOn: {
                     mouseover: function (e) {
                        h.hover = !0
                     }
                  }
               }, [h._v(window.btn_docs)]),
               // ------------------------------
               
               
               ], 1)]), h._v(" "),
                
                
                w("div", {
                   staticClass: "f-soc -w"
                }, [w("SoMeList", {
                   attrs: {
                      socials: null === (o = h.data) || void 0 === o ? void 0 : o.socials
                   }
                })], 1), h._v(" "), w("div", {
                   staticClass: "f-foot -w",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-repeat": ""
                   }
                }, [w("div", {
                   staticClass: "f-foot_slogan"
                }, [w("span", [h._v(h._s(h.data.footer.slogan))])]), h._v(" "), w("div", {
                   staticClass: "f-foot_address"
                }, [w("div", [h._l(null === (n = h.data) || void 0 === n || null === (r = n.footer) || void 0 === r || null === (c = r.address) || void 0 === c ? void 0 : c.split(/\r?\n/gm), (function (line, i) {
                   return [w("p", {
                      key: i
                   }, [h._v(h._s(line))])]
                }))], 2), h._v(" "), w("span", [h._v("© " + h._s(window.ov_year))])]), h._v(" "), w("div", {
                   staticClass: "f-foot_mail"
                }, [w("p", [h._v(h._s(null === (l = h.data) || void 0 === l || null === (d = l.footer) || void 0 === d ? void 0 : d.mail_text))]), h._v(" "), w("div", [w("span", [h._v(h._s(null === (f = h.data) || void 0 === f || null === (v = f.footer) || void 0 === v ? void 0 : v.mail_under_text))]), h._v(" "), h._m(1)]), h._v(" "), w("EmailButton", {
                   attrs: {
                      mail: null === (m = h.data) || void 0 === m ? void 0 : m.mail
                   }
                })], 1), h._v(" "), h._m(2)])])
             }), n, !1, null, "6f7ae3d8", null);
          t.default = component.exports;
          installComponents(component, {
             SoMeList: o(421).default,
             EmailButton: o(239).default,
             Footer: o(428).default
          })
       },
       465: function (e, t, o) {
          e.exports = o.p + "../_index_files/blur-600x600.08a7d9f.svg"
       },
       466: function (e, t) {
          e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGxpbmUgaWQ9IlBhdGgtNyIgY2xhc3M9InN0MCIgeDE9IjEwIiB5MT0iMCIgeDI9IjEwIiB5Mj0iMTkuMiIvPgo8cG9seWxpbmUgaWQ9IlBhdGgtOCIgY2xhc3M9InN0MCIgcG9pbnRzPSIwLjUsOS44IDEwLDE5LjIgMTkuNSw5LjggIi8+Cjwvc3ZnPgo="
       },
       467: function (e, t, o) {
          "use strict";
          o(427)
       },
       468: function (e, t, o) {
          var n = o(27)(!1);
          n.push([e.i, '.page-footer[data-v-6f7ae3d8]{position:relative;margin-top:12rem;padding-bottom:2rem;overflow:hidden}.page-footer .blur-middle[data-v-6f7ae3d8]{position:absolute;width:80%;bottom:-5%;left:0;right:0;margin:0 auto}.page-footer .f-head[data-v-6f7ae3d8]{position:relative;z-index:1;transform:translateZ(0)}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{user-select:none}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:11.25rem;line-height:.75;font-family:"Stolzl-Book";text-transform:uppercase;display:block;margin-left:-0.5rem}.page-footer .f-head .f-head_nav[data-v-6f7ae3d8]{margin-top:1rem;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.page-footer .f-head .f-head_nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-active-nav a.nuxt-link-active[data-v-6f7ae3d8]{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:3rem;display:flex;justify-content:center;padding-left:1rem}.page-footer .f-foot[data-v-6f7ae3d8]{position:relative;margin-top:3rem;display:flex;flex-direction:column}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:3rem}.page-footer .f-foot .f-foot_slogan span[data-v-6f7ae3d8]{margin-right:1rem}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{padding-left:40%;margin-top:3rem}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:3rem}.page-footer .f-foot .f-foot_address div p[data-v-6f7ae3d8]{margin-bottom:0}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{order:-1}.page-footer .f-foot .f-foot_mail p[data-v-6f7ae3d8]{width:80%}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:1.5rem;margin-bottom:2rem;display:flex;align-items:center}.page-footer .f-foot .f-foot_mail div>span[data-v-6f7ae3d8]{display:inline-block}.page-footer .f-foot .f-foot_mail div .icon-arrow[data-v-6f7ae3d8]{width:1rem;margin-left:.5rem}.page-footer .f-foot .f-foot_brand-touch[data-v-6f7ae3d8]{position:absolute;left:0;bottom:-1rem;width:1.5rem}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]{position:relative;width:100%;padding-top:50%;padding-bottom:50%;display:flex;justify-content:center;align-items:center;transform:scale(0) rotate(90deg);transition:transform .3s cubic-bezier(var(--f-cubic));transition-delay:0}.page-footer .f-foot .f-foot_brand-touch div[data-v-6f7ae3d8]::before{content:"";position:absolute;top:auto;right:auto;bottom:auto;left:auto;display:block;width:.4rem;height:.4rem;background:var(--c-magenta);transform:rotate(45deg)}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]{transform:scale(1) rotate(0deg);transition:transform .6s cubic-bezier(var(--f-cubic-2));transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(1){transition-delay:.3s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(2){transition-delay:.45s}.page-footer .f-foot.is-inview .f-foot_brand-touch div[data-v-6f7ae3d8]:nth-child(3){transition-delay:.6s}@media(min-width: 1024px){.page-footer[data-v-6f7ae3d8]{margin-top:17%;padding-bottom:4rem}.page-footer .blur-middle[data-v-6f7ae3d8]{width:41.666%;max-width:40rem;bottom:-20%}.page-footer .f-head[data-v-6f7ae3d8]{display:flex;justify-content:flex-start;align-items:flex-start}.page-footer .f-head .f-head_logo[data-v-6f7ae3d8]{margin-top:0;width:67.6%}.page-footer .f-head .f-head_logo span[data-v-6f7ae3d8]{font-size:33vw;margin-left:-2rem}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]{opacity:1;transition:opacity 1.5s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav a[data-v-6f7ae3d8]:hover{color:var(--c-white)}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8],.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]{opacity:.4;transition:opacity .3s cubic-bezier(var(--f-cubic))}.page-footer .f-head .f-head_nav.-hover-nav a[data-v-6f7ae3d8]:hover,.page-footer .f-head .f-head_nav.-hover-nav.-active-nav a[data-v-6f7ae3d8]:hover{opacity:1}.page-footer .f-soc[data-v-6f7ae3d8]{margin-top:2.5rem;display:block;padding-left:0}.page-footer .f-foot[data-v-6f7ae3d8]{margin-top:5rem;flex-direction:row;align-items:flex-start}.page-footer .f-foot .f-foot_slogan[data-v-6f7ae3d8]{margin-top:0;width:33.8%}.page-footer .f-foot .f-foot_address[data-v-6f7ae3d8]{margin-top:0;width:33.8%;padding-left:0;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_address div[data-v-6f7ae3d8]{margin-bottom:8rem}.page-footer .f-foot .f-foot_address span[data-v-6f7ae3d8]{margin-top:auto;margin-bottom:.5rem}.page-footer .f-foot .f-foot_mail[data-v-6f7ae3d8]{width:32.4%;order:initial;min-height:16rem;display:flex;flex-direction:column;align-items:flex-start}.page-footer .f-foot .f-foot_mail div[data-v-6f7ae3d8]{margin-top:2.5rem;margin-bottom:3rem}.page-footer .f-foot .f-foot_mail a[data-v-6f7ae3d8]{margin-top:auto}.page-footer[data-v-6f7ae3d8] .soc_ul{margin-left:67.6%}}', ""]), e.exports = n
       },
       494: function (e, t, o) {
          var content = o(546);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [e.i, content, ""]
          ]), content.locals && (e.exports = content.locals);
          (0, o(28).default)("3b9ebb7d", content, !0, {
             sourceMap: !1
          })
       },
       508: function (e, t, o) {
          "use strict";
          o.r(t);
          var n = o(412),
             r = {
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
          t.default = r
       },
       544: function (e, t, o) {
          e.exports = o.p + "img/stars.1cdabc0.png"
       },
       545: function (e, t, o) {
          "use strict";
          o(494)
       },
       546: function (e, t, o) {
          var n = o(27)(!1);
          n.push([e.i, ".abstraction-background{position:absolute;top:0;left:0;width:100%;height:100%}", ""]), e.exports = n
       },
       590: function (e, t, o) {
          var content = o(663);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [e.i, content, ""]
          ]), content.locals && (e.exports = content.locals);
          (0, o(28).default)("751aab8d", content, !0, {
             sourceMap: !1
          })
       },
       591: function (e, t, o) {
          var content = o(665);
          content.__esModule && (content = content.default), "string" == typeof content && (content = [
             [e.i, content, ""]
          ]), content.locals && (e.exports = content.locals);
          (0, o(28).default)("3f6d6f2c", content, !0, {
             sourceMap: !1
          })
       },
       593: function (e, t, o) {
          "use strict";
          o.r(t);
          var n = o(502),
             r = o(476),
             c = o.n(r),
             l = o(412),
             d = o(477),
             f = o(501),
             v = o(478),
             m = o(471),
             h = o(508),
             w = o(57),
             x = o(29),
             _ = Object(w.a)({
                name: "AbstractionBackground",
                data: function () {
                   return {
                      scene: null,
                      imageAspect: 1,
                      renderer: null,
                      camera: null,
                      controls: null,
                      time: 0,
                      specialVarOrigin: .5,
                      isPlaying: !0,
                      composer: null,
                      plane: null,
                      smallSphere: null,
                      cubeCamera: null,
                      cubeRenderTarget: null,
                      material: null,
                      width: 0,
                      height: 0,
                      geometry: null,
                      mat: null,
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
                mounted: function () {
                   var e = this,
                      t = this.$refs.wrapper;
                   this.initPost = function () {
                      e.composer = new f.a(e.renderer), e.composer.addPass(new v.a(e.scene, e.camera));
                      var t = new m.a(h.default);
                      t.uniforms.scale.value = 1, e.composer.addPass(t)
                   }, this.setup = function () {
                      window.addEventListener("resize", e.resize), window.addEventListener("mousemove", e.mouseMove), e.observer = new IntersectionObserver((function (t) {
                         e.isPlaying = t[0].isIntersecting, e.isPlaying && e.render()
                      })), e.observer.observe(t)
                   }, this.mouseMove = c()((function (t) {
                      if (window.innerWidth, window.innerWidth >= 1024) {
                         var o = {
                            x: t.clientX / (window.innerWidth / 2) - 1,
                            y: -t.clientY / (window.innerHeight / 2) + 1
                         };
                         n.a.timeline().to(e.plane.rotation, {
                            x: e.plane.rotation.x + .01,
                            z: e.plane.rotation.z + .01,
                            duration: 8,
                            ease: "expo.out"
                         }), n.a.to(e.cubeCamera.rotation, {
                            x: .05 * o.y * Math.PI * 2,
                            y: .05 * -o.x * Math.PI * 2,
                            z: .075 * o.x * Math.PI * 2 + .05 * o.y * Math.PI * 2,
                            duration: 8,
                            ease: "expo.out"
                         }), n.a.to(e.material.uniforms.specialVar, {
                            value: .5 + (1 - Math.abs(o.y)) / 12 - o.x / 12,
                            duration: 2,
                            ease: "expo.out"
                         })
                      }
                   }), 0), this.resize = function () {
                      e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.composer.setSize(e.width, e.height), e.renderer.setSize(e.width, e.height), e.camera.aspect = e.width / e.height, e.height / e.width > e.imageAspect ? e.width / e.height * e.imageAspect : (1, e.height, e.width, e.imageAspect), e.camera.updateProjectionMatrix(), window.innerWidth < 1025 && e.controls.object.position.set(0, -.7, 2.5), window.innerWidth >= 1024 && e.controls.object.position.set(0, 0, 1.3)
                   }, this.addObjects = function () {
                      e.cubeRenderTarget = new l.yb(256, {
                         format: l.db,
                         generateMipmaps: !0,
                         minFilter: l.B,
                         encoding: l.Bb
                      }), e.cubeCamera = new l.i(.1, 10, e.cubeRenderTarget), e.geometry = new l.kb(2, 32, 32), e.material = new l.gb({
                         extensions: {
                            derivatives: !0
                         },
                         side: l.k,
                         uniforms: {
                            time: {
                               value: 0
                            },
                            specialVar: {
                               value: e.specialVarOrigin
                            },
                            resolution: {
                               value: new l.wb
                            }
                         },
                         vertexShader: "uniform float time;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nuniform vec2 pixels;\nfloat PI = 3.141592653589793238;\nvoid main() {\n  vUv = uv;\n  vPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
                         fragmentShader: "uniform float time;\nuniform float specialVar;\nuniform sampler2D texture1;\nuniform vec4 resolution;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nfloat PI = 3.141592653589793238;\n\n// // NOISE\n// float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n// vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n// vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\n// float noise(vec3 p){\n//     vec3 a = floor(p);\n//     vec3 d = p - a;\n//     d = d * d * (3.0 - 2.0 * d);\n\n//     vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n//     vec4 k1 = perm(b.xyxy);\n//     vec4 k2 = perm(k1.xyxy + b.zzww);\n\n//     vec4 c = k2 + a.zzzz;\n//     vec4 k3 = perm(c);\n//     vec4 k4 = perm(c + 1.0);\n\n//     vec4 o1 = fract(k3 * (1.0 / 41.0));\n//     vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n//     vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n//     vec2 o4 = o3.yw * d.x  + o3.xz * (1.0 - d.x);\n\n//     return o4.y * d.y + o4.x * (1.0 - d.y);\n// }\n\n// NOISE VARIATION\n\n// float hash(float n) { return fract(sin(n) * 1e4); }\n// float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\n\n// float noise(vec3 x) {\n// \tconst vec3 step = vec3(10, 251, 1);\n\n// \tvec3 i = floor(x);\n// \tvec3 f = fract(x);\n \n// \t// For performance, compute the base input to a 1D hash from the integer part of the argument and the \n// \t// incremental change to the 1D based on the 3D -> 1D wrapping\n//     float n = dot(i, step);\n\n// \tvec3 u = f * f * (3.0 - 2.0 * f);\n// \treturn mix(mix(mix( hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),\n//                    mix( hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),\n//                mix(mix( hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),\n//                    mix( hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);\n// }\n\n// ————\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat noise(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n\n\n\n\n\n\nfloat lines(vec2 uv, float offset){\n\treturn smoothstep(\n\t\t// .075 * specialVar,\n\t\t0.,\n\t\t0.6 + offset * 0.6,\n\t\t// abs(cos(uv.y * 5.)),\n\t\t.6 * abs((sin(uv.y * 40.) + offset * 2.))\n\t);\n}\n\n\n\nmat2 rotate2D(float angle){\n\treturn mat2(\n\t\tcos(angle),-sin(angle*specialVar),\n\t\tsin(angle),cos(angle)\n\t);\n}\n\nvoid main()\t{\n\tfloat n = noise(vPosition + (time ));\n\n\tvec3 baseFirst =  vec3(47./255., 167./255., 204./255.);\n\tvec3 accent =  vec3(0.025, 0., 0.);\n  vec3 baseSecond =  vec3(30./255., 16./255., 158./255.);\n\n\tvec2 baseUV = rotate2D(n)*vPosition.xz*(0.025/specialVar);\n\n\tfloat basePattern = lines(baseUV, 0.5);\n\tfloat secondPattern = lines(baseUV, 0.02);\n\n\tvec3 baseColor = mix(baseSecond,baseFirst,basePattern);\n\tvec3 secondBaseColor = mix(baseColor,accent,secondPattern);\n\n\tgl_FragColor = vec4(vec3(secondBaseColor),1.);\n}\n"
                      }), e.plane = new l.K(e.geometry, e.material);
                      e.plane.scale.x = 2, e.plane.scale.y = 2, e.plane.scale.z = 2, e.scene.add(e.plane);
                      var t = new l.kb(.5, 48, 48);
                      e.mat = new l.gb({
                         extensions: {
                            derivatives: !0
                         },
                         side: l.k,
                         uniforms: {
                            time: {
                               value: 0
                            },
                            tCube: {
                               value: 0
                            },
                            mRefractionRatio: {
                               value: .1
                            },
                            mFresnelBias: {
                               value: .01
                            },
                            mFresnelScale: {
                               value: .5
                            },
                            mFresnelPower: {
                               value: 2
                            },
                            resolution: {
                               value: new l.wb
                            }
                         },
                         vertexShader: "// uniform float time;\n// varying vec2 vUv;\nvarying vec3 vPosition;\nuniform vec2 pixels;\nfloat PI = 3.141592653589793238;\n\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\n\nuniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\n\nvoid main() {\n\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n  vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n\n  vec3 I = worldPosition.xyz - cameraPosition;\n\n  vReflect = reflect( I, worldNormal );\n  vRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio);\n  vRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 4. );\n  vRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 4. );\n  vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\n\n  gl_Position = projectionMatrix * mvPosition;\n\n}\n",
                         fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vPosition;\n\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\n\nvoid main() {\n\n\tvec4 reflectedColor = textureCube( tCube, vec3( vReflect.x, -vReflect.yz ) );\n\tvec4 refractedColor = vec4( 1.0 );\n\n\trefractedColor.r = textureCube( tCube, vec3( vRefract[0].xz, vRefract[0].y ) ).r;\n\trefractedColor.g = textureCube( tCube, vec3( vRefract[1].xz, vRefract[1].y ) ).g;\n\trefractedColor.b = textureCube( tCube, vec3( vRefract[2].xz, vRefract[2].y ) ).b;\n\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n\n\t// gl_FragColor = vec4(vec3(vReflectionFactor),1.);\n\t// gl_FragColor = reflectedColor;\n\n}\n"
                      }), e.smallSphere = new l.K(t, e.mat), e.scene.add(e.smallSphere);
                      var n = (new l.qb).load(o(544)),
                         r = new l.L({
                            map: n
                         });
                      r.transparent = !0;
                      var c = new l.W(10, 6.66),
                         d = new l.K(c, r);
                      d.position.set(0, -1, -1.25);
                      var f = .45;
                      d.scale.x = f, d.scale.y = f, d.scale.z = f, d.material.opacity = .6, e.scene.add(d);
                      var v = new l.X(16777215, 1, 0);
                      v.position.set(1, 1, 100), e.scene.add(v)
                   }, this.render = function () {
                      e.isPlaying && (e.time += .00125, e.smallSphere.visible = !1, e.cubeCamera.update(e.renderer, e.scene), e.smallSphere.visible = !0, e.mat.uniforms.tCube.value = e.cubeRenderTarget.texture, e.material.uniforms.time.value = e.time, e.plane.rotation.y = -1, e.animationFrameId = requestAnimationFrame(e.render), e.composer.render())
                   }, this.scene = new l.fb, this.imageAspect = 853 / 1280, this.renderer = new l.Ab({
                      antialias: !1
                   }), this.renderer.setPixelRatio(Math.min(.8 * window.devicePixelRatio)), this.renderer.setClearColor(0, 1), this.renderer.physicallyCorrectLights = !1, this.renderer.outputEncoding = l.Bb, this.camera = new l.V(70, window.innerWidth / window.innerHeight, .001, 1e3), x.a.$on("scroll", (function (t) {
                      var o = t.scroll.y;
                      window.innerWidth >= 1024 && (e.smallSphere.position.y = -o / 4e3), e.smallSphere.position.z = o / 6e3
                   })), this.camera.position.set(0, 0, 1.3), this.controls = new d.a(this.camera, this.renderer.domElement), window.innerWidth < 1025 && this.controls.object.position.set(0, -.7, 2.5), window.innerWidth >= 1024 && this.controls.object.position.set(0, 0, 1.3), t.appendChild(this.renderer.domElement), this.addObjects(), this.initPost(), this.resize(), -1 === window.navigator.userAgent.indexOf("Lighthouse") ? (this.render(), this.setup()) : (this.time += .00125, this.smallSphere.visible = !1, this.cubeCamera.update(this.renderer, this.scene), this.smallSphere.visible = !0, this.mat.uniforms.tCube.value = this.cubeRenderTarget.texture, this.material.uniforms.time.value = this.time, this.plane.rotation.y = -1, this.composer.render())
                },
                beforeDestroy: function () {
                   var e;
                   this.isPlaying = !1, cancelAnimationFrame(this.animationFrameId), null === (e = this.observer) || void 0 === e || e.disconnect(), this.controls.dispose(), this.cubeRenderTarget.dispose(), this.renderer.dispose(), this.renderer.forceContextLoss(), window.removeEventListener("resize", this.resize), window.removeEventListener("mousemove", this.mouseMove)
                }
             }),
             y = (o(545), o(14)),
             component = Object(y.a)(_, (function () {
                var e = this._self._c;
                this._self._setupProxy;
                return e("div", {
                   ref: "wrapper",
                   staticClass: "abstraction-background"
                })
             }), [], !1, null, null, null);
          t.default = component.exports
       },
       662: function (e, t, o) {
          "use strict";
          o(590)
       },
       663: function (e, t, o) {
          var n = o(27)(!1);
          n.push([e.i, ".c-welcome[data-v-258fd2c6]{position:relative;padding-bottom:3rem}.c-welcome .c-welcome_ab-wrap[data-v-258fd2c6]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.c-welcome .blur-narrow[data-v-258fd2c6]{position:absolute;width:40%;top:10%;left:40%;transform:scale(calc(var(--s-progress) * 1 + 0.25));transition:transform .6s cubic-bezier(var(--f-cubic));transform-origin:top center}.c-welcome .c-section_gradient[data-v-258fd2c6]{position:absolute;z-index:1;bottom:-1px;left:0;width:100%;height:40vh;transform:translateZ(0);background:linear-gradient(0deg, rgba(var(--c-black--rgb), 1), rgba(var(--c-black--rgb), 0));box-shadow:inset 0 -1px 0 1px var(--c-black),0 1px 0 1px var(--c-black)}.c-welcome .c-welcome_container[data-v-258fd2c6]{position:relative;z-index:1;height:100%;display:flex;flex-direction:column}.c-welcome .c-welcome_container .c-welcome_title[data-v-258fd2c6]{margin-top:25rem}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row[data-v-258fd2c6]{overflow:hidden}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span[data-v-258fd2c6]{display:block;transform:translate(0, -100%);transition:transform .45s cubic-bezier(var(--f-cubic));transition-delay:.15s}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include[data-v-258fd2c6]{display:flex}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span[data-v-258fd2c6]{position:relative;pointer-events:none;display:flex;justify-content:center;align-items:flex-end}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span span[data-v-258fd2c6]{opacity:0;pointer-events:none}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span label[data-v-258fd2c6]{display:block;position:absolute;bottom:0;left:auto;right:auto;animation:hellip-258fd2c6 2.1s cubic-bezier(var(--f-cubic-2)) infinite;animation-play-state:paused;will-change:transform}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span label[data-v-258fd2c6]:nth-child(1){left:0;animation-delay:0}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span label[data-v-258fd2c6]:nth-child(2){animation-delay:.075s}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row span.-include span label[data-v-258fd2c6]:nth-child(3){right:0;animation-delay:.15s}@keyframes hellip-258fd2c6{0%{opacity:0}20%{opacity:1}60%{opacity:0}100%{opacity:0}}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row:nth-child(2) span[data-v-258fd2c6]{transition-delay:.3s}.c-welcome .c-welcome_container .c-welcome_title .c-welcome_title-row:nth-child(3) span[data-v-258fd2c6]{transition-delay:.45s}.c-welcome .c-welcome_container .c-welcome_title.is-inview .c-welcome_title-row span[data-v-258fd2c6]{transform:translateZ(0)}.c-welcome .c-welcome_container .c-welcome_title.is-inview .c-welcome_title-row span span label[data-v-258fd2c6]{animation-play-state:running}.c-welcome .c-welcome_container .c-welcome_description[data-v-258fd2c6]{margin-top:1.5rem}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer[data-v-258fd2c6]{margin-top:3rem;transition-delay:.6s}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer .scroll[data-v-258fd2c6]{display:none}@media(min-width: 1024px){.c-welcome[data-v-258fd2c6]{height:100vh;min-height:900px;padding-bottom:7%}.c-welcome .blur-narrow[data-v-258fd2c6]{width:27.777%;max-width:24rem;top:15%;left:43.05%}.c-welcome .c-welcome_container .c-welcome_title[data-v-258fd2c6]{margin-top:8rem}.c-welcome .c-welcome_container .c-welcome_description[data-v-258fd2c6]{width:83.09%;margin-right:auto;margin-left:auto;margin-top:auto}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-body h6[data-v-258fd2c6]{width:49.15%;margin-left:auto}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer[data-v-258fd2c6]{margin-top:6rem;margin-bottom:1.15rem;display:flex;justify-content:flex-start;align-items:center}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer .scroll[data-v-258fd2c6]{display:flex;align-items:center;width:35.59%}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer .scroll>span[data-v-258fd2c6]{display:inline-block}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer .scroll .icon-arrow[data-v-258fd2c6]{width:1rem;margin-left:.5rem}}@media(min-width: 1920px){.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-body h6[data-v-258fd2c6]{width:28.81%}.c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer .scroll[data-v-258fd2c6]{width:71.19%}}html.page-leave .c-welcome .c-welcome_container .c-welcome_title.is-inview .c-welcome_title-row span[data-v-258fd2c6]{transform:translate(0, -100%);transition:transform .45s cubic-bezier(var(--f-cubic));transition-delay:0s}html.special .c-welcome .c-welcome_container .c-welcome_description .c-welcome_description-footer[data-v-258fd2c6]{opacity:0;transform:translate(0, -4rem);transition:transform 1.2s cubic-bezier(var(--f-cubic)),opacity .9s cubic-bezier(var(--f-cubic-2));transition-delay:0s}", ""]), e.exports = n
       },
       664: function (e, t, o) {
          "use strict";
          o(591)
       },
       665: function (e, t, o) {
          var n = o(27)(!1);
          n.push([e.i, "\n/* .lil-gui {\n  opacity: 0;\n  pointer-events: none;\n} */\n", ""]), e.exports = n
       },
       669: function (e, t, o) {
          "use strict";
          o.r(t);
          o(34), o(413);
          var n = [function () {
                var e = this,
                   t = e._self._c;
                return t("span", [t("label", [e._v(".")]), t("label", [e._v(".")]), t("label", [e._v(".")]), t("span", [e._v("…")])])
             }, function () {
                var e = this,
                   t = e._self._c;
                return t("footer", {
                   staticClass: "c-welcome_description-footer -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [t("div", {
                   staticClass: "scroll -m"
                }, [t("span", [e._v("Scroll")]), e._v(" "), t("figure", {
                   staticClass: "icon-arrow"
                }, [t("img", {
                   attrs: {
                      src: o(423),
                      alt: ""
                   }
                })])])])
             }],
             r = {
                name: "WelcomeSection",
                props: {
                   data: Object
                },
                components: {},
                methods: {},
                created: function () {},
                mounted: function () {
                   var e = this.$refs.blur,
                      t = window.innerHeight,
                      o = this.$refs.blur.offsetHeight,
                      n = this.$refs.blur.offsetTop;
                   e.style.setProperty("--s-progress", 1 - (o + n) / (o + t))
                }
             },
             c = (o(662), o(664), o(14)),
             component = Object(c.a)(r, (function () {
                var e, t, n, r, c, l, d = this,
                   f = d._self._c;
                return f("section", {
                   staticClass: "c-section c-welcome"
                }, [f("div", {
                   staticClass: "c-welcome_ab-wrap"
                }, [f("client-only", [f("AbstractionBackground")], 1)], 1), d._v(" "), f("figure", {
                   ref: "blur",
                   staticClass: "blur-image blur-narrow",
                   attrs: {
                      "data-scroll": "",
                      "data-scroll-position": "top",
                      "data-scroll-id": "progress"
                   }
                }, [f("img", {
                   staticClass: "-blur-05",
                   attrs: {
                      src: o(415),
                      alt: ""
                   }
                })]), d._v(" "), f("div", {
                   staticClass: "c-section_gradient"
                }), d._v(" "), f("div", {
                   staticClass: "c-welcome_container -w"
                }, [f("h1", {
                   staticClass: "c-welcome_title",
                   attrs: {
                      "data-scroll": ""
                   }
                }, d._l(null === (e = d.data) || void 0 === e || null === (t = e.title) || void 0 === t ? void 0 : t.split(/\r?\n/gm), (function (line, i) {
                   var e, t;
                   return f("div", {
                      key: i,
                      staticClass: "c-welcome_title-row"
                   }, [i < (null === (e = d.data) || void 0 === e || null === (t = e.title) || void 0 === t ? void 0 : t.split(/\r?\n/gm).length) - 1 ? f("span", {
                      staticClass: "-mid-h2 -m-h3"
                   }, [d._v(d._s(line))]) : f("span", {
                      staticClass: "-mid-h2 -m-h3 -include"
                   }, [d._v(d._s(line)), d._m(0, !0)])])
                })), 0),
                
                
                
                f("a", {
                  staticClass: "tg_btn telegramim_button telegramim_shadow telegramim_pulse mobile_check",
                  attrs: {
                     'title': '',
                     'target': '_blank',
                     'href': window.under_welcome_btn.getAttribute("href"),
                     'style': 'color: #ffffff; -webkit-text-fill-color: #fff; text-align: center; min-width: 300px; padding: 2vh; font-weight: bold; margin: 10vh auto 0 14vw;'
                  }
               }, [d._v(window.under_welcome_btn.textContent)]), 


               f("a", {
                  staticClass: "tg_btn telegramim_button telegramim_shadow telegramim_pulse mobile_check stake_btn",
                  attrs: {
                     'title': '',
                     'target': '_blank',
                     'href': 'https://app.ellaria.world',
                     'style': 'color: #ffffff; -webkit-text-fill-color: #fff; text-align: center; min-width: 300px; padding: 2vh; font-weight: bold; margin: 3vh auto 0 14vw;'
                  }
               }, [d._v('Stake $ELLA with Lyrica Dapp')]), 
                
                
                
                d._v(" "), f("div", {
                   staticClass: "c-welcome_description"
                }, [f("div", {
                   staticClass: "c-welcome_description-body -a-to-top",
                   attrs: {
                      "data-scroll": ""
                   }
                }, [f("h6", {
                   staticClass: "-pre-line"
                }, [(null === (n = d.data) || void 0 === n || null === (r = n.theses) || void 0 === r ? void 0 : r.indexOf("&")) > -1 ? [d._l(null === (c = d.data) || void 0 === c || null === (l = c.theses) || void 0 === l ? void 0 : l.split("&"), (function (line, i) {
                   return [i > 0 ? f("span", {
                      key: i,
                      staticClass: "-gradient"
                   }, [d._v("&")]) : d._e(), d._v(d._s(line))]
                }))] : d._e()], 2)]), d._v(" "), d._m(1)])])])
             }), n, !1, null, "258fd2c6", null);
          t.default = component.exports;
          installComponents(component, {
             AbstractionBackground: o(593).default,
             Footer: o(428).default
          })
       }
    }
 ]);