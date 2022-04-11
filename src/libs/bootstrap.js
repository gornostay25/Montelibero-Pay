/* @popperjs/core v2.6.0 - MIT License */
"use strict";
!function(e, t) {
    t((e = e || self).Popper = {})
}(this, (function(e) {
    function t(e) {
        return {
            width: (e = e.getBoundingClientRect()).width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function n(e) {
        return "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e
    }
    function r(e) {
        return {
            scrollLeft: (e = n(e)).pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function o(e) {
        return e instanceof n(e).Element || e instanceof Element
    }
    function i(e) {
        return e instanceof n(e).HTMLElement || e instanceof HTMLElement
    }
    function a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function s(e) {
        return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function f(e) {
        return t(s(e)).left + r(e).scrollLeft
    }
    function c(e) {
        return n(e).getComputedStyle(e)
    }
    function p(e) {
        return e = c(e),
        /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    }
    function l(e, o, c) {
        void 0 === c && (c = !1);
        var l = s(o);
        e = t(e);
        var u = i(o)
          , d = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , m = {
            x: 0,
            y: 0
        };
        return (u || !u && !c) && (("body" !== a(o) || p(l)) && (d = o !== n(o) && i(o) ? {
            scrollLeft: o.scrollLeft,
            scrollTop: o.scrollTop
        } : r(o)),
        i(o) ? ((m = t(o)).x += o.clientLeft,
        m.y += o.clientTop) : l && (m.x = f(l))),
        {
            x: e.left + d.scrollLeft - m.x,
            y: e.top + d.scrollTop - m.y,
            width: e.width,
            height: e.height
        }
    }
    function u(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function d(e) {
        return "html" === a(e) ? e : e.assignedSlot || e.parentNode || e.host || s(e)
    }
    function m(e, t) {
        void 0 === t && (t = []);
        var r = function e(t) {
            return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : i(t) && p(t) ? t : e(d(t))
        }(e);
        e = "body" === a(r);
        var o = n(r);
        return r = e ? [o].concat(o.visualViewport || [], p(r) ? r : []) : r,
        t = t.concat(r),
        e ? t : t.concat(m(d(r)))
    }
    function h(e) {
        if (!i(e) || "fixed" === c(e).position)
            return null;
        if (e = e.offsetParent) {
            var t = s(e);
            if ("body" === a(e) && "static" === c(e).position && "static" !== c(t).position)
                return t
        }
        return e
    }
    function g(e) {
        for (var t = n(e), r = h(e); r && 0 <= ["table", "td", "th"].indexOf(a(r)) && "static" === c(r).position; )
            r = h(r);
        if (r && "body" === a(r) && "static" === c(r).position)
            return t;
        if (!r)
            e: {
                for (e = d(e); i(e) && 0 > ["html", "body"].indexOf(a(e)); ) {
                    if ("none" !== (r = c(e)).transform || "none" !== r.perspective || r.willChange && "auto" !== r.willChange) {
                        r = e;
                        break e
                    }
                    e = e.parentNode
                }
                r = null
            }
        return r || t
    }
    function v(e) {
        var t = new Map
          , n = new Set
          , r = [];
        return e.forEach((function(e) {
            t.set(e.name, e)
        }
        )),
        e.forEach((function(e) {
            n.has(e.name) || function e(o) {
                n.add(o.name),
                [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
                    n.has(r) || (r = t.get(r)) && e(r)
                }
                )),
                r.push(o)
            }(e)
        }
        )),
        r
    }
    function b(e) {
        var t;
        return function() {
            return t || (t = new Promise((function(n) {
                Promise.resolve().then((function() {
                    t = void 0,
                    n(e())
                }
                ))
            }
            ))),
            t
        }
    }
    function y(e) {
        return e.split("-")[0]
    }
    function O(e, t) {
        var r, o = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if ((r = o) && (r = o instanceof (r = n(o).ShadowRoot) || o instanceof ShadowRoot),
        r)
            do {
                if (t && e.isSameNode(t))
                    return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }
    function w(e) {
        return Object.assign(Object.assign({}, e), {}, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function x(e, o) {
        if ("viewport" === o) {
            o = n(e);
            var a = s(e);
            o = o.visualViewport;
            var p = a.clientWidth;
            a = a.clientHeight;
            var l = 0
              , u = 0;
            o && (p = o.width,
            a = o.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = o.offsetLeft,
            u = o.offsetTop)),
            e = w(e = {
                width: p,
                height: a,
                x: l + f(e),
                y: u
            })
        } else
            i(o) ? ((e = t(o)).top += o.clientTop,
            e.left += o.clientLeft,
            e.bottom = e.top + o.clientHeight,
            e.right = e.left + o.clientWidth,
            e.width = o.clientWidth,
            e.height = o.clientHeight,
            e.x = e.left,
            e.y = e.top) : (u = s(e),
            e = s(u),
            l = r(u),
            o = u.ownerDocument.body,
            p = Math.max(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = Math.max(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            u = -l.scrollLeft + f(u),
            l = -l.scrollTop,
            "rtl" === c(o || e).direction && (u += Math.max(e.clientWidth, o ? o.clientWidth : 0) - p),
            e = w({
                width: p,
                height: a,
                x: u,
                y: l
            }));
        return e
    }
    function j(e, t, n) {
        return t = "clippingParents" === t ? function(e) {
            var t = m(d(e))
              , n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? g(e) : e;
            return o(n) ? t.filter((function(e) {
                return o(e) && O(e, n) && "body" !== a(e)
            }
            )) : []
        }(e) : [].concat(t),
        (n = (n = [].concat(t, [n])).reduce((function(t, n) {
            return n = x(e, n),
            t.top = Math.max(n.top, t.top),
            t.right = Math.min(n.right, t.right),
            t.bottom = Math.min(n.bottom, t.bottom),
            t.left = Math.max(n.left, t.left),
            t
        }
        ), x(e, n[0]))).width = n.right - n.left,
        n.height = n.bottom - n.top,
        n.x = n.left,
        n.y = n.top,
        n
    }
    function M(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }
    function E(e) {
        var t = e.reference
          , n = e.element
          , r = (e = e.placement) ? y(e) : null;
        e = e ? e.split("-")[1] : null;
        var o = t.x + t.width / 2 - n.width / 2
          , i = t.y + t.height / 2 - n.height / 2;
        switch (r) {
        case "top":
            o = {
                x: o,
                y: t.y - n.height
            };
            break;
        case "bottom":
            o = {
                x: o,
                y: t.y + t.height
            };
            break;
        case "right":
            o = {
                x: t.x + t.width,
                y: i
            };
            break;
        case "left":
            o = {
                x: t.x - n.width,
                y: i
            };
            break;
        default:
            o = {
                x: t.x,
                y: t.y
            }
        }
        if (null != (r = r ? M(r) : null))
            switch (i = "y" === r ? "height" : "width",
            e) {
            case "start":
                o[r] -= t[i] / 2 - n[i] / 2;
                break;
            case "end":
                o[r] += t[i] / 2 - n[i] / 2
            }
        return o
    }
    function D(e) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), e)
    }
    function P(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e,
            t
        }
        ), {})
    }
    function L(e, n) {
        void 0 === n && (n = {});
        var r = n;
        n = void 0 === (n = r.placement) ? e.placement : n;
        var i = r.boundary
          , a = void 0 === i ? "clippingParents" : i
          , f = void 0 === (i = r.rootBoundary) ? "viewport" : i;
        i = void 0 === (i = r.elementContext) ? "popper" : i;
        var c = r.altBoundary
          , p = void 0 !== c && c;
        r = D("number" != typeof (r = void 0 === (r = r.padding) ? 0 : r) ? r : P(r, T));
        var l = e.elements.reference;
        c = e.rects.popper,
        a = j(o(p = e.elements[p ? "popper" === i ? "reference" : "popper" : i]) ? p : p.contextElement || s(e.elements.popper), a, f),
        p = E({
            reference: f = t(l),
            element: c,
            strategy: "absolute",
            placement: n
        }),
        c = w(Object.assign(Object.assign({}, c), p)),
        f = "popper" === i ? c : f;
        var u = {
            top: a.top - f.top + r.top,
            bottom: f.bottom - a.bottom + r.bottom,
            left: a.left - f.left + r.left,
            right: f.right - a.right + r.right
        };
        if (e = e.modifiersData.offset,
        "popper" === i && e) {
            var d = e[n];
            Object.keys(u).forEach((function(e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1
                  , n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                u[e] += d[n] * t
            }
            ))
        }
        return u
    }
    function k() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }
        ))
    }
    function B(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers
          , n = void 0 === t ? [] : t
          , r = void 0 === (e = e.defaultOptions) ? V : e;
        return function(e, t, i) {
            function a() {
                f.forEach((function(e) {
                    return e()
                }
                )),
                f = []
            }
            void 0 === i && (i = r);
            var s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, V), r),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }
              , f = []
              , c = !1
              , p = {
                state: s,
                setOptions: function(i) {
                    return a(),
                    s.options = Object.assign(Object.assign(Object.assign({}, r), s.options), i),
                    s.scrollParents = {
                        reference: o(e) ? m(e) : e.contextElement ? m(e.contextElement) : [],
                        popper: m(t)
                    },
                    i = function(e) {
                        var t = v(e);
                        return N.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                            )))
                        }
                        ), [])
                    }(function(e) {
                        var t = e.reduce((function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                                options: Object.assign(Object.assign({}, n.options), t.options),
                                data: Object.assign(Object.assign({}, n.data), t.data)
                            }) : t,
                            e
                        }
                        ), {});
                        return Object.keys(t).map((function(e) {
                            return t[e]
                        }
                        ))
                    }([].concat(n, s.options.modifiers))),
                    s.orderedModifiers = i.filter((function(e) {
                        return e.enabled
                    }
                    )),
                    s.orderedModifiers.forEach((function(e) {
                        var t = e.name
                          , n = e.options;
                        n = void 0 === n ? {} : n,
                        "function" == typeof (e = e.effect) && (t = e({
                            state: s,
                            name: t,
                            instance: p,
                            options: n
                        }),
                        f.push(t || function() {}
                        ))
                    }
                    )),
                    p.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var e = s.elements
                          , t = e.reference;
                        if (k(t, e = e.popper))
                            for (s.rects = {
                                reference: l(t, g(e), "fixed" === s.options.strategy),
                                popper: u(e)
                            },
                            s.reset = !1,
                            s.placement = s.options.placement,
                            s.orderedModifiers.forEach((function(e) {
                                return s.modifiersData[e.name] = Object.assign({}, e.data)
                            }
                            )),
                            t = 0; t < s.orderedModifiers.length; t++)
                                if (!0 === s.reset)
                                    s.reset = !1,
                                    t = -1;
                                else {
                                    var n = s.orderedModifiers[t];
                                    e = n.fn;
                                    var r = n.options;
                                    r = void 0 === r ? {} : r,
                                    n = n.name,
                                    "function" == typeof e && (s = e({
                                        state: s,
                                        options: r,
                                        name: n,
                                        instance: p
                                    }) || s)
                                }
                    }
                },
                update: b((function() {
                    return new Promise((function(e) {
                        p.forceUpdate(),
                        e(s)
                    }
                    ))
                }
                )),
                destroy: function() {
                    a(),
                    c = !0
                }
            };
            return k(e, t) ? (p.setOptions(i).then((function(e) {
                !c && i.onFirstUpdate && i.onFirstUpdate(e)
            }
            )),
            p) : p
        }
    }
    function W(e) {
        var t, r = e.popper, o = e.popperRect, i = e.placement, a = e.offsets, f = e.position, c = e.gpuAcceleration, p = e.adaptive;
        e.roundOffsets ? (e = window.devicePixelRatio || 1,
        e = {
            x: Math.round(a.x * e) / e || 0,
            y: Math.round(a.y * e) / e || 0
        }) : e = a;
        var l = e;
        e = void 0 === (e = l.x) ? 0 : e,
        l = void 0 === (l = l.y) ? 0 : l;
        var u = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var d, m = "left", h = "top", v = window;
        if (p) {
            var b = g(r);
            b === n(r) && (b = s(r)),
            "top" === i && (h = "bottom",
            l -= b.clientHeight - o.height,
            l *= c ? 1 : -1),
            "left" === i && (m = "right",
            e -= b.clientWidth - o.width,
            e *= c ? 1 : -1)
        }
        return r = Object.assign({
            position: f
        }, p && z),
        c ? Object.assign(Object.assign({}, r), {}, ((d = {})[h] = a ? "0" : "",
        d[m] = u ? "0" : "",
        d.transform = 2 > (v.devicePixelRatio || 1) ? "translate(" + e + "px, " + l + "px)" : "translate3d(" + e + "px, " + l + "px, 0)",
        d)) : Object.assign(Object.assign({}, r), {}, ((t = {})[h] = a ? l + "px" : "",
        t[m] = u ? e + "px" : "",
        t.transform = "",
        t))
    }
    function A(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return G[e]
        }
        ))
    }
    function H(e) {
        return e.replace(/start|end/g, (function(e) {
            return J[e]
        }
        ))
    }
    function R(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function S(e) {
        return ["top", "right", "bottom", "left"].some((function(t) {
            return 0 <= e[t]
        }
        ))
    }
    var T = ["top", "bottom", "right", "left"]
      , q = T.reduce((function(e, t) {
        return e.concat([t + "-start", t + "-end"])
    }
    ), [])
      , C = [].concat(T, ["auto"]).reduce((function(e, t) {
        return e.concat([t, t + "-start", t + "-end"])
    }
    ), [])
      , N = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" ")
      , V = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    }
      , I = {
        passive: !0
    }
      , _ = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state
              , r = e.instance
              , o = (e = e.options).scroll
              , i = void 0 === o || o
              , a = void 0 === (e = e.resize) || e
              , s = n(t.elements.popper)
              , f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return i && f.forEach((function(e) {
                e.addEventListener("scroll", r.update, I)
            }
            )),
            a && s.addEventListener("resize", r.update, I),
            function() {
                i && f.forEach((function(e) {
                    e.removeEventListener("scroll", r.update, I)
                }
                )),
                a && s.removeEventListener("resize", r.update, I)
            }
        },
        data: {}
    }
      , U = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state;
            t.modifiersData[e.name] = E({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , z = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }
      , F = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            e = void 0 === (e = n.gpuAcceleration) || e;
            var r = n.adaptive;
            r = void 0 === r || r,
            n = void 0 === (n = n.roundOffsets) || n,
            e = {
                placement: y(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: e
            },
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), W(Object.assign(Object.assign({}, e), {}, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: r,
                roundOffsets: n
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), W(Object.assign(Object.assign({}, e), {}, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n
            })))),
            t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    }
      , X = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {}
                  , r = t.attributes[e] || {}
                  , o = t.elements[e];
                i(o) && a(o) && (Object.assign(o.style, n),
                Object.keys(r).forEach((function(e) {
                    var t = r[e];
                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                }
                )))
            }
            ))
        },
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e]
                      , o = t.attributes[e] || {};
                    e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "",
                        e
                    }
                    ), {}),
                    i(r) && a(r) && (Object.assign(r.style, e),
                    Object.keys(o).forEach((function(e) {
                        r.removeAttribute(e)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    }
      , Y = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state
              , n = e.name
              , r = void 0 === (e = e.options.offset) ? [0, 0] : e
              , o = (e = C.reduce((function(e, n) {
                var o = t.rects
                  , i = y(n)
                  , a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1
                  , s = "function" == typeof r ? r(Object.assign(Object.assign({}, o), {}, {
                    placement: n
                })) : r;
                return o = (o = s[0]) || 0,
                s = ((s = s[1]) || 0) * a,
                i = 0 <= ["left", "right"].indexOf(i) ? {
                    x: s,
                    y: o
                } : {
                    x: o,
                    y: s
                },
                e[n] = i,
                e
            }
            ), {}))[t.placement]
              , i = o.x;
            o = o.y,
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i,
            t.modifiersData.popperOffsets.y += o),
            t.modifiersData[n] = e
        }
    }
      , G = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
      , J = {
        start: "end",
        end: "start"
    }
      , K = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            if (e = e.name,
            !t.modifiersData[e]._skip) {
                var r = n.mainAxis;
                r = void 0 === r || r;
                var o = n.altAxis;
                o = void 0 === o || o;
                var i = n.fallbackPlacements
                  , a = n.padding
                  , s = n.boundary
                  , f = n.rootBoundary
                  , c = n.altBoundary
                  , p = n.flipVariations
                  , l = void 0 === p || p
                  , u = n.allowedAutoPlacements;
                p = y(n = t.options.placement),
                i = i || (p !== n && l ? function(e) {
                    if ("auto" === y(e))
                        return [];
                    var t = A(e);
                    return [H(e), t, H(t)]
                }(n) : [A(n)]);
                var d = [n].concat(i).reduce((function(e, n) {
                    return e.concat("auto" === y(n) ? function(e, t) {
                        void 0 === t && (t = {});
                        var n = t.boundary
                          , r = t.rootBoundary
                          , o = t.padding
                          , i = t.flipVariations
                          , a = t.allowedAutoPlacements
                          , s = void 0 === a ? C : a
                          , f = t.placement.split("-")[1];
                        0 === (i = (t = f ? i ? q : q.filter((function(e) {
                            return e.split("-")[1] === f
                        }
                        )) : T).filter((function(e) {
                            return 0 <= s.indexOf(e)
                        }
                        ))).length && (i = t);
                        var c = i.reduce((function(t, i) {
                            return t[i] = L(e, {
                                placement: i,
                                boundary: n,
                                rootBoundary: r,
                                padding: o
                            })[y(i)],
                            t
                        }
                        ), {});
                        return Object.keys(c).sort((function(e, t) {
                            return c[e] - c[t]
                        }
                        ))
                    }(t, {
                        placement: n,
                        boundary: s,
                        rootBoundary: f,
                        padding: a,
                        flipVariations: l,
                        allowedAutoPlacements: u
                    }) : n)
                }
                ), []);
                n = t.rects.reference,
                i = t.rects.popper;
                var m = new Map;
                p = !0;
                for (var h = d[0], g = 0; g < d.length; g++) {
                    var v = d[g]
                      , b = y(v)
                      , O = "start" === v.split("-")[1]
                      , w = 0 <= ["top", "bottom"].indexOf(b)
                      , x = w ? "width" : "height"
                      , j = L(t, {
                        placement: v,
                        boundary: s,
                        rootBoundary: f,
                        altBoundary: c,
                        padding: a
                    });
                    if (O = w ? O ? "right" : "left" : O ? "bottom" : "top",
                    n[x] > i[x] && (O = A(O)),
                    x = A(O),
                    w = [],
                    r && w.push(0 >= j[b]),
                    o && w.push(0 >= j[O], 0 >= j[x]),
                    w.every((function(e) {
                        return e
                    }
                    ))) {
                        h = v,
                        p = !1;
                        break
                    }
                    m.set(v, w)
                }
                if (p)
                    for (r = function(e) {
                        var t = d.find((function(t) {
                            if (t = m.get(t))
                                return t.slice(0, e).every((function(e) {
                                    return e
                                }
                                ))
                        }
                        ));
                        if (t)
                            return h = t,
                            "break"
                    }
                    ,
                    o = l ? 3 : 1; 0 < o && "break" !== r(o); o--)
                        ;
                t.placement !== h && (t.modifiersData[e]._skip = !0,
                t.placement = h,
                t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    }
      , Q = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            e = e.name;
            var r = n.mainAxis
              , o = void 0 === r || r;
            r = void 0 !== (r = n.altAxis) && r;
            var i = n.tether;
            i = void 0 === i || i;
            var a = n.tetherOffset
              , s = void 0 === a ? 0 : a;
            n = L(t, {
                boundary: n.boundary,
                rootBoundary: n.rootBoundary,
                padding: n.padding,
                altBoundary: n.altBoundary
            }),
            a = y(t.placement);
            var f = t.placement.split("-")[1]
              , c = !f
              , p = M(a);
            a = "x" === p ? "y" : "x";
            var l = t.modifiersData.popperOffsets
              , d = t.rects.reference
              , m = t.rects.popper
              , h = "function" == typeof s ? s(Object.assign(Object.assign({}, t.rects), {}, {
                placement: t.placement
            })) : s;
            if (s = {
                x: 0,
                y: 0
            },
            l) {
                if (o) {
                    var v = "y" === p ? "top" : "left"
                      , b = "y" === p ? "bottom" : "right"
                      , O = "y" === p ? "height" : "width";
                    o = l[p];
                    var w = l[p] + n[v]
                      , x = l[p] - n[b]
                      , j = i ? -m[O] / 2 : 0
                      , E = "start" === f ? d[O] : m[O];
                    f = "start" === f ? -m[O] : -d[O],
                    m = t.elements.arrow,
                    m = i && m ? u(m) : {
                        width: 0,
                        height: 0
                    };
                    var D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    v = D[v],
                    b = D[b],
                    m = Math.max(0, Math.min(d[O], m[O])),
                    E = c ? d[O] / 2 - j - m - v - h : E - m - v - h,
                    c = c ? -d[O] / 2 + j + m + b + h : f + m + b + h,
                    h = t.elements.arrow && g(t.elements.arrow),
                    d = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0,
                    h = l[p] + E - d - (h ? "y" === p ? h.clientTop || 0 : h.clientLeft || 0 : 0),
                    c = l[p] + c - d,
                    i = Math.max(i ? Math.min(w, h) : w, Math.min(o, i ? Math.max(x, c) : x)),
                    l[p] = i,
                    s[p] = i - o
                }
                r && (r = l[a],
                i = Math.max(r + n["x" === p ? "top" : "left"], Math.min(r, r - n["x" === p ? "bottom" : "right"])),
                l[a] = i,
                s[a] = i - r),
                t.modifiersData[e] = s
            }
        },
        requiresIfExists: ["offset"]
    }
      , Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state;
            e = e.name;
            var r = n.elements.arrow
              , o = n.modifiersData.popperOffsets
              , i = y(n.placement)
              , a = M(i);
            if (i = 0 <= ["left", "right"].indexOf(i) ? "height" : "width",
            r && o) {
                var s = n.modifiersData[e + "#persistent"].padding
                  , f = u(r)
                  , c = "y" === a ? "top" : "left"
                  , p = "y" === a ? "bottom" : "right"
                  , l = n.rects.reference[i] + n.rects.reference[a] - o[a] - n.rects.popper[i];
                o = o[a] - n.rects.reference[a],
                l = (r = (r = g(r)) ? "y" === a ? r.clientHeight || 0 : r.clientWidth || 0 : 0) / 2 - f[i] / 2 + (l / 2 - o / 2),
                i = Math.max(s[c], Math.min(l, r - f[i] - s[p])),
                n.modifiersData[e] = ((t = {})[a] = i,
                t.centerOffset = i - l,
                t)
            }
        },
        effect: function(e) {
            var t = e.state
              , n = e.options;
            e = e.name;
            var r = n.element;
            if (r = void 0 === r ? "[data-popper-arrow]" : r,
            n = void 0 === (n = n.padding) ? 0 : n,
            null != r) {
                if ("string" == typeof r && !(r = t.elements.popper.querySelector(r)))
                    return;
                O(t.elements.popper, r) && (t.elements.arrow = r,
                t.modifiersData[e + "#persistent"] = {
                    padding: D("number" != typeof n ? n : P(n, T))
                })
            }
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , $ = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state;
            e = e.name;
            var n = t.rects.reference
              , r = t.rects.popper
              , o = t.modifiersData.preventOverflow
              , i = L(t, {
                elementContext: "reference"
            })
              , a = L(t, {
                altBoundary: !0
            });
            n = R(i, n),
            r = R(a, r, o),
            o = S(n),
            a = S(r),
            t.modifiersData[e] = {
                referenceClippingOffsets: n,
                popperEscapeOffsets: r,
                isReferenceHidden: o,
                hasPopperEscaped: a
            },
            t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                "data-popper-reference-hidden": o,
                "data-popper-escaped": a
            })
        }
    }
      , ee = B({
        defaultModifiers: [_, U, F, X]
    })
      , te = [_, U, F, X, Y, K, Q, Z, $]
      , ne = B({
        defaultModifiers: te
    });
    e.applyStyles = X,
    e.arrow = Z,
    e.computeStyles = F,
    e.createPopper = ne,
    e.createPopperLite = ee,
    e.defaultModifiers = te,
    e.detectOverflow = L,
    e.eventListeners = _,
    e.flip = K,
    e.hide = $,
    e.offset = Y,
    e.popperGenerator = B,
    e.popperOffsets = U,
    e.preventOverflow = Q,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));

