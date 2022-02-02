var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
parcelRequire.register("cHJcH", function(module, exports) {

var $4piS4 = parcelRequire("4piS4");
const object = {
}(function(root, factory) {
    "object" === 'object' && module.exports ? module.exports = factory() : object.IpfsHttpClient = factory();
}(typeof self !== 'undefined' ? self : this, function() {
    var IpfsHttpClient = (()=>{
        var ig = Object.create;
        var Kr = Object.defineProperty;
        var ag = Object.getOwnPropertyDescriptor;
        var cg = Object.getOwnPropertyNames;
        var ug = Object.getPrototypeOf, lg = Object.prototype.hasOwnProperty;
        var Xs = (e)=>Kr(e, "__esModule", {
                value: !0
            })
        ;
        var Zs = "function" != "undefined" ? undefined : (e)=>{
            throw new Error('Dynamic require of "' + e + '" is not supported');
        };
        var w = (e, r)=>()=>(e && (r = e(e = 0)), r)
        ;
        var u = (e, r)=>()=>(r || e((r = {
                    exports: {
                    }
                }).exports, r), r.exports)
        , U = (e, r)=>{
            Xs(e);
            for(var t in r)Kr(e, t, {
                get: r[t],
                enumerable: !0
            });
        }, fg = (e, r, t)=>{
            if (r && typeof r == "object" || typeof r == "function") for (let n of cg(r))!lg.call(e, n) && n !== "default" && Kr(e, n, {
                get: ()=>r[n]
                ,
                enumerable: !(t = ag(r, n)) || t.enumerable
            });
            return e;
        }, Qs = (e)=>fg(Xs(Kr(e != null ? ig(ug(e)) : {
            }, "default", e && e.__esModule && "default" in e ? {
                get: ()=>e.default
                ,
                enumerable: !0
            } : {
                value: e,
                enumerable: !0
            })), e)
        ;
        function eo(e, r, t) {
            r = r || [], t = t || 0;
            for(var n = t; e >= mg;)r[t++] = e & 255 | Ys, e /= 128;
            for(; e & pg;)r[t++] = e & 255 | Ys, e >>>= 7;
            return r[t] = e | 0, eo.bytes = t - n + 1, r;
        }
        function Kt(e, r) {
            var t = 0, r = r || 0, n = 0, s = r, o, i = e.length;
            do {
                if (s >= i) throw Kt.bytes = 0, new RangeError("Could not decode varint");
                o = e[s++], t += n < 28 ? (o & ro) << n : (o & ro) * Math.pow(2, n), n += 7;
            }while (o >= yg)
            return Kt.bytes = s - r, t;
        }
        var dg, Ys, hg, pg, mg, gg, yg, ro, bg, wg, qg, xg, Sg, Eg, vg, Pg, Tg, Cg, Ag, jg, Er, to = w(()=>{
            dg = eo, Ys = 128, hg = 127, pg = ~hg, mg = Math.pow(2, 31);
            gg = Kt, yg = 128, ro = 127;
            bg = Math.pow(2, 7), wg = Math.pow(2, 14), qg = Math.pow(2, 21), xg = Math.pow(2, 28), Sg = Math.pow(2, 35), Eg = Math.pow(2, 42), vg = Math.pow(2, 49), Pg = Math.pow(2, 56), Tg = Math.pow(2, 63), Cg = function(e) {
                return e < bg ? 1 : e < wg ? 2 : e < qg ? 3 : e < xg ? 4 : e < Sg ? 5 : e < Eg ? 6 : e < vg ? 7 : e < Pg ? 8 : e < Tg ? 9 : 10;
            }, Ag = {
                encode: dg,
                decode: gg,
                encodingLength: Cg
            }, jg = Ag, Er = jg;
        });
        var Xr = {
        };
        U(Xr, {
            decode: ()=>Qe
            ,
            encodeTo: ()=>Ve
            ,
            encodingLength: ()=>We
        });
        var Qe, Ve, We, Zr = w(()=>{
            to();
            Qe = (e)=>[
                    Er.decode(e),
                    Er.decode.bytes
                ]
            , Ve = (e, r, t = 0)=>(Er.encode(e, r, t), r)
            , We = (e)=>Er.encodingLength(e)
            ;
        });
        var Qr = {
        };
        U(Qr, {
            coerce: ()=>ae
            ,
            empty: ()=>no
            ,
            equals: ()=>Xt
            ,
            fromHex: ()=>Ug
            ,
            fromString: ()=>Zt
            ,
            isBinary: ()=>kg
            ,
            toHex: ()=>Bg
            ,
            toString: ()=>Qt
        });
        var no, Bg, Ug, Xt, ae, kg, Zt, Qt, Ie = w(()=>{
            no = new Uint8Array(0), Bg = (e)=>e.reduce((r, t)=>r + t.toString(16).padStart(2, "0")
                , "")
            , Ug = (e)=>{
                let r = e.match(/../g);
                return r ? new Uint8Array(r.map((t)=>parseInt(t, 16)
                )) : no;
            }, Xt = (e, r)=>{
                if (e === r) return !0;
                if (e.byteLength !== r.byteLength) return !1;
                for(let t = 0; t < e.byteLength; t++)if (e[t] !== r[t]) return !1;
                return !0;
            }, ae = (e)=>{
                if (e instanceof Uint8Array && e.constructor.name === "Uint8Array") return e;
                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                throw new Error("Unknown type, must be binary type");
            }, kg = (e)=>e instanceof ArrayBuffer || ArrayBuffer.isView(e)
            , Zt = (e)=>new TextEncoder().encode(e)
            , Qt = (e)=>new TextDecoder().decode(e)
            ;
        });
        var Pr = {
        };
        U(Pr, {
            Digest: ()=>Ye
            ,
            create: ()=>vr
            ,
            decode: ()=>Yt
            ,
            equals: ()=>en
        });
        var vr, Yt, en, Ye, Tr = w(()=>{
            Ie();
            Zr();
            vr = (e, r)=>{
                let t = r.byteLength, n = We(e), s = n + We(t), o = new Uint8Array(s + t);
                return Ve(e, o, 0), Ve(t, o, n), o.set(r, s), new Ye(e, t, r, o);
            }, Yt = (e)=>{
                let r = ae(e), [t, n] = Qe(r), [s, o] = Qe(r.subarray(n)), i = r.subarray(n + o);
                if (i.byteLength !== s) throw new Error("Incorrect length");
                return new Ye(t, s, i, r);
            }, en = (e, r)=>e === r ? !0 : e.code === r.code && e.size === r.size && Xt(e.bytes, r.bytes)
            , Ye = class {
                constructor(r, t, n, s){
                    this.code = r, this.size = t, this.digest = n, this.bytes = s;
                }
            };
        });
        function _g(e, r) {
            if (e.length >= 255) throw new TypeError("Alphabet too long");
            for(var t = new Uint8Array(256), n = 0; n < t.length; n++)t[n] = 255;
            for(var s = 0; s < e.length; s++){
                var o = e.charAt(s), i = o.charCodeAt(0);
                if (t[i] !== 255) throw new TypeError(o + " is ambiguous");
                t[i] = s;
            }
            var a = e.length, c = e.charAt(0), l = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
            function m(T) {
                if (T instanceof Uint8Array || (ArrayBuffer.isView(T) ? T = new Uint8Array(T.buffer, T.byteOffset, T.byteLength) : Array.isArray(T) && (T = Uint8Array.from(T))), !(T instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (T.length === 0) return "";
                for(var j = 0, _ = 0, L = 0, H = T.length; L !== H && T[L] === 0;)L++, j++;
                for(var se = (H - L) * f + 1 >>> 0, F = new Uint8Array(se); L !== H;){
                    for(var de = T[L], oe = 0, Z = se - 1; (de !== 0 || oe < _) && Z !== -1; Z--, oe++)de += 256 * F[Z] >>> 0, F[Z] = de % a >>> 0, de = de / a >>> 0;
                    if (de !== 0) throw new Error("Non-zero carry");
                    _ = oe, L++;
                }
                for(var ie = se - _; ie !== se && F[ie] === 0;)ie++;
                for(var Ze = c.repeat(j); ie < se; ++ie)Ze += e.charAt(F[ie]);
                return Ze;
            }
            function x(T) {
                if (typeof T != "string") throw new TypeError("Expected String");
                if (T.length === 0) return new Uint8Array;
                var j = 0;
                if (T[j] !== " ") {
                    for(var _ = 0, L = 0; T[j] === c;)_++, j++;
                    for(var H = (T.length - j) * l + 1 >>> 0, se = new Uint8Array(H); T[j];){
                        var F = t[T.charCodeAt(j)];
                        if (F === 255) return;
                        for(var de = 0, oe = H - 1; (F !== 0 || de < L) && oe !== -1; oe--, de++)F += a * se[oe] >>> 0, se[oe] = F % 256 >>> 0, F = F / 256 >>> 0;
                        if (F !== 0) throw new Error("Non-zero carry");
                        L = de, j++;
                    }
                    if (T[j] !== " ") {
                        for(var Z = H - L; Z !== H && se[Z] === 0;)Z++;
                        for(var ie = new Uint8Array(_ + (H - Z)), Ze = _; Z !== H;)ie[Ze++] = se[Z++];
                        return ie;
                    }
                }
            }
            function k(T) {
                var j = x(T);
                if (j) return j;
                throw new Error(`Non-${r} character`);
            }
            return {
                encode: m,
                decodeUnsafe: x,
                decode: k
            };
        }
        var Ng, Ig, so, oo = w(()=>{
            Ng = _g, Ig = Ng, so = Ig;
        });
        var io, ao, Yr, co, et, De, Dg, Og, N, Ee = w(()=>{
            oo();
            Ie();
            io = class {
                constructor(r, t, n){
                    this.name = r, this.prefix = t, this.baseEncode = n;
                }
                encode(r) {
                    if (r instanceof Uint8Array) return `${this.prefix}${this.baseEncode(r)}`;
                    throw Error("Unknown type, must be binary type");
                }
            }, ao = class {
                constructor(r, t, n){
                    this.name = r, this.prefix = t, this.baseDecode = n;
                }
                decode(r) {
                    if (typeof r == "string") switch(r[0]){
                        case this.prefix:
                            return this.baseDecode(r.slice(1));
                        default:
                            throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                    }
                    else throw Error("Can only multibase decode strings");
                }
                or(r) {
                    let t = {
                        [this.prefix]: this,
                        ...r.decoders || {
                            [r.prefix]: r
                        }
                    };
                    return new Yr(t);
                }
            }, Yr = class {
                constructor(r){
                    this.decoders = r;
                }
                or(r) {
                    let t = r.decoders || {
                        [r.prefix]: r
                    };
                    return new Yr({
                        ...this.decoders,
                        ...t
                    });
                }
                decode(r) {
                    let t = r[0], n = this.decoders[t];
                    if (n) return n.decode(r);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
                }
            }, co = class {
                constructor(r, t, n, s){
                    this.name = r, this.prefix = t, this.baseEncode = n, this.baseDecode = s, this.encoder = new io(r, t, n), this.decoder = new ao(r, t, s);
                }
                encode(r) {
                    return this.encoder.encode(r);
                }
                decode(r) {
                    return this.decoder.decode(r);
                }
            }, et = ({ name: e , prefix: r , encode: t , decode: n  })=>new co(e, r, t, n)
            , De = ({ prefix: e , name: r , alphabet: t  })=>{
                let { encode: n , decode: s  } = so(t, r);
                return et({
                    prefix: e,
                    name: r,
                    encode: n,
                    decode: (o)=>ae(s(o))
                });
            }, Dg = (e, r, t, n)=>{
                let s = {
                };
                for(let f = 0; f < r.length; ++f)s[r[f]] = f;
                let o = e.length;
                for(; e[o - 1] === "=";)--o;
                let i = new Uint8Array(o * t / 8 | 0), a = 0, c = 0, l = 0;
                for(let f1 = 0; f1 < o; ++f1){
                    let m = s[e[f1]];
                    if (m === void 0) throw new SyntaxError(`Non-${n} character`);
                    c = c << t | m, a += t, a >= 8 && (a -= 8, i[l++] = 255 & c >> a);
                }
                if (a >= t || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                return i;
            }, Og = (e, r, t)=>{
                let n = r[r.length - 1] === "=", s = (1 << t) - 1, o = "", i = 0, a = 0;
                for(let c = 0; c < e.length; ++c)for(a = a << 8 | e[c], i += 8; i > t;)i -= t, o += r[s & a >> i];
                if (i && (o += r[s & a << t - i]), n) for(; o.length * t & 7;)o += "=";
                return o;
            }, N = ({ name: e , prefix: r , bitsPerChar: t , alphabet: n  })=>et({
                    prefix: r,
                    name: e,
                    encode (s) {
                        return Og(s, n, t);
                    },
                    decode (s) {
                        return Dg(s, n, t, e);
                    }
                })
            ;
        });
        var Cr = {
        };
        U(Cr, {
            base58btc: ()=>ve
            ,
            base58flickr: ()=>Lg
        });
        var ve, Lg, Ar = w(()=>{
            Ee();
            ve = De({
                name: "base58btc",
                prefix: "z",
                alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            }), Lg = De({
                name: "base58flickr",
                prefix: "Z",
                alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
            });
        });
        var rt = {
        };
        U(rt, {
            base32: ()=>er
            ,
            base32hex: ()=>Fg
            ,
            base32hexpad: ()=>Hg
            ,
            base32hexpadupper: ()=>Vg
            ,
            base32hexupper: ()=>Mg
            ,
            base32pad: ()=>Rg
            ,
            base32padupper: ()=>zg
            ,
            base32upper: ()=>$g
            ,
            base32z: ()=>Wg
        });
        var er, $g, Rg, zg, Fg, Mg, Hg, Vg, Wg, tt = w(()=>{
            Ee();
            er = N({
                prefix: "b",
                name: "base32",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                bitsPerChar: 5
            }), $g = N({
                prefix: "B",
                name: "base32upper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                bitsPerChar: 5
            }), Rg = N({
                prefix: "c",
                name: "base32pad",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                bitsPerChar: 5
            }), zg = N({
                prefix: "C",
                name: "base32padupper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                bitsPerChar: 5
            }), Fg = N({
                prefix: "v",
                name: "base32hex",
                alphabet: "0123456789abcdefghijklmnopqrstuv",
                bitsPerChar: 5
            }), Mg = N({
                prefix: "V",
                name: "base32hexupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                bitsPerChar: 5
            }), Hg = N({
                prefix: "t",
                name: "base32hexpad",
                alphabet: "0123456789abcdefghijklmnopqrstuv=",
                bitsPerChar: 5
            }), Vg = N({
                prefix: "T",
                name: "base32hexpadupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                bitsPerChar: 5
            }), Wg = N({
                prefix: "h",
                name: "base32z",
                alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                bitsPerChar: 5
            });
        });
        var P = {
        };
        U(P, {
            CID: ()=>B
        });
        var B, Gg, Jg, Kg, jr, Xg, uo, lo, nt, st, Zg, Qg, Yg, E = w(()=>{
            Zr();
            Tr();
            Ar();
            tt();
            Ie();
            B = class {
                constructor(r, t, n, s){
                    this.code = t, this.version = r, this.multihash = n, this.bytes = s, this.byteOffset = s.byteOffset, this.byteLength = s.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: st,
                        byteLength: st,
                        code: nt,
                        version: nt,
                        multihash: nt,
                        bytes: nt,
                        _baseCache: st,
                        asCID: st
                    });
                }
                toV0() {
                    switch(this.version){
                        case 0:
                            return this;
                        default:
                            {
                                let { code: r , multihash: t  } = this;
                                if (r !== jr) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                                if (t.code !== Xg) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                                return B.createV0(t);
                            }
                    }
                }
                toV1() {
                    switch(this.version){
                        case 0:
                            {
                                let { code: r , digest: t  } = this.multihash, n = vr(r, t);
                                return B.createV1(this.code, n);
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
                    }
                }
                equals(r) {
                    return r && this.code === r.code && this.version === r.version && en(this.multihash, r.multihash);
                }
                toString(r) {
                    let { bytes: t , version: n , _baseCache: s  } = this;
                    switch(n){
                        case 0:
                            return Jg(t, s, r || ve.encoder);
                        default:
                            return Kg(t, s, r || er.encoder);
                    }
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    };
                }
                get [Symbol.toStringTag]() {
                    return "CID";
                }
                [Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")";
                }
                static isCID(r) {
                    return Qg(/^0\.0/, Yg), !!(r && (r[lo] || r.asCID === r));
                }
                get toBaseEncodedString() {
                    throw new Error("Deprecated, use .toString()");
                }
                get codec() {
                    throw new Error('"codec" property is deprecated, use integer "code" property instead');
                }
                get buffer() {
                    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
                }
                get multibaseName() {
                    throw new Error('"multibaseName" property is deprecated');
                }
                get prefix() {
                    throw new Error('"prefix" property is deprecated');
                }
                static asCID(r) {
                    if (r instanceof B) return r;
                    if (r != null && r.asCID === r) {
                        let { version: t , code: n , multihash: s , bytes: o  } = r;
                        return new B(t, n, s, o || uo(t, n, s.bytes));
                    } else if (r != null && r[lo] === !0) {
                        let { version: t , multihash: n , code: s  } = r, o = Yt(n);
                        return B.create(t, s, o);
                    } else return null;
                }
                static create(r, t, n) {
                    if (typeof t != "number") throw new Error("String codecs are no longer supported");
                    switch(r){
                        case 0:
                            if (t !== jr) throw new Error(`Version 0 CID must use dag-pb (code: ${jr}) block encoding`);
                            return new B(r, t, n, n.bytes);
                        case 1:
                            {
                                let s = uo(r, t, n.bytes);
                                return new B(r, t, n, s);
                            }
                        default:
                            throw new Error("Invalid version");
                    }
                }
                static createV0(r) {
                    return B.create(0, jr, r);
                }
                static createV1(r, t) {
                    return B.create(1, r, t);
                }
                static decode(r) {
                    let [t, n] = B.decodeFirst(r);
                    if (n.length) throw new Error("Incorrect length");
                    return t;
                }
                static decodeFirst(r) {
                    let t = B.inspectBytes(r), n = t.size - t.multihashSize, s = ae(r.subarray(n, n + t.multihashSize));
                    if (s.byteLength !== t.multihashSize) throw new Error("Incorrect length");
                    let o = s.subarray(t.multihashSize - t.digestSize), i = new Ye(t.multihashCode, t.digestSize, o, s);
                    return [
                        t.version === 0 ? B.createV0(i) : B.createV1(t.codec, i),
                        r.subarray(t.size)
                    ];
                }
                static inspectBytes(r) {
                    let t = 0, n = ()=>{
                        let [m, x] = Qe(r.subarray(t));
                        return t += x, m;
                    }, s = n(), o = jr;
                    if (s === 18 ? (s = 0, t = 0) : s === 1 && (o = n()), s !== 0 && s !== 1) throw new RangeError(`Invalid CID version ${s}`);
                    let i = t, a = n(), c = n(), l = t + c, f = l - i;
                    return {
                        version: s,
                        codec: o,
                        multihashCode: a,
                        digestSize: c,
                        multihashSize: f,
                        size: l
                    };
                }
                static parse(r, t) {
                    let [n, s] = Gg(r, t), o = B.decode(s);
                    return o._baseCache.set(n, r), o;
                }
            }, Gg = (e, r)=>{
                switch(e[0]){
                    case "Q":
                        {
                            let t = r || ve;
                            return [
                                ve.prefix,
                                t.decode(`${ve.prefix}${e}`)
                            ];
                        }
                    case ve.prefix:
                        {
                            let t = r || ve;
                            return [
                                ve.prefix,
                                t.decode(e)
                            ];
                        }
                    case er.prefix:
                        {
                            let t = r || er;
                            return [
                                er.prefix,
                                t.decode(e)
                            ];
                        }
                    default:
                        if (r == null) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                        return [
                            e[0],
                            r.decode(e)
                        ];
                }
            }, Jg = (e, r, t)=>{
                let { prefix: n  } = t;
                if (n !== ve.prefix) throw Error(`Cannot string encode V0 in ${t.name} encoding`);
                let s = r.get(n);
                if (s == null) {
                    let o = t.encode(e).slice(1);
                    return r.set(n, o), o;
                } else return s;
            }, Kg = (e, r, t)=>{
                let { prefix: n  } = t, s = r.get(n);
                if (s == null) {
                    let o = t.encode(e);
                    return r.set(n, o), o;
                } else return s;
            }, jr = 112, Xg = 18, uo = (e, r, t)=>{
                let n = We(e), s = n + We(r), o = new Uint8Array(s + t.byteLength);
                return Ve(e, o, 0), Ve(r, o, n), o.set(t, s), o;
            }, lo = Symbol.for("@ipld/js-cid/CID"), nt = {
                writable: !1,
                configurable: !1,
                enumerable: !0
            }, st = {
                writable: !1,
                enumerable: !1,
                configurable: !1
            }, Zg = "0.0.0-dev", Qg = (e, r)=>{
                if (e.test(Zg)) console.warn(r);
                else throw new Error(r);
            }, Yg = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
        });
        var po = u((w3, ho)=>{
            var fo = "[a-fA-F\\d:]", Oe = (e)=>e && e.includeBoundaries ? `(?:(?<=\\s|^)(?=${fo})|(?<=${fo})(?=\\s|$))` : ""
            , he = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", O = "[a-fA-F\\d]{1,4}", ot = `
(?:
(?:${O}:){7}(?:${O}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${O}:){6}(?:${he}|:${O}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${O}:){5}(?::${he}|(?::${O}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${O}:){4}(?:(?::${O}){0,1}:${he}|(?::${O}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${O}:){3}(?:(?::${O}){0,2}:${he}|(?::${O}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${O}:){2}(?:(?::${O}){0,3}:${he}|(?::${O}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${O}:){1}(?:(?::${O}){0,4}:${he}|(?::${O}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${O}){0,5}:${he}|(?::${O}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), ey = new RegExp(`(?:^${he}$)|(?:^${ot}$)`), ry = new RegExp(`^${he}$`), ty = new RegExp(`^${ot}$`), rn = (e)=>e && e.exact ? ey : new RegExp(`(?:${Oe(e)}${he}${Oe(e)})|(?:${Oe(e)}${ot}${Oe(e)})`, "g")
            ;
            rn.v4 = (e)=>e && e.exact ? ry : new RegExp(`${Oe(e)}${he}${Oe(e)}`, "g")
            ;
            rn.v6 = (e)=>e && e.exact ? ty : new RegExp(`${Oe(e)}${ot}${Oe(e)}`, "g")
            ;
            ho.exports = rn;
        });
        var go = u((q3, mo)=>{
            var tn = po(), rr = (e)=>tn({
                    exact: !0
                }).test(e)
            ;
            rr.v4 = (e)=>tn.v4({
                    exact: !0
                }).test(e)
            ;
            rr.v6 = (e)=>tn.v6({
                    exact: !0
                }).test(e)
            ;
            rr.version = (e)=>rr(e) ? rr.v4(e) ? 4 : 6 : void 0
            ;
            mo.exports = rr;
        });
        var nn = {
        };
        U(nn, {
            identity: ()=>ny
        });
        var ny, yo = w(()=>{
            Ee();
            Ie();
            ny = et({
                prefix: "\0",
                name: "identity",
                encode: (e)=>Qt(e)
                ,
                decode: (e)=>Zt(e)
            });
        });
        var sn = {
        };
        U(sn, {
            base2: ()=>sy
        });
        var sy, bo = w(()=>{
            Ee();
            sy = N({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
        });
        var on = {
        };
        U(on, {
            base8: ()=>oy
        });
        var oy, wo = w(()=>{
            Ee();
            oy = N({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
        });
        var an = {
        };
        U(an, {
            base10: ()=>iy
        });
        var iy, qo = w(()=>{
            Ee();
            iy = De({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
        });
        var cn = {
        };
        U(cn, {
            base16: ()=>ay
            ,
            base16upper: ()=>cy
        });
        var ay, cy, xo = w(()=>{
            Ee();
            ay = N({
                prefix: "f",
                name: "base16",
                alphabet: "0123456789abcdef",
                bitsPerChar: 4
            }), cy = N({
                prefix: "F",
                name: "base16upper",
                alphabet: "0123456789ABCDEF",
                bitsPerChar: 4
            });
        });
        var un = {
        };
        U(un, {
            base36: ()=>uy
            ,
            base36upper: ()=>ly
        });
        var uy, ly, So = w(()=>{
            Ee();
            uy = De({
                prefix: "k",
                name: "base36",
                alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
            }), ly = De({
                prefix: "K",
                name: "base36upper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            });
        });
        var ln = {
        };
        U(ln, {
            base64: ()=>fy
            ,
            base64pad: ()=>dy
            ,
            base64url: ()=>hy
            ,
            base64urlpad: ()=>py
        });
        var fy, dy, hy, py, Eo = w(()=>{
            Ee();
            fy = N({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            }), dy = N({
                prefix: "M",
                name: "base64pad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                bitsPerChar: 6
            }), hy = N({
                prefix: "u",
                name: "base64url",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                bitsPerChar: 6
            }), py = N({
                prefix: "U",
                name: "base64urlpad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                bitsPerChar: 6
            });
        });
        var it = {
        };
        U(it, {
            Hasher: ()=>fn
            ,
            from: ()=>tr
        });
        var tr, fn, at = w(()=>{
            Tr();
            tr = ({ name: e , code: r , encode: t  })=>new fn(e, r, t)
            , fn = class {
                constructor(r, t, n){
                    this.name = r, this.code = t, this.encode = n;
                }
                async digest(r) {
                    if (r instanceof Uint8Array) {
                        let t = await this.encode(r);
                        return vr(this.code, t);
                    } else throw Error("Unknown type, must be binary type");
                }
            };
        });
        var dn = {
        };
        U(dn, {
            sha256: ()=>my
            ,
            sha512: ()=>gy
        });
        var vo, my, gy, Po = w(()=>{
            at();
            vo = (e)=>async (r)=>new Uint8Array(await crypto.subtle.digest(e, r))
            , my = tr({
                name: "sha2-256",
                code: 18,
                encode: vo("SHA-256")
            }), gy = tr({
                name: "sha2-512",
                code: 19,
                encode: vo("SHA-512")
            });
        });
        var ct = {
        };
        U(ct, {
            identity: ()=>yy
        });
        var yy, hn = w(()=>{
            at();
            Ie();
            yy = tr({
                name: "identity",
                code: 0,
                encode: (e)=>ae(e)
            });
        });
        var pn = {
        };
        U(pn, {
            code: ()=>wy
            ,
            decode: ()=>xy
            ,
            encode: ()=>qy
            ,
            name: ()=>by
        });
        var by, wy, qy, xy, To = w(()=>{
            Ie();
            by = "raw", wy = 85, qy = (e)=>ae(e)
            , xy = (e)=>ae(e)
            ;
        });
        var mn = {
        };
        U(mn, {
            code: ()=>Py
            ,
            decode: ()=>Cy
            ,
            encode: ()=>Ty
            ,
            name: ()=>vy
        });
        var Sy, Ey, vy, Py, Ty, Cy, Co = w(()=>{
            Sy = new TextEncoder, Ey = new TextDecoder, vy = "json", Py = 512, Ty = (e)=>Sy.encode(JSON.stringify(e))
            , Cy = (e)=>JSON.parse(Ey.decode(e))
            ;
        });
        var Ao = w(()=>{
            E();
            Zr();
            Ie();
            at();
            Tr();
        });
        var jo = {
        };
        U(jo, {
            CID: ()=>B
            ,
            bases: ()=>ut
            ,
            bytes: ()=>Qr
            ,
            codecs: ()=>jy
            ,
            digest: ()=>Pr
            ,
            hasher: ()=>it
            ,
            hashes: ()=>Ay
            ,
            varint: ()=>Xr
        });
        var ut, Ay, jy, gn = w(()=>{
            yo();
            bo();
            wo();
            qo();
            xo();
            tt();
            So();
            Ar();
            Eo();
            Po();
            hn();
            To();
            Co();
            Ao();
            ut = {
                ...nn,
                ...sn,
                ...on,
                ...an,
                ...cn,
                ...rt,
                ...un,
                ...Cr,
                ...ln
            }, Ay = {
                ...dn,
                ...ct
            }, jy = {
                raw: pn,
                json: mn
            };
        });
        function Bo(e, r, t, n) {
            return {
                name: e,
                prefix: r,
                encoder: {
                    name: e,
                    prefix: r,
                    encode: t
                },
                decoder: {
                    decode: n
                }
            };
        }
        var Uo, yn, By, lt, bn = w(()=>{
            gn();
            Uo = Bo("utf8", "u", (e)=>{
                let r = new TextDecoder("utf8");
                return "u" + r.decode(e);
            }, (e)=>new TextEncoder().encode(e.substring(1))
            ), yn = Bo("ascii", "a", (e)=>{
                let r = "a";
                for(let t = 0; t < e.length; t++)r += String.fromCharCode(e[t]);
                return r;
            }, (e)=>{
                e = e.substring(1);
                let r = new Uint8Array(e.length);
                for(let t = 0; t < e.length; t++)r[t] = e.charCodeAt(t);
                return r;
            }), By = {
                utf8: Uo,
                "utf-8": Uo,
                hex: ut.base16,
                latin1: yn,
                ascii: yn,
                binary: yn,
                ...ut
            }, lt = By;
        });
        var Le = {
        };
        U(Le, {
            toString: ()=>Uy
        });
        function Uy(e, r = "utf8") {
            let t = lt[r];
            if (!t) throw new Error(`Unsupported encoding "${r}"`);
            return t.encoder.encode(e).substring(1);
        }
        var $e = w(()=>{
            bn();
        });
        var Do = u((R3, Io)=>{
            var wn = go(), { toString: ko  } = ($e(), Le), ky = wn, qn = wn.v4, _o = wn.v6, No = function(e, r, t) {
                t = ~~t;
                let n;
                if (qn(e)) n = r || new Uint8Array(t + 4), e.split(/\./g).map(function(s) {
                    n[t++] = parseInt(s, 10) & 255;
                });
                else if (_o(e)) {
                    let s = e.split(":", 8), o;
                    for(o = 0; o < s.length; o++){
                        let i = qn(s[o]), a;
                        i && (a = No(s[o]), s[o] = ko(a.slice(0, 2), "base16")), a && ++o < 8 && s.splice(o, 0, ko(a.slice(2, 4), "base16"));
                    }
                    if (s[0] === "") for(; s.length < 8;)s.unshift("0");
                    else if (s[s.length - 1] === "") for(; s.length < 8;)s.push("0");
                    else if (s.length < 8) {
                        for(o = 0; o < s.length && s[o] !== ""; o++);
                        let i = [
                            o,
                            "1"
                        ];
                        for(o = 9 - s.length; o > 0; o--)i.push("0");
                        s.splice.apply(s, i);
                    }
                    for(n = r || new Uint8Array(t + 16), o = 0; o < s.length; o++){
                        let i = parseInt(s[o], 16);
                        n[t++] = i >> 8 & 255, n[t++] = i & 255;
                    }
                }
                if (!n) throw Error("Invalid ip address: " + e);
                return n;
            }, _y = function(e, r, t) {
                r = ~~r, t = t || e.length - r;
                let n = [], s, o = new DataView(e.buffer);
                if (t === 4) {
                    for(let i = 0; i < t; i++)n.push(e[r + i]);
                    s = n.join(".");
                } else if (t === 16) {
                    for(let i = 0; i < t; i += 2)n.push(o.getUint16(r + i).toString(16));
                    s = n.join(":"), s = s.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3"), s = s.replace(/:{3,4}/, "::");
                }
                return s;
            };
            Io.exports = {
                isIP: ky,
                isV4: qn,
                isV6: _o,
                toBytes: No,
                toString: _y
            };
        });
        var ft = u((z3, Lo)=>{
            function G(e) {
                if (typeof e == "number") {
                    if (G.codes[e]) return G.codes[e];
                    throw new Error("no protocol with code: " + e);
                } else if (typeof e == "string") {
                    if (G.names[e]) return G.names[e];
                    throw new Error("no protocol with name: " + e);
                }
                throw new Error("invalid protocol id type: " + e);
            }
            var ce = -1;
            G.lengthPrefixedVarSize = ce;
            G.V = ce;
            G.table = [
                [
                    4,
                    32,
                    "ip4"
                ],
                [
                    6,
                    16,
                    "tcp"
                ],
                [
                    33,
                    16,
                    "dccp"
                ],
                [
                    41,
                    128,
                    "ip6"
                ],
                [
                    42,
                    ce,
                    "ip6zone"
                ],
                [
                    53,
                    ce,
                    "dns",
                    "resolvable"
                ],
                [
                    54,
                    ce,
                    "dns4",
                    "resolvable"
                ],
                [
                    55,
                    ce,
                    "dns6",
                    "resolvable"
                ],
                [
                    56,
                    ce,
                    "dnsaddr",
                    "resolvable"
                ],
                [
                    132,
                    16,
                    "sctp"
                ],
                [
                    273,
                    16,
                    "udp"
                ],
                [
                    275,
                    0,
                    "p2p-webrtc-star"
                ],
                [
                    276,
                    0,
                    "p2p-webrtc-direct"
                ],
                [
                    277,
                    0,
                    "p2p-stardust"
                ],
                [
                    290,
                    0,
                    "p2p-circuit"
                ],
                [
                    301,
                    0,
                    "udt"
                ],
                [
                    302,
                    0,
                    "utp"
                ],
                [
                    400,
                    ce,
                    "unix",
                    !1,
                    "path"
                ],
                [
                    421,
                    ce,
                    "ipfs"
                ],
                [
                    421,
                    ce,
                    "p2p"
                ],
                [
                    443,
                    0,
                    "https"
                ],
                [
                    444,
                    96,
                    "onion"
                ],
                [
                    445,
                    296,
                    "onion3"
                ],
                [
                    446,
                    ce,
                    "garlic64"
                ],
                [
                    460,
                    0,
                    "quic"
                ],
                [
                    477,
                    0,
                    "ws"
                ],
                [
                    478,
                    0,
                    "wss"
                ],
                [
                    479,
                    0,
                    "p2p-websocket-star"
                ],
                [
                    480,
                    0,
                    "http"
                ],
                [
                    777,
                    ce,
                    "memory"
                ]
            ];
            G.names = {
            };
            G.codes = {
            };
            G.table.map((e)=>{
                let r = Oo.apply(null, e);
                return G.codes[r.code] = r, G.names[r.name] = r, null;
            });
            G.object = Oo;
            function Oo(e, r, t, n, s) {
                return {
                    code: e,
                    size: r,
                    name: t,
                    resolvable: Boolean(n),
                    path: Boolean(s)
                };
            }
            Lo.exports = G;
        });
        var zo = u((F3, Ro)=>{
            Ro.exports = xn;
            var $o = 128, Ny = 127, Iy = ~Ny, Dy = Math.pow(2, 31);
            function xn(e, r, t) {
                if (Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER) throw xn.bytes = 0, new RangeError("Could not encode varint");
                r = r || [], t = t || 0;
                for(var n = t; e >= Dy;)r[t++] = e & 255 | $o, e /= 128;
                for(; e & Iy;)r[t++] = e & 255 | $o, e >>>= 7;
                return r[t] = e | 0, xn.bytes = t - n + 1, r;
            }
        });
        var Ho = u((M3, Mo)=>{
            Mo.exports = Sn;
            var Oy = 128, Fo = 127;
            function Sn(e, r) {
                var t = 0, r = r || 0, n = 0, s = r, o, i = e.length;
                do {
                    if (s >= i || n > 49) throw Sn.bytes = 0, new RangeError("Could not decode varint");
                    o = e[s++], t += n < 28 ? (o & Fo) << n : (o & Fo) * Math.pow(2, n), n += 7;
                }while (o >= Oy)
                return Sn.bytes = s - r, t;
            }
        });
        var Wo = u((H3, Vo)=>{
            var Ly = Math.pow(2, 7), $y = Math.pow(2, 14), Ry = Math.pow(2, 21), zy = Math.pow(2, 28), Fy = Math.pow(2, 35), My = Math.pow(2, 42), Hy = Math.pow(2, 49), Vy = Math.pow(2, 56), Wy = Math.pow(2, 63);
            Vo.exports = function(e) {
                return e < Ly ? 1 : e < $y ? 2 : e < Ry ? 3 : e < zy ? 4 : e < Fy ? 5 : e < My ? 6 : e < Hy ? 7 : e < Vy ? 8 : e < Wy ? 9 : 10;
            };
        });
        var dt = u((V3, Go)=>{
            Go.exports = {
                encode: zo(),
                decode: Ho(),
                encodingLength: Wo()
            };
        });
        var nr = {
        };
        U(nr, {
            fromString: ()=>Gy
        });
        function Gy(e, r = "utf8") {
            let t = lt[r];
            if (!t) throw new Error(`Unsupported encoding "${r}"`);
            return t.decoder.decode(`${t.prefix}${e}`);
        }
        var sr = w(()=>{
            bn();
        });
        var En = {
        };
        U(En, {
            concat: ()=>Jy
        });
        function Jy(e, r) {
            r || (r = e.reduce((s, o)=>s + o.length
            , 0));
            let t = new Uint8Array(r), n = 0;
            for (let s1 of e)t.set(s1, n), n += s1.length;
            return t;
        }
        var vn = w(()=>{
        });
        var ri = u((G3, ei)=>{
            var ht = Do(), Jo = ft(), { CID: Ky  } = (E(), P), { base32: Ko  } = (tt(), rt), { base58btc: Xy  } = (Ar(), Cr), Zy = (Tr(), Pr), or = dt(), { toString: pt  } = ($e(), Le), { fromString: Xo  } = (sr(), nr), { concat: mt  } = (vn(), En);
            ei.exports = Br;
            function Br(e, r) {
                return r instanceof Uint8Array ? Br.toString(e, r) : Br.toBytes(e, r);
            }
            Br.toString = function(r, t) {
                switch(Jo(r).code){
                    case 4:
                    case 41:
                        return Qy(t);
                    case 6:
                    case 273:
                    case 33:
                    case 132:
                        return Qo(t).toString();
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 400:
                    case 777:
                        return eb(t);
                    case 421:
                        return tb(t);
                    case 444:
                        return Yo(t);
                    case 445:
                        return Yo(t);
                    default:
                        return pt(t, "base16");
                }
            };
            Br.toBytes = function(r, t) {
                switch(Jo(r).code){
                    case 4:
                        return Zo(t);
                    case 41:
                        return Zo(t);
                    case 6:
                    case 273:
                    case 33:
                    case 132:
                        return Pn(parseInt(t, 10));
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 400:
                    case 777:
                        return Yy(t);
                    case 421:
                        return rb(t);
                    case 444:
                        return nb(t);
                    case 445:
                        return sb(t);
                    default:
                        return Xo(t, "base16");
                }
            };
            function Zo(e) {
                if (!ht.isIP(e)) throw new Error("invalid ip address");
                return ht.toBytes(e);
            }
            function Qy(e) {
                let r = ht.toString(e);
                if (!r || !ht.isIP(r)) throw new Error("invalid ip address");
                return r;
            }
            function Pn(e) {
                let r = new ArrayBuffer(2);
                return new DataView(r).setUint16(0, e), new Uint8Array(r);
            }
            function Qo(e) {
                return new DataView(e.buffer).getUint16(e.byteOffset);
            }
            function Yy(e) {
                let r = Xo(e), t = Uint8Array.from(or.encode(r.length));
                return mt([
                    t,
                    r
                ], t.length + r.length);
            }
            function eb(e) {
                let r = or.decode(e);
                if (e = e.slice(or.decode.bytes), e.length !== r) throw new Error("inconsistent lengths");
                return pt(e);
            }
            function rb(e) {
                let r;
                e[0] === "Q" || e[0] === "1" ? r = Zy.decode(Xy.decode(`z${e}`)).bytes : r = Ky.parse(e).multihash.bytes;
                let t = Uint8Array.from(or.encode(r.length));
                return mt([
                    t,
                    r
                ], t.length + r.length);
            }
            function tb(e) {
                let r = or.decode(e), t = e.slice(or.decode.bytes);
                if (t.length !== r) throw new Error("inconsistent lengths");
                return pt(t, "base58btc");
            }
            function nb(e) {
                let r = e.split(":");
                if (r.length !== 2) throw new Error("failed to parse onion addr: " + r + " does not contain a port number");
                if (r[0].length !== 16) throw new Error("failed to parse onion addr: " + r[0] + " not a Tor onion address.");
                let t = Ko.decode("b" + r[0]), n = parseInt(r[1], 10);
                if (n < 1 || n > 65536) throw new Error("Port number is not in range(1, 65536)");
                let s = Pn(n);
                return mt([
                    t,
                    s
                ], t.length + s.length);
            }
            function sb(e) {
                let r = e.split(":");
                if (r.length !== 2) throw new Error("failed to parse onion addr: " + r + " does not contain a port number");
                if (r[0].length !== 56) throw new Error("failed to parse onion addr: " + r[0] + " not a Tor onion3 address.");
                let t = Ko.decode("b" + r[0]), n = parseInt(r[1], 10);
                if (n < 1 || n > 65536) throw new Error("Port number is not in range(1, 65536)");
                let s = Pn(n);
                return mt([
                    t,
                    s
                ], t.length + s.length);
            }
            function Yo(e) {
                let r = e.slice(0, e.length - 2), t = e.slice(e.length - 2), n = pt(r, "base32"), s = Qo(t);
                return n + ":" + s;
            }
        });
        var hi = u((J3, di)=>{
            var ti = ri(), Tn = ft(), Ur = dt(), { concat: ni  } = (vn(), En), { toString: ob  } = ($e(), Le);
            di.exports = {
                stringToStringTuples: si,
                stringTuplesToString: oi,
                tuplesToStringTuples: ai,
                stringTuplesToTuples: ii,
                bytesToTuples: Cn,
                tuplesToBytes: ci,
                bytesToString: ib,
                stringToBytes: li,
                fromString: ab,
                fromBytes: fi,
                validateBytes: An,
                isValidBytes: cb,
                cleanPath: gt,
                ParseError: jn,
                protoFromTuple: kr,
                sizeForAddr: ui
            };
            function si(e) {
                let r = [], t = e.split("/").slice(1);
                if (t.length === 1 && t[0] === "") return [];
                for(let n = 0; n < t.length; n++){
                    let s = t[n], o = Tn(s);
                    if (o.size === 0) {
                        r.push([
                            s
                        ]);
                        continue;
                    }
                    if (n++, n >= t.length) throw jn("invalid address: " + e);
                    if (o.path) {
                        r.push([
                            s,
                            gt(t.slice(n).join("/"))
                        ]);
                        break;
                    }
                    r.push([
                        s,
                        t[n]
                    ]);
                }
                return r;
            }
            function oi(e) {
                let r = [];
                return e.map((t)=>{
                    let n = kr(t);
                    return r.push(n.name), t.length > 1 && r.push(t[1]), null;
                }), gt(r.join("/"));
            }
            function ii(e) {
                return e.map((r)=>{
                    Array.isArray(r) || (r = [
                        r
                    ]);
                    let t = kr(r);
                    return r.length > 1 ? [
                        t.code,
                        ti.toBytes(t.code, r[1])
                    ] : [
                        t.code
                    ];
                });
            }
            function ai(e) {
                return e.map((r)=>{
                    let t = kr(r);
                    return r[1] ? [
                        t.code,
                        ti.toString(t.code, r[1])
                    ] : [
                        t.code
                    ];
                });
            }
            function ci(e) {
                return fi(ni(e.map((r)=>{
                    let t = kr(r), n = Uint8Array.from(Ur.encode(t.code));
                    return r.length > 1 && (n = ni([
                        n,
                        r[1]
                    ])), n;
                })));
            }
            function ui(e, r) {
                return e.size > 0 ? e.size / 8 : e.size === 0 ? 0 : Ur.decode(r) + Ur.decode.bytes;
            }
            function Cn(e) {
                let r = [], t = 0;
                for(; t < e.length;){
                    let n = Ur.decode(e, t), s = Ur.decode.bytes, o = Tn(n), i = ui(o, e.slice(t + s));
                    if (i === 0) {
                        r.push([
                            n
                        ]), t += s;
                        continue;
                    }
                    let a = e.slice(t + s, t + s + i);
                    if (t += i + s, t > e.length) throw jn("Invalid address Uint8Array: " + ob(e, "base16"));
                    r.push([
                        n,
                        a
                    ]);
                }
                return r;
            }
            function ib(e) {
                let r = Cn(e), t = ai(r);
                return oi(t);
            }
            function li(e) {
                e = gt(e);
                let r = si(e), t = ii(r);
                return ci(t);
            }
            function ab(e) {
                return li(e);
            }
            function fi(e) {
                let r = An(e);
                if (r) throw r;
                return Uint8Array.from(e);
            }
            function An(e) {
                try {
                    Cn(e);
                } catch (r) {
                    return r;
                }
            }
            function cb(e) {
                return An(e) === void 0;
            }
            function gt(e) {
                return "/" + e.trim().split("/").filter((r)=>r
                ).join("/");
            }
            function jn(e) {
                return new Error("Error parsing address: " + e);
            }
            function kr(e) {
                return Tn(e[0]);
            }
        });
        var gi = u((K3, mi)=>{
            function pi(e, r) {
                for(let t in r)Object.defineProperty(e, t, {
                    value: r[t],
                    enumerable: !0,
                    configurable: !0
                });
                return e;
            }
            function ub(e, r, t) {
                if (!e || typeof e == "string") throw new TypeError("Please pass an Error to err-code");
                t || (t = {
                }), typeof r == "object" && (t = r, r = ""), r && (t.code = r);
                try {
                    return pi(e, t);
                } catch (n) {
                    t.message = e.message, t.stack = e.stack;
                    let s = function() {
                    };
                    return s.prototype = Object.create(Object.getPrototypeOf(e)), pi(new s, t);
                }
            }
            mi.exports = ub;
        });
        var yi = {
        };
        U(yi, {
            equals: ()=>lb
        });
        function lb(e, r) {
            if (e === r) return !0;
            if (e.byteLength !== r.byteLength) return !1;
            for(let t = 0; t < e.byteLength; t++)if (e[t] !== r[t]) return !1;
            return !0;
        }
        var bi = w(()=>{
        });
        var $ = u((X3, xi)=>{
            var pe = hi(), ir = ft(), wi = dt(), { CID: fb  } = (E(), P), { base58btc: db  } = (Ar(), Cr), hb = gi(), pb = Symbol.for("nodejs.util.inspect.custom"), { toString: yt  } = ($e(), Le), { equals: mb  } = (bi(), yi), Bn = new Map, qi = Symbol.for("@multiformats/js-multiaddr/multiaddr"), V = class {
                constructor(r){
                    if (r == null && (r = ""), Object.defineProperty(this, qi, {
                        value: !0
                    }), r instanceof Uint8Array) this.bytes = pe.fromBytes(r);
                    else if (typeof r == "string") {
                        if (r.length > 0 && r.charAt(0) !== "/") throw new Error(`multiaddr "${r}" must start with a "/"`);
                        this.bytes = pe.fromString(r);
                    } else if (V.isMultiaddr(r)) this.bytes = pe.fromBytes(r.bytes);
                    else throw new Error("addr must be a string, Buffer, or another Multiaddr");
                }
                toString() {
                    return pe.bytesToString(this.bytes);
                }
                toJSON() {
                    return this.toString();
                }
                toOptions() {
                    let r = {
                    }, t = this.toString().split("/");
                    return r.family = t[1] === "ip4" ? 4 : 6, r.host = t[2], r.transport = t[3], r.port = parseInt(t[4]), r;
                }
                protos() {
                    return this.protoCodes().map((r)=>Object.assign({
                        }, ir(r))
                    );
                }
                protoCodes() {
                    let r = [], t = this.bytes, n = 0;
                    for(; n < t.length;){
                        let s = wi.decode(t, n), o = wi.decode.bytes, i = ir(s);
                        n += pe.sizeForAddr(i, t.slice(n + o)) + o, r.push(s);
                    }
                    return r;
                }
                protoNames() {
                    return this.protos().map((r)=>r.name
                    );
                }
                tuples() {
                    return pe.bytesToTuples(this.bytes);
                }
                stringTuples() {
                    let r = pe.bytesToTuples(this.bytes);
                    return pe.tuplesToStringTuples(r);
                }
                encapsulate(r) {
                    return r = new V(r), new V(this.toString() + r.toString());
                }
                decapsulate(r) {
                    let t = r.toString(), n = this.toString(), s = n.lastIndexOf(t);
                    if (s < 0) throw new Error("Address " + this + " does not contain subaddress: " + r);
                    return new V(n.slice(0, s));
                }
                decapsulateCode(r) {
                    let t = this.tuples();
                    for(let n = t.length - 1; n >= 0; n--)if (t[n][0] === r) return new V(pe.tuplesToBytes(t.slice(0, n)));
                    return this;
                }
                getPeerId() {
                    try {
                        let t = this.stringTuples().filter((n)=>n[0] === ir.names.ipfs.code
                        ).pop();
                        if (t && t[1]) {
                            let n = t[1];
                            return n[0] === "Q" || n[0] === "1" ? yt(db.decode(`z${n}`), "base58btc") : yt(fb.parse(n).multihash.bytes, "base58btc");
                        }
                        return null;
                    } catch (r) {
                        return null;
                    }
                }
                getPath() {
                    let r = null;
                    try {
                        r = this.stringTuples().filter((t)=>!!ir(t[0]).path
                        )[0][1], r || (r = null);
                    } catch (t) {
                        r = null;
                    }
                    return r;
                }
                equals(r) {
                    return mb(this.bytes, r.bytes);
                }
                async resolve() {
                    let r = this.protos().find((s)=>s.resolvable
                    );
                    if (!r) return [
                        this
                    ];
                    let t = Bn.get(r.name);
                    if (!t) throw hb(new Error(`no available resolver for ${r.name}`), "ERR_NO_AVAILABLE_RESOLVER");
                    return (await t(this)).map((s)=>new V(s)
                    );
                }
                nodeAddress() {
                    let r = this.protoCodes(), t = this.protoNames(), n = this.toString().split("/").slice(1);
                    if (n.length < 4) throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6}/{address}/{tcp, udp}/{port}".');
                    if (r[0] !== 4 && r[0] !== 41 && r[0] !== 54 && r[0] !== 55) throw new Error(`no protocol with name: "'${t[0]}'". Must have a valid family name: "{ip4, ip6, dns4, dns6}".`);
                    if (n[2] !== "tcp" && n[2] !== "udp") throw new Error(`no protocol with name: "'${t[1]}'". Must have a valid transport protocol: "{tcp, udp}".`);
                    return {
                        family: r[0] === 41 || r[0] === 55 ? 6 : 4,
                        address: n[1],
                        port: parseInt(n[3])
                    };
                }
                isThinWaistAddress(r) {
                    let t = (r || this).protos();
                    return !(t.length !== 2 || t[0].code !== 4 && t[0].code !== 41 || t[1].code !== 6 && t[1].code !== 273);
                }
                static fromNodeAddress(r, t) {
                    if (!r) throw new Error("requires node address object");
                    if (!t) throw new Error("requires transport protocol");
                    let n;
                    switch(r.family){
                        case 4:
                            n = "ip4";
                            break;
                        case 6:
                            n = "ip6";
                            break;
                        default:
                            throw Error(`Invalid addr family. Got '${r.family}' instead of 4 or 6`);
                    }
                    return new V("/" + [
                        n,
                        r.address,
                        t,
                        r.port
                    ].join("/"));
                }
                static isName(r) {
                    return V.isMultiaddr(r) ? r.protos().some((t)=>t.resolvable
                    ) : !1;
                }
                static isMultiaddr(r) {
                    return r instanceof V || Boolean(r && r[qi]);
                }
                [pb]() {
                    return "<Multiaddr " + yt(this.bytes, "base16") + " - " + pe.bytesToString(this.bytes) + ">";
                }
                inspect() {
                    return "<Multiaddr " + yt(this.bytes, "base16") + " - " + pe.bytesToString(this.bytes) + ">";
                }
            };
            V.protocols = ir;
            V.resolvers = Bn;
            function gb(e) {
                return new V(e);
            }
            xi.exports = {
                Multiaddr: V,
                multiaddr: gb,
                protocols: ir,
                resolvers: Bn
            };
        });
        var Si = u(()=>{
        });
        var Un = u((bt)=>{
            var Ei = class extends Error {
                constructor(r = "Request timed out"){
                    super(r);
                    this.name = "TimeoutError";
                }
            };
            bt.TimeoutError = Ei;
            var vi = class extends Error {
                constructor(r = "The operation was aborted."){
                    super(r);
                    this.name = "AbortError";
                }
            };
            bt.AbortError = vi;
            var Pi = class extends Error {
                constructor(r){
                    super(r.statusText);
                    this.name = "HTTPError", this.response = r;
                }
            };
            bt.HTTPError = Pi;
        });
        var Ci = u((eE, Ti)=>{
            function yb() {
                return typeof window != "undefined" && typeof window.process == "object" && window.process.type === "renderer" || typeof $4piS4 != "undefined" && typeof $4piS4.versions == "object" && !!$4piS4.versions.electron || typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Electron") >= 0;
            }
            Ti.exports = yb;
        });
        var kn = u((rE, Ai)=>{
            var bb = Ci(), wt = typeof window == "object" && typeof document == "object" && document.nodeType === 9, _r = bb(), wb = wt && !_r, qb = _r && !wt, xb = _r && wt, Sb = typeof Zs == "function" && typeof $4piS4 != "undefined" && typeof $4piS4.release != "undefined" && $4piS4.release.name === "node" && !_r, Eb = typeof importScripts == "function" && typeof self != "undefined" && typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope, vb = typeof $4piS4 != "undefined" && typeof $4piS4.env != "undefined" && !1, Pb = typeof navigator != "undefined" && navigator.product === "ReactNative";
            Ai.exports = {
                isTest: vb,
                isElectron: _r,
                isElectronMain: qb,
                isElectronRenderer: xb,
                isNode: Sb,
                isBrowser: wb,
                isWebWorker: Eb,
                isEnvWithDom: wt,
                isReactNative: Pb
            };
        });
        var ji = u(()=>{
        });
        var Nr = u((ar, Bi)=>{
            var Tb = function() {
                if (typeof self != "undefined") return self;
                if (typeof window != "undefined") return window;
                if (typeof Be != "undefined") return Be;
                throw new Error("unable to locate global object");
            }, Be = Tb();
            Bi.exports = ar = Be.fetch;
            Be.fetch && (ar.default = Be.fetch.bind(Be));
            ar.Headers = Be.Headers;
            ar.Request = Be.Request;
            ar.Response = Be.Response;
        });
        var Ui = u((sE, _n)=>{
            globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response ? _n.exports = {
                default: globalThis.fetch,
                Headers: globalThis.Headers,
                Request: globalThis.Request,
                Response: globalThis.Response
            } : _n.exports = {
                default: Nr().default,
                Headers: Nr().Headers,
                Request: Nr().Request,
                Response: Nr().Response
            };
        });
        var ki = u((oE, Nn)=>{
            var { isElectronMain: Cb  } = kn();
            Cb ? Nn.exports = ji() : Nn.exports = Ui();
        });
        var Di = u((iE, Ii)=>{
            var { TimeoutError: Ab , AbortError: jb  } = Un(), { Response: _i , Request: Bb , Headers: In , default: Ub  } = ki(), kb = (e, r = {
            })=>{
                let t = new XMLHttpRequest;
                t.open(r.method || "GET", e.toString(), !0);
                let { timeout: n , headers: s  } = r;
                if (n && n > 0 && n < 1 / 0 && (t.timeout = n), r.overrideMimeType != null && t.overrideMimeType(r.overrideMimeType), s) for (let [o1, i1] of new In(s))t.setRequestHeader(o1, i1);
                return r.signal && (r.signal.onabort = ()=>t.abort()
                ), r.onUploadProgress && (t.upload.onprogress = r.onUploadProgress), t.responseType = "arraybuffer", new Promise((o, i)=>{
                    let a = (c)=>{
                        switch(c.type){
                            case "error":
                                o(_i.error());
                                break;
                            case "load":
                                o(new Ni(t.responseURL, t.response, {
                                    status: t.status,
                                    statusText: t.statusText,
                                    headers: Ib(t.getAllResponseHeaders())
                                }));
                                break;
                            case "timeout":
                                i(new Ab);
                                break;
                            case "abort":
                                i(new jb);
                                break;
                            default:
                                break;
                        }
                    };
                    t.onerror = a, t.onload = a, t.ontimeout = a, t.onabort = a, t.send(r.body);
                });
            }, _b = Ub, Nb = (e, r = {
            })=>r.onUploadProgress != null ? kb(e, r) : _b(e, r)
            , Ib = (e)=>{
                let r = new In;
                for (let t of e.trim().split(/[\r\n]+/)){
                    let n = t.indexOf(": ");
                    n > 0 && r.set(t.slice(0, n), t.slice(n + 1));
                }
                return r;
            }, Ni = class extends _i {
                constructor(r, t, n){
                    super(t, n);
                    Object.defineProperty(this, "url", {
                        value: r
                    });
                }
            };
            Ii.exports = {
                fetch: Nb,
                Request: Bb,
                Headers: In
            };
        });
        var Li = u((aE, Oi)=>{
            Oi.exports = (e)=>{
                if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
                let r = Object.getPrototypeOf(e);
                return r === null || r === Object.prototype;
            };
        });
        var On = u((Fi, Mi)=>{
            var qt = Li(), { hasOwnProperty: $i  } = Object.prototype, { propertyIsEnumerable: Db  } = Object, cr = (e, r, t)=>Object.defineProperty(e, r, {
                    value: t,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            , Ob = Fi, Ri = {
                concatArrays: !1,
                ignoreUndefined: !1
            }, xt = (e)=>{
                let r = [];
                for(let t in e)$i.call(e, t) && r.push(t);
                if (Object.getOwnPropertySymbols) {
                    let t = Object.getOwnPropertySymbols(e);
                    for (let n of t)Db.call(e, n) && r.push(n);
                }
                return r;
            };
            function ur(e) {
                return Array.isArray(e) ? Lb(e) : qt(e) ? $b(e) : e;
            }
            function Lb(e) {
                let r = e.slice(0, 0);
                return xt(e).forEach((t)=>{
                    cr(r, t, ur(e[t]));
                }), r;
            }
            function $b(e) {
                let r = Object.getPrototypeOf(e) === null ? Object.create(null) : {
                };
                return xt(e).forEach((t)=>{
                    cr(r, t, ur(e[t]));
                }), r;
            }
            var zi = (e, r, t, n)=>(t.forEach((s)=>{
                    typeof r[s] == "undefined" && n.ignoreUndefined || (s in e && e[s] !== Object.getPrototypeOf(e) ? cr(e, s, Dn(e[s], r[s], n)) : cr(e, s, ur(r[s])));
                }), e)
            , Rb = (e, r, t)=>{
                let n = e.slice(0, 0), s = 0;
                return [
                    e,
                    r
                ].forEach((o)=>{
                    let i = [];
                    for(let a1 = 0; a1 < o.length; a1++)!$i.call(o, a1) || (i.push(String(a1)), o === e ? cr(n, s++, o[a1]) : cr(n, s++, ur(o[a1])));
                    n = zi(n, o, xt(o).filter((a)=>!i.includes(a)
                    ), t);
                }), n;
            };
            function Dn(e, r, t) {
                return t.concatArrays && Array.isArray(e) && Array.isArray(r) ? Rb(e, r, t) : !qt(r) || !qt(e) ? ur(r) : zi(e, r, xt(r), t);
            }
            Mi.exports = function(...e) {
                let r = Dn(ur(Ri), this !== Ob && this || {
                }, Ri), t = {
                    _: {
                    }
                };
                for (let n of e)if (n !== void 0) {
                    if (!qt(n)) throw new TypeError("`" + n + "` is not an Option Object");
                    t = Dn(t, {
                        _: n
                    }, r);
                }
                return t._;
            };
        });
        var Ln = u((cE, Wi)=>{
            var zb = typeof navigator != "undefined" && navigator.product === "ReactNative";
            function Fb() {
                return zb ? "http://localhost" : self.location.protocol + "//" + self.location.host;
            }
            var Ir = self.URL, Hi = Fb(), Vi = class {
                constructor(r = "", t = Hi){
                    this.super = new Ir(r, t), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
                }
                get hash() {
                    return this.super.hash;
                }
                get host() {
                    return this.super.host;
                }
                get hostname() {
                    return this.super.hostname;
                }
                get href() {
                    return this.super.href;
                }
                get origin() {
                    return this.super.origin;
                }
                get password() {
                    return this.super.password;
                }
                get pathname() {
                    return this.super.pathname;
                }
                get port() {
                    return this.super.port;
                }
                get protocol() {
                    return this.super.protocol;
                }
                get search() {
                    return this.super.search;
                }
                get searchParams() {
                    return this.super.searchParams;
                }
                get username() {
                    return this.super.username;
                }
                set hash(r) {
                    this.super.hash = r;
                }
                set host(r) {
                    this.super.host = r;
                }
                set hostname(r) {
                    this.super.hostname = r;
                }
                set href(r) {
                    this.super.href = r;
                }
                set password(r) {
                    this.super.password = r;
                }
                set pathname(r) {
                    this.super.pathname = r;
                }
                set port(r) {
                    this.super.port = r;
                }
                set protocol(r) {
                    this.super.protocol = r;
                }
                set search(r) {
                    this.super.search = r;
                }
                set username(r) {
                    this.super.username = r;
                }
                static createObjectURL(r) {
                    return Ir.createObjectURL(r);
                }
                static revokeObjectURL(r) {
                    Ir.revokeObjectURL(r);
                }
                toJSON() {
                    return this.super.toJSON();
                }
                toString() {
                    return this.super.toString();
                }
                format() {
                    return this.toString();
                }
            };
            function Mb(e) {
                if (typeof e == "string") return new Ir(e).toString();
                if (!(e instanceof Ir)) {
                    let r = e.username && e.password ? `${e.username}:${e.password}@` : "", t = e.auth ? e.auth + "@" : "", n = e.port ? ":" + e.port : "", s = e.protocol ? e.protocol + "//" : "", o = e.host || "", i = e.hostname || "", a = e.search || (e.query ? "?" + e.query : ""), c = e.hash || "", l = e.pathname || "", f = e.path || l + a;
                    return `${s}${r || t}${o || i + n}${f}${c}`;
                }
            }
            Wi.exports = {
                URLWithLegacySupport: Vi,
                URLSearchParams: self.URLSearchParams,
                defaultBase: Hi,
                format: Mb
            };
        });
        var Ki = u((uE, Ji)=>{
            var { URLWithLegacySupport: Gi , format: Hb  } = Ln();
            Ji.exports = (e, r = {
            }, t = {
            }, n)=>{
                let s = r.protocol ? r.protocol.replace(":", "") : "http";
                s = (t[s] || n || s) + ":";
                let o;
                try {
                    o = new Gi(e);
                } catch (a) {
                    o = {
                    };
                }
                let i = Object.assign({
                }, r, {
                    protocol: s || o.protocol,
                    host: r.host || o.host
                });
                return new Gi(e, Hb(i)).toString();
            };
        });
        var Zi = u((lE, Xi)=>{
            var { URLWithLegacySupport: Vb , format: Wb , URLSearchParams: Gb , defaultBase: Jb  } = Ln(), Kb = Ki();
            Xi.exports = {
                URL: Vb,
                URLSearchParams: Gb,
                format: Wb,
                relative: Kb,
                defaultBase: Jb
            };
        });
        var Yi = u((fE, St)=>{
            var { AbortController: Qi , AbortSignal: Xb  } = typeof self != "undefined" ? self : typeof window != "undefined" ? window : void 0;
            St.exports = Qi;
            St.exports.AbortSignal = Xb;
            St.exports.default = Qi;
        });
        var J = u((dE, ea)=>{
            var Et;
            globalThis.AbortController && globalThis.AbortSignal ? Et = globalThis : Et = Yi();
            ea.exports = {
                AbortController: Et.AbortController,
                AbortSignal: Et.AbortSignal
            };
        });
        var Rn = u((hE, $n)=>{
            var { AbortController: Zb  } = J();
            function ra(e) {
                let r = new Zb;
                function t() {
                    r.abort();
                    for (let n of e)!n || !n.removeEventListener || n.removeEventListener("abort", t);
                }
                for (let n1 of e)if (!(!n1 || !n1.addEventListener)) {
                    if (n1.aborted) {
                        t();
                        break;
                    }
                    n1.addEventListener("abort", t);
                }
                return r.signal;
            }
            $n.exports = ra;
            $n.exports.anySignal = ra;
        });
        var Fn = u((pE, aa)=>{
            var { fetch: Qb , Request: Yb , Headers: ew  } = Di(), { TimeoutError: zn , HTTPError: ta  } = Un(), na = On().bind({
                ignoreUndefined: !0
            }), { URL: sa , URLSearchParams: oa  } = Zi(), { AbortController: rw  } = J(), tw = Rn(), nw = (e, r, t)=>{
                if (r === void 0) return e;
                let n = Date.now(), s = ()=>Date.now() - n >= r
                ;
                return new Promise((o, i)=>{
                    let a = setTimeout(()=>{
                        s() && (i(new zn), t.abort());
                    }, r), c = (l)=>(m)=>{
                            if (clearTimeout(a), s()) {
                                i(new zn);
                                return;
                            }
                            l(m);
                        }
                    ;
                    e.then(c(o), c(i));
                });
            }, sw = {
                throwHttpErrors: !0,
                credentials: "same-origin"
            }, W = class {
                constructor(r = {
                }){
                    this.opts = na(sw, r);
                }
                async fetch(r, t = {
                }) {
                    let n = na(this.opts, t), s = new ew(n.headers);
                    if (typeof r != "string" && !(r instanceof sa || r instanceof Yb)) throw new TypeError("`resource` must be a string, URL, or Request");
                    let o = new sa(r.toString(), n.base), { searchParams: i , transformSearchParams: a , json: c  } = n;
                    i && (typeof a == "function" ? o.search = a(new oa(n.searchParams)) : o.search = new oa(n.searchParams)), c && (n.body = JSON.stringify(n.json), s.set("content-type", "application/json"));
                    let l = new rw, f = tw([
                        l.signal,
                        n.signal
                    ]), m = await nw(Qb(o.toString(), {
                        ...n,
                        signal: f,
                        timeout: void 0,
                        headers: s
                    }), n.timeout, l);
                    if (!m.ok && n.throwHttpErrors) throw n.handleError && await n.handleError(m), new ta(m);
                    return m.iterator = function() {
                        return ia(m.body);
                    }, m.ndjson = async function*() {
                        for await (let x of ow(m.iterator()))t.transform ? yield t.transform(x) : yield x;
                    }, m;
                }
                post(r, t = {
                }) {
                    return this.fetch(r, {
                        ...t,
                        method: "POST"
                    });
                }
                get(r, t = {
                }) {
                    return this.fetch(r, {
                        ...t,
                        method: "GET"
                    });
                }
                put(r, t = {
                }) {
                    return this.fetch(r, {
                        ...t,
                        method: "PUT"
                    });
                }
                delete(r, t = {
                }) {
                    return this.fetch(r, {
                        ...t,
                        method: "DELETE"
                    });
                }
                options(r, t = {
                }) {
                    return this.fetch(r, {
                        ...t,
                        method: "OPTIONS"
                    });
                }
            }, ow = async function*(e) {
                let r = new TextDecoder, t = "";
                for await (let n of e){
                    t += r.decode(n, {
                        stream: !0
                    });
                    let s = t.split(/\r?\n/);
                    for(let o = 0; o < s.length - 1; o++){
                        let i = s[o].trim();
                        i.length > 0 && (yield JSON.parse(i));
                    }
                    t = s[s.length - 1];
                }
                t += r.decode(), t = t.trim(), t.length !== 0 && (yield JSON.parse(t));
            }, ia = (e)=>{
                if (cw(e)) {
                    let r = e[Symbol.asyncIterator]();
                    return {
                        [Symbol.asyncIterator] () {
                            return {
                                next: r.next.bind(r),
                                return (t) {
                                    return e.destroy(), typeof r.return == "function" ? r.return() : Promise.resolve({
                                        done: !0,
                                        value: t
                                    });
                                }
                            };
                        }
                    };
                }
                if (aw(e)) {
                    let r = e.getReader();
                    return (async function*() {
                        try {
                            for(;;){
                                let { done: t , value: n  } = await r.read();
                                if (t) return;
                                n && (yield n);
                            }
                        } finally{
                            r.releaseLock();
                        }
                    })();
                }
                if (iw(e)) return e;
                throw new TypeError("Body can't be converted to AsyncIterable");
            }, iw = (e)=>typeof e == "object" && e !== null && typeof e[Symbol.asyncIterator] == "function"
            , aw = (e)=>e && typeof e.getReader == "function"
            , cw = (e)=>Object.prototype.hasOwnProperty.call(e, "readable") && Object.prototype.hasOwnProperty.call(e, "writable")
            ;
            W.HTTPError = ta;
            W.TimeoutError = zn;
            W.streamToAsyncIterator = ia;
            W.post = (e, r)=>new W(r).post(e, r)
            ;
            W.get = (e, r)=>new W(r).get(e, r)
            ;
            W.put = (e, r)=>new W(r).put(e, r)
            ;
            W.delete = (e, r)=>new W(r).delete(e, r)
            ;
            W.options = (e, r)=>new W(r).options(e, r)
            ;
            aa.exports = W;
        });
        var ua = u((mE, ca)=>{
            var uw = Fn(), lw = (e, r)=>({
                    path: decodeURIComponent(new URL(e).pathname.split("/").pop() || ""),
                    content: fw(e, r)
                })
            ;
            async function* fw(e, r) {
                yield* (await new uw().get(e, r)).iterator();
            }
            ca.exports = lw;
        });
        var da = u((gE, fa)=>{
            var dw = (e)=>Promise.reject(new Error(`No codec found for "${e}"`))
            , la = class {
                constructor(r){
                    this._codecsByName = {
                    }, this._codecsByCode = {
                    }, this._loadCodec = r.loadCodec || dw;
                    for (let t of r.codecs)this.addCodec(t);
                }
                addCodec(r) {
                    if (this._codecsByName[r.name] || this._codecsByCode[r.code]) throw new Error(`Resolver already exists for codec "${r.name}"`);
                    this._codecsByName[r.name] = r, this._codecsByCode[r.code] = r;
                }
                removeCodec(r) {
                    delete this._codecsByName[r.name], delete this._codecsByCode[r.code];
                }
                async getCodec(r) {
                    let t = typeof r == "string" ? this._codecsByName : this._codecsByCode;
                    if (t[r]) return t[r];
                    let n = await this._loadCodec(r);
                    return t[r] == null && this.addCodec(n), n;
                }
                listCodecs() {
                    return Object.values(this._codecsByName);
                }
            };
            fa.exports = la;
        });
        var ma = u((yE, pa)=>{
            var hw = (e)=>Promise.reject(new Error(`No hasher found for "${e}"`))
            , ha = class {
                constructor(r){
                    this._hashersByName = {
                    }, this._hashersByCode = {
                    }, this._loadHasher = r.loadHasher || hw;
                    for (let t of r.hashers)this.addHasher(t);
                }
                addHasher(r) {
                    if (this._hashersByName[r.name] || this._hashersByCode[r.code]) throw new Error(`Resolver already exists for codec "${r.name}"`);
                    this._hashersByName[r.name] = r, this._hashersByCode[r.code] = r;
                }
                removeHasher(r) {
                    delete this._hashersByName[r.name], delete this._hashersByCode[r.code];
                }
                async getHasher(r) {
                    let t = typeof r == "string" ? this._hashersByName : this._hashersByCode;
                    if (t[r]) return t[r];
                    let n = await this._loadHasher(r);
                    return t[r] == null && this.addHasher(n), n;
                }
                listHashers() {
                    return Object.values(this._hashersByName);
                }
            };
            pa.exports = ha;
        });
        var ba = u((bE, ya)=>{
            var pw = (e)=>Promise.reject(new Error(`No base found for "${e}"`))
            , ga = class {
                constructor(r){
                    this._basesByName = {
                    }, this._basesByPrefix = {
                    }, this._loadBase = r.loadBase || pw;
                    for (let t of r.bases)this.addBase(t);
                }
                addBase(r) {
                    if (this._basesByName[r.name] || this._basesByPrefix[r.prefix]) throw new Error(`Codec already exists for codec "${r.name}"`);
                    this._basesByName[r.name] = r, this._basesByPrefix[r.prefix] = r;
                }
                removeBase(r) {
                    delete this._basesByName[r.name], delete this._basesByPrefix[r.prefix];
                }
                async getBase(r) {
                    if (this._basesByName[r]) return this._basesByName[r];
                    if (this._basesByPrefix[r]) return this._basesByPrefix[r];
                    let t = await this._loadBase(r);
                    return this._basesByName[t.name] == null && this._basesByPrefix[t.prefix] == null && this.addBase(t), t;
                }
                listBases() {
                    return Object.values(this._basesByName);
                }
            };
            ya.exports = ga;
        });
        function Mn(e, r) {
            let t = 0;
            for(let n = 0;; n += 7){
                if (n >= 64) throw new Error("protobuf: varint overflow");
                if (r >= e.length) throw new Error("protobuf: unexpected end of data");
                let s = e[r++];
                if (t += n < 28 ? (s & 127) << n : (s & 127) * 2 ** n, s < 128) break;
            }
            return [
                t,
                r
            ];
        }
        function vt(e, r) {
            let t;
            [t, r] = Mn(e, r);
            let n = r + t;
            if (t < 0 || n < 0) throw new Error("protobuf: invalid length");
            if (n > e.length) throw new Error("protobuf: unexpected end of data");
            return [
                e.subarray(r, n),
                n
            ];
        }
        function wa(e, r) {
            let t;
            return [t, r] = Mn(e, r), [
                t & 7,
                t >> 3,
                r
            ];
        }
        function gw(e) {
            let r = {
            }, t = e.length, n = 0;
            for(; n < t;){
                let s, o;
                if ([s, o, n] = wa(e, n), o === 1) {
                    if (r.Hash) throw new Error("protobuf: (PBLink) duplicate Hash section");
                    if (s !== 2) throw new Error(`protobuf: (PBLink) wrong wireType (${s}) for Hash`);
                    if (r.Name !== void 0) throw new Error("protobuf: (PBLink) invalid order, found Name before Hash");
                    if (r.Tsize !== void 0) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
                    [r.Hash, n] = vt(e, n);
                } else if (o === 2) {
                    if (r.Name !== void 0) throw new Error("protobuf: (PBLink) duplicate Name section");
                    if (s !== 2) throw new Error(`protobuf: (PBLink) wrong wireType (${s}) for Name`);
                    if (r.Tsize !== void 0) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name");
                    let i;
                    [i, n] = vt(e, n), r.Name = mw.decode(i);
                } else if (o === 3) {
                    if (r.Tsize !== void 0) throw new Error("protobuf: (PBLink) duplicate Tsize section");
                    if (s !== 0) throw new Error(`protobuf: (PBLink) wrong wireType (${s}) for Tsize`);
                    [r.Tsize, n] = Mn(e, n);
                } else throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${o}`);
            }
            if (n > t) throw new Error("protobuf: (PBLink) unexpected end of data");
            return r;
        }
        function qa(e) {
            let r = e.length, t = 0, n, s = !1, o;
            for(; t < r;){
                let a, c;
                if ([a, c, t] = wa(e, t), a !== 2) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${a}`);
                if (c === 1) {
                    if (o) throw new Error("protobuf: (PBNode) duplicate Data section");
                    [o, t] = vt(e, t), n && (s = !0);
                } else if (c === 2) {
                    if (s) throw new Error("protobuf: (PBNode) duplicate Links section");
                    n || (n = []);
                    let l;
                    [l, t] = vt(e, t), n.push(gw(l));
                } else throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${c}`);
            }
            if (t > r) throw new Error("protobuf: (PBNode) unexpected end of data");
            let i = {
            };
            return o && (i.Data = o), i.Links = n || [], i;
        }
        var mw, xa = w(()=>{
            mw = new TextDecoder;
        });
        function bw(e, r) {
            let t = r.length;
            if (typeof e.Tsize == "number") {
                if (e.Tsize < 0) throw new Error("Tsize cannot be negative");
                if (!Number.isSafeInteger(e.Tsize)) throw new Error("Tsize too large for encoding");
                t = Dr(r, t, e.Tsize) - 1, r[t] = 24;
            }
            if (typeof e.Name == "string") {
                let n = Sa.encode(e.Name);
                t -= n.length, r.set(n, t), t = Dr(r, t, n.length) - 1, r[t] = 18;
            }
            return e.Hash && (t -= e.Hash.length, r.set(e.Hash, t), t = Dr(r, t, e.Hash.length) - 1, r[t] = 10), r.length - t;
        }
        function va(e) {
            let r = qw(e), t = new Uint8Array(r), n = r;
            if (e.Data && (n -= e.Data.length, t.set(e.Data, n), n = Dr(t, n, e.Data.length) - 1, t[n] = 10), e.Links) for(let s = e.Links.length - 1; s >= 0; s--){
                let o = bw(e.Links[s], t.subarray(0, n));
                n -= o, n = Dr(t, n, o) - 1, t[n] = 18;
            }
            return t;
        }
        function ww(e) {
            let r = 0;
            if (e.Hash) {
                let t = e.Hash.length;
                r += 1 + t + lr(t);
            }
            if (typeof e.Name == "string") {
                let t = Sa.encode(e.Name).length;
                r += 1 + t + lr(t);
            }
            return typeof e.Tsize == "number" && (r += 1 + lr(e.Tsize)), r;
        }
        function qw(e) {
            let r = 0;
            if (e.Data) {
                let t = e.Data.length;
                r += 1 + t + lr(t);
            }
            if (e.Links) for (let t of e.Links){
                let n = ww(t);
                r += 1 + n + lr(n);
            }
            return r;
        }
        function Dr(e, r, t) {
            r -= lr(t);
            let n = r;
            for(; t >= yw;)e[r++] = t & 127 | 128, t /= 128;
            for(; t >= 128;)e[r++] = t & 127 | 128, t >>>= 7;
            return e[r] = t, n;
        }
        function lr(e) {
            return e % 2 == 0 && e++, Math.floor((xw(e) + 6) / 7);
        }
        function xw(e) {
            let r = 0;
            return e >= Ea && (e = Math.floor(e / Ea), r = 32), e >= 65536 && (e >>>= 16, r += 16), e >= 256 && (e >>>= 8, r += 8), r + Sw[e];
        }
        var Sa, Ea, yw, Sw, Pa = w(()=>{
            Sa = new TextEncoder, Ea = 2 ** 32, yw = 2 ** 31;
            Sw = [
                0,
                1,
                2,
                2,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                4,
                4,
                4,
                4,
                4,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8,
                8
            ];
        });
        function Ta(e, r) {
            if (e === r) return 0;
            let t = e.Name ? Hn.encode(e.Name) : [], n = r.Name ? Hn.encode(r.Name) : [], s = t.length, o = n.length;
            for(let i = 0, a = Math.min(s, o); i < a; ++i)if (t[i] !== n[i]) {
                s = t[i], o = n[i];
                break;
            }
            return s < o ? -1 : o < s ? 1 : 0;
        }
        function Ca(e, r) {
            return !Object.keys(e).some((t)=>!r.includes(t)
            );
        }
        function Aa(e) {
            if (typeof e.asCID == "object") {
                let t = B.asCID(e);
                if (!t) throw new TypeError("Invalid DAG-PB form");
                return {
                    Hash: t
                };
            }
            if (typeof e != "object" || Array.isArray(e)) throw new TypeError("Invalid DAG-PB form");
            let r = {
            };
            if (e.Hash) {
                let t = B.asCID(e.Hash);
                try {
                    t || (typeof e.Hash == "string" ? t = B.parse(e.Hash) : e.Hash instanceof Uint8Array && (t = B.decode(e.Hash)));
                } catch (n) {
                    throw new TypeError(`Invalid DAG-PB form: ${n.message}`);
                }
                t && (r.Hash = t);
            }
            if (!r.Hash) throw new TypeError("Invalid DAG-PB form");
            return typeof e.Name == "string" && (r.Name = e.Name), typeof e.Tsize == "number" && (r.Tsize = e.Tsize), r;
        }
        function Vn(e) {
            if ((e instanceof Uint8Array || typeof e == "string") && (e = {
                Data: e
            }), typeof e != "object" || Array.isArray(e)) throw new TypeError("Invalid DAG-PB form");
            let r = {
            };
            if (e.Data !== void 0) {
                if (typeof e.Data == "string") r.Data = Hn.encode(e.Data);
                else if (e.Data instanceof Uint8Array) r.Data = e.Data;
                else throw new TypeError("Invalid DAG-PB form");
            }
            if (e.Links !== void 0) {
                if (Array.isArray(e.Links)) r.Links = e.Links.map(Aa), r.Links.sort(Ta);
                else throw new TypeError("Invalid DAG-PB form");
            } else r.Links = [];
            return r;
        }
        function Wn(e) {
            if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError("Invalid DAG-PB form");
            if (!Ca(e, Ew)) throw new TypeError("Invalid DAG-PB form (extraneous properties)");
            if (e.Data !== void 0 && !(e.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)");
            if (!Array.isArray(e.Links)) throw new TypeError("Invalid DAG-PB form (Links must be an array)");
            for(let r = 0; r < e.Links.length; r++){
                let t = e.Links[r];
                if (!t || typeof t != "object" || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form (bad link object)");
                if (!Ca(t, vw)) throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)");
                if (!t.Hash) throw new TypeError("Invalid DAG-PB form (link must have a Hash)");
                if (t.Hash.asCID !== t.Hash) throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");
                if (t.Name !== void 0 && typeof t.Name != "string") throw new TypeError("Invalid DAG-PB form (link Name must be a string)");
                if (t.Tsize !== void 0 && (typeof t.Tsize != "number" || t.Tsize % 1 != 0)) throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
                if (r > 0 && Ta(t, e.Links[r - 1]) === -1) throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)");
            }
        }
        function ja(e, r = []) {
            return Vn({
                Data: e,
                Links: r
            });
        }
        function Ba(e, r, t) {
            return Aa({
                Hash: t,
                Name: e,
                Tsize: r
            });
        }
        var Ew, vw, Hn, Ua = w(()=>{
            E();
            Ew = [
                "Data",
                "Links"
            ], vw = [
                "Hash",
                "Name",
                "Tsize"
            ], Hn = new TextEncoder;
        });
        var ka = {
        };
        U(ka, {
            code: ()=>Tw
            ,
            createLink: ()=>Ba
            ,
            createNode: ()=>ja
            ,
            decode: ()=>Aw
            ,
            encode: ()=>Cw
            ,
            name: ()=>Pw
            ,
            prepare: ()=>Vn
            ,
            validate: ()=>Wn
        });
        function Cw(e) {
            Wn(e);
            let r = {
            };
            return e.Links && (r.Links = e.Links.map((t)=>{
                let n = {
                };
                return t.Hash && (n.Hash = t.Hash.bytes), t.Name !== void 0 && (n.Name = t.Name), t.Tsize !== void 0 && (n.Tsize = t.Tsize), n;
            })), e.Data && (r.Data = e.Data), va(r);
        }
        function Aw(e) {
            let r = qa(e), t = {
            };
            return r.Data && (t.Data = r.Data), r.Links && (t.Links = r.Links.map((n)=>{
                let s = {
                };
                try {
                    s.Hash = B.decode(n.Hash);
                } catch (o) {
                }
                if (!s.Hash) throw new Error("Invalid Hash field found in link, expected CID");
                return n.Name !== void 0 && (s.Name = n.Name), n.Tsize !== void 0 && (s.Tsize = n.Tsize), s;
            })), t;
        }
        var Pw, Tw, _a = w(()=>{
            E();
            xa();
            Pa();
            Ua();
            Pw = "dag-pb", Tw = 112;
        });
        function Na(e) {
            if (e === null) return "null";
            if (e === void 0) return "undefined";
            if (e === !0 || e === !1) return "boolean";
            let r = typeof e;
            if (jw.includes(r)) return r;
            if (r === "function") return "Function";
            if (Array.isArray(e)) return "Array";
            if (Uw(e)) return "Buffer";
            let t = kw(e);
            return t || "Object";
        }
        function Uw(e) {
            return e && e.constructor && e.constructor.isBuffer && e.constructor.isBuffer.call(null, e);
        }
        function kw(e) {
            let r = Object.prototype.toString.call(e).slice(8, -1);
            if (Bw.includes(r)) return r;
        }
        var jw, Bw, Ia = w(()=>{
            jw = [
                "string",
                "number",
                "bigint",
                "symbol"
            ], Bw = [
                "Function",
                "Generator",
                "AsyncGenerator",
                "GeneratorFunction",
                "AsyncGeneratorFunction",
                "AsyncFunction",
                "Observable",
                "Array",
                "Buffer",
                "Object",
                "RegExp",
                "Date",
                "Error",
                "Map",
                "Set",
                "WeakMap",
                "WeakSet",
                "ArrayBuffer",
                "SharedArrayBuffer",
                "DataView",
                "Promise",
                "URL",
                "HTMLElement",
                "Int8Array",
                "Uint8Array",
                "Uint8ClampedArray",
                "Int16Array",
                "Uint16Array",
                "Int32Array",
                "Uint32Array",
                "Float32Array",
                "Float64Array",
                "BigInt64Array",
                "BigUint64Array"
            ];
        });
        var d, y, Q = w(()=>{
            d = class {
                constructor(r, t, n){
                    this.major = r, this.majorEncoded = r << 5, this.name = t, this.terminal = n;
                }
                toString() {
                    return `Type[${this.major}].${this.name}`;
                }
                compare(r) {
                    return this.major < r.major ? -1 : this.major > r.major ? 1 : 0;
                }
            };
            d.uint = new d(0, "uint", !0);
            d.negint = new d(1, "negint", !0);
            d.bytes = new d(2, "bytes", !0);
            d.string = new d(3, "string", !0);
            d.array = new d(4, "array", !1);
            d.map = new d(5, "map", !1);
            d.tag = new d(6, "tag", !1);
            d.float = new d(7, "float", !0);
            d.false = new d(7, "false", !0);
            d.true = new d(7, "true", !0);
            d.null = new d(7, "null", !0);
            d.undefined = new d(7, "undefined", !0);
            d.break = new d(7, "break", !0);
            y = class {
                constructor(r, t, n){
                    this.type = r, this.value = t, this.encodedLength = n, this.encodedBytes = void 0;
                }
                toString() {
                    return `Token[${this.type}].${this.value}`;
                }
            };
        });
        function Pt(e) {
            return fr && globalThis.Buffer.isBuffer(e);
        }
        function Gn(e) {
            return e instanceof Uint8Array ? Pt(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e : Uint8Array.from(e);
        }
        function Ra(e, r) {
            if (Pt(e) && Pt(r)) return e.compare(r);
            for(let t = 0; t < e.length; t++)if (e[t] !== r[t]) return e[t] < r[t] ? -1 : 1;
            return 0;
        }
        function za(e, r = 1 / 0) {
            let t, n = e.length, s = null, o = [];
            for(let i = 0; i < n; ++i){
                if (t = e.charCodeAt(i), t > 55295 && t < 57344) {
                    if (!s) {
                        if (t > 56319) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                        } else if (i + 1 === n) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                        }
                        s = t;
                        continue;
                    }
                    if (t < 56320) {
                        (r -= 3) > -1 && o.push(239, 191, 189), s = t;
                        continue;
                    }
                    t = (s - 55296 << 10 | t - 56320) + 65536;
                } else s && (r -= 3) > -1 && o.push(239, 191, 189);
                if (s = null, t < 128) {
                    if ((r -= 1) < 0) break;
                    o.push(t);
                } else if (t < 2048) {
                    if ((r -= 2) < 0) break;
                    o.push(t >> 6 | 192, t & 63 | 128);
                } else if (t < 65536) {
                    if ((r -= 3) < 0) break;
                    o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                } else if (t < 1114112) {
                    if ((r -= 4) < 0) break;
                    o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                } else throw new Error("Invalid code point");
            }
            return o;
        }
        function Fa(e, r, t) {
            let n = [];
            for(; r < t;){
                let s = e[r], o = null, i = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                if (r + i <= t) {
                    let a, c, l, f;
                    switch(i){
                        case 1:
                            s < 128 && (o = s);
                            break;
                        case 2:
                            a = e[r + 1], (a & 192) == 128 && (f = (s & 31) << 6 | a & 63, f > 127 && (o = f));
                            break;
                        case 3:
                            a = e[r + 1], c = e[r + 2], (a & 192) == 128 && (c & 192) == 128 && (f = (s & 15) << 12 | (a & 63) << 6 | c & 63, f > 2047 && (f < 55296 || f > 57343) && (o = f));
                            break;
                        case 4:
                            a = e[r + 1], c = e[r + 2], l = e[r + 3], (a & 192) == 128 && (c & 192) == 128 && (l & 192) == 128 && (f = (s & 15) << 18 | (a & 63) << 12 | (c & 63) << 6 | l & 63, f > 65535 && f < 1114112 && (o = f));
                    }
                }
                o === null ? (o = 65533, i = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), r += i;
            }
            return Iw(n);
        }
        function Iw(e) {
            let r = e.length;
            if (r <= Ma) return String.fromCharCode.apply(String, e);
            let t = "", n = 0;
            for(; n < r;)t += String.fromCharCode.apply(String, e.slice(n, n += Ma));
            return t;
        }
        var fr, _w, Nw, Da, Oa, Pe, Tt, La, $a, Ma, dr = w(()=>{
            fr = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer == "function", _w = new TextDecoder, Nw = new TextEncoder;
            Da = fr ? (e, r, t)=>t - r > 64 ? globalThis.Buffer.from(e.subarray(r, t)).toString("utf8") : Fa(e, r, t)
             : (e, r, t)=>t - r > 64 ? _w.decode(e.subarray(r, t)) : Fa(e, r, t)
            , Oa = fr ? (e)=>e.length > 64 ? globalThis.Buffer.from(e) : za(e)
             : (e)=>e.length > 64 ? Nw.encode(e) : za(e)
            , Pe = (e)=>Uint8Array.from(e)
            , Tt = fr ? (e, r, t)=>Pt(e) ? new Uint8Array(e.subarray(r, t)) : e.slice(r, t)
             : (e, r, t)=>e.slice(r, t)
            , La = fr ? (e, r)=>(e = e.map((t)=>t instanceof Uint8Array ? t : globalThis.Buffer.from(t)
                ), Gn(globalThis.Buffer.concat(e, r)))
             : (e, r)=>{
                let t = new Uint8Array(r), n = 0;
                for (let s of e)n + s.length > t.length && (s = s.subarray(0, t.length - n)), t.set(s, n), n += s.length;
                return t;
            }, $a = fr ? (e)=>globalThis.Buffer.allocUnsafe(e)
             : (e)=>new Uint8Array(e)
            ;
            Ma = 4096;
        });
        var Dw, Ct, Ha = w(()=>{
            dr();
            Dw = 256, Ct = class {
                constructor(r = Dw){
                    this.chunkSize = r, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null;
                }
                reset() {
                    this.chunks = [], this.cursor = 0, this.maxCursor = -1, this._initReuseChunk !== null && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1);
                }
                push(r) {
                    let t = this.chunks[this.chunks.length - 1];
                    if (this.cursor + r.length <= this.maxCursor + 1) {
                        let s = t.length - (this.maxCursor - this.cursor) - 1;
                        t.set(r, s);
                    } else {
                        if (t) {
                            let s = t.length - (this.maxCursor - this.cursor) - 1;
                            s < t.length && (this.chunks[this.chunks.length - 1] = t.subarray(0, s), this.maxCursor = this.cursor - 1);
                        }
                        r.length < 64 && r.length < this.chunkSize ? (t = $a(this.chunkSize), this.chunks.push(t), this.maxCursor += t.length, this._initReuseChunk === null && (this._initReuseChunk = t), t.set(r, 0)) : (this.chunks.push(r), this.maxCursor += r.length);
                    }
                    this.cursor += r.length;
                }
                toBytes(r = !1) {
                    let t;
                    if (this.chunks.length === 1) {
                        let n = this.chunks[0];
                        r && this.cursor > n.length / 2 ? (t = this.cursor === n.length ? n : n.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : t = Tt(n, 0, this.cursor);
                    } else t = La(this.chunks, this.cursor);
                    return r && this.reset(), t;
                }
            };
        });
        function Ue(e, r, t) {
            if (e.length - r < t) throw new Error(`${S} not enough data for type`);
        }
        var S, Jn, Or, me = w(()=>{
            S = "CBOR decode error:", Jn = "CBOR encode error:", Or = [];
            Or[23] = 1;
            Or[24] = 2;
            Or[25] = 3;
            Or[26] = 5;
            Or[27] = 9;
        });
        function Y(e, r, t) {
            Ue(e, r, 1);
            let n = e[r];
            if (t.strict === !0 && n < R[0]) throw new Error(`${S} integer encoded in more bytes than necessary (strict decode)`);
            return n;
        }
        function ee(e, r, t) {
            Ue(e, r, 2);
            let n = e[r] << 8 | e[r + 1];
            if (t.strict === !0 && n < R[1]) throw new Error(`${S} integer encoded in more bytes than necessary (strict decode)`);
            return n;
        }
        function re(e, r, t) {
            Ue(e, r, 4);
            let n = e[r] * 16777216 + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
            if (t.strict === !0 && n < R[2]) throw new Error(`${S} integer encoded in more bytes than necessary (strict decode)`);
            return n;
        }
        function te(e, r, t) {
            Ue(e, r, 8);
            let n = e[r] * 16777216 + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3], s = e[r + 4] * 16777216 + (e[r + 5] << 16) + (e[r + 6] << 8) + e[r + 7], o = (BigInt(n) << BigInt(32)) + BigInt(s);
            if (t.strict === !0 && o < R[3]) throw new Error(`${S} integer encoded in more bytes than necessary (strict decode)`);
            if (o <= Number.MAX_SAFE_INTEGER) return Number(o);
            if (t.allowBigInt === !0) return o;
            throw new Error(`${S} integers outside of the safe integer range are not supported`);
        }
        function Va(e, r, t, n) {
            return new y(d.uint, Y(e, r + 1, n), 2);
        }
        function Wa(e, r, t, n) {
            return new y(d.uint, ee(e, r + 1, n), 3);
        }
        function Ga(e, r, t, n) {
            return new y(d.uint, re(e, r + 1, n), 5);
        }
        function Ja(e, r, t, n) {
            return new y(d.uint, te(e, r + 1, n), 9);
        }
        function ue(e, r) {
            return K(e, 0, r.value);
        }
        function K(e, r, t) {
            if (t < R[0]) {
                let n = Number(t);
                e.push([
                    r | n
                ]);
            } else if (t < R[1]) {
                let n = Number(t);
                e.push([
                    r | 24,
                    n
                ]);
            } else if (t < R[2]) {
                let n = Number(t);
                e.push([
                    r | 25,
                    n >>> 8,
                    n & 255
                ]);
            } else if (t < R[3]) {
                let n = Number(t);
                e.push([
                    r | 26,
                    n >>> 24 & 255,
                    n >>> 16 & 255,
                    n >>> 8 & 255,
                    n & 255
                ]);
            } else {
                let n = BigInt(t);
                if (n < R[4]) {
                    let s = [
                        r | 27,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ], o = Number(n & BigInt(4294967295)), i = Number(n >> BigInt(32) & BigInt(4294967295));
                    s[8] = o & 255, o = o >> 8, s[7] = o & 255, o = o >> 8, s[6] = o & 255, o = o >> 8, s[5] = o & 255, s[4] = i & 255, i = i >> 8, s[3] = i & 255, i = i >> 8, s[2] = i & 255, i = i >> 8, s[1] = i & 255, e.push(s);
                } else throw new Error(`${S} encountered BigInt larger than allowable range`);
            }
        }
        var R, Te = w(()=>{
            Q();
            me();
            R = [
                24,
                256,
                65536,
                4294967296,
                BigInt("18446744073709551616")
            ];
            ue.encodedSize = function(r) {
                return K.encodedSize(r.value);
            };
            K.encodedSize = function(r) {
                return r < R[0] ? 1 : r < R[1] ? 2 : r < R[2] ? 3 : r < R[3] ? 5 : 9;
            };
            ue.compareTokens = function(r, t) {
                return r.value < t.value ? -1 : r.value > t.value ? 1 : 0;
            };
        });
        function Ka(e, r, t, n) {
            return new y(d.negint, -1 - Y(e, r + 1, n), 2);
        }
        function Xa(e, r, t, n) {
            return new y(d.negint, -1 - ee(e, r + 1, n), 3);
        }
        function Za(e, r, t, n) {
            return new y(d.negint, -1 - re(e, r + 1, n), 5);
        }
        function Ya(e, r, t, n) {
            let s = te(e, r + 1, n);
            if (typeof s != "bigint") {
                let o = -1 - s;
                if (o >= Number.MIN_SAFE_INTEGER) return new y(d.negint, o, 9);
            }
            if (n.allowBigInt !== !0) throw new Error(`${S} integers outside of the safe integer range are not supported`);
            return new y(d.negint, Kn - BigInt(s), 9);
        }
        function At(e, r) {
            let t = r.value, n = typeof t == "bigint" ? t * Kn - Qa : t * -1 - 1;
            K(e, r.type.majorEncoded, n);
        }
        var Kn, Qa, Xn = w(()=>{
            Q();
            Te();
            me();
            Kn = BigInt(-1), Qa = BigInt(1);
            At.encodedSize = function(r) {
                let t = r.value, n = typeof t == "bigint" ? t * Kn - Qa : t * -1 - 1;
                return n < R[0] ? 1 : n < R[1] ? 2 : n < R[2] ? 3 : n < R[3] ? 5 : 9;
            };
            At.compareTokens = function(r, t) {
                return r.value < t.value ? 1 : r.value > t.value ? -1 : 0;
            };
        });
        function Lr(e, r, t, n) {
            Ue(e, r, t + n);
            let s = Tt(e, r + t, r + t + n);
            return new y(d.bytes, s, t + n);
        }
        function ec(e, r, t, n) {
            return Lr(e, r, 1, t);
        }
        function rc(e, r, t, n) {
            return Lr(e, r, 2, Y(e, r + 1, n));
        }
        function tc(e, r, t, n) {
            return Lr(e, r, 3, ee(e, r + 1, n));
        }
        function nc(e, r, t, n) {
            return Lr(e, r, 5, re(e, r + 1, n));
        }
        function sc(e, r, t, n) {
            let s = te(e, r + 1, n);
            if (typeof s == "bigint") throw new Error(`${S} 64-bit integer bytes lengths not supported`);
            return Lr(e, r, 9, s);
        }
        function jt(e) {
            return e.encodedBytes === void 0 && (e.encodedBytes = e.type === d.string ? Oa(e.value) : e.value), e.encodedBytes;
        }
        function hr(e, r) {
            let t = jt(r);
            K(e, r.type.majorEncoded, t.length), e.push(t);
        }
        function Ow(e, r) {
            return e.length < r.length ? -1 : e.length > r.length ? 1 : Ra(e, r);
        }
        var Bt = w(()=>{
            Q();
            me();
            Te();
            dr();
            hr.encodedSize = function(r) {
                let t = jt(r);
                return K.encodedSize(t.length) + t.length;
            };
            hr.compareTokens = function(r, t) {
                return Ow(jt(r), jt(t));
            };
        });
        function $r(e, r, t, n) {
            let s = t + n;
            return Ue(e, r, s), new y(d.string, Da(e, r + t, r + s), s);
        }
        function oc(e, r, t, n) {
            return $r(e, r, 1, t);
        }
        function ic(e, r, t, n) {
            return $r(e, r, 2, Y(e, r + 1, n));
        }
        function ac(e, r, t, n) {
            return $r(e, r, 3, ee(e, r + 1, n));
        }
        function cc(e, r, t, n) {
            return $r(e, r, 5, re(e, r + 1, n));
        }
        function uc(e, r, t, n) {
            let s = te(e, r + 1, n);
            if (typeof s == "bigint") throw new Error(`${S} 64-bit integer string lengths not supported`);
            return $r(e, r, 9, s);
        }
        var lc, Zn = w(()=>{
            Q();
            me();
            Te();
            Bt();
            dr();
            lc = hr;
        });
        function pr(e, r, t, n) {
            return new y(d.array, n, t);
        }
        function fc(e, r, t, n) {
            return pr(e, r, 1, t);
        }
        function dc(e, r, t, n) {
            return pr(e, r, 2, Y(e, r + 1, n));
        }
        function hc(e, r, t, n) {
            return pr(e, r, 3, ee(e, r + 1, n));
        }
        function pc(e, r, t, n) {
            return pr(e, r, 5, re(e, r + 1, n));
        }
        function mc(e, r, t, n) {
            let s = te(e, r + 1, n);
            if (typeof s == "bigint") throw new Error(`${S} 64-bit integer array lengths not supported`);
            return pr(e, r, 9, s);
        }
        function gc(e, r, t, n) {
            if (n.allowIndefinite === !1) throw new Error(`${S} indefinite length items not allowed`);
            return pr(e, r, 1, 1 / 0);
        }
        function Qn(e, r) {
            K(e, d.array.majorEncoded, r.value);
        }
        var Yn = w(()=>{
            Q();
            Te();
            me();
            Qn.compareTokens = ue.compareTokens;
        });
        function mr(e, r, t, n) {
            return new y(d.map, n, t);
        }
        function yc(e, r, t, n) {
            return mr(e, r, 1, t);
        }
        function bc(e, r, t, n) {
            return mr(e, r, 2, Y(e, r + 1, n));
        }
        function wc(e, r, t, n) {
            return mr(e, r, 3, ee(e, r + 1, n));
        }
        function qc(e, r, t, n) {
            return mr(e, r, 5, re(e, r + 1, n));
        }
        function xc(e, r, t, n) {
            let s = te(e, r + 1, n);
            if (typeof s == "bigint") throw new Error(`${S} 64-bit integer map lengths not supported`);
            return mr(e, r, 9, s);
        }
        function Sc(e, r, t, n) {
            if (n.allowIndefinite === !1) throw new Error(`${S} indefinite length items not allowed`);
            return mr(e, r, 1, 1 / 0);
        }
        function es(e, r) {
            K(e, d.map.majorEncoded, r.value);
        }
        var rs = w(()=>{
            Q();
            Te();
            me();
            es.compareTokens = ue.compareTokens;
        });
        function Ec(e, r, t, n) {
            return new y(d.tag, t, 1);
        }
        function vc(e, r, t, n) {
            return new y(d.tag, Y(e, r + 1, n), 2);
        }
        function Pc(e, r, t, n) {
            return new y(d.tag, ee(e, r + 1, n), 3);
        }
        function Tc(e, r, t, n) {
            return new y(d.tag, re(e, r + 1, n), 5);
        }
        function Cc(e, r, t, n) {
            return new y(d.tag, te(e, r + 1, n), 9);
        }
        function ts(e, r) {
            K(e, d.tag.majorEncoded, r.value);
        }
        var ns = w(()=>{
            Q();
            Te();
            ts.compareTokens = ue.compareTokens;
        });
        function Ac(e, r, t, n) {
            if (n.allowUndefined === !1) throw new Error(`${S} undefined values are not supported`);
            return new y(d.undefined, void 0, 1);
        }
        function jc(e, r, t, n) {
            if (n.allowIndefinite === !1) throw new Error(`${S} indefinite length items not allowed`);
            return new y(d.break, void 0, 1);
        }
        function ss(e, r, t) {
            if (t) {
                if (t.allowNaN === !1 && Number.isNaN(e)) throw new Error(`${S} NaN values are not supported`);
                if (t.allowInfinity === !1 && (e === 1 / 0 || e === -1 / 0)) throw new Error(`${S} Infinity values are not supported`);
            }
            return new y(d.float, e, r);
        }
        function Bc(e, r, t, n) {
            return ss(os(e, r + 1), 3, n);
        }
        function Uc(e, r, t, n) {
            return ss(is(e, r + 1), 5, n);
        }
        function kc(e, r, t, n) {
            return ss(Dc(e, r + 1), 9, n);
        }
        function Ut(e, r, t) {
            let n = r.value;
            if (n === !1) e.push([
                d.float.majorEncoded | Lw
            ]);
            else if (n === !0) e.push([
                d.float.majorEncoded | $w
            ]);
            else if (n === null) e.push([
                d.float.majorEncoded | Rw
            ]);
            else if (n === void 0) e.push([
                d.float.majorEncoded | zw
            ]);
            else {
                let s, o = !1;
                (!t || t.float64 !== !0) && (Nc(n), s = os(ge, 1), n === s || Number.isNaN(n) ? (ge[0] = 249, e.push(ge.slice(0, 3)), o = !0) : (Ic(n), s = is(ge, 1), n === s && (ge[0] = 250, e.push(ge.slice(0, 5)), o = !0))), o || (Fw(n), s = Dc(ge, 1), ge[0] = 251, e.push(ge.slice(0, 9)));
            }
        }
        function Nc(e) {
            if (e === 1 / 0) le.setUint16(0, 31744, !1);
            else if (e === -1 / 0) le.setUint16(0, 64512, !1);
            else if (Number.isNaN(e)) le.setUint16(0, 32256, !1);
            else {
                le.setFloat32(0, e);
                let r = le.getUint32(0), t = (r & 2139095040) >> 23, n = r & 8388607;
                if (t === 255) le.setUint16(0, 31744, !1);
                else if (t === 0) le.setUint16(0, (e & 2147483648) >> 16 | n >> 13, !1);
                else {
                    let s = t - 127;
                    s < -24 ? le.setUint16(0, 0) : s < -14 ? le.setUint16(0, (r & 2147483648) >> 16 | 1 << 24 + s, !1) : le.setUint16(0, (r & 2147483648) >> 16 | s + 15 << 10 | n >> 13, !1);
                }
            }
        }
        function os(e, r) {
            if (e.length - r < 2) throw new Error(`${S} not enough data for float16`);
            let t = (e[r] << 8) + e[r + 1];
            if (t === 31744) return 1 / 0;
            if (t === 64512) return -1 / 0;
            if (t === 32256) return NaN;
            let n = t >> 10 & 31, s = t & 1023, o;
            return n === 0 ? o = s * 2 ** -24 : n !== 31 ? o = (s + 1024) * 2 ** (n - 25) : o = s === 0 ? 1 / 0 : NaN, t & 32768 ? -o : o;
        }
        function Ic(e) {
            le.setFloat32(0, e, !1);
        }
        function is(e, r) {
            if (e.length - r < 4) throw new Error(`${S} not enough data for float32`);
            let t = (e.byteOffset || 0) + r;
            return new DataView(e.buffer, t, 4).getFloat32(0, !1);
        }
        function Fw(e) {
            le.setFloat64(0, e, !1);
        }
        function Dc(e, r) {
            if (e.length - r < 8) throw new Error(`${S} not enough data for float64`);
            let t = (e.byteOffset || 0) + r;
            return new DataView(e.buffer, t, 8).getFloat64(0, !1);
        }
        var Lw, $w, Rw, zw, _c, le, ge, as = w(()=>{
            Q();
            me();
            Te();
            Lw = 20, $w = 21, Rw = 22, zw = 23;
            Ut.encodedSize = function(r, t) {
                let n = r.value;
                if (n === !1 || n === !0 || n === null || n === void 0) return 1;
                let s;
                if (!t || t.float64 !== !0) {
                    if (Nc(n), s = os(ge, 1), n === s || Number.isNaN(n)) return 3;
                    if (Ic(n), s = is(ge, 1), n === s) return 5;
                }
                return 9;
            };
            _c = new ArrayBuffer(9), le = new DataView(_c, 1), ge = new Uint8Array(_c, 0);
            Ut.compareTokens = ue.compareTokens;
        });
        function A(e, r, t) {
            throw new Error(`${S} encountered invalid minor (${t}) for major ${e[r] >>> 5}`);
        }
        function kt(e) {
            return ()=>{
                throw new Error(`${S} ${e}`);
            };
        }
        function Oc(e) {
            switch(e.type){
                case d.false:
                    return Pe([
                        244
                    ]);
                case d.true:
                    return Pe([
                        245
                    ]);
                case d.null:
                    return Pe([
                        246
                    ]);
                case d.bytes:
                    return e.value.length ? void 0 : Pe([
                        64
                    ]);
                case d.string:
                    return e.value === "" ? Pe([
                        96
                    ]) : void 0;
                case d.array:
                    return e.value === 0 ? Pe([
                        128
                    ]) : void 0;
                case d.map:
                    return e.value === 0 ? Pe([
                        160
                    ]) : void 0;
                case d.uint:
                    return e.value < 24 ? Pe([
                        Number(e.value)
                    ]) : void 0;
                case d.negint:
                    if (e.value >= -24) return Pe([
                        31 - Number(e.value)
                    ]);
            }
        }
        var g, ye, cs = w(()=>{
            Q();
            Te();
            Xn();
            Bt();
            Zn();
            Yn();
            rs();
            ns();
            as();
            me();
            dr();
            g = [];
            for(let e = 0; e <= 23; e++)g[e] = A;
            g[24] = Va;
            g[25] = Wa;
            g[26] = Ga;
            g[27] = Ja;
            g[28] = A;
            g[29] = A;
            g[30] = A;
            g[31] = A;
            for(let e1 = 32; e1 <= 55; e1++)g[e1] = A;
            g[56] = Ka;
            g[57] = Xa;
            g[58] = Za;
            g[59] = Ya;
            g[60] = A;
            g[61] = A;
            g[62] = A;
            g[63] = A;
            for(let e2 = 64; e2 <= 87; e2++)g[e2] = ec;
            g[88] = rc;
            g[89] = tc;
            g[90] = nc;
            g[91] = sc;
            g[92] = A;
            g[93] = A;
            g[94] = A;
            g[95] = kt("indefinite length bytes/strings are not supported");
            for(let e3 = 96; e3 <= 119; e3++)g[e3] = oc;
            g[120] = ic;
            g[121] = ac;
            g[122] = cc;
            g[123] = uc;
            g[124] = A;
            g[125] = A;
            g[126] = A;
            g[127] = kt("indefinite length bytes/strings are not supported");
            for(let e4 = 128; e4 <= 151; e4++)g[e4] = fc;
            g[152] = dc;
            g[153] = hc;
            g[154] = pc;
            g[155] = mc;
            g[156] = A;
            g[157] = A;
            g[158] = A;
            g[159] = gc;
            for(let e5 = 160; e5 <= 183; e5++)g[e5] = yc;
            g[184] = bc;
            g[185] = wc;
            g[186] = qc;
            g[187] = xc;
            g[188] = A;
            g[189] = A;
            g[190] = A;
            g[191] = Sc;
            for(let e6 = 192; e6 <= 215; e6++)g[e6] = Ec;
            g[216] = vc;
            g[217] = Pc;
            g[218] = Tc;
            g[219] = Cc;
            g[220] = A;
            g[221] = A;
            g[222] = A;
            g[223] = A;
            for(let e7 = 224; e7 <= 243; e7++)g[e7] = kt("simple values are not supported");
            g[244] = A;
            g[245] = A;
            g[246] = A;
            g[247] = Ac;
            g[248] = kt("simple values are not supported");
            g[249] = Bc;
            g[250] = Uc;
            g[251] = kc;
            g[252] = A;
            g[253] = A;
            g[254] = A;
            g[255] = jc;
            ye = [];
            for(let e8 = 0; e8 < 24; e8++)ye[e8] = new y(d.uint, e8, 1);
            for(let e9 = -1; e9 >= -24; e9--)ye[31 - e9] = new y(d.negint, e9, 1);
            ye[64] = new y(d.bytes, new Uint8Array(0), 1);
            ye[96] = new y(d.string, "", 1);
            ye[128] = new y(d.array, 0, 1);
            ye[160] = new y(d.map, 0, 1);
            ye[244] = new y(d.false, !1, 1);
            ye[245] = new y(d.true, !0, 1);
            ye[246] = new y(d.null, null, 1);
        });
        function _t(e, r = {
        }, t) {
            let n = Na(e), s = r && r.typeEncoders && r.typeEncoders[n] || ze[n];
            if (typeof s == "function") {
                let i = s(e, n, r, t);
                if (i != null) return i;
            }
            let o = ze[n];
            if (!o) throw new Error(`${Jn} unsupported type: ${n}`);
            return o(e, n, r, t);
        }
        function Hw(e, r) {
            r.mapSorter && e.sort(r.mapSorter);
        }
        function Vw(e, r) {
            let t = Array.isArray(e[0]) ? e[0][0] : e[0], n = Array.isArray(r[0]) ? r[0][0] : r[0];
            if (t.type !== n.type) return t.type.compare(n.type);
            let s = t.type.major, o = Ce[s].compareTokens(t, n);
            return o === 0 && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone"), o;
        }
        function $c(e, r, t, n) {
            if (Array.isArray(r)) for (let s of r)$c(e, s, t, n);
            else t[r.type.major](e, r, n);
        }
        function Ww(e, r, t) {
            let n = _t(e, t);
            if (!Array.isArray(n) && t.quickEncodeToken) {
                let s = t.quickEncodeToken(n);
                if (s) return s;
                let o = r[n.type.major];
                if (o.encodedSize) {
                    let i = o.encodedSize(n, t), a = new Ct(i);
                    if (o(a, n, t), a.chunks.length !== 1) throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);
                    return Gn(a.chunks[0]);
                }
            }
            return $c(Lc, n, r, t), Lc.toBytes(!0);
        }
        function us(e, r) {
            return r = Object.assign({
            }, Mw, r), Ww(e, Ce, r);
        }
        var Mw, Ce, Lc, Rr, Re, ze, Rc = w(()=>{
            Ia();
            Q();
            Ha();
            me();
            cs();
            dr();
            Te();
            Xn();
            Bt();
            Zn();
            Yn();
            rs();
            ns();
            as();
            Mw = {
                float64: !1,
                mapSorter: Vw,
                quickEncodeToken: Oc
            }, Ce = [];
            Ce[d.uint.major] = ue;
            Ce[d.negint.major] = At;
            Ce[d.bytes.major] = hr;
            Ce[d.string.major] = lc;
            Ce[d.array.major] = Qn;
            Ce[d.map.major] = es;
            Ce[d.tag.major] = ts;
            Ce[d.float.major] = Ut;
            Lc = new Ct, Rr = class {
                constructor(r, t){
                    this.obj = r, this.parent = t;
                }
                includes(r) {
                    let t = this;
                    do if (t.obj === r) return !0;
                    while (t = t.parent)
                    return !1;
                }
                static createCheck(r, t) {
                    if (r && r.includes(t)) throw new Error(`${Jn} object contains circular references`);
                    return new Rr(t, r);
                }
            }, Re = {
                null: new y(d.null, null),
                undefined: new y(d.undefined, void 0),
                true: new y(d.true, !0),
                false: new y(d.false, !1),
                emptyArray: new y(d.array, 0),
                emptyMap: new y(d.map, 0)
            }, ze = {
                number (e, r, t, n) {
                    return !Number.isInteger(e) || !Number.isSafeInteger(e) ? new y(d.float, e) : e >= 0 ? new y(d.uint, e) : new y(d.negint, e);
                },
                bigint (e, r, t, n) {
                    return e >= BigInt(0) ? new y(d.uint, e) : new y(d.negint, e);
                },
                Uint8Array (e, r, t, n) {
                    return new y(d.bytes, e);
                },
                string (e, r, t, n) {
                    return new y(d.string, e);
                },
                boolean (e, r, t, n) {
                    return e ? Re.true : Re.false;
                },
                null (e, r, t, n) {
                    return Re.null;
                },
                undefined (e, r, t, n) {
                    return Re.undefined;
                },
                ArrayBuffer (e, r, t, n) {
                    return new y(d.bytes, new Uint8Array(e));
                },
                DataView (e, r, t, n) {
                    return new y(d.bytes, new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
                },
                Array (e, r, t, n) {
                    if (!e.length) return t.addBreakTokens === !0 ? [
                        Re.emptyArray,
                        new y(d.break)
                    ] : Re.emptyArray;
                    n = Rr.createCheck(n, e);
                    let s = [], o = 0;
                    for (let i of e)s[o++] = _t(i, t, n);
                    return t.addBreakTokens ? [
                        new y(d.array, e.length),
                        s,
                        new y(d.break)
                    ] : [
                        new y(d.array, e.length),
                        s
                    ];
                },
                Object (e, r, t, n) {
                    let s = r !== "Object", o = s ? e.keys() : Object.keys(e), i = s ? e.size : o.length;
                    if (!i) return t.addBreakTokens === !0 ? [
                        Re.emptyMap,
                        new y(d.break)
                    ] : Re.emptyMap;
                    n = Rr.createCheck(n, e);
                    let a = [], c = 0;
                    for (let l of o)a[c++] = [
                        _t(l, t, n),
                        _t(s ? e.get(l) : e[l], t, n)
                    ];
                    return Hw(a, t), t.addBreakTokens ? [
                        new y(d.map, i),
                        a,
                        new y(d.break)
                    ] : [
                        new y(d.map, i),
                        a
                    ];
                }
            };
            ze.Map = ze.Object;
            ze.Buffer = ze.Uint8Array;
            for (let e10 of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))ze[`${e10}Array`] = ze.DataView;
        });
        function Jw(e, r, t) {
            let n = [];
            for(let s = 0; s < e.value; s++){
                let o = Fr(r, t);
                if (o === Nt) {
                    if (e.value === 1 / 0) break;
                    throw new Error(`${S} got unexpected break to lengthed array`);
                }
                if (o === zr) throw new Error(`${S} found array but not enough entries (got ${s}, expected ${e.value})`);
                n[s] = o;
            }
            return n;
        }
        function Kw(e, r, t) {
            let n = t.useMaps === !0, s = n ? void 0 : {
            }, o = n ? new Map : void 0;
            for(let i = 0; i < e.value; i++){
                let a = Fr(r, t);
                if (a === Nt) {
                    if (e.value === 1 / 0) break;
                    throw new Error(`${S} got unexpected break to lengthed map`);
                }
                if (a === zr) throw new Error(`${S} found map but not enough entries (got ${i} [no key], expected ${e.value})`);
                if (n !== !0 && typeof a != "string") throw new Error(`${S} non-string keys not supported (got ${typeof a})`);
                let c = Fr(r, t);
                if (c === zr) throw new Error(`${S} found map but not enough entries (got ${i} [no value], expected ${e.value})`);
                n ? o.set(a, c) : s[a] = c;
            }
            return n ? o : s;
        }
        function Fr(e, r) {
            if (e.done()) return zr;
            let t = e.next();
            if (t.type === d.break) return Nt;
            if (t.type.terminal) return t.value;
            if (t.type === d.array) return Jw(t, e, r);
            if (t.type === d.map) return Kw(t, e, r);
            if (t.type === d.tag) {
                if (r.tags && typeof r.tags[t.value] == "function") {
                    let n = Fr(e, r);
                    return r.tags[t.value](n);
                }
                throw new Error(`${S} tag not supported (${t.value})`);
            }
            throw new Error("unsupported");
        }
        function ls(e, r) {
            if (!(e instanceof Uint8Array)) throw new Error(`${S} data to decode must be a Uint8Array`);
            r = Object.assign({
            }, Gw, r);
            let t = r.tokenizer || new zc(e, r), n = Fr(t, r);
            if (n === zr) throw new Error(`${S} did not find any content to decode`);
            if (n === Nt) throw new Error(`${S} got unexpected break`);
            if (!t.done()) throw new Error(`${S} too many terminals, data makes no sense`);
            return n;
        }
        var Gw, zc, zr, Nt, Fc = w(()=>{
            me();
            Q();
            cs();
            Gw = {
                strict: !1,
                allowIndefinite: !0,
                allowUndefined: !0,
                allowBigInt: !0
            }, zc = class {
                constructor(r, t = {
                }){
                    this.pos = 0, this.data = r, this.options = t;
                }
                done() {
                    return this.pos >= this.data.length;
                }
                next() {
                    let r = this.data[this.pos], t = ye[r];
                    if (t === void 0) {
                        let n = g[r];
                        if (!n) throw new Error(`${S} no decoder for major type ${r >>> 5} (byte 0x${r.toString(16).padStart(2, "0")})`);
                        let s = r & 31;
                        t = n(this.data, this.pos, s, this.options);
                    }
                    return this.pos += t.encodedLength, t;
                }
            }, zr = Symbol.for("DONE"), Nt = Symbol.for("BREAK");
        });
        var Mc = w(()=>{
            Rc();
            Fc();
            Q();
        });
        var Wc = {
        };
        U(Wc, {
            code: ()=>t0
            ,
            decode: ()=>s0
            ,
            encode: ()=>n0
            ,
            name: ()=>r0
        });
        function Xw(e) {
            if (e.asCID !== e) return null;
            let r = B.asCID(e);
            if (!r) return null;
            let t = new Uint8Array(r.bytes.byteLength + 1);
            return t.set(r.bytes, 1), [
                new y(d.tag, Hc),
                new y(d.bytes, t)
            ];
        }
        function Zw() {
            throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
        }
        function Qw(e) {
            if (Number.isNaN(e)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
            if (e === 1 / 0 || e === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
            return null;
        }
        function e0(e) {
            if (e[0] !== 0) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
            return B.decode(e.subarray(1));
        }
        var Hc, Yw, Vc, r0, t0, n0, s0, Gc = w(()=>{
            Mc();
            E();
            Hc = 42;
            Yw = {
                float64: !0,
                typeEncoders: {
                    Object: Xw,
                    undefined: Zw,
                    number: Qw
                }
            };
            Vc = {
                allowIndefinite: !1,
                allowUndefined: !1,
                allowNaN: !1,
                allowInfinity: !1,
                allowBigInt: !0,
                strict: !0,
                useMaps: !1,
                tags: []
            };
            Vc.tags[Hc] = e0;
            r0 = "dag-cbor", t0 = 113, n0 = (e)=>us(e, Yw)
            , s0 = (e)=>ls(e, Vc)
            ;
        });
        var I = u((K4, Jc)=>{
            Jc.exports = (e)=>{
                if (e == null) return e;
                let r = /^[A-Z]+$/, t = {
                };
                return Object.keys(e).reduce((n, s)=>(r.test(s) ? n[s.toLowerCase()] = e[s] : r.test(s[0]) ? n[s[0].toLowerCase() + s.slice(1)] = e[s] : n[s] = e[s], n)
                , t);
            };
        });
        var Xc = u((X4, fs)=>{
            var o0 = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig;
            fs.exports = v;
            fs.exports.default = v;
            v.nanosecond = v.ns = 1 / 1000000;
            v.µs = v.μs = v.us = v.microsecond = 0.001;
            v.millisecond = v.ms = v[""] = 1;
            v.second = v.sec = v.s = v.ms * 1000;
            v.minute = v.min = v.m = v.s * 60;
            v.hour = v.hr = v.h = v.m * 60;
            v.day = v.d = v.h * 24;
            v.week = v.wk = v.w = v.d * 7;
            v.month = v.b = v.d * 30.4375;
            v.year = v.yr = v.y = v.d * 365.25;
            function v(e = "", r = "ms") {
                var t = null;
                return e = (e + "").replace(/(\d)[,_](\d)/g, "$1$2"), e.replace(o0, function(n, s, o) {
                    o = Kc(o), o && (t = (t || 0) + parseFloat(s, 10) * o);
                }), t && t / (Kc(r) || 1);
            }
            function Kc(e) {
                return v[e] || v[e.toLowerCase().replace(/s$/, "")];
            }
        });
        var Qc = u((Z4, Zc)=>{
            var gr = 1000, yr = gr * 60, br = yr * 60, Ge = br * 24, i0 = Ge * 7, a0 = Ge * 365.25;
            Zc.exports = function(e, r) {
                r = r || {
                };
                var t = typeof e;
                if (t === "string" && e.length > 0) return c0(e);
                if (t === "number" && isFinite(e)) return r.long ? l0(e) : u0(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
            function c0(e) {
                if (e = String(e), !(e.length > 100)) {
                    var r = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!!r) {
                        var t = parseFloat(r[1]), n = (r[2] || "ms").toLowerCase();
                        switch(n){
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return t * a0;
                            case "weeks":
                            case "week":
                            case "w":
                                return t * i0;
                            case "days":
                            case "day":
                            case "d":
                                return t * Ge;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return t * br;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return t * yr;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return t * gr;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return t;
                            default:
                                return;
                        }
                    }
                }
            }
            function u0(e) {
                var r = Math.abs(e);
                return r >= Ge ? Math.round(e / Ge) + "d" : r >= br ? Math.round(e / br) + "h" : r >= yr ? Math.round(e / yr) + "m" : r >= gr ? Math.round(e / gr) + "s" : e + "ms";
            }
            function l0(e) {
                var r = Math.abs(e);
                return r >= Ge ? It(e, r, Ge, "day") : r >= br ? It(e, r, br, "hour") : r >= yr ? It(e, r, yr, "minute") : r >= gr ? It(e, r, gr, "second") : e + " ms";
            }
            function It(e, r, t, n) {
                var s = r >= t * 1.5;
                return Math.round(e / t) + " " + n + (s ? "s" : "");
            }
        });
        var eu = u((Q4, Yc)=>{
            function f0(e) {
                t.debug = t, t.default = t, t.coerce = c, t.disable = o, t.enable = s, t.enabled = i, t.humanize = Qc(), t.destroy = l, Object.keys(e).forEach((f)=>{
                    t[f] = e[f];
                }), t.names = [], t.skips = [], t.formatters = {
                };
                function r(f) {
                    let m = 0;
                    for(let x = 0; x < f.length; x++)m = (m << 5) - m + f.charCodeAt(x), m |= 0;
                    return t.colors[Math.abs(m) % t.colors.length];
                }
                t.selectColor = r;
                function t(f) {
                    let m, x = null, k, T;
                    function j(..._) {
                        if (!j.enabled) return;
                        let L = j, H = Number(new Date), se = H - (m || H);
                        L.diff = se, L.prev = m, L.curr = H, m = H, _[0] = t.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
                        let F = 0;
                        _[0] = _[0].replace(/%([a-zA-Z%])/g, (oe, Z)=>{
                            if (oe === "%%") return "%";
                            F++;
                            let ie = t.formatters[Z];
                            if (typeof ie == "function") {
                                let Ze = _[F];
                                oe = ie.call(L, Ze), _.splice(F, 1), F--;
                            }
                            return oe;
                        }), t.formatArgs.call(L, _), (L.log || t.log).apply(L, _);
                    }
                    return j.namespace = f, j.useColors = t.useColors(), j.color = t.selectColor(f), j.extend = n, j.destroy = t.destroy, Object.defineProperty(j, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: ()=>x !== null ? x : (k !== t.namespaces && (k = t.namespaces, T = t.enabled(f)), T)
                        ,
                        set: (_)=>{
                            x = _;
                        }
                    }), typeof t.init == "function" && t.init(j), j;
                }
                function n(f, m) {
                    let x = t(this.namespace + (typeof m == "undefined" ? ":" : m) + f);
                    return x.log = this.log, x;
                }
                function s(f) {
                    t.save(f), t.namespaces = f, t.names = [], t.skips = [];
                    let m, x = (typeof f == "string" ? f : "").split(/[\s,]+/), k = x.length;
                    for(m = 0; m < k; m++)!x[m] || (f = x[m].replace(/\*/g, ".*?"), f[0] === "-" ? t.skips.push(new RegExp("^" + f.substr(1) + "$")) : t.names.push(new RegExp("^" + f + "$")));
                }
                function o() {
                    let f = [
                        ...t.names.map(a),
                        ...t.skips.map(a).map((m)=>"-" + m
                        )
                    ].join(",");
                    return t.enable(""), f;
                }
                function i(f) {
                    if (f[f.length - 1] === "*") return !0;
                    let m, x;
                    for(m = 0, x = t.skips.length; m < x; m++)if (t.skips[m].test(f)) return !1;
                    for(m = 0, x = t.names.length; m < x; m++)if (t.names[m].test(f)) return !0;
                    return !1;
                }
                function a(f) {
                    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
                }
                function c(f) {
                    return f instanceof Error ? f.stack || f.message : f;
                }
                function l() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                }
                return t.enable(t.load()), t;
            }
            Yc.exports = f0;
        });
        var ds = u((ne, Dt)=>{
            ne.formatArgs = h0;
            ne.save = p0;
            ne.load = m0;
            ne.useColors = d0;
            ne.storage = g0();
            ne.destroy = (()=>{
                let e = !1;
                return ()=>{
                    e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                };
            })();
            ne.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33"
            ];
            function d0() {
                return typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }
            function h0(e) {
                if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Dt.exports.humanize(this.diff), !this.useColors) return;
                let r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                let t = 0, n = 0;
                e[0].replace(/%[a-zA-Z%]/g, (s)=>{
                    s !== "%%" && (t++, s === "%c" && (n = t));
                }), e.splice(n, 0, r);
            }
            ne.log = console.debug || console.log || (()=>{
            });
            function p0(e) {
                try {
                    e ? ne.storage.setItem("debug", e) : ne.storage.removeItem("debug");
                } catch (r) {
                }
            }
            function m0() {
                let e;
                try {
                    e = ne.storage.getItem("debug");
                } catch (r) {
                }
                return !e && typeof $4piS4 != "undefined" && "env" in $4piS4 && (e = undefined), e;
            }
            function g0() {
                try {
                    return localStorage;
                } catch (e) {
                }
            }
            Dt.exports = eu()(ne);
            var { formatters: y0  } = Dt.exports;
            y0.j = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (r) {
                    return "[UnexpectedJSONParseError]: " + r.message;
                }
            };
        });
        var tu = u((Y4, ru)=>{
            var { Multiaddr: b0  } = $(), Ot = (e, r)=>r
            , w0 = (e, r, t, n)=>{
                if (n && n.assumeHttp === !1) return `tcp://${e}:${r}`;
                let s = "tcp", o = `:${r}`;
                return t[t.length - 1].protocol === "tcp" && (s = r === "443" ? "https" : "http", o = r === "443" || r === "80" ? "" : o), `${s}://${e}${o}`;
            }, q0 = {
                ip4: Ot,
                ip6: (e, r, t, n)=>n.length === 1 && n[0].protocol === "ip6" ? r : `[${r}]`
                ,
                tcp: (e, r, t, n, s)=>n.some((o)=>[
                            "http",
                            "https",
                            "ws",
                            "wss"
                        ].includes(o.protocol)
                    ) ? `${e}:${r}` : w0(e, r, n, s)
                ,
                udp: (e, r)=>`udp://${e}:${r}`
                ,
                dnsaddr: Ot,
                dns4: Ot,
                dns6: Ot,
                ipfs: (e, r)=>`${e}/ipfs/${r}`
                ,
                p2p: (e, r)=>`${e}/p2p/${r}`
                ,
                http: (e)=>`http://${e}`
                ,
                https: (e)=>`https://${e}`
                ,
                ws: (e)=>`ws://${e}`
                ,
                wss: (e)=>`wss://${e}`
                ,
                "p2p-websocket-star": (e)=>`${e}/p2p-websocket-star`
                ,
                "p2p-webrtc-star": (e)=>`${e}/p2p-webrtc-star`
                ,
                "p2p-webrtc-direct": (e)=>`${e}/p2p-webrtc-direct`
            };
            ru.exports = (e, r)=>{
                let t = new b0(e), n = e.toString().split("/").slice(1);
                return t.tuples().map((s)=>({
                        protocol: n.shift(),
                        content: s[1] ? n.shift() : null
                    })
                ).reduce((s, o, i, a)=>{
                    let c = q0[o.protocol];
                    if (!c) throw new Error(`Unsupported protocol ${o.protocol}`);
                    return c(s, o.content, i, a, r);
                }, "");
            };
        });
        var su = u((ev, nu)=>{
            var { Multiaddr: x0  } = $(), S0 = tu();
            nu.exports = (e)=>{
                try {
                    e = S0(new x0(e));
                } catch (r) {
                }
                return e = e.toString(), e;
            };
        });
        var ou = u(()=>{
        });
        var iu = u(()=>{
        });
        var Lt = u((ov, du)=>{
            var { Multiaddr: au  } = $(), { isBrowser: hs , isWebWorker: ps , isNode: E0  } = kn(), { default: v0  } = Xc(), cu = ds()("ipfs-http-client:lib:error-handler"), Mr = Fn(), P0 = On().bind({
                ignoreUndefined: !0
            }), uu = su(), T0 = ou(), C0 = iu(), A0 = hs || ps ? location.protocol : "http", j0 = hs || ps ? location.hostname : "localhost", B0 = hs || ps ? location.port : "5001", U0 = (e = {
            })=>{
                let r, t = {
                }, n;
                if (typeof e == "string" || au.isMultiaddr(e)) r = new URL(uu(e));
                else if (e instanceof URL) r = e;
                else if (typeof e.url == "string" || au.isMultiaddr(e.url)) r = new URL(uu(e.url)), t = e;
                else if (e.url instanceof URL) r = e.url, t = e;
                else {
                    t = e || {
                    };
                    let s = (t.protocol || A0).replace(":", ""), o = (t.host || j0).split(":")[0], i = t.port || B0;
                    r = new URL(`${s}://${o}:${i}`);
                }
                if (t.apiPath ? r.pathname = t.apiPath : (r.pathname === "/" || r.pathname === void 0) && (r.pathname = "api/v0"), E0) {
                    let s = r.protocol.startsWith("https") ? C0.Agent : T0.Agent;
                    n = t.agent || new s({
                        keepAlive: !0,
                        maxSockets: 6
                    });
                }
                return {
                    ...t,
                    host: r.host,
                    protocol: r.protocol.replace(":", ""),
                    port: Number(r.port),
                    apiPath: r.pathname,
                    url: r,
                    agent: n
                };
            }, lu = async (e)=>{
                let r;
                try {
                    if ((e.headers.get("Content-Type") || "").startsWith("application/json")) {
                        let n = await e.json();
                        cu(n), r = n.Message || n.message;
                    } else r = await e.text();
                } catch (n) {
                    cu("Failed to parse error response", n), r = n.message;
                }
                let t = new Mr.HTTPError(e);
                throw r && (r.includes("deadline has elapsed") && (t = new Mr.TimeoutError), r && r.includes("context deadline exceeded") && (t = new Mr.TimeoutError)), r && r.includes("request timed out") && (t = new Mr.TimeoutError), r && (t.message = r), t;
            }, k0 = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, fu = (e)=>e.replace(k0, function(r) {
                    return "-" + r.toLowerCase();
                })
            , _0 = (e)=>typeof e == "string" ? v0(e) : e
            , ms = class extends Mr {
                constructor(r = {
                }){
                    let t = U0(r);
                    super({
                        timeout: _0(t.timeout || 0) || void 0,
                        headers: t.headers,
                        base: `${t.url}`,
                        handleError: lu,
                        transformSearchParams: (s)=>{
                            let o = new URLSearchParams;
                            for (let [i, a] of s)a !== "undefined" && a !== "null" && i !== "signal" && o.append(fu(i), a), i === "timeout" && !isNaN(a) && o.append(fu(i), a);
                            return o;
                        },
                        agent: t.agent
                    });
                    delete this.get, delete this.put, delete this.delete, delete this.options;
                    let n = this.fetch;
                    this.fetch = (s, o = {
                    })=>(typeof s == "string" && !s.startsWith("/") && (s = `${t.url}/${s}`), n.call(this, s, P0(o, {
                            method: "POST"
                        })))
                    ;
                }
            };
            ms.errorHandler = lu;
            du.exports = ms;
        });
        var h = u((iv, hu)=>{
            var N0 = Lt(), I0 = (e)=>(r)=>e(new N0(r), r)
            ;
            hu.exports = I0;
        });
        var $t = u((av, mu)=>{
            function pu(e, r) {
                for(let t in r)Object.defineProperty(e, t, {
                    value: r[t],
                    enumerable: !0,
                    configurable: !0
                });
                return e;
            }
            function D0(e, r, t) {
                if (!e || typeof e == "string") throw new TypeError("Please pass an Error to err-code");
                t || (t = {
                }), typeof r == "object" && (t = r, r = ""), r && (t.code = r);
                try {
                    return pu(e, t);
                } catch (n) {
                    t.message = e.message, t.stack = e.stack;
                    let s = function() {
                    };
                    return s.prototype = Object.create(Object.getPrototypeOf(e)), pu(new s, t);
                }
            }
            mu.exports = D0;
        });
        var gs = u((cv, gu)=>{
            function O0(e) {
                let [r, t] = e[Symbol.asyncIterator] ? [
                    e[Symbol.asyncIterator](),
                    Symbol.asyncIterator
                ] : [
                    e[Symbol.iterator](),
                    Symbol.iterator
                ], n = [];
                return {
                    peek: ()=>r.next()
                    ,
                    push: (s)=>{
                        n.push(s);
                    },
                    next: ()=>n.length ? {
                            done: !1,
                            value: n.shift()
                        } : r.next()
                    ,
                    [t] () {
                        return this;
                    }
                };
            }
            gu.exports = O0;
        });
        var ys = u((uv, yu)=>{
            async function* L0(e, r = {
            }) {
                let t = e.getReader();
                try {
                    for(;;){
                        let n = await t.read();
                        if (n.done) return;
                        yield n.value;
                    }
                } finally{
                    r.preventCancel !== !0 && t.cancel(), t.releaseLock();
                }
            }
            yu.exports = L0;
        });
        var wu = u((lv, bu)=>{
            var $0 = async (e)=>{
                let r = [];
                for await (let t of e)r.push(t);
                return r;
            };
            bu.exports = $0;
        });
        var bs = u((fv, qu)=>{
            function R0(e) {
                return ArrayBuffer.isView(e) || e instanceof ArrayBuffer;
            }
            function z0(e) {
                return e.constructor && (e.constructor.name === "Blob" || e.constructor.name === "File") && typeof e.stream == "function";
            }
            function F0(e) {
                return typeof e == "object" && (e.path || e.content);
            }
            var M0 = (e)=>e && typeof e.getReader == "function"
            ;
            qu.exports = {
                isBytes: R0,
                isBlob: z0,
                isFileObject: F0,
                isReadableStream: M0
            };
        });
        var vu = u((dv, Eu)=>{
            var H0 = $t(), V0 = gs(), W0 = ys(), G0 = wu(), { isBytes: xu , isBlob: J0 , isReadableStream: K0  } = bs();
            async function X0(e) {
                if (xu(e)) return new Blob([
                    e
                ]);
                if (typeof e == "string" || e instanceof String) return new Blob([
                    e.toString()
                ]);
                if (J0(e)) return e;
                if (K0(e) && (e = W0(e)), Symbol.iterator in e || Symbol.asyncIterator in e) {
                    let r = V0(e), { value: t , done: n  } = await r.peek();
                    if (n) return Su(r);
                    if (r.push(t), Number.isInteger(t)) return new Blob([
                        Uint8Array.from(await G0(r))
                    ]);
                    if (xu(t) || typeof t == "string" || t instanceof String) return Su(r);
                }
                throw H0(new Error(`Unexpected input: ${e}`), "ERR_UNEXPECTED_INPUT");
            }
            async function Su(e) {
                let r = [];
                for await (let t of e)r.push(t);
                return new Blob(r);
            }
            Eu.exports = X0;
        });
        var Tu = u((hv, Pu)=>{
            var Z0 = async function*(e, r) {
                for await (let t of e)yield r(t);
            };
            Pu.exports = Z0;
        });
        var ju = u((pv, Au)=>{
            function Cu(e, r) {
                for(let t in r)Object.defineProperty(e, t, {
                    value: r[t],
                    enumerable: !0,
                    configurable: !0
                });
                return e;
            }
            function Q0(e, r, t) {
                if (!e || typeof e == "string") throw new TypeError("Please pass an Error to err-code");
                t || (t = {
                }), typeof r == "object" && (t = r, r = ""), r && (t.code = r);
                try {
                    return Cu(e, t);
                } catch (n) {
                    t.message = e.message, t.stack = e.stack;
                    let s = function() {
                    };
                    return s.prototype = Object.create(Object.getPrototypeOf(e)), Cu(new s, t);
                }
            }
            Au.exports = Q0;
        });
        var Uu = u((mv, Bu)=>{
            Bu.exports = Y0;
            function Y0(e, r) {
                for(var t = new Array(arguments.length - 1), n = 0, s = 2, o = !0; s < arguments.length;)t[n++] = arguments[s++];
                return new Promise(function(a, c) {
                    t[n] = function(f) {
                        if (o) {
                            if (o = !1, f) c(f);
                            else {
                                for(var m = new Array(arguments.length - 1), x = 0; x < m.length;)m[x++] = arguments[x];
                                a.apply(null, m);
                            }
                        }
                    };
                    try {
                        e.apply(r || null, t);
                    } catch (l) {
                        o && (o = !1, c(l));
                    }
                });
            }
        });
        var Iu = u((Nu)=>{
            var Rt = Nu;
            Rt.length = function(r) {
                var t = r.length;
                if (!t) return 0;
                for(var n = 0; --t % 4 > 1 && r.charAt(t) === "=";)++n;
                return Math.ceil(r.length * 3) / 4 - n;
            };
            var wr = new Array(64), ku = new Array(123);
            for(be = 0; be < 64;)ku[wr[be] = be < 26 ? be + 65 : be < 52 ? be + 71 : be < 62 ? be - 4 : be - 59 | 43] = be++;
            var be;
            Rt.encode = function(r, t, n) {
                for(var s = null, o = [], i = 0, a = 0, c; t < n;){
                    var l = r[t++];
                    switch(a){
                        case 0:
                            o[i++] = wr[l >> 2], c = (l & 3) << 4, a = 1;
                            break;
                        case 1:
                            o[i++] = wr[c | l >> 4], c = (l & 15) << 2, a = 2;
                            break;
                        case 2:
                            o[i++] = wr[c | l >> 6], o[i++] = wr[l & 63], a = 0;
                            break;
                    }
                    i > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, o)), i = 0);
                }
                return a && (o[i++] = wr[c], o[i++] = 61, a === 1 && (o[i++] = 61)), s ? (i && s.push(String.fromCharCode.apply(String, o.slice(0, i))), s.join("")) : String.fromCharCode.apply(String, o.slice(0, i));
            };
            var _u = "invalid encoding";
            Rt.decode = function(r, t, n) {
                for(var s = n, o = 0, i, a = 0; a < r.length;){
                    var c = r.charCodeAt(a++);
                    if (c === 61 && o > 1) break;
                    if ((c = ku[c]) === void 0) throw Error(_u);
                    switch(o){
                        case 0:
                            i = c, o = 1;
                            break;
                        case 1:
                            t[n++] = i << 2 | (c & 48) >> 4, i = c, o = 2;
                            break;
                        case 2:
                            t[n++] = (i & 15) << 4 | (c & 60) >> 2, i = c, o = 3;
                            break;
                        case 3:
                            t[n++] = (i & 3) << 6 | c, o = 0;
                            break;
                    }
                }
                if (o === 1) throw Error(_u);
                return n - s;
            };
            Rt.test = function(r) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
            };
        });
        var Ou = u((yv, Du)=>{
            Du.exports = zt;
            function zt() {
                this._listeners = {
                };
            }
            zt.prototype.on = function(r, t, n) {
                return (this._listeners[r] || (this._listeners[r] = [])).push({
                    fn: t,
                    ctx: n || this
                }), this;
            };
            zt.prototype.off = function(r, t) {
                if (r === void 0) this._listeners = {
                };
                else if (t === void 0) this._listeners[r] = [];
                else for(var n = this._listeners[r], s = 0; s < n.length;)n[s].fn === t ? n.splice(s, 1) : ++s;
                return this;
            };
            zt.prototype.emit = function(r) {
                var t = this._listeners[r];
                if (t) {
                    for(var n = [], s = 1; s < arguments.length;)n.push(arguments[s++]);
                    for(s = 0; s < t.length;)t[s].fn.apply(t[s++].ctx, n);
                }
                return this;
            };
        });
        var Hu = u((bv, Mu)=>{
            Mu.exports = Lu(Lu);
            function Lu(e) {
                return typeof Float32Array != "undefined" ? (function() {
                    var r = new Float32Array([
                        -0
                    ]), t = new Uint8Array(r.buffer), n = t[3] === 128;
                    function s(c, l, f) {
                        r[0] = c, l[f] = t[0], l[f + 1] = t[1], l[f + 2] = t[2], l[f + 3] = t[3];
                    }
                    function o(c, l, f) {
                        r[0] = c, l[f] = t[3], l[f + 1] = t[2], l[f + 2] = t[1], l[f + 3] = t[0];
                    }
                    e.writeFloatLE = n ? s : o, e.writeFloatBE = n ? o : s;
                    function i(c, l) {
                        return t[0] = c[l], t[1] = c[l + 1], t[2] = c[l + 2], t[3] = c[l + 3], r[0];
                    }
                    function a(c, l) {
                        return t[3] = c[l], t[2] = c[l + 1], t[1] = c[l + 2], t[0] = c[l + 3], r[0];
                    }
                    e.readFloatLE = n ? i : a, e.readFloatBE = n ? a : i;
                })() : (function() {
                    function r(n, s, o, i) {
                        var a = s < 0 ? 1 : 0;
                        if (a && (s = -s), s === 0) n(1 / s > 0 ? 0 : 2147483648, o, i);
                        else if (isNaN(s)) n(2143289344, o, i);
                        else if (s > 340282346638528860000000000000000000000) n((a << 31 | 2139095040) >>> 0, o, i);
                        else if (s < 0.000000000000000000000000000000000000011754943508222875) n((a << 31 | Math.round(s / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, o, i);
                        else {
                            var c = Math.floor(Math.log(s) / Math.LN2), l = Math.round(s * Math.pow(2, -c) * 8388608) & 8388607;
                            n((a << 31 | c + 127 << 23 | l) >>> 0, o, i);
                        }
                    }
                    e.writeFloatLE = r.bind(null, $u), e.writeFloatBE = r.bind(null, Ru);
                    function t(n, s, o) {
                        var i = n(s, o), a = (i >> 31) * 2 + 1, c = i >>> 23 & 255, l = i & 8388607;
                        return c === 255 ? l ? NaN : a * (1 / 0) : c === 0 ? a * 0.000000000000000000000000000000000000000000001401298464324817 * l : a * Math.pow(2, c - 150) * (l + 8388608);
                    }
                    e.readFloatLE = t.bind(null, zu), e.readFloatBE = t.bind(null, Fu);
                })(), typeof Float64Array != "undefined" ? (function() {
                    var r = new Float64Array([
                        -0
                    ]), t = new Uint8Array(r.buffer), n = t[7] === 128;
                    function s(c, l, f) {
                        r[0] = c, l[f] = t[0], l[f + 1] = t[1], l[f + 2] = t[2], l[f + 3] = t[3], l[f + 4] = t[4], l[f + 5] = t[5], l[f + 6] = t[6], l[f + 7] = t[7];
                    }
                    function o(c, l, f) {
                        r[0] = c, l[f] = t[7], l[f + 1] = t[6], l[f + 2] = t[5], l[f + 3] = t[4], l[f + 4] = t[3], l[f + 5] = t[2], l[f + 6] = t[1], l[f + 7] = t[0];
                    }
                    e.writeDoubleLE = n ? s : o, e.writeDoubleBE = n ? o : s;
                    function i(c, l) {
                        return t[0] = c[l], t[1] = c[l + 1], t[2] = c[l + 2], t[3] = c[l + 3], t[4] = c[l + 4], t[5] = c[l + 5], t[6] = c[l + 6], t[7] = c[l + 7], r[0];
                    }
                    function a(c, l) {
                        return t[7] = c[l], t[6] = c[l + 1], t[5] = c[l + 2], t[4] = c[l + 3], t[3] = c[l + 4], t[2] = c[l + 5], t[1] = c[l + 6], t[0] = c[l + 7], r[0];
                    }
                    e.readDoubleLE = n ? i : a, e.readDoubleBE = n ? a : i;
                })() : (function() {
                    function r(n, s, o, i, a, c) {
                        var l = i < 0 ? 1 : 0;
                        if (l && (i = -i), i === 0) n(0, a, c + s), n(1 / i > 0 ? 0 : 2147483648, a, c + o);
                        else if (isNaN(i)) n(0, a, c + s), n(2146959360, a, c + o);
                        else if (i > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) n(0, a, c + s), n((l << 31 | 2146435072) >>> 0, a, c + o);
                        else {
                            var f;
                            if (i < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) f = i / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005, n(f >>> 0, a, c + s), n((l << 31 | f / 4294967296) >>> 0, a, c + o);
                            else {
                                var m = Math.floor(Math.log(i) / Math.LN2);
                                m === 1024 && (m = 1023), f = i * Math.pow(2, -m), n(f * 4503599627370496 >>> 0, a, c + s), n((l << 31 | m + 1023 << 20 | f * 1048576 & 1048575) >>> 0, a, c + o);
                            }
                        }
                    }
                    e.writeDoubleLE = r.bind(null, $u, 0, 4), e.writeDoubleBE = r.bind(null, Ru, 4, 0);
                    function t(n, s, o, i, a) {
                        var c = n(i, a + s), l = n(i, a + o), f = (l >> 31) * 2 + 1, m = l >>> 20 & 2047, x = 4294967296 * (l & 1048575) + c;
                        return m === 2047 ? x ? NaN : f * (1 / 0) : m === 0 ? f * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * x : f * Math.pow(2, m - 1075) * (x + 4503599627370496);
                    }
                    e.readDoubleLE = t.bind(null, zu, 0, 4), e.readDoubleBE = t.bind(null, Fu, 4, 0);
                })(), e;
            }
            function $u(e, r, t) {
                r[t] = e & 255, r[t + 1] = e >>> 8 & 255, r[t + 2] = e >>> 16 & 255, r[t + 3] = e >>> 24;
            }
            function Ru(e, r, t) {
                r[t] = e >>> 24, r[t + 1] = e >>> 16 & 255, r[t + 2] = e >>> 8 & 255, r[t + 3] = e & 255;
            }
            function zu(e, r) {
                return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
            }
            function Fu(e, r) {
                return (e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]) >>> 0;
            }
        });
        var Vu = u((exports, module)=>{
            module.exports = inquire;
            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod;
                } catch (e) {
                }
                return null;
            }
        });
        var Gu = u((Wu)=>{
            var ws = Wu;
            ws.length = function(r) {
                for(var t = 0, n = 0, s = 0; s < r.length; ++s)n = r.charCodeAt(s), n < 128 ? t += 1 : n < 2048 ? t += 2 : (n & 64512) == 55296 && (r.charCodeAt(s + 1) & 64512) == 56320 ? (++s, t += 4) : t += 3;
                return t;
            };
            ws.read = function(r, t, n) {
                var s = n - t;
                if (s < 1) return "";
                for(var o = null, i = [], a = 0, c; t < n;)c = r[t++], c < 128 ? i[a++] = c : c > 191 && c < 224 ? i[a++] = (c & 31) << 6 | r[t++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (r[t++] & 63) << 12 | (r[t++] & 63) << 6 | r[t++] & 63) - 65536, i[a++] = 55296 + (c >> 10), i[a++] = 56320 + (c & 1023)) : i[a++] = (c & 15) << 12 | (r[t++] & 63) << 6 | r[t++] & 63, a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), a = 0);
                return o ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
            };
            ws.write = function(r, t, n) {
                for(var s = n, o, i, a = 0; a < r.length; ++a)o = r.charCodeAt(a), o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = o & 63 | 128) : (o & 64512) == 55296 && ((i = r.charCodeAt(a + 1)) & 64512) == 56320 ? (o = 65536 + ((o & 1023) << 10) + (i & 1023), ++a, t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = o & 63 | 128) : (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = o & 63 | 128);
                return n - s;
            };
        });
        var Ku = u((qv, Ju)=>{
            Ju.exports = e1;
            function e1(e, r, t) {
                var n = t || 8192, s = n >>> 1, o = null, i = n;
                return function(c) {
                    if (c < 1 || c > s) return e(c);
                    i + c > n && (o = e(n), i = 0);
                    var l = r.call(o, i, i += c);
                    return i & 7 && (i = (i | 7) + 1), l;
                };
            }
        });
        var Zu = u((xv, Xu)=>{
            Xu.exports = z;
            var Hr = Me();
            function z(e, r) {
                this.lo = e >>> 0, this.hi = r >>> 0;
            }
            var Je = z.zero = new z(0, 0);
            Je.toNumber = function() {
                return 0;
            };
            Je.zzEncode = Je.zzDecode = function() {
                return this;
            };
            Je.length = function() {
                return 1;
            };
            var r1 = z.zeroHash = "\0\0\0\0\0\0\0\0";
            z.fromNumber = function(r) {
                if (r === 0) return Je;
                var t = r < 0;
                t && (r = -r);
                var n = r >>> 0, s = (r - n) / 4294967296 >>> 0;
                return t && (s = ~s >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++s > 4294967295 && (s = 0))), new z(n, s);
            };
            z.from = function(r) {
                if (typeof r == "number") return z.fromNumber(r);
                if (Hr.isString(r)) {
                    if (Hr.Long) r = Hr.Long.fromString(r);
                    else return z.fromNumber(parseInt(r, 10));
                }
                return r.low || r.high ? new z(r.low >>> 0, r.high >>> 0) : Je;
            };
            z.prototype.toNumber = function(r) {
                if (!r && this.hi >>> 31) {
                    var t = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
                    return t || (n = n + 1 >>> 0), -(t + n * 4294967296);
                }
                return this.lo + this.hi * 4294967296;
            };
            z.prototype.toLong = function(r) {
                return Hr.Long ? new Hr.Long(this.lo | 0, this.hi | 0, Boolean(r)) : {
                    low: this.lo | 0,
                    high: this.hi | 0,
                    unsigned: Boolean(r)
                };
            };
            var Fe = String.prototype.charCodeAt;
            z.fromHash = function(r) {
                return r === r1 ? Je : new z((Fe.call(r, 0) | Fe.call(r, 1) << 8 | Fe.call(r, 2) << 16 | Fe.call(r, 3) << 24) >>> 0, (Fe.call(r, 4) | Fe.call(r, 5) << 8 | Fe.call(r, 6) << 16 | Fe.call(r, 7) << 24) >>> 0);
            };
            z.prototype.toHash = function() {
                return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
            };
            z.prototype.zzEncode = function() {
                var r = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ r) >>> 0, this.lo = (this.lo << 1 ^ r) >>> 0, this;
            };
            z.prototype.zzDecode = function() {
                var r = -(this.lo & 1);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ r) >>> 0, this.hi = (this.hi >>> 1 ^ r) >>> 0, this;
            };
            z.prototype.length = function() {
                var r = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
                return n === 0 ? t === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
            };
        });
        var Me = u((qs)=>{
            var b = qs;
            b.asPromise = Uu();
            b.base64 = Iu();
            b.EventEmitter = Ou();
            b.float = Hu();
            b.inquire = Vu();
            b.utf8 = Gu();
            b.pool = Ku();
            b.LongBits = Zu();
            b.isNode = Boolean(typeof globalThis != "undefined" && globalThis && globalThis.process && globalThis.process.versions && globalThis.process.versions.node);
            b.global = b.isNode && globalThis || typeof window != "undefined" && window || typeof self != "undefined" && self || qs;
            b.emptyArray = Object.freeze ? Object.freeze([]) : [];
            b.emptyObject = Object.freeze ? Object.freeze({
            }) : {
            };
            b.isInteger = Number.isInteger || function(r) {
                return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
            };
            b.isString = function(r) {
                return typeof r == "string" || r instanceof String;
            };
            b.isObject = function(r) {
                return r && typeof r == "object";
            };
            b.isset = b.isSet = function(r, t) {
                var n = r[t];
                return n != null && r.hasOwnProperty(t) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
            };
            b.Buffer = (function() {
                try {
                    var e = b.inquire("buffer").Buffer;
                    return e.prototype.utf8Write ? e : null;
                } catch (r) {
                    return null;
                }
            })();
            b._Buffer_from = null;
            b._Buffer_allocUnsafe = null;
            b.newBuffer = function(r) {
                return typeof r == "number" ? b.Buffer ? b._Buffer_allocUnsafe(r) : new b.Array(r) : b.Buffer ? b._Buffer_from(r) : typeof Uint8Array == "undefined" ? r : new Uint8Array(r);
            };
            b.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
            b.Long = b.global.dcodeIO && b.global.dcodeIO.Long || b.global.Long || b.inquire("long");
            b.key2Re = /^true|false|0|1$/;
            b.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
            b.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
            b.longToHash = function(r) {
                return r ? b.LongBits.from(r).toHash() : b.LongBits.zeroHash;
            };
            b.longFromHash = function(r, t) {
                var n = b.LongBits.fromHash(r);
                return b.Long ? b.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
            };
            function Qu(e, r, t) {
                for(var n = Object.keys(r), s = 0; s < n.length; ++s)(e[n[s]] === void 0 || !t) && (e[n[s]] = r[n[s]]);
                return e;
            }
            b.merge = Qu;
            b.lcFirst = function(r) {
                return r.charAt(0).toLowerCase() + r.substring(1);
            };
            function Yu(e) {
                function r(t, n) {
                    if (!(this instanceof r)) return new r(t, n);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return t;
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", {
                        value: new Error().stack || ""
                    }), n && Qu(this, n);
                }
                return (r.prototype = Object.create(Error.prototype)).constructor = r, Object.defineProperty(r.prototype, "name", {
                    get: function() {
                        return e;
                    }
                }), r.prototype.toString = function() {
                    return this.name + ": " + this.message;
                }, r;
            }
            b.newError = Yu;
            b.ProtocolError = Yu("ProtocolError");
            b.oneOfGetter = function(r) {
                for(var t = {
                }, n = 0; n < r.length; ++n)t[r[n]] = 1;
                return function() {
                    for(var s = Object.keys(this), o = s.length - 1; o > -1; --o)if (t[s[o]] === 1 && this[s[o]] !== void 0 && this[s[o]] !== null) return s[o];
                };
            };
            b.oneOfSetter = function(r) {
                return function(t) {
                    for(var n = 0; n < r.length; ++n)r[n] !== t && delete this[r[n]];
                };
            };
            b.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            };
            b._configure = function() {
                var e = b.Buffer;
                if (!e) {
                    b._Buffer_from = b._Buffer_allocUnsafe = null;
                    return;
                }
                b._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
                    return new e(t, n);
                }, b._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                    return new e(t);
                };
            };
        });
        var Cs = u((Ev, nl)=>{
            nl.exports = C;
            var fe = Me(), xs, Ft = fe.LongBits, el = fe.base64, rl = fe.utf8;
            function Vr(e, r, t) {
                this.fn = e, this.len = r, this.next = void 0, this.val = t;
            }
            function Ss() {
            }
            function t1(e) {
                this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
            }
            function C() {
                this.len = 0, this.head = new Vr(Ss, 0, 0), this.tail = this.head, this.states = null;
            }
            var tl = function() {
                return fe.Buffer ? function() {
                    return (C.create = function() {
                        return new xs;
                    })();
                } : function() {
                    return new C;
                };
            };
            C.create = tl();
            C.alloc = function(r) {
                return new fe.Array(r);
            };
            fe.Array !== Array && (C.alloc = fe.pool(C.alloc, fe.Array.prototype.subarray));
            C.prototype._push = function(r, t, n) {
                return this.tail = this.tail.next = new Vr(r, t, n), this.len += t, this;
            };
            function Es(e, r, t) {
                r[t] = e & 255;
            }
            function n1(e, r, t) {
                for(; e > 127;)r[t++] = e & 127 | 128, e >>>= 7;
                r[t] = e;
            }
            function vs(e, r) {
                this.len = e, this.next = void 0, this.val = r;
            }
            vs.prototype = Object.create(Vr.prototype);
            vs.prototype.fn = n1;
            C.prototype.uint32 = function(r) {
                return this.len += (this.tail = this.tail.next = new vs((r = r >>> 0) < 128 ? 1 : r < 16384 ? 2 : r < 2097152 ? 3 : r < 268435456 ? 4 : 5, r)).len, this;
            };
            C.prototype.int32 = function(r) {
                return r < 0 ? this._push(Ps, 10, Ft.fromNumber(r)) : this.uint32(r);
            };
            C.prototype.sint32 = function(r) {
                return this.uint32((r << 1 ^ r >> 31) >>> 0);
            };
            function Ps(e, r, t) {
                for(; e.hi;)r[t++] = e.lo & 127 | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                for(; e.lo > 127;)r[t++] = e.lo & 127 | 128, e.lo = e.lo >>> 7;
                r[t++] = e.lo;
            }
            C.prototype.uint64 = function(r) {
                var t = Ft.from(r);
                return this._push(Ps, t.length(), t);
            };
            C.prototype.int64 = C.prototype.uint64;
            C.prototype.sint64 = function(r) {
                var t = Ft.from(r).zzEncode();
                return this._push(Ps, t.length(), t);
            };
            C.prototype.bool = function(r) {
                return this._push(Es, 1, r ? 1 : 0);
            };
            function Ts(e, r, t) {
                r[t] = e & 255, r[t + 1] = e >>> 8 & 255, r[t + 2] = e >>> 16 & 255, r[t + 3] = e >>> 24;
            }
            C.prototype.fixed32 = function(r) {
                return this._push(Ts, 4, r >>> 0);
            };
            C.prototype.sfixed32 = C.prototype.fixed32;
            C.prototype.fixed64 = function(r) {
                var t = Ft.from(r);
                return this._push(Ts, 4, t.lo)._push(Ts, 4, t.hi);
            };
            C.prototype.sfixed64 = C.prototype.fixed64;
            C.prototype.float = function(r) {
                return this._push(fe.float.writeFloatLE, 4, r);
            };
            C.prototype.double = function(r) {
                return this._push(fe.float.writeDoubleLE, 8, r);
            };
            var s1 = fe.Array.prototype.set ? function(r, t, n) {
                t.set(r, n);
            } : function(r, t, n) {
                for(var s = 0; s < r.length; ++s)t[n + s] = r[s];
            };
            C.prototype.bytes = function(r) {
                var t = r.length >>> 0;
                if (!t) return this._push(Es, 1, 0);
                if (fe.isString(r)) {
                    var n = C.alloc(t = el.length(r));
                    el.decode(r, n, 0), r = n;
                }
                return this.uint32(t)._push(s1, t, r);
            };
            C.prototype.string = function(r) {
                var t = rl.length(r);
                return t ? this.uint32(t)._push(rl.write, t, r) : this._push(Es, 1, 0);
            };
            C.prototype.fork = function() {
                return this.states = new t1(this), this.head = this.tail = new Vr(Ss, 0, 0), this.len = 0, this;
            };
            C.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Vr(Ss, 0, 0), this.len = 0), this;
            };
            C.prototype.ldelim = function() {
                var r = this.head, t = this.tail, n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = r.next, this.tail = t, this.len += n), this;
            };
            C.prototype.finish = function() {
                for(var r = this.head.next, t = this.constructor.alloc(this.len), n = 0; r;)r.fn(r.val, t, n), n += r.len, r = r.next;
                return t;
            };
            C._configure = function(e) {
                xs = e, C.create = tl(), xs._configure();
            };
        });
        var il = u((vv, ol)=>{
            ol.exports = Ae;
            var sl = Cs();
            (Ae.prototype = Object.create(sl.prototype)).constructor = Ae;
            var He = Me();
            function Ae() {
                sl.call(this);
            }
            Ae._configure = function() {
                Ae.alloc = He._Buffer_allocUnsafe, Ae.writeBytesBuffer = He.Buffer && He.Buffer.prototype instanceof Uint8Array && He.Buffer.prototype.set.name === "set" ? function(r, t, n) {
                    t.set(r, n);
                } : function(r, t, n) {
                    if (r.copy) r.copy(t, n, 0, r.length);
                    else for(var s = 0; s < r.length;)t[n++] = r[s++];
                };
            };
            Ae.prototype.bytes = function(r) {
                He.isString(r) && (r = He._Buffer_from(r, "base64"));
                var t = r.length >>> 0;
                return this.uint32(t), t && this._push(Ae.writeBytesBuffer, t, r), this;
            };
            function o1(e, r, t) {
                e.length < 40 ? He.utf8.write(e, r, t) : r.utf8Write ? r.utf8Write(e, t) : r.write(e, t);
            }
            Ae.prototype.string = function(r) {
                var t = He.Buffer.byteLength(r);
                return this.uint32(t), t && this._push(o1, t, r), this;
            };
            Ae._configure();
        });
        var Bs = u((Pv, fl)=>{
            fl.exports = D;
            var je = Me(), As, al = je.LongBits, i1 = je.utf8;
            function we(e, r) {
                return RangeError("index out of range: " + e.pos + " + " + (r || 1) + " > " + e.len);
            }
            function D(e) {
                this.buf = e, this.pos = 0, this.len = e.length;
            }
            var cl = typeof Uint8Array != "undefined" ? function(r) {
                if (r instanceof Uint8Array || Array.isArray(r)) return new D(r);
                throw Error("illegal buffer");
            } : function(r) {
                if (Array.isArray(r)) return new D(r);
                throw Error("illegal buffer");
            }, ul = function() {
                return je.Buffer ? function(t) {
                    return (D.create = function(s) {
                        return je.Buffer.isBuffer(s) ? new As(s) : cl(s);
                    })(t);
                } : cl;
            };
            D.create = ul();
            D.prototype._slice = je.Array.prototype.subarray || je.Array.prototype.slice;
            D.prototype.uint32 = (function() {
                var r = 4294967295;
                return function() {
                    if (r = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (r = (r | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return r;
                    if ((this.pos += 5) > this.len) throw this.pos = this.len, we(this, 10);
                    return r;
                };
            })();
            D.prototype.int32 = function() {
                return this.uint32() | 0;
            };
            D.prototype.sint32 = function() {
                var r = this.uint32();
                return r >>> 1 ^ -(r & 1) | 0;
            };
            function js() {
                var e = new al(0, 0), r = 0;
                if (this.len - this.pos > 4) {
                    for(; r < 4; ++r)if (e.lo = (e.lo | (this.buf[this.pos] & 127) << r * 7) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e.lo = (e.lo | (this.buf[this.pos] & 127) << 28) >>> 0, e.hi = (e.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
                    r = 0;
                } else {
                    for(; r < 3; ++r){
                        if (this.pos >= this.len) throw we(this);
                        if (e.lo = (e.lo | (this.buf[this.pos] & 127) << r * 7) >>> 0, this.buf[this.pos++] < 128) return e;
                    }
                    return e.lo = (e.lo | (this.buf[this.pos++] & 127) << r * 7) >>> 0, e;
                }
                if (this.len - this.pos > 4) {
                    for(; r < 5; ++r)if (e.hi = (e.hi | (this.buf[this.pos] & 127) << r * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return e;
                } else for(; r < 5; ++r){
                    if (this.pos >= this.len) throw we(this);
                    if (e.hi = (e.hi | (this.buf[this.pos] & 127) << r * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return e;
                }
                throw Error("invalid varint encoding");
            }
            D.prototype.bool = function() {
                return this.uint32() !== 0;
            };
            function Mt(e, r) {
                return (e[r - 4] | e[r - 3] << 8 | e[r - 2] << 16 | e[r - 1] << 24) >>> 0;
            }
            D.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw we(this, 4);
                return Mt(this.buf, this.pos += 4);
            };
            D.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw we(this, 4);
                return Mt(this.buf, this.pos += 4) | 0;
            };
            function ll() {
                if (this.pos + 8 > this.len) throw we(this, 8);
                return new al(Mt(this.buf, this.pos += 4), Mt(this.buf, this.pos += 4));
            }
            D.prototype.float = function() {
                if (this.pos + 4 > this.len) throw we(this, 4);
                var r = je.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, r;
            };
            D.prototype.double = function() {
                if (this.pos + 8 > this.len) throw we(this, 4);
                var r = je.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, r;
            };
            D.prototype.bytes = function() {
                var r = this.uint32(), t = this.pos, n = this.pos + r;
                if (n > this.len) throw we(this, r);
                return this.pos += r, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n);
            };
            D.prototype.string = function() {
                var r = this.bytes();
                return i1.read(r, 0, r.length);
            };
            D.prototype.skip = function(r) {
                if (typeof r == "number") {
                    if (this.pos + r > this.len) throw we(this, r);
                    this.pos += r;
                } else do if (this.pos >= this.len) throw we(this);
                while (this.buf[this.pos++] & 128)
                return this;
            };
            D.prototype.skipType = function(e) {
                switch(e){
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for(; (e = this.uint32() & 7) != 4;)this.skipType(e);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + e + " at offset " + this.pos);
                }
                return this;
            };
            D._configure = function(e) {
                As = e, D.create = ul(), As._configure();
                var r = je.Long ? "toLong" : "toNumber";
                je.merge(D.prototype, {
                    int64: function() {
                        return js.call(this)[r](!1);
                    },
                    uint64: function() {
                        return js.call(this)[r](!0);
                    },
                    sint64: function() {
                        return js.call(this).zzDecode()[r](!1);
                    },
                    fixed64: function() {
                        return ll.call(this)[r](!0);
                    },
                    sfixed64: function() {
                        return ll.call(this)[r](!1);
                    }
                });
            };
        });
        var ml = u((Tv, pl)=>{
            pl.exports = Ke;
            var dl = Bs();
            (Ke.prototype = Object.create(dl.prototype)).constructor = Ke;
            var hl = Me();
            function Ke(e) {
                dl.call(this, e);
            }
            Ke._configure = function() {
                hl.Buffer && (Ke.prototype._slice = hl.Buffer.prototype.slice);
            };
            Ke.prototype.string = function() {
                var r = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + r, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + r, this.len));
            };
            Ke._configure();
        });
        var yl = u((Cv, gl)=>{
            gl.exports = Wr;
            var Us = Me();
            (Wr.prototype = Object.create(Us.EventEmitter.prototype)).constructor = Wr;
            function Wr(e, r, t) {
                if (typeof e != "function") throw TypeError("rpcImpl must be a function");
                Us.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(r), this.responseDelimited = Boolean(t);
            }
            Wr.prototype.rpcCall = function e(r, t, n, s, o) {
                if (!s) throw TypeError("request must be specified");
                var i = this;
                if (!o) return Us.asPromise(e, i, r, t, n, s);
                if (!i.rpcImpl) {
                    setTimeout(function() {
                        o(Error("already ended"));
                    }, 0);
                    return;
                }
                try {
                    return i.rpcImpl(r, t[i.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), function(c, l) {
                        if (c) return i.emit("error", c, r), o(c);
                        if (l === null) {
                            i.end(!0);
                            return;
                        }
                        if (!(l instanceof n)) try {
                            l = n[i.responseDelimited ? "decodeDelimited" : "decode"](l);
                        } catch (f) {
                            return i.emit("error", f, r), o(f);
                        }
                        return i.emit("data", l, r), o(null, l);
                    });
                } catch (a) {
                    i.emit("error", a, r), setTimeout(function() {
                        o(a);
                    }, 0);
                    return;
                }
            };
            Wr.prototype.end = function(r) {
                return this.rpcImpl && (r || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
            };
        });
        var wl = u((bl)=>{
            var a1 = bl;
            a1.Service = yl();
        });
        var xl = u((jv, ql)=>{
            ql.exports = {
            };
        });
        var vl = u((El)=>{
            var X = El;
            X.build = "minimal";
            X.Writer = Cs();
            X.BufferWriter = il();
            X.Reader = Bs();
            X.BufferReader = ml();
            X.util = Me();
            X.rpc = wl();
            X.roots = xl();
            X.configure = Sl;
            function Sl() {
                X.util._configure(), X.Writer._configure(X.BufferWriter), X.Reader._configure(X.BufferReader);
            }
            Sl();
        });
        var Tl = u((Uv, Pl)=>{
            Pl.exports = vl();
        });
        var ke, qr, ks, q, M, Cl, kv, _v, Al = w(()=>{
            ke = Qs(Tl()), qr = ke.default.Reader, ks = ke.default.Writer, q = ke.default.util, M = ke.default.roots["ipfs-unixfs"] || (ke.default.roots["ipfs-unixfs"] = {
            }), Cl = M.Data = (()=>{
                function e(r) {
                    if (this.blocksizes = [], r) for(var t = Object.keys(r), n = 0; n < t.length; ++n)r[t[n]] != null && (this[t[n]] = r[t[n]]);
                }
                return e.prototype.Type = 0, e.prototype.Data = q.newBuffer([]), e.prototype.filesize = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.blocksizes = q.emptyArray, e.prototype.hashType = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.fanout = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.mode = 0, e.prototype.mtime = null, e.encode = function(t, n) {
                    if (n || (n = ks.create()), n.uint32(8).int32(t.Type), t.Data != null && Object.hasOwnProperty.call(t, "Data") && n.uint32(18).bytes(t.Data), t.filesize != null && Object.hasOwnProperty.call(t, "filesize") && n.uint32(24).uint64(t.filesize), t.blocksizes != null && t.blocksizes.length) for(var s = 0; s < t.blocksizes.length; ++s)n.uint32(32).uint64(t.blocksizes[s]);
                    return t.hashType != null && Object.hasOwnProperty.call(t, "hashType") && n.uint32(40).uint64(t.hashType), t.fanout != null && Object.hasOwnProperty.call(t, "fanout") && n.uint32(48).uint64(t.fanout), t.mode != null && Object.hasOwnProperty.call(t, "mode") && n.uint32(56).uint32(t.mode), t.mtime != null && Object.hasOwnProperty.call(t, "mtime") && M.UnixTime.encode(t.mtime, n.uint32(66).fork()).ldelim(), n;
                }, e.decode = function(t, n) {
                    t instanceof qr || (t = qr.create(t));
                    for(var s = n === void 0 ? t.len : t.pos + n, o = new M.Data; t.pos < s;){
                        var i = t.uint32();
                        switch(i >>> 3){
                            case 1:
                                o.Type = t.int32();
                                break;
                            case 2:
                                o.Data = t.bytes();
                                break;
                            case 3:
                                o.filesize = t.uint64();
                                break;
                            case 4:
                                if (o.blocksizes && o.blocksizes.length || (o.blocksizes = []), (i & 7) == 2) for(var a = t.uint32() + t.pos; t.pos < a;)o.blocksizes.push(t.uint64());
                                else o.blocksizes.push(t.uint64());
                                break;
                            case 5:
                                o.hashType = t.uint64();
                                break;
                            case 6:
                                o.fanout = t.uint64();
                                break;
                            case 7:
                                o.mode = t.uint32();
                                break;
                            case 8:
                                o.mtime = M.UnixTime.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(i & 7);
                                break;
                        }
                    }
                    if (!o.hasOwnProperty("Type")) throw q.ProtocolError("missing required 'Type'", {
                        instance: o
                    });
                    return o;
                }, e.fromObject = function(t) {
                    if (t instanceof M.Data) return t;
                    var n = new M.Data;
                    switch(t.Type){
                        case "Raw":
                        case 0:
                            n.Type = 0;
                            break;
                        case "Directory":
                        case 1:
                            n.Type = 1;
                            break;
                        case "File":
                        case 2:
                            n.Type = 2;
                            break;
                        case "Metadata":
                        case 3:
                            n.Type = 3;
                            break;
                        case "Symlink":
                        case 4:
                            n.Type = 4;
                            break;
                        case "HAMTShard":
                        case 5:
                            n.Type = 5;
                            break;
                    }
                    if (t.Data != null && (typeof t.Data == "string" ? q.base64.decode(t.Data, n.Data = q.newBuffer(q.base64.length(t.Data)), 0) : t.Data.length && (n.Data = t.Data)), t.filesize != null && (q.Long ? (n.filesize = q.Long.fromValue(t.filesize)).unsigned = !0 : typeof t.filesize == "string" ? n.filesize = parseInt(t.filesize, 10) : typeof t.filesize == "number" ? n.filesize = t.filesize : typeof t.filesize == "object" && (n.filesize = new q.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0))), t.blocksizes) {
                        if (!Array.isArray(t.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
                        n.blocksizes = [];
                        for(var s = 0; s < t.blocksizes.length; ++s)q.Long ? (n.blocksizes[s] = q.Long.fromValue(t.blocksizes[s])).unsigned = !0 : typeof t.blocksizes[s] == "string" ? n.blocksizes[s] = parseInt(t.blocksizes[s], 10) : typeof t.blocksizes[s] == "number" ? n.blocksizes[s] = t.blocksizes[s] : typeof t.blocksizes[s] == "object" && (n.blocksizes[s] = new q.LongBits(t.blocksizes[s].low >>> 0, t.blocksizes[s].high >>> 0).toNumber(!0));
                    }
                    if (t.hashType != null && (q.Long ? (n.hashType = q.Long.fromValue(t.hashType)).unsigned = !0 : typeof t.hashType == "string" ? n.hashType = parseInt(t.hashType, 10) : typeof t.hashType == "number" ? n.hashType = t.hashType : typeof t.hashType == "object" && (n.hashType = new q.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0))), t.fanout != null && (q.Long ? (n.fanout = q.Long.fromValue(t.fanout)).unsigned = !0 : typeof t.fanout == "string" ? n.fanout = parseInt(t.fanout, 10) : typeof t.fanout == "number" ? n.fanout = t.fanout : typeof t.fanout == "object" && (n.fanout = new q.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0))), t.mode != null && (n.mode = t.mode >>> 0), t.mtime != null) {
                        if (typeof t.mtime != "object") throw TypeError(".Data.mtime: object expected");
                        n.mtime = M.UnixTime.fromObject(t.mtime);
                    }
                    return n;
                }, e.toObject = function(t, n) {
                    n || (n = {
                    });
                    var s = {
                    };
                    if ((n.arrays || n.defaults) && (s.blocksizes = []), n.defaults) {
                        if (s.Type = n.enums === String ? "Raw" : 0, n.bytes === String ? s.Data = "" : (s.Data = [], n.bytes !== Array && (s.Data = q.newBuffer(s.Data))), q.Long) {
                            var o = new q.Long(0, 0, !0);
                            s.filesize = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o;
                        } else s.filesize = n.longs === String ? "0" : 0;
                        if (q.Long) {
                            var o = new q.Long(0, 0, !0);
                            s.hashType = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o;
                        } else s.hashType = n.longs === String ? "0" : 0;
                        if (q.Long) {
                            var o = new q.Long(0, 0, !0);
                            s.fanout = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o;
                        } else s.fanout = n.longs === String ? "0" : 0;
                        s.mode = 0, s.mtime = null;
                    }
                    if (t.Type != null && t.hasOwnProperty("Type") && (s.Type = n.enums === String ? M.Data.DataType[t.Type] : t.Type), t.Data != null && t.hasOwnProperty("Data") && (s.Data = n.bytes === String ? q.base64.encode(t.Data, 0, t.Data.length) : n.bytes === Array ? Array.prototype.slice.call(t.Data) : t.Data), t.filesize != null && t.hasOwnProperty("filesize") && (typeof t.filesize == "number" ? s.filesize = n.longs === String ? String(t.filesize) : t.filesize : s.filesize = n.longs === String ? q.Long.prototype.toString.call(t.filesize) : n.longs === Number ? new q.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0) : t.filesize), t.blocksizes && t.blocksizes.length) {
                        s.blocksizes = [];
                        for(var i = 0; i < t.blocksizes.length; ++i)typeof t.blocksizes[i] == "number" ? s.blocksizes[i] = n.longs === String ? String(t.blocksizes[i]) : t.blocksizes[i] : s.blocksizes[i] = n.longs === String ? q.Long.prototype.toString.call(t.blocksizes[i]) : n.longs === Number ? new q.LongBits(t.blocksizes[i].low >>> 0, t.blocksizes[i].high >>> 0).toNumber(!0) : t.blocksizes[i];
                    }
                    return t.hashType != null && t.hasOwnProperty("hashType") && (typeof t.hashType == "number" ? s.hashType = n.longs === String ? String(t.hashType) : t.hashType : s.hashType = n.longs === String ? q.Long.prototype.toString.call(t.hashType) : n.longs === Number ? new q.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0) : t.hashType), t.fanout != null && t.hasOwnProperty("fanout") && (typeof t.fanout == "number" ? s.fanout = n.longs === String ? String(t.fanout) : t.fanout : s.fanout = n.longs === String ? q.Long.prototype.toString.call(t.fanout) : n.longs === Number ? new q.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0) : t.fanout), t.mode != null && t.hasOwnProperty("mode") && (s.mode = t.mode), t.mtime != null && t.hasOwnProperty("mtime") && (s.mtime = M.UnixTime.toObject(t.mtime, n)), s;
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, ke.default.util.toJSONOptions);
                }, e.DataType = (function() {
                    let r = {
                    }, t = Object.create(r);
                    return t[r[0] = "Raw"] = 0, t[r[1] = "Directory"] = 1, t[r[2] = "File"] = 2, t[r[3] = "Metadata"] = 3, t[r[4] = "Symlink"] = 4, t[r[5] = "HAMTShard"] = 5, t;
                })(), e;
            })(), kv = M.UnixTime = (()=>{
                function e(r) {
                    if (r) for(var t = Object.keys(r), n = 0; n < t.length; ++n)r[t[n]] != null && (this[t[n]] = r[t[n]]);
                }
                return e.prototype.Seconds = q.Long ? q.Long.fromBits(0, 0, !1) : 0, e.prototype.FractionalNanoseconds = 0, e.encode = function(t, n) {
                    return n || (n = ks.create()), n.uint32(8).int64(t.Seconds), t.FractionalNanoseconds != null && Object.hasOwnProperty.call(t, "FractionalNanoseconds") && n.uint32(21).fixed32(t.FractionalNanoseconds), n;
                }, e.decode = function(t, n) {
                    t instanceof qr || (t = qr.create(t));
                    for(var s = n === void 0 ? t.len : t.pos + n, o = new M.UnixTime; t.pos < s;){
                        var i = t.uint32();
                        switch(i >>> 3){
                            case 1:
                                o.Seconds = t.int64();
                                break;
                            case 2:
                                o.FractionalNanoseconds = t.fixed32();
                                break;
                            default:
                                t.skipType(i & 7);
                                break;
                        }
                    }
                    if (!o.hasOwnProperty("Seconds")) throw q.ProtocolError("missing required 'Seconds'", {
                        instance: o
                    });
                    return o;
                }, e.fromObject = function(t) {
                    if (t instanceof M.UnixTime) return t;
                    var n = new M.UnixTime;
                    return t.Seconds != null && (q.Long ? (n.Seconds = q.Long.fromValue(t.Seconds)).unsigned = !1 : typeof t.Seconds == "string" ? n.Seconds = parseInt(t.Seconds, 10) : typeof t.Seconds == "number" ? n.Seconds = t.Seconds : typeof t.Seconds == "object" && (n.Seconds = new q.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber())), t.FractionalNanoseconds != null && (n.FractionalNanoseconds = t.FractionalNanoseconds >>> 0), n;
                }, e.toObject = function(t, n) {
                    n || (n = {
                    });
                    var s = {
                    };
                    if (n.defaults) {
                        if (q.Long) {
                            var o = new q.Long(0, 0, !1);
                            s.Seconds = n.longs === String ? o.toString() : n.longs === Number ? o.toNumber() : o;
                        } else s.Seconds = n.longs === String ? "0" : 0;
                        s.FractionalNanoseconds = 0;
                    }
                    return t.Seconds != null && t.hasOwnProperty("Seconds") && (typeof t.Seconds == "number" ? s.Seconds = n.longs === String ? String(t.Seconds) : t.Seconds : s.Seconds = n.longs === String ? q.Long.prototype.toString.call(t.Seconds) : n.longs === Number ? new q.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber() : t.Seconds), t.FractionalNanoseconds != null && t.hasOwnProperty("FractionalNanoseconds") && (s.FractionalNanoseconds = t.FractionalNanoseconds), s;
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, ke.default.util.toJSONOptions);
                }, e;
            })(), _v = M.Metadata = (()=>{
                function e(r) {
                    if (r) for(var t = Object.keys(r), n = 0; n < t.length; ++n)r[t[n]] != null && (this[t[n]] = r[t[n]]);
                }
                return e.prototype.MimeType = "", e.encode = function(t, n) {
                    return n || (n = ks.create()), t.MimeType != null && Object.hasOwnProperty.call(t, "MimeType") && n.uint32(10).string(t.MimeType), n;
                }, e.decode = function(t, n) {
                    t instanceof qr || (t = qr.create(t));
                    for(var s = n === void 0 ? t.len : t.pos + n, o = new M.Metadata; t.pos < s;){
                        var i = t.uint32();
                        switch(i >>> 3){
                            case 1:
                                o.MimeType = t.string();
                                break;
                            default:
                                t.skipType(i & 7);
                                break;
                        }
                    }
                    return o;
                }, e.fromObject = function(t) {
                    if (t instanceof M.Metadata) return t;
                    var n = new M.Metadata;
                    return t.MimeType != null && (n.MimeType = String(t.MimeType)), n;
                }, e.toObject = function(t, n) {
                    n || (n = {
                    });
                    var s = {
                    };
                    return n.defaults && (s.MimeType = ""), t.MimeType != null && t.hasOwnProperty("MimeType") && (s.MimeType = t.MimeType), s;
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, ke.default.util.toJSONOptions);
                }, e;
            })();
        });
        var kl = {
        };
        U(kl, {
            UnixFS: ()=>Wt
            ,
            parseMode: ()=>Vt
            ,
            parseMtime: ()=>_s
        });
        function Vt(e) {
            if (e != null) return typeof e == "number" ? e & 4095 : (e = e.toString(), e.substring(0, 1) === "0" ? parseInt(e, 8) & 4095 : parseInt(e, 10) & 4095);
        }
        function _s(e) {
            if (e == null) return;
            let r;
            if (e.secs != null && (r = {
                secs: e.secs,
                nsecs: e.nsecs
            }), e.Seconds != null && (r = {
                secs: e.Seconds,
                nsecs: e.FractionalNanoseconds
            }), Array.isArray(e) && (r = {
                secs: e[0],
                nsecs: e[1]
            }), e instanceof Date) {
                let t = e.getTime(), n = Math.floor(t / 1000);
                r = {
                    secs: n,
                    nsecs: (t - n * 1000) * 1000
                };
            }
            if (!!Object.prototype.hasOwnProperty.call(r, "secs")) {
                if (r != null && r.nsecs != null && (r.nsecs < 0 || r.nsecs > 999999999)) throw (0, Ht.default)(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
                return r;
            }
        }
        var Ht, _e, jl, c1, Bl, Ul, Wt, _l = w(()=>{
            Ht = Qs(ju());
            Al();
            _e = Cl, jl = [
                "raw",
                "directory",
                "file",
                "metadata",
                "symlink",
                "hamt-sharded-directory"
            ], c1 = [
                "directory",
                "hamt-sharded-directory"
            ], Bl = parseInt("0644", 8), Ul = parseInt("0755", 8);
            Wt = class {
                static unmarshal(r) {
                    let t = _e.decode(r), n = _e.toObject(t, {
                        defaults: !1,
                        arrays: !0,
                        longs: Number,
                        objects: !1
                    }), s = new Wt({
                        type: jl[n.Type],
                        data: n.Data,
                        blockSizes: n.blocksizes,
                        mode: n.mode,
                        mtime: n.mtime ? {
                            secs: n.mtime.Seconds,
                            nsecs: n.mtime.FractionalNanoseconds
                        } : void 0
                    });
                    return s._originalMode = n.mode || 0, s;
                }
                constructor(r = {
                    type: "file"
                }){
                    let { type: t , data: n , blockSizes: s , hashType: o , fanout: i , mtime: a , mode: c  } = r;
                    if (t && !jl.includes(t)) throw (0, Ht.default)(new Error("Type: " + t + " is not valid"), "ERR_INVALID_TYPE");
                    this.type = t || "file", this.data = n, this.hashType = o, this.fanout = i, this.blockSizes = s || [], this._originalMode = 0, this.mode = Vt(c), a && (this.mtime = _s(a), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0));
                }
                set mode(r) {
                    this._mode = this.isDirectory() ? Ul : Bl;
                    let t = Vt(r);
                    t !== void 0 && (this._mode = t);
                }
                get mode() {
                    return this._mode;
                }
                isDirectory() {
                    return Boolean(this.type && c1.includes(this.type));
                }
                addBlockSize(r) {
                    this.blockSizes.push(r);
                }
                removeBlockSize(r) {
                    this.blockSizes.splice(r, 1);
                }
                fileSize() {
                    if (this.isDirectory()) return 0;
                    let r = 0;
                    return this.blockSizes.forEach((t)=>{
                        r += t;
                    }), this.data && (r += this.data.length), r;
                }
                marshal() {
                    let r;
                    switch(this.type){
                        case "raw":
                            r = _e.DataType.Raw;
                            break;
                        case "directory":
                            r = _e.DataType.Directory;
                            break;
                        case "file":
                            r = _e.DataType.File;
                            break;
                        case "metadata":
                            r = _e.DataType.Metadata;
                            break;
                        case "symlink":
                            r = _e.DataType.Symlink;
                            break;
                        case "hamt-sharded-directory":
                            r = _e.DataType.HAMTShard;
                            break;
                        default:
                            throw (0, Ht.default)(new Error("Type: " + r + " is not valid"), "ERR_INVALID_TYPE");
                    }
                    let t = this.data;
                    (!this.data || !this.data.length) && (t = void 0);
                    let n;
                    this.mode != null && (n = this._originalMode & 4294963200 | (Vt(this.mode) || 0), n === Bl && !this.isDirectory() && (n = void 0), n === Ul && this.isDirectory() && (n = void 0));
                    let s;
                    if (this.mtime != null) {
                        let i = _s(this.mtime);
                        i && (s = {
                            Seconds: i.secs,
                            FractionalNanoseconds: i.nsecs
                        }, s.FractionalNanoseconds === 0 && delete s.FractionalNanoseconds);
                    }
                    let o = {
                        Type: r,
                        Data: t,
                        filesize: this.isDirectory() ? void 0 : this.fileSize(),
                        blocksizes: this.blockSizes,
                        hashType: this.hashType,
                        fanout: this.fanout,
                        mode: n,
                        mtime: s
                    };
                    return _e.encode(o).finish();
                }
            };
        });
        var zl = u((Dv, Rl)=>{
            var Nl = $t(), u1 = ys(), l1 = gs(), Il = Tu(), { isBytes: Dl , isBlob: Ol , isReadableStream: Ll , isFileObject: $l  } = bs(), { parseMtime: f1 , parseMode: d1  } = (_l(), kl);
            Rl.exports = async function*(r, t) {
                if (r == null) throw Nl(new Error(`Unexpected input: ${r}`), "ERR_UNEXPECTED_INPUT");
                if (typeof r == "string" || r instanceof String) {
                    yield xr(r.toString(), t);
                    return;
                }
                if (Dl(r) || Ol(r)) {
                    yield xr(r, t);
                    return;
                }
                if (Ll(r) && (r = u1(r)), Symbol.iterator in r || Symbol.asyncIterator in r) {
                    let n = l1(r), { value: s , done: o  } = await n.peek();
                    if (o) {
                        yield* [];
                        return;
                    }
                    if (n.push(s), Number.isInteger(s) || Dl(s)) {
                        yield xr(n, t);
                        return;
                    }
                    if ($l(s) || Ol(s) || typeof s == "string" || s instanceof String) {
                        yield* Il(n, (i)=>xr(i, t)
                        );
                        return;
                    }
                    if (s[Symbol.iterator] || s[Symbol.asyncIterator] || Ll(s)) {
                        yield* Il(n, (i)=>xr(i, t)
                        );
                        return;
                    }
                }
                if ($l(r)) {
                    yield xr(r, t);
                    return;
                }
                throw Nl(new Error("Unexpected input: " + typeof r), "ERR_UNEXPECTED_INPUT");
            };
            async function xr(e, r) {
                let { path: t , mode: n , mtime: s , content: o  } = e, i = {
                    path: t || "",
                    mode: d1(n),
                    mtime: f1(s)
                };
                return o ? i.content = await r(o) : t || (i.content = await r(e)), i;
            }
        });
        var Ml = u((Ov, Fl)=>{
            var h1 = vu(), p1 = zl();
            function m1(e) {
                return p1(e, h1);
            }
            Fl.exports = {
                normaliseInput: m1
            };
        });
        var Gt = u((Lv, Hl)=>{
            Hl.exports = (e)=>{
                if (e != null) return typeof e == "string" ? e : e.toString(8).padStart(4, "0");
            };
        });
        var qe = u(($v, Vl)=>{
            var { normaliseInput: g1  } = Ml(), y1 = Gt();
            async function b1(e, r, t = {
            }) {
                let n = [], s = new FormData, o = 0, i = 0;
                for await (let { content: a , path: c , mode: l , mtime: f  } of g1(e)){
                    let m = "", x = a ? "file" : "dir";
                    o > 0 && (m = `-${o}`);
                    let k = x + m, T = [];
                    if (l != null && T.push(`mode=${y1(l)}`), f != null) {
                        let { secs: j , nsecs: _  } = f;
                        T.push(`mtime=${j}`), _ != null && T.push(`mtime-nsecs=${_}`);
                    }
                    if (T.length && (k = `${k}?${T.join("&")}`), a) {
                        s.set(k, a, c != null ? encodeURIComponent(c) : void 0);
                        let j = i + a.size;
                        n.push({
                            name: c,
                            start: i,
                            end: j
                        }), i = j;
                    } else if (c != null) s.set(k, new File([
                        ""
                    ], encodeURIComponent(c), {
                        type: "application/x-directory"
                    }));
                    else throw new Error("path or content or both must be set");
                    o++;
                }
                return {
                    total: i,
                    parts: n,
                    headers: t,
                    body: s
                };
            }
            Vl.exports = b1;
        });
        var Xe = u((Rv, Gl)=>{
            function Wl(e, r) {
                for(let t in r)Object.defineProperty(e, t, {
                    value: r[t],
                    enumerable: !0,
                    configurable: !0
                });
                return e;
            }
            function w1(e, r, t) {
                if (!e || typeof e == "string") throw new TypeError("Please pass an Error to err-code");
                t || (t = {
                }), typeof r == "object" && (t = r, r = ""), r && (t.code = r);
                try {
                    return Wl(e, t);
                } catch (n) {
                    t.message = e.message, t.stack = e.stack;
                    let s = function() {
                    };
                    return s.prototype = Object.create(Object.getPrototypeOf(e)), Wl(new s, t);
                }
            }
            Gl.exports = w1;
        });
        var Ns = u((zv, Jl)=>{
            var q1 = Xe();
            function x1(e) {
                if (e == null) return;
                let r;
                if (e.secs != null && (r = {
                    secs: e.secs,
                    nsecs: e.nsecs
                }), e.Seconds != null && (r = {
                    secs: e.Seconds,
                    nsecs: e.FractionalNanoseconds
                }), Array.isArray(e) && (r = {
                    secs: e[0],
                    nsecs: e[1]
                }), e instanceof Date) {
                    let t = e.getTime(), n = Math.floor(t / 1000);
                    r = {
                        secs: n,
                        nsecs: (t - n * 1000) * 1000
                    };
                }
                if (!!Object.prototype.hasOwnProperty.call(r, "secs")) {
                    if (r != null && r.nsecs != null && (r.nsecs < 0 || r.nsecs > 999999999)) throw q1(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
                    return r;
                }
            }
            Jl.exports = x1;
        });
        var p = u((Fv, Kl)=>{
            var S1 = Gt(), E1 = Ns();
            Kl.exports = ({ arg: e , searchParams: r , hashAlg: t , mtime: n , mode: s , ...o } = {
            })=>{
                r && (o = {
                    ...o,
                    ...r
                }), t && (o.hash = t), n != null && (n = E1(n), o.mtime = n.secs, o.mtimeNsecs = n.nsecs), s != null && (o.mode = S1(s)), o.timeout && !isNaN(o.timeout) && (o.timeout = `${o.timeout}ms`), e == null ? e = [] : Array.isArray(e) || (e = [
                    e
                ]);
                let i = new URLSearchParams(o);
                return e.forEach((a)=>i.append("arg", a)
                ), i;
            };
        });
        var xe = u((Mv, Xl)=>{
            var { anySignal: v1  } = Rn();
            function P1(e) {
                return e.filter(Boolean);
            }
            Xl.exports = (...e)=>v1(P1(e))
            ;
        });
        var Is = u((Hv, Zl)=>{
            var { CID: T1  } = (E(), P), C1 = I(), A1 = h(), j1 = qe(), B1 = p(), U1 = xe(), { AbortController: k1  } = J();
            Zl.exports = A1((e)=>{
                async function* r(t, n = {
                }) {
                    let s = new k1, o = U1(s.signal, n.signal), { headers: i , body: a , total: c , parts: l  } = await j1(t, s, n.headers), [f, m] = typeof n.progress == "function" ? _1(c, l, n.progress) : [
                        void 0,
                        void 0
                    ], x = await e.post("add", {
                        searchParams: B1({
                            "stream-channels": !0,
                            ...n,
                            progress: Boolean(f)
                        }),
                        onUploadProgress: m,
                        signal: o,
                        headers: i,
                        body: a
                    });
                    for await (let k of x.ndjson())k = C1(k), k.hash !== void 0 ? yield I1(k) : f && f(k.bytes || 0, k.name);
                }
                return r;
            });
            var _1 = (e, r, t)=>r ? [
                    void 0,
                    N1(e, r, t)
                ] : [
                    t,
                    void 0
                ]
            , N1 = (e, r, t)=>{
                let n = 0, s = r.length;
                return ({ loaded: o , total: i  })=>{
                    let a = Math.floor(o / i * e);
                    for(; n < s;){
                        let { start: c , end: l , name: f  } = r[n];
                        if (a < l) {
                            t(a - c, f);
                            break;
                        } else t(l - c, f), n += 1;
                    }
                };
            };
            function I1({ name: e , hash: r , size: t , mode: n , mtime: s , mtimeNsecs: o  }) {
                let i = {
                    path: e,
                    cid: T1.parse(r),
                    size: parseInt(t)
                };
                return n != null && (i.mode = parseInt(n, 8)), s != null && (i.mtime = {
                    secs: s,
                    nsecs: o || 0
                }), i;
            }
        });
        var Gr = u((Vv, Ql)=>{
            var D1 = async (e)=>{
                let r;
                for await (let t of e)r = t;
                return r;
            };
            Ql.exports = D1;
        });
        var ef = u((Wv, Yl)=>{
            var O1 = Is(), L1 = Gr(), $1 = h();
            Yl.exports = (e)=>{
                let r = O1(e);
                return $1(()=>{
                    async function t(n, s = {
                    }) {
                        return await L1(r(n, s));
                    }
                    return t;
                })(e);
            };
        });
        var tf = u((Gv, rf)=>{
            var { CID: R1  } = (E(), P), z1 = h(), F1 = p();
            rf.exports = z1((e)=>{
                async function r(t = {
                }) {
                    return ((await (await e.post("bitswap/wantlist", {
                        signal: t.signal,
                        searchParams: F1(t),
                        headers: t.headers
                    })).json()).Keys || []).map((s)=>R1.parse(s["/"])
                    );
                }
                return r;
            });
        });
        var sf = u((Jv, nf)=>{
            var { CID: M1  } = (E(), P), H1 = h(), V1 = p();
            nf.exports = H1((e)=>{
                async function r(t, n = {
                }) {
                    return ((await (await e.post("bitswap/wantlist", {
                        signal: n.signal,
                        searchParams: V1({
                            ...n,
                            peer: t.toString()
                        }),
                        headers: n.headers
                    })).json()).Keys || []).map((o)=>M1.parse(o["/"])
                    );
                }
                return r;
            });
        });
        var Ds = u((Kv, of)=>{
            var { CID: W1  } = (E(), P), G1 = h(), J1 = p();
            of.exports = G1((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("bitswap/stat", {
                        searchParams: J1(t),
                        signal: t.signal,
                        headers: t.headers
                    });
                    return K1(await n.json());
                }
                return r;
            });
            function K1(e) {
                return {
                    provideBufLen: e.ProvideBufLen,
                    wantlist: (e.Wantlist || []).map((r)=>W1.parse(r["/"])
                    ),
                    peers: e.Peers || [],
                    blocksReceived: BigInt(e.BlocksReceived),
                    dataReceived: BigInt(e.DataReceived),
                    blocksSent: BigInt(e.BlocksSent),
                    dataSent: BigInt(e.DataSent),
                    dupBlksReceived: BigInt(e.DupBlksReceived),
                    dupDataReceived: BigInt(e.DupDataReceived)
                };
            }
        });
        var cf = u((Xv, af)=>{
            var X1 = h(), Z1 = p();
            af.exports = X1((e)=>{
                async function r(t, n = {
                }) {
                    return (await e.post("bitswap/unwant", {
                        signal: n.signal,
                        searchParams: Z1({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                }
                return r;
            });
        });
        var lf = u((Zv, uf)=>{
            uf.exports = (e)=>({
                    wantlist: tf()(e),
                    wantlistForPeer: sf()(e),
                    stat: Ds()(e),
                    unwant: cf()(e)
                })
            ;
        });
        var Os = u((Qv, ff)=>{
            var Q1 = h(), Y1 = p();
            ff.exports = Q1((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("block/get", {
                        signal: n.signal,
                        searchParams: Y1({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    });
                    return new Uint8Array(await s.arrayBuffer());
                }
                return r;
            });
        });
        var hf = u((Yv, df)=>{
            var { CID: e2  } = (E(), P), r2 = h(), t2 = p();
            df.exports = r2((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("block/stat", {
                        signal: n.signal,
                        searchParams: t2({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return {
                        cid: e2.parse(o.Key),
                        size: o.Size
                    };
                }
                return r;
            });
        });
        var mf = u((eP, pf)=>{
            var { CID: n2  } = (E(), P), s2 = qe(), o2 = h(), i2 = p(), a2 = xe(), { AbortController: c2  } = J();
            pf.exports = o2((e)=>{
                async function r(t, n = {
                }) {
                    let s = new c2, o = a2(s.signal, n.signal), i;
                    try {
                        i = await (await e.post("block/put", {
                            signal: o,
                            searchParams: i2(n),
                            ...await s2(t, s, n.headers)
                        })).json();
                    } catch (a) {
                        if (n.format === "dag-pb") return r(t, {
                            ...n,
                            format: "protobuf"
                        });
                        if (n.format === "dag-cbor") return r(t, {
                            ...n,
                            format: "cbor"
                        });
                        throw a;
                    }
                    return n2.parse(i.Key);
                }
                return r;
            });
        });
        var yf = u((rP, gf)=>{
            var { CID: u2  } = (E(), P), l2 = h(), f2 = p();
            gf.exports = l2((e)=>{
                async function* r(t, n = {
                }) {
                    Array.isArray(t) || (t = [
                        t
                    ]);
                    let s = await e.post("block/rm", {
                        signal: n.signal,
                        searchParams: f2({
                            arg: t.map((o)=>o.toString()
                            ),
                            "stream-channels": !0,
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o2 of s.ndjson())yield d2(o2);
                }
                return r;
            });
            function d2(e) {
                let r = {
                    cid: u2.parse(e.Hash)
                };
                return e.Error && (r.error = new Error(e.Error)), r;
            }
        });
        var wf = u((tP, bf)=>{
            bf.exports = (e)=>({
                    get: Os()(e),
                    stat: hf()(e),
                    put: mf()(e),
                    rm: yf()(e)
                })
            ;
        });
        var xf = u((nP, qf)=>{
            var h2 = h(), p2 = p(), { Multiaddr: m2  } = $();
            qf.exports = h2((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("bootstrap/add", {
                        signal: n.signal,
                        searchParams: p2({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Peers: o  } = await s.json();
                    return {
                        Peers: o.map((i)=>new m2(i)
                        )
                    };
                }
                return r;
            });
        });
        var Ef = u((sP, Sf)=>{
            var g2 = h(), y2 = p(), { Multiaddr: b2  } = $();
            Sf.exports = g2((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("bootstrap/rm", {
                        signal: t.signal,
                        searchParams: y2({
                            ...t,
                            all: !0
                        }),
                        headers: t.headers
                    }), { Peers: s  } = await n.json();
                    return {
                        Peers: s.map((o)=>new b2(o)
                        )
                    };
                }
                return r;
            });
        });
        var Pf = u((oP, vf)=>{
            var w2 = h(), q2 = p(), { Multiaddr: x2  } = $();
            vf.exports = w2((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("bootstrap/rm", {
                        signal: n.signal,
                        searchParams: q2({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Peers: o  } = await s.json();
                    return {
                        Peers: o.map((i)=>new x2(i)
                        )
                    };
                }
                return r;
            });
        });
        var Cf = u((iP, Tf)=>{
            var S2 = h(), E2 = p(), { Multiaddr: v2  } = $();
            Tf.exports = S2((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("bootstrap/add", {
                        signal: t.signal,
                        searchParams: E2({
                            ...t,
                            default: !0
                        }),
                        headers: t.headers
                    }), { Peers: s  } = await n.json();
                    return {
                        Peers: s.map((o)=>new v2(o)
                        )
                    };
                }
                return r;
            });
        });
        var jf = u((aP, Af)=>{
            var P2 = h(), T2 = p(), { Multiaddr: C2  } = $();
            Af.exports = P2((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("bootstrap/list", {
                        signal: t.signal,
                        searchParams: T2(t),
                        headers: t.headers
                    }), { Peers: s  } = await n.json();
                    return {
                        Peers: s.map((o)=>new C2(o)
                        )
                    };
                }
                return r;
            });
        });
        var Uf = u((cP, Bf)=>{
            Bf.exports = (e)=>({
                    add: xf()(e),
                    clear: Ef()(e),
                    rm: Pf()(e),
                    reset: Cf()(e),
                    list: jf()(e)
                })
            ;
        });
        var _f = u((uP, kf)=>{
            var A2 = h(), j2 = p();
            kf.exports = A2((e)=>{
                async function* r(t, n = {
                }) {
                    yield* (await e.post("cat", {
                        signal: n.signal,
                        searchParams: j2({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    })).iterator();
                }
                return r;
            });
        });
        var If = u((lP, Nf)=>{
            var B2 = h(), U2 = p();
            Nf.exports = B2((e)=>async (t = {
                })=>(await e.post("commands", {
                        signal: t.signal,
                        searchParams: U2(t),
                        headers: t.headers
                    })).json()
            );
        });
        var Of = u((fP, Df)=>{
            var k2 = h(), _2 = p();
            Df.exports = k2((e)=>async (t = {
                })=>await (await e.post("config/show", {
                        signal: t.signal,
                        searchParams: _2({
                            ...t
                        }),
                        headers: t.headers
                    })).json()
            );
        });
        var $f = u((dP, Lf)=>{
            var N2 = h(), I2 = p();
            Lf.exports = N2((e)=>async (t, n = {
                })=>{
                    if (!t) throw new Error("key argument is required");
                    return (await (await e.post("config", {
                        signal: n.signal,
                        searchParams: I2({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json()).Value;
                }
            );
        });
        var zf = u((hP, Rf)=>{
            var D2 = h(), O2 = p();
            Rf.exports = D2((e)=>async (t, n, s = {
                })=>{
                    if (typeof t != "string") throw new Error("Invalid key type");
                    let o = {
                        ...s,
                        ...L2(t, n)
                    };
                    await (await e.post("config", {
                        signal: s.signal,
                        searchParams: O2(o),
                        headers: s.headers
                    })).text();
                }
            );
            var L2 = (e, r)=>{
                switch(typeof r){
                    case "boolean":
                        return {
                            arg: [
                                e,
                                r.toString()
                            ],
                            bool: !0
                        };
                    case "string":
                        return {
                            arg: [
                                e,
                                r
                            ]
                        };
                    default:
                        return {
                            arg: [
                                e,
                                JSON.stringify(r)
                            ],
                            json: !0
                        };
                }
            };
        });
        var Mf = u((pP, Ff)=>{
            var { fromString: $2  } = (sr(), nr), R2 = qe(), z2 = h(), F2 = p(), M2 = xe(), { AbortController: H2  } = J();
            Ff.exports = z2((e)=>async (t, n = {
                })=>{
                    let s = new H2, o = M2(s.signal, n.signal);
                    await (await e.post("config/replace", {
                        signal: o,
                        searchParams: F2(n),
                        ...await R2($2(JSON.stringify(t)), s, n.headers)
                    })).text();
                }
            );
        });
        var Vf = u((mP, Hf)=>{
            var V2 = h(), W2 = p();
            Hf.exports = V2((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("config/profile/apply", {
                        signal: n.signal,
                        searchParams: W2({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return {
                        original: o.OldCfg,
                        updated: o.NewCfg
                    };
                }
                return r;
            });
        });
        var Gf = u((gP, Wf)=>{
            var G2 = I(), J2 = h(), K2 = p();
            Wf.exports = J2((e)=>{
                async function r(t = {
                }) {
                    return (await (await e.post("config/profile/list", {
                        signal: t.signal,
                        searchParams: K2(t),
                        headers: t.headers
                    })).json()).map((o)=>G2(o)
                    );
                }
                return r;
            });
        });
        var Kf = u((yP, Jf)=>{
            Jf.exports = (e)=>({
                    apply: Vf()(e),
                    list: Gf()(e)
                })
            ;
        });
        var Zf = u((bP, Xf)=>{
            Xf.exports = (e)=>({
                    getAll: Of()(e),
                    get: $f()(e),
                    set: zf()(e),
                    replace: Mf()(e),
                    profiles: Kf()(e)
                })
            ;
        });
        var Yf = u((wP, Qf)=>{
            var X2 = h(), Z2 = p();
            Qf.exports = X2((e)=>{
                async function* r(t, n = {
                }) {
                    yield* (await e.post("dag/export", {
                        signal: n.signal,
                        searchParams: Z2({
                            arg: t.toString()
                        }),
                        headers: n.headers
                    })).iterator();
                }
                return r;
            });
        });
        var td = u((qP, rd)=>{
            var { CID: Q2  } = (E(), P), ed = Xe(), Y2 = async function*(e, r, t, n, s) {
                let o = async (l)=>{
                    let f = await t.getCodec(l.code), m = await n(l, s);
                    return f.decode(m);
                }, i = r.split("/").filter(Boolean), a = await o(e), c = e;
                for(i.length || (yield {
                    value: a,
                    remainderPath: ""
                }); i.length;){
                    let l = i.shift();
                    if (!l) throw ed(new Error(`Could not resolve path "${r}"`), "ERR_INVALID_PATH");
                    if (Object.prototype.hasOwnProperty.call(a, l)) a = a[l], yield {
                        value: a,
                        remainderPath: i.join("/")
                    };
                    else throw ed(new Error(`no link named "${l}" under ${c}`), "ERR_NO_LINK");
                    let f = Q2.asCID(a);
                    f && (c = f, a = await o(a));
                }
            };
            rd.exports = Y2;
        });
        var sd = u((xP, nd)=>{
            var eq = async (e)=>{
                for await (let r of e)return r;
            };
            nd.exports = eq;
        });
        var ad = u((SP, id)=>{
            var rq = h(), od = td(), tq = sd(), nq = Gr(), sq = Xe();
            id.exports = (e, r)=>rq((n, s)=>{
                    let o = Os()(s);
                    return async (a, c = {
                    })=>{
                        if (c.path) {
                            let k = c.localResolve ? await tq(od(a, c.path, e, o, c)) : await nq(od(a, c.path, e, o, c));
                            if (!k) throw sq(new Error("Not found"), "ERR_NOT_FOUND");
                            return k;
                        }
                        let l = await e.getCodec(a.code), f = await o(a, c);
                        return {
                            value: l.decode(f),
                            remainderPath: ""
                        };
                    };
                })(r)
            ;
        });
        var ud = u((EP, cd)=>{
            var oq = h(), iq = p(), aq = xe(), cq = qe(), { AbortController: uq  } = J(), { CID: lq  } = (E(), P);
            cd.exports = oq((e)=>{
                async function* r(t, n = {
                }) {
                    let s = new uq, o = aq(s.signal, n.signal), { headers: i , body: a  } = await cq(t, s, n.headers), c = await e.post("dag/import", {
                        signal: o,
                        headers: i,
                        body: a,
                        searchParams: iq({
                            "pin-roots": n.pinRoots
                        })
                    });
                    for await (let { Root: l  } of c.ndjson())if (l !== void 0) {
                        let { Cid: { "/": f  } , PinErrorMsg: m  } = l;
                        yield {
                            root: {
                                cid: lq.parse(f),
                                pinErrorMsg: m
                            }
                        };
                    }
                }
                return r;
            });
        });
        var Ls = u((vP, ld)=>{
            var { CID: fq  } = (E(), P), dq = h(), hq = qe(), pq = p(), mq = xe(), { AbortController: gq  } = J();
            ld.exports = (e, r)=>dq((n)=>async (o, i = {
                    })=>{
                        let a = {
                            format: "dag-cbor",
                            hashAlg: "sha2-256",
                            inputEnc: "raw",
                            ...i
                        }, l = (await e.getCodec(a.format)).encode(o), f = new gq, m = mq(f.signal, a.signal), k = await (await n.post("dag/put", {
                            timeout: a.timeout,
                            signal: m,
                            searchParams: pq(a),
                            ...await hq(l, f, a.headers)
                        })).json();
                        return fq.parse(k.Cid["/"]);
                    }
                )(r)
            ;
        });
        var dd = u((PP, fd)=>{
            var { CID: yq  } = (E(), P), bq = h(), wq = p();
            fd.exports = bq((e)=>async (t, n = {
                })=>{
                    let o = await (await e.post("dag/resolve", {
                        signal: n.signal,
                        searchParams: wq({
                            arg: `${t}${n.path ? `/${n.path}`.replace(/\/[/]+/g, "/") : ""}`,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return {
                        cid: yq.parse(o.Cid["/"]),
                        remainderPath: o.RemPath
                    };
                }
            );
        });
        var pd = u((TP, hd)=>{
            hd.exports = (e, r)=>({
                    export: Yf()(r),
                    get: ad()(e, r),
                    import: ud()(r),
                    put: Ls()(e, r),
                    resolve: dd()(r)
                })
            ;
        });
        var Jt = u((CP, md)=>{
            md.exports = {
                SendingQuery: 0,
                PeerResponse: 1,
                FinalPeer: 2,
                QueryError: 3,
                Provider: 4,
                Value: 5,
                AddingPeer: 6,
                DialingPeer: 7
            };
        });
        var yd = u((AP, gd)=>{
            var qq = h(), xq = p(), { Value: Sq  } = Jt(), { fromString: Eq  } = (sr(), nr), { toString: vq  } = ($e(), Le);
            gd.exports = qq((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("dht/get", {
                        signal: n.signal,
                        searchParams: xq({
                            arg: t instanceof Uint8Array ? vq(t) : t,
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())if (o.Type === Sq) return Eq(o.Extra, "base64pad");
                    throw new Error("not found");
                }
                return r;
            });
        });
        var wd = u((jP, bd)=>{
            var { Multiaddr: Pq  } = $(), Tq = I(), Cq = h(), Aq = p(), jq = qe(), Bq = xe(), { AbortController: Uq  } = J(), { toString: kq  } = ($e(), Le);
            bd.exports = Cq((e)=>{
                async function* r(t, n, s = {
                }) {
                    let o = new Uq, i = Bq(o.signal, s.signal), a = await e.post("dht/put", {
                        signal: i,
                        searchParams: Aq({
                            arg: kq(t),
                            ...s
                        }),
                        ...await jq(n, o, s.headers)
                    });
                    for await (let c of a.ndjson())c = Tq(c), c.responses && (c.responses = c.responses.map(({ ID: l , Addrs: f  })=>({
                            id: l,
                            addrs: (f || []).map((m)=>new Pq(m)
                            )
                        })
                    )), yield c;
                }
                return r;
            });
        });
        var xd = u((BP, qd)=>{
            var { Multiaddr: _q  } = $(), Nq = h(), Iq = p(), { Provider: Dq  } = Jt();
            qd.exports = Nq((e)=>{
                async function* r(t, n = {
                }) {
                    let s = await e.post("dht/findprovs", {
                        signal: n.signal,
                        searchParams: Iq({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())if (o.Type === Dq && o.Responses) for (let { ID: i , Addrs: a  } of o.Responses)yield {
                        id: i,
                        addrs: (a || []).map((c)=>new _q(c)
                        )
                    };
                }
                return r;
            });
        });
        var Ed = u((UP, Sd)=>{
            var { Multiaddr: Oq  } = $(), Lq = h(), $q = p(), { FinalPeer: Rq  } = Jt();
            Sd.exports = Lq((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("dht/findpeer", {
                        signal: n.signal,
                        searchParams: $q({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())if (o.Type === Rq && o.Responses) {
                        let { ID: i , Addrs: a  } = o.Responses[0];
                        return {
                            id: i,
                            addrs: (a || []).map((c)=>new Oq(c)
                            )
                        };
                    }
                    throw new Error("not found");
                }
                return r;
            });
        });
        var Pd = u((kP, vd)=>{
            var { Multiaddr: zq  } = $(), Fq = I(), Mq = h(), Hq = p();
            vd.exports = Mq((e)=>{
                async function* r(t, n = {
                    recursive: !1
                }) {
                    let s = Array.isArray(t) ? t : [
                        t
                    ], o = await e.post("dht/provide", {
                        signal: n.signal,
                        searchParams: Hq({
                            arg: s.map((i)=>i.toString()
                            ),
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let i2 of o.ndjson())i2 = Fq(i2), i2.responses ? i2.responses = i2.responses.map(({ ID: a , Addrs: c  })=>({
                            id: a,
                            addrs: (c || []).map((l)=>new zq(l)
                            )
                        })
                    ) : i2.responses = [], yield i2;
                }
                return r;
            });
        });
        var Cd = u((_P, Td)=>{
            var { Multiaddr: Vq  } = $(), Wq = I(), Gq = h(), Jq = p();
            Td.exports = Gq((e)=>{
                async function* r(t, n = {
                }) {
                    let s = await e.post("dht/query", {
                        signal: n.signal,
                        searchParams: Jq({
                            arg: t.toString(),
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())o = Wq(o), o.responses = (o.responses || []).map(({ ID: i , Addrs: a  })=>({
                            id: i,
                            addrs: (a || []).map((c)=>new Vq(c)
                            )
                        })
                    ), yield o;
                }
                return r;
            });
        });
        var jd = u((NP, Ad)=>{
            Ad.exports = (e)=>({
                    get: yd()(e),
                    put: wd()(e),
                    findProvs: xd()(e),
                    findPeer: Ed()(e),
                    provide: Pd()(e),
                    query: Cd()(e)
                })
            ;
        });
        var Ud = u((IP, Bd)=>{
            var Kq = h(), Xq = p();
            Bd.exports = Kq((e)=>{
                async function r(t = {
                }) {
                    return (await e.post("diag/net", {
                        signal: t.signal,
                        searchParams: Xq(t),
                        headers: t.headers
                    })).json();
                }
                return r;
            });
        });
        var _d = u((DP, kd)=>{
            var Zq = h(), Qq = p();
            kd.exports = Zq((e)=>{
                async function r(t = {
                }) {
                    return (await e.post("diag/sys", {
                        signal: t.signal,
                        searchParams: Qq(t),
                        headers: t.headers
                    })).json();
                }
                return r;
            });
        });
        var Id = u((OP, Nd)=>{
            var Yq = h(), ex = p();
            Nd.exports = Yq((e)=>{
                async function r(t = {
                }) {
                    return (await e.post("diag/cmds", {
                        signal: t.signal,
                        searchParams: ex(t),
                        headers: t.headers
                    })).json();
                }
                return r;
            });
        });
        var Od = u((LP, Dd)=>{
            Dd.exports = (e)=>({
                    net: Ud()(e),
                    sys: _d()(e),
                    cmds: Id()(e)
                })
            ;
        });
        var $d = u(($P, Ld)=>{
            var rx = h(), tx = p();
            Ld.exports = rx((e)=>async (t, n = {
                })=>(await (await e.post("dns", {
                        signal: n.signal,
                        searchParams: tx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json()).Path
            );
        });
        var zd = u((RP, Rd)=>{
            var nx = h(), sx = p();
            Rd.exports = nx((e)=>{
                async function r(t, n, s = {
                }) {
                    await (await e.post("files/chmod", {
                        signal: s.signal,
                        searchParams: sx({
                            arg: t,
                            mode: n,
                            ...s
                        }),
                        headers: s.headers
                    })).text();
                }
                return r;
            });
        });
        var Md = u((zP, Fd)=>{
            var { CID: ox  } = (E(), P), ix = h(), ax = p();
            Fd.exports = ix((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = Array.isArray(t) ? t : [
                        t
                    ];
                    await (await e.post("files/cp", {
                        signal: s.signal,
                        searchParams: ax({
                            arg: o.concat(n).map((a)=>ox.asCID(a) ? `/ipfs/${a}` : a
                            ),
                            ...s
                        }),
                        headers: s.headers
                    })).text();
                }
                return r;
            });
        });
        var Vd = u((FP, Hd)=>{
            var { CID: cx  } = (E(), P), ux = h(), lx = p();
            Hd.exports = ux((e)=>{
                async function r(t, n = {
                }) {
                    if (!t || typeof t != "string") throw new Error("ipfs.files.flush requires a path");
                    let o = await (await e.post("files/flush", {
                        signal: n.signal,
                        searchParams: lx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return cx.parse(o.Cid);
                }
                return r;
            });
        });
        var $s = u((MP, Wd)=>{
            var fx = I();
            function dx(e) {
                let r = fx(e);
                return Object.prototype.hasOwnProperty.call(r, "mode") && (r.mode = parseInt(r.mode, 8)), Object.prototype.hasOwnProperty.call(r, "mtime") && (r.mtime = {
                    secs: r.mtime,
                    nsecs: r.mtimeNsecs || 0
                }, delete r.mtimeNsecs), r;
            }
            Wd.exports = dx;
        });
        var Zd = u((HP, Xd)=>{
            var { CID: Gd  } = (E(), P), Jd = $s(), hx = h(), px = p();
            Xd.exports = hx((e)=>{
                async function* r(t, n = {
                }) {
                    if (!t) throw new Error("ipfs.files.ls requires a path");
                    let s = await e.post("files/ls", {
                        signal: n.signal,
                        searchParams: px({
                            arg: Gd.asCID(t) ? `/ipfs/${t}` : t,
                            long: !0,
                            ...n,
                            stream: !0
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())if ("Entries" in o) for (let i of o.Entries || [])yield Kd(Jd(i));
                    else yield Kd(Jd(o));
                }
                return r;
            });
            function Kd(e) {
                return e.hash && (e.cid = Gd.parse(e.hash)), delete e.hash, e.type = e.type === 1 ? "directory" : "file", e;
            }
        });
        var Yd = u((VP, Qd)=>{
            var mx = h(), gx = p();
            Qd.exports = mx((e)=>{
                async function r(t, n = {
                }) {
                    await (await e.post("files/mkdir", {
                        signal: n.signal,
                        searchParams: gx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).text();
                }
                return r;
            });
        });
        var rh = u((WP, eh)=>{
            var yx = h(), bx = p();
            eh.exports = yx((e)=>{
                async function r(t, n, s = {
                }) {
                    Array.isArray(t) || (t = [
                        t
                    ]), await (await e.post("files/mv", {
                        signal: s.signal,
                        searchParams: bx({
                            arg: t.concat(n),
                            ...s
                        }),
                        headers: s.headers
                    })).text();
                }
                return r;
            });
        });
        var nh = u((GP, th)=>{
            th.exports = (e)=>{
                if (e[Symbol.asyncIterator]) return e;
                if (e.getReader) return (async function*() {
                    let r = e.getReader();
                    try {
                        for(;;){
                            let { done: t , value: n  } = await r.read();
                            if (t) return;
                            yield n;
                        }
                    } finally{
                        r.releaseLock();
                    }
                })();
                throw new Error("unknown stream");
            };
        });
        var oh = u((JP, sh)=>{
            var wx = nh(), qx = h(), xx = p();
            sh.exports = qx((e)=>{
                async function* r(t, n = {
                }) {
                    let s = await e.post("files/read", {
                        signal: n.signal,
                        searchParams: xx({
                            arg: t,
                            count: n.length,
                            ...n
                        }),
                        headers: n.headers
                    });
                    yield* wx(s.body);
                }
                return r;
            });
        });
        var ah = u((KP, ih)=>{
            var Sx = h(), Ex = p();
            ih.exports = Sx((e)=>{
                async function r(t, n = {
                }) {
                    await (await e.post("files/rm", {
                        signal: n.signal,
                        searchParams: Ex({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).text();
                }
                return r;
            });
        });
        var Rs = u((XP, ch)=>{
            var { CID: vx  } = (E(), P), Px = $s(), Tx = h(), Cx = p();
            ch.exports = Tx((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("files/stat", {
                        signal: n.signal,
                        searchParams: Cx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return o.WithLocality = o.WithLocality || !1, Ax(Px(o));
                }
                return r;
            });
            function Ax(e) {
                return e.cid = vx.parse(e.hash), delete e.hash, e;
            }
        });
        var lh = u((ZP, uh)=>{
            var jx = h(), Bx = p();
            uh.exports = jx((e)=>{
                async function r(t, n = {
                }) {
                    await (await e.post("files/touch", {
                        signal: n.signal,
                        searchParams: Bx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).text();
                }
                return r;
            });
        });
        var dh = u((QP, fh)=>{
            var Ux = Gt(), kx = Ns(), _x = h(), Nx = qe(), Ix = p(), Dx = xe(), { AbortController: Ox  } = J();
            fh.exports = _x((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = new Ox, i = Dx(o.signal, s.signal);
                    await (await e.post("files/write", {
                        signal: i,
                        searchParams: Ix({
                            arg: t,
                            streamChannels: !0,
                            count: s.length,
                            ...s
                        }),
                        ...await Nx({
                            content: n,
                            path: "arg",
                            mode: Ux(s.mode),
                            mtime: kx(s.mtime)
                        }, o, s.headers)
                    })).text();
                }
                return r;
            });
        });
        var ph = u((YP, hh)=>{
            hh.exports = (e)=>({
                    chmod: zd()(e),
                    cp: Md()(e),
                    flush: Vd()(e),
                    ls: Zd()(e),
                    mkdir: Yd()(e),
                    mv: rh()(e),
                    read: oh()(e),
                    rm: ah()(e),
                    stat: Rs()(e),
                    touch: lh()(e),
                    write: dh()(e)
                })
            ;
        });
        var gh = u((eT, mh)=>{
            var { CID: Lx  } = (E(), P), $x = h(), Rx = p();
            mh.exports = $x((e)=>{
                async function* r(t, n = {
                }) {
                    let s = {
                        arg: `${t instanceof Uint8Array ? Lx.decode(t) : t}`,
                        ...n
                    };
                    s.compressionLevel && (s["compression-level"] = s.compressionLevel, delete s.compressionLevel), yield* (await e.post("get", {
                        signal: n.signal,
                        searchParams: Rx(s),
                        headers: n.headers
                    })).iterator();
                }
                return r;
            });
        });
        var bh = u((rT, yh)=>{
            var zx = h();
            yh.exports = zx((e)=>()=>{
                    let r = new URL(e.opts.base || "");
                    return {
                        host: r.hostname,
                        port: r.port,
                        protocol: r.protocol,
                        pathname: r.pathname,
                        "api-path": r.pathname
                    };
                }
            );
        });
        var zs = u((tT, wh)=>{
            var Fx = I(), { Multiaddr: Mx  } = $(), Hx = h(), Vx = p();
            wh.exports = Hx((e)=>{
                async function r(t = {
                }) {
                    let s = await (await e.post("id", {
                        signal: t.signal,
                        searchParams: Vx({
                            arg: t.peerId ? t.peerId.toString() : void 0,
                            ...t
                        }),
                        headers: t.headers
                    })).json(), o = {
                        ...Fx(s)
                    };
                    return o.addresses && (o.addresses = o.addresses.map((i)=>new Mx(i)
                    )), o;
                }
                return r;
            });
        });
        var xh = u((nT, qh)=>{
            var Wx = zs();
            qh.exports = (e)=>{
                let r = Wx(e);
                async function t(n = {
                }) {
                    let s = await r(n);
                    return Boolean(s && s.addresses && s.addresses.length);
                }
                return t;
            };
        });
        var Eh = u((sT, Sh)=>{
            var Gx = I(), Jx = h(), Kx = p();
            Sh.exports = Jx((e)=>{
                async function r(t, n = {
                    type: "rsa",
                    size: 2048
                }) {
                    let o = await (await e.post("key/gen", {
                        signal: n.signal,
                        searchParams: Kx({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return Gx(o);
                }
                return r;
            });
        });
        var Ph = u((oT, vh)=>{
            var Xx = I(), Zx = h(), Qx = p();
            vh.exports = Zx((e)=>{
                async function r(t = {
                }) {
                    return ((await (await e.post("key/list", {
                        signal: t.signal,
                        searchParams: Qx(t),
                        headers: t.headers
                    })).json()).Keys || []).map((o)=>Xx(o)
                    );
                }
                return r;
            });
        });
        var Ch = u((iT, Th)=>{
            var Yx = I(), eS = h(), rS = p();
            Th.exports = eS((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = await e.post("key/rename", {
                        signal: s.signal,
                        searchParams: rS({
                            arg: [
                                t,
                                n
                            ],
                            ...s
                        }),
                        headers: s.headers
                    });
                    return Yx(await o.json());
                }
                return r;
            });
        });
        var jh = u((aT, Ah)=>{
            var tS = I(), nS = h(), sS = p();
            Ah.exports = nS((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("key/rm", {
                        signal: n.signal,
                        searchParams: sS({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return tS(o.Keys[0]);
                }
                return r;
            });
        });
        var Uh = u((cT, Bh)=>{
            var oS = I(), iS = h(), aS = p();
            Bh.exports = iS((e)=>{
                async function r(t, n, s, o = {
                }) {
                    let a = await (await e.post("key/import", {
                        signal: o.signal,
                        searchParams: aS({
                            arg: t,
                            pem: n,
                            password: s,
                            ...o
                        }),
                        headers: o.headers
                    })).json();
                    return oS(a);
                }
                return r;
            });
        });
        var _h = u((uT, kh)=>{
            var cS = h(), uS = Xe();
            kh.exports = cS((e)=>async (t, n, s = {
                })=>{
                    throw uS(new Error("Not implemented"), "ERR_NOT_IMPLEMENTED");
                }
            );
        });
        var Ih = u((lT, Nh)=>{
            var lS = h(), fS = Xe();
            Nh.exports = lS((e)=>async (t, n = {
                })=>{
                    throw fS(new Error("Not implemented"), "ERR_NOT_IMPLEMENTED");
                }
            );
        });
        var Oh = u((fT, Dh)=>{
            Dh.exports = (e)=>({
                    gen: Eh()(e),
                    list: Ph()(e),
                    rename: Ch()(e),
                    rm: jh()(e),
                    import: Uh()(e),
                    export: _h()(e),
                    info: Ih()(e)
                })
            ;
        });
        var $h = u((dT, Lh)=>{
            var dS = h(), hS = p();
            Lh.exports = dS((e)=>{
                async function* r(t = {
                }) {
                    yield* (await e.post("log/tail", {
                        signal: t.signal,
                        searchParams: hS(t),
                        headers: t.headers
                    })).ndjson();
                }
                return r;
            });
        });
        var zh = u((hT, Rh)=>{
            var pS = h(), mS = p();
            Rh.exports = pS((e)=>{
                async function r(t = {
                }) {
                    return (await (await e.post("log/ls", {
                        signal: t.signal,
                        searchParams: mS(t),
                        headers: t.headers
                    })).json()).Strings;
                }
                return r;
            });
        });
        var Mh = u((pT, Fh)=>{
            var gS = I(), yS = h(), bS = p();
            Fh.exports = yS((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = await e.post("log/level", {
                        signal: s.signal,
                        searchParams: bS({
                            arg: [
                                t,
                                n
                            ],
                            ...s
                        }),
                        headers: s.headers
                    });
                    return gS(await o.json());
                }
                return r;
            });
        });
        var Vh = u((mT, Hh)=>{
            Hh.exports = (e)=>({
                    tail: $h()(e),
                    ls: zh()(e),
                    level: Mh()(e)
                })
            ;
        });
        var Jh = u((gT, Gh)=>{
            var { CID: Wh  } = (E(), P), wS = h(), qS = p(), xS = Rs();
            Gh.exports = wS((e, r)=>{
                async function* t(n, s = {
                }) {
                    let o = `${n instanceof Uint8Array ? Wh.decode(n) : n}`;
                    async function i(c) {
                        let l = c.Hash;
                        if (l.includes("/")) {
                            let m = l.startsWith("/ipfs/") ? l : `/ipfs/${l}`;
                            l = (await xS(r)(m)).cid;
                        } else l = Wh.parse(l);
                        let f = {
                            name: c.Name,
                            path: o + (c.Name ? `/${c.Name}` : ""),
                            size: c.Size,
                            cid: l,
                            type: SS(c)
                        };
                        return c.Mode && (f.mode = parseInt(c.Mode, 8)), c.Mtime !== void 0 && c.Mtime !== null && (f.mtime = {
                            secs: c.Mtime
                        }, c.MtimeNsecs !== void 0 && c.MtimeNsecs !== null && (f.mtime.nsecs = c.MtimeNsecs)), f;
                    }
                    let a = await e.post("ls", {
                        signal: s.signal,
                        searchParams: qS({
                            arg: o,
                            ...s
                        }),
                        headers: s.headers
                    });
                    for await (let c2 of a.ndjson()){
                        if (c2 = c2.Objects, !c2) throw new Error("expected .Objects in results");
                        if (c2 = c2[0], !c2) throw new Error("expected one array in results.Objects");
                        let l = c2.Links;
                        if (!Array.isArray(l)) throw new Error("expected one array in results.Objects[0].Links");
                        if (!l.length) {
                            yield i(c2);
                            return;
                        }
                        yield* l.map(i);
                    }
                }
                return t;
            });
            function SS(e) {
                switch(e.Type){
                    case 1:
                    case 5:
                        return "dir";
                    case 2:
                        return "file";
                    default:
                        return "file";
                }
            }
        });
        var Xh = u((yT, Kh)=>{
            var ES = I(), vS = h(), PS = p();
            Kh.exports = vS((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("dns", {
                        signal: t.signal,
                        searchParams: PS(t),
                        headers: t.headers
                    });
                    return ES(await n.json());
                }
                return r;
            });
        });
        var Qh = u((bT, Zh)=>{
            var TS = I(), CS = h(), AS = p();
            Zh.exports = CS((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("name/publish", {
                        signal: n.signal,
                        searchParams: AS({
                            arg: `${t}`,
                            ...n
                        }),
                        headers: n.headers
                    });
                    return TS(await s.json());
                }
                return r;
            });
        });
        var ep = u((wT, Yh)=>{
            var jS = h(), BS = p();
            Yh.exports = jS((e)=>{
                async function* r(t, n = {
                }) {
                    let s = await e.post("name/resolve", {
                        signal: n.signal,
                        searchParams: BS({
                            arg: t,
                            stream: !0,
                            ...n
                        }),
                        headers: n.headers
                    });
                    for await (let o of s.ndjson())yield o.Path;
                }
                return r;
            });
        });
        var tp = u((qT, rp)=>{
            var US = I(), kS = h(), _S = p();
            rp.exports = kS((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("name/pubsub/cancel", {
                        signal: n.signal,
                        searchParams: _S({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    });
                    return US(await s.json());
                }
                return r;
            });
        });
        var sp = u((xT, np)=>{
            var NS = I(), IS = h(), DS = p();
            np.exports = IS((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("name/pubsub/state", {
                        signal: t.signal,
                        searchParams: DS(t),
                        headers: t.headers
                    });
                    return NS(await n.json());
                }
                return r;
            });
        });
        var ip = u((ST, op)=>{
            var OS = h(), LS = p();
            op.exports = OS((e)=>{
                async function r(t = {
                }) {
                    return (await (await e.post("name/pubsub/subs", {
                        signal: t.signal,
                        searchParams: LS(t),
                        headers: t.headers
                    })).json()).Strings || [];
                }
                return r;
            });
        });
        var cp = u((ET, ap)=>{
            ap.exports = (e)=>({
                    cancel: tp()(e),
                    state: sp()(e),
                    subs: ip()(e)
                })
            ;
        });
        var lp = u((vT, up)=>{
            up.exports = (e)=>({
                    publish: Qh()(e),
                    resolve: ep()(e),
                    pubsub: cp()(e)
                })
            ;
        });
        var dp = u((PT, fp)=>{
            var { CID: $S  } = (E(), P), RS = h(), zS = p();
            fp.exports = RS((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("object/data", {
                        signal: n.signal,
                        searchParams: zS({
                            arg: `${t instanceof Uint8Array ? $S.decode(t) : t}`,
                            ...n
                        }),
                        headers: n.headers
                    })).arrayBuffer();
                    return new Uint8Array(o, 0, o.byteLength);
                }
                return r;
            });
        });
        var mp = u((TT, pp)=>{
            var { CID: hp  } = (E(), P), FS = h(), MS = p(), { fromString: HS  } = (sr(), nr);
            pp.exports = FS((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("object/get", {
                        signal: n.signal,
                        searchParams: MS({
                            arg: `${t instanceof Uint8Array ? hp.decode(t) : t}`,
                            dataEncoding: "base64",
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return {
                        Data: HS(o.Data, "base64pad"),
                        Links: (o.Links || []).map((i)=>({
                                Name: i.Name,
                                Hash: hp.parse(i.Hash),
                                Tsize: i.Size
                            })
                        )
                    };
                }
                return r;
            });
        });
        var bp = u((CT, yp)=>{
            var { CID: gp  } = (E(), P), VS = h(), WS = p();
            yp.exports = VS((e)=>{
                async function r(t, n = {
                }) {
                    return ((await (await e.post("object/links", {
                        signal: n.signal,
                        searchParams: WS({
                            arg: `${t instanceof Uint8Array ? gp.decode(t) : t}`,
                            ...n
                        }),
                        headers: n.headers
                    })).json()).Links || []).map((i)=>({
                            Name: i.Name,
                            Tsize: i.Size,
                            Hash: gp.parse(i.Hash)
                        })
                    );
                }
                return r;
            });
        });
        var qp = u((AT, wp)=>{
            var { CID: GS  } = (E(), P), JS = h(), KS = p();
            wp.exports = JS((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("object/new", {
                        signal: t.signal,
                        searchParams: KS({
                            arg: t.template,
                            ...t
                        }),
                        headers: t.headers
                    }), { Hash: s  } = await n.json();
                    return GS.parse(s);
                }
                return r;
            });
        });
        var Sp = u((jT, xp)=>{
            var { CID: XS  } = (E(), P), ZS = h(), QS = p();
            xp.exports = ZS((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = await e.post("object/patch/add-link", {
                        signal: s.signal,
                        searchParams: QS({
                            arg: [
                                `${t}`,
                                n.Name || n.name || "",
                                (n.Hash || n.cid || "").toString() || null
                            ],
                            ...s
                        }),
                        headers: s.headers
                    }), { Hash: i  } = await o.json();
                    return XS.parse(i);
                }
                return r;
            });
        });
        var vp = u((BT, Ep)=>{
            var { CID: YS  } = (E(), P), e6 = qe(), r6 = h(), t6 = p(), n6 = xe(), { AbortController: s6  } = J();
            Ep.exports = r6((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = new s6, i = n6(o.signal, s.signal), a = await e.post("object/patch/append-data", {
                        signal: i,
                        searchParams: t6({
                            arg: `${t}`,
                            ...s
                        }),
                        ...await e6(n, o, s.headers)
                    }), { Hash: c  } = await a.json();
                    return YS.parse(c);
                }
                return r;
            });
        });
        var Tp = u((UT, Pp)=>{
            var { CID: o6  } = (E(), P), i6 = h(), a6 = p();
            Pp.exports = i6((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = await e.post("object/patch/rm-link", {
                        signal: s.signal,
                        searchParams: a6({
                            arg: [
                                `${t}`,
                                n.Name || n.name || null
                            ],
                            ...s
                        }),
                        headers: s.headers
                    }), { Hash: i  } = await o.json();
                    return o6.parse(i);
                }
                return r;
            });
        });
        var Ap = u((kT, Cp)=>{
            var { CID: c6  } = (E(), P), u6 = qe(), l6 = h(), f6 = p(), d6 = xe(), { AbortController: h6  } = J();
            Cp.exports = l6((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = new h6, i = d6(o.signal, s.signal), a = await e.post("object/patch/set-data", {
                        signal: i,
                        searchParams: f6({
                            arg: [
                                `${t}`
                            ],
                            ...s
                        }),
                        ...await u6(n, o, s.headers)
                    }), { Hash: c  } = await a.json();
                    return c6.parse(c);
                }
                return r;
            });
        });
        var Bp = u((_T, jp)=>{
            jp.exports = (e)=>({
                    addLink: Sp()(e),
                    appendData: vp()(e),
                    rmLink: Tp()(e),
                    setData: Ap()(e)
                })
            ;
        });
        var kp = u((NT, Up)=>{
            var p6 = h();
            Up.exports = (e, r)=>p6((n)=>{
                    let s = Ls()(e, r);
                    async function o(i, a = {
                    }) {
                        return s(i, {
                            ...a,
                            format: "dag-pb",
                            hashAlg: "sha2-256",
                            version: 0
                        });
                    }
                    return o;
                })(r)
            ;
        });
        var Np = u((IT, _p)=>{
            var { CID: m6  } = (E(), P), g6 = h(), y6 = p();
            _p.exports = g6((e)=>{
                async function r(t, n = {
                }) {
                    let o = await (await e.post("object/stat", {
                        signal: n.signal,
                        searchParams: y6({
                            arg: `${t}`,
                            ...n
                        }),
                        headers: n.headers
                    })).json();
                    return {
                        ...o,
                        Hash: m6.parse(o.Hash)
                    };
                }
                return r;
            });
        });
        var Dp = u((DT, Ip)=>{
            Ip.exports = (e, r)=>({
                    data: dp()(r),
                    get: mp()(r),
                    links: bp()(r),
                    new: qp()(r),
                    patch: Bp()(r),
                    put: kp()(e, r),
                    stat: Np()(r)
                })
            ;
        });
        var Lp = u((OT, Op)=>{
            var b6 = Lt(), Fs = p(), Ne = class {
                constructor(r){
                    this.client = new b6(r);
                }
                static encodeEndpoint(r) {
                    let t = String(r);
                    if (t === "undefined") throw Error("endpoint is required");
                    return t[t.length - 1] === "/" ? t.slice(0, -1) : t;
                }
                static decodeRemoteService(r) {
                    return {
                        service: r.Service,
                        endpoint: new URL(r.ApiEndpoint),
                        ...r.Stat && {
                            stat: Ne.decodeStat(r.Stat)
                        }
                    };
                }
                static decodeStat(r) {
                    switch(r.Status){
                        case "valid":
                            {
                                let { Pinning: t , Pinned: n , Queued: s , Failed: o  } = r.PinCount;
                                return {
                                    status: "valid",
                                    pinCount: {
                                        queued: s,
                                        pinning: t,
                                        pinned: n,
                                        failed: o
                                    }
                                };
                            }
                        case "invalid":
                            return {
                                status: "invalid"
                            };
                        default:
                            return {
                                status: r.Status
                            };
                    }
                }
            };
            Ne.prototype.add = async function(r, t) {
                let { endpoint: n , key: s , headers: o , timeout: i , signal: a  } = t;
                await this.client.post("pin/remote/service/add", {
                    timeout: i,
                    signal: a,
                    searchParams: Fs({
                        arg: [
                            r,
                            Ne.encodeEndpoint(n),
                            s
                        ]
                    }),
                    headers: o
                });
            };
            Ne.prototype.rm = async function(r, t = {
            }) {
                await this.client.post("pin/remote/service/rm", {
                    signal: t.signal,
                    headers: t.headers,
                    searchParams: Fs({
                        arg: r
                    })
                });
            };
            Ne.prototype.ls = async function(r = {
            }) {
                let { stat: t , headers: n , timeout: s , signal: o  } = r, i = await this.client.post("pin/remote/service/ls", {
                    timeout: s,
                    signal: o,
                    headers: n,
                    searchParams: t === !0 ? Fs({
                        stat: t
                    }) : void 0
                }), { RemoteServices: a  } = await i.json();
                return a.map(Ne.decodeRemoteService);
            };
            Op.exports = Ne;
        });
        var Vp = u((LT, Hp)=>{
            var { CID: $p  } = (E(), P), w6 = Lt(), q6 = Lp(), Rp = p(), Sr = class {
                constructor(r){
                    this.client = new w6(r), this.service = new q6(r);
                }
            };
            Sr.prototype.add = async function(r, { timeout: t , signal: n , headers: s , ...o }) {
                let i = await this.client.post("pin/remote/add", {
                    timeout: t,
                    signal: n,
                    headers: s,
                    searchParams: x6({
                        cid: r,
                        ...o
                    })
                });
                return zp(await i.json());
            };
            Sr.prototype.ls = async function*({ timeout: r , signal: t , headers: n , ...s }) {
                let o = await this.client.post("pin/remote/ls", {
                    timeout: r,
                    signal: t,
                    headers: n,
                    searchParams: Ms(s)
                });
                for await (let i of o.ndjson())yield zp(i);
            };
            Sr.prototype.rm = async function({ timeout: r , signal: t , headers: n , ...s }) {
                await this.client.post("pin/remote/rm", {
                    timeout: r,
                    signal: t,
                    headers: n,
                    searchParams: Ms({
                        ...s,
                        all: !1
                    })
                });
            };
            Sr.prototype.rmAll = async function({ timeout: e , signal: r , headers: t , ...n }) {
                await this.client.post("pin/remote/rm", {
                    timeout: e,
                    signal: r,
                    headers: t,
                    searchParams: Ms({
                        ...n,
                        all: !0
                    })
                });
            };
            var zp = ({ Name: e , Status: r , Cid: t  })=>({
                    cid: $p.parse(t),
                    name: e,
                    status: r
                })
            , Fp = (e)=>{
                if (typeof e == "string" && e !== "") return e;
                throw new TypeError("service name must be passed");
            }, Mp = (e)=>{
                if ($p.asCID(e)) return e.toString();
                throw new TypeError(`CID instance expected instead of ${typeof e}`);
            }, Ms = ({ service: e , cid: r , name: t , status: n , all: s  })=>{
                let o = Rp({
                    service: Fp(e),
                    name: t,
                    force: s ? !0 : void 0
                });
                if (r) for (let i of r)o.append("cid", Mp(i));
                if (n) for (let i3 of n)o.append("status", i3);
                return o;
            }, x6 = ({ cid: e , service: r , background: t , name: n , origins: s  })=>{
                let o = Rp({
                    arg: Mp(e),
                    service: Fp(r),
                    name: n,
                    background: t ? !0 : void 0
                });
                if (s) for (let i of s)o.append("origin", i.toString());
                return o;
            };
            Hp.exports = Sr;
        });
        var Vs = u(($T, Wp)=>{
            var Jr = $t(), { CID: Hs  } = (E(), P);
            async function* S6(e) {
                if (e == null) throw Jr(new Error(`Unexpected input: ${e}`), "ERR_UNEXPECTED_INPUT");
                let r = Hs.asCID(e);
                if (r) {
                    yield Se({
                        cid: r
                    });
                    return;
                }
                if (e instanceof String || typeof e == "string") {
                    yield Se({
                        path: e
                    });
                    return;
                }
                if (e.cid != null || e.path != null) return yield Se(e);
                if (Symbol.iterator in e) {
                    let t = e[Symbol.iterator](), n = t.next();
                    if (n.done) return t;
                    if (Hs.asCID(n.value) || n.value instanceof String || typeof n.value == "string") {
                        yield Se({
                            cid: n.value
                        });
                        for (let s of t)yield Se({
                            cid: s
                        });
                        return;
                    }
                    if (n.value.cid != null || n.value.path != null) {
                        yield Se(n.value);
                        for (let s of t)yield Se(s);
                        return;
                    }
                    throw Jr(new Error("Unexpected input: " + typeof e), "ERR_UNEXPECTED_INPUT");
                }
                if (Symbol.asyncIterator in e) {
                    let t = e[Symbol.asyncIterator](), n = await t.next();
                    if (n.done) return t;
                    if (Hs.asCID(n.value) || n.value instanceof String || typeof n.value == "string") {
                        yield Se({
                            cid: n.value
                        });
                        for await (let s of t)yield Se({
                            cid: s
                        });
                        return;
                    }
                    if (n.value.cid != null || n.value.path != null) {
                        yield Se(n.value);
                        for await (let s of t)yield Se(s);
                        return;
                    }
                    throw Jr(new Error("Unexpected input: " + typeof e), "ERR_UNEXPECTED_INPUT");
                }
                throw Jr(new Error("Unexpected input: " + typeof e), "ERR_UNEXPECTED_INPUT");
            }
            function Se(e) {
                let r = e.cid || `${e.path}`;
                if (!r) throw Jr(new Error("Unexpected input: Please path either a CID or an IPFS path"), "ERR_UNEXPECTED_INPUT");
                let t = {
                    path: r,
                    recursive: e.recursive !== !1
                };
                return e.metadata != null && (t.metadata = e.metadata), t;
            }
            Wp.exports = {
                normaliseInput: S6
            };
        });
        var Ws = u((RT, Jp)=>{
            var { CID: Gp  } = (E(), P), E6 = h(), { normaliseInput: v6  } = Vs(), P6 = p();
            Jp.exports = E6((e)=>{
                async function* r(t, n = {
                }) {
                    for await (let { path: s , recursive: o , metadata: i  } of v6(t)){
                        let a = await e.post("pin/add", {
                            signal: n.signal,
                            searchParams: P6({
                                ...n,
                                arg: s,
                                recursive: o,
                                metadata: i ? JSON.stringify(i) : void 0,
                                stream: !0
                            }),
                            headers: n.headers
                        });
                        for await (let c of a.ndjson()){
                            if (c.Pins) {
                                for (let l of c.Pins)yield Gp.parse(l);
                                continue;
                            }
                            yield Gp.parse(c);
                        }
                    }
                }
                return r;
            });
        });
        var Xp = u((zT, Kp)=>{
            var T6 = Ws(), C6 = Gr(), A6 = h();
            Kp.exports = (e)=>{
                let r = T6(e);
                return A6(()=>{
                    async function t(n, s = {
                    }) {
                        return C6(r([
                            {
                                path: n,
                                ...s
                            }
                        ], s));
                    }
                    return t;
                })(e);
            };
        });
        var Yp = u((FT, Qp)=>{
            var { CID: j6  } = (E(), P), B6 = h(), U6 = p();
            function Zp(e, r, t) {
                let n = {
                    type: e,
                    cid: j6.parse(r)
                };
                return t && (n.metadata = t), n;
            }
            Qp.exports = B6((e)=>{
                async function* r(t = {
                }) {
                    let n = [];
                    t.paths && (n = Array.isArray(t.paths) ? t.paths : [
                        t.paths
                    ]);
                    let s = await e.post("pin/ls", {
                        signal: t.signal,
                        searchParams: U6({
                            ...t,
                            arg: n.map((o)=>`${o}`
                            ),
                            stream: !0
                        }),
                        headers: t.headers
                    });
                    for await (let o3 of s.ndjson()){
                        if (o3.Keys) {
                            for (let i of Object.keys(o3.Keys))yield Zp(o3.Keys[i].Type, i, o3.Keys[i].Metadata);
                            return;
                        }
                        yield Zp(o3.Type, o3.Cid, o3.Metadata);
                    }
                }
                return r;
            });
        });
        var Gs = u((MT, rm)=>{
            var { CID: em  } = (E(), P), k6 = h(), { normaliseInput: _6  } = Vs(), N6 = p();
            rm.exports = k6((e)=>{
                async function* r(t, n = {
                }) {
                    for await (let { path: s , recursive: o  } of _6(t)){
                        let i = new URLSearchParams(n.searchParams);
                        i.append("arg", `${s}`), o != null && i.set("recursive", String(o));
                        let a = await e.post("pin/rm", {
                            signal: n.signal,
                            headers: n.headers,
                            searchParams: N6({
                                ...n,
                                arg: `${s}`,
                                recursive: o
                            })
                        });
                        for await (let c of a.ndjson()){
                            if (c.Pins) {
                                yield* c.Pins.map((l)=>em.parse(l)
                                );
                                continue;
                            }
                            yield em.parse(c);
                        }
                    }
                }
                return r;
            });
        });
        var nm = u((HT, tm)=>{
            var I6 = Gs(), D6 = Gr(), O6 = h();
            tm.exports = (e)=>{
                let r = I6(e);
                return O6(()=>{
                    async function t(n, s = {
                    }) {
                        return D6(r([
                            {
                                path: n,
                                ...s
                            }
                        ], s));
                    }
                    return t;
                })(e);
            };
        });
        var om = u((VT, sm)=>{
            var L6 = Vp();
            sm.exports = (e)=>({
                    add: Xp()(e),
                    addAll: Ws()(e),
                    ls: Yp()(e),
                    rm: nm()(e),
                    rmAll: Gs()(e),
                    remote: new L6(e)
                })
            ;
        });
        var am = u((WT, im)=>{
            var $6 = I(), R6 = h(), z6 = p();
            im.exports = R6((e)=>{
                async function* r(t, n = {
                }) {
                    yield* (await e.post("ping", {
                        signal: n.signal,
                        searchParams: z6({
                            arg: `${t}`,
                            ...n
                        }),
                        headers: n.headers,
                        transform: $6
                    })).ndjson();
                }
                return r;
            });
        });
        var lm = u((GT, um)=>{
            var { AbortController: F6  } = J(), cm = class {
                constructor(){
                    this._subs = new Map;
                }
                subscribe(r, t, n) {
                    let s = this._subs.get(r) || [];
                    if (s.find((i)=>i.handler === t
                    )) throw new Error(`Already subscribed to ${r} with this handler`);
                    let o = new F6;
                    return this._subs.set(r, [
                        {
                            handler: t,
                            controller: o
                        }
                    ].concat(s)), n && n.addEventListener("abort", ()=>this.unsubscribe(r, t)
                    ), o.signal;
                }
                unsubscribe(r, t) {
                    let n = this._subs.get(r) || [], s;
                    t ? (this._subs.set(r, n.filter((o)=>o.handler !== t
                    )), s = n.filter((o)=>o.handler === t
                    )) : (this._subs.set(r, []), s = n), (this._subs.get(r) || []).length || this._subs.delete(r), s.forEach((o)=>o.controller.abort()
                    );
                }
            };
            um.exports = cm;
        });
        var dm = u((JT, fm)=>{
            var M6 = h(), H6 = p();
            fm.exports = M6((e)=>{
                async function r(t = {
                }) {
                    let { Strings: n  } = await (await e.post("pubsub/ls", {
                        signal: t.signal,
                        searchParams: H6(t),
                        headers: t.headers
                    })).json();
                    return n || [];
                }
                return r;
            });
        });
        var pm = u((KT, hm)=>{
            var V6 = h(), W6 = p();
            hm.exports = V6((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("pubsub/peers", {
                        signal: n.signal,
                        searchParams: W6({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Strings: o  } = await s.json();
                    return o || [];
                }
                return r;
            });
        });
        var gm = u((XT, mm)=>{
            var G6 = h(), J6 = p(), K6 = qe(), X6 = xe(), { AbortController: Z6  } = J();
            mm.exports = G6((e)=>{
                async function r(t, n, s = {
                }) {
                    let o = J6({
                        arg: t,
                        ...s
                    }), i = new Z6, a = X6(i.signal, s.signal);
                    await (await e.post("pubsub/pub", {
                        signal: a,
                        searchParams: o,
                        ...await K6(n, i, s.headers)
                    })).text();
                }
                return r;
            });
        });
        var bm = u((ZT, ym)=>{
            var { fromString: Js  } = (sr(), nr), { toString: Q6  } = ($e(), Le), Y6 = ds()("ipfs-http-client:pubsub:subscribe"), e8 = h(), r8 = p();
            ym.exports = (e, r)=>e8((t)=>{
                    async function n(s, o, i = {
                    }) {
                        i.signal = r.subscribe(s, o, i.signal);
                        let a, c, l = new Promise((m, x)=>{
                            a = m, c = x;
                        }), f = setTimeout(()=>a()
                        , 1000);
                        return t.post("pubsub/sub", {
                            signal: i.signal,
                            searchParams: r8({
                                arg: s,
                                ...i
                            }),
                            headers: i.headers
                        }).catch((m)=>{
                            r.unsubscribe(s, o), c(m);
                        }).then((m)=>{
                            clearTimeout(f), !!m && (t8(m, {
                                onMessage: o,
                                onEnd: ()=>r.unsubscribe(s, o)
                                ,
                                onError: i.onError
                            }), a());
                        }), l;
                    }
                    return n;
                })(e)
            ;
            async function t8(e, { onMessage: r , onEnd: t , onError: n  }) {
                n = n || Y6;
                try {
                    for await (let s of e.ndjson())try {
                        if (!s.from) continue;
                        r({
                            from: Q6(Js(s.from, "base64pad"), "base58btc"),
                            data: Js(s.data, "base64pad"),
                            seqno: Js(s.seqno, "base64pad"),
                            topicIDs: s.topicIDs
                        });
                    } catch (o) {
                        o.message = `Failed to parse pubsub message: ${o.message}`, n(o, !1, s);
                    }
                } catch (s) {
                    n8(s) || n(s, !0);
                } finally{
                    t();
                }
            }
            var n8 = (e)=>{
                switch(e.type){
                    case "aborted":
                        return !0;
                    case "abort":
                        return !0;
                    default:
                        return e.name === "AbortError";
                }
            };
        });
        var qm = u((QT, wm)=>{
            wm.exports = (e, r)=>{
                async function t(n, s) {
                    r.unsubscribe(n, s);
                }
                return t;
            };
        });
        var Sm = u((YT, xm)=>{
            var s8 = lm();
            xm.exports = (e)=>{
                let r = new s8;
                return {
                    ls: dm()(e),
                    peers: pm()(e),
                    publish: gm()(e),
                    subscribe: bm()(e, r),
                    unsubscribe: qm()(e, r)
                };
            };
        });
        var vm = u((eC, Em)=>{
            var o8 = I(), i8 = h(), a8 = p();
            Em.exports = i8((e)=>{
                async function* r(t = {
                }) {
                    yield* (await e.post("refs/local", {
                        signal: t.signal,
                        transform: o8,
                        searchParams: a8(t),
                        headers: t.headers
                    })).ndjson();
                }
                return r;
            });
        });
        var Tm = u((rC, Pm)=>{
            var { CID: c8  } = (E(), P), u8 = I(), l8 = h(), f8 = p();
            Pm.exports = l8((e, r)=>Object.assign(async function*(n, s = {
                }) {
                    let o = Array.isArray(n) ? n : [
                        n
                    ];
                    yield* (await e.post("refs", {
                        signal: s.signal,
                        searchParams: f8({
                            arg: o.map((a)=>`${a instanceof Uint8Array ? c8.decode(a) : a}`
                            ),
                            ...s
                        }),
                        headers: s.headers,
                        transform: u8
                    })).ndjson();
                }, {
                    local: vm()(r)
                })
            );
        });
        var Am = u((tC, Cm)=>{
            var { CID: d8  } = (E(), P), h8 = h(), p8 = p();
            Cm.exports = h8((e)=>{
                async function* r(t = {
                }) {
                    yield* (await e.post("repo/gc", {
                        signal: t.signal,
                        searchParams: p8(t),
                        headers: t.headers,
                        transform: (s)=>({
                                err: s.Error ? new Error(s.Error) : null,
                                cid: (s.Key || {
                                })["/"] ? d8.parse(s.Key["/"]) : null
                            })
                    })).ndjson();
                }
                return r;
            });
        });
        var Ks = u((nC, jm)=>{
            var m8 = h(), g8 = p();
            jm.exports = m8((e)=>{
                async function r(t = {
                }) {
                    let s = await (await e.post("repo/stat", {
                        signal: t.signal,
                        searchParams: g8(t),
                        headers: t.headers
                    })).json();
                    return {
                        numObjects: BigInt(s.NumObjects),
                        repoSize: BigInt(s.RepoSize),
                        repoPath: s.RepoPath,
                        version: s.Version,
                        storageMax: BigInt(s.StorageMax)
                    };
                }
                return r;
            });
        });
        var Um = u((sC, Bm)=>{
            var y8 = h(), b8 = p();
            Bm.exports = y8((e)=>{
                async function r(t = {
                }) {
                    return (await (await e.post("repo/version", {
                        signal: t.signal,
                        searchParams: b8(t),
                        headers: t.headers
                    })).json()).Version;
                }
                return r;
            });
        });
        var _m = u((oC, km)=>{
            km.exports = (e)=>({
                    gc: Am()(e),
                    stat: Ks()(e),
                    version: Um()(e)
                })
            ;
        });
        var Im = u((iC, Nm)=>{
            var w8 = h(), q8 = p();
            Nm.exports = w8((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("resolve", {
                        signal: n.signal,
                        searchParams: q8({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Path: o  } = await s.json();
                    return o;
                }
                return r;
            });
        });
        var Om = u((aC, Dm)=>{
            var x8 = h(), S8 = Xe();
            Dm.exports = x8((e)=>async (t = {
                })=>{
                    throw S8(new Error("Not implemented"), "ERR_NOT_IMPLEMENTED");
                }
            );
        });
        var $m = u((cC, Lm)=>{
            var E8 = h(), v8 = p();
            Lm.exports = E8((e)=>{
                async function* r(t = {
                }) {
                    yield* (await e.post("stats/bw", {
                        signal: t.signal,
                        searchParams: v8(t),
                        headers: t.headers,
                        transform: (s)=>({
                                totalIn: BigInt(s.TotalIn),
                                totalOut: BigInt(s.TotalOut),
                                rateIn: parseFloat(s.RateIn),
                                rateOut: parseFloat(s.RateOut)
                            })
                    })).ndjson();
                }
                return r;
            });
        });
        var zm = u((uC, Rm)=>{
            Rm.exports = (e)=>({
                    bitswap: Ds()(e),
                    bw: $m()(e),
                    repo: Ks()(e)
                })
            ;
        });
        var Mm = u((lC, Fm)=>{
            var P8 = h(), T8 = p();
            Fm.exports = P8((e)=>{
                async function r(t = {
                }) {
                    await (await e.post("shutdown", {
                        signal: t.signal,
                        searchParams: T8(t),
                        headers: t.headers
                    })).text();
                }
                return r;
            });
        });
        var Vm = u((fC, Hm)=>{
            var { Multiaddr: C8  } = $(), A8 = h(), j8 = p();
            Hm.exports = A8((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("swarm/addrs", {
                        signal: t.signal,
                        searchParams: j8(t),
                        headers: t.headers
                    }), { Addrs: s  } = await n.json();
                    return Object.keys(s).map((o)=>({
                            id: o,
                            addrs: (s[o] || []).map((i)=>new C8(i)
                            )
                        })
                    );
                }
                return r;
            });
        });
        var Gm = u((dC, Wm)=>{
            var B8 = h(), U8 = p();
            Wm.exports = B8((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("swarm/connect", {
                        signal: n.signal,
                        searchParams: U8({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Strings: o  } = await s.json();
                    return o || [];
                }
                return r;
            });
        });
        var Km = u((hC, Jm)=>{
            var k8 = h(), _8 = p();
            Jm.exports = k8((e)=>{
                async function r(t, n = {
                }) {
                    let s = await e.post("swarm/disconnect", {
                        signal: n.signal,
                        searchParams: _8({
                            arg: t,
                            ...n
                        }),
                        headers: n.headers
                    }), { Strings: o  } = await s.json();
                    return o || [];
                }
                return r;
            });
        });
        var Zm = u((pC, Xm)=>{
            var { Multiaddr: N8  } = $(), I8 = h(), D8 = p();
            Xm.exports = I8((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("swarm/addrs/local", {
                        signal: t.signal,
                        searchParams: D8(t),
                        headers: t.headers
                    }), { Strings: s  } = await n.json();
                    return (s || []).map((o)=>new N8(o)
                    );
                }
                return r;
            });
        });
        var Ym = u((mC, Qm)=>{
            var { Multiaddr: O8  } = $(), L8 = h(), $8 = p();
            Qm.exports = L8((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("swarm/peers", {
                        signal: t.signal,
                        searchParams: $8(t),
                        headers: t.headers
                    }), { Peers: s  } = await n.json();
                    return (s || []).map((o)=>({
                            addr: new O8(o.Addr),
                            peer: o.Peer,
                            muxer: o.Muxer,
                            latency: o.Latency,
                            streams: o.Streams,
                            direction: o.Direction == null ? void 0 : o.Direction === 0 ? "inbound" : "outbound"
                        })
                    );
                }
                return r;
            });
        });
        var rg = u((gC, eg)=>{
            eg.exports = (e)=>({
                    addrs: Vm()(e),
                    connect: Gm()(e),
                    disconnect: Km()(e),
                    localAddrs: Zm()(e),
                    peers: Ym()(e)
                })
            ;
        });
        var ng = u((yC, tg)=>{
            var R8 = I(), z8 = h(), F8 = p();
            tg.exports = z8((e)=>{
                async function r(t = {
                }) {
                    let n = await e.post("version", {
                        signal: t.signal,
                        searchParams: F8(t),
                        headers: t.headers
                    });
                    return R8(await n.json());
                }
                return r;
            });
        });
        var t3 = u((bC, og)=>{
            var { CID: M8  } = (E(), P), { multiaddr: H8  } = $(), V8 = Si(), W8 = ua(), G8 = da(), J8 = ma(), K8 = ba(), X8 = (_a(), ka), Z8 = (Gc(), Wc), { identity: sg  } = (hn(), ct), { bases: Q8 , hashes: Y8 , codecs: e3  } = (gn(), jo);
            function r3(e = {
            }) {
                let r = {
                    name: sg.name,
                    code: sg.code,
                    encode: (l)=>l
                    ,
                    decode: (l)=>l
                }, t = Object.values(Q8);
                (e.ipld && e.ipld.bases ? e.ipld.bases : []).forEach((l)=>t.push(l)
                );
                let n = new K8({
                    bases: t,
                    loadBase: e.ipld && e.ipld.loadBase
                }), s = Object.values(e3);
                [
                    X8,
                    Z8,
                    r
                ].concat(e.ipld && e.ipld.codecs || []).forEach((l)=>s.push(l)
                );
                let o = new G8({
                    codecs: s,
                    loadCodec: e.ipld && e.ipld.loadCodec
                }), i = Object.values(Y8);
                (e.ipld && e.ipld.hashers ? e.ipld.hashers : []).forEach((l)=>i.push(l)
                );
                let a = new J8({
                    hashers: i,
                    loadHasher: e.ipld && e.ipld.loadHasher
                });
                return {
                    add: ef()(e),
                    addAll: Is()(e),
                    bitswap: lf()(e),
                    block: wf()(e),
                    bootstrap: Uf()(e),
                    cat: _f()(e),
                    commands: If()(e),
                    config: Zf()(e),
                    dag: pd()(o, e),
                    dht: jd()(e),
                    diag: Od()(e),
                    dns: $d()(e),
                    files: ph()(e),
                    get: gh()(e),
                    getEndpointConfig: bh()(e),
                    id: zs()(e),
                    isOnline: xh()(e),
                    key: Oh()(e),
                    log: Vh()(e),
                    ls: Jh()(e),
                    mount: Xh()(e),
                    name: lp()(e),
                    object: Dp()(o, e),
                    pin: om()(e),
                    ping: am()(e),
                    pubsub: Sm()(e),
                    refs: Tm()(e),
                    repo: _m()(e),
                    resolve: Im()(e),
                    start: Om()(e),
                    stats: zm()(e),
                    stop: Mm()(e),
                    swarm: rg()(e),
                    version: ng()(e),
                    bases: n,
                    codecs: o,
                    hashers: a
                };
            }
            og.exports = {
                create: r3,
                CID: M8,
                multiaddr: H8,
                globSource: V8,
                urlSource: W8
            };
        });
        return t3();
    })();
    return IpfsHttpClient;
}));
// also need to use RequireJS format because of a seperate reason Parcel.js 2 is jank-AF
module.exports = object.IpfsHttpClient;

});
parcelRequire.register("4piS4", function(module, exports) {
// shim for using process in browser
var $335822a41323a260$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $335822a41323a260$var$cachedSetTimeout;
var $335822a41323a260$var$cachedClearTimeout;
function $335822a41323a260$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $335822a41323a260$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $335822a41323a260$var$cachedSetTimeout = setTimeout;
        else $335822a41323a260$var$cachedSetTimeout = $335822a41323a260$var$defaultSetTimout;
    } catch (e) {
        $335822a41323a260$var$cachedSetTimeout = $335822a41323a260$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $335822a41323a260$var$cachedClearTimeout = clearTimeout;
        else $335822a41323a260$var$cachedClearTimeout = $335822a41323a260$var$defaultClearTimeout;
    } catch (e1) {
        $335822a41323a260$var$cachedClearTimeout = $335822a41323a260$var$defaultClearTimeout;
    }
})();
function $335822a41323a260$var$runTimeout(fun) {
    if ($335822a41323a260$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($335822a41323a260$var$cachedSetTimeout === $335822a41323a260$var$defaultSetTimout || !$335822a41323a260$var$cachedSetTimeout) && setTimeout) {
        $335822a41323a260$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $335822a41323a260$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $335822a41323a260$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $335822a41323a260$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $335822a41323a260$var$runClearTimeout(marker) {
    if ($335822a41323a260$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($335822a41323a260$var$cachedClearTimeout === $335822a41323a260$var$defaultClearTimeout || !$335822a41323a260$var$cachedClearTimeout) && clearTimeout) {
        $335822a41323a260$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $335822a41323a260$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $335822a41323a260$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $335822a41323a260$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $335822a41323a260$var$queue = [];
var $335822a41323a260$var$draining = false;
var $335822a41323a260$var$currentQueue;
var $335822a41323a260$var$queueIndex = -1;
function $335822a41323a260$var$cleanUpNextTick() {
    if (!$335822a41323a260$var$draining || !$335822a41323a260$var$currentQueue) return;
    $335822a41323a260$var$draining = false;
    if ($335822a41323a260$var$currentQueue.length) $335822a41323a260$var$queue = $335822a41323a260$var$currentQueue.concat($335822a41323a260$var$queue);
    else $335822a41323a260$var$queueIndex = -1;
    if ($335822a41323a260$var$queue.length) $335822a41323a260$var$drainQueue();
}
function $335822a41323a260$var$drainQueue() {
    if ($335822a41323a260$var$draining) return;
    var timeout = $335822a41323a260$var$runTimeout($335822a41323a260$var$cleanUpNextTick);
    $335822a41323a260$var$draining = true;
    var len = $335822a41323a260$var$queue.length;
    while(len){
        $335822a41323a260$var$currentQueue = $335822a41323a260$var$queue;
        $335822a41323a260$var$queue = [];
        while(++$335822a41323a260$var$queueIndex < len)if ($335822a41323a260$var$currentQueue) $335822a41323a260$var$currentQueue[$335822a41323a260$var$queueIndex].run();
        $335822a41323a260$var$queueIndex = -1;
        len = $335822a41323a260$var$queue.length;
    }
    $335822a41323a260$var$currentQueue = null;
    $335822a41323a260$var$draining = false;
    $335822a41323a260$var$runClearTimeout(timeout);
}
$335822a41323a260$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $335822a41323a260$var$queue.push(new $335822a41323a260$var$Item(fun, args));
    if ($335822a41323a260$var$queue.length === 1 && !$335822a41323a260$var$draining) $335822a41323a260$var$runTimeout($335822a41323a260$var$drainQueue);
};
// v8 likes predictible objects
function $335822a41323a260$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$335822a41323a260$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$335822a41323a260$var$process.title = 'browser';
$335822a41323a260$var$process.browser = true;
$335822a41323a260$var$process.env = {
};
$335822a41323a260$var$process.argv = [];
$335822a41323a260$var$process.version = ''; // empty string to avoid regexp issues
$335822a41323a260$var$process.versions = {
};
function $335822a41323a260$var$noop() {
}
$335822a41323a260$var$process.on = $335822a41323a260$var$noop;
$335822a41323a260$var$process.addListener = $335822a41323a260$var$noop;
$335822a41323a260$var$process.once = $335822a41323a260$var$noop;
$335822a41323a260$var$process.off = $335822a41323a260$var$noop;
$335822a41323a260$var$process.removeListener = $335822a41323a260$var$noop;
$335822a41323a260$var$process.removeAllListeners = $335822a41323a260$var$noop;
$335822a41323a260$var$process.emit = $335822a41323a260$var$noop;
$335822a41323a260$var$process.prependListener = $335822a41323a260$var$noop;
$335822a41323a260$var$process.prependOnceListener = $335822a41323a260$var$noop;
$335822a41323a260$var$process.listeners = function(name) {
    return [];
};
$335822a41323a260$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$335822a41323a260$var$process.cwd = function() {
    return '/';
};
$335822a41323a260$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$335822a41323a260$var$process.umask = function() {
    return 0;
};

});



parcelRequire("cHJcH");

//# sourceMappingURL=module.js.map
