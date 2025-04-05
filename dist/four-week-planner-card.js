
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.2.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$i = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$i?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $a4df01ff0b0132fe$export$3bebd1f0e3943985 extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $f58f44579a4747ac$export$45b790e32b2810ee), i.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $f58f44579a4747ac$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$a4df01ff0b0132fe$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $a4df01ff0b0132fe$export$3bebd1f0e3943985.resultType = 1;
const $a4df01ff0b0132fe$export$b6e69390c23686fb = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($a4df01ff0b0132fe$export$3bebd1f0e3943985);


var $10b9906fb633b71f$exports = {};
'use strict';
Object.defineProperty($10b9906fb633b71f$exports, '__esModule', {
    value: true
});
function $10b9906fb633b71f$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $10b9906fb633b71f$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $10b9906fb633b71f$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $10b9906fb633b71f$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $10b9906fb633b71f$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $10b9906fb633b71f$var$_extends() {
    $10b9906fb633b71f$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $10b9906fb633b71f$var$_extends.apply(this, arguments);
}
function $10b9906fb633b71f$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    $10b9906fb633b71f$var$_setPrototypeOf(subClass, superClass);
}
function $10b9906fb633b71f$var$_getPrototypeOf(o) {
    $10b9906fb633b71f$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $10b9906fb633b71f$var$_getPrototypeOf(o);
}
function $10b9906fb633b71f$var$_setPrototypeOf(o, p) {
    $10b9906fb633b71f$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $10b9906fb633b71f$var$_setPrototypeOf(o, p);
}
function $10b9906fb633b71f$var$_isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function $10b9906fb633b71f$var$_construct(Parent, args, Class) {
    if ($10b9906fb633b71f$var$_isNativeReflectConstruct()) $10b9906fb633b71f$var$_construct = Reflect.construct.bind();
    else $10b9906fb633b71f$var$_construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $10b9906fb633b71f$var$_setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return $10b9906fb633b71f$var$_construct.apply(null, arguments);
}
function $10b9906fb633b71f$var$_isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function $10b9906fb633b71f$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $10b9906fb633b71f$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$10b9906fb633b71f$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $10b9906fb633b71f$var$_construct(Class, arguments, $10b9906fb633b71f$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $10b9906fb633b71f$var$_setPrototypeOf(Wrapper, Class);
    };
    return $10b9906fb633b71f$var$_wrapNativeSuper(Class);
}
function $10b9906fb633b71f$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $10b9906fb633b71f$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $10b9906fb633b71f$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $10b9906fb633b71f$var$_arrayLikeToArray(o, minLen);
}
function $10b9906fb633b71f$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $10b9906fb633b71f$var$_createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = $10b9906fb633b71f$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $10b9906fb633b71f$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function $10b9906fb633b71f$var$_toPropertyKey(arg) {
    var key = $10b9906fb633b71f$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ var $10b9906fb633b71f$var$LuxonError = /*#__PURE__*/ function(_Error) {
    $10b9906fb633b71f$var$_inheritsLoose(LuxonError, _Error);
    function LuxonError() {
        return _Error.apply(this, arguments) || this;
    }
    return LuxonError;
}(/*#__PURE__*/ $10b9906fb633b71f$var$_wrapNativeSuper(Error));
/**
 * @private
 */ var $10b9906fb633b71f$var$InvalidDateTimeError = /*#__PURE__*/ function(_LuxonError) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidDateTimeError, _LuxonError);
    function InvalidDateTimeError(reason) {
        return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }
    return InvalidDateTimeError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$InvalidIntervalError = /*#__PURE__*/ function(_LuxonError2) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidIntervalError, _LuxonError2);
    function InvalidIntervalError(reason) {
        return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }
    return InvalidIntervalError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$InvalidDurationError = /*#__PURE__*/ function(_LuxonError3) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidDurationError, _LuxonError3);
    function InvalidDurationError(reason) {
        return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }
    return InvalidDurationError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$ConflictingSpecificationError = /*#__PURE__*/ function(_LuxonError4) {
    $10b9906fb633b71f$var$_inheritsLoose(ConflictingSpecificationError, _LuxonError4);
    function ConflictingSpecificationError() {
        return _LuxonError4.apply(this, arguments) || this;
    }
    return ConflictingSpecificationError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$InvalidUnitError = /*#__PURE__*/ function(_LuxonError5) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidUnitError, _LuxonError5);
    function InvalidUnitError(unit) {
        return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }
    return InvalidUnitError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$InvalidArgumentError = /*#__PURE__*/ function(_LuxonError6) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidArgumentError, _LuxonError6);
    function InvalidArgumentError() {
        return _LuxonError6.apply(this, arguments) || this;
    }
    return InvalidArgumentError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$ZoneIsAbstractError = /*#__PURE__*/ function(_LuxonError7) {
    $10b9906fb633b71f$var$_inheritsLoose(ZoneIsAbstractError, _LuxonError7);
    function ZoneIsAbstractError() {
        return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }
    return ZoneIsAbstractError;
}($10b9906fb633b71f$var$LuxonError);
/**
 * @private
 */ var $10b9906fb633b71f$var$n = "numeric", $10b9906fb633b71f$var$s = "short", $10b9906fb633b71f$var$l = "long";
var $10b9906fb633b71f$var$DATE_SHORT = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$n,
    day: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATE_MED = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$s,
    day: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATE_MED_WITH_WEEKDAY = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$s,
    day: $10b9906fb633b71f$var$n,
    weekday: $10b9906fb633b71f$var$s
};
var $10b9906fb633b71f$var$DATE_FULL = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATE_HUGE = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n,
    weekday: $10b9906fb633b71f$var$l
};
var $10b9906fb633b71f$var$TIME_SIMPLE = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$TIME_WITH_SECONDS = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$TIME_WITH_SHORT_OFFSET = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$s
};
var $10b9906fb633b71f$var$TIME_WITH_LONG_OFFSET = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$l
};
var $10b9906fb633b71f$var$TIME_24_SIMPLE = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    hourCycle: "h23"
};
var $10b9906fb633b71f$var$TIME_24_WITH_SECONDS = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    hourCycle: "h23"
};
var $10b9906fb633b71f$var$TIME_24_WITH_SHORT_OFFSET = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    hourCycle: "h23",
    timeZoneName: $10b9906fb633b71f$var$s
};
var $10b9906fb633b71f$var$TIME_24_WITH_LONG_OFFSET = {
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    hourCycle: "h23",
    timeZoneName: $10b9906fb633b71f$var$l
};
var $10b9906fb633b71f$var$DATETIME_SHORT = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$n,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATETIME_SHORT_WITH_SECONDS = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$n,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATETIME_MED = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$s,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATETIME_MED_WITH_SECONDS = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$s,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATETIME_MED_WITH_WEEKDAY = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$s,
    day: $10b9906fb633b71f$var$n,
    weekday: $10b9906fb633b71f$var$s,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n
};
var $10b9906fb633b71f$var$DATETIME_FULL = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$s
};
var $10b9906fb633b71f$var$DATETIME_FULL_WITH_SECONDS = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$s
};
var $10b9906fb633b71f$var$DATETIME_HUGE = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n,
    weekday: $10b9906fb633b71f$var$l,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$l
};
var $10b9906fb633b71f$var$DATETIME_HUGE_WITH_SECONDS = {
    year: $10b9906fb633b71f$var$n,
    month: $10b9906fb633b71f$var$l,
    day: $10b9906fb633b71f$var$n,
    weekday: $10b9906fb633b71f$var$l,
    hour: $10b9906fb633b71f$var$n,
    minute: $10b9906fb633b71f$var$n,
    second: $10b9906fb633b71f$var$n,
    timeZoneName: $10b9906fb633b71f$var$l
};
/**
 * @interface
 */ var $10b9906fb633b71f$var$Zone = /*#__PURE__*/ function() {
    function Zone() {}
    var _proto = Zone.prototype;
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ _proto.offsetName = function offsetName(ts, opts) {
        throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
    } /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ ;
    _proto.formatOffset = function formatOffset(ts, format) {
        throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
    } /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ ;
    _proto.offset = function offset(ts) {
        throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
    } /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ ;
    _proto.equals = function equals(otherZone) {
        throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
    } /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */ ;
    $10b9906fb633b71f$var$_createClass(Zone, [
        {
            key: "type",
            get: /**
     * The type of zone
     * @abstract
     * @type {string}
     */ function get() {
                throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
            }
        },
        {
            key: "name",
            get: function get() {
                throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
            }
        },
        {
            key: "ianaName",
            get: function get() {
                return this.name;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
            }
        },
        {
            key: "isValid",
            get: function get() {
                throw new $10b9906fb633b71f$var$ZoneIsAbstractError();
            }
        }
    ]);
    return Zone;
}();
var $10b9906fb633b71f$var$singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ var $10b9906fb633b71f$var$SystemZone = /*#__PURE__*/ function(_Zone) {
    $10b9906fb633b71f$var$_inheritsLoose(SystemZone, _Zone);
    function SystemZone() {
        return _Zone.apply(this, arguments) || this;
    }
    var _proto = SystemZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return $10b9906fb633b71f$var$parseZoneInfo(ts, format, locale);
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return $10b9906fb633b71f$var$formatOffset(this.offset(ts), format);
    } /** @override **/ ;
    _proto.offset = function offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "system";
    } /** @override **/ ;
    $10b9906fb633b71f$var$_createClass(SystemZone, [
        {
            key: "type",
            get: /** @override **/ function get() {
                return "system";
            }
        },
        {
            key: "name",
            get: function get() {
                return new Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "instance",
            get: /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */ function get() {
                if ($10b9906fb633b71f$var$singleton$1 === null) $10b9906fb633b71f$var$singleton$1 = new SystemZone();
                return $10b9906fb633b71f$var$singleton$1;
            }
        }
    ]);
    return SystemZone;
}($10b9906fb633b71f$var$Zone);
var $10b9906fb633b71f$var$dtfCache = {};
function $10b9906fb633b71f$var$makeDTF(zone) {
    if (!$10b9906fb633b71f$var$dtfCache[zone]) $10b9906fb633b71f$var$dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
    });
    return $10b9906fb633b71f$var$dtfCache[zone];
}
var $10b9906fb633b71f$var$typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};
function $10b9906fb633b71f$var$hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fadOrBc = parsed[4], fHour = parsed[5], fMinute = parsed[6], fSecond = parsed[7];
    return [
        fYear,
        fMonth,
        fDay,
        fadOrBc,
        fHour,
        fMinute,
        fSecond
    ];
}
function $10b9906fb633b71f$var$partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for(var i = 0; i < formatted.length; i++){
        var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value;
        var pos = $10b9906fb633b71f$var$typeToPos[type];
        if (type === "era") filled[pos] = value;
        else if (!$10b9906fb633b71f$var$isUndefined(pos)) filled[pos] = parseInt(value, 10);
    }
    return filled;
}
var $10b9906fb633b71f$var$ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */ var $10b9906fb633b71f$var$IANAZone = /*#__PURE__*/ function(_Zone) {
    $10b9906fb633b71f$var$_inheritsLoose(IANAZone, _Zone);
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ IANAZone.create = function create(name) {
        if (!$10b9906fb633b71f$var$ianaZoneCache[name]) $10b9906fb633b71f$var$ianaZoneCache[name] = new IANAZone(name);
        return $10b9906fb633b71f$var$ianaZoneCache[name];
    } /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ ;
    IANAZone.resetCache = function resetCache() {
        $10b9906fb633b71f$var$ianaZoneCache = {};
        $10b9906fb633b71f$var$dtfCache = {};
    } /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */ ;
    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
        return this.isValidZone(s);
    } /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ ;
    IANAZone.isValidZone = function isValidZone(zone) {
        if (!zone) return false;
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    };
    function IANAZone(name) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.zoneName = name;
        /** @private **/ _this.valid = IANAZone.isValidZone(name);
        return _this;
    }
    /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */ var _proto = IANAZone.prototype;
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return $10b9906fb633b71f$var$parseZoneInfo(ts, format, locale, this.name);
    } /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return $10b9906fb633b71f$var$formatOffset(this.offset(ts), format);
    } /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ ;
    _proto.offset = function offset(ts) {
        var date = new Date(ts);
        if (isNaN(date)) return NaN;
        var dtf = $10b9906fb633b71f$var$makeDTF(this.name);
        var _ref2 = dtf.formatToParts ? $10b9906fb633b71f$var$partsOffset(dtf, date) : $10b9906fb633b71f$var$hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], adOrBc = _ref2[3], hour = _ref2[4], minute = _ref2[5], second = _ref2[6];
        if (adOrBc === "BC") year = -Math.abs(year) + 1;
        // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        var adjustedHour = hour === 24 ? 0 : hour;
        var asUTC = $10b9906fb633b71f$var$objToLocalTS({
            year: year,
            month: month,
            day: day,
            hour: adjustedHour,
            minute: minute,
            second: second,
            millisecond: 0
        });
        var asTS = +date;
        var over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / 60000;
    } /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    } /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */ ;
    $10b9906fb633b71f$var$_createClass(IANAZone, [
        {
            key: "type",
            get: function get() {
                return "iana";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.valid;
            }
        }
    ]);
    return IANAZone;
}($10b9906fb633b71f$var$Zone);
var $10b9906fb633b71f$var$_excluded = [
    "base"
], $10b9906fb633b71f$var$_excluded2 = [
    "padTo",
    "floor"
];
// todo - remap caching
var $10b9906fb633b71f$var$intlLFCache = {};
function $10b9906fb633b71f$var$getCachedLF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = $10b9906fb633b71f$var$intlLFCache[key];
    if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        $10b9906fb633b71f$var$intlLFCache[key] = dtf;
    }
    return dtf;
}
var $10b9906fb633b71f$var$intlDTCache = {};
function $10b9906fb633b71f$var$getCachedDTF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = $10b9906fb633b71f$var$intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        $10b9906fb633b71f$var$intlDTCache[key] = dtf;
    }
    return dtf;
}
var $10b9906fb633b71f$var$intlNumCache = {};
function $10b9906fb633b71f$var$getCachedINF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var inf = $10b9906fb633b71f$var$intlNumCache[key];
    if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        $10b9906fb633b71f$var$intlNumCache[key] = inf;
    }
    return inf;
}
var $10b9906fb633b71f$var$intlRelCache = {};
function $10b9906fb633b71f$var$getCachedRTF(locString, opts) {
    if (opts === void 0) opts = {};
    var _opts = opts;
    _opts.base;
    var cacheKeyOpts = $10b9906fb633b71f$var$_objectWithoutPropertiesLoose(_opts, $10b9906fb633b71f$var$_excluded); // exclude `base` from the options
    var key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    var inf = $10b9906fb633b71f$var$intlRelCache[key];
    if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        $10b9906fb633b71f$var$intlRelCache[key] = inf;
    }
    return inf;
}
var $10b9906fb633b71f$var$sysLocaleCache = null;
function $10b9906fb633b71f$var$systemLocale() {
    if ($10b9906fb633b71f$var$sysLocaleCache) return $10b9906fb633b71f$var$sysLocaleCache;
    else {
        $10b9906fb633b71f$var$sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return $10b9906fb633b71f$var$sysLocaleCache;
    }
}
var $10b9906fb633b71f$var$weekInfoCache = {};
function $10b9906fb633b71f$var$getCachedWeekInfo(locString) {
    var data = $10b9906fb633b71f$var$weekInfoCache[locString];
    if (!data) {
        var locale = new Intl.Locale(locString);
        // browsers currently implement this as a property, but spec says it should be a getter function
        data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
        $10b9906fb633b71f$var$weekInfoCache[locString] = data;
    }
    return data;
}
function $10b9906fb633b71f$var$parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    // private subtags and unicode subtags have ordering requirements,
    // and we're not properly parsing this, so just strip out the
    // private ones if they exist.
    var xIndex = localeStr.indexOf("-x-");
    if (xIndex !== -1) localeStr = localeStr.substring(0, xIndex);
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        var options;
        var selectedStr;
        try {
            options = $10b9906fb633b71f$var$getCachedDTF(localeStr).resolvedOptions();
            selectedStr = localeStr;
        } catch (e) {
            var smaller = localeStr.substring(0, uIndex);
            options = $10b9906fb633b71f$var$getCachedDTF(smaller).resolvedOptions();
            selectedStr = smaller;
        }
        var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
        return [
            selectedStr,
            numberingSystem,
            calendar
        ];
    }
}
function $10b9906fb633b71f$var$intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) localeStr += "-u";
        if (outputCalendar) localeStr += "-ca-" + outputCalendar;
        if (numberingSystem) localeStr += "-nu-" + numberingSystem;
        return localeStr;
    } else return localeStr;
}
function $10b9906fb633b71f$var$mapMonths(f) {
    var ms = [];
    for(var i = 1; i <= 12; i++){
        var dt = $10b9906fb633b71f$var$DateTime.utc(2009, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function $10b9906fb633b71f$var$mapWeekdays(f) {
    var ms = [];
    for(var i = 1; i <= 7; i++){
        var dt = $10b9906fb633b71f$var$DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function $10b9906fb633b71f$var$listStuff(loc, length, englishFn, intlFn) {
    var mode = loc.listingMode();
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function $10b9906fb633b71f$var$supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ var $10b9906fb633b71f$var$PolyNumberFormatter = /*#__PURE__*/ function() {
    function PolyNumberFormatter(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        opts.padTo;
        opts.floor;
        var otherOpts = $10b9906fb633b71f$var$_objectWithoutPropertiesLoose(opts, $10b9906fb633b71f$var$_excluded2);
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
            var intlOpts = $10b9906fb633b71f$var$_extends({
                useGrouping: false
            }, opts);
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = $10b9906fb633b71f$var$getCachedINF(intl, intlOpts);
        }
    }
    var _proto = PolyNumberFormatter.prototype;
    _proto.format = function format(i) {
        if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            var _fixed = this.floor ? Math.floor(i) : $10b9906fb633b71f$var$roundTo(i, 3);
            return $10b9906fb633b71f$var$padStart(_fixed, this.padTo);
        }
    };
    return PolyNumberFormatter;
}();
/**
 * @private
 */ var $10b9906fb633b71f$var$PolyDateFormatter = /*#__PURE__*/ function() {
    function PolyDateFormatter(dt, intl, opts) {
        this.opts = opts;
        this.originalZone = undefined;
        var z = undefined;
        if (this.opts.timeZone) // Don't apply any workarounds if a timeZone is explicitly provided in opts
        this.dt = dt;
        else if (dt.zone.type === "fixed") {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && $10b9906fb633b71f$var$IANAZone.create(offsetZ).valid) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
                // we manually apply the offset and substitute the zone as needed.
                z = "UTC";
                this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({
                    minutes: dt.offset
                });
                this.originalZone = dt.zone;
            }
        } else if (dt.zone.type === "system") this.dt = dt;
        else if (dt.zone.type === "iana") {
            this.dt = dt;
            z = dt.zone.name;
        } else {
            // Custom zones can have any offset / offsetName so we just manually
            // apply the offset and substitute the zone as needed.
            z = "UTC";
            this.dt = dt.setZone("UTC").plus({
                minutes: dt.offset
            });
            this.originalZone = dt.zone;
        }
        var intlOpts = $10b9906fb633b71f$var$_extends({}, this.opts);
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = $10b9906fb633b71f$var$getCachedDTF(intl, intlOpts);
    }
    var _proto2 = PolyDateFormatter.prototype;
    _proto2.format = function format() {
        if (this.originalZone) // If we have to substitute in the actual zone name, we have to use
        // formatToParts so that the timezone can be replaced.
        return this.formatToParts().map(function(_ref) {
            var value = _ref.value;
            return value;
        }).join("");
        return this.dtf.format(this.dt.toJSDate());
    };
    _proto2.formatToParts = function formatToParts() {
        var _this = this;
        var parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) return parts.map(function(part) {
            if (part.type === "timeZoneName") {
                var offsetName = _this.originalZone.offsetName(_this.dt.ts, {
                    locale: _this.dt.locale,
                    format: _this.opts.timeZoneName
                });
                return $10b9906fb633b71f$var$_extends({}, part, {
                    value: offsetName
                });
            } else return part;
        });
        return parts;
    };
    _proto2.resolvedOptions = function resolvedOptions() {
        return this.dtf.resolvedOptions();
    };
    return PolyDateFormatter;
}();
/**
 * @private
 */ var $10b9906fb633b71f$var$PolyRelFormatter = /*#__PURE__*/ function() {
    function PolyRelFormatter(intl, isEnglish, opts) {
        this.opts = $10b9906fb633b71f$var$_extends({
            style: "long"
        }, opts);
        if (!isEnglish && $10b9906fb633b71f$var$hasRelative()) this.rtf = $10b9906fb633b71f$var$getCachedRTF(intl, opts);
    }
    var _proto3 = PolyRelFormatter.prototype;
    _proto3.format = function format(count, unit) {
        if (this.rtf) return this.rtf.format(count, unit);
        else return $10b9906fb633b71f$var$formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    };
    _proto3.formatToParts = function formatToParts(count, unit) {
        if (this.rtf) return this.rtf.formatToParts(count, unit);
        else return [];
    };
    return PolyRelFormatter;
}();
var $10b9906fb633b71f$var$fallbackWeekSettings = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [
        6,
        7
    ]
};
/**
 * @private
 */ var $10b9906fb633b71f$var$Locale = /*#__PURE__*/ function() {
    Locale.fromOpts = function fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.weekSettings, opts.defaultToEN);
    };
    Locale.create = function create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN) {
        if (defaultToEN === void 0) defaultToEN = false;
        var specifiedLocale = locale || $10b9906fb633b71f$var$Settings.defaultLocale;
        // the system locale is useful for human-readable strings but annoying for parsing/formatting known formats
        var localeR = specifiedLocale || (defaultToEN ? "en-US" : $10b9906fb633b71f$var$systemLocale());
        var numberingSystemR = numberingSystem || $10b9906fb633b71f$var$Settings.defaultNumberingSystem;
        var outputCalendarR = outputCalendar || $10b9906fb633b71f$var$Settings.defaultOutputCalendar;
        var weekSettingsR = $10b9906fb633b71f$var$validateWeekSettings(weekSettings) || $10b9906fb633b71f$var$Settings.defaultWeekSettings;
        return new Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
    };
    Locale.resetCache = function resetCache() {
        $10b9906fb633b71f$var$sysLocaleCache = null;
        $10b9906fb633b71f$var$intlDTCache = {};
        $10b9906fb633b71f$var$intlNumCache = {};
        $10b9906fb633b71f$var$intlRelCache = {};
    };
    Locale.fromObject = function fromObject(_temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, locale = _ref2.locale, numberingSystem = _ref2.numberingSystem, outputCalendar = _ref2.outputCalendar, weekSettings = _ref2.weekSettings;
        return Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
    };
    function Locale(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
        var _parseLocaleString = $10b9906fb633b71f$var$parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.weekSettings = weekSettings;
        this.intl = $10b9906fb633b71f$var$intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {},
            standalone: {}
        };
        this.monthsCache = {
            format: {},
            standalone: {}
        };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    var _proto4 = Locale.prototype;
    _proto4.listingMode = function listingMode() {
        var isActuallyEn = this.isEnglish();
        var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    };
    _proto4.clone = function clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, $10b9906fb633b71f$var$validateWeekSettings(alts.weekSettings) || this.weekSettings, alts.defaultToEN || false);
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
        if (alts === void 0) alts = {};
        return this.clone($10b9906fb633b71f$var$_extends({}, alts, {
            defaultToEN: true
        }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
        if (alts === void 0) alts = {};
        return this.clone($10b9906fb633b71f$var$_extends({}, alts, {
            defaultToEN: false
        }));
    };
    _proto4.months = function months$1(length, format) {
        var _this2 = this;
        if (format === void 0) format = false;
        return $10b9906fb633b71f$var$listStuff(this, length, $10b9906fb633b71f$var$months, function() {
            var intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.monthsCache[formatStr][length]) _this2.monthsCache[formatStr][length] = $10b9906fb633b71f$var$mapMonths(function(dt) {
                return _this2.extract(dt, intl, "month");
            });
            return _this2.monthsCache[formatStr][length];
        });
    };
    _proto4.weekdays = function weekdays$1(length, format) {
        var _this3 = this;
        if (format === void 0) format = false;
        return $10b9906fb633b71f$var$listStuff(this, length, $10b9906fb633b71f$var$weekdays, function() {
            var intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this3.weekdaysCache[formatStr][length]) _this3.weekdaysCache[formatStr][length] = $10b9906fb633b71f$var$mapWeekdays(function(dt) {
                return _this3.extract(dt, intl, "weekday");
            });
            return _this3.weekdaysCache[formatStr][length];
        });
    };
    _proto4.meridiems = function meridiems$1() {
        var _this4 = this;
        return $10b9906fb633b71f$var$listStuff(this, undefined, function() {
            return $10b9906fb633b71f$var$meridiems;
        }, function() {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!_this4.meridiemCache) {
                var intl = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                _this4.meridiemCache = [
                    $10b9906fb633b71f$var$DateTime.utc(2016, 11, 13, 9),
                    $10b9906fb633b71f$var$DateTime.utc(2016, 11, 13, 19)
                ].map(function(dt) {
                    return _this4.extract(dt, intl, "dayperiod");
                });
            }
            return _this4.meridiemCache;
        });
    };
    _proto4.eras = function eras$1(length) {
        var _this5 = this;
        return $10b9906fb633b71f$var$listStuff(this, length, $10b9906fb633b71f$var$eras, function() {
            var intl = {
                era: length
            };
            // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!_this5.eraCache[length]) _this5.eraCache[length] = [
                $10b9906fb633b71f$var$DateTime.utc(-40, 1, 1),
                $10b9906fb633b71f$var$DateTime.utc(2017, 1, 1)
            ].map(function(dt) {
                return _this5.extract(dt, intl, "era");
            });
            return _this5.eraCache[length];
        });
    };
    _proto4.extract = function extract(dt, intlOpts, field) {
        var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
        });
        return matching ? matching.value : null;
    };
    _proto4.numberFormatter = function numberFormatter(opts) {
        if (opts === void 0) opts = {};
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new $10b9906fb633b71f$var$PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };
    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
        if (intlOpts === void 0) intlOpts = {};
        return new $10b9906fb633b71f$var$PolyDateFormatter(dt, this.intl, intlOpts);
    };
    _proto4.relFormatter = function relFormatter(opts) {
        if (opts === void 0) opts = {};
        return new $10b9906fb633b71f$var$PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };
    _proto4.listFormatter = function listFormatter(opts) {
        if (opts === void 0) opts = {};
        return $10b9906fb633b71f$var$getCachedLF(this.intl, opts);
    };
    _proto4.isEnglish = function isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    _proto4.getWeekSettings = function getWeekSettings() {
        if (this.weekSettings) return this.weekSettings;
        else if (!$10b9906fb633b71f$var$hasLocaleWeekInfo()) return $10b9906fb633b71f$var$fallbackWeekSettings;
        else return $10b9906fb633b71f$var$getCachedWeekInfo(this.locale);
    };
    _proto4.getStartOfWeek = function getStartOfWeek() {
        return this.getWeekSettings().firstDay;
    };
    _proto4.getMinDaysInFirstWeek = function getMinDaysInFirstWeek() {
        return this.getWeekSettings().minimalDays;
    };
    _proto4.getWeekendDays = function getWeekendDays() {
        return this.getWeekSettings().weekend;
    };
    _proto4.equals = function equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };
    _proto4.toString = function toString() {
        return "Locale(" + this.locale + ", " + this.numberingSystem + ", " + this.outputCalendar + ")";
    };
    $10b9906fb633b71f$var$_createClass(Locale, [
        {
            key: "fastNumbers",
            get: function get() {
                if (this.fastNumbersCached == null) this.fastNumbersCached = $10b9906fb633b71f$var$supportsFastNumbers(this);
                return this.fastNumbersCached;
            }
        }
    ]);
    return Locale;
}();
var $10b9906fb633b71f$var$singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */ var $10b9906fb633b71f$var$FixedOffsetZone = /*#__PURE__*/ function(_Zone) {
    $10b9906fb633b71f$var$_inheritsLoose(FixedOffsetZone, _Zone);
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ FixedOffsetZone.instance = function instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    } /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */ ;
    FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
        if (s) {
            var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new FixedOffsetZone($10b9906fb633b71f$var$signedOffset(r[1], r[2]));
        }
        return null;
    };
    function FixedOffsetZone(offset) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.fixed = offset;
        return _this;
    }
    /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */ var _proto = FixedOffsetZone.prototype;
    /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */ _proto.offsetName = function offsetName() {
        return this.name;
    } /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return $10b9906fb633b71f$var$formatOffset(this.fixed, format);
    } /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */ ;
    /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */ _proto.offset = function offset() {
        return this.fixed;
    } /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    } /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */ ;
    $10b9906fb633b71f$var$_createClass(FixedOffsetZone, [
        {
            key: "type",
            get: function get() {
                return "fixed";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.fixed === 0 ? "UTC" : "UTC" + $10b9906fb633b71f$var$formatOffset(this.fixed, "narrow");
            }
        },
        {
            key: "ianaName",
            get: function get() {
                if (this.fixed === 0) return "Etc/UTC";
                else return "Etc/GMT" + $10b9906fb633b71f$var$formatOffset(-this.fixed, "narrow");
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return true;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "utcInstance",
            get: /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */ function get() {
                if ($10b9906fb633b71f$var$singleton === null) $10b9906fb633b71f$var$singleton = new FixedOffsetZone(0);
                return $10b9906fb633b71f$var$singleton;
            }
        }
    ]);
    return FixedOffsetZone;
}($10b9906fb633b71f$var$Zone);
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */ var $10b9906fb633b71f$var$InvalidZone = /*#__PURE__*/ function(_Zone) {
    $10b9906fb633b71f$var$_inheritsLoose(InvalidZone, _Zone);
    function InvalidZone(zoneName) {
        var _this;
        _this = _Zone.call(this) || this;
        /**  @private */ _this.zoneName = zoneName;
        return _this;
    }
    /** @override **/ var _proto = InvalidZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return null;
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset() {
        return "";
    } /** @override **/ ;
    _proto.offset = function offset() {
        return NaN;
    } /** @override **/ ;
    _proto.equals = function equals() {
        return false;
    } /** @override **/ ;
    $10b9906fb633b71f$var$_createClass(InvalidZone, [
        {
            key: "type",
            get: function get() {
                return "invalid";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return false;
            }
        }
    ]);
    return InvalidZone;
}($10b9906fb633b71f$var$Zone);
/**
 * @private
 */ function $10b9906fb633b71f$var$normalizeZone(input, defaultZone) {
    if ($10b9906fb633b71f$var$isUndefined(input) || input === null) return defaultZone;
    else if (input instanceof $10b9906fb633b71f$var$Zone) return input;
    else if ($10b9906fb633b71f$var$isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === "default") return defaultZone;
        else if (lowered === "local" || lowered === "system") return $10b9906fb633b71f$var$SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt") return $10b9906fb633b71f$var$FixedOffsetZone.utcInstance;
        else return $10b9906fb633b71f$var$FixedOffsetZone.parseSpecifier(lowered) || $10b9906fb633b71f$var$IANAZone.create(input);
    } else if ($10b9906fb633b71f$var$isNumber(input)) return $10b9906fb633b71f$var$FixedOffsetZone.instance(input);
    else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new $10b9906fb633b71f$var$InvalidZone(input);
}
var $10b9906fb633b71f$var$numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
};
var $10b9906fb633b71f$var$numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
var $10b9906fb633b71f$var$hanidecChars = $10b9906fb633b71f$var$numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function $10b9906fb633b71f$var$parseDigits(str) {
    var value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(var i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            if (str[i].search($10b9906fb633b71f$var$numberingSystems.hanidec) !== -1) value += $10b9906fb633b71f$var$hanidecChars.indexOf(str[i]);
            else for(var key in $10b9906fb633b71f$var$numberingSystemsUTF16){
                var _numberingSystemsUTF = $10b9906fb633b71f$var$numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) value += code - min;
            }
        }
        return parseInt(value, 10);
    } else return value;
}
// cache of {numberingSystem: {append: regex}}
var $10b9906fb633b71f$var$digitRegexCache = {};
function $10b9906fb633b71f$var$resetDigitRegexCache() {
    $10b9906fb633b71f$var$digitRegexCache = {};
}
function $10b9906fb633b71f$var$digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;
    if (append === void 0) append = "";
    var ns = numberingSystem || "latn";
    if (!$10b9906fb633b71f$var$digitRegexCache[ns]) $10b9906fb633b71f$var$digitRegexCache[ns] = {};
    if (!$10b9906fb633b71f$var$digitRegexCache[ns][append]) $10b9906fb633b71f$var$digitRegexCache[ns][append] = new RegExp("" + $10b9906fb633b71f$var$numberingSystems[ns] + append);
    return $10b9906fb633b71f$var$digitRegexCache[ns][append];
}
var $10b9906fb633b71f$var$now = function now() {
    return Date.now();
}, $10b9906fb633b71f$var$defaultZone = "system", $10b9906fb633b71f$var$defaultLocale = null, $10b9906fb633b71f$var$defaultNumberingSystem = null, $10b9906fb633b71f$var$defaultOutputCalendar = null, $10b9906fb633b71f$var$twoDigitCutoffYear = 60, $10b9906fb633b71f$var$throwOnInvalid, $10b9906fb633b71f$var$defaultWeekSettings = null;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */ var $10b9906fb633b71f$var$Settings = /*#__PURE__*/ function() {
    function Settings() {}
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ Settings.resetCaches = function resetCaches() {
        $10b9906fb633b71f$var$Locale.resetCache();
        $10b9906fb633b71f$var$IANAZone.resetCache();
        $10b9906fb633b71f$var$DateTime.resetCache();
        $10b9906fb633b71f$var$resetDigitRegexCache();
    };
    $10b9906fb633b71f$var$_createClass(Settings, null, [
        {
            key: "now",
            get: /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */ function get() {
                return $10b9906fb633b71f$var$now;
            },
            set: function set(n) {
                $10b9906fb633b71f$var$now = n;
            }
        },
        {
            key: "defaultZone",
            get: /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */ function get() {
                return $10b9906fb633b71f$var$normalizeZone($10b9906fb633b71f$var$defaultZone, $10b9906fb633b71f$var$SystemZone.instance);
            },
            set: function set(zone) {
                $10b9906fb633b71f$var$defaultZone = zone;
            }
        },
        {
            key: "defaultLocale",
            get: function get() {
                return $10b9906fb633b71f$var$defaultLocale;
            },
            set: function set(locale) {
                $10b9906fb633b71f$var$defaultLocale = locale;
            }
        },
        {
            key: "defaultNumberingSystem",
            get: function get() {
                return $10b9906fb633b71f$var$defaultNumberingSystem;
            },
            set: function set(numberingSystem) {
                $10b9906fb633b71f$var$defaultNumberingSystem = numberingSystem;
            }
        },
        {
            key: "defaultOutputCalendar",
            get: function get() {
                return $10b9906fb633b71f$var$defaultOutputCalendar;
            },
            set: function set(outputCalendar) {
                $10b9906fb633b71f$var$defaultOutputCalendar = outputCalendar;
            }
        },
        {
            key: "defaultWeekSettings",
            get: function get() {
                return $10b9906fb633b71f$var$defaultWeekSettings;
            },
            set: function set(weekSettings) {
                $10b9906fb633b71f$var$defaultWeekSettings = $10b9906fb633b71f$var$validateWeekSettings(weekSettings);
            }
        },
        {
            key: "twoDigitCutoffYear",
            get: function get() {
                return $10b9906fb633b71f$var$twoDigitCutoffYear;
            },
            set: function set(cutoffYear) {
                $10b9906fb633b71f$var$twoDigitCutoffYear = cutoffYear % 100;
            }
        },
        {
            key: "throwOnInvalid",
            get: function get() {
                return $10b9906fb633b71f$var$throwOnInvalid;
            },
            set: function set(t) {
                $10b9906fb633b71f$var$throwOnInvalid = t;
            }
        }
    ]);
    return Settings;
}();
var $10b9906fb633b71f$var$Invalid = /*#__PURE__*/ function() {
    function Invalid(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
    }
    var _proto = Invalid.prototype;
    _proto.toMessage = function toMessage() {
        if (this.explanation) return this.reason + ": " + this.explanation;
        else return this.reason;
    };
    return Invalid;
}();
var $10b9906fb633b71f$var$nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], $10b9906fb633b71f$var$leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function $10b9906fb633b71f$var$unitOutOfRange(unit, value) {
    return new $10b9906fb633b71f$var$Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}