/*
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (global, factory) {
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper))
})(this, (function (Popper) {
'use strict';

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null);
    if (e) {
    for (const k in e) {
        if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
        });
        }
    }
    }
    n.default = e;
    return Object.freeze(n);
}

const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const toType = obj => {
    if (obj === null || obj === undefined) {
    return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const getUID = prefix => {
    do {
    prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
};

const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
};

const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
    return document.querySelector(selector) ? selector : null;
    }

    return null;
};

const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
    if (!element) {
    return 0;
    } // Get transition-duration of the element


    let {
    transitionDuration,
    transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = obj => {
    if (!obj || typeof obj !== 'object') {
    return false;
    }

    if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
};

const getElement = obj => {
    if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
    }

    return null;
};

const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
    });
};

const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
    }

    if (element.classList.contains('disabled')) {
    return true;
    }

    if (typeof element.disabled !== 'undefined') {
    return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
    return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
    return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
    return null;
    }

    return findShadowRoot(element.parentNode);
};

const noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const reflow = element => {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};

const DOMContentLoadedCallbacks = [];

const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
        DOMContentLoadedCallbacks.forEach(callback => callback());
        });
    }

    DOMContentLoadedCallbacks.push(callback);
    } else {
    callback();
    }
};

const isRTL = () => document.documentElement.dir === 'rtl';

const execute = callback => {
    if (typeof callback === 'function') {
    callback();
    }
};

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
    execute(callback);
    return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
    target
    }) => {
    if (target !== transitionElement) {
        return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
    if (!called) {
        triggerTransitionEnd(transitionElement);
    }
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
    index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage

let uidEvent = 1;
const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}

function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
    return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
    };
}

function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
        target
    } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
        }
        }
    } // To please ESLint


    return null;
    };
}

function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
    }
    }

    return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
    typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
    return;
    }

    if (!handler) {
    handler = delegationFn;
    delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
    const wrapFn = fn => {
        return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
        }
        };
    };

    if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
    } else {
        handler = wrapFn(handler);
    }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
    return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
    });
}

function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
}

const EventHandler = {
    on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
        return;
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
        return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
    }

    if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
    },

    trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
        return null;
    }

    const typeEvent = getTypeEvent(event);
    const isNative = nativeEvents.has(typeEvent);
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
    } else {
        evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
        });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
            get() {
            return args[key];
            }

        });
        });
    }

    if (defaultPrevented) {
        evt.preventDefault();
    }

    if (nativeDispatch) {
        element.dispatchEvent(evt);
    }

    return evt;
    }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const elementMap = new Map();
const Data = {
    set(element, key, instance) {
    if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
    }

    instanceMap.set(key, instance);
    },

    get(element, key) {
    if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
    }

    return null;
    },

    remove(element, key) {
    if (!elementMap.has(element)) {
        return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
        elementMap.delete(element);
    }
    }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION = '5.1.3';

class BaseComponent {
    constructor(element) {
    element = getElement(element);

    if (!element) {
        return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
    });
    }

    _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */


    static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
    return VERSION;
    }

    static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
    return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
    }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
    }

    if (isDisabled(this)) {
        return;
    }

    const target = getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
    });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$d = 'alert';
const DATA_KEY$c = 'bs.alert';
const EVENT_KEY$c = `.${DATA_KEY$c}`;
const EVENT_CLOSE = `close${EVENT_KEY$c}`;
const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Alert extends BaseComponent {
    // Getters
    static get NAME() {
    return NAME$d;
    } // Public


    close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
        return;
    }

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
    this._element.remove();

    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
    } // Static


}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


enableDismissTrigger(Alert, 'close');

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$c = 'button';
const DATA_KEY$b = 'bs.button';
const EVENT_KEY$b = `.${DATA_KEY$b}`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button extends BaseComponent {
    // Getters
    static get NAME() {
    return NAME$c;
    } // Public


    toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
    if (val === 'true') {
    return true;
    }

    if (val === 'false') {
    return false;
    }

    if (val === Number(val).toString()) {
    return Number(val);
    }

    if (val === '' || val === 'null') {
    return null;
    }

    return val;
}

function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
    setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
    if (!element) {
        return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
    },

    getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    };
    },

    position(element) {
    return {
        top: element.offsetTop,
        left: element.offsetLeft
    };
    }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const NODE_TEXT = 3;
const SelectorEngine = {
    find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
        parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
    }

    return parents;
    },

    prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
        if (previous.matches(selector)) {
        return [previous];
        }

        previous = previous.previousElementSibling;
    }

    return [];
    },

    next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
        if (next.matches(selector)) {
        return [next];
        }

        next = next.nextElementSibling;
    }

    return [];
    },

    focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$b = 'carousel';