function $10b9906fb633b71f$var$dayOfWeek(year, month, day) {
    var d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) d.setUTCFullYear(d.getUTCFullYear() - 1900);
    var js = d.getUTCDay();
    return js === 0 ? 7 : js;
}
function $10b9906fb633b71f$var$computeOrdinal(year, month, day) {
    return day + ($10b9906fb633b71f$var$isLeapYear(year) ? $10b9906fb633b71f$var$leapLadder : $10b9906fb633b71f$var$nonLeapLadder)[month - 1];
}
function $10b9906fb633b71f$var$uncomputeOrdinal(year, ordinal) {
    var table = $10b9906fb633b71f$var$isLeapYear(year) ? $10b9906fb633b71f$var$leapLadder : $10b9906fb633b71f$var$nonLeapLadder, month0 = table.findIndex(function(i) {
        return i < ordinal;
    }), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day: day
    };
}
function $10b9906fb633b71f$var$isoWeekdayToLocal(isoWeekday, startOfWeek) {
    return (isoWeekday - startOfWeek + 7) % 7 + 1;
}
/**
 * @private
 */ function $10b9906fb633b71f$var$gregorianToWeek(gregObj, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = $10b9906fb633b71f$var$computeOrdinal(year, month, day), weekday = $10b9906fb633b71f$var$isoWeekdayToLocal($10b9906fb633b71f$var$dayOfWeek(year, month, day), startOfWeek);
    var weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = $10b9906fb633b71f$var$weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
    } else if (weekNumber > $10b9906fb633b71f$var$weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return $10b9906fb633b71f$var$_extends({
        weekYear: weekYear,
        weekNumber: weekNumber,
        weekday: weekday
    }, $10b9906fb633b71f$var$timeObject(gregObj));
}
function $10b9906fb633b71f$var$weekToGregorian(weekData, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = $10b9906fb633b71f$var$isoWeekdayToLocal($10b9906fb633b71f$var$dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = $10b9906fb633b71f$var$daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += $10b9906fb633b71f$var$daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= $10b9906fb633b71f$var$daysInYear(weekYear);
    } else year = weekYear;
    var _uncomputeOrdinal = $10b9906fb633b71f$var$uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return $10b9906fb633b71f$var$_extends({
        year: year,
        month: month,
        day: day
    }, $10b9906fb633b71f$var$timeObject(weekData));
}
function $10b9906fb633b71f$var$gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day;
    var ordinal = $10b9906fb633b71f$var$computeOrdinal(year, month, day);
    return $10b9906fb633b71f$var$_extends({
        year: year,
        ordinal: ordinal
    }, $10b9906fb633b71f$var$timeObject(gregData));
}
function $10b9906fb633b71f$var$ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal;
    var _uncomputeOrdinal2 = $10b9906fb633b71f$var$uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return $10b9906fb633b71f$var$_extends({
        year: year,
        month: month,
        day: day
    }, $10b9906fb633b71f$var$timeObject(ordinalData));
}
/**
 * Check if local week units like localWeekday are used in obj.
 * If so, validates that they are not mixed with ISO week units and then copies them to the normal week unit properties.
 * Modifies obj in-place!
 * @param obj the object values
 */ function $10b9906fb633b71f$var$usesLocalWeekValues(obj, loc) {
    var hasLocaleWeekData = !$10b9906fb633b71f$var$isUndefined(obj.localWeekday) || !$10b9906fb633b71f$var$isUndefined(obj.localWeekNumber) || !$10b9906fb633b71f$var$isUndefined(obj.localWeekYear);
    if (hasLocaleWeekData) {
        var hasIsoWeekData = !$10b9906fb633b71f$var$isUndefined(obj.weekday) || !$10b9906fb633b71f$var$isUndefined(obj.weekNumber) || !$10b9906fb633b71f$var$isUndefined(obj.weekYear);
        if (hasIsoWeekData) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Cannot mix locale-based week fields with ISO-based week fields");
        if (!$10b9906fb633b71f$var$isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
        if (!$10b9906fb633b71f$var$isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
        if (!$10b9906fb633b71f$var$isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
        delete obj.localWeekday;
        delete obj.localWeekNumber;
        delete obj.localWeekYear;
        return {
            minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
            startOfWeek: loc.getStartOfWeek()
        };
    } else return {
        minDaysInFirstWeek: 4,
        startOfWeek: 1
    };
}
function $10b9906fb633b71f$var$hasInvalidWeekData(obj, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var validYear = $10b9906fb633b71f$var$isInteger(obj.weekYear), validWeek = $10b9906fb633b71f$var$integerBetween(obj.weekNumber, 1, $10b9906fb633b71f$var$weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)), validWeekday = $10b9906fb633b71f$var$integerBetween(obj.weekday, 1, 7);
    if (!validYear) return $10b9906fb633b71f$var$unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return $10b9906fb633b71f$var$unitOutOfRange("week", obj.weekNumber);
    else if (!validWeekday) return $10b9906fb633b71f$var$unitOutOfRange("weekday", obj.weekday);
    else return false;
}
function $10b9906fb633b71f$var$hasInvalidOrdinalData(obj) {
    var validYear = $10b9906fb633b71f$var$isInteger(obj.year), validOrdinal = $10b9906fb633b71f$var$integerBetween(obj.ordinal, 1, $10b9906fb633b71f$var$daysInYear(obj.year));
    if (!validYear) return $10b9906fb633b71f$var$unitOutOfRange("year", obj.year);
    else if (!validOrdinal) return $10b9906fb633b71f$var$unitOutOfRange("ordinal", obj.ordinal);
    else return false;
}
function $10b9906fb633b71f$var$hasInvalidGregorianData(obj) {
    var validYear = $10b9906fb633b71f$var$isInteger(obj.year), validMonth = $10b9906fb633b71f$var$integerBetween(obj.month, 1, 12), validDay = $10b9906fb633b71f$var$integerBetween(obj.day, 1, $10b9906fb633b71f$var$daysInMonth(obj.year, obj.month));
    if (!validYear) return $10b9906fb633b71f$var$unitOutOfRange("year", obj.year);
    else if (!validMonth) return $10b9906fb633b71f$var$unitOutOfRange("month", obj.month);
    else if (!validDay) return $10b9906fb633b71f$var$unitOutOfRange("day", obj.day);
    else return false;
}
function $10b9906fb633b71f$var$hasInvalidTimeData(obj) {
    var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
    var validHour = $10b9906fb633b71f$var$integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = $10b9906fb633b71f$var$integerBetween(minute, 0, 59), validSecond = $10b9906fb633b71f$var$integerBetween(second, 0, 59), validMillisecond = $10b9906fb633b71f$var$integerBetween(millisecond, 0, 999);
    if (!validHour) return $10b9906fb633b71f$var$unitOutOfRange("hour", hour);
    else if (!validMinute) return $10b9906fb633b71f$var$unitOutOfRange("minute", minute);
    else if (!validSecond) return $10b9906fb633b71f$var$unitOutOfRange("second", second);
    else if (!validMillisecond) return $10b9906fb633b71f$var$unitOutOfRange("millisecond", millisecond);
    else return false;
}
/**
 * @private
 */ // TYPES
function $10b9906fb633b71f$var$isUndefined(o) {
    return typeof o === "undefined";
}
function $10b9906fb633b71f$var$isNumber(o) {
    return typeof o === "number";
}
function $10b9906fb633b71f$var$isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function $10b9906fb633b71f$var$isString(o) {
    return typeof o === "string";
}
function $10b9906fb633b71f$var$isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
}
// CAPABILITIES
function $10b9906fb633b71f$var$hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
}
function $10b9906fb633b71f$var$hasLocaleWeekInfo() {
    try {
        return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e) {
        return false;
    }
}
// OBJECTS AND ARRAYS
function $10b9906fb633b71f$var$maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function $10b9906fb633b71f$var$bestBy(arr, by, compare) {
    if (arr.length === 0) return undefined;
    return arr.reduce(function(best, next) {
        var pair = [
            by(next),
            next
        ];
        if (!best) return pair;
        else if (compare(best[0], pair[0]) === best[0]) return best;
        else return pair;
    }, null)[1];
}
function $10b9906fb633b71f$var$pick(obj, keys) {
    return keys.reduce(function(a, k) {
        a[k] = obj[k];
        return a;
    }, {});
}
function $10b9906fb633b71f$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function $10b9906fb633b71f$var$validateWeekSettings(settings) {
    if (settings == null) return null;
    else if (typeof settings !== "object") throw new $10b9906fb633b71f$var$InvalidArgumentError("Week settings must be an object");
    else {
        if (!$10b9906fb633b71f$var$integerBetween(settings.firstDay, 1, 7) || !$10b9906fb633b71f$var$integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some(function(v) {
            return !$10b9906fb633b71f$var$integerBetween(v, 1, 7);
        })) throw new $10b9906fb633b71f$var$InvalidArgumentError("Invalid week settings");
        return {
            firstDay: settings.firstDay,
            minimalDays: settings.minimalDays,
            weekend: Array.from(settings.weekend)
        };
    }
}
// NUMBERS AND STRINGS
function $10b9906fb633b71f$var$integerBetween(thing, bottom, top) {
    return $10b9906fb633b71f$var$isInteger(thing) && thing >= bottom && thing <= top;
}
// x % n but takes the sign of n instead of x
function $10b9906fb633b71f$var$floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function $10b9906fb633b71f$var$padStart(input, n) {
    if (n === void 0) n = 2;
    var isNeg = input < 0;
    var padded;
    if (isNeg) padded = "-" + ("" + -input).padStart(n, "0");
    else padded = ("" + input).padStart(n, "0");
    return padded;
}
function $10b9906fb633b71f$var$parseInteger(string) {
    if ($10b9906fb633b71f$var$isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
}
function $10b9906fb633b71f$var$parseFloating(string) {
    if ($10b9906fb633b71f$var$isUndefined(string) || string === null || string === "") return undefined;
    else return parseFloat(string);
}
function $10b9906fb633b71f$var$parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if ($10b9906fb633b71f$var$isUndefined(fraction) || fraction === null || fraction === "") return undefined;
    else {
        var f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function $10b9906fb633b71f$var$roundTo(number, digits, towardZero) {
    if (towardZero === void 0) towardZero = false;
    var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
}
// DATE BASICS
function $10b9906fb633b71f$var$isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $10b9906fb633b71f$var$daysInYear(year) {
    return $10b9906fb633b71f$var$isLeapYear(year) ? 366 : 365;
}
function $10b9906fb633b71f$var$daysInMonth(year, month) {
    var modMonth = $10b9906fb633b71f$var$floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) return $10b9906fb633b71f$var$isLeapYear(modYear) ? 29 : 28;
    else return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][modMonth - 1];
}
// convert a calendar object to a local timestamp (epoch, but with the offset baked in)
function $10b9906fb633b71f$var$objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
    // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
        // so if obj.year is in 99, but obj.day makes it roll over into year 100,
        // the calculations done by Date.UTC are using year 2000 - which is incorrect
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d;
}
// adapted from moment.js: https://github.com/moment/moment/blob/000ac1800e620f770f4eb31b5ae908f6167b0ab2/src/lib/units/week-calendar-utils.js
function $10b9906fb633b71f$var$firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
    var fwdlw = $10b9906fb633b71f$var$isoWeekdayToLocal($10b9906fb633b71f$var$dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
    return -fwdlw + minDaysInFirstWeek - 1;
}
function $10b9906fb633b71f$var$weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var weekOffset = $10b9906fb633b71f$var$firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
    var weekOffsetNext = $10b9906fb633b71f$var$firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
    return ($10b9906fb633b71f$var$daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
}
function $10b9906fb633b71f$var$untruncateYear(year) {
    if (year > 99) return year;
    else return year > $10b9906fb633b71f$var$Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
}
// PARSING
function $10b9906fb633b71f$var$parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) timeZone = null;
    var date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    var modified = $10b9906fb633b71f$var$_extends({
        timeZoneName: offsetFormat
    }, intlOpts);
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
        return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
}
// signedOffset('-5', '30') -> -330
function $10b9906fb633b71f$var$signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10);
    // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
}
// COERCION
function $10b9906fb633b71f$var$asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new $10b9906fb633b71f$var$InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
}
function $10b9906fb633b71f$var$normalizeObject(obj, normalizer) {
    var normalized = {};
    for(var u in obj)if ($10b9906fb633b71f$var$hasOwnProperty(obj, u)) {
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = $10b9906fb633b71f$var$asNumber(v);
    }
    return normalized;
}
/**
 * Returns the offset's value as a string
 * @param {number} ts - Epoch milliseconds for which to get the offset
 * @param {string} format - What style of offset to return.
 *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
 * @return {string}
 */ function $10b9906fb633b71f$var$formatOffset(offset, format) {
    var hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return "" + sign + $10b9906fb633b71f$var$padStart(hours, 2) + ":" + $10b9906fb633b71f$var$padStart(minutes, 2);
        case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
        case "techie":
            return "" + sign + $10b9906fb633b71f$var$padStart(hours, 2) + $10b9906fb633b71f$var$padStart(minutes, 2);
        default:
            throw new RangeError("Value format " + format + " is out of range for property format");
    }
}
function $10b9906fb633b71f$var$timeObject(obj) {
    return $10b9906fb633b71f$var$pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
/**
 * @private
 */ var $10b9906fb633b71f$var$monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var $10b9906fb633b71f$var$monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
var $10b9906fb633b71f$var$monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function $10b9906fb633b71f$var$months(length) {
    switch(length){
        case "narrow":
            return [].concat($10b9906fb633b71f$var$monthsNarrow);
        case "short":
            return [].concat($10b9906fb633b71f$var$monthsShort);
        case "long":
            return [].concat($10b9906fb633b71f$var$monthsLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
var $10b9906fb633b71f$var$weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
var $10b9906fb633b71f$var$weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
var $10b9906fb633b71f$var$weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function $10b9906fb633b71f$var$weekdays(length) {
    switch(length){
        case "narrow":
            return [].concat($10b9906fb633b71f$var$weekdaysNarrow);
        case "short":
            return [].concat($10b9906fb633b71f$var$weekdaysShort);
        case "long":
            return [].concat($10b9906fb633b71f$var$weekdaysLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
var $10b9906fb633b71f$var$meridiems = [
    "AM",
    "PM"
];
var $10b9906fb633b71f$var$erasLong = [
    "Before Christ",
    "Anno Domini"
];
var $10b9906fb633b71f$var$erasShort = [
    "BC",
    "AD"
];
var $10b9906fb633b71f$var$erasNarrow = [
    "B",
    "A"
];
function $10b9906fb633b71f$var$eras(length) {
    switch(length){
        case "narrow":
            return [].concat($10b9906fb633b71f$var$erasNarrow);
        case "short":
            return [].concat($10b9906fb633b71f$var$erasShort);
        case "long":
            return [].concat($10b9906fb633b71f$var$erasLong);
        default:
            return null;
    }
}
function $10b9906fb633b71f$var$meridiemForDateTime(dt) {
    return $10b9906fb633b71f$var$meridiems[dt.hour < 12 ? 0 : 1];
}
function $10b9906fb633b71f$var$weekdayForDateTime(dt, length) {
    return $10b9906fb633b71f$var$weekdays(length)[dt.weekday - 1];
}
function $10b9906fb633b71f$var$monthForDateTime(dt, length) {
    return $10b9906fb633b71f$var$months(length)[dt.month - 1];
}
function $10b9906fb633b71f$var$eraForDateTime(dt, length) {
    return $10b9906fb633b71f$var$eras(length)[dt.year < 0 ? 0 : 1];
}
function $10b9906fb633b71f$var$formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) numeric = "always";
    if (narrow === void 0) narrow = false;
    var units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    var lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        var isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
                return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
                return isDay ? "today" : "this " + units[unit][0];
        }
    }
    var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function $10b9906fb633b71f$var$stringifyTokens(splits, tokenToString) {
    var s = "";
    for(var _iterator = $10b9906fb633b71f$var$_createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;){
        var token = _step.value;
        if (token.literal) s += token.val;
        else s += tokenToString(token.val);
    }
    return s;
}
var $10b9906fb633b71f$var$_macroTokenToFormatOpts = {
    D: $10b9906fb633b71f$var$DATE_SHORT,
    DD: $10b9906fb633b71f$var$DATE_MED,
    DDD: $10b9906fb633b71f$var$DATE_FULL,
    DDDD: $10b9906fb633b71f$var$DATE_HUGE,
    t: $10b9906fb633b71f$var$TIME_SIMPLE,
    tt: $10b9906fb633b71f$var$TIME_WITH_SECONDS,
    ttt: $10b9906fb633b71f$var$TIME_WITH_SHORT_OFFSET,
    tttt: $10b9906fb633b71f$var$TIME_WITH_LONG_OFFSET,
    T: $10b9906fb633b71f$var$TIME_24_SIMPLE,
    TT: $10b9906fb633b71f$var$TIME_24_WITH_SECONDS,
    TTT: $10b9906fb633b71f$var$TIME_24_WITH_SHORT_OFFSET,
    TTTT: $10b9906fb633b71f$var$TIME_24_WITH_LONG_OFFSET,
    f: $10b9906fb633b71f$var$DATETIME_SHORT,
    ff: $10b9906fb633b71f$var$DATETIME_MED,
    fff: $10b9906fb633b71f$var$DATETIME_FULL,
    ffff: $10b9906fb633b71f$var$DATETIME_HUGE,
    F: $10b9906fb633b71f$var$DATETIME_SHORT_WITH_SECONDS,
    FF: $10b9906fb633b71f$var$DATETIME_MED_WITH_SECONDS,
    FFF: $10b9906fb633b71f$var$DATETIME_FULL_WITH_SECONDS,
    FFFF: $10b9906fb633b71f$var$DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */ var $10b9906fb633b71f$var$Formatter = /*#__PURE__*/ function() {
    Formatter.create = function create(locale, opts) {
        if (opts === void 0) opts = {};
        return new Formatter(locale, opts);
    };
    Formatter.parseFormat = function parseFormat(fmt) {
        // white-space is always considered a literal in user-provided formats
        // the " " token has a special meaning (see unitForToken)
        var current = null, currentFull = "", bracketed = false;
        var splits = [];
        for(var i = 0; i < fmt.length; i++){
            var c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed || /^\s+$/.test(currentFull),
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: /^\s+$/.test(currentFull),
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed || /^\s+$/.test(currentFull),
            val: currentFull
        });
        return splits;
    };
    Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
        return $10b9906fb633b71f$var$_macroTokenToFormatOpts[token];
    };
    function Formatter(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    var _proto = Formatter.prototype;
    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) this.systemLoc = this.loc.redefaultToSystem();
        var df = this.systemLoc.dtFormatter(dt, $10b9906fb633b71f$var$_extends({}, this.opts, opts));
        return df.format();
    };
    _proto.dtFormatter = function dtFormatter(dt, opts) {
        if (opts === void 0) opts = {};
        return this.loc.dtFormatter(dt, $10b9906fb633b71f$var$_extends({}, this.opts, opts));
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
    };
    _proto.formatInterval = function formatInterval(interval, opts) {
        var df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
    };
    _proto.num = function num(n, p) {
        if (p === void 0) p = 0;
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return $10b9906fb633b71f$var$padStart(n, p);
        var opts = $10b9906fb633b71f$var$_extends({}, this.opts);
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
        var _this = this;
        var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
        }, formatOffset = function formatOffset(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = function meridiem() {
            return knownEnglish ? $10b9906fb633b71f$var$meridiemForDateTime(dt) : string({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod");
        }, month = function month(length, standalone) {
            return knownEnglish ? $10b9906fb633b71f$var$monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month");
        }, weekday = function weekday(length, standalone) {
            return knownEnglish ? $10b9906fb633b71f$var$weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday");
        }, maybeMacro = function maybeMacro(token) {
            var formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) return _this.formatWithSystemDefault(dt, formatOpts);
            else return token;
        }, era = function era(length) {
            return knownEnglish ? $10b9906fb633b71f$var$eraForDateTime(dt, length) : string({
                era: length
            }, "era");
        }, tokenToString = function tokenToString(token) {
            // Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
            switch(token){
                // ms
                case "S":
                    return _this.num(dt.millisecond);
                case "u":
                // falls through
                case "SSS":
                    return _this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return _this.num(dt.second);
                case "ss":
                    return _this.num(dt.second, 2);
                // fractional seconds
                case "uu":
                    return _this.num(Math.floor(dt.millisecond / 10), 2);
                case "uuu":
                    return _this.num(Math.floor(dt.millisecond / 100));
                // minutes
                case "m":
                    return _this.num(dt.minute);
                case "mm":
                    return _this.num(dt.minute, 2);
                // hours
                case "h":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return _this.num(dt.hour);
                case "HH":
                    return _this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset({
                        format: "narrow",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset({
                        format: "short",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset({
                        format: "techie",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: _this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: _this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : _this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : _this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return _this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return _this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : _this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : _this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : _this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : _this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : _this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return _this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return _this.num(dt.weekYear, 4);
                case "W":
                    return _this.num(dt.weekNumber);
                case "WW":
                    return _this.num(dt.weekNumber, 2);
                case "n":
                    return _this.num(dt.localWeekNumber);
                case "nn":
                    return _this.num(dt.localWeekNumber, 2);
                case "ii":
                    return _this.num(dt.localWeekYear.toString().slice(-2), 2);
                case "iiii":
                    return _this.num(dt.localWeekYear, 4);
                case "o":
                    return _this.num(dt.ordinal);
                case "ooo":
                    return _this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return _this.num(dt.quarter);
                case "qq":
                    // like 01
                    return _this.num(dt.quarter, 2);
                case "X":
                    return _this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return _this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return $10b9906fb633b71f$var$stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    };
    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
        var _this2 = this;
        var tokenToField = function tokenToField(token) {
            switch(token[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "w":
                    return "week";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        }, tokenToString = function tokenToString(lildur) {
            return function(token) {
                var mapped = tokenToField(token);
                if (mapped) return _this2.num(lildur.get(mapped), token.length);
                else return token;
            };
        }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
        }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
        }));
        return $10b9906fb633b71f$var$stringifyTokens(tokens, tokenToString(collapsed));
    };
    return Formatter;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ var $10b9906fb633b71f$var$ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function $10b9906fb633b71f$var$combineRegexes() {
    for(var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++)regexes[_key] = arguments[_key];
    var full = regexes.reduce(function(f, r) {
        return f + r.source;
    }, "");
    return RegExp("^" + full + "$");
}
function $10b9906fb633b71f$var$combineExtractors() {
    for(var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)extractors[_key2] = arguments[_key2];
    return function(m) {
        return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [
                $10b9906fb633b71f$var$_extends({}, mergedVals, val),
                zone || mergedZone,
                next
            ];
        }, [
            {},
            null,
            1
        ]).slice(0, 2);
    };
}
function $10b9906fb633b71f$var$parse(s) {
    if (s == null) return [
        null,
        null
    ];
    for(var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)patterns[_key3 - 1] = arguments[_key3];
    for(var _i = 0, _patterns = patterns; _i < _patterns.length; _i++){
        var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
        var m = regex.exec(s);
        if (m) return extractor(m);
    }
    return [
        null,
        null
    ];
}
function $10b9906fb633b71f$var$simpleParse() {
    for(var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)keys[_key4] = arguments[_key4];
    return function(match, cursor) {
        var ret = {};
        var i;
        for(i = 0; i < keys.length; i++)ret[keys[i]] = $10b9906fb633b71f$var$parseInteger(match[cursor + i]);
        return [
            ret,
            null,
            cursor + i
        ];
    };
}
// ISO and SQL parsing
var $10b9906fb633b71f$var$offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var $10b9906fb633b71f$var$isoExtendedZone = "(?:" + $10b9906fb633b71f$var$offsetRegex.source + "?(?:\\[(" + $10b9906fb633b71f$var$ianaRegex.source + ")\\])?)?";
var $10b9906fb633b71f$var$isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var $10b9906fb633b71f$var$isoTimeRegex = RegExp("" + $10b9906fb633b71f$var$isoTimeBaseRegex.source + $10b9906fb633b71f$var$isoExtendedZone);
var $10b9906fb633b71f$var$isoTimeExtensionRegex = RegExp("(?:T" + $10b9906fb633b71f$var$isoTimeRegex.source + ")?");
var $10b9906fb633b71f$var$isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var $10b9906fb633b71f$var$isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var $10b9906fb633b71f$var$isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var $10b9906fb633b71f$var$extractISOWeekData = $10b9906fb633b71f$var$simpleParse("weekYear", "weekNumber", "weekDay");
var $10b9906fb633b71f$var$extractISOOrdinalData = $10b9906fb633b71f$var$simpleParse("year", "ordinal");
var $10b9906fb633b71f$var$sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
var $10b9906fb633b71f$var$sqlTimeRegex = RegExp($10b9906fb633b71f$var$isoTimeBaseRegex.source + " ?(?:" + $10b9906fb633b71f$var$offsetRegex.source + "|(" + $10b9906fb633b71f$var$ianaRegex.source + "))?");
var $10b9906fb633b71f$var$sqlTimeExtensionRegex = RegExp("(?: " + $10b9906fb633b71f$var$sqlTimeRegex.source + ")?");
function $10b9906fb633b71f$var$int(match, pos, fallback) {
    var m = match[pos];
    return $10b9906fb633b71f$var$isUndefined(m) ? fallback : $10b9906fb633b71f$var$parseInteger(m);
}
function $10b9906fb633b71f$var$extractISOYmd(match, cursor) {
    var item = {
        year: $10b9906fb633b71f$var$int(match, cursor),
        month: $10b9906fb633b71f$var$int(match, cursor + 1, 1),
        day: $10b9906fb633b71f$var$int(match, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function $10b9906fb633b71f$var$extractISOTime(match, cursor) {
    var item = {
        hours: $10b9906fb633b71f$var$int(match, cursor, 0),
        minutes: $10b9906fb633b71f$var$int(match, cursor + 1, 0),
        seconds: $10b9906fb633b71f$var$int(match, cursor + 2, 0),
        milliseconds: $10b9906fb633b71f$var$parseMillis(match[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function $10b9906fb633b71f$var$extractISOOffset(match, cursor) {
    var local = !match[cursor] && !match[cursor + 1], fullOffset = $10b9906fb633b71f$var$signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : $10b9906fb633b71f$var$FixedOffsetZone.instance(fullOffset);
    return [
        {},
        zone,
        cursor + 3
    ];
}
function $10b9906fb633b71f$var$extractIANAZone(match, cursor) {
    var zone = match[cursor] ? $10b9906fb633b71f$var$IANAZone.create(match[cursor]) : null;
    return [
        {},
        zone,
        cursor + 1
    ];
}
// ISO time parsing
var $10b9906fb633b71f$var$isoTimeOnly = RegExp("^T?" + $10b9906fb633b71f$var$isoTimeBaseRegex.source + "$");
// ISO duration parsing
var $10b9906fb633b71f$var$isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function $10b9906fb633b71f$var$extractISODuration(match) {
    var s = match[0], yearStr = match[1], monthStr = match[2], weekStr = match[3], dayStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], millisecondsStr = match[8];
    var hasNegativePrefix = s[0] === "-";
    var negativeSeconds = secondStr && secondStr[0] === "-";
    var maybeNegate = function maybeNegate(num, force) {
        if (force === void 0) force = false;
        return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    };
    return [
        {
            years: maybeNegate($10b9906fb633b71f$var$parseFloating(yearStr)),
            months: maybeNegate($10b9906fb633b71f$var$parseFloating(monthStr)),
            weeks: maybeNegate($10b9906fb633b71f$var$parseFloating(weekStr)),
            days: maybeNegate($10b9906fb633b71f$var$parseFloating(dayStr)),
            hours: maybeNegate($10b9906fb633b71f$var$parseFloating(hourStr)),
            minutes: maybeNegate($10b9906fb633b71f$var$parseFloating(minuteStr)),
            seconds: maybeNegate($10b9906fb633b71f$var$parseFloating(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate($10b9906fb633b71f$var$parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
}
// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var $10b9906fb633b71f$var$obsOffsets = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function $10b9906fb633b71f$var$fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
        year: yearStr.length === 2 ? $10b9906fb633b71f$var$untruncateYear($10b9906fb633b71f$var$parseInteger(yearStr)) : $10b9906fb633b71f$var$parseInteger(yearStr),
        month: $10b9906fb633b71f$var$monthsShort.indexOf(monthStr) + 1,
        day: $10b9906fb633b71f$var$parseInteger(dayStr),
        hour: $10b9906fb633b71f$var$parseInteger(hourStr),
        minute: $10b9906fb633b71f$var$parseInteger(minuteStr)
    };
    if (secondStr) result.second = $10b9906fb633b71f$var$parseInteger(secondStr);
    if (weekdayStr) result.weekday = weekdayStr.length > 3 ? $10b9906fb633b71f$var$weekdaysLong.indexOf(weekdayStr) + 1 : $10b9906fb633b71f$var$weekdaysShort.indexOf(weekdayStr) + 1;
    return result;
}
// RFC 2822/5322
var $10b9906fb633b71f$var$rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function $10b9906fb633b71f$var$extractRFC2822(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], obsOffset = match[8], milOffset = match[9], offHourStr = match[10], offMinuteStr = match[11], result = $10b9906fb633b71f$var$fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset;
    if (obsOffset) offset = $10b9906fb633b71f$var$obsOffsets[obsOffset];
    else if (milOffset) offset = 0;
    else offset = $10b9906fb633b71f$var$signedOffset(offHourStr, offMinuteStr);
    return [
        result,
        new $10b9906fb633b71f$var$FixedOffsetZone(offset)
    ];
}
function $10b9906fb633b71f$var$preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
// http date
var $10b9906fb633b71f$var$rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, $10b9906fb633b71f$var$rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, $10b9906fb633b71f$var$ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function $10b9906fb633b71f$var$extractRFC1123Or850(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], result = $10b9906fb633b71f$var$fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        $10b9906fb633b71f$var$FixedOffsetZone.utcInstance
    ];
}
function $10b9906fb633b71f$var$extractASCII(match) {
    var weekdayStr = match[1], monthStr = match[2], dayStr = match[3], hourStr = match[4], minuteStr = match[5], secondStr = match[6], yearStr = match[7], result = $10b9906fb633b71f$var$fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        $10b9906fb633b71f$var$FixedOffsetZone.utcInstance
    ];
}
var $10b9906fb633b71f$var$isoYmdWithTimeExtensionRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$isoYmdRegex, $10b9906fb633b71f$var$isoTimeExtensionRegex);
var $10b9906fb633b71f$var$isoWeekWithTimeExtensionRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$isoWeekRegex, $10b9906fb633b71f$var$isoTimeExtensionRegex);
var $10b9906fb633b71f$var$isoOrdinalWithTimeExtensionRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$isoOrdinalRegex, $10b9906fb633b71f$var$isoTimeExtensionRegex);
var $10b9906fb633b71f$var$isoTimeCombinedRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$isoTimeRegex);
var $10b9906fb633b71f$var$extractISOYmdTimeAndOffset = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOYmd, $10b9906fb633b71f$var$extractISOTime, $10b9906fb633b71f$var$extractISOOffset, $10b9906fb633b71f$var$extractIANAZone);
var $10b9906fb633b71f$var$extractISOWeekTimeAndOffset = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOWeekData, $10b9906fb633b71f$var$extractISOTime, $10b9906fb633b71f$var$extractISOOffset, $10b9906fb633b71f$var$extractIANAZone);
var $10b9906fb633b71f$var$extractISOOrdinalDateAndTime = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOOrdinalData, $10b9906fb633b71f$var$extractISOTime, $10b9906fb633b71f$var$extractISOOffset, $10b9906fb633b71f$var$extractIANAZone);
var $10b9906fb633b71f$var$extractISOTimeAndOffset = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOTime, $10b9906fb633b71f$var$extractISOOffset, $10b9906fb633b71f$var$extractIANAZone);
/*
 * @private
 */ function $10b9906fb633b71f$var$parseISODate(s) {
    return $10b9906fb633b71f$var$parse(s, [
        $10b9906fb633b71f$var$isoYmdWithTimeExtensionRegex,
        $10b9906fb633b71f$var$extractISOYmdTimeAndOffset
    ], [
        $10b9906fb633b71f$var$isoWeekWithTimeExtensionRegex,
        $10b9906fb633b71f$var$extractISOWeekTimeAndOffset
    ], [
        $10b9906fb633b71f$var$isoOrdinalWithTimeExtensionRegex,
        $10b9906fb633b71f$var$extractISOOrdinalDateAndTime
    ], [
        $10b9906fb633b71f$var$isoTimeCombinedRegex,
        $10b9906fb633b71f$var$extractISOTimeAndOffset
    ]);
}
function $10b9906fb633b71f$var$parseRFC2822Date(s) {
    return $10b9906fb633b71f$var$parse($10b9906fb633b71f$var$preprocessRFC2822(s), [
        $10b9906fb633b71f$var$rfc2822,
        $10b9906fb633b71f$var$extractRFC2822
    ]);
}
function $10b9906fb633b71f$var$parseHTTPDate(s) {
    return $10b9906fb633b71f$var$parse(s, [
        $10b9906fb633b71f$var$rfc1123,
        $10b9906fb633b71f$var$extractRFC1123Or850
    ], [
        $10b9906fb633b71f$var$rfc850,
        $10b9906fb633b71f$var$extractRFC1123Or850
    ], [
        $10b9906fb633b71f$var$ascii,
        $10b9906fb633b71f$var$extractASCII
    ]);
}
function $10b9906fb633b71f$var$parseISODuration(s) {
    return $10b9906fb633b71f$var$parse(s, [
        $10b9906fb633b71f$var$isoDuration,
        $10b9906fb633b71f$var$extractISODuration
    ]);
}
var $10b9906fb633b71f$var$extractISOTimeOnly = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOTime);
function $10b9906fb633b71f$var$parseISOTimeOnly(s) {
    return $10b9906fb633b71f$var$parse(s, [
        $10b9906fb633b71f$var$isoTimeOnly,
        $10b9906fb633b71f$var$extractISOTimeOnly
    ]);
}
var $10b9906fb633b71f$var$sqlYmdWithTimeExtensionRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$sqlYmdRegex, $10b9906fb633b71f$var$sqlTimeExtensionRegex);
var $10b9906fb633b71f$var$sqlTimeCombinedRegex = $10b9906fb633b71f$var$combineRegexes($10b9906fb633b71f$var$sqlTimeRegex);
var $10b9906fb633b71f$var$extractISOTimeOffsetAndIANAZone = $10b9906fb633b71f$var$combineExtractors($10b9906fb633b71f$var$extractISOTime, $10b9906fb633b71f$var$extractISOOffset, $10b9906fb633b71f$var$extractIANAZone);
function $10b9906fb633b71f$var$parseSQL(s) {
    return $10b9906fb633b71f$var$parse(s, [
        $10b9906fb633b71f$var$sqlYmdWithTimeExtensionRegex,
        $10b9906fb633b71f$var$extractISOYmdTimeAndOffset
    ], [
        $10b9906fb633b71f$var$sqlTimeCombinedRegex,
        $10b9906fb633b71f$var$extractISOTimeOffsetAndIANAZone
    ]);
}
var $10b9906fb633b71f$var$INVALID$2 = "Invalid Duration";
// unit conversion constants
var $10b9906fb633b71f$var$lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
}, $10b9906fb633b71f$var$casualMatrix = $10b9906fb633b71f$var$_extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    }
}, $10b9906fb633b71f$var$lowOrderMatrix), $10b9906fb633b71f$var$daysInYearAccurate = 365.2425, $10b9906fb633b71f$var$daysInMonthAccurate = 30.436875, $10b9906fb633b71f$var$accurateMatrix = $10b9906fb633b71f$var$_extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: $10b9906fb633b71f$var$daysInYearAccurate / 7,
        days: $10b9906fb633b71f$var$daysInYearAccurate,
        hours: $10b9906fb633b71f$var$daysInYearAccurate * 24,
        minutes: $10b9906fb633b71f$var$daysInYearAccurate * 1440,
        seconds: $10b9906fb633b71f$var$daysInYearAccurate * 86400,
        milliseconds: $10b9906fb633b71f$var$daysInYearAccurate * 86400000
    },
    quarters: {
        months: 3,
        weeks: $10b9906fb633b71f$var$daysInYearAccurate / 28,
        days: $10b9906fb633b71f$var$daysInYearAccurate / 4,
        hours: $10b9906fb633b71f$var$daysInYearAccurate * 24 / 4,
        minutes: $10b9906fb633b71f$var$daysInYearAccurate * 1440 / 4,
        seconds: $10b9906fb633b71f$var$daysInYearAccurate * 86400 / 4,
        milliseconds: $10b9906fb633b71f$var$daysInYearAccurate * 86400000 / 4
    },
    months: {
        weeks: $10b9906fb633b71f$var$daysInMonthAccurate / 7,
        days: $10b9906fb633b71f$var$daysInMonthAccurate,
        hours: $10b9906fb633b71f$var$daysInMonthAccurate * 24,
        minutes: $10b9906fb633b71f$var$daysInMonthAccurate * 1440,
        seconds: $10b9906fb633b71f$var$daysInMonthAccurate * 86400,
        milliseconds: $10b9906fb633b71f$var$daysInMonthAccurate * 86400000
    }
}, $10b9906fb633b71f$var$lowOrderMatrix);
// units ordered by size
var $10b9906fb633b71f$var$orderedUnits$1 = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
var $10b9906fb633b71f$var$reverseUnits = $10b9906fb633b71f$var$orderedUnits$1.slice(0).reverse();
// clone really means "create another instance just like this one, but with these changes"
function $10b9906fb633b71f$var$clone$1(dur, alts, clear) {
    if (clear === void 0) clear = false;
    // deep merge for vals
    var conf = {
        values: clear ? alts.values : $10b9906fb633b71f$var$_extends({}, dur.values, alts.values || {}),
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
    };
    return new $10b9906fb633b71f$var$Duration(conf);
}
function $10b9906fb633b71f$var$durationToMillis(matrix, vals) {
    var _vals$milliseconds;
    var sum = (_vals$milliseconds = vals.milliseconds) != null ? _vals$milliseconds : 0;
    for(var _iterator = $10b9906fb633b71f$var$_createForOfIteratorHelperLoose($10b9906fb633b71f$var$reverseUnits.slice(1)), _step; !(_step = _iterator()).done;){
        var unit = _step.value;
        if (vals[unit]) sum += vals[unit] * matrix[unit]["milliseconds"];
    }
    return sum;
}
// NB: mutates parameters
function $10b9906fb633b71f$var$normalizeValues(matrix, vals) {
    // the logic below assumes the overall value of the duration is positive
    // if this is not the case, factor is used to make it so
    var factor = $10b9906fb633b71f$var$durationToMillis(matrix, vals) < 0 ? -1 : 1;
    $10b9906fb633b71f$var$orderedUnits$1.reduceRight(function(previous, current) {
        if (!$10b9906fb633b71f$var$isUndefined(vals[current])) {
            if (previous) {
                var previousVal = vals[previous] * factor;
                var conv = matrix[current][previous];
                // if (previousVal < 0):
                // lower order unit is negative (e.g. { years: 2, days: -2 })
                // normalize this by reducing the higher order unit by the appropriate amount
                // and increasing the lower order unit
                // this can never make the higher order unit negative, because this function only operates
                // on positive durations, so the amount of time represented by the lower order unit cannot
                // be larger than the higher order unit
                // else:
                // lower order unit is positive (e.g. { years: 2, days: 450 } or { years: -2, days: 450 })
                // in this case we attempt to convert as much as possible from the lower order unit into
                // the higher order one
                //
                // Math.floor takes care of both of these cases, rounding away from 0
                // if previousVal < 0 it makes the absolute value larger
                // if previousVal >= it makes the absolute value smaller
                var rollUp = Math.floor(previousVal / conv);
                vals[current] += rollUp * factor;
                vals[previous] -= rollUp * conv * factor;
            }
            return current;
        } else return previous;
    }, null);
    // try to convert any decimals into smaller units if possible
    // for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
    $10b9906fb633b71f$var$orderedUnits$1.reduce(function(previous, current) {
        if (!$10b9906fb633b71f$var$isUndefined(vals[current])) {
            if (previous) {
                var fraction = vals[previous] % 1;
                vals[previous] -= fraction;
                vals[current] += fraction * matrix[previous][current];
            }
            return current;
        } else return previous;
    }, null);
}
// Remove all properties with a value of 0 from an object
function $10b9906fb633b71f$var$removeZeroes(vals) {
    var newVals = {};
    for(var _i = 0, _Object$entries = Object.entries(vals); _i < _Object$entries.length; _i++){
        var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], value = _Object$entries$_i[1];
        if (value !== 0) newVals[key] = value;
    }
    return newVals;
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ var $10b9906fb633b71f$var$Duration = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @private
   */ function Duration(config) {
        var accurate = config.conversionAccuracy === "longterm" || false;
        var matrix = accurate ? $10b9906fb633b71f$var$accurateMatrix : $10b9906fb633b71f$var$casualMatrix;
        if (config.matrix) matrix = config.matrix;
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || $10b9906fb633b71f$var$Locale.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = matrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ Duration.fromMillis = function fromMillis(count, opts) {
        return Duration.fromObject({
            milliseconds: count
        }, opts);
    } /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */ ;
    Duration.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        if (obj == null || typeof obj !== "object") throw new $10b9906fb633b71f$var$InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
        return new Duration({
            values: $10b9906fb633b71f$var$normalizeObject(obj, Duration.normalizeUnit),
            loc: $10b9906fb633b71f$var$Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy,
            matrix: opts.matrix
        });
    } /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */ ;
    Duration.fromDurationLike = function fromDurationLike(durationLike) {
        if ($10b9906fb633b71f$var$isNumber(durationLike)) return Duration.fromMillis(durationLike);
        else if (Duration.isDuration(durationLike)) return durationLike;
        else if (typeof durationLike === "object") return Duration.fromObject(durationLike);
        else throw new $10b9906fb633b71f$var$InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
    } /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ ;
    Duration.fromISO = function fromISO(text, opts) {
        var _parseISODuration = $10b9906fb633b71f$var$parseISODuration(text), parsed = _parseISODuration[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */ ;
    Duration.fromISOTime = function fromISOTime(text, opts) {
        var _parseISOTimeOnly = $10b9906fb633b71f$var$parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */ ;
    Duration.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new $10b9906fb633b71f$var$InvalidArgumentError("need to specify a reason the Duration is invalid");
        var invalid = reason instanceof $10b9906fb633b71f$var$Invalid ? reason : new $10b9906fb633b71f$var$Invalid(reason, explanation);
        if ($10b9906fb633b71f$var$Settings.throwOnInvalid) throw new $10b9906fb633b71f$var$InvalidDurationError(invalid);
        else return new Duration({
            invalid: invalid
        });
    } /**
   * @private
   */ ;
    Duration.normalizeUnit = function normalizeUnit(unit) {
        var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new $10b9906fb633b71f$var$InvalidUnitError(unit);
        return normalized;
    } /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Duration.isDuration = function isDuration(o) {
        return o && o.isLuxonDuration || false;
    } /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */ ;
    var _proto = Duration.prototype;
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */ _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        var fmtOpts = $10b9906fb633b71f$var$_extends({}, opts, {
            floor: opts.round !== false && opts.floor !== false
        });
        return this.isValid ? $10b9906fb633b71f$var$Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : $10b9906fb633b71f$var$INVALID$2;
    } /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */ ;
    _proto.toHuman = function toHuman(opts) {
        var _this = this;
        if (opts === void 0) opts = {};
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$2;
        var l = $10b9906fb633b71f$var$orderedUnits$1.map(function(unit) {
            var val = _this.values[unit];
            if ($10b9906fb633b71f$var$isUndefined(val)) return null;
            return _this.loc.numberFormatter($10b9906fb633b71f$var$_extends({
                style: "unit",
                unitDisplay: "long"
            }, opts, {
                unit: unit.slice(0, -1)
            })).format(val);
        }).filter(function(n) {
            return n;
        });
        return this.loc.listFormatter($10b9906fb633b71f$var$_extends({
            type: "conjunction",
            style: opts.listStyle || "narrow"
        }, opts)).format(l);
    } /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject() {
        if (!this.isValid) return {};
        return $10b9906fb633b71f$var$_extends({}, this.values);
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */ ;
    _proto.toISO = function toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        var s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += $10b9906fb633b71f$var$roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        var millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = $10b9906fb633b71f$var$_extends({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
        }, opts, {
            includeOffset: false
        });
        var dateTime = $10b9906fb633b71f$var$DateTime.fromMillis(millis, {
            zone: "UTC"
        });
        return dateTime.toISOTime(opts);
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.toISO();
    } /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "Duration { values: " + JSON.stringify(this.values) + " }";
        else return "Duration { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        if (!this.isValid) return NaN;
        return $10b9906fb633b71f$var$durationToMillis(this.matrix, this.values);
    } /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration), result = {};
        for(var _i2 = 0, _orderedUnits = $10b9906fb633b71f$var$orderedUnits$1; _i2 < _orderedUnits.length; _i2++){
            var k = _orderedUnits[_i2];
            if ($10b9906fb633b71f$var$hasOwnProperty(dur.values, k) || $10b9906fb633b71f$var$hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        }
        return $10b9906fb633b71f$var$clone$1(this, {
            values: result
        }, true);
    } /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
    } /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ ;
    _proto.mapUnits = function mapUnits(fn) {
        if (!this.isValid) return this;
        var result = {};
        for(var _i3 = 0, _Object$keys = Object.keys(this.values); _i3 < _Object$keys.length; _i3++){
            var k = _Object$keys[_i3];
            result[k] = $10b9906fb633b71f$var$asNumber(fn(this.values[k], k));
        }
        return $10b9906fb633b71f$var$clone$1(this, {
            values: result
        }, true);
    } /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */ ;
    _proto.get = function get(unit) {
        return this[Duration.normalizeUnit(unit)];
    } /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var mixed = $10b9906fb633b71f$var$_extends({}, this.values, $10b9906fb633b71f$var$normalizeObject(values, Duration.normalizeUnit));
        return $10b9906fb633b71f$var$clone$1(this, {
            values: mixed
        });
    } /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ ;
    _proto.reconfigure = function reconfigure(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy, matrix = _ref.matrix;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem
        });
        var opts = {
            loc: loc,
            matrix: matrix,
            conversionAccuracy: conversionAccuracy
        };
        return $10b9906fb633b71f$var$clone$1(this, opts);
    } /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */ ;
    _proto.as = function as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    } /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */ ;
    _proto.normalize = function normalize() {
        if (!this.isValid) return this;
        var vals = this.toObject();
        $10b9906fb633b71f$var$normalizeValues(this.matrix, vals);
        return $10b9906fb633b71f$var$clone$1(this, {
            values: vals
        }, true);
    } /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */ ;
    _proto.rescale = function rescale() {
        if (!this.isValid) return this;
        var vals = $10b9906fb633b71f$var$removeZeroes(this.normalize().shiftToAll().toObject());
        return $10b9906fb633b71f$var$clone$1(this, {
            values: vals
        }, true);
    } /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */ ;
    _proto.shiftTo = function shiftTo() {
        for(var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++)units[_key] = arguments[_key];
        if (!this.isValid) return this;
        if (units.length === 0) return this;
        units = units.map(function(u) {
            return Duration.normalizeUnit(u);
        });
        var built = {}, accumulated = {}, vals = this.toObject();
        var lastUnit;
        for(var _i4 = 0, _orderedUnits2 = $10b9906fb633b71f$var$orderedUnits$1; _i4 < _orderedUnits2.length; _i4++){
            var k = _orderedUnits2[_i4];
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                var own = 0;
                // anything we haven't boiled down yet should get boiled to this unit
                for(var ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                }
                // plus anything that's already in this unit
                if ($10b9906fb633b71f$var$isNumber(vals[k])) own += vals[k];
                // only keep the integer part for now in the hopes of putting any decimal part
                // into a smaller unit later
                var i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = (own * 1000 - i * 1000) / 1000;
            // otherwise, keep it in the wings to boil it later
            } else if ($10b9906fb633b71f$var$isNumber(vals[k])) accumulated[k] = vals[k];
        }
        // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(var key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        $10b9906fb633b71f$var$normalizeValues(this.matrix, built);
        return $10b9906fb633b71f$var$clone$1(this, {
            values: built
        }, true);
    } /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */ ;
    _proto.shiftToAll = function shiftToAll() {
        if (!this.isValid) return this;
        return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
    } /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ ;
    _proto.negate = function negate() {
        if (!this.isValid) return this;
        var negated = {};
        for(var _i5 = 0, _Object$keys2 = Object.keys(this.values); _i5 < _Object$keys2.length; _i5++){
            var k = _Object$keys2[_i5];
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return $10b9906fb633b71f$var$clone$1(this, {
            values: negated
        }, true);
    } /**
   * Get the years.
   * @type {number}
   */ ;
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        if (!this.loc.equals(other.loc)) return false;
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for(var _i6 = 0, _orderedUnits3 = $10b9906fb633b71f$var$orderedUnits$1; _i6 < _orderedUnits3.length; _i6++){
            var u = _orderedUnits3[_i6];
            if (!eq(this.values[u], other.values[u])) return false;
        }
        return true;
    };
    $10b9906fb633b71f$var$_createClass(Duration, [
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "years",
            get: function get() {
                return this.isValid ? this.values.years || 0 : NaN;
            }
        },
        {
            key: "quarters",
            get: function get() {
                return this.isValid ? this.values.quarters || 0 : NaN;
            }
        },
        {
            key: "months",
            get: function get() {
                return this.isValid ? this.values.months || 0 : NaN;
            }
        },
        {
            key: "weeks",
            get: function get() {
                return this.isValid ? this.values.weeks || 0 : NaN;
            }
        },
        {
            key: "days",
            get: function get() {
                return this.isValid ? this.values.days || 0 : NaN;
            }
        },
        {
            key: "hours",
            get: function get() {
                return this.isValid ? this.values.hours || 0 : NaN;
            }
        },
        {
            key: "minutes",
            get: function get() {
                return this.isValid ? this.values.minutes || 0 : NaN;
            }
        },
        {
            key: "seconds",
            get: function get() {
                return this.isValid ? this.values.seconds || 0 : NaN;
            }
        },
        {
            key: "milliseconds",
            get: function get() {
                return this.isValid ? this.values.milliseconds || 0 : NaN;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Duration;
}(Symbol.for("nodejs.util.inspect.custom"));
var $10b9906fb633b71f$var$INVALID$1 = "Invalid Interval";
// checks if the start is equal to or before the end
function $10b9906fb633b71f$var$validateStartEnd(start, end) {
    if (!start || !start.isValid) return $10b9906fb633b71f$var$Interval.invalid("missing or invalid start");
    else if (!end || !end.isValid) return $10b9906fb633b71f$var$Interval.invalid("missing or invalid end");
    else if (end < start) return $10b9906fb633b71f$var$Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    else return null;
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */ var $10b9906fb633b71f$var$Interval = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @private
   */ function Interval(config) {
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ Interval.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new $10b9906fb633b71f$var$InvalidArgumentError("need to specify a reason the Interval is invalid");
        var invalid = reason instanceof $10b9906fb633b71f$var$Invalid ? reason : new $10b9906fb633b71f$var$Invalid(reason, explanation);
        if ($10b9906fb633b71f$var$Settings.throwOnInvalid) throw new $10b9906fb633b71f$var$InvalidIntervalError(invalid);
        else return new Interval({
            invalid: invalid
        });
    } /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */ ;
    Interval.fromDateTimes = function fromDateTimes(start, end) {
        var builtStart = $10b9906fb633b71f$var$friendlyDateTime(start), builtEnd = $10b9906fb633b71f$var$friendlyDateTime(end);
        var validateError = $10b9906fb633b71f$var$validateStartEnd(builtStart, builtEnd);
        if (validateError == null) return new Interval({
            start: builtStart,
            end: builtEnd
        });
        else return validateError;
    } /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.after = function after(start, duration) {
        var dur = $10b9906fb633b71f$var$Duration.fromDurationLike(duration), dt = $10b9906fb633b71f$var$friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    } /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.before = function before(end, duration) {
        var dur = $10b9906fb633b71f$var$Duration.fromDurationLike(duration), dt = $10b9906fb633b71f$var$friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    } /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */ ;
    Interval.fromISO = function fromISO(text, opts) {
        var _split = (text || "").split("/", 2), s = _split[0], e = _split[1];
        if (s && e) {
            var start, startIsValid;
            try {
                start = $10b9906fb633b71f$var$DateTime.fromISO(s, opts);
                startIsValid = start.isValid;
            } catch (e) {
                startIsValid = false;
            }
            var end, endIsValid;
            try {
                end = $10b9906fb633b71f$var$DateTime.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) return Interval.fromDateTimes(start, end);
            if (startIsValid) {
                var dur = $10b9906fb633b71f$var$Duration.fromISO(e, opts);
                if (dur.isValid) return Interval.after(start, dur);
            } else if (endIsValid) {
                var _dur = $10b9906fb633b71f$var$Duration.fromISO(s, opts);
                if (_dur.isValid) return Interval.before(end, _dur);
            }
        }
        return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    } /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Interval.isInterval = function isInterval(o) {
        return o && o.isLuxonInterval || false;
    } /**
   * Returns the start of the Interval
   * @type {DateTime}
   */ ;
    var _proto = Interval.prototype;
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ _proto.length = function length(unit) {
        if (unit === void 0) unit = "milliseconds";
        return this.isValid ? this.toDuration.apply(this, [
            unit
        ]).get(unit) : NaN;
    } /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */ ;
    _proto.count = function count(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (!this.isValid) return NaN;
        var start = this.start.startOf(unit, opts);
        var end;
        if (opts != null && opts.useLocaleWeeks) end = this.end.reconfigure({
            locale: start.locale
        });
        else end = this.end;
        end = end.startOf(unit, opts);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
    } /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    } /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */ ;
    _proto.isEmpty = function isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    } /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isAfter = function isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    } /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isBefore = function isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    } /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.contains = function contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    } /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */ ;
    _proto.set = function set(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
    } /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */ ;
    _proto.splitAt = function splitAt() {
        var _this = this;
        if (!this.isValid) return [];
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        var sorted = dateTimes.map($10b9906fb633b71f$var$friendlyDateTime).filter(function(d) {
            return _this.contains(d);
        }).sort(function(a, b) {
            return a.toMillis() - b.toMillis();
        }), results = [];
        var s = this.s, i = 0;
        while(s < this.e){
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            i += 1;
        }
        return results;
    } /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */ ;
    _proto.splitBy = function splitBy(duration) {
        var dur = $10b9906fb633b71f$var$Duration.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) return [];
        var s = this.s, idx = 1, next;
        var results = [];
        while(s < this.e){
            var added = this.start.plus(dur.mapUnits(function(x) {
                return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            idx += 1;
        }
        return results;
    } /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */ ;
    _proto.divideEqually = function divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    } /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.overlaps = function overlaps(other) {
        return this.e > other.s && this.s < other.e;
    } /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsStart = function abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    } /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsEnd = function abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    } /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.engulfs = function engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    } /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        return this.s.equals(other.s) && this.e.equals(other.e);
    } /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.intersection = function intersection(other) {
        if (!this.isValid) return this;
        var s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s >= e) return null;
        else return Interval.fromDateTimes(s, e);
    } /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.union = function union(other) {
        if (!this.isValid) return this;
        var s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
    } /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.merge = function merge(intervals) {
        var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
        }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) return [
                sofar,
                item
            ];
            else if (current.overlaps(item) || current.abutsStart(item)) return [
                sofar,
                current.union(item)
            ];
            else return [
                sofar.concat([
                    current
                ]),
                item
            ];
        }, [
            [],
            null
        ]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
        if (final) found.push(final);
        return found;
    } /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.xor = function xor(intervals) {
        var _Array$prototype;
        var start = null, currentCount = 0;
        var results = [], ends = intervals.map(function(i) {
            return [
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }
            ];
        }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
        });
        for(var _iterator = $10b9906fb633b71f$var$_createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;){
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) start = i.time;
            else {
                if (start && +start !== +i.time) results.push(Interval.fromDateTimes(start, i.time));
                start = null;
            }
        }
        return Interval.merge(results);
    } /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */ ;
    _proto.difference = function difference() {
        var _this2 = this;
        for(var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)intervals[_key2] = arguments[_key2];
        return Interval.xor([
            this
        ].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
        }).filter(function(i) {
            return i && !i.isEmpty();
        });
    } /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$1;
        return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
    } /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "Interval { start: " + this.s.toISO() + ", end: " + this.e.toISO() + " }";
        else return "Interval { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
        if (formatOpts === void 0) formatOpts = $10b9906fb633b71f$var$DATE_SHORT;
        if (opts === void 0) opts = {};
        return this.isValid ? $10b9906fb633b71f$var$Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : $10b9906fb633b71f$var$INVALID$1;
    } /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISO = function toISO(opts) {
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$1;
        return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    } /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate() {
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$1;
        return this.s.toISODate() + "/" + this.e.toISODate();
    } /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$1;
        return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    } /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
        if (!this.isValid) return $10b9906fb633b71f$var$INVALID$1;
        return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    } /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */ ;
    _proto.toDuration = function toDuration(unit, opts) {
        if (!this.isValid) return $10b9906fb633b71f$var$Duration.invalid(this.invalidReason);
        return this.e.diff(this.s, unit, opts);
    } /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */ ;
    _proto.mapEndpoints = function mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };
    $10b9906fb633b71f$var$_createClass(Interval, [
        {
            key: "start",
            get: function get() {
                return this.isValid ? this.s : null;
            }
        },
        {
            key: "end",
            get: function get() {
                return this.isValid ? this.e : null;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalidReason === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Interval;
}(Symbol.for("nodejs.util.inspect.custom"));
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */ var $10b9906fb633b71f$var$Info = /*#__PURE__*/ function() {
    function Info() {}
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ Info.hasDST = function hasDST(zone) {
        if (zone === void 0) zone = $10b9906fb633b71f$var$Settings.defaultZone;
        var proto = $10b9906fb633b71f$var$DateTime.now().setZone(zone).set({
            month: 12
        });
        return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
        }).offset;
    } /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ ;
    Info.isValidIANAZone = function isValidIANAZone(zone) {
        return $10b9906fb633b71f$var$IANAZone.isValidZone(zone);
    } /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ ;
    Info.normalizeZone = function normalizeZone$1(input) {
        return $10b9906fb633b71f$var$normalizeZone(input, $10b9906fb633b71f$var$Settings.defaultZone);
    } /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */ ;
    Info.getStartOfWeek = function getStartOfWeek(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale)).getStartOfWeek();
    } /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */ ;
    Info.getMinimumDaysInFirstWeek = function getMinimumDaysInFirstWeek(_temp2) {
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale)).getMinDaysInFirstWeek();
    } /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */ ;
    Info.getWeekendWeekdays = function getWeekendWeekdays(_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
        // copy the array, because we cache it internally
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale)).getWeekendDays().slice();
    } /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */ ;
    Info.months = function months(length, _temp4) {
        if (length === void 0) length = "long";
        var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj, _ref4$outputCalendar = _ref4.outputCalendar, outputCalendar = _ref4$outputCalendar === void 0 ? "gregory" : _ref4$outputCalendar;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    } /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */ ;
    Info.monthsFormat = function monthsFormat(length, _temp5) {
        if (length === void 0) length = "long";
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale, _ref5$numberingSystem = _ref5.numberingSystem, numberingSystem = _ref5$numberingSystem === void 0 ? null : _ref5$numberingSystem, _ref5$locObj = _ref5.locObj, locObj = _ref5$locObj === void 0 ? null : _ref5$locObj, _ref5$outputCalendar = _ref5.outputCalendar, outputCalendar = _ref5$outputCalendar === void 0 ? "gregory" : _ref5$outputCalendar;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    } /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */ ;
    Info.weekdays = function weekdays(length, _temp6) {
        if (length === void 0) length = "long";
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale, _ref6$numberingSystem = _ref6.numberingSystem, numberingSystem = _ref6$numberingSystem === void 0 ? null : _ref6$numberingSystem, _ref6$locObj = _ref6.locObj, locObj = _ref6$locObj === void 0 ? null : _ref6$locObj;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale, numberingSystem, null)).weekdays(length);
    } /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */ ;
    Info.weekdaysFormat = function weekdaysFormat(length, _temp7) {
        if (length === void 0) length = "long";
        var _ref7 = _temp7 === void 0 ? {} : _temp7, _ref7$locale = _ref7.locale, locale = _ref7$locale === void 0 ? null : _ref7$locale, _ref7$numberingSystem = _ref7.numberingSystem, numberingSystem = _ref7$numberingSystem === void 0 ? null : _ref7$numberingSystem, _ref7$locObj = _ref7.locObj, locObj = _ref7$locObj === void 0 ? null : _ref7$locObj;
        return (locObj || $10b9906fb633b71f$var$Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    } /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */ ;
    Info.meridiems = function meridiems(_temp8) {
        var _ref8 = _temp8 === void 0 ? {} : _temp8, _ref8$locale = _ref8.locale, locale = _ref8$locale === void 0 ? null : _ref8$locale;
        return $10b9906fb633b71f$var$Locale.create(locale).meridiems();
    } /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */ ;
    Info.eras = function eras(length, _temp9) {
        if (length === void 0) length = "short";
        var _ref9 = _temp9 === void 0 ? {} : _temp9, _ref9$locale = _ref9.locale, locale = _ref9$locale === void 0 ? null : _ref9$locale;
        return $10b9906fb633b71f$var$Locale.create(locale, null, "gregory").eras(length);
    } /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */ ;
    Info.features = function features() {
        return {
            relative: $10b9906fb633b71f$var$hasRelative(),
            localeWeek: $10b9906fb633b71f$var$hasLocaleWeekInfo()
        };
    };
    return Info;
}();
function $10b9906fb633b71f$var$dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
        return dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf();
    }, ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor($10b9906fb633b71f$var$Duration.fromMillis(ms).as("days"));
}
function $10b9906fb633b71f$var$highOrderDiffs(cursor, later, units) {
    var differs = [
        [
            "years",
            function(a, b) {
                return b.year - a.year;
            }
        ],
        [
            "quarters",
            function(a, b) {
                return b.quarter - a.quarter + (b.year - a.year) * 4;
            }
        ],
        [
            "months",
            function(a, b) {
                return b.month - a.month + (b.year - a.year) * 12;
            }
        ],
        [
            "weeks",
            function(a, b) {
                var days = $10b9906fb633b71f$var$dayDiff(a, b);
                return (days - days % 7) / 7;
            }
        ],
        [
            "days",
            $10b9906fb633b71f$var$dayDiff
        ]
    ];
    var results = {};
    var earlier = cursor;
    var lowestOrder, highWater;
    /* This loop tries to diff using larger units first.
     If we overshoot, we backtrack and try the next smaller unit.
     "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
     as we use smaller and smaller units.
     highWater keeps track of where we would be if we added one more of the smallest unit,
     this is used later to potentially convert any difference smaller than the smallest higher order unit
     into a fraction of that smallest higher order unit
  */ for(var _i = 0, _differs = differs; _i < _differs.length; _i++){
        var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
        if (units.indexOf(unit) >= 0) {
            lowestOrder = unit;
            results[unit] = differ(cursor, later);
            highWater = earlier.plus(results);
            if (highWater > later) {
                // we overshot the end point, backtrack cursor by 1
                results[unit]--;
                cursor = earlier.plus(results);
                // if we are still overshooting now, we need to backtrack again
                // this happens in certain situations when diffing times in different zones,
                // because this calculation ignores time zones
                if (cursor > later) {
                    // keep the "overshot by 1" around as highWater
                    highWater = cursor;
                    // backtrack cursor by 1
                    results[unit]--;
                    cursor = earlier.plus(results);
                }
            } else cursor = highWater;
        }
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
function $10b9906fb633b71f$var$_diff(earlier, later, units, opts) {
    var _highOrderDiffs = $10b9906fb633b71f$var$highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter(function(u) {
        return [
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0;
    });
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
            var _cursor$plus;
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[lowestOrder] = 1, _cursor$plus));
        }
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    var duration = $10b9906fb633b71f$var$Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
        var _Duration$fromMillis;
        return (_Duration$fromMillis = $10b9906fb633b71f$var$Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else return duration;
}
var $10b9906fb633b71f$var$MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function $10b9906fb633b71f$var$intUnit(regex, post) {
    if (post === void 0) post = function post(i) {
        return i;
    };
    return {
        regex: regex,
        deser: function deser(_ref) {
            var s = _ref[0];
            return post($10b9906fb633b71f$var$parseDigits(s));
        }
    };
}
var $10b9906fb633b71f$var$NBSP = String.fromCharCode(160);
var $10b9906fb633b71f$var$spaceOrNBSP = "[ " + $10b9906fb633b71f$var$NBSP + "]";
var $10b9906fb633b71f$var$spaceOrNBSPRegExp = new RegExp($10b9906fb633b71f$var$spaceOrNBSP, "g");
function $10b9906fb633b71f$var$fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace($10b9906fb633b71f$var$spaceOrNBSPRegExp, $10b9906fb633b71f$var$spaceOrNBSP);
}
function $10b9906fb633b71f$var$stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace($10b9906fb633b71f$var$spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function $10b9906fb633b71f$var$oneOf(strings, startIndex) {
    if (strings === null) return null;
    else return {
        regex: RegExp(strings.map($10b9906fb633b71f$var$fixListRegex).join("|")),
        deser: function deser(_ref2) {
            var s = _ref2[0];
            return strings.findIndex(function(i) {
                return $10b9906fb633b71f$var$stripInsensitivities(s) === $10b9906fb633b71f$var$stripInsensitivities(i);
            }) + startIndex;
        }
    };
}
function $10b9906fb633b71f$var$offset(regex, groups) {
    return {
        regex: regex,
        deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return $10b9906fb633b71f$var$signedOffset(h, m);
        },
        groups: groups
    };
}
function $10b9906fb633b71f$var$simple(regex) {
    return {
        regex: regex,
        deser: function deser(_ref4) {
            var s = _ref4[0];
            return s;
        }
    };
}
function $10b9906fb633b71f$var$escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
/**
 * @param token
 * @param {Locale} loc
 */ function $10b9906fb633b71f$var$unitForToken(token, loc) {
    var one = $10b9906fb633b71f$var$digitRegex(loc), two = $10b9906fb633b71f$var$digitRegex(loc, "{2}"), three = $10b9906fb633b71f$var$digitRegex(loc, "{3}"), four = $10b9906fb633b71f$var$digitRegex(loc, "{4}"), six = $10b9906fb633b71f$var$digitRegex(loc, "{6}"), oneOrTwo = $10b9906fb633b71f$var$digitRegex(loc, "{1,2}"), oneToThree = $10b9906fb633b71f$var$digitRegex(loc, "{1,3}"), oneToSix = $10b9906fb633b71f$var$digitRegex(loc, "{1,6}"), oneToNine = $10b9906fb633b71f$var$digitRegex(loc, "{1,9}"), twoToFour = $10b9906fb633b71f$var$digitRegex(loc, "{2,4}"), fourToSix = $10b9906fb633b71f$var$digitRegex(loc, "{4,6}"), literal = function literal(t) {
        return {
            regex: RegExp($10b9906fb633b71f$var$escapeToken(t.val)),
            deser: function deser(_ref5) {
                var s = _ref5[0];
                return s;
            },
            literal: true
        };
    }, unitate = function unitate(t) {
        if (token.literal) return literal(t);
        switch(t.val){
            // era
            case "G":
                return $10b9906fb633b71f$var$oneOf(loc.eras("short"), 0);
            case "GG":
                return $10b9906fb633b71f$var$oneOf(loc.eras("long"), 0);
            // years
            case "y":
                return $10b9906fb633b71f$var$intUnit(oneToSix);
            case "yy":
                return $10b9906fb633b71f$var$intUnit(twoToFour, $10b9906fb633b71f$var$untruncateYear);
            case "yyyy":
                return $10b9906fb633b71f$var$intUnit(four);
            case "yyyyy":
                return $10b9906fb633b71f$var$intUnit(fourToSix);
            case "yyyyyy":
                return $10b9906fb633b71f$var$intUnit(six);
            // months
            case "M":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "MM":
                return $10b9906fb633b71f$var$intUnit(two);
            case "MMM":
                return $10b9906fb633b71f$var$oneOf(loc.months("short", true), 1);
            case "MMMM":
                return $10b9906fb633b71f$var$oneOf(loc.months("long", true), 1);
            case "L":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "LL":
                return $10b9906fb633b71f$var$intUnit(two);
            case "LLL":
                return $10b9906fb633b71f$var$oneOf(loc.months("short", false), 1);
            case "LLLL":
                return $10b9906fb633b71f$var$oneOf(loc.months("long", false), 1);
            // dates
            case "d":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "dd":
                return $10b9906fb633b71f$var$intUnit(two);
            // ordinals
            case "o":
                return $10b9906fb633b71f$var$intUnit(oneToThree);
            case "ooo":
                return $10b9906fb633b71f$var$intUnit(three);
            // time
            case "HH":
                return $10b9906fb633b71f$var$intUnit(two);
            case "H":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "hh":
                return $10b9906fb633b71f$var$intUnit(two);
            case "h":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "mm":
                return $10b9906fb633b71f$var$intUnit(two);
            case "m":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "q":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "qq":
                return $10b9906fb633b71f$var$intUnit(two);
            case "s":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "ss":
                return $10b9906fb633b71f$var$intUnit(two);
            case "S":
                return $10b9906fb633b71f$var$intUnit(oneToThree);
            case "SSS":
                return $10b9906fb633b71f$var$intUnit(three);
            case "u":
                return $10b9906fb633b71f$var$simple(oneToNine);
            case "uu":
                return $10b9906fb633b71f$var$simple(oneOrTwo);
            case "uuu":
                return $10b9906fb633b71f$var$intUnit(one);
            // meridiem
            case "a":
                return $10b9906fb633b71f$var$oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return $10b9906fb633b71f$var$intUnit(four);
            case "kk":
                return $10b9906fb633b71f$var$intUnit(twoToFour, $10b9906fb633b71f$var$untruncateYear);
            // weekNumber (W)
            case "W":
                return $10b9906fb633b71f$var$intUnit(oneOrTwo);
            case "WW":
                return $10b9906fb633b71f$var$intUnit(two);
            // weekdays
            case "E":
            case "c":
                return $10b9906fb633b71f$var$intUnit(one);
            case "EEE":
                return $10b9906fb633b71f$var$oneOf(loc.weekdays("short", false), 1);
            case "EEEE":
                return $10b9906fb633b71f$var$oneOf(loc.weekdays("long", false), 1);
            case "ccc":
                return $10b9906fb633b71f$var$oneOf(loc.weekdays("short", true), 1);
            case "cccc":
                return $10b9906fb633b71f$var$oneOf(loc.weekdays("long", true), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return $10b9906fb633b71f$var$offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
                return $10b9906fb633b71f$var$offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return $10b9906fb633b71f$var$simple(/[a-z_+-/]{1,256}?/i);
            // this special-case "token" represents a place where a macro-token expanded into a white-space literal
            // in this case we accept any non-newline white-space
            case " ":
                return $10b9906fb633b71f$var$simple(/[^\S\n\r]/);
            default:
                return literal(t);
        }
    };
    var unit = unitate(token) || {
        invalidReason: $10b9906fb633b71f$var$MISSING_FTP
    };
    unit.token = token;
    return unit;
}
var $10b9906fb633b71f$var$partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
        numeric: "h",
        "2-digit": "hh"
    },
    hour24: {
        numeric: "H",
        "2-digit": "HH"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};
function $10b9906fb633b71f$var$tokenForPart(part, formatOpts, resolvedOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") {
        var isSpace = /^\s+$/.test(value);
        return {
            literal: !isSpace,
            val: isSpace ? " " : value
        };
    }
    var style = formatOpts[type];
    // The user might have explicitly specified hour12 or hourCycle
    // if so, respect their decision
    // if not, refer back to the resolvedOpts, which are based on the locale
    var actualType = type;
    if (type === "hour") {
        if (formatOpts.hour12 != null) actualType = formatOpts.hour12 ? "hour12" : "hour24";
        else if (formatOpts.hourCycle != null) {
            if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") actualType = "hour12";
            else actualType = "hour24";
        } else // tokens only differentiate between 24 hours or not,
        // so we do not need to check hourCycle here, which is less supported anyways
        actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
    }
    var val = $10b9906fb633b71f$var$partTypeStyleToTokenVal[actualType];
    if (typeof val === "object") val = val[style];
    if (val) return {
        literal: false,
        val: val
    };
    return undefined;
}
function $10b9906fb633b71f$var$buildRegex(units) {
    var re = units.map(function(u) {
        return u.regex;
    }).reduce(function(f, r) {
        return f + "(" + r.source + ")";
    }, "");
    return [
        "^" + re + "$",
        units
    ];
}
function $10b9906fb633b71f$var$match(input, regex, handlers) {
    var matches = input.match(regex);
    if (matches) {
        var all = {};
        var matchIndex = 1;
        for(var i in handlers)if ($10b9906fb633b71f$var$hasOwnProperty(handlers, i)) {
            var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            matchIndex += groups;
        }
        return [
            matches,
            all
        ];
    } else return [
        matches,
        {}
    ];
}
function $10b9906fb633b71f$var$dateTimeFromMatches(matches) {
    var toField = function toField(token) {
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    var zone = null;
    var specificOffset;
    if (!$10b9906fb633b71f$var$isUndefined(matches.z)) zone = $10b9906fb633b71f$var$IANAZone.create(matches.z);
    if (!$10b9906fb633b71f$var$isUndefined(matches.Z)) {
        if (!zone) zone = new $10b9906fb633b71f$var$FixedOffsetZone(matches.Z);
        specificOffset = matches.Z;
    }
    if (!$10b9906fb633b71f$var$isUndefined(matches.q)) matches.M = (matches.q - 1) * 3 + 1;
    if (!$10b9906fb633b71f$var$isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) matches.h += 12;
        else if (matches.h === 12 && matches.a === 0) matches.h = 0;
    }
    if (matches.G === 0 && matches.y) matches.y = -matches.y;
    if (!$10b9906fb633b71f$var$isUndefined(matches.u)) matches.S = $10b9906fb633b71f$var$parseMillis(matches.u);
    var vals = Object.keys(matches).reduce(function(r, k) {
        var f = toField(k);
        if (f) r[f] = matches[k];
        return r;
    }, {});
    return [
        vals,
        zone,
        specificOffset
    ];
}
var $10b9906fb633b71f$var$dummyDateTimeCache = null;
function $10b9906fb633b71f$var$getDummyDateTime() {
    if (!$10b9906fb633b71f$var$dummyDateTimeCache) $10b9906fb633b71f$var$dummyDateTimeCache = $10b9906fb633b71f$var$DateTime.fromMillis(1555555555555);
    return $10b9906fb633b71f$var$dummyDateTimeCache;
}
function $10b9906fb633b71f$var$maybeExpandMacroToken(token, locale) {
    if (token.literal) return token;
    var formatOpts = $10b9906fb633b71f$var$Formatter.macroTokenToFormatOpts(token.val);
    var tokens = $10b9906fb633b71f$var$formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(undefined)) return token;
    return tokens;
}
function $10b9906fb633b71f$var$expandMacroTokens(tokens, locale) {
    var _Array$prototype;
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
        return $10b9906fb633b71f$var$maybeExpandMacroToken(t, locale);
    }));
}
/**
 * @private
 */ var $10b9906fb633b71f$var$TokenParser = /*#__PURE__*/ function() {
    function TokenParser(locale, format) {
        this.locale = locale;
        this.format = format;
        this.tokens = $10b9906fb633b71f$var$expandMacroTokens($10b9906fb633b71f$var$Formatter.parseFormat(format), locale);
        this.units = this.tokens.map(function(t) {
            return $10b9906fb633b71f$var$unitForToken(t, locale);
        });
        this.disqualifyingUnit = this.units.find(function(t) {
            return t.invalidReason;
        });
        if (!this.disqualifyingUnit) {
            var _buildRegex = $10b9906fb633b71f$var$buildRegex(this.units), regexString = _buildRegex[0], handlers = _buildRegex[1];
            this.regex = RegExp(regexString, "i");
            this.handlers = handlers;
        }
    }
    var _proto = TokenParser.prototype;
    _proto.explainFromTokens = function explainFromTokens(input) {
        if (!this.isValid) return {
            input: input,
            tokens: this.tokens,
            invalidReason: this.invalidReason
        };
        else {
            var _match = $10b9906fb633b71f$var$match(input, this.regex, this.handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? $10b9906fb633b71f$var$dateTimeFromMatches(matches) : [
                null,
                null,
                undefined
            ], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
            if ($10b9906fb633b71f$var$hasOwnProperty(matches, "a") && $10b9906fb633b71f$var$hasOwnProperty(matches, "H")) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
            return {
                input: input,
                tokens: this.tokens,
                regex: this.regex,
                rawMatches: rawMatches,
                matches: matches,
                result: result,
                zone: zone,
                specificOffset: specificOffset
            };
        }
    };
    $10b9906fb633b71f$var$_createClass(TokenParser, [
        {
            key: "isValid",
            get: function get() {
                return !this.disqualifyingUnit;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
            }
        }
    ]);
    return TokenParser;
}();
function $10b9906fb633b71f$var$explainFromTokens(locale, input, format) {
    var parser = new $10b9906fb633b71f$var$TokenParser(locale, format);
    return parser.explainFromTokens(input);
}
function $10b9906fb633b71f$var$parseFromTokens(locale, input, format) {
    var _explainFromTokens = $10b9906fb633b71f$var$explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
    return [
        result,
        zone,
        specificOffset,
        invalidReason
    ];
}
function $10b9906fb633b71f$var$formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) return null;
    var formatter = $10b9906fb633b71f$var$Formatter.create(locale, formatOpts);
    var df = formatter.dtFormatter($10b9906fb633b71f$var$getDummyDateTime());
    var parts = df.formatToParts();
    var resolvedOpts = df.resolvedOptions();
    return parts.map(function(p) {
        return $10b9906fb633b71f$var$tokenForPart(p, formatOpts, resolvedOpts);
    });
}
var $10b9906fb633b71f$var$INVALID = "Invalid DateTime";
var $10b9906fb633b71f$var$MAX_DATE = 8.64e15;
function $10b9906fb633b71f$var$unsupportedZone(zone) {
    return new $10b9906fb633b71f$var$Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
}
// we cache week data on the DT object and this intermediates the cache
/**
 * @param {DateTime} dt
 */ function $10b9906fb633b71f$var$possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = $10b9906fb633b71f$var$gregorianToWeek(dt.c);
    return dt.weekData;
}
/**
 * @param {DateTime} dt
 */ function $10b9906fb633b71f$var$possiblyCachedLocalWeekData(dt) {
    if (dt.localWeekData === null) dt.localWeekData = $10b9906fb633b71f$var$gregorianToWeek(dt.c, dt.loc.getMinDaysInFirstWeek(), dt.loc.getStartOfWeek());
    return dt.localWeekData;
}
// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function $10b9906fb633b71f$var$clone(inst, alts) {
    var current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new $10b9906fb633b71f$var$DateTime($10b9906fb633b71f$var$_extends({}, current, alts, {
        old: current
    }));
}
// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function $10b9906fb633b71f$var$fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60000;
    // Test whether the zone matches the offset for this ts
    var o2 = tz.offset(utcGuess);
    // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000;
    // If that gives us the local time we want, we're done
    var o3 = tz.offset(utcGuess);
    if (o2 === o3) return [
        utcGuess,
        o2
    ];
    // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60000,
        Math.max(o2, o3)
    ];
}
// convert an epoch timestamp into a calendar object with the given offset
function $10b9906fb633b71f$var$tsToObj(ts, offset) {
    ts += offset * 60000;
    var d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
}
// convert a calendar object to a epoch timestamp
function $10b9906fb633b71f$var$objToTS(obj, offset, zone) {
    return $10b9906fb633b71f$var$fixOffset($10b9906fb633b71f$var$objToLocalTS(obj), offset, zone);
}
// create a new DT instance by adding a duration, adjusting for DSTs
function $10b9906fb633b71f$var$adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = $10b9906fb633b71f$var$_extends({}, inst.c, {
        year: year,
        month: month,
        day: Math.min(inst.c.day, $10b9906fb633b71f$var$daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = $10b9906fb633b71f$var$Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = $10b9906fb633b71f$var$objToLocalTS(c);
    var _fixOffset = $10b9906fb633b71f$var$fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
    if (millisToAdd !== 0) {
        ts += millisToAdd;
        // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts: ts,
        o: o
    };
}
// helper useful in turning the results of parsing into real dates
// by handling the zone options
function $10b9906fb633b71f$var$parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
        var interpretationZone = parsedZone || zone, inst = $10b9906fb633b71f$var$DateTime.fromObject(parsed, $10b9906fb633b71f$var$_extends({}, opts, {
            zone: interpretationZone,
            specificOffset: specificOffset
        }));
        return setZone ? inst : inst.setZone(zone);
    } else return $10b9906fb633b71f$var$DateTime.invalid(new $10b9906fb633b71f$var$Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
}
// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function $10b9906fb633b71f$var$toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) allowZ = true;
    return dt.isValid ? $10b9906fb633b71f$var$Formatter.create($10b9906fb633b71f$var$Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
}
function $10b9906fb633b71f$var$_toISODate(o, extended) {
    var longFormat = o.c.year > 9999 || o.c.year < 0;
    var c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += $10b9906fb633b71f$var$padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
        c += "-";
        c += $10b9906fb633b71f$var$padStart(o.c.month);
        c += "-";
        c += $10b9906fb633b71f$var$padStart(o.c.day);
    } else {
        c += $10b9906fb633b71f$var$padStart(o.c.month);
        c += $10b9906fb633b71f$var$padStart(o.c.day);
    }
    return c;
}
function $10b9906fb633b71f$var$_toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    var c = $10b9906fb633b71f$var$padStart(o.c.hour);
    if (extended) {
        c += ":";
        c += $10b9906fb633b71f$var$padStart(o.c.minute);
        if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) c += ":";
    } else c += $10b9906fb633b71f$var$padStart(o.c.minute);
    if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += $10b9906fb633b71f$var$padStart(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += $10b9906fb633b71f$var$padStart(o.c.millisecond, 3);
        }
    }
    if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) c += "Z";
        else if (o.o < 0) {
            c += "-";
            c += $10b9906fb633b71f$var$padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += $10b9906fb633b71f$var$padStart(Math.trunc(-o.o % 60));
        } else {
            c += "+";
            c += $10b9906fb633b71f$var$padStart(Math.trunc(o.o / 60));
            c += ":";
            c += $10b9906fb633b71f$var$padStart(Math.trunc(o.o % 60));
        }
    }
    if (extendedZone) c += "[" + o.zone.ianaName + "]";
    return c;
}
// defaults for unspecified units in the supported calendars
var $10b9906fb633b71f$var$defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, $10b9906fb633b71f$var$defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, $10b9906fb633b71f$var$defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
// Units in the supported calendars, sorted by bigness
var $10b9906fb633b71f$var$orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], $10b9906fb633b71f$var$orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
], $10b9906fb633b71f$var$orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
];
// standardize case and plurality in units
function $10b9906fb633b71f$var$normalizeUnit(unit) {
    var normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new $10b9906fb633b71f$var$InvalidUnitError(unit);
    return normalized;
}
function $10b9906fb633b71f$var$normalizeUnitWithLocalWeeks(unit) {
    switch(unit.toLowerCase()){
        case "localweekday":
        case "localweekdays":
            return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
            return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
            return "localWeekYear";
        default:
            return $10b9906fb633b71f$var$normalizeUnit(unit);
    }
}
// cache offsets for zones based on the current timestamp when this function is
// first called. When we are handling a datetime from components like (year,
// month, day, hour) in a time zone, we need a guess about what the timezone
// offset is so that we can convert into a UTC timestamp. One way is to find the
// offset of now in the zone. The actual date may have a different offset (for
// example, if we handle a date in June while we're in December in a zone that
// observes DST), but we can check and adjust that.
//
// When handling many dates, calculating the offset for now every time is
// expensive. It's just a guess, so we can cache the offset to use even if we
// are right on a time change boundary (we'll just correct in the other
// direction). Using a timestamp from first read is a slight optimization for
// handling dates close to the current date, since those dates will usually be
// in the same offset (we could set the timestamp statically, instead). We use a
// single timestamp for all zones to make things a bit more predictable.
//
// This is safe for quickDT (used by local() and utc()) because we don't fill in
// higher-order units from tsNow (as we do in fromObject, this requires that
// offset is calculated from tsNow).
function $10b9906fb633b71f$var$guessOffsetForZone(zone) {
    if (!$10b9906fb633b71f$var$zoneOffsetGuessCache[zone]) {
        if ($10b9906fb633b71f$var$zoneOffsetTs === undefined) $10b9906fb633b71f$var$zoneOffsetTs = $10b9906fb633b71f$var$Settings.now();
        $10b9906fb633b71f$var$zoneOffsetGuessCache[zone] = zone.offset($10b9906fb633b71f$var$zoneOffsetTs);
    }
    return $10b9906fb633b71f$var$zoneOffsetGuessCache[zone];
}
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function $10b9906fb633b71f$var$quickDT(obj, opts) {
    var zone = $10b9906fb633b71f$var$normalizeZone(opts.zone, $10b9906fb633b71f$var$Settings.defaultZone);
    if (!zone.isValid) return $10b9906fb633b71f$var$DateTime.invalid($10b9906fb633b71f$var$unsupportedZone(zone));
    var loc = $10b9906fb633b71f$var$Locale.fromObject(opts);
    var ts, o;
    // assume we have the higher-order units
    if (!$10b9906fb633b71f$var$isUndefined(obj.year)) {
        for(var _i = 0, _orderedUnits = $10b9906fb633b71f$var$orderedUnits; _i < _orderedUnits.length; _i++){
            var u = _orderedUnits[_i];
            if ($10b9906fb633b71f$var$isUndefined(obj[u])) obj[u] = $10b9906fb633b71f$var$defaultUnitValues[u];
        }
        var invalid = $10b9906fb633b71f$var$hasInvalidGregorianData(obj) || $10b9906fb633b71f$var$hasInvalidTimeData(obj);
        if (invalid) return $10b9906fb633b71f$var$DateTime.invalid(invalid);
        var offsetProvis = $10b9906fb633b71f$var$guessOffsetForZone(zone);
        var _objToTS = $10b9906fb633b71f$var$objToTS(obj, offsetProvis, zone);
        ts = _objToTS[0];
        o = _objToTS[1];
    } else ts = $10b9906fb633b71f$var$Settings.now();
    return new $10b9906fb633b71f$var$DateTime({
        ts: ts,
        zone: zone,
        loc: loc,
        o: o
    });
}
function $10b9906fb633b71f$var$diffRelative(start, end, opts) {
    var round = $10b9906fb633b71f$var$isUndefined(opts.round) ? true : opts.round, format = function format(c, unit) {
        c = $10b9906fb633b71f$var$roundTo(c, round || opts.calendary ? 0 : 2, true);
        var formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = function differ(unit) {
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            else return 0;
        } else return end.diff(start, unit).get(unit);
    };
    if (opts.unit) return format(differ(opts.unit), opts.unit);
    for(var _iterator = $10b9906fb633b71f$var$_createForOfIteratorHelperLoose(opts.units), _step; !(_step = _iterator()).done;){
        var unit = _step.value;
        var count = differ(unit);
        if (Math.abs(count) >= 1) return format(count, unit);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function $10b9906fb633b71f$var$lastOpts(argList) {
    var opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
    } else args = Array.from(argList);
    return [
        opts,
        args
    ];
}
/**
 * Timestamp to use for cached zone offset guesses (exposed for test)
 */ var $10b9906fb633b71f$var$zoneOffsetTs;
/**
 * Cache for zone offset guesses (exposed for test).
 *
 * This optimizes quickDT via guessOffsetForZone to avoid repeated calls of
 * zone.offset().
 */ var $10b9906fb633b71f$var$zoneOffsetGuessCache = {};
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ var $10b9906fb633b71f$var$DateTime = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @access private
   */ function DateTime(config) {
        var zone = config.zone || $10b9906fb633b71f$var$Settings.defaultZone;
        var invalid = config.invalid || (Number.isNaN(config.ts) ? new $10b9906fb633b71f$var$Invalid("invalid input") : null) || (!zone.isValid ? $10b9906fb633b71f$var$unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = $10b9906fb633b71f$var$isUndefined(config.ts) ? $10b9906fb633b71f$var$Settings.now() : config.ts;
        var c = null, o = null;
        if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
                var _ref = [
                    config.old.c,
                    config.old.o
                ];
                c = _ref[0];
                o = _ref[1];
            } else {
                // If an offset has been passed and we have not been called from
                // clone(), we can trust it and avoid the offset calculation.
                var ot = $10b9906fb633b71f$var$isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
                c = $10b9906fb633b71f$var$tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new $10b9906fb633b71f$var$Invalid("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || $10b9906fb633b71f$var$Locale.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.localWeekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ DateTime.now = function now() {
        return new DateTime({});
    } /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ ;
    DateTime.local = function local() {
        var _lastOpts = $10b9906fb633b71f$var$lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        return $10b9906fb633b71f$var$quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */ ;
    DateTime.utc = function utc() {
        var _lastOpts2 = $10b9906fb633b71f$var$lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        opts.zone = $10b9906fb633b71f$var$FixedOffsetZone.utcInstance;
        return $10b9906fb633b71f$var$quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */ ;
    DateTime.fromJSDate = function fromJSDate(date, options) {
        if (options === void 0) options = {};
        var ts = $10b9906fb633b71f$var$isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) return DateTime.invalid("invalid input");
        var zoneToUse = $10b9906fb633b71f$var$normalizeZone(options.zone, $10b9906fb633b71f$var$Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid($10b9906fb633b71f$var$unsupportedZone(zoneToUse));
        return new DateTime({
            ts: ts,
            zone: zoneToUse,
            loc: $10b9906fb633b71f$var$Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromMillis = function fromMillis(milliseconds, options) {
        if (options === void 0) options = {};
        if (!$10b9906fb633b71f$var$isNumber(milliseconds)) throw new $10b9906fb633b71f$var$InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
        else if (milliseconds < -$10b9906fb633b71f$var$MAX_DATE || milliseconds > $10b9906fb633b71f$var$MAX_DATE) // this isn't perfect because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
        else return new DateTime({
            ts: milliseconds,
            zone: $10b9906fb633b71f$var$normalizeZone(options.zone, $10b9906fb633b71f$var$Settings.defaultZone),
            loc: $10b9906fb633b71f$var$Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromSeconds = function fromSeconds(seconds, options) {
        if (options === void 0) options = {};
        if (!$10b9906fb633b71f$var$isNumber(seconds)) throw new $10b9906fb633b71f$var$InvalidArgumentError("fromSeconds requires a numerical input");
        else return new DateTime({
            ts: seconds * 1000,
            zone: $10b9906fb633b71f$var$normalizeZone(options.zone, $10b9906fb633b71f$var$Settings.defaultZone),
            loc: $10b9906fb633b71f$var$Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */ ;
    DateTime.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        obj = obj || {};
        var zoneToUse = $10b9906fb633b71f$var$normalizeZone(opts.zone, $10b9906fb633b71f$var$Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid($10b9906fb633b71f$var$unsupportedZone(zoneToUse));
        var loc = $10b9906fb633b71f$var$Locale.fromObject(opts);
        var normalized = $10b9906fb633b71f$var$normalizeObject(obj, $10b9906fb633b71f$var$normalizeUnitWithLocalWeeks);
        var _usesLocalWeekValues = $10b9906fb633b71f$var$usesLocalWeekValues(normalized, loc), minDaysInFirstWeek = _usesLocalWeekValues.minDaysInFirstWeek, startOfWeek = _usesLocalWeekValues.startOfWeek;
        var tsNow = $10b9906fb633b71f$var$Settings.now(), offsetProvis = !$10b9906fb633b71f$var$isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !$10b9906fb633b71f$var$isUndefined(normalized.ordinal), containsGregorYear = !$10b9906fb633b71f$var$isUndefined(normalized.year), containsGregorMD = !$10b9906fb633b71f$var$isUndefined(normalized.month) || !$10b9906fb633b71f$var$isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        // configure ourselves to deal with gregorian dates or week stuff
        var units, defaultValues, objNow = $10b9906fb633b71f$var$tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = $10b9906fb633b71f$var$orderedWeekUnits;
            defaultValues = $10b9906fb633b71f$var$defaultWeekUnitValues;
            objNow = $10b9906fb633b71f$var$gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
        } else if (containsOrdinal) {
            units = $10b9906fb633b71f$var$orderedOrdinalUnits;
            defaultValues = $10b9906fb633b71f$var$defaultOrdinalUnitValues;
            objNow = $10b9906fb633b71f$var$gregorianToOrdinal(objNow);
        } else {
            units = $10b9906fb633b71f$var$orderedUnits;
            defaultValues = $10b9906fb633b71f$var$defaultUnitValues;
        }
        // set default values for missing stuff
        var foundFirst = false;
        for(var _iterator2 = $10b9906fb633b71f$var$_createForOfIteratorHelperLoose(units), _step2; !(_step2 = _iterator2()).done;){
            var u = _step2.value;
            var v = normalized[u];
            if (!$10b9906fb633b71f$var$isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        }
        // make sure the values we have are in range
        var higherOrderInvalid = useWeekData ? $10b9906fb633b71f$var$hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? $10b9906fb633b71f$var$hasInvalidOrdinalData(normalized) : $10b9906fb633b71f$var$hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || $10b9906fb633b71f$var$hasInvalidTimeData(normalized);
        if (invalid) return DateTime.invalid(invalid);
        // compute the actual time
        var gregorian = useWeekData ? $10b9906fb633b71f$var$weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? $10b9906fb633b71f$var$ordinalToGregorian(normalized) : normalized, _objToTS2 = $10b9906fb633b71f$var$objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc: loc
        });
        // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
        if (!inst.isValid) return DateTime.invalid(inst.invalid);
        return inst;
    } /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */ ;
    DateTime.fromISO = function fromISO(text, opts) {
        if (opts === void 0) opts = {};
        var _parseISODate = $10b9906fb633b71f$var$parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
        return $10b9906fb633b71f$var$parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    } /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */ ;
    DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
        if (opts === void 0) opts = {};
        var _parseRFC2822Date = $10b9906fb633b71f$var$parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
        return $10b9906fb633b71f$var$parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    } /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */ ;
    DateTime.fromHTTP = function fromHTTP(text, opts) {
        if (opts === void 0) opts = {};
        var _parseHTTPDate = $10b9906fb633b71f$var$parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
        return $10b9906fb633b71f$var$parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    } /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromFormat = function fromFormat(text, fmt, opts) {
        if (opts === void 0) opts = {};
        if ($10b9906fb633b71f$var$isUndefined(text) || $10b9906fb633b71f$var$isUndefined(fmt)) throw new $10b9906fb633b71f$var$InvalidArgumentError("fromFormat requires an input string and a format");
        var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = $10b9906fb633b71f$var$Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        }), _parseFromTokens = $10b9906fb633b71f$var$parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
        if (invalid) return DateTime.invalid(invalid);
        else return $10b9906fb633b71f$var$parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
    } /**
   * @deprecated use fromFormat instead
   */ ;
    DateTime.fromString = function fromString(text, fmt, opts) {
        if (opts === void 0) opts = {};
        return DateTime.fromFormat(text, fmt, opts);
    } /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */ ;
    DateTime.fromSQL = function fromSQL(text, opts) {
        if (opts === void 0) opts = {};
        var _parseSQL = $10b9906fb633b71f$var$parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
        return $10b9906fb633b71f$var$parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    } /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */ ;
    DateTime.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new $10b9906fb633b71f$var$InvalidArgumentError("need to specify a reason the DateTime is invalid");
        var invalid = reason instanceof $10b9906fb633b71f$var$Invalid ? reason : new $10b9906fb633b71f$var$Invalid(reason, explanation);
        if ($10b9906fb633b71f$var$Settings.throwOnInvalid) throw new $10b9906fb633b71f$var$InvalidDateTimeError(invalid);
        else return new DateTime({
            invalid: invalid
        });
    } /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    DateTime.isDateTime = function isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    } /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.parseFormatForOpts = function parseFormatForOpts(formatOpts, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var tokenList = $10b9906fb633b71f$var$formatOptsToTokens(formatOpts, $10b9906fb633b71f$var$Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map(function(t) {
            return t ? t.val : null;
        }).join("");
    } /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.expandFormat = function expandFormat(fmt, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var expanded = $10b9906fb633b71f$var$expandMacroTokens($10b9906fb633b71f$var$Formatter.parseFormat(fmt), $10b9906fb633b71f$var$Locale.fromObject(localeOpts));
        return expanded.map(function(t) {
            return t.val;
        }).join("");
    };
    DateTime.resetCache = function resetCache() {
        $10b9906fb633b71f$var$zoneOffsetTs = undefined;
        $10b9906fb633b71f$var$zoneOffsetGuessCache = {};
    } /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */ ;
    var _proto = DateTime.prototype;
    _proto.get = function get(unit) {
        return this[unit];
    } /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */ ;
    /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */ _proto.getPossibleOffsets = function getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) return [
            this
        ];
        var dayMs = 86400000;
        var minuteMs = 60000;
        var localTS = $10b9906fb633b71f$var$objToLocalTS(this.c);
        var oEarlier = this.zone.offset(localTS - dayMs);
        var oLater = this.zone.offset(localTS + dayMs);
        var o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        var o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) return [
            this
        ];
        var ts1 = localTS - o1 * minuteMs;
        var ts2 = localTS - o2 * minuteMs;
        var c1 = $10b9906fb633b71f$var$tsToObj(ts1, o1);
        var c2 = $10b9906fb633b71f$var$tsToObj(ts2, o2);
        if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) return [
            $10b9906fb633b71f$var$clone(this, {
                ts: ts1
            }),
            $10b9906fb633b71f$var$clone(this, {
                ts: ts2
            })
        ];
        return [
            this
        ];
    } /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */ ;
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
        if (opts === void 0) opts = {};
        var _Formatter$create$res = $10b9906fb633b71f$var$Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
        return {
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: calendar
        };
    } /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */ ;
    _proto.toUTC = function toUTC(offset, opts) {
        if (offset === void 0) offset = 0;
        if (opts === void 0) opts = {};
        return this.setZone($10b9906fb633b71f$var$FixedOffsetZone.instance(offset), opts);
    } /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */ ;
    _proto.toLocal = function toLocal() {
        return this.setZone($10b9906fb633b71f$var$Settings.defaultZone);
    } /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ ;
    _proto.setZone = function setZone(zone, _temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
        zone = $10b9906fb633b71f$var$normalizeZone(zone, $10b9906fb633b71f$var$Settings.defaultZone);
        if (zone.equals(this.zone)) return this;
        else if (!zone.isValid) return DateTime.invalid($10b9906fb633b71f$var$unsupportedZone(zone));
        else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                var offsetGuess = zone.offset(this.ts);
                var asObj = this.toObject();
                var _objToTS3 = $10b9906fb633b71f$var$objToTS(asObj, offsetGuess, zone);
                newTS = _objToTS3[0];
            }
            return $10b9906fb633b71f$var$clone(this, {
                ts: newTS,
                zone: zone
            });
        }
    } /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */ ;
    _proto.reconfigure = function reconfigure(_temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: outputCalendar
        });
        return $10b9906fb633b71f$var$clone(this, {
            loc: loc
        });
    } /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */ ;
    _proto.setLocale = function setLocale(locale) {
        return this.reconfigure({
            locale: locale
        });
    } /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var normalized = $10b9906fb633b71f$var$normalizeObject(values, $10b9906fb633b71f$var$normalizeUnitWithLocalWeeks);
        var _usesLocalWeekValues2 = $10b9906fb633b71f$var$usesLocalWeekValues(normalized, this.loc), minDaysInFirstWeek = _usesLocalWeekValues2.minDaysInFirstWeek, startOfWeek = _usesLocalWeekValues2.startOfWeek;
        var settingWeekStuff = !$10b9906fb633b71f$var$isUndefined(normalized.weekYear) || !$10b9906fb633b71f$var$isUndefined(normalized.weekNumber) || !$10b9906fb633b71f$var$isUndefined(normalized.weekday), containsOrdinal = !$10b9906fb633b71f$var$isUndefined(normalized.ordinal), containsGregorYear = !$10b9906fb633b71f$var$isUndefined(normalized.year), containsGregorMD = !$10b9906fb633b71f$var$isUndefined(normalized.month) || !$10b9906fb633b71f$var$isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new $10b9906fb633b71f$var$ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var mixed;
        if (settingWeekStuff) mixed = $10b9906fb633b71f$var$weekToGregorian($10b9906fb633b71f$var$_extends({}, $10b9906fb633b71f$var$gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek), normalized), minDaysInFirstWeek, startOfWeek);
        else if (!$10b9906fb633b71f$var$isUndefined(normalized.ordinal)) mixed = $10b9906fb633b71f$var$ordinalToGregorian($10b9906fb633b71f$var$_extends({}, $10b9906fb633b71f$var$gregorianToOrdinal(this.c), normalized));
        else {
            mixed = $10b9906fb633b71f$var$_extends({}, this.toObject(), normalized);
            // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if ($10b9906fb633b71f$var$isUndefined(normalized.day)) mixed.day = Math.min($10b9906fb633b71f$var$daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        var _objToTS4 = $10b9906fb633b71f$var$objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
        return $10b9906fb633b71f$var$clone(this, {
            ts: ts,
            o: o
        });
    } /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = $10b9906fb633b71f$var$Duration.fromDurationLike(duration);
        return $10b9906fb633b71f$var$clone(this, $10b9906fb633b71f$var$adjustTime(this, dur));
    } /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = $10b9906fb633b71f$var$Duration.fromDurationLike(duration).negate();
        return $10b9906fb633b71f$var$clone(this, $10b9906fb633b71f$var$adjustTime(this, dur));
    } /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ ;
    _proto.startOf = function startOf(unit, _temp3) {
        var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$useLocaleWeeks = _ref4.useLocaleWeeks, useLocaleWeeks = _ref4$useLocaleWeeks === void 0 ? false : _ref4$useLocaleWeeks;
        if (!this.isValid) return this;
        var o = {}, normalizedUnit = $10b9906fb633b71f$var$Duration.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
        }
        if (normalizedUnit === "weeks") {
            if (useLocaleWeeks) {
                var startOfWeek = this.loc.getStartOfWeek();
                var weekday = this.weekday;
                if (weekday < startOfWeek) o.weekNumber = this.weekNumber - 1;
                o.weekday = startOfWeek;
            } else o.weekday = 1;
        }
        if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    } /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ ;
    _proto.endOf = function endOf(unit, opts) {
        var _this$plus;
        return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit, opts).minus(1) : this;
    } /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? $10b9906fb633b71f$var$Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : $10b9906fb633b71f$var$INVALID;
    } /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
        if (formatOpts === void 0) formatOpts = $10b9906fb633b71f$var$DATE_SHORT;
        if (opts === void 0) opts = {};
        return this.isValid ? $10b9906fb633b71f$var$Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : $10b9906fb633b71f$var$INVALID;
    } /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */ ;
    _proto.toLocaleParts = function toLocaleParts(opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? $10b9906fb633b71f$var$Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */ ;
    _proto.toISO = function toISO(_temp4) {
        var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format, _ref5$suppressSeconds = _ref5.suppressSeconds, suppressSeconds = _ref5$suppressSeconds === void 0 ? false : _ref5$suppressSeconds, _ref5$suppressMillise = _ref5.suppressMilliseconds, suppressMilliseconds = _ref5$suppressMillise === void 0 ? false : _ref5$suppressMillise, _ref5$includeOffset = _ref5.includeOffset, includeOffset = _ref5$includeOffset === void 0 ? true : _ref5$includeOffset, _ref5$extendedZone = _ref5.extendedZone, extendedZone = _ref5$extendedZone === void 0 ? false : _ref5$extendedZone;
        if (!this.isValid) return null;
        var ext = format === "extended";
        var c = $10b9906fb633b71f$var$_toISODate(this, ext);
        c += "T";
        c += $10b9906fb633b71f$var$_toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate(_temp5) {
        var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
        if (!this.isValid) return null;
        return $10b9906fb633b71f$var$_toISODate(this, format === "extended");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */ ;
    _proto.toISOWeekDate = function toISOWeekDate() {
        return $10b9906fb633b71f$var$toTechFormat(this, "kkkk-'W'WW-c");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(_temp6) {
        var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$suppressMillise = _ref7.suppressMilliseconds, suppressMilliseconds = _ref7$suppressMillise === void 0 ? false : _ref7$suppressMillise, _ref7$suppressSeconds = _ref7.suppressSeconds, suppressSeconds = _ref7$suppressSeconds === void 0 ? false : _ref7$suppressSeconds, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includePrefix = _ref7.includePrefix, includePrefix = _ref7$includePrefix === void 0 ? false : _ref7$includePrefix, _ref7$extendedZone = _ref7.extendedZone, extendedZone = _ref7$extendedZone === void 0 ? false : _ref7$extendedZone, _ref7$format = _ref7.format, format = _ref7$format === void 0 ? "extended" : _ref7$format;
        if (!this.isValid) return null;
        var c = includePrefix ? "T" : "";
        return c + $10b9906fb633b71f$var$_toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    } /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ ;
    _proto.toRFC2822 = function toRFC2822() {
        return $10b9906fb633b71f$var$toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    } /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */ ;
    _proto.toHTTP = function toHTTP() {
        return $10b9906fb633b71f$var$toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */ ;
    _proto.toSQLDate = function toSQLDate() {
        if (!this.isValid) return null;
        return $10b9906fb633b71f$var$_toISODate(this, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQLTime = function toSQLTime(_temp7) {
        var _ref8 = _temp7 === void 0 ? {} : _temp7, _ref8$includeOffset = _ref8.includeOffset, includeOffset = _ref8$includeOffset === void 0 ? true : _ref8$includeOffset, _ref8$includeZone = _ref8.includeZone, includeZone = _ref8$includeZone === void 0 ? false : _ref8$includeZone, _ref8$includeOffsetSp = _ref8.includeOffsetSpace, includeOffsetSpace = _ref8$includeOffsetSp === void 0 ? true : _ref8$includeOffsetSp;
        var fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            if (includeOffsetSpace) fmt += " ";
            if (includeZone) fmt += "z";
            else if (includeOffset) fmt += "ZZ";
        }
        return $10b9906fb633b71f$var$toTechFormat(this, fmt, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQL = function toSQL(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        return this.toSQLDate() + " " + this.toSQLTime(opts);
    } /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.isValid ? this.toISO() : $10b9906fb633b71f$var$INVALID;
    } /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "DateTime { ts: " + this.toISO() + ", zone: " + this.zone.name + ", locale: " + this.locale + " }";
        else return "DateTime { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        return this.isValid ? this.ts : NaN;
    } /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toSeconds = function toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    } /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */ ;
    _proto.toUnixInteger = function toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1000) : NaN;
    } /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toBSON = function toBSON() {
        return this.toJSDate();
    } /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return {};
        var base = $10b9906fb633b71f$var$_extends({}, this.c);
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    } /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toJSDate = function toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    } /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */ ;
    _proto.diff = function diff(otherDateTime, unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        if (!this.isValid || !otherDateTime.isValid) return $10b9906fb633b71f$var$Duration.invalid("created by diffing an invalid DateTime");
        var durOpts = $10b9906fb633b71f$var$_extends({
            locale: this.locale,
            numberingSystem: this.numberingSystem
        }, opts);
        var units = $10b9906fb633b71f$var$maybeArray(unit).map($10b9906fb633b71f$var$Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = $10b9906fb633b71f$var$_diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    } /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ ;
    _proto.diffNow = function diffNow(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        return this.diff(DateTime.now(), unit, opts);
    } /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */ ;
    _proto.until = function until(otherDateTime) {
        return this.isValid ? $10b9906fb633b71f$var$Interval.fromDateTimes(this, otherDateTime) : this;
    } /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(otherDateTime, unit, opts) {
        if (!this.isValid) return false;
        var inputMs = otherDateTime.valueOf();
        var adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
    } /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    } /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */ ;
    _proto.toRelative = function toRelative(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        var base = options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        var units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        var unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return $10b9906fb633b71f$var$diffRelative(base, this.plus(padding), $10b9906fb633b71f$var$_extends({}, options, {
            numeric: "always",
            units: units,
            unit: unit
        }));
    } /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */ ;
    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        return $10b9906fb633b71f$var$diffRelative(options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), this, $10b9906fb633b71f$var$_extends({}, options, {
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        }));
    } /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */ ;
    DateTime.min = function min() {
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        if (!dateTimes.every(DateTime.isDateTime)) throw new $10b9906fb633b71f$var$InvalidArgumentError("min requires all arguments be DateTimes");
        return $10b9906fb633b71f$var$bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.min);
    } /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */ ;
    DateTime.max = function max() {
        for(var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)dateTimes[_key2] = arguments[_key2];
        if (!dateTimes.every(DateTime.isDateTime)) throw new $10b9906fb633b71f$var$InvalidArgumentError("max requires all arguments be DateTimes");
        return $10b9906fb633b71f$var$bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.max);
    } /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */ ;
    DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
        if (options === void 0) options = {};
        var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = $10b9906fb633b71f$var$Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        return $10b9906fb633b71f$var$explainFromTokens(localeToUse, text, fmt);
    } /**
   * @deprecated use fromFormatExplain instead
   */ ;
    DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
        if (options === void 0) options = {};
        return DateTime.fromFormatExplain(text, fmt, options);
    } /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */ ;
    DateTime.buildFormatParser = function buildFormatParser(fmt, options) {
        if (options === void 0) options = {};
        var _options2 = options, _options2$locale = _options2.locale, locale = _options2$locale === void 0 ? null : _options2$locale, _options2$numberingSy = _options2.numberingSystem, numberingSystem = _options2$numberingSy === void 0 ? null : _options2$numberingSy, localeToUse = $10b9906fb633b71f$var$Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        return new $10b9906fb633b71f$var$TokenParser(localeToUse, fmt);
    } /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */ ;
    DateTime.fromFormatParser = function fromFormatParser(text, formatParser, opts) {
        if (opts === void 0) opts = {};
        if ($10b9906fb633b71f$var$isUndefined(text) || $10b9906fb633b71f$var$isUndefined(formatParser)) throw new $10b9906fb633b71f$var$InvalidArgumentError("fromFormatParser requires an input string and a format parser");
        var _opts2 = opts, _opts2$locale = _opts2.locale, locale = _opts2$locale === void 0 ? null : _opts2$locale, _opts2$numberingSyste = _opts2.numberingSystem, numberingSystem = _opts2$numberingSyste === void 0 ? null : _opts2$numberingSyste, localeToUse = $10b9906fb633b71f$var$Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        if (!localeToUse.equals(formatParser.locale)) throw new $10b9906fb633b71f$var$InvalidArgumentError("fromFormatParser called with a locale of " + localeToUse + ", " + ("but the format parser was created for " + formatParser.locale));
        var _formatParser$explain = formatParser.explainFromTokens(text), result = _formatParser$explain.result, zone = _formatParser$explain.zone, specificOffset = _formatParser$explain.specificOffset, invalidReason = _formatParser$explain.invalidReason;
        if (invalidReason) return DateTime.invalid(invalidReason);
        else return $10b9906fb633b71f$var$parseDataToDateTime(result, zone, opts, "format " + formatParser.format, text, specificOffset);
    } /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */ ;
    $10b9906fb633b71f$var$_createClass(DateTime, [
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        },
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "outputCalendar",
            get: function get() {
                return this.isValid ? this.loc.outputCalendar : null;
            }
        },
        {
            key: "zone",
            get: function get() {
                return this._zone;
            }
        },
        {
            key: "zoneName",
            get: function get() {
                return this.isValid ? this.zone.name : null;
            }
        },
        {
            key: "year",
            get: function get() {
                return this.isValid ? this.c.year : NaN;
            }
        },
        {
            key: "quarter",
            get: function get() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            }
        },
        {
            key: "month",
            get: function get() {
                return this.isValid ? this.c.month : NaN;
            }
        },
        {
            key: "day",
            get: function get() {
                return this.isValid ? this.c.day : NaN;
            }
        },
        {
            key: "hour",
            get: function get() {
                return this.isValid ? this.c.hour : NaN;
            }
        },
        {
            key: "minute",
            get: function get() {
                return this.isValid ? this.c.minute : NaN;
            }
        },
        {
            key: "second",
            get: function get() {
                return this.isValid ? this.c.second : NaN;
            }
        },
        {
            key: "millisecond",
            get: function get() {
                return this.isValid ? this.c.millisecond : NaN;
            }
        },
        {
            key: "weekYear",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "weekNumber",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "weekday",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedWeekData(this).weekday : NaN;
            }
        },
        {
            key: "isWeekend",
            get: function get() {
                return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
            }
        },
        {
            key: "localWeekday",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedLocalWeekData(this).weekday : NaN;
            }
        },
        {
            key: "localWeekNumber",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedLocalWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "localWeekYear",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$possiblyCachedLocalWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "ordinal",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$gregorianToOrdinal(this.c).ordinal : NaN;
            }
        },
        {
            key: "monthShort",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$Info.months("short", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "monthLong",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$Info.months("long", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "weekdayShort",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$Info.weekdays("short", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "weekdayLong",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$Info.weekdays("long", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "offset",
            get: function get() {
                return this.isValid ? +this.o : NaN;
            }
        },
        {
            key: "offsetNameShort",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "short",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "offsetNameLong",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "long",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "isOffsetFixed",
            get: function get() {
                return this.isValid ? this.zone.isUniversal : null;
            }
        },
        {
            key: "isInDST",
            get: function get() {
                if (this.isOffsetFixed) return false;
                else return this.offset > this.set({
                    month: 1,
                    day: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset;
            }
        },
        {
            key: "isInLeapYear",
            get: function get() {
                return $10b9906fb633b71f$var$isLeapYear(this.year);
            }
        },
        {
            key: "daysInMonth",
            get: function get() {
                return $10b9906fb633b71f$var$daysInMonth(this.year, this.month);
            }
        },
        {
            key: "daysInYear",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$daysInYear(this.year) : NaN;
            }
        },
        {
            key: "weeksInWeekYear",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$weeksInWeekYear(this.weekYear) : NaN;
            }
        },
        {
            key: "weeksInLocalWeekYear",
            get: function get() {
                return this.isValid ? $10b9906fb633b71f$var$weeksInWeekYear(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
            }
        }
    ], [
        {
            key: "DATE_SHORT",
            get: function get() {
                return $10b9906fb633b71f$var$DATE_SHORT;
            }
        },
        {
            key: "DATE_MED",
            get: function get() {
                return $10b9906fb633b71f$var$DATE_MED;
            }
        },
        {
            key: "DATE_MED_WITH_WEEKDAY",
            get: function get() {
                return $10b9906fb633b71f$var$DATE_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATE_FULL",
            get: function get() {
                return $10b9906fb633b71f$var$DATE_FULL;
            }
        },
        {
            key: "DATE_HUGE",
            get: function get() {
                return $10b9906fb633b71f$var$DATE_HUGE;
            }
        },
        {
            key: "TIME_SIMPLE",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_SIMPLE;
            }
        },
        {
            key: "TIME_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_WITH_SECONDS;
            }
        },
        {
            key: "TIME_WITH_SHORT_OFFSET",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_WITH_LONG_OFFSET",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_WITH_LONG_OFFSET;
            }
        },
        {
            key: "TIME_24_SIMPLE",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_24_SIMPLE;
            }
        },
        {
            key: "TIME_24_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_24_WITH_SECONDS;
            }
        },
        {
            key: "TIME_24_WITH_SHORT_OFFSET",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_24_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_24_WITH_LONG_OFFSET",
            get: function get() {
                return $10b9906fb633b71f$var$TIME_24_WITH_LONG_OFFSET;
            }
        },
        {
            key: "DATETIME_SHORT",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_SHORT;
            }
        },
        {
            key: "DATETIME_SHORT_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_SHORT_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_MED;
            }
        },
        {
            key: "DATETIME_MED_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_MED_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED_WITH_WEEKDAY",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATETIME_FULL",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_FULL;
            }
        },
        {
            key: "DATETIME_FULL_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_FULL_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_HUGE",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_HUGE;
            }
        },
        {
            key: "DATETIME_HUGE_WITH_SECONDS",
            get: function get() {
                return $10b9906fb633b71f$var$DATETIME_HUGE_WITH_SECONDS;
            }
        }
    ]);
    return DateTime;
}(Symbol.for("nodejs.util.inspect.custom"));
function $10b9906fb633b71f$var$friendlyDateTime(dateTimeish) {
    if ($10b9906fb633b71f$var$DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && $10b9906fb633b71f$var$isNumber(dateTimeish.valueOf())) return $10b9906fb633b71f$var$DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return $10b9906fb633b71f$var$DateTime.fromObject(dateTimeish);
    else throw new $10b9906fb633b71f$var$InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
}
var $10b9906fb633b71f$var$VERSION = "3.5.0";
$10b9906fb633b71f$exports.DateTime = $10b9906fb633b71f$var$DateTime;
$10b9906fb633b71f$exports.Duration = $10b9906fb633b71f$var$Duration;
$10b9906fb633b71f$exports.FixedOffsetZone = $10b9906fb633b71f$var$FixedOffsetZone;
$10b9906fb633b71f$exports.IANAZone = $10b9906fb633b71f$var$IANAZone;
$10b9906fb633b71f$exports.Info = $10b9906fb633b71f$var$Info;
$10b9906fb633b71f$exports.Interval = $10b9906fb633b71f$var$Interval;
$10b9906fb633b71f$exports.InvalidZone = $10b9906fb633b71f$var$InvalidZone;
$10b9906fb633b71f$exports.Settings = $10b9906fb633b71f$var$Settings;
$10b9906fb633b71f$exports.SystemZone = $10b9906fb633b71f$var$SystemZone;
$10b9906fb633b71f$exports.VERSION = $10b9906fb633b71f$var$VERSION;
$10b9906fb633b71f$exports.Zone = $10b9906fb633b71f$var$Zone;