const DATA_KEY$a = 'bs.carousel';
const EVENT_KEY$a = `.${DATA_KEY$a}`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const SWIPE_THRESHOLD = 40;
const Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
};
const DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
};
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
};
const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
const EVENT_SLID = `slid${EVENT_KEY$a}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Carousel extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
    } // Getters


    static get Default() {
    return Default$a;
    }

    static get NAME() {
    return NAME$b;
    } // Public


    next() {
    this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
        this.next();
    }
    }

    prev() {
    this._slide(ORDER_PREV);
    }

    pause(event) {
    if (!event) {
        this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
    }

    cycle(event) {
    if (!event) {
        this._isPaused = false;
    }

    if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
    }

    to(index) {
    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
        return;
    }

    if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
    }

    if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, this._items[index]);
    } // Private


    _getConfig(config) {
    config = { ...Default$a,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$b, config, DefaultType$a);
    return config;
    }

    _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
        return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
        return;
    }

    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    _addEventListeners() {
    if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
    }
    }

    _addTouchEventListeners() {
    const hasPointerPenTouch = event => {
        return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    };

    const start = event => {
        if (hasPointerPenTouch(event)) {
        this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
        }
    };

    const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
        if (hasPointerPenTouch(event)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
        }

        this._handleSwipe();

        if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, event => event.preventDefault());
    });

    if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
    }
    }

    _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
        return;
    }

    const direction = KEY_TO_DIRECTION[event.key];

    if (direction) {
        event.preventDefault();

        this._slide(direction);
    }
    }

    _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
    }

    _getItemByOrder(order, activeElement) {
    const isNext = order === ORDER_NEXT;
    return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }

    _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
    });
    }

    _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
        }
        }
    }
    }

    _updateInterval() {
    const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
        return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
    } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    }

    _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === ORDER_NEXT;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
    }

    if (this._isSliding) {
        return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
        return;
    }

    if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
    }

    this._isSliding = true;

    if (isCycling) {
        this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => {
        EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
        });
    };

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
    } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
    }

    if (isCycling) {
        this.cycle();
    }
    }

    _directionToOrder(direction) {
    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
    }

    if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
    if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
    }

    if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static carouselInterface(element, config) {
    const data = Carousel.getOrCreateInstance(element, config);
    let {
        _config
    } = data;

    if (typeof config === 'object') {
        _config = { ..._config,
        ...config
        };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') {
        data.to(config);
    } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
    } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
    }
    }

    static dataApiClickHandler(event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
    }

    const config = { ...Manipulator.getDataAttributes(target),
        ...Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
        config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
    }

    event.preventDefault();
    }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (let i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$a = 'collapse';
const DATA_KEY$9 = 'bs.collapse';
const EVENT_KEY$9 = `.${DATA_KEY$9}`;
const DATA_API_KEY$5 = '.data-api';
const Default$9 = {
    toggle: true,
    parent: null
};
const DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
};
const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Collapse extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
        }
    }

    this._initializeChildren();

    if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
        this.toggle();
    }
    } // Getters


    static get Default() {
    return Default$9;
    }

    static get NAME() {
    return NAME$a;
    } // Public


    toggle() {
    if (this._isShown()) {
        this.hide();
    } else {
        this.show();
    }
    }

    show() {
    if (this._isTransitioning || this._isShown()) {
        return;
    }

    let actives = [];
    let activesData;

    if (this._config.parent) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
    }

    const container = SelectorEngine.findOne(this._selector);

    if (actives.length) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
        return;
        }
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
        return;
    }

    actives.forEach(elemActive => {
        if (container !== elemActive) {
        Collapse.getOrCreateInstance(elemActive, {
            toggle: false
        }).hide();
        }

        if (!activesData) {
        Data.set(elemActive, DATA_KEY$9, null);
        }
    });

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
    if (this._isTransitioning || !this._isShown()) {
        return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
        return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
        this._addAriaAndCollapsedClass([trigger], false);
        }
    }

    this._isTransitioning = true;

    const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private


    _getConfig(config) {
    config = { ...Default$9,
        ...Manipulator.getDataAttributes(this._element),
        ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = getElement(config.parent);
    typeCheckConfig(NAME$a, config, DefaultType$9);
    return config;
    }

    _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
    if (!this._config.parent) {
        return;
    }

    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
        const selected = getElementFromSelector(element);

        if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
    });
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
        return;
    }

    triggerArray.forEach(elem => {
        if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
    });
    } // Static

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
    }

    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(element => {
    Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
    });
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$9 = 'dropdown';
const DATA_KEY$8 = 'bs.dropdown';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
};
const DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Dropdown extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
    return Default$8;
    }

    static get DefaultType() {
    return DefaultType$8;
    }

    static get NAME() {
    return NAME$9;
    } // Public


    toggle() {
    return this._isShown() ? this.hide() : this.show();
    }

    show() {
    if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
    }

    const relatedTarget = {
        relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
        return;
    }

    const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
        this._createPopper(parent);
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add(CLASS_NAME_SHOW$6);

    this._element.classList.add(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }

    hide() {
    if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
    }

    const relatedTarget = {
        relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
    }

    dispose() {
    if (this._popper) {
        this._popper.destroy();
    }

    super.dispose();
    }

    update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
        this._popper.update();
    }
    } // Private


    _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
        return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
    }

    if (this._popper) {
        this._popper.destroy();
    }

    this._menu.classList.remove(CLASS_NAME_SHOW$6);

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }

    _getConfig(config) {
    config = { ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
    };
    typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
    }

    _createPopper(parent) {
    if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
        referenceElement = parent;
    } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
    this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
    }

    _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$6);
    }

    _getMenuElement() {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
    return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
    const {
        offset
    } = this._config;

    if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
    }

    return offset;
    }

    _getPopperConfig() {
    const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
        name: 'preventOverflow',
        options: {
            boundary: this._config.boundary
        }
        }, {
        name: 'offset',
        options: {
            offset: this._getOffset()
        }
        }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
        }];
    }

    return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
    }

    _selectMenuItem({
    key,
    target
    }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

    if (!items.length) {
        return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static

    static clearMenus(event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
    }

    const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
        continue;
        }

        if (!context._isShown()) {
        continue;
        }

        const relatedTarget = {
        relatedTarget: context._element
        };

        if (event) {
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
        }

        if (event.type === 'click') {
            relatedTarget.clickEvent = event;
        }
        }

        context._completeHide(relatedTarget);
    }
    }

    static getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
    }

    const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

    if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (isDisabled(this)) {
        return;
    }

    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
    const instance = Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
    }

    if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
        instance.show();
        }

        instance._selectMenuItem(event);

        return;
    }

    if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
    }
    }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';

class ScrollBarHelper {
    constructor() {
    this._element = document.body;
    }

    getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
    }

    _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProp, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
        }

        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
    }

    reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, 'paddingRight');

    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
    const actualValue = element.style[styleProp];

    if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
    }
    }

    _resetElementAttributes(selector, styleProp) {
    const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
        } else {
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
        }
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
    if (isElement(selector)) {
        callBack(selector);
    } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
    }
    }

    isOverflowing() {
    return this.getWidth() > 0;
    }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
};
const DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
};
const NAME$8 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;

class Backdrop {
    constructor(config) {
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
    }

    show(callback) {
    if (!this._config.isVisible) {
        execute(callback);
        return;
    }

    this._append();

    if (this._config.isAnimated) {
        reflow(this._getElement());
    }

    this._getElement().classList.add(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
        execute(callback);
    });
    }

    hide(callback) {
    if (!this._config.isVisible) {
        execute(callback);
        return;
    }

    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
    });
    } // Private


    _getElement() {
    if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
    }

    return this._element;
    }

    _getConfig(config) {
    config = { ...Default$7,
        ...(typeof config === 'object' ? config : {})
    }; // use getElement() with the default "body" to get a fresh Element on each instantiation

    config.rootElement = getElement(config.rootElement);
    typeCheckConfig(NAME$8, config, DefaultType$7);
    return config;
    }

    _append() {
    if (this._isAppended) {
        return;
    }

    this._config.rootElement.append(this._getElement());

    EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
    });
    this._isAppended = true;
    }

    dispose() {
    if (!this._isAppended) {
        return;
    }

    EventHandler.off(this._element, EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
    }

    _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
};
const DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
};
const NAME$7 = 'focustrap';
const DATA_KEY$7 = 'bs.focustrap';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';

class FocusTrap {
    constructor(config) {
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
    }

    activate() {
    const {
        trapElement,
        autofocus
    } = this._config;

    if (this._isActive) {
        return;
    }

    if (autofocus) {
        trapElement.focus();
    }

    EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
    }

    deactivate() {
    if (!this._isActive) {
        return;
    }

    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$7);
    } // Private


    _handleFocusin(event) {
    const {
        target
    } = event;
    const {
        trapElement
    } = this._config;

    if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
    }

    const elements = SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
        trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
    } else {
        elements[0].focus();
    }
    }

    _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
        return;
    }

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

    _getConfig(config) {
    config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$7, config, DefaultType$6);
    return config;
    }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
};
const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
};
const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Modal extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    } // Getters


    static get Default() {
    return Default$5;
    }

    static get NAME() {
    return NAME$6;
    } // Public


    toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
        return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
    });

    if (showEvent.defaultPrevented) {
        return;
    }

    this._isShown = true;

    if (this._isAnimated()) {
        this._isTransitioning = true;
    }

    this._scrollBar.hide();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
            this._ignoreBackdropClick = true;
        }
        });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide() {
    if (!this._isShown || this._isTransitioning) {
        return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
        return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
        this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
    [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
    }

    handleUpdate() {
    this._adjustDialog();
    } // Private


    _initializeBackDrop() {
    return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
    });
    }

    _initializeFocusTrap() {
    return new FocusTrap({
        trapElement: this._element
    });
    }

    _getConfig(config) {
    config = { ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$6, config, DefaultType$5);
    return config;
    }

    _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
        modalBody.scrollTop = 0;
    }

    if (isAnimated) {
        reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
        if (this._config.focus) {
        this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
        });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _setEscapeEvent() {
    if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
        } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
        }
        });
    } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
    }

    _setResizeEvent() {
    if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
    } else {
        EventHandler.off(window, EVENT_RESIZE);
    }
    }

    _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    });
    }

    _showBackdrop(callback) {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
        if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
        }

        if (event.target !== event.currentTarget) {
        return;
        }

        if (this._config.backdrop === true) {
        this.hide();
        } else if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition();
        }
    });

    this._backdrop.show(callback);
    }

    _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
        return;
    }

    const {
        classList,
        scrollHeight,
        style
    } = this._element;
    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
    }

    if (!isModalOverflowing) {
        style.overflowY = 'hidden';
    }

    classList.add(CLASS_NAME_STATIC);

    this._queueCallback(() => {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
        this._queueCallback(() => {
            style.overflowY = '';
        }, this._dialog);
        }
    }, this._dialog);

    this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
    }

    if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
    }

    _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
    } // Static


}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
        this.focus();
        }
    });
    }); // avoid conflict when clicking moddal toggler while another one is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (allReadyOpen) {
    Modal.getInstance(allReadyOpen).hide();
    }

    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
const ESCAPE_KEY = 'Escape';
const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
};
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Offcanvas extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
    } // Getters


    static get NAME() {
    return NAME$5;
    }

    static get Default() {
    return Default$4;
    } // Public


    toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
    if (this._isShown) {
        return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget
    });

    if (showEvent.defaultPrevented) {
        return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
        new ScrollBarHelper().hide();
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOW$3);

    const completeCallBack = () => {
        if (!this._config.scroll) {
        this._focustrap.activate();
        }

        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
        relatedTarget
        });
    };

    this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
    if (!this._isShown) {
        return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
        return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove(CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
        new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
    } // Private


    _getConfig(config) {
    config = { ...Default$4,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$5, config, DefaultType$4);
    return config;
    }

    _initializeBackDrop() {
    return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
    });
    }

    _initializeFocusTrap() {
    return new FocusTrap({
        trapElement: this._element
    });
    }

    _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
        this.hide();
        }
    });
    } // Static


}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
    }

    if (isDisabled(this)) {
    return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
        this.focus();
    }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
enableDismissTrigger(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
    }

    const regExp = allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
        return true;
    }
    }

    return false;
};

const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
    return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    const elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
    }

    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(attribute => {
        if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
        }
    });
    }

    return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
};
const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
};
const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
};
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tooltip extends BaseComponent {
    constructor(element, config) {
    if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
    } // Getters


    static get Default() {
    return Default$3;
    }

    static get NAME() {
    return NAME$4;
    }

    static get Event() {
    return Event$2;
    }

    static get DefaultType() {
    return DefaultType$3;
    } // Public


    enable() {
    this._isEnabled = true;
    }

    disable() {
    this._isEnabled = false;
    }

    toggleEnabled() {
    this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
    if (!this._isEnabled) {
        return;
    }

    if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
        context._enter(null, context);
        } else {
        context._leave(null, context);
        }
    } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
        this._leave(null, this);

        return;
        }

        this._enter(null, this);
    }
    }

    dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
        this.tip.remove();
    }

    this._disposePopper();

    super.dispose();
    }

    show() {
    if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
        return;
    }

    const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
        return;
    } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
    // This will be removed later in favor of a `setContent` method


    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
        this._disposePopper();

        this.tip.remove();
        this.tip = null;
    }

    const tip = this.getTipElement();
    const tipId = getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
    }

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const {
        container
    } = this._config;
    Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
        this._popper.update();
    } else {
        this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add(CLASS_NAME_SHOW$2);

    const customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) {
        tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
        EventHandler.on(element, 'mouseover', noop);
        });
    }

    const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
        this._leave(null, this);
        }
    };

    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
    }

    hide() {
    if (!this._popper) {
        return;
    }

    const tip = this.getTipElement();

    const complete = () => {
        if (this._isWithActiveTrigger()) {
        return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW) {
        tip.remove();
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

        this._disposePopper();
    };

    const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
        return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
    }

    update() {
    if (this._popper !== null) {
        this._popper.update();
    }
    } // Protected


    isWithContent() {
    return Boolean(this.getTitle());
    }

    getTipElement() {
    if (this.tip) {
        return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    const tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
    }

    setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }

    _sanitizeAndSetContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);

    if (!content && templateElement) {
        templateElement.remove();
        return;
    } // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
    }

    setElementContent(element, content) {
    if (element === null) {
        return;
    }

    if (isElement(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
        if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
        }
        } else {
        element.textContent = content.textContent;
        }

        return;
    }

    if (this._config.html) {
        if (this._config.sanitize) {
        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
    } else {
        element.textContent = content;
    }
    }

    getTitle() {
    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
    }

    updateAttachment(attachment) {
    if (attachment === 'right') {
        return 'end';
    }

    if (attachment === 'left') {
        return 'start';
    }

    return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _getOffset() {
    const {
        offset
    } = this._config;

    if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
    }

    return offset;
    }

    _resolvePossibleFunction(content) {
    return typeof content === 'function' ? content.call(this._element) : content;
    }

    _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
        name: 'flip',
        options: {
            fallbackPlacements: this._config.fallbackPlacements
        }
        }, {
        name: 'offset',
        options: {
            offset: this._getOffset()
        }
        }, {
        name: 'preventOverflow',
        options: {
            boundary: this._config.boundary
        }
        }, {
        name: 'arrow',
        options: {
            element: `.${this.constructor.NAME}-arrow`
        }
        }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
        }
        }
    };
    return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
    }

    _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => {
        if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
        }
    });

    this._hideModalHandler = () => {
        if (this._element) {
        this.hide();
        }
    };

    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) {
        this._config = { ...this._config,
        trigger: 'manual',
        selector: ''
        };
    } else {
        this._fixTitle();
    }
    }

    _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
    }
    }

    _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
    }

    context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
        }
    }, context._config.delay.show);
    }

    _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
        return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
    }

    context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
        }
    }, context._config.delay.hide);
    }

    _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
        return true;
        }
    }

    return false;
    }

    _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
        }
    });
    config = { ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
    };
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') {
        config.delay = {
        show: config.delay,
        hide: config.delay
        };
    }

    if (typeof config.title === 'number') {
        config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
        config.content = config.content.toString();
    }

    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
    }

    _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
        }
    } // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
    }

    _cleanTipClass() {
    const tip = this.getTipElement();
    const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
    }

    _getBasicClassPrefix() {
    return CLASS_PREFIX$1;
    }

    _handlePopperPlacementChange(popperData) {
    const {
        state
    } = popperData;

    if (!state) {
        return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
    }

    _disposePopper() {
    if (this._popper) {
        this._popper.destroy();

        this._popper = null;
    }
    } // Static

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const CLASS_PREFIX = 'bs-popover';
const Default$2 = { ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(string|element|function)'
};
const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
};
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Popover extends Tooltip {
    // Getters
    static get Default() {
    return Default$2;
    }

    static get NAME() {
    return NAME$3;
    }

    static get Event() {
    return Event$1;
    }

    static get DefaultType() {
    return DefaultType$2;
    } // Overrides


    isWithContent() {
    return this.getTitle() || this._getContent();
    }

    setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private


    _getContent() {
    return this._resolvePossibleFunction(this._config.content);
    }

    _getBasicClassPrefix() {
    return CLASS_PREFIX;
    } // Static


}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
};
const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
};
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollSpy extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
    } // Getters


    static get Default() {
    return Default$1;
    }

    static get NAME() {
    return NAME$2;
    } // Public


    refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
        }

        return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
    });
    }

    dispose() {
    EventHandler.off(this._scrollElement, EVENT_KEY$2);
    super.dispose();
    } // Private


    _getConfig(config) {
    config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
    };
    config.target = getElement(config.target) || document.documentElement;
    typeCheckConfig(NAME$2, config, DefaultType$1);
    return config;
    }

    _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
        this.refresh();
    }

    if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
        this._activate(target);
        }

        return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
    }

    for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
        this._activate(this._targets[i]);
        }
    }
    }

    _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
    const link = SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add(CLASS_NAME_ACTIVE$1);

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
    } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
        });
        });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
    });
    }

    _clear() {
    SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    } // Static

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tab extends BaseComponent {
    // Getters
    static get NAME() {
    return NAME$1;
    } // Public


    show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
    }

    let previous;
    const target = getElementFromSelector(this._element);

    const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
    }) : null;
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
        relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
        relatedTarget: previous
        });
    };

    if (target) {
        this._activate(target, target.parentNode, complete);
    } else {
        complete();
    }
    } // Private


    _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
    } else {
        complete();
    }
    }

    _transitionComplete(element, active, callback) {
    if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
        }
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
    }

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
    }

    if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
    }

    if (callback) {
        callback();
    }
    } // Static

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
    }

    if (isDisabled(this)) {
    return;
    }

    const data = Tab.getOrCreateInstance(this);
    data.show();
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Toast extends BaseComponent {
    constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
    } // Getters


    static get DefaultType() {
    return DefaultType;
    }

    static get Default() {
    return Default;
    }

    static get NAME() {
    return NAME;
    } // Public


    show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
        return;
    }

    this._clearTimeout();

    if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
    }

    const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
    };

    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW);

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
        return;
    }

    const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING);

        this._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
    }

    super.dispose();
    } // Private


    _getConfig(config) {
    config = { ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
    };
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
    }

    _maybeScheduleHide() {
    if (!this._config.autohide) {
        return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
    }

    this._timeout = setTimeout(() => {
        this.hide();
    }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
    switch (event.type) {
        case 'mouseover':
        case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

        case 'focusin':
        case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
        this._clearTimeout();

        return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
    }

    this._maybeScheduleHide();
    }

    _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
    } // Static

}

enableDismissTrigger(Toast);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): index.umd.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
};

return index_umd;

}));

/* Splide.js * Version: Enabled Modified * License  : MIT * Copyright: Naotoshi Fujita */
!function() {
"use strict";
var t = {
    d: function(n, e) {
        for (var i in e)
            t.o(e, i) && !t.o(n, i) && Object.defineProperty(n, i, {
                enumerable: !0,
                get: e[i]
            })
    },
    o: function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    r: function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
}
    , n = {};
t.r(n),
t.d(n, {
    CREATED: function() {
        return R
    },
    DESTROYED: function() {
        return X
    },
    IDLE: function() {
        return F
    },
    MOUNTED: function() {
        return B
    },
    MOVING: function() {
        return G
    }
});
function e() {
    return (e = Object.assign || function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }
        return t
    }
    ).apply(this, arguments)
}
var i = Object.keys;
function o(t, n) {
    i(t).some((function(e, i) {
        return n(t[e], e, i)
    }
    ))
}
function r(t) {
    return i(t).map((function(n) {
        return t[n]
    }
    ))
}
function s(t) {
    return "object" == typeof t
}
function a(t, n) {
    var i = e({}, t);
    return o(n, (function(t, n) {
        s(t) ? (s(i[n]) || (i[n] = {}),
        i[n] = a(i[n], t)) : i[n] = t
    }
    )),
    i
}
function u(t) {
    return Array.isArray(t) ? t : [t]
}
function c(t, n, e) {
    return Math.min(Math.max(t, n > e ? e : n), n > e ? n : e)
}
function d(t, n) {
    var e = 0;
    return t.replace(/%s/g, (function() {
        return u(n)[e++]
    }
    ))
}
function f(t) {
    var n = typeof t;
    return "number" === n && t > 0 ? parseFloat(t) + "px" : "string" === n ? t : ""
}
function l(t) {
    return t < 10 ? "0" + t : t
}
function h(t, n) {
    if ("string" == typeof n) {
        var e = m("div", {});
        E(e, {
            position: "absolute",
            width: n
        }),
        w(t, e),
        n = e.clientWidth,
        b(e)
    }
    return +n || 0
}
function p(t, n) {
    return t ? t.querySelector(n.split(" ")[0]) : null
}
function g(t, n) {
    return v(t, n)[0]
}
function v(t, n) {
    return t ? r(t.children).filter((function(t) {
        return P(t, n.split(" ")[0]) || t.tagName === n
    }
    )) : []
}
function m(t, n) {
    var e = document.createElement(t);
    return o(n, (function(t, n) {
        return C(e, n, t)
    }
    )),
    e
}
function y(t) {
    var n = m("div", {});
    return n.innerHTML = t,
    n.firstChild
}
function b(t) {
    u(t).forEach((function(t) {
        if (t) {
            var n = t.parentElement;
            n && n.removeChild(t)
        }
    }
    ))
}
function w(t, n) {
    t && t.appendChild(n)
}
function x(t, n) {
    if (t && n) {
        var e = n.parentElement;
        e && e.insertBefore(t, n)
    }
}
function E(t, n) {
    t && o(n, (function(n, e) {
        null !== n && (t.style[e] = n)
    }
    ))
}
function _(t, n, e) {
    t && u(n).forEach((function(n) {
        n && t.classList[e ? "remove" : "add"](n)
    }
    ))
}
function k(t, n) {
    _(t, n, !1)
}
function S(t, n) {
    _(t, n, !0)
}
function P(t, n) {
    return !!t && t.classList.contains(n)
}
function C(t, n, e) {
    t && t.setAttribute(n, e)
}
function z(t, n) {
    return t ? t.getAttribute(n) : ""
}
function I(t, n) {
    u(n).forEach((function(n) {
        u(t).forEach((function(t) {
            return t && t.removeAttribute(n)
        }
        ))
    }
    ))
}
function M(t) {
    return t.getBoundingClientRect()
}
var T = "slide"
    , A = "loop"
    , O = "fade"
    , L = function(t, n) {
    var e, i;
    return {
        mount: function() {
            e = n.Elements.list,
            t.on("transitionend", (function(t) {
                t.target === e && i && i()
            }
            ), e)
        },
        start: function(o, r, s, a, u) {
            var c = t.options
                , d = n.Controller.edgeIndex
                , f = c.speed;
            i = u,
            t.is(T) && (0 === s && r >= d || s >= d && 0 === r) && (f = c.rewindSpeed || f),
            E(e, {
                transition: "transform " + f + "ms " + c.easing,
                transform: "translate(" + a.x + "px," + a.y + "px)"
            })
        }
    }
}
    , W = function(t, n) {
    function e(e) {
        var i = t.options;
        E(n.Elements.slides[e], {
            transition: "opacity " + i.speed + "ms " + i.easing
        })
    }
    return {
        mount: function() {
            e(t.index)
        },
        start: function(t, i, o, r, s) {
            var a = n.Elements.track;
            E(a, {
                height: f(a.clientHeight)
            }),
            e(i),
            setTimeout((function() {
                s(),
                E(a, {
                    height: ""
                })
            }
            ))
        }
    }
};
function H(t) {
    console.error("[SPLIDE] " + t)
}
function j(t, n) {
    if (!t)
        throw new Error(n)
}
var q = "splide"
    , D = {
    active: "is-active",
    visible: "is-visible",
    loading: "is-loading"
}
    , N = {
    type: "slide",
    rewind: !1,
    speed: 400,
    rewindSpeed: 0,
    waitForTransition: !0,
    width: 0,
    height: 0,
    fixedWidth: 0,
    fixedHeight: 0,
    heightRatio: 0,
    autoWidth: !1,
    autoHeight: !1,
    perPage: 1,
    perMove: 0,
    clones: 0,
    start: 0,
    focus: !1,
    gap: 0,
    padding: 0,
    arrows: !0,
    arrowPath: "",
    pagination: !0,
    autoplay: !1,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    lazyLoad: !1,
    preloadPages: 1,
    easing: "cubic-bezier(.42,.65,.27,.99)",
    keyboard: "global",
    drag: !0,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: .6,
    flickPower: 600,
    flickMaxPages: 1,
    direction: "ltr",
    cover: !1,
    accessibility: !0,
    slideFocus: !0,
    isNavigation: !1,
    trimSpace: !0,
    updateOnMove: !1,
    throttle: 100,
    destroy: !1,
    breakpoints: !1,
    classes: {
        root: q,
        slider: q + "__slider",
        track: q + "__track",
        list: q + "__list",
        slide: q + "__slide",
        container: q + "__slide__container",
        arrows: q + "__arrows",
        arrow: q + "__arrow",
        prev: q + "__arrow--prev",
        next: q + "__arrow--next",
        pagination: q + "__pagination",
        page: q + "__pagination__page",
        clone: q + "__slide--clone",
        progress: q + "__progress",
        bar: q + "__progress__bar",
        autoplay: q + "__autoplay",
        play: q + "__play",
        pause: q + "__pause",
        spinner: q + "__spinner",
        sr: q + "__sr"
    },
    i18n: {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay"
    }
}
    , R = 1
    , B = 2
    , F = 3
    , G = 4
    , X = 5;
function V(t, n) {
    for (var e = 0; e < n.length; e++) {
        var i = n[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
}
var U = function() {
    function t(t, e, i) {
        var o;
        void 0 === e && (e = {}),
        void 0 === i && (i = {}),
        this.root = t instanceof Element ? t : document.querySelector(t),
        j(this.root, "An invalid element/selector was given."),
        this.Components = null,
        this.Event = function() {
            var t = [];
            function n(t) {
                t.elm && t.elm.removeEventListener(t.event, t.handler, t.options)
            }
            return {
                on: function(n, e, i, o) {
                    void 0 === i && (i = null),
                    void 0 === o && (o = {}),
                    n.split(" ").forEach((function(n) {
                        i && i.addEventListener(n, e, o),
                        t.push({
                            event: n,
                            handler: e,
                            elm: i,
                            options: o
                        })
                    }
                    ))
                },
                off: function(e, i) {
                    void 0 === i && (i = null),
                    e.split(" ").forEach((function(e) {
                        t = t.filter((function(t) {
                            return !t || t.event !== e || t.elm !== i || (n(t),
                            !1)
                        }
                        ))
                    }
                    ))
                },
                emit: function(n) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
                        i[o - 1] = arguments[o];
                    t.forEach((function(t) {
                        t.elm || t.event.split(".")[0] !== n || t.handler.apply(t, i)
                    }
                    ))
                },
                destroy: function() {
                    t.forEach(n),
                    t = []
                }
            }
        }(),
        this.State = (o = R,
        {
            set: function(t) {
                o = t
            },
            is: function(t) {
                return t === o
            }
        }),
        this.STATES = n,
        this._o = a(N, e),
        this._i = 0,
        this._c = i,
        this._e = {},
        this._t = null
    }
    var e, i, s, u = t.prototype;
    return u.mount = function(t, n) {
        var e = this;
        void 0 === t && (t = this._e),
        void 0 === n && (n = this._t),
        this.State.set(R),
        this._e = t,
        this._t = n,
        this.Components = function(t, n, e) {
            var i = {};
            return o(n, (function(n, e) {
                i[e] = n(t, i, e.toLowerCase())
            }
            )),
            e || (e = t.is(O) ? W : L),
            i.Transition = e(t, i),
            i
        }(this, a(this._c, t), n);
        try {
            o(this.Components, (function(t, n) {
                var i = t.required;
                void 0 === i || i ? t.mount && t.mount() : delete e.Components[n]
            }
            ))
        } catch (t) {
            return void H(t.message)
        }
        var i = this.State;
        return i.set(B),
        o(this.Components, (function(t) {
            t.mounted && t.mounted()
        }
        )),
        this.emit("mounted"),
        i.set(F),
        this.emit("ready"),
        E(this.root, {
            visibility: "visible"
        }),
        this.on("move drag", (function() {
            return i.set(G)
        }
        )).on("moved dragged", (function() {
            return i.set(F)
        }
        )),
        this
    }
    ,
    u.sync = function(t) {
        return this.sibling = t,
        this
    }
    ,
    u.on = function(t, n, e, i) {
        return void 0 === e && (e = null),
        void 0 === i && (i = {}),
        this.Event.on(t, n, e, i),
        this
    }
    ,
    u.off = function(t, n) {
        return void 0 === n && (n = null),
        this.Event.off(t, n),
        this
    }
    ,
    u.emit = function(t) {
        for (var n, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
            i[o - 1] = arguments[o];
        return (n = this.Event).emit.apply(n, [t].concat(i)),
        this
    }
    ,
    u.go = function(t, n) {
        return void 0 === n && (n = this.options.waitForTransition),
        (this.State.is(F) || this.State.is(G) && !n) && this.Components.Controller.go(t, !1),
        this
    }
    ,
    u.is = function(t) {
        return t === this._o.type
    }
    ,
    u.add = function(t, n) {
        return void 0 === n && (n = -1),
        this.Components.Elements.add(t, n, this.refresh.bind(this)),
        this
    }
    ,
    u.remove = function(t) {
        return this.Components.Elements.remove(t),
        this.refresh(),
        this
    }
    ,
    u.refresh = function() {
        return this.emit("refresh:before").emit("refresh").emit("resize"),
        this
    }
    ,
    u.destroy = function(t) {
        var n = this;
        if (void 0 === t && (t = !0),
        !this.State.is(R))
            return r(this.Components).reverse().forEach((function(n) {
                n.destroy && n.destroy(t)
            }
            )),
            this.emit("destroy", t),
            this.Event.destroy(),
            this.State.set(X),
            this;
        this.on("ready", (function() {
            return n.destroy(t)
        }
        ))
    }
    ,
    e = t,
    (i = [{
        key: "index",
        get: function() {
            return this._i
        },
        set: function(t) {
            this._i = parseInt(t)
        }
    }, {
        key: "length",
        get: function() {
            return this.Components.Elements.length
        }
    }, {
        key: "options",
        get: function() {
            return this._o
        },
        set: function(t) {
            var n = this.State.is(R);
            n || this.emit("update"),
            this._o = a(this._o, t),
            n || this.emit("updated", this._o)
        }
    }, {
        key: "classes",
        get: function() {
            return this._o.classes
        }
    }, {
        key: "i18n",
        get: function() {
            return this._o.i18n
        }
    }]) && V(e.prototype, i),
    s && V(e, s),
    t
}()
    , Y = function(t) {
    var n = z(t.root, "data-splide");
    if (n)
        try {
            t.options = JSON.parse(n)
        } catch (t) {
            H(t.message)
        }
    return {
        mount: function() {
            t.State.is(R) && (t.index = t.options.start)
        }
    }
}
    , J = "rtl"
    , K = "ttb"
    , Q = "update.slide"
    , Z = function(t, n) {
    var e = t.root
        , i = t.classes
        , s = [];
    if (!e.id) {
        window.splide = window.splide || {};
        var a = window.splide.uid || 0;
        window.splide.uid = ++a,
        e.id = "splide" + l(a)
    }
    var u = {
        mount: function() {
            var n = this;
            this.init(),
            t.on("refresh", (function() {
                n.destroy(),
                n.init()
            }
            )).on("updated", (function() {
                S(e, c()),
                k(e, c())
            }
            ))
        },
        destroy: function() {
            s.forEach((function(t) {
                t.destroy()
            }
            )),
            s = [],
            S(e, c())
        },
        init: function() {
            var t = this;
            !function() {
                u.slider = g(e, i.slider),
                u.track = p(e, "." + i.track),
                u.list = g(u.track, i.list),
                j(u.track && u.list, "Track or list was not found."),
                u.slides = v(u.list, i.slide);
                var t = d(i.arrows);
                u.arrows = {
                    prev: p(t, "." + i.prev),
                    next: p(t, "." + i.next)
                };
                var n = d(i.autoplay);
                u.bar = p(d(i.progress), "." + i.bar),
                u.play = p(n, "." + i.play),
                u.pause = p(n, "." + i.pause),
                u.track.id = u.track.id || e.id + "-track",
                u.list.id = u.list.id || e.id + "-list"
            }(),
            k(e, c()),
            this.slides.forEach((function(n, e) {
                t.register(n, e, -1)
            }
            ))
        },
        register: function(n, e, i) {
            var o = function(t, n, e, i) {
                var o = t.options.updateOnMove
                    , s = "ready.slide updated.slide resized.slide moved.slide" + (o ? " move.slide" : "")
                    , a = {
                    slide: i,
                    index: n,
                    realIndex: e,
                    container: g(i, t.classes.container),
                    isClone: e > -1,
                    mount: function() {
                        var r = this;
                        this.isClone || (i.id = t.root.id + "-slide" + l(n + 1)),
                        t.on(s, (function() {
                            return r.update()
                        }
                        )).on(Q, c).on("click", (function() {
                            return t.emit("click", r)
                        }
                        ), i),
                        o && t.on("move.slide", (function(t) {
                            t === e && u(!0, !1)
                        }
                        )),
                        E(i, {
                            display: ""
                        }),
                        this.styles = z(i, "style") || ""
                    },
                    destroy: function() {
                        t.off(s).off(Q).off("click", i),
                        S(i, r(D)),
                        c(),
                        I(this.container, "style")
                    },
                    update: function() {
                        u(this.isActive(), !1),
                        u(this.isVisible(), !0)
                    },
                    isActive: function() {
                        return t.index === n
                    },
                    isVisible: function() {
                        var n = this.isActive();
                        if (t.is(O) || n)
                            return n;
                        var e = Math.ceil
                            , o = M(t.Components.Elements.track)
                            , r = M(i);
                        return t.options.direction === K ? o.top <= r.top && r.bottom <= e(o.bottom) : o.left <= r.left && r.right <= e(o.right)
                    },
                    isWithin: function(e, i) {
                        var o = Math.abs(e - n);
                        return t.is(T) || this.isClone || (o = Math.min(o, t.length - o)),
                        o < i
                    }
                };
                function u(n, e) {
                    var o = e ? "visible" : "active"
                        , r = D[o];
                    n ? (k(i, r),
                    t.emit("" + o, a)) : P(i, r) && (S(i, r),
                    t.emit(e ? "hidden" : "inactive", a))
                }
                function c() {
                    C(i, "style", a.styles)
                }
                return a
            }(t, e, i, n);
            o.mount(),
            s.push(o)
        },
        getSlide: function(t) {
            return s.filter((function(n) {
                return n.index === t
            }
            ))[0]
        },
        getSlides: function(t) {
            return t ? s : s.filter((function(t) {
                return !t.isClone
            }
            ))
        },
        getSlidesByPage: function(e) {
            var i = n.Controller.toIndex(e)
                , o = t.options
                , r = !1 !== o.focus ? 1 : o.perPage;
            return s.filter((function(t) {
                var n = t.index;
                return i <= n && n < i + r
            }
            ))
        },
        add: function(t, n, e) {
            if ("string" == typeof t && (t = y(t)),
            t instanceof Element) {
                var i = this.slides[n];
                E(t, {
                    display: "none"
                }),
                i ? (x(t, i),
                this.slides.splice(n, 0, t)) : (w(this.list, t),
                this.slides.push(t)),
                function(t, n) {
                    var e = t.querySelectorAll("img")
                        , i = e.length;
                    if (i) {
                        var r = 0;
                        o(e, (function(t) {
                            t.onload = t.onerror = function() {
                                ++r === i && n()
                            }
                        }
                        ))
                    } else
                        n()
                }(t, (function() {
                    e && e(t)
                }
                ))
            }
        },
        remove: function(t) {
            b(this.slides.splice(t, 1)[0])
        },
        each: function(t) {
            s.forEach(t)
        },
        get length() {
            return this.slides.length
        },
        get total() {
            return s.length
        }
    };
    function c() {
        var n = i.root
            , e = t.options;
        return [n + "--" + e.type, n + "--" + e.direction, e.drag ? n + "--draggable" : "", e.isNavigation ? n + "--nav" : "", D.active]
    }
    function d(t) {
        return g(e, t) || g(u.slider, t)
    }
    return u
}
    , $ = Math.floor
    , tt = function(t, n) {
    var e, i, o = {
        mount: function() {
            e = t.options,
            i = t.is(A),
            t.on("move", (function(n) {
                t.index = n
            }
            )).on("updated refresh", (function(n) {
                e = n || e,
                t.index = c(t.index, 0, o.edgeIndex)
            }
            ))
        },
        go: function(t, e) {
            var i = this.trim(this.parse(t));
            n.Track.go(i, this.rewind(i), e)
        },
        parse: function(n) {
            var i = t.index
                , r = String(n).match(/([+\-<>]+)(\d+)?/)
                , s = r ? r[1] : ""
                , a = r ? parseInt(r[2]) : 0;
            switch (s) {
            case "+":
                i += a || 1;
                break;
            case "-":
                i -= a || 1;
                break;
            case ">":
            case "<":
                i = function(t, n, i) {
                    if (t > -1)
                        return o.toIndex(t);
                    var r = e.perMove
                        , s = i ? -1 : 1;
                    if (r)
                        return n + r * s;
                    return o.toIndex(o.toPage(n) + s)
                }(a, i, "<" === s);
                break;
            default:
                i = parseInt(n)
            }
            return i
        },
        toIndex: function(n) {
            if (r())
                return n;
            var i = t.length
                , o = e.perPage
                , s = n * o;
            return i - o <= (s -= (this.pageLength * o - i) * $(s / i)) && s < i && (s = i - o),
            s
        },
        toPage: function(n) {
            if (r())
                return n;
            var i = t.length
                , o = e.perPage;
            return $(i - o <= n && n < i ? (i - 1) / o : n / o)
        },
        trim: function(t) {
            return i || (t = e.rewind ? this.rewind(t) : c(t, 0, this.edgeIndex)),
            t
        },
        rewind: function(t) {
            var n = this.edgeIndex;
            if (i) {
                for (; t > n; )
                    t -= n + 1;
                for (; t < 0; )
                    t += n + 1
            } else
                t > n ? t = 0 : t < 0 && (t = n);
            return t
        },
        isRtl: function() {
            return e.direction === J
        },
        get pageLength() {
            var n = t.length;
            return r() ? n : Math.ceil(n / e.perPage)
        },
        get edgeIndex() {
            var n = t.length;
            return n ? r() || e.isNavigation || i ? n - 1 : n - e.perPage : 0
        },
        get prevIndex() {
            var n = t.index - 1;
            return (i || e.rewind) && (n = this.rewind(n)),
            n > -1 ? n : -1
        },
        get nextIndex() {
            var n = t.index + 1;
            return (i || e.rewind) && (n = this.rewind(n)),
            t.index < n && n <= this.edgeIndex || 0 === n ? n : -1
        }
    };
    function r() {
        return !1 !== e.focus
    }
    return o
}
    , nt = Math.abs
    , et = function(t, n) {
    var e, i, o, r = t.options.direction === K, s = t.is(O), a = t.options.direction === J, u = !1, d = a ? 1 : -1, f = {
        sign: d,
        mount: function() {
            i = n.Elements,
            e = n.Layout,
            o = i.list
        },
        mounted: function() {
            var n = this;
            s || (this.jump(0),
            t.on("mounted resize updated", (function() {
                n.jump(t.index)
            }
            )))
        },
        go: function(e, i, o) {
            var r = h(e)
                , a = t.index;
            t.State.is(G) && u || (u = e !== i,
            o || t.emit("move", i, a, e),
            Math.abs(r - this.position) >= 1 || s ? n.Transition.start(e, i, a, this.toCoord(r), (function() {
                l(e, i, a, o)
            }
            )) : e !== a && "move" === t.options.trimSpace ? n.Controller.go(e + e - a, o) : l(e, i, a, o))
        },
        jump: function(t) {
            this.translate(h(t))
        },
        translate: function(t) {
            E(o, {
                transform: "translate" + (r ? "Y" : "X") + "(" + t + "px)"
            })
        },
        cancel: function() {
            t.is(A) ? this.shift() : this.translate(this.position),
            E(o, {
                transition: ""
            })
        },
        shift: function() {
            var n = nt(this.position)
                , e = nt(this.toPosition(0))
                , i = nt(this.toPosition(t.length))
                , o = i - e;
            n < e ? n += o : n > i && (n -= o),
            this.translate(d * n)
        },
        trim: function(n) {
            return !t.options.trimSpace || t.is(A) ? n : c(n, d * (e.totalSize() - e.size - e.gap), 0)
        },
        toIndex: function(t) {
            var n = this
                , e = 0
                , o = 1 / 0;
            return i.getSlides(!0).forEach((function(i) {
                var r = i.index
                    , s = nt(n.toPosition(r) - t);
                s < o && (o = s,
                e = r)
            }
            )),
            e
        },
        toCoord: function(t) {
            return {
                x: r ? 0 : t,
                y: r ? t : 0
            }
        },
        toPosition: function(t) {
            var n = e.totalSize(t) - e.slideSize(t) - e.gap;
            return d * (n + this.offset(t))
        },
        offset: function(n) {
            var i = t.options.focus
                , o = e.slideSize(n);
            return "center" === i ? -(e.size - o) / 2 : -(parseInt(i) || 0) * (o + e.gap)
        },
        get position() {
            var t = r ? "top" : a ? "right" : "left";
            return M(o)[t] - (M(i.track)[t] - e.padding[t] * d)
        }
    };
    function l(n, e, i, r) {
        E(o, {
            transition: ""
        }),
        u = !1,
        s || f.jump(e),
        r || t.emit("moved", e, i, n)
    }
    function h(t) {
        return f.trim(f.toPosition(t))
    }
    return f
}
    , it = function(t, n) {
    var e = []
        , i = 0
        , o = n.Elements
        , r = {
        mount: function() {
            var n = this;
            t.is(A) && (s(),
            t.on("refresh:before", (function() {
                n.destroy()
            }
            )).on("refresh", s).on("resize", (function() {
                i !== a() && (n.destroy(),
                t.refresh())
            }
            )))
        },
        destroy: function() {
            b(e),
            e = []
        },
        get clones() {
            return e
        },
        get length() {
            return e.length
        }
    };
    function s() {
        r.destroy(),
        function(t) {
            var n = o.length
                , i = o.register;
            if (n) {
                for (var r = o.slides; r.length < t; )
                    r = r.concat(r);
                r.slice(0, t).forEach((function(t, r) {
                    var s = u(t);
                    w(o.list, s),
                    e.push(s),
                    i(s, r + n, r % n)
                }
                )),
                r.slice(-t).forEach((function(o, s) {
                    var a = u(o);
                    x(a, r[0]),
                    e.push(a),
                    i(a, s - t, (n + s - t % n) % n)
                }
                ))
            }
        }(i = a())
    }
    function a() {
        var n = t.options;
        if (n.clones)
            return n.clones;
        var e = n.autoWidth || n.autoHeight ? o.length : n.perPage
            , i = n.direction === K ? "Height" : "Width"
            , r = h(t.root, n["fixed" + i]);
        return r && (e = Math.ceil(o.track["client" + i] / r)),
        e * (n.drag ? n.flickMaxPages + 1 : 1)
    }
    function u(n) {
        var e = n.cloneNode(!0);
        return k(e, t.classes.clone),
        I(e, "id"),
        e
    }
    return r
};
function ot(t, n) {
    var e;
    return function() {
        e || (e = setTimeout((function() {
            t(),
            e = null
        }
        ), n))
    }
}
var rt = function(t, n) {
    var e, o, r = n.Elements, s = t.options.direction === K, a = (e = {
        mount: function() {
            t.on("resize load", ot((function() {
                t.emit("resize")
            }
            ), t.options.throttle), window).on("resize", c).on("updated refresh", u),
            u(),
            this.totalSize = s ? this.totalHeight : this.totalWidth,
            this.slideSize = s ? this.slideHeight : this.slideWidth
        },
        destroy: function() {
            I([r.list, r.track], "style")
        },
        get size() {
            return s ? this.height : this.width
        }
    },
    o = s ? function(t, n) {
        var e, i, o = n.Elements, r = t.root;
        return {
            margin: "marginBottom",
            init: function() {
                this.resize()
            },
            resize: function() {
                i = t.options,
                e = o.track,
                this.gap = h(r, i.gap);
                var n = i.padding
                    , s = h(r, n.top || n)
                    , a = h(r, n.bottom || n);
                this.padding = {
                    top: s,
                    bottom: a
                },
                E(e, {
                    paddingTop: f(s),
                    paddingBottom: f(a)
                })
            },
            totalHeight: function(n) {
                void 0 === n && (n = t.length - 1);
                var e = o.getSlide(n);
                return e ? M(e.slide).bottom - M(o.list).top + this.gap : 0
            },
            slideWidth: function() {
                return h(r, i.fixedWidth || this.width)
            },
            slideHeight: function(t) {
                if (i.autoHeight) {
                    var n = o.getSlide(t);
                    return n ? n.slide.offsetHeight : 0
                }
                var e = i.fixedHeight || (this.height + this.gap) / i.perPage - this.gap;
                return h(r, e)
            },
            get width() {
                return e.clientWidth
            },
            get height() {
                var t = i.height || this.width * i.heightRatio;
                return j(t, '"height" or "heightRatio" is missing.'),
                h(r, t) - this.padding.top - this.padding.bottom
            }
        }
    }(t, n) : function(t, n) {
        var e, i = n.Elements, o = t.root, r = t.options;
        return {
            margin: "margin" + (r.direction === J ? "Left" : "Right"),
            height: 0,
            init: function() {
                this.resize()
            },
            resize: function() {
                r = t.options,
                e = i.track,
                this.gap = h(o, r.gap);
                var n = r.padding
                    , s = h(o, n.left || n)
                    , a = h(o, n.right || n);
                this.padding = {
                    left: s,
                    right: a
                },
                E(e, {
                    paddingLeft: f(s),
                    paddingRight: f(a)
                })
            },
            totalWidth: function(n) {
                void 0 === n && (n = t.length - 1);
                var e = i.getSlide(n)
                    , o = 0;
                if (e) {
                    var s = M(e.slide)
                        , a = M(i.list);
                    o = r.direction === J ? a.right - s.left : s.right - a.left,
                    o += this.gap
                }
                return o
            },
            slideWidth: function(t) {
                if (r.autoWidth) {
                    var n = i.getSlide(t);
                    return n ? n.slide.offsetWidth : 0
                }
                var e = r.fixedWidth || (this.width + this.gap) / r.perPage - this.gap;
                return h(o, e)
            },
            slideHeight: function() {
                var t = r.height || r.fixedHeight || this.width * r.heightRatio;
                return h(o, t)
            },
            get width() {
                return e.clientWidth - this.padding.left - this.padding.right
            }
        }
    }(t, n),
    i(o).forEach((function(t) {
        e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
    }
    )),
    e);
    function u() {
        a.init(),
        E(t.root, {
            maxWidth: f(t.options.width)
        }),
        r.each((function(t) {
            t.slide.style[a.margin] = f(a.gap)
        }
        )),
        c()
    }
    function c() {
        var n = t.options;
        a.resize(),
        E(r.track, {
            height: f(a.height)
        });
        var e = n.autoHeight ? null : f(a.slideHeight());
        r.each((function(t) {
            E(t.container, {
                height: e
            }),
            E(t.slide, {
                width: n.autoWidth ? null : f(a.slideWidth(t.index)),
                height: t.container ? null : e
            })
        }
        )),
        t.emit("resized")
    }
    return a
}
    , st = Math.abs
    , at = function(t, n) {
    var e, i, r, s, a = n.Track, u = n.Controller, d = t.options.direction === K, f = d ? "y" : "x", l = {
        disabled: !1,
        mount: function() {
            var e = this
                , i = n.Elements
                , r = i.track;
            t.on("touchstart mousedown", h, r).on("touchmove mousemove", g, r, {
                passive: !1
            }).on("touchend touchcancel mouseleave mouseup dragend", v, r).on("mounted refresh", (function() {
                o(i.list.querySelectorAll("img, a"), (function(n) {
                    t.off("dragstart", n).on("dragstart", (function(t) {
                        t.preventDefault()
                    }
                    ), n, {
                        passive: !1
                    })
                }
                ))
            }
            )).on("mounted updated", (function() {
                e.disabled = !t.options.drag
            }
            ))
        }
    };
    function h(t) {
        l.disabled || s || p(t)
    }
    function p(t) {
        e = a.toCoord(a.position),
        i = m(t, {}),
        r = i
    }
    function g(n) {
        if (i)
            if (r = m(n, i),
            s) {
                if (n.cancelable && n.preventDefault(),
                !t.is(O)) {
                    var o = e[f] + r.offset[f];
                    a.translate(function(n) {
                        if (t.is(T)) {
                            var e = a.sign
                                , i = e * a.trim(a.toPosition(0))
                                , o = e * a.trim(a.toPosition(u.edgeIndex));
                            (n *= e) < i ? n = i - 7 * Math.log(i - n) : n > o && (n = o + 7 * Math.log(n - o)),
                            n *= e
                        }
                        return n
                    }(o))
                }
            } else
                (function(n) {
                    var e = n.offset;
                    if (t.State.is(G) && t.options.waitForTransition)
                        return !1;
                    var i = 180 * Math.atan(st(e.y) / st(e.x)) / Math.PI;
                    d && (i = 90 - i);
                    return i < t.options.dragAngleThreshold
                }
                )(r) && (t.emit("drag", i),
                s = !0,
                a.cancel(),
                p(n))
    }
    function v() {
        i = null,
        s && (t.emit("dragged", r),
        function(e) {
            var i = e.velocity[f]
                , o = st(i);
            if (o > 0) {
                var r = t.options
                    , s = t.index
                    , d = i < 0 ? -1 : 1
                    , l = s;
                if (!t.is(O)) {
                    var h = a.position;
                    o > r.flickVelocityThreshold && st(e.offset[f]) < r.swipeDistanceThreshold && (h += d * Math.min(o * r.flickPower, n.Layout.size * (r.flickMaxPages || 1))),
                    l = a.toIndex(h)
                }
                l === s && o > .1 && (l = s + d * a.sign),
                t.is(T) && (l = c(l, 0, u.edgeIndex)),
                u.go(l, r.isNavigation)
            }
        }(r),
        s = !1)
    }
    function m(t, n) {
        var e = t.timeStamp
            , i = t.touches
            , o = i ? i[0] : t
            , r = o.clientX
            , s = o.clientY
            , a = n.to || {}
            , u = a.x
            , c = void 0 === u ? r : u
            , d = a.y
            , f = {
            x: r - c,
            y: s - (void 0 === d ? s : d)
        }
            , l = e - (n.time || 0);
        return {
            to: {
                x: r,
                y: s
            },
            offset: f,
            time: e,
            velocity: {
                x: f.x / l,
                y: f.y / l
            }
        }
    }
    return l
}
    , ut = function(t, n) {
    var e = !1;
    function i(t) {
        e && (t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation())
    }
    return {
        required: t.options.drag,
        mount: function() {
            t.on("click", i, n.Elements.track, {
                capture: !0
            }).on("drag", (function() {
                e = !0
            }
            )).on("dragged", (function() {
                setTimeout((function() {
                    e = !1
                }
                ))
            }
            ))
        }
    }
}
    , ct = 1
    , dt = 2
    , ft = 3
    , lt = function(t, n, e) {
    var i, o, r, s = t.classes, a = t.root, u = n.Elements;
    function c() {
        var r = n.Controller
            , s = r.prevIndex
            , a = r.nextIndex
            , u = t.length > t.options.perPage || t.is(A);
        i.disabled = s < 0 || !u,
        o.disabled = a < 0 || !u,
        t.emit(e + ":updated", i, o, s, a)
    }
    function d(n) {
        return y('<button class="' + s.arrow + " " + (n ? s.prev : s.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="' + (t.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
    }
    return {
        required: t.options.arrows,
        mount: function() {
            i = u.arrows.prev,
            o = u.arrows.next,
            i && o || !t.options.arrows || (i = d(!0),
            o = d(!1),
            r = !0,
            function() {
                var n = m("div", {
                    class: s.arrows
                });
                w(n, i),
                w(n, o);
                var e = u.slider
                    , r = "slider" === t.options.arrows && e ? e : a;
                x(n, r.firstElementChild)
            }()),
            i && o && t.on("click", (function() {
                t.go("<")
            }
            ), i).on("click", (function() {
                t.go(">")
            }
            ), o).on("mounted move updated refresh", c),
            this.arrows = {
                prev: i,
                next: o
            }
        },
        mounted: function() {
            t.emit(e + ":mounted", i, o)
        },
        destroy: function() {
            I([i, o], "disabled"),
            r && b(i.parentElement)
        }
    }
}
    , ht = "move.page"
    , pt = "updated.page refresh.page"
    , gt = function(t, n, e) {
    var i = {}
        , o = n.Elements
        , r = {
        mount: function() {
            var n = t.options.pagination;
            if (n) {
                i = function() {
                    var n = t.options
                        , e = t.classes
                        , i = m("ul", {
                        class: e.pagination
                    })
                        , r = o.getSlides(!1).filter((function(t) {
                        return !1 !== n.focus || t.index % n.perPage == 0
                    }
                    )).map((function(n, r) {
                        var s = m("li", {})
                            , a = m("button", {
                            class: e.page,
                            type: "button"
                        });
                        return w(s, a),
                        w(i, s),
                        t.on("click", (function() {
                            t.go(">" + r)
                        }
                        ), a),
                        {
                            li: s,
                            button: a,
                            page: r,
                            Slides: o.getSlidesByPage(r)
                        }
                    }
                    ));
                    return {
                        list: i,
                        items: r
                    }
                }();
                var e = o.slider;
                w("slider" === n && e ? e : t.root, i.list),
                t.on(ht, s)
            }
            t.off(pt).on(pt, (function() {
                r.destroy(),
                t.options.pagination && (r.mount(),
                r.mounted())
            }
            ))
        },
        mounted: function() {
            if (t.options.pagination) {
                var n = t.index;
                t.emit(e + ":mounted", i, this.getItem(n)),
                s(n, -1)
            }
        },
        destroy: function() {
            b(i.list),
            i.items && i.items.forEach((function(n) {
                t.off("click", n.button)
            }
            )),
            t.off(ht),
            i = {}
        },
        getItem: function(t) {
            return i.items[n.Controller.toPage(t)]
        },
        get data() {
            return i
        }
    };
    function s(n, o) {
        var s = r.getItem(o)
            , a = r.getItem(n)
            , u = D.active;
        s && S(s.button, u),
        a && k(a.button, u),
        t.emit(e + ":updated", i, s, a)
    }
    return r
}
    , vt = "data-splide-lazy"
    , mt = "data-splide-lazy-srcset"
    , yt = "aria-current"
    , bt = "aria-controls"
    , wt = "aria-label"
    , xt = "aria-hidden"
    , Et = "tabindex"
    , _t = {
    ltr: {
        ArrowLeft: "<",
        ArrowRight: ">",
        Left: "<",
        Right: ">"
    },
    rtl: {
        ArrowLeft: ">",
        ArrowRight: "<",
        Left: ">",
        Right: "<"
    },
    ttb: {
        ArrowUp: "<",
        ArrowDown: ">",
        Up: "<",
        Down: ">"
    }
}
    , kt = function(t, n) {
    var e = t.i18n
        , i = n.Elements
        , o = [xt, Et, bt, wt, yt, "role"];
    function r(n, e) {
        C(n, xt, !e),
        t.options.slideFocus && C(n, Et, e ? 0 : -1)
    }
    function s(t, n) {
        var e = i.track.id;
        C(t, bt, e),
        C(n, bt, e)
    }
    function a(n, i, o, r) {
        var s = t.index
            , a = o > -1 && s < o ? e.last : e.prev
            , u = r > -1 && s > r ? e.first : e.next;
        C(n, wt, a),
        C(i, wt, u)
    }
    function u(n, i) {
        i && C(i.button, yt, !0),
        n.items.forEach((function(n) {
            var i = t.options
                , o = d(!1 === i.focus && i.perPage > 1 ? e.pageX : e.slideX, n.page + 1)
                , r = n.button
                , s = n.Slides.map((function(t) {
                return t.slide.id
            }
            ));
            C(r, bt, s.join(" ")),
            C(r, wt, o)
        }
        ))
    }
    function c(t, n, e) {
        n && I(n.button, yt),
        e && C(e.button, yt, !0)
    }
    function f(t) {
        i.each((function(n) {
            var i = n.slide
                , o = n.realIndex;
            h(i) || C(i, "role", "button");
            var r = o > -1 ? o : n.index
                , s = d(e.slideX, r + 1)
                , a = t.Components.Elements.getSlide(r);
            C(i, wt, s),
            a && C(i, bt, a.slide.id)
        }
        ))
    }
    function l(t, n) {
        var e = t.slide;
        n ? C(e, yt, !0) : I(e, yt)
    }
    function h(t) {
        return "BUTTON" === t.tagName
    }
    return {
        required: t.options.accessibility,
        mount: function() {
            t.on("visible", (function(t) {
                r(t.slide, !0)
            }
            )).on("hidden", (function(t) {
                r(t.slide, !1)
            }
            )).on("arrows:mounted", s).on("arrows:updated", a).on("pagination:mounted", u).on("pagination:updated", c).on("refresh", (function() {
                I(n.Clones.clones, o)
            }
            )),
            t.options.isNavigation && t.on("navigation:mounted navigation:updated", f).on("active", (function(t) {
                l(t, !0)
            }
            )).on("inactive", (function(t) {
                l(t, !1)
            }
            )),
            ["play", "pause"].forEach((function(t) {
                var n = i[t];
                n && (h(n) || C(n, "role", "button"),
                C(n, bt, i.track.id),
                C(n, wt, e[t]))
            }
            ))
        },
        destroy: function() {
            var t = n.Arrows
                , e = t ? t.arrows : {};
            I(i.slides.concat([e.prev, e.next, i.play, i.pause]), o)
        }
    }
}
    , St = "move.sync"
    , Pt = "mouseup touchend"
    , Ct = [" ", "Enter", "Spacebar"]
    , zt = {
    Options: Y,
    Breakpoints: function(t) {
        var n, e, i = t.options.breakpoints, o = ot(s, 50), r = [];
        function s() {
            var o, s = (o = r.filter((function(t) {
                return t.mql.matches
            }
            ))[0]) ? o.point : -1;
            if (s !== e) {
                e = s;
                var a = t.State
                    , u = i[s] || n
                    , c = u.destroy;
                c ? (t.options = n,
                t.destroy("completely" === c)) : (a.is(X) && t.mount(),
                t.options = u)
            }
        }
        return {
            required: i && matchMedia,
            mount: function() {
                r = Object.keys(i).sort((function(t, n) {
                    return +t - +n
                }
                )).map((function(t) {
                    return {
                        point: t,
                        mql: matchMedia("(max-width:" + t + "px)")
                    }
                }
                )),
                this.destroy(!0),
                addEventListener("resize", o),
                n = t.options,
                s()
            },
            destroy: function(t) {
                t && removeEventListener("resize", o)
            }
        }
    },
    Controller: tt,
    Elements: Z,
    Track: et,
    Clones: it,
    Layout: rt,
    Drag: at,
    Click: ut,
    Autoplay: function(t, n, e) {
        var i, o = [], r = n.Elements, s = {
            required: t.options.autoplay,
            mount: function() {
                var n = t.options;
                r.slides.length > n.perPage && (i = function(t, n, e) {
                    var i, o, r, s = window.requestAnimationFrame, a = !0, u = function u(c) {
                        a || (i || (i = c,
                        r && r < 1 && (i -= r * n)),
                        r = (o = c - i) / n,
                        o >= n && (i = 0,
                        r = 1,
                        t()),
                        e && e(r),
                        s(u))
                    };
                    return {
                        pause: function() {
                            a = !0,
                            i = 0
                        },
                        play: function(t) {
                            i = 0,
                            t && (r = 0),
                            a && (a = !1,
                            s(u))
                        }
                    }
                }((function() {
                    t.go(">")
                }
                ), n.interval, (function(n) {
                    t.emit(e + ":playing", n),
                    r.bar && E(r.bar, {
                        width: 100 * n + "%"
                    })
                }
                )),
                function() {
                    var n = t.options
                        , e = t.sibling
                        , i = [t.root, e ? e.root : null];
                    n.pauseOnHover && (a(i, "mouseleave", ct, !0),
                    a(i, "mouseenter", ct, !1));
                    n.pauseOnFocus && (a(i, "focusout", dt, !0),
                    a(i, "focusin", dt, !1));
                    r.play && t.on("click", (function() {
                        s.play(dt),
                        s.play(ft)
                    }
                    ), r.play);
                    r.pause && a([r.pause], "click", ft, !1);
                    t.on("move refresh", (function() {
                        s.play()
                    }
                    )).on("destroy", (function() {
                        s.pause()
                    }
                    ))
                }(),
                this.play())
            },
            play: function(n) {
                void 0 === n && (n = 0),
                (o = o.filter((function(t) {
                    return t !== n
                }
                ))).length || (t.emit(e + ":play"),
                i.play(t.options.resetProgress))
            },
            pause: function(n) {
                void 0 === n && (n = 0),
                i.pause(),
                -1 === o.indexOf(n) && o.push(n),
                1 === o.length && t.emit(e + ":pause")
            }
        };
        function a(n, e, i, o) {
            n.forEach((function(n) {
                t.on(e, (function() {
                    s[o ? "play" : "pause"](i)
                }
                ), n)
            }
            ))
        }
        return s
    },
    Cover: function(t, n) {
        function e(t) {
            n.Elements.each((function(n) {
                var e = g(n.slide, "IMG") || g(n.container, "IMG");
                e && e.src && i(e, t)
            }
            ))
        }
        function i(t, n) {
            E(t.parentElement, {
                background: n ? "" : 'center/cover no-repeat url("' + t.src + '")'
            }),
            E(t, {
                display: n ? "" : "none"
            })
        }
        return {
            required: t.options.cover,
            mount: function() {
                t.on("lazyload:loaded", (function(t) {
                    i(t, !1)
                }
                )),
                t.on("mounted updated refresh", (function() {
                    return e(!1)
                }
                ))
            },
            destroy: function() {
                e(!0)
            }
        }
    },
    Arrows: lt,
    Pagination: gt,
    LazyLoad: function(t, n, e) {
        var i, r, s = t.options, a = "sequential" === s.lazyLoad;
        function u() {
            r = [],
            i = 0
        }
        function c(n) {
            n = isNaN(n) ? t.index : n,
            (r = r.filter((function(t) {
                return !t.Slide.isWithin(n, s.perPage * (s.preloadPages + 1)) || (d(t.img, t.Slide),
                !1)
            }
            )))[0] || t.off("moved." + e)
        }
        function d(n, e) {
            k(e.slide, D.loading);
            var i = m("span", {
                class: t.classes.spinner
            });
            w(n.parentElement, i),
            n.onload = function() {
                l(n, i, e, !1)
            }
            ,
            n.onerror = function() {
                l(n, i, e, !0)
            }
            ,
            C(n, "srcset", z(n, mt) || ""),
            C(n, "src", z(n, vt) || "")
        }
        function f() {
            if (i < r.length) {
                var t = r[i];
                d(t.img, t.Slide)
            }
            i++
        }
        function l(n, i, o, r) {
            S(o.slide, D.loading),
            r || (b(i),
            E(n, {
                display: ""
            }),
            t.emit(e + ":loaded", n).emit("resize")),
            a && f()
        }
        return {
            required: s.lazyLoad,
            mount: function() {
                t.on("mounted refresh", (function() {
                    u(),
                    n.Elements.each((function(t) {
                        o(t.slide.querySelectorAll("[data-splide-lazy], [" + mt + "]"), (function(n) {
                            n.src || n.srcset || (r.push({
                                img: n,
                                Slide: t
                            }),
                            E(n, {
                                display: "none"
                            }))
                        }
                        ))
                    }
                    )),
                    a && f()
                }
                )),
                a || t.on("mounted refresh moved." + e, c)
            },
            destroy: u
        }
    },
    Keyboard: function(t) {
        var n;
        return {
            mount: function() {
                t.on("mounted updated", (function() {
                    var e = t.options
                        , i = t.root
                        , o = _t[e.direction]
                        , r = e.keyboard;
                    n && (t.off("keydown", n),
                    I(i, Et)),
                    r && ("focused" === r ? (n = i,
                    C(i, Et, 0)) : n = document,
                    t.on("keydown", (function(n) {
                        o[n.key] && t.go(o[n.key])
                    }
                    ), n))
                }
                ))
            }
        }
    },
    Sync: function(t) {
        var n = t.sibling
            , e = n && n.options.isNavigation;
        function i() {
            t.on(St, (function(t, e, i) {
                n.off(St).go(n.is(A) ? i : t, !1),
                o()
            }
            ))
        }
        function o() {
            n.on(St, (function(n, e, o) {
                t.off(St).go(t.is(A) ? o : n, !1),
                i()
            }
            ))
        }
        function r() {
            n.Components.Elements.each((function(n) {
                var e = n.slide
                    , i = n.index;
                t.off(Pt, e).on(Pt, (function(t) {
                    t.button && 0 !== t.button || s(i)
                }
                ), e),
                t.off("keyup", e).on("keyup", (function(t) {
                    Ct.indexOf(t.key) > -1 && (t.preventDefault(),
                    s(i))
                }
                ), e, {
                    passive: !1
                })
            }
            ))
        }
        function s(e) {
            t.State.is(F) && n.go(e)
        }
        return {
            required: !!n,
            mount: function() {
                i(),
                o(),
                e && (r(),
                t.on("refresh", (function() {
                    setTimeout((function() {
                        r(),
                        n.emit("navigation:updated", t)
                    }
                    ))
                }
                )))
            },
            mounted: function() {
                e && n.emit("navigation:mounted", t)
            }
        }
    },
    A11y: kt
};
var It = function(t) {
    var n, e;
    function i(n, e) {
        return t.call(this, n, e, zt) || this
    }
    return e = t,
    (n = i).prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.__proto__ = e,
    i
}(U);
window.Splide = It
}();

/* * LazyLoad.js * Version 17 - https://github.com/verlok/vanilla-lazyload */