var $040001cdf6cad6dd$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    ha-card {
        --page-width: 1920px;
        --page-height: 1080px;
        --day-per-week: 7;
        --rows: 36;
        width: var(--page-width);
        height: var(--page-height);
        
    }

    ha-card.nobackground {
        border: none !important;
        background-color: transparent !important;
        box-shadow: none !important;
    }

    .card-content {
        /* grid-template-columns: repeat(7, 14%);
        grid-template-rows: repeat(20, 3%); */
        display: grid;
        background-color: black;    
        padding: 0px;
        grid-template-columns: repeat(var(--day-per-week), calc(var(--page-width) / var(--day-per-week)));
        grid-template-rows: repeat(var(--rows) , calc(var(--page-height) / var(--rows)));
    }

    .grid-item {
        position: relative;    
        text-align: center;
        margin: 4px;
    }

    span.icon {
        vertical-align: middle;
        height: 100%;
        display: inline-block;
    }

    img.icon {
        height: 100%;
    }

    .event {
        background-color: antiquewhite;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .date {
        background-color: aquamarine;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .today {
        background-color: red;
    }   

    .text, .month, .number {
        margin: 2px;
    }

    .container.hasActions {
      cursor: pointer;
    }

    .container .legend {
        width: 100%;
    }

    .container .legend ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--legend-spacing);
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .container .legend ul li {
        display: block;
        --mdc-icon-size: 16px;
    }
    
    .container .legend ul li.hasToggle {
        cursor: pointer;
    }

    .container .legend ul li.hidden {
        opacity: .5;
    }

    .container .legend ul li ha-icon {
        color: var(--legend-calendar-color, var(--divider-color, #ffffff));
    }

    .container .legend ul li.hidden ha-icon {
        color: var(--divider-color, #ffffff);
    }

    .container .legend ul li.noIcon:before {
        content: '';
        display: inline-block;
        width: var(--legend-dot-size);
        height: var(--legend-dot-size);
        background-color: var(--legend-calendar-color, var(--divider-color, #ffffff));
        border-radius: 50%;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .legend ul li.hidden.noIcon:before {
        background-color: var(--divider-color, #ffffff);
    }

    .container .day {
        position: relative;
        margin: 0 0 var(--days-spacing) 0;
    }

    .container .day .date {
        position: relative;
        z-index: 1;
    }

    .container .day .date .number {
        font-size: var(--day-date-number-font-size);
        line-height: var(--day-date-number-line-height);
    }

    .container .day .date .text {
        font-size: var(--day-date-text-font-size);
    }

    .container .day .weather {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        font-size: var(--weather-temperature-font-size);
        cursor: pointer;
    }

    .container .day .weather .icon {
        display: inline-block;
        vertical-align: middle;
    }

    .container .day .weather .icon img {
        max-width: var(--weather-icon-size);
        max-height: var(--weather-icon-size);
    }

    .container .day .weather div.temperature {
        display: inline-block;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .day .weather .temperature:has(.high) .low:before {
        content: var(--weather-temperature-separator);
    }

    .container .day .events {
        margin-top: var(--events-margin-top);
    }

    .container .day .events .none,
    .container .day .events .more,
    .container .day .events .event {
        margin-bottom: var(--event-spacing);
        background-color: var(--event-background-color);
        border-radius: 0 var(--event-border-radius) var(--event-border-radius) 0;
        font-size: var(--event-font-size);
        line-height: var(--event-line-height);
    }

    .container .day .events .none,
    .container .day .events .more {
        padding: var(--event-padding);
        border-radius: var(--event-border-radius);
    }

    .container .day .events .event {
        display: flex;
        border-left: var(--event-border-width) solid var(--border-color, var(--divider-color, #ffffff));
        cursor: pointer;
    }

    .container .day .events .event .additionalColor {
        width: var(--event-border-width);
        background-color: var(--event-additional-color);
    }

    .container .day .events .event .icon {
        padding: var(--event-padding);
    }

    .container .day .events .event .inner {
        flex-grow: 1;
        padding: var(--event-padding);
    }

    .container .day .events .event .time {
        color: var(--secondary-text-color, #aaaaaa);
        margin: 0 0 3px 0;
    }

    .container .day .events .event .location {
        margin: 3px 0 0 0;
        --mdc-icon-size: var(--event-icon-size);
    }

    .loader {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
    }

    .loader:after {
        content: " ";
        display: block;
        width: 24px;
        height: 24px;
        margin: 4px;
        border-radius: 50%;
        border: 3px solid var(--primary-text-color);
        border-color: var(--primary-text-color) transparent var(--primary-text-color) transparent;
        animation: loader 1.2s linear infinite;
    }

    ha-dialog .calendar,
    ha-dialog .datetime,
    ha-dialog .location {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    ha-dialog .calendar ha-icon,
    ha-dialog .datetime ha-icon,
    ha-dialog .location ha-icon {
        margin-right: 8px;
    }

    ha-dialog .location .info a {
        color: var(--primary-text-color);
    }

    ha-dialog .description {
        border-top: 1px solid var(--primary-text-color);
        margin-top: 16px;
        padding-top: 16px;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @container weekplanner (width <= 1920px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
    }
    
    @container weekplanner (width <= 1280px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-md, 5);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-md, 7);
        }
    }

    @container weekplanner (width <= 1024px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-sm, 3);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-sm, 4);
        }
    }
  
    @container weekplanner (width <= 640px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-xs, 1);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-xs, 2);
        }
    }
`;


var $e2e69367a81f28ac$exports = {};
$e2e69367a81f28ac$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAHlBMVEUAAADL2%2FvK2%2FrH2fnI2vrG2PrJ2%2FvL3fzG2vzI3PwdWi7LAAAAB3RSTlMAFzNfjrze%2FOgtNAAAAdhJREFUeAHt17WC3EAMBuBZ3nIZOqcJVGGqwlSFqQpTFY6yVTiZrUJ3Z%2Btpj3ynBY3Hv6vDr5aGJMOYbetX49CtmsE1bxO9M7DcEVr02aDyt2nJvozxH%2BH1xPH01oAuUOyvwXRoxRUDKdCqAF9Qlj2XKAaX7TbF0EMqk3gNTiD%2BGECRBHaqR0lAnZSjMQG4ZVEDiybQFQm8ynjCrqwJzzIm5GkCvAU8oasSoL4QNXDPIgDLhjdfgSadBA9J3DcpKjTpFXiq4g3YSeIdWAbxAXx68ELcpkmDk9kSBvwnW2cw%2Fzd%2Bv6Ym4DkoQeIX7cOWJPGc0hx3SXBsJiWBQwmPhTXjc4kV%2Fwv8uIoP%2FWvaw0ro7Y4%2Ba95ve5W1Od%2B2S6z4S1FgzdseOdYifuDJeMEOUQ0shHgLnCta7hI7RYnVy7PbbC25X12G0UwN6SYRWTsbZNmEXTS33126oXuCRb8eBUglJH5R%2BPiA3krZuSDBdD91TXaSmuOYP%2F6b%2FoXTGxh3MuXVYaf8SCmFnXbF2x6R9U2gd2G1hD6%2FqMNj341bYWjdEl%2F%2BHevkeRscs5qu2ZjcHav8qBmPvMr4Ic2NZeh4fbW0Yx7VkMvrRRl%2BP3w9vvn0yY0zO8y6tW0BcWLk3nu06KcAAAAASUVORK5CYII%3D";


var $6c2d7344ba65a959$exports = {};
$6c2d7344ba65a959$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAHlBMVEUAAADr6%2Bvn5%2Bfo6Ojo6Ojm5ubq6urp6enk5OTf399QNH53AAAACXRSTlMAIneu2P%2F%2F%2Fz8%2BtLZ6AAACF0lEQVR4Ae2Wt5bUQBBFtfhwIgjxEOJdhHcRtigU4lohtvV2MiW4D1ijr11XpR76lKp3Y45uMq7uvPbq6j9mYmJi6fTD0Ly%2BPNtr%2FZmg3Nvb3z8KiQ9eiFMf8HF343r4B%2BDDbvW%2FQi5guVy%2FP2Q0QHuiKDwyAn6U6g8EK%2BBOOcAKH8sBVsDF4pBmYJv2vVd%2FJIwKCJ0jHHIEPPda5AnfnVUUPAEzZ4w8wZmKo8GOqvLVmTVPcDoRfKEdq99nBSRqakN4fbkzfXaFFd5JulmctgaJuQjAk%2FIgJeqeINxNwrlCixD7FShdYWFYIUZ8c6ehyYSe9R2GTf7GDRBhRRPSOdKWBPR9zVBFl6LfIkkgkvK0FP0ASVghloSobWrdAEmoiTThx2inAdMkYklANzKsMMIKEcWdBFy0E9cYYbueWBK%2B2KWBHMz7mraRhGWz%2BGAFIomIW8jqOOzUi7CyIsZOgggHvPbLBiKB4xbfsy2KMWoawGIiUGAlCbyFCjfgEhcCLU6dYwVhpy5F6B46AJc5cYIAFZYYHjLHKUGXq9%2BJSMh4rsJBV9CdoKSH3hF2hCHAnDTnSwHggdeL49URpB5Cdv14jDEYecKdqhwRkSfEWVWO0B6khLfZU4W9gJQQ8%2FvQX6c%2BxiHhZZVzDQ6sZlflLD3ECHFIoLv2QnCL%2FYT4ZPSiu2KrmcGM%2BqZ3lX7aj3D%2FVFdNTExYNgHAL10vmVlOfQAAAABJRU5ErkJggg%3D%3D";


var $218356dee0db9918$exports = {};
$218356dee0db9918$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAADHx8fKysrJycnIyMjHx8fGxsbDw8PBwcG%2Fv7%2FCwsLCwsK%2Bvr67u7u4uLi3t7e4uLi5ubm4uLhyXqCUAAAAE3RSTlMAFkaMtND6%2F%2F%2F%2FCGT%2F%2F7BAhezMkbzxVAAAAi9JREFUeAHtloeS2zAMRF0JrA60yv9%2FbBQagS2YpOj05PiS6zvYURk8Hv5vOp1Op9M5ns6XawjXy%2Fl0bM80c7oGIr5D4XrKZ4ihgCzTwPARKMFsHR%2FDS4axxWdKHM%2BBFNZ%2FqeN83GTwFdZ%2FimWKDMfTJZDBilZcTsfhniFmgPEKp0yREHS6vwK7jLCivQDbv2eYqFjgxkNiFHAevQKJKyJ4RpoKcNMbMt5yHWm83MZ0Q9ZMfLNANo90EvYAiNMmE9sLeH59KWdfkMtISwFjGQ8ZxkXACqSUiVItmJfbNJYXwzjdlrmeGVLmoHS6D1gh%2BgU%2BMNn8Gh%2Bkmelf2QdeB%2B0%2BSOPcFbD3AfCdPiAd76%2FA1JkiNl4voN0HOl0%2FIa6g6AIGqw%2Bi4IGI1ApsfMUHOt77oKGADZkqPgBQ9kFLQdYHcDeo5APZLZA9HwA1H1QLWnZ9uw863QfExq%2FwATt%2BgQ88OR94uN0HRskHWUT2fcBFsEKkPsgiiZoPeIOe%2FfFYcYaJRmJCtEBpKpDb%2BM0Hog5g%2B6fEjQ%2FknYLMrvdXAJ9pL0DWB%2B4Ykcs0FVR2PYz4q30wdB98Gh8M4w%2F5AErFB7aEwO%2F6AHf0a9YHbsk1%2BcCf%2Fe0L4HxAMMRo9AFW%2FBWkTw8fMPx8BTs%2BsLO%2FvwLWDiKvA%2FGAyz6whfa07AUVzAdbagWMxObsn%2B9wPmgqKO96ZCj4IO4VFM%2F%2BG%2BS7fLC366FIOROrBaVd333Q6XQ6nc4Xua9QVFRZEEsAAAAASUVORK5CYII%3D";


var $f61374c50cb310b4$exports = {};
$f61374c50cb310b4$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAALe0lEQVR4nO2cW4wb1RnH%2F%2BfMjB1vdjfkssJbVtAmTTcNIJVeRFFVSF%2BqKg%2BtgsRbqcRDxRtVBVXSIiFBpUKkipa3XgKRiiLRUiWt2oaqElXghXBRVKhALJCFJJvdyTrJJnuxPfac8%2FXBnt1Zey5nbvYs9U8aOVmPZz5%2F%2F%2FN955zvnDEwYMCAAQMGDBjw%2Fwjr5c0qlcpO27bvY4zdCWCvlHJS1%2FXV94kIQghwzqcAvEdEr%2Bu6%2FuLY2Nh0L%2B3sJZkLMDc3d5Ax9gDnfDLJdaSUU0R0dHx8%2FHBatuWBTASoVCo7hRAnkzrdDynlCU3THvk0REaqAmTteKCVpgCAMQYp5ZSmafs3shA8rQuZpnmciM5m6Xw3RATG2CQRnTVN83gv7pkFiSNgZmbmnkKhcCq5KWo4EeBFs9ncNzEx8UqvbEmDRBFgmubxXjofaKUePwqFwqm5ubmDPTQnMbEjwDTN93uVbjoJioL2%2B1PlcnlPj8xJRKwI6KfzVWCMTZqm%2BX6%2F7VAhsgB5d74D53xDiBBJgI3ifGBtlJT3EZKyAKZpHs%2BD88PyvxvGGDjnB%2FLcMSt1wr0eagYRRQBgbdTUaDRyOUTVw09pDe%2ByNSM7HME456fQ4%2BKjCqEpKO85VBVN03L5XQJbRKVS2UlEZ3tljApRU1AnnPNdeaodBUaAEOJkrwzpFXn7Tr4R8Gls%2FQ55igLfCMhbS0kTIcQv%2B22Dg68AeRjzZwXn%2FEC%2FbXDwHIbmceKSVvpxrjU7O0uWZaFYLAJojZK8Kq22ba9boxZCnE5zPuHZB%2BSx5JCmAAAghIBlWQCwTgQV2qtxJ2zbfiapGJ4CzM%2FPp%2FttE5K28x2q1SqA6AK4IaIp27YfjCtElwCf5tGPG3cEAMlEAFpCxFmf7uqEbdu%2BL5YFGZFV69c0bdXpANaJEQfG2KSU8uzMzMw9UT7XJUB709QABYQQ614BwDCMSMuiXsPQvYktS4msWr8flmWtc2YYTrpyXp3Pcs6fUhWhSwApZS5GP712vkMUETojwN1%2FcM6fUklHXQLE7YQ2Il7ftVgsKovgFwHOq2EYpyqVys6ga3j1AaE3zppetX4%2FJzudc5gIfhHgFjaspJPazri0SOJ81lyGPv%2BG8vleEdA5GgoSISwChBBgjE0GpaIuAfqVe9O49%2BbZl6DXLiqf7%2BVcJwWFnef%2Bu18EOK%2B6rv%2FWz4YuAaKMAtIk8UJLvYKhCycgeTH85BDc8wMHL7%2BoRACAwCjoEqBdeOoZRJTY%2BUQSI9PPA7IBSrjsGzQh83NwWAQAgK7rP%2FK6plcf8F5Em2OTVrorXv0PigtnAF5Idp1i0bP1uxFC%2BDraTxgAYIx5lsC9%2BoDXI1seg9T6GruG0Y%2BfB5jSBo91dNaCVMsRcSIAaG3v6bxWlwC6rr%2BoZEVM0kg5boYu%2FgO8Pg8wDWBAkkuHtX43XpGgkKK%2B3nmdLgHGxsamsxgJpe14ANBqJoYv%2Fg3QknW8UVq%2FG9UICJrces4DiCiVjthxeiZDWxIY%2BfAIQBJrVXX1%2B3SOaqK0%2Fs7rqEaAV6HTT4CjsaxBxk53Ubz8OgqL77k6XnIdEa4T0%2FFuIkRAV6HTU4Dx8fHDbkdGOXpCcwWjHx9zOV8iquPd68FpENb6%2FfAtRRDRibSMS5uRC8fBmtcAxtByfjSymmwGDVHbdA3xfQXQNO2RdM1LB235HErmvwBuJLpOZ%2BvXNM3ziEpQBHgN8X0FaI%2BGejorDkXaGP3oWbTSTfwZb%2BeIR9O0QMeF5Xav4ajKCAgIqYZqmra%2FX7UhL0qXXoGx%2FCHA4rd%2BIYRn7vdyZlheD5qQeQkphDjded9AAcbGxqY557noC1jjOobPv5io3NDZqsPSjF9aCjucz7pfhRDw2roSuh5QLpfvzUMUjJz%2FE5i9BLAAkxVHoaq5PW4EeLV%2Bv4astCAjpdzXTxH06x9g06VT%2Fq1fwfFe67ZhRM39QSMg27af8bqHkgATExOvMMYOKVueJqKBLWePtIecLiLMu%2BI4P63WL4QAEU357ZxTXpJsT856Pioqmf%2BGVj3f6niVnO79ZtS0k1br1zQNtm0%2F6He%2FSGvC5XJ5Ty9F4NZVjJz7I8CLCk5vHZ0rYu4hoQqqdR3V16DWDyg%2BJemmXC7vMU3zfcZYtvuHiDA8fQyQVksA%2FxPX%2Fsl0bKpOw756BpqoQhID5wHzBQKIcdR3rFWJHcHSaPlCCBiGsT%2Foayb6sY4sRTAW%2Fout7z7Z7njdZoYlfdE632uBprNWRTYa%2Bg5cu%2FNXXZHi%2FD%2FJq5Qy9Nnk2NtSyuXyHinloUxGR3YdN5x9trXIAkC9xyWsfiWy1w7ZPqjjEBau726l587Uk7TlM8YOqWxZT7QvaHx8%2FLCUcp%2Bzzz4thmZPgtVMlwBBeInD1o51mrn%2BLi2s7PgmxA1fWJe30%2BgDGGOHVH9cMLVtcKZpHpdSHohTwHJDi%2Bdx47uPt1qop3mKZeeg0jhJEBjmvvwM9KFt696K2ml3flYl7bhJbWdcuVy%2B1zCMXUQ0FTctEUmMfvScj%2FMjLLaErUvIBi7f8gBQ2AIAiSPAGesbhrEr6pMyqW5NHBsbmy6Xy3vaQpyoVquRau%2FcPI1S85P2%2FwjquR8tpztHELIJa%2FNu2ON3Q9f9C3CquZ5zPiWl3Fcul%2FfEefa4Zz%2FcWqvVJovFon94Nxax%2FcxPoMmaullxVuCkhUu3%2FRxydJfn6MUh6O%2BWZaFUKmX3kF5WdP50ca1WWx3Gjsz9HdvNv%2FiXmtNY7pQWrm37FhY%2Be7%2FyLvBSqbT6iCrQKiln%2BphqLzfnXvz9dwAGlAz27a2jdJIxaBGXdtVhBCnIPHfj9w8sbb%2FrtE6N1bf27r01o5t6mNEhfF%2B3p19Z1mBrQ6Wt24ynGCg754OAZg2V4TueWPzMV08zYwWi0Fw9%2Bkn0%2FXwpUhi7GcOYfYjJxh3pZ0N3iQKo1vhr1%2BylI2z2bUDU15%2F6%2BS%2BlfG91%2BpuC3nzu1psuHHsTTC91lZv9CDWv4wQGkBDNTy7p91xvFl%2FTZPcOuNt%2F%2FE%2B1e6dAZwrqawSMXHj5B8KSF8GkHXYutRyr60V9F9Y1nDBFJKpL9d%2Fokr%2B2Vbdy95tl%2FU1BK3M%2FJc4PEqnt7eEG2wFGF0DYFH42ASTQxOYL5me%2F94QEA8uuk4lNXwUgrktAhKd%2FArjBoRU5V0pBRK1rSoEFy%2FjZ0t67LnPOEXX3XC%2FoqwBKEMB1Dq3A4f%2F4i%2FcMeHFFf%2FnSkjimvfprBKq8%2Bw%2Fp2BqDfAtAANcZtKLH7uewH%2FC2m9ZKlR7WySJeS7damyb5FcBxfsF56iJK%2BiAssvLTjdHi2yMs%2Bt7RXpJPAQhgjvOjwgC7bn0w%2B8X7n2xs3Q0uwh%2B8mIhhYlrkTwACuBbT%2BWg9rzG%2FtOlR8fEbS9z8EJAK1didt8e6VxrkSwBqLYKt5fyIMKC6LP56pT78Zzr3Frjvok4H%2Bx%2BOd78UyI8AbefrxZjlKcZAtr20UhMHbzCWwHI35fImNwIkcj4A2HVc3nLn4crnvjGle5Qb8krfBSAAjDPocdMOADCgURfvLAwNP20P3wRh11KzL2v6K8Bq2knmfBJSzC6PHqpdf6fGP3kn%2BjVuuzv%2B%2FRPSVwEYT%2Bh8ACCJ%2BkrjBbLppc1MADJ%2F5YYg%2BipAsRjzUaPVWTBB8KErlS23PcqGJWKOXPtKfyMAlKw%2BJptYYNsev%2FKVh85pFH9l6%2BYEJiSl751wbBihahlvXl5Z%2BZ3%2BxlHEeVx1lVt%2BkZpZUdm4AkiI5To90rBsS5t5q9%2FWxGZjCsCAap0fbUr26vZSHXms86uy8QRgpAvB5mcmf%2FhYs7gDjEJXM0O5KQWz4rLRBGAgpl9dxGP1WmMOrK6ynJxr%2Bj4RiwTDZqsuTprV0SM48wKYs%2FSYlK99N4WLxKOvAiwsR6z9MCwIgUPDhi1oda%2F%2FgAEDBgyIyf8A4n6spjurxDYAAAAASUVORK5CYII%3D";


var $97f20cf04c7da4fc$exports = {};
$97f20cf04c7da4fc$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAyVBMVEUAAADut0371Uv92kX920b%2B2kL92T%2FCyKz92j792Tvvs0jk1s3s4%2BHl4d%2Fr6ujp6Ojr6urn5eTk29ji19Po4tjq6urk2tb81jvp6en60z3r49P32Gnr6OHz1pbo6Ojr28Dj4uLm5ubn5%2Bd%2FxLn8tl7d3d3%2Fsk%2Fk5OTa2tr3v3jh4eH%2FsErW1dTh4OD%2Fr0f%2FrUXiwZr9sE%2F%2BslD0o0P9qkX1pEIP3%2FkL4f0q6P8H5f8A5f8n6P%2F6p0Mc6P8P5%2F8E4f0F5v8C2%2Fsn6P8h4jSJAAAAQ3RSTlMAH1%2Bbzey9Bf%2F%2FSR1mpNHj8b5fNZP%2FT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FxH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2Fl%2F%2F%2F%2F0ayG%2Bq0o7k%2F4%2F07PPNek3pNP7VonwQAAA8hJREFUeAHs0gWiwjAMgGFWDzBfmD%2Fuf0rcgqV9bv8B8i3NJv%2F92CIhldZGiugjpluh3SFwWtj3nj%2FV7hwA6On7fr50jgLg5CuXmM3jJM2yJI%2BL2XGEVY4Cu1S4YMsqw8vi0pL5BAgXFhnelBV2Iuv7AMig8WWK92rSqm3b2tV3AAi4tM3xfk2DXX8WKKCt92lTfARsGs4CBUD4Pk%2BGj4Ft41a4A2jP%2BYgMgESAc5HX%2B2Qs0Lz0FwKEvZFNkQe2d6hrAnj%2FqTn6AM1y%2B7feAMbnACxwPjQQwO%2FKqS8wbICNABAGLNj5ZIUaNtXnDH9hDiArbAmS5C%2FAAmQFWl0LDqhCACQN3XLsIw7ImPlMmK0pLa%2BFxUEgjLp7Y%2B%2B9TRjSg255%2F5f7vwS7IOO55xyqZtD%2B%2FIg%2FqkMBQDRZfQrMvHYCG4EfTNvfHgEGRopZkyxAo9gbmHr8hyRFgUkUQKH91TPekD5maZrmrIlEARqKL5H1R1lWFEUa3CW6sfoqkJcIgEoemLTFW7QhPmY2kCpxgAbSQ8YG7RIbSNMqJ6GfxsJrilFcwm%2FqQFUplgaoL3to8Ee135zqgFI5SwMz0U8FNkgl0DeBqg6gIPJ7bmp74jhhYwNpE8AaZIGp4BDsEzAPARS8ayAQPuX52xMwT4G8hqWBwF8mxuijeQl4C0SCLQKrx0F4Ao4A0OHAwhNonx%2FGcGkeAwoBX4FemXn%2F9u%2Fz15HxBVAIBPotH8PrCDyB5wAKwFkg8pyxf5NI89G8BPxrkO8Q6E%2BsP8qeAk0BCYst%2BBfQ%2Fvj1xXUAT%2BCB7E6pVPVcoDdWge%2B7Cv6jeeVPgznd3rT2BYatAP0z7zK3%2F%2B8%2FbFadQIDJ7Z%2B2WyHaw9KlB0kBbICZyeHfhP3gl1MPotN1BVxDb34ehv3gv0sPylMTUKoJAE1P6POqJeG3yw6yUx24LsBCd%2FLzrC3yxw65PWEEmgYqL5yni1n%2Fp726QK4YBmIAqgwFrvEHC%2Fkc5vvfqejOZjregrXlvgsoYFl4o0Pud4SN7DL3OsUwEZ9yr20GG8eTyFfOUMQxgq2e%2F7SBX1GWBR2w3aofqKqbpm6pgO29Dn5986APDtg6kVKZunlQbxBk%2B0SrwNA4AxdwivUP5PRUQAa%2FUQJGJkCtwCQBExGgVgC1BNQIoXwg40%2FUQVVIQBEeEEE3N86MIFIBRewS5hhBpAKqYizLsUAg5Q%2FbUSpgR6mAnW2m7JeVTtkvMxGeWWS%2FOMR%2BMdj9EsR%2BMbj9EsTlTKL3SzD79fWfiNgvGrFfgtgvBrFfX%2B%2FfLZ2VqOfdJyPAAAAAAElFTkSuQmCC";


var $13b739558169538f$exports = {};
$13b739558169538f$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAllBMVEUAAAC8y87X3OnY3%2BzU2OXN3%2F3J3Py5usLW3%2B7O3ffF2Pnd3eLl5efp6ern5%2Bfl5ebq6urH2vvp6enj5ObC1Pfo6OjU3vLt0rDk5OT7uWfb29vh4eHxw4n%2Fsk%2Fp3c7W1tb%2FsEr%2Fr0f%2FrET6qkfqokj3p0b0o0T9rEYR4PoL4f0i6P8H5f8A5f8K5v8J5v8A4v0C2%2FsC2fne7Ib2AAAAMnRSTlMAF0uOL77%2FB6Po%2F2HG6v%2Ff%2F%2F%2F%2Ftf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F9BMrIbrKu5E%2Bf%2FbnqaTqTOwt04AAAN7SURBVHgB5JiHdqswDEBZwWQgUxM1zNL5%2F7%2F4HB%2BF%2BhAbqxlnvftG9721lB3918RJmj1Rn23yPI%2BfphdFfkY8bTrb3PA0%2Fy5%2FakDQ73%2F3iLJ9cSgB5CHdx5FFQfq7liyytKwsoMjm7sscSG72J2S3KUm3yedCcateVi6UTMyGX6hw6xJEXblRqipElOysQnqDP5aVL6CRcXqkwo1rzqBaCyjcHu3C5s%2F%2Byo8yVK924eWPe45hLUDsTEEH%2Fl4QsmIEcGcCdIR8E%2FMDdcUJKDhSgUgFewG8gHqlwoW8SGJORHIDaAUIztUu4fjtI1iNnSa0blHyA%2Bqo2Rn0G3ovY2yAG0B9hCVpFCBl%2BYnlF%2BF1G9wye0JuqnK%2FnshW1eGAQiyTtcDea0eNYvg1tfjrCpTCUwMAyAug9BcOHn%2FTdj2ngKGCdAYQhrHr%2BkYXkBXA2hcAt%2F9t1AHGGXDGt%2BnGGWhaHTAFdqAU7BEphNNIgZ4dwD1vyTQgzWQCDTL9WDIvpspseBzfKQDcAMa8KxoN6P0SaIAbcM8ou%2FY3rdabQK8DVAj7sXAGROO4CrxbASowAofwEmjD77%2BBxgAcv2%2FL2dVV4N0OUIEVCN8hqPOG3x0BZwEX1J5AoixoQFaAgHAg9QSEtH4GhndHwFnAJfvIQ6YuAA3IMSIqrAXiyEdx%2BQmgDS8upgSs%2ByXZ%2FENCoAHZAeeU%2BBMi4t74zYaXAYIKfn8ZeIKj1DwgYvxluCTA68ckWi%2F02n96X%2FJheH%2FrrYI7UISfBNKAln7N0M37BnT7D5yXaga3%2FrOdOo0JAAA6%2FSIKkzn1mtM0UQDO4JUfiojDl1v%2FOUznQE%2BBMwu9TFj%2B76WdGCfrANeFRu4jFsJhpwMQnYU%2Bj%2F5f1vSKD4efpZn4115dHEYQA0EULZ0Ux7AY8g%2FObLep56Aye18A%2FRendnyMVbl%2FWHwIe0zvW%2FEx9llMz2xQWIthk5i1M857xwf0DyjElGLgA4t2P90JbGA2eJeJ6U40XGDe8b6cHmQiMM%2FzYfUP6EEYDMx3VryvSKBgxHxvgyJLIDMBC0WUQCQCKzRVAnU8sEDlJODGAwa6lh40DAd2nGnUfah%2FAeG6991hPLDiM8lf4NMC9pMD6%2Bl%2B8Zbz%2FeIZZb94xH4x2P0SxH4x2P0SxH5RyP0SxH5xqP0SxH7RiP0SxH7RZL9%2Bl4tr2oowXbK2IEgAAAAASUVORK5CYII%3D";


var $d5206edf6f950d9b$exports = {};
$d5206edf6f950d9b$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAsVBMVEUAAAD0z2L93U%2F93lL93Ev81D%2F93Ef%2B3Uz72k75zEP93Ej93Ej920X920P920L92kH70z%2F92j%2F92kP92j381EP92Tv92D7%2B2Tv92Tn70jf810L44Yv15afx6c3x7uTv7%2B%2F43G371Dzu7u792Dfp49zcxLbt7Ovm29Xs6%2Bvp4t%2Fx8fH70jXq5OL5zzT4yjP4yzPq05fyvzP4zTP2xjPvyWD0wjHo3L%2F2xjD4yjLm5eTkxIAPtip5AAAAO3RSTlMAF1V5o7zT5foJl%2F%2F%2F%2F%2F%2F%2FR%2F9w%2FyT%2F%2F%2BL%2F8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FbL8tJ6Ib%2F%2F6P%2FnP%2F%2F%2F9P%2F%2F1f%2FdeP%2Fx8TGymgAAAPmSURBVHgB7JSFduswEESfGSSHE7Nkx4%2F%2F%2FwPrVVm0ktvDuaWDczOzOv3x4MEDZ4IwipM0y1eyNImjMPjG8CIsU0JoVe12u%2F0LFUnLsPiW%2BEOckwr4KDgCVR4fvvzho4zQFdlwfKHKTsXX480CIIs2K0KIf0G7EXA%2BH7NwU%2FwlIYQ6CFb2yWXDx88JEQZko7Mg9y1RlIT4CK7H0usSQUokAUUE11saeMyfEj8BGK7pxTk%2FI1sE1%2Frinr9JAAb3%2FX1vIHC5Q%2FGa7%2FeKXg0FKijJZgFQYvkhIfaFEME1RA6cY4K9XdC09kMnUj66kCJoki0D%2BQhsIxWZnI%2BfQBE0dWEURJTK8WoBVNCczAWohPdCIDBXOJmy993685qPC4wV3guQfhgZ45yN49Dn3cpegC8kqPX5B%2FpM3o%2BMf2QUjv07R0TQHLSCmAJkYFyBDa8KfCEg1p44h%2FyecS2sh6GwAq%2BCVnfmENYZuZFxAkOHLwSEGkFJu4lxC2yaRYsjshBQagRp1d%2B5nX4GBbYQkKr5Ae05gBpuN3yhZgnURzrdOc40zzcwIAWaRX2oEeMOsGcDJliWkyL4yZ0Y5xkUWIFFufIv7kgPAjCcrYJEFvx2FbBcGJACi%2FyM%2FnBnBhA8A%2FkGQS0J%2FroLWPdqMBUAQYtcALsCKK4A%2FFUKAJ8F%2F7gP%2FwHGxmGCMk2jFAA2LyT%2FGxcKuYA8UcA3cx9moZAL1E%2FtmYVuI0EMQKfcFa5OWG4nrInHy3D%2F%2F2Fn3ST1MjnivID4PXkZGtuQgI9nQ4lV1c%2BbKa8CAZ9UMFxwgQdV5SgK6M9nMIakzu%2Bwjd1YgNb6A6lQD%2FwRb0TsJwI0tJAoQX6HLw6wn%2Fh8QbeQVmdu5IuI%2FcR76ApnIlXjKPXrzzAGDrROBwehn0iosOJE2jxYS%2F20jGJkf%2FPC60bs11kcIxesarCX%2BvUHBbjgqwYHqV9%2FxlQAMHykq7GR%2BV0AEU6FXLVYC%2Fy8iMAVum6hdiI9kZ0nMMYNIBlBdxBwoPBUBxst0BMJBYAwBlLVyUGi1yX5T4EH1cN2oZ6XEIIB0%2F8w5Ga%2FQM%2FHOgp0LyBmU87X8wCngFUDbPaz7Ez2O0DkqSFu1vPtxEfoBiD%2FjRrGO%2BrJcvYnZ38x4bHmZq0nm3n5uAU06Gd2az2DMvj1R9P8xOawn2h3evJTgJf%2FpMbfICuHybIgYT1aT80jDYchN4ExEgAv6ZJXLORogW0AcNYrFiYtTk73h51yokjVQry8qGoBoYWBIuelvyiBVRthKgj0jG9j%2FC83TeDF%2BuoSeKmNECnAFQCMbOqpy3Hj5%2FYhKl4QX4roweb%2BjZrKlStX%2FgHY0DfPBrPHXQAAAABJRU5ErkJggg%3D%3D";


var $77404da35cba9a11$exports = {};
$77404da35cba9a11$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAS1BMVEUAAADO1fHO1ejZ4fLR2ezd5vbB0vXDzufS4vzP4PzN3vvV3fDk5%2B%2FAyerc5vfu7u7v7%2B%2Ft7e7k5eavwOrT2OO4y%2FDAzOi2ye%2B%2F0vYf7YBFAAAAGHRSTlMAByNNhqbMO%2F%2F%2F%2F2bRFP%2F%2F%2F%2Bv%2F%2F%2F%2F%2F9qxLSnpnAAACKklEQVR4Ae3U2YKzKgzA8QRBXECgdTnv%2F6RH%2B2V2LWLgzl%2Fn%2Bh8NOHDe7XZDUUlVY6G4Vk276voi9cps9U2HkJ1QW51UpfKkg8ws5Uu9QP%2BZL3IC1rS%2FKMhJN%2B1vAjKS1C91xKr5O0BCNqianQE65%2FPvDcC8%2FabcEcjmpdglrf72s37Gdk1TvcxXYNoDFrLo2yOYa0FHIAvVlh0g%2FmS7f3INqFuyMyPnC3R7cp0A5YfB%2BY1zw9C9ILAhxVuKf3JDngFV220TBr9j6CywmW43T3rgst3K%2BUMKgUd3XePfCQJY1PF6iNPAEe2vOBOw8XGOsSXt%2FAkB4SrjT1FwkfYnVSVfgLGkyvuyrxD8aQEuED6BhnTSJwtG9YK%2FoYjQ8zcUEap8d4jxb1x6DhOfoDyDc%2FEJhjfAKYgIrP6qKjfAvQQstSJH%2BkKH7D6EMtfUfbElPjRH4juyzH78pgZu35nsh%2BDIuVMWvH58ABhWP74i0Ix85JCJ4fVdDxHaMfIrATGSk%2FePZy0rYRHhEJpLeTI%2BN9NqPpxhw6U8vcDnAAuHxCM9T%2BaP%2FKThDREu1GlBNEHCW9ak1cnjcz8LRKB0iXHqr2J9oo07Wybjn%2BePj0jwmFOen2gZ0vLTpocUQo7j471xpPr6o%2FuZBJdnFMVXtYV0ejqtgktwmU5ZEK6yy%2FTfron%2B1t8igGQdQabFAhfq%2Bihfa4QsUMvp77NTPRe0ul%2BWep7rRfbaJsRvt9v%2Fh4jJKdZPEXkAAAAASUVORK5CYII%3D";


var $b86925a11d594f09$exports = {};
$b86925a11d594f09$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAATlBMVEUAAADj4%2BPp6enn5%2Bfp6enp6enp6enq6urm5ubm5ubg4ODg4ODm5ubo6Ojc3Nww6v8Y6P8T5%2F8m6P8H5v8A5f8L5v8N4PoF4f0C4P0D2%2FuDNJb%2FAAAAGnRSTlMAE2SS0e7%2F%2F7smT%2F%2F%2F%2F%2F0a6ehI%2F%2F%2FbMaX0k6g43vIAAAKLSURBVHgB7JjpmuQgCEVjiBdTgu%2F%2FtrMPX5uuoLSzT5%2F6f09xyb6984eTdjoymBm57OmHpxO4A%2BVHOs6DXwHOjx%2F17ws%2FA%2BD8Q6Ygfg4%2BwWU9%2F2BHAOTVejL7AvC5tF2%2BBz%2FAkNgBxtsNeU7AaXG%2FjmBp08SzAqYfvgDLXyipjAVLJZ0cEeCMbzgmyD94A4wrtYooM%2BdC%2B8w4FBXIF4PiM6w0dOSogJsJPsOUflBDRm0iYgJV7J7gERdIq51AlX7AWdwLai%2FQsngZ6tH2ydALnBlyXIBPAjPoN273oMF8E0gvQLoRhPNNIJ1AKS7AQCCdQM9oRRgKxPKdEXI8X7%2Fni7wUSOwwxT3SqhlURx1ROB9i8b1hn79UwKW%2BFMhoCQnBeMDyL4YytWUM0YvADPm5gBAItxtOhy9ICFJNYLgVbQeM6ACGe7FIigBcvwf2Bu%2BCWhDA4lRE7SfSn2g9STCN2u1Yr%2BTtFtLQADcC2u45fkC%2BpM0hBwpSyx8NEF%2BDky9pczklkv9aII9tQGqT%2FYQLMg55e37ZZqDq1uP0Q9MfQ8T5%2Fzrfv6M4quKCheJpvlAKfpDK1VvGJb1ZfMTxoNJaHdEmX6He%2BdheXR04DAQxGO7ANFrqv9DD1eyBSWH6Hv9wDLpB%2FTD0m2UcWWSTfZi2CsCimuzLtF4AgEXTW9WvFXxhkQSrwp8CtIKKRRDNxZ8Fn1hALIJkLrWCbywgFkEwF1hALCAWQTaXa4GbL0f%2FRXDz5eiDDDdfRMW%2BoXhBNV9kBcbXesFmUcSUc4pqebkfXCuxCLhWWhHMrNWEL%2FNF1tZKKYK2VkIRRLi4vwgSXNpfBAEu7C%2BCDJf3lNv7i85%2BkH2tzrloeC3ayx7vgDWcARqOBsEAAAAASUVORK5CYII%3D";


var $a293416f08bd6005$exports = {};
$a293416f08bd6005$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAARVBMVEUAAACy6fHl5eXq6uro6Ojm5ubp6enq6urm5ubi4uLj4%2BPf39%2Fo6Ojh4eES3%2FkP5%2F8k6f8M5%2F8G5v8A5f8G4f0C4P0E2%2FuRTESCAAAAF3RSTlMAEFuV5P%2F%2F%2F8EbLv%2F%2FjCngQ%2Fz%2F%2F6X0kyzJZw0AAAJ0SURBVHgB7NYHlqQ6DIVhOejKLsv7X27ndj0KrELAm%2FzNSZPuTz5Nv7h%2FQkyZISLIJQa6WE2QBZR65XyWFUi%2B0TVCkS2A5EoXSLINAKTQaVmMAMCBTqksdgByoxNuMocLClUMGCodxfsCEs7fXzMAPv982gEkOiDs34dU8iuOAPL5J8gO4EZe2RfIl5%2FAo9aYVURySX3P6SRvgD8KineiqdIT7A3ICHyQFMgSXPvjGvEIqCKSIfoD3NoioJpOvsXrQFsGtBx9y7BFVwHrHPhYYBT0S6QJde8D7R0vAwi07cA%2Bf%2BwzLwKa%2FAHMfAV4EdDqvUSY4XYv6F068sPK%2FCn6BL1j32MK7DgDZv2Pm%2BdFgx3gQe%2Fi%2Fk8FTK2tCsZNCHDOA2P%2BoVB2vcp4StukkGlTx2rcxo0f2IEKH2lfBeXBvERU4LKaf2d%2BLKrCQcfgqhDpilMYc8qs49fHH1WaCOw7AcU7fcQ01RV78TzQaa5csM%2BVDNlxgXS1bz5Drttg7HMg0409%2B%2BsAR3oitP3XB%2Bq5w0Ph4%2FuF9uhWgY197rRPKGwcv%2Fqv%2F1otrJv777C5zz2QR%2BiNGXMP661Xcguxl9yeyqXH%2BtpeXWQxDMNAAG0OYBL4%2Fjct%2BikrOS%2BacvvXEzDO4SP95VIynvHVRtTqVoa51fj7t75Qic8o9IWl0VVbZhm%2BsswehYYyyfBQAhNEproZNvsnSciIm2EjgRkyZTJD8TlSMupm2Oj7TVEmk90MGzfj6zT0SYaHkYl8gfs0Y%2B%2BPyKIqGc%2F8fV%2FHIay%2FYEB%2FAaD%2BWoH9BYD6ywNczsAM4XOE99d7ThHWXyu4vwDWX4Av7K%2B%2FE4vvci3LGOUMAAAAAElFTkSuQmCC";


var $6cd0338f44862b9c$exports = {};
$6cd0338f44862b9c$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAADZ2dnl5eXn5%2Bfo6Ojm5ubp6enq6urg4ODm5ubQ0NDBwcHo6OjExMS9vb2%2Fv7%2FAwMC8vLy9vb23t7ftsDFCAAAAFHRSTlMAEVuR2P%2F%2F%2F%2F67J0z%2F%2F%2F%2Bq%2B4HR%2BIsFiaoAAAJsSURBVHgB7ZWHYusgDEUlY4lhsv%2F%2FXx%2BNGtrEhliJ3vbpXvdUAwwbfzg4uJHYe88hDmie7tjfwdHSkUa%2FQJjABox%2BCWY%2FmlTh%2FDJc8BHeZvRtQYHeLAKz7wvYp7em69uwgQF9B668bqB1Ao%2Bm850LmGz3cy5gZzyAKnhr0HFdvjDabmgVvLNJo04Q9BPQCTgEouy9D9G5NeU4ZT7T1ZBl5vm5I2sF%2FiYQvEODHZ31iKqgqAboMOgF0qMqKDiDU3wvCPeCHPVL2hHkmaBXA2nzRVAN%2BZPhpSXiZcIHdC9gbAheyKdrPlEVdJukz5cKKIghV5K2Rcz9CgqS3y8hKPPrkK%2BK7wLSrSm3oWu8kIVOj5w6Xw4azQ3D%2BquCu9zyhWdDQFbFi4AWDXHVUeanZKlgZmg9rh3z2nCBJH5uaAiQldwalKnSbRGMrOIhXuheFolYQa6BM8MADSIrIApEWQT59iKGBA2QdAVk%2BewRgiYuKwpoChy0GQ3yCaFDUDQoS76mgNVj6OQTQpdEmvy5gAZ4Aob1%2FVE3SBjp9fwIa3A9A%2FX642AdGKnz%2F2d9%2F%2BfgSJnnSCgv5pND0IAuEHGbh%2FQg8TpwcjE8Z4xuSLCx8YewK8DPZF%2FYBL9DgGlJkBCsOBwP%2BCjA8k0wIpXU3elecDqWzxLYcN5%2FcJy%2BBFOJL5zBiJMYzkkE6Sz5J8MpH0Rx%2FXCQeBmLGUn6VCnVWDNdpIp94TKBPTKK2vy%2FTlBXs66s8LcMGQ%2Bfmy%2FvZGXRsPkS%2F3XQRGE2Csm7fL8qLqZXRaqbI4K6UWZzOOyXruv94U984Pz5z%2BRNcCnAxsYv5gcBJmV5WFk6DwAAAABJRU5ErkJggg%3D%3D";


var $18a7b7920f0ba624$exports = {};
$18a7b7920f0ba624$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEUAAADT3t%2Fh4eHq6urp6enn5%2Bfp6enq6urm5ubG0NLLy8uds7bo6Ojj4%2BPn5%2Bfh4eHe3t4U5%2F8Y5P0B5f%2FExMS%2Bvr4K5v8D3vy%2Bvr4A3%2F28vLy9vb29vb29vb3BwcG4uLjMVSTuAAAAH3RSTlMAD1uV0e7%2F%2F7ohOgX%2F%2F%2F%2BM%2F%2Bg6%2F%2F3%2F252t9H3R8%2F%2BTcABA0AAAAzBJREFUeAHsmAe6rCAMhUWGBO8kwf1v9jbsSonM6%2B9fwPm%2Fk1jpfnP%2BY3r7cICI4HxvXp0%2BWMAd4IdXxj%2FwBKB7e9VsPF4BgO4lLSxeA5%2Bgb45%2FPjAjAHDPxvEQ5gWATWN6wzQwGxp2bbAgiNzu8HR1AjQ3BQ%2BsE4Brvz7zArCtC0jnN1xKvihoG9KAGgG86TesE7gfXACAmYUQ0XkbaupYrUDGLwPFnZMtbl20AlwEEWtarlGEM%2BPIIouACPqcoNcLeGTeCD6xrXfxcQnjQUC%2B%2BTG0hcZPw1aQ7eBuCmYDTST3QOp8gPHbsBeASQhu5Mt3PssiyA5JnR8b8GSglUF7nwFkG0QDUamCU%2BcDzfksW4HoLlOAXIMpn4WKM7LaeACO%2BZGNoK9%2FVECVIDpKSzCgio8X0VyAZTslX7VlKELzBqJjNbhrQYDq8AgvG5gleYEBJXP%2BxpEdUfcAFbLJXzaRfVgMoi0QA2VL9oHqlQViHMnRMKQERlGBlrclHeEuSSBFAYkCOhFiWNueRZIFZMj%2BgCgGlChguxyG6wqk89kUfgK5LV%2F6roBxUIBivn7Dy4%2B4lOefyvddDYGz148k8yVUH4Zwej5CqXzuNcc5TJf5X8BlPgfTaTDBsUCaQ%2FoYhjtHasG7sYjz4aO9OtlyEASiMHwrO6xNBolYiL7%2FWzYcbKtP5tBmzpdxVb8zC4Ovh2HGTZnVyuB2eL2J1vinOsJBcf4cBRvhENqM6EaB7W9ge5vAejNZ3yTQaKDB9cgcChjaOULlx8jVjnYD5KzDpNVAi6tVcWot%2FDfAUsd%2F1UyHyNukqzRQdTbxM51klpDnmRwwuRiED5zlBiXI5USfv5LgCAo8FhpGGeNjQgVvsGPdtG2zRiE97no%2BZsdiR8K4Be7tqL9JYFHrGagXmFvlp%2BmJ9QfOAhFKkcuz%2BxD1OeF2xxFzYYFlujRDlC7ZZOdcSxcJSuR56dLMgXTJhsRD9TZHUcCEEAZhaAAsQ%2FxnMJE4v7zgBkeABhJywWFCXRh1VL7gaGB3wSHWABOKaWAHQwPgGwTAGmDcIgAJI8FtApBZ5mOIoEputHKc3jfFjOf29QPQe5BuJum%2B4AAAAABJRU5ErkJggg%3D%3D";


var $8d9bd54d120abd62$exports = {};
$8d9bd54d120abd62$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAKlBMVEUAAAD81kP71UL71kD81kD81z%2F91z793Eb4yz%2F920L92kD92j792Tv92TcDye7yAAAACXRSTlMAH1Bzm8vn%2FwvXXbMnAAAC1klEQVR4Ae2XNdPbQBiEzeMujE2YmZmZmZm5CmhUhfMTojnXQbkNO12YmaP%2FEl8u1r7S%2BuSvC31b76Pd907SzaWa9ccq3WPW6j3Hdq0c3rJJ9mLPNY6qyvfV0eknGvszc1z1UyXfL98%2B0rWR%2F%2FQexwFQqZwf29gfASqXEomM9jtuDfArmkholV7jAFAa0LpoX6w%2BDgFa223%2BM0594OnchEIgADy%2FXr9UO6cmFQOeL6sbsMcOPEQE1N4J5cWB59uSJkACgAf8Up11khKeryVgjgAUA%2FfppRB%2Bl4Cq4i9Ih2SAxxYje64bvnwAHtgbidcbQLzTOVHIBBCwNwKMEY0sCe%2Bkv7hHJGBmA9w1wEe5d1kR4AGoSCAYKoCCXFSvLvAi2Co%2FNQTUEkoEvJXvhRzBo5kN8F7MLAPQKAZ8w9SZqtHY9S7YgABbl3O1WUNhQIkWKQimhkBeua7ZYxeNGFiKV1V5nn44AtBIAG9CoJ9SntLtwwnQCCOIdR3n1aQQwADepnnVBBOBkdEoBLAR69QveRyAEYIPAjAR2o8ANCJgH54dBpRphOCjBKRK3CgGsJ8baUlA%2BhFgA%2FaRv0yNaAb2I4CA9T7WB4Wo0QcBQPCjEQHz4UUhaiRejfHsRwAAvHz9yY8ANBKvd2fuzwHyA8rf4cdzgPhEczBxAAD8BDJkRgAaid9MsWz3I%2BC7%2BH0vsBdCwPsUNCAxIFxVqMB%2BCoj87rPkR0BIyAOleID8FKCPLGhC3I%2BAGvIueuyyHwFG0WM384zXEwHYNmgD2xGArwdqD7f0I2BbDMjARksqG0EL2Q873gvobB3%2FdwBrCShuJL8cGbuGse0DyJGh9MGoPxDEx5bwQe2ifhmwDC6agualCaAz0i81N2VRb2M3daDt9ivNJmOP%2Bj%2FQxFDmUCDaGH3smngtO0T%2BRhe5Q8l%2BVma29O%2Fs2pTL66ZwXPvlla7Hhz7ietysP1A%2FALZC9b117sbZAAAAAElFTkSuQmCC";


var $90f88270f6de5851$exports = {};
$90f88270f6de5851$exports = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2219%22%20height%3D%2220%22%20viewBox%3D%220%200%2019%2020%22%3E%0A%20%20%3Cpath%20fill%3D%22%23D8D8D8%22%20d%3D%22M1%2C8%20C0.44771525%2C8%200%2C7.5522847%200%2C7%20C0%2C6.4477153%200.44771525%2C6%201%2C6%20L9%2C6%20C9.90530167%2C6.0001933%2010.6978413%2C5.3922486%2010.9322311%2C4.5178159%20C11.1666208%2C3.6433832%2010.7844036%2C2.7205475%2010.000376%2C2.2679198%20C9.2163484%2C1.815292%208.22604831%2C1.9457584%207.586%2C2.586%20C7.19362111%2C2.9649722%206.56991522%2C2.9595524%206.18418142%2C2.5738186%20C5.79844763%2C2.1880848%205.79302779%2C1.5643789%206.172%2C1.172%20C7.45209663%2C-0.1084832%209.4326968%2C-0.3694159%2011.000752%2C0.5358395%20C12.5688072%2C1.441095%2013.3332417%2C3.2867664%2012.8644621%2C5.0356318%20C12.3956825%2C6.7844973%2010.8106033%2C8.0003866%209%2C8%20L1%2C8%20Z%20M16%2C10%20C16.4526508%2C10.0000967%2016.8489206%2C9.6961243%2016.9661155%2C9.258908%20C17.0833104%2C8.8216916%2016.8922018%2C8.3602738%2016.500188%2C8.1339599%20C16.1081742%2C7.907646%2015.6130242%2C7.9728792%2015.293%2C8.293%20C14.9006211%2C8.6719722%2014.2769152%2C8.6665524%2013.8911814%2C8.2808186%20C13.5054476%2C7.8950848%2013.5000278%2C7.2713789%2013.879%2C6.879%20C14.8390725%2C5.9186376%2016.3245226%2C5.722938%2017.500564%2C6.4018797%20C18.6766054%2C7.0808213%2019.2499313%2C8.4650748%2018.8983466%2C9.7767239%20C18.5467619%2C11.0883729%2017.3579525%2C12.00029%2016%2C12%20L2%2C12%20C1.44771525%2C12%201%2C11.5522847%201%2C11%20C1%2C10.4477153%201.44771525%2C10%202%2C10%20L16%2C10%20Z%20M15%2C16%20L1%2C16%20C0.44771525%2C16%200%2C15.5522847%200%2C15%20C0%2C14.4477153%200.44771525%2C14%201%2C14%20L15%2C14%20C16.3579525%2C13.99971%2017.5467619%2C14.9116271%2017.8983466%2C16.2232761%20C18.2499313%2C17.5349252%2017.6766054%2C18.9191787%2016.500564%2C19.5981203%20C15.3245226%2C20.277062%2013.8390725%2C20.0813624%2012.879%2C19.121%20C12.6190434%2C18.8699255%2012.5147874%2C18.4981221%2012.6063028%2C18.1484927%20C12.6978183%2C17.7988632%2012.9708632%2C17.5258183%2013.3204927%2C17.4343028%20C13.6701221%2C17.3427874%2014.0419255%2C17.4470434%2014.293%2C17.707%20C14.6130242%2C18.0271208%2015.1081742%2C18.092354%2015.500188%2C17.8660401%20C15.8922018%2C17.6397262%2016.0833104%2C17.1783084%2015.9661155%2C16.741092%20C15.8489206%2C16.3038757%2015.4526508%2C15.9999033%2015%2C16%20Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A";


const $bf513b85805031e6$var$ICONS = {
    'clear-day': (0, (/*@__PURE__*/$parcel$interopDefault($8d9bd54d120abd62$exports))),
    'clear-night': (0, (/*@__PURE__*/$parcel$interopDefault($e2e69367a81f28ac$exports))),
    cloudy: (/*@__PURE__*/$parcel$interopDefault($6c2d7344ba65a959$exports)),
    overcast: (0, (/*@__PURE__*/$parcel$interopDefault($6c2d7344ba65a959$exports))),
    fog: (/*@__PURE__*/$parcel$interopDefault($218356dee0db9918$exports)),
    hail: (0, (/*@__PURE__*/$parcel$interopDefault($18a7b7920f0ba624$exports))),
    lightning: (/*@__PURE__*/$parcel$interopDefault($f61374c50cb310b4$exports)),
    'lightning-rainy': (0, (/*@__PURE__*/$parcel$interopDefault($97f20cf04c7da4fc$exports))),
    'partly-cloudy-day': (0, (/*@__PURE__*/$parcel$interopDefault($d5206edf6f950d9b$exports))),
    'partly-cloudy-night': (0, (/*@__PURE__*/$parcel$interopDefault($77404da35cba9a11$exports))),
    partlycloudy: (0, (/*@__PURE__*/$parcel$interopDefault($d5206edf6f950d9b$exports))),
    pouring: (0, (/*@__PURE__*/$parcel$interopDefault($b86925a11d594f09$exports))),
    rain: (0, (/*@__PURE__*/$parcel$interopDefault($a293416f08bd6005$exports))),
    rainy: (/*@__PURE__*/$parcel$interopDefault($a293416f08bd6005$exports)),
    sleet: (0, (/*@__PURE__*/$parcel$interopDefault($18a7b7920f0ba624$exports))),
    snow: (0, (/*@__PURE__*/$parcel$interopDefault($6cd0338f44862b9c$exports))),
    snowy: (/*@__PURE__*/$parcel$interopDefault($6cd0338f44862b9c$exports)),
    'snowy-rainy': (0, (/*@__PURE__*/$parcel$interopDefault($18a7b7920f0ba624$exports))),
    sunny: (/*@__PURE__*/$parcel$interopDefault($8d9bd54d120abd62$exports)),
    wind: (0, (/*@__PURE__*/$parcel$interopDefault($90f88270f6de5851$exports))),
    windy: (/*@__PURE__*/$parcel$interopDefault($90f88270f6de5851$exports)),
    'windy-variant': (0, (/*@__PURE__*/$parcel$interopDefault($90f88270f6de5851$exports)))
};
const $bf513b85805031e6$var$ICONS_NIGHT = {
    ...$bf513b85805031e6$var$ICONS,
    sunny: (0, (/*@__PURE__*/$parcel$interopDefault($e2e69367a81f28ac$exports))),
    partlycloudy: (0, (/*@__PURE__*/$parcel$interopDefault($77404da35cba9a11$exports))),
    'lightning-rainy': (0, (/*@__PURE__*/$parcel$interopDefault($13b739558169538f$exports)))
};
class $bf513b85805031e6$export$2101ecdd734f621c extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static styles = (0, $040001cdf6cad6dd$export$2e2bcd8739ae039);
    _initialized = false;
    _loading = 0;
    _events = {};
    _calendarEvents = {};
    _calendarMap = [];
    _jsonDays = '';
    _calendars;
    _numberOfDays;
    _updateInterval;
    _language;
    _dateFormat;
    _timeFormat;
    _locationLink;
    _startDate;
    _hideWeekend;
    _startingDay;
    _startingDayOffset;
    _loader;
    _hardrefresh = false;
    _grid_rows = 0;
    _endDate;
    _weatherForecast = null;
    /**
     * Get config element
     *
     * @returns {HTMLElement}
     */ static getConfigElement() {
        // Create and return an editor element
        return document.createElement("week-planner-card-editor-2");
    }
    /**
     * Get stub config
     *
     * @returns {}
     */ static getStubConfig() {
        return {
            calendars: [],
            days: 7,
            startingDay: 'today',
            startingDayOffset: 0,
            hideWeekend: false,
            noCardBackground: false,
            compact: false,
            weather: {
                showCondition: true,
                showTemperature: false,
                showLowTemperature: false,
                useTwiceDaily: false
            },
            locale: 'en',
            showLocation: false,
            hidePastEvents: false,
            hideDaysWithoutEvents: false,
            hideTodayWithoutEvents: false,
            combineSimilarEvents: false,
            showLegend: false
        };
    }
    /**
     * Get properties
     *
     * @return {Object}
     */ static get properties() {
        return {
            _days: {
                type: Array
            },
            _config: {
                type: Object
            },
            _error: {
                type: String
            },
            _currentEventDetails: {
                type: Object
            }
        };
    }
    /**
     * Set configuration
     *
     * @param {Object} config
     */ setConfig(config) {
        this._config = config;
        if (!config.calendars) throw new Error('No calendars are configured');
        this._title = config.title ?? null;
        this._calendars = config.calendars;
        this._hideWeekend = config.hideWeekend ?? false;
        this._startingDay = config.startingDay ?? 'today';
        this._startingDayOffset = config.startingDayOffset ?? 0;
        this._startDate = this._getStartDate();
        this._updateInterval = config.updateInterval ?? 60;
        this._dayFormat = config.dayFormat ?? null;
        this._dateFormat = config.dateFormat ?? 'cccc d LLLL yyyy';
        this._timeFormat = config.timeFormat ?? 'HH:mm';
        this._weather = this._getWeatherConfig(config.weather);
        if (config.locale) (0, $10b9906fb633b71f$exports.Settings).defaultLocale = config.locale;
        this._language = Object.assign({}, {
            fullDay: 'Entire day',
            noEvents: 'No events',
            moreEvents: 'More events',
            today: 'Today',
            tomorrow: 'Tomorrow',
            yesterday: 'Yesterday',
            sunday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[6],
            monday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[0],
            tuesday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[1],
            wednesday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[2],
            thursday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[3],
            friday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[4],
            saturday: (0, $10b9906fb633b71f$exports.Info).weekdays('long')[5]
        }, config.texts ?? {});
    }
    /**
     * Render
     *
     * @return {Object}
     */ render() {
        if (!this._loader) this._loader = this._getLoader();
        if (!this._initialized) {
            this._initialized = true;
            return this._waitForHassAndConfig();
        }
        if (!this._hardrefresh) {
            this._hardrefresh = true;
            window.setTimeout(()=>{
                location.reload(true);
            }, 3600000);
        }
        const itemTemplates = [];
        let daysinrow = 7;
        let weeks = 4;
        for(let k = 0; k < weeks; k++){
            for(let j = 0; j < this._calendarMap[k * daysinrow].length; j++)for(let i = 0; i < daysinrow; i++){
                let index = daysinrow * k + i;
                if (j == 0) {
                    let date_classes = [
                        'grid-item',
                        'date'
                    ];
                    if (this._isSameDay(this._calendarMap[index][j]['date'], (0, $10b9906fb633b71f$exports.DateTime).now().startOf('day'))) date_classes.unshift('today');
                    let weather = null;
                    if (this._calendarMap[index][j]['weather']) weather = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="icon"><img class="icon" src="${this._calendarMap[index][j]['weather']['icon']}" alt="${this._calendarMap[index][j]['weather']['condition']}"></span><span class="high"> H: ${this._calendarMap[index][j]['weather']['temperature']}</span>`;
                    itemTemplates.push((0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="${date_classes.join(' ')}"><span class="text">${this._calendarMap[index][j]['date'].weekdayLong}</span><span class="month">${this._calendarMap[index][j]['date'].monthLong}</span><span class="number">${this._calendarMap[index][j]['date'].day}</span>${weather}</div>`);
                } else {
                    let item = this._calendarMap[index][j];
                    if (item == null) itemTemplates.push((0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="grid-item"></div>`);
                    else if (item.title.substring(0, 4) == 'x - ') ;
                    else itemTemplates.push((0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="grid-item event" style="grid-column: span ${item.span + 1};"><p>${item.title}</p></div>`);
                }
            }
        }
        this._grid_rows = 0;
        for(let k = 0; k < weeks; k++)this._grid_rows += this._calendarMap[k * daysinrow].length;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-card id="ha-card" class="" style="">
                <div class="card-content">
                    ${itemTemplates}
                </div>
                ${this._loader}
            </ha-card>
        `;
    }
    updated() {
        this.shadowRoot.querySelector("ha-card").style.setProperty('--page-height', Math.max(window.innerHeight, 1080) + "px");
        this.shadowRoot.querySelector("ha-card").style.setProperty('--page-width', Math.max(window.innerWidth, 1920) + "px");
        this.shadowRoot.querySelector("ha-card").style.setProperty('--rows', this._grid_rows);
    }
    _getLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.style.display = 'none';
        return loader;
    }
    _updateLoader() {
        if (this._loading > 0) this._loader.style.display = 'inherit';
        else this._loader.style.display = 'none';
    }
    _waitForHassAndConfig() {
        if (!this.hass || !this._calendars) {
            window.setTimeout(()=>{
                this._waitForHassAndConfig();
            }, 50);
            return;
        }
        this._updateEvents();
    }
    _Empty2DArray(rows, cols) {
        const array = [];
        for(let i = 0; i < rows; i++){
            array[i] = [];
            for(let j = 0; j < cols; j++)array[i][j] = null;
        }
        return array;
    }
    _updateEvents() {
        if (this._loading > 0) return;
        this._loading++;
        this._updateLoader();
        this._error = '';
        this._events = {};
        let eventsperday = 1;
        let weeksperview = 4;
        let daysperweek = 7;
        this._startDate = this._getStartDate();
        let startDate = this._startDate;
        this._calendarMap = this._Empty2DArray(daysperweek * weeksperview, eventsperday + 1);
        this._endDate = this._startDate.plus({
            days: daysperweek * weeksperview
        });
        for(let i = 0; i < 7 * weeksperview; i++)this._calendarMap[i][0] = {
            'date': startDate.plus({
                days: i
            }),
            'weather': null
        };
        if (this._weather && this._weatherForecast === null) this._subscribeToWeatherForecast();
        let calendarNumber = 0;
        this._calendars.forEach((calendar)=>{
            if (!calendar.entity || !this.hass.states[calendar.entity]) return;
            if (!calendar.name) calendar = {
                ...calendar,
                name: this.hass.formatEntityAttributeValue(this.hass.states[calendar.entity], 'friendly_name')
            };
            let calendarSorting = calendarNumber;
            this._loading++;
            this.hass.callApi('get', 'calendars/' + calendar.entity + '?start=' + encodeURIComponent(startDate.toISO()) + '&end=' + encodeURIComponent(this._endDate.toISO())).then((response)=>{
                response.forEach((event)=>{
                    let startDate = this._convertApiDate(event.start);
                    let endDate = this._convertApiDate(event.end);
                    // Update start and end date if events do beyond the calender window
                    if (this._startDate > startDate) startDate = this._startDate;
                    if (this._endDate < endDate) endDate = this._endDate;
                    startDate = startDate.startOf('day');
                    endDate = endDate.startOf('day');
                    let title = event.summary;
                    // if the endDate is greater then end of week, we are going to loop over each week to add the event
                    let e = endDate;
                    while(endDate > this._getEndofWeekDate(startDate)){
                        endDate = this._getEndofWeekDate(startDate);
                        this._pushCalender(title, startDate, endDate);
                        startDate = this._getWeekDayDate(startDate, 1).plus({
                            days: 7
                        });
                        if (e < endDate.plus({
                            days: 7
                        })) endDate = e;
                        else endDate = endDate.plus({
                            days: 7
                        });
                    }
                    this._pushCalender(title, startDate, e);
                });
                this._loading--;
            }).catch((error)=>{
                if (!error.error) console.log(error);
                this._error = 'Error while fetching calendar: ' + error.error;
                this._loading = 0;
                throw new Error(this._error);
            }).finally(()=>{
            //pass
            });
            calendarNumber++;
        });
        let checkLoading = window.setInterval(()=>{
            if (this._loading === 0) {
                clearInterval(checkLoading);
                this._updateLoader();
                if (!this._error) {
                    this._mergeCalenderWeather();
                    this._days = this._calendarMap;
                    console.log(this._days);
                }
                window.setTimeout(()=>{
                    this._updateEvents();
                }, this._updateInterval * 1000);
            }
        }, 50);
        this._loading--;
    }
    _mergeCalenderWeather() {
        const weatherState = this._weather ? this.hass.states[this._weather.entity] : null;
        for(let i = 0; i < this._calendarMap.length; i++)this._weatherForecast?.forEach((forecast)=>{
            // Only use day time forecasts
            if (forecast.hasOwnProperty('is_daytime') && forecast.is_daytime === false) return;
            const dateKey = (0, $10b9906fb633b71f$exports.DateTime).fromISO(forecast.datetime).toISODate();
            if (dateKey == this._calendarMap[i][0]['date'].toISODate()) this._calendarMap[i][0]['weather'] = {
                icon: this._getWeatherIcon(forecast),
                condition: this.hass.formatEntityState(weatherState, forecast.condition),
                temperature: this.hass.formatEntityAttributeValue(weatherState, 'temperature', forecast.temperature),
                templow: this.hass.formatEntityAttributeValue(weatherState, 'templow', forecast.templow)
            };
        });
    }
    _getWeatherIcon(weatherState) {
        const condition = weatherState?.condition;
        if (!condition) return null;
        const state = condition.toLowerCase();
        return $bf513b85805031e6$var$ICONS[state];
    }
    _pushCalender(title, startDate, endDate) {
        let startdaykey = Math.min(this._getDateDiff(this._startDate, startDate), 27);
        let spanDays = this._getDateDiff(startDate, endDate);
        let startdayrowkey = null;
        for(let i = 0; i < this._calendarMap[startdaykey].length; i++)if (this._calendarMap[startdaykey][i] === null) {
            startdayrowkey = i;
            break;
        }
        // If we cant find an empty row add a new row 
        if (startdayrowkey == null) {
            startdayrowkey = this._calendarMap[startdaykey].length;
            // Find the Dates that mark the begining and of of the week the event starts in 
            let startOfWeek = this._getWeekDayDate(startDate, 1);
            let endOfWeek = this._getEndofWeekDate(startDate);
            // Find the indexes in the month array and push in null
            let startOfWeekIndex = this._getDateDiff(this._startDate, startOfWeek);
            let endOfWeekIndex = this._getDateDiff(this._startDate, endOfWeek);
            for(let i = startOfWeekIndex; i <= endOfWeekIndex; i++)this._calendarMap[i].push(null);
        }
        this._calendarMap[startdaykey][startdayrowkey] = {
            'title': title,
            'span': spanDays
        };
        for(let i = startdaykey + 1; i < startdaykey + spanDays + 1; i++){
            if (i + 1 >= this._calendarMap.length) break;
            else this._calendarMap[i][startdayrowkey] = {
                'title': 'x - ' + title
            };
        }
    }
    _getStartDate(alternativeStartingDay) {
        let startDate = (0, $10b9906fb633b71f$exports.DateTime).now();
        switch(alternativeStartingDay ?? this._startingDay){
            case 'yesterday':
                startDate = startDate.minus({
                    days: 1
                });
                break;
            case 'tomorrow':
                startDate = startDate.plus({
                    days: 1
                });
                break;
            case 'sunday':
                startDate = this._getWeekDayDate(startDate, 7);
                break;
            case 'monday':
                startDate = this._getWeekDayDate(startDate, 1);
                break;
            case 'tuesday':
                startDate = this._getWeekDayDate(startDate, 2);
                break;
            case 'wednesday':
                startDate = this._getWeekDayDate(startDate, 3);
                break;
            case 'thursday':
                startDate = this._getWeekDayDate(startDate, 4);
                break;
            case 'friday':
                startDate = this._getWeekDayDate(startDate, 5);
                break;
            case 'saturday':
                startDate = this._getWeekDayDate(startDate, 6);
                break;
            case 'month':
                startDate = startDate.startOf('month');
                break;
        }
        if (this._startingDayOffset !== 0) startDate = startDate.plus({
            days: this._startingDayOffset
        });
        if (this._hideWeekend && startDate.weekday >= 6) startDate = this._getStartDate('monday');
        return startDate.startOf('day');
    }
    _getWeekDayDate(currentDate, weekday) {
        const currentWeekDay = currentDate.weekday;
        if (currentWeekDay > weekday) return currentDate.minus({
            days: currentWeekDay - weekday
        });
        if (currentWeekDay < weekday) return currentDate.minus({
            days: 7 - weekday + currentWeekDay
        });
        return currentDate;
    }
    _getEndofWeekDate(currentDate) {
        const currentWeekDay = currentDate.weekday;
        return currentDate.plus({
            days: 7 - currentWeekDay
        });
    }
    _convertApiDate(apiDate) {
        let date = null;
        if (apiDate) {
            if (apiDate.dateTime) date = (0, $10b9906fb633b71f$exports.DateTime).fromISO(apiDate.dateTime);
            else if (apiDate.date) date = (0, $10b9906fb633b71f$exports.DateTime).fromISO(apiDate.date);
        }
        return date;
    }
    _isSameDay(date1, date2) {
        if (date1 === null && date2 === null) return true;
        if (date1 === null || date2 === null) return false;
        return date1.day === date2.day && date1.month === date2.month && date1.year === date2.year;
    }
    _getDateDiff(date1, date2) {
        if (date1 === null && date2 === null) return true;
        if (date1 === null || date2 === null) return false;
        if (date1 > date2) throw new Error("Bad Dates");
        date1 = date1.startOf('day');
        date2 = date2.startOf('day');
        let i = 0;
        while(!this._isSameDay(date1, date2)){
            i = i + 1;
            date1 = date1.plus({
                days: 1
            });
        }
        return i;
    }
    _isToday(date) {
        const today = (0, $10b9906fb633b71f$exports.DateTime).now().startOf('day');
        return this._isSameDay(date, today);
    }
    _isTomorrow(date) {
        const tomorrow = (0, $10b9906fb633b71f$exports.DateTime).now().startOf('day').plus({
            days: 1
        });
        return this._isSameDay(date, tomorrow);
    }
    _isYesterday(date) {
        const yesterday = (0, $10b9906fb633b71f$exports.DateTime).now().startOf('day').minus({
            days: 1
        });
        return this._isSameDay(date, yesterday);
    }
    _getWeekDayText(date) {
        if (this._language.today && this._isToday(date)) return this._language.today;
        else if (this._language.tomorrow && this._isTomorrow(date)) return this._language.tomorrow;
        else if (this._language.yesterday && this._isYesterday(date)) return this._language.yesterday;
        else {
            const weekDays = [
                this._language.sunday,
                this._language.monday,
                this._language.tuesday,
                this._language.wednesday,
                this._language.thursday,
                this._language.friday,
                this._language.saturday,
                this._language.sunday
            ];
            const weekDay = date.weekday;
            return weekDays[weekDay];
        }
    }
    _subscribeToWeatherForecast() {
        this._loading++;
        this._updateLoader();
        let loadingWeather = true;
        this.hass.connection.subscribeMessage((event)=>{
            this._weatherForecast = event.forecast ?? [];
            if (loadingWeather) {
                this._loading--;
                loadingWeather = false;
            }
        }, {
            type: 'weather/subscribe_forecast',
            forecast_type: 'daily',
            entity_id: this._weather.entity
        });
    }
    _getWeatherConfig(weatherConfiguration) {
        if (!weatherConfiguration || typeof weatherConfiguration !== 'string' && typeof weatherConfiguration !== 'object') return null;
        let configuration = {
            entity: null,
            showCondition: true,
            showTemperature: false,
            showLowTemperature: false
        };
        if (typeof weatherConfiguration === 'string') configuration.entity = weatherConfiguration;
        else Object.assign(configuration, weatherConfiguration);
        if (!configuration.hasOwnProperty('entity') || configuration.entity === null) return null;
        return configuration;
    }
}




var $508aa251d58470aa$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    ha-textfield,
    ha-select,
    ha-formfield,
    ha-expansion-panel,
    ha-button,
    ha-entity-picker,
    ha-icon-picker {
      margin: 8px 0;
    }
`;


class $fc7d6e547b6fcb14$export$9924a854102d3bd9 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static styles = (0, $508aa251d58470aa$export$2e2bcd8739ae039);
    connectedCallback() {
        super.connectedCallback();
        this.loadCustomElements();
    }
    async loadCustomElements() {
        if (!customElements.get("ha-entity-picker")) await customElements.get("hui-entities-card").getConfigElement();
    }
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this.hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div style="display: flex; flex-direction: column">
                ${this.addTextField('title', 'Title')}
                ${this.addExpansionPanel('Calendars', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.getConfigValue('calendars').map((calendar, index)=>{
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                ${this.addExpansionPanel(`Calendar: ${calendar.name ?? calendar.entity}`, (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                        ${this.addEntityPickerField('calendars.' + index + '.entity', 'Entity', [
                'calendar'
            ])}
                                        ${this.addTextField('calendars.' + index + '.name', 'Name')}
                                        ${this.addTextField('calendars.' + index + '.color', 'Color')}
                                        ${this.addIconPickerField('calendars.' + index + '.icon', 'Icon')}
                                        ${this.addTextField('calendars.' + index + '.eventTitleField', 'Event title field', 'text', 'summary')}
                                        ${this.addTextField('calendars.' + index + '.filter', 'Filter events (regex)')}
                                        ${this.addTextField('calendars.' + index + '.filterText', 'Filter event text (regex)')}
                                        ${this.addBooleanField('calendars.' + index + '.hideInLegend', 'Hide in legend')}
                                        ${this.addButton('Remove calendar', 'mdi:trash-can', ()=>{
                const config = JSON.parse(JSON.stringify(this._config));
                if (config.calendars.length === 1) config.calendars = [];
                else {
                    delete config.calendars[index];
                    config.calendars = config.calendars.filter(Boolean);
                }
                this._config = config;
                this.dispatchConfigChangedEvent();
            })}
                                    `)}
                            `;
        })}
                        ${this.addButton('Add calendar', 'mdi:plus', ()=>{
            const index = this.getConfigValue('calendars').length;
            this.setConfigValue('calendars.' + index, {});
        })}
                    `)}
                ${this.addExpansionPanel('Days', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addTextField('days', 'Days')}
                        ${this.addSelectField('startingDay', 'Starting day', [
            {
                value: 'today',
                label: 'Today'
            },
            {
                value: 'tomorrow',
                label: 'Tomorrow'
            },
            {
                value: 'yesterday',
                label: 'Yesterday'
            },
            {
                value: 'sunday',
                label: 'Sunday'
            },
            {
                value: 'monday',
                label: 'Monday'
            },
            {
                value: 'tuesday',
                label: 'Tuesday'
            },
            {
                value: 'wednesday',
                label: 'Wednesday'
            },
            {
                value: 'thursday',
                label: 'Thursday'
            },
            {
                value: 'friday',
                label: 'Friday'
            },
            {
                value: 'saturday',
                label: 'Saturday'
            }
        ], true)}
                        ${this.addTextField('startingDayOffset', 'Starting day offset', 'number')}
                        ${this.addBooleanField('hideWeekend', 'Hide weekend')}
                        ${this.addBooleanField('hideDaysWithoutEvents', 'Hide days without events except for today')}
                        ${this.addBooleanField('hideTodayWithoutEvents', 'Also hide today without events')}
                        ${this.addTextField('maxDayEvents', 'Maximum number of events per day (0 is no maximum)', 'number', 0)}
                    `)}
                ${this.addExpansionPanel('Events', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addTextField('maxEvents', 'Maximum number of events (0 is no maximum)', 'number', 0)}
                        ${this.addBooleanField('hidePastEvents', 'Hide past events')}
                        ${this.addTextField('filter', 'Filter events (regex)')}
                        ${this.addTextField('filterText', 'Filter event text (regex)')}
                        ${this.addBooleanField('combineSimilarEvents', 'Combine similar events')}
                        ${this.addBooleanField('showTitle', 'Show title in overview', true)}
                        ${this.addBooleanField('showDescription', 'Show description in overview')}
                        ${this.addBooleanField('showLocation', 'Show location in overview')}
                        ${this.addTextField('locationLink', 'Override location link base URL')}
                    `)}
                ${this.addExpansionPanel('Date/time formats', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <p>These formats use <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens" target="_blank">Luxon format tokens</a></p>
                        ${this.addTextField('locale', 'Locale')}
                        ${this.addTextField('dateFormat', 'Date format')}
                        ${this.addTextField('timeFormat', 'Time format')}
                        ${this.addTextField('dayFormat', 'Override day number')}
                    `)}
                ${this.addExpansionPanel('Weather', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addEntityPickerField('weather.entity', 'Weather entity', [
            'weather'
        ])}
                        ${this.addBooleanField('weather.showCondition', 'Show condition icon')}
                        ${this.addBooleanField('weather.showTemperature', 'Show temperature')}
                        ${this.addBooleanField('weather.showLowTemperature', 'Show low temperature')}
                        ${this.addBooleanField('weather.useTwiceDaily', 'Use twice daily if entity does not support daily')}
                    `)}
                ${this.addExpansionPanel('Override columns', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <p>The number of columns is based on the size of the card.</p>
                        ${this.addTextField('columns.extraLarge', 'Extra large (>= 1920px)', 'number')}
                        ${this.addTextField('columns.large', 'Large (>= 1280px)', 'number')}
                        ${this.addTextField('columns.medium', 'Medium (>= 1024px)', 'number')}
                        ${this.addTextField('columns.small', 'Small (>= 640px)', 'number')}
                        ${this.addTextField('columns.extraSmall', 'Extra small (< 640px)', 'number')}
                    `)}
                ${this.addExpansionPanel('Appearance', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addBooleanField('noCardBackground', 'No card background')}
                        ${this.addTextField('eventBackground', 'Override events background color')}
                        ${this.addBooleanField('compact', 'Compact mode')}
                    `)}
                ${this.addExpansionPanel('Legend', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addBooleanField('showLegend', 'Show legend')}
                        ${this.addBooleanField('legendToggle', 'Toggle calendars by clicking on the legend')}
                    `)}
                ${this.addExpansionPanel('Texts', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addTextField('texts.fullDay', 'Entire day')}
                        ${this.addTextField('texts.noEvents', 'No events')}
                        ${this.addTextField('texts.moreEvents', 'More events')}
                        ${this.addTextField('texts.today', 'Today')}
                        ${this.addTextField('texts.tomorrow', 'Tomorrow')}
                        ${this.addTextField('texts.yesterday', 'Yesterday')}
                        ${this.addTextField('texts.sunday', 'Sunday')}
                        ${this.addTextField('texts.monday', 'Monday')}
                        ${this.addTextField('texts.tuesday', 'Tuesday')}
                        ${this.addTextField('texts.wednesday', 'Wednesday')}
                        ${this.addTextField('texts.thursday', 'Thursday')}
                        ${this.addTextField('texts.friday', 'Friday')}
                        ${this.addTextField('texts.saturday', 'Saturday')}
                    `)}
                ${this.addExpansionPanel('Miscellaneous', (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        ${this.addTextField('updateInterval', 'Override update interval', 'number')}
                    `)}
            </div>
        `;
    }
    addTextField(name, label, type, defaultValue) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-textfield
                name="${name}"
                label="${label ?? name}"
                type="${type ?? 'text'}"
                value="${this.getConfigValue(name, defaultValue)}"
                @keyup="${this._valueChanged}"
                @change="${this._valueChanged}"
            />
        `;
    }
    addEntityPickerField(name, label, includeDomains, defaultValue) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-entity-picker
                .hass="${this.hass}"
                name="${name}"
                label="${label ?? name}"
                value="${this.getConfigValue(name, defaultValue)}"
                .includeDomains="${includeDomains}"
                @change="${this._valueChanged}"
            />
        `;
    }
    addIconPickerField(name, label, defaultValue) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-icon-picker
                .hass="${this.hass}"
                name="${name}"
                label="${label ?? name}"
                value="${this.getConfigValue(name, defaultValue)}"
                @change="${this._valueChanged}"
            />
        `;
    }
    addSelectField(name, label, options, clearable, defaultValue) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-select
                name="${name}"
                label="${label ?? name}"
                value="${this.getConfigValue(name, defaultValue)}"
                .clearable="${clearable}"
                @change="${this._valueChanged}"
                @closed="${(event)=>{
            event.stopPropagation();
        } /* Prevent a bug where the editor dialog also closes. See https://github.com/material-components/material-web/issues/1150 */ }"
            >
                ${options.map((option)=>{
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <mwc-list-item
                            value="${option.value}"
                        >${option.label ?? option.value}</mwc-list-item>
                    `;
        })}
            </ha-select>
        `;
    }
    addBooleanField(name, label, defaultValue) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-formfield
                label="${label ?? name}"
            >
                <ha-switch
                    name="${name}"
                    .checked="${this.getConfigValue(name, defaultValue)}"
                    value="true"
                    @change="${this._valueChanged}"
                />
            </ha-formfield>
        `;
    }
    addExpansionPanel(header, content, expanded) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-expansion-panel
                header="${header}"
                .expanded="${expanded ?? false}"
                outlined="true"
            >
                <div style="display: flex; flex-direction: column">
                    ${content}
                </div>
            </ha-expansion-panel>
        `;
    }
    addButton(text, icon, clickFunction) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-button
                @click="${clickFunction}"
            >
                <ha-icon icon="${icon}"></ha-icon>
                ${text}
            </ha-button>
        `;
    }
    _valueChanged(event) {
        const target = event.target;
        let value = target.value;
        if (target.tagName === 'HA-SWITCH') value = target.checked;
        this.setConfigValue(target.attributes.name.value, value);
    }
    getConfigValue(key, defaultValue) {
        if (!this._config) return '';
        defaultValue = defaultValue ?? '';
        return key.split('.').reduce((o, i)=>o[i] ?? defaultValue, this._config) ?? defaultValue;
    }
    setConfigValue(key, value) {
        const config = JSON.parse(JSON.stringify(this._config));
        const keyParts = key.split('.');
        const lastKeyPart = keyParts.pop();
        const lastObject = keyParts.reduce((objectPart, keyPart)=>{
            if (!objectPart[keyPart]) objectPart[keyPart] = {};
            return objectPart[keyPart];
        }, config);
        if (value === '') delete lastObject[lastKeyPart];
        else lastObject[lastKeyPart] = value;
        this._config = config;
        this.dispatchConfigChangedEvent();
    }
    dispatchConfigChangedEvent() {
        const configChangedEvent = new CustomEvent("config-changed", {
            detail: {
                config: this._config
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(configChangedEvent);
    }
}


var $b06602ab53bd58a3$exports = {};
$b06602ab53bd58a3$exports = JSON.parse("{\"name\":\"four-week-planner-card\",\"version\":\"1.0.0\",\"description\":\"Custom Home Assistant card to display events for 4 weeks from one or several calendars.\",\"source\":\"src/index.js\",\"module\":\"dist/four-week-planner-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/NH-Pro-Wifi/four-week-planner-card.git\"},\"keywords\":[\"lovelace\"],\"author\":\"Rudy Gnodde\",\"licence\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/NH-Pro-Wifi/four-week-planner-card/issues\"},\"homepage\":\"https://github.com/NH-Pro-Wifi/four-week-planner-card\",\"devDependencies\":{\"@parcel/optimizer-data-url\":\"^2.12.0\",\"@parcel/transformer-inline-string\":\"^2.11.0\",\"parcel\":\"^2.11.0\",\"svgo\":\"^3.3.2\"},\"dependencies\":{\"lit\":\"^3.1.2\",\"luxon\":\"^3.4.4\",\"bootstrap\":\"5.0.2\"}}");


customElements.define('four-week-planner-card', (0, $bf513b85805031e6$export$2101ecdd734f621c));
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'four-week-planner-card',
    name: 'Four week Planner Card',
    description: 'Card to display events 4 weeks.'
});
customElements.define('four-week-planner-card-editor', (0, $fc7d6e547b6fcb14$export$9924a854102d3bd9));
console.info(`%c FOUR-WEEK-PLANNER-CARD %c v${(0, $b06602ab53bd58a3$exports.version)} `, 'color: white; background: black; font-weight: 700;', 'color: black; background: white; font-weight: 700;');


//# sourceMappingURL=four-week-planner-card.js.map
